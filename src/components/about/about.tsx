import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="about section-light">
      <div className="container-shell">
        <Reveal>
          <div className="eyebrow-row"><span className="eyebrow-line" /><p className="eyebrow">01 · About me</p></div>
        </Reveal>
        <div className="about-intro">
          <Reveal className="about-title-wrap">
            <h2 className="about-title">The crafted mind that builds <span>the future of modern technology.</span></h2>
          </Reveal>
          <Reveal delay={0.1} className="about-copy">
            <p>I work at the intersection of engineering, product strategy and visual design. The goal is never to add more — it is to make the right things feel inevitable.</p>
            <p>From architecture to the final micro-interaction, I build coherent systems that teams can maintain and people enjoy using.</p>
          </Reveal>
        </div>

        <div className="about-details">
          <Reveal className="about-stats">
            <div><strong>{portfolio.projectsCompleted}<sup>+</sup></strong><span>Projects completed</span></div>
            <div><strong>{portfolio.yearsExperience}<sup>+</sup></strong><span>Years of experience</span></div>
          </Reveal>
          <Reveal delay={0.12} className="about-image-wrap">
            <div className="about-image-card">
              <Image src="/images/os.png" alt="Omar Seck dans son environnement de création" fill sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="about-image-overlay" />
              <p>Ideas become products<br />through disciplined craft.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
