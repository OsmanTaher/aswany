import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Marquee from "@/components/sections/Marquee";
import Technologies from "@/components/sections/Technologies";
import Statistics from "@/components/sections/Statistics";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="site-shell">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Marquee />
      <Technologies />
      <Statistics />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
