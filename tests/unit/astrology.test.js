/**
 * AstroVision AI — Unit Tests (Astrology Engine)
 * ===============================================
 * Paste into browser console on index.html to run
 */

let passed = 0, failed = 0;

function test(description, fn) {
  try { fn(); console.log(`%c✅ PASS: ${description}`, 'color: #40e0c8'); passed++; }
  catch (e) { console.log(`%c❌ FAIL: ${description}\n   ${e.message}`, 'color: #ff6b9d'); failed++; }
}
function expect(value) {
  return {
    toBe: (expected) => { if (value !== expected) throw new Error(`Expected ${expected}, got ${value}`); },
    toBeGreaterThan: (n) => { if (value <= n) throw new Error(`Expected ${value} > ${n}`); },
    toBeLessThan: (n) => { if (value >= n) throw new Error(`Expected ${value} < ${n}`); },
    toBeTruthy: () => { if (!value) throw new Error(`Expected truthy`); },
    toMatch: (pattern) => { if (!pattern.test(value)) throw new Error(`${value} doesn't match ${pattern}`); },
  };
}

console.log('\n%c══ AstroVision AI — Astrology Engine Tests ══', 'color: #f0c060; font-weight: bold');

// ── SIGNS DATA INTEGRITY ────────────────────────────────────

test('SIGNS: array has exactly 12 entries', () => {
  expect(SIGNS.length).toBe(12);
});

test('SIGNS: each sign has required properties', () => {
  const required = ['name', 'emoji', 'sym', 'dates', 'el', 'ruler', 'stone', 'color', 'compat'];
  SIGNS.forEach(sign => {
    required.forEach(prop => {
      if (!sign[prop]) throw new Error(`${sign.name} missing property: ${prop}`);
    });
  });
  expect(true).toBeTruthy();
});

test('SIGNS: elements are valid', () => {
  const validElements = ['Fire', 'Earth', 'Air', 'Water'];
  SIGNS.forEach(sign => {
    if (!validElements.includes(sign.el)) {
      throw new Error(`${sign.name} has invalid element: ${sign.el}`);
    }
  });
  expect(true).toBeTruthy();
});

test('SIGNS: elemental distribution is 3 each', () => {
  const counts = { Fire: 0, Earth: 0, Air: 0, Water: 0 };
  SIGNS.forEach(s => counts[s.el]++);
  Object.entries(counts).forEach(([el, count]) => {
    if (count !== 3) throw new Error(`${el} has ${count} signs, expected 3`);
  });
  expect(true).toBeTruthy();
});

test('SIGNS: compat references are valid sign names', () => {
  const names = SIGNS.map(s => s.name);
  SIGNS.forEach(s => {
    if (!names.includes(s.compat)) {
      throw new Error(`${s.name}.compat "${s.compat}" is not a valid sign name`);
    }
  });
  expect(true).toBeTruthy();
});

// ── SUN SIGN CALCULATION ────────────────────────────────────

test('getSunSign: March 25 = Aries (index 0)', () => {
  expect(getSunSign(2, 25)).toBe(0); // month 0-indexed: 2=March
});

test('getSunSign: April 21 = Taurus (index 1)', () => {
  expect(getSunSign(3, 21)).toBe(1); // April=3
});

test('getSunSign: returns value 0-11', () => {
  const result = getSunSign(5, 15); // June 15
  expect(result).toBeGreaterThan(-1);
  expect(result).toBeLessThan(12);
});

test('getSunSign: December 25 = Capricorn (index 9)', () => {
  expect(getSunSign(11, 25)).toBe(9); // December=11
});

test('getSunSign: January 10 = Capricorn (index 9)', () => {
  expect(getSunSign(0, 10)).toBe(9); // January=0
});

test('getSunSign: January 22 = Aquarius (index 10)', () => {
  expect(getSunSign(0, 22)).toBe(10);
});

// ── HOROSCOPE DATA ──────────────────────────────────────────

test('READINGS: has all required time periods', () => {
  const required = ['today', 'week', 'month', 'year'];
  required.forEach(period => {
    if (!READINGS[period] || !Array.isArray(READINGS[period])) {
      throw new Error(`Missing readings for period: ${period}`);
    }
  });
  expect(true).toBeTruthy();
});

test('READINGS: today has at least 1 reading', () => {
  expect(READINGS.today.length).toBeGreaterThan(0);
});

test('READINGS: all readings are non-empty strings', () => {
  Object.values(READINGS).forEach(pool => {
    pool.forEach(reading => {
      if (typeof reading !== 'string' || reading.length < 10) {
        throw new Error(`Invalid reading: ${reading}`);
      }
    });
  });
  expect(true).toBeTruthy();
});

// ── TAROT DATA ──────────────────────────────────────────────

test('TAROT_CARDS: has exactly 20 cards', () => {
  expect(TAROT_CARDS.length).toBe(20);
});

test('TAROT_CARDS: each card has name, emoji, meaning', () => {
  TAROT_CARDS.forEach(card => {
    if (!card.name) throw new Error('Card missing name');
    if (!card.emoji) throw new Error(`${card.name} missing emoji`);
    if (!card.meaning) throw new Error(`${card.name} missing meaning`);
  });
  expect(true).toBeTruthy();
});

test('TAROT_CARDS: no duplicate card names', () => {
  const names = TAROT_CARDS.map(c => c.name);
  const unique = new Set(names);
  if (unique.size !== names.length) throw new Error('Duplicate card names found');
  expect(true).toBeTruthy();
});

// ── TESTIMONIALS ────────────────────────────────────────────

test('TESTIMONIALS: has 8 entries', () => {
  expect(TESTIMONIALS.length).toBe(8);
});

test('TESTIMONIALS: all stars are 4 or 5', () => {
  TESTIMONIALS.forEach(t => {
    if (t.stars < 4 || t.stars > 5) throw new Error(`Invalid star rating: ${t.stars}`);
  });
  expect(true).toBeTruthy();
});

// ── SUMMARY ─────────────────────────────────────────────────
console.log(`\n%c══ Results: ${passed} passed, ${failed} failed ══`,
  failed === 0 ? 'color: #40e0c8; font-weight: bold' : 'color: #ff6b9d; font-weight: bold');
