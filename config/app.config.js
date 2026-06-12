/**
 * AstroVision AI — Centralized Application Configuration
 * ======================================================
 * All application-wide constants and configuration live here.
 * Import this file rather than scattering magic values.
 */

const AppConfig = {

  // ── APP META ────────────────────────────────────────────────
  app: {
    name: 'AstroVision AI',
    tagline: 'Unlock Your Cosmic Destiny',
    version: '1.0.0',
    year: 2026,
    baseUrl: 'https://astrovision-ai.netlify.app',
    supportEmail: 'support@astrovision-ai.com',
  },

  // ── FEATURE FLAGS ───────────────────────────────────────────
  features: {
    liveAI: false,           // Set true when OpenAI integrated
    realEphemeris: false,    // Set true when Astro API integrated
    userAccounts: false,     // Set true when auth added
    pdfExport: false,        // Set true when PDF feature added
    hindiLanguage: false,    // Set true when Hindi added
  },

  // ── ANIMATION ───────────────────────────────────────────────
  animation: {
    starCount: 220,
    starMaxRadius: 1.4,
    starAlphaSpeed: 0.003,
    planetOrbitSpeed: 0.4,
    typingDelay: 1800,       // ms before horoscope reading shows
    generationDelay: 2000,   // ms for chart generation simulation
    compatDelay: 2000,       // ms for compatibility analysis simulation
    predDelay: 2500,         // ms for prediction generation simulation
  },

  // ── ASTROLOGY DATA ──────────────────────────────────────────
  astrology: {
    defaultChartSystem: 'western',   // 'western' | 'vedic'
    ayanamsa: 23.15,                 // Current Lahiri ayanamsa (degrees)
    supportedSystems: ['western', 'vedic'],
  },

  // ── NUMEROLOGY ──────────────────────────────────────────────
  numerology: {
    defaultSystem: 'pythagorean',    // 'pythagorean' | 'chaldean'
    masterNumbers: [11, 22, 33],
    karmicNumbers: [13, 14, 16, 19],
    defaultYear: new Date().getFullYear(),
  },

  // ── TAROT ───────────────────────────────────────────────────
  tarot: {
    cardsInSpread: 3,
    deckSize: 78,
    majorArcanaCount: 22,
    minorArcanaCount: 56,
  },

  // ── UI ──────────────────────────────────────────────────────
  ui: {
    navScrollThreshold: 50,     // px before nav darkens
    toastDuration: 5000,        // ms
    mobileBreakpoint: 768,      // px
    tabletBreakpoint: 1024,     // px
  },

  // ── DESIGN TOKENS ───────────────────────────────────────────
  colors: {
    bg: '#06040f',
    bg2: '#0d0a1e',
    card: '#12102a',
    card2: '#1a1740',
    border: '#2a2660',
    gold: '#f0c060',
    purple: '#9b6dff',
    teal: '#40e0c8',
    pink: '#ff6b9d',
    text: '#e8e4ff',
    muted: '#9890c0',
  },

  // ── EXTERNAL RESOURCES ──────────────────────────────────────
  external: {
    googleFonts: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Outfit:wght@300;400;500;600&display=swap',
    astroComUrl: 'https://www.astro.com',
    astroSeekUrl: 'https://www.astro-seek.com',
    sacredTextsUrl: 'https://www.sacred-texts.com',
  },

};

// Make available globally (for vanilla JS) or export (for modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppConfig;
} else {
  window.AppConfig = AppConfig;
}
