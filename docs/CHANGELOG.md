# Changelog

All notable changes to AstroVision AI are documented here.

Format: [Semantic Versioning](https://semver.org/) — `[MAJOR.MINOR.PATCH]`

---

## [1.0.0] — 2026-06-12

### 🎉 Initial Release

#### Added
- **Main Application** (`index.html`, `style.css`, `app.js`)
  - Hero section with animated zodiac ring and orbiting planet dots
  - Daily Horoscope section — 12 zodiac sign grid with Today/Week/Month/Year tabs
  - Birth Chart Generator — HTML5 Canvas natal chart with planetary positions
  - Compatibility Analyzer — animated match score ring with 6 relationship dimensions
  - AI Life Predictions — timeline forecast by life area
  - Tarot Reader — 3-card Past/Present/Future spread
  - Features grid and testimonials section
  - Fully responsive design (mobile, tablet, desktop)
  - Animated starfield background

- **Jyotika AI Teacher** (`jyotika.html`, `jyotika.css`, `jyotika.js`)
  - Interactive chat interface with AI persona
  - 16 deep knowledge topic responses (Vedic, Western, Hellenistic, Numerology, Tarot, I Ching, Palmistry)
  - Numerology Calculator — Life Path, Expression, Soul Urge, Personality, Personal Year, Tarot Birth Card
  - Quick Reference Panels — 12 Vedic houses, 22 Major Arcana
  - Study Curriculum sidebar
  - Animated starfield and responsive layout

#### Documentation
- README.md with full project overview
- INSTALLATION.md
- DEPLOYMENT.md (Netlify, Vercel, GitHub Pages, Docker, Render)
- CONTRIBUTING.md
- CHANGELOG.md
- LICENSE (MIT)
- PROJECT_ARCHITECTURE.md
- API_DOCUMENTATION.md
- SECURITY_REPORT.md
- AI_ARCHITECTURE.md
- LOVABLE_IMPORT_GUIDE.md
- DATABASE_SCHEMA.md
- ERROR_HANDLING.md
- PERFORMANCE_REPORT.md

#### Configuration
- `.gitignore` — comprehensive exclusion list
- `.env.example` — environment variable documentation
- `netlify.toml` — Netlify deployment configuration
- `vercel.json` — Vercel deployment configuration
- `Dockerfile` — Docker container setup
- `config/app.config.js` — centralized app configuration

#### Testing
- `tests/unit/numerology.test.js` — numerology calculation unit tests
- `tests/unit/astrology.test.js` — astrology logic unit tests
- `tests/integration/ui.test.js` — UI integration tests

---

## [Unreleased]

### Planned for v1.1.0
- OpenAI GPT-4 integration for live AI readings
- Swiss Ephemeris API for accurate chart calculations
- PDF export of birth charts
- Hindi language support

### Planned for v2.0.0
- User accounts and saved readings
- Real-time planetary position display
- Progressive Web App (PWA) support
- Backend API with Node.js/Express
