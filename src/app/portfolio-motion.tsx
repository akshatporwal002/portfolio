"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const MotionContext = createContext({ paused: false, toggle: () => {} });
export function MotionToggle({ className = "" }: { className?: string }) {
  const { paused, toggle } = useContext(MotionContext);
  return <button type="button" className={`motion-toggle ${className}`} aria-pressed={paused} onClick={toggle}>{paused ? "Play motion" : "Pause motion"}</button>;
}

export function PortfolioMotion({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [paused, setPaused] = useState(false);
  const cover = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const target = useRef<string | null>(null);
  const animation = useRef<Animation | null>(null);
  const deadline = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const element = cover.current;
    if (!element || target.current !== pathname) return;
    target.current = null;
    animation.current?.cancel();
    element.style.transformOrigin = "top";
    const reduced = paused || matchMedia("(prefers-reduced-motion: reduce)").matches;
    const exit = element.animate([{ transform: "scaleY(1)" }, { transform: "scaleY(0)" }], { duration: reduced ? 0 : 600, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" });
    animation.current = exit;
    void exit.finished.then(() => {
      element.style.pointerEvents = "none";
      busy.current = false;
      if (deadline.current) clearTimeout(deadline.current);
      const main = document.querySelector<HTMLElement>("main");
      if (main) { main.tabIndex = -1; main.focus({ preventScroll: true }); }
    }).catch(() => {});
  }, [pathname, paused]);

  useEffect(() => {
    const element = cover.current;
    if (!element) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    function reset() {
      animation.current?.cancel();
      element!.style.transform = "scaleY(0)";
      element!.style.pointerEvents = "none";
      busy.current = false;
      target.current = null;
      if (deadline.current) clearTimeout(deadline.current);
    }
    function click(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || paused || reduced.matches) return;
      const link = (event.target as Element).closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link || link.target || link.hasAttribute("download")) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      event.preventDefault();
      event.stopPropagation();
      if (busy.current) return;
      busy.current = true;
      target.current = url.pathname;
      router.prefetch(url.pathname);
      element!.style.pointerEvents = "auto";
      element!.style.transformOrigin = "bottom";
      const enter = element!.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 600, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" });
      animation.current = enter;
      deadline.current = setTimeout(reset, 10000);
      void enter.finished.then(() => router.push(url.pathname + url.search + url.hash)).catch(() => {});
    }
    document.addEventListener("click", click, true);
    reduced.addEventListener("change", reset);
    window.addEventListener("popstate", reset);
    return () => { document.removeEventListener("click", click, true); reduced.removeEventListener("change", reset); window.removeEventListener("popstate", reset); reset(); };
  }, [router, paused]);

  useEffect(() => {
    const elements = [...document.querySelectorAll<HTMLElement>(".sugar-prose-row, .sugar-case-image, .sugar-next")];
    if (paused || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove("reveal-pending"); observer.unobserve(entry.target); }
    }), { rootMargin: "0px 0px -5% 0px", threshold: .05 });
    elements.forEach(element => { if (element.getBoundingClientRect().top > innerHeight * .95) element.classList.add("reveal-pending"); observer.observe(element); });
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove("reveal-pending")); };
  }, [pathname, paused]);

  return <MotionContext.Provider value={{ paused, toggle: () => setPaused(value => !value) }}><div className={`motion-shell ${paused ? "motion-paused" : ""}`}>{children}</div><div ref={cover} className="page-wipe" aria-hidden="true" /></MotionContext.Provider>;
}
