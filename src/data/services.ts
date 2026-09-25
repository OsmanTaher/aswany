import { Code2, Layers3, Smartphone, ShieldCheck, Terminal } from "lucide-react";
import type { ServiceCardData } from "@/components/ui/ServiceCard";

export const services: ServiceCardData[] = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description: "Building secure, scalable web applications from responsive interfaces to production APIs and data layers.",
    technologies: ["Next.js / React", "Node.js / Express", "REST APIs", "PostgreSQL / MongoDB", "Prisma ORM"],
    icon: Code2,
  },
  {
    number: "02",
    title: "UI/UX & Frontend Engineering",
    description: "Crafting responsive, high-performance interfaces with a clear visual hierarchy and conversion-focused interactions.",
    technologies: ["Responsive Design", "Tailwind CSS", "Motion", "Dashboard UI", "State Management"],
    icon: Layers3,
  },
  {
    number: "03",
    title: "DevOps & Deployment Workflow",
    description: "Containerizing applications with Docker, managing database lifecycles, and automating developer workflows with efficient terminal tooling and modern deployment pipelines",
    technologies: ["Git & GitHub", "Docker", "Environment Config", "CI/CD", "Deployment"],
    icon: Terminal,
  },
  {
    number: "04",
    title: "Security & Architecture",
    description: "Applying security fundamentals, clean architecture and pragmatic engineering practices to keep applications robust.",
    technologies: ["Web App Security", "JWT Authentication", "Clean Architecture", "Validation", "Secure APIs"],
    icon: ShieldCheck,
  },
];
