import { Braces, Database, LockKeyhole, Wrench } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";

const icons = [Braces, Database, LockKeyhole, Wrench];

export default function Technologies() {
  return (
    <section className="section-shell" id="technologies">
      <div className="section-wrap">
        <SectionTitle eyebrow="Expertise" title="Technologies & Tools" description="The tools I use to move from an idea to a reliable production experience." />
        <div className="tech-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={group.title} delay={index * 0.06}>
                <article className="tech-card h-full">
                  <div className="tech-icon"><Icon size={20} /></div>
                  <h3 className="display-font text-3xl font-semibold tracking-[-0.03em]">{group.title}</h3>
                  <div className="chip-list mt-5">
                    {group.items.map((item) => <span key={item} className="chip">{item}</span>)}
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
