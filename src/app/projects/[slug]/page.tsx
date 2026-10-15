import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { SiteHeader } from "../../site-header";
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params; const project = getProject(slug);
  return project ? { title: `${project.title} — Akshat Porwal`, description: project.summary } : {};
}
export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params; const project = getProject(slug); if (!project) notFound();
  const index = projects.findIndex(item => item.slug === slug); const next = projects[(index + 1) % projects.length];
  return <><SiteHeader /><main id="content" className="sugar-case"><header className="sugar-case-heading"><p>Project {index + 1} / {project.year}</p><h1>{project.live ? <a className="project-title-link" href={project.live} target="_blank" rel="noreferrer">{project.title} ↗</a> : project.title}.<br />{project.shortDescription}</h1></header><article className="sugar-case-body"><div className="sugar-tags">{project.meta.split(" · ").map(tag => <span key={tag}>{tag}</span>)}</div><div className="sugar-role"><h2>My role</h2><p>{project.role} · {project.status}</p><p>{project.languages.join(" · ")}<br />{project.tools.join(" · ")}</p><div className="sugar-resource-links">{project.repository && <a href={project.repository} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={16} /></a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={16} /></a>}</div></div><section className="sugar-prose-row"><h2>Background</h2><p>{project.problem}</p></section><section className="sugar-prose-row"><h2>Approach</h2><p>{project.approach}</p></section>{project.kind === "engram" ? <section className="engram-showcase" aria-label="Engram screenshots">{["Study and recall", "Practice and progress", "Settings and AI"].map(group => <section key={group}><h2>{group}</h2><div className="project-phone-gallery">{project.screenshots?.filter(shot => shot.group === group).map(shot => <figure key={shot.src}><Image src={shot.src} alt={shot.alt} width={shot.width ?? 804} height={shot.height ?? 1748} sizes="(max-width:600px) 70vw, 220px" /><figcaption>{shot.alt}</figcaption></figure>)}</div></section>)}</section> : <div className="project-screenshots">{project.screenshots?.map(shot => <figure className="sugar-case-image" key={shot.src}><Image src={shot.src} alt={shot.alt} width={shot.width ?? 1200} height={shot.height ?? 750} sizes="(max-width:800px) 100vw, 680px" /><figcaption>{shot.alt}</figcaption></figure>)}</div>}<section className="sugar-prose-row"><h2>My contribution</h2><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></section><section className="sugar-prose-row"><h2>Outcomes</h2><ul>{project.outcomes.map(item => <li key={item}>{item}</li>)}</ul></section></article><Link className="sugar-next" href={`/projects/${next.slug}`}><span>Next / Project {(index + 1) % projects.length + 1}</span><strong>{next.title}</strong><ArrowUpRight /></Link><footer className="sugar-footer"><Link href="/projects"><ArrowLeft size={16} /> Back to the list</Link><span>© Akshat Porwal</span></footer></main></>;
}
