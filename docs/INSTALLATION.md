# Installation Guide

## Prerequisites

AstroVision AI is a **pure static web application** — no Node.js, npm, or build tools are required for basic use.

### Optional (for development server)
- Python 3.x (for `http.server`)
- Node.js 18+ (for `npx serve`)
- VS Code with Live Server extension

---

## Method 1: Direct File Open (Simplest)

1. Download or clone the repository
2. Navigate to the project folder
3. Double-click `index.html`
4. The app opens in your default browser

> ⚠️ Some browser features (e.g., local fonts) may behave differently when opened directly as `file://`. Use a local server for best results.

---

## Method 2: Python HTTP Server (Recommended)

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/astrovision-ai.git
cd astrovision-ai

# Python 3
python -m http.server 8080

# Visit
open http://localhost:8080
```

---

## Method 3: Node.js Serve

```bash
# Install serve globally (one-time)
npm install -g serve

# Or use npx without installing
npx serve .

# Visit http://localhost:3000
```

---

## Method 4: VS Code Live Server

1. Install the **Live Server** extension in VS Code
2. Open the project folder in VS Code
3. Right-click `index.html` → **Open with Live Server**
4. Browser opens automatically at `http://127.0.0.1:5500`

---

## Verifying Installation

Once running, confirm these pages load correctly:

| URL | Expected |
|---|---|
| `/` or `index.html` | Main AstroVision app with animated star background |
| `/jyotika.html` | Jyotika AI chat interface |

### Feature Checklist
- [ ] Star field animation visible in background
- [ ] Zodiac grid shows all 12 signs
- [ ] Clicking a zodiac sign loads a horoscope reading
- [ ] Birth chart form accepts input and renders canvas
- [ ] Compatibility tool shows animated score ring
- [ ] Tarot draws 3 cards with interpretation
- [ ] Jyotika chat responds to messages
- [ ] Numerology calculator computes Life Path

---

## Troubleshooting

### Fonts not loading
The app uses Google Fonts (Cinzel, Outfit). Ensure internet connectivity, or download and host fonts locally.

### Canvas not rendering
Ensure your browser supports HTML5 Canvas (all modern browsers do). Disable any canvas-blocking extensions.

### Jyotika AI not responding
Check browser console for JavaScript errors. Ensure `jyotika.js` is in the same directory as `jyotika.html`.
