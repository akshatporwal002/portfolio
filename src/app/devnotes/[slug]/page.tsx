import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../site-header";
import { getDevnote, publishedDevnotes, devnoteDate } from "@/data/devnotes";
export const dynamicParams = false;
export function generateStaticParams() { return publishedDevnotes.map(post => ({slug:post.slug})); }
export async function generateMetadata({params}: PageProps<"/devnotes/[slug]">): Promise<Metadata> {
 const post=getDevnote((await params).slug);
 return post ? {title:`${post.title} — Devnotes`, description:post.summary} : {};
}
export default async function DevnotePage({params}: PageProps<"/devnotes/[slug]">) {
 const post=getDevnote((await params).slug); if(!post)notFound();
 return <><SiteHeader /><main id="content" className="sugar-case"><header className="sugar-case-heading"><p>Devnotes / <time dateTime={post.date}>{devnoteDate(post.date)}</time></p><h1>{post.title}</h1></header><article className="devnote-body"><p>{post.summary}</p><div className="sugar-tags">{post.tags.map(tag=><span key={tag}>{tag}</span>)}</div>{post.sections.map((section,index)=><section key={index}>{section.heading&&<h2>{section.heading}</h2>}{section.paragraphs.map((text,i)=><p key={i}>{text}</p>)}</section>)}</article><footer className="sugar-footer"><Link href="/devnotes">← All devnotes</Link><Link href="/projects">Projects ↗</Link></footer></main></>;
}
