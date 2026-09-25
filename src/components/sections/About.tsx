"use client";

import SafeImage from "@/components/ui/SafeImage";
import Reveal from "@/components/ui/Reveal";
import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#FAF9F1] py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <Reveal className="w-full max-w-110">
              <div className="group relative aspect-4/5 w-full border-2 border-[#343630] bg-[#FAF9F1] shadow-[6px_6px_0px_#343630] overflow-visible">
                <div className="group relative aspect-4/5 w-full border-2 border-[#343630] bg-[#FAF9F1] shadow-[6px_6px_0px_#343630] overflow-hidden">
                  <div className="relative w-full h-full bg-[#FAF9F1]">
                    <SafeImage
                      src="/images/myPicture.webp"
                      alt="Aswany Portrait"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 440px"
                      className="object-cover grayscale contrast-125 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100"
                    />
                  </div>

                  <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#CA484A]/80 z-10 pointer-events-none" />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="inline-block border-[3px] border-[#343630] bg-[#FAF9F1] px-4 py-2 mb-10 text-[15px] font-mono font-bold text-[#343630] uppercase">
                ABOUT
              </div>

              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-[#343630] tracking-tight mb-8">
                Who I Am
              </h2>

              <div className="space-y-6 text-[#4A4849] text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Motivated Full-Stack Developer with a dedicated focus on modern web development. Skilled in building scalable, responsive, and user-centric web applications from the ground up using JavaScript, TypeScript, React, Next.js, Tailwind CSS, and Express.js.
                </p>
                <p>
                  Passionate about clean architecture, structured system design using UML, efficient terminal workflows, and continuous learning. Currently focused on engineering modern web solutions while expanding my backend and DevOps toolkit with PostgreSQL and Docker.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-md">
                <motion.div
                  whileHover={{ x: -4, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="border-2 border-[#343630] bg-[#FAF9F1] p-5 transition-shadow duration-200 hover:shadow-[6px_6px_0px_#343630] cursor-default"
                >
                  <span className="block text-[11px] font-mono font-bold tracking-widest text-[#8F836B] uppercase mb-2">
                    LOCATION
                  </span>
                  <span className="font-serif text-2xl font-black text-[#343630]">
                    Aswan, Egypt
                  </span>
                </motion.div>

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
