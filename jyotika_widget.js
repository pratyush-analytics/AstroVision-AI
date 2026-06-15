
// ═══════════════════════════════════════════════════════════
//  COSMOSAGE AI — JYOTIKA AI WIDGET ENGINE
//  Merged into main app.js from jyotika.js
// ═══════════════════════════════════════════════════════════

// ── NUMEROLOGY ENGINE ───────────────────────────────────────
const PYTH={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};
const CHALD={A:1,B:2,C:3,D:4,E:5,F:8,G:3,H:5,I:1,J:1,K:2,L:3,M:4,N:5,O:7,P:8,Q:1,R:2,S:3,T:4,U:6,V:6,W:6,X:5,Y:1,Z:7};
const MASTER=[11,22,33];

function jReduce(n){
  while(n>9&&!MASTER.includes(n)){
    n=String(n).split('').reduce((s,d)=>s+Number(d),0);
  }
  return n;
}
function jLifePath(dob){
  const d=new Date(dob);
  const m=jReduce(d.getMonth()+1);
  const day=jReduce(d.getDate());
  const y=jReduce([...String(d.getFullYear())].reduce((s,c)=>s+Number(c),0));
  return jReduce(m+day+y);
}
function jExpr(name,tbl){
  return jReduce(name.toUpperCase().replace(/[^A-Z]/g,'').split('').reduce((s,c)=>s+(tbl[c]||0),0));
}
function jSoul(name,tbl){
  return jReduce(name.toUpperCase().replace(/[^A-Z]/g,'').split('').filter(c=>'AEIOU'.includes(c)).reduce((s,c)=>s+(tbl[c]||0),0));
}
function jPers(name,tbl){
  return jReduce(name.toUpperCase().replace(/[^A-Z]/g,'').split('').filter(c=>!'AEIOU'.includes(c)).reduce((s,c)=>s+(tbl[c]||0),0));
}
function jPersonalYear(dob,yr){
  const d=new Date(dob);
  return jReduce(jReduce(d.getMonth()+1)+jReduce(d.getDate())+jReduce([...String(yr)].reduce((s,c)=>s+Number(c),0)));
}

const NUM_MEANINGS={
  1:{name:'The Leader',keywords:'Independence · Ambition · Pioneering · Self-reliance'},
  2:{name:'The Diplomat',keywords:'Harmony · Cooperation · Sensitivity · Balance'},
  3:{name:'The Creator',keywords:'Creativity · Expression · Joy · Communication'},
  4:{name:'The Builder',keywords:'Stability · Discipline · Hard work · Foundation'},
  5:{name:'The Adventurer',keywords:'Freedom · Change · Adventure · Versatility'},
  6:{name:'The Nurturer',keywords:'Love · Family · Responsibility · Healing'},
  7:{name:'The Seeker',keywords:'Wisdom · Introspection · Mysticism · Analysis'},
  8:{name:'The Achiever',keywords:'Power · Abundance · Authority · Manifestation'},
  9:{name:'The Humanitarian',keywords:'Compassion · Completion · Universal love · Service'},
  11:{name:'The Illuminator',keywords:'Intuition · Spiritual insight · Inspiration · Enlightenment'},
  22:{name:'The Master Builder',keywords:'Visionary · Transformation · Large-scale achievement · Mastery'},
  33:{name:'The Master Teacher',keywords:'Compassionate teaching · Healing · Selfless service · Christ consciousness'}
};

const TAROT_BIRTH={
  1:'The Magician 🪄',2:'The High Priestess 🌙',3:'The Empress 🌿',4:'The Emperor 👑',
  5:'The Hierophant ⛪',6:'The Lovers 💕',7:'The Chariot 🏇',8:'Strength 🦁',
  9:'The Hermit 🕯️',10:'Wheel of Fortune 🎡',11:'Justice ⚖️',12:'The Hanged Man 🙃',
  13:'Death 💀',14:'Temperance 🌊',15:'The Devil 🔗',16:'The Tower ⚡',
  17:'The Star ⭐',18:'The Moon 🌕',19:'The Sun ☀️',20:'Judgement 📯',
  21:'The World 🌍',22:'The Fool 🎭'
};

// ── KNOWLEDGE BASE ──────────────────────────────────────────
const JKB={
  greet(){return`<h4>Namaste! I'm Jyotika ✦</h4>
<p>I am your personal AI master teacher of the esoteric arts. I hold deep expertise in:</p>
<div class="highlight-box">🪷 <strong>Vedic Jyotish</strong> — BPHS, Saravali, Phaladeepika, Prasna Marga<br/>
⭐ <strong>Hellenistic Astrology</strong> — Ptolemy, Vettius Valens, Rhetorius<br/>
🔢 <strong>Numerology</strong> — Pythagorean, Chaldean, Kabbalistic<br/>
🃏 <strong>Tarot & Divination</strong> — Tarot, I Ching, Palmistry</div>
<p>What would you like to explore today? Use the quick topics above or ask me anything!</p>`},

  foundations(){return`<h4>Phase 0 — Cosmic Foundations</h4>
<p>Before studying any tradition, we must understand the sky itself.</p>
<div class="gold-box"><strong>The Ecliptic</strong> — The apparent path of the Sun against the backdrop of fixed stars. All planets travel near this path. The zodiac is a 360° band divided into 12 equal 30° segments along the ecliptic.</div>
<h5>The Two Zodiacs</h5>
<ul><li><strong>Tropical (Western)</strong> — Anchored to the Sun's position at the Spring Equinox (0° Aries). Moves with Earth's seasons. Currently ~23° ahead of sidereal.</li>
<li><strong>Sidereal (Vedic)</strong> — Anchored to fixed stars. Uses the Lahiri ayanamsa correction (~23.15° in 2026).</li></ul>
<div class="teal-box"><strong>Key terms to master:</strong> Ecliptic · Celestial equator · Precession of equinoxes · Ayanamsa · Houses · Aspects · Planets · Nodes · Lots</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Draw the ecliptic. Mark the 4 cardinal points (Aries 0°, Cancer 0°, Libra 0°, Capricorn 0°). These are called Ingresses — the most powerful degrees.</div>`},

  vedic(){return`<h4>Vedic Astrology (Jyotish) — Core Framework</h4>
<p>Jyotish means "science of light." It is the oldest living astrological tradition, codified ~1500–500 BCE in the Vedas.</p>
<h5>Nava Grahas — 9 Planets</h5>
<div class="highlight-box"><strong>Surya</strong> (Sun) · <strong>Chandra</strong> (Moon) · <strong>Mangal</strong> (Mars) · <strong>Budha</strong> (Mercury) · <strong>Guru</strong> (Jupiter) · <strong>Shukra</strong> (Venus) · <strong>Shani</strong> (Saturn) · <strong>Rahu</strong> (N.Node) · <strong>Ketu</strong> (S.Node)</div>
<h5>Planetary Dignities</h5>
<ul><li><strong>Exaltation (Uchcha)</strong> — Planet at peak strength: Sun in Aries, Moon in Taurus, Mars in Capricorn, Mercury in Virgo, Jupiter in Cancer, Venus in Pisces, Saturn in Libra</li>
<li><strong>Debilitation (Neecha)</strong> — Opposite sign — weakest placement</li>
<li><strong>Moolatrikona</strong> — Second-best placement after own sign</li></ul>
<div class="teal-box"><strong>Classical texts:</strong> Brihat Parashara Hora Shastra (BPHS) is the primary scripture. Also study Saravali by Kalyanvarma, Phaladeepika by Mantresvara, and Brihat Jataka by Varahamihira.</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Memorize which sign each planet rules (e.g., Sun rules Leo, Moon rules Cancer). Then learn their exaltation signs. This is the foundation of all dignity analysis.</div>`},

  dasha(){return`<h4>Vimshottari Dasha — The Vedic Time-Lord System</h4>
<p>The most important predictive tool in Vedic astrology. 120-year planetary cycle based on the natal Moon's Nakshatra.</p>
<h5>Dasha Sequence & Periods</h5>
<div class="highlight-box">
☽ <strong>Moon — 10 yrs</strong> | ♂ <strong>Mars — 7 yrs</strong> | ☊ <strong>Rahu — 18 yrs</strong><br/>
♃ <strong>Jupiter — 16 yrs</strong> | ♄ <strong>Saturn — 19 yrs</strong> | ☿ <strong>Mercury — 17 yrs</strong><br/>
☋ <strong>Ketu — 7 yrs</strong> | ♀ <strong>Venus — 20 yrs</strong> | ☉ <strong>Sun — 6 yrs</strong>
</div>
<h5>How to Calculate</h5>
<ul><li>Find the natal Moon's Nakshatra (27 lunar mansions)</li>
<li>Each Nakshatra has a ruling planet — that planet's Dasha runs first</li>
<li>The remaining degrees in that Nakshatra at birth determine how much of the first Dasha has already elapsed</li></ul>
<div class="gold-box"><strong>Antardasha (Sub-periods)</strong> — Each Mahadasha divides into 9 sub-periods (Antardashas) ruled by each planet in the Vimshottari sequence. These subdivide further into Pratyantar, Sookshma, and Prana dashas.</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Find your Moon's Nakshatra using a free tool like astro.com. Then calculate your current Mahadasha and Antardasha. Observe what planet themes are active in your life right now.</div>`},

  nakshatra(){return`<h4>Nakshatras — The 27 Lunar Mansions</h4>
<p>The Nakshatra system predates the 12-sign zodiac. The Moon travels through all 27 Nakshatras in ~27.3 days (one lunar month). Each covers 13°20' of the zodiac.</p>
<h5>The 27 Nakshatras (with deity & quality)</h5>
<div class="highlight-box" style="font-size:.72rem">
1. <strong>Ashwini</strong> ♈ 0°–13°20' | Ashwini Kumars | Quick healing<br/>
2. <strong>Bharani</strong> ♈ 13°20'–26°40' | Yama | Restraint, death/rebirth<br/>
3. <strong>Krittika</strong> ♈–♉ 26°40'–10° | Agni | Power to burn/purify<br/>
4. <strong>Rohini</strong> ♉ 10°–23°20' | Brahma | Growth, creation (Moon's favorite!)<br/>
5. <strong>Mrigashira</strong> ♉–♊ | Soma | Seeking, curiosity<br/>
6–27... [and so on through Revati ♓ 16°40'–30°]
</div>
<div class="teal-box"><strong>Nakshatra Padas</strong> — Each Nakshatra has 4 padas (quarters) of 3°20'. The pada your Moon occupies links to a Navamsa sign and further refines interpretation.</div>
<div class="gold-box"><strong>Key Nakshatras to study first:</strong> Rohini (Moon), Pushya (Jupiter), Magha (Ketu/ancestors), Jyeshtha (Mercury), Mula (Ketu/roots), Uttara Bhadrapada (Saturn).</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Find your Sun, Moon, and Ascendant Nakshatras. These three will reveal your outer vitality, emotional inner world, and life approach.</div>`},

  yoga(){return`<h4>Yogas — Planetary Combinations in Vedic Astrology</h4>
<p>Yogas are specific planetary combinations that dramatically modify chart interpretation. There are hundreds documented in classical texts.</p>
<h5>Raja Yogas — Yogas of Power & Success</h5>
<div class="gold-box"><strong>Classical Raja Yoga:</strong> Conjunction, mutual aspect, or exchange of lords of Kendras (1,4,7,10) and Trikonas (1,5,9). The most powerful yogas combine 9th and 10th lords.</div>
<h5>Dhana Yogas — Wealth Yogas</h5>
<ul><li>1st, 2nd, 5th, 9th, 11th lords in combination → financial prosperity</li>
<li>Jupiter + Venus + Mercury in strong positions → multiple wealth sources</li></ul>
<h5>Famous Yogas</h5>
<div class="highlight-box">
<strong>Gaja Kesari:</strong> Jupiter in Kendra from Moon → wisdom, reputation, elephant-like power<br/>
<strong>Viparita Raja Yoga:</strong> 6th/8th/12th lords in each other's houses → rise from adversity<br/>
<strong>Parivartana (Exchange):</strong> Two planets in each other's signs → mutual strength<br/>
<strong>Neecha Bhanga:</strong> Debilitated planet cancelled by specific conditions → hidden strength revealed
</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Identify the lords of your 9th and 10th houses. If they are connected (conjunct, aspecting, or in exchange), you likely have a Raja Yoga affecting career and fortune.</div>`},

  western(){return`<h4>Western Astrology — Core Framework</h4>
<p>Modern Western astrology evolved from Hellenistic roots through the Renaissance and 20th century psychological movement (Dane Rudhyar, Liz Greene).</p>
<h5>The Planets (Western)</h5>
<div class="highlight-box">
☉ <strong>Sun</strong> — Identity, vitality, purpose<br/>
☽ <strong>Moon</strong> — Emotions, subconscious, mother<br/>
☿ <strong>Mercury</strong> — Mind, communication, learning<br/>
♀ <strong>Venus</strong> — Love, beauty, values, money<br/>
♂ <strong>Mars</strong> — Drive, action, desire, aggression<br/>
♃ <strong>Jupiter</strong> — Expansion, luck, philosophy, growth<br/>
♄ <strong>Saturn</strong> — Restriction, discipline, karma, time<br/>
⛢ <strong>Uranus</strong> — Revolution, awakening, technology<br/>
♆ <strong>Neptune</strong> — Spirituality, illusion, dissolution<br/>
♇ <strong>Pluto</strong> — Transformation, power, death/rebirth
</div>
<h5>Key Differences from Vedic</h5>
<ul><li>Uses tropical zodiac (seasonal) vs. sidereal</li>
<li>Includes outer planets (Uranus, Neptune, Pluto)</li>
<li>Emphasizes psychological interpretation</li>
<li>Aspects include sextile (60°), square (90°), trine (120°), opposition (180°)</li></ul>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Get your Western chart at astro.com. Identify your Sun, Moon, Rising. Then find which houses your personal planets fall in — this tells you which life areas are most activated.</div>`},

  hellenistic(){return`<h4>Hellenistic Astrology — The Classical Western Tradition</h4>
<p>Hellenistic astrology (200 BCE – 600 CE) is the original form of Western astrology. The key authors are <strong>Ptolemy</strong> (Tetrabiblos), <strong>Vettius Valens</strong> (Anthology), and <strong>Rhetorius</strong>.</p>
<h5>Key Hellenistic Concepts</h5>
<div class="gold-box">
<strong>Sect</strong> — The chart is either a <em>day chart</em> (Sun above horizon) or <em>night chart</em> (Sun below). Sun, Jupiter, Saturn prefer day. Moon, Venus, Mars prefer night. This dramatically affects planet strength.<br/><br/>
<strong>Bonification & Maltreatment</strong> — A planet is "bonified" (supported) by Jupiter or Venus, or "maltreated" by Mars or Saturn through aspect or conjunction.<br/><br/>
<strong>The Lots (Arabic Parts)</strong> — Mathematical points derived from planet positions. The Lot of Fortune = ASC + Moon − Sun (day charts). Lot of Spirit = ASC + Sun − Moon.
</div>
<h5>Zodiacal Releasing (Valens)</h5>
<p>A powerful timing technique using the Lot of Fortune and Lot of Spirit to identify major life chapters. Level 1 uses the Lot of Fortune for body/career. Each sign's period matches a specific number of months.</p>
<div class="teal-box"><strong>Time-Lord Systems:</strong> Annual Profections (1 sign per year starting from Ascendant) · Zodiacal Releasing · Primary Directions · Solar Returns</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Calculate your Annual Profection. Take your age and find the remainder when divided by 12. That number corresponds to a house (0=1st, 1=2nd, etc.). The ruler of that house is your Year Lord, activating its themes this year.</div>`},

  synastry(){return`<h4>Synastry & Compatibility Analysis</h4>
<p>Synastry is the comparison of two birth charts to understand relationship dynamics. There is both Vedic and Western synastry.</p>
<h5>Vedic Kuta System (Marriage Compatibility)</h5>
<div class="highlight-box">The traditional Indian match-making system scores 36 points across 8 parameters (Ashta Kuta):<br/>
<strong>Varna</strong> (1 pt) — spiritual compatibility<br/>
<strong>Vashya</strong> (2 pts) — dominance/control<br/>
<strong>Tara</strong> (3 pts) — star/birth Nakshatra compatibility<br/>
<strong>Yoni</strong> (4 pts) — sexual compatibility (animal symbols)<br/>
<strong>Gana</strong> (6 pts) — temperament (Deva/Manushya/Rakshasa)<br/>
<strong>Rashi</strong> (7 pts) — planetary friendship of Moon signs<br/>
<strong>Nadi</strong> (8 pts) — ayurvedic constitution (Vata/Pitta/Kapha)<br/>
<strong>Bhakoot</strong> (7 pts) — Moon sign relationship
</div>
<p>A score of 18+ is acceptable. 28+ is excellent. Some factors (Nadi, Bhakoot) can be deal-breakers.</p>
<h5>Western Synastry Overlays</h5>
<ul><li>Person A's planets in Person B's houses reveal influence areas</li>
<li>Sun-Moon conjunction or trine → natural emotional affinity</li>
<li>Venus-Mars aspects → romantic/sexual attraction</li>
<li>Saturn aspects → karmic bonds, longevity, sometimes restriction</li></ul>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Compare your Moon sign with a partner's Moon sign. Same element (Fire-Fire, Earth-Earth, Air-Air, Water-Water) → natural emotional resonance. Opposite signs (Full Moon energy) → magnetic but challenging.</div>`},

  numerology(){return`<h4>Numerology — The Science of Numbers</h4>
<p>Numbers are the language of the universe. Three major systems:</p>
<div class="highlight-box">
<strong>Pythagorean (Western)</strong> — Most common. 1–9 letter values in sequence.<br/>
<strong>Chaldean (Ancient Babylonian)</strong> — Most accurate for spiritual truth. No letter = 9 (9 is sacred/divine). Preferred by K.N. Rao, Cheiro.<br/>
<strong>Kabbalistic</strong> — Based on the Hebrew alphabet tree (Gematria). Used for name power analysis.
</div>
<h5>The Core Numbers</h5>
<ul><li><strong>Life Path</strong> — Birthday reduced. Your soul's purpose and life theme.</li>
<li><strong>Expression</strong> — Full birth name. Your natural talents and abilities.</li>
<li><strong>Soul Urge (Heart's Desire)</strong> — Vowels only. What your soul craves.</li>
<li><strong>Personality</strong> — Consonants only. How others perceive you.</li>
<li><strong>Personal Year</strong> — Birth month + day + current year. Your annual theme.</li></ul>
<div class="teal-box"><strong>Master Numbers:</strong> 11 (Illumination), 22 (Master Builder), 33 (Master Teacher) — Never reduce these further. They carry higher vibrational responsibility.</div>
<div class="gold-box"><strong>Karmic Debt Numbers:</strong> 13 (laziness), 14 (abuse of freedom), 16 (ego/pride), 19 (abuse of power). If your Life Path or Expression reduces through these, there is karmic work to do.</div>
<div class="practice-prompt">✏️ <strong>Try the calculator above (🔢 button) to calculate your complete numerology profile!</strong></div>`},

  tarot(){return`<h4>Tarot — The 78-Card Mystery System</h4>
<p>The Tarot emerged in 15th century Italy as playing cards. Their esoteric meaning was developed by the Hermetic Order of the Golden Dawn in the 19th century.</p>
<h5>Structure of the Deck</h5>
<div class="gold-box">
<strong>Major Arcana (22 cards)</strong> — Archetypal forces and life themes. Numbered 0 (The Fool) through 21 (The World). When Major Arcana dominate a spread, fate is at work.<br/><br/>
<strong>Minor Arcana (56 cards)</strong> — Everyday life situations in 4 suits:<br/>
🔥 <strong>Wands</strong> (Fire) — Career, passion, creativity, will<br/>
💧 <strong>Cups</strong> (Water) — Emotions, relationships, intuition<br/>
🌬️ <strong>Swords</strong> (Air) — Mind, conflict, truth, communication<br/>
🌍 <strong>Pentacles</strong> (Earth) — Money, body, material world
</div>
<h5>The Major Arcana — Astrological Correspondences</h5>
<ul><li>0 The Fool → Uranus (or Air) | 1 The Magician → Mercury</li>
<li>2 High Priestess → Moon | 3 The Empress → Venus</li>
<li>4 The Emperor → Aries/Mars | 5 Hierophant → Taurus/Venus</li>
<li>7 The Chariot → Cancer | 8 Strength → Leo | 9 Hermit → Virgo</li>
<li>10 Wheel → Jupiter | 11 Justice → Libra | 12 Hanged Man → Neptune</li>
<li>13 Death → Scorpio | 14 Temperance → Sagittarius | 15 Devil → Capricorn</li>
<li>16 Tower → Mars | 17 Star → Aquarius | 18 Moon → Pisces | 19 Sun → Sun</li>
<li>20 Judgement → Fire/Pluto | 21 World → Saturn</li></ul>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Draw one card each morning as a daily contemplation. Don't look up the meaning immediately — sit with the imagery and your intuition first. Record your impressions, then check the book.</div>`},

  iching(){return`<h4>I Ching — The Book of Changes</h4>
<p>The oldest divination system still in use (~3000 BCE). 64 hexagrams built from combinations of 8 trigrams. Each hexagram offers profound wisdom for navigating change.</p>
<h5>The 8 Trigrams (Ba Gua)</h5>
<div class="highlight-box">
☰ <strong>Qian</strong> (Heaven) — Creative force, leadership, father<br/>
☷ <strong>Kun</strong> (Earth) — Receptive, nurturing, mother<br/>
☳ <strong>Zhen</strong> (Thunder) — Arousing, shock, eldest son<br/>
☵ <strong>Kan</strong> (Water) — Danger, depth, middle son<br/>
☶ <strong>Gen</strong> (Mountain) — Stillness, stopping, youngest son<br/>
☴ <strong>Xun</strong> (Wind/Wood) — Gentle, penetrating, eldest daughter<br/>
☲ <strong>Li</strong> (Fire) — Clinging, clarity, middle daughter<br/>
☱ <strong>Dui</strong> (Lake) — Joy, openness, youngest daughter
</div>
<h5>Traditional Casting Method</h5>
<p>Cast 3 coins 6 times. Heads=3, Tails=2. Sum of 3 coins per throw: 6,7,8,9 → yin/yang lines. A moving line (6 or 9) transforms to its opposite, giving a second "future" hexagram.</p>
<div class="gold-box"><strong>Key texts:</strong> Wilhelm/Baynes translation (1950) is the Western standard. Also read "The Original I Ching Oracle" by Rudolph Ritsema & Stephen Karcher for a more ancient approach.</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Hold a specific situation in mind. Cast the hexagram. Read your hexagram without looking at the number first — just read the image. Then read the Judgment and Image sections only. Sit with it for a day.</div>`},

  palmistry(){return`<h4>Palmistry (Chiromancy) — Reading the Hand</h4>
<p>Palmistry has roots in ancient India (Samudrika Shastra), China, and Greece. The hands reveal character, potential, and life tendencies — not fixed fate.</p>
<h5>The Four Hand Types (Elements)</h5>
<div class="highlight-box">
🔥 <strong>Fire Hand</strong> — Short fingers, long palm → enthusiastic, impulsive, passionate<br/>
🌍 <strong>Earth Hand</strong> — Short square fingers, square palm → practical, reliable, stubborn<br/>
🌬️ <strong>Air Hand</strong> — Long fingers, square/rectangular palm → intellectual, communicative<br/>
💧 <strong>Water Hand</strong> — Long fingers, long oval palm → intuitive, sensitive, creative
</div>
<h5>The Major Lines</h5>
<ul><li><strong>Life Line</strong> — Vitality, life changes (NOT length of life!). Depth matters more than length.</li>
<li><strong>Head Line</strong> — Thinking style. Straight = logical. Curved = creative/intuitive.</li>
<li><strong>Heart Line</strong> — Emotional expression. Curved up to index = idealistic. Straight = pragmatic in love.</li>
<li><strong>Fate Line</strong> — Life direction, career path. Strong = focused life purpose. Absent = self-created path.</li></ul>
<div class="teal-box"><strong>The Mounts:</strong> Raised pads under each finger and on the palm base. Venus Mount (thumb base) → love capacity. Jupiter Mount (index base) → ambition. Saturn → responsibility. Apollo → creativity. Mercury → communication.</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Look at both hands. The non-dominant hand shows what you were born with. The dominant hand shows what you've developed. Compare your Head Lines — has your thinking shifted over time?</div>`},

  integration(){return`<h4>Integrating All Systems — The Complete Reading</h4>
<p>True esoteric mastery means synthesizing multiple systems into one unified picture. Here's how the traditions align:</p>
<div class="gold-box"><strong>Example: Saturn transiting your 8th house (Western) + Sade Sati (Vedic Moon affliction) + Life Path 8 (power/responsibility) + Death card in Tarot + Hexagram 29 (Danger/Abyss) in I Ching</strong> → All systems are confirming a period of deep transformation, confrontation with power structures, and potential rebirth. This convergence gives very high confidence to the interpretation.</div>
<h5>Cross-System Correspondences</h5>
<div class="highlight-box">
<strong>Saturn = Number 8 = Death/Judgement (Tarot) = Kan trigram (I Ching) = Fate Line (Palmistry)</strong><br/>
All represent: karma, limitation, time, transformation, discipline<br/><br/>
<strong>Jupiter = Number 3 = Wheel of Fortune (Tarot) = Qian trigram = Jupiter Mount</strong><br/>
All represent: expansion, luck, wisdom, abundance, philosophy<br/><br/>
<strong>Venus = Number 6 = Empress/Lovers (Tarot) = Dui trigram = Venus Mount</strong><br/>
All represent: love, beauty, pleasure, creativity, relationship
</div>
<h5>Practical Integration Protocol</h5>
<ul><li>1. Identify the client's Vedic Dasha period (timing framework)</li>
<li>2. Check Western transits to natal chart (current activations)</li>
<li>3. Calculate Personal Year number (numerology theme)</li>
<li>4. Draw a Tarot card for the overall energy</li>
<li>5. Find the Birth Card and Year Card (Tarot numerology)</li>
<li>6. Look for convergence — where do all systems agree?</li></ul>
<div class="practice-prompt">✏️ <strong>Practice:</strong> For your current situation: (1) What Dasha are you in? (2) What is your Personal Year? (3) What Tarot card represents this number? Do they tell a coherent story?</div>`},

  unknown(q){return`<p>That's a fascinating question about: <em>"${q}"</em></p>
<p>As your master teacher, I want to give you a thorough and accurate answer. Here are the areas I teach most deeply:</p>
<div class="highlight-box">
🪷 <strong>Vedic Astrology</strong> — Type "vedic", "dasha", "nakshatra", or "yoga"<br/>
⭐ <strong>Hellenistic/Western</strong> — Type "western", "hellenistic", or "synastry"<br/>
🔢 <strong>Numerology</strong> — Type "numerology" or use the 🔢 calculator above<br/>
🃏 <strong>Tarot</strong> — Type "tarot" or "major arcana"<br/>
☯️ <strong>I Ching</strong> — Type "i ching" or "hexagram"<br/>
✋ <strong>Palmistry</strong> — Type "palmistry" or "palm reading"<br/>
✨ <strong>Integration</strong> — Type "integrate" or "synthesis"
</div>
<p>Or simply ask a direct question — I'll do my best to guide you from any angle. 🙏</p>`}
};

function jywGetResponse(input){
  const q=input.toLowerCase().trim();
  if(q.length<2) return JKB.greet();
  if(/hello|hi |namaste|start|begin|what can|help me/.test(q)) return JKB.greet();
  if(/foundation|zodiac|ecliptic|tropical|sidereal|basics|begin/.test(q)) return JKB.foundations();
  if(/vedic|jyotish|graha|bhava|lagna|rashi|sidereal|bphs|parashara/.test(q)) return JKB.vedic();
  if(/dasha|mahadasha|antardasha|vimshottari|time.lord|period/.test(q)) return JKB.dasha();
  if(/nakshatra|lunar mansion|pada|moon star|ashwini|rohini|jyeshtha/.test(q)) return JKB.nakshatra();
  if(/yoga|raja yoga|dhana|gaja|kesari|neecha bhanga|parivartana/.test(q)) return JKB.yoga();
  if(/western|modern astrology|outer planet|uranus|neptune|pluto|psycholog/.test(q)) return JKB.western();
  if(/hellenistic|ptolemy|valens|vettius|lot|sect|profect|zodiacal releas/.test(q)) return JKB.hellenistic();
  if(/synastry|compat|relationship|partner|kuta|composite|overlay/.test(q)) return JKB.synastry();
  if(/numer|life path|expression|soul urge|personality number|pythagorean|chaldean|master number/.test(q)) return JKB.numerology();
  if(/tarot|arcana|major|minor|wand|cup|sword|pentacle|card/.test(q)) return JKB.tarot();
  if(/i.ching|iching|hexagram|trigram|book of change|ba gua/.test(q)) return JKB.iching();
  if(/palm|chiromancy|hand reading|life line|heart line|head line|mount/.test(q)) return JKB.palmistry();
  if(/integrat|synthesi|combine|all system|cross.system|unified/.test(q)) return JKB.integration();
  return JKB.unknown(input.substring(0,60));
}

// ── CHART REFERENCE DATA ────────────────────────────────────
const JYW_CHART_REF=[
  {h:'House 1 — Lagna (Ascendant)',b:'Self, body, personality, vitality, early life, appearance'},
  {h:'House 2 — Dhana Bhava',b:'Wealth, family, speech, food, accumulated resources, values'},
  {h:'House 3 — Sahaja Bhava',b:'Siblings, courage, communication, short journeys, skills, hands'},
  {h:'House 4 — Sukha Bhava',b:'Mother, home, land, happiness, heart, education, emotions'},
  {h:'House 5 — Putra Bhava',b:'Children, creativity, intelligence, past-life merit, romance, speculation'},
  {h:'House 6 — Ripu Bhava',b:'Enemies, disease, service, debt, litigation, daily work, pets'},
  {h:'House 7 — Kalatra Bhava',b:'Spouse, partnerships, open enemies, business contracts, desire'},
  {h:'House 8 — Mrityu Bhava',b:'Death, transformation, inheritance, occult, secrets, longevity, crisis'},
  {h:'House 9 — Dharma Bhava',b:'Dharma, father, guru, higher wisdom, long travel, fortune, religion'},
  {h:'House 10 — Karma Bhava',b:'Career, public status, authority, government, life direction, fame'},
  {h:'House 11 — Labha Bhava',b:'Gains, income, friends, elder siblings, wishes fulfilled, networks'},
  {h:'House 12 — Vyaya Bhava',b:'Losses, liberation, foreign lands, spirituality, isolation, expenses'},
];

const JYW_TAROT_REF=[
  {n:'0',e:'🎭',name:'The Fool',key:'New beginnings · Innocence · Leap of faith'},
  {n:'I',e:'🪄',name:'The Magician',key:'Willpower · Manifestation · Skill'},
  {n:'II',e:'🌙',name:'High Priestess',key:'Intuition · Mystery · Inner knowing'},
  {n:'III',e:'🌿',name:'The Empress',key:'Abundance · Fertility · Nature'},
  {n:'IV',e:'👑',name:'The Emperor',key:'Authority · Structure · Stability'},
  {n:'V',e:'⛪',name:'The Hierophant',key:'Tradition · Spiritual guidance · Convention'},
  {n:'VI',e:'💕',name:'The Lovers',key:'Choice · Union · Values'},
  {n:'VII',e:'🏇',name:'The Chariot',key:'Victory · Control · Willpower'},
  {n:'VIII',e:'🦁',name:'Strength',key:'Inner courage · Patience · Compassion'},
  {n:'IX',e:'🕯️',name:'The Hermit',key:'Solitude · Inner wisdom · Guidance'},
  {n:'X',e:'🎡',name:'Wheel of Fortune',key:'Cycles · Fate · Turning point'},
  {n:'XI',e:'⚖️',name:'Justice',key:'Truth · Fairness · Karma'},
  {n:'XII',e:'🙃',name:'The Hanged Man',key:'Surrender · New perspective · Pause'},
  {n:'XIII',e:'💀',name:'Death',key:'Endings · Transformation · Transition'},
  {n:'XIV',e:'🌊',name:'Temperance',key:'Balance · Moderation · Alchemy'},
  {n:'XV',e:'🔗',name:'The Devil',key:'Bondage · Shadow · Material attachment'},
  {n:'XVI',e:'⚡',name:'The Tower',key:'Sudden change · Chaos · Revelation'},
  {n:'XVII',e:'⭐',name:'The Star',key:'Hope · Renewal · Inspiration'},
  {n:'XVIII',e:'🌕',name:'The Moon',key:'Illusion · Subconscious · Fear'},
  {n:'XIX',e:'☀️',name:'The Sun',key:'Joy · Success · Vitality'},
  {n:'XX',e:'📯',name:'Judgement',key:'Rebirth · Awakening · Calling'},
  {n:'XXI',e:'🌍',name:'The World',key:'Completion · Integration · Achievement'},
];

// ── WIDGET UI ENGINE ────────────────────────────────────────
let jywOpen=false;
let jywGreeted=false;

function openJyotikaWidget(presetQ=''){
  const panel=document.getElementById('jywPanel');
  const toggle=document.getElementById('jywToggle');
  if(!panel||!toggle) return;
  jywOpen=true;
  panel.classList.add('active');
  toggle.classList.add('open');
  if(!jywGreeted){jywGreeted=true;jywAddMsg('jy','Jyotika',JKB.greet());}
  if(presetQ){
    setTimeout(()=>{
      jywAddMsg('user','You',presetQ);
      jywShowTyping(()=>jywAddMsg('jy','Jyotika',jywGetResponse(presetQ)));
    },400);
  }
}

function jywAddMsg(role,label,html){
  const msgs=document.getElementById('jywMessages');
  if(!msgs) return;
  // Remove typing indicator
  const tyEl=msgs.querySelector('.jyw-typing-wrap');
  if(tyEl) tyEl.remove();

  const div=document.createElement('div');
  div.className=`jyw-msg ${role}`;
  div.innerHTML=`
    <div class="jyw-msg-av">${role==='jy'?'🔮':'👤'}</div>
    <div class="jyw-msg-bubble">
      <div class="jyw-msg-label">${label}</div>
      <div class="jyw-bubble">${html}</div>
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
  // Hide quick bar after first user message
  const qbar=document.getElementById('jywQuickBar');
  if(role==='user'&&qbar) qbar.style.display='none';
}

function jywShowTyping(cb){
  const msgs=document.getElementById('jywMessages');
  if(!msgs) return;
  const wrap=document.createElement('div');
  wrap.className='jyw-msg jy jyw-typing-wrap';
  wrap.innerHTML=`<div class="jyw-msg-av">🔮</div><div class="jyw-typing"><div class="jyw-ty-dot"></div><div class="jyw-ty-dot"></div><div class="jyw-ty-dot"></div><span style="margin-left:4px;font-size:.72rem">Jyotika is thinking...</span></div>`;
  msgs.appendChild(wrap);
  msgs.scrollTop=msgs.scrollHeight;
  setTimeout(()=>{if(cb)cb();},1600);
}

function jywSend(){
  const inp=document.getElementById('jywInput');
  if(!inp) return;
  const q=inp.value.trim();
  if(!q) return;
  inp.value='';
  inp.style.height='auto';
  jywAddMsg('user','You',q);
  jywShowTyping(()=>jywAddMsg('jy','Jyotika',jywGetResponse(q)));
}

function jywCalcNumerology(){
  const name=document.getElementById('jywNumName')?.value.trim();
  const dob=document.getElementById('jywNumDob')?.value;
  const sys=document.getElementById('jywNumSys')?.value;
  const yr=parseInt(document.getElementById('jywNumYear')?.value)||2026;
  if(!name||!dob){alert('Please enter name and date of birth.');return;}
  const tbl=sys==='chaldean'?CHALD:PYTH;
  const lp=jLifePath(dob);
  const ex=jExpr(name,tbl);
  const su=jSoul(name,tbl);
  const pe=jPers(name,tbl);
  const py=jPersonalYear(dob,yr);
  const bd=parseInt(dob.split('-')[2])||1;
  const bdn=jReduce(bd);
  const isMaster=n=>MASTER.includes(n);

  // Tarot birth card
  const lpForTarot=MASTER.includes(lp)?lp:(lp===0?22:lp);
  const tarotBC=TAROT_BIRTH[lpForTarot]||TAROT_BIRTH[1];
  const tarotYC=TAROT_BIRTH[py]||TAROT_BIRTH[py%22]||TAROT_BIRTH[1];

  const cards=[
    {v:lp,l:'Life Path',m:NUM_MEANINGS[lp]?.name||''},
    {v:ex,l:'Expression',m:NUM_MEANINGS[ex]?.name||''},
    {v:su,l:'Soul Urge',m:NUM_MEANINGS[su]?.name||''},
    {v:pe,l:'Personality',m:NUM_MEANINGS[pe]?.name||''},
    {v:bdn,l:'Birthday',m:''},
    {v:py,l:'Personal Year',m:''},
  ];

  const grid=cards.map(c=>`
    <div class="jyw-num-card">
      <div class="jyw-num-val ${isMaster(c.v)?'jyw-num-master':''}">${c.v}</div>
      <div class="jyw-num-lbl">${c.l}</div>
      ${c.m?`<div class="jyw-num-mean">${c.m}</div>`:''}
    </div>`).join('');

  const lpInfo=NUM_MEANINGS[lp]||{name:'Special',keywords:'Unique energy'};
  const pyInfo=NUM_MEANINGS[py]||{name:'',keywords:''};

  const html=`
    <h3>✦ ${name}'s Numerology Profile</h3>
    <div class="jyw-num-grid">${grid}</div>
    <p><strong>Life Path ${lp}${isMaster(lp)?'★':''}:</strong> ${lpInfo.name}<br/><small>${lpInfo.keywords}</small></p>
    <p><strong>Personal Year ${py}:</strong> ${pyInfo.name}<br/><small>${pyInfo.keywords}</small></p>
    <p><strong>🃏 Tarot Birth Card:</strong> ${tarotBC}</p>
    <p><strong>🃏 Year Card ${yr}:</strong> ${tarotYC}</p>
    ${isMaster(lp)?`<p style="color:#40e0c8;font-size:.75rem">★ Master Number ${lp} — Carries higher vibrational responsibility. Do not always reduce.</p>`:''}
  `;
  const res=document.getElementById('jywNumResult');
  if(res){res.innerHTML=html;res.style.display='block';}
}

function jywBuildChartRef(){
  const el=document.getElementById('jywChartRef');
  if(!el) return;
  el.innerHTML=JYW_CHART_REF.map(c=>`
    <div class="jyw-cr-item">
      <div class="jyw-cr-head">${c.h}</div>
      <div class="jyw-cr-body">${c.b}</div>
    </div>`).join('');
}

function jywBuildTarotRef(){
  const el=document.getElementById('jywTarotRef');
  if(!el) return;
  el.innerHTML=`<div class="jyw-tr-grid">${
    JYW_TAROT_REF.map(c=>`
      <div class="jyw-tr-card">
        <div class="jyw-tr-num">${c.n}</div>
        <div class="jyw-tr-emoji">${c.e}</div>
        <div class="jyw-tr-name">${c.name}</div>
        <div class="jyw-tr-key">${c.key}</div>
      </div>`).join('')
  }</div>`;
}

function jywToggleToolPanel(panelId){
  ['jywNumPanel','jywChartPanel','jywTarotPanel'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.style.display=(id===panelId&&el.style.display==='none')?'block':'none';
  });
}

// ── WIDGET INIT ─────────────────────────────────────────────
function initJyotikaWidget(){
  const toggle=document.getElementById('jywToggle');
  const closeBtn=document.getElementById('jywClose');
  const sendBtn=document.getElementById('jywSend');
  const clearBtn=document.getElementById('jywClear');
  const input=document.getElementById('jywInput');
  const btnNum=document.getElementById('jywBtnNum');
  const btnChart=document.getElementById('jywBtnChart');
  const btnTarot=document.getElementById('jywBtnTarot');
  const calcBtn=document.getElementById('jywCalcBtn');
  const navBtn=document.getElementById('navJyotikaBtn');
  const heroBtn=document.getElementById('heroJyotikaBtn');

  if(toggle) toggle.addEventListener('click',()=>openJyotikaWidget());
  if(closeBtn) closeBtn.addEventListener('click',()=>{
    document.getElementById('jywPanel')?.classList.remove('active');
    toggle?.classList.remove('open');
    jywOpen=false;
  });
  if(sendBtn) sendBtn.addEventListener('click',jywSend);
  if(input){
    input.addEventListener('keydown',e=>{
      if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();jywSend();}
    });
    input.addEventListener('input',()=>{
      input.style.height='auto';
      input.style.height=Math.min(input.scrollHeight,100)+'px';
    });
  }
  if(clearBtn) clearBtn.addEventListener('click',()=>{
    const msgs=document.getElementById('jywMessages');
    if(msgs){msgs.innerHTML='';jywGreeted=false;}
    document.getElementById('jywQuickBar').style.display='flex';
    jywAddMsg('jy','Jyotika',JKB.greet());
    jywGreeted=true;
  });

  // Tool panels
  if(btnNum) btnNum.addEventListener('click',()=>{jywToggleToolPanel('jywNumPanel');jywBuildChartRef();});
  if(btnChart){btnChart.addEventListener('click',()=>{jywToggleToolPanel('jywChartPanel');jywBuildChartRef();});}
  if(btnTarot){btnTarot.addEventListener('click',()=>{jywToggleToolPanel('jywTarotPanel');jywBuildTarotRef();});}
  if(calcBtn) calcBtn.addEventListener('click',jywCalcNumerology);

  // Tool panel close buttons
  document.querySelectorAll('.jyw-tp-close').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const pid=btn.getAttribute('data-panel');
      const el=document.getElementById(pid);
      if(el) el.style.display='none';
    });
  });

  // Quick pills
  document.querySelectorAll('.jyw-quick').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const q=btn.getAttribute('data-q');
      if(!jywOpen) openJyotikaWidget(q);
      else{
        jywAddMsg('user','You',q);
        jywShowTyping(()=>jywAddMsg('jy','Jyotika',jywGetResponse(q)));
      }
    });
  });

  // Nav / hero buttons
  if(navBtn) navBtn.addEventListener('click',()=>openJyotikaWidget());
  if(heroBtn) heroBtn.addEventListener('click',()=>openJyotikaWidget());
}

// ── BOOT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  // Existing app init runs from app.js DOMContentLoaded already
  // Initialize Jyotika widget
  initJyotikaWidget();
});
