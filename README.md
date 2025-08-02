# My Portfolio

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
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
├── content/         # Content files (MDX and data)
│   ├── experience/  # Experience/resume content
│   ├── projects/    # Project descriptions
│   └── projects.ts  # Project metadata
└── utils/           # Utility functions
```

## Updating Content

### Projects

To add or update projects, modify the following files:

1. Edit `src/content/projects.ts` to update project metadata:

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
```

2. Create/edit project MDX files in `src/content/projects/` using the same slug:
   - Create a new file: `[project-slug].mdx`
   - Add detailed project information using MDX format

### Experience

Update your professional experience by editing:

1. MDX files in `src/content/experience/`:
   - Each file represents a different role or time period
   - Use markdown formatting for content structure
   - Include sections like:
     - Role and duration
     - Key achievements
     - Technologies used

## Development

The project uses:

- [Next.js](https://nextjs.org/) - React framework
- [MDX](https://mdxjs.com/) - For content management
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [TypeScript](https://www.typescriptlang.org/) - For type safety

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
