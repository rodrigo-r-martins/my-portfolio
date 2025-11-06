export interface Project {
  title: string;
  slug: string;
  description: string;
  summary: string;
  isFeatured: boolean;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "AI-Driven Product Visibility Optimization",
    slug: "llm-visibility-optimization",
    description:
      "Building an AI-powered platform to help merchants assess and enhance their product visibility in Large Language Models (LLMs). The project focuses on optimizing product metadata, analyzing visibility metrics, and converting e-commerce pages into structured, LLM-optimized markdown for AI search and discovery to boost discoverability in AI-driven commerce.",
    summary:
      "AI-powered platform to optimize and boost product visibility in LLM-driven commerce.",
    isFeatured: true,
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Grafana", "OpenAI API"],
  },
  {
    title: "AI Personal Assistant Chat Bot",
    slug: "ai-personal-assistant",
    description:
      "Built an intelligent chat widget for my portfolio that uses OpenAI's GPT-4 to answer questions about myself. Features scope validation, rate limiting, and a responsive UI that provides personalized responses based on my portfolio content.",
    summary:
      "AI-powered chat bot that answers questions about my professional background.",
    isFeatured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Tailwind CSS",
      "React",
    ],
  },
  {
    title: "Shopify Data Integration",
    slug: "shopify-data-integration",
    description:
      "Led the development of a full-stack Shopify data integration system, reducing dependency on third-party tools and tripling analytics pipeline speed.",
    summary:
      "Created a custom Shopify data integration solution to replace third-party tools.",
    isFeatured: true,
    technologies: [
      "Go",
      "Python",
      "Shopify API",
      "PostgreSQL",
      "Docker",
      "ClickHouse",
    ],
    demoUrl: "https://apps.shopify.com/because",
  },
  {
    title: "Observability Dashboards",
    slug: "observability-dashboards",
    description:
      "Developed real-time Grafana dashboards for product adoption and user behavior tracking, used by Customer Success and Product teams to monitor feature health and user engagement.",
    summary:
      "Built Grafana dashboards enabling Customer Success to monitor metrics.",
    isFeatured: false,
    technologies: ["Grafana", "ClickHouse", "PostgreSQL"],
  },
  {
    title: "Badge System Redesign",
    slug: "badge-system-redesign",
    description:
      "Redesigned the badges campaign system logic which resolved 20+ long-standing bugs and improved badge rendering stability by 40% across enterprise storefronts.",
    summary: "Fixed 20+ bugs and improved rendering stability by 40%.",
    isFeatured: false,
    technologies: ["React", "TypeScript", "Shopify API", "Node.js"],
    demoUrl: "https://apps.shopify.com/because",
  },
  {
    title: "InspirePic",
    slug: "inspirepic",
    description:
      "A Progressive Web Application built with Ionic framework for inspirational content sharing.",
    summary: "A PWA built with Ionic framework for photo lovers.",
    isFeatured: false,
    technologies: ["Ionic", "Angular", "TypeScript", "Firebase", "REST APIs"],
    demoUrl: "https://inspirepic-ionic.web.app/",
    githubUrl: "https://github.com/rodrigo-r-martins/inspire-pic",
  },
  {
    title: "MLDB",
    slug: "mldb",
    description:
      "A comprehensive movie library database system showcasing full-stack development and database design.",
    summary: "A full-stack movie library database system.",
    isFeatured: false,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/rodrigo-r-martins/MLDB",
  },
];

export const technologiesFields = {
  frontend: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "Ionic",
    "Angular",
  ],
  backend: ["Python", "Flask", "Go", "Node.js", "Hono", "Express.js", "REST APIs"],
  database: ["PostgreSQL", "ClickHouse", "MongoDB", "Firebase", "Grafana", "Upstash"],
  devOps: ["Docker", "Git", "AWS", "GA4 Integration"],
  ecommerce: ["Shopify API", "Shopify App Store", "Shopify Theme"],
  ai: ["OpenAI API", "Google AI SDK"],
};
