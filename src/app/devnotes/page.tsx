import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../site-header";
import { publishedDevnotes, devnoteDate } from "@/data/devnotes";
export const metadata: Metadata = {title:"Devnotes — Akshat Porwal",description:"Build logs, experiments and notes on AI, cloud and software engineering."};
export default function DevnotesPage() {
 return <><SiteHeader /><main id="content" className="sugar-case"><header className="sugar-case-heading"><p>Devnotes</p><h1>Things I build.<br />Things I learn.</h1></header><div className="devnotes-content"><p className="devnotes-intro">Build logs, experiments, and lessons from working with AI, cloud infrastructure and software systems.</p>{publishedDevnotes.length ? publishedDevnotes.map(post => <Link className="devnote-entry" key={post.slug} href={`/devnotes/${post.slug}`}><div className="devnote-meta"><time dateTime={post.date}>{devnoteDate(post.date)}</time> · {post.tags.join(" / ")}</div><h2>{post.title} ↗</h2><p>{post.summary}</p></Link>) : <section className="devnotes-empty"><h2>First notes coming soon.</h2><p>A place for the ideas, decisions and discoveries behind my projects.</p></section>}</div><footer className="sugar-footer"><Link href="/projects">Explore my projects ↗</Link><a href="https://github.com/akshatporwal002" target="_blank" rel="noreferrer">GitHub ↗</a></footer></main></>;
}
