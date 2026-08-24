import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { InteractiveProjectCard } from "../interactive-project-card";
import { ProjectVisual } from "../project-visual";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = { title: "Projects — Akshat Porwal", description: "Selected AI systems, learning products, and engineering work by Akshat Porwal." };

export default function ProjectsPage() {
  return <><SiteHeader /><main id="content" className="inner-page"><header className="index-heading"><Link href="/">Akshat Porwal</Link><h1>Projects built<br />to be inspected.</h1><p>Four systems across AI research, education, product engineering, and infrastructure.</p></header><div className="project-index">{projects.map((project) => <InteractiveProjectCard key={project.slug} href={`/projects/${project.slug}`} label={`Read the ${project.title} case study`}><ProjectVisual kind={project.kind} compact /><article className="project-details"><div className="project-title-row"><h2>{project.title}</h2><span>{project.year} · {project.meta}</span></div><p>{project.summary}</p><div className="project-bottom-row"><span>{project.languages.join(" · ")}</span><strong>Case study <ArrowRight size={14} /></strong></div></article></InteractiveProjectCard>)}</div></main></>;
}
