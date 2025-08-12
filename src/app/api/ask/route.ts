import { NextResponse } from "next/server";
import OpenAI from "openai";
import { aboutContent, funFacts } from "@/content/about";
import { personalProfile } from "@/content/personalProfile";
import { projects, technologiesFields } from "@/content/projects";
import { experiences } from "@/content/experiences";
import { portfolioKeywords } from "@/content/keywords";
import { myStory } from "../../../content/myStory";

// Simple in-memory store for tracking out-of-scope questions per IP
// In production, consider using Redis or a database
const outOfScopeTracker = new Map<
  string,
  { count: number; lastReset: number }
>();

const MAX_OUT_OF_SCOPE_QUESTIONS = 3;
const RESET_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

function buildKnowledgeBase(): string {
  const parts: string[] = [];
  parts.push(`Name: Rodrigo Ribeiro Martins`);
  parts.push(`About: ${aboutContent.description}`);
  parts.push(`Story: ${aboutContent.story.paragraphs.join("\n")}`);
  parts.push(
    `Work Philosophy: ${
      aboutContent.workPhilosophy.introduction
    }\n- ${aboutContent.workPhilosophy.principles.join("\n- ")}`
  );
  parts.push(
    `Technical Focus:
    🎨 Frontend: ${aboutContent.technicalFocus.skills.frontend.join(", ")}
    ⚙️ Backend: ${aboutContent.technicalFocus.skills.backend.join(", ")}
    🗄️ Databases: ${aboutContent.technicalFocus.skills.database.join(", ")}
    🚀 DevOps: ${aboutContent.technicalFocus.skills.devOps.join(", ")}
    `
  );
  parts.push(
    "Projects:\n" +
      projects
        .map(
          (p) =>
            `- ${p.title} (${p.slug})\n  Featured: ${
              p.isFeatured
            }\n  Description: ${
              p.description
            }\n  Technologies: ${p.technologies.join(", ")}`
        )
        .join("\n")
  );
  parts.push(
    "Experience:\n" +
      experiences
        .map(
          (e) =>
            `- ${e.title} at ${e.company} (${
              e.period
            })\n  Achievements: ${e.achievements.join(
              ", "
            )}\n  Skills: ${e.skills.join(", ")}`
        )
        .join("\n")
  );
  parts.push(
    "Fun Facts:\n" + funFacts.map((f) => `- ${f.emoji} ${f.fact}`).join("\n")
  );
  parts.push(
    `Profile Basics:\n- Name: ${personalProfile.basics.fullName}\n- Bio: ${personalProfile.basics.shortBio}\n- Location: ${personalProfile.basics.location}`
  );
  parts.push("Interests:\n- " + personalProfile.interests.join("\n- "));
  parts.push(
    "Personal Facts:\n- " + personalProfile.personalFacts.join("\n- ")
  );
  parts.push(
    "Certifications:\n" +
      personalProfile.certification
        .map(
          (c) =>
            `- ${c.title} at ${c.issuer} (${c.issued})\n  Credential ID: ${
              c.credentialId || "N/A"
            }\n  Credential URL: ${c.credentialUrl || "N/A"}`
        )
        .join("\n")
  );
  return parts.join("\n\n");
}

function buildKeywordSet(): Set<string> {
  const keywords = new Set<string>(portfolioKeywords);

  const stopWords = new Set([
    "the",
    "a",
    "an",
    "and",
    "or",
    "but",
    "if",
    "then",
    "else",
    "for",
    "to",
    "of",
    "in",
    "on",
    "at",
    "by",
    "with",
    "about",
    "into",
    "over",
    "from",
    "as",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "it",
    "its",
    "this",
    "that",
    "these",
    "those",
    "i",
    "me",
    "my",
    "you",
    "your",
    "yours",
    "we",
    "our",
    "ours",
    "he",
    "him",
    "his",
    "she",
    "her",
    "hers",
    "they",
    "them",
    "their",
    "theirs",
    "what",
    "when",
    "where",
    "why",
    "how",
    "who",
    "whom",
    "whose",
    "which",
    "will",
    "would",
    "could",
    "should",
    "can",
    "may",
    "might",
    "must",
    "shall",
  ]);
  const shortWhitelist = new Set([
    "ai",
    "go",
    "ui",
    "ux",
    "aws",
    "ci",
    "cd",
    "ml",
  ]);

  const add = (val?: string) => {
    if (!val) return;
    const s = val.toLowerCase();
    if (s && !stopWords.has(s)) keywords.add(s);
  };
  const addMany = (vals?: string[]) => vals?.forEach(add);
  const tokenize = (text?: string) => {
    if (!text) return;
    const tokens = text
      .toLowerCase()
      .split(/[^a-z0-9+.#/-]+/)
      .filter(Boolean)
      .filter((t) => t.length > 2 || shortWhitelist.has(t));
    tokens.forEach((t) => {
      if (!stopWords.has(t)) keywords.add(t);
    });
  };

  // Names and generic portfolio terms
  [
    "rodrigo",
    "ribeiro",
    "martins",
    "rodrigo martins",
    "rodrigo ribeiro martins",
    "portfolio",
    "author",
    "developer",
    "lawyer",
    "engineer",
    "experience",
    "experiences",
    "about",
    "project",
    "projects",
    "fun",
    "facts",
    "skills",
    "technologies",
    "tech",
    "work",
    "because",
    "shopify",
    "grafana",
    "clickhouse",
    "postgresql",
    "nextjs",
    "next.js",
    "brazil",
    "family",
    "interests",
    "you",
    "u",
    "your",
  ].forEach((k) => add(k));

  // Personal profile basics
  add(personalProfile.basics.fullName);
  tokenize(personalProfile.basics.fullName);
  tokenize(personalProfile.basics.shortBio);
  tokenize(personalProfile.basics.location);
  addMany(personalProfile.interests.map((s) => s.toLowerCase()));
  addMany(personalProfile.personalFacts.map((s) => s.toLowerCase()));

  // About content
  tokenize(aboutContent.description);
  tokenize(aboutContent.story.title);
  aboutContent.story.paragraphs.forEach(tokenize);
  tokenize(aboutContent.workPhilosophy.title);
  tokenize(aboutContent.workPhilosophy.introduction);
  addMany(aboutContent.workPhilosophy.principles.map((s) => s.toLowerCase()));
  tokenize(aboutContent.technicalFocus.title);
  tokenize(aboutContent.technicalFocus.introduction);
  addMany(
    aboutContent.technicalFocus.skills.frontend.map((s) => s.toLowerCase())
  );
  addMany(
    aboutContent.technicalFocus.skills.backend.map((s) => s.toLowerCase())
  );
  addMany(
    aboutContent.technicalFocus.skills.database.map((s) => s.toLowerCase())
  );
  addMany(
    aboutContent.technicalFocus.skills.devOps.map((s) => s.toLowerCase())
  );

  // Technologies fields (all categories)
  Object.values(technologiesFields).forEach((arr) =>
    addMany(arr.map((s) => s.toLowerCase()))
  );

  // Projects
  projects.forEach((p) => {
    add(p.slug.toLowerCase());
    tokenize(p.title);
    tokenize(p.description);
    tokenize(p.summary);
    addMany(p.technologies.map((t) => t.toLowerCase()));
    if (p.demoUrl) {
      try {
        const u = new URL(p.demoUrl);
        tokenize(u.hostname);
        tokenize(u.pathname);
      } catch (e) {
        console.error(e);
      }
    }
    if (p.githubUrl) {
      try {
        const u = new URL(p.githubUrl);
        tokenize(u.hostname);
        tokenize(u.pathname);
      } catch (e) {
        console.error(e);
      }
    }
  });

  // Experiences
  experiences.forEach((e) => {
    tokenize(e.company);
    tokenize(e.title);
    tokenize(e.period);
    addMany(e.skills.map((s) => s.toLowerCase()));
    e.achievements.forEach(tokenize);
  });

  // Fun facts
  funFacts.forEach((f) => tokenize(f.fact));

  return keywords;
}

function isInScope(question: string): boolean {
  const q = question.toLowerCase();
  const keywords = buildKeywordSet();
  if (
    q.includes("you ") ||
    q.includes("your ") ||
    q.includes("about you") ||
    q.includes("rodrigo") ||
    q.includes("u") ||
    q.includes("author") ||
    q.includes("portfolio")
  ) {
    return true;
  }
  for (const kw of keywords) {
    if (q.includes(kw)) return true;
  }
  return false;
}

function getClientIP(req: Request): string {
  // Try to get real IP from headers (for deployments behind proxies)
  const forwarded = req.headers.get("x-forwarded-for");
  const realIP = req.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  if (realIP) {
    return realIP;
  }

  // Fallback to a default identifier
  return "unknown";
}

function checkAndUpdateOutOfScopeLimit(clientIP: string): {
  allowed: boolean;
  remaining: number;
} {
  const now = Date.now();
  const tracker = outOfScopeTracker.get(clientIP);

  // Reset if window has passed
  if (!tracker || now - tracker.lastReset > RESET_WINDOW_MS) {
    outOfScopeTracker.set(clientIP, { count: 0, lastReset: now });
    return { allowed: true, remaining: MAX_OUT_OF_SCOPE_QUESTIONS };
  }

  const remaining = MAX_OUT_OF_SCOPE_QUESTIONS - tracker.count;
  return { allowed: remaining > 0, remaining };
}

function incrementOutOfScopeCount(clientIP: string): void {
  const tracker = outOfScopeTracker.get(clientIP);
  if (tracker) {
    tracker.count += 1;
    outOfScopeTracker.set(clientIP, tracker);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const question = body?.question?.toString().trim();

    if (!question) {
      return NextResponse.json(
        { error: "Missing 'question' in request body." },
        { status: 400 }
      );
    }

    const clientIP = getClientIP(req);
    const { allowed, remaining } = checkAndUpdateOutOfScopeLimit(clientIP);

    // If out-of-scope, check rate limit
    if (!isInScope(question)) {
      if (!allowed) {
        return NextResponse.json({
          answer:
            "Chat is disabled due to excessive off-topic questions. Please contact the author directly.",
          remaining: 0,
          disabled: true,
        });
      }

      incrementOutOfScopeCount(clientIP);
      const remainingAfter = remaining - 1;

      return NextResponse.json({
        answer:
          "That's outside the scope of what I know — I'll make sure to pass your question along to the author so he can fill in the details.",
        remaining: remainingAfter,
      });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const knowledge = buildKnowledgeBase();

    if (!apiKey) {
      return NextResponse.json(
        {
          answer:
            "AI is not configured on this deployment. Please set OPENAI_API_KEY to enable answers.",
        },
        { status: 200 }
      );
    }

    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.2,
      max_tokens: 200, // Limit response length to control costs and keep answers concise
      messages: [
        {
          role: "system",
          content: `
You are a helpful assistant embedded in a personal portfolio website. Your task is to answer questions ONLY about the portfolio author, based strictly on the provided context, which is the only source of truth.
- If the question relates directly or indirectly to the author's background, education, experience, skills, projects, or other portfolio details in the context, provide a concise, accurate answer based on that context.
- If the question is unrelated or you cannot find relevant information in the context, respond politely with: "That's outside the scope of what I know — I'll make sure to pass your question along to the author so he can fill in the details."
- If the question is relevant but the exact information is not explicitly stated, try to infer the best possible answer based on the context without making unsupported assumptions.
- Keep answers concise (2-6 sentences) and friendly. 

Author context (the only source of truth):
${knowledge}

Author story:
${myStory}
`,
        },
        { role: "user", content: question },
      ],
    });

    const answer = completion.choices[0]?.message?.content?.trim();

    const res = NextResponse.json({
      answer: answer || "That's outside the scope of what I know.",
    });
    return res;
  } catch (error) {
    console.error("/api/ask error", error);
    return NextResponse.json(
      { error: "Unexpected error. Please try again later." },
      { status: 500 }
    );
  }
}
