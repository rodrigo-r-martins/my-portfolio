# My Portfolio

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone git@github.com:rodrigo-r-martins/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable React components
│   ├── icons/       # SVG icon components
│   └── layout/      # Layout components (Navbar, Footer)
├── content/         # Content and data files
│   ├── about.ts     # About page content and social links
│   └── projects.ts  # Projects data and technologies
└── utils/           # Utility functions
```

## Updating Content

### Projects

To add or update projects, modify `src/content/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    title: "Project Name",
    slug: "project-slug",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    demoUrl: "https://demo.com", // optional
    githubUrl: "https://github.com/...", // optional
  },
  // Add more projects...
];

// Technology fields used across the site
export const technologiesFields = {
  frontend: ["React", "Next.js", ...],
  backend: ["Node.js", "Python", ...],
  database: ["PostgreSQL", "MongoDB", ...],
  devOps: ["Docker", "AWS", ...],
};
```

### About Page Content

Update your personal information and social links by editing `src/content/about.ts`:

1. Personal Information:

   - Story and background
   - Work philosophy
   - Technical focus areas
   - Fun facts

2. Social Links:
   - GitHub, LinkedIn, Email
   - Links and descriptions
   - Social media icons

## Development

The project uses:

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Framer Motion](https://www.framer.com/motion/) - For animations

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
