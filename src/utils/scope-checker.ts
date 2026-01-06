import { getTopMatch } from "@/services/vector-store";

/**
 * Determines if a question is in scope for the portfolio chatbot.
 * Uses semantic search with embeddings to understand question relevance.
 * 
 * Approach:
 * 1. Direct portfolio references (you, your, rodrigo) = always in scope
 * 2. Semantic similarity search against portfolio content
 * 3. Threshold-based relevance scoring (>0.5 = in scope)
 */
export async function isInScope(question: string): Promise<boolean> {
  const q = question.toLowerCase().trim();

  // Fast path: Direct references to portfolio author
  const directReferences = [
    "you ",
    "your ",
    "about you",
    "rodrigo",
    "portfolio",
    "author",
    "yourself",
    "tell me",
  ];

  for (const ref of directReferences) {
    if (q.includes(ref)) {
      return true;
    }
  }

  // Semantic similarity check using vector embeddings
  try {
    const topMatch = await getTopMatch(question);

    if (!topMatch) {
      return false;
    }

    // Similarity score ranges from 0 to 1
    // Higher score = more similar/relevant
    // Threshold of 0.5 balances precision and recall
    const RELEVANCE_THRESHOLD = 0.5;
    const isRelevant = topMatch.score >= RELEVANCE_THRESHOLD;

    console.log(
      `[ScopeChecker] Question: "${question.substring(0, 50)}..."`,
      `\n  Top match type: ${topMatch.document.metadata.type}`,
      `\n  Similarity: ${topMatch.score.toFixed(3)}`,
      `\n  In scope: ${isRelevant}`
    );

    return isRelevant;
  } catch (error) {
    console.error("[ScopeChecker] Error during semantic search:", error);
    // Fallback: If embeddings fail, default to out of scope for safety
    return false;
  }
}
