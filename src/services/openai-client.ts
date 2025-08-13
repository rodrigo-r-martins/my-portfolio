import OpenAI from "openai";
import { buildKnowledgeBase } from "../utils/knowledge-base";
import { myStory } from "@/content/myStory";

function buildPrompt(knowledge: string): string {
  const SYSTEM_INSTRUCTIONS = `
  You are a helpful assistant embedded in a personal portfolio website. Your task is to answer questions ONLY about the portfolio author, based strictly on the provided context, which is the only source of truth.
  - If the question relates directly or indirectly to the author's background, education, experience, skills, projects, or other portfolio details in the context, provide a concise, accurate answer based on that context.
  - If the question is unrelated or you cannot find relevant information in the context, respond politely with: "That's outside the scope of what I know."
  - If the question is relevant but the exact information is not explicitly stated, try to infer the best possible answer based on the context without making unsupported assumptions.
  - Keep answers concise (2-6 sentences) and friendly. 

  Author context (the only source of truth):
  ${knowledge}

  Author story:
  ${myStory}
`;
  return SYSTEM_INSTRUCTIONS;
}

export async function getAIResponse(question: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return "AI is not configured on this deployment. Please set OPENAI_API_KEY to enable answers.";
  }

  const openai = new OpenAI({ apiKey });
  const knowledge = buildKnowledgeBase();

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.2,
      max_tokens: 200,
      messages: [
        {
          role: "system",
          content: buildPrompt(knowledge),
        },
        { role: "user", content: question },
      ],
    });

    return (
      completion.choices[0]?.message?.content?.trim() ||
      "That's outside the scope of what I know."
    );
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to get AI response");
  }
}
