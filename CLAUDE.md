# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the public-facing website for **Vere Ex Nihilo** - an IP-first licensing empire built on revolutionary mathematical discoveries. The site showcases the company's 60+ patents, $5.4T TAM, and validated performance results (156x improvements).

**Tech Stack:**
- Next.js 14 (React framework)
- TypeScript
- Tailwind CSS (custom design system)
- Pages Router (not App Router)

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type checking (without emitting files)
npm run type-check

# Export static site
npm run export
```

## Architecture & Design System

### Custom Tailwind Design System

The site uses a **dark minimalist professional aesthetic** with a custom design system defined in `tailwind.config.js`:

**Color Palette:**
- `bg-primary` (#0a0a0a) - Near black background
- `bg-secondary` (#1a1a1a) - Card/section backgrounds
- `accent-primary` (#d4af37) - Muted gold for CTAs and highlights
- `text-primary` (#ffffff) - Main text
- `text-secondary` (#a0a0a0) - Secondary text

**Key Design Tokens:**
- Custom spacing scale (18, 88, 128)
- Extended font sizes (2xs to 7xl)
- Custom shadows (soft, medium, strong, accent)
- Animations (fade-in, slide-up, glow)

### Component Architecture

**Layout Components** (`components/`):
- `Layout.tsx` - Main layout wrapper with Header and Watermark
- `Header.tsx` - Fixed glassmorphism navigation with active route detection (uses `useRouter`)
- `Watermark.tsx` - Background psi watermark image
- `Footer.tsx` - Site footer (not currently used on homepage)

**Styling Approach:**
All styling uses Tailwind utility classes. Custom component classes are defined in `styles/globals.css` using `@layer components`:

```css
.nav-link          // Navigation links
.btn / .btn-primary / .btn-secondary / .btn-ghost  // Button styles
.card / .card-elevated  // Card components
.text-gradient     // Gold gradient text effect
.backdrop-glass    // Glassmorphism effect
```

### Page Structure

Pages are in `pages/` using Next.js Pages Router:
- `index.tsx` - Homepage (fully redesigned with sections)
- `applications.tsx` - Applications page
- `ip-access.tsx` - IP Portfolio access
- `contact.tsx` - Contact page
- `who.tsx` - About page
- `ordinal-time.tsx` - Ordinal time concept page

**Homepage Structure:**
1. Hero section with gradient logo and 3 CTAs
2. Key metrics (TAM, Patents, Performance, Margins)
3. Four fundamental processes (Projection, Compression, Optimization, Saturation)
4. Validated results from POC repositories
5. Final CTA section

### Key Architectural Decisions

1. **Fixed Header**: Uses `position: fixed` with glassmorphism (`bg-bg-secondary/95 backdrop-blur-xl`)
2. **Content Padding**: All page content must include `pt-16 lg:pt-20` to account for fixed header
3. **Animations**: Defined in tailwind config, applied via utility classes (`animate-up`, `animate-in`, `animate-glow`)
4. **Active Route Detection**: Header uses `useRouter().pathname` to highlight current page

### Brand Guidelines

**Typography:**
- Large, bold headlines with `tracking-tighter`
- Gradient accent on key brand terms using `.text-gradient`
- Generous spacing between sections

**Visual Style:**
- Dark minimalist (Squarespace-inspired)
- Subtle borders and shadows
- Muted gold accents (never bright/garish)
- Professional, technical feel
- Generous white space

## Important Implementation Notes

### When Adding New Pages:
1. Import and use `<Layout>` wrapper
2. Add navigation link to `Header.tsx`
3. Include proper `<Head>` with title and meta description
4. Use design system utility classes (`.card`, `.btn-primary`, etc.)

### When Modifying Styles:
- Modify `tailwind.config.js` for design tokens (colors, spacing, etc.)
- Add reusable component classes to `styles/globals.css` in `@layer components`
- Never use inline styles or create separate CSS files

### Performance Considerations:
- Images should use Next.js `<Image>` component (supports WebP/AVIF)
- Security headers configured in `next.config.js`
- SWC minification enabled for faster builds

## Content Strategy

The site emphasizes:
- Revolutionary mathematical discoveries
- Validated performance metrics (156x, 37x, 100%)
- IP portfolio scale (60+ patents)
- Market opportunity ($5.4T TAM)
- Professional credibility with technical depth

Copy should be:
- Confident but not arrogant
- Technical but accessible
- Focused on results and validation
- "First principles thinking" messaging
