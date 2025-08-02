"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/components/layout/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I'm always open to new opportunities and interesting projects.
          </p>
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          className="mt-16 grid gap-8"
        >
          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
              >
                <link.icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {link.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {link.description}
                  </div>
                </div>
              </a>
            ))}
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I usually reply within 24 hours. Feel free to reach out through
                any of these channels.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
