"use client";

import { motion } from "framer-motion";
import { Braces, CloudCog, Code2, Database, FlaskConical, ServerCog } from "lucide-react";
import { FaAngular, FaAws, FaCss3, FaDocker, FaGitAlt, FaHtml5, FaJava, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import {
  SiAnsible,
  SiCypress,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGitlab,
  SiGrafana,
  SiJavascript,
  SiJenkins,
  SiJest,
  SiJunit5,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPm2,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiQuarkus,
  SiRedhatopenshift,
  SiSelenium,
  SiSentry,
  SiSpringboot,
  SiSupabase,
  SiTypescript,
  SiVitest,
  SiVuedotjs,
} from "react-icons/si";
import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = [Code2, ServerCog, Database, CloudCog, FlaskConical];

const skillIcons: Record<string, typeof FaReact> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  React: FaReact,
  "Next.js": SiNextdotjs,
  Angular: FaAngular,
  "Vue.js": SiVuedotjs,
  "React Native": FaReact,
  Expo: SiExpo,
  Flutter: SiFlutter,
  HTML: FaHtml5,
  CSS: FaCss3,
  "Node.js": FaNodeJs,
  NestJS: SiNestjs,
  Express: SiExpress,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  Quarkus: SiQuarkus,
  Python: SiPython,
  PHP: FaPhp,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Linux: SiLinux,
  Nginx: SiNginx,
  PM2: SiPm2,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  OpenShift: SiRedhatopenshift,
  Ansible: SiAnsible,
  Jenkins: SiJenkins,
  "GitLab CI": SiGitlab,
  "GitHub Actions": SiGithubactions,
  EAS: SiExpo,
  AWS: FaAws,
  Git: FaGitAlt,
  JUnit: SiJunit5,
  Jest: SiJest,
  Vitest: SiVitest,
  Cypress: SiCypress,
  Selenium: SiSelenium,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  Sentry: SiSentry,
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
