import { aboutContent, funFacts } from "@/content/about";
import { personalProfile } from "@/content/personalProfile";
import { projects } from "@/content/projects";
import { experiences } from "@/content/experiences";

export function buildKnowledgeBase(): string {
  const parts: string[] = [];

  parts.push(`Name: Rodrigo Ribeiro Martins`);
  parts.push(`About: ${aboutContent.description}`);
  parts.push(`Story: ${aboutContent.story.paragraphs.join("\n")}`);
  parts.push(
    `Work Philosophy: ${
      aboutContent.workPhilosophy.introduction
    }\n- ${aboutContent.workPhilosophy.principles.join("\n- ")}`
  );
  parts.push(
    `Technical Focus:
    🎨 Frontend: ${aboutContent.technicalFocus.skills.frontend.join(", ")}
    ⚙️ Backend: ${aboutContent.technicalFocus.skills.backend.join(", ")}
    🗄️ Databases: ${aboutContent.technicalFocus.skills.database.join(", ")}
    🚀 DevOps: ${aboutContent.technicalFocus.skills.devOps.join(", ")}`
  );
  parts.push(
    "Projects:\n" +
      projects
        .map(
          (p) =>
            `- ${p.title} (${p.slug})\n  Featured: ${
              p.isFeatured
            }\n  Description: ${
              p.description
            }\n  Technologies: ${p.technologies.join(", ")}`
        )
        .join("\n")
  );
  parts.push(
    "Experience:\n" +
      experiences
        .map(
          (e) =>
            `- ${e.title} at ${e.company} (${
              e.period
            })\n  Achievements: ${e.achievements.join(
              ", "
            )}\n  Skills: ${e.skills.join(", ")}`
        )
        .join("\n")
  );
  parts.push(
    "Fun Facts:\n" + funFacts.map((f) => `- ${f.emoji} ${f.fact}`).join("\n")
  );
  parts.push(
    `Profile Basics:\n- Name: ${personalProfile.basics.fullName}\n- Bio: ${personalProfile.basics.shortBio}\n- Location: ${personalProfile.basics.location}`
  );
  parts.push("Interests:\n- " + personalProfile.interests.join("\n- "));
  parts.push(
    "Personal Facts:\n- " + personalProfile.personalFacts.join("\n- ")
  );
  parts.push(
    "Certifications:\n" +
      personalProfile.certification
        .map(
          (c) =>
            `- ${c.title} at ${c.issuer} (${c.issued})\n  Credential ID: ${
              c.credentialId || "N/A"
            }\n  Credential URL: ${c.credentialUrl || "N/A"}`
        )
        .join("\n")
  );

  return parts.join("\n\n");
}
