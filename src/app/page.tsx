"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { projects, technologiesFields } from "@/content/projects";

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
            <span className="bg-gradient-to-r from-silver-tree-600 to-silver-tree-500 bg-clip-text text-transparent">
              Rodrigo Ribeiro Martins
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Full Stack Engineer passionate about building robust products and
            user experiences. Building AI-powered solutions for modern
            e-commerce and analytics.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-silver-tree-600 dark:bg-silver-tree-500 dark:hover:bg-silver-tree-400"
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
            {Object.values(technologiesFields).map((techObject) =>
              techObject.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-full bg-silver-tree-100 px-4 py-2 text-sm font-medium text-silver-tree-800 dark:bg-silver-tree-900 dark:text-silver-tree-200"
                >
                  {tech}
                </motion.span>
              ))
            )}
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
          {projects
            .filter((project) => project.isFeatured)
            .map((project) => (
              <FeaturedProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-silver-tree-600 dark:bg-silver-tree-500 dark:hover:bg-silver-tree-400"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
