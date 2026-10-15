import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "../site-header";
import { resume } from "@/data/resume";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "About — Akshat Porwal" };
export default function AboutPage() {
  return <><SiteHeader /><main id="content" className="sugar-case"><header className="sugar-case-heading"><p>A little about me</p><h1>Curiosity, code,<br />and a purpose.</h1></header><article className="sugar-case-body"><figure className="sugar-case-image"><Image src="/art/pixel-room-v2.png" alt="Pixel art of Akshat working in his room" width={1600} height={960} /></figure><section className="sugar-prose-row"><h2>Hey, I’m Akshat.</h2><p>I’m studying Software Engineering and Commerce (Actuarial Studies) at Monash University in Melbourne. I build applied AI systems, cloud infrastructure, and financial technology. I’m interested in opportunities across AI engineering, Cloud/DevOps, solutions architecture, and fintech, with a focus on software people can inspect, use, and trust.</p></section><section className="sugar-prose-row"><h2>What I work with</h2><dl className="cv-skills">{resume.skills.map(skill => <div key={skill.title}><dt>{skill.title}</dt><dd>{skill.text}</dd></div>)}</dl></section><section className="sugar-prose-row"><h2>Education</h2><div><p>Bachelor of Software Engineering and Bachelor of Commerce<br />Monash University · 2023–2027<br />Actuarial Studies</p><p>AWS Certified Cloud Practitioner<br />IBM Machine Learning</p></div></section><section className="sugar-prose-row"><h2>Research</h2><div><p>Exploring agentic AI, multi-agent systems, and adaptive learning applications.</p><Link className="text-link" href="/research">Explore my research <ArrowUpRight size={18} /></Link></div></section></article><footer className="sugar-footer"><Link href="/projects">See my work ↗</Link><a href="mailto:akshatporwalwork@gmail.com">Say hello ↗</a></footer></main></>;
}

