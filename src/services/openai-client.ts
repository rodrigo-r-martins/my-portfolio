import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { Document } from "@langchain/core/documents";
import { getVectorStore } from "./vector-store";
import { myStory } from "@/content/myStory";

/**
 * Formats documents as a string for prompt context
 */
function formatDocumentsAsString(documents: Document[]): string {
  return documents.map((doc) => doc.pageContent).join("\n\n");
}

/**
 * System prompt template for the portfolio chatbot.
 * Uses retrieved context from vector store for accurate, relevant responses.
 */
const SYSTEM_PROMPT = `You are a helpful assistant embedded in a personal portfolio website. Your task is to answer questions ONLY about the portfolio author, based strictly on the provided context, which is the only source of truth.

Guidelines:
- If the question relates directly or indirectly to the author's background, education, experience, skills, projects, or other portfolio details in the context, provide a concise, accurate answer based on that context.
- If the question is unrelated or you cannot find relevant information in the context, respond politely with: "That's outside the scope of what I know."
- If the question is relevant but the exact information is not explicitly stated, try to infer the best possible answer based on the context without making unsupported assumptions.
- Keep answers concise (2-6 sentences) and friendly.

Author context (retrieved from portfolio):
{context}

Author's full story:
${myStory}`;

/**
 * Generates an AI response using LangChain RAG (Retrieval-Augmented Generation).
 * 
 * Process:
 * 1. Retrieve top 5 most relevant documents from vector store
 * 2. Build prompt with retrieved context
 * 3. Generate response using GPT-4o-mini
 * 
 * @param question - User's question
 * @returns AI-generated answer
 */
export async function getAIResponse(question: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return "AI is not configured on this deployment. Please set OPENAI_API_KEY to enable answers.";
  }

  try {
    // Initialize ChatOpenAI model
    const llm = new ChatOpenAI({
      openAIApiKey: apiKey,
      modelName: "gpt-4o-mini",
      temperature: 0.2,
      maxTokens: 200,
    });

    // Retrieve relevant documents
    const vectorStore = await getVectorStore();
    const relevantDocs = await vectorStore.similaritySearch(question, 5);

    console.log(
      `[RAG] Retrieved ${relevantDocs.length} documents for question: "${question.substring(0, 50)}..."`
    );
    console.log(
      `[RAG] Document types: ${relevantDocs
        .map((d) => d.metadata.type)
        .join(", ")}`
    );

    // Format documents as context string
    const context = formatDocumentsAsString(relevantDocs);

    // Create prompt template with context
    const prompt = ChatPromptTemplate.fromMessages([
      ["system", SYSTEM_PROMPT],
      ["human", "{input}"],
    ]);

    // Create chain with output parser
    const chain = prompt.pipe(llm).pipe(new StringOutputParser());

    // Generate response using RAG chain
    const response = await chain.invoke({
      input: question,
      context: context,
    });

    // Handle different response types
    const answer =
      typeof response === "string"
        ? response.trim()
        : String(response).trim();

    return answer || "That's outside the scope of what I know.";
  } catch (error) {
    console.error("[OpenAI] Error generating response:", error);
    throw new Error("Failed to get AI response");
  }
}
