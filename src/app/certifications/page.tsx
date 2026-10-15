import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "../site-header";
import { credentials, resume } from "@/data/resume";

export const metadata: Metadata = { title: "Certifications & Skills — Akshat Porwal", description: "AWS and IBM credentials supporting Akshat’s work in cloud infrastructure and applied AI." };

export default function CertificationsPage() {
  return <><SiteHeader /><main id="content" className="sugar-case" tabIndex={-1}><header className="sugar-case-heading"><p>From my bookshelf</p><h1>Always learning.<br />Building on the foundations.</h1></header><div className="credential-shelf">{credentials.map((credential, index) => <article className="credential-book" key={credential.title}><span className="credential-number" aria-hidden="true">0{index + 1}</span><div><span className="credential-category">{credential.category}</span><h2>{credential.title}</h2><p>{credential.issuer}</p><p>{credential.description}</p></div></article>)}<section className="skills-section"><h2>Technical skills</h2><dl className="cv-skills">{resume.skills.map(skill => <div key={skill.title}><dt>{skill.title}</dt><dd>{skill.text}</dd></div>)}</dl></section><p className="credential-note">The foundations behind my work in applied AI and cloud engineering.</p><Link className="big-link" href="/experience">Explore my experience <ArrowUpRight /></Link></div><footer className="sugar-footer"><Link href="/"><ArrowLeft size={16} /> Back to my room</Link><span>© Akshat Porwal</span></footer></main></>;
}
