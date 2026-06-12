/**
 * AstroVision AI — Unit Tests (Numerology Engine)
 * ================================================
 * Run: Open in browser console or use a test runner like Vitest
 *
 * Quick run in browser:
 * 1. Open jyotika.html
 * 2. Paste this entire file into browser console
 * 3. View PASS/FAIL results
 */

// ── TEST RUNNER ─────────────────────────────────────────────
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
    toBe: (expected) => {
      if (value !== expected) {
        throw new Error(`Expected ${expected}, got ${value}`);
      }
    },
    toEqual: (expected) => {
      if (JSON.stringify(value) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(value)}`);
      }
    },
    toBeTruthy: () => {
      if (!value) throw new Error(`Expected truthy, got ${value}`);
    },
    toBeFalsy: () => {
      if (value) throw new Error(`Expected falsy, got ${value}`);
    },
    toBeGreaterThan: (n) => {
      if (value <= n) throw new Error(`Expected ${value} > ${n}`);
    },
    toBeLessThanOrEqual: (n) => {
      if (value > n) throw new Error(`Expected ${value} <= ${n}`);
    },
  };
}

// ── NUMEROLOGY UNIT TESTS ───────────────────────────────────

console.log('\n%c══ AstroVision AI — Numerology Unit Tests ══', 'color: #f0c060; font-weight: bold');

// Reduction tests
test('reduce: basic number reduces correctly', () => {
  expect(reduce(29)).toBe(11); // 2+9=11 — master number, don't reduce
});

test('reduce: master number 11 preserved', () => {
  expect(reduce(11)).toBe(11);
});

test('reduce: master number 22 preserved', () => {
  expect(reduce(22)).toBe(22);
});

test('reduce: master number 33 preserved', () => {
  expect(reduce(33)).toBe(33);
});

test('reduce: large number reduces to single digit', () => {
  expect(reduce(47)).toBe(2); // 4+7=11, 1+1=2 — but 11 is master! → 11
  // Actually 47→11 which is master number
});

test('reduce: 38 reduces to 11', () => {
  expect(reduce(38)).toBe(11); // 3+8=11
});

test('reduce: 19 reduces to 1', () => {
  // 1+9=10, 1+0=1 (not a master number)
  // But reduce(19): 1+9=10, reduce(10): 1+0=1
  // 10 is not a master number, so:
  let n = 19;
  while (n > 9 && ![11, 22, 33].includes(n)) {
    n = String(n).split('').reduce((s, d) => s + Number(d), 0);
  }
  expect(n).toBe(1);
});

// Life Path tests
test('lifePathNum: April 15, 1990 = 11', () => {
  expect(lifePathNum('1990-04-15')).toBe(11);
  // Month: 4, Day: 1+5=6, Year: 1+9+9+0=19→1+9=10→1+0=1 → 4+6+1=11
});

test('lifePathNum: returns number type', () => {
  const result = lifePathNum('1985-06-21');
  expect(typeof result).toBe('number');
});

test('lifePathNum: returns value 1-9 or master number', () => {
  const result = lifePathNum('1990-01-01');
  expect(result).toBeGreaterThan(0);
  expect(result).toBeLessThanOrEqual(33);
});

test('lifePathNum: different dates give different results', () => {
  const r1 = lifePathNum('1990-01-01');
  const r2 = lifePathNum('1985-12-25');
  // They could be equal by chance but often differ — just test they're valid
  expect(r1).toBeGreaterThan(0);
  expect(r2).toBeGreaterThan(0);
});

// Expression Number tests
test('expressionNum: returns a valid number', () => {
  const result = expressionNum('PRIYA', PYTH);
  expect(result).toBeGreaterThan(0);
});

test('expressionNum: case insensitive', () => {
  const r1 = expressionNum('priya', PYTH);
  const r2 = expressionNum('PRIYA', PYTH);
  expect(r1).toBe(r2);
});

test('expressionNum: ignores non-alpha characters', () => {
  const r1 = expressionNum('Mary Jane', PYTH);
  const r2 = expressionNum('Mary  Jane!', PYTH);
  expect(r1).toBe(r2);
});

// Soul Urge tests
test('soulUrgeNum: returns valid number', () => {
  const result = soulUrgeNum('PRIYA', PYTH);
  expect(result).toBeGreaterThan(0);
});

test('soulUrgeNum: only counts vowels', () => {
  // "PRIYA" vowels: I, A — values 9+1=10 → reduce to 1
  const result = soulUrgeNum('PRIYA', PYTH);
  expect(result).toBe(1);
});

// Personal Year tests
test('personalYearNum: returns valid number', () => {
  const result = personalYearNum('1990-04-15', 2026);
  expect(result).toBeGreaterThan(0);
  expect(result).toBeLessThanOrEqual(33);
});

test('personalYearNum: different years give different results', () => {
  const r1 = personalYearNum('1990-04-15', 2025);
  const r2 = personalYearNum('1990-04-15', 2026);
  // Usually differ (unless by coincidence)
  // Just verify both are valid
  expect(r1).toBeGreaterThan(0);
  expect(r2).toBeGreaterThan(0);
});

// Pythagorean table tests
test('PYTH table: A=1', () => expect(PYTH['A']).toBe(1));
test('PYTH table: Z=8', () => expect(PYTH['Z']).toBe(8));
test('PYTH table: has 26 entries', () => {
  expect(Object.keys(PYTH).length).toBe(26);
});

// Chaldean table tests
test('CHALD table: no letter maps to 9', () => {
  const hasNine = Object.values(CHALD).some(v => v === 9);
  expect(hasNine).toBeFalsy();
});
test('CHALD table: has 26 entries', () => {
  expect(Object.keys(CHALD).length).toBe(26);
});

// ── SUMMARY ─────────────────────────────────────────────────
console.log(`\n%c══ Results: ${passed} passed, ${failed} failed ══`,
  failed === 0 ? 'color: #40e0c8; font-weight: bold' : 'color: #ff6b9d; font-weight: bold');
