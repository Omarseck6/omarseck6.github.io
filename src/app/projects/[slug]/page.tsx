import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer/footer";
import { projects } from "@/data/portfolio";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.description, openGraph: { title: project.name, description: project.description, type: "article" } };
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
            <div className="case-window"><p>{project.category}</p><strong>{project.name}</strong><span>{project.technologies.join(" · ")}</span></div>
          </div>
        </div>
      </section>
      <section className="case-body section-light">
        <div className="container-shell case-body-grid">
          <div><p className="eyebrow">The challenge</p><h2>Making complexity feel intentional.</h2></div>
          <div><p>{project.longDescription}</p><div className="case-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><Link href="/#contact" className="button button-dark">Start a project <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
