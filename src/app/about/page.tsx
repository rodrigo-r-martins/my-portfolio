"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const funFacts = [
  {
    emoji: "🌎",
    fact: "Based in São Paulo, Brazil",
  },
  {
    emoji: "💻",
    fact: "Started coding at age 15",
  },
  {
    emoji: "📚",
    fact: "Lifelong learner, currently exploring AI/ML",
  },
  {
    emoji: "🎮",
    fact: "Avid gamer and tech enthusiast",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Frontend-Focused Full Stack Engineer passionate about building
            exceptional digital experiences.
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
            <h2>My Story</h2>
            <p>
              I&apos;m a software engineer with a passion for creating elegant
              solutions to complex problems. My journey in tech began with
              simple HTML websites and has evolved into building sophisticated
              full-stack applications that serve thousands of users.
            </p>
            <p>
              At Because, I&apos;ve had the opportunity to work on challenging
              projects that have significantly improved our data analytics and
              e-commerce capabilities. I take pride in writing clean,
              maintainable code and building features that make a real impact on
              user experience.
            </p>
          </motion.section>

          {/* Work Philosophy */}
          <motion.section
            variants={fadeInUp}
            className="prose prose-gray mx-auto dark:prose-invert"
          >
            <h2>Work Philosophy</h2>
            <p>
              I believe in the power of collaboration and continuous learning.
              My approach to development focuses on three key principles:
            </p>
            <ul>
              <li>
                Writing clean, maintainable code that others can easily
                understand and build upon
              </li>
              <li>
                Taking ownership of projects and seeing them through from
                conception to deployment
              </li>
              <li>
                Staying current with industry best practices and emerging
                technologies
              </li>
            </ul>
          </motion.section>

          {/* Tech Focus */}
          <motion.section
            variants={fadeInUp}
            className="prose prose-gray mx-auto dark:prose-invert"
          >
            <h2>Technical Focus</h2>
            <p>
              My expertise lies in modern web technologies, with a particular
              focus on:
            </p>
            <ul>
              <li>Frontend Development: React, TypeScript, Next.js</li>
              <li>Backend Systems: Python, Go, Node.js</li>
              <li>Data & Analytics: PostgreSQL, ClickHouse, Grafana</li>
              <li>DevOps & Tools: Docker, Git, CI/CD</li>
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
