"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import { ProjectPlaceholder } from "./project-placeholder";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article className="project-card" whileHover="hover" initial="initial">
      <div className="project-visual">
        <Link
          href={`/projects/${project.slug}`}
          className="project-visual-link"
          aria-label={`View ${project.name} case study`}
        >
          <motion.div
            className="project-image"
            variants={{ initial: { scale: 1 }, hover: { scale: 1.06 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.name} – project preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="project-image-img"
              />
            ) : (
              <ProjectPlaceholder project={project} />
            )}
            <div className="project-image-overlay" style={{ background: `linear-gradient(to top, ${project.accent}33, transparent 60%)` }} />
          </motion.div>
        </Link>
        <motion.div
          className="project-actions"
          variants={{ initial: { opacity: 0, y: 12 }, hover: { opacity: 1, y: 0 } }}
        >
          <Link href={`/projects/${project.slug}`}>
            <span>View case study <ArrowUpRight size={16} /></span>
          </Link>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={project.liveLabel ?? `Visit ${project.name} website`}>
              <span><ExternalLink size={16} /></span>
            </a>
          )}
        </motion.div>
        <span className="project-number">0{index + 1}</span>
      </div>
      <div className="project-info">
        <div><p>{project.category} · {project.year}</p><h3>{project.name}</h3></div>
        <p>{project.description}</p>
        <div className="project-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      </div>
    </motion.article>
  );
}