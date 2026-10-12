import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { researchPapers } from "@/data/research";
import { SiteHeader } from "../site-header";
import "./research.css";

export const metadata: Metadata = {
  title: "Agentic AI & Applications Research — Akshat Porwal",
  description: "Four research projects in progress exploring agentic AI, multi-agent systems, large language models, and adaptive AI applications.",
  openGraph: { title: "Agentic AI & Applications Research — Akshat Porwal", description: "Research in progress on multi-agent architectures, LLM-powered systems, and adaptive AI applications." },
};

const shortTitles = ["Adaptive AI for quantum education", "The architecture behind LearnLens", "Practice that transfers", "Learning against a deadline"];
const disciplines = ["Quantum computing education", "Multi-agent system design", "Adaptive practice & retention", "Personalised review scheduling"];

function ResearchDiagram({ index }: { index: number }) {
  return <figure className={`research-diagram diagram-${index}`}>
    <div className="diagram-canvas" aria-hidden="true">
      {index === 0 && <><div className="quantum-wires"><div><span>|0⟩</span><i /><b>H</b><i /><b>●</b><i /></div><div><span>|0⟩</span><i /><b>I</b><i /><b>⊕</b><i /></div></div><div className="diagram-process"><span>Learner</span><ArrowRight size={16} /><span>AI support</span><ArrowRight size={16} /><span>Reflection</span></div></>}
      {index === 1 && <><div className="agent-source">Course materials + learner activity</div><div className="agent-roles"><span>Activity<br />generation</span><span>Tutoring</span><span>Feedback<br />generation</span></div><div className="agent-review">Quality review / fallback</div><div className="agent-end">Progression decisions</div></>}
      {index === 2 && <><div className="practice-variants"><span>Concept A</span><span>A₁</span><span>A₂</span><span>A₃</span></div><div className="practice-route"><span>Spaced review</span><ArrowRight size={20} /><span className="unseen-question">Unseen question ?</span></div><div className="diagram-axis"><span>Practice</span><span>Delayed assessment</span></div></>}
      {index === 3 && <><div className="deadline-chart"><div className="schedule-marks"><i /><i /><i /><i /><i /><i /><i /></div><div className="deadline-marker"><span>Deadline</span><b /></div></div><div className="diagram-axis"><span>Fixed study-time budget</span><span>Assessment</span></div><div className="deadline-goal">Schedule → target performance</div></>}
    </div>
    <figcaption>{disciplines[index]} <span>Concept diagram</span></figcaption>
  </figure>;
}

export default function ResearchPage() {
  return <>
    <SiteHeader />
    <main id="content" className="research-page portfolio-canvas">
      <header className="research-hero">
        <div><h1>Research on<br /><em>Agentic AI &amp;<br />Applications.</em></h1><p className="research-intro">I am currently contributing to four research papers exploring multi-agent systems, large language models, and adaptive AI applications, with education as the testing ground.</p><a className="research-jump" href="#papers">Explore the four papers <ArrowDown size={16} /></a></div>
        <aside className="research-hero-note"><div className="research-status"><span /> Research in progress</div><p>Investigating how specialised AI agents coordinate, ground their responses, review feedback, and adapt to learner needs.</p><div className="research-note-facts"><span>Supervisor</span><strong>Charith Jayasekara</strong><span>Publication status</span><strong>All four projects are in development</strong></div><p className="research-small">No papers have been published yet, so I do not have a Google Scholar profile to share at this stage. Listed venues are intended targets, not confirmed submissions.</p></aside>
      </header>

      <nav className="research-index" aria-label="Research papers">{researchPapers.map((paper, index) => <a key={paper.id} href={`#${paper.id}`}><span>Paper {index + 1}</span><strong>{shortTitles[index]}</strong><ArrowDown size={15} /></a>)}</nav>

      <section id="papers" className="research-papers" aria-label="Research in progress">
        {researchPapers.map((paper, index) => <article className="research-paper" id={paper.id} key={paper.id} aria-labelledby={`${paper.id}-title`}>
          <div className="research-paper-aside"><ResearchDiagram index={index} /><dl className="research-paper-facts"><div><dt>Target venue</dt><dd>{paper.venue}</dd></div><div><dt>Stage</dt><dd>{index < 2 ? "In development" : "Research question in development"}</dd></div><div><dt>Authorship</dt><dd>{index < 2 ? "Collaborative research" : "Akshat Porwal"}</dd></div></dl>{index < 2 && <Link className="research-related" href="/projects/quantumlearn">Explore the LearnLens system <ArrowUpRight size={15} /></Link>}</div>
          <div className="research-paper-copy"><h2 id={`${paper.id}-title`}>{paper.title}</h2><div className="research-question"><h3>Research question</h3><p>{paper.question}</p></div><p className="research-overview">{paper.overview[0]}</p>
            <details className="research-details"><summary><span>Read research details</span><ChevronDown size={18} aria-hidden="true" /></summary><div className="research-expanded"><h3>Overview & planned evaluation</h3>{paper.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<h3>Research areas</h3><p>{paper.areas}</p><h3>Authors</h3><p>{paper.authors}</p><h3>Supervisor</h3><p>{paper.supervisor}</p><h3>Current status</h3><p>{paper.status}</p></div></details>
          </div>
        </article>)}
      </section>
      <section className="research-closing"><div><h2>Let&apos;s talk research.</h2><p>Interested in the questions, the systems, or the work behind them?</p></div><a href="mailto:akshatporwalwork@gmail.com">Get in touch <ArrowUpRight size={17} /></a></section>
      <p className="research-publication-note">These are research projects in progress, not published papers or confirmed submissions. Target venues and study details will be updated as the manuscripts develop.</p>
    </main>
    <footer className="compact-footer"><div><span>Akshat Porwal · Melbourne</span><Link href="/">Back to portfolio</Link><a href="#content">Back to top ↑</a></div></footer>
  </>;
}
