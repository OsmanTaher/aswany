export type Certification = {
  image: string;
  description: string;
  title: string;
  data: string;
  liveUrl: string;
};

export const certifications: Certification[] = [
  {
    title: "Meta Front-End Developer Professional Certificate",
    description: "Meta",
    data: "Issued Feb 2024",
    image: "/certifications/javascript.png",
    liveUrl: "https://www.coursera.org/account/accomplishments/professional-cert/meta-frontend",
  },
  {
    title: "AWS Certified Developer Associate",
    description: "Amazon Web Services",
    data: "Issued Nov 2023",
    image: "/certifications/javascript.png",
    liveUrl: "https://aws.amazon.com/verification",
  },
  {
    title: "Google Cloud Digital Leader",
    description: "Google Cloud",
    data: "Issued Aug 2023",
    image: "/certifications/javascript.png",
    liveUrl: "https://cloud.google.com/certification",
  },
  {
    title: "MongoDB Certified Developer Associate",
    description: "MongoDB",
    data: "Issued Jul 2023",
    image: "/certifications/javascript.png",
    liveUrl: "https://university.mongodb.com/certificates",
  },
  {
    title: "TypeScript Developer Certification",
    description: "Microsoft",
    data: "Issued May 2023",
    image: "/certifications/javascript.png",
    liveUrl: "https://learn.microsoft.com/certifications",
  },
  {
    title: "Responsive Web Design Certification",
    description: "freeCodeCamp",
    data: "Issued Mar 2023",
    image: "/certifications/javascript.png",
    liveUrl: "https://www.freecodecamp.org/certification",
  },
];