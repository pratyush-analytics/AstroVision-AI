# Lovable Import Guide

## What is Lovable?

[Lovable](https://lovable.dev) is an AI-powered full-stack web app builder. This guide explains how to import and extend AstroVision AI in Lovable.

---

## ⚠️ Important Compatibility Notes

AstroVision AI v1.0 is built with **vanilla HTML/CSS/JavaScript** — no React, no TypeScript, no build tools. Lovable works best with React/TypeScript projects.

**Recommended approach for Lovable:**
Use this project as a **design reference and content source** while rebuilding in Lovable's React environment.

---

## Option 1: GitHub Integration (Recommended)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "feat: initial AstroVision AI release"
git remote add origin https://github.com/YOUR_USERNAME/astrovision-ai.git
git push -u origin main
```

### Step 2: Import in Lovable
1. Go to [lovable.dev](https://lovable.dev)
2. Click **New Project → Import from GitHub**
3. Select your `astrovision-ai` repository
4. Lovable will analyze the project structure

### Step 3: Lovable Configuration
Since this is a vanilla JS project, tell Lovable:
> "Convert this HTML/CSS/JS astrology app to a React/TypeScript application. Preserve the dark cosmic design system with these CSS variables: --bg: #06040f, --purple: #9b6dff, --gold: #f0c060, --teal: #40e0c8. Maintain all existing features including the animated star field, zodiac grid, birth chart canvas, compatibility analyzer, and Jyotika AI chat."

---

## Option 2: Design System Transfer

Copy these exact values into your Lovable project:

### Color Tokens (for Lovable design system)
```
Background:    #06040f
Surface:       #12102a
Elevated:      #1a1740
Border:        #2a2660
Primary (Gold):   #f0c060
Secondary (Purple): #9b6dff
Accent (Teal):  #40e0c8
Love (Pink):    #ff6b9d
Text Primary:   #e8e4ff
Text Muted:     #9890c0
```

### Typography
```
Heading font: Cinzel (Google Fonts) — serif
Body font: Outfit (Google Fonts) — sans-serif
```

### Gradient (Primary CTA)
```css
background: linear-gradient(135deg, #9b6dff, #6b3fa0);
```

---

## Component Mapping (Vanilla → React)

| Vanilla Component | React Component Name |
|---|---|
| `#nav` | `<Navbar />` |
| `#hero` | `<HeroSection />` |
| `.zodiac-grid` | `<ZodiacGrid />` |
| `.horo-panel` | `<HoroscopePanel />` |
| `#chartForm` | `<BirthChartForm />` |
| `#chartCanvas` | `<BirthChartCanvas />` |
| `.compat-wrap` | `<CompatibilityChecker />` |
| `.pred-result` | `<PredictionResult />` |
| `.tarot-wrap` | `<TarotReader />` |
| `jyotika.html` | `<JyotikaChat />` |

---

## Environment Setup in Lovable

In Lovable's environment settings, add:
```
VITE_APP_NAME=AstroVision AI
VITE_APP_VERSION=1.0.0
VITE_OPENAI_API_KEY=your_key_here  (for future AI integration)
```

---

## Known Limitations in Lovable

1. **Canvas API** — HTML5 Canvas for birth chart drawing may need a React wrapper (`useRef` + `useEffect`)
2. **requestAnimationFrame animations** — Move to Framer Motion or CSS animations in React
3. **`jyotika.js` knowledge engine** — Can be directly imported as a utility module; no React-specific changes needed
4. **Numerology engine** — Pure functions, work identically in React

---

## Recommended Lovable Prompts

After import, use these prompts to enhance:

```
"Add a loading skeleton for the horoscope panel while readings generate"

"Convert the compatibility ring from canvas to an animated SVG circle"

"Add a share button to birth chart results that generates a shareable URL"

"Integrate the Jyotika AI chat with OpenAI GPT-4 API for live responses"

"Add a mobile hamburger menu for screens under 768px"

"Create a user onboarding flow that collects birth details on first visit"
```

---

## Files Safe to Import Directly

| File | Import Action |
|---|---|
| `jyotika.js` — numerology functions | Import as ES module utilities |
| `style.css` / `jyotika.css` | Copy CSS variables to global styles |
| `docs/*.md` | Keep all documentation as-is |
| Knowledge base data | Convert to TypeScript constants |

---

## Support

For Lovable-specific issues: [lovable.dev/docs](https://docs.lovable.dev)
For AstroVision AI issues: Open a GitHub issue
