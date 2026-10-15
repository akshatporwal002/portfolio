# Layered room composition review

This phase produces desktop and phone composition references for review. These are flattened visual references, not the final layered assets or live website.

## Confirmed direction

- Match the existing pixel-art quality, character likeness, amber lamp light, and violet PC lighting.
- Wide layout: compact workspace on the left/centre, with the bed on the right.
- Narrow layout: crop the bed/right-hand decoration, slightly reduce zoom, and move workspace groups closer together. Keep all interactive objects visible.
- Shelf sits on the front wall above the desk.
- Background contains only bare walls and extends beyond the visible area vertically and horizontally.
- Floor and ceiling are separate layers, with adjustable positions.
- Every visible non-wall object is an individual asset. Groups help placement but do not flatten constituent pieces.
- Include separate cast shadows, contact shadows, and light-spill layers. Interaction masks follow object silhouettes and exclude shadows.
- Review images show the lamp on to assess the lighting. The implemented room will start with the lamp off.

## Asset inventory for the next phase

Architecture: extended bare walls; ceiling; floor; skirting/trim; window frame; glass/outside view; curtain rail; left curtain; right curtain.

Desk group: desktop; each leg; drawer cabinet/frame; each drawer; handles; monitor screen/body; monitor stand; keyboard; mouse; PC chassis; transparent PC side/window; fan/light overlays; desk lamp base; arm; shade; bulb/glow; bottle; tablet; stationery cup; individual pens/pencils; ID card holder; card insert; lanyard.

Character group: person; chair back; chair seat; armrests; chair base/wheels. Clothing/body may be divided further when animation requires it.

Shelf group: shelf board; each bracket; each book; each plant; plant pots; trailing foliage; frame; artwork insert; stationery objects.

Bed group: bedframe; mattress; sheet; duvet; each pillow. The bed and its shadows can crop out independently of the workspace.

Lighting: per-object contact shadows; relevant desk/wall/floor cast shadows; amber lamp spill; violet PC spill; ambient window light.

Any additional visible props in approved compositions must be added to this inventory and separated rather than baked into the background.

## Implementation contract

Each asset records: filename, transparent bounds, pivot, depth order, placement group, wide/compact anchors, scale limits, attached shadow IDs, receiving surface, and interactive silhouette mask where applicable. Move the desk and its equipment coherently; move the character and chair coherently; keep the ID card attached to the desk edge.

Use one continuously responsive composition, not a separate unrelated phone room. Reserve readable HTML branding and safe-area spacing. Show the whole active workspace on phones and allow only noninteractive right-hand objects to crop. Keep effective touch targets usable without changing visible silhouettes.

## Status

Desktop and phone references are complete. desktop-v2.png moves the bed immediately beside the desk. Separate source artwork is in public/art/layered-room, including 67 PNGs, silhouette masks, independent shadows and lighting. Responsive homepage assembly is implemented and verified locally; see ASSEMBLY.md and verification screenshots. It has not been deployed.

## Visual review

Desktop: the front-wall shelf sits over a narrowed desk; the smaller seated character leaves the monitor, PC, lamp, keyboard and ID card visible. The bed remains to the right. The full chair base and floor contact shadows are visible.

Phone: the same objects tighten into the portrait frame. The bed sits outside the right-hand crop. Monitor, PC, lamp, books and ID card remain unobstructed. The wall and floor fill the portrait canvas without letterboxing.

Additional non-wall layers are included: rug, wall picture frame and insert, monitor cable, baseboard, ceiling trim, and an optional PC fan illumination overlay.

The review compositions are flattened references. The implemented homepage uses bare walls, separate surfaces and individual object layers, with independent lighting and shadow layers.
