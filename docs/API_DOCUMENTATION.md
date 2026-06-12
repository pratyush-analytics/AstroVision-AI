# API Documentation

> **Note:** AstroVision AI v1.0 is a client-side application with no backend API. This document defines the internal JavaScript API surface and documents the planned REST API for v2.0.

---

## Internal JavaScript API (v1.0)

### Numerology Engine (`jyotika.js`)

#### `lifePathNum(dob: string): number`
Calculates Life Path Number from date of birth.
- **Input:** ISO date string `"YYYY-MM-DD"`
- **Output:** Number 1–9 or master number (11, 22, 33)
- **Example:** `lifePathNum("1990-04-15")` → `11`

#### `expressionNum(name: string, table: object): number`
Calculates Expression Number from full birth name.
- **Input:** Full name string, letter-value table (PYTH or CHALD)
- **Output:** Reduced number
- **Example:** `expressionNum("Priya Sharma", PYTH)` → `7`

#### `soulUrgeNum(name: string, table: object): number`
Calculates Soul Urge Number from vowels in name.

#### `personalityNum(name: string, table: object): number`
Calculates Personality Number from consonants in name.

#### `personalYearNum(dob: string, year: number): number`
Calculates Personal Year Number for a given year.
- **Example:** `personalYearNum("1990-04-15", 2026)` → `5`

#### `reduce(n: number): number`
Reduces a number to single digit (preserves 11, 22, 33).
- **Example:** `reduce(29)` → `11`

---

### Astrology Engine (`app.js`)

#### `getSunSign(month: number, day: number): number`
Returns index (0–11) of sun sign from birth month/day.
- **Input:** month (0-indexed), day (1-31)
- **Output:** Index into SIGNS array

#### `generateBirthChart(name, date, time, place): void`
Generates and renders a birth chart from birth details.
Renders to `#chartCanvas`, `#chartPlanets`, `#chartSummary`.

#### `showHoroscope(idx: number, card: HTMLElement): void`
Opens the horoscope panel for a zodiac sign.
- **idx:** Sign index (0–11)
- **card:** Clicked DOM element

#### `loadHoroReading(sign: object, tab: string): void`
Loads a horoscope reading with typing animation.
- **sign:** Sign object from SIGNS array
- **tab:** `"today" | "week" | "month" | "year"`

#### `getResponse(input: string): string`
Jyotika AI knowledge engine — returns HTML response string.
- **Input:** User's chat message
- **Output:** Formatted HTML string with response

---

## Planned REST API (v2.0)

Base URL: `https://api.astrovision-ai.com/v1`

### Authentication
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

### Endpoints

#### `POST /api/chart/generate`
Generate a birth chart.
```json
Request:
{
  "name": "Priya Sharma",
  "dateOfBirth": "1990-04-15",
  "timeOfBirth": "14:30",
  "placeOfBirth": "Mumbai, India",
  "system": "vedic | western"
}

Response:
{
  "chartId": "uuid",
  "sunSign": "Aries",
  "moonSign": "Cancer",
  "rising": "Scorpio",
  "planets": [...],
  "houses": [...],
  "summary": "AI-generated reading...",
  "createdAt": "2026-06-12T00:00:00Z"
}
```

#### `POST /api/horoscope`
Get AI-generated horoscope.
```json
Request:
{
  "sign": "Scorpio",
  "period": "today | week | month | year"
}

Response:
{
  "reading": "AI-generated text...",
  "scores": { "love": 78, "career": 85, "health": 72, "luck": 90 },
  "luckyColor": "Dark Red",
  "luckyNumber": 9,
  "powerStone": "Topaz",
  "bestMatch": "Pisces"
}
```

#### `POST /api/compatibility`
Analyze compatibility between two people.
```json
Request:
{
  "person1": { "name": "Priya", "sign": "Scorpio", "dob": "1990-04-15" },
  "person2": { "name": "Rahul", "sign": "Pisces", "dob": "1988-03-20" }
}

Response:
{
  "overallScore": 87,
  "dimensions": {
    "loveRomance": 90,
    "emotionalBond": 85,
    "communication": 82,
    "trustLoyalty": 88,
    "longTermVision": 84,
    "physicalChemistry": 91
  },
  "reading": "AI-generated compatibility analysis..."
}
```

#### `POST /api/predict`
Get life predictions.
```json
Request:
{
  "name": "Priya Sharma",
  "sign": "Scorpio",
  "dob": "1990-04-15",
  "area": "career | love | health | spiritual | general",
  "period": "3m | 6m | 1y | 5y",
  "question": "Optional specific question"
}

Response:
{
  "title": "Priya's Career Forecast",
  "timeline": [
    { "title": "Event 1", "time": "Month 1-2", "description": "..." },
    ...
  ],
  "advice": "Personalized cosmic advice...",
  "period": "6m"
}
```

#### `POST /api/jyotika/chat`
Chat with Jyotika AI.
```json
Request:
{
  "message": "Explain the Vimshottari Dasha system",
  "conversationId": "optional-session-id"
}

Response:
{
  "response": "HTML-formatted educational response...",
  "topic": "dasha",
  "conversationId": "session-uuid",
  "suggestedFollowUps": ["What are Nakshatras?", "Explain Raja Yoga"]
}
```

#### `POST /api/numerology/calculate`
Calculate full numerology profile.
```json
Request:
{
  "name": "Priya Sharma",
  "dateOfBirth": "1990-04-15",
  "system": "pythagorean | chaldean",
  "year": 2026
}

Response:
{
  "lifePath": 11,
  "expression": 7,
  "soulUrge": 3,
  "personality": 4,
  "birthdayNumber": 15,
  "personalYear": 5,
  "tarotBirthCard": "The Star",
  "tarotYearCard": "Temperance",
  "isMasterNumber": true,
  "isKarmicDebt": false
}
```

---

## Error Responses

```json
{
  "error": {
    "code": "INVALID_DATE",
    "message": "Date of birth must be a valid date in YYYY-MM-DD format",
    "field": "dateOfBirth"
  }
}
```

| Error Code | HTTP Status | Description |
|---|---|---|
| `INVALID_DATE` | 400 | Malformed or impossible date |
| `INVALID_SIGN` | 400 | Unknown zodiac sign |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `AUTH_REQUIRED` | 401 | JWT token missing or expired |
| `AI_UNAVAILABLE` | 503 | AI provider temporarily down |
| `INTERNAL_ERROR` | 500 | Server error |
