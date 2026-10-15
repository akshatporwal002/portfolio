# Layered room implementation

The homepage now assembles independently positioned pixel-art assets. The bed is beside the desk in the wide composition and outside the compact phone frame. No flattened room image is used by the homepage.

## Editing the room

- `src/data/room-layout.ts`: each object instance has wide and compact visible bounds. Edit these to move/resize objects. Beds, cupboards, complete plants, lanyard with ID, and the seated person with chair each use one complete sprite. Upright shelf books remain reusable individual instances.
- `src/app/pixel-room.tsx`: sprite rendering, lamp state, silhouette interactions, independent contact/cast shadows and surfaces.
- `src/app/layered-room.css`: viewport/safe-area layout, white object hints, focus feedback, lamp fade and reduced-motion behavior.
- `public/art/layered-room/objects`: original transparent source PNGs.
- `public/art/layered-room/runtime`: WebP deployment derivatives. The homepage references only the assets it needs; unused original component masters remain available as references.
- `scripts/prepare-room-runtime.cjs`: rebuild runtime derivatives and normalized vector silhouettes after changing a source image.

The scene measures its actual container with ResizeObserver. Width determines a continuous interpolation between wide/compact object bounds; height and width together determine zoom. The walls fill the viewport, while the floor seam and ceiling position can change independently. `contact` places an object's feet at a defined depth on the tabletop or shelf; `mount` aligns connected parts to their parent. This keeps the PC, monitor stand, cylindrical lamp, books and shelf plants attached vertically throughout resizing. The person and chair are now a coherent single cutout, with sole/caster contact shadows at normalized sprite coordinates. Shadows use the same resolved placement before being projected to wall, desktop or floor. The PC has a tight perspective footprint beneath its actual feet, while bed/chair contact shadows follow their bases. Grounding shadows and light spill stay separate from click masks.

Interactions use the same normalized silhouette as the visible sprite. Books form one keyboard link across nine independent sprites. The complete lanyard and badge form one CV sprite and link. All tiny objects have equivalent labeled HTML shortcuts with at least 44px touch height. Lamp and profile support keyboard activation; the profile returns focus when closed and supports Escape. Reduced motion disables periodic hints and shortens lamp fades. The existing page-transition and gallery motion remain available, with the shared pause control.

Highlights render within each sprite's depth layer, so foreground objects naturally occlude them. The combined character/chair highlights as one interactive object. The independent hit layer retains the same shape and position.

## Verification

- Production webpack build passed, including TypeScript and 14 static routes.
- ESLint passed.
- Five Node layout tests passed: interactive bounds at nine sizes, continuous resizing from 320px to 1920px, bed/desk relationship plus compact crop, PC feet supported by the tabletop without intersecting the tablet, and connected objects following a moved supporting desk.
- Browser checks at 360×740, 390×844, 768×1024 and 1440×900: no horizontal overflow; room fills its viewport; active objects remain available.
- Actual object links verified: PC → research, monitor → projects, books → certifications, card → CV.
- Keyboard lamp toggle, pause control, and profile open/back behavior verified.
- Forced reduced-motion room check at `/?reduce=1`: no hint animation, 150ms light fade. The normal OS preference is also handled by CSS.
- Browser console had no errors in final checks.

Screenshots in `verification/`: desktop-lamp-on.jpg, phone-lamp-on.jpg, phone-reduced-lamp-off.jpg, tablet-lamp-on.jpg.

Latest consolidated sprites (2026-10-15): bed-complete, cupboard-complete, plant-complete, shelf-plant-complete, lanyard-id-complete, character-chair-complete, cylinder-lamp, mouse-forward. Their generation prompts and original outputs are recorded in consolidated-sprite-provenance.json. The white speaker cube, desk book stack, desk pen cup and shelf pen cup are no longer rendered. The compact shelf and both complete shelf plants stay beyond the window/curtain edge. The mouse buttons point toward the monitor.

Latest verification: seven layout tests, ESLint and webpack production build passed. Browser previews checked desktop, 390�844 phone and 768�1024 tablet. Direct lamp tap, combined badge CV link and combined character profile button worked. No phone horizontal overflow. Screenshots: consolidated-desktop.jpg, consolidated-phone.jpg, consolidated-tablet.jpg.

Verification used browser viewport emulation, not physical iPhone Safari. `100dvh`, safe-area padding, viewport-fit and a matching browser theme color are implemented. Safari's own controls remain controlled by iOS.

Status: assembled and verified locally. These changes have not been pushed or deployed.
