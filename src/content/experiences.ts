interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    title: "Founding Engineer (Contract)",
    company: "Bubblegum",
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
    ],
  },
  {
    title: "Founding Engineer",
    company: "Because Intelligence",
    period: "June 2024 – Present",
    achievements: [
      "Shipped 100+ bug fixes and change requests, reducing QA turnaround by 40%",
      "Led development of Shopify Data Integration, replacing third-party tools",
      "Built Grafana dashboards for key metrics",
      "Reduced frontend load times by 35% via optimizations",
      "Optimized ClickHouse queries, reducing dashboard load times by 60%",
      "Enhanced backend ingestion with Go workers, doubling detection speed",
    ],
    skills: [
      "React",
      "TypeScript",
      "Python",
      "Go",
      "PostgreSQL",
      "ClickHouse",
      "Grafana",
      "Docker",
    ],
  },
  {
    title: "Software Engineer I",
    company: "Because Intelligence",
    period: "March 2022 – June 2024",
    achievements: [
      "Closed 250+ tickets across frontend and backend",
      'Delivered high-impact features like "auto-pause" used in 85% of A/B tests',
      "Redesigned badge system, improving rendering stability by 40%",
      "Built features reducing CS setup tickets by 25%",
      "Debugged Shopify API syncing issues during peak demand",
    ],
    skills: [
      "React",
      "JavaScript",
      "Python",
      "Flask",
      "Shopify APIs",
      "HTML/CSS",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Because Intelligence",
    period: "November 2021 – March 2022",
    achievements: [
      "Joined the team as a frontend specialist",
      "Contributed to existing React-based applications",
      "Learned the product domain and technical stack",
      "Established foundation for full-stack development",
    ],
    skills: ["React", "JavaScript", "HTML/CSS", "Shopify APIs"],
  },
  {
    title: "Frontend Engineer",
    company: "Customer Discovery",
    period: "April 2021 – July 2021",
    achievements: [
      "Worked closely with the front-end team to build a responsive web platform",
      "Ensured seamless user experience across both web and mobile devices",
    ],
    skills: ["React", "JavaScript", "HTML/CSS", "MongoDB"],
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
