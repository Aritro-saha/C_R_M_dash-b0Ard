# Design System: The Editorial Eye

## 1. Overview & Creative North Star
**Creative North Star: "The Gallery Curator"**

This design system is not a utility-first dashboard; it is a high-end digital environment built to honor the craft of photography. While standard admin panels focus on density and data-stuffing, "The Gallery Curator" focuses on focus itself. 

By treating the interface as a physical gallery space—utilizing expansive white space, intentional asymmetry, and a strict "Tonal Layering" philosophy—we move away from the "template" look. We favor breathing room over borders and depth over lines. The goal is to make the user feel like they are managing an exhibition, not just a database.

---

## 2. Colors & Surface Philosophy
The palette is built on a foundation of sophisticated neutrals, allowing the photography and the refined `primary` accent to command attention.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to section off the UI. In this design system, boundaries are defined by logic, not lines. 
- Use background color shifts (e.g., a `surface-container-low` section sitting on a `surface` background).
- Use white space (negative space) as the primary separator.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, premium materials.
- **Base Layer:** `surface` (#f7f9fb) – The canvas of the dashboard.
- **Sectioning:** `surface-container-low` (#f0f4f7) – Used for large sidebar areas or secondary content zones.
- **Actionable Containers:** `surface-container-lowest` (#ffffff) – Reserved for cards, input fields, and primary content areas to make them "pop" against the background without shadows.

### The "Glass & Gradient" Rule
To elevate the experience, use `surface-container-lowest` with a 80% opacity and a 12px backdrop-blur for floating elements (like a sticky header or a context menu). For primary CTAs, use a subtle vertical gradient from `primary` (#545f73) to `primary-dim` (#485367) to give buttons a "milled" or tactile feel.

---

## 3. Typography
The system utilizes two typefaces: **Manrope** for high-impact editorial moments and **Inter** for precision and utility.

- **Display & Headlines (Manrope):** These are the "Gallery Labels." Use large sizes and tighter letter-spacing to create an authoritative, premium feel. The contrast between a `display-lg` headline and a `body-md` caption creates the "Editorial" rhythm.
- **Body & Labels (Inter):** Chosen for its exceptional legibility. All data-heavy tables and form labels must use Inter to ensure the "Fast & Usable" personality trait is met.
- **Hierarchy as Identity:** Use `on-surface-variant` (#566166) for secondary metadata to create a "recessed" visual layer, making the primary `on-surface` (#2a3439) text feel crisp and immediate.

---

## 4. Elevation & Depth
We eschew traditional shadows in favor of **Tonal Layering**.

- **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a natural, soft lift that feels more modern than a drop shadow.
- **Ambient Shadows:** Only use shadows for "Floating" objects (Modals, Popovers). Use a 32px blur, 0px offset, and 4% opacity of the `inverse_surface` color. It should feel like a soft glow, not a dark edge.
- **The "Ghost Border" Fallback:** If a divider is essential for accessibility, use the `outline-variant` token at 15% opacity. Never use 100% opaque lines.
- **Glassmorphism:** Use semi-transparent `surface-variant` with a 20px blur for image overlays or sidebar navigations to let colors from the photography bleed through softly.

---

## 5. Components

### Buttons
- **Primary:** Gradient from `primary` to `primary-dim`. `rounded-md` (0.75rem). Text: `on-primary`.
- **Secondary:** `surface-container-highest` background. No border. Text: `on-surface`.
- **Tertiary:** No background. Text: `primary`. Subtle underline on hover only.

### Cards & Image Grids
- **Forbid Divider Lines.** Use 24px of padding (Spacing Scale) to separate header and body.
- **Image Grids:** Use `rounded-lg` (1rem). Ensure images have a subtle `inner-glow` (a 1px inset shadow at 5% white) to keep them from looking flat.

### Tables
- No vertical or horizontal lines. 
- Use `surface-container-low` on row-hover.
- Header text must be `label-sm` in all caps with 0.05em letter spacing.

### Sidebar Navigation
- Background: `surface-container-low`.
- Active State: A `surface-container-lowest` pill shape behind the icon and text, with a `primary` vertical accent line (2px wide, 16px high) on the far left.

### Form Elements
- **Inputs:** Background `surface-container-lowest` with a `ghost-border` (outline-variant at 20%). 
- On Focus: The border opacity increases to 100% and the color shifts to `primary`.

---

## 6. Do’s and Don’ts

### Do:
- **Do** prioritize "Breathing Room." If a layout feels crowded, increase the margin rather than adding a divider.
- **Do** use `tertiary` (#006b62) for success states or "New Item" indicators—it provides a sophisticated "Teal" pop that complements the charcoal and indigo.
- **Do** use `surface-dim` for empty states to create a "hollowed-out" feel.

### Don’t:
- **Don’t** use pure black (#000). Always use `on-surface` (#2a3439) for text to maintain a professional, soft-contrast aesthetic.
- **Don’t** use standard 4px or 6px corners. Use `md` (0.75rem / 12px) as your default for a friendlier, high-end feel.
- **Don’t** use bright, saturated reds for errors. Use the sophisticated `error` (#9f403d) and `error_container` (#fe8983) tokens.