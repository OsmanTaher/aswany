"use client";

import Link from "next/link";
import {
  Home,
  Award,
  FlaskConical,
  ArrowLeft,
  TriangleAlert,
  LayoutGrid,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function NotFound() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-[#FAF9F1] text-[#141414] px-4 py-4 sm:py-6 flex items-center justify-center">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#141414 1px, transparent 1px), linear-gradient(90deg, #141414 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full border-2 border-[#141414] bg-[#A5F3FC]" />

        <div className="absolute -bottom-20 -right-20 h-56 w-56 rotate-12 border-2 border-[#141414] bg-[#FACC15]" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <Reveal>
          <div className="border-2 border-[#141414] bg-white shadow-[8px_8px_0px_#141414]">
            <div className="flex items-center justify-between border-b-2 border-[#141414] px-4 py-2.5 sm:px-5">
              <div className="flex items-center gap-2">
                <TriangleAlert
                  size={17}
                  strokeWidth={2.5}
                  className="text-[#CA484A]"
                />

                <span className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.18em]">
                  System Error
                </span>
              </div>

              <span className="font-mono text-[10px] sm:text-xs font-bold text-neutral-500">
                404 / NOT_FOUND
              </span>
            </div>

            <div className="px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9 text-center">
              <span className="inline-flex items-center border-2 border-[#141414] bg-[#CA484A] px-3 py-1.5 font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white shadow-[3px_3px_0px_#141414]">
                ERROR 404
              </span>

              <div className="relative mt-6 sm:mt-7">
                <h1 className="font-serif text-[6rem] sm:text-[8rem] md:text-[9rem] font-black leading-[0.78] tracking-[-0.08em] text-[#141414]">
                  404
                </h1>
              </div>

              <div className="mx-auto mt-7 sm:mt-8 max-w-2xl">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
                  Page Not Found
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-neutral-600 font-sans">
                  The page you are looking for doesn&apos;t exist, has been
                  removed, or the URL may be incorrect.
                </p>
              </div>

              <div className="mt-6 sm:mt-7 border-t-2 border-dashed border-neutral-300 pt-5">
                <p className="mb-4 font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-[0.18em] text-neutral-500">
                  Continue exploring
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link
                    href="/"
                    className="group flex min-h-14 items-center justify-center gap-2 px-4 py-3 bg-[#141414] text-white! border-2 border-[#141414] shadow-[4px_4px_0px_#141414] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#141414] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#141414]"
                  >
                    <Home size={19} strokeWidth={2.5} className="shrink-0" />

                    <span className="font-mono text-sm sm:text-base font-black uppercase tracking-widest">
                      HOME
                    </span>
                  </Link>

                  <Link
                    href="/certifications"
                    className="group flex min-h-14 items-center justify-center gap-2 px-4 py-3 bg-white text-[#141414] border-2 border-[#141414] shadow-[4px_4px_0px_#141414] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:bg-[#A5F3FC] hover:shadow-[7px_7px_0px_#141414] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#141414]"
                  >
                    <Award size={19} strokeWidth={2.5} className="shrink-0" />

                    <span className="font-mono text-sm sm:text-base font-black uppercase tracking-wider">
                      CERTIFICATIONS
                    </span>
                  </Link>

                  <Link
                    href="/labs"
                    className="group flex min-h-14 items-center justify-center gap-2 px-4 py-3 bg-white text-[#141414] border-2 border-[#141414] shadow-[4px_4px_0px_#141414] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:bg-[#FACC15] hover:shadow-[7px_7px_0px_#141414] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#141414]"
                  >
                    <LayoutGrid
                      size={19}
                      strokeWidth={2.5}
                      className="shrink-0"
                    />

                    <span className="font-mono text-sm sm:text-base font-black uppercase tracking-widest">
                      LABS
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-4 sm:mt-5 text-center">
            <button
              onClick={() => window.history.back()}
              type="button"
              className="group inline-flex items-center gap-2 border-b-2 border-transparent pb-1 font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.12em] text-neutral-600 transition-all hover:border-[#141414] hover:text-[#141414]"
            >
              <ArrowLeft
                size={15}
                strokeWidth={2.5}
                className="transition-transform duration-150 group-hover:-translate-x-1"
              />

              <span>GO BACK TO PREVIOUS PAGE</span>
            </button>
          </div>
        </Reveal>

        <div className="mt-3 flex items-center justify-center gap-3 font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
          <span className="h-px w-6 bg-neutral-300" />
          <span>Nothing here</span>
          <span className="h-px w-6 bg-neutral-300" />
        </div>
      </div>
    </main>
  );
}
