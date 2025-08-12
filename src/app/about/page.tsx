"use client";

import { aboutContent, funFacts } from "@/content/about";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {aboutContent.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {aboutContent.description}
          </p>
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          className="mt-16 space-y-12"
        >
          {/* Personal Story */}
          <motion.section
            variants={fadeInUp}
            className="prose prose-gray mx-auto dark:prose-invert"
          >
            <h2>{aboutContent.story.title}</h2>
            {aboutContent.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.section>

          {/* Work Philosophy */}
          <motion.section
            variants={fadeInUp}
            className="prose prose-gray mx-auto dark:prose-invert"
          >
            <h2>{aboutContent.workPhilosophy.title}</h2>
            <p>{aboutContent.workPhilosophy.introduction}</p>
            <ul>
              {aboutContent.workPhilosophy.principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </motion.section>

          {/* Tech Focus */}
          <motion.section
            variants={fadeInUp}
            className="prose prose-gray mx-auto dark:prose-invert"
          >
            <h2>{aboutContent.technicalFocus.title}</h2>
            <p>{aboutContent.technicalFocus.introduction}</p>
            <ul>
              <li>
                Frontend Development:{" "}
                {aboutContent.technicalFocus.skills.frontend.join(", ")}
              </li>
              <li>
                Backend Systems:{" "}
                {aboutContent.technicalFocus.skills.backend.join(", ")}
              </li>
              <li>
                Data & Analytics:{" "}
                {aboutContent.technicalFocus.skills.database.join(", ")}
              </li>
              <li>
                DevOps & Tools:{" "}
                {aboutContent.technicalFocus.skills.devOps.join(", ")}
              </li>
            </ul>
          </motion.section>

          {/* Fun Facts */}
          <motion.section variants={fadeInUp} className="mt-12">
            <h2 className="text-2xl font-bold">Fun Facts</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {funFacts.map((fact) => (
                <div
                  key={fact.fact}
                  className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
                >
                  <span className="text-2xl">{fact.emoji}</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    {fact.fact}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
