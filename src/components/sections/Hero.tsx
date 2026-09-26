import Link from "next/link";
import { ChevronDown, MapPin, Award, LayoutGrid } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className=" relative min-h-[calc(100dvh-80px)] lg:h-[calc(100dvh-100px)] lg:min-h-0 bg-[#FAF9F1] 
      overflow-y-hidden border-none outline-none flex flex-col justify-between"
    >
      <div className="absolute -bottom-6 left-6 w-16 h-16 border-2 border-[#D94A50]/30 bg-[#F4EEEC]/40 rotate-[-15deg] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full grid flex-1 items-center gap-8 sm:gap-10 lg:gap-12 pt-8 sm:pt-12 pb-24 sm:pb-20 lg:py-6 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center">
          <Reveal>
            <span className="inline-block px-3 py-1 text-[11px] sm:text-xs font-black uppercase tracking-widest bg-[#CA484A] text-white border-2 border-[#343630] shadow-[2px_2px_0px_#343630]">
              Available for Work
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-serif mt-4 sm:mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black leading-[0.92] sm:leading-[0.88] tracking-tight text-[#343630] uppercase wrap-break-word">
              ASWANY
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-4 sm:mt-6 flex items-center gap-3">
              <span className="block h-[2.5px] w-8 sm:w-10 bg-[#CA484A]" />
              <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#4A4849]">
                Full-Stack Developer
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-[#575650] font-normal">
              Building scalable web applications with modern technologies.
              Transforming complex problems into elegant, user-centric
              solutions.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/certifications"
                className="inline-flex items-center justify-center gap-3 border-2 border-[#141414] bg-[#141414] px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-white! shadow-[3px_3px_0px_#141414] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer"
              >
                <Award
                  size={18}
                  strokeWidth={2.5}
                  className="text-white! shrink-0"
                />
                <span className="font-black tracking-[0.14em] text-white!">
                  CERTIFICATIONS
                </span>
              </Link>

              <Link
                href="/labs"
                className="inline-flex items-center justify-center gap-3 border-2 border-[#141414] bg-[#FAF9F1] px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-[#141414] shadow-[3px_3px_0px_#141414] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer"
              >
                <LayoutGrid
                  size={18}
                  strokeWidth={2.5}
                  className="text-[#141414] shrink-0"
                />
                <span className="font-black tracking-[0.14em] text-[#141414]">
                  LABS
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
          <Reveal
            className="relative w-full max-w-65 sm:max-w-[320px] md:max-w-90 lg:max-w-100"
            delay={0.15}
          >
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 border border-[#343630]/30 rotate-18 pointer-events-none hidden sm:block" />

            <div className="absolute -inset-2 sm:-inset-3 border border-[#CA484A]/60 rotate-[2.5deg] pointer-events-none" />

            <div className="relative aspect-3/4 w-full border-2 border-[#343630] bg-[#FAF9F1] shadow-[5px_5px_0px_#343630] sm:shadow-[6px_6px_0px_#343630] overflow-visible">
              <div className="absolute -top-4 left-3 sm:-top-5 sm:left-4 z-30 bg-white border-2 border-[#141414] px-3.5 py-0.5 sm:py-1 shadow-sm">
                <span className="font-serif font-black text-xs sm:text-sm tracking-[0.25em] text-[#E03D46] block pl-1">
                  DEV
                </span>
              </div>

              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/myPicture.webp')" }}
                role="img"
                aria-label="Aswany Profile Picture"
              />

              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-14 h-14 sm:w-20 sm:h-20 bg-[#CA484A] border-2 border-[#343630] z-10" />

              <div className="absolute -bottom-4 right-2 sm:right-4 z-20 flex items-center gap-2 bg-[#141414] border border-[#141414] px-4 py-2 text-white shadow-sm whitespace-nowrap">
                <MapPin
                  size={13}
                  strokeWidth={2.2}
                  className="text-white shrink-0"
                />
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase">
                  BASED IN ASWAN, EGYPT
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="w-full pb-4 sm:pb-0 hidden lg:flex justify-center z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-[#8F836B] hover:text-[#343630] transition-colors"
        >
          <span className="text-[10px] font-extrabold uppercase tracking-widest">
            SCROLL
          </span>
          <ChevronDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
