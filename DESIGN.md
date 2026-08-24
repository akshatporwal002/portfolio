# Design system

## Visual world
An editorial engineering notebook with the typographic character of Codeology: warm paper, precise rules, pixel display type, serif prose, monospace metadata, and a single signal-orange accent. It should feel authored and technical rather than like a generic dark developer dashboard.

## Type roles
- Display: VT323 for names, section titles, project titles, and short statements.
- Reading: Source Serif 4 for descriptions and case-study prose.
- Interface: JetBrains Mono for navigation, metadata, buttons, dates, and code-adjacent labels.
- Ordinary body copy remains at 16px or larger; compact metadata remains at 12px or larger with sufficient contrast.
- Long-form prose stays between 45ch and 72ch.

## Colour
- Paper and ink are the dominant pair in both themes.
- Orange is a signal for actions, state, and authored marks—not a blanket decoration.
- Muted text must still meet WCAG AA for its actual size.
- Borders stay quiet and structural.

## Layout
- Maximum canvas: 1240px with fluid side gutters.
- Homepage reading order: proposition → selected work → capability → public evidence → contact.
- Case studies use a narrow reading column supported by a compact project index and evidence rail.
- Spacing uses a 4px base with deliberate jumps between related and unrelated groups.

## Components
- Project cards are editorial panels, not floating rounded tiles.
- Hover may add a local spotlight, a small perspective response, and directional link movement; the card remains fully legible at rest.
- The theme toggle uses a radial view-transition reveal originating at the button, with an immediate fallback when unsupported.
- Contribution entries use a chronological rule and state marks, with links to the original GitHub artifact.
- Focus states are always visible and never depend on hover.

## Motion
- Personality: premium paper—controlled, tactile, no bounce.
- Signature easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Durations: 120ms quick, 240ms standard, 450ms reveal.
- Entrances use short opacity/translate reveals; interactive feedback is under 250ms.
- Reduced motion removes perspective, radial expansion, and displacement while preserving colour, focus, and short opacity feedback.

