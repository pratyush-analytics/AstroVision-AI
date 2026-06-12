# Error Handling Documentation

---

## Current Error Handling (v1.0 — Client-Side)

### User Input Validation

| Location | Validation | Error Response |
|---|---|---|
| Birth Chart form | Name + Date required | `alert()` with friendly message |
| Compatibility form | Both signs required | `alert()` with friendly message |
| Predictions form | Name + Sign required | `alert()` with friendly message |
| Numerology calculator | Name + DOB required | `alert()` with friendly message |

### Error States

All error states are handled gracefully:
- Empty zodiac grid: Impossible (built from static data)
- Canvas failure: Browser fallback text inside `<canvas>` element
- Missing DOM elements: Guards with `if (!el) return;` patterns

---

## Planned Error Handling (v2.0)

### Global Error Handler

```javascript
// config/errorHandler.js
class AppError extends Error {
  constructor(message, code, statusCode = 500) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  showErrorToast('Something went wrong. Please try again.');
  logError(event.reason);
});

window.addEventListener('error', (event) => {
  console.error('Uncaught Error:', event.error);
  showErrorToast('An unexpected error occurred.');
  logError(event.error);
});
```

### Error Toast Component

```javascript
function showErrorToast(message, type = 'error') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'error' ? '⚠️' : 'ℹ️'}</span>
    <span>${message}</span>
    <button onclick="this.parentElement.remove()">✕</button>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 5000);
}
```

### Fallback UI States

| Component | Empty State | Error State |
|---|---|---|
| Horoscope panel | "Select a zodiac sign above" | "Unable to load reading. Try again." |
| Birth chart | Placeholder skeleton | "Chart generation failed. Check your birth date." |
| Compatibility | Prompt to select signs | "Analysis failed. Please retry." |
| Jyotika chat | Greeting message | "Jyotika is temporarily unavailable. Refreshing..." |
| Tarot cards | Animated card backs | "Card draw failed. Please try again." |

### AI API Error Chain

```
AI Request
    │
    ▼
Try OpenAI API
    │ ✗ (rate limit / error)
    ▼
Try Anthropic Fallback
    │ ✗ (unavailable)
    ▼
Return Curated Static Reading
    │
    ▼ (always succeeds)
User sees result (no blank screen)
```

### Error Logging (v2.0)

```javascript
// Structured error logging
function logError(error, context = {}) {
  const payload = {
    timestamp: new Date().toISOString(),
    message: error.message,
    stack: error.stack,
    code: error.code,
    userAgent: navigator.userAgent,
    url: window.location.href,
    context,
  };

  // Send to Sentry
  if (window.Sentry) {
    Sentry.captureException(error, { extra: context });
  }

  // Console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('[AstroVision Error]', payload);
  }
}
```

---

## Error Code Reference

| Code | Category | Description | User Message |
|---|---|---|---|
| `E001` | Validation | Missing required field | "Please fill in all required fields" |
| `E002` | Validation | Invalid date format | "Please enter a valid date" |
| `E003` | Validation | Invalid zodiac sign | "Please select a valid zodiac sign" |
| `E004` | Canvas | Render failure | "Chart could not be displayed" |
| `E005` | AI | Provider timeout | "Reading is taking longer than expected..." |
| `E006` | AI | Rate limit exceeded | "Daily reading limit reached. Try tomorrow." |
| `E007` | Network | Fetch failure | "Connection issue. Check your internet." |
| `E500` | System | Unknown error | "Something went wrong. Please refresh." |
