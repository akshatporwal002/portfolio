"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function outside(event: MouseEvent) { if (!panel.current?.contains(event.target as Node)) setOpen(false); }
    function keyboard(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
      if (event.key !== "Tab") return;
      const elements = panel.current?.querySelectorAll<HTMLElement>("button, a");
      if (!elements?.length) return;
      const first = elements[0], last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    document.addEventListener("mousedown", outside);
    document.addEventListener("keydown", keyboard);
    return () => { document.removeEventListener("mousedown", outside); document.removeEventListener("keydown", keyboard); };
  }, [open]);
  function item(href: string, label: string) {
    return <Link href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>;
  }
  return <header className={`sugar-header ${pathname === "/" ? "on-room" : ""}`}>
    <div className="sugar-brand"><Link href="/">akshat porwal</Link><p>AI Engineering<br />Cloud &amp; DevOps<br />Solutions Architecture<br />Fintech</p></div>
    <div ref={panel} className={`sugar-menu ${open ? "is-open" : ""}`}>
      <button ref={toggle} className="sugar-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="portfolio-menu" onClick={() => setOpen(!open)}><span className="menu-dots" aria-hidden="true"><i /><i /><i /></span></button>
      <nav id="portfolio-menu" aria-label="Main navigation" inert={!open}>{item("/", "Home")}{item("/about", "About")}{item("/cv", "CV")}{item("/certifications", "Certifications & skills")}{item("/experience", "Experience")}{item("/projects", "Projects")}{item("/devnotes", "Devnotes")}<a href="mailto:akshatporwalwork@gmail.com" onClick={() => setOpen(false)}>Contact</a></nav>
    </div>
  </header>;
}
