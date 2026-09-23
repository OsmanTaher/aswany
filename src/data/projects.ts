export type Project = {
  slug: string;
  title: string;
  image: string;
  category: string;
  accent: "red" | "yellow";
  description: string;
  shortDescription: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "docstudy",
    title: "DocStudy",
    image: "/projects/docstudy.png",
    category: "EDTECH / WEB APP",
    accent: "red",
    description: "A focused study experience built around clear content discovery, progress and exam-oriented workflows.",
    shortDescription: "Study platform interface with structured learning flows.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["Responsive learning experience", "Progress-oriented UI", "Structured content modules", "Fast page transitions"],
    gallery: ["/projects/docstudy.png", "/projects/docstudy.png", "/projects/docstudy.png", "/projects/docstudy.png", "/projects/docstudy.png"],
  },
  {
    slug: "gomla",
    title: "Gomla",
    image: "/projects/gomla.png",
    category: "E-COMMERCE",
    accent: "yellow",
    description: "A bold storefront concept focused on product discovery, offer presentation and a simple purchase journey.",
    shortDescription: "Modern storefront designed for fast browsing and conversion.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["Product-first layout", "Responsive storefront", "Clear promotional hierarchy", "Reusable product cards"],
    gallery: ["/projects/gomla.png", "/projects/gomla.png", "/projects/gomla.png", "/projects/gomla.png", "/projects/gomla.png"],
  },
  {
    slug: "khatmatuk",
    title: "Khatmatuk",
    image: "/projects/khatmatuk.png",
    category: "EDUCATION / PRODUCT",
    accent: "red",
    description: "An educational product interface designed to keep content, navigation and feedback highly visible.",
    shortDescription: "Educational product with clean modular navigation.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["Modular sections", "Accessible interface", "Reusable content components", "Mobile-first layout"],
    gallery: ["/projects/khatmatuk.png", "/projects/khatmatuk.png", "/projects/khatmatuk.png", "/projects/khatmatuk.png", "/projects/khatmatuk.png"],
  },
  {
    slug: "sharyan",
    title: "Sharyan",
    image: "/projects/sharyan.png",
    category: "WEB PLATFORM",
    accent: "yellow",
    description: "A structured platform interface that puts actions, data and user pathways at the center of the experience.",
    shortDescription: "Data-driven platform interface with clear actions.",
    stack: ["Next.js", "TypeScript", "REST API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["Action-driven dashboard", "Responsive data views", "Consistent design tokens", "Reusable UI primitives"],
    gallery: ["/projects/sharyan.png", "/projects/sharyan.png", "/projects/sharyan.png", "/projects/sharyan.png", "/projects/sharyan.png"],
  },
  {
    slug: "zad",
    title: "Zad",
    image: "/projects/zad.png",
    category: "OFFLINE-FIRST EDUCATION",
    accent: "red",
    description: "An offline-first educational experience built around embedded content, local progress and exam evaluation.",
    shortDescription: "Offline-first learning app with local progress and exams.",
    stack: ["Next.js", "TypeScript", "Capacitor", "JSON", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["Offline content reader", "Exam engine", "Local progress", "Capacitor Android delivery"],
    gallery: ["/projects/zad.png", "/projects/zad.png", "/projects/zad.png", "/projects/zad.png", "/projects/zad.png"],
  },
];
