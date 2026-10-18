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
            <p>I&apos;m a full-stack engineer with a {portfolio.education.degree} from {portfolio.education.school}, focused on product and software quality. I connect TypeScript interfaces, business APIs, service integrations and production delivery.</p>
            <p>My approach: turn business needs into reliable, consistent and scalable digital solutions — balancing functional requirements, technical quality and ease of use. I work in {portfolio.languages.map((language) => `${language.name} (${language.level})`).join(" and ")}.</p>
          </Reveal>
        </div>

        <div className="about-details">
          <Reveal className="about-stats">
            <div><strong>{portfolio.projectsCompleted}<sup>+</sup></strong><span>Projects completed</span></div>
            <div><strong>{portfolio.yearsExperience}<sup>+</sup></strong><span>Years of experience</span></div>
          </Reveal>
          <Reveal delay={0.12} className="about-image-wrap">
            <div className="about-image-card">
              <Image src="/images/os.webp" alt="Omar Seck in his workspace" fill sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="about-image-overlay" />
              <p>Ideas become products<br />through disciplined craft.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
