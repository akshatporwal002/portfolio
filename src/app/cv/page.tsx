import type { Metadata } from "next";

import Link from "next/link";

import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { SiteHeader } from "../site-header";

import { getProject } from "@/data/projects";
import { resume } from "@/data/resume";

import { DownloadCV } from "./print-cv";



export const metadata: Metadata = { title: "CV — Akshat Porwal", description: "Akshat Porwal’s experience, education, and projects across applied AI, cloud infrastructure, and fintech." };



export default function CVPage() {

  return <><SiteHeader /><main id="content" className="sugar-case cv-page" tabIndex={-1}>

    <header className="sugar-case-heading"><p>My ID card / CV</p><h1>{resume.name}<br />Systems with purpose.</h1></header>

    <article className="cv-content"><div className="cv-intro"><p>{resume.summary}</p><div className="cv-contact"><a href="mailto:akshatporwalwork@gmail.com">Email <ArrowUpRight size={16} /></a><a href="https://linkedin.com/in/akshatporwal002" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a><a href="https://github.com/akshatporwal002" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a><DownloadCV /></div></div>

      <section className="cv-section"><h2>Education</h2><div><h3>{resume.education.university}</h3><p>{resume.education.degree}</p><p className="cv-meta">{resume.education.location} · {resume.education.dates}</p></div></section>

      <section className="cv-section"><h2>Technical skills</h2><dl className="cv-skills">{resume.skills.map(skill => <div key={skill.title}><dt>{skill.title}</dt><dd>{skill.text}</dd></div>)}</dl></section>

      <section className="cv-section"><h2>Experience</h2><div>{resume.experience.map(job => <section className="cv-entry" key={job.organisation}><h3>{job.title}</h3><p className="cv-meta">{job.organisation} · {job.dates}</p><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></section>)}</div></section>

      <section className="cv-section"><h2>Projects</h2><div>{resume.projects.map(project => <section className="cv-entry" key={project.title}><h3>{project.href ? <a className="project-title-link" href={getProject(project.slug)?.live ?? project.href} target={getProject(project.slug)?.live ? "_blank" : undefined} rel={getProject(project.slug)?.live ? "noreferrer" : undefined}>{project.title} <ArrowUpRight size={19} /></a> : project.title}</h3><p className="cv-meta">{project.year && `${project.year} · `}{project.stack}</p><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul></section>)}</div></section>

    </article><footer className="sugar-footer"><Link href="/"><ArrowLeft size={16} /> Back to my room</Link><Link href="/certifications">Certifications &amp; skills ↗</Link></footer>

  </main></>;

}

