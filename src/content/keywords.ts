import { aboutContent, funFacts, socialLinks } from "@/content/about";
import { personalProfile } from "@/content/personalProfile";
import { projects, technologiesFields } from "@/content/projects";
import { experiences } from "@/content/experiences";

function buildPortfolioKeywords(): string[] {
  const keywords = new Set<string>();

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
    const s = val.toLowerCase().trim();
    if (!s || stopWords.has(s)) return;
    keywords.add(s);
  };
  const addMany = (vals?: string[]) => vals?.forEach(add);
  const addPhrase = (phrase?: string) => {
    if (!phrase) return;
    add(phrase);
    tokenize(phrase);
  };
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

  // Seed terms
  [
    "rodrigo",
    "ribeiro",
    "martins",
    "rodrigo martins",
    "rodrigo ribeiro martins",
    "portfolio",
    "author",
    "developer",
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
    "full stack",
    "full-stack",
    "software engineer",
    "frontend",
    "backend",
    "devops",
    "ai",
    "openai",
    "rio de janeiro",
    "brazil",
    "vasco da gama",
    "counter-strike",
    "shopify",
    "shopify app store",
    "grafana",
    "clickhouse",
    "postgresql",
    "next.js",
    "nextjs",
  ].forEach(addPhrase);

  // Personal profile
  add(personalProfile.basics.fullName);
  tokenize(personalProfile.basics.fullName);
  tokenize(personalProfile.basics.shortBio);
  tokenize(personalProfile.basics.location);
  addMany(personalProfile.interests.map((s) => s.toLowerCase()));
  addMany(personalProfile.personalFacts.map((s) => s.toLowerCase()));

  // Social links
  socialLinks.forEach((link) => {
    addPhrase(link.name);
    addPhrase(link.description);
    const href = link.href;
    if (href.startsWith("mailto:")) {
      add(href.replace("mailto:", ""));
    } else {
      try {
        const u = new URL(href);
        add(u.hostname);
        tokenize(u.pathname);
      } catch (e) {
        console.error(`Invalid URL: ${href}`);
      }
    }
  });

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

  // Technologies fields (all groups)
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
        console.error(`Invalid URL: ${p.demoUrl}`);
      }
    }
    if (p.githubUrl) {
      try {
        const u = new URL(p.githubUrl);
        tokenize(u.hostname);
        tokenize(u.pathname);
      } catch (e) {
        console.error(`Invalid URL: ${p.githubUrl}`);
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

  return Array.from(keywords).sort();
}

export const portfolioKeywords = buildPortfolioKeywords();
