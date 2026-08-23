import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  Smartphone,
} from "lucide-react";
import { SiteHeader } from "./site-header";

const githubProfile = "https://github.com/akshatporwal002";

const projects = [
  {
    kind: "quantum",
    title: "QuantumLearn",
    meta: "Honours · AI research",
    description: "An agentic learning system for quantum computing with simulation-grounded feedback.",
    tags: "Python · TypeScript · RAG",
    href: `${githubProfile}/Monash-Honours-Project`,
  },
  {
    kind: "markets",
    title: "Stonks in Hand",
    meta: "Research · Product",
    description: "Evidence-first equity intelligence that makes uncertainty and model reasoning visible.",
    tags: "Machine learning · Markets",
    href: `${githubProfile}/Market-Analyser`,
  },
  {
    kind: "curriculum",
    title: "AI Engineering from Scratch",
    meta: "Open source · Education",
    description: "Contributing to a practical curriculum for building modern AI systems from first principles.",
    tags: "Python · Agents · MCP",
    href: `${githubProfile}/ai-engineering-from-scratch`,
  },
  {
    kind: "gradia",
    title: "Gradia",
    meta: "Learning product · MVP",
    description: "A connected learning product for students, tutors, and administrators.",
    tags: "JavaScript · Product systems",
    href: `${githubProfile}/GradiaWeb`,
  },
];

const skills = [
  { title: "Python", detail: "AI · data · backend", icon: Code2 },
  { title: "TypeScript + React", detail: "Web products · interfaces", icon: Braces },
  { title: "Machine learning", detail: "Modelling · evaluation", icon: BrainCircuit },
  { title: "Agentic AI + RAG", detail: "Agents · tools · retrieval", icon: Bot },
  { title: "Swift + iOS", detail: "Native apps · SwiftUI", icon: Smartphone },
  { title: "Data + APIs", detail: "Postgres · pipelines · services", icon: Database },
];

function BuildFigure() {
  const left = [72, 132, 192, 252];
  const middle = [84, 144, 204, 264];
  const right = [112, 172, 232];

  return (
    <figure className="neural-figure" aria-labelledby="neural-caption">
      <div className="figure-label"><span>FIG.001 · BUILD LOOP</span><span>research → system</span></div>
      <svg viewBox="0 0 520 330" role="img" aria-label="A four-layer neural network diagram">
        <path className="corner-marks" d="M8 28V8h20 M492 8h20v20 M512 302v20h-20 M28 322H8v-20" />
        <g className="network-edges">
          {left.flatMap((y1) => middle.map((y2) => <line key={`a-${y1}-${y2}`} x1="86" y1={y1} x2="218" y2={y2} />))}
          {middle.flatMap((y1) => right.map((y2) => <line key={`b-${y1}-${y2}`} x1="230" y1={y1} x2="360" y2={y2} />))}
          {right.map((y) => <line key={`c-${y}`} x1="372" y1={y} x2="456" y2="172" />)}
        </g>
        <g className="network-nodes">
          {left.map((y) => <circle key={`l-${y}`} cx="80" cy={y} r="7" />)}
          {middle.map((y) => <circle key={`m-${y}`} cx="224" cy={y} r="7" />)}
          {right.map((y) => <circle key={`r-${y}`} cx="366" cy={y} r="7" />)}
          <circle className="output-node" cx="462" cy="172" r="9" />
        </g>
        <g className="network-labels">
          <text x="80" y="305">idea</text><text x="224" y="305">build</text>
          <text x="366" y="305">test</text><text x="462" y="305">ship</text>
        </g>
      </svg>
      <figcaption id="neural-caption">Research carefully. Build clearly. Ship useful software.</figcaption>
    </figure>
  );
}

function ProjectPreview({ kind }: { kind: string }) {
  if (kind === "quantum") {
    return (
      <div className="project-preview quantum-preview" aria-hidden="true">
        <div className="preview-top"><strong>QUANTUMLEARN</strong><span>AGENTIC FEEDBACK</span></div>
        <svg viewBox="0 0 420 150">
          {[35, 75, 115].map((y) => <line key={y} x1="22" y1={y} x2="398" y2={y} />)}
          <rect x="90" y="20" width="30" height="30" /><text x="105" y="41">H</text>
          <circle cx="190" cy="75" r="8" /><line x1="190" y1="35" x2="190" y2="115" />
          <circle cx="190" cy="115" r="15" /><line x1="180" y1="115" x2="200" y2="115" />
          <rect x="278" y="60" width="30" height="30" /><text x="293" y="81">X</text>
          <path d="M350 20v30m-14 0h28M350 20l18 14" />
        </svg>
      </div>
    );
  }

  if (kind === "markets") {
    return (
      <div className="project-preview market-preview" aria-hidden="true">
        <div className="preview-top"><strong>STONKS IN HAND</strong><span>OBSERVED / EXPECTED</span></div>
        <div className="market-chart"><span className="axis-label">SIGNAL</span>
          <svg viewBox="0 0 420 145">
            <path className="grid" d="M25 20H405M25 58H405M25 96H405M25 134H405M25 20V134M120 20V134M215 20V134M310 20V134M405 20V134" />
            <path className="baseline" d="M25 106L82 100L139 103L196 88L253 92L310 72L367 79L405 61" />
            <path className="signal" d="M25 116L82 112L139 89L196 101L253 69L310 54L367 39L405 43" />
          </svg>
        </div>
      </div>
    );
  }

  if (kind === "gradia") {
    return (
      <div className="project-preview gradia-preview" aria-hidden="true">
        <div className="preview-top"><strong>GRADIA</strong><span>LEARN / PRACTISE / MASTER</span></div>
        <div className="lesson-shell">
          <div><span>01</span><b>CONCEPT</b><small>understand</small></div><i />
          <div><span>02</span><b>GUIDED</b><small>practise</small></div><i />
          <div><span>03</span><b>MASTERY</b><small>prove</small></div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview curriculum-preview" aria-hidden="true">
      <div className="preview-rail"><b>AI</b><i /><i /><i /><i /><i /></div>
      <div className="preview-body">
        <div className="preview-top"><strong>20 PHASES</strong><span>503 LESSONS</span></div>
        <div className="phase-list">
          <div><span>01</span><strong>Math foundations</strong><i style={{ width: "92%" }} /></div>
          <div><span>07</span><strong>Transformers</strong><i style={{ width: "74%" }} /></div>
          <div><span>10</span><strong>LLMs from scratch</strong><i style={{ width: "61%" }} /></div>
          <div><span>14</span><strong>Agent engineering</strong><i style={{ width: "48%" }} /></div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card">
      <ProjectPreview kind={project.kind} />
      <div className="project-details">
        <div className="project-title-row"><h3>{project.title}</h3><span>{project.meta}</span></div>
        <p>{project.description}</p>
        <div className="project-bottom-row">
          <span>{project.tags}</span>
          <a href={project.href} target="_blank" rel="noreferrer">View project <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <div className="portfolio-canvas">
        <section className="compact-hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">AKSHAT PORWAL · SOFTWARE ENGINEER</span>
            <h1 id="hero-title">I build thoughtful<br /> AI products.</h1>
            <p className="hero-stats">AI systems · learning products · research tools</p>
            <p className="hero-description">Computer science honours student at Monash University, turning ambitious ideas into useful software.</p>
            <div className="hero-actions">
              <a href="#work">See my work <ArrowRight size={15} /></a>
              <a href={githubProfile} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <BuildFigure />
        </section>

        <section className="compact-showcase">
          <div className="work-column" id="work">
            <div className="section-title">
              <h2>Selected work</h2><span />
              <a className="section-link" href={`${githubProfile}?tab=repositories`} target="_blank" rel="noreferrer">View all projects <ArrowUpRight size={13} /></a>
            </div>
            <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
          </div>

          <aside className="systems-column" id="skills">
            <div className="section-title"><h2>Skills</h2><span /></div>
            <div className="skills-list">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return <article key={skill.title}><div><Icon size={21} strokeWidth={1.5} aria-hidden="true" /></div><p><strong>{skill.title}</strong><span>{skill.detail}</span></p></article>;
              })}
            </div>
          </aside>
        </section>

        <section className="certifications-section" id="certifications">
          <div className="section-title"><h2>Certifications</h2><span /></div>
          <div className="certification-empty">
            <div className="certificate-mark">AP</div>
            <p><strong>Verified credentials</strong><span>Certification details and credential links to be added.</span></p>
          </div>
        </section>

        <footer className="compact-footer">
          <span>Akshat Porwal · Melbourne</span>
          <span>Software engineering · AI systems · learning products</span>
          <a href="#top">Top ↑</a>
        </footer>
      </div>
    </main>
  );
}
