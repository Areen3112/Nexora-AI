# Nexora AI — Intelligent Systems for Complex Problems

Nexora AI is an artificial intelligence engineering company that designs and deploys production-grade AI systems, agentic workflows, enterprise retrieval architectures, and custom intelligent software.

This website was built following a **reference-first design methodology** inspired by the Cartier *Le Chœur des Pierres* high-jewelry digital experience (by makemepulse), adapting its principles of crystalline spatial depth, chromatic atmosphere shifts, and architectural reveals into a modern AI engineering identity.

---

## Technical Stack

- **Framework:** Next.js 15 (App Router, Server & Client Components)
- **Language:** TypeScript 5.7 (Strict Mode, 100% type-checked)
- **Styling:** SCSS / Sass Modules (Zero Tailwind, modular tokens, fluid clamping)
- **3D & Shaders:** Three.js + Custom GLSL vertex & fragment shaders (Crystalline Computational Core with chromatic caustics, fresnel rim lighting, and fallback)
- **Motion & Scroll:**
  - **GSAP 3 + ScrollTrigger:** Coordinated timelines and scroll synchronization
  - **Lenis:** Smooth inertial scrolling
  - **Motion (Framer Motion):** Micro-interactions, spring transitions, and interactive controls
  - **Anime.js:** Vector SVG path line-drawing for architectural schematics and numeric counters
- **Icons:** Lucide React

---

## Project Structure

```
nexora-ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global layout, Lenis smooth-scroll provider, Nav, Footer
│   │   ├── page.tsx              # Full 8-section experience
│   │   ├── leadflow/             # Dedicated LeadFlow product briefing page
│   │   └── globals.scss          # CSS variables, typography reset, Lenis setup
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── CrystallineCore.tsx # Three.js + GLSL interactive crystal lattice
│   │   │   └── CrystallineCore.module.scss
│   │   ├── layout/
│   │   │   ├── Navigation.tsx    # Header, active scrollspy, mobile drawer
│   │   │   └── Footer.tsx        # Editorial telemetry, governance disclosures
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Centerpiece lattice, telemetry brackets, CTA
│   │   │   ├── ProblemChorus.tsx # 8 operational challenges (Comparative filter)
│   │   │   ├── Capabilities.tsx  # 6 disciplines with chromatic atmosphere shift
│   │   │   ├── Industries.tsx    # Cross-industry matrix & practical workflows
│   │   │   ├── Methodology.tsx   # 5-stage lifecycle from constraint to evolve
│   │   │   ├── SystemsProducts.tsx # LeadFlow flagship showcase & 3 archetypes
│   │   │   ├── Principles.tsx    # 6 engineering tenets & technical metrics
│   │   │   └── Inquiry.tsx       # Scope configurator, brief generator & copy
│   │   └── ui/
│   │       ├── Button.tsx        # Magnetic styles, glimmers, arrow glyphs
│   │       ├── Card.tsx          # Refractive glass with corner brackets
│   │       ├── Badge.tsx         # Telemetry badges with pulse indicators
│   │       └── BlueprintViewer.tsx # Anime.js SVG vector schematic tracing modal
│   ├── data/
│   │   ├── capabilities.ts       # 6 capability pillars
│   │   ├── industries.ts         # 6 industry verticals & step workflows
│   │   ├── methodology.ts        # 5 lifecycle stages & deliverables
│   │   ├── systems.ts            # LeadFlow & system archetypes
│   │   └── principles.ts         # 6 technical principles
│   ├── styles/
│   │   ├── _variables.scss       # SCSS design tokens & breakpoints
│   │   ├── _mixins.scss          # Glass panels, brackets, fluid typography
│   │   └── _grid.scss            # Containers & responsive layouts
│   └── lib/
│       ├── lenis.ts              # Lenis smooth-scroll hook
│       ├── gsap.ts               # GSAP + ScrollTrigger registration
│       ├── anime.ts              # Anime.js helpers
│       └── webgl-utils.ts        # WebGL detection & low-power heuristics
```

---

## Quick Start

```bash
# Navigate to the Nexora AI directory
cd nexora-ai

# Start the development server
npm run dev
# Running on http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

---

## Verification & QA Results

- `npm run build`: **PASSED** (5 static routes compiled in < 1.6s)
- `tsc --noEmit`: **PASSED** (0 type errors)
- WebGL Detection: Verified with seamless 2D CSS/SVG geometric fallback
- Responsive Viewports: Verified across Desktop (1440px), Laptop (1024px), Tablet (768px), and Mobile (375px)
- Accessibility: Valid semantic landmarks, ARIA tablists (`role="tablist"`), focus indicators, skip-link, and `prefers-reduced-motion` compliance.
