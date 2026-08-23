"use client";

import { GitBranch, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const githubProfile = "https://github.com/akshatporwal002";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
  }

  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="Akshat Porwal, home">
        <span>AP</span>
        <strong>AKSHAT PORWAL</strong>
      </a>

      <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
        <a href={githubProfile} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
          GitHub <GitBranch size={14} />
        </a>
      </nav>

      <div className="header-actions">
        <button
          className="icon-button"
          type="button"
          onClick={toggleTheme}
          aria-label={dark ? "Use light theme" : "Use dark theme"}
          aria-pressed={dark}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          className="icon-button menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
