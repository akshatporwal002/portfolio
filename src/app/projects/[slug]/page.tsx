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
  return <><SiteHeader /><main id="content" className="sugar-case"><header className="sugar-case-heading"><p>Case {index + 1} / {project.year}</p><h1>{project.title}.<br />{project.shortDescription}</h1></header><article className="sugar-case-body"><div className="sugar-tags">{project.meta.split(" · ").map(tag => <span key={tag}>{tag}</span>)}</div><div className="sugar-role"><h2>My role</h2><p>{project.role} · {project.status}</p><p>{project.languages.join(" · ")}<br />{project.tools.join(" · ")}</p><div className="sugar-resource-links">{project.repository && <a href={project.repository} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={16} /></a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={16} /></a>}</div></div><section className="sugar-prose-row"><h2>Background</h2><p>{project.problem}</p></section><section className="sugar-prose-row"><h2>Approach</h2><p>{project.approach}</p></section>{project.screenshots?.map(screenshot => <figure className="sugar-case-image" key={screenshot.src}><Image src={screenshot.src} alt={screenshot.alt} width={1200} height={750} /><figcaption>{screenshot.alt}</figcaption></figure>)}<section className="sugar-prose-row"><h2>My contribution</h2><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></section><section className="sugar-prose-row"><h2>Outcomes</h2><ul>{project.outcomes.map(item => <li key={item}>{item}</li>)}</ul></section></article><Link className="sugar-next" href={`/projects/${next.slug}`}><span>Next / Case {(index + 1) % projects.length + 1}</span><strong>{next.title}</strong><ArrowUpRight /></Link><footer className="sugar-footer"><Link href="/projects"><ArrowLeft size={16} /> Back to the list</Link><span>© Akshat Porwal</span></footer></main></>;
}
