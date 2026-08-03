"use client";

import { motion } from "framer-motion";
import { Braces, CloudCog, Code2, Database, PenTool, ServerCog } from "lucide-react";
import { FaAngular, FaAws, FaCss3, FaDocker, FaFigma, FaGitAlt, FaHtml5, FaLaravel, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { SiDotnet, SiFirebase, SiGithub, SiJavascript, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPostgresql, SiPrisma, SiSharp, SiSupabase, SiTypescript, SiVercel } from "react-icons/si";
import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = [Code2, ServerCog, Database, CloudCog, PenTool];

const skillIcons: Record<string, typeof FaReact> = {
  HTML: FaHtml5,
  CSS: FaCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: FaReact,
  "Next.js": SiNextdotjs,
  Angular: FaAngular,
  "Node.js": FaNodeJs,
  NestJS: SiNestjs,
  Laravel: FaLaravel,
  PHP: FaPhp,
  ".NET": SiDotnet,
  "C#": SiSharp,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Prisma: SiPrisma,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  Docker: FaDocker,
  Git: FaGitAlt,
  GitHub: SiGithub,
  AWS: FaAws,
  Vercel: SiVercel,
  Figma: FaFigma,
};

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
                  {group.skills.map((skill) => {
                    const SkillIcon = skillIcons[skill] ?? Code2;
                    return (
                      <motion.div key={skill} className="skill-chip" whileHover={{ y: -5, rotate: groupIndex % 2 ? -1 : 1 }} transition={{ type: "spring", stiffness: 350, damping: 22 }}>
                        <span><SkillIcon /></span>{skill}
                      </motion.div>
                    );
                  })}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
