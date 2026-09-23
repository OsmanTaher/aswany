"use client";

import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

// مكوّن شاشة العرض (Mac / Device Monitor) المطابق للصورة 2 و 3
function DeviceMonitor({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative w-full max-w-[540px] mx-auto">
      {/* إطار الشاشة الخارجي */}
      <div className="relative bg-[#141414] rounded-2xl p-2.5 sm:p-3 border-2 border-[#141414] shadow-md">
        {/* الشريط العلوي للشاشة: نقاط الماك + اسم المشروع + مؤشر الكاميرا */}
        <div className="flex items-center justify-between px-2 py-1.5 mb-2">
          {/* نقاط الماك الثلاث */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block" />
          </div>

          {/* اسم المشروع في المنتصف */}
          <span className="text-[11px] font-mono font-medium text-neutral-400 truncate max-w-[170px] sm:max-w-[240px]">
            {title}
          </span>

          {/* نوتش / مؤشر الكاميرا يميناً */}
          <div className="w-10 sm:w-14 h-1.5 rounded-full bg-neutral-700/60 hidden sm:block" />
        </div>

        {/* مساحة العرض الخاصة بالصورة (Screen Canvas) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800">
          <SafeImage
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 550px"
            className="object-cover"
          />
        </div>
      </div>

      {/* قاعدة الشاشة السفلية (Monitor Stand) */}
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
        {/* الترويسة الرئيسية */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="inline-block px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest bg-[#E03D46] text-white border-2 border-[#141414] shadow-[2px_2px_0px_#141414] mb-4">
              PORTFOLIO
            </span>
          </Reveal>

          <Reveal delay={0.08}>
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

        {/* شبكة بطاقات المشاريع */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, "0");
            const projectType =
              project.type || project.category || "WEB APPLICATION";
            const projectYear = project.year || "2026";
            const projectImage =
              project.image ||
              project.thumbnail ||
              `/projects/${project.slug}.png`;
            const techStack = project.stack || project.technologies || [];

            return (
              <Reveal key={project.slug} delay={index * 0.08}>
                <article
                  className="group relative border-2 border-[#141414] bg-[#FAF9F1] p-6 sm:p-8 lg:p-10
                             transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                             hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_#141414]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* العمود الأيسر: شاشة العرض (تأخذ 6 أعمدة على الديسكتوب) */}
                    <div className="lg:col-span-6 flex justify-center">
                      <DeviceMonitor
                        image={projectImage}
                        title={project.title}
                      />
                    </div>

                    {/* الخط الفاصل في الموبايل */}
                    <div className="w-full border-b border-[#141414] my-2 lg:hidden" />

                    {/* العمود الأيمن: تفاصيل المشروع والأزرار (تأخذ 6 أعمدة) */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                      {/* الشارات العلوية الثلاث */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {/* 1. رقم المشروع بالأحمر */}
                        <span className="bg-[#E03D46] text-white border-2 border-[#141414] px-2.5 py-0.5 text-xs font-mono font-bold">
                          {project.number || projectNumber}
                        </span>

                        {/* 2. نوع التطبيق */}
                        <span className="bg-[#FAF9F1] text-[#141414] border-2 border-[#141414] px-3 py-0.5 text-xs font-mono font-bold uppercase">
                          {projectType}
                        </span>

                        {/* 3. السنة بالأصفر الذهبي */}
                        <span className="bg-[#FFCA58] text-[#141414] border-2 border-[#141414] px-3 py-0.5 text-xs font-mono font-bold">
                          {projectYear}
                        </span>
                      </div>

                      {/* عنوان المشروع بخط Serif فخم */}
                      <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#141414] tracking-tight mb-3">
                        {project.title}
                      </h3>

                      {/* الوصف */}
                      <p className="text-[#6B6A65] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* وسوم التقنيات المستخدمة */}
                      {techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-8">
                          {techStack.map((tech) => (
                            <span
                              key={tech}
                              className="border border-[#141414] bg-[#FAF9F1] px-3 py-1 text-xs font-bold text-[#141414] inline-flex items-center gap-1.5 shadow-[1px_1px_0_#141414]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* أزرار العمل: متجاورة في الموبايل والديسكتوب مع أنيميشن الـ Hover */}
                      <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-4">
                        {/* زر VIEW PROJECT الأسود */}
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center justify-center gap-2 border-2 border-[#141414] bg-[#141414] px-5 py-3 !text-white text-xs font-mono font-bold tracking-wider uppercase
             shadow-[3px_3px_0px_#141414] transition-all duration-200
             hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#141414]
             active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer"
                        >
                          <span className="!text-white font-mono font-bold tracking-wider">
                            VIEW PROJECT
                          </span>
                          <ArrowRight
                            size={14}
                            strokeWidth={2.4}
                            className="!text-white shrink-0"
                          />
                        </Link>

                        {/* زر LIVE SITE / VIEW APP الأبيض */}
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
