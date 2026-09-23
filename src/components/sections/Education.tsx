"use client";

import Reveal from "@/components/ui/Reveal";
import { GraduationCap, Globe } from "lucide-react";

export default function Education() {
  return (
    <section className="relative bg-[#FAF9F1] py-20 lg:py-28 overflow-hidden" id="education">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* الترويسة الرئيسية */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <span className="inline-block px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest bg-[#FAF9F1] text-[#141414] border-2 border-[#141414] shadow-[2px_2px_0px_#141414] mb-4">
              BACKGROUND
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-serif text-5xl sm:text-6xl font-black text-[#141414] tracking-tight">
              Education
            </h2>
          </Reveal>
        </div>

        {/* 1. بطاقة التعليم الأكاديمي الرئيسية مع تأثير الـ Hover والظل الثقيل */}
        <Reveal delay={0.14}>
          <article
            className="group relative border-2 border-[#141414] bg-[#FAF9F1] p-6 sm:p-10 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                       hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_#141414] cursor-default"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              
              {/* المربع الأحمر وأيقونة قبعة التخرج */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#E03D46] border border-[#141414] flex items-center justify-center shrink-0">
                <GraduationCap size={36} className="text-white" strokeWidth={1.8} />
              </div>

              {/* التفاصيل الأكاديمية */}
              <div className="flex-1">
                {/* شارة قيد الدراسة */}
                <div className="inline-block bg-[#00D690] text-[#141414] border border-[#141414] px-3 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
                  IN PROGRESS
                </div>

                {/* عنوان الدرجة العلمية بخط Serif فخم */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141414] tracking-tight leading-snug mb-3">
                  Bachelor&apos;s Degree in Computer Science
                </h3>

                {/* الكلية باللون الأحمر الزاهي */}
                <p className="text-[#E03D46] text-base sm:text-lg font-medium mb-1">
                  Faculty of Computers and Artificial Intelligence
                </p>

                {/* الجامعة باللون المكتوم */}
                <p className="text-[#6B6A65] text-sm sm:text-base font-normal mb-6">
                  Minia National University
                </p>

                {/* الفترة الزمنية */}
                <span className="block text-xs font-mono font-bold tracking-[0.15em] text-[#6B6A65] uppercase">
                  2024 – PRESENT
                </span>
              </div>

            </div>
          </article>
        </Reveal>

        {/* 2. قسم اللغات */}
        <div className="mt-16 sm:mt-20">
          <Reveal delay={0.2}>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#141414] text-center mb-8">
              Languages
            </h3>
          </Reveal>

          {/* صندوقا اللغات المتجاوران مع نفس تأثير الـ Hover والظل الصلب */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            
            {/* بطاقة اللغة الإنجليزية */}
            <Reveal delay={0.25}>
              <div
                className="group border-2 border-[#141414] bg-[#FAF9F1] p-5 sm:p-6 flex items-center gap-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                           hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[7px_7px_0px_#141414] cursor-default"
              >
                <div className="shrink-0">
                  <Globe size={26} className="text-[#E03D46]" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#141414]">
                    English
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B6A65] font-normal">
                    Proficient
                  </p>
                </div>
              </div>
            </Reveal>

            {/* بطاقة اللغة العربية */}
            <Reveal delay={0.3}>
              <div
                className="group border-2 border-[#141414] bg-[#FAF9F1] p-5 sm:p-6 flex items-center gap-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                           hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[7px_7px_0px_#141414] cursor-default"
              >
                <div className="shrink-0">
                  <Globe size={26} className="text-[#E03D46]" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#141414]">
                    Arabic
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B6A65] font-normal">
                    Native
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </section>
  );
}