# Deployment Guide

AstroVision AI is a **100% static application** — it deploys to any static host with zero configuration.

---

## 🚀 Netlify (Recommended — Fastest)

### Option A: Drag & Drop
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `AstroVision-AI` folder onto the page
3. Your site is live in seconds with a `*.netlify.app` URL

### Option B: GitHub Integration
1. Push your project to GitHub
2. Log in to [netlify.com](https://netlify.com)
3. Click **Add new site → Import an existing project**
4. Connect GitHub → Select your repo
5. Build settings:
   - Build command: *(leave empty)*
   - Publish directory: `.` (root)
6. Click **Deploy site**

### Option C: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir .
```

---

## ▲ Vercel

### Option A: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B: GitHub Integration
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repository
3. Framework preset: **Other**
4. Root directory: `.`
5. Click **Deploy**

---

## 📄 GitHub Pages

1. Push to GitHub repository
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `main`, folder: `/ (root)`
5. Click **Save**
6. Access at `https://YOUR_USERNAME.github.io/astrovision-ai`

---

## 🖥 Render

1. Go to [render.com](https://render.com) → New → Static Site
2. Connect your GitHub repo
3. Settings:
   - Build command: *(leave empty)*
   - Publish directory: `.`
4. Click **Create Static Site**

---

## 🚢 Docker

```bash
# Build image
docker build -t astrovision-ai .

# Run container
docker run -p 8080:80 astrovision-ai

# Visit http://localhost:8080
```

---

## 🌊 Surge.sh

```bash
npm install -g surge
surge . astrovision-ai.surge.sh
```

---

## Environment Variables

This static app requires no server-side environment variables.

For future AI API features, add to your host's environment settings:
```
OPENAI_API_KEY=your_key_here
ASTRO_API_KEY=your_key_here
```

See [.env.example](../.env.example) for all variables.

---

## Custom Domain

All platforms above support custom domains:
1. Add your domain in platform settings
2. Update DNS with provided CNAME/A records
3. SSL is provisioned automatically (free)
