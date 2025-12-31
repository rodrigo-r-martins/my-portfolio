interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  achievements: string[];
  skills: string[];
  location?: string;
}

export const experiences: Experience[] = [
  {
    title: "Founding Engineer (Contract)",
    company: "Bubblegum",
    companyUrl: "https://www.usebubblegum.com/",
    period: "Jun 2025 – Nov 2025",
    achievements: [
      "Developed a full-stack SaaS platform converting e-commerce pages into structured, LLM-optimized markdown for AI search and discovery",
      "Engineered Hono/Node.js API integrating OpenAI and Google Gemini for content cleaning, structuring, and enhancement",
      "Implemented asynchronous workflow orchestration (Upstash Workflows) and web scraping (Firecrawl) for reliable, end-to-end content processing",
      "Built modern dashboard with React/TanStack Router (SSR), real-time monitoring (Supabase Realtime), and advanced analytics (GA4, Recharts)",
    ],
    skills: [
      "React",
      "TanStack Router",
      "TypeScript",
      "Zustand",
      "Node.js",
      "Hono",
      "OpenAI API",
      "Google AI SDK",
      "GA4 Integration",
      "PostgreSQL",
      "Upstash",
      "Firecrawl",
      "Google OAuth",
      "Supabase",
      "Vercel",
    ],
    location: "Remote",
  },
  {
    title: "Full Stack Engineer II",
    company: "Because Intelligence",
    companyUrl: "https://www.trybecause.com",
    period: "June 2024 – Dez 2025",
    achievements: [
      "Shipped 100+ bug fixes and high-priority change requests, improving platform stability and reducing QA turnaround time by 40% through tighter feedback loops and root-cause debugging",
      "Led architecture and development of the Shopify Data Integration system, replacing multiple third-party tools with an in-house ingestion + normalization pipeline that improved data accuracy, reduced cost, and enabled new personalization features",
      "Built Grafana dashboards used by Product and Customer Success to monitor ingestion latency, campaign performance, and store health, driving faster issue detection and fewer escalations",
      "Reduced frontend load times by 35% by optimizing rendering paths, eliminating unnecessary re-renders, and improving bundle size and caching strategy",
      "Optimized complex ClickHouse queries and materialized views, improving dashboard and analytics loads by 60% for high-traffic merchants",
      "Enhanced backend ingestion performance by introducing Go-based workers with batched writes and improved retry logic, doubling data processing speed and increasing system reliability",
    ],
    skills: [
      "React",
      "Redux",
      "TypeScript",
      "Python",
      "Flask",
      "Go",
      "PostgreSQL",
      "ClickHouse",
      "Grafana",
      "Docker",
    ],
    location: "Remote",
  },
  {
    title: "Full Stack Engineer I",
    company: "Because Intelligence",
    companyUrl: "https://www.trybecause.com",
    period: "March 2022 – June 2024",
    achievements: [
      "Closed 250+ tickets across frontend, backend, and infrastructure, improving platform stability and velocity while collaborating with Product, CS, and QA to reduce triage time",
      'Delivered high-impact campaign features, including the Auto-Pause System used in 85% of A/B tests, helping merchants avoid overspend and improving campaign accuracy',
      "Redesigned the dynamic Badge Rendering System, improving reliability and reducing rendering issues by 50% across thousands of Shopify storefronts",
      "Built internal features and automations that reduced Customer Success setup tickets by 25%, including configuration tools, safeguards, and data validation flows",
      "Investigated and resolved Shopify API syncing issues during peak demand (BFCM), fixing edge-case pagination, rate-limit handling, and webhook inconsistencies to stabilize merchant onboarding and data freshness",
    ],
    skills: [
      "React",
      "Redux",
      "JavaScript",
      "Python",
      "Flask",
      "PostgreSQL",
      "Shopify APIs",
      "HTML/CSS",
    ],
    location: "Remote",
  },
  {
    title: "Frontend Engineer",
    company: "Because Intelligence",
    companyUrl: "https://www.trybecause.com",
    period: "November 2021 – March 2022",
    achievements: [
      "Joined the team as a frontend specialist - second engineer in to join",
      "Contributed to existing React-based applications while learning the product domain and technical stack",
      "Established foundation for full-stack development",
    ],
    skills: ["React", "JavaScript", "HTML/CSS", "Shopify APIs"],
    location: "Remote",
  },
  {
    title: "Frontend Engineer Intern",
    company: "Customer Discovery",
    period: "April 2021 – July 2021",
    achievements: [
      "Developed a web app using React.js, Node.js, Express.js with focus on modern frontend technologies and user experience",
      "Worked with MongoDB integration and API development to support full-stack application requirements",
    ],
    skills: ["React", "JavaScript", "HTML/CSS", "MongoDB", "Node.js", "Express.js"],
    location: "Remote",
  },
  {
    title: "Lawyer",
    company: "Notary Public (13 Oficio de Notas do Rio de Janeiro)",
    period: "June 2008 – September 2018",
    achievements: [
      "Worked as a lawyer for 10 years",
      "Performed legal research and drafting of legal documents",
      "Provided legal advice to clients",
      "Managed a caseload of 50+ clients, including individuals and businesses",
      "Specialized in real estate law, divorce proceedings, and will processes",
    ],
    skills: ["Legal Research", "Legal Writing", "Client Management"],
  },
];
