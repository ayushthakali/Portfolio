# AGENTS.md — Premium Portfolio Redesign

## 1. Project Objective

Redesign the existing developer portfolio into a visually distinctive, premium, modern portfolio for a Full Stack Developer.

The website must feel intentionally art-directed, professionally designed, and production-ready.

This is a redesign of an existing project, NOT a new project. All content in the existing codebase is up to date and is the source of truth.

Primary goals:
- Eliminate the generic AI-generated website aesthetic.
- Establish a distinctive visual identity.
- Showcase projects and professional experience effectively.
- Deliver an excellent mobile and desktop experience.
- Introduce sophisticated animations and micro-interactions.
- Maintain fast loading, accessibility, and clean code.

**Important:** Inspect the existing codebase before making changes. Understand the current framework, routing, components, assets, and content structure. Reuse existing infrastructure wherever practical. Do not replace working functionality just to introduce a different implementation.

---

## 2. Design Direction

### Visual Identity: Premium Editorial + Modern Developer

Combine:
- Editorial typography.
- Minimalist layouts and strong visual hierarchy.
- Asymmetric compositions with generous whitespace.
- Subtle borders and thin separators.
- Carefully controlled accent colors.
- High-quality project presentation.
- Restrained, sophisticated motion.

The result should resemble a professionally art-directed portfolio, not a developer portfolio template.

### Avoid These Patterns

DO NOT use:
- Purple/blue gradient backgrounds.
- Excessive glassmorphism.
- Glowing borders and neon effects.
- Every section inside a rounded card.
- Repetitive three-column card grids.
- Excessive pill-shaped labels.
- Huge decorative gradient circles or blobs.
- Floating UI elements with no purpose.
- Random decorative icons.
- Excessive animation.
- Generic AI landing-page layouts (centered hero, gradient headline, three feature cards).

Prefer deliberate design decisions over decorative complexity.

---

## 3. Design System

### Color Palette

Refined neutral palette:

| Token | Value |
|---|---|
| Background | `#F7F6F2` |
| Primary text | `#171717` |
| Secondary text | `#737373` |
| Muted background | `#EFEDE7` |
| Borders | `#DDDBD4` |
| Accent | `#315C4C` |

- Use the accent sparingly: interactive elements, highlights, selected states.
- Dark sections (e.g. hero or project showcase) are allowed where they improve contrast. Do not make the whole site dark just to look premium.
- Define colors as centralized CSS variables or in the existing theme system (Tailwind theme / config). No hardcoded hex values scattered through components.
- Verify text contrast meets WCAG AA. `#737373` on `#F7F6F2` is borderline for small text; use it only for larger or non-essential text, or darken slightly.

### Typography

Typography is one of the highest priorities.

- Display / headings: **Instrument Serif**
- Body / UI: **Manrope**
- Technical labels: **IBM Plex Mono**

Load fonts the way the existing framework prefers (e.g. `next/font` for Next.js) with `display: swap` and only the weights and styles actually used. No render-blocking third-party CSS if avoidable.

Use typography to build hierarchy:
- Large, expressive hero type using fluid sizing with `clamp()`.
- Strong section headings; comfortable body line-height.
- Small uppercase mono labels for metadata (dates, technologies, project info).
- Italic serif used selectively for contrast.
- Limit weights and families; no extra fonts.

### Layout

- One consistent max content width and one responsive grid.
- Consistent horizontal alignment and generous vertical rhythm.
- Asymmetric layouts where they add interest.
- Thin separators instead of container boxes.
- Content must stay readable and scannable.

---

## 4. Website Structure

### A. Navigation
- Personal wordmark/name; links: About, Experience, Projects, Contact.
- Clear active and hover states (active section indication if practical).
- Responsive mobile navigation with proper touch targets.
- Fixed/sticky only if it improves usability; subtle background change on scroll.
- A visible contact/availability link.
- Lightweight.

### B. Hero (most important section)
- Personal introduction, Full Stack Developer positioning, short professional description.
- Primary CTA: **View Projects**. Secondary CTA: **Contact Me**.
- Resume download link if an existing resume asset is available.
- Location and availability if already present in the portfolio.
- Large expressive typography, strong composition, intentional whitespace, distinctive alignment.
- Subtle animated entrance.
- One small technical or personal detail that adds personality (e.g. a mono-set local time or coordinates line, built from real data).
- No hero illustrations, random 3D objects, or profile cards. If an existing profile photo is available, evaluate whether it improves the composition; never invent or generate a replacement.

### C. About
Concise and natural. Cover: full-stack development, the React/Next.js ecosystem, building practical web applications, backend and database experience, interest in clean interfaces and maintainable software.

Avoid filler such as "passionate about leveraging technology to create innovative solutions."

### D. Experience
Editorial timeline or structured layout. **Preserve existing experience data and dates.**

1. Elevate Tech — Frontend Developer Intern
2. Brandbuilder — MERN Stack Developer Intern
3. Omni Tech — Full Stack Developer

Omni Tech contributions to preserve:
- **Avrio Pharmacy Portal:** Maintained and fixed bugs in a live ASP.NET MVC and SQL Server pharmacy ordering portal for a US client.
- **News CMS:** Built a multi-tenant news publishing CMS using Payload CMS and PostgreSQL, supporting multiple publications on one platform.
- **PIIRRO:** Built and deployed a food and music discovery platform for Nepal, connecting diners with restaurants and live music venues.

Requirements: clear company/role hierarchy; dates and locations as secondary mono metadata; technology labels where appropriate; expandable descriptions only if they improve usability; responsive. Must not look like a generic resume template.

### E. Projects
Significant visual attention. Editorial showcase, not repetitive small cards.

Projects must appear in this exact order:
1. PIIRRO
2. Mero Hisab
3. SB Thakali
4. Receipt AI
5. Chatify
6. News AI

- Preserve existing descriptions, technologies, links, feature lists, and image assets.
- Large screenshots, strong titles, short descriptions, tech stack, GitHub and live-demo links, clear numbering (01–06).
- Subtle image hover (scale ~1.02–1.04).
- Alternating layouts or varied grid compositions; PIIRRO and Mero Hisab get stronger visual emphasis.
- Do not fabricate screenshots. Use existing assets in the public projects directory. If an image is missing, render a graceful fallback (not a broken image).
- Content stays data-driven from the existing projects array. If the array is not already in this order, reorder it in the data, not in the component.

### F. Skills / Technologies
Categories: **Frontend, Backend, Databases, Tools & Platforms.** Use clean typography, compact labels, or structured lists, not a wall of skill cards. Only include technologies already present in the portfolio or project experience.

### G. Contact
Visually strong closing section: short invitation to connect, email from existing data, GitHub, LinkedIn, and other existing professional links. Distinctive layout with large type. Email and social links must work (`mailto:`, correct hrefs, `rel="noopener noreferrer"` on external links).

### H. Footer
Minimal: personal branding, dynamically generated copyright year, social links, back-to-top if appropriate.

---

## 5. Animation and Motion

Smooth, intentional, premium. Use the existing animation library if one is installed. If none is installed and the framework supports it, Motion (Framer Motion) is acceptable where it adds real value; otherwise prefer CSS and `IntersectionObserver`.

- **Entrance:** staggered hero text reveal, nav fade-in, small vertical movement.
- **Scroll:** section reveals (opacity + small translate), project image reveals, light staggering.
- **Hover:** project image scale, link underline transitions, button color transitions, subtle arrow movement.
- **Navigation:** smooth scrolling, active section indication if practical.

Rules:
- Animate `transform` and `opacity` only.
- Short durations, small distances, no scroll hijacking, nothing that interferes with reading.
- Respect `prefers-reduced-motion`.
- Content must remain visible if JavaScript or animations fail (no `opacity: 0` as an unconditional default).
- Avoid unnecessary animation libraries.

---

## 6. Responsive Design

Inspect these widths: 320–375, 390–430, 768, 1024–1440, 1600+.

- No horizontal overflow, clipped text, or overlapping navigation.
- Proper image scaling, readable type, appropriate touch targets (min ~44px).
- No unnecessary fixed-width elements.
- On mobile, simplify complex compositions without losing the visual identity.

---

## 7. Technical Requirements

- Preserve the existing framework, architecture, and routing.
- Reuse existing components where appropriate; use reusable components for repeated patterns.
- Keep project data centralized.
- Avoid new dependencies unless clearly justified.
- Semantic HTML, accessible buttons/links, descriptive image alt text.
- Optimized images with explicit dimensions or aspect ratios (no layout shift); lazy-load below the fold.
- Preserve all existing functional links and interactions.
- Keep SEO metadata and Open Graph information accurate.
- Do not modify deployment configuration unless absolutely necessary.
- No backend functionality for this frontend redesign.
- Do not rewrite the whole application unnecessarily.

---

## 8. Performance and Accessibility

- Fast initial render, minimal JavaScript, optimized images.
- Semantic heading hierarchy (single `h1`).
- Full keyboard navigation with visible focus states.
- Sufficient contrast.
- Reduced-motion support.
- Prefer CSS over heavy animation packages.

---

## 9. Implementation Workflow

### Phase 1 — Codebase Inspection (no edits yet)
1. Inspect project structure and read `package.json`.
2. Identify framework and styling system.
3. Inspect components, routes, and the projects data.
4. Review project images and other assets (including resume, profile photo).
5. Identify existing animations and dependencies.
6. List the content and functionality that must be preserved.

### Phase 2 — Design Foundation
Color tokens, font setup, spacing/layout conventions, reusable primitives, responsive behavior.

### Phase 3 — Redesign (in order)
Navigation → Hero → About → Experience → Projects → Skills → Contact → Footer.

### Phase 4 — Motion and Polish
Entrance animations, scroll reveals, hover interactions, typography and spacing refinement, image treatments, transition review.

### Phase 5 — Final Review
- Check mobile, tablet, and desktop widths.
- Check all links, navigation, and scrolling.
- Check image loading and text wrapping.
- Check animation behavior and `prefers-reduced-motion`.
- Check the browser console for errors.
- Run the existing build command and fix errors.

Do not add a testing framework or write a new test suite for this redesign. Visual checks via the dev server (and a browser or screenshot tool if one is already available) are enough.

---

## 10. Agent Operating Rules (mandatory)

1. Inspect the codebase before changing anything.
2. Do not replace accurate content with invented information.
3. Do not remove working functionality.
4. Do not add unnecessary dependencies or abstractions.
5. Do not duplicate existing components.
6. No placeholder content; no TODOs for essential functionality.
7. Do not make every section the same card pattern.
8. Do not sacrifice mobile usability for desktop aesthetics.
9. Do not overuse gradients, shadows, rounded corners, or animation.
10. Keep changes focused on the portfolio redesign; prefer clean, maintainable code.
11. If a requirement conflicts with existing data (missing image, missing link, missing resume), keep the existing behavior or a graceful fallback, and mention it in the final report instead of inventing content.
12. Work on a separate git branch and commit at the end of each phase with a clear message, if the project uses git.

### Token Efficiency
- Inspect only relevant files; do not re-read unchanged files.
- Do not rewrite files that don't need changes.
- Don't narrate minor decisions. Report only significant decisions and unresolved issues.

---

## 11. Final Design Standard

The finished site should communicate strong frontend engineering, full-stack experience, attention to detail, an understanding of modern UI/UX, and the ability to build and deploy real-world applications. It must look custom-designed, not AI-generated.

**Final principle:** Visual quality comes from typography, composition, spacing, contrast, and restraint, not from adding more effects.

Prioritize a memorable first impression, an excellent project showcase, and a consistently polished responsive experience.

### Definition of Done
- [ ] All six projects in the specified order, data-driven, with working links and images (or fallbacks).
- [ ] Experience data and dates unchanged; Omni Tech contributions preserved.
- [ ] Fonts, colors, and spacing defined centrally.
- [ ] No horizontal overflow at 320px; layouts checked at all listed widths.
- [ ] `prefers-reduced-motion` honored; content visible without JS animations.
- [ ] Existing build passes with no console errors.
- [ ] Final report lists significant decisions and any unresolved issues.
