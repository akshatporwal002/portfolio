# Reference inspection

Captured 14 October 2026 from https://mildsugardesign.jp/ with scripts/capture-reference.py.

The local archive contains home, project index, about, five case studies, a contact query variant, and first-party shared CSS/JS. manifest.json records source URLs and file sizes. No forms were submitted. Raw downloads are excluded from Git, ESLint, and the application.

## Findings

- Astro-generated assets. English display face: Righteous. Body face: LINE Seed JP.
- Palette: #f7f5f1, #3c3728, #fea831.
- Fixed header: brand at upper left, 56px circular menu at upper right, 212px expanded navigation.
- Home profile: 40px panel corners, large greeting, 48px English introduction, 16px prose, large directional link.
- Cases: full-viewport scenes, centered heading, oversized orange background lettering, foreground illustration, description, category pills, section navigation.
- Detail: wide heading, narrow prose with label column, media, next-case card, back link.
- JavaScript contains Barba transitions and timeline animation code. The implementation recreates the timing in React, CSS, and the Web Animations API rather than importing the bundle: 0.6s cover and uncover, 0.9s elastic menu opening, 90px/s marquee, 0.8s title movement, and staggered image/copy reveals. The gallery preserves normal page scrolling rather than trapping wheel and touch events.
- Home uses room/character image and video assets. Those third-party illustrations and videos are not used here.

## REA

https://github.com/morluto/rea describes an MCP/CLI for websites, JavaScript, applications, and binary analysis. Public files and browser inspection were sufficient for this task; no REA installation was needed.

## Artwork

Built-in image generation produced public/art/pixel-room.png. Prompt: original static pixel-art portfolio hero of Akshat seated at his desk in his bedroom; use supplied portrait for dark hair, round gold glasses, short beard, and charcoal shirt; room photo for desk, monitor, violet RGB tower, curtains, cream bed, and warm walls; cozy evening, crisp square pixels, no text or logos. Photos were references only.

## Validation

npm run lint; npm run build -- --webpack. Turbopack's local process connection failed on this machine. Browser verification covers desktop/mobile home, expanded menu, section navigation, project links, about, and research.

Animation verification: profile click on desktop/mobile; orange wipe navigation and released pointer events; menu focus and Escape; pause control stops marquee; paused case navigation; mobile overflow check.

## Room artwork revision

Built-in image editing used the existing scene as its reference. Final prompt: preserve framing, character, monitor, lamp and shelves; align the PC square to the desk, move the water bottle beside the lamp, remove circular desktop clutter below the monitor, neaten bedding, and add a cream ID card in a dark holder with an orange lanyard hanging from the front desk edge. Preserve pixel style, omit annotations and readable card text. Output: public/art/pixel-room-v2.png.

Verified: lamp off/on, white focus highlight, ID-card CV link, PC research link, monitor projects link, bookshelf credential link, desktop CV layout, mobile room shortcuts, and mobile CV overflow.
