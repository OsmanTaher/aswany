"use client";

import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { CheckCircle2 } from "lucide-react";
import { stats as defaultStats } from "@/data/stats";

// بيانات مطابقة للصورة في حال رغبت بتأكيد القيم
const displayStats = [
  {
    value: 15,
    suffix: "+",
    label: "Projects Delivered",
    description: "Including LMS, ERP systems, and mobile applications",
  },
  {
    value: 20,
    suffix: "K+",
    label: "Active Users",
    description: "Students and users across Quizatak and educational platforms",
  },
  {
    value: 2,
    suffix: "M+",
    label: "EGP Revenue",
    description: "Generated for instructors through custom learning systems",
  },
  {
    value: 100,
    suffix: "%",
    label: "Deployment Success",
    description: "Apps successfully published and maintained on Google Play",
  },
];

export default function Statistics() {
  const data = defaultStats?.length ? defaultStats : displayStats;

  return (
    <section className="relative bg-[#FAF9F1] py-20 lg:py-28 overflow-hidden" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* الترويسة الرئيسية */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <span className="inline-block px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest bg-[#CA484A] text-white border-2 border-[#141414] shadow-[2px_2px_0px_#141414] mb-4">
              RESULTS
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-serif text-5xl sm:text-6xl font-black text-[#141414] tracking-tight mb-3">
              By The Numbers
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="text-[#6B6A65] text-base font-normal">
              Results That Speak
            </p>
          </Reveal>
        </div>

        {/* شبكة البطاقات مع أنيميشن Hover ناعمة وظل صلب مطابق للصورة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {data.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.07} className="h-full">
              <article
                className="group relative h-full min-h-[250px] border-2 border-[#141414] bg-white p-7 text-center flex flex-col justify-center items-center
                           shadow-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                           hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[7px_7px_0px_#141414] cursor-default"
              >
                {/* القيمة الرقمية بخط Serif عريض وفخم */}
                <div className="font-serif text-5xl lg:text-6xl font-black text-[#141414] tracking-tight mb-3 transition-transform duration-300 group-hover:scale-105">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* عنوان الإحصائية */}
                <h3 className="text-[15px] font-extrabold text-[#141414] tracking-tight mb-2 uppercase">
                  {stat.label}
                </h3>

                {/* نص الوصف الإضافي المكتوم */}
                <p className="text-xs sm:text-sm text-[#73726C] leading-relaxed max-w-[210px] font-normal">
                  {stat.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* مؤشرات الدعم والتفاني + الجملة الختامية */}
        <Reveal delay={0.35}>
          <div className="mt-14 flex flex-col items-center justify-center">
            
            {/* الشارات المزدوجة مع علامة الصح الخضراء المفرغة */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[#141414] font-bold text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#00C48C]" strokeWidth={2.4} />
                <span className="tracking-tight">24/7 Support</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#00C48C]" strokeWidth={2.4} />
                <span className="tracking-tight">100% Dedication</span>
              </div>
            </div>

            {/* الجملة الختامية */}
            <p className="mt-5 text-center text-xs sm:text-sm text-[#73726C] font-normal max-w-xl">
              Every number represents a commitment to excellence and client success.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}