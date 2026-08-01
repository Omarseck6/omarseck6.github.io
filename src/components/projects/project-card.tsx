"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article className="project-card" whileHover="hover" initial="initial">
      <Link href={`/projects/${project.slug}`} className="project-visual" aria-label={`View ${project.name} case study`}>
        <motion.div className="project-orb" variants={{ initial: { scale: 1, rotate: -8 }, hover: { scale: 1.08, rotate: 0 } }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ background: `radial-gradient(circle at 32% 30%, ${project.accent}, #130909 68%)` }}>
          <span>{project.name.slice(0, 1)}</span>
        </motion.div>
        <div className="project-browser">
          <div><i /><i /><i /></div>
          <p>{project.category}</p>
          <strong>{project.name}</strong>
          <div className="browser-lines"><span /><span /><span /></div>
        </div>
        <motion.div className="project-actions" variants={{ initial: { opacity: 0, y: 12 }, hover: { opacity: 1, y: 0 } }}>
          <span>View case study <ArrowUpRight size={16} /></span>
          <span aria-label="GitHub"><Code2 size={16} /></span>
        </motion.div>
        <span className="project-number">0{index + 1}</span>
      </Link>
      <div className="project-info">
        <div><p>{project.category} · {project.year}</p><h3>{project.name}</h3></div>
        <p>{project.description}</p>
        <div className="project-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      </div>
    </motion.article>
  );
}
