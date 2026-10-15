# Separate room source assets

The bed was moved beside the desk in `design-reference/room-compositions/desktop-v2.png`. This pack derives from that corrected composition.

67 PNG files: 55 object sprites, three extended room surfaces, five light effects, and four grounding/cast shadow effects. Objects include curtains, plants and their pots, window, desk constituents, chair constituents, bed constituents, books, stationery, lamp constituents, hanging CV card and lanyard. Repeated items are reusable sprites; each instance can be a separate editable scene layer.

Each object also has an SVG interaction silhouette and a separate SVG cast-shadow silhouette. The PNGs retain internal self shading. Some generated sources retain soft external illumination; apply the supplied silhouette mask to the visible object layer to suppress that spill. The gallery previews objects with these masks applied. Glass uses a lower threshold to retain translucency.

Shadows and light effects must remain separate sibling layers. Cast silhouettes require projection onto the receiving desk/wall/floor during scene assembly, with offsets and intensity adjusted to the lamp/window. Do not apply interaction highlights to shadow layers. Large furniture has additional independent floor-contact PNGs.

## Review

Run `node scripts/serve-room-assets.cjs` from the repository root and open `http://127.0.0.1:3000/`. The server serves only this asset directory. `gallery.html` shows all PNGs with checkerboard/dark background options.

`asset-metadata.json` records dimensions, alpha bounds, pixel counts, pivots and masks. `manifest.json` records grouping, interaction destinations, shadow files and receiving surfaces. Source PNGs remain untouched by the metadata/mask scripts; masks are vector silhouettes derived from their alpha.

Regenerate metadata/masks with `node scripts/inspect-room-assets.cjs`, then regenerate the manifest/cast silhouettes with `node scripts/package-room-assets.cjs`.

## Scene assembly

The homepage now uses an assembled SVG scene with continuous responsive positions, silhouette interactions, lamp controls, independently projected cast shadows and contact shadows. See design-reference/room-compositions/ASSEMBLY.md for editing and verification. These reconstructed sprites are not pixel-perfect crops of the flattened reference. No production deployment was made for this pack.

Full-resolution sources total approximately 57 MiB. Masters are preserved. Runtime WebP derivatives total about 3.2 MiB; the homepage loads only the needed sprites.
