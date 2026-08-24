import { ArrowRight, ArrowUpRight, Atom, Award, Bot, Box, Boxes, Braces, ChartNoAxesCombined, Cloud, Coffee, Container, Database, FileJson, FlaskConical, GitCommitHorizontal, GitPullRequest, GraduationCap, Leaf, Network, PanelsTopLeft, RefreshCw, Search, Workflow, Zap } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { InteractiveProjectCard } from "./interactive-project-card";
import { ProjectVisual } from "./project-visual";
import { SiteHeader } from "./site-header";

const githubProfile = "https://github.com/akshatporwal002";
const skills = [
  { title: "Languages", items: [{ name: "Python", icon: Braces }, { name: "Java", icon: Coffee }, { name: "JavaScript", icon: FileJson }, { name: "SQL", icon: Database }] },
  { title: "Backend systems", items: [{ name: "FastAPI", icon: Zap }, { name: "REST APIs", icon: Network }, { name: "Async systems", icon: RefreshCw }, { name: "API design", icon: Workflow }] },
  { title: "Frontend", items: [{ name: "React", icon: Atom }, { name: "Next.js", icon: PanelsTopLeft }] },
  { title: "Data systems", items: [{ name: "PostgreSQL", icon: Database }, { name: "Redis", icon: Zap }, { name: "MongoDB", icon: Leaf }] },
  { title: "Cloud + infrastructure", items: [{ name: "AWS", icon: Cloud }, { name: "Docker", icon: Container }, { name: "Kubernetes", icon: Boxes }, { name: "Terraform", icon: Box }] },
  { title: "ML + analytics", items: [{ name: "RAG pipelines", icon: Bot }, { name: "Vector search", icon: Search }, { name: "Model evaluation", icon: FlaskConical }, { name: "PCA + MCMC", icon: ChartNoAxesCombined }] },
];
const activity = [
  { date: "22 AUG 2026", type: "commit", title: "Improved provider model updates in Codeology", repo: "ai-engineering-from-scratch", href: "https://github.com/akshatporwal002/ai-engineering-from-scratch/commit/9175271058291e1c462844d19bb0bc2f22c7cd92" },
  { date: "20 AUG 2026", type: "pull", title: "Port-validated CloudFormation deployment fixes", repo: "2026W1-Stocks-In-Hand · merged", href: "https://github.com/Monash-FIT3170/2026W1-Stocks-In-Hand/pull/24" },
  { date: "17 AUG 2026", type: "pull", title: "Reduced staging analysis Lambda memory", repo: "2026W1-Stocks-In-Hand · merged", href: "https://github.com/Monash-FIT3170/2026W1-Stocks-In-Hand/pull/21" },
  { date: "14 AUG 2026", type: "pull", title: "Added secure AWS staging deployment", repo: "2026W1-Stocks-In-Hand · merged", href: "https://github.com/Monash-FIT3170/2026W1-Stocks-In-Hand/pull/14" },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <InteractiveProjectCard href={`/projects/${project.slug}`} label={`Read the ${project.title} case study`}>
      <ProjectVisual kind={project.kind} compact />
      <article className="project-details">
        <div className="project-title-row"><h3>{project.title}</h3><span>{project.meta}</span></div>
        <p>{project.shortDescription}</p>
        <div className="project-bottom-row"><span>{project.languages.slice(0, 3).join(" · ")}</span><strong>Case study <ArrowRight size={14} /></strong></div>
      </article>
    </InteractiveProjectCard>
  );
}
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="content">
        <div className="portfolio-canvas">
          <section className="compact-hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <h1 id="hero-title">I build thoughtful<br /> AI products.</h1>
              <p className="hero-stats">AI systems · learning products · research tools</p>
              <p className="hero-description">Software Engineering and Commerce (Actuarial Studies) at Monash. I turn ambitious ideas into software people can inspect, use, and trust.</p>
              <div className="hero-actions"><a href="#work">See my work <ArrowRight size={15} /></a><a href={githubProfile} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a></div>
            </div>
            <ProjectVisual kind="quantum" />
          </section>

          <section className="compact-showcase" id="work" aria-labelledby="work-title">
            <div className="work-column">
              <div className="section-title"><h2 id="work-title">Selected work</h2><span /><Link className="section-link" href="/projects">View all projects <ArrowRight size={14} /></Link></div>
              <div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
            </div>
          </section>

          <section className="skills-section" id="skills" aria-labelledby="skills-title">
            <div className="section-title"><h2 id="skills-title">Technical skills</h2><span /></div>
            <div className="skill-groups">{skills.map((group) => <article className="skill-group" key={group.title}><h3>{group.title}</h3><div>{group.items.map((skill) => { const Icon = skill.icon; return <span className="skill-item" key={skill.name}><i><Icon size={18} strokeWidth={1.6} aria-hidden="true" /></i><strong>{skill.name}</strong></span>; })}</div></article>)}</div>
          </section>

          <section className="credentials-section" id="credentials" aria-labelledby="credentials-title">
            <div className="section-title"><h2 id="credentials-title">Education + certifications</h2><span /></div>
            <div className="credentials-grid">
              <article><div><GraduationCap size={24} aria-hidden="true" /></div><p><span>MONASH UNIVERSITY · 2023–2027</span><strong>Bachelor of Software Engineering and Bachelor of Commerce</strong><small>Actuarial Studies · Melbourne, Australia</small></p></article>
              <article><div><Award size={24} aria-hidden="true" /></div><p><span>CERTIFICATIONS</span><strong>AWS Certified Cloud Practitioner</strong><small>Amazon Web Services</small></p></article>
              <article><div><Award size={24} aria-hidden="true" /></div><p><span>CERTIFICATIONS</span><strong>IBM Machine Learning</strong><small>IBM</small></p></article>
            </div>
          </section>

          <section className="contribution-section" id="open-source" aria-labelledby="contribution-title">
            <div className="section-title"><h2 id="contribution-title">Git contribution log</h2><span /><a className="section-link" href={`${githubProfile}?tab=overview&from=2026-08-01&to=2026-08-23`} target="_blank" rel="noreferrer">Full activity <ArrowUpRight size={14} /></a></div>
            <div className="contribution-layout">
              <div className="activity-log">{activity.map((item) => { const Icon = item.type === "pull" ? GitPullRequest : GitCommitHorizontal; return <a href={item.href} target="_blank" rel="noreferrer" key={item.href}><time>{item.date}</time><span className="activity-mark"><Icon size={16} aria-hidden="true" /></span><p><strong>{item.title}</strong><span>{item.repo}</span></p><ArrowUpRight className="activity-arrow" size={16} aria-hidden="true" /></a>; })}</div>
              <aside className="open-source-note"><span>OPEN SOURCE // CURRENT</span><h3>Building in public.</h3><p>Recent work spans AI education, provider reliability, and production infrastructure. Every entry links to the original artifact.</p><a href="https://github.com/rohitg00/ai-engineering-from-scratch" target="_blank" rel="noreferrer">Upstream project <ArrowUpRight size={15} /></a></aside>
            </div>
          </section>

          <section className="contact-section" aria-labelledby="contact-title"><p>Have an interesting system to build?</p><h2 id="contact-title">Let&apos;s compare notes.</h2><a href="mailto:akshatporwalwork@gmail.com">Send an email <ArrowUpRight size={17} /></a></section>
        </div>
      </main>
      <footer className="compact-footer"><div><span>Akshat Porwal · Melbourne</span><span>Software engineering · AI systems · learning products</span><a href="#content">Top ↑</a></div></footer>
    </>
  );
}
