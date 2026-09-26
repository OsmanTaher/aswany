import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Marquee from "@/components/sections/Marquee";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="site-shell">
      <Hero />
      <About />
      <Services />
      <Marquee />
      <Technologies />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
