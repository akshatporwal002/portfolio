"use client";

import { GitBranch, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const githubProfile = "https://github.com/akshatporwal002";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const themeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) { if (event.key === "Escape") setMenuOpen(false); }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function applyTheme(nextDark: boolean) {
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", nextDark ? "dark" : "light");
  }

  function toggleTheme() {
    const nextDark = document.documentElement.dataset.theme !== "dark";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const transition = document.startViewTransition?.bind(document);
    if (!transition || reduced || !themeButton.current) { applyTheme(nextDark); return; }
    const rect = themeButton.current.getBoundingClientRect();
    document.documentElement.style.setProperty("--theme-x", `${rect.left + rect.width / 2}px`);
    document.documentElement.style.setProperty("--theme-y", `${rect.top + rect.height / 2}px`);
    transition(() => applyTheme(nextDark));
  }

  return (
    <header className="site-header">
      <Link className="brand-lockup" href="/" aria-label="Akshat Porwal, home"><span>AP</span><strong>AKSHAT PORWAL</strong></Link>
      <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
        <Link href="/#work" onClick={() => setMenuOpen(false)}>Work</Link>
        <Link href="/#skills" onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link href="/#credentials" onClick={() => setMenuOpen(false)}>Credentials</Link>
        <Link href="/#open-source" onClick={() => setMenuOpen(false)}>Open source</Link>
        <a href={githubProfile} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>GitHub <GitBranch size={14} /></a>
      </nav>
      <div className="header-actions">
        <button ref={themeButton} className="icon-button theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle colour theme"><span className="theme-icons" aria-hidden="true"><Sun size={18} /><Moon size={18} /></span></button>
        <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </header>
  );
}
