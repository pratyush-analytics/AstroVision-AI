# Project Architecture

## Overview

AstroVision AI is a **client-side static web application**. There is no backend server, database, or build pipeline required. All logic runs in the browser using vanilla HTML, CSS, and JavaScript.

```
┌─────────────────────────────────────────────────────────┐
│                     USER BROWSER                        │
│  ┌─────────────┐   ┌──────────────┐   ┌─────────────┐  │
│  │  index.html │   │ jyotika.html │   │  style.css  │  │
│  │  (Main App) │   │  (AI Chat)   │   │  jyotika.css│  │
│  └──────┬──────┘   └──────┬───────┘   └─────────────┘  │
│         │                 │                              │
│  ┌──────▼──────┐   ┌──────▼───────┐                    │
│  │   app.js    │   │  jyotika.js  │                    │
│  │ (App Logic) │   │(AI Knowledge)│                    │
│  └─────────────┘   └──────────────┘                    │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │          Browser APIs                            │   │
│  │  Canvas API · requestAnimationFrame · LocalStorage│  │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
              │                    │
    ┌─────────▼────────┐   ┌──────▼──────────┐
    │  Google Fonts CDN │   │ Static Host     │
    │  (Cinzel, Outfit) │   │ (Netlify/Vercel)│
    └───────────────────┘   └─────────────────┘
```

---

## Module Architecture

### Main Application (`app.js`)

```
app.js
├── DATA LAYER
│   ├── SIGNS[]           — 12 zodiac sign objects
│   ├── READINGS{}        — Horoscope text pools (today/week/month/year)
│   ├── TAROT_CARDS[]     — 20 tarot card definitions
│   ├── TESTIMONIALS[]    — 8 user testimonials
│   └── PRED_EVENTS{}     — Prediction event pools by life area
│
├── VISUAL ENGINE
│   ├── initStars()       — Canvas starfield animation
│   └── buildHeroChart()  — Animated zodiac ring + planet orbits
│
├── HOROSCOPE MODULE
│   ├── buildZodiacGrid() — Renders 12 sign cards
│   ├── showHoroscope()   — Opens horoscope panel
│   └── loadHoroReading() — Loads reading with typing effect
│
├── BIRTH CHART MODULE
│   ├── getSunSign()      — Calculates sun sign from birth date
│   ├── generateBirthChart() — Full chart generation logic
│   └── drawBirthChartCanvas() — HTML5 Canvas natal chart renderer
│
├── COMPATIBILITY MODULE
│   ├── showCompatResult() — Computes and renders compatibility
│   └── drawCompatRing()   — Canvas match score ring
│
├── PREDICTIONS MODULE
│   └── showPrediction()   — Renders prediction timeline
│
├── TAROT MODULE
│   ├── buildDeck()        — Renders face-down card deck
│   └── drawTarot()        — Draws 3 cards with interpretation
│
└── UI UTILITIES
    ├── populateSignSelects() — Populates all zodiac dropdowns
    ├── buildTestimonials()   — Renders testimonial grid
    └── Smooth scroll nav
```

### Jyotika AI Engine (`jyotika.js`)

```
jyotika.js
├── KNOWLEDGE BASE (KB{})
│   ├── 16 topic response functions
│   ├── Classical text references
│   └── Practice exercises per topic
│
├── NUMEROLOGY ENGINE
│   ├── PYTH{}            — Pythagorean letter-number table
│   ├── CHALD{}           — Chaldean letter-number table
│   ├── reduce()          — Master number-aware digit reduction
│   ├── lifePathNum()     — Birth date Life Path calculation
│   ├── expressionNum()   — Full name Expression number
│   ├── soulUrgeNum()     — Vowels-only Soul Urge number
│   ├── personalityNum()  — Consonants-only Personality number
│   └── personalYearNum() — Current year Personal Year number
│
├── REFERENCE DATA
│   ├── MAJOR_REF[]       — 22 Major Arcana with sign links
│   └── CHART_REF[]       — 12 Vedic house significations
│
├── AI RESPONSE ENGINE
│   └── getResponse()     — Keyword matching → topic routing
│
└── CHAT SYSTEM
    ├── addMsg()          — Renders message bubble
    ├── showTyping()      — Typing indicator with delay
    └── sendMessage()     — Full message send pipeline
```

---

## Design System

### Color Palette (CSS Custom Properties)
```css
--bg:      #06040f   /* Deep space black-purple */
--bg2:     #0d0a1e   /* Secondary background */
--card:    #12102a   /* Card background */
--card2:   #1a1740   /* Elevated card */
--border:  #2a2660   /* Border color */
--gold:    #f0c060   /* Primary accent (Gold) */
--purple:  #9b6dff   /* Secondary accent (Purple) */
--teal:    #40e0c8   /* Tertiary accent (Teal) */
--pink:    #ff6b9d   /* Love/compatibility accent */
--text:    #e8e4ff   /* Primary text */
--muted:   #9890c0   /* Secondary text */
```

### Typography
- **Headings**: Cinzel (serif, Google Fonts) — evokes classical antiquity
- **Body**: Outfit (sans-serif, Google Fonts) — modern, highly readable

### Animation System
- Starfield: Canvas `requestAnimationFrame` with alpha tweening
- Zodiac ring: CSS `@keyframes spin` / `spin-reverse`
- Planet orbits: `requestAnimationFrame` trigonometric positioning
- Typing indicator: CSS bounce keyframes
- Reading bars: CSS `transition: width 1.2s ease`
- Compatibility ring: CSS transitions on canvas arc

---

## Data Flow

```
User Input
    │
    ▼
Input Validation
    │
    ▼
Data Transformation (sign lookup, date parsing, score calculation)
    │
    ▼
Rendering (DOM manipulation, Canvas drawing)
    │
    ▼
Animation (CSS transitions + rAF)
    │
    ▼
User sees result
```

---

## Security Architecture

- **No backend** = no server-side vulnerabilities
- **No user data stored** — all computation is ephemeral (session only)
- **No API keys** in frontend code (current version uses curated static data)
- **XSS prevention**: All user inputs are sanitized before DOM insertion
- **CSP-ready**: Headers can be added at CDN level

See [SECURITY_REPORT.md](SECURITY_REPORT.md) for full audit.

---

## Performance Architecture

- **No build step** — zero compilation overhead
- **Zero JS dependencies** — no library bloat
- **Canvas animations** use `requestAnimationFrame` for 60fps efficiency
- **CSS animations** use `transform` and `opacity` (GPU-composited)
- **Fonts** loaded from Google CDN with `display=swap`

See [PERFORMANCE_REPORT.md](PERFORMANCE_REPORT.md) for full report.

---

## Future Architecture (v2.0)

```
┌──────────────────────────────────────────────────────────┐
│                 FRONTEND (React/Next.js)                  │
│         index.tsx · jyotika.tsx · components/             │
└────────────────────────┬─────────────────────────────────┘
                         │ HTTPS / REST / WebSocket
┌────────────────────────▼─────────────────────────────────┐
│                   BACKEND API (Node.js/Express)           │
│   /api/chart · /api/horoscope · /api/predict · /api/ai   │
└─────┬─────────────┬──────────────┬────────────────────────┘
      │             │              │
  ┌───▼───┐   ┌────▼────┐   ┌────▼─────┐
  │OpenAI │   │ Ephem   │   │  Redis   │
  │  API  │   │  API    │   │  Cache   │
  └───────┘   └─────────┘   └──────────┘
```
