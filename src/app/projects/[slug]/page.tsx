/* eslint-disable @next/next/no-html-link-for-pages */
import { notFound } from "next/navigation";
import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/layout/SmoothScroll";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    notFound();
  }
  const currentProject = project;

  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <section className="project-detail-hero section-shell">
          <div className="section-wrap">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.1em] hover:underline"><ArrowLeft size={15} /> Back to Projects</Link>
            <div className="project-detail-grid mt-10">
              <Reveal>
                <div className="project-media min-h-[520px]">
                  <SafeImage src={currentProject.image} alt={currentProject.title} fill sizes="(max-width: 860px) 100vw, 60vw" className="object-cover" fallback={`/projects/${currentProject.slug}.svg`} />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <span className={`section-tag ${currentProject.accent === "yellow" ? "section-tag--yellow" : "section-tag--red"}`}>{currentProject.category}</span>
                <h1 className="display-font mt-7 text-6xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-8xl">{currentProject.title}</h1>
                <p className="mt-6 text-base leading-8 text-[var(--muted)]">{currentProject.description}</p>
                <div className="project-stack mt-6">{currentProject.stack.map((item) => <span key={item} className="chip">{item}</span>)}</div>
                <div className="project-link-row mt-7">
                  <a href={currentProject.liveUrl ?? "#"} className="project-link project-link--primary">Visit Website <ExternalLink size={14} /></a>
                  <a href={currentProject.githubUrl ?? "#"} className="project-link">GitHub <ArrowUpRight size={14} /></a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-shell border-t-2 border-black">
          <div className="section-wrap">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <span className="section-tag section-tag--yellow">02 Key Features</span>
                <h2 className="display-font mt-6 text-5xl font-semibold tracking-[-0.04em]">Built for clarity.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {currentProject.features.map((feature, index) => (
                  <div key={feature} className="brutal-box p-5">
                    <span className="text-sm font-black text-[var(--red)]">0{index + 1}</span>
                    <p className="mt-3 text-sm font-bold leading-6">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell border-t-2 border-black">
          <div className="section-wrap">
            <span className="section-tag section-tag--red">03 Gallery</span>
            <h2 className="display-font mt-6 text-5xl font-semibold tracking-[-0.04em]">Screens & views</h2>
            <div className="project-detail-gallery mt-8">
              {currentProject.gallery.map((image, index) => (
                <div key={`${image}-${index}`} className="relative overflow-hidden">
                  <SafeImage src={image} alt={`${currentProject.title} screen ${index + 1}`} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover" fallback={`/projects/${currentProject.slug}.svg`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-red">
          <div className="section-wrap text-center">
            <p className="text-xs font-black uppercase tracking-[0.13em] text-white/80">Have a project in mind?</p>
            <h2 className="display-font mx-auto mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">Let&apos;s build something extraordinary together.</h2>
            <a href="/#contact" className="mt-8 inline-flex items-center gap-2 border-2 border-black bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.09em] text-black shadow-[5px_5px_0_#141414]">Start a Conversation <ArrowUpRight size={16} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
