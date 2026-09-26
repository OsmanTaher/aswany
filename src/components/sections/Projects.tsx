"use client";

import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

function TechIcon({ name }: { name: string }) {
  const n = name.toLowerCase();

  if (n.includes("next")) {
    return (
      <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center text-[8px] font-black shrink-0">
        N
      </span>
    );
  }
  if (n.includes("react")) {
    return (
      <svg
        className="w-3.5 h-3.5 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }
  if (n.includes("tailwind")) {
    return (
      <svg
        className="w-3.5 h-3.5 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }
  if (n.includes("node")) {
    return (
      <span className="text-[10px] font-black shrink-0 font-mono">JS</span>
    );
  }
  if (n.includes("express")) {
    return (
      <span className="text-[10px] font-bold font-mono tracking-tighter shrink-0">
        ex
      </span>
    );
  }
  return <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />;
}

function DeviceMonitor({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative w-full max-w-125 mx-auto">
      <div className="relative bg-[#141414] rounded-2xl p-2.5 sm:p-3 border-2 border-[#141414] shadow-md">
        <div className="flex items-center justify-between px-2 py-1 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block" />
          </div>

          <span className="text-[11px] font-mono font-medium text-neutral-400 truncate max-w-42.5 sm:max-w-60">
            {title}
          </span>

          <div className="w-12 h-1.5 rounded-full bg-neutral-700/60 hidden sm:block" />
        </div>

        <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800">
          <SafeImage
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 550px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-28 sm:w-36 h-2.5 sm:h-3 bg-[#141414] mx-auto rounded-b-md border-x-2 border-b-2 border-[#141414]" />
    </div>
  );
}

export default function Projects() {
  return (
    <section
      className="relative bg-[#FAF9F1] py-20 lg:py-28 overflow-hidden"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="inline-block px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest bg-[#E03D46] text-white border-2 border-[#141414] shadow-[2px_2px_0px_#141414] mb-4">
              PORTFOLIO
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-[#141414] tracking-tight mb-3">
              Projects
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="text-[#6B6A65] text-sm sm:text-base font-normal">
              A selection of projects that showcase my skills in design and
              development.
            </p>
          </Reveal>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, "0");
            const projectType = project.category || "WEB APPLICATION";
            const projectYear = project.year || "2026";
            const projectImage =
              project.image || `/projects/${project.slug}.webp`;
            const techStack = project.stack || [];

            return (
              <Reveal key={project.slug} delay={index * 0.08}>
                <article
                  className="group relative border-2 border-[#141414] bg-[#FAF9F1] p-6 sm:p-8 lg:p-10
                             transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                             hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_#141414] overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#F7D8D3]/85 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-0" />

                  <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
                    <div className="w-full lg:w-[48%] shrink-0 flex justify-center">
                      <DeviceMonitor
                        image={projectImage}
                        title={project.title}
                      />
                    </div>

                    <div className="w-full border-b-2 border-[#141414] my-2 lg:hidden" />

                    <div className="hidden lg:block w-[1.5px] bg-[#141414] self-stretch my-2 shrink-0" />

                    <div className="w-full lg:flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="bg-[#E03D46] border-2 border-[#141414] px-3 py-1 flex items-center justify-center">
                          <span className="font-mono font-black text-sm text-white tracking-wider leading-none">
                            {project.number || projectNumber}
                          </span>
                        </div>

                        <div className="bg-[#FAF9F1] border-2 border-[#141414] px-4 py-1 flex items-center justify-center">
                          <span className="font-mono font-extrabold text-[11px] sm:text-xs text-[#141414] tracking-[0.14em] uppercase leading-none">
                            {projectType}
                          </span>
                        </div>

                        <div className="bg-[#FFCA58] border-2 border-[#141414] px-3.5 py-1 flex items-center justify-center">
                          <span className="font-mono font-black text-[11px] sm:text-xs text-[#141414] tracking-wider leading-none">
                            {projectYear}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#141414] tracking-tight mb-3 transition-colors duration-200 group-hover:text-[#E03D46]">
                        {project.title}
                      </h3>

                      <p className="text-[#6B6A65] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-8">
                          {techStack.map((tech) => (
                            <span
                              key={tech}
                              className="border border-[#141414] bg-[#FAF9F1] text-[#141414] px-3 py-1 text-xs font-bold tracking-tight inline-flex items-center gap-1.5 transition-all duration-200
                                         group-hover:border-[#E03D46] group-hover:text-[#E03D46]"
                            >
                              <TechIcon name={tech} />
                              <span>{tech}</span>
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-4">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center justify-center gap-2 border-2 border-[#141414] bg-[#141414] px-5 py-3 text-white! text-xs font-mono font-bold tracking-wider uppercase
                                     shadow-[3px_3px_0px_#141414] transition-all duration-200
                                     hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#141414]
                                     active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer"
                        >
                          <span className="text-white! font-mono font-bold tracking-wider">
                            VIEW PROJECT
                          </span>
                          <ArrowRight
                            size={14}
                            strokeWidth={2.4}
                            className="text-white! shrink-0"
                          />
                        </Link>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 border-2 border-[#141414] bg-[#FAF9F1] px-5 py-3 text-[#141414] text-xs font-mono font-bold tracking-wider uppercase
                                       shadow-[3px_3px_0px_#141414] transition-all duration-200
                                       hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#141414]
                                       active:translate-x-1 active:translate-y-1 active:shadow-none"
                          >
                            <span>LIVE SITE</span>
                            <ExternalLink size={14} strokeWidth={2.4} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
