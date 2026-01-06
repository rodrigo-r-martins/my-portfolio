import { Document } from "@langchain/core/documents";
import { aboutContent, funFacts } from "@/content/about";
import { personalProfile } from "@/content/personalProfile";
import { projects } from "@/content/projects";
import { experiences } from "@/content/experiences";
import { myStory } from "@/content/myStory";

/**
 * Converts portfolio content into LangChain Document objects for embedding and retrieval.
 * Each document represents a semantic chunk with metadata for filtering and context.
 */
export function loadPortfolioDocuments(): Document[] {
  const documents: Document[] = [];

  // 1. Personal Profile & Basic Info
  documents.push(
    new Document({
      pageContent: `Name: ${personalProfile.basics.fullName}
Bio: ${personalProfile.basics.shortBio}
Location: ${personalProfile.basics.location}`,
      metadata: {
        type: "profile",
        category: "basics",
      },
    })
  );

  // 2. About Content - Description
  documents.push(
    new Document({
      pageContent: aboutContent.description,
      metadata: {
        type: "about",
        category: "description",
      },
    })
  );

  // 3. Story Sections
  aboutContent.story.paragraphs.forEach((paragraph, index) => {
    documents.push(
      new Document({
        pageContent: paragraph,
        metadata: {
          type: "about",
          category: "story",
          section: `paragraph_${index + 1}`,
        },
      })
    );
  });

  // 4. Work Philosophy
  documents.push(
    new Document({
      pageContent: `${aboutContent.workPhilosophy.introduction}\n\nPrinciples:\n- ${aboutContent.workPhilosophy.principles.join("\n- ")}`,
      metadata: {
        type: "about",
        category: "work_philosophy",
      },
    })
  );

  // 5. Technical Skills
  documents.push(
    new Document({
      pageContent: `${aboutContent.technicalFocus.introduction}

Frontend: ${aboutContent.technicalFocus.skills.frontend.join(", ")}
Backend: ${aboutContent.technicalFocus.skills.backend.join(", ")}
Database: ${aboutContent.technicalFocus.skills.database.join(", ")}
DevOps: ${aboutContent.technicalFocus.skills.devOps.join(", ")}`,
      metadata: {
        type: "skills",
        category: "technical_focus",
      },
    })
  );

  // 6. Projects - Each project as a document
  projects.forEach((project) => {
    documents.push(
      new Document({
        pageContent: `Project: ${project.title}
Description: ${project.description}
Summary: ${project.summary}
Technologies: ${project.technologies.join(", ")}
Featured: ${project.isFeatured ? "Yes" : "No"}
${project.demoUrl ? `Demo: ${project.demoUrl}` : ""}
${project.githubUrl ? `GitHub: ${project.githubUrl}` : ""}`,
        metadata: {
          type: "project",
          slug: project.slug,
          title: project.title,
          isFeatured: project.isFeatured,
        },
      })
    );
  });

  // 7. Experience - Each experience as a document
  experiences.forEach((experience) => {
    documents.push(
      new Document({
        pageContent: `Position: ${experience.title}
Company: ${experience.company}
Period: ${experience.period}
${experience.location ? `Location: ${experience.location}` : ""}

Achievements:
- ${experience.achievements.join("\n- ")}

Skills: ${experience.skills.join(", ")}`,
        metadata: {
          type: "experience",
          company: experience.company,
          title: experience.title,
          period: experience.period,
        },
      })
    );
  });

  // 8. Fun Facts
  documents.push(
    new Document({
      pageContent: `Fun Facts about Rodrigo:
${funFacts.map((f) => `${f.emoji} ${f.fact}`).join("\n")}`,
      metadata: {
        type: "about",
        category: "fun_facts",
      },
    })
  );

  // 9. Interests
  documents.push(
    new Document({
      pageContent: `Personal Interests: ${personalProfile.interests.join(", ")}`,
      metadata: {
        type: "profile",
        category: "interests",
      },
    })
  );

  // 10. Personal Facts
  documents.push(
    new Document({
      pageContent: `Personal Facts:
- ${personalProfile.personalFacts.join("\n- ")}`,
      metadata: {
        type: "profile",
        category: "personal_facts",
      },
    })
  );

  // 11. Certifications
  documents.push(
    new Document({
      pageContent: `Certifications and Education:
${personalProfile.certification
  .map(
    (c) =>
      `- ${c.title} from ${c.issuer} (${c.issued})${
        c.credentialId ? `, Credential ID: ${c.credentialId}` : ""
      }`
  )
  .join("\n")}`,
      metadata: {
        type: "profile",
        category: "certifications",
      },
    })
  );

  // 12. Full Story (for comprehensive queries)
  documents.push(
    new Document({
      pageContent: myStory,
      metadata: {
        type: "about",
        category: "full_story",
      },
    })
  );

  return documents;
}

