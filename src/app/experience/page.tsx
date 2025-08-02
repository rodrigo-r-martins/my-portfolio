"use client";

import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer II",
    company: "Because",
    period: "June 2024 – Present",
    achievements: [
      "Shipped 100+ bug fixes and change requests, reducing QA turnaround by 40%",
      "Led development of Shopify Data Integration, replacing third-party tools",
      "Built Grafana dashboards for key metrics",
      "Reduced frontend load times by 35% via optimizations",
      "Optimized ClickHouse queries, reducing dashboard load times by 60%",
      "Enhanced backend ingestion with Go workers, doubling detection speed",
    ],
    technologies: [
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
    company: "Because",
    period: "March 2022 – June 2024",
    achievements: [
      "Closed 250+ tickets across frontend and backend",
      'Delivered high-impact features like "auto-pause" used in 85% of A/B tests',
      "Redesigned badge system, improving rendering stability by 40%",
      "Built features reducing CS setup tickets by 25%",
      "Debugged Shopify API syncing issues during peak demand",
    ],
    technologies: [
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
    company: "Because",
    period: "November 2021 – March 2022",
    achievements: [
      "Joined the team as a frontend specialist",
      "Contributed to existing React-based applications",
      "Learned the product domain and technical stack",
      "Established foundation for full-stack development",
    ],
    technologies: ["React", "JavaScript", "HTML/CSS", "Shopify APIs"],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Experience
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          My professional journey and key achievements.
        </p>
      </div>

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="mt-16 space-y-8"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={`${experience.title}-${experience.period}`}
            variants={fadeInUp}
            className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            {/* Timeline connector */}
            {index !== experiences.length - 1 && (
              <div className="absolute bottom-0 left-8 top-full w-0.5 bg-gray-200 dark:bg-gray-800" />
            )}

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              {/* Period */}
              <div className="sm:w-48">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  {experience.period}
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {experience.company}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
