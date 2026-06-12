# Database Schema

> **Note:** AstroVision AI v1.0 is entirely client-side with no database. This document defines the schema for the planned v2.0 backend.

---

## Overview

When backend features are added, the recommended database is **PostgreSQL** with **Prisma ORM**.

---

## Entity Relationship Diagram

```
┌──────────┐      ┌─────────────┐      ┌──────────────┐
│  users   │─────<│   charts    │      │  readings    │
└──────────┘      └─────────────┘      └──────────────┘
     │                  │
     │            ┌─────▼──────────┐
     │            │  compatibility  │
     │            └────────────────┘
     │
┌────▼──────────┐
│ user_sessions  │
└───────────────┘
```

---

## Tables

### `users`
```sql
CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         VARCHAR(255) UNIQUE NOT NULL,
  name          VARCHAR(255),
  created_at    TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at    TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_premium    BOOLEAN DEFAULT false,
  readings_used INTEGER DEFAULT 0,
  last_active   TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_users_email ON users(email);
```

### `birth_charts`
```sql
CREATE TABLE birth_charts (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID REFERENCES users(id) ON DELETE CASCADE,
  name           VARCHAR(255) NOT NULL,
  date_of_birth  DATE NOT NULL,
  time_of_birth  TIME,
  place_of_birth VARCHAR(255),
  latitude       DECIMAL(9,6),
  longitude      DECIMAL(9,6),
  chart_system   VARCHAR(20) DEFAULT 'western',  -- 'western' | 'vedic'
  sun_sign       VARCHAR(20),
  moon_sign      VARCHAR(20),
  rising_sign    VARCHAR(20),
  chart_data     JSONB,      -- Full planetary positions
  ai_summary     TEXT,       -- AI-generated reading
  created_at     TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_charts_user_id ON birth_charts(user_id);
CREATE INDEX idx_charts_created_at ON birth_charts(created_at);
```

### `horoscope_readings`
```sql
CREATE TABLE horoscope_readings (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sign        VARCHAR(20) NOT NULL,
  period      VARCHAR(10) NOT NULL,  -- 'today' | 'week' | 'month' | 'year'
  reading     TEXT NOT NULL,
  love_score  SMALLINT,
  career_score SMALLINT,
  health_score SMALLINT,
  luck_score  SMALLINT,
  valid_for   DATE NOT NULL,         -- Date this reading is valid for
  created_at  TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_readings_sign_period ON horoscope_readings(sign, period, valid_for);
```

### `compatibility_analyses`
```sql
CREATE TABLE compatibility_analyses (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID REFERENCES users(id),
  name1           VARCHAR(255),
  sign1           VARCHAR(20),
  name2           VARCHAR(255),
  sign2           VARCHAR(20),
  overall_score   SMALLINT,
  love_score      SMALLINT,
  emotional_score SMALLINT,
  comm_score      SMALLINT,
  trust_score     SMALLINT,
  vision_score    SMALLINT,
  physical_score  SMALLINT,
  reading         TEXT,
  created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### `chat_sessions` (Jyotika AI)
```sql
CREATE TABLE chat_sessions (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID REFERENCES users(id),
  messages     JSONB DEFAULT '[]',  -- Array of {role, content, timestamp}
  topic_path   TEXT[],              -- Topics discussed in order
  created_at   TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at   TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### `numerology_profiles`
```sql
CREATE TABLE numerology_profiles (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID REFERENCES users(id),
  birth_name       VARCHAR(255) NOT NULL,
  date_of_birth    DATE NOT NULL,
  system           VARCHAR(20) DEFAULT 'pythagorean',
  life_path        SMALLINT,
  expression       SMALLINT,
  soul_urge        SMALLINT,
  personality      SMALLINT,
  birthday_number  SMALLINT,
  is_master_number BOOLEAN DEFAULT false,
  is_karmic_debt   BOOLEAN DEFAULT false,
  created_at       TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## Indexes

```sql
-- Performance indexes
CREATE INDEX idx_readings_valid ON horoscope_readings(valid_for, sign);
CREATE INDEX idx_compat_user ON compatibility_analyses(user_id, created_at);
CREATE INDEX idx_sessions_user ON chat_sessions(user_id);
CREATE INDEX idx_numerology_user ON numerology_profiles(user_id);
```

---

## Caching Strategy

| Data Type | Cache Duration | Storage |
|---|---|---|
| Daily horoscope readings | 24 hours | Redis |
| Planetary positions | 1 hour | Redis |
| Numerology calculations | 30 days | PostgreSQL |
| AI-generated chart summaries | 7 days | PostgreSQL |
| Compatibility analyses | No cache (personalized) | PostgreSQL |

---

## Migrations (Prisma)

```bash
# Initialize
npx prisma init

# Create migration
npx prisma migrate dev --name init

# Apply to production
npx prisma migrate deploy

# Generate client
npx prisma generate
```
