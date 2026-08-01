"use client";

import { motion } from "framer-motion";
import { Braces, CloudCog, Code2, Database, PenTool, ServerCog } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = [Code2, ServerCog, Database, CloudCog, PenTool];

export function Skills() {
  return (
    <section id="skills" className="skills section-light">
      <div className="container-shell">
        <Reveal><SectionHeading eyebrow="02 · Selected stack" title="Tools chosen for the problem, not the trend." description="A focused toolkit spanning interface engineering, resilient backend systems, data and cloud delivery." /></Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => {
            const Icon = icons[groupIndex] ?? Braces;
            return (
              <Reveal key={group.title} delay={groupIndex * 0.06} className={`skill-group skill-group-${groupIndex + 1}`}>
                <div className="skill-group-head"><Icon size={22} /><h3>{group.title}</h3><span>{String(groupIndex + 1).padStart(2, "0")}</span></div>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <motion.div key={skill} className="skill-chip" whileHover={{ y: -5, rotate: groupIndex % 2 ? -1 : 1 }} transition={{ type: "spring", stiffness: 350, damping: 22 }}>
                      <span>{skill.slice(0, 2).toUpperCase()}</span>{skill}
                    </motion.div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
