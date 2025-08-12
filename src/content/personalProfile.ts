export type PersonalProfile = {
  basics: {
    fullName: string;
    shortBio: string;
    location: string;
  };
  interests: string[];
  personalFacts: string[];
  certification: Certification[];
};

interface Certification {
  title: string;
  issuer: string;
  issued: string; // YYYY-MM format
  credentialId?: string;
  credentialUrl?: string;
}

export const personalProfile: PersonalProfile = {
  basics: {
    fullName: "Rodrigo Ribeiro Martins",
    shortBio:
      "Brazilian-born software engineer, former lawyer, and lifelong learner. Passionate about building impactful products and exploring new technologies.",
    location: "Ridgefield, CT, USA",
  },
  interests: [
    "Soccer (football)",
    "Photography",
    "Travel and cultural exploration",
    "Technology and software craftsmanship",
    "AI",
    "Books (thriller, fiction, action, technology)",
    "Games and esports",
  ],
  personalFacts: [
    "Married since 2016",
    "Father of two daughters (born in 2020 and 2024)",
    "Started law school at 16 and graduated at 22",
    "Changed careers to tech at 33",
    "Visited 30+ countries",
    "Vasco da Gama supporter and recreational soccer player",
    "Played Counter-Strike competitively in small local leagues",
    "Completed a photography course in Brazil",
    "Avid reader across thriller, fiction, action, and technology",
    "Tech enthusiast and early adopter",
  ],
  certification: [
    {
      title: "The Complete Python Developer in 2020",
      issuer: "Zero To Mastery Academy",
      issued: "2020-08",
    },
    {
      title: "The Complete Web Developer in 2020",
      issuer: "Zero To Mastery Academy",
      issued: "2020-06",
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "Coursera",
      issued: "2020-05",
    },
    {
      title: "Software Engineering Virtual Experience",
      issuer: "JPMorganChase",
      issued: "2020-05",
      credentialId: "bgydj8TeRZQ9zN9WP",
    },
    {
      title: "Big Data Foundations - Level 1",
      issuer: "IBM",
      issued: "2020-04",
    },
    {
      title: "Python",
      issuer: "HackerRank",
      issued: "2020-04",
    },
    {
      title: "Verified International Academic Qualifications",
      issuer: "World Education Services",
      issued: "2019-07",
    },
    {
      title: "Technical Support Fundamentals",
      issuer: "Coursera",
      issued: "2018-10",
    },
    {
      title: "Lawyer",
      issuer: "OAB - Ordem dos Advogados do Brasil",
      issued: "2008-04",
      credentialId: "150957",
    },
  ],
};
