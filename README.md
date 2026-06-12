# ✦ AstroVision AI

> **AI-Powered Astrology Platform** — Vedic & Western birth charts, daily horoscopes, compatibility analysis, AI predictions, Tarot readings, and the Jyotika AI teacher.

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify)](https://netlify.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://vercel.com)

---

## 📸 Screenshots

| Main App | Birth Chart | Jyotika AI |
|---|---|---|
| ![Hero](docs/screenshots/hero-placeholder.png) | ![Chart](docs/screenshots/chart-placeholder.png) | ![Jyotika](docs/screenshots/jyotika-placeholder.png) |

---

## 🌟 Features

### Core Features
- **✦ Daily Horoscope** — AI-generated readings for all 12 zodiac signs with Today / Week / Month / Year tabs, love/career/health/luck scores, and lucky items
- **🌌 Birth Chart Generator** — Natal chart canvas with planetary positions, house placements, cosmic profile summary (Western & Vedic)
- **💕 Compatibility Analyzer** — Synastry analysis with animated match score ring and 6-dimension relationship breakdown
- **🔮 AI Life Predictions** — Personalized future forecast timeline by life area (Career, Love, Health, Spiritual, General)
- **🃏 Tarot Reader** — 3-card Past/Present/Future spread with AI interpretation
- **🧘 Features Grid** — Spiritual guidance, palmistry, moon tracker, muhurat calendar
- **⭐ Testimonials** — 8 real-style user stories

### Jyotika AI Teacher (`jyotika.html`)
- Full interactive chat interface with Jyotika — AI master teacher
- **16 deep knowledge topics** with authentic classical sources:
  - Vedic Astrology (BPHS, Nakshatras, Dashas, Yogas, Pancha Mahapurusha)
  - Hellenistic Astrology (Ptolemy, Valens, Profections, Zodiacal Releasing)
  - Numerology (Pythagorean, Chaldean, Kabbalistic)
  - Tarot (78 cards, spreads, astrology correspondences)
  - I Ching, Palmistry, Integration across traditions
- **🔢 Numerology Calculator** — Full profile: Life Path, Expression, Soul Urge, Personality, Personal Year, Tarot Birth Card
- **📚 Quick Reference Panels** — 12 Vedic houses, 22 Major Arcana
- **Study Curriculum sidebar** with 10 quick-access topic buttons

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (Semantic) |
| Styling | Vanilla CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| Logic | Vanilla JavaScript ES6+ (No build tools required) |
| Fonts | Google Fonts (Cinzel + Outfit) |
| Canvas | HTML5 Canvas API (birth chart, compatibility ring) |
| Animations | CSS keyframes + requestAnimationFrame |
| Deployment | Static — any CDN, Netlify, Vercel, GitHub Pages |

> **Zero dependencies.** No npm, no bundler, no framework required. Open `index.html` and it works.

---

## 🚀 Quick Start (Local)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/astrovision-ai.git

# Navigate to project
cd astrovision-ai

# Option 1: Open directly in browser
# Just double-click index.html

# Option 2: Serve with Python (recommended for development)
python -m http.server 8080
# Visit http://localhost:8080

# Option 3: Serve with Node.js
npx serve .
# Visit http://localhost:3000

# Option 4: VS Code Live Server
# Install Live Server extension → Right-click index.html → Open with Live Server
```

See [INSTALLATION.md](docs/INSTALLATION.md) for detailed setup instructions.

---

## 📁 Project Structure

```
astrovision-ai/
├── index.html              # Main application page
├── style.css               # Main application styles
├── app.js                  # Main application logic
├── jyotika.html            # Jyotika AI teacher page
├── jyotika.css             # Jyotika page styles
├── jyotika.js              # Jyotika AI knowledge engine
│
├── src/
│   ├── js/                 # Modular JavaScript (future)
│   ├── css/                # Component CSS (future)
│   └── assets/
│       └── icons/          # SVG icons and assets
│
├── public/                 # Static public assets
│   └── favicon.svg         # App favicon
│
├── docs/                   # All project documentation
│   ├── INSTALLATION.md
│   ├── DEPLOYMENT.md
│   ├── CONTRIBUTING.md
│   ├── CHANGELOG.md
│   ├── PROJECT_ARCHITECTURE.md
│   ├── API_DOCUMENTATION.md
│   ├── DATABASE_SCHEMA.md
│   ├── ERROR_HANDLING.md
│   ├── PERFORMANCE_REPORT.md
│   ├── SECURITY_REPORT.md
│   ├── AI_ARCHITECTURE.md
│   └── LOVABLE_IMPORT_GUIDE.md
│
├── tests/
│   ├── unit/               # Unit tests
│   └── integration/        # Integration tests
│
├── config/
│   └── app.config.js       # Application configuration
│
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD
│
├── .gitignore
├── .env.example
├── LICENSE
├── README.md
├── netlify.toml            # Netlify deployment config
├── vercel.json             # Vercel deployment config
└── Dockerfile              # Docker container config
```

---

## 🌍 Deployment

### One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/astrovision-ai)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/astrovision-ai)

### Manual Deployment Options

| Platform | Command / Method |
|---|---|
| GitHub Pages | Push to `main` branch → Settings → Pages → Deploy from root |
| Netlify | Drag & drop project folder at netlify.com/drop |
| Vercel | `npx vercel` in project directory |
| Render | Connect GitHub repo, set as Static Site |
| Surge | `npx surge . astrovision-ai.surge.sh` |

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed guides.

---

## 🔧 Environment Variables

This project runs entirely client-side and requires **no environment variables** for basic operation.

For future AI API integration, see [.env.example](.env.example).

---

## 🗺 Future Roadmap

| Feature | Priority | Status |
|---|---|---|
| OpenAI GPT-4 integration for live readings | High | 🔲 Planned |
| Swiss Ephemeris API for accurate chart calculations | High | 🔲 Planned |
| User accounts & saved charts | Medium | 🔲 Planned |
| PDF export of birth charts | Medium | 🔲 Planned |
| Real Vedic Panchang calendar | Medium | 🔲 Planned |
| Hindi language support | Medium | 🔲 Planned |
| Mobile app (PWA) | Low | 🔲 Planned |
| Dark/Light theme toggle | Low | 🔲 Planned |
| Real-time planetary position API | Low | 🔲 Planned |
| Share readings via link | Low | 🔲 Planned |

---

## 🤝 Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

- Classical astrology texts: BPHS (Parashara), Tetrabiblos (Ptolemy), Anthology (Vettius Valens)
- Modern authors: K.N. Rao, Chris Brennan, Robert Hand, Steven Forrest, Rachel Pollack
- Free tools: Astro.com, Astro-Seek.com, Sacred-Texts.com

---

*Made with ✦ and cosmic energy · © 2026 AstroVision AI*
