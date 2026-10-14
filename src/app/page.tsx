"use client";
import { PixelRoom } from "./pixel-room";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "./site-header";
export default function Home() {
  const [open, setOpen] = useState(false);
  return <><SiteHeader /><main id="content" className={`room-home ${open ? "profile-open" : ""}`} tabIndex={-1}>
    <PixelRoom onHello={() => { setOpen(true); requestAnimationFrame(() => document.querySelector<HTMLElement>(".hello-panel")?.focus({ preventScroll: true })); }} />
    <section className="hello-panel" inert={!open} tabIndex={-1} aria-labelledby="hello-title"><div><h1 id="hello-title">Hey! <span aria-hidden="true">✳</span></h1><h2>I’m Akshat.<br />I build thoughtful<br />AI products.</h2><p>Software Engineering and Commerce (Actuarial Studies) at Monash, based in Melbourne.</p><p>I turn ambitious ideas into software people can inspect, use, and trust. My work spans AI systems, learning products, and research tools.</p><span className="hello-signature">Always curious. Always building.</span></div><Link className="big-link" href="/projects">Get to know me <ArrowUpRight aria-hidden="true" /></Link></section>
  </main></>;
}
