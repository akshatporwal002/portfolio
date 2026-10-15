# Publishing Devnotes

Posts live in `src/data/devnotes.ts`. Add an entry to `devnotes` with a unique lowercase hyphenated slug, title, ISO date (`YYYY-MM-DD`), summary, tags and sections. Each section has an optional heading and an array of paragraphs.

Set `published: false` while drafting. Set it to `true`, run `npm run build -- --webpack`, then commit and push to publish through the existing Git/Vercel integration. The `/devnotes` index sorts published posts newest first and links to `/devnotes/<slug>`. Unpublished posts are excluded from both the index and generated routes.

No posts are published initially; the page shows an honest empty state. This is a file-based blog foundation, without an admin upload service or external CMS.
