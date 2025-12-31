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
      "Built an AI-powered platform to help merchants assess and enhance their product visibility in Large Language Models (LLMs). The project focuses on optimizing product metadata, analyzing visibility metrics, and converting e-commerce pages into structured, LLM-optimized markdown for AI search and discovery to boost discoverability in AI-driven commerce.",
    summary:
      "AI-powered platform to optimize and boost product visibility in LLM-driven commerce.",
    isFeatured: true,
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Grafana", "OpenAI API", "Gemini", "Google OAuth", "Google Analytics 4", "Upstash"],
    demoUrl: "https://youtu.be/lRp6Nd5HLwg?si=R4SoQLi9UbF8LR07"
  },
  {
    title: "AI Personal Assistant Chat Bot",
    slug: "ai-personal-assistant",
    description:
      "Built an intelligent chat widget for my portfolio that uses OpenAI's GPT-4 to answer questions about myself. Features scope validation, rate limiting, and a responsive UI that provides personalized responses based on my portfolio content.",
    summary:
      "AI-powered chat bot that answers questions about my professional background.",
    isFeatured: false,
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Tailwind CSS",
      "React",
    ],
  },
  {
    title: "URL Shortner",
    slug: "url-shortner",
    description: "A full-stack URL shortening service that converts long URLs into short, shareable links. Features cryptographically secure short code generation, duplicate detection to reuse existing short URLs, fast redirects, and a responsive UI. Built with a scalable architecture supporting high traffic with collision handling, health monitoring, and structured logging.",
    summary: "Service that converts long URLs into short links",
    isFeatured: true,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
      "Hashids",
      "TanStack React Query",
      "Redis",
      "JWT"
    ],
    demoUrl: "https://encurt.xyz",
    githubUrl: "https://github.com/rodrigo-r-martins/url-shortner"
  },
  {
    title: "The Career Vault",
    slug: "the-career-vault",
    description: "Built an AI assistant that uses LangChain and ChromaDB to automate job applications. Implemented a RAG pipeline to dynamically tailor resumes and cover letters by matching candidate experience to job descriptions using local LLMs (Ollama/DeepSeek).",
    summary: "AI assistant that automates job applications.",
    isFeatured: false,
    technologies: [
      "Python",
      "LangChain",
      "Ollama",
      "ChromaDB",
    ],
    githubUrl: "https://github.com/rodrigo-r-martins/the-career-vault",
  },
  {
    title: "Shopify Data Integration",
    slug: "shopify-data-integration",
    description:
      "Led the Shopify Data Integration project, where I rebuilt the full ingestion pipeline to make it scalable, reliable, and real-time. The system digested incoming Shopify data on the server and pushed it into AWS SQS, where a fleet of Go workers consumed, validated, and transformed the payloads before loading them into ClickHouse. The database then updated optimized materialized views for fast analytics queries, and a rule-evaluation layer used the freshly processed data to determine which campaigns should appear on storefront pages. This redesign significantly improved performance, stability, and end-to-end visibility across the entire data flow.",
    summary:
      "Created a custom Shopify data integration solution to replace third-party tools.",
    isFeatured: true,
    technologies: [
      "Go",
      "Shopify API",
      "PostgreSQL",
      "Docker",
      "ClickHouse",
    ],
    demoUrl: "https://youtu.be/voDMq-LHmAE?si=Nmt4WtyQBbB9GYTG",
  },
  {
    title: "Product Recommendation",
    slug: "product-recommendation",
    description: "Developed a full-featured product recommendation campaign system at Because. Built the frontend for campaign templates and product selection logic, and implemented scripts to handle user interactions with the campaign widget, including add-to-cart events. Designed backend worker logic to track recommended products, ingest data into ClickHouse, and generate analytics metrics using materialized views for performance monitoring and insights.",
    summary: "Developed a product recommendation campaign system at Because.",
    isFeatured: false,
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Go",
      "ClickHouse",
      "Grafana"
    ],
    demoUrl: "https://youtu.be/kXe4glh3xlQ?si=hod1rgiiSUcz5mLJ",
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
      "Led the full redesign and rebuild of a critical, high-usage feature (the Badge System) that was causing stability issues for major enterprise customers. Researched Shopify API and replaced the old logic with a new solution that resolved the issues and delivered a significant, measurable improvement by increasing the feature's rendering stability on customer sites by 50%.",
    summary: "Fixed 20+ bugs and improved rendering stability by 50%.",
    isFeatured: false,
    technologies: ["React", "TypeScript", "Shopify API", "Node.js", "Go"],
    demoUrl: "https://www.youtube.com/watch?v=voDMq-LHmAE",
  },
  {
    title: "InspirePic",
    slug: "inspirepic",
    description:
      "A Progressive Web Application built with Ionic framework for inspirational content sharing.",
    summary: "A PWA built with Ionic framework for photo lovers.",
    isFeatured: false,
    technologies: ["Ionic", "Angular", "TypeScript", "Firebase", "REST APIs"],
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
  backend: ["Python", "Flask", "Go", "Node.js", "Hono", "Express.js", "REST APIs", "GraphQL", "Grafana", "Upstash", "Firecrawl"],
  database: ["PostgreSQL", "ClickHouse", "MongoDB", "Firebase", "Supabase", "Redis"],
  devOps: ["Docker", "Git", "AWS", "GA4 Integration"],
  ecommerce: ["Shopify API", "Shopify App Store", "Shopify Theme"],
  ai: ["OpenAI API", "Google AI SDK", "LangChain", "Ollama"],
};
