"use client";

import SafeImage from "@/components/ui/SafeImage";
import Reveal from "@/components/ui/Reveal";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="relative bg-[#FAF9F1] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* العمود الأيسر: الصورة الشخصية مع التلوين عند الـ Hover والمربع الأحمر */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <Reveal className="w-full max-w-[440px]">
              <div className="group relative aspect-[4/5] w-full border-2 border-[#343630] bg-[#FAF9F1] shadow-[6px_6px_0px_#343630] overflow-visible">
                
                {/* حاوية الصورة: تتحول من الأبيض والأسود إلى الألوان عند تمرير الفأرة */}
                <div className="relative w-full h-full overflow-hidden bg-[#FAF9F1]">
                  <SafeImage
                    src="/images/myPicture.jpg"
                    alt="Aswany Portrait"
                    fill
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover grayscale contrast-125 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>

                {/* المربع الأحمر المصمت في الركن السفلي الأيمن */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-[#CA484A] border-2 border-[#343630] z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 pointer-events-none" />
              </div>
            </Reveal>
          </div>

          {/* العمود الأيمن: المحتوى والبطاقات */}
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              
              {/* شارة ABOUT المستطيلة المحددة */}
              <div className="inline-block border-2 border-[#343630] bg-[#FAF9F1] px-3 py-0.5 text-xs font-mono font-bold tracking-widest text-[#343630] uppercase mb-4">
                ABOUT
              </div>

              {/* العنوان الرئيسي بخط Serif عريض */}
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-[#343630] tracking-tight mb-8">
                Who I Am
              </h2>

              {/* النصوص التعريفية المطابقة للصورة */}
              <div className="space-y-6 text-[#4A4849] text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Motivated Full-Stack Developer and Cyber Security enthusiast, currently studying Computer Science. Skilled in building scalable and secure web applications using Next.js, React, Node.js, Express, Laravel, and MongoDB.
                </p>
                <p>
                  Passionate about clean architecture, security best practices, and continuous learning. Currently focused on building scalable web applications and exploring the intersection of development and cybersecurity.
                </p>
              </div>

              {/* بطاقات LOCATION و FOCUS التفاعلية مع أنيميشن الظلال الصلبة */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-md">
                
                {/* بطاقة الموقع الجغرافي (Location) */}
                <motion.div
                  whileHover={{ x: -4, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="border-2 border-[#343630] bg-[#FAF9F1] p-5 transition-shadow duration-200 hover:shadow-[6px_6px_0px_#343630] cursor-default"
                >
                  <span className="block text-[11px] font-mono font-bold tracking-widest text-[#8F836B] uppercase mb-2">
                    LOCATION
                  </span>
                  <span className="font-serif text-2xl font-black text-[#343630]">
                    Minya, Egypt
                  </span>
                </motion.div>

                {/* بطاقة التخصص (Focus) - مميزة بالظل الصلب المباشر كما في الصورة */}
                <motion.div
                  whileHover={{ x: -4, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="border-2 border-[#343630] bg-[#FAF9F1] p-5 transition-shadow duration-200 hover:shadow-[6px_6px_0px_#343630] cursor-default"
                >
                  <span className="block text-[11px] font-mono font-bold tracking-widest text-[#8F836B] uppercase mb-2">
                    Focus
                  </span>
                  <span className="font-serif text-2xl font-black text-[#343630]">
                    Full-Stack
                  </span>
                </motion.div>

              </div>

            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}