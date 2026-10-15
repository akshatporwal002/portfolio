"use client";
import { PixelRoom } from "./pixel-room";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "./site-header";
export default function Home() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); requestAnimationFrame(() => document.querySelector<HTMLElement>('[data-room-object="character"]')?.focus({ preventScroll: true })); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <><SiteHeader /><main id="content" className={`room-home ${open ? "profile-open" : ""}`} tabIndex={-1}>
    <PixelRoom profileOpen={open} onHello={() => { setOpen(true); requestAnimationFrame(() => document.querySelector<HTMLElement>(".hello-panel")?.focus({ preventScroll: true })); }} />
    <section className="hello-panel" inert={!open} aria-hidden={!open} tabIndex={-1} aria-labelledby="hello-title"><button className="profile-close" type="button" onClick={() => { setOpen(false); requestAnimationFrame(() => document.querySelector<HTMLElement>('[data-room-object="character"]')?.focus({ preventScroll: true })); }}>← Back to room</button><div><h1 id="hello-title">Hey! <span aria-hidden="true">✳</span></h1><h2>I’m Akshat.<br />AI systems.<br />Cloud foundations.</h2><p>Software Engineering and Commerce (Actuarial Studies) at Monash, based in Melbourne.</p><p>I build applied AI, cloud infrastructure, and financial technology. I’m exploring opportunities in AI engineering, Cloud/DevOps, solutions architecture, and fintech.</p><span className="hello-signature">Always curious. Always building.</span></div><Link className="big-link" href="/projects">Get to know me <ArrowUpRight aria-hidden="true" /></Link></section>
  </main></>;
}
