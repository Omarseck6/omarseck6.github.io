"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  const timeline = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timeline, offset: ["start 75%", "end 70%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="experience" className="experience section-light">
      <div className="container-shell">
        <Reveal><SectionHeading eyebrow="04 · Experience" title="A journey shaped by responsibility, curiosity and outcomes." description="Each chapter added a new layer: stronger systems, sharper product thinking and broader leadership." /></Reveal>
        <div className="timeline" ref={timeline}>
          <div className="timeline-line"><motion.span style={{ scaleY }} /></div>
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 0.06} className="timeline-item">
              <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="timeline-role">
                <h3>{experience.role}</h3>
                <p>{experience.company}</p>
              </div>
              <div className="timeline-body">
                <span>{experience.period}</span>
                <p>{experience.description}</p>
                <div>{experience.technologies.map((technology) => <i key={technology}>{technology}</i>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
