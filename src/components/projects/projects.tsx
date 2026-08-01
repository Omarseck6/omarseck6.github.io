import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section id="projects" className="projects section-dark">
      <div className="dark-grid" />
      <div className="container-shell section-content">
        <Reveal><SectionHeading light eyebrow="05 · Selected work" title="Products designed to earn attention — and keep it." description="A selection of product systems where strategy, software and interaction came together." /></Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => <Reveal key={project.slug} delay={(index % 2) * 0.08}><ProjectCard project={project} index={index} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
