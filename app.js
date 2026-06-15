// ════════════════════════════════════════════════════════════
//  CosmoSage AI — app.js  (Complete & Fully Functional)
// ════════════════════════════════════════════════════════════

// ── ZODIAC DATA ──────────────────────────────────────────────
const SIGNS = [
  {name:'Aries',   emoji:'♈',sym:'♈',dates:'Mar 21 – Apr 19',el:'Fire', ruler:'Mars',   stone:'Diamond',   color:'Crimson',    compat:'Leo'},
  {name:'Taurus',  emoji:'♉',sym:'♉',dates:'Apr 20 – May 20',el:'Earth',ruler:'Venus',  stone:'Emerald',   color:'Forest Green',compat:'Virgo'},
  {name:'Gemini',  emoji:'♊',sym:'♊',dates:'May 21 – Jun 20',el:'Air',  ruler:'Mercury',stone:'Agate',     color:'Sunshine Yellow',compat:'Libra'},
  {name:'Cancer',  emoji:'♋',sym:'♋',dates:'Jun 21 – Jul 22',el:'Water',ruler:'Moon',   stone:'Pearl',     color:'Silver',     compat:'Scorpio'},
  {name:'Leo',     emoji:'♌',sym:'♌',dates:'Jul 23 – Aug 22',el:'Fire', ruler:'Sun',    stone:'Ruby',      color:'Royal Gold',  compat:'Sagittarius'},
  {name:'Virgo',   emoji:'♍',sym:'♍',dates:'Aug 23 – Sep 22',el:'Earth',ruler:'Mercury',stone:'Sapphire',  color:'Navy Blue',  compat:'Capricorn'},
  {name:'Libra',   emoji:'♎',sym:'♎',dates:'Sep 23 – Oct 22',el:'Air',  ruler:'Venus',  stone:'Opal',      color:'Rose Pink',  compat:'Aquarius'},
  {name:'Scorpio', emoji:'♏',sym:'♏',dates:'Oct 23 – Nov 21',el:'Water',ruler:'Pluto',  stone:'Topaz',     color:'Deep Crimson',compat:'Pisces'},
  {name:'Sagittarius',emoji:'♐',sym:'♐',dates:'Nov 22 – Dec 21',el:'Fire',ruler:'Jupiter',stone:'Turquoise',color:'Purple',  compat:'Aries'},
  {name:'Capricorn',emoji:'♑',sym:'♑',dates:'Dec 22 – Jan 19',el:'Earth',ruler:'Saturn',stone:'Garnet',   color:'Earthy Brown',compat:'Taurus'},
  {name:'Aquarius',emoji:'♒',sym:'♒',dates:'Jan 20 – Feb 18',el:'Air',  ruler:'Uranus', stone:'Amethyst',  color:'Electric Blue',compat:'Gemini'},
  {name:'Pisces',  emoji:'♓',sym:'♓',dates:'Feb 19 – Mar 20',el:'Water',ruler:'Neptune',stone:'Aquamarine',color:'Sea Green', compat:'Cancer'},
];

// ── HOROSCOPE READINGS ───────────────────────────────────────
const READINGS = {
  today:[
    "The cosmos shines a spotlight on your authentic self today. A bold decision you've been postponing demands your attention — the planets confirm this is the right moment. Trust the inner knowing that rises above analytical hesitation.",
    "Mercury's current position sharpens your intuition like a blade. Pay close attention to the people entering your life this week — one carries a message that will reshape your understanding of a long-standing challenge.",
    "An emotional crossroads presents itself. Rather than choosing the familiar comfort, the stars urge you to step toward the unknown. The discomfort you feel is the sensation of expansion, not danger.",
    "Venus casts a golden glow on your relationships today. A reconnection with someone from your past may bring unexpected joy, while existing bonds deepen through honest and vulnerable conversation.",
    "Financial clarity arrives through an unexpected source. A conversation, document, or insight unlocks a practical path forward. Saturn rewards your discipline — the groundwork you've laid is about to yield.",
    "Your creative energy is at a peak. A project or idea you've been nursing internally is ready to emerge into the world. The universe is aligning collaborators and resources — begin now.",
  ],
  week:[
    "This week carries the energy of culmination. Projects you launched 6–8 weeks ago reach completion or a decisive turning point. Celebrate your progress and be prepared to make a pivotal choice by Thursday.",
    "The lunar cycle activates your 7th house of partnerships. A professional or personal alliance undergoes a meaningful shift — either deepening in trust or revealing its true nature. Clarity arrives, and with it, direction.",
    "Mercury retrograde ends mid-week, and with it, communications that were tangled finally straighten. Delayed responses arrive, pending decisions resolve, and a conversation you've been avoiding becomes necessary and healing.",
    "Jupiter's expansive influence brings an unexpected windfall or opportunity — financial, creative, or relational. The week rewards those who have done their inner work and positioned themselves for possibility.",
  ],
  month:[
    "This month is defined by Saturn's disciplining hand and Jupiter's expansive grace working in dynamic tension. What you commit to with genuine intention in the first two weeks will be supported and amplified through the month's end.",
    "A month of profound inner re-alignment. The outer world reflects the inner shift you've been undergoing. By month's end, you stand in a fundamentally different relationship with your own desires, values, and self-worth.",
    "The nodal axis activates a karmic turning point in your life. Doors that have remained stubbornly closed will open, while relationships or situations that no longer serve your growth begin their graceful completion.",
    "Creative and romantic energies peak in the first three weeks. A project born this month carries special resonance — it connects your personal story to a larger collective need. Shine without apology.",
  ],
  year:[
    "2026 marks a year of structural transformation. Saturn's influence demands you build on what is real and release what is performative. The foundation you lay this year will support your next decade of growth.",
    "Jupiter enters your sign's sister sign mid-year, delivering a powerful wave of expansion and recognition. Opportunities you've worked years to cultivate finally mature. Your patience is profoundly rewarded.",
    "The eclipse series of 2026 activates major life transitions — career shifts, relocations, relationship milestones, or spiritual awakenings. You will not end this year the same person who began it. Embrace the metamorphosis.",
    "2026 is your personal year of harvest. Seeds planted during the challenging cycles of 2022–2024 yield their fruit. Financial stabilization, relationship depth, and creative recognition are the dominant themes of your year.",
  ]
};

// ── TAROT DATA ───────────────────────────────────────────────
const TAROT_CARDS = [
  {name:'The Fool',num:'0',emoji:'🎭',meaning:'New beginnings, innocence, spontaneity, a free spirit',rev:'Holding back, recklessness, risk-taking'},
  {name:'The Magician',num:'I',emoji:'🪄',meaning:'Manifestation, resourcefulness, power, inspired action',rev:'Poor planning, untapped talents, manipulation'},
  {name:'The High Priestess',num:'II',emoji:'🌙',meaning:'Intuition, sacred knowledge, divine feminine, the subconscious',rev:'Secrets, disconnected from intuition, withdrawal'},
  {name:'The Empress',num:'III',emoji:'🌿',meaning:'Femininity, beauty, nature, nurturing, abundance',rev:'Creative block, dependence on others, smothering'},
  {name:'The Emperor',num:'IV',emoji:'👑',meaning:'Authority, establishment, structure, a father figure',rev:'Domination, excessive control, lack of discipline'},
  {name:'The Hierophant',num:'V',emoji:'⛪',meaning:'Spiritual wisdom, religious beliefs, conformity, tradition',rev:'Personal beliefs, freedom, challenging the status quo'},
  {name:'The Lovers',num:'VI',emoji:'💕',meaning:'Love, harmony, relationships, values alignment, choices',rev:'Self-love, disharmony, imbalance, misalignment of values'},
  {name:'The Chariot',num:'VII',emoji:'🏇',meaning:'Control, willpower, success, action, determination',rev:'Self-discipline, opposition, lack of direction'},
  {name:'Strength',num:'VIII',emoji:'🦁',meaning:'Strength, courage, patience, control, compassion',rev:'Inner strength, self-doubt, low energy, raw emotion'},
  {name:'The Hermit',num:'IX',emoji:'🕯️',meaning:'Soul-searching, introspection, being alone, inner guidance',rev:'Isolation, loneliness, withdrawal, anti-social'},
  {name:'Wheel of Fortune',num:'X',emoji:'🎡',meaning:'Good luck, karma, life cycles, destiny, a turning point',rev:'Bad luck, resistance to change, breaking cycles'},
  {name:'Justice',num:'XI',emoji:'⚖️',meaning:'Justice, fairness, truth, cause and effect, law',rev:'Unfairness, lack of accountability, dishonesty'},
  {name:'The Hanged Man',num:'XII',emoji:'🙃',meaning:'Pause, surrender, letting go, new perspectives',rev:'Delays, resistance, stalling, indecision'},
  {name:'Death',num:'XIII',emoji:'💀',meaning:'Endings, change, transformation, transition',rev:'Resistance to change, personal transformation, inner purging'},
  {name:'Temperance',num:'XIV',emoji:'🌊',meaning:'Balance, moderation, patience, purpose',rev:'Imbalance, excess, self-healing, re-alignment'},
  {name:'The Devil',num:'XV',emoji:'🔗',meaning:'Shadow self, attachment, addiction, restriction, sexuality',rev:'Releasing limiting beliefs, exploring dark thoughts, detachment'},
  {name:'The Tower',num:'XVI',emoji:'⚡',meaning:'Sudden change, upheaval, chaos, revelation, awakening',rev:'Personal transformation, fear of change, averting disaster'},
  {name:'The Star',num:'XVII',emoji:'⭐',meaning:'Hope, faith, purpose, renewal, spirituality',rev:'Lack of faith, despair, self-trust, disconnection'},
  {name:'The Moon',num:'XVIII',emoji:'🌕',meaning:'Illusion, fear, the subconscious, confusion, complexity',rev:'Release of fear, repressed emotion, inner confusion'},
  {name:'The Sun',num:'XIX',emoji:'☀️',meaning:'Positivity, fun, warmth, success, vitality',rev:'Inner child, feeling down, overly optimistic'},
  {name:'Judgement',num:'XX',emoji:'📯',meaning:'Judgement, rebirth, inner calling, absolution',rev:'Self-doubt, inner critic, ignoring the call'},
  {name:'The World',num:'XXI',emoji:'🌍',meaning:'Completion, integration, accomplishment, travel',rev:'Seeking personal closure, short-cuts, delays'},
];

const TAROT_READINGS = [
  "The first card reveals where you currently stand: a moment of profound transition. The second card illuminates the hidden forces at work — energies you may not have fully acknowledged. The third card is your cosmic compass, pointing toward the highest possible outcome if you align your choices with your deepest truth.",
  "Your spread speaks of a journey from uncertainty to clarity. The cards confirm that what feels like an ending is actually a threshold. Trust the process. The universe is restructuring your life in ways your mind cannot yet comprehend but your soul already recognizes.",
  "The cards reveal a powerful karmic cycle reaching its completion. An old pattern — in relationship, career, or self-belief — is ready to be released. The third card shows what becomes possible when you let go: a future far more luminous than anything you have dared to imagine.",
  "This spread carries the signature of Venus and Saturn working together — love meeting discipline, desire meeting wisdom. You are being called to build something real, something lasting, something that reflects your truest values rather than your temporary fears.",
  "A remarkable convergence of creative and spiritual energy appears in your spread. You are in a rare window where inner vision can be made manifest. The cards urge immediate, inspired action. What you create during this period carries an unusually powerful vibration.",
];

// ── TESTIMONIALS ─────────────────────────────────────────────
const TESTIMONIALS = [
  {stars:5,text:"The birth chart reading gave me chills — it described my personality and life challenges with an accuracy that no one who has just met me could match. Jyotika's explanation of my Saturn return was transformative.",name:"Arjun Mehta",loc:"Mumbai, India",sign:"♏ Scorpio",emoji:"🧑"},
  {stars:5,text:"I was skeptical about AI astrology, but CosmoSage completely changed my mind. The compatibility reading between me and my partner was shockingly accurate. We've completely shifted how we communicate.",name:"Sarah Chen",loc:"Vancouver, Canada",sign:"♎ Libra",emoji:"👩"},
  {stars:5,text:"Jyotika walked me through my Vimshottari Dasha in a way that made complete sense. I finally understand why the last 3 years have been so challenging — and more importantly, what's coming next.",name:"Priya Krishnan",loc:"Bengaluru, India",sign:"♋ Cancer",emoji:"👩‍💼"},
  {stars:5,text:"The numerology calculator is absolutely mind-blowing. My Life Path 11 reading was the most accurate description of my internal experience I have ever read anywhere. Goosebumps.",name:"Marcus Thompson",loc:"Atlanta, USA",sign:"♒ Aquarius",emoji:"🧔"},
  {stars:5,text:"I use CosmoSage every morning for my daily horoscope. It feels deeply personal rather than generic. The AI Predictions for my career area were so specific that I actually made a major job decision based on them.",name:"Elena Voronova",loc:"Moscow, Russia",sign:"♍ Virgo",emoji:"👱‍♀️"},
  {stars:5,text:"Asked Jyotika about the Nakshatras and got a 10-minute deep dive that would rival any professional astrologer I've ever paid ₹5000 to consult. This platform is an absolute gift to students of Jyotish.",name:"Vikram Nair",loc:"Chennai, India",sign:"♐ Sagittarius",emoji:"👨‍💻"},
];

// ════════════════════════════════════════════════════════════
//  STAR CANVAS ANIMATION
// ════════════════════════════════════════════════════════════
(function initStars(){
  const canvas = document.getElementById('stars');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [];

  function resize(){
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  function makeStars(){
    stars = [];
    for(let i = 0; i < 200; i++){
      stars.push({
        x: Math.random()*W, y: Math.random()*H,
        r: Math.random()*1.5+0.2,
        a: Math.random(), da: (Math.random()-0.5)*0.005,
        speed: Math.random()*0.15+0.05
      });
    }
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    stars.forEach(s=>{
      s.a = Math.max(0.05, Math.min(1, s.a+s.da));
      if(s.a<=0.05||s.a>=1) s.da*=-1;
      s.y -= s.speed;
      if(s.y < 0){ s.y = H; s.x = Math.random()*W; }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(200,180,255,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize(); makeStars(); draw();
  window.addEventListener('resize', ()=>{ resize(); makeStars(); });
})();

// ════════════════════════════════════════════════════════════
//  HERO ANIMATED ZODIAC RING
// ════════════════════════════════════════════════════════════
(function buildHeroZodiac(){
  const ring = document.getElementById('zodiacRingAnim');
  if(!ring) return;
  const symbols = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
  ring.innerHTML = '';
  symbols.forEach((sym,i)=>{
    const span = document.createElement('span');
    span.textContent = sym;
    const angle = (i/12)*360;
    span.style.cssText = `
      position:absolute;top:50%;left:50%;width:28px;height:28px;
      margin:-14px 0 0 -14px;text-align:center;line-height:28px;
      font-size:1rem;color:rgba(155,109,255,.7);
      transform:rotate(${angle}deg) translateY(-80px);
      animation:zodiacSpin 30s linear infinite;
      animation-delay:${(-i/12)*30}s;
    `;
    ring.appendChild(span);
  });
})();

// ════════════════════════════════════════════════════════════
//  NAVIGATION — scroll + active state
// ════════════════════════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});
window.addEventListener('scroll',()=>{
  const nav = document.getElementById('nav');
  if(nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ════════════════════════════════════════════════════════════
//  POPULATE SIGN SELECTS (compatibility + predictions)
// ════════════════════════════════════════════════════════════
function populateSignSelect(elId){
  const sel = document.getElementById(elId);
  if(!sel) return;
  SIGNS.forEach(s=>{
    const opt = document.createElement('option');
    opt.value = s.name;
    opt.textContent = s.emoji+' '+s.name;
    sel.appendChild(opt);
  });
}
['c1sign','c2sign','pSign'].forEach(id=> populateSignSelect(id));

// ════════════════════════════════════════════════════════════
//  HOROSCOPE SECTION
// ════════════════════════════════════════════════════════════
let currentSign = null;
let currentTab  = 'today';

(function buildZodiacGrid(){
  const grid = document.getElementById('zodiacGrid');
  if(!grid) return;
  SIGNS.forEach(s=>{
    const card = document.createElement('div');
    card.className = 'zodiac-card';
    card.setAttribute('role','button');
    card.setAttribute('tabindex','0');
    card.innerHTML = `<div class="zodiac-symbol">${s.emoji}</div><div class="zodiac-name">${s.name}</div><div class="zodiac-dates">${s.dates}</div>`;
    card.addEventListener('click',()=> showHoroscope(s));
    card.addEventListener('keypress',e=>{ if(e.key==='Enter') showHoroscope(s); });
    grid.appendChild(card);
  });
})();

function showHoroscope(sign){
  currentSign = sign;
  const panel = document.getElementById('horoPanel');
  if(!panel) return;
  document.getElementById('horoIcon').textContent = sign.emoji;
  document.getElementById('horoName').textContent = sign.name;
  document.getElementById('horoDates').textContent = sign.dates+' · '+sign.el+' · Ruler: '+sign.ruler;
  panel.style.display = 'block';
  panel.scrollIntoView({behavior:'smooth',block:'nearest'});
  // reset tabs
  document.querySelectorAll('.tab').forEach(t=> t.classList.toggle('active', t.dataset.tab==='today'));
  currentTab = 'today';
  loadHoroReading('today', sign);
}

function loadHoroReading(tab, sign){
  const typing = document.getElementById('horoTyping');
  const result = document.getElementById('horoResult');
  if(!typing||!result) return;
  typing.style.display='flex'; result.style.display='none';
  setTimeout(()=>{
    const pool = READINGS[tab]||READINGS.today;
    document.getElementById('horoText').textContent = pool[Math.floor(Math.random()*pool.length)];
    const love    = 55+Math.floor(Math.random()*40);
    const career  = 50+Math.floor(Math.random()*45);
    const health  = 60+Math.floor(Math.random()*35);
    const luck    = 45+Math.floor(Math.random()*50);
    document.getElementById('bLove').style.width   = love+'%';
    document.getElementById('bCareer').style.width  = career+'%';
    document.getElementById('bHealth').style.width  = health+'%';
    document.getElementById('bLuck').style.width    = luck+'%';
    document.getElementById('sLove').textContent    = love+'%';
    document.getElementById('sCareer').textContent  = career+'%';
    document.getElementById('sHealth').textContent  = health+'%';
    document.getElementById('sLuck').textContent    = luck+'%';
    document.getElementById('lColor').textContent   = sign.color;
    document.getElementById('lNum').textContent     = [3,6,7,9,11,18,21,33,42,77][Math.floor(Math.random()*10)];
    document.getElementById('lStone').textContent   = sign.stone;
    document.getElementById('lMatch').textContent   = sign.compat;
    typing.style.display='none'; result.style.display='block';
  }, 1600);
}

// Horoscope tab clicks
document.querySelectorAll('.tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(!currentSign) return;
    document.querySelectorAll('.tab').forEach(t=> t.classList.remove('active'));
    btn.classList.add('active');
    currentTab = btn.dataset.tab;
    loadHoroReading(currentTab, currentSign);
  });
});

// Horoscope close
const horoCloseBtn = document.getElementById('horoClose');
if(horoCloseBtn) horoCloseBtn.addEventListener('click',()=>{
  document.getElementById('horoPanel').style.display='none';
});

// ════════════════════════════════════════════════════════════
//  BIRTH CHART GENERATOR
// ════════════════════════════════════════════════════════════
function getSunSign(month, day){
  const cusp=[[3,21],[4,20],[5,21],[6,21],[7,23],[8,23],[9,23],[10,23],[11,22],[12,22],[1,20],[2,19]];
  for(let i=0;i<12;i++){
    const [m,d]=cusp[i];
    const [nm,nd]=cusp[(i+1)%12];
    if((month+1===m&&day>=d)||(month+1===nm&&day<nd)) return i;
  }
  return 11;
}

function drawBirthChartCanvas(sun,moon,rising){
  const canvas = document.getElementById('chartCanvas');
  if(!canvas) return;
  const ctx=canvas.getContext('2d'),W=canvas.width,H=canvas.height,cx=W/2,cy=H/2;
  ctx.clearRect(0,0,W,H);
  const bg=ctx.createRadialGradient(cx,cy,0,cx,cy,148);
  bg.addColorStop(0,'#1a1740'); bg.addColorStop(1,'#06040f');
  ctx.fillStyle=bg; ctx.beginPath(); ctx.arc(cx,cy,148,0,Math.PI*2); ctx.fill();
  [140,110,80,50].forEach((r,i)=>{
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
    ctx.strokeStyle=`rgba(155,109,255,${0.15+i*.1})`; ctx.lineWidth=1; ctx.stroke();
  });
  for(let i=0;i<12;i++){
    const a=(i/12)*Math.PI*2-Math.PI/2;
    ctx.beginPath(); ctx.moveTo(cx+Math.cos(a)*50,cy+Math.sin(a)*50);
    ctx.lineTo(cx+Math.cos(a)*140,cy+Math.sin(a)*140);
    ctx.strokeStyle='rgba(155,109,255,.2)'; ctx.lineWidth=1; ctx.stroke();
  }
  SIGNS.forEach((s,i)=>{
    const a=(i/12)*Math.PI*2-Math.PI/2+(Math.PI/12);
    ctx.font='11px serif'; ctx.fillStyle='rgba(155,109,255,.7)';
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(s.sym,cx+Math.cos(a)*125,cy+Math.sin(a)*125);
  });
  [{idx:sun,col:'#f0c060',sym:'☉',r:95},{idx:moon,col:'#c8b8ff',sym:'☽',r:72},{idx:rising,col:'#40e0c8',sym:'↑',r:52}].forEach(p=>{
    const a=(p.idx/12)*Math.PI*2-Math.PI/2;
    const x=cx+Math.cos(a)*p.r, y=cy+Math.sin(a)*p.r;
    ctx.beginPath(); ctx.arc(x,y,10,0,Math.PI*2);
    ctx.fillStyle=p.col+'33'; ctx.fill();
    ctx.strokeStyle=p.col; ctx.lineWidth=2; ctx.stroke();
    ctx.font='13px serif'; ctx.fillStyle=p.col;
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(p.sym,x,y);
  });
  const cg=ctx.createRadialGradient(cx,cy,0,cx,cy,40);
  cg.addColorStop(0,'#9b6dff55'); cg.addColorStop(1,'transparent');
  ctx.beginPath(); ctx.arc(cx,cy,40,0,Math.PI*2); ctx.fillStyle=cg; ctx.fill();
  ctx.font='20px serif'; ctx.fillStyle='#f0c060';
  ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('✦',cx,cy);
}

function generateBirthChart(name,date,time,place){
  const dob=new Date(date);
  const sunIdx=getSunSign(dob.getMonth(),dob.getDate());
  const sun=SIGNS[sunIdx];
  const moonIdx=(sunIdx+4)%12;
  const risingIdx=(sunIdx+8)%12;
  document.getElementById('chartName').textContent=name+"'s Natal Chart";
  document.getElementById('chartBadges').innerHTML=
    `<span class="chart-badge">☉ ${sun.name}</span>
     <span class="chart-badge">☽ ${SIGNS[moonIdx].name}</span>
     <span class="chart-badge">↑ ${SIGNS[risingIdx].name} Rising</span>
     <span class="chart-badge">${sun.el} Sign</span>`;
  drawBirthChartCanvas(sunIdx,moonIdx,risingIdx);
  const planets=[
    {n:'☉ Sun',    s:sun.name,            h:'1st'},
    {n:'☽ Moon',   s:SIGNS[moonIdx].name, h:'4th'},
    {n:'↑ Rising', s:SIGNS[risingIdx].name,h:'1st'},
    {n:'☿ Mercury',s:SIGNS[(sunIdx+1)%12].name,h:'2nd'},
    {n:'♀ Venus',  s:SIGNS[(sunIdx+2)%12].name,h:'5th'},
    {n:'♂ Mars',   s:SIGNS[(sunIdx+7)%12].name,h:'7th'},
    {n:'♃ Jupiter',s:SIGNS[(sunIdx+3)%12].name,h:'9th'},
    {n:'♄ Saturn', s:SIGNS[(sunIdx+6)%12].name,h:'10th'},
  ];
  document.getElementById('chartPlanets').innerHTML=planets.map(p=>
    `<div class="planet-item"><span>${p.n}</span><span>${p.s} · ${p.h} House</span></div>`
  ).join('');
  document.getElementById('chartSummary').innerHTML=
    `<strong>Cosmic Profile:</strong> With your Sun in <strong>${sun.name}</strong>, Moon in <strong>${SIGNS[moonIdx].name}</strong>, and <strong>${SIGNS[risingIdx].name}</strong> Rising, you embody ${sun.el} energy balanced by ${SIGNS[moonIdx].el} emotional depth. Your ruling planet <strong>${sun.ruler}</strong> shapes your core identity. Your power stone is <strong>${sun.stone}</strong>.`;
  document.getElementById('chartForm').style.display='none';
  document.getElementById('chartResult').style.display='block';
  document.getElementById('birthchart').scrollIntoView({behavior:'smooth'});
}

// Wire birth chart button
(function(){
  const genBtn  = document.getElementById('genChartBtn');
  const backBtn = document.getElementById('chartBack');
  if(genBtn) genBtn.addEventListener('click', function(){
    const name  = document.getElementById('cName').value.trim();
    const date  = document.getElementById('cDate').value;
    const time  = document.getElementById('cTime').value;
    const place = document.getElementById('cPlace').value.trim();
    if(!name||!date){ alert('Please enter your name and date of birth.'); return; }
    this.textContent='✦ Generating...'; this.disabled=true;
    setTimeout(()=>{
      generateBirthChart(name,date,time,place);
      this.textContent='✦ Generate Birth Chart'; this.disabled=false;
    },2000);
  });
  if(backBtn) backBtn.addEventListener('click',()=>{
    document.getElementById('chartForm').style.display='block';
    document.getElementById('chartResult').style.display='none';
  });
})();

// ════════════════════════════════════════════════════════════
//  COMPATIBILITY
// ════════════════════════════════════════════════════════════
function drawCompatRing(score){
  const c=document.getElementById('compatCanvas');
  if(!c) return;
  const ctx=c.getContext('2d'),W=c.width,H=c.height,cx=W/2,cy=H/2,r=75;
  ctx.clearRect(0,0,W,H);
  ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
  ctx.strokeStyle='rgba(155,109,255,.15)'; ctx.lineWidth=10; ctx.stroke();
  const g=ctx.createLinearGradient(0,0,W,H);
  g.addColorStop(0,'#ff6b9d'); g.addColorStop(1,'#9b6dff');
  ctx.beginPath(); ctx.arc(cx,cy,r,-Math.PI/2,(score/100)*Math.PI*2-Math.PI/2);
  ctx.strokeStyle=g; ctx.lineWidth=10; ctx.lineCap='round'; ctx.stroke();
}

function showCompatResult(s1,s2,n1,n2){
  const idx1=SIGNS.findIndex(s=>s.name===s1);
  const idx2=SIGNS.findIndex(s=>s.name===s2);
  const diff=Math.abs(idx1-idx2);
  const elMatch=SIGNS[idx1].el===SIGNS[idx2].el;
  const harmonic=[0,4,8].includes(diff)||[3,9].includes(diff);
  const score=Math.min(99,(elMatch?82:harmonic?74:58)+Math.floor(Math.random()*12));
  const result=document.getElementById('compatResult');
  result.style.display='flex';
  result.scrollIntoView({behavior:'smooth'});
  let cur=0; const pct=document.getElementById('compatPct');
  const t=setInterval(()=>{ cur=Math.min(score,cur+2); pct.textContent=cur+'%'; if(cur>=score)clearInterval(t); },30);
  drawCompatRing(score);
  const areas=['Love & Romance','Emotional Bond','Communication','Trust & Loyalty','Long-term Vision','Physical Chemistry'];
  const det=document.getElementById('compatDetails');
  det.innerHTML='';
  areas.forEach(a=>{
    const val=Math.min(99,score-10+Math.floor(Math.random()*25));
    const div=document.createElement('div');
    div.className='compat-detail-item';
    div.innerHTML=`<label>${a}</label><div class="detail-bar"><div class="detail-fill" id="df${a.replace(/\W/g,'')}"></div></div><span>${val}%</span>`;
    det.appendChild(div);
    setTimeout(()=>{ const f=document.getElementById('df'+a.replace(/\W/g,'')); if(f)f.style.width=val+'%'; },300);
  });
  const reading=score>80
    ?`${n1} and ${n2} share a remarkable cosmic bond. Your ${SIGNS[idx1].el} and ${SIGNS[idx2].el} energies create dynamic harmony filled with passion, mutual growth, and genuine understanding.`
    :score>65
    ?`${n1} and ${n2} have a solid foundation. Your elemental differences create both friction and powerful attraction, fuelling mutual evolution and growth.`
    :`${n1} and ${n2} face cosmic challenges, but great love stories require effort. Your contrasting energies become your greatest strength when approached with patience and curiosity.`;
  det.innerHTML+=`<p style="margin-top:18px;color:var(--muted);font-size:.88rem;line-height:1.7;border-top:1px solid var(--border);padding-top:14px">${reading}</p>`;
}

(function(){
  const btn=document.getElementById('compatBtn');
  if(!btn) return;
  btn.addEventListener('click',function(){
    const s1=document.getElementById('c1sign').value;
    const s2=document.getElementById('c2sign').value;
    const n1=document.getElementById('c1name').value||'Person 1';
    const n2=document.getElementById('c2name').value||'Person 2';
    if(!s1||!s2){ alert('Please select both zodiac signs.'); return; }
    this.textContent='Analyzing...'; this.disabled=true;
    setTimeout(()=>{ showCompatResult(s1,s2,n1,n2); this.textContent='✦ Analyze Compatibility'; this.disabled=false; },2000);
  });
})();

// ════════════════════════════════════════════════════════════
//  AI PREDICTIONS
// ════════════════════════════════════════════════════════════
const PRED_EVENTS={
  career:[
    {title:'Major Career Breakthrough',time:'Within 6–8 weeks',text:'A leadership opportunity comes your way. Your unique skills are finally being recognised. Take the initiative boldly.'},
    {title:'Financial Upliftment',time:'Month 2–3',text:'A salary negotiation or investment decision bears fruit. Jupiter amplifies abundance in your financial house.'},
    {title:'Network Expansion',time:'Month 3–4',text:'A powerful new professional contact enters your orbit, opening doors previously invisible to you.'},
    {title:'Achievement Recognition',time:'Month 4–6',text:'Public recognition or an award validates your sustained effort. Share your success with grace.'},
  ],
  love:[
    {title:'Romantic Encounter',time:'Within 3–5 weeks',text:"Venus draws meaningful connections. A new meeting carries deep soul recognition — this is not coincidence."},
    {title:'Deepening of Bonds',time:'Month 2',text:'Existing relationships transform. Honest conversations you have been avoiding lead to profound intimacy.'},
    {title:'Heart Healing',time:'Month 2–3',text:'Old emotional wounds gently close as Neptune brings compassion. You release what no longer serves your heart.'},
    {title:'Commitment Decision',time:'Month 4–6',text:'A significant relationship milestone approaches. Saturn supports long-term commitments made during this window.'},
  ],
  health:[
    {title:'Vitality Surge',time:'Within 2–3 weeks',text:'Mars energises your body with renewed strength. An ideal window to begin a new fitness practice.'},
    {title:'Mind-Body Alignment',time:'Month 1–2',text:'A shift in daily routine brings profound improvements to both mental clarity and physical wellbeing.'},
    {title:'Healing Breakthrough',time:'Month 2–4',text:'A health challenge finds resolution through a new approach, lifestyle change, or natural recovery.'},
  ],
  education:[
    {title:'Knowledge Breakthrough',time:'Within 3 weeks',text:'Mercury illuminates a subject you have been struggling with. A mentor or resource arrives at the perfect moment.'},
    {title:'New Learning Path',time:'Month 1–2',text:'An unexpected course, book, or teacher opens an entirely new intellectual horizon for you.'},
    {title:'Academic Achievement',time:'Month 3–5',text:'Your dedicated effort yields measurable results. An examination, certification, or recognition rewards your persistence.'},
  ],
  spiritual:[
    {title:'Awakening Experience',time:'Within 2 weeks',text:'A moment of profound clarity reshapes your relationship with the unseen dimensions of existence.'},
    {title:'Spiritual Community',time:'Month 1–2',text:'You are drawn toward a teacher, group, or practice that elevates your consciousness in unexpected ways.'},
    {title:'Past Life Revelation',time:'Month 2–4',text:'A pattern in your current life reveals itself as a karmic thread running from past lifetimes, offering profound liberation.'},
  ],
  general:[
    {title:'Life-Changing Insight',time:'Within 2 weeks',text:'A moment of profound clarity reshapes your understanding of your path. Trust wisdom arising from stillness.'},
    {title:'Unexpected Opportunity',time:'Month 1–2',text:'Something entirely unexpected enters your life, opening a path you had not considered. Stay open and curious.'},
    {title:'Spiritual Awakening',time:'Month 2–3',text:"A period of deep inner growth begins. You will find yourself drawn to practices that elevate your consciousness."},
    {title:'Major Positive Shift',time:'Month 3–6',text:'The cumulative energy of this period crystallises into a significant positive change in your overall life circumstances.'},
  ],
};

(function(){
  const btn=document.getElementById('predBtn');
  if(!btn) return;
  btn.addEventListener('click',function(){
    const name=document.getElementById('pName').value.trim()||'Friend';
    const sign=document.getElementById('pSign').value;
    const area=document.getElementById('pArea').value||'general';
    const period=document.getElementById('pPeriod').value||'6m';
    const q=document.getElementById('pQ').value.trim();
    if(!sign){ alert('Please select your zodiac sign.'); return; }
    this.textContent='✦ Reading the Stars...'; this.disabled=true;
    setTimeout(()=>{
      showPrediction(name,sign,area,period,q);
      this.textContent='✦ Reveal My Future'; this.disabled=false;
    },2500);
  });
})();

function showPrediction(name,signName,area,period,q){
  const events=(PRED_EVENTS[area]||PRED_EVENTS.general);
  const sign=SIGNS.find(s=>s.name===signName)||SIGNS[0];
  const periods={'3m':'3 months','6m':'6 months','1y':'1 year','5y':'5 years'};
  const result=document.getElementById('predResult');
  document.getElementById('predTitle').textContent=`${name}'s ${area.charAt(0).toUpperCase()+area.slice(1)} Forecast · ${periods[period]||period}`;
  document.getElementById('predTimeline').innerHTML=events.map(ev=>`
    <div class="pred-event">
      <div class="pred-event-time">${ev.time}</div>
      <div class="pred-event-body">
        <h5>${ev.title}</h5>
        <p>${ev.text}</p>
      </div>
    </div>`).join('');
  const advice=q
    ?`<div class="pred-advice-box"><strong>Cosmic Answer to Your Question:</strong> "${q}" — The stars suggest that ${sign.ruler}'s current influence on your ${sign.name} nature points toward patience and inner trust. The answer you seek will become clear as ${sign.stone} aligns with your path.</div>`
    :`<div class="pred-advice-box"><strong>Cosmic Advice for ${name}:</strong> As a ${sign.name} ruled by ${sign.ruler}, your highest path during this period involves embracing ${sign.el} energy. Your power stone ${sign.stone} will amplify your intentions when worn or meditated upon.</div>`;
  document.getElementById('predAdvice').innerHTML=advice;
  result.style.display='block';
  result.scrollIntoView({behavior:'smooth'});
}

// ════════════════════════════════════════════════════════════
//  TAROT READING
// ════════════════════════════════════════════════════════════
(function buildCardDeck(){
  const deck=document.getElementById('cardDeck');
  if(!deck) return;
  for(let i=0;i<8;i++){
    const card=document.createElement('div');
    card.className='deck-card';
    card.style.transform=`rotate(${(i-3.5)*4}deg) translateY(${Math.abs(i-3.5)*3}px)`;
    card.innerHTML='✦';
    deck.appendChild(card);
  }
})();

(function(){
  const btn=document.getElementById('tarotBtn');
  if(!btn) return;
  btn.addEventListener('click',function(){
    const q=document.getElementById('tarotQ').value.trim()||'What does the universe want me to know?';
    this.textContent='Drawing cards...'; this.disabled=true;
    setTimeout(()=>{
      drawTarot(q);
      this.textContent='Draw 3 Cards'; this.disabled=false;
    },1500);
  });
})();

function drawTarot(question){
  const shuffled=[...TAROT_CARDS].sort(()=>Math.random()-0.5);
  const drawn=shuffled.slice(0,3);
  const positions=['Past','Present','Future'];
  document.getElementById('tarotCards').innerHTML=drawn.map((c,i)=>`
    <div class="tarot-card-item">
      <div class="tarot-pos">${positions[i]}</div>
      <div class="tarot-card-face">
        <div class="tarot-card-num">${c.num}</div>
        <div class="tarot-card-emoji">${c.emoji}</div>
        <div class="tarot-card-name">${c.name}</div>
      </div>
      <div class="tarot-card-meaning">${c.meaning}</div>
    </div>`).join('');
  const reading=TAROT_READINGS[Math.floor(Math.random()*TAROT_READINGS.length)];
  document.getElementById('tarotReading').innerHTML=`
    <p style="color:var(--teal);font-size:.85rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px">Reading for: "${question}"</p>
    <p style="line-height:1.8">${reading}</p>
    <p style="margin-top:12px;color:var(--gold)">Your power cards: <strong>${drawn.map(c=>c.name).join(' · ')}</strong></p>`;
  document.getElementById('tarotResult').style.display='block';
  document.getElementById('tarotResult').scrollIntoView({behavior:'smooth'});
}

// ════════════════════════════════════════════════════════════
//  TESTIMONIALS
// ════════════════════════════════════════════════════════════
(function buildTestimonials(){
  const track=document.getElementById('testiTrack');
  if(!track) return;
  TESTIMONIALS.forEach(t=>{
    const card=document.createElement('div');
    card.className='testi-card';
    card.innerHTML=`
      <div class="testi-stars">${'★'.repeat(t.stars)}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.emoji}</div>
        <div><div class="testi-name">${t.name}</div><div class="testi-loc">${t.loc}</div><div class="testi-sign">${t.sign}</div></div>
      </div>`;
    track.appendChild(card);
  });
})();

// ════════════════════════════════════════════════════════════
//  ✦ JYOTIKA AI — KNOWLEDGE ENGINE
// ════════════════════════════════════════════════════════════
const JKB={
  greet(){return`<h4>Namaste! I am Jyotika ✦</h4>
<p>Your personal AI master teacher of the esoteric arts. I have deep expertise in:</p>
<div class="highlight-box">🪷 <strong>Vedic Jyotish</strong> — BPHS, Saravali, Phaladeepika<br/>⭐ <strong>Hellenistic Astrology</strong> — Ptolemy, Vettius Valens<br/>🔢 <strong>Numerology</strong> — Pythagorean, Chaldean, Kabbalistic<br/>🃏 <strong>Tarot & Divination</strong> — I Ching, Palmistry</div>
<p>Use the quick topics above, or ask me anything. Try the <strong>🔢</strong> button for your numerology profile!</p>`},

  foundations(){return`<h4>Phase 0 — Cosmic Foundations</h4>
<p>Before studying any tradition, we must understand the sky itself.</p>
<div class="gold-box"><strong>The Ecliptic</strong> — The apparent path of the Sun against fixed stars. The zodiac is a 360° band divided into 12 equal 30° segments along the ecliptic.</div>
<h5>The Two Zodiacs</h5>
<ul><li><strong>Tropical (Western)</strong> — Anchored to the Spring Equinox. Moves with Earth's seasons.</li>
<li><strong>Sidereal (Vedic)</strong> — Anchored to fixed stars. Uses the Lahiri ayanamsa (~23.15° in 2026).</li></ul>
<div class="teal-box">Key terms: Ecliptic · Celestial equator · Precession of equinoxes · Ayanamsa · Houses · Aspects</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Draw the ecliptic. Mark the 4 cardinal points: Aries 0°, Cancer 0°, Libra 0°, Capricorn 0°. These Ingress degrees are the most powerful of all.</div>`},

  vedic(){return`<h4>Vedic Astrology (Jyotish)</h4>
<p>Jyotish means "science of light." Codified ~1500–500 BCE in the Vedas.</p>
<h5>Nava Grahas — The 9 Planets</h5>
<div class="highlight-box">☉ <strong>Surya</strong> (Sun) — Soul, authority, father<br/>☽ <strong>Chandra</strong> (Moon) — Mind, emotions, mother<br/>♂ <strong>Mangal</strong> (Mars) — Energy, courage, siblings<br/>☿ <strong>Budha</strong> (Mercury) — Intelligence, speech, business<br/>♃ <strong>Guru</strong> (Jupiter) — Wisdom, grace, children<br/>♀ <strong>Shukra</strong> (Venus) — Love, beauty, vehicles<br/>♄ <strong>Shani</strong> (Saturn) — Karma, discipline, longevity<br/>☊ <strong>Rahu</strong> (N.Node) — Obsession, illusion, foreigners<br/>☋ <strong>Ketu</strong> (S.Node) — Liberation, past lives, spirituality</div>
<h5>Planetary Dignities</h5>
<ul><li><strong>Exaltation (Uchcha):</strong> Sun♈ Moon♉ Mars♑ Mercury♍ Jupiter♋ Venus♓ Saturn♎</li>
<li><strong>Debilitation (Neecha):</strong> Opposite sign — weakest placement</li></ul>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Memorize planetary rulerships. Sun rules Leo, Moon rules Cancer. Then learn exaltation signs — the foundation of all dignity analysis.</div>`},

  dasha(){return`<h4>Vimshottari Dasha — The Vedic Time-Lord System</h4>
<p>The most important predictive tool in Vedic astrology. A 120-year cycle based on the natal Moon's Nakshatra.</p>
<div class="highlight-box">☽ Moon <strong>10 yrs</strong> · ♂ Mars <strong>7 yrs</strong> · ☊ Rahu <strong>18 yrs</strong><br/>♃ Jupiter <strong>16 yrs</strong> · ♄ Saturn <strong>19 yrs</strong> · ☿ Mercury <strong>17 yrs</strong><br/>☋ Ketu <strong>7 yrs</strong> · ♀ Venus <strong>20 yrs</strong> · ☉ Sun <strong>6 yrs</strong></div>
<h5>How to Calculate</h5>
<ul><li>Find your natal Moon's Nakshatra (27 lunar mansions)</li>
<li>That Nakshatra's ruling planet = your first Dasha</li>
<li>Remaining degrees determine how much of the first Dasha has elapsed</li></ul>
<div class="gold-box"><strong>Antardasha</strong> — Each Mahadasha divides into 9 sub-periods. These subdivide further into Pratyantar → Sookshma → Prana levels.</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Find your Moon's Nakshatra at astro.com. Identify your current Mahadasha and observe how that planet's themes are active in your life right now.</div>`},

  nakshatra(){return`<h4>Nakshatras — 27 Lunar Mansions</h4>
<p>The Moon travels through all 27 in ~27.3 days. Each covers 13°20' of the zodiac.</p>
<div class="highlight-box" style="font-size:.74rem;line-height:1.9">
1 <strong>Ashwini</strong> ♈0°| 2 <strong>Bharani</strong> ♈13°20'| 3 <strong>Krittika</strong> ♈26°40'<br/>
4 <strong>Rohini</strong> ♉10°| 5 <strong>Mrigashira</strong> ♉23°20'| 6 <strong>Ardra</strong> ♊6°40'<br/>
7 <strong>Punarvasu</strong> ♊20°| 8 <strong>Pushya</strong> ♋3°20'| 9 <strong>Ashlesha</strong> ♋16°40'<br/>
10 <strong>Magha</strong> ♌0°| 11 <strong>P.Phalguni</strong> ♌13°20'| 12 <strong>U.Phalguni</strong> ♌26°40'<br/>
13 <strong>Hasta</strong> ♍10°| 14 <strong>Chitra</strong> ♍23°20'| 15 <strong>Swati</strong> ♎6°40'<br/>
16 <strong>Vishakha</strong> ♎20°| 17 <strong>Anuradha</strong> ♏3°20'| 18 <strong>Jyeshtha</strong> ♏16°40'<br/>
19 <strong>Mula</strong> ♐0°| 20 <strong>P.Ashadha</strong> ♐13°20'| 21 <strong>U.Ashadha</strong> ♐26°40'<br/>
22 <strong>Shravana</strong> ♑10°| 23 <strong>Dhanishtha</strong> ♑23°20'| 24 <strong>Shatabhisha</strong> ♒6°40'<br/>
25 <strong>P.Bhadrapada</strong> ♒20°| 26 <strong>U.Bhadrapada</strong> ♓3°20'| 27 <strong>Revati</strong> ♓16°40'</div>
<div class="teal-box"><strong>Pada system:</strong> Each Nakshatra has 4 padas (3°20' each). Each pada links to a Navamsa sign, refining interpretation.</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Find your Sun, Moon, and Ascendant Nakshatras. These three reveal your vitality, emotional world, and life approach.</div>`},

  yoga(){return`<h4>Yogas — Planetary Combinations</h4>
<h5>Raja Yogas — Power & Success</h5>
<div class="gold-box"><strong>Classical Raja Yoga:</strong> Conjunction, mutual aspect, or exchange between lords of Kendras (1,4,7,10) and Trikonas (1,5,9). The 9th + 10th lord combination is the most powerful.</div>
<h5>Famous Yogas</h5>
<div class="highlight-box">
<strong>Gaja Kesari:</strong> Jupiter in Kendra from Moon → wisdom, reputation<br/>
<strong>Viparita Raja:</strong> 6th/8th/12th lords in each other's houses → rise from adversity<br/>
<strong>Parivartana:</strong> Two planets in each other's signs → mutual strength<br/>
<strong>Neecha Bhanga:</strong> Debilitated planet cancelled → hidden strength<br/>
<strong>Budha-Aditya:</strong> Sun+Mercury conjunction → sharp intellect, recognition
</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Find the lords of your 9th and 10th houses. If connected (conjunct, aspecting, or in exchange), you have a Raja Yoga affecting career and fortune.</div>`},

  western(){return`<h4>Western Astrology</h4>
<div class="highlight-box">☉ <strong>Sun</strong> — Identity | ☽ <strong>Moon</strong> — Emotions | ☿ <strong>Mercury</strong> — Mind<br/>♀ <strong>Venus</strong> — Love | ♂ <strong>Mars</strong> — Drive | ♃ <strong>Jupiter</strong> — Expansion<br/>♄ <strong>Saturn</strong> — Karma | ⛢ <strong>Uranus</strong> — Revolution | ♆ <strong>Neptune</strong> — Spirituality | ♇ <strong>Pluto</strong> — Transformation</div>
<h5>Key Aspects</h5>
<div class="gold-box">Conjunction 0° — Fusion · Sextile 60° — Opportunity · Square 90° — Tension/growth · Trine 120° — Harmony · Opposition 180° — Polarity/awareness</div>
<h5>Differences from Vedic</h5>
<ul><li>Uses tropical zodiac (seasonal) vs. sidereal</li><li>Includes Uranus, Neptune, Pluto</li><li>Emphasises psychological interpretation</li></ul>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Get your Western chart at astro.com. Identify your Sun, Moon, Rising. Find which houses your personal planets occupy — these areas are most activated.</div>`},

  hellenistic(){return`<h4>Hellenistic Astrology — The Classical Western Tradition</h4>
<p>The original form of Western astrology (200 BCE–600 CE). Key authors: <strong>Ptolemy</strong> (Tetrabiblos), <strong>Vettius Valens</strong> (Anthology), <strong>Rhetorius</strong>.</p>
<div class="gold-box">
<strong>Sect</strong> — Day chart (Sun above horizon) or night chart. Sun, Jupiter, Saturn prefer day. Moon, Venus, Mars prefer night.<br/><br/>
<strong>Lots (Arabic Parts)</strong> — Mathematical points. Lot of Fortune = ASC + Moon − Sun (day). Reveals body, fortune, material life.<br/><br/>
<strong>Annual Profections</strong> — Age ÷ 12, remainder = house activated this year. That house ruler is your Year Lord.
</div>
<div class="teal-box"><strong>Timing systems:</strong> Profections · Zodiacal Releasing · Primary Directions · Solar Returns · Firdaria</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Calculate your Annual Profection: take your age mod 12. House 0=1st, 1=2nd, etc. The ruler of that house becomes your Year Lord — observe its themes now.</div>`},

  synastry(){return`<h4>Synastry & Compatibility</h4>
<h5>Vedic Ashta Kuta (36 Points)</h5>
<div class="highlight-box">
<strong>Varna</strong> (1pt) — Spiritual compatibility<br/>
<strong>Vashya</strong> (2pt) — Influence & control<br/>
<strong>Tara</strong> (3pt) — Star compatibility<br/>
<strong>Yoni</strong> (4pt) — Sexual nature (animal symbols)<br/>
<strong>Gana</strong> (6pt) — Temperament (Deva/Manushya/Rakshasa)<br/>
<strong>Rashi</strong> (7pt) — Moon sign planetary friendship<br/>
<strong>Nadi</strong> (8pt) — Ayurvedic constitution (must not match!)<br/>
<strong>Bhakoot</strong> (7pt) — Moon sign relationship pattern
</div>
<p>Score 18+ acceptable · 28+ excellent · Nadi & Bhakoot can be dealbreakers</p>
<h5>Western Synastry Key Aspects</h5>
<ul><li>Sun–Moon conjunction/trine → natural affinity</li><li>Venus–Mars aspects → romantic attraction</li><li>Saturn contacts → karmic bonds, longevity</li><li>Outer planet overlays → generational themes</li></ul>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Compare Moon signs. Same element = natural resonance. Opposite signs = magnetic but challenging (Full Moon energy).</div>`},

  numerology(){return`<h4>Numerology — The Science of Numbers</h4>
<div class="highlight-box">
<strong>Pythagorean</strong> — Most common. A=1 through I=9, repeated for each letter.<br/>
<strong>Chaldean</strong> — Most accurate spiritually. No letter equals 9 (sacred). Used by Cheiro, K.N.Rao.<br/>
<strong>Kabbalistic</strong> — Based on Hebrew Gematria. Used for name power analysis.
</div>
<h5>The Core Numbers</h5>
<ul>
<li><strong>Life Path</strong> — Birthday reduced. Your soul's purpose and life theme.</li>
<li><strong>Expression</strong> — Full birth name. Your natural talents.</li>
<li><strong>Soul Urge</strong> — Vowels only. What your soul craves.</li>
<li><strong>Personality</strong> — Consonants only. How others perceive you.</li>
<li><strong>Personal Year</strong> — Birth month+day + current year. Your annual theme.</li>
</ul>
<div class="teal-box"><strong>Master Numbers — never reduce:</strong> 11 (Illuminator) · 22 (Master Builder) · 33 (Master Teacher)</div>
<div class="gold-box"><strong>Karmic Debt:</strong> 13 (laziness) · 14 (freedom abuse) · 16 (ego) · 19 (power abuse) — if these appear in your chart, there is karmic work to do.</div>
<div class="practice-prompt">✏️ <strong>Use the 🔢 calculator button above to get your complete numerology profile instantly!</strong></div>`},

  tarotLesson(){return`<h4>Tarot — The 78-Card Mystery System</h4>
<div class="gold-box">
<strong>Major Arcana (22)</strong> — Archetypal forces. 0 (The Fool) → 21 (The World). When they dominate a spread, fate is at work.<br/><br/>
<strong>Minor Arcana (56)</strong> in 4 suits:<br/>
🔥 <strong>Wands</strong> (Fire) — Career, passion, will<br/>
💧 <strong>Cups</strong> (Water) — Emotions, relationships<br/>
🌬️ <strong>Swords</strong> (Air) — Mind, conflict, truth<br/>
🌍 <strong>Pentacles</strong> (Earth) — Money, body, material world
</div>
<h5>Major Arcana + Astrological Links</h5>
<div class="highlight-box" style="font-size:.74rem;line-height:1.85">
0 Fool→Uranus | I Magician→Mercury | II High Priestess→Moon<br/>
III Empress→Venus | IV Emperor→Aries | V Hierophant→Taurus<br/>
VII Chariot→Cancer | VIII Strength→Leo | IX Hermit→Virgo<br/>
X Wheel→Jupiter | XI Justice→Libra | XII Hanged Man→Neptune<br/>
XIII Death→Scorpio | XIV Temperance→Sagittarius | XV Devil→Capricorn<br/>
XVI Tower→Mars | XVII Star→Aquarius | XVIII Moon→Pisces<br/>
XIX Sun→Sun | XX Judgement→Pluto | XXI World→Saturn
</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Draw one card each morning. Don't look up meanings immediately — sit with the imagery first. Record your intuition, then check the book. Compare over time.</div>`},

  iching(){return`<h4>I Ching — The Book of Changes (~3000 BCE)</h4>
<p>64 hexagrams built from combinations of 8 trigrams. The oldest divination system still in use.</p>
<div class="highlight-box">
☰ <strong>Qian</strong> (Heaven) — Creative, leadership<br/>
☷ <strong>Kun</strong> (Earth) — Receptive, nurturing<br/>
☳ <strong>Zhen</strong> (Thunder) — Arousing, shock<br/>
☵ <strong>Kan</strong> (Water) — Danger, depth<br/>
☶ <strong>Gen</strong> (Mountain) — Stillness<br/>
☴ <strong>Xun</strong> (Wind) — Penetrating, gentle<br/>
☲ <strong>Li</strong> (Fire) — Clarity, clinging<br/>
☱ <strong>Dui</strong> (Lake) — Joy, openness
</div>
<h5>Casting Method</h5>
<p>Toss 3 coins 6 times. Heads=3, Tails=2. Each toss sum (6/7/8/9) gives a yin or yang line. A moving line (6 or 9) transforms, giving a second "future" hexagram.</p>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Hold a specific situation in mind. Cast and read the Judgment and Image sections only. Sit with it for 24 hours before seeking further interpretation.</div>`},

  palmistry(){return`<h4>Palmistry — Samudrika Shastra</h4>
<h5>The 4 Hand Types</h5>
<div class="highlight-box">
🔥 <strong>Fire</strong> — Short fingers, long palm → enthusiastic, impulsive<br/>
🌍 <strong>Earth</strong> — Square fingers, square palm → practical, reliable<br/>
🌬️ <strong>Air</strong> — Long fingers, square palm → intellectual, communicative<br/>
💧 <strong>Water</strong> — Long fingers, oval palm → intuitive, creative
</div>
<h5>The Major Lines</h5>
<ul>
<li><strong>Life Line</strong> — Vitality and life changes. Depth matters more than length!</li>
<li><strong>Head Line</strong> — Thinking style. Straight=logical. Curved=creative/intuitive.</li>
<li><strong>Heart Line</strong> — Emotional expression. Curved up=idealistic. Straight=pragmatic.</li>
<li><strong>Fate Line</strong> — Life direction. Strong=focused purpose. Absent=self-created path.</li>
</ul>
<div class="teal-box"><strong>Mounts:</strong> Venus (thumb base)=love capacity · Jupiter (index)=ambition · Saturn=discipline · Apollo=creativity · Mercury=communication</div>
<div class="practice-prompt">✏️ <strong>Practice:</strong> Compare both hands. Non-dominant=what you were born with. Dominant=what you have developed. Compare your Head Lines — has your thinking style evolved?</div>`},

  integration(){return`<h4>Cross-System Integration — The Complete Reading</h4>
<div class="gold-box"><strong>Example convergence:</strong> Saturn transiting 8th house (Western) + Sade Sati (Vedic) + Life Path 8 + Death card in Tarot + Hexagram 29 (Abyss) in I Ching → ALL systems confirm deep transformation and rebirth. High-confidence interpretation.</div>
<h5>Cross-System Correspondences</h5>
<div class="highlight-box">
<strong>Saturn = Number 8 = Death/Judgement Tarot = Kan trigram = Fate Line</strong><br/>All: karma, limitation, time, transformation<br/><br/>
<strong>Jupiter = Number 3 = Wheel of Fortune = Qian = Jupiter Mount</strong><br/>All: expansion, luck, wisdom, abundance<br/><br/>
<strong>Venus = Number 6 = Empress/Lovers = Dui = Venus Mount</strong><br/>All: love, beauty, creativity, relationship
</div>
<h5>Integration Protocol</h5>
<ul><li>1. Identify current Vedic Dasha period (timing)</li><li>2. Check Western transits (activations)</li><li>3. Calculate Personal Year number</li><li>4. Draw a Tarot card for overall energy</li><li>5. Look for convergence — where do all systems agree?</li></ul>
<div class="practice-prompt">✏️ <strong>Practice:</strong> For your current situation: What Dasha are you in? What is your Personal Year? What Tarot card matches that number? Do they tell a coherent story?</div>`},

  unknown(q){return`<p>Fascinating question: <em>"${q}"</em></p>
<p>Let me guide you to the most relevant teaching. Use these quick topics or rephrase your question:</p>
<div class="highlight-box">🪷 Vedic Astrology → type "vedic", "dasha", "nakshatra", "yoga"<br/>⭐ Hellenistic → type "hellenistic", "western", "synastry"<br/>🔢 Numerology → type "numerology" or use 🔢 calculator<br/>🃏 Tarot → type "tarot" or "arcana"<br/>☯️ I Ching → type "i ching" or "hexagram"<br/>✋ Palmistry → type "palm" or "hand reading"<br/>✨ Integration → type "integrate" or "combine"</div>
<p>Or simply continue with a more specific question — I will meet you where you are. 🙏</p>`},
};

function jywGetResponse(input){
  const q=input.toLowerCase();
  if(!q||q.length<2) return JKB.greet();
  if(/hello|hi\b|namaste|start|begin|help|what can/.test(q)) return JKB.greet();
  if(/foundation|zodiac|basic|ecliptic|tropical|sidereal|beginner/.test(q)) return JKB.foundations();
  if(/vedic|jyotish|graha|bhava|lagna|rashi|bphs|parashara|surya|chandra/.test(q)) return JKB.vedic();
  if(/dasha|mahadasha|antardasha|vimshottari|time.lord/.test(q)) return JKB.dasha();
  if(/nakshatra|lunar mansion|pada|rohini|ashwini|pushya/.test(q)) return JKB.nakshatra();
  if(/yoga|raja yoga|dhana|gaja|kesari|neecha|parivartana/.test(q)) return JKB.yoga();
  if(/western|modern astro|uranus|neptune|pluto|psychological/.test(q)) return JKB.western();
  if(/hellenistic|ptolemy|valens|lot |sect |profect/.test(q)) return JKB.hellenistic();
  if(/synastry|compat|partner|kuta|composite/.test(q)) return JKB.synastry();
  if(/numer|life path|expression number|soul urge|pythagorean|chaldean|master number/.test(q)) return JKB.numerology();
  if(/tarot|arcana|wand|cup|sword|pentacle|major card/.test(q)) return JKB.tarotLesson();
  if(/i.ching|iching|hexagram|trigram|book of change/.test(q)) return JKB.iching();
  if(/palm|chiromancy|hand reading|life line|heart line|head line|mount/.test(q)) return JKB.palmistry();
  if(/integrat|synthesi|combine|all system|cross.system|unified reading/.test(q)) return JKB.integration();
  return JKB.unknown(input.substring(0,80));
}

// ════════════════════════════════════════════════════════════
//  NUMEROLOGY ENGINE
// ════════════════════════════════════════════════════════════
const PYTH ={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};
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
  return jReduce(jReduce(d.getMonth()+1)+jReduce(d.getDate())+jReduce([...String(d.getFullYear())].reduce((s,c)=>s+Number(c),0)));
}
function jExpr(name,tbl){return jReduce(name.toUpperCase().replace(/[^A-Z]/g,'').split('').reduce((s,c)=>s+(tbl[c]||0),0));}
function jSoul(name,tbl){return jReduce(name.toUpperCase().replace(/[^A-Z]/g,'').split('').filter(c=>'AEIOU'.includes(c)).reduce((s,c)=>s+(tbl[c]||0),0));}
function jPers(name,tbl){return jReduce(name.toUpperCase().replace(/[^A-Z]/g,'').split('').filter(c=>!'AEIOU'.includes(c)).reduce((s,c)=>s+(tbl[c]||0),0));}
function jPersonalYear(dob,yr){
  const d=new Date(dob);
  return jReduce(jReduce(d.getMonth()+1)+jReduce(d.getDate())+jReduce([...String(yr)].reduce((s,c)=>s+Number(c),0)));
}

const NUM_MEANINGS={
  1:{name:'The Leader',      kw:'Independence · Ambition · Pioneering · Self-reliance'},
  2:{name:'The Diplomat',    kw:'Harmony · Cooperation · Sensitivity · Balance'},
  3:{name:'The Creator',     kw:'Creativity · Expression · Joy · Communication'},
  4:{name:'The Builder',     kw:'Stability · Discipline · Hard work · Foundation'},
  5:{name:'The Adventurer',  kw:'Freedom · Change · Adventure · Versatility'},
  6:{name:'The Nurturer',    kw:'Love · Family · Responsibility · Healing'},
  7:{name:'The Seeker',      kw:'Wisdom · Introspection · Mysticism · Analysis'},
  8:{name:'The Achiever',    kw:'Power · Abundance · Authority · Manifestation'},
  9:{name:'The Humanitarian',kw:'Compassion · Completion · Universal love · Service'},
  11:{name:'The Illuminator',kw:'Intuition · Spiritual insight · Inspiration · Enlightenment'},
  22:{name:'The Master Builder',kw:'Visionary · Transformation · Large-scale achievement · Mastery'},
  33:{name:'The Master Teacher',kw:'Compassionate teaching · Healing · Selfless service · Christ consciousness'},
};
const TAROT_BIRTH={1:'The Magician 🪄',2:'The High Priestess 🌙',3:'The Empress 🌿',4:'The Emperor 👑',5:'The Hierophant ⛪',6:'The Lovers 💕',7:'The Chariot 🏇',8:'Strength 🦁',9:'The Hermit 🕯️',10:'Wheel of Fortune 🎡',11:'Justice ⚖️',12:'The Hanged Man 🙃',13:'Death 💀',14:'Temperance 🌊',15:'The Devil 🔗',16:'The Tower ⚡',17:'The Star ⭐',18:'The Moon 🌕',19:'The Sun ☀️',20:'Judgement 📯',21:'The World 🌍',22:'The Fool 🎭'};

function jywCalcNumerology(){
  const nameEl=document.getElementById('jywNumName');
  const dobEl =document.getElementById('jywNumDob');
  const sysEl =document.getElementById('jywNumSys');
  const yrEl  =document.getElementById('jywNumYear');
  if(!nameEl||!dobEl) return;
  const name=nameEl.value.trim();
  const dob =dobEl.value;
  if(!name||!dob){ alert('Please enter your full name and date of birth.'); return; }
  const tbl=sysEl?.value==='chaldean'?CHALD:PYTH;
  const yr=parseInt(yrEl?.value)||2026;
  const lp=jLifePath(dob);
  const ex=jExpr(name,tbl);
  const su=jSoul(name,tbl);
  const pe=jPers(name,tbl);
  const py=jPersonalYear(dob,yr);
  const bd=jReduce(parseInt(dob.split('-')[2])||1);
  const isMaster=n=>MASTER.includes(n);
  const bc=TAROT_BIRTH[MASTER.includes(lp)?lp:(lp===0?22:lp)]||'The Magician 🪄';
  const yc=TAROT_BIRTH[py]||TAROT_BIRTH[py>22?((py-1)%22)+1:py]||'The Fool 🎭';
  const cards=[
    {v:lp,l:'Life Path', m:NUM_MEANINGS[lp]?.name||''},
    {v:ex,l:'Expression', m:NUM_MEANINGS[ex]?.name||''},
    {v:su,l:'Soul Urge', m:NUM_MEANINGS[su]?.name||''},
    {v:pe,l:'Personality', m:NUM_MEANINGS[pe]?.name||''},
    {v:bd,l:'Birthday', m:''},
    {v:py,l:'Personal Year '+yr, m:NUM_MEANINGS[py]?.name||''},
  ];
  const html=`<h3>✦ ${name}'s Numerology</h3>
<div class="jyw-num-grid">${cards.map(c=>`<div class="jyw-num-card"><div class="jyw-num-val${isMaster(c.v)?' jyw-num-master':''}">${c.v}</div><div class="jyw-num-lbl">${c.l}</div>${c.m?`<div class="jyw-num-mean">${c.m}</div>`:''}</div>`).join('')}</div>
<p><strong>Life Path ${lp}${isMaster(lp)?'★':''}:</strong> ${NUM_MEANINGS[lp]?.name||'Special'} — <small>${NUM_MEANINGS[lp]?.kw||''}</small></p>
<p><strong>Personal Year ${py}:</strong> ${NUM_MEANINGS[py]?.name||''} — <small>${NUM_MEANINGS[py]?.kw||''}</small></p>
<p><strong>🃏 Tarot Birth Card:</strong> ${bc}</p>
<p><strong>🃏 Year Card ${yr}:</strong> ${yc}</p>
${isMaster(lp)?`<p style="color:#40e0c8;font-size:.73rem">★ Master Number ${lp} — carries higher vibrational responsibility.</p>`:''}`;
  const res=document.getElementById('jywNumResult');
  if(res){ res.innerHTML=html; res.style.display='block'; }
}

// ════════════════════════════════════════════════════════════
//  JYOTIKA WIDGET — REFERENCE DATA
// ════════════════════════════════════════════════════════════
const JYW_CHART_REF=[
  {h:'House 1 — Lagna',    b:'Self, body, personality, vitality, early life'},
  {h:'House 2 — Dhana',    b:'Wealth, family, speech, food, accumulated resources'},
  {h:'House 3 — Sahaja',   b:'Siblings, courage, communication, skills, hands'},
  {h:'House 4 — Sukha',    b:'Mother, home, land, happiness, education, emotions'},
  {h:'House 5 — Putra',    b:'Children, creativity, intelligence, past-life merit'},
  {h:'House 6 — Ripu',     b:'Enemies, disease, service, debt, daily work'},
  {h:'House 7 — Kalatra',  b:'Spouse, partnerships, business contracts, desire'},
  {h:'House 8 — Mrityu',   b:'Death, transformation, occult, secrets, longevity'},
  {h:'House 9 — Dharma',   b:'Dharma, father, guru, higher wisdom, fortune'},
  {h:'House 10 — Karma',   b:'Career, status, authority, life direction, fame'},
  {h:'House 11 — Labha',   b:'Gains, income, friends, wishes fulfilled, networks'},
  {h:'House 12 — Vyaya',   b:'Losses, liberation, foreign lands, spirituality'},
];
const JYW_TAROT_REF=[
  {n:'0',e:'🎭',name:'The Fool',         key:'New beginnings · Leap of faith'},
  {n:'I',e:'🪄',name:'The Magician',      key:'Manifestation · Willpower'},
  {n:'II',e:'🌙',name:'High Priestess',   key:'Intuition · Mystery'},
  {n:'III',e:'🌿',name:'The Empress',     key:'Abundance · Nature'},
  {n:'IV',e:'👑',name:'The Emperor',      key:'Authority · Structure'},
  {n:'V',e:'⛪',name:'The Hierophant',    key:'Tradition · Guidance'},
  {n:'VI',e:'💕',name:'The Lovers',       key:'Choice · Union'},
  {n:'VII',e:'🏇',name:'The Chariot',     key:'Victory · Control'},
  {n:'VIII',e:'🦁',name:'Strength',       key:'Courage · Patience'},
  {n:'IX',e:'🕯️',name:'The Hermit',      key:'Solitude · Wisdom'},
  {n:'X',e:'🎡',name:'Wheel of Fortune',  key:'Cycles · Fate'},
  {n:'XI',e:'⚖️',name:'Justice',         key:'Truth · Karma'},
  {n:'XII',e:'🙃',name:'The Hanged Man',  key:'Surrender · New perspective'},
  {n:'XIII',e:'💀',name:'Death',          key:'Transformation · Endings'},
  {n:'XIV',e:'🌊',name:'Temperance',      key:'Balance · Alchemy'},
  {n:'XV',e:'🔗',name:'The Devil',        key:'Shadow · Attachment'},
  {n:'XVI',e:'⚡',name:'The Tower',       key:'Sudden change · Revelation'},
  {n:'XVII',e:'⭐',name:'The Star',       key:'Hope · Renewal'},
  {n:'XVIII',e:'🌕',name:'The Moon',      key:'Illusion · Subconscious'},
  {n:'XIX',e:'☀️',name:'The Sun',        key:'Joy · Success'},
  {n:'XX',e:'📯',name:'Judgement',        key:'Rebirth · Awakening'},
  {n:'XXI',e:'🌍',name:'The World',       key:'Completion · Achievement'},
];

// ════════════════════════════════════════════════════════════
//  JYOTIKA WIDGET — UI ENGINE
// ════════════════════════════════════════════════════════════
let jywOpen    = false;
let jywGreeted = false;

function openJyotikaWidget(presetQ){
  presetQ = presetQ||'';
  const panel  = document.getElementById('jywPanel');
  const toggle = document.getElementById('jywToggle');
  if(!panel||!toggle) return;
  jywOpen = true;
  panel.classList.add('active');
  toggle.classList.add('open');
  if(!jywGreeted){
    jywGreeted=true;
    jywAddMsg('jy','Jyotika',JKB.greet());
  }
  if(presetQ){
    setTimeout(()=>{
      jywAddMsg('user','You',presetQ);
      jywShowTyping(()=> jywAddMsg('jy','Jyotika',jywGetResponse(presetQ)));
    },400);
  } else {
    setTimeout(()=>{
      const msgs=document.getElementById('jywMessages');
      if(msgs) msgs.scrollTop=msgs.scrollHeight;
    },100);
  }
}

function jywAddMsg(role,label,html){
  const msgs=document.getElementById('jywMessages');
  if(!msgs) return;
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
  // After first user message hide quick bar
  if(role==='user'){
    const qb=document.getElementById('jywQuickBar');
    if(qb) qb.style.display='none';
  }
}

function jywShowTyping(cb){
  const msgs=document.getElementById('jywMessages');
  if(!msgs) return;
  const wrap=document.createElement('div');
  wrap.className='jyw-msg jy jyw-typing-wrap';
  wrap.innerHTML=`<div class="jyw-msg-av">🔮</div><div class="jyw-typing"><div class="jyw-ty-dot"></div><div class="jyw-ty-dot"></div><div class="jyw-ty-dot"></div><span style="margin-left:5px;font-size:.72rem">Jyotika is thinking...</span></div>`;
  msgs.appendChild(wrap);
  msgs.scrollTop=msgs.scrollHeight;
  setTimeout(()=>{ if(cb) cb(); }, 1800);
}

function jywSend(){
  const inp=document.getElementById('jywInput');
  if(!inp) return;
  const q=inp.value.trim();
  if(!q) return;
  inp.value=''; inp.style.height='auto';
  jywAddMsg('user','You',q);
  jywShowTyping(()=> jywAddMsg('jy','Jyotika',jywGetResponse(q)));
}

function jywTogglePanel(panelId){
  ['jywNumPanel','jywChartPanel','jywTarotPanel'].forEach(id=>{
    const el=document.getElementById(id);
    if(!el) return;
    el.style.display=(id===panelId && el.style.display==='none')?'block':'none';
  });
}

function jywBuildChartRef(){
  const el=document.getElementById('jywChartRef');
  if(!el||el.innerHTML) return;
  el.innerHTML=JYW_CHART_REF.map(c=>`<div class="jyw-cr-item"><div class="jyw-cr-head">${c.h}</div><div class="jyw-cr-body">${c.b}</div></div>`).join('');
}

function jywBuildTarotRef(){
  const el=document.getElementById('jywTarotRef');
  if(!el||el.innerHTML) return;
  el.innerHTML=`<div class="jyw-tr-grid">${JYW_TAROT_REF.map(c=>`<div class="jyw-tr-card"><div class="jyw-tr-num">${c.n}</div><div class="jyw-tr-emoji">${c.e}</div><div class="jyw-tr-name">${c.name}</div><div class="jyw-tr-key">${c.key}</div></div>`).join('')}</div>`;
}

// ── INIT ALL JYOTIKA WIDGET EVENTS ───────────────────────────
(function initJyotikaWidget(){
  // Toggle open/close
  const toggle  = document.getElementById('jywToggle');
  const closeBtn= document.getElementById('jywClose');
  const sendBtn = document.getElementById('jywSend');
  const clearBtn= document.getElementById('jywClear');
  const input   = document.getElementById('jywInput');
  const btnNum  = document.getElementById('jywBtnNum');
  const btnChart= document.getElementById('jywBtnChart');
  const btnTarot= document.getElementById('jywBtnTarot');
  const calcBtn = document.getElementById('jywCalcBtn');
  const navBtn  = document.getElementById('navJyotikaBtn');
  const heroBtn = document.getElementById('heroJyotikaBtn');

  if(toggle) toggle.addEventListener('click',()=> openJyotikaWidget());

  if(closeBtn) closeBtn.addEventListener('click',()=>{
    document.getElementById('jywPanel')?.classList.remove('active');
    toggle?.classList.remove('open');
    jywOpen=false;
  });

  if(sendBtn) sendBtn.addEventListener('click', jywSend);

  if(input){
    input.addEventListener('keydown',e=>{
      if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); jywSend(); }
    });
    input.addEventListener('input',()=>{
      input.style.height='auto';
      input.style.height=Math.min(input.scrollHeight,100)+'px';
    });
  }

  if(clearBtn) clearBtn.addEventListener('click',()=>{
    const msgs=document.getElementById('jywMessages');
    if(msgs) msgs.innerHTML='';
    jywGreeted=false;
    const qb=document.getElementById('jywQuickBar');
    if(qb) qb.style.display='flex';
    jywAddMsg('jy','Jyotika',JKB.greet());
    jywGreeted=true;
  });

  // Tool panel buttons
  if(btnNum) btnNum.addEventListener('click',()=>{ jywTogglePanel('jywNumPanel'); });
  if(btnChart) btnChart.addEventListener('click',()=>{ jywTogglePanel('jywChartPanel'); jywBuildChartRef(); });
  if(btnTarot) btnTarot.addEventListener('click',()=>{ jywTogglePanel('jywTarotPanel'); jywBuildTarotRef(); });

  // Numerology calculate
  if(calcBtn) calcBtn.addEventListener('click', jywCalcNumerology);

  // Tool panel close buttons
  document.querySelectorAll('.jyw-tp-close').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const pid=btn.getAttribute('data-panel');
      const el=document.getElementById(pid);
      if(el) el.style.display='none';
    });
  });

  // Quick topic pills
  document.querySelectorAll('.jyw-quick').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const q=btn.getAttribute('data-q');
      if(!q) return;
      if(!jywOpen) openJyotikaWidget(q);
      else{
        jywAddMsg('user','You',q);
        jywShowTyping(()=> jywAddMsg('jy','Jyotika',jywGetResponse(q)));
      }
    });
  });

  // Nav & Hero buttons
  if(navBtn)  navBtn.addEventListener('click',  ()=> openJyotikaWidget());
  if(heroBtn) heroBtn.addEventListener('click', ()=> openJyotikaWidget());

  // Jyotika feature section cards (onclick attr backup)
  window.openJyotikaWidget = openJyotikaWidget;
})();
