"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const technologies = [
  "React",
  "TypeScript",
  "Python",
  "Go",
  "PostgreSQL",
  "ClickHouse",
  "Docker",
  "Grafana",
  "Shopify APIs",
  "Next.js",
  "Tailwind CSS",
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Rodrigo Ribeiro Martins
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Frontend-Focused Full Stack Engineer specializing in building
            exceptional digital experiences. Currently working on data analytics
            and e-commerce solutions.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">Technologies I Work With</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Featured Work</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Some of my recent projects and contributions
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project Cards will be added here */}
          <motion.div
            {...fadeInUp}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-full flex-col">
              <h3 className="text-xl font-semibold">
                Shopify Data Integration
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Replaced third-party tools and tripled analytics pipeline speed
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Python
                </span>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Shopify API
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-full flex-col">
              <h3 className="text-xl font-semibold">
                Observability Dashboards
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Built Grafana dashboards enabling Customer Success to self-serve
                data
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Grafana
                </span>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  ClickHouse
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-full flex-col">
              <h3 className="text-xl font-semibold">Badge System Redesign</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Fixed 20+ bugs and improved rendering stability by 40%
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  React
                </span>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  TypeScript
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
