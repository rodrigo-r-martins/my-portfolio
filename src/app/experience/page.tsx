"use client";

import { motion } from "framer-motion";
import { experiences } from "@/content/experiences";

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
              <div className="absolute bottom-0 left-8 top-full w-0.5 bg-silver-tree-200 dark:bg-silver-tree-800" />
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
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-silver-tree-100 px-2.5 py-0.5 text-xs font-medium text-silver-tree-800 dark:bg-silver-tree-900 dark:text-silver-tree-200"
                    >
                      {skill}
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
