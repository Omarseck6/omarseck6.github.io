import type { Project } from "@/types/portfolio";

// Branded visual for projects that have no screenshot yet.
export function ProjectPlaceholder({ project }: { project: Project }) {
  return (
    <div className="project-placeholder" style={{ background: `radial-gradient(circle at 75% 20%, ${project.accent}, #0d0a0b 70%)` }} role="img" aria-label={`${project.name} – ${project.category}`}>
      <small>{project.category}</small>
      <strong>{project.name}</strong>
    </div>
  );
}
