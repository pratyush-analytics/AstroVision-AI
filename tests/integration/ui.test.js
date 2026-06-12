/**
 * AstroVision AI — Integration Tests
 * ====================================
 * Runs in the browser on index.html.
 * Paste into console after page loads.
 * Tests DOM interactions and UI workflows.
 */

let passed = 0, failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`%c✅ PASS: ${description}`, 'color: #40e0c8');
    passed++;
  } catch (e) {
    console.log(`%c❌ FAIL: ${description}\n   ${e.message}`, 'color: #ff6b9d');
    failed++;
  }
}

function expect(value) {
  return {
    toBe: (expected) => { if (value !== expected) throw new Error(`Expected ${expected}, got ${value}`); },
    toBeTruthy: () => { if (!value) throw new Error(`Expected truthy, got ${value}`); },
    toBeFalsy: () => { if (value) throw new Error(`Expected falsy, got ${value}`); },
    toBeGreaterThan: (n) => { if (value <= n) throw new Error(`Expected ${value} > ${n}`); },
    not: { toBe: (expected) => { if (value === expected) throw new Error(`Expected NOT ${expected}`); } },
  };
}

function getElementById(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Element #${id} not found in DOM`);
  return el;
}

console.log('\n%c══ AstroVision AI — Integration Tests ══', 'color: #f0c060; font-weight: bold');

// ── DOM STRUCTURE ───────────────────────────────────────────

test('DOM: nav element exists', () => {
  expect(getElementById('nav')).toBeTruthy();
});

test('DOM: star canvas exists', () => {
  expect(getElementById('stars')).toBeTruthy();
});

test('DOM: zodiac grid exists', () => {
  expect(getElementById('zodiacGrid')).toBeTruthy();
});

test('DOM: zodiac grid has 12 sign cards', () => {
  const cards = document.querySelectorAll('.z-card');
  expect(cards.length).toBe(12);
});

test('DOM: horoscope panel exists (initially hidden)', () => {
  const panel = getElementById('horoPanel');
  expect(panel.style.display === 'none' || panel.style.display === '').toBeTruthy();
});

test('DOM: birth chart form exists', () => {
  expect(getElementById('chartForm')).toBeTruthy();
});

test('DOM: birth chart form inputs exist', () => {
  expect(getElementById('cName')).toBeTruthy();
  expect(getElementById('cDate')).toBeTruthy();
  expect(getElementById('cTime')).toBeTruthy();
  expect(getElementById('cPlace')).toBeTruthy();
});

test('DOM: compatibility form exists', () => {
  expect(getElementById('c1sign')).toBeTruthy();
  expect(getElementById('c2sign')).toBeTruthy();
});

test('DOM: sign dropdowns are populated', () => {
  const c1 = getElementById('c1sign');
  expect(c1.options.length).toBeGreaterThan(1); // more than just "Select"
});

test('DOM: prediction form exists', () => {
  expect(getElementById('pName')).toBeTruthy();
  expect(getElementById('pSign')).toBeTruthy();
  expect(getElementById('pArea')).toBeTruthy();
});

test('DOM: tarot section exists', () => {
  expect(getElementById('tarotBtn')).toBeTruthy();
  expect(getElementById('cardDeck')).toBeTruthy();
});

test('DOM: tarot deck has 7 face-down cards', () => {
  const deckCards = document.querySelectorAll('.deck-card');
  expect(deckCards.length).toBe(7);
});

test('DOM: chart canvas is correct size', () => {
  const canvas = getElementById('chartCanvas');
  expect(canvas.width).toBe(300);
  expect(canvas.height).toBe(300);
});

test('DOM: hero chart section exists', () => {
  expect(getElementById('heroChart')).toBeTruthy();
});

test('DOM: testimonials section has cards', () => {
  const cards = document.querySelectorAll('.testi-card');
  expect(cards.length).toBeGreaterThan(0);
});

test('DOM: nav links point to correct sections', () => {
  const links = document.querySelectorAll('nav a[href^="#"]');
  expect(links.length).toBeGreaterThan(3);
});

// ── FORM VALIDATION SIMULATION ──────────────────────────────

test('UI: generate chart button exists and has ID', () => {
  expect(getElementById('genChartBtn')).toBeTruthy();
});

test('UI: compatibility button exists', () => {
  expect(getElementById('compatBtn')).toBeTruthy();
});

test('UI: prediction button exists', () => {
  expect(getElementById('predBtn')).toBeTruthy();
});

test('UI: tarot button starts enabled', () => {
  const btn = getElementById('tarotBtn');
  expect(btn.disabled).toBeFalsy();
});

// ── CANVAS CONTEXT ──────────────────────────────────────────

test('Canvas: chartCanvas has 2D context', () => {
  const canvas = getElementById('chartCanvas');
  const ctx = canvas.getContext('2d');
  expect(ctx).toBeTruthy();
});

test('Canvas: compatCanvas has 2D context', () => {
  const canvas = getElementById('compatCanvas');
  const ctx = canvas.getContext('2d');
  expect(ctx).toBeTruthy();
});

test('Canvas: stars canvas has 2D context', () => {
  const canvas = getElementById('stars');
  const ctx = canvas.getContext('2d');
  expect(ctx).toBeTruthy();
});

// ── SUMMARY ─────────────────────────────────────────────────
console.log(`\n%c══ Integration Results: ${passed} passed, ${failed} failed ══`,
  failed === 0 ? 'color: #40e0c8; font-weight: bold' : 'color: #ff6b9d; font-weight: bold');

if (failed === 0) {
  console.log('%c✦ All integration tests passed! UI is structurally sound.', 'color: #f0c060');
}
