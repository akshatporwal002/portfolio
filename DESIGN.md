# Portfolio design

Reference: https://mildsugardesign.jp/ . Recreate its cream canvas, warm brown text, generous whitespace, rounded panels, orange accents, and expressive English typography using Akshat's content.

## Typography and colour

- Righteous regular: headings, brand, navigation, large links.
- LINE Seed JP regular and bold: body text and supporting labels.
- Both are self-hosted Latin WOFF2 subsets through next/font/local, with OFL licenses in public/fonts.
- Cream #f7f5f1; ink #3c3728; orange #fea831. Use dark ink on orange labels for legibility.

## Pages

- Home: full-height pixel bedroom scene and cream introduction panel, 61/39 desktop split; stacked on mobile.
- Projects: static full-height gallery sections with oversized orange lettering, central rounded previews, descriptions, category labels, and section navigation. No scroll interception.
- Project details: broad heading, narrow 680px body, labels beside prose on desktop and stacked on mobile, screenshots, repositories, outcomes, and next-project navigation.
- About: personal introduction, education, capabilities, and research link.
- Research: existing content retained with shared fonts, palette, and navigation.

## Artwork and motion

public/art/pixel-room.png is original static pixel artwork made with the built-in image tool, using the user's portrait and bedroom photos as references. It shows Akshat at his desk with a warm lamp, violet computer lighting, and cream bedding. Source photos are not shipped.

Motion follows the captured reference: 600ms orange cover/uncover page wipes; 900ms elastic menu expansion with staggered links; continuous gallery lettering at approximately 90px/second; 800ms title movement, 1100ms project image entrance, and 700ms supporting-copy reveals. Home opens on the full room and reveals the profile on greeting. Case prose and images reveal on scroll. Ambient room glow is a CSS overlay; the character remains a static illustration pending sprite frames.

Pause motion controls are available in the room, gallery, and global menu. System reduced-motion disables the wipe, marquee, entrances, and smooth scrolling. Menu focus looping, Escape dismissal, ordinary links, modified-click behavior, and route focus remain functional.

## Reference capture

scripts/capture-reference.py saves bounded public HTML pages and first-party CSS/JS to design-reference/mildsugar/. The archive is ignored by Git and ESLint and never served or imported. See design-reference/README.md.
