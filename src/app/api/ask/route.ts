import { NextResponse } from "next/server";
import { isInScope } from "@/utils/scope-checker";
import { getAIResponse } from "@/services/openai-client";

const OUT_OF_SCOPE_MESSAGE =
  "That's outside the scope of what I know. Please enter a question related to this Portfolio.";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const question = body?.question?.toString().trim();
    const sessionId = body?.sessionId?.toString();

    if (!question) {
      return NextResponse.json(
        { error: "Missing 'question' in request body." },
        { status: 400 }
      );
    }

    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing 'sessionId' in request body." },
        { status: 400 }
      );
    }

    // Check if question is in scope
    if (!isInScope(question)) {
      return NextResponse.json({
        answer: OUT_OF_SCOPE_MESSAGE,
        outOfScope: true,
      });
    }

    // Get AI response for in-scope questions
    const answer = await getAIResponse(question);

    return NextResponse.json({
      answer,
      outOfScope: false,
    });
  } catch (error) {
    console.error("/api/ask error", error);
    return NextResponse.json(
      { error: "Unexpected error. Please try again later." },
      { status: 500 }
    );
  }
}
