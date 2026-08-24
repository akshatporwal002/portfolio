import type { Project } from "@/data/projects";

export function ProjectVisual({ kind, compact = false }: { kind: Project["kind"]; compact?: boolean }) {
  return (
    <div className={`project-visual project-visual--${kind}${compact ? " is-compact" : ""}`} aria-hidden="true">
      <div className="visual-toolbar"><span>{kind === "curriculum" ? "BUILD // USE //" : "EVIDENCE // SYSTEM"}</span><i /><i /><i /></div>
      {kind === "quantum" && <div className="quantum-circuit">{["|0〉", "|1〉", "|0〉"].map((label, index) => <div key={label + index}><b>{label}</b><span /><em>{index === 1 ? "●" : index === 2 ? "X" : "H"}</em><span /></div>)}<p>simulation → feedback</p></div>}
      {kind === "velexar" && <div className="career-flow"><div><span>01</span><b>CV</b><small>analyse</small></div><i /><div><span>02</span><b>VECTOR</b><small>retrieve</small></div><i /><div><span>03</span><b>MATCH</b><small>rank</small></div></div>}
      {kind === "markets" && <div className="market-signal"><div><b>SIGNAL</b><span>OBSERVED / EXPECTED</span></div><svg viewBox="0 0 460 150"><path className="grid" d="M15 20H445M15 60H445M15 100H445M15 140H445M15 20V140M122 20V140M230 20V140M337 20V140M445 20V140"/><path className="baseline" d="M15 110L75 104L135 108L195 90L255 94L315 72L375 78L445 56"/><path className="signal" d="M15 122L75 116L135 88L195 102L255 66L315 51L375 35L445 41"/></svg></div>}
      {kind === "curriculum" && <div className="curriculum-map"><aside><b>AI</b>{[1,2,3,4].map((n) => <i key={n} />)}</aside><div>{[["01","Math foundations","92%"],["07","Transformers","74%"],["10","LLMs from scratch","61%"],["14","Agent systems","48%"]].map(([n,title,width]) => <p key={n}><span>{n}</span><b>{title}</b><i style={{width}} /></p>)}</div></div>}
      {kind === "gradia" && <div className="lesson-flow">{[["01","LEARN"],["02","PRACTISE"],["03","PROVE"]].map(([n,title], index) => <div key={n}><article><span>{n}</span><b>{title}</b><small>{index === 0 ? "concept" : index === 1 ? "guided" : "mastery"}</small></article>{index < 2 && <i />}</div>)}</div>}
    </div>
  );
}
