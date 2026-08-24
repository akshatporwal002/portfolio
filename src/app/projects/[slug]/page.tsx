import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { ProjectVisual } from "../../project-visual";
import { SiteHeader } from "../../site-header";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} — Akshat Porwal`, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return <><SiteHeader /><main id="content" className="case-study"><div className="case-nav"><Link href="/projects"><ArrowLeft size={15} /> All projects</Link><span>{project.year} · {project.status}</span></div><header className="case-hero"><div><h1>{project.title}</h1><p>{project.summary}</p>{(project.repository || project.live) && <div className="case-actions">{project.repository && <a href={project.repository} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={15} /></a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={15} /></a>}</div>}</div><ProjectVisual kind={project.kind} /></header><div className="case-body"><aside className="case-facts"><dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Languages</dt><dd>{project.languages.join(", ")}</dd></div><div><dt>System</dt><dd>{project.tools.join(", ")}</dd></div></dl></aside><article className="case-prose"><section><h2>The problem</h2><p>{project.problem}</p></section><section><h2>The approach</h2><p>{project.approach}</p></section><section><h2>My contribution</h2><ul>{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul></section><section><h2>What exists now</h2><ul>{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></section></article></div><Link className="next-project" href={`/projects/${next.slug}`}><span>Next project</span><strong>{next.title}</strong><ArrowRight size={24} /></Link></main></>;
}
