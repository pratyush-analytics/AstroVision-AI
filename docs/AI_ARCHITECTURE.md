# AI Architecture

**AstroVision AI — AI System Design**

---

## Current Architecture (v1.0 — Curated Static AI)

In v1.0, "AI" refers to a sophisticated **rule-based response system** with curated astrological content from classical sources. There are no external AI API calls.

```
User Input
    │
    ▼
┌───────────────────────────────────┐
│         getResponse(input)         │
│                                   │
│  1. Normalize input to lowercase  │
│  2. Keyword matching against 16   │
│     topic keyword arrays          │
│  3. Return matching topic's       │
│     response function output      │
│  4. Fallback: suggest related     │
│     topics if no match            │
└───────────────────────────────────┘
    │
    ▼
Rich HTML response with:
- Classical text references
- Formatted tables and lists
- Practice exercises
- Cross-system connections
```

### Content Sources

All content in the knowledge base is derived from:
- Brihat Parashara Hora Shastra (BPHS)
- Tetrabiblos (Ptolemy)
- Vettius Valens' Anthology
- Modern works: K.N. Rao, Chris Brennan, Robert Hand
- Numerology: Cheiro, Faith Javane, David Phillips
- Tarot: Rachel Pollack, A.E. Waite

---

## Numerology Engine (Algorithmic AI)

The numerology calculator is a deterministic computational engine:

```javascript
// Pythagorean reduction algorithm
function reduce(n) {
  while (n > 9 && !MASTER_NUMBERS.has(n)) {
    n = String(n).split('').reduce((s, d) => s + Number(d), 0);
  }
  return n;
}

// Life Path: month + day + year (each reduced)
// Expression: all letters of full name
// Soul Urge: vowels only
// Personality: consonants only
// Personal Year: birth month + birth day + current year
```

Accuracy: 100% deterministic — matches all published Pythagorean and Chaldean calculations.

---

## Planned Architecture (v2.0 — Live AI)

### AI Provider Strategy

```
Primary:   OpenAI GPT-4o (readings, predictions, chart interpretation)
Fallback:  Anthropic Claude 3.5 Sonnet (if OpenAI unavailable)
Cache:     Redis (24-hour cache for identical birth data requests)
```

### Prompt Engineering (Planned)

```javascript
const SYSTEM_PROMPT = `You are Jyotika, a master astrologer with deep expertise 
in Vedic Jyotish, Western astrology, and numerology. You have studied BPHS, 
Tetrabiblos, and all classical texts. Provide readings that are:
- Personalized to the exact birth data provided
- Grounded in classical astrological principles
- Warm, encouraging, and actionable
- Clearly labeled as symbolic interpretation (not scientific prediction)
Always end with a practical action step.`;

const generateReading = async (birthData, type) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: buildPrompt(birthData, type) }
    ],
    max_tokens: 500,
    temperature: 0.7,
  });
  return response.choices[0].message.content;
};
```

### Retry Logic (Planned)

```javascript
async function callWithRetry(fn, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries) throw error;
      if (error.status === 429) { // Rate limit
        await sleep(2 ** attempt * 1000); // Exponential backoff
      }
    }
  }
}
```

### Rate Limiting Strategy (Planned)

- 10 AI readings per user per day (free tier)
- 100 readings per user per day (premium tier)
- Redis sliding window rate limiter
- Graceful fallback to curated static readings on limit hit

### Token Management (Planned)

| Reading Type | Max Tokens | Estimated Cost |
|---|---|---|
| Daily horoscope | 300 | ~$0.001 |
| Birth chart summary | 500 | ~$0.002 |
| Compatibility reading | 400 | ~$0.002 |
| Jyotika chat response | 600 | ~$0.003 |
| Full prediction | 800 | ~$0.004 |

---

## Error Handling (AI Layer)

```javascript
// Fallback chain
try {
  reading = await callOpenAI(prompt);
} catch (openaiError) {
  try {
    reading = await callClaude(prompt); // Fallback
  } catch (claudeError) {
    reading = getCuratedReading(sign, type); // Static fallback
    logError('AI_FALLBACK', { openaiError, claudeError });
  }
}
```

---

## Disclaimer

> Astrology and numerology are symbolic and cultural systems with thousands of years of human tradition. They are not scientifically validated predictive methods. AstroVision AI presents these traditions as meaningful symbolic frameworks for self-reflection and personal exploration, not as literal predictions of future events.
