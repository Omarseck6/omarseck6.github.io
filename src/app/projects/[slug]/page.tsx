import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer/footer";
import { ProjectPlaceholder } from "@/components/projects/project-placeholder";
import { projects } from "@/data/portfolio";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
      url: `/projects/${project.slug}/`,
      images: [{ url: project.image ?? "/opengraph-image.png", alt: `${project.name} – project preview` }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="case-page">
      <section className="case-hero section-dark">
        <div className="dark-grid" />
        <div className="container-shell section-content">
          <Link href="/#projects" className="case-back"><ArrowLeft size={16} /> Back to selected work</Link>
          <div className="case-heading"><p>{project.category} · {project.year}</p><h1>{project.name}</h1><span>{project.description}</span></div>
          <div className="case-art" style={{ background: `radial-gradient(circle at 35% 35%, ${project.accent}, #090909 65%)` }}>
            <div className="case-image">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.name} – project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                  className="case-image-img"
                />
              ) : (
                <ProjectPlaceholder project={project} />
              )}
              <div className="case-image-overlay" />
            </div>
          </div>
        </div>
      </section>
      <section className="case-body section-light">
        <div className="container-shell case-body-grid">
          <div><p className="eyebrow">The challenge</p><h2>Making complexity feel intentional.</h2></div>
          <div><p>{project.longDescription}</p><div className="case-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="case-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button button-dark">{project.liveLabel ?? "Visit live site"} <ArrowUpRight size={17} /></a>}<Link href="/#contact" className="button button-outline">Start a project <ArrowUpRight size={17} /></Link></div></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
