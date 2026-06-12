'use strict';
// ══════════════════════════════════════════════════════════════
//  Jyotika AI – Master Teacher of Esoteric Arts
//  Knowledge engine with Vedic · Western · Numerology · Tarot
// ══════════════════════════════════════════════════════════════

// ── STARFIELD ─────────────────────────────────────────────────
(function(){
  const c=document.getElementById('stars'),ctx=c.getContext('2d');
  let W,H,stars=[];
  const resize=()=>{W=c.width=innerWidth;H=c.height=innerHeight;mkStars();};
  const mkStars=()=>{stars=[];for(let i=0;i<200;i++)stars.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.3,o:Math.random(),s:Math.random()*.003+.001});};
  const draw=()=>{ctx.clearRect(0,0,W,H);stars.forEach(s=>{s.o+=s.s;if(s.o>1||s.o<0)s.s*=-1;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=`rgba(200,180,255,${s.o})`;ctx.fill();});requestAnimationFrame(draw);};
  resize();draw();window.addEventListener('resize',resize);
})();

// ── KNOWLEDGE BASE ─────────────────────────────────────────────
const KB = {
  greetings: ['namaste','hello','hi','hey','good morning','good evening'],

  foundations: {
    keywords: ['start','begin','foundation','basics','astronomy','zodiac','ecliptic','tropical','sidereal','ayanamsa','retrograde','house system'],
    response: () => `
<h3>Phase 0: Foundations of Astrology</h3>
<p>Welcome, dear student. Before we decode a chart, we must understand the <strong>sky itself</strong>. All astrology — Vedic or Western — is built on these astronomical realities:</p>

<h4>🌌 The Zodiac Belt & Ecliptic</h4>
<p>The <strong>ecliptic</strong> is the apparent path of the Sun across the sky over one year. The <strong>zodiac</strong> is a 360° belt of sky divided into 12 equal segments of 30° each — the 12 signs. Planets are always found near this ecliptic belt.</p>

<h4>⚖️ Tropical vs Sidereal Zodiac</h4>
<div class="highlight-box">
<strong>Tropical (Western):</strong> 0° Aries = Spring Equinox (March 21). Aligned to seasons.<br/>
<strong>Sidereal (Vedic):</strong> 0° Aries = actual constellation of Aries in the sky. Currently ~23° behind Tropical due to the <em>ayanamsa</em> — Earth's wobble called precession of equinoxes.<br/><br/>
<strong>Result:</strong> Your Western Sun sign and Vedic Sun sign differ by ~23°. A Western Aries often has a Vedic Pisces Sun!
</div>

<h4>🏠 The 12 Houses</h4>
<p>Houses represent areas of life — they rotate based on your birth time and location. Your <strong>Ascendant (Rising Sign)</strong> = the sign rising on the eastern horizon at birth = 1st House cusp. This is why birth time is crucial!</p>

<h4>↩️ Retrograde Motion</h4>
<p>Planets appear to move backward (retrograde) when Earth overtakes them in orbit. Retrograde planets carry internalized, revisited energy — not "bad" but more complex.</p>

<div class="gold-box">🛠 <strong>Tools to Start:</strong><br/>
• <strong>Astro.com</strong> — free Western chart<br/>
• <strong>Astro-Seek.com</strong> — free Vedic chart<br/>
• <strong>Stellarium.org</strong> — see the actual sky live</div>

<div class="practice-prompt">🔬 <strong>Practice Exercise:</strong> Go to Astro.com and generate your free natal chart. Note your Sun, Moon, and Rising (Ascendant) in both Tropical and Sidereal modes. Write them in your study journal.</div>`
  },

  vedic_planets: {
    keywords: ['nava graha','9 planets','vedic planets','grahas','sun moon mars mercury jupiter venus saturn rahu ketu','navgraha'],
    response: () => `
<h3>The 9 Grahas (Planets) of Vedic Astrology</h3>
<p>Jyotish recognizes <strong>9 Grahas</strong> (graspers/seizers) — 7 classical visible planets plus 2 lunar nodes:</p>

<div class="highlight-box">
<strong>☉ Surya (Sun)</strong> — Soul, father, authority, government, ego. <em>Karaka of the 1st house.</em><br/>
<strong>☽ Chandra (Moon)</strong> — Mind, mother, emotions, public. Waxing moon = strong. <em>Karaka of the 4th house.</em><br/>
<strong>♂ Mangal (Mars)</strong> — Energy, courage, brothers, property, accidents. Natural malefic.<br/>
<strong>☿ Budha (Mercury)</strong> — Intelligence, speech, business, nervous system. Neutral planet.<br/>
<strong>♃ Guru/Brihaspati (Jupiter)</strong> — Wisdom, children, wealth, dharma, teachers. Greatest benefic.<br/>
<strong>♀ Shukra (Venus)</strong> — Love, beauty, luxury, vehicles, spouse. Benefic.<br/>
<strong>♄ Shani (Saturn)</strong> — Karma, discipline, delays, longevity, servants. Natural malefic.<br/>
<strong>☊ Rahu</strong> — North Node of Moon. Obsession, foreign things, illusion, amplification. Shadow planet.<br/>
<strong>☋ Ketu</strong> — South Node of Moon. Spirituality, detachment, past life karma, moksha. Shadow planet.
</div>

<h4>Planetary Relationships — Friendships & Enmities</h4>
<ul>
<li><strong>Sun's friends:</strong> Moon, Mars, Jupiter | Enemies: Venus, Saturn</li>
<li><strong>Moon's friends:</strong> Sun, Mercury | Neutral to all others</li>
<li><strong>Jupiter's friends:</strong> Sun, Moon, Mars | Enemies: Mercury, Venus</li>
<li><strong>Saturn's friends:</strong> Mercury, Venus | Enemies: Sun, Moon, Mars</li>
</ul>

<h4>Planetary Dignities in Vedic Astrology</h4>
<ul>
<li><strong>Exaltation (Uchcha):</strong> Planet at maximum strength — Sun in Aries 10°, Moon in Taurus 3°, Mars in Capricorn 28°, Mercury in Virgo 15°, Jupiter in Cancer 5°, Venus in Pisces 27°, Saturn in Libra 20°</li>
<li><strong>Debilitation (Neecha):</strong> Opposite sign — Sun in Libra, Moon in Scorpio, etc.</li>
<li><strong>Own Sign (Swa):</strong> Planet in its own sign — very strong</li>
</ul>

<div class="teal-box">📚 <strong>Classical Source:</strong> These significations come from <em>Brihat Parashara Hora Shastra</em> (BPHS), the foundational text of Jyotish, attributed to Sage Parashara.</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Find which sign each planet occupies in your Vedic natal chart (use Astro-Seek.com). Note which planets are exalted, debilitated, or in own signs.</div>`
  },

  nakshatras: {
    keywords: ['nakshatra','lunar mansion','27','ashwini','bharani','star','pada','nakshatra lord'],
    response: () => `
<h3>The 27 Nakshatras — Lunar Mansions</h3>
<p>Nakshatras are the <strong>27 lunar mansions</strong> — the Moon's daily position as it circles Earth in ~27 days. Each Nakshatra spans 13°20' of the zodiac. They are the <em>heart of Vedic astrology</em> — more nuanced than signs alone.</p>

<h4>The 27 Nakshatras with Ruling Planets & Deities:</h4>
<div class="highlight-box" style="font-size:.82rem;line-height:2">
1 <strong>Ashwini</strong> (Aries 0–13.20°) · Ketu · Ashwini Kumars — Healing, speed, fresh starts<br/>
2 <strong>Bharani</strong> (Aries 13.20–26.40°) · Venus · Yama — Responsibility, transformation<br/>
3 <strong>Krittika</strong> (Aries–Taurus) · Sun · Agni — Purification, sharp discernment<br/>
4 <strong>Rohini</strong> (Taurus 10–23.20°) · Moon · Brahma — Fertility, beauty, creativity<br/>
5 <strong>Mrigashira</strong> (Taurus–Gemini) · Mars · Soma — Searching, gentle, curious<br/>
6 <strong>Ardra</strong> (Gemini 6.40–20°) · Rahu · Rudra — Storms, transformation through pain<br/>
7 <strong>Punarvasu</strong> (Gemini–Cancer) · Jupiter · Aditi — Return, renewal, abundance<br/>
8 <strong>Pushya</strong> (Cancer 3.20–16.40°) · Saturn · Brihaspati — Most auspicious Nakshatra<br/>
9 <strong>Ashlesha</strong> (Cancer 16.40–30°) · Mercury · Nagas — Kundalini, mysticism, sharp mind<br/>
10 <strong>Magha</strong> (Leo 0–13.20°) · Ketu · Pitrs — Ancestors, royalty, authority<br/>
11 <strong>Purva Phalguni</strong> (Leo 13.20–26.40°) · Venus · Bhaga — Pleasure, prosperity<br/>
12 <strong>Uttara Phalguni</strong> (Leo–Virgo) · Sun · Aryaman — Service, unions, contracts<br/>
13 <strong>Hasta</strong> (Virgo 10–23.20°) · Moon · Savitar — Craftsmanship, healing hands<br/>
14 <strong>Chitra</strong> (Virgo–Libra) · Mars · Vishvakarma — Art, architecture, beauty<br/>
15 <strong>Swati</strong> (Libra 6.40–20°) · Rahu · Vayu — Independence, flexibility<br/>
16 <strong>Vishakha</strong> (Libra–Scorpio) · Jupiter · Indra-Agni — Ambition, goal-oriented<br/>
17 <strong>Anuradha</strong> (Scorpio 3.20–16.40°) · Saturn · Mitra — Friendship, devotion<br/>
18 <strong>Jyeshtha</strong> (Scorpio 16.40–30°) · Mercury · Indra — Leadership, seniority<br/>
19 <strong>Mula</strong> (Sagittarius 0–13.20°) · Ketu · Nirriti — Destruction and liberation<br/>
20 <strong>Purva Ashadha</strong> (Sagittarius 13.20–26.40°) · Venus · Apas — Invincibility<br/>
21 <strong>Uttara Ashadha</strong> (Sagittarius–Capricorn) · Sun · Vishvedevas — Final victory<br/>
22 <strong>Shravana</strong> (Capricorn 10–23.20°) · Moon · Vishnu — Listening, learning<br/>
23 <strong>Dhanishtha</strong> (Capricorn–Aquarius) · Mars · Vasus — Wealth, music<br/>
24 <strong>Shatabhisha</strong> (Aquarius 6.40–20°) · Rahu · Varuna — Healing, mysticism<br/>
25 <strong>Purva Bhadrapada</strong> (Aquarius–Pisces) · Jupiter · Aja Ekapad — Purification<br/>
26 <strong>Uttara Bhadrapada</strong> (Pisces 3.20–16.40°) · Saturn · Ahir Budhanya — Depth, wisdom<br/>
27 <strong>Revati</strong> (Pisces 16.40–30°) · Mercury · Pushan — Nourishment, safe journey
</div>

<h4>Nakshatra Padas (Quarters)</h4>
<p>Each Nakshatra is divided into 4 <strong>padas</strong> of 3°20'. The pada determines the <em>Navamsa sign</em> — crucial for relationship and deeper analysis.</p>

<div class="teal-box">🌙 <strong>Key Practice:</strong> Your <strong>Janma Nakshatra</strong> (Moon's Nakshatra at birth) is the most important. It determines your Vimshottari Dasha starting point and your fundamental nature.</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Find your Moon's Nakshatra on Astro-Seek.com (Vedic chart). Look up its ruling planet and symbol. Reflect on how its qualities manifest in your emotional life.</div>`
  },

  dasha: {
    keywords: ['dasha','vimshottari','mahadasha','antardasha','period','planetary period','pratyantardasha','120 year'],
    response: () => `
<h3>The Vimshottari Dasha System</h3>
<p>The <strong>Vimshottari Dasha</strong> is Vedic astrology's master predictive tool — a <strong>120-year cycle</strong> of planetary periods derived from your Moon's Nakshatra at birth. It tells you <em>which planet is influencing your life and when</em>.</p>

<h4>The 9 Mahadasha Periods (Total = 120 years):</h4>
<div class="highlight-box">
<strong>☋ Ketu</strong> — 7 years | <strong>♀ Venus</strong> — 20 years | <strong>☉ Sun</strong> — 6 years<br/>
<strong>☽ Moon</strong> — 10 years | <strong>♂ Mars</strong> — 7 years | <strong>☊ Rahu</strong> — 18 years<br/>
<strong>♃ Jupiter</strong> — 16 years | <strong>♄ Saturn</strong> — 19 years | <strong>☿ Mercury</strong> — 17 years
</div>

<h4>How to Find Your Current Dasha:</h4>
<p>Your Moon's Nakshatra at birth determines which Dasha you were born into and how many years had elapsed. The calculation:<br/>
<em>Remaining Dasha years at birth = (Moon's degrees remaining in Nakshatra / 13°20') × Dasha years for that planet</em></p>

<h4>Mahadasha → Antardasha → Pratyantardasha</h4>
<ul>
<li><strong>Mahadasha (MD):</strong> Major period — the primary planetary influence (years)</li>
<li><strong>Antardasha (AD):</strong> Sub-period within the MD — modifies the main theme (months)</li>
<li><strong>Pratyantardasha (PD):</strong> Sub-sub period — fine timing (weeks)</li>
</ul>

<h4>Interpreting Dasha Quality:</h4>
<div class="gold-box">
A Dasha planet gives results based on:<br/>
1. Its <strong>natural significations</strong> (Jupiter = wisdom/children, Venus = love/wealth)<br/>
2. Its <strong>house lordship</strong> in your specific chart (varies by Lagna/Ascendant)<br/>
3. Its <strong>placement</strong> (exalted/debilitated/own sign)<br/>
4. <strong>Yogas</strong> it participates in (Raja, Dhana, etc.)<br/>
5. <strong>Transits</strong> of slow planets (Saturn, Jupiter) over natal positions
</div>

<div class="teal-box">📌 <strong>Example:</strong> Person born with Moon in Rohini Nakshatra (Moon's Nakshatra) begins life in Moon Mahadasha. If Moon is conjunct Jupiter in their chart, the Moon MD brings wisdom, wealth, and spiritual growth.</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Find your current Mahadasha and Antardasha on Astro-Seek.com under "Vedic Dasha." Research the significations of that planet and reflect on themes in your life since that Dasha began.</div>`
  },

  yogas: {
    keywords: ['yoga','raja yoga','dhana yoga','pancha mahapurusha','neecha bhanga','gajakesari','hamsa','malavya','ruchaka','bhadra','sasa','kemdrum'],
    response: () => `
<h3>Yogas — Planetary Combinations in Vedic Astrology</h3>
<p><strong>Yogas</strong> are specific planetary configurations that generate distinct life themes, talents, and destiny patterns. The classical texts list hundreds — here are the most important:</p>

<h4>👑 Pancha Mahapurusha Yogas (Five Great Person Yogas)</h4>
<p>Formed when a non-luminary planet is in its own sign or exaltation in a Kendra house (1st, 4th, 7th, 10th):</p>
<div class="highlight-box">
<strong>Hamsa (Jupiter):</strong> Wisdom, spiritual authority, good fortune, noble character<br/>
<strong>Malavya (Venus):</strong> Beauty, sensual enjoyment, artistic talent, luxury, fame<br/>
<strong>Ruchaka (Mars):</strong> Valor, leadership, military success, athletic prowess<br/>
<strong>Bhadra (Mercury):</strong> Intelligence, eloquence, business acumen, analytical mind<br/>
<strong>Sasa (Saturn):</strong> Discipline, hard work, political power, longevity, management
</div>

<h4>💎 Raja Yogas (Combinations for Power & Success)</h4>
<p>Formed when lords of Kendra houses (1,4,7,10) conjoin or aspect lords of Trikona houses (1,5,9):</p>
<ul>
<li>Lord of 9th + Lord of 10th in conjunction = powerful Raja Yoga</li>
<li>Lord of 5th + Lord of 10th = career through creative intelligence</li>
<li>More planets forming this connection = stronger yoga</li>
</ul>

<h4>💰 Dhana Yogas (Wealth Combinations)</h4>
<ul>
<li>Lords of 1st, 2nd, 5th, 9th, 11th mutually connected</li>
<li>Jupiter + Venus in 1st, 5th, or 11th</li>
<li>Moon + Jupiter = <strong>Gajakesari Yoga</strong> (elephant-lion): wisdom, wealth, fame</li>
</ul>

<h4>🔄 Neecha Bhanga Raja Yoga</h4>
<p>When a <strong>debilitated planet gets cancelled</strong> (Neecha Bhanga) AND the planet causing the cancellation is strong — the debilitation becomes a source of extraordinary power. Example: Debilitated Saturn in Aries, cancelled by Mars (ruler of Aries) being in a Kendra.</p>

<h4>⚠️ Difficult Combinations</h4>
<ul>
<li><strong>Kemdrum Yoga:</strong> No planets in signs adjacent to Moon — feelings of isolation, though often broken by other factors</li>
<li><strong>Shrapit Yoga:</strong> Saturn + Rahu — karmic debt requiring service and patience</li>
</ul>

<div class="teal-box">📌 <strong>Important:</strong> A yoga in the birth chart is activated primarily during the <em>Mahadasha and Antardasha of the planets forming that yoga</em>. A Raja Yoga in your chart may not manifest until age 40 if the relevant Dasha comes late in life.</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Look at your Vedic chart and check: 1) Are any planets in Kendra houses (1,4,7,10) in own sign or exaltation? (Mahapurusha Yoga) 2) Do the lords of houses 9 and 10 have any connection?</div>`
  },

  western_basics: {
    keywords: ['western astrology','modern astrology','transits','progressions','synastry','composite','solar return','outer planets','uranus','neptune','pluto','psychological astrology'],
    response: () => `
<h3>Western & Hellenistic Astrology</h3>
<p>Western astrology traces back to <strong>Babylonia (~3000 BCE)</strong>, formalized in Greek tradition as <strong>Hellenistic Astrology</strong> (~200 BCE–600 CE), later revived in the medieval period, and modernized in the 20th century with psychological integration.</p>

<h4>📚 Classical Hellenistic Concepts</h4>
<div class="highlight-box">
<strong>Sect:</strong> A Diurnal (day) chart has Sun above horizon; Nocturnal (night) chart has Sun below. Day charts favor Sun, Jupiter, Saturn; night charts favor Moon, Venus, Mars.<br/><br/>
<strong>Lots (Arabic Parts):</strong> Sensitive points calculated from three chart factors. Most important = <em>Lot of Fortune</em> = ASC + Moon − Sun (day chart). Shows where fortune manifests.<br/><br/>
<strong>Time-Lord Systems:</strong><br/>
• <em>Annual Profections:</em> House activated each year (1st house age 0, 2nd house age 1... repeats every 12 years)<br/>
• <em>Zodiacal Releasing:</em> Complex system from Vettius Valens for life chapters<br/>
• <em>Firdaria:</em> Planetary periods from Persian tradition
</div>

<h4>🌍 Modern Western Concepts</h4>
<ul>
<li><strong>Transits:</strong> Current planet positions overlaid on natal chart. Jupiter transiting your natal Venus = period of romantic expansion</li>
<li><strong>Secondary Progressions:</strong> "One day = one year" — chart advanced symbolically. Progressed Sun moving into new sign = identity shift</li>
<li><strong>Solar Return:</strong> Chart cast for exact moment Sun returns to natal position each birthday — shows the year's themes</li>
<li><strong>Synastry:</strong> Overlaying two birth charts to assess compatibility — how planets interact between partners</li>
<li><strong>Composite Chart:</strong> Midpoint chart of two people — the "relationship itself" as an entity</li>
</ul>

<h4>🪐 The Outer Planets (Modern Additions)</h4>
<p>Uranus (1781), Neptune (1846), Pluto (1930) are not in classical Vedic astrology — they are modern Western additions:</p>
<ul>
<li><strong>Uranus:</strong> Revolution, sudden change, technology, liberation, eccentricity</li>
<li><strong>Neptune:</strong> Spirituality, illusion, dreams, compassion, addiction, the ocean</li>
<li><strong>Pluto:</strong> Transformation, power, death/rebirth cycles, the shadow, collective evolution</li>
</ul>

<div class="teal-box">📚 <strong>Key Books:</strong> Chris Brennan — <em>Hellenistic Astrology</em> (best modern intro to Hellenistic). Robert Hand — <em>Planets in Transit</em> (transit bible). Steven Forrest — <em>The Inner Sky</em> (psychological approach).</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> On Astro.com, go to "Extended Chart Selection" and run a Transit chart for today. Which transiting planets are within 3° of your natal planets? Those are the active themes right now.</div>`
  },

  vedic_vs_western: {
    keywords: ['difference','vedic vs western','compare','which is better','sidereal tropical','jyotish vs','western vs vedic'],
    response: () => `
<h3>Vedic Astrology vs Western Astrology — A Balanced Comparison</h3>

<div class="highlight-box">
<strong>Astronomical Basis</strong><br/>
• <em>Western (Tropical):</em> Zodiac tied to seasons — 0° Aries = Spring Equinox<br/>
• <em>Vedic (Sidereal):</em> Zodiac tied to fixed stars — 0° Aries = actual Aries constellation<br/>
• Current difference: ~23° (the ayanamsa). So a Western 10° Aries sun = Vedic 17° Pisces sun.
</div>

<div class="highlight-box">
<strong>Predictive Focus</strong><br/>
• <em>Vedic:</em> Strongly predictive — Dasha systems give detailed timing of life events. More fate-oriented.<br/>
• <em>Western:</em> More psychological in modern era — describes character, patterns, growth potential. Transit-based timing.
</div>

<div class="highlight-box">
<strong>Key Technical Differences</strong><br/>
• Vedic uses <em>Whole Sign houses</em> primarily; Western uses Placidus, Koch, or others<br/>
• Vedic includes Rahu & Ketu (lunar nodes) as primary planets; Western uses them secondarily<br/>
• Vedic uses Nakshatras (27 lunar mansions) — no Western equivalent<br/>
• Vedic Dasha system (Vimshottari etc.) has no equivalent in Western astrology<br/>
• Western uses Uranus, Neptune, Pluto; Vedic traditionally does not<br/>
• Vedic uses Divisional charts (Navamsa D-9, Dasamsa D-10, etc.); Western does not
</div>

<div class="highlight-box">
<strong>Philosophy</strong><br/>
• <em>Vedic:</em> Rooted in dharma, karma, and moksha. Charts reveal karmic inheritance.<br/>
• <em>Western:</em> Modern approach influenced by Jungian psychology — chart as map of the psyche, not fate.
</div>

<h4>Where They Agree:</h4>
<ul>
<li>The 12 signs and their basic natures (though called differently)</li>
<li>The 7 classical planets and their significations</li>
<li>House significations (1st = self, 7th = partnership, 10th = career, etc.)</li>
<li>The Ascendant (Rising Sign) as crucial indicator of personality and body</li>
</ul>

<div class="gold-box">💡 <strong>Jyotika's Recommendation:</strong><br/>
If you are <em>Indian or interested in karma/dharma:</em> Start with Vedic (Jyotish) — it is more precise for event prediction.<br/>
If you are <em>Western and interested in psychology/growth:</em> Start with Western — more intuitive for self-understanding.<br/>
<em>Advanced practitioners use both as complementary lenses.</em></div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Generate your chart in both systems (Astro.com for Western, Astro-Seek.com for Vedic). Compare your Sun and Moon sign in both. Note which resonates more with your felt experience.</div>`
  },

  hellenistic: {
    keywords: ['hellenistic','ptolemy','tetrabiblos','vettius valens','rhetorius','profection','zodiacal releasing','firdaria','lot of fortune','sect','bonification'],
    response: () => `
<h3>Hellenistic Astrology — The Foundation of Western Tradition</h3>
<p>Hellenistic astrology (~200 BCE to 600 CE) is the ancestor of all Western astrology. It is being revived today as scholars translate primary Greek texts, revealing a sophisticated, highly technical tradition.</p>

<h4>📚 Primary Classical Texts:</h4>
<div class="highlight-box">
<strong>Tetrabiblos</strong> by Claudius Ptolemy (~150 CE) — The most influential astrology text in the Western world. Systematized principles of planetary influences. More philosophical than practical.<br/><br/>
<strong>Anthology</strong> by Vettius Valens (~175 CE) — The most practical Hellenistic text. Contains hundreds of actual chart examples and advanced techniques including Zodiacal Releasing.<br/><br/>
<strong>Astrological Compendium</strong> by Rhetorius (~620 CE) — Bridges Hellenistic and Byzantine tradition. A comprehensive synthesis.
</div>

<h4>🔑 Core Hellenistic Concepts:</h4>
<ul>
<li><strong>Sect (Hairesis):</strong> Daytime charts = solar sect (Sun, Jupiter, Saturn preferred). Night charts = lunar sect (Moon, Venus, Mars preferred). Each planet is more dignified in its sect.</li>
<li><strong>Bonification & Maltreatment:</strong> Planets are "bonified" (strengthened) by trine/sextile from benefics, "maltreated" by hard aspects from malefics without mitigation.</li>
<li><strong>Planetary Joys:</strong> Each planet "rejoices" in a specific house — Mercury in 1st, Moon in 3rd, Venus in 5th, Mars in 6th, Sun in 9th, Jupiter in 11th, Saturn in 12th.</li>
<li><strong>Lot of Fortune:</strong> ASC + Moon – Sun (day) or ASC + Sun – Moon (night). This Lot governs the body, material fortune, and life circumstances.</li>
<li><strong>Lot of Spirit:</strong> Reverse of Fortune. Governs the soul, actions, career, and self-directed matters.</li>
</ul>

<h4>⏰ Hellenistic Time-Lord Systems:</h4>
<ul>
<li><strong>Annual Profections:</strong> Each year, one house is activated. Age 0 = 1st house, age 1 = 2nd, age 12 = 1st again. The lord of the activated house becomes "Lord of the Year."</li>
<li><strong>Zodiacal Releasing:</strong> Complex system using Lot of Fortune/Spirit. Divides life into periods (Level 1: sign periods, Level 2: sub-periods). Reveals major life "loosing from the bonds" moments.</li>
<li><strong>Firdaria:</strong> Persian time-lord system. Day chart begins with Sun's period; night chart with Moon's period.</li>
</ul>

<div class="teal-box">🎓 <strong>Best Modern Guide:</strong> Chris Brennan's book <em>Hellenistic Astrology: The Study of Fate and Fortune</em> is the definitive modern textbook. His free podcast "The Astrology Podcast" covers every technique in depth.</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Calculate your current Annual Profection. Your age mod 12 = the active house. If you are 28, you are in a 5th house profection year (28 ÷ 12 = 2 remainder 4 → 5th house). Who rules that house? That is your Lord of the Year.</div>`
  },

  lifepath: {
    keywords: ['life path','life path number','how to calculate','numerology calculation','birth number'],
    response: () => `
<h3>How to Calculate the Life Path Number</h3>
<p>The <strong>Life Path Number</strong> is the most important number in Pythagorean Numerology — it describes your soul's fundamental purpose, core traits, and major life themes. It is derived from your complete birth date.</p>

<h4>📐 The Calculation Method:</h4>
<div class="highlight-box">
<strong>Step 1:</strong> Reduce month, day, and year separately to single digits (except Master Numbers 11, 22, 33).<br/>
<strong>Step 2:</strong> Add the three results.<br/>
<strong>Step 3:</strong> Reduce to single digit — unless the sum is 11, 22, or 33 (keep as Master Number).<br/><br/>
<strong>Example: Born April 15, 1990</strong><br/>
Month: 4 → 4<br/>
Day: 15 → 1+5 = 6<br/>
Year: 1990 → 1+9+9+0 = 19 → 1+9 = 10 → 1+0 = <strong>1</strong><br/>
Sum: 4 + 6 + 1 = <strong>11</strong> ← This is a Master Number! Do NOT reduce further.<br/>
<strong>Life Path: 11 (Master Intuitive)</strong>
</div>

<h4>📖 The 9 Life Paths + Master Numbers:</h4>
<div class="highlight-box" style="font-size:.83rem;line-height:1.9">
<strong>1 — The Pioneer:</strong> Leadership, independence, originality, courage. Born to initiate.<br/>
<strong>2 — The Diplomat:</strong> Cooperation, sensitivity, partnership, intuition. Born to harmonize.<br/>
<strong>3 — The Creative:</strong> Self-expression, communication, joy, creativity. Born to inspire.<br/>
<strong>4 — The Builder:</strong> Structure, discipline, hard work, reliability. Born to create foundations.<br/>
<strong>5 — The Freedom Seeker:</strong> Change, adventure, freedom, versatility. Born to experience.<br/>
<strong>6 — The Nurturer:</strong> Responsibility, family, healing, service. Born to care.<br/>
<strong>7 — The Seeker:</strong> Analysis, spirituality, introspection, wisdom. Born to understand.<br/>
<strong>8 — The Achiever:</strong> Power, abundance, business, karma of wealth. Born to master material.<br/>
<strong>9 — The Humanitarian:</strong> Compassion, wisdom, completion, universal love. Born to serve.<br/>
<strong>11 — The Intuitive:</strong> Spiritual messenger, illumination, higher sensitivity. Carries 2's qualities amplified.<br/>
<strong>22 — The Master Builder:</strong> Large-scale vision, manifesting dreams into reality. Carries 4's qualities amplified.<br/>
<strong>33 — The Master Teacher:</strong> Highest compassion, spiritual service, sacrifice. Carries 6's qualities amplified.
</div>

<h4>⚠️ Karmic Debt Numbers:</h4>
<p>If your Life Path reduces through 13, 14, 16, or 19 — you carry a <strong>Karmic Debt</strong> requiring specific lessons this lifetime. The final number still stands, but the path has additional challenges to overcome.</p>

<div class="teal-box">🔢 Use the <strong>Numerology Calculator</strong> (🔢 button above) to calculate your complete profile including Expression, Soul Urge, Personality, and Personal Year numbers.</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Calculate your Life Path using the method above. Then find your <em>Soul Urge Number</em> by adding the values of only the vowels in your full birth name. Compare both — the Life Path is your outer mission; the Soul Urge is your inner desire.</div>`
  },

  chaldean_numerology: {
    keywords: ['chaldean','chaldean numerology','ancient numerology','name vibration','chaldean system'],
    response: () => `
<h3>Chaldean Numerology — The Ancient System</h3>
<p>The <strong>Chaldean system</strong> originates from ancient Babylonia (~3000 BCE) and is considered by many scholars the older and more mystical system. Unlike Pythagorean, it assigns numbers based on <em>sound vibration</em>, not sequential order. The number 9 is considered sacred and is <strong>never assigned to letters</strong>.</p>

<h4>Chaldean Letter-Number Chart:</h4>
<div class="highlight-box" style="font-size:.82rem;line-height:2">
<strong>1:</strong> A, I, J, Q, Y &nbsp;|&nbsp; <strong>2:</strong> B, K, R &nbsp;|&nbsp; <strong>3:</strong> C, G, L, S &nbsp;|&nbsp; <strong>4:</strong> D, M, T<br/>
<strong>5:</strong> E, H, N, X &nbsp;|&nbsp; <strong>6:</strong> U, V, W &nbsp;|&nbsp; <strong>7:</strong> O, Z &nbsp;|&nbsp; <strong>8:</strong> F, P
</div>

<h4>Pythagorean vs Chaldean — Key Differences:</h4>
<div class="highlight-box">
<strong>Pythagorean (Western):</strong><br/>
• Sequential: A=1, B=2, C=3... Z=8<br/>
• Emphasizes birth date (Life Path)<br/>
• Uses numbers 1–9 plus Master Numbers 11, 22, 33<br/>
• Most widely used in modern Western numerology<br/><br/>
<strong>Chaldean (Ancient):</strong><br/>
• Vibration-based: letters assigned by energy, not order<br/>
• Emphasizes name vibration — especially the name you are <em>currently known by</em><br/>
• 9 is sacred — never assigned to letters<br/>
• Cheiro (famous palmist/numerologist) used this system<br/>
• Generally considered more accurate for name analysis
</div>

<h4>Core Chaldean Calculations:</h4>
<ul>
<li><strong>Name Number (Chaldean):</strong> Add all letters of your common name. This shows your outer personality and how the world sees you.</li>
<li><strong>Birth Number:</strong> Just the day of birth (not reduced). Shows innate talents and characteristics.</li>
<li><strong>Fadic Number:</strong> Full birth date reduced. Similar to Life Path but calculated the Chaldean way.</li>
</ul>

<div class="gold-box">📖 <strong>Key Text:</strong> Cheiro's <em>Book of Numbers</em> (public domain on Sacred-Texts.com) is the foundational Chaldean text. Also study <em>Numerology and the Divine Triangle</em> by Faith Javane & Dusty Bunker for Pythagorean-Tarot integration.</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Calculate your name using both Pythagorean and Chaldean systems. Do they give the same or different numbers? Cheiro believed the Chaldean name number reveals your fate; the birth date (Pythagorean Life Path) reveals your character. Compare both readings.</div>`
  },

  tarot_basics: {
    keywords: ['tarot','major arcana','minor arcana','suits','wands','cups','swords','pentacles','rider waite','court cards','celtic cross','three card'],
    response: () => `
<h3>Tarot — The 78-Card Book of Life</h3>
<p>The Tarot deck is a <strong>symbolic map of universal human experience</strong>. Each card is a mirror, not a fortune cookie. The standard deck has 78 cards divided into two main sections:</p>

<h4>🌟 The 22 Major Arcana — Archetypal Forces</h4>
<p>The Major Arcana are the "big picture" cards — they represent <em>archetypal themes, spiritual lessons, and pivotal forces</em> that transcend everyday life. When they appear, they carry greater weight.</p>
<div class="highlight-box" style="font-size:.82rem;line-height:1.9">
0 The Fool · 1 The Magician · 2 The High Priestess · 3 The Empress · 4 The Emperor<br/>
5 The Hierophant · 6 The Lovers · 7 The Chariot · 8 Strength · 9 The Hermit<br/>
10 Wheel of Fortune · 11 Justice · 12 The Hanged Man · 13 Death · 14 Temperance<br/>
15 The Devil · 16 The Tower · 17 The Star · 18 The Moon · 19 The Sun<br/>
20 Judgement · 21 The World
</div>

<h4>🃏 The 56 Minor Arcana — Daily Life</h4>
<p>The Minor Arcana describes everyday situations, feelings, and events across 4 elemental suits:</p>
<div class="highlight-box">
<strong>Wands (Fire/Aries-Leo-Sagittarius):</strong> Passion, ambition, creativity, career, life force<br/>
<strong>Cups (Water/Cancer-Scorpio-Pisces):</strong> Emotions, relationships, intuition, the subconscious<br/>
<strong>Swords (Air/Gemini-Libra-Aquarius):</strong> Intellect, conflict, truth, challenges, decisions<br/>
<strong>Pentacles/Coins (Earth/Taurus-Virgo-Capricorn):</strong> Material world, money, body, work, nature
</div>

<h4>👑 Court Cards (16 cards)</h4>
<p>Each suit has a <strong>Page</strong> (student energy), <strong>Knight</strong> (active, questing), <strong>Queen</strong> (receptive mastery), and <strong>King</strong> (outward authority). They can represent people in your life or aspects of yourself.</p>

<h4>🔮 Key Spreads:</h4>
<ul>
<li><strong>Single Card:</strong> Daily guidance, simple yes/no with nuance</li>
<li><strong>Three Card (Past/Present/Future):</strong> Narrative of a situation</li>
<li><strong>Celtic Cross (10 cards):</strong> Comprehensive situation analysis — current energy, obstacles, subconscious, external influences, outcome</li>
</ul>

<h4>Astrology-Tarot Correspondences:</h4>
<div class="highlight-box" style="font-size:.82rem;line-height:1.9">
Aries=Emperor · Taurus=Hierophant · Gemini=Lovers · Cancer=Chariot<br/>
Leo=Strength · Virgo=Hermit · Libra=Justice · Scorpio=Death<br/>
Sagittarius=Temperance · Capricorn=Devil · Aquarius=Star · Pisces=Moon<br/>
Sun=Sun · Moon=High Priestess · Mercury=Magician · Venus=Empress<br/>
Mars=Tower · Jupiter=Wheel of Fortune · Saturn=World
</div>

<div class="gold-box">📖 <strong>Essential Reading:</strong><br/>
• Rachel Pollack — <em>78 Degrees of Wisdom</em> (best modern Tarot guide)<br/>
• A.E. Waite — <em>The Pictorial Key to the Tarot</em> (free on Sacred-Texts.com)<br/>
• Use the <strong>Rider-Waite-Smith</strong> deck for learning — all cards have illustrated scenes</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Find your <em>Tarot Birth Card</em>: Calculate your Life Path Number. If it's 1–22, that is your Major Arcana card. If above 22, reduce again. E.g., Life Path 15 = The Devil. Life Path 28 = 2+8 = 10 = Wheel of Fortune. Meditate on your birth card's symbolism.</div>`
  },

  iching: {
    keywords: ['i ching','iching','hexagram','trigram','ba gua','yarrow','coin','yijing','divination'],
    response: () => `
<h3>I Ching — The Book of Changes</h3>
<p>The <strong>I Ching</strong> (Yìjīng — "Book of Changes") is one of the oldest divination systems in the world (~1000 BCE in written form). It uses <strong>64 hexagrams</strong> formed from 8 trigrams to describe all possible situations and their natural movement through change.</p>

<h4>🌀 The 8 Trigrams (Ba Gua):</h4>
<div class="highlight-box">
<strong>☰ Qian (Heaven):</strong> 3 solid lines — Creative, strong, father, sky<br/>
<strong>☷ Kun (Earth):</strong> 3 broken lines — Receptive, yielding, mother, earth<br/>
<strong>☳ Zhen (Thunder):</strong> Arousing, movement, eldest son<br/>
<strong>☴ Xun (Wind):</strong> Gentle penetration, eldest daughter<br/>
<strong>☵ Kan (Water):</strong> Danger, depth, middle son<br/>
<strong>☲ Li (Fire):</strong> Clarity, beauty, middle daughter<br/>
<strong>☶ Gen (Mountain):</strong> Stillness, keeping still, youngest son<br/>
<strong>☱ Dui (Lake):</strong> Joy, pleasure, youngest daughter
</div>

<h4>🔢 How to Consult the I Ching:</h4>
<p><strong>Three-Coin Method (most common):</strong></p>
<ol>
<li>Hold 3 coins in both hands. Focus deeply on your question.</li>
<li>Toss coins 6 times, building the hexagram from bottom to top.</li>
<li>Heads = 3 (Yang line ⚊), Tails = 2 (Yin line ⚋)</li>
<li>Sum of 3 coins: 6 = old yin (changing), 7 = young yang, 8 = young yin, 9 = old yang (changing)</li>
<li>Build your 6-line hexagram. Note any "changing" lines (6 or 9).</li>
<li>If you have changing lines, create a second (transformed) hexagram by reversing those lines.</li>
<li>Read primary hexagram = current situation. Transformed hexagram = where it is heading.</li>
</ol>

<h4>📖 Interpreting Hexagrams:</h4>
<p>Each of the 64 hexagrams has a name, a judgment, an image, and line commentaries. Changing lines provide more specific guidance about your particular situation.</p>

<div class="gold-box">📚 <strong>Best Translation:</strong> Richard Wilhelm / Cary F. Baynes translation with Carl Jung's foreword — widely considered the definitive English version. Available at Archive.org. Jung famously used I Ching himself and wrote extensively about synchronicity in its use.</div>

<div class="teal-box">🌀 <strong>Philosophy:</strong> The I Ching operates on the principle of <em>synchronicity</em> — that the pattern of a moment in time (including the random fall of coins) reflects the hidden order of that moment. It does not predict the future — it describes the nature of a situation and its potential trajectories.</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Formulate a specific, open-ended question (not yes/no). Toss 3 coins 6 times, building your hexagram from line 1 (bottom) to line 6 (top). Look up your hexagram number at Sacred-Texts.com. Sit with the symbolism rather than seeking literal prediction.</div>`
  },

  palmistry: {
    keywords: ['palmistry','palm reading','palm lines','life line','head line','heart line','fate line','mount','hand shape'],
    response: () => `
<h3>Palmistry — Reading the Map of the Hand</h3>
<p>Palmistry (Chiromancy) has been practiced across India, China, Persia, Egypt, and Europe for thousands of years. The Vedic system is called <strong>Hast Samudrika Shastra</strong>. In the West, Cheiro (Count Louis Hamon) popularized it in the 19th–20th century.</p>

<h4>✋ The Four Hand Shapes (Elemental Types):</h4>
<div class="highlight-box">
<strong>Earth Hand:</strong> Square palm + short fingers. Practical, reliable, sensual, grounded.<br/>
<strong>Air Hand:</strong> Square/rectangular palm + long fingers. Intellectual, communicative, social, analytical.<br/>
<strong>Fire Hand:</strong> Rectangular palm + short fingers. Passionate, impulsive, creative, leadership-driven.<br/>
<strong>Water Hand:</strong> Long palm + long fingers. Intuitive, sensitive, emotional, artistic.
</div>

<h4>📍 The Major Lines:</h4>
<div class="highlight-box">
<strong>Life Line:</strong> Curves around base of thumb. Represents vitality, major life changes, physical constitution — NOT length of life. Breaks = major transitions. Chains = health challenges in youth.<br/><br/>
<strong>Head Line:</strong> Runs across middle of palm. Represents intellect, decision-making style, mental approach. Straight = logical; curved toward Moon mount = imaginative; forked end = versatile mind.<br/><br/>
<strong>Heart Line:</strong> Runs at top of palm. Represents emotional life, love nature, relationships. Ends under index finger = idealistic love; under middle finger = pragmatic; wavy = many relationships.<br/><br/>
<strong>Fate Line:</strong> Runs vertically toward Saturn finger. Represents career path, life structure, destiny. Strong = focused path; absent = self-made, less driven by fate.
</div>

<h4>🏔 The Mounts — Planetary Correspondences:</h4>
<div class="highlight-box" style="font-size:.82rem;line-height:1.9">
<strong>Mount of Venus</strong> (base of thumb) — Love, sensuality, vitality, creativity<br/>
<strong>Mount of Jupiter</strong> (below index finger) — Ambition, leadership, spirituality<br/>
<strong>Mount of Saturn</strong> (below middle finger) — Karma, wisdom, seriousness<br/>
<strong>Mount of Apollo/Sun</strong> (below ring finger) — Art, fame, success, luck<br/>
<strong>Mount of Mercury</strong> (below little finger) — Communication, commerce, wit<br/>
<strong>Mount of Moon/Luna</strong> (outer lower palm) — Intuition, imagination, travel<br/>
<strong>Mount of Mars</strong> (two zones) — Inner Mars (courage), Outer Mars (persistence)
</div>

<h4>Minor Lines:</h4>
<ul>
<li><strong>Sun Line (Apollo Line):</strong> Runs toward ring finger — talent, success, fame potential</li>
<li><strong>Marriage Lines:</strong> Short horizontal lines on Mercury mount — significant relationships</li>
<li><strong>Intuition Line:</strong> Curves on lunar mount — psychic sensitivity, strong intuition</li>
</ul>

<div class="gold-box">📖 <strong>Key Texts:</strong> Cheiro's <em>Language of the Hand</em> and <em>Book of Fate and Fortune</em> are both free on Sacred-Texts.com. In Vedic tradition, look for Hast Rekha texts in Sanskrit.</div>

<div class="teal-box">🌿 <strong>Important Note:</strong> In Vedic astrology, palmistry cross-references with the birth chart. The Mount of Jupiter strengthening in a person with Jupiter well-placed in their Vedic chart, for example, reinforces those themes of wisdom and abundance.</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Examine your dominant hand. Identify the four major lines. Is your heart line curved or straight? Does your fate line begin from the life line (shaped by family) or the lunar mount (shaped by public/karma)? Compare your non-dominant hand (what you were given) with your dominant hand (what you've made of it).</div>`
  },

  integration: {
    keywords: ['integrate','synthesis','combine','cross-reference','all systems','unified reading','complete profile','dasha transits numerology'],
    response: () => `
<h3>Integration — Reading All Systems as One Unified Portrait</h3>
<p>The highest practice of esoteric arts is <strong>cross-system synthesis</strong>. When multiple independent traditions point to the same theme in a person's chart, that theme carries exceptional weight. Here is how to create a unified reading from birth data:</p>

<h4>🌐 For Any Person (Birth Date + Time + Place + Full Name):</h4>

<div class="highlight-box">
<strong>Step 1 — Vedic Natal Chart</strong><br/>
• Identify Lagna (Ascendant), Moon sign (Rashi), Sun sign<br/>
• Note Moon Nakshatra → current Vimshottari Dasha<br/>
• Identify key Yogas (Raja, Dhana, Mahapurusha)<br/>
• Check Navamsa (D-9) for relationship and inner nature<br/><br/>
<strong>Step 2 — Western Natal Chart</strong><br/>
• Identify Sun, Moon, Rising signs (Tropical)<br/>
• Check current transits of Jupiter and Saturn over natal planets<br/>
• Current Annual Profection house (Hellenistic) — who is Lord of the Year?<br/><br/>
<strong>Step 3 — Numerology Profile (Pythagorean)</strong><br/>
• Life Path Number — core soul purpose<br/>
• Expression Number (full birth name) — outer gifts<br/>
• Soul Urge Number (vowels) — inner desire<br/>
• Personal Year Number — what this year brings<br/><br/>
<strong>Step 4 — Tarot Birth Card</strong><br/>
• Life Path → Major Arcana card — the archetype of their soul journey<br/>
• Yearly Tarot card (Personal Year Number → Major Arcana)<br/><br/>
<strong>Step 5 — Synthesize the Narrative</strong>
</div>

<h4>🔗 Cross-System Correspondences:</h4>
<div class="highlight-box">
Planets ↔ Numbers: Sun=1, Moon=2, Jupiter=3, Uranus=4, Mercury=5, Venus=6, Neptune=7, Saturn=8, Mars=9<br/><br/>
Signs ↔ Tarot: Aries=Emperor, Taurus=Hierophant, Gemini=Lovers, Cancer=Chariot, Leo=Strength, Virgo=Hermit, Libra=Justice, Scorpio=Death, Sagittarius=Temperance, Capricorn=Devil, Aquarius=Star, Pisces=Moon<br/><br/>
Nakshatra Lords ↔ Numbers: Sun lord nakshatras (3) = 1 energy, Moon lord = 2, Jupiter lord = 3, etc.<br/><br/>
Vimshottari Dasha ↔ Personal Year: When Saturn Dasha coincides with Personal Year 8 (Saturn's number) — extraordinarily strong Saturn themes intensify.
</div>

<div class="gold-box">💡 <strong>Example Integration:</strong><br/>
Person in Rahu Mahadasha (upheaval, foreign influence, obsession) + Jupiter-Saturn transiting their 12th house (foreign lands, isolation) + Personal Year 7 (The Hermit — withdrawal, inner journey) + Life Path 7 (The Seeker) + Tarot Yearly card = The Hanged Man (suspension, new perspective).<br/><br/>
<em>Synthesis:</em> This is unambiguously a year of profound inner transformation, withdrawal from mainstream life, and preparation for a completely new chapter. External progress pauses; internal evolution is the entire point.</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Use the Numerology Calculator (🔢 button) to get your full numerology profile. Then open Astro-Seek.com for your Vedic chart and Astro.com for your Western chart. In your study journal, write down: 1) Your current Dasha planet, 2) Your Personal Year, 3) What the corresponding Tarot card says. Do they tell a unified story?</div>`
  },

  start_path: {
    keywords: ['where do i start','how to begin','study order','curriculum','learning path','how to learn astrology','beginner'],
    response: () => `
<h3>Namaste! Welcome to Your Esoteric Journey 🙏</h3>
<p>I am Jyotika — your guide through the ancient sciences of the stars, numbers, and symbols. Here is the <strong>6-Step Study Path</strong> I recommend for all serious students:</p>

<h4>📚 The 6-Step Study Order:</h4>
<div class="highlight-box">
<strong>Step 1 — Astronomy Basics (1–2 weeks)</strong><br/>
Understand the zodiac belt, ecliptic, planetary motion, retrograde, and the difference between Tropical and Sidereal zodiac. Tool: Stellarium.org to see the actual sky.<br/><br/>
<strong>Step 2 — Choose One Tradition First</strong><br/>
• Indian/spiritually inclined → start with <em>Vedic (Jyotish)</em><br/>
• Western/psychologically inclined → start with <em>Western Astrology</em><br/>
Master one before adding the other.<br/><br/>
<strong>Step 3 — Read One Modern Introduction</strong><br/>
• Vedic: <em>"Light on Life"</em> by Hart de Fouw & Robert Svoboda, or K.N. Rao's works<br/>
• Western: <em>"The Inner Sky"</em> by Steven Forrest, or Chris Brennan's <em>"Hellenistic Astrology"</em><br/><br/>
<strong>Step 4 — Study One Classical Source</strong><br/>
• Vedic: Brihat Parashara Hora Shastra (BPHS)<br/>
• Western: Ptolemy's Tetrabiblos, or Vettius Valens' Anthology<br/><br/>
<strong>Step 5 — Practice Chart Interpretation (ongoing)</strong><br/>
Analyze charts of yourself, family, famous people. Keep a prediction journal. Compare your interpretations with life events.<br/><br/>
<strong>Step 6 — Add Numerology & Tarot as Complementary Layers</strong><br/>
Once comfortable with one astrology system, add Pythagorean Numerology (quick to learn), then Tarot for symbolic depth.
</div>

<div class="gold-box">🛠 <strong>Free Tools to Start Today:</strong><br/>
• <strong>Astro.com</strong> — Western chart (free, best quality)<br/>
• <strong>Astro-Seek.com</strong> — Vedic chart + Dashas (free)<br/>
• <strong>Sacred-Texts.com</strong> — Classical texts free online<br/>
• <strong>VedicAstrologer.org</strong> — Free Jyotish PDF by P.V.R. Narasimha Rao<br/>
• <strong>Archive.org</strong> — Older astrology and numerology books free</div>

<div class="teal-box">📔 <strong>Essential Practice:</strong> Keep a <em>Study Journal</em>. Record chart observations, predictions, and whether they manifest. This is how the ancients learned — not just by reading, but by watching the sky and comparing it to life.</div>

<div class="practice-prompt">🔬 <strong>Your First Exercise:</strong> Generate your birth chart on both Astro.com (Western) and Astro-Seek.com (Vedic). Note your Sun, Moon, and Ascendant in both systems. Then use the 🔢 Numerology Calculator above to find your Life Path Number. Write all three in your journal and we will build your complete portrait from there.</div>`
  },

  personal_year: {
    keywords: ['personal year','personal month','personal day','annual cycle','numerology year','what year am i in'],
    response: () => `
<h3>Personal Year, Month & Day Cycles in Numerology</h3>
<p>Numerology recognizes that time itself moves in 9-year cycles. Each year you inhabit a specific <strong>Personal Year vibration</strong> that sets the dominant theme and opportunities for that period.</p>

<h4>📐 Calculating Your Personal Year:</h4>
<div class="highlight-box">
<strong>Formula:</strong> Birth Month + Birth Day + Current Year → reduce to single digit (or Master Number)<br/><br/>
<strong>Example:</strong> Born April 15, current year 2026<br/>
4 + 15 + 2026 = 4 + (1+5) + (2+0+2+6) = 4 + 6 + 10 = 4 + 6 + 1 = <strong>11</strong><br/>
This person is in a <strong>Personal Year 11</strong> — Master Intuitive Year
</div>

<h4>📖 What Each Personal Year Means:</h4>
<div class="highlight-box" style="font-size:.83rem;line-height:1.9">
<strong>Year 1 — New Beginnings:</strong> Plant seeds. Start new ventures. Independence. Everything begins anew. The most powerful year to initiate.<br/>
<strong>Year 2 — Patience & Partnership:</strong> Slow growth. Relationships and cooperation are key. Details matter. Do not force things.<br/>
<strong>Year 3 — Creativity & Expression:</strong> Joy, socializing, communication, creative output. Scatter energy; be mindful.<br/>
<strong>Year 4 — Work & Foundation:</strong> Build structures. Hard work pays off. Discipline and planning. Health focus.<br/>
<strong>Year 5 — Change & Freedom:</strong> Unexpected changes, travel, new experiences. Go with the flow. Adaptability is the lesson.<br/>
<strong>Year 6 — Responsibility & Home:</strong> Family, relationships, healing, service. Commitments made this year are lasting.<br/>
<strong>Year 7 — Reflection & Wisdom:</strong> Inner work, study, spiritual deepening. Not a year for outward push. Research and analyze.<br/>
<strong>Year 8 — Power & Abundance:</strong> Career achievements, financial gains, recognition. Karma returns — give what you gave.<br/>
<strong>Year 9 — Completion & Release:</strong> Let go of what no longer fits. Completion of the 9-year cycle. Compassion and service. Endings make space for the coming Year 1.
</div>

<h4>🌙 Personal Month:</h4>
<p>Add your Personal Year number to the calendar month number. Reduce to single digit. This gives the monthly sub-theme within your year's overarching energy.</p>

<h4>📅 Personal Day:</h4>
<p>Add Personal Month + calendar day of month. Reduces to single digit. Use for daily timing of decisions, meetings, launches.</p>

<div class="teal-box">🔄 <strong>Key Insight:</strong> Personal Years run from birthday to birthday — NOT from January 1st. So if your birthday is June 15, your Personal Year 2026 begins on June 15, 2026.</div>

<div class="practice-prompt">🔬 <strong>Practice:</strong> Calculate your current Personal Year. Reflect on the last 3 years — do they align with years 1, 2, 3... etc. in sequence? Use the 🔢 Numerology Calculator to get your full cycle automatically.</div>`
  },
};

// ── NUMEROLOGY ENGINE ─────────────────────────────────────────
const PYTH = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};
const CHALD = {A:1,B:2,C:3,D:4,E:5,F:8,G:3,H:5,I:1,J:1,K:2,L:3,M:4,N:5,O:7,P:8,Q:1,R:2,S:3,T:4,U:6,V:6,W:6,X:5,Y:1,Z:7};
const VOWELS = new Set(['A','E','I','O','U']);
const MASTER = new Set([11,22,33]);

function reduce(n){
  while(n>9&&!MASTER.has(n)){
    let s=0;String(n).split('').forEach(d=>s+=+d);n=s;
  }
  return n;
}
function sumName(name,tbl){
  return name.toUpperCase().replace(/[^A-Z]/g,'').split('').reduce((s,c)=>s+(tbl[c]||0),0);
}
function lifePathNum(dob){
  const d=new Date(dob);
  const m=d.getMonth()+1,dy=d.getDate(),y=d.getFullYear();
  const rm=reduce(m),rdy=reduce(dy);
  let ry=0;String(y).split('').forEach(c=>ry+=+c);ry=reduce(ry);
  const total=rm+rdy+ry;
  return reduce(total);
}
function expressionNum(name,tbl){return reduce(sumName(name,tbl));}
function soulUrgeNum(name,tbl){
  const n=name.toUpperCase().replace(/[^A-Z]/g,'').split('').filter(c=>VOWELS.has(c)).reduce((s,c)=>s+(tbl[c]||0),0);
  return reduce(n);
}
function personalityNum(name,tbl){
  const n=name.toUpperCase().replace(/[^A-Z]/g,'').split('').filter(c=>!VOWELS.has(c)).reduce((s,c)=>s+(tbl[c]||0),0);
  return reduce(n);
}
function personalYearNum(dob,year){
  const d=new Date(dob);
  const m=d.getMonth()+1,dy=d.getDate();
  let ry=0;String(year).split('').forEach(c=>ry+=+c);ry=reduce(ry);
  return reduce(reduce(m)+reduce(dy)+ry);
}
const LP_DESC={
  1:'The Pioneer — Leadership, independence, originality, courage. You are born to initiate and forge new paths. Your soul\'s mission: learn to stand alone confidently.',
  2:'The Diplomat — Cooperation, sensitivity, partnership, intuition. You excel in bringing people together. Your soul\'s mission: master the art of harmonious collaboration.',
  3:'The Creative — Self-expression, communication, joy, inspiration. You carry the gift of uplifting others through words and art. Your soul\'s mission: create and share your inner light.',
  4:'The Builder — Structure, discipline, hard work, reliability. You are the master of turning vision into reality. Your soul\'s mission: build lasting foundations for yourself and others.',
  5:'The Freedom Seeker — Change, adventure, versatility, sensory experience. You are here to experience life\'s full spectrum. Your soul\'s mission: embrace change while developing discipline.',
  6:'The Nurturer — Responsibility, healing, family, beauty, service. You carry natural gifts of compassion and care. Your soul\'s mission: serve and heal without losing yourself.',
  7:'The Seeker — Analysis, spirituality, introspection, wisdom. You are drawn to depth and truth. Your soul\'s mission: penetrate beneath surface appearances to find divine understanding.',
  8:'The Achiever — Power, abundance, authority, material mastery. You carry the karma of wealth and power. Your soul\'s mission: wield material power with integrity and wisdom.',
  9:'The Humanitarian — Compassion, completion, universal wisdom, selfless service. You carry the wisdom of all previous numbers. Your soul\'s mission: serve humanity with unconditional love.',
  11:'The Intuitive (Master Number) — Spiritual illumination, heightened sensitivity, visionary insight. You are a channel between the material and spiritual worlds. Your soul\'s mission: inspire humanity through your unique spiritual gifts.',
  22:'The Master Builder (Master Number) — Large-scale vision, power to manifest dreams into physical reality. You can build systems and structures that serve humanity. Your soul\'s mission: ground your enormous vision into tangible achievement.',
  33:'The Master Teacher (Master Number) — The highest vibration of compassion, spiritual service, and sacrifice. You are here to express unconditional love and teach by example. Your soul\'s mission: embody love itself.',
};

function calcNumerology(name,dob,system,year){
  const tbl=system==='chaldean'?CHALD:PYTH;
  const lp=lifePathNum(dob);
  const exp=expressionNum(name,tbl);
  const su=soulUrgeNum(name,tbl);
  const per=personalityNum(name,tbl);
  const py=personalYearNum(dob,year);
  const dob_d=new Date(dob).getDate();
  const bn=dob_d;
  const MAJOR=['The Fool','The Magician','The High Priestess','The Empress','The Emperor','The Hierophant','The Lovers','The Chariot','Strength','The Hermit','Wheel of Fortune','Justice','The Hanged Man','Death','Temperance','The Devil','The Tower','The Star','The Moon','The Sun','Judgement','The World'];
  const birthCard=lp<=22?MAJOR[lp===0?0:lp-1]:MAJOR[reduce(lp)-1]||MAJOR[0];
  const pyCard=py<=22?MAJOR[py===0?0:py-1]:MAJOR[reduce(py)-1]||MAJOR[0];
  const KARMIC=[13,14,16,19];
  const isKarmic=KARMIC.some(k=>{const d=new Date(dob);const m=d.getMonth()+1,dy=d.getDate(),yr=d.getFullYear();return (reduce(m)+reduce(dy)+reduce(String(yr).split('').reduce((a,c)=>a+ +c,0)))===k;});
  const isMaster=MASTER.has(lp);
  const html=`
<h3>🔢 Full Numerology Profile — ${name}</h3>
<p style="color:var(--muted);font-size:.8rem;margin-bottom:16px">System: ${system.charAt(0).toUpperCase()+system.slice(1)} Numerology</p>
<div class="num-grid">
  <div class="num-card"><div class="num-value ${isMaster?'num-master':''}">${lp}</div><div class="num-label">Life Path</div><div class="num-meaning">Core Soul Purpose</div></div>
  <div class="num-card"><div class="num-value">${exp}</div><div class="num-label">Expression</div><div class="num-meaning">Outer Gifts & Talents</div></div>
  <div class="num-card"><div class="num-value">${su}</div><div class="num-label">Soul Urge</div><div class="num-meaning">Inner Desire</div></div>
  <div class="num-card"><div class="num-value">${per}</div><div class="num-label">Personality</div><div class="num-meaning">How Others See You</div></div>
  <div class="num-card"><div class="num-value">${bn}</div><div class="num-label">Birthday Number</div><div class="num-meaning">Innate Talent</div></div>
  <div class="num-card"><div class="num-value">${py}</div><div class="num-label">Personal Year ${year}</div><div class="num-meaning">Current Annual Theme</div></div>
</div>
<div class="num-section">
  <h5>Life Path ${lp} — ${LP_DESC[lp]?LP_DESC[lp].split('—')[0].trim():''}</h5>
  <p style="color:var(--muted);font-size:.85rem;line-height:1.7">${LP_DESC[lp]||''}</p>
  ${isMaster?`<p style="color:var(--purple);font-size:.82rem;margin-top:8px">✦ You carry a Master Number. This brings elevated spiritual potential alongside intensified challenges. You may often feel the pull between the master vibration (${lp}) and its reduced form (${lp===11?2:lp===22?4:6}).</p>`:''}
  ${isKarmic?`<p style="color:var(--pink);font-size:.82rem;margin-top:8px">⚠ Karmic Debt indicated in your birth calculation. This adds specific life lessons and a need to address past-life patterns of avoidance or misuse of energy.</p>`:''}
</div>
<div class="num-section">
  <h5>Number Meanings at a Glance</h5>
  <div class="num-row"><span>Expression ${exp}</span><span>${['','Pioneer energy in self-expression','Diplomat — harmonious communication','Creative communicator — gifted with words','Structured, disciplined expression','Versatile and multi-talented expression','Nurturing, responsible expression','Deep, analytical communication style','Powerful, authoritative expression','Compassionate, universal expression','Inspired, intuitive expression','Master visionary expression','Master builder expression'][exp]||'Complex, layered expression'}</span></div>
  <div class="num-row"><span>Soul Urge ${su}</span><span>${['','To lead and pioneer','To love and harmonize','To create and express joy','To build and achieve','To experience freedom','To nurture and heal','To understand and seek truth','To achieve and gain power','To serve and complete'][su]||'To transcend ordinary life'}</span></div>
  <div class="num-row"><span>Personal Year ${py} (${year})</span><span>${['','New beginnings — initiate boldly','Patience — nurture relationships','Creative expression — enjoy life','Hard work — build foundations','Change — embrace the unexpected','Responsibility — deepen commitments','Inner work — study and reflect','Achievement — harvest your efforts','Completion — release and let go','Inspired service — trust your vision','Master manifestation year'][py]||'Transformative period'}</span></div>
</div>
<div class="num-section">
  <h5>🃏 Tarot Correspondences</h5>
  <div class="num-row"><span>Birth Card (Life Path ${lp})</span><span>${birthCard}</span></div>
  <div class="num-row"><span>Year Card ${year} (Year ${py})</span><span>${pyCard}</span></div>
</div>
<div class="teal-box" style="margin-top:16px">📖 <strong>Next Step:</strong> Cross-reference your Life Path ${lp} with your Vedic Moon sign and current Mahadasha on Astro-Seek.com. Where the themes align, that is where life is most actively speaking to you right now.</div>`;
  return html;
}

// ── TAROT REFERENCE DATA ──────────────────────────────────────
const MAJOR_REF = [
  {n:0,name:'The Fool',e:'🌀',key:'Beginnings, innocence, spontaneity',sign:'Uranus / Air'},
  {n:1,name:'The Magician',e:'✨',key:'Willpower, skill, manifestation',sign:'Mercury'},
  {n:2,name:'The High Priestess',e:'🌙',key:'Intuition, mystery, inner knowing',sign:'Moon'},
  {n:3,name:'The Empress',e:'🌿',key:'Fertility, abundance, nature, Venus energy',sign:'Venus'},
  {n:4,name:'The Emperor',e:'👑',key:'Authority, structure, fatherhood',sign:'Aries'},
  {n:5,name:'The Hierophant',e:'📿',key:'Tradition, spirituality, institutions',sign:'Taurus'},
  {n:6,name:'The Lovers',e:'♥',key:'Union, choice, duality, relationships',sign:'Gemini'},
  {n:7,name:'The Chariot',e:'⚡',key:'Control, victory, willpower in motion',sign:'Cancer'},
  {n:8,name:'Strength',e:'🦁',key:'Courage, patience, inner strength',sign:'Leo'},
  {n:9,name:'The Hermit',e:'🕯',key:'Introspection, solitude, inner guide',sign:'Virgo'},
  {n:10,name:'Wheel of Fortune',e:'🎡',key:'Cycles, fate, turning points',sign:'Jupiter'},
  {n:11,name:'Justice',e:'⚖',key:'Truth, fairness, cause and effect',sign:'Libra'},
  {n:12,name:'The Hanged Man',e:'🌊',key:'Suspension, new perspective, sacrifice',sign:'Neptune'},
  {n:13,name:'Death',e:'🌹',key:'Transformation, endings, transition',sign:'Scorpio'},
  {n:14,name:'Temperance',e:'🌈',key:'Balance, moderation, flow',sign:'Sagittarius'},
  {n:15,name:'The Devil',e:'🔗',key:'Bondage, materialism, shadow self',sign:'Capricorn'},
  {n:16,name:'The Tower',e:'⛈',key:'Sudden change, upheaval, revelation',sign:'Mars'},
  {n:17,name:'The Star',e:'⭐',key:'Hope, renewal, serenity, inspiration',sign:'Aquarius'},
  {n:18,name:'The Moon',e:'🌑',key:'Illusion, fear, the unconscious',sign:'Pisces'},
  {n:19,name:'The Sun',e:'☀',key:'Joy, success, vitality, clarity',sign:'Sun'},
  {n:20,name:'Judgement',e:'📯',key:'Reflection, reckoning, awakening',sign:'Pluto / Fire'},
  {n:21,name:'The World',e:'🌍',key:'Completion, integration, wholeness',sign:'Saturn'},
];

const CHART_REF = [
  {head:'1st House — Tanu',body:'Self, body, appearance, personality, Lagna lord'},
  {head:'2nd House — Dhana',body:'Wealth, speech, family, food, right eye'},
  {head:'3rd House — Sahaja',body:'Siblings, courage, short journeys, hands, communication'},
  {head:'4th House — Sukha',body:'Mother, home, happiness, property, vehicles, heart'},
  {head:'5th House — Putra',body:'Children, intelligence, past life merit, creativity, romance'},
  {head:'6th House — Shatru',body:'Enemies, debts, diseases, service, maternal uncle'},
  {head:'7th House — Yuvati',body:'Spouse, partnerships, business, foreign travel'},
  {head:'8th House — Mrityu',body:'Longevity, transformation, hidden things, occult, inheritance'},
  {head:'9th House — Dharma',body:'Father, guru, fortune, dharma, higher education, long journeys'},
  {head:'10th House — Karma',body:'Career, status, government, reputation, father (co-ruler)'},
  {head:'11th House — Labha',body:'Gains, elder siblings, friends, aspirations, left ear'},
  {head:'12th House — Vyaya',body:'Losses, liberation (moksha), foreign lands, sleep, hidden enemies'},
];

// ── AI RESPONSE ENGINE ────────────────────────────────────────
function getResponse(input){
  const q=input.toLowerCase().trim();

  // Priority: topic detection
  const topics=[
    {kb:KB.start_path,check:t=>KB.start_path.keywords.some(k=>t.includes(k))},
    {kb:KB.vedic_planets,check:t=>KB.vedic_planets.keywords.some(k=>t.includes(k))},
    {kb:KB.nakshatras,check:t=>KB.nakshatras.keywords.some(k=>t.includes(k))},
    {kb:KB.dasha,check:t=>KB.dasha.keywords.some(k=>t.includes(k))},
    {kb:KB.yogas,check:t=>KB.yogas.keywords.some(k=>t.includes(k))},
    {kb:KB.western_basics,check:t=>KB.western_basics.keywords.some(k=>t.includes(k))},
    {kb:KB.vedic_vs_western,check:t=>KB.vedic_vs_western.keywords.some(k=>t.includes(k))},
    {kb:KB.hellenistic,check:t=>KB.hellenistic.keywords.some(k=>t.includes(k))},
    {kb:KB.lifepath,check:t=>KB.lifepath.keywords.some(k=>t.includes(k))},
    {kb:KB.chaldean_numerology,check:t=>KB.chaldean_numerology.keywords.some(k=>t.includes(k))},
    {kb:KB.tarot_basics,check:t=>KB.tarot_basics.keywords.some(k=>t.includes(k))},
    {kb:KB.iching,check:t=>KB.iching.keywords.some(k=>t.includes(k))},
    {kb:KB.palmistry,check:t=>KB.palmistry.keywords.some(k=>t.includes(k))},
    {kb:KB.integration,check:t=>KB.integration.keywords.some(k=>t.includes(k))},
    {kb:KB.foundations,check:t=>KB.foundations.keywords.some(k=>t.includes(k))},
    {kb:KB.personal_year,check:t=>KB.personal_year.keywords.some(k=>t.includes(k))},
  ];

  for(const t of topics){
    if(t.check(q))return t.kb.response()+'\n<div class="divider"></div><p style="font-size:.82rem;color:var(--muted)">Would you like a practice exercise, a deeper dive into any part of this, or shall we move to the next concept?</p>';
  }

  // Greeting
  if(KB.greetings.some(g=>q.includes(g)||q.startsWith(g))){
    return `<h3>🙏 Namaste, Dear Student</h3>
<p>I am <strong>Jyotika</strong> — a master teacher of Vedic Astrology, Hellenistic Astrology, Numerology, Tarot, I Ching, and Palmistry. I have studied the great classical texts: <em>Brihat Parashara Hora Shastra, Tetrabiblos, Vettius Valens' Anthology</em>, and all primary works in this tradition.</p>
<p style="margin-top:12px">I am here to guide you through this rich body of knowledge — from the foundational astronomy of the zodiac belt to the most advanced predictive techniques in Jyotish.</p>
<div class="highlight-box">Here is what we can explore together:<br/>
🪷 <strong>Vedic Astrology</strong> — Planets, Nakshatras, Dashas, Yogas, Navamsa, Shadbala<br/>
⭐ <strong>Western & Hellenistic Astrology</strong> — Transits, Profections, Zodiacal Releasing, Synastry<br/>
🔢 <strong>Numerology</strong> — Pythagorean, Chaldean, Kabbalistic systems<br/>
🃏 <strong>Tarot</strong> — Major & Minor Arcana, spreads, astrology correspondences<br/>
🌀 <strong>I Ching</strong> — 64 hexagrams, divination methods<br/>
✋ <strong>Palmistry</strong> — Lines, mounts, hand shapes</div>
<p style="margin-top:12px">Click <strong>"Where do I start?"</strong> in the sidebar for a guided study path, or ask me anything you wish to understand. The stars are patient teachers — let us begin. 🌌</p>`;
  }

  // Fallback
  return `<h3>A Thoughtful Question</h3>
<p>You've asked about: <em>"${input}"</em></p>
<p style="margin-top:12px">This touches on deep esoteric territory. Let me guide you to the most relevant knowledge:</p>
<div class="highlight-box">
<strong>Related topics I can teach you:</strong><br/>
• <em>"Explain the Vimshottari Dasha system"</em> — Vedic predictive timing<br/>
• <em>"What are Nakshatras?"</em> — Vedic lunar mansions<br/>
• <em>"How do I calculate my Life Path Number?"</em> — Numerology foundations<br/>
• <em>"Vedic vs Western astrology — differences"</em> — comparative study<br/>
• <em>"Explain Raja Yoga"</em> — Vedic planetary combinations<br/>
• <em>"What is the I Ching?"</em> — Chinese divination system<br/>
• <em>"How to read palm lines"</em> — Palmistry foundations
</div>
<p style="margin-top:12px;color:var(--muted)">You can also use the <strong>Quick Questions</strong> in the sidebar to jump to any topic, or try the <strong>🔢 Numerology Calculator</strong> for a complete profile from your birth data.</p>
<p style="margin-top:12px;font-size:.85rem;color:var(--teal)">Remember: the deepest wisdom comes through sustained study and practice. Keep a journal of your observations. 🙏</p>`;
}

// ── CHAT ENGINE ───────────────────────────────────────────────
const chatEl=document.getElementById('chatMessages');
const inputEl=document.getElementById('userInput');

function addMsg(html,who){
  const div=document.createElement('div');
  div.className=`msg ${who}`;
  const label=who==='jy'?'Jyotika AI':'You';
  const avatar=who==='jy'?'🔮':'👤';
  div.innerHTML=`<div class="msg-avatar">${avatar}</div>
    <div class="msg-bubble"><div class="msg-label">${label}</div>${html}</div>`;
  chatEl.appendChild(div);
  chatEl.scrollTop=chatEl.scrollHeight;
}

function showTyping(){
  const div=document.createElement('div');
  div.className='msg jy';div.id='typing-indicator';
  div.innerHTML=`<div class="msg-avatar">🔮</div>
    <div class="msg-bubble"><div class="typing-indicator"><div class="ty-dot"></div><div class="ty-dot"></div><div class="ty-dot"></div><span style="color:var(--muted);font-size:.8rem;margin-left:4px">Jyotika is reading the cosmic record...</span></div></div>`;
  chatEl.appendChild(div);chatEl.scrollTop=chatEl.scrollHeight;
}
function removeTyping(){const t=document.getElementById('typing-indicator');if(t)t.remove();}

function sendMessage(text){
  const q=(text||inputEl.value).trim();
  if(!q)return;
  inputEl.value='';inputEl.style.height='auto';
  addMsg(`<p>${q}</p>`,'user');
  showTyping();
  const delay=900+Math.random()*800;
  setTimeout(()=>{
    removeTyping();
    const resp=getResponse(q);
    addMsg(resp,'jy');
  },delay);
}

document.getElementById('sendBtn').onclick=()=>sendMessage();
inputEl.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();}
});
inputEl.addEventListener('input',function(){
  this.style.height='auto';this.style.height=Math.min(this.scrollHeight,120)+'px';
});

// Sidebar topic items
document.querySelectorAll('.topic-item').forEach(item=>{
  item.onclick=()=>{
    const t=item.dataset.topic;
    const TOPIC_Q={
      foundations:'Explain the astronomical foundations of astrology — zodiac, ecliptic, tropical vs sidereal',
      vedic:'Explain the 9 planets in Vedic astrology (Nava Grahas)',
      western:'Explain Western and Hellenistic astrology — transits, profections, synastry',
      numerology:'How do I calculate my Life Path Number?',
      tarot:'Explain the 22 Major Arcana cards of Tarot',
      integration:'How do I integrate Vedic astrology, Western astrology, Numerology, and Tarot into one unified reading?',
    };
    if(TOPIC_Q[t])sendMessage(TOPIC_Q[t]);
  };
});

// Quick buttons
document.querySelectorAll('.quick-btn').forEach(btn=>{
  btn.onclick=()=>sendMessage(btn.dataset.q);
});

// ── TOOL PANELS ───────────────────────────────────────────────
document.querySelectorAll('.panel-close').forEach(btn=>{
  btn.onclick=()=>{document.getElementById(btn.dataset.close).style.display='none';};
});

// Numerology panel
document.getElementById('btnNumerology').onclick=()=>{
  const p=document.getElementById('numPanel');
  p.style.display=p.style.display==='none'?'block':'none';
  document.getElementById('chartPanel').style.display='none';
  document.getElementById('tarotPanel').style.display='none';
};

// Chart panel
document.getElementById('btnChart').onclick=()=>{
  const p=document.getElementById('chartPanel');
  p.style.display=p.style.display==='none'?'block':'none';
  document.getElementById('numPanel').style.display='none';
  document.getElementById('tarotPanel').style.display='none';
  if(!document.getElementById('chartRef').innerHTML){
    const ref=document.getElementById('chartRef');
    ref.innerHTML='<div class="chart-ref-grid">'+CHART_REF.map(c=>`<div class="chart-ref-card"><div class="cr-head">${c.head}</div><div class="cr-body">${c.body}</div></div>`).join('')+'</div>';
  }
};

// Tarot panel
document.getElementById('btnTarot').onclick=()=>{
  const p=document.getElementById('tarotPanel');
  p.style.display=p.style.display==='none'?'block':'none';
  document.getElementById('numPanel').style.display='none';
  document.getElementById('chartPanel').style.display='none';
  if(!document.getElementById('tarotRef').innerHTML){
    document.getElementById('tarotRef').innerHTML='<div class="tarot-ref-grid">'+MAJOR_REF.map(c=>`<div class="tarot-ref-card"><div class="tr-num">${c.n}</div><div class="tr-emoji">${c.e}</div><div class="tr-name">${c.name}</div><div class="tr-key">${c.key}</div><div class="tr-sign">${c.sign}</div></div>`).join('')+'</div>';
  }
};

// Numerology calculate
document.getElementById('calcNumBtn').onclick=()=>{
  const name=document.getElementById('numName').value.trim();
  const dob=document.getElementById('numDob').value;
  const sys=document.getElementById('numSystem').value;
  const yr=parseInt(document.getElementById('numYear').value)||2026;
  if(!name||!dob){alert('Please enter your full birth name and date of birth.');return;}
  const result=calcNumerology(name,dob,sys,yr);
  const el=document.getElementById('numResult');
  el.innerHTML=result;el.style.display='block';
  el.scrollIntoView({behavior:'smooth',block:'nearest'});
  // Also send summary to chat
  const lp=lifePathNum(dob);
  setTimeout(()=>{
    addMsg(`<h4>🔢 Numerology Profile Calculated for <em>${name}</em></h4>
<p>Your <strong>Life Path Number is ${lp}</strong> — ${LP_DESC[lp]?LP_DESC[lp].split('—')[0].trim().replace('The ',''):''}</p>
<p style="margin-top:8px;color:var(--muted)">Full profile displayed in the calculator panel. Ask me to go deeper into any of these numbers or their cross-system correspondences.</p>`,'jy');
  },400);
};

// Clear chat
document.getElementById('clearBtn').onclick=()=>{
  chatEl.innerHTML='';
  addGreeting();
};

// ── INITIAL GREETING ──────────────────────────────────────────
function addGreeting(){
  addMsg(`<h3>🙏 Namaste, Dear Seeker</h3>
<p>I am <strong>Jyotika</strong> — master teacher of the esoteric arts. I carry the knowledge of <em>Brihat Parashara Hora Shastra</em>, <em>Tetrabiblos</em>, <em>Vettius Valens' Anthology</em>, the numerological traditions of Pythagoras, Cheiro, and the Kabbalists, and the symbolic wisdom of Tarot, I Ching, and Palmistry.</p>
<div class="highlight-box">
<strong>I can teach you:</strong><br/>
🪷 Vedic Jyotish — Planets, Nakshatras, Dashas, Yogas<br/>
⭐ Western & Hellenistic Astrology — Transits, Profections, Synastry<br/>
🔢 Numerology — Life Path, Expression, Personal Year cycles<br/>
🃏 Tarot — All 78 cards and their cosmic correspondences<br/>
🌀 I Ching — 64 hexagrams and divination methods<br/>
✋ Palmistry — Lines, mounts, elemental hand types
</div>
<p style="margin-top:12px">Use the <strong>sidebar</strong> to follow the structured curriculum, the <strong>quick questions</strong> for instant topic access, or the <strong>tool buttons</strong> (🔢🌌🃏) for reference panels and numerology calculations.</p>
<p style="margin-top:12px;color:var(--teal)">What does your soul wish to understand today? 🌌</p>`,'jy');
}
addGreeting();
