import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export type ServiceCardData = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  icon?: LucideIcon;
};

export default function ServiceCard({ service, index }: { service: ServiceCardData; index: number }) {
  const Icon = service.icon;

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <article className="service-card h-full">
        <div className="service-number">{service.number}</div>
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="display-font text-3xl font-semibold leading-tight tracking-[-0.03em]">{service.title}</h3>
            {Icon && <Icon size={22} strokeWidth={1.7} />}
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-(--muted) sm:text-base">{service.description}</p>
          <div className="chip-list">
            {service.technologies.map((item) => (
              <span key={item} className="chip">{item}</span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
