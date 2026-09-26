import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetailView from "@/components/sections/ProjectDetailView";


export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAF9F1] text-[#141414]">
      <main>
        <ProjectDetailView project={project} />
      </main>
    </div>
  );
}