# agents.md - MANA CODA Landing Page

## Project Overview
Build a high-performance, SEO-optimized landing page for MANA CODA - a Mozambican women in tech community. The site showcases the organization's mission, programs, and community using modern web technologies with smooth animations and transitions.

## Tech Stack
- **Framework**: TanStack Start (follow official docs: https://tanstack.com/start/latest/docs/framework/react/overview)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **SEO**: TanStack Start Meta API + Schema.org structured data
- **Code Language**: English
- **Content Language**: Portuguese

## Design System - Brand Colors

Based on the provided design, use these exact color values:

```typescript
// tailwind.config.ts
colors: {
  brand: {
    navy: '#1A2332',        // Main background (dark navy)
    'navy-light': '#243447', // Lighter navy for cards/sections
    pink: '#E91E8C',        // Primary accent (hot pink)
    'pink-light': '#F54FA8', // Lighter pink for hover states
    gold: '#F5A623',        // Secondary accent (gold/yellow)
    'gold-light': '#FDB813', // Lighter gold
  },
  neutral: {
    white: '#FFFFFF',
    'gray-100': '#F3F4F6',
    'gray-300': '#D1D5DB',
    'gray-500': '#9CA3AF',
    'gray-700': '#374151',
  }
}
```

## TanStack Start Configuration

### Important: Follow Official Documentation
**Reference**: https://tanstack.com/start/latest/docs/framework/react/overview

Key TanStack Start concepts to implement:

1. **File-based Routing**: Use `src/routes` directory
2. **Server Functions**: Use `createServerFn` for data fetching if needed
3. **Meta Tags**: Use `createFileRoute` with `meta` function for SEO
4. **Assets**: Place in `public/` directory
5. **Head Management**: Use TanStack Start's built-in head management

### Project Structure (TanStack Start Convention)
```
mana-coda/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── og-image.jpg
│   │   └── icons/
│   └── fonts/
├── src/
│   ├── routes/
│   │   ├── __root.tsx           # Root layout
│   │   └── index.tsx             # Home page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Animated header with scroll links
│   │   │   └── Footer.tsx       # Footer component
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Hero section
│   │   │   ├── About.tsx        # Sobre Nós
│   │   │   ├── Vision.tsx       # Visão section
│   │   │   ├── Manifesto.tsx    # Manifesto section
│   │   │   ├── Programs.tsx     # Programas
│   │   │   ├── Partners.tsx     # Parceiros
│   │   │   └── Community.tsx    # Comunidade (Hustlers, Hackers, Hipsters)
│   │   └── ui/
│   │       ├── ScrollReveal.tsx # Scroll animation wrapper
│   │       ├── Button.tsx       # CTA buttons
│   │       └── Card.tsx         # Reusable card component
│   ├── hooks/
│   │   ├── useScrollSpy.ts      # Track active section
│   │   └── useSmoothScroll.ts   # Smooth scroll navigation
│   ├── lib/
│   │   ├── seo.ts               # SEO utilities & metadata
│   │   └── animations.ts        # Framer Motion variants
│   └── styles/
│       └── globals.css          # Global styles & Tailwind config
├── app.config.ts                # TanStack Start config
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Core Features

### 1. SEO Optimization (TanStack Start Way)

```typescript
// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  meta: () => [
    {
      title: 'MANA CODA - Mulheres em Tecnologia Moçambique',
    },
    {
      name: 'description',
      content: 'Comunidade moçambicana de mulheres em tecnologia, inovação e criatividade. Ela Conecta. Ela Cria. Ela Conquista.',
    },
    {
      name: 'keywords',
      content: 'mulheres em tecnologia, STEM Moçambique, programação feminina, bootcamps tech, inovação feminina',
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'MANA CODA - Mulheres em Tecnologia Moçambique',
    },
    {
      property: 'og:description',
      content: 'Ela Conecta. Ela Cria. Ela Conquista.',
    },
    {
      property: 'og:image',
      content: 'https://manacoda.co.mz/og-image.jpg',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
})
```

```typescript
// lib/seo.ts - Structured Data
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MANA CODA",
  "alternateName": "MANA CODA Moçambique",
  "description": "Comunidade moçambicana de mulheres em tecnologia, inovação e criatividade",
  "url": "https://manacoda.co.mz",
  "logo": "https://manacoda.co.mz/logo.svg",
  "sameAs": [
    "https://www.facebook.com/manacoda",
    "https://www.instagram.com/manacoda",
    "https://www.linkedin.com/company/manacoda"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "general inquiry",
    "email": "hello@manacoda.co.mz"
  }
}
```

### 2. Header with Scroll Animations

```typescript
// components/layout/Header.tsx
/**
 * Features:
 * - Sticky header with backdrop blur
 * - Changes background opacity on scroll
 * - Active section highlighting via scroll spy
 * - Smooth scroll to sections
 * - Mobile hamburger menu with slide-in animation
 * - Gold border on "Junta-te à Comunidade" button (matches design)
 */

Navigation sections:
- Sobre Nós (About)
- Equipa (Team/Community)
- Programas (Programs)
- Contacto (Contact)
- CTA: "Junta-te à Comunidade" (gold border button)
```

### 3. Animation Strategy

```typescript
// lib/animations.ts
import { Variants } from 'framer-motion'

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] // Custom easing
    }
  }
}

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

// Scale on hover
export const scaleOnHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Animation principles:
// - Subtle and professional
// - Respect prefers-reduced-motion
// - 60fps smooth animations
// - No janky or jarring movements
```

### 4. Section Breakdown

#### Hero Section
```
- Full viewport height (min-h-screen)
- Dark navy background (#1A2332)
- Logo MANA CODA (top left, with bee icon)
- Main heading: "Ela Conecta. Ela Cria. Ela Conquista."
- Subheading with manifesto excerpt
- Primary CTA button (pink background)
- Subtle scroll indicator arrow
- Optional: Background pattern/grid
```

#### Sobre Nós Section (Based on design)
```
- Section title: "Sobre Nós"
- Large "MANA CODA" heading (pink gradient)
- Introduction paragraph:
  "MANA CODA não é apenas uma comunidade, é um movimento."
  Reference to Women Techmakers, Laboratoria
- Vision statement with bold formatting
- Two-tone background (navy top, gradient bottom)
```

#### Visão, Missão, Valores
```
- Three-column grid layout (desktop)
- Each column: icon + title + description
- Cards with subtle border and hover effects
- Gold accents for icons
```

#### Manifesto Section
```
- Full-width section
- Contrasting background (darker navy or gradient)
- Bold, large typography
- Line-by-line reveal animation
- Manifesto text formatted as powerful statements
- Pink text highlights on key phrases
```

#### Programas Section
```
- Grid of program cards (2-3 columns)
- Each card:
  - Icon/illustration
  - Program name
  - Brief description
  - Hover effect: elevation + pink border
- Programs list:
  - Bootcamps Regionais
  - Conferência Nacional
  - Hackathons Temáticos
  - Buildathons - SHE BUILDS
  - Contentathon
  - Mentoria & Masterclasses
```

#### Parceiros Section
```
- Title: "Parceiros"
- Categories: Institucionais, Setor Privado, Academia, Ecossistema
- Logo grid (grayscale by default, color on hover)
- Partner benefit cards
- "Torna-te Parceiro" CTA button
```

#### Comunidade Section
```
- Title: "A Comunidade"
- Three cards for member personas:
  1. Hustlers - Growth-focused women
  2. Hackers - Builders and problem solvers
  3. Hipsters - Creatives and designers
- Each card: illustration + title + description
- Gold/pink accents
- Final CTA: "Junta-te à Comunidade"
```

#### Footer
```
- Dark navy background
- Logo + tagline
- Social media links
- Newsletter signup
- Contact information
- Copyright notice
```

## Typography

```typescript
// Fonts (example - adjust based on actual brand)
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Montserrat', 'Inter', 'sans-serif'], // For headings
  mono: ['JetBrains Mono', 'monospace'], // For code-related content
}

// Type Scale
fontSize: {
  'display-lg': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }], // Hero
  'display-md': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
  'heading-xl': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
  'heading-lg': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
  'heading-md': ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }],
  'body-lg': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
  'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
}
```

## Implementation Plan

### Phase 1: TanStack Start Setup
```bash
# Create TanStack Start project
npm create @tanstack/start@latest mana-coda
cd mana-coda

# Install dependencies
npm install framer-motion clsx tailwind-merge
npm install -D @types/node

# Setup Tailwind CSS (if not included)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Important**: Follow TanStack Start conventions:
- Use `createFileRoute` for routes
- Use TanStack Start's meta API for SEO
- Follow file-based routing structure
- Reference: https://tanstack.com/start/latest/docs/framework/react/overview

### Phase 2: Design System
```typescript
// Configure Tailwind with exact brand colors
// Set up typography scale
// Create reusable utility classes
// Configure animation settings
```

### Phase 3: Core Layout
```typescript
// 1. Create __root.tsx with base layout
// 2. Implement Header component
//    - Sticky positioning
//    - Scroll spy
//    - Smooth scroll navigation
// 3. Create Footer
// 4. Set up index.tsx route
```

### Phase 4: Sections Implementation
```typescript
// Build sections in order:
// 1. Hero - establish visual tone
// 2. About (Sobre Nós)
// 3. Vision/Mission/Values
// 4. Manifesto
// 5. Programs
// 6. Partners
// 7. Community
```

### Phase 5: Animations & Interactions
```typescript
// 1. Implement ScrollReveal component
// 2. Add section entrance animations
// 3. Implement scroll spy for header
// 4. Add hover states to cards
// 5. Smooth scroll navigation
// 6. Respect prefers-reduced-motion
```

### Phase 6: Content Integration
```typescript
// 1. Add all Portuguese content
// 2. Optimize images (WebP format)
// 3. Add logo and brand assets
// 4. Implement structured data
// 5. Configure meta tags per section
```

### Phase 7: Polish & Optimization
```typescript
// 1. Performance audit
// 2. Accessibility testing (WCAG AA)
// 3. Mobile responsiveness
// 4. Cross-browser testing (Chrome, Firefox, Safari, Edge)
// 5. SEO verification
// 6. Load time optimization (<3s)
```

## Code Standards

### Naming Conventions
```typescript
// Components: PascalCase
export const HeroSection = () => {}

// Hooks: camelCase with 'use' prefix
export const useScrollSpy = () => {}

// Utils/Constants: camelCase or UPPER_SNAKE_CASE
export const siteMetadata = {}
export const ANIMATION_DURATION = 0.6

// Types/Interfaces: PascalCase
interface SectionProps {}
type NavItem = {}
```

### Component Structure
```typescript
// 1. Imports
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

// 2. Types/Interfaces
interface HeroSectionProps {
  title: string
}

// 3. Component
export const HeroSection = ({ title }: HeroSectionProps) => {
  // 4. Hooks
  const ref = useRef(null)
  
  // 5. Handlers
  const handleClick = () => {}
  
  // 6. Render
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Content */}
    </motion.section>
  )
}
```

### Best Practices

1. **TypeScript**: 
   - Use strict mode
   - Type all props and state
   - Avoid `any` type

2. **Components**:
   - Single responsibility
   - Reusable and composable
   - Props over hardcoded values

3. **Performance**:
   - Lazy load images
   - Code splitting for routes
   - Memoize expensive calculations
   - Use `viewport={{ once: true }}` for scroll animations

4. **Accessibility**:
   - Semantic HTML (`<nav>`, `<section>`, `<article>`)
   - ARIA labels where needed
   - Keyboard navigation
   - Focus indicators
   - Color contrast ratios (WCAG AA minimum)

5. **SEO**:
   - Use TanStack Start's meta API
   - Semantic heading hierarchy (h1 → h2 → h3)
   - Alt text for all images
   - Structured data (JSON-LD)

6. **Animations**:
   ```typescript
   // Always respect user preferences
   const shouldReduceMotion = window.matchMedia(
     '(prefers-reduced-motion: reduce)'
   ).matches
   
   // Conditionally apply animations
   <motion.div
     animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
   />
   ```

## Responsive Design Breakpoints

```typescript
// Tailwind breakpoints
screens: {
  'sm': '640px',   // Mobile landscape
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}

// Design approach: Mobile-first
// Base styles for mobile
// Use md:, lg:, xl: for larger screens
```

## SEO Checklist
- [ ] Title tags (max 60 chars) - configured via TanStack Start meta
- [ ] Meta descriptions (max 160 chars)
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter Card tags
- [ ] Canonical URLs
- [ ] Structured data (Organization schema)
- [ ] Sitemap.xml (generate with TanStack Start plugin)
- [ ] Robots.txt
- [ ] Alt text for all images
- [ ] Semantic HTML5 elements
- [ ] Mobile-friendly viewport
- [ ] Fast load times (<3s LCP)
- [ ] HTTPS configuration

## Accessibility Checklist
- [ ] ARIA labels for navigation and interactive elements
- [ ] Keyboard navigation (tab order, focus management)
- [ ] Focus indicators (visible focus rings)
- [ ] Color contrast ratios (4.5:1 for normal text, 3:1 for large)
- [ ] Screen reader testing (test with NVDA/JAWS)
- [ ] Reduced motion support
- [ ] Semantic heading hierarchy (only one h1)
- [ ] Form labels and error messages
- [ ] Skip to main content link
- [ ] Alt text describes image content meaningfully

## Performance Targets
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Lighthouse Score**: 90+ (all categories)

## Content Sections (Portuguese)

### Navigation
- Sobre Nós
- Equipa
- Programas
- Contacto
- Junta-te à Comunidade (CTA button)

### Hero
- Slogan: "Ela Conecta. Ela Cria. Ela Conquista."
- Subtitle: Excerpt from manifesto

### Sobre Nós
- Heading: "MANA CODA"
- Description: Community overview, inspiration from Women Techmakers, Laboratoria
- Vision: "Tornar Moçambique a referência nº 1 na formação e liderança feminina em STEM em África"

### Manifesto (Full Text)
```
Não pedimos permissão.
Criamos.

Durante demasiado tempo disseram às mulheres para esperar, adaptar-se, caber no molde.
Nós escolhemos construir o molde.

Acreditamos que talento não tem gênero. Oportunidade é que tem.

A MANA CODA nasce para quebrar códigos antigos e escrever novos futuros.

Aqui, mulheres aprendem fazendo. Erram rápido. Criam soluções reais. Transformam curiosidade em competência. Competência em carreira. Carreira em impacto.

Não somos um curso. Não somos um evento. Não somos uma tendência.
Somos um movimento.

Um movimento de mulheres que codam, desenham, constroem, lideram. Mulheres que ocupam espaços. Mulheres que criam oportunidades — para si e para outras.

Não esperamos pelo futuro.
Nós programamos o futuro.

MANA CODA. Ela conecta. Ela cria. Ela conquista.
```

### Valores
- Inclusão & Diversidade – tecnologia para todas
- Impacto Social – resultados reais e mensuráveis
- Inovação – aprender fazendo
- Colaboração – comunidade acima do indivíduo
- Empoderamento Feminino – liderança, autonomia e protagonismo

### Programas
- Bootcamps Regionais (Sul, Centro, Norte) – STEM, Design, Data, AI, Empregabilidade
- Conferência Nacional + Feira de Emprego & Empreendedorismo
- Hackathons Temáticos (Tech4Life, EcoTech, GovTech, Fintech)
- Buildathons – SHE BUILDS (prototipagem liderada por mulheres)
- Contentathon (criadoras digitais e storytelling STEM)
- Mentoria & Masterclasses com líderes locais e globais
- Magazine "ELA CODA", Podcast e Newsletter semanal

### Parceiros
**Categorias:**
- Institucionais & Doadores: UN Women, UNICEF, UNDP, GIZ, USAID, Fundações
- Setor Privado: Bancos, Telcos, Fintechs, Startups, Big Tech
- Academia: Universidades, Institutos Técnicos
- Ecossistema: Hubs de inovação, comunidades tech

**Benefícios para Parceiros:**
- Aumento de mulheres em funções técnicas
- Criação de pipelines de talentos femininos
- Impacto social e económico mensurável

### Comunidade
**A Comunidade MANA CODA é diversa, colaborativa e orientada à ação:**

**Hustlers**
Mulheres focadas em crescimento, carreira, execução e resultados.

**Hackers**
Construtoras, programadoras, engenheiras, solucionadoras de problemas.

**Hipsters**
Criativas, designers, comunicadoras e storytellers da inovação.

**Juntas, formam a MANA CODA – uma força coletiva que cria o futuro.**

## Key TanStack Start Reminders

1. **Always reference official docs**: https://tanstack.com/start/latest/docs/framework/react/overview
2. **Use `createFileRoute`** for route definitions
3. **Use meta function** for SEO tags
4. **Use file-based routing** in `src/routes`
5. **Follow TanStack Start conventions** for project structure
6. **Use built-in head management** instead of external libraries

## Next Steps
1. Initialize TanStack Start project
2. Configure Tailwind with brand colors
3. Set up base layout (__root.tsx)
4. Implement Header with navigation
5. Build Hero section
6. Implement remaining sections iteratively
7. Add animations and scroll effects
8. Optimize and test

---

**Reference Documentation**: Always consult https://tanstack.com/start/latest/docs/framework/react/overview for TanStack Start-specific implementation details.
