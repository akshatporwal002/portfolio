"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

function Marquee({ text }: { text: string }) {
  const track = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const measure = () => { const width = element.firstElementChild?.getBoundingClientRect().width; if (width) element.style.animationDuration = `${width / 90}s`; };
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    measure();
    return () => observer.disconnect();
  }, []);
  return <span className="gallery-word" aria-hidden="true"><span ref={track} className="marquee-track"><span>{text}&nbsp; / &nbsp;</span><span>{text}&nbsp; / &nbsp;</span></span></span>;
}
export function CaseGallery({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id); }, { threshold: .55 });
    document.querySelectorAll(".gallery-slide").forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <div className="case-gallery"><section id="about" className={`gallery-slide gallery-about ${active === "about" ? "is-current" : ""}`}><h1>About</h1><div className="gallery-art"><Marquee text="From an idea to something real." /><Link href="/about" className="about-art" aria-label="Read about Akshat"><Image src="/art/pixel-room-v2.png" alt="Akshat’s pixel workspace" width={440} height={280} /></Link></div><Link href="/about" className="gallery-summary">Thoughtful systems. Useful products.<br />A little curiosity behind everything I build. <ArrowUpRight /></Link></section>
    {projects.map((project, index) => <section id={project.slug} className={`gallery-slide ${active === project.slug ? "is-current" : ""}`} key={project.slug}><h2>Project {index + 1}</h2><Link className="gallery-case-link" href={`/projects/${project.slug}`} aria-label={`Read ${project.title} case study`}><div className="gallery-art"><Marquee text={project.shortDescription} /><div className={`gallery-image art-${project.kind}`}>{project.kind === "engram" ? <div className="gallery-phones">{project.screenshots?.slice(0,3).map(shot => <Image key={shot.src} src={shot.src} alt={shot.alt} width={1206} height={2622} />)}</div> : project.screenshots?.[0] ? <Image src={project.screenshots[0].src} alt={project.screenshots[0].alt} width={520} height={320} style={{ objectPosition: project.screenshots[0].position }} /> : <span className="pixel-symbol" aria-hidden="true">{project.kind === "quantum" ? "|ψ〉" : "⌘"}</span>}</div></div></Link><div className="gallery-summary"><h3><a className="project-title-link" href={project.live ?? `/projects/${project.slug}`} target={project.live ? "_blank" : undefined} rel={project.live ? "noreferrer" : undefined}>{project.title} <ArrowUpRight /></a></h3><p>{project.shortDescription}</p><div className="sugar-tags">{project.meta.split(" · ").map(tag => <span key={tag}>{tag}</span>)}</div><div className="gallery-project-links"><Link href={`/projects/${project.slug}`}>Explore project ↗</Link>{project.live && <a href={project.live} target="_blank" rel="noreferrer">Open live project ↗</a>}</div></div></section>)}
    <section id="contact" className="gallery-slide gallery-contact"><h2>Contact</h2><p>Have an interesting<br />system to build?</p><a className="big-link" href="mailto:akshatporwalwork@gmail.com">Let’s compare notes <ArrowUpRight /></a><a href="https://github.com/akshatporwal002" target="_blank" rel="noreferrer">Find me on GitHub ↗</a></section>
    <nav className="gallery-index" aria-label="Project sections">{[{ id: "about", title: "About" }, ...projects.map((project, index) => ({ id: project.slug, title: `Project ${index + 1}` })), { id: "contact", title: "Contact" }].map(item => <a href={`#${item.id}`} key={item.id} aria-current={active === item.id ? "location" : undefined}>{item.title}<i /></a>)}</nav><span className="gallery-copyright">© Akshat Porwal</span></div>;
}


