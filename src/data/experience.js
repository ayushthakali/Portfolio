// Listed in the original order. `highlights` are either plain strings or
// { title, text } pairs for roles that span several named projects.
export const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Elevate Tech.",
    location: "Pokhara, Nepal",
    date: "Nov 2025 – Jan 2026",
    tag: "React",
    highlights: [
      "Contributed to TrustMed, a hospital management system built with React",
      "Built responsive UI components and enhanced user workflows",
      "Collaborated with backend teams for API integration and data handling",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Brandbuilder",
    location: "Pokhara, Nepal",
    date: "Feb 2026 – April 2026",
    tag: "Next.js",
    highlights: [
      "Contributed to Receipt AI, an AI-powered receipt management system",
      "Built the frontend in Next.js and implemented Google OAuth authentication",
      "Integrated a peer-developed AI module for automated receipt extraction and categorization",
      "Implemented multi-company workflow and secure access management",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Omni Tech",
    location: "Pokhara, Nepal",
    date: "Aug 2026 – Present",
    tag: "React, Node.js",
    highlights: [
      {
        title: "Avrio Pharmacy Portal",
        text: "Maintained and fixed bugs in a live ASP.NET MVC and SQL Server pharmacy ordering portal for a US client",
      },
      {
        title: "News CMS",
        text: "Built a multi-tenant news publishing CMS using Payload CMS and PostgreSQL, supporting multiple publications on a single platform",
      },
      {
        title: "PIIRRO",
        text: "Built and deployed a food and music discovery platform for Nepal, connecting diners with restaurants and live music venues",
      },
    ],
  },
];

export const currentRole = experiences.find((exp) => /present/i.test(exp.date));
