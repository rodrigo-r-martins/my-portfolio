import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodrigo Ribeiro Martins - Full Stack Engineer",
  description:
    "Full Stack Engineer with expertise in modern web technologies. Currently working on AI-driven e-commerce solutions.",
  keywords: [
    "Full Stack Engineer",
    "AI-driven e-commerce solutions",
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Ionic",
    "Angular",
    "Python",
    "Flask",
    "Go",
    "Node.js",
    "Express.js",
    "REST APIs",
    "PostgreSQL",
    "ClickHouse",
    "MongoDB",
    "Firebase",
    "Grafana",
    "Docker",
    "Git",
    "AWS",
    "Shopify API",
    "Shopify App Store",
    "Shopify Theme",
    "OpenAI",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-50`}
      >
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
