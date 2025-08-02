export interface Project {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Shopify Data Integration',
    slug: 'shopify-data-integration',
    description: 'Replaced third-party tools and tripled analytics pipeline speed by implementing a custom Shopify data integration solution.',
    technologies: ['Python', 'Shopify API', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Observability Dashboards',
    slug: 'observability-dashboards',
    description: 'Built Grafana dashboards enabling Customer Success to self-serve data and monitor key metrics.',
    technologies: ['Grafana', 'ClickHouse', 'SQL'],
  },
  {
    title: 'Badge System Redesign',
    slug: 'badge-system-redesign',
    description: 'Fixed 20+ bugs and improved rendering stability by 40% through a comprehensive redesign of the badge system.',
    technologies: ['React', 'TypeScript', 'CSS'],
  },
  {
    title: 'InspirePic',
    slug: 'inspirepic',
    description: 'A Progressive Web Application built with Ionic framework for inspirational content sharing.',
    technologies: ['Ionic', 'Angular', 'TypeScript', 'PWA'],
    demoUrl: 'https://inspirepic.demo.com',
    githubUrl: 'https://github.com/yourusername/inspirepic',
  },
  {
    title: 'MLDB',
    slug: 'mldb',
    description: 'A comprehensive movie library database system showcasing full-stack development and database design.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js'],
    githubUrl: 'https://github.com/yourusername/mldb',
  },
]; 