import { OpenAIEmbeddings } from "@langchain/openai";
import { Document } from "@langchain/core/documents";
import { loadPortfolioDocuments } from "@/utils/document-loader";

/**
 * Simple in-memory vector store implementation
 */
class SimpleVectorStore {
  private documents: Document[] = [];
  private embeddings: number[][] = [];
  private embeddingModel: OpenAIEmbeddings;

  constructor(embeddingModel: OpenAIEmbeddings) {
    this.embeddingModel = embeddingModel;
  }

  async addDocuments(docs: Document[]): Promise<void> {
    this.documents = docs;
    // Generate embeddings for all documents
    const texts = docs.map((doc) => doc.pageContent);
    this.embeddings = await this.embeddingModel.embedDocuments(texts);
    console.log(`[VectorStore] Generated ${this.embeddings.length} embeddings`);
  }

  async similaritySearch(query: string, k: number = 5): Promise<Document[]> {
    // Generate embedding for query
    const queryEmbedding = await this.embeddingModel.embedQuery(query);

    // Calculate cosine similarity with all documents
    const similarities = this.embeddings.map((docEmbedding, index) => ({
      index,
      score: this.cosineSimilarity(queryEmbedding, docEmbedding),
    }));

    // Sort by similarity (highest first) and take top k
    similarities.sort((a, b) => b.score - a.score);
    const topK = similarities.slice(0, k);

    return topK.map((item) => this.documents[item.index]);
  }

  async similaritySearchWithScore(
    query: string,
    k: number = 5
  ): Promise<[Document, number][]> {
    // Generate embedding for query
    const queryEmbedding = await this.embeddingModel.embedQuery(query);

    // Calculate cosine similarity with all documents
    const similarities = this.embeddings.map((docEmbedding, index) => ({
      index,
      score: this.cosineSimilarity(queryEmbedding, docEmbedding),
    }));

    // Sort by similarity (highest first) and take top k
    similarities.sort((a, b) => b.score - a.score);
    const topK = similarities.slice(0, k);

    return topK.map((item) => [this.documents[item.index], item.score]);
  }

  private cosineSimilarity(a: number[], b: number[]): number {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }
}

/**
 * Singleton vector store instance.
 * Cached at module level to avoid re-embedding on every request.
 */
let vectorStoreInstance: SimpleVectorStore | null = null;
let isInitializing = false;
let initializationPromise: Promise<SimpleVectorStore> | null = null;

/**
 * Initializes the vector store with portfolio content embeddings.
 * Uses OpenAI's text-embedding-3-small model for efficient, high-quality embeddings.
 * Implements singleton pattern with lazy initialization for optimal performance.
 */
async function initializeVectorStore(): Promise<SimpleVectorStore> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is not configured. Please set it in your environment variables."
    );
  }

  // Initialize OpenAI embeddings
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: apiKey,
    modelName: "text-embedding-3-small", // Cost-effective and performant
  });

  // Load portfolio documents
  const documents = loadPortfolioDocuments();

  console.log(`[VectorStore] Initializing with ${documents.length} documents...`);

  // Create vector store and add documents
  const vectorStore = new SimpleVectorStore(embeddings);
  await vectorStore.addDocuments(documents);

  console.log("[VectorStore] Initialization complete!");

  return vectorStore;
}

/**
 * Gets the vector store instance, initializing it if necessary.
 * Subsequent calls return the cached instance for fast performance.
 */
export async function getVectorStore(): Promise<SimpleVectorStore> {
  // Return cached instance if available
  if (vectorStoreInstance) {
    return vectorStoreInstance;
  }

  // If already initializing, wait for that promise
  if (isInitializing && initializationPromise) {
    return initializationPromise;
  }

  // Start initialization
  isInitializing = true;
  initializationPromise = initializeVectorStore();

  try {
    vectorStoreInstance = await initializationPromise;
    return vectorStoreInstance;
  } finally {
    isInitializing = false;
    initializationPromise = null;
  }
}

/**
 * Searches for similar documents based on a query.
 * Returns documents with similarity scores.
 * 
 * @param query - The search query
 * @param k - Number of documents to return (default: 5)
 * @returns Array of [Document, score] tuples, where score is similarity (0-1)
 */
export async function searchSimilarDocuments(
  query: string,
  k: number = 5
): Promise<[Document, number][]> {
  const vectorStore = await getVectorStore();
  const results = await vectorStore.similaritySearchWithScore(query, k);
  return results;
}

/**
 * Gets the most relevant document for scope checking.
 * Returns the top match with its similarity score.
 */
export async function getTopMatch(
  query: string
): Promise<{ document: Document; score: number } | null> {
  const results = await searchSimilarDocuments(query, 1);
  
  if (results.length === 0) {
    return null;
  }

  const [document, score] = results[0];
  return { document, score };
}
