import { portfolioKeywords } from "@/content/keywords";
import { personalProfile } from "@/content/personalProfile";
import { aboutContent } from "@/content/about";
import { projects, technologiesFields } from "@/content/projects";
import { experiences } from "@/content/experiences";
import { funFacts } from "@/content/about";

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

  // Core portfolio terms
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
  ].forEach(add);

  // Personal profile
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

  // Technologies
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

    [p.demoUrl, p.githubUrl].forEach((url) => {
      if (url) {
        try {
          const u = new URL(url);
          tokenize(u.hostname);
          tokenize(u.pathname);
        } catch (e) {
          console.error("URL parsing error:", e);
        }
      }
    });
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

export function isInScope(question: string): boolean {
  const q = question.toLowerCase();
  const keywords = buildKeywordSet();

  // Direct portfolio references
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

  // Keyword matching
  for (const kw of keywords) {
    if (q.includes(kw)) return true;
  }

  return false;
}
