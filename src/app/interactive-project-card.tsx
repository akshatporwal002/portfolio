"use client";

import Link from "next/link";
import type { PointerEvent, ReactNode } from "react";

export function InteractiveProjectCard({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || event.pointerType === "touch") return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--pointer-x", `${x}px`);
    card.style.setProperty("--pointer-y", `${y}px`);
    card.style.setProperty("--tilt-x", `${((y / rect.height) - 0.5) * -2.8}deg`);
    card.style.setProperty("--tilt-y", `${((x / rect.width) - 0.5) * 2.8}deg`);
  }
  function reset(event: PointerEvent<HTMLAnchorElement>) { event.currentTarget.style.setProperty("--tilt-x", "0deg"); event.currentTarget.style.setProperty("--tilt-y", "0deg"); }
  return <Link className="project-card" href={href} aria-label={label} onPointerMove={handlePointerMove} onPointerLeave={reset}>{children}</Link>;
}

