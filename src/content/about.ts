import { technologiesFields } from "./projects";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/icons/SocialIcons";
import { ComponentProps } from "react";

export type SocialLink = {
  name: string;
  href: string;
  icon: (props: ComponentProps<"svg">) => JSX.Element;
  description: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/rodrigo-r-martins",
    icon: GitHubIcon,
    description: "Check out my code",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rodrigoribmartins/",
    icon: LinkedInIcon,
    description: "Connect with me professionally",
  },
  {
    name: "Email",
    href: "mailto:rodrigo_rmartins@outlook.com",
    icon: EmailIcon,
    description: "Drop me a line anytime",
  },
];

export const funFacts: { emoji: string; fact: string }[] = [
  {
    emoji: "🇧🇷",
    fact: "Born in Rio de Janeiro, Brazil",
  },
  {
    emoji: "⚖️",
    fact: "Worked as a lawyer for 10 years",
  },
  {
    emoji: "🇺🇸",
    fact: "Moved to the US in 2018. Currently based in Ridgefield, CT",
  },
  {
    emoji: "💻",
    fact: "Started coding in 2019",
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

export const aboutContent: {
  title: string;
  description: string;
  story: {
    title: string;
    paragraphs: string[];
  };
  workPhilosophy: {
    title: string;
    introduction: string;
    principles: string[];
  };
  technicalFocus: {
    title: string;
    introduction: string;
    skills: {
      frontend: string[];
      backend: string[];
      database: string[];
      devOps: string[];
    };
  };
} = {
  title: "About Me",
  description: "Full Stack Engineer passionate about building exceptional digital experiences.",
  story: {
    title: "My Story",
    paragraphs: [
      "I'm a software engineer with a passion for creating elegant solutions to complex problems. My journey in tech began with simple HTML websites and has evolved into building sophisticated full-stack applications that serve thousands of users.",
      "At Because, I've had the opportunity to work on challenging projects that have significantly improved our data analytics and e-commerce capabilities. I take pride in writing clean, maintainable code and building features that make a real impact on user experience.",
    ],
  },
  workPhilosophy: {
    title: "Work Philosophy",
    introduction: "I believe in the power of collaboration and continuous learning. My approach to development focuses on three key principles:",
    principles: [
      "Writing clean, maintainable code that others can easily understand and build upon",
      "Taking ownership of projects and seeing them through from conception to deployment",
      "Staying current with industry best practices and emerging technologies",
    ],
  },
  technicalFocus: {
    title: "Technical Focus",
    introduction: "My expertise lies in modern web technologies, with a particular focus on:",
    skills: {
      frontend: technologiesFields.frontend,
      backend: technologiesFields.backend,
      database: technologiesFields.database,
      devOps: technologiesFields.devOps,
    },
  },
}; 