export type Devnote = {
 slug: string;
 title: string;
 date: string; // ISO date, e.g. 2026-10-15
 summary: string;
 tags: string[];
 published: boolean;
 sections: { heading?: string; paragraphs: string[] }[];
};

// Add posts here. Drafts stay out of the index and public routes.
export const devnotes: Devnote[] = [];
export const publishedDevnotes = devnotes.filter(post => post.published).sort((a,b) => b.date.localeCompare(a.date));
export function getDevnote(slug: string) { return publishedDevnotes.find(post => post.slug === slug); }
export function devnoteDate(date: string) {
 return new Intl.DateTimeFormat("en-AU", {day:"numeric", month:"long", year:"numeric", timeZone:"Australia/Melbourne"}).format(new Date(`${date}T12:00:00Z`));
}
