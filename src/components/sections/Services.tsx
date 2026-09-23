import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-wrap">
        <SectionTitle eyebrow="What I Do" title="Services" description="Transforming complex challenges into elegant, scalable solutions." tone="yellow" />
        <div className="services-grid">
          {services.map((service, index) => <ServiceCard key={service.number} service={service} index={index} />)}
        </div>
      </div>
    </section>
  );
}
