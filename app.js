// ═══════════════════════════════════════
//  AstroVision AI – app.js
// ═══════════════════════════════════════

// ── DATA ────────────────────────────────
const SIGNS = [
  {name:'Aries',emoji:'♈',sym:'♈',dates:'Mar 21 – Apr 19',el:'Fire',ruler:'Mars',stone:'Diamond',color:'Red',compat:'Leo'},
  {name:'Taurus',emoji:'♉',sym:'♉',dates:'Apr 20 – May 20',el:'Earth',ruler:'Venus',stone:'Emerald',color:'Green',compat:'Virgo'},
  {name:'Gemini',emoji:'♊',sym:'♊',dates:'May 21 – Jun 20',el:'Air',ruler:'Mercury',stone:'Agate',color:'Yellow',compat:'Libra'},
  {name:'Cancer',emoji:'♋',sym:'♋',dates:'Jun 21 – Jul 22',el:'Water',ruler:'Moon',stone:'Pearl',color:'Silver',compat:'Scorpio'},
  {name:'Leo',emoji:'♌',sym:'♌',dates:'Jul 23 – Aug 22',el:'Fire',ruler:'Sun',stone:'Ruby',color:'Gold',compat:'Sagittarius'},
  {name:'Virgo',emoji:'♍',sym:'♍',dates:'Aug 23 – Sep 22',el:'Earth',ruler:'Mercury',stone:'Sapphire',color:'Navy',compat:'Capricorn'},
  {name:'Libra',emoji:'♎',sym:'♎',dates:'Sep 23 – Oct 22',el:'Air',ruler:'Venus',stone:'Opal',color:'Pink',compat:'Aquarius'},
  {name:'Scorpio',emoji:'♏',sym:'♏',dates:'Oct 23 – Nov 21',el:'Water',ruler:'Pluto',stone:'Topaz',color:'Dark Red',compat:'Pisces'},
  {name:'Sagittarius',emoji:'♐',sym:'♐',dates:'Nov 22 – Dec 21',el:'Fire',ruler:'Jupiter',stone:'Turquoise',color:'Purple',compat:'Aries'},
  {name:'Capricorn',emoji:'♑',sym:'♑',dates:'Dec 22 – Jan 19',el:'Earth',ruler:'Saturn',stone:'Garnet',color:'Brown',compat:'Taurus'},
  {name:'Aquarius',emoji:'♒',sym:'♒',dates:'Jan 20 – Feb 18',el:'Air',ruler:'Uranus',stone:'Amethyst',color:'Blue',compat:'Gemini'},
  {name:'Pisces',emoji:'♓',sym:'♓',dates:'Feb 19 – Mar 20',el:'Water',ruler:'Neptune',stone:'Aquamarine',color:'Sea Green',compat:'Cancer'},
];

const PLANETS = ['☉ Sun','☽ Moon','☿ Mercury','♀ Venus','♂ Mars','♃ Jupiter','♄ Saturn','⛢ Uranus','♆ Neptune','♇ Pluto'];

const READINGS = {
  today:[
    "The cosmos align in your favour today. Jupiter's expansive energy opens doors you thought were closed. Trust your instincts in professional matters — a bold decision made before noon brings positive returns. Romantically, Venus encourages you to express what's in your heart. An unexpected conversation late in the day could change your perspective entirely.",
    "Mercury's sharp mind merges with lunar intuition, gifting you with extraordinary clarity. This is an ideal day for negotiations, contracts, and important communications. Your creativity is at a peak — channel it through writing, art, or meaningful conversation. Evening brings warmth and connection with someone who truly sees your soul.",
    "Saturn's discipline and Mars's drive form a powerful alliance in your chart today. Push through any resistance — the effort you invest now creates remarkable long-term results. Financially, a careful review of investments is favoured. In love, patience transforms into passion. The stars reward those who persist.",
    "The Moon illuminates your emotional landscape, bringing buried feelings to the surface. Rather than suppress them, let these emotions guide you toward authentic choices. A creative project blooms with unexpected beauty. Spiritually, this is a profound day for meditation and inner work. Trust the process.",
  ],
  week:[
    "This week marks the beginning of a powerful three-week cosmic window where your manifestation abilities are amplified tenfold. Venus transits your house of abundance, drawing financial opportunity and romantic possibility simultaneously. Mid-week, a surprise revelation reshapes your plans — but in a deeply positive way. By Friday, you'll feel a renewed sense of purpose.",
    "The planetary stellium forming in your chart this week signals transformation. Old patterns dissolve as new, more aligned pathways reveal themselves. You may feel called to make a significant change — trust that the universe has already laid the foundation. Weekend brings celebration and the warmth of genuine community.",
    "Career matters dominate the first half of the week as Mars energises your ambition. A long-awaited opportunity arrives — be ready to act swiftly yet thoughtfully. The second half shifts toward relationships and self-care. Someone from your past may reappear with important news. Your intuition is your greatest compass this week.",
  ],
  month:[
    "This month's solar energy amplifies your natural gifts and draws recognition from unexpected sources. A three-phase journey unfolds: weeks one and two are for planting seeds of intention; week three brings acceleration and visible progress; week four consolidates your gains. A financial windfall or promotion is strongly indicated. In love, authenticity creates the deepest bonds.",
    "Jupiter's month-long transit through your house of wisdom brings profound insights and learning opportunities. You may feel drawn to travel, study, or spiritual exploration. Career growth comes through expanding your knowledge base. Relationships deepen as you share your evolving worldview. By month's end, you stand at a meaningful threshold of personal evolution.",
  ],
  year:[
    "2026 is your year of remarkable transformation and awakening. The Saturn-Uranus trine that dominates the year's first half dismantles outdated structures and replaces them with aligned, purposeful foundations. Career elevation arrives between March and June. A significant romantic development is foreseen around August. The year's final quarter brings spiritual clarity and a profound sense of having arrived at your true path.",
    "The year 2026 carries the vibration of completion and new beginnings. Long-standing challenges find resolution as Neptune brings clarity to confusion. Financial matters stabilise and improve significantly post-April. Your creative and spiritual gifts reach their fullest expression. A key relationship — whether new or deepened — becomes a cornerstone of your joy and growth.",
  ],
};

const TAROT_CARDS = [
  {name:'The Star',emoji:'⭐',meaning:'Hope, inspiration, serenity, renewed faith'},
  {name:'The Moon',emoji:'🌙',meaning:'Intuition, illusion, fear, the unconscious'},
  {name:'The Sun',emoji:'☀️',meaning:'Joy, success, positivity, vitality'},
  {name:'The World',emoji:'🌍',meaning:'Completion, integration, accomplishment'},
  {name:'The Lovers',emoji:'♥️',meaning:'Union, duality, choices in love'},
  {name:'The Emperor',emoji:'👑',meaning:'Authority, structure, stability'},
  {name:'The High Priestess',emoji:'🔮',meaning:'Intuition, mystery, inner knowing'},
  {name:'Wheel of Fortune',emoji:'🎡',meaning:'Cycles, fate, turning points'},
  {name:'The Hermit',emoji:'🕯️',meaning:'Introspection, solitude, inner guidance'},
  {name:'Judgement',emoji:'📯',meaning:'Reflection, reckoning, awakening'},
  {name:'The Tower',emoji:'⚡',meaning:'Sudden change, upheaval, revelation'},
  {name:'Strength',emoji:'🦁',meaning:'Courage, patience, inner power'},
  {name:'The Magician',emoji:'✨',meaning:'Manifestation, willpower, skill'},
  {name:'The Fool',emoji:'🌀',meaning:'New beginnings, spontaneity, free spirit'},
  {name:'Death',emoji:'🌹',meaning:'Transformation, endings, transition'},
  {name:'Temperance',emoji:'⚖️',meaning:'Balance, moderation, patience'},
  {name:'The Chariot',emoji:'🏆',meaning:'Control, willpower, victory'},
  {name:'The Hierophant',emoji:'📿',meaning:'Tradition, spirituality, conformity'},
  {name:'Justice',emoji:'⚖️',meaning:'Fairness, truth, cause and effect'},
  {name:'The Devil',emoji:'🔗',meaning:'Bondage, materialism, shadow self'},
];

const TESTIMONIALS = [
  {name:'Priya S.',loc:'Bengaluru',sign:'Scorpio',emoji:'♏',text:'The AI birth chart reading was uncannily accurate — it described my personality and current life challenges perfectly. This has become my daily ritual.',stars:5},
  {name:'Rohan M.',loc:'Mumbai',sign:'Leo',emoji:'♌',text:"I was sceptical, but the compatibility analysis between me and my partner was spot on. It even identified the exact friction points we'd been struggling with.",stars:5},
  {name:'Anita K.',loc:'Delhi',sign:'Libra',emoji:'♎',text:'The tarot readings are so accurate and beautifully presented. The AI interpretation gave me clarity I was desperately seeking. Absolutely brilliant.',stars:5},
  {name:'Vivek R.',loc:'Pune',sign:'Capricorn',emoji:'♑',text:'The future predictions for my career were remarkably precise. Two major events it predicted have already come to pass. I check this every morning.',stars:5},
  {name:'Meera T.',loc:'Chennai',sign:'Pisces',emoji:'♓',text:'AstroVision AI gave me a detailed birth chart with planetary positions and houses that my professional astrologer confirmed was accurate. Impressive!',stars:5},
  {name:'Arjun N.',loc:'Hyderabad',sign:'Aries',emoji:'♈',text:"The daily horoscope readings are insightful and uplifting. I love the lucky color and number features — they've made a real difference in my routine.",stars:4},
  {name:'Sunita P.',loc:'Jaipur',sign:'Taurus',emoji:'♉',text:'I used the compatibility tool for my marriage decision. The in-depth synastry analysis was incredibly helpful and saved me from making a rushed choice.',stars:5},
  {name:'Karan B.',loc:'Kolkata',sign:'Gemini',emoji:'♊',text:'The spiritual remedies section is a hidden gem. The personalised mantras and gemstone recommendations have brought a sense of peace I had lost.',stars:5},
];

// ── STARFIELD ────────────────────────────
(function initStars(){
  const c=document.getElementById('stars'),ctx=c.getContext('2d');
  let W,H,stars=[];
  function resize(){W=c.width=innerWidth;H=c.height=innerHeight;}
  function mkStars(){stars=[];for(let i=0;i<220;i++)stars.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4,o:Math.random(),s:Math.random()*.003+.001});}
  function draw(){
    ctx.clearRect(0,0,W,H);
    stars.forEach(s=>{
      s.o+=s.s;if(s.o>1||s.o<0)s.s*=-1;
      ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(200,180,255,${s.o})`;ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize();mkStars();draw();
  window.addEventListener('resize',()=>{resize();mkStars();});
})();

// ── NAV SCROLL ───────────────────────────
window.addEventListener('scroll',()=>{
  document.getElementById('nav').style.background=scrollY>50?'rgba(6,4,15,.97)':'rgba(6,4,15,.85)';
});

// ── HERO CHART ANIMATION ─────────────────
(function buildHeroChart(){
  const ring=document.getElementById('zodiacRingAnim');
  SIGNS.forEach((s,i)=>{
    const el=document.createElement('div');
    el.className='z-sym';
    const angle=(i/12)*360;
    const r=170;
    const rad=angle*(Math.PI/180);
    el.style.cssText=`position:absolute;left:calc(50% + ${Math.cos(rad)*r}px);top:calc(50% + ${Math.sin(rad)*r}px);transform:translate(-50%,-50%);font-size:1.1rem;color:hsl(${i*30},70%,65%);`;
    el.textContent=s.sym;
    ring.appendChild(el);
  });
  // Orbiting planet dots
  const chart=document.querySelector('.hero-chart');
  const colors=['#f0c060','#9b6dff','#40e0c8','#ff6b9d','#ff9060'];
  colors.forEach((col,i)=>{
    const dot=document.createElement('div');
    dot.style.cssText=`position:absolute;width:10px;height:10px;border-radius:50%;background:${col};box-shadow:0 0 10px ${col};`;
    chart.appendChild(dot);
    let angle=i*72;
    const radius=130+i*15;
    (function animDot(){
      angle+=.4;
      const rad=angle*(Math.PI/180);
      dot.style.left=`calc(50% + ${Math.cos(rad)*radius}px)`;
      dot.style.top=`calc(50% + ${Math.sin(rad)*radius}px)`;
      dot.style.transform='translate(-50%,-50%)';
      requestAnimationFrame(animDot);
    })();
  });
})();

// ── POPULATE SIGN SELECTS ────────────────
function populateSignSelects(){
  ['c1sign','c2sign','pSign'].forEach(id=>{
    const el=document.getElementById(id);
    if(!el)return;
    SIGNS.forEach(s=>{
      const o=document.createElement('option');
      o.value=s.name;o.textContent=s.emoji+' '+s.name;
      el.appendChild(o);
    });
  });
}
populateSignSelects();

// ── ZODIAC GRID ──────────────────────────
(function buildZodiacGrid(){
  const grid=document.getElementById('zodiacGrid');
  SIGNS.forEach((s,i)=>{
    const card=document.createElement('div');
    card.className='z-card';
    card.innerHTML=`<span class="z-emoji">${s.emoji}</span><span class="z-name">${s.name}</span>`;
    card.onclick=()=>showHoroscope(i,card);
    grid.appendChild(card);
  });
})();

// ── HOROSCOPE PANEL ──────────────────────
let currentTab='today';
function showHoroscope(idx,card){
  document.querySelectorAll('.z-card').forEach(c=>c.classList.remove('active'));
  card.classList.add('active');
  const s=SIGNS[idx];
  document.getElementById('horoIcon').textContent=s.emoji;
  document.getElementById('horoName').textContent=s.name;
  document.getElementById('horoDates').textContent=s.dates+' · '+s.el+' · Ruled by '+s.ruler;
  const panel=document.getElementById('horoPanel');
  panel.style.display='block';
  panel.scrollIntoView({behavior:'smooth',block:'nearest'});
  loadHoroReading(s,currentTab);
}
document.getElementById('horoClose').onclick=()=>{
  document.getElementById('horoPanel').style.display='none';
  document.querySelectorAll('.z-card').forEach(c=>c.classList.remove('active'));
};
document.querySelectorAll('.tab').forEach(btn=>{
  btn.onclick=function(){
    document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
    this.classList.add('active');
    currentTab=this.dataset.tab;
    const idx=SIGNS.findIndex(s=>s.name===document.getElementById('horoName').textContent);
    if(idx>=0)loadHoroReading(SIGNS[idx],currentTab);
  };
});
function loadHoroReading(s,tab){
  const typing=document.getElementById('horoTyping');
  const result=document.getElementById('horoResult');
  typing.style.display='flex';result.style.display='none';
  setTimeout(()=>{
    const pool=READINGS[tab]||READINGS.today;
    const text=pool[Math.floor(Math.random()*pool.length)];
    document.getElementById('horoText').textContent=text;
    const love=55+Math.floor(Math.random()*40);
    const career=50+Math.floor(Math.random()*45);
    const health=60+Math.floor(Math.random()*35);
    const luck=45+Math.floor(Math.random()*50);
    document.getElementById('bLove').style.width=love+'%';
    document.getElementById('bCareer').style.width=career+'%';
    document.getElementById('bHealth').style.width=health+'%';
    document.getElementById('bLuck').style.width=luck+'%';
    document.getElementById('sLove').textContent=love+'%';
    document.getElementById('sCareer').textContent=career+'%';
    document.getElementById('sHealth').textContent=health+'%';
    document.getElementById('sLuck').textContent=luck+'%';
    const nums=[3,6,7,9,11,18,21,33,42,77];
    document.getElementById('lColor').textContent=s.color;
    document.getElementById('lNum').textContent=nums[Math.floor(Math.random()*nums.length)];
    document.getElementById('lStone').textContent=s.stone;
    document.getElementById('lMatch').textContent=s.compat;
    typing.style.display='none';result.style.display='block';
  },1800);
}

// ── BIRTH CHART GENERATOR ────────────────
document.getElementById('genChartBtn').onclick=function(){
  const name=document.getElementById('cName').value.trim();
  const date=document.getElementById('cDate').value;
  const time=document.getElementById('cTime').value;
  const place=document.getElementById('cPlace').value.trim();
  if(!name||!date){alert('Please enter your name and date of birth.');return;}
  this.textContent='✦ Generating...';this.disabled=true;
  setTimeout(()=>{
    generateBirthChart(name,date,time,place);
    this.textContent='✦ Generate Birth Chart';this.disabled=false;
  },2000);
};
document.getElementById('chartBack').onclick=()=>{
  document.getElementById('chartForm').style.display='block';
  document.getElementById('chartResult').style.display='none';
};
function generateBirthChart(name,date,time,place){
  const dob=new Date(date);
  const month=dob.getMonth();
  const day=dob.getDate();
  // Determine sun sign
  const sunIdx=getSunSign(month,day);
  const sun=SIGNS[sunIdx];
  const moonIdx=(sunIdx+4)%12;
  const risingIdx=(sunIdx+8)%12;
  const mercury=(sunIdx+1)%12;
  const venus=(sunIdx+2)%12;
  const mars=(sunIdx+7)%12;
  document.getElementById('chartName').textContent=name+"'s Natal Chart";
  document.getElementById('chartBadges').innerHTML=
    `<span class="chart-badge">☉ ${sun.name}</span>
     <span class="chart-badge">☽ ${SIGNS[moonIdx].name}</span>
     <span class="chart-badge">↑ ${SIGNS[risingIdx].name} Rising</span>
     <span class="chart-badge">${sun.el} Sign</span>`;
  // Draw canvas chart
  drawBirthChartCanvas(sunIdx,moonIdx,risingIdx);
  // Planet list
  const planetData=[
    {name:'☉ Sun',sign:sun.name,house:'1st'},
    {name:'☽ Moon',sign:SIGNS[moonIdx].name,house:'4th'},
    {name:'↑ Rising',sign:SIGNS[risingIdx].name,house:'1st'},
    {name:'☿ Mercury',sign:SIGNS[mercury].name,house:'2nd'},
    {name:'♀ Venus',sign:SIGNS[venus].name,house:'5th'},
    {name:'♂ Mars',sign:SIGNS[mars].name,house:'7th'},
    {name:'♃ Jupiter',sign:SIGNS[(sunIdx+3)%12].name,house:'9th'},
    {name:'♄ Saturn',sign:SIGNS[(sunIdx+6)%12].name,house:'10th'},
  ];
  document.getElementById('chartPlanets').innerHTML=planetData.map(p=>
    `<div class="planet-item"><span>${p.name}</span><span>${p.sign} · ${p.house} House</span></div>`
  ).join('');
  document.getElementById('chartSummary').innerHTML=
    `<strong>Cosmic Profile:</strong> With your Sun in <strong>${sun.name}</strong>, Moon in <strong>${SIGNS[moonIdx].name}</strong>, and <strong>${SIGNS[risingIdx].name}</strong> Rising, you embody ${sun.el} energy balanced by ${SIGNS[moonIdx].el} emotional depth. Your ruling planet <strong>${sun.ruler}</strong> shapes your core identity. You are naturally drawn to ${sun.compat} energy in relationships. Your power stone is <strong>${sun.stone}</strong>.`;
  document.getElementById('chartForm').style.display='none';
  document.getElementById('chartResult').style.display='block';
  document.getElementById('birthchart').scrollIntoView({behavior:'smooth'});
}
function getSunSign(month,day){
  const dates=[[3,21],[4,20],[5,21],[6,21],[7,23],[8,23],[9,23],[10,23],[11,22],[12,22],[1,20],[2,19]];
  for(let i=0;i<12;i++){
    const [m,d]=dates[i];
    const [nm,nd]=dates[(i+1)%12];
    if((month+1===m&&day>=d)||(month+1===nm&&day<nd))return i;
  }
  return 0;
}
function drawBirthChartCanvas(sun,moon,rising){
  const canvas=document.getElementById('chartCanvas');
  const ctx=canvas.getContext('2d');
  const W=canvas.width,H=canvas.height,cx=W/2,cy=H/2;
  ctx.clearRect(0,0,W,H);
  // Background
  const bg=ctx.createRadialGradient(cx,cy,0,cx,cy,150);
  bg.addColorStop(0,'#1a1740');bg.addColorStop(1,'#06040f');
  ctx.fillStyle=bg;ctx.beginPath();ctx.arc(cx,cy,148,0,Math.PI*2);ctx.fill();
  // Rings
  [140,110,80,50].forEach((r,i)=>{
    ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);
    ctx.strokeStyle=`rgba(155,109,255,${0.15+i*.1})`;ctx.lineWidth=1;ctx.stroke();
  });
  // House lines
  for(let i=0;i<12;i++){
    const angle=(i/12)*Math.PI*2-Math.PI/2;
    ctx.beginPath();
    ctx.moveTo(cx+Math.cos(angle)*50,cy+Math.sin(angle)*50);
    ctx.lineTo(cx+Math.cos(angle)*140,cy+Math.sin(angle)*140);
    ctx.strokeStyle='rgba(155,109,255,.2)';ctx.lineWidth=1;ctx.stroke();
  }
  // Zodiac symbols on outer ring
  SIGNS.forEach((s,i)=>{
    const angle=(i/12)*Math.PI*2-Math.PI/2+(Math.PI/12);
    const r=125;
    ctx.font='11px serif';ctx.fillStyle='rgba(155,109,255,.7)';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(s.sym,cx+Math.cos(angle)*r,cy+Math.sin(angle)*r);
  });
  // Planet markers
  const planets=[{idx:sun,col:'#f0c060',sym:'☉',r:95},{idx:moon,col:'#c8b8ff',sym:'☽',r:75},{idx:rising,col:'#40e0c8',sym:'↑',r:55}];
  planets.forEach(p=>{
    const angle=(p.idx/12)*Math.PI*2-Math.PI/2;
    const x=cx+Math.cos(angle)*p.r,y=cy+Math.sin(angle)*p.r;
    ctx.beginPath();ctx.arc(x,y,10,0,Math.PI*2);
    ctx.fillStyle=p.col+'33';ctx.fill();
    ctx.beginPath();ctx.arc(x,y,10,0,Math.PI*2);
    ctx.strokeStyle=p.col;ctx.lineWidth=2;ctx.stroke();
    ctx.font='12px serif';ctx.fillStyle=p.col;ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(p.sym,x,y);
  });
  // Center
  const cg=ctx.createRadialGradient(cx,cy,0,cx,cy,40);
  cg.addColorStop(0,'#9b6dff55');cg.addColorStop(1,'transparent');
  ctx.beginPath();ctx.arc(cx,cy,40,0,Math.PI*2);ctx.fillStyle=cg;ctx.fill();
  ctx.font='20px serif';ctx.fillStyle='#f0c060';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText('✦',cx,cy);
}

// ── COMPATIBILITY ────────────────────────
document.getElementById('compatBtn').onclick=function(){
  const s1=document.getElementById('c1sign').value;
  const s2=document.getElementById('c2sign').value;
  const n1=document.getElementById('c1name').value||'Person 1';
  const n2=document.getElementById('c2name').value||'Person 2';
  if(!s1||!s2){alert('Please select both zodiac signs.');return;}
  this.textContent='Analyzing...';this.disabled=true;
  setTimeout(()=>{
    showCompatResult(s1,s2,n1,n2);
    this.textContent='✦ Analyze Compatibility';this.disabled=false;
  },2000);
};
function showCompatResult(s1,s2,n1,n2){
  const idx1=SIGNS.findIndex(s=>s.name===s1);
  const idx2=SIGNS.findIndex(s=>s.name===s2);
  const diff=Math.abs(idx1-idx2);
  const elMatch=SIGNS[idx1].el===SIGNS[idx2].el;
  const harmonic=[0,4,8].includes(diff)||[3,9].includes(diff);
  const baseScore=elMatch?82:harmonic?74:58;
  const score=Math.min(99,baseScore+Math.floor(Math.random()*12));
  // Animate score
  const result=document.getElementById('compatResult');
  result.style.display='flex';
  result.scrollIntoView({behavior:'smooth'});
  let current=0;
  const pct=document.getElementById('compatPct');
  const timer=setInterval(()=>{
    current=Math.min(score,current+2);
    pct.textContent=current+'%';
    if(current>=score)clearInterval(timer);
  },30);
  // Ring canvas
  drawCompatRing(score);
  // Detail bars
  const areas=['Love & Romance','Emotional Bond','Communication','Trust & Loyalty','Long-term Vision','Physical Chemistry'];
  const details=document.getElementById('compatDetails');
  details.innerHTML='';
  areas.forEach(a=>{
    const val=Math.min(99,score-10+Math.floor(Math.random()*25));
    const item=document.createElement('div');
    item.className='compat-detail-item';
    item.innerHTML=`<label>${a}</label><div class="detail-bar"><div class="detail-fill" id="df_${a.replace(/\s/g,'')}"></div></div><span>${val}%</span>`;
    details.appendChild(item);
    setTimeout(()=>{
      const fill=document.getElementById('df_'+a.replace(/\s/g,''));
      if(fill)fill.style.width=val+'%';
    },300);
  });
  const readingText=score>80?`${n1} and ${n2} share a remarkable cosmic connection. Your ${SIGNS[idx1].el} and ${SIGNS[idx2].el} energies create a dynamic and complementary bond. This pairing is blessed by Venus and indicates a relationship filled with passion, mutual growth, and genuine understanding.`:
    score>65?`${n1} and ${n2} have a solid foundation with room to grow. While your elemental differences create occasional friction, these very differences also create the spark of attraction and opportunity for mutual evolution.`:
    `${n1} and ${n2} face cosmic challenges, but all great love stories require effort. Your contrasting energies can become your greatest strength if you approach differences with curiosity and patience.`;
  details.innerHTML+=`<p style="margin-top:20px;color:var(--muted);font-size:.88rem;line-height:1.7;border-top:1px solid var(--border);padding-top:16px">${readingText}</p>`;
}
function drawCompatRing(score){
  const c=document.getElementById('compatCanvas');
  const ctx=c.getContext('2d');
  const W=c.width,H=c.height,cx=W/2,cy=H/2,r=75;
  ctx.clearRect(0,0,W,H);
  ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);
  ctx.strokeStyle='rgba(155,109,255,.15)';ctx.lineWidth=10;ctx.stroke();
  const gradient=ctx.createLinearGradient(0,0,W,H);
  gradient.addColorStop(0,'#ff6b9d');gradient.addColorStop(1,'#9b6dff');
  ctx.beginPath();
  ctx.arc(cx,cy,r,-Math.PI/2,(score/100)*Math.PI*2-Math.PI/2);
  ctx.strokeStyle=gradient;ctx.lineWidth=10;ctx.lineCap='round';ctx.stroke();
}

// ── AI PREDICTIONS ───────────────────────
const PRED_EVENTS={
  career:[
    {title:'Major Career Breakthrough',time:'Within 6–8 weeks',text:'A leadership opportunity or project of significant scope comes to you. Your unique skills are finally being recognized by those who matter. Take the initiative.'},
    {title:'Financial Upliftment',time:'Month 2–3',text:'A salary negotiation or investment decision bears remarkable fruit. Jupiter in your financial house amplifies abundance. Trust your financial instincts.'},
    {title:'Network Expansion',time:'Month 3–4',text:'A powerful new professional contact enters your orbit. This connection opens doors that were previously invisible to you. Attend events and be open.'},
    {title:'Achievement Recognition',time:'Month 4–6',text:'Public recognition or an award validates your sustained effort. Share your success with grace and use this platform to lift others.'},
  ],
  love:[
    {title:'Romantic Encounter',time:'Within 3–5 weeks',text:"Venus's transit through your relationship house draws meaningful connections. A new meeting carries deep soul recognition — this is not coincidence."},
    {title:'Deepening of Bonds',time:'Month 2',text:'Existing relationships undergo a beautiful transformation. Honest conversations you've been avoiding lead to profound intimacy and renewed passion.'},
    {title:'Heart Healing',time:'Month 2–3',text:'Old emotional wounds gently close as Neptune brings compassion and forgiveness. You release what no longer serves your heart with grace.'},
    {title:'Commitment Decision',time:'Month 4–6',text:'A significant relationship milestone approaches. Saturn's stabilizing energy supports long-term commitments made during this window.'},
  ],
  health:[
    {title:'Vitality Surge',time:'Within 2–3 weeks',text:'Mars energizes your body, bringing renewed physical strength and stamina. This is an ideal window to start a new fitness practice.'},
    {title:'Mind-Body Alignment',time:'Month 1–2',text:'A shift in your daily routine brings profound improvements to both mental clarity and physical wellbeing. Small, consistent habits yield extraordinary results.'},
    {title:'Healing Breakthrough',time:'Month 2–4',text:'A health challenge you've been managing finds resolution. Whether through a new treatment, lifestyle change, or natural recovery, relief arrives.'},
  ],
  general:[
    {title:'Life-Changing Insight',time:'Within 2 weeks',text:'A moment of profound clarity reshapes your understanding of your path. Trust the wisdom that arises from stillness and reflection.'},
    {title:'Unexpected Opportunity',time:'Month 1–2',text:'Something entirely unexpected enters your life, opening a path you had not considered. Stay open and curious — this is the universe at work.'},
    {title:'Spiritual Awakening',time:'Month 2–3',text:"A period of deep inner growth and spiritual expansion begins. You'll find yourself drawn to practices and communities that elevate your consciousness."},
    {title:'Major Positive Shift',time:'Month 3–6',text:'The cumulative energy of this period crystallizes into a significant positive change in your overall life circumstances. Your sustained intention pays off.'},
  ],
};
document.getElementById('predBtn').onclick=function(){
  const name=document.getElementById('pName').value.trim();
  const sign=document.getElementById('pSign').value;
  const area=document.getElementById('pArea').value;
  if(!name||!sign){alert('Please enter your name and select your zodiac sign.');return;}
  this.textContent='Consulting the cosmos...';this.disabled=true;
  setTimeout(()=>{
    showPrediction(name,sign,area);
    this.textContent='✦ Reveal My Future';this.disabled=false;
  },2500);
};
function showPrediction(name,sign,area){
  const pool=PRED_EVENTS[area]||PRED_EVENTS.general;
  document.getElementById('predTitle').textContent=name+"'s "+area.charAt(0).toUpperCase()+area.slice(1)+" Forecast";
  const timeline=document.getElementById('predTimeline');
  timeline.innerHTML='';
  pool.forEach((ev,i)=>{
    const div=document.createElement('div');
    div.className='pred-event';
    div.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center"><div class="pred-dot"></div>${i<pool.length-1?'<div class="pred-line" style="height:60px"></div>':''}</div>
      <div class="pred-content"><div class="pred-time">${ev.time}</div><h5>${ev.title}</h5><p>${ev.text}</p></div>`;
    timeline.appendChild(div);
  });
  const signData=SIGNS.find(s=>s.name===sign);
  document.getElementById('predAdvice').innerHTML=`<h5>🌟 Cosmic Advice for ${name}</h5>
    <p>As a <strong>${sign}</strong>, your ${signData.ruler}-ruled nature is your greatest asset in manifesting these predictions. Work with your power stone <strong>${signData.stone}</strong> and surround yourself with <strong>${signData.color}</strong> to amplify cosmic alignment. Your most powerful manifestation window is during the new and full moons. Stay grounded in gratitude and bold in your intentions.</p>`;
  document.getElementById('predResult').style.display='flex';
  document.getElementById('predResult').scrollIntoView({behavior:'smooth'});
}

// ── TAROT ────────────────────────────────
const POSITIONS=['Past Influence','Present Energy','Future Potential'];
const TAROT_READINGS=[
  "The cards reveal a powerful narrative of transformation and renewal. Your past experiences have been the forge that shapes your present strength. The current energy calls you to act with both courage and wisdom. The future holds remarkable promise for those willing to release what no longer serves them.",
  "A significant threshold is before you. The wisdom encoded in these cards speaks of inner power meeting outer opportunity. Trust the journey you are on — the universe has been orchestrating events in your favour longer than you know. Open your hands and receive.",
  "These cards reflect the deep intelligence of your soul's path. What appears as obstacle is initiation. What feels like loss is clearing. The future card promises a beautiful resolution that integrates all that has come before into something wholly new and deeply meaningful.",
  "The cosmos reveals a story of love, purpose, and authentic self-expression. You are being called to step more fully into your power. The challenges indicated are gateways, not walls. Trust your intuition above all external advice — your inner knowing is your true compass now.",
];
(function buildDeck(){
  const deck=document.getElementById('cardDeck');
  for(let i=0;i<7;i++){
    const c=document.createElement('div');
    c.className='deck-card';
    deck.appendChild(c);
  }
})();
document.getElementById('tarotBtn').onclick=function(){
  const q=document.getElementById('tarotQ').value||'What does the universe wish to reveal?';
  document.getElementById('cardDeck').style.display='none';
  this.disabled=true;this.textContent='Drawing...';
  setTimeout(()=>{
    drawTarot(q);
    this.disabled=false;this.textContent='Draw Again';
    document.getElementById('cardDeck').style.display='flex';
  },1500);
};
function drawTarot(question){
  const drawn=[];
  const used=new Set();
  while(drawn.length<3){
    const r=Math.floor(Math.random()*TAROT_CARDS.length);
    if(!used.has(r)){used.add(r);drawn.push(TAROT_CARDS[r]);}
  }
  const cardsEl=document.getElementById('tarotCards');
  cardsEl.innerHTML='';
  drawn.forEach((card,i)=>{
    const div=document.createElement('div');
    div.className='tarot-card-drawn';
    div.innerHTML=`<p class="tarot-position">${POSITIONS[i]}</p>
      <div class="tarot-card-img"><span>${card.emoji}</span><small>${card.name}</small></div>
      <h5>${card.name}</h5><p>${card.meaning}</p>`;
    cardsEl.appendChild(div);
  });
  const reading=TAROT_READINGS[Math.floor(Math.random()*TAROT_READINGS.length)];
  document.getElementById('tarotReading').innerHTML=
    `<p style="margin-bottom:12px;color:var(--teal);font-size:.85rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em">Reading for: "${question}"</p>
     <p>${reading}</p>
     <p style="margin-top:12px;color:var(--gold)">Your power cards: <strong>${drawn.map(c=>c.name).join(' · ')}</strong></p>`;
  document.getElementById('tarotResult').style.display='block';
  document.getElementById('tarotResult').scrollIntoView({behavior:'smooth'});
}

// ── TESTIMONIALS ─────────────────────────
(function buildTestimonials(){
  const track=document.getElementById('testiTrack');
  TESTIMONIALS.forEach(t=>{
    const card=document.createElement('div');
    card.className='testi-card';
    card.innerHTML=`<div class="testi-stars">${'★'.repeat(t.stars)}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.emoji}</div>
        <div><div class="testi-name">${t.name}</div><div class="testi-loc">${t.loc}</div><div class="testi-sign">${t.sign}</div></div>
      </div>`;
    track.appendChild(card);
  });
})();

// ── SMOOTH SCROLL NAV ────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
  });
});
