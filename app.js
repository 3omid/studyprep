(()=>{
'use strict';
/* ================= helpers & storage ================= */
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* Persian text: English terms inside it get their own direction and the English font, so they don't jump around or look mismatched */
const FA=s=>String(s==null?'':s).split(/([A-Za-z0-9][A-Za-z0-9+#.\/_&'-]*(?: +[A-Za-z0-9][A-Za-z0-9+#.\/_&'-]*)*)/).map((x,i)=>{
  if(!(i%2))return esc(x);const m=x.match(/^(.*?)([.\/'-]*)$/);return /[A-Za-z]/.test(m[1])?`<bdi class="lt${m[1].length<25?' nw':''}">${esc(m[1])}</bdi>${esc(m[2])}`:esc(x)}).join('');
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const now=()=>Date.now(),DAY=864e5,INT=[0,1,3,7,14,30];
const mem={};
const st={
  get(k,d){try{const v=localStorage.getItem('sp1_'+k);return v===null?d:JSON.parse(v)}catch(e){return k in mem?mem[k]:d}},
  set(k,v){try{localStorage.setItem('sp1_'+k,JSON.stringify(v))}catch(e){mem[k]=v}},
  del(k){try{localStorage.removeItem('sp1_'+k)}catch(e){delete mem[k]}}
};
const fmt=s=>{s=Math.max(0,Math.round(s));const h=Math.floor(s/3600),m=Math.floor(s%3600/60);return(h?h+':':'')+String(m).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
const pct=(a,b)=>b?Math.round(100*a/b):0;
const cls=p=>p>=75?'hi':p>=50?'mid':'lo';


/* ================= words, glossary, dictionary ================= */
let TX=[];
const WORD=/[A-Za-z0-9](?:[A-Za-z0-9'’\-\.\/]*[A-Za-z0-9])?/g;
/* wrap every word so it can be tapped for its meaning */
function W(text){
  text=String(text==null?'':text);const id=TX.push(text)-1;let out='',last=0,m;WORD.lastIndex=0;
  while((m=WORD.exec(text))){out+=esc(text.slice(last,m.index))+`<span class="w" data-s="${m.index}" data-e="${m.index+m[0].length}">${esc(m[0])}</span>`;last=m.index+m[0].length}
  return `<span class="tx" data-tx="${id}">${out+esc(text.slice(last))}</span>`;
}
const GL=(window.GLOSS||[]).map(g=>{try{return{re:new RegExp(g[0],g[1]+'g'),l:g[2],e:g[3],p:g[4]}}catch(e){return null}}).filter(Boolean);
/* glossary terms found in a text, longest first, without overlaps */
function terms(text){
  const hits=[];
  GL.forEach(g=>{g.re.lastIndex=0;let m;while((m=g.re.exec(text))){if(!m[0].length){g.re.lastIndex++;continue}hits.push({g,s:m.index,e:m.index+m[0].length})}});
  hits.sort((a,b)=>(b.e-b.s)-(a.e-a.s)||a.s-b.s);
  const used=[],out=[];
  hits.forEach(h=>{if(used.some(u=>h.s<u.e&&h.e>u.s))return;used.push(h);out.push(h)});
  return out.sort((a,b)=>a.s-b.s);
}
const dictC=st.get('dict',{});
const saveDict=()=>{const k=Object.keys(dictC);if(k.length>600)k.slice(0,100).forEach(x=>delete dictC[x]);st.set('dict',dictC)};
function fetchJ(url){const c=new AbortController(),t=setTimeout(()=>c.abort(),6500);
  return fetch(url,{signal:c.signal}).then(r=>{clearTimeout(t);if(!r.ok)throw new Error(r.status);return r.json()})}
function lookupOnline(w){
  const lw=w.toLowerCase();
  const tryEn=x=>fetchJ('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(x)).then(d=>{
    const out=[],ex=[];(d||[]).forEach(en=>(en.meanings||[]).forEach(m=>{const df=(m.definitions||[])[0];if(df&&out.length<3)out.push((m.partOfSpeech?m.partOfSpeech+': ':'')+df.definition);
      (m.definitions||[]).forEach(x=>{if(x.example&&ex.length<2)ex.push(x.example)})}));
    if(!out.length)throw 0;out.ex=ex;return out});
  const en=tryEn(lw).catch(()=>{const alt=lw.replace(/(ies)$/,'y').replace(/(ing|ed|es|s)$/,'');return alt!==lw&&alt.length>2?tryEn(alt):Promise.reject()});
  const fa=fetchJ('https://api.mymemory.translated.net/get?q='+encodeURIComponent(lw)+'&langpair=en|fa').then(d=>{
    const t=d&&d.responseData&&d.responseData.translatedText;if(!t||/MYMEMORY|INVALID/i.test(t))throw 0;return t});
  return Promise.allSettled([en,fa]).then(r=>{const e=r[0].status==='fulfilled'?r[0].value:null;return{en:e,ex:(e&&e.ex)||[],fa:r[1].status==='fulfilled'?r[1].value:null}});
}
/* ---- human voice: pre-recorded audio bundles (offline); falls back to the device voice ---- */
const VX={idx:null,bufs:{},el:null,url:null,ac:null};
/* the voice goes through its own amplifier: iPhones ignore an audio element's volume, so clips sounded quiet */
function vUnlock(){try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return;if(!VX.ac)VX.ac=new C();if(VX.ac.state==='suspended')VX.ac.resume()}catch(e){}}
function vAmp(a){try{const ac=VX.ac;if(!ac||ac.state!=='running'||!SET.vboost)return false;
  const src=ac.createMediaElementSource(a),g=ac.createGain(),cp=ac.createDynamicsCompressor();
  g.gain.value=1+SET.vboost*1.6;cp.threshold.value=-12;cp.knee.value=6;cp.ratio.value=6;cp.attack.value=.003;cp.release.value=.2;
  src.connect(g);g.connect(cp);cp.connect(ac.destination);return true}catch(e){return false}}
const vRate=(t,opt)=>opt&&opt.rate||SET.vspeed;
const vkey=t=>{t=String(t).replace(/\s+/g,' ').trim().toLowerCase();let h=2166136261;for(let i=0;i<t.length;i++){h^=t.charCodeAt(i);h=Math.imul(h,16777619)>>>0}return h.toString(36)+t.length.toString(36)};
function vIdx(){return VX.idx||(VX.idx=fetch('audio/idx.json').then(r=>{if(!r.ok)throw 0;return r.json()}).catch(()=>({b:[],k:{}})))}
function vBuf(b,name){return VX.bufs[b]||(VX.bufs[b]=fetch(name).then(r=>{if(!r.ok)throw 0;return r.arrayBuffer()}).catch(e=>{delete VX.bufs[b];throw e}))}
function vStop(){try{if(VX.el){VX.el.pause();VX.el=null}if(VX.url){URL.revokeObjectURL(VX.url);VX.url=null}}catch(e){}try{speechSynthesis.cancel()}catch(e){}}
function deviceSpeak(w,rate){try{const u=new SpeechSynthesisUtterance(w);u.lang='en-US';u.rate=Math.max(.5,(rate||.85)*.95);u.volume=1;const vs=speechSynthesis.getVoices().filter(v=>/en[-_]US/i.test(v.lang));const best=vs.find(v=>/natural|neural|premium|enhanced|samantha|aria|jenny|zira/i.test(v.name))||vs[0];if(best)u.voice=best;speechSynthesis.speak(u)}catch(e){}}
function speak(text,opt){
  opt=opt||{};text=String(text||'').trim();if(!text)return Promise.resolve();
  vStop();
  const k=vkey(text);
  return vIdx().then(ix=>{
    const e=ix.k&&ix.k[k];if(!e)throw 0;
    return vBuf(e[0],ix.b[e[0]]).then(buf=>{
      const blob=new Blob([buf.slice(e[1],e[1]+e[2])],{type:'audio/mpeg'});
      const url=URL.createObjectURL(blob),a=new Audio(url),r=vRate(text,opt);
      a.defaultPlaybackRate=a.playbackRate=r;a.preservesPitch=a.webkitPreservesPitch=true;
      if(!vAmp(a))a.volume=1;
      VX.el=a;VX.url=url;a.onended=()=>{if(VX.url===url){URL.revokeObjectURL(url);VX.url=null}};
      return a.play();
    });
  }).catch(()=>{if(!opt.quiet)deviceSpeak(text,vRate(text,opt))});
}
const CUES={ok:['Correct!','Well done!','Great job!','Nice work!','Excellent!'],bad:['Not quite.','Keep going.'],streak:['Perfect streak!'],pass:['You passed! Congratulations!'],fail:['Good effort. Review and try again.'],time:['Time is up.'],next:['Next question.']};
function cue(k){if(!SET.cues)return;const a=CUES[k];setTimeout(()=>speak(a[Math.floor(Math.random()*a.length)],{quiet:true}),k==='ok'||k==='streak'?380:200)}
function offlineWord(w){
  const D=window.DICT;if(!D)return null;w=w.toLowerCase().replace(/[’]/g,"'");
  const c=[w,w.replace(/'s$/,''),w.replace(/s$/,''),w.replace(/es$/,''),w.replace(/ies$/,'y'),w.replace(/ed$/,''),w.replace(/ed$/,'e'),w.replace(/ing$/,''),w.replace(/ing$/,'e'),w.replace(/ly$/,''),w.replace(/er$/,''),w.replace(/ers$/,'er'),w.replace(/-/g,'')];
  for(const x of c)if(x.length>1&&D[x])return D[x];
  if(w.includes('-')){const parts=w.split('-').map(p=>D[p]).filter(Boolean);if(parts.length===w.split('-').length)return[parts.map((p,i)=>w.split('-')[i]+': '+p[0]).join('; '),parts.map(p=>p[1]).join(' · ')]}
  return null;
}
/* the sentence around a tapped word, with the word highlighted */
function ctxOf(text,s0,e0){
  let a=s0,b=e0;while(a>0&&!/[.!?\n]/.test(text[a-1]))a--;while(b<text.length&&!/[.!?\n]/.test(text[b]))b++;
  const pre=text.slice(a,s0).replace(/^\s+/,''),post=text.slice(e0,Math.min(text.length,b+1)).replace(/\s+$/,'');
  return{plain:pre+text.slice(s0,e0)+post,html:esc(pre)+'<mark>'+esc(text.slice(s0,e0))+'</mark>'+esc(post),own:!pre.trim()&&!post.replace(/[.!?]/g,'').trim()};
}
const RL=t=>`<div class="lbl r">${t}</div>`;
function wsHead(w){return `<h2 class="wt">${esc(w)}</h2><div class="spkr"><button class="plain sm spk" data-act="speak" data-v="${esc(w)}">🔊 Listen</button><button class="plain sm spk" data-act="speakslow" data-v="${esc(w)}">🐢 Slowly · آهسته</button></div>`}
function wsTail(c){return (c&&!c.own?`<div class="lbl">In this sentence · در این جمله</div><div class="wctx">${c.html}</div>`:'')+
  `<div id="wai"><button class="plain" data-act="wordai">🤖 توضیح بیشتر با هوش مصنوعی · Explain more</button></div><button class="plain" data-act="close">Close</button>`}
function wordSheet(span){
  const box=span.closest('.tx');if(!box)return;
  const text=TX[+box.dataset.tx]||span.textContent;
  showWord(text,+span.dataset.s,+span.dataset.e,span.textContent);
}
function showWord(text,s0,e0,word){
  const hit=terms(text).find(h=>h.s<e0&&h.e>s0);
  FX.tap();
  if(hit){
    const g=hit.g,x=(window.GLOSSX||{})[g.l],t=text.slice(hit.s,hit.e),c=ctxOf(text,hit.s,hit.e);
    window._wq={w:t,c:c.plain};
    modal(`${wsHead(t)}${t.toLowerCase()!==g.l.toLowerCase()?`<div class="lbl">${esc(g.l)}</div>`:''}
      ${RL('معنی')}<div class="wfa">${FA(g.p)}</div>
      ${x?`${RL('به زبان ساده')}<div class="wfa wsm">${FA(x[0])}</div><div class="wex">${RL('مثال')}${FA(x[1])}</div>`:''}
      <div class="lbl">English</div><div class="wen">${esc(g.e)}</div>${wsTail(c)}`);
    return;
  }
  const key=word.toLowerCase(),c=ctxOf(text,s0,e0);
  window._wq={w:word,c:c.plain};
  const show=(fa,en,ex,busy)=>`${wsHead(word)}
    ${fa?`${RL('معنی فارسی')}<div class="wfa">${FA(fa)}</div>`:''}
    ${en&&en.length?`<div class="lbl">English meaning</div>${en.map(x=>`<div class="wen">• ${esc(x)}</div>`).join('')}`:''}
    ${ex&&ex.length?`<div class="lbl">Example · مثال</div>${ex.map(x=>`<div class="wen wexe">“${esc(x)}”</div>`).join('')}`:''}
    ${busy?'<p class="mut">Looking up… · در حال جستجو</p>':''}
    ${!busy&&!fa&&!(en&&en.length)?`<p class="mut">This word is not in the built-in dictionary, and the online dictionary could not be reached.</p><p><a href="https://translate.google.com/?sl=en&tl=fa&text=${encodeURIComponent(word)}&op=translate" target="_blank" rel="noopener">Open in Google Translate ↗</a></p>`:''}
    ${wsTail(c)}`;
  const off=offlineWord(word),hasEx=r=>r&&r.ex&&r.ex.length;
  const open=()=>$('#ov')&&$('#ov .wt')&&$('#ov .wt').textContent===word;
  const keepAI=()=>{const w=$('#wai');return w?w.innerHTML:''};
  const draw=h=>{const a=keepAI();modal(h);if(a&&$('#wai'))$('#wai').innerHTML=a};
  const cached=dictC[key];
  if(off){
    modal(show(off[1],[off[0]],cached&&cached.ex,false));
    if(!hasEx(cached)&&navigator.onLine!==false)lookupOnline(word).then(r=>{if(r.en||r.fa){dictC[key]=r;saveDict()}if(open()&&hasEx(r))draw(show(off[1],[off[0]],r.ex,false))});
    return;
  }
  if(cached){modal(show(cached.fa,cached.en,cached.ex,false));return}
  modal(show(null,null,null,true));
  lookupOnline(word).then(r=>{
    if(r.en||r.fa){dictC[key]=r;saveDict()}
    if(open())draw(show(r.fa,r.en,r.ex,false));
  });
}
/* AI: a short, simple Persian explanation of the tapped word as it is used in its sentence */
const WAI=st.get('wai',{});
function wordAI(){
  const q=window._wq,box=$('#wai');if(!q||!box)return;
  if(!aiReady()){box.innerHTML=`<div class="wfa wsm">برای این کار، یک بار کلید رایگان هوش مصنوعی را در Settings ← AI tutor وارد کن.</div><button class="plain" data-act="tab" data-v="settings">⚙️ Settings</button>`;return}
  const k=(q.w+'|'+q.c).toLowerCase().slice(0,160);
  const put=x=>{const b=$('#wai');if(b)b.innerHTML=`${RL('🤖 توضیح هوش مصنوعی')}<div class="aim a wai">${aiMd(x)}</div>`};
  if(WAI[k]){put(WAI[k]);return}
  box.innerHTML='<div class="mut">…thinking · در حال فکر کردن</div>';
  const sys='You explain English words and IT security terms to a 15-year-old Persian speaker who is studying for CompTIA Security+ and finds technical text hard. Answer ONLY in simple, friendly, everyday Persian; keep the English word or term itself in English. Write exactly 3 short lines, each starting with its label: «معنی:» what it means in this sentence. «کاربرد:» what it is for or how it is used (in IT/security if it is a technical term). «مثال:» one simple everyday example. Nothing else.';
  aiCall(sys,[{r:'u',t:`Word: "${q.w}"\nSentence: "${q.c}"`}],put).then(x=>{
    WAI[k]=x;const ks=Object.keys(WAI);if(ks.length>300)ks.slice(0,60).forEach(z=>delete WAI[z]);st.set('wai',WAI);put(x);
  },e=>{const b=$('#wai');if(b)b.innerHTML=`<div class="aim err">${esc(e.message)}</div><button class="plain" data-act="wordai">↻ Try again</button>`});
}
/* "what each option is" panel shown after answering */
function whatsWhat(q,it,fa){
  const rows=[];const seen=new Set();
  const add=(tag,txt,cls)=>{terms(txt).slice(0,3).forEach(h=>{const k=cls+h.g.l;if(seen.has(k))return;seen.add(k);
    rows.push(`<div class="gl"><span class="mk ${cls}">${tag}</span><b>${W(h.g.l)}</b> — ${W(h.g.e)}${fa?`<div class="fa">${FA(h.g.p)}</div>`:''}</div>`)})};
  if(q.k==='m'){
    it.ord.forEach((oi,d)=>{const right=oi===0;add('ABCDEFGH'[d]+(right?' ✔':it.pick===d?' ✘':''),q.o[oi],right?'g':it.pick===d?'r':'')});
    add('Q',q.q,'');
  }else{
    add('Q',q.title,'');
    q.items.forEach(x=>add('•',x[0],''));
  }
  if(!rows.length)return '';
  return `<details class="wm" open><summary>🧩 What is what</summary>${rows.join('')}</details>`;
}

/* ================= packs ================= */
let SET=Object.assign({vspeed:1,vboost:0,rl:'both',fa:'tap',faExp:'tap',examFa:false,theme:'auto',pal:'classic',size:1,examDate:'',goal:30,snd:true,mus:false,vib:true,vol:0.6,cues:true,auto:true,off:{packs:[],secs:[]}},st.get('set',{}));
SET.off=SET.off||{packs:[],secs:[]};
/* The textbook chapters moved from the Security+ pack (sections B1..B14) to their own pack 'secbook' (sections 1..14).
   Carry over reading marks, reading/listening positions and section switches saved under the old keys. */
(function(){if(st.get('migbook'))return;const m=k=>typeof k==='string'?k.replace(/^secplus:B(\d+)$/,'secbook:$1'):k;
  ['read','rpos','rvoice'].forEach(n=>{const o=st.get(n,null);if(o&&typeof o==='object'){const r={};Object.keys(o).forEach(k=>r[m(k)]=o[k]);st.set(n,r)}});
  const rl=st.get('rlast');if(rl)st.set('rlast',m(rl));
  SET.off.secs=SET.off.secs.map(m);st.set('set',SET);
  const c=st.get('cfg',null);if(c&&c.secs){c.secs=c.secs.map(m);st.set('cfg',c)}
  st.set('migbook',1)})();
let P=st.get('prog',{}),PACKS=[],Q={};
function normPack(p,user){
  const id=String(p.id);const pre=id+':';
  /* built-in ids that already name a pack ("secplus:b3_1" in the book pack) are kept, so moving questions keeps progress */
  const fixId=i=>String(i).startsWith(pre)||(!user&&String(i).includes(':'))?String(i):pre+i;
  const secs={};Object.keys(p.sections||{}).forEach(k=>{const s=p.sections[k];secs[k]=typeof s==='string'?{en:s,fa:''}:{en:s.en||k,fa:s.fa||''}});
  return{id,name:p.name||id,short:p.short||p.name||id,lab:p.lab||'',cover:p.cover||'',defOff:!!p.defOff,user:!!user,sections:secs,study:p.study||{},
    mcq:(p.mcq||[]).map(q=>({...q,id:fixId(q.id),sec:String(q.sec),o:q.o,of:q.of||[],en:q.en||'',fa:q.fa||'',qf:q.qf||'',hf:q.hf||'',t:q.t||''})),
    pbq:(p.pbq||[]).map(q=>({...q,id:fixId(q.id),sec:String(q.sec),tf:q.tf||'',zf:q.zf||[],zd:q.zd||[],en:q.en||'',fa:q.fa||'',t:q.t||''}))};
}
function loadPacks(){
  PACKS=(window.PACKS||[]).map(p=>normPack(p,false));
  (st.get('userpacks',[])||[]).forEach(p=>{if(!PACKS.some(x=>x.id===p.id))try{PACKS.push(normPack(p,true))}catch(e){}});
  Q={};
  PACKS.forEach(p=>{
    p.mcq.forEach(q=>{Q[q.id]={...q,k:'m',pack:p}});
    p.pbq.forEach(q=>{Q[q.id]={...q,k:'p',pack:p}});
  });
  /* a built-in course marked defOff starts switched off the first time this device sees it */
  const kn=SET.known||[];let ch=false;
  PACKS.forEach(p=>{if(!p.user&&!kn.includes(p.id)){kn.push(p.id);ch=true;if(p.defOff&&!SET.off.packs.includes(p.id))SET.off.packs.push(p.id)}});
  if(ch){SET.known=kn;st.set('set',SET)}
}
const secKey=(p,s)=>p.id+':'+s;
const packOn=p=>!SET.off.packs.includes(p.id);
const secOn=(p,s)=>packOn(p)&&!SET.off.secs.includes(secKey(p,s));
const qIn=(q,keys)=>keys.includes(secKey(q.pack,q.sec));
function activeKeys(){const k=[];PACKS.forEach(p=>Object.keys(p.sections).forEach(s=>{if(secOn(p,s))k.push(secKey(p,s))}));return k}
function qsIn(keys){return Object.values(Q).filter(q=>qIn(q,keys))}
/* section labels: "Ch. 3" in the book, "Section 3" / "S3" in courses */
const secNo=(p,s,short)=>p.lab?p.lab+' '+s:/^\d+$/.test(s)?(short?'S':'Section ')+s:'';
const secTitle=(p,s)=>{const n=secNo(p,s),e=(p.sections[s]||{en:s}).en;return n?n+' · '+e:e};
const secName=(q)=>q.pack.short+' · '+secTitle(q.pack,q.sec);
/* everything for the CompTIA Security+ mock exam: course modules and book chapters, whatever is switched on */
const MOCK=['secplus','secbook'];
const mockKeys=()=>{const k=[];PACKS.filter(p=>MOCK.includes(p.id)).forEach(p=>Object.keys(p.sections).forEach(s=>k.push(secKey(p,s))));return k};

/* ================= progress ================= */
const dkey=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const DAYS=st.get('day',{});
const dayRow=()=>DAYS[dkey()]||(DAYS[dkey()]={s:0,a:0,c:0});
const saveDays=()=>{const k=Object.keys(DAYS).sort();if(k.length>400)k.slice(0,k.length-400).forEach(x=>delete DAYS[x]);st.set('day',DAYS)};
let ACT=null;
setInterval(()=>{if(ACT&&!document.hidden){dayRow().s+=5;saveDays()}},5000);
function rec(id,ok){
  {const r=dayRow();r.a++;if(ok)r.c++;saveDays()}
  const p=P[id]||(P[id]={s:0,c:0,w:0,b:0,d:0,l:1});
  p.s++;ok?p.c++:p.w++;p.l=ok?1:0;p.b=ok?Math.min(5,p.b+1):0;p.d=now()+(ok?INT[p.b]*DAY:0);
}
const savP=()=>st.set('prog',P);
const isWeak=id=>{const p=P[id];return p&&(p.l===0||p.b<=1)};
const isDue=id=>{const p=P[id];return p&&p.d<=now()};
const mastered=id=>P[id]&&P[id].b>=3;
function smart(pool,n){
  const A=[],B=[],C=[],D=[];
  pool.forEach(q=>{const p=P[q.id];
    if(!p)C.push(q);else if(p.l===0||p.b<=1)A.push(q);else if(p.d<=now())B.push(q);else D.push(q)});
  A.sort((x,y)=>P[x.id].b-P[y.id].b||Math.random()-.5);
  B.sort((x,y)=>P[x.id].d-P[y.id].d);
  D.sort((x,y)=>P[x.id].b-P[y.id].b||Math.random()-.5);
  return [...A,...B,...shuffle(C),...D].slice(0,n);
}

/* ================= session ================= */
let S=st.get('sess',null),timerId=null,tab='home',cfg=Object.assign({mode:'practice',n:20,timer:'off',secs:null},st.get('cfg',{}));
const mkItem=q=>({id:q.id,k:q.k,ord:shuffle(q.k==='m'?q.o.map((_,i)=>i):q.items.map((_,i)=>i)),pick:null,ans:{},ck:false,fl:false,fa:false,ok:null,frac:null});
function secsFor(items){return items.reduce((a,it)=>a+(it.k==='p'?180:60),0)}
function build(c){
  const keys=(c.secs&&c.secs.length?c.secs:activeKeys());
  const pool=qsIn(keys);
  let chosen;
  if(c.ids){chosen=c.ids.map(i=>Q[i]).filter(Boolean)}
  else if(c.mode==='review'){chosen=smart(pool,c.n)}
  else if(c.mode==='exam'){
    const PB=pool.filter(q=>q.k==='p'),MC=pool.filter(q=>q.k==='m');
    const nP=Math.min(PB.length,c.n>=60?5:c.n>=30?2:c.n>=15?1:0),nM=Math.min(MC.length,c.n-nP);
    chosen=[...shuffle(PB).slice(0,nP),...shuffle(MC).slice(0,nM)];
  }else{
    const un=shuffle(pool.filter(q=>!P[q.id])),sn=shuffle(pool.filter(q=>P[q.id]));
    chosen=[...un,...sn].slice(0,c.n);
  }
  if(!chosen.length)return null;
  const items=chosen.map(mkItem);
  const total=c.timer==='off'?null:c.timer==='auto'?secsFor(items):(+c.timer)*60;
  return{mode:c.ids?'review':c.mode,items,i:0,total,left:total,used:0,start:now(),done:false};
}
function startSession(c){
  const s=build(c);
  if(!s){toast('No questions in the selected sections. Turn a course or section on in Courses.');return}
  const sn=c.what||((c.secs&&c.secs.length===1)?(()=>{const[pid,sec]=c.secs[0].split(':');const p=PACKS.find(x=>x.id===pid);return p&&p.sections[sec]?' · '+p.short+' · '+secTitle(p,sec):''})():'');
  s.id=now();s.what=(sn||'').replace(/^ · /,'')||(c.ids?'':((c.secs||activeKeys()).length+' sections'));
  park();S=s;st.set('sess',S);runTimer();renderQuiz();
  lastAct({mode:{practice:'Practice',exam:'Exam',review:'Smart review'}[S.mode]||S.mode,what:sn});
}
/* unfinished sessions other than the open one wait in 'paused', newest first, so none is lost */
const pausedL=()=>st.get('paused',[]);
function park(){if(S&&!S.done&&S.items&&S.items.length){clearInterval(timerId);S.id=S.id||S.start||now();const l=pausedL().filter(x=>x.id!==S.id);l.unshift(S);st.set('paused',l.slice(0,8))}S=null;st.del('sess')}
function unpark(id){const l=pausedL(),x=l.find(y=>String(y.id)===String(id));if(!x)return;park();st.set('paused',pausedL().filter(y=>String(y.id)!==String(id)));S=x;st.set('sess',S);runTimer();renderQuiz()}
const openSess=()=>[...(S&&!S.done?[S]:[]),...pausedL()];
const sessLbl=x=>({practice:'Practice',exam:'Exam',review:'Smart review',game:'🎮 Game'}[x.mode]||x.mode)+(x.what?' · '+x.what:'');
const lastAct=o=>st.set('lastact',Object.assign({t:now()},o));
const ago=t=>{const d=Math.floor((now()-t)/DAY);return d<=0?'today':d===1?'yesterday':d+' days ago'};
function runTimer(){
  clearInterval(timerId);if(!S||S.done)return;
  let n=0;
  timerId=setInterval(()=>{
    if(document.hidden||!S||S.done)return;
    S.used++;
    if(S.left!=null){S.left--;const t=$('#tm');if(t){t.textContent=fmt(S.left);t.classList.toggle('low',S.left<300)}}examTick();
    if(S.left!=null){
      if(S.left<=0){toast("Time's up");finish();return}}
    if(++n%5===0)st.set('sess',S);
  },1000);
}
document.addEventListener('visibilitychange',()=>{if(document.hidden&&S&&!S.done)st.set('sess',S)});
window.addEventListener('pagehide',()=>{if(S&&!S.done)st.set('sess',S)});

const cur=()=>S.items[S.i];
function showFa(it){
  if(S.mode==='exam')return SET.examFa&&it.fa;
  return SET.fa==='always'||(SET.fa==='tap'&&it.fa);
}
const faAvail=()=>S.mode==='exam'?SET.examFa:SET.fa!=='off';
const faExp=()=>S.mode!=='exam'&&SET.fa!=='off';

function checkItem(){
  const it=cur(),q=Q[it.id];if(it.ck)return;
  if(q.k==='m'){it.ok=it.pick!=null&&it.ord[it.pick]===0;it.frac=it.ok?1:0}
  else{let c=0;q.items.forEach((x,i)=>{if(it.ans[i]===x[1])c++});it.frac=c/q.items.length;it.ok=c===q.items.length}
  it.ck=true;rec(it.id,it.ok);savP();
  if(S.mode==='game')gameAnswer(it,q);else if(it.ok)G.xp+=2;
  qProg('ans',1);if(it.ok)qProg('right',1);saveG();
  if(it.ok){S.streak=(S.streak||0)+1;S.best=Math.max(S.best||0,S.streak);const big=S.streak%5===0;big?FX.streak():FX.ok();praise(true,big?S.streak:0);cue(big?'streak':'ok')}else{S.streak=0;FX.bad();praise(false);cue('bad')}
  if(!it.ok&&(it.tries||0)<2&&S.mode!=='exam'&&!(S.mode==='game'&&(S.g.type==='lightning'||S.g.h===0))){
    const rem=S.items.length-1-S.i,at=S.i+1+Math.min(3,rem);
    S.items.splice(at,0,{...mkItem(q),re:true,tries:(it.tries||0)+1});
  }
  st.set('sess',S);
}
function finish(){
  if(!S||S.done)return;
  if(S.mode==='game')return gameFinish();
  clearInterval(timerId);S.done=true;
  const real=S.items.filter(i=>!i.re);
  if(S.mode==='exam'){const an=real.filter(i=>!i.ck&&(Q[i.id].k==='m'?i.pick!=null:Object.keys(i.ans).length));let rc=0;
    real.forEach(it=>{if(!it.ck){const q=Q[it.id];
    if(q.k==='m'){it.ok=it.pick!=null&&it.ord[it.pick]===0;it.frac=it.ok?1:0}
    else{let c=0;q.items.forEach((x,i)=>{if(it.ans[i]===x[1])c++});it.frac=c/q.items.length;it.ok=c===q.items.length}
    it.ck=true;rec(it.id,it.ok);if(it.ok)rc++}});savP();qProg('ans',an.length);qProg('right',rc);G.xp+=rc*2;saveG()}
  const answered=real.filter(i=>i.ck);
  let pts=0,max=0,right=0;const by={};
  real.forEach(it=>{const q=Q[it.id],w=q.k==='p'?3:1;max+=w;const f=it.ck?it.frac:0;pts+=w*f;if(it.ck&&it.ok)right++;
    const k=secName(q);by[k]=by[k]||{c:0,t:0};by[k].t++;if(it.ck&&it.ok)by[k].c++});
  const p=max?pts/max:0,score=Math.round(100+800*p);
  S.result={score,pass:score>=750,pct:p,right,total:real.length,answered:answered.length,by,used:S.used,at:now(),best:S.best||0};
  const h=st.get('hist',[]);h.push({t:S.result.at,mode:S.mode,score,pct:Math.round(p*100),right,total:real.length,used:S.used});
  st.set('hist',h.slice(-30));st.set('last',S);st.del('sess');
  renderResult();FX.done(S.result.pass);cue(S.result.pass?'pass':'fail');if(S.result.pass||p>=.6)confetti();
}

/* ================= UI plumbing ================= */
function toast(m){const d=document.createElement('div');d.textContent=m;d.style.cssText='position:fixed;left:50%;top:calc(env(safe-area-inset-top) + 14px);transform:translateX(-50%);background:var(--ink);color:var(--bg);padding:10px 16px;border-radius:99px;z-index:99;font-size:.9rem;max-width:90%;text-align:center';document.body.appendChild(d);setTimeout(()=>d.remove(),2600)}
function praise(ok,streak){
  const old=$('.praise');if(old)old.remove();
  const d=document.createElement('div');d.className='praise '+(ok?'good':'miss');
  if(ok){
    const wd=['آفرین!','عالی!','دمت گرم!','احسنت!','درسته!'][Math.floor(Math.random()*5)];
    d.innerHTML=`<div class="pc"><svg viewBox="0 0 52 52" width="76" height="76"><circle class="pcirc" cx="26" cy="26" r="23"/><path class="pchk" d="M14 27l8 8 16-17"/></svg><div class="pw">${wd}</div>${streak?`<div class="pst">🔥 ${streak} in a row</div>`:'<div class="pe">Correct</div>'}</div>`+Array.from({length:10},(_,i)=>`<b class="sp" style="--a:${i*36}deg">✦</b>`).join('');
  }else{
    d.innerHTML=`<div class="pc"><div class="pw sm">نزدیک بود</div><div class="pe">Review it below</div></div>`;
  }
  document.body.appendChild(d);setTimeout(()=>d.remove(),ok?1400:1100);
  FX.vibrate(ok?18:[25,40,25]);
}
function confetti(){const d=document.createElement('div');d.className='confetti';const cols=['#6ee7d4','#8b9bff','#fbbf24','#ff8a9a','#4ade80'];
  d.innerHTML=Array.from({length:36},(_,i)=>`<i style="left:${Math.random()*100}%;background:${cols[i%5]};animation-delay:${Math.random()*.6}s;transform:rotate(${Math.random()*90}deg)"></i>`).join('');
  document.body.appendChild(d);setTimeout(()=>d.remove(),3600)}
function modal(html){closeModal();const o=document.createElement('div');o.className='ov';o.id='ov';o.innerHTML='<div class="sheet">'+html+'</div>';o.addEventListener('click',e=>{if(e.target===o)closeModal()});document.body.appendChild(o)}
function closeModal(){const o=$('#ov');if(o)o.remove()}
function page(html,bar,keep){const y=window.scrollY,m=$('#main');m.innerHTML=html;
  // the action bar must sit outside #main: its animation would make the bar scroll with the page
  document.querySelectorAll('body>.bot,body>.qhead').forEach(b=>b.remove());const bb=m.querySelector('.bot');if(bb)document.body.appendChild(bb);
  // the question header is fixed at the top, outside #main for the same reason; #main leaves room for it
  const qh=m.querySelector('.qhead');m.classList.toggle('quiz',!!qh);if(qh){document.body.appendChild(qh);qhH()}
  skin();window.scrollTo(0,keep?y:0)}
/* game look on every page; a game theme also brings its own picture background */
function skin(){const b=document.body;if(!b)return;const g=document.documentElement.hasAttribute('data-game');
  b.classList.add('gskin');b.classList.toggle('gall',g)}
function qhH(){const q=$('body>.qhead');if(q)document.documentElement.style.setProperty('--qh',q.offsetHeight+'px')}
window.addEventListener('resize',()=>{tabH();qhH()});
function renderTabs(){
  const T=[['home','🏠','Home'],['learn','📖','Learn'],['game','🎮','Play'],['exam','⏱️','Exam'],['stats','📈','Stats'],['settings','⚙️','Settings']];
  const dot=claimable();
  $('#tabs').innerHTML=T.map(t=>`<button data-act="tab" data-v="${t[0]}" class="${tab===t[0]||(t[0]==='game'&&tab==='base')||(t[0]==='settings'&&tab==='courses')?'on':''}"><span class="i">${t[1]}${t[0]==='game'&&dot?'<em class="dot"></em>':''}</span>${t[2]}</button>`).join('');
  tabH();
}
/* the menu bar is on every page; bars at the bottom of a page sit just above it */
function tabH(){const t=$('#tabs');if(t)document.documentElement.style.setProperty('--tabh',t.offsetHeight+'px')}
window.addEventListener('resize',tabH);
function go(t){ACT=null;RV.on=false;RV.tok++;vStop();tab=t;renderTabs();({home:renderHome,learn:renderLearn,exam:renderExams,courses:renderCourses,stats:renderStats,settings:renderSettings,setup:renderSetup,game:renderGame,base:renderBase})[t]()}
/* ---- colour themes (themes.js, copied from Shift Priority) ---- */
const hexN=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
const mixC=(a,b,t)=>'#'+hexN(a).map((v,i)=>Math.round(v*(1-t)+hexN(b)[i]*t).toString(16).padStart(2,'0')).join('');
const lum=h=>{const c=hexN(h).map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*c[0]+.7152*c[1]+.0722*c[2]};
const contrast=(a,b)=>{const x=lum(a),y=lum(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
const rgba=(h,a)=>`rgba(${hexN(h).join(',')},${a})`;
const THEMES=window.THEMES||[];
const CLASSIC={light:['#0f9b8e','#5b6df0'],dark:['#6ee7d4','#8b9bff'],bg:{light:'#f3f5ff',dark:'#0a0f1f'}};
const darkMQ=window.matchMedia?matchMedia('(prefers-color-scheme: dark)'):null;
const isDark=()=>SET.theme==='dark'||(SET.theme!=='light'&&!(darkMQ&&!darkMQ.matches));
function palVars(c,dark){
  const[bg,card,line,ink,mut,ac0,ac2]=c;
  // keep the accent readable on the page (it is also used for text)
  let ac=ac0;for(let i=0;i<8&&contrast(ac,bg)<3.2;i++)ac=mixC(ac,dark?'#ffffff':'#000000',.14);
  const acink=contrast(ac,'#ffffff')>=contrast(ac,'#0b0b0b')?'#ffffff':'#0b0b0b';
  const acsh=acink==='#ffffff'?'0 2px 0 rgba(0,0,0,.35)':'0 1px 0 rgba(255,255,255,.45)';
  return `--acsh:${acsh};--bg:${bg};--sf:${card};--sf2:${mixC(card,line,.45)};--ink:${ink};--mut:${mut};--line:${line};--ac:${ac};--ac2:${ac2};--acink:${acink};`+
    `--sel:${mixC(card,ac,dark?.2:.12)};--grad:linear-gradient(135deg,${ac},${mixC(ac,dark?'#ffffff':'#000000',.16)});--glow1:${rgba(ac,.12)};--glow2:${rgba(ac2,.1)};color-scheme:${dark?'dark':'light'}`;
}
function applyLook(){
  const r=document.documentElement,dark=isDark();
  r.setAttribute('data-theme',dark?'dark':'light');
  r.style.setProperty('--fs',SET.size);
  const th=THEMES.find(t=>t[0]===SET.pal);
  let css=$('#palcss');if(!css){css=document.createElement('style');css.id='palcss';document.head.appendChild(css)}
  const sc=(window.SCENES||{})[th&&th[3]==='game'?th[0]:'g-arena']||'none';
  css.textContent=(th?`:root[data-theme]{${palVars(th[dark?5:4],dark)}}`:'')+`:root{--scene:${sc}}`+(th?'':`:root[data-theme]{--acsh:${dark?'0 1px 0 rgba(255,255,255,.45)':'0 2px 0 rgba(0,0,0,.35)'}}`);
  r.toggleAttribute('data-game',!!(th&&th[3]==='game'));skin();
  const m=document.querySelector('meta[name=theme-color]');if(m)m.content=th?th[dark?5:4][0]:CLASSIC.bg[dark?'dark':'light'];
  tabH();
}
if(darkMQ&&darkMQ.addEventListener)darkMQ.addEventListener('change',()=>{if(SET.theme==='auto'){applyLook();if(tab==='settings')renderSettings(true)}});

/* ================= Home ================= */
function renderHome(keep){
  const keys=activeKeys(),pool=qsIn(keys),ids=pool.map(q=>q.id);
  const seen=ids.filter(i=>P[i]).length,weak=ids.filter(isWeak).length,due=ids.filter(i=>P[i]&&!isWeak(i)&&isDue(i)).length;
  const att=ids.reduce((a,i)=>a+(P[i]?P[i].c+P[i].w:0),0),cor=ids.reduce((a,i)=>a+(P[i]?P[i].c:0),0);
  const mas=ids.filter(mastered).length;
  const active=PACKS.filter(packOn).map(p=>p.short).join(', ')||'none';
  const res=S&&!S.done,np=pausedL().length;
  const mp=pct(mas,pool.length);
  page(`${playerBar()}${leagueCard()}<div class="hero"><div class="ring" style="--p:${mp}"><i>${mp}%</i></div><div><h1>StudyPrep</h1>
  <p class="sub">Active: ${esc(active)} · ${keys.length} sections · ${pool.length} questions<br>${mas} mastered${(S&&S.best)?'':''}</p></div></div>
  ${res?`<div class="card" style="border-color:var(--ac)"><div class="spread"><div><b>Continue where you stopped</b><div class="mut">${esc(S.mode)} · question ${Math.min(S.i+1,S.items.length)} of ${S.items.length}${S.left!=null?' · '+fmt(S.left)+' left':''}</div></div></div>
  <div class="row" style="margin-top:10px"><button data-act="resume">Resume</button><button class="plain" data-act="tab" data-v="exam">All sessions</button></div></div>`:np?`<div class="card" style="border-color:var(--ac)"><div class="spread"><div><b>${np} unfinished session${np>1?'s':''}</b><div class="mut">${esc(sessLbl(pausedL()[0]))}</div></div><button class="sm" data-act="tab" data-v="exam">Open</button></div></div>`:''}
  ${chestRow()}${questCard()}
  ${(!res&&st.get('rlast')&&PACKS.some(p=>p.study&&p.study[(st.get('rlast')||'').split(':')[1]]))?`<div class="card"><div class="spread"><div><b>Continue reading</b><div class="mut">Pick up your notes where you left off</div></div><button class="sm" data-act="rdresume">Open</button></div></div>`:''}
  ${pool.length?coachCard(pool,ids,weak,due,seen):''}
  ${bkDue()?`<div class="card"><div class="spread"><div><b>💾 Back up your progress</b><div class="mut">${st.get('bkat')?'Last backup '+ago(st.get('bkat')):'You have not saved a backup yet'} · keeps your progress safe</div></div><button class="sm" data-act="export">Save</button></div></div>`:''}
  ${pool.length?`<div class="tiles">
   <button class="tile plain" data-act="tab" data-v="learn"><span class="ic">📖</span><span><b>Learn</b><span class="d">Read the key points of a section first</span></span></button>
   <button class="tile plain" data-act="setup" data-v="practice"><span class="ic">🎓</span><span><b>Practice</b><span class="d">Answer, see why, retry what you miss</span></span></button>
   <button class="tile plain" data-act="tab" data-v="exam"><span class="ic">⏱️</span><span><b>Exam</b><span class="d">Mock exam, timed tests, saved sessions</span></span></button>
   <button class="tile plain" data-act="setup" data-v="review"><span class="ic">🎯</span><span><b>Smart review</b><span class="d">Weak and due questions first</span></span>${weak+due?`<span class="badge">${weak+due}</span>`:''}</button>
   <button class="tile plain" data-act="tab" data-v="game"><span class="ic">🎮</span><span><b>Game</b><span class="d">Hearts, combos, levels and stars · یادگیری با بازی</span></span></button>
  </div>
  <div class="card"><h2>Progress</h2><div class="stats">
   <div class="stat"><b>${pct(seen,pool.length)}%</b><span>seen</span></div>
   <div class="stat"><b>${att?pct(cor,att):'–'}${att?'%':''}</b><span>accuracy</span></div>
   <div class="stat"><b>${mas}</b><span>mastered</span></div></div>
   <p class="mut" style="margin:10px 0 0">${weak?weak+' question'+(weak>1?'s':'')+' need work. ':''}Mastered = answered correctly 3 times in a row.</p></div>`
  :`<div class="card empty">No sections are on. Open <b>Courses</b> and turn a course on.</div>`}`,false,keep===true);
  renderTabs();if(calDue()&&!_calShown&&!keep){_calShown=true;setTimeout(()=>{if(tab==='home'&&!$('#ov'))calModal()},500)}
}

/* ================= Exam coach ================= */
/* remembers where you are weak and what you did last, and suggests the next step */
function weakSecs(){
  const out=[];
  PACKS.filter(packOn).forEach(p=>Object.keys(p.sections).forEach(s=>{
    if(!secOn(p,s))return;const k=secKey(p,s),ids=qsIn([k]).map(q=>q.id);
    const a=ids.reduce((x,i)=>x+(P[i]?P[i].c+P[i].w:0),0),c=ids.reduce((x,i)=>x+(P[i]?P[i].c:0),0);
    if(a>=3)out.push({k,n:p.short+' · '+secTitle(p,s),acc:pct(c,a),w:ids.filter(isWeak).length});
  }));
  return out.sort((x,y)=>x.acc-y.acc);
}
function readiness(pool){let s=0;pool.forEach(q=>{const p=P[q.id];s+=!p?.3:p.b>=3?.95:p.l===1?.75:.35});return Math.round(100+800*s/pool.length)}
function nextRead(){const rd=readSt();for(const p of PACKS.filter(packOn))for(const k of Object.keys(p.sections))if(secOn(p,k)&&p.study&&p.study[k]&&!rd[secKey(p,k)])return{sk:secKey(p,k),t:p.short+' · '+(secNo(p,k)?secNo(p,k)+' · ':'')+(p.study[k].t||[p.sections[k].en])[0]};return null}
const bkDue=()=>Object.keys(P).length>=20&&(!st.get('bkat')||now()-st.get('bkat')>7*DAY);
function coachCard(pool,ids,weak,due,seen){
  const sc=readiness(pool),ws=weakSecs().filter(w=>w.acc<80).slice(0,3),la=st.get('lastact'),today=dayRow().a,goal=SET.goal||30;
  let left=null;if(SET.examDate){const d=new Date(SET.examDate+'T00:00:00');left=Math.ceil((d-new Date(new Date().toDateString()))/DAY)}
  const unseen=pool.length-seen;
  const nr=nextRead();
  let step;
  if(weak+due)step=`<button class="sm" data-act="setup" data-v="review">Smart review · ${weak+due}</button><span class="mut">Fix your weak and due questions first</span>`;
  else if(nr)step=`<button class="sm" data-act="read" data-v="${esc(nr.sk)}">Read</button><span class="mut">${esc(nr.t)}</span>`;
  else if(unseen)step=`<button class="sm" data-act="setup" data-v="practice">Practice</button><span class="mut">${unseen} questions you have not seen yet</span>`;
  else step=`<button class="sm" data-act="setup" data-v="exam">Take an exam</button><span class="mut">Test yourself under time pressure</span>`;
  return `<div class="card coach"><div class="spread"><h2 style="margin:0">🎯 Exam coach</h2>${left!=null?`<span class="badge" style="margin:0">${left>0?left+' days to exam':left===0?'Exam today!':'Exam date passed'}</span>`:`<button class="plain sm" data-act="tab" data-v="settings">Set exam date</button>`}</div>
   <div class="stats" style="margin-top:10px"><div class="stat"><b class="${sc>=750?'ok':''}">${sc}</b><span>readiness / 900</span></div><div class="stat"><b>${today}/${goal}</b><span>answered today</span></div><div class="stat"><b>${weak}</b><span>weak questions</span></div></div>
   <div class="pbar" style="margin-top:10px"><i style="width:${Math.min(100,pct(today,goal))}%"></i></div>
   ${left>0&&unseen?`<p class="mut" style="margin:8px 0 0">To see every question before the exam: about <b>${Math.ceil(unseen/left)}</b> new questions a day.</p>`:''}
   <div class="lbl">Next step</div><div class="row">${step}</div>
   ${ws.length?`<div class="lbl">Your weakest sections</div>${ws.map(w=>`<div class="spread" style="margin:6px 0"><div><div>${esc(w.n)}</div><div class="mut">${w.acc}% correct${w.w?' · '+w.w+' weak questions':''}</div></div><button class="plain sm" data-act="drillsec" data-v="${esc(w.k)}">Drill</button></div>`).join('')}`:''}
   ${la?`<p class="mut" style="margin:10px 0 0">Last studied: ${esc(la.mode+(la.what||''))} · ${ago(la.t)}</p>`:''}</div>`;
}

/* ================= Backup ================= */
const BK=['game','prog','hist','day','read','rpos','rvoice','rlast','sess','paused','last','set','cfg','userpacks','lastact'];
function backupData(){const d={app:'StudyPrep',v:5,at:new Date().toISOString()};BK.forEach(k=>{const v=st.get(k,undefined);if(v!==undefined)d[k]=v});d.prog=P;d.set=SET;d.game=G;d.day=DAYS;if(S&&!S.done)d.sess=S;return d}
function saveBackup(){
  const b=new Blob([JSON.stringify(backupData())],{type:'application/json'}),a=document.createElement('a');
  a.href=URL.createObjectURL(b);a.download='studyprep-backup-'+dkey()+'.json';document.body.appendChild(a);a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1500);st.set('bkat',now());toast('Backup saved to your Downloads folder');
}
function restoreBackup(txt){
  const d=JSON.parse(txt);if(!d||typeof d.prog!=='object')throw 0;
  BK.forEach(k=>{if(d[k]!==undefined)st.set(k,d[k])});st.set('bkat',now());
  toast('Backup restored');setTimeout(()=>location.reload(),600);
}

/* ================= Setup ================= */
/* setup: equal-width segmented choices, and each course as a card with a tidy list of sections */
const SETX={};
function renderSetup(keep){
  const keys=activeKeys();
  if(!cfg.secs)cfg.secs=keys.slice();
  cfg.secs=cfg.secs.filter(k=>keys.includes(k));
  const pool=qsIn(cfg.secs),none=!cfg.secs.length;
  const seg=(items,cur,act)=>`<div class="seg" style="--n:${items.length}">${items.map(m=>`<button class="${String(cur)===String(m[0])?'on':''}" data-act="${act}" data-v="${m[0]}">${m[1]}</button>`).join('')}</div>`;
  const modes=[['practice','Practice'],['exam','Exam'],['review','Review'],['game','🎮 Game']];
  const ns=[[10,'10'],[20,'20'],[30,'30'],[60,'60'],[90,'90'],[9999,'All']];
  const tm=[['off','Off'],['auto','Auto'],['15','15m'],['30','30m'],['60','60m'],['90','90m']];
  const groups=PACKS.filter(packOn).map(p=>{
    const ks=Object.keys(p.sections).filter(s=>secOn(p,s));if(!ks.length)return '';
    const gk=ks.map(x=>secKey(p,x)),sel=gk.filter(k=>cfg.secs.includes(k)),nq=qsIn(sel).length,open=!!SETX[p.id];
    return `<div class="card sg"><div class="sghead"><div class="sgname">${p.cover?`<img src="${esc(p.cover)}" alt="">`:`<span class="sgic">📚</span>`}<div><b>${esc(p.short==='Book'?'Textbook':p.short)}</b><div class="mut">${sel.length} of ${ks.length} ${p.lab?'chapters':'sections'} · ${nq} questions</div></div></div></div>
     <div class="seg seg4" style="--n:4;margin-top:10px"><button class="${sel.length===ks.length?'on':''}" data-act="cfgall" data-v="${esc(p.id)}">All</button><button class="${sel.length?'':'on'}" data-act="cfgnone" data-v="${esc(p.id)}">None</button><button data-act="cfgonly" data-v="${esc(p.id)}">Only this</button><button data-act="cfgexp" data-v="${esc(p.id)}">${open?'Hide ▴':'Pick ▾'}</button></div>
     ${open&&!sel.length?`<p class="mut" style="margin:8px 2px 0">Tick the ${p.lab?'chapters':'sections'} you want.</p>`:''}
     ${open?`<div class="slist">${ks.map(s=>{const k=secKey(p,s),on=cfg.secs.includes(k),n=qsIn([k]).length;
       return `<button class="srow ${on?'on':''}" data-act="cfgsec" data-v="${esc(k)}" aria-pressed="${on}"><span class="ck">${on?'✓':''}</span><span class="no">${esc(s)}</span><span class="tt">${esc(p.sections[s].en)}</span><span class="nq">${n}</span></button>`}).join('')}</div>`:''}</div>`}).join('');
  page(`<div class="spread"><h1>Start a session</h1><button class="plain sm" data-act="tab" data-v="exam">Back</button></div>
  <div class="card"><div class="lbl" style="margin-top:0">Mode</div>${seg(modes,cfg.mode,'cfgmode')}
   <div class="lbl">Questions</div>${seg(ns,cfg.n,'cfgn')}
   <div class="lbl">Timer</div>${seg(tm,cfg.timer,'cfgtimer')}
   <p class="mut" style="margin:10px 0 0">Auto = 1 min per question, 3 min per scenario.${cfg.mode==='exam'?' Exam pages show English only unless you change that in Settings.':''}</p></div>
  <div class="lbl">Sections · ${cfg.secs.length} selected</div><div class="seg" style="--n:2;margin-bottom:12px"><button class="${cfg.secs.length===keys.length?'on':''}" data-act="cfgevery">✓ Select all</button><button class="${none?'on':''}" data-act="cfgclear">✕ Select none</button></div>${groups}
  <div class="bot"><div class="in"><button data-act="begin" ${pool.length?'':'disabled'}>${none?'Pick at least one section':cfg.mode==='game'?'▶ Play · '+Math.min(cfg.n,pool.length)+' questions':'Start · '+(cfg.n===9999?pool.length:Math.min(cfg.n,pool.length))+' questions'}</button></div></div>`,false,keep===true);
}

/* ================= Quiz ================= */
/* ---- AI tutor: explains answers and chats about a question. Uses the viewer's own free API key
   (kept only on this device, never in backups). Providers are a table, so adding one is one entry. ---- */
const AIP={
  gemini:{n:'Google Gemini (free)',m:'gemini-flash-latest',key:'https://aistudio.google.com/apikey'},
  openrouter:{n:'OpenRouter (free models, incl. Qwen / DeepSeek)',m:'openrouter/free',key:'https://openrouter.ai/keys',
    url:'https://openrouter.ai/api/v1/chat/completions'},
  groq:{n:'Groq (fast, free)',m:'openai/gpt-oss-20b',key:'https://console.groq.com/keys',
    url:'https://api.groq.com/openai/v1/chat/completions'}
};
const aiCfg=()=>Object.assign({p:'gemini',m:{},lang:'fa'},SET.ai||{});
const aiKeys=()=>st.get('aikey',{});
const aiModel=c=>(c.m[c.p]||'').trim()||AIP[c.p].m;
const aiReady=()=>!!aiKeys()[aiCfg().p];
/* the key is saved as soon as it is typed or pasted, and again with the Save button */
function aiSaveKey(v){v=String(v||'').trim();const k=aiKeys();k[aiCfg().p]=v;st.set('aikey',k);
  const ok=aiKeys()[aiCfg().p]===v,s=$('#aiks');
  if(s)s.textContent=!v?'No key saved yet · هنوز کلیدی ذخیره نشده':ok?`✅ Key saved on this device (…${v.slice(-4)}) · کلید ذخیره شد`:'⚠️ This browser would not save the key (private mode?) · مرورگر اجازه‌ی ذخیره نداد';
  return ok&&!!v}
// Free models are often "busy" (503/429) or hang without answering (408 = our own time limit).
// Then try again, moving to a lighter Gemini model, so one busy model does not stop the tutor.
const AIBUSY=[408,429,500,502,503,504],AIFALL=['gemini-flash-lite-latest','gemini-2.5-flash'];
function aiCall(sys,msgs,onPart){
  const c=aiCfg(),key=aiKeys()[c.p],model=aiModel(c);
  if(!key)return Promise.reject(new Error('Add your AI key in Settings first.'));
  const tries=c.p==='gemini'?[model].concat(AIFALL.filter(m=>m!==model)):[model,model];
  let got=false;const part=x=>{got=true;if(onPart)onPart(x)};
  const next=i=>aiOnce(c,key,tries[i],sys,msgs,part).catch(e=>{
    if(got||!AIBUSY.includes(e.status))throw e;
    if(i+1>=tries.length)throw new Error('The AI is busy right now. Wait a minute and try again, or pick another provider in Settings. · هوش مصنوعی الان شلوغ است؛ یک دقیقه بعد دوباره امتحان کنید.');
    return new Promise(ok=>setTimeout(ok,1500*(i+1))).then(()=>next(i+1))});
  return next(0);
}
// Gemini Flash "thinks" before answering, which made every answer take many seconds; short tutoring answers don't need it.
// A model that refuses a thinking setting is remembered and asked again without it.
const AINOTHINK=st.get('ainothink',{});
const noThink=x=>x.replace(/<think>[\s\S]*?(<\/think>|$)/g,'').trim();
function aiOnce(c,key,model,sys,msgs,onPart){
  // a model that has not started answering in 20 s is usually stuck; giving up early lets aiCall move to the next model
  const ctl=new AbortController();let t=setTimeout(()=>ctl.abort(),20000);
  const slow=()=>Object.assign(new Error('The AI took too long. Try again. · پاسخ هوش مصنوعی خیلی طول کشید؛ دوباره امتحان کنید.'),{status:408});
  const lv=AINOTHINK[c.p+model]|0,think=lv<2;
  let req;
  if(c.p==='gemini')req=fetch('https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+':streamGenerateContent?alt=sse',{method:'POST',signal:ctl.signal,
    headers:{'Content-Type':'application/json','x-goog-api-key':key},
    body:JSON.stringify(Object.assign({systemInstruction:{parts:[{text:sys}]},contents:msgs.map(m=>({role:m.r==='u'?'user':'model',parts:[{text:m.t}]}))},
      think&&/flash/i.test(model)?{generationConfig:{thinkingConfig:lv?{thinkingLevel:'minimal'}:{thinkingBudget:0}}}:{}))});
  else req=fetch(AIP[c.p].url,{method:'POST',signal:ctl.signal,
    headers:{'Content-Type':'application/json','Authorization':'Bearer '+key,'X-Title':'StudyPrep'},
    body:JSON.stringify(Object.assign({model,stream:true,messages:[{role:'system',content:sys}].concat(msgs.map(m=>({role:m.r==='u'?'user':'assistant',content:m.t})))},
      think&&!lv&&c.p==='groq'&&/gpt-oss/i.test(model)?{reasoning_effort:'low'}:{}))});
  return req.then(r=>{
    if(!r.ok)return r.json().catch(()=>({})).then(d=>{clearTimeout(t);
      const msg=(d.error&&(d.error.message||d.error))||(Array.isArray(d)&&d[0]&&d[0].error&&d[0].error.message)||('Error '+r.status);
      if(think&&r.status===400&&(c.p==='gemini'?/flash/i.test(model):/gpt-oss/i.test(model))){AINOTHINK[c.p+model]=c.p==='gemini'?lv+1:2;st.set('ainothink',AINOTHINK);return aiOnce(c,key,model,sys,msgs,onPart)}
      throw Object.assign(new Error(msg),{status:r.status})});
    // read the answer piece by piece, so text shows up as soon as it starts
    const rd=r.body.getReader(),dec=new TextDecoder();let buf='',out='';
    const line=l=>{l=l.trim();if(!l.startsWith('data:'))return;const p=l.slice(5).trim();if(!p||p==='[DONE]')return;
      let d;try{d=JSON.parse(p)}catch(e){return}
      if(d.error)throw Object.assign(new Error(d.error.message||'AI error'),{status:d.error.code});
      const x=c.p==='gemini'?((((d.candidates||[])[0]||{}).content||{}).parts||[]).filter(q=>!q.thought).map(q=>q.text||'').join(''):((((d.choices||[])[0]||{}).delta||{}).content||'');
      if(x){out+=x;const v=noThink(out);if(v&&onPart)onPart(v)}};
    const pump=()=>rd.read().then(({done,value})=>{
      clearTimeout(t);t=setTimeout(()=>ctl.abort(),30000);
      buf+=dec.decode(value||new Uint8Array(),{stream:!done});const ls=buf.split('\n');buf=done?'':ls.pop();ls.forEach(line);
      if(done){if(buf)line(buf);clearTimeout(t);const v=noThink(out);if(!v)throw new Error('The AI sent an empty answer. Try again or pick another model.');return v}
      return pump()},e=>{clearTimeout(t);if(e.name!=='AbortError')throw e;
        // stalled mid-answer: keep what already arrived rather than throwing it away
        const v=noThink(out);if(v)return v;throw slow()});
    return pump();
  },e=>{clearTimeout(t);throw e.name==='AbortError'?slow():new Error('No connection to the AI. Check the internet.')});
}
// light markdown: bold, inline code, bullets; a line with any Persian reads right-to-left; everything else escaped
const aiMd=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/`([^`]+)`/g,'<code>$1</code>').replace(/^\s*[-*•]\s+/gm,'• ').replace(/^#+\s*/gm,'').split('\n').map(l=>l.trim()?`<div dir="${/[\u0600-\u06FF]/.test(l)?'rtl':'ltr'}">${l}</div>`:'').join('');
function aiContext(it,q){
  const L='ABCDEFGH';
  if(q.k==='m'){const opts=it.ord.map((oi,d)=>L[d]+') '+q.o[oi]).join('\n'),right=L[it.ord.indexOf(0)],mine=it.pick!=null?L[it.pick]:'none';
    return `Course: ${secName(q)}\nQuestion: ${q.q}\nOptions:\n${opts}\nCorrect answer: ${right}\nStudent chose: ${mine} (${it.ok?'correct':'wrong'})\nBook explanation: ${q.en||''}`}
  return `Course: ${secName(q)}\nScenario: ${q.title}\nZones: ${q.zones.join(', ')}\n`+q.items.map((x,i)=>`- ${x[0]} → correct: ${q.zones[x[1]]}; student: ${it.ans[i]!=null?q.zones[it.ans[i]]:'none'}`).join('\n')+`\nBook explanation: ${q.en||''}`;
}
const AIH={};
function aiOpen(){
  const it=cur(),q=Q[it.id];
  if(!aiReady()){modal(`<h3>🤖 AI tutor</h3><p>To use the AI tutor, add a free key once in Settings → AI tutor.</p><p class="fa">برای استفاده از هوش مصنوعی، یک بار کلید رایگان را در تنظیمات وارد کنید.</p><button data-act="aiset">Open Settings</button><button class="plain" data-act="close">Close</button>`);return}
  const h=AIH[it.id]||(AIH[it.id]={it,q,m:[]});h.it=it;
  modal(`<div class="spread"><h3 style="margin:0">🤖 AI tutor</h3><span class="mut" style="font-size:.75rem">${esc(AIP[aiCfg().p].n.split(' (')[0])} · ${esc(aiModel(aiCfg()))}</span></div>
    <div id="ailog" class="ailog${aiCfg().lang==='fa'?' aifa':''}"></div>
    <div class="aiq"><input class="inp" id="aiin" dir="auto" placeholder="Ask about this question… · سؤالتان را بپرسید" enterkeyhint="send"><button data-act="aisend" aria-label="Send">➤</button></div>
    <div class="chips" style="margin-top:6px"><button class="chip" data-act="aiask" data-v="ex">Real-world example · مثال واقعی</button><button class="chip" data-act="aiask" data-v="sim">Explain simpler · ساده‌تر</button><button class="chip" data-act="aiask" data-v="mem">Memory trick · روش یادسپاری</button></div>`);
  aiDraw(h);
  if(!h.m.length)aiSend(h,it.ok?'Explain briefly why this answer is correct and why each other option is wrong.':'I got this wrong. Explain why my choice is wrong, why the correct answer is right, and how to spot it next time.');
}
function aiDraw(h){const b=$('#ailog');if(!b)return;
  b.innerHTML=h.m.map(m=>`<div class="aim ${m.r}" dir="auto">${m.r==='u'?esc(m.t):aiMd(m.t)}</div>`).join('')+(h.busy&&(h.m[h.m.length-1]||{}).r!=='a'?'<div class="aim a mut">…thinking · در حال فکر کردن</div>':'')+(h.err?`<div class="aim err">${esc(h.err)}</div>`:'');
  b.scrollTop=b.scrollHeight}
function aiSend(h,text){
  text=String(text||'').trim();if(!text||h.busy)return;
  const c=aiCfg(),lang=c.lang==='en'?'Answer in simple English.':'Answer in Persian (Farsi), keeping technical terms in English, e.g. "Firewall (فایروال)".';
  const sys=`You are a friendly tutor helping a student prepare for an IT certification exam (such as CompTIA Security+). ${lang} Be short and clear: at most about 150 words unless asked for more. Use bullets for lists. Only talk about this subject.\n\nThe question the student is looking at:\n${aiContext(h.it,h.q)}`;
  h.m.push({r:'u',t:text});h.busy=true;h.err='';aiDraw(h);
  const msgs=h.m.filter(m=>!m.fail),live={r:'a',t:''};let raf=0;
  aiCall(sys,msgs,x=>{live.t=x;if(!h.m.includes(live))h.m.push(live);if(!raf)raf=requestAnimationFrame(()=>{raf=0;aiDraw(h)})})
    .then(x=>{live.t=x;if(!h.m.includes(live))h.m.push(live)},e=>{const i=h.m.indexOf(live);if(i>=0)h.m.splice(i,1);h.m[h.m.length-1].fail=true;h.err=e.message}).then(()=>{h.busy=false;aiDraw(h)});
}
const AIQ={ex:'Give me one short real-world example of this.',sim:'Explain it again, much simpler, like I am new to IT.',mem:'Give me a short memory trick to remember this for the exam.'};
function aiTest(){const s=$('#aist');if(s)s.textContent='Testing…';
  aiCall('Reply with one short friendly sentence.',[{r:'u',t:'Say hello to a student in English and Persian.'}]).then(x=>{if(s)s.textContent='✅ '+x},e=>{if(s)s.textContent='⚠️ '+e.message})}
function fbBlock(it,q){
  const fx=faExp()&&(q.fa||q.hf);
  const open=it.fe||SET.faExp==='auto';
  const faTxt=(fx?`${open?`<div class="why fa" style="color:var(--ink)">${q.hf?`<b>💡 ${FA(q.hf)}</b><br>`:''}${FA(q.fa||'')}</div>`:`<button class="plain sm" data-act="faexp">📖 توضیح فارسی</button>`}`:'')+
    (S.mode!=='exam'?` <button class="plain sm" data-act="ai">🤖 Ask AI · از هوش مصنوعی بپرس</button>`:'');
  if(q.k==='m'){
    const right=q.o[0];
    return `<div class="fb"><div class="${it.ok?'ok':'no'}">${it.ok?'✔ Correct':'✘ Incorrect'}${it.ok?'':' — this question will come back later'}</div>
      ${it.ok?'':`<div class="ans"><b>Correct answer:</b> ${W(right)}</div>`}
      <div class="why">${W(q.en)}</div>${faTxt}
      ${whatsWhat(q,it,open)}</div>`;
  }
  return `<div class="fb"><div class="${it.ok?'ok':'no'}">${it.ok?'✔ All correct':'Score: '+Math.round(it.frac*100)+'%'}</div>
    <div class="why">${W(q.en)}</div>${faTxt}
    <div class="lbl">What each zone means</div>${q.zones.map((z,zi)=>`<div style="margin:4px 0"><b>${W(z)}</b> — ${W((q.zd[zi]||[])[0]||'')}${open&&(q.zd[zi]||[])[1]?`<div class="fa">${FA(q.zd[zi][1])}</div>`:''}</div>`).join('')}
    ${whatsWhat(q,it,open)}</div>`;
}
function renderQuiz(keep){
  TX=[];
  if(!S||S.done){go('home');return}
  if(S.i>=S.items.length)S.i=S.items.length-1;
  const it=cur(),q=Q[it.id];
  if(!q){S.items.splice(S.i,1);if(!S.items.length){finish();return}return renderQuiz()}
  const exam=S.mode==='exam',game=S.mode==='game',n=S.items.length;
  if(!it.ck&&!it.t0)it.t0=now();
  const base=S.items.filter(x=>!x.re).length,pos=S.items.slice(0,S.i+1).filter(x=>!x.re).length,doneN=S.items.filter(x=>!x.re&&x.ck).length;
  ACT='quiz';
  if(!keep&&SET.auto&&!it.ck){const tx=q.k==='m'?q.q:q.title;setTimeout(()=>{if(ACT==='quiz'&&cur()===it)speak(tx,{quiet:true})},450)}
  let body='';
  const fa=faAvail();
  const sf0=showFa(it);
  const faBtn=fa&&!(S.mode!=='exam'&&SET.fa==='always')?`<button class="plain sm" data-act="fa">${it.fa?'Hide':'Show'} Persian · فارسی</button>`:'';
  const hintBtn=sf0&&q.k==='m'&&q.hf&&!it.ck?`<button class="plain sm" data-act="hint">${it.hint?'Hide hint':'💡 Hint · راهنما'}</button>`:'';
  if(q.k==='m'){
    const sf=sf0;
    body=`<div class="tag spread"><span>${esc(secName(q))}${it.re?' · ↻ retry':''}</span><button class="plain sm spk" data-act="speakq" aria-label="Read the question aloud">🔊</button></div><p class="q">${W(q.q)}</p>
    ${sf&&q.qf?`<div class="fabox">${FA(q.qf)}${it.hint&&q.hf&&!it.ck?`<hr style="border:0;border-top:1px dashed var(--line)"><b>💡 ${FA(q.hf)}</b>`:''}</div>`:''}
    ${it.ck?'':`<p class="hint">Tap the circle to choose · tap any word to see its meaning</p>`}
    <div class="opts">${it.ord.map((oi,d)=>{
      let c='opt2';if(it.ck){if(oi===0)c+=' right';else if(it.pick===d)c+=' wrong'}else if(it.pick===d)c+=' sel';else if(it.hide&&it.hide.includes(d))c+=' gone';
      return `<div class="${c}"><button class="rc" data-act="pick" data-v="${d}" aria-label="Choose option ${'ABCDEFGH'[d]}" aria-pressed="${it.pick===d}">${'ABCDEFGH'[d]}</button><div class="t">${W(q.o[oi])}${sf&&q.of[oi]?`<div class="fa">${FA(q.of[oi])}</div>`:''}</div></div>`}).join('')}</div>
    ${it.ck?fbBlock(it,q):''}`;
  }else{
    const sf=sf0;
    body=`<div class="tag spread"><span>${esc(secName(q))} · scenario${it.re?' · ↻ retry':''}</span><button class="plain sm spk" data-act="speakq" aria-label="Read the question aloud">🔊</button></div><p class="q">${W(q.title)}</p>
    ${sf&&q.tf?`<div class="fabox">${FA(q.tf)}</div>`:''}
    ${it.ck?'':`<p class="hint">Tap one answer for each line · tap it again to clear</p>`}
    <div class="opts">${it.ord.map(ii=>{const x=q.items[ii];const a=it.ans[ii];
      const rc=it.ck?(a===x[1]?' rk':' rn'):'';
      return `<div class="pbq${rc}"><div>${W(x[0])}</div>${sf&&x[2]?`<div class="fa">${FA(x[2])}</div>`:''}
      <div class="zch">${q.zones.map((z,zi)=>{let c='zc';if(it.ck){if(zi===x[1])c+=' right';else if(a===zi)c+=' wrong'}else if(a===zi)c+=' on';
        return `<button class="${c}" data-act="zpick" data-v="${ii}:${zi}" ${it.ck?'disabled':''} aria-pressed="${a===zi}">${esc(z)}${sf&&q.zf[zi]&&q.zf[zi]!==z?`<span class="fa">${esc(q.zf[zi])}</span>`:''}</button>`}).join('')}</div>
</div>`}).join('')}</div>
    ${it.ck?fbBlock(it,q):''}`;
  }
  const ready=q.k==='m'?it.pick!=null:Object.keys(it.ans).length>0;
  const last=S.i===n-1;
  let bar;
  if(exam)bar=`<button class="plain" data-act="prev" ${S.i===0?'disabled':''}>←</button><button class="plain" data-act="nav">${S.i+1}/${n}</button>${last?`<button data-act="finishask">Finish</button>`:`<button data-act="next">Next →</button>`}`;
  else if(game)bar=!it.ck?`<button data-act="check" ${ready?'':'disabled'}>Check</button>`:gOut()?`<button data-act="gover">💀 Out of hearts</button>`:`<button data-act="${last?'finish':'next'}">${last?'🏁 Finish':'Next →'}</button>`;
  else bar=!it.ck?`<button data-act="check" ${ready?'':'disabled'}>Check</button>`:`<button data-act="${last?'finishask':'next'}">${last?'Finish':'Next →'}</button>`;
  page(`<div class="qhead"><div class="spread"><button class="plain sm" data-act="exit">✕ Menu</button>
    <span class="mut">${exam?'Question '+(S.i+1)+' of '+n:game?GT[S.g.type][0]+' '+(it.re?'↻ retry':S.g.type==='survival'||S.g.type==='lightning'?'#'+pos:pos+' / '+base):(S.mode==='review'?'Review':'Practice')+' · '+(it.re?'↻ retry':pos+' / '+base)}${(S.streak||0)>=2&&!exam&&!game?` · <span class="streak">🔥 ${S.streak}</span>`:''}</span>
    <span class="row" style="gap:6px;flex-wrap:nowrap"><button class="plain sm" data-act="mus" aria-label="Music" title="Music">${FX.isMusic()?'🎵':'🔇'}</button>${S.left!=null&&!exam?`<span class="timer ${S.left<300?'low':''}" id="tm">${fmt(S.left)}</span>`:''}</span></div>
    ${exam?examPanel():game?gameHead()+(S.g.type==='quick'||S.g.type==='daily'||S.g.type==='level'?`<div class="pbar"><i style="width:${Math.round(100*doneN/base)}%"></i></div>`:''):`<div class="pbar"><i style="width:${Math.round(100*doneN/base)}%"></i></div>`}</div>
    <div class="card">${body}${game?gamePowers(it,q):''}<div class="row" style="margin-top:10px">${faBtn}${hintBtn}${exam?`<button class="plain sm" data-act="flag">${it.fl?'⚑ Flagged':'⚐ Flag'}</button>`:''}</div></div>
    <div class="bot"><div class="in">${bar}</div></div>`,false,keep===true);
}
/* exam status panel: time ring, clock, end time, answered / left / flagged, percent done */
const hm=d=>d.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});
const answeredN=()=>S.items.filter(i=>!i.re&&Q[i.id]&&(Q[i.id].k==='m'?i.pick!=null:Object.keys(i.ans||{}).length)).length;
const mmss=x=>{x=Math.max(0,Math.round(x));return Math.floor(x/60)+':'+String(x%60).padStart(2,'0')};
function examPanel(){
  const n=S.items.filter(i=>!i.re).length,a=answeredN(),fl=S.items.filter(i=>i.fl).length,timed=S.left!=null;
  const R=34,C=2*Math.PI*R,frac=timed&&S.total?Math.max(0,S.left)/S.total:1,low=timed&&S.left<300;
  return `<div class="xp ${low?'low':''}">
   <div class="xring"><svg viewBox="0 0 84 84"><defs><linearGradient id="xgr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" class="s1"/><stop offset="1" class="s2"/></linearGradient></defs>
    <circle cx="42" cy="42" r="${R}" class="bg"/><circle cx="42" cy="42" r="${R}" class="fg" id="xrg" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C*(1-frac)).toFixed(1)}"/></svg>
    <div><b id="xtm">${mmss(timed?S.left:S.used)}</b><span>${timed?'min left':'min used'}</span></div></div>
   <div class="xinfo">
    <div class="xrow"><span class="xpill">🕒 <b id="xclk">${hm(new Date())}</b></span>${timed?`<span class="xpill">🏁 <b id="xend">${hm(new Date(now()+S.left*1000))}</b></span>`:''}</div>
    <div class="xbar"><i style="width:${pct(a,n)}%"></i></div>
    <div class="xstats"><span class="c1"><b>${pct(a,n)}%</b>progress</span><span class="c2"><b>${a}</b>done</span><span class="c3"><b>${n-a}</b>left</span><span class="c4"><b>${fl}</b>flagged</span></div>
   </div></div>`;
}
function examTick(){
  if(!S||S.mode!=='exam')return;const t=$('#xtm');if(!t)return;
  const timed=S.left!=null;t.textContent=mmss(timed?S.left:S.used);
  const c=$('#xclk');if(c)c.textContent=hm(new Date());
  if(timed){const e=$('#xend');if(e)e.textContent=hm(new Date(now()+S.left*1000));
    const r=$('#xrg');if(r){const C=+r.getAttribute('stroke-dasharray');r.setAttribute('stroke-dashoffset',(C*(1-Math.max(0,S.left)/S.total)).toFixed(1))}
    const w=$('.xp');if(w)w.classList.toggle('low',S.left<300)}
}
function nav(){
  const n=S.items.length;
  modal(`<h3>Questions</h3><div class="grid">${S.items.map((it,i)=>{const q=Q[it.id];
    const a=q.k==='m'?it.pick!=null:Object.keys(it.ans).length>0;
    return `<button class="${a?'a':''} ${it.fl?'f':''} ${i===S.i?'c':''}" data-act="jump" data-v="${i}">${i+1}</button>`}).join('')}</div>
    <p class="mut">Filled = answered · yellow outline = flagged</p><button class="plain" data-act="close">Close</button>`);
}
function finishAsk(){
  const un=S.items.filter(i=>!i.re&&(Q[i.id].k==='m'?i.pick==null:!Object.keys(i.ans).length)).length;
  const fl=S.items.filter(i=>i.fl).length;
  modal(`<h3>Finish now?</h3><p>${un?un+' unanswered. ':''}${fl?fl+' flagged. ':''}${!un&&!fl?'Everything is answered.':''}</p>
   <button data-act="finish">See my results</button><button class="plain" data-act="close">Keep going</button>`);
}
function exitMenu(){
  modal(`<h3>Leave this session?</h3><button data-act="saveexit">Save and exit (resume later)</button>
   <button class="plain" data-act="finish">End now and see results</button><button class="danger" data-act="discard">Discard session</button><p class="mut" style="margin:8px 0 0">Saved sessions wait in the <b>Exam</b> tab.</p><button class="plain" data-act="close">Cancel</button>`);
}

/* ================= Exam tab ================= */
/* every unfinished session, ways to start one, and past scores */
function sessCard(x){const n=x.items.length,a=x.items.filter(i=>Q[i.id]&&(Q[i.id].k==='m'?i.pick!=null:Object.keys(i.ans||{}).length)).length,id=String(x.id||x.start);
  return `<div class="sess"><div class="spread"><div><b>${esc(sessLbl(x))}</b><div class="mut">Question ${Math.min(x.i+1,n)} of ${n} · ${a} answered${x.left!=null?' · '+fmt(x.left)+' left':''} · started ${ago(x.start)}</div></div></div>
   <div class="pbar" style="margin:8px 0"><i style="width:${pct(a,n)}%"></i></div>
   <div class="row"><button class="sm" data-act="resume" data-v="${esc(id)}">▶ Continue</button><button class="plain sm" data-act="drop" data-v="${esc(id)}">Delete</button></div></div>`}
function renderExams(){
  const open=openSess(),hist=st.get('hist',[]).slice().reverse(),L=st.get('last',null),mk=qsIn(mockKeys()).length;
  page(`<h1>Exam</h1><p class="sub">Unfinished sessions are saved here until you finish or delete them.</p>
  <div class="card"><h2>Continue</h2>${open.length?open.map(sessCard).join(''):'<p class="mut" style="margin:0">No unfinished sessions.</p>'}</div>
  <div class="card"><h2>Start</h2><div class="tiles" style="margin:0">
   ${mk?`<button class="tile plain" data-act="mock"><span class="ic">🏁</span><span><b>Security+ mock exam</b><span class="d">90 questions · 90 min · course + book</span></span></button>`:''}
   <button class="tile plain" data-act="setup" data-v="exam"><span class="ic">⏱️</span><span><b>Custom exam</b><span class="d">Pick sections, size and timer</span></span></button>
   <button class="tile plain" data-act="setup" data-v="practice"><span class="ic">🎓</span><span><b>Practice</b><span class="d">Feedback after every question</span></span></button>
   <button class="tile plain" data-act="setup" data-v="review"><span class="ic">🎯</span><span><b>Smart review</b><span class="d">Weak and due questions first</span></span></button></div></div>
  <div class="card"><div class="spread"><h2 style="margin:0">Past results</h2>${L&&L.result?'<button class="plain sm" data-act="lastres">Open last result</button>':''}</div>
   ${hist.length?hist.slice(0,10).map(h=>`<div class="spread hrow"><div><b>${({practice:'Practice',exam:'Exam',review:'Review'})[h.mode]||h.mode}</b><div class="mut">${new Date(h.t).toLocaleDateString()} · ${h.right}/${h.total} correct · ${fmt(h.used||0)}</div></div><span class="badge ${h.score>=750?'ok':''}" style="margin:0">${h.score}</span></div>`).join(''):'<p class="mut">No finished sessions yet.</p>'}</div>`);
}

/* ================= Results ================= */
function renderResult(){
  const r=S.result;
  const wrong=S.items.filter(i=>!i.re&&i.ck&&!i.ok).map(i=>i.id);
  const weakSec=Object.entries(r.by).map(([k,v])=>[k,v,pct(v.c,v.t)]).sort((a,b)=>a[2]-b[2]);
  page(`${r.pass?`<div class="win"><svg viewBox="0 0 100 100" width="110" height="110" class="trophy"><path d="M30 18h40v20c0 14-8 24-20 26-12-2-20-12-20-26z" fill="#fbbf24"/><path d="M30 24H16c0 14 6 22 16 24M70 24h14c0 14-6 22-16 24" fill="none" stroke="#fbbf24" stroke-width="5"/><rect x="44" y="62" width="12" height="14" fill="#f59e0b"/><rect x="32" y="76" width="36" height="9" rx="3" fill="#fbbf24"/><path d="M42 28l5 5 10-11" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/></svg><div class="wt1">تبریک! قبول شدی 🎉</div><div class="mut">You passed — great work!</div></div>`:''}<h1>Results</h1><div class="card"><div class="mut">Estimated score</div><div class="big">${r.score}<span class="mut" style="font-size:1rem"> / 900</span></div>
   <p class="${r.pass?'ok':'no'}" style="margin:6px 0 0">${r.pass?'Above':'Below'} the 750 pass mark · ${r.right} of ${r.total} fully correct · ${Math.round(r.pct*100)}% weighted</p>
   <p class="mut">Time used ${fmt(r.used)}. Scenarios count 3 points with partial credit. This is a practice estimate, not an official score.</p></div>
  <div class="card"><h2>By section</h2>${weakSec.map(([k,v,p])=>`<div class="bar2"><span>${esc(k)}</span><div class="t"><i class="${cls(p)}" style="width:${p}%"></i></div><span>${v.c}/${v.t}</span></div>`).join('')}</div>
  <div class="row">${wrong.length?`<button data-act="drillwrong">Drill my ${wrong.length} mistake${wrong.length>1?'s':''}</button>`:''}<button class="plain" data-act="answers">Review answers</button><button class="plain" data-act="tab" data-v="home">Home</button></div>`);
  S._wrong=wrong;
}
function renderAnswers(){
  const L=S&&S.done?S:st.get('last',S);
  page(`<div class="spread"><h1>Answers</h1><button class="plain sm" data-act="tab" data-v="home">Home</button></div>
  ${L.items.filter(i=>!i.re).map((it,n)=>{const q=Q[it.id];if(!q)return'';
    const st_=!it.ck||it.sk?'– skipped':it.ok?'✔':'✘';
    const mine=q.k==='m'?(it.pick!=null?q.o[it.ord[it.pick]]:'No answer'):'';
    return `<details><summary>${n+1}. ${st_} ${esc((q.k==='m'?q.q:q.title).slice(0,90))}</summary>
    <p>${q.k==='m'?`<b>Correct:</b> ${esc(q.o[0])}<br>${it.ok?'':`<b>You chose:</b> ${esc(mine)}`}`:q.items.map((x,i)=>`${esc(x[0])} → <b>${esc(q.zones[x[1]])}</b>${it.ans[i]===x[1]?' ✔':' ✘'}`).join('<br>')}</p>
    <p>${esc(q.en)}</p>${SET.fa!=='off'&&q.fa?`<p class="fa" style="color:var(--ink)">${FA(q.fa)}</p>`:''}</details>`}).join('')}`);
}


/* ================= Learn (study notes) ================= */
const readSt=()=>st.get('read',{});
function renderLearn(){
  const rd=readSt();
  /* one course (or the textbook) at a time, so the page stays short; the choice is remembered */
  const ps=PACKS.filter(p=>packOn(p)&&Object.keys(p.sections).some(k=>p.study&&p.study[k]));
  let sel=st.get('lpack');if(!ps.some(p=>p.id===sel))sel=ps.length?ps[0].id:null;
  const sw=ps.length>1?`<div class="chips" style="margin:0 0 12px">${ps.map(p=>`<button class="chip ${p.id===sel?'on':''}" data-act="lpack" data-v="${esc(p.id)}">${p.id==='secbook'?'📕':'📚'} ${esc(p.short)}</button>`).join('')}</div>`:'';
  const cards=ps.filter(p=>p.id===sel).map(p=>{
    const ks=Object.keys(p.sections).filter(k=>p.study&&p.study[k]);const nr=ks.filter(k=>rd[secKey(p,k)]).length;
    return `<div class="card"><div class="spread"><div style="display:flex;align-items:center;gap:12px">${p.cover?`<img src="${esc(p.cover)}" alt="" style="width:56px;height:70px;object-fit:cover;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,.25);flex:none">`:''}<h2 style="margin:0">${esc(p.name)}</h2></div><span class="mut">${nr} / ${ks.length} read</span></div><div class="lgrid" style="margin-top:10px">${ks.map(k=>{const sk=secKey(p,k);const t=p.study[k].t||[p.sections[k].en,p.sections[k].fa];
      return `<button class="tile plain ltile" data-act="read" data-v="${esc(sk)}"><span class="ic">${rd[sk]?'✅':'📘'}</span><span><b>${esc(secNo(p,k)?secNo(p,k)+' · ':'')}${esc(t[0])}</b><span class="d">${esc(t[1]||'')}</span></span></button>`}).join('')}</div></div>`}).join('');
  const rl=st.get('rlast'),rlp=rl&&PACKS.find(x=>x.id===rl.split(':')[0]),rls=rl&&rl.split(':')[1],rlt=rlp&&rlp.study&&rlp.study[rls];
  const cont=rlt?`<div class="card" style="border-color:var(--ac)"><div class="spread"><div><b>Continue reading</b><div class="mut">${esc(rlp.short+' · '+(secNo(rlp,rls)?secNo(rlp,rls)+' · ':'')+(rlt.t||[''])[0])}</div></div><button class="sm" data-act="rdresume">Continue</button></div></div>`:'';
  page(`<h1>Learn</h1>${cont}<p class="sub">Read the key points first, then practice the questions. Notes are in English and Persian.</p>${sw}${cards||'<div class="card empty">No study notes for the courses that are on.</div>'}`);
}
/* the lines "Listen" reads in a section, in order; audio/n1.txt has a recording of each */
const nclean=x=>String(x||'').replace(/\s+/g,' ').trim();
const nrow=r=>r.map(c=>nclean(c[0]).replace(/[.;:,]+$/,'')).filter(Boolean).join('. ')+'.';
function noteLines(d,t){const L=[nclean(t)];d.b.forEach(b=>{if(b.k==='fig')return;if(b.k==='ul')b.en.forEach(x=>L.push(nclean(x)));else if(b.k==='tbl')b.r.forEach(r=>L.push(nrow(r)));else L.push(nclean(b.en))});return L}
function blockHTML(b,lang,ln){
  const both=lang==='both',en=lang!=='fa',fa=lang!=='en';
  const V=()=>ln?` data-vl="${ln.n++}"`:'';
  const E=t=>en?W(t):'';
  const pair=(e,f)=>{const h=(en?`<div>${E(e)}</div>`:'')+(fa?`<div class="fa${both?'':' only'}">${FA(f)}</div>`:'');return both?`<div class="pair">${h}</div>`:h};
  if(b.k==='fig'){const f=(window.FIGS||{})[b.id];return f?`<figure class="fig" dir="ltr">${f}<figcaption>📊 ${en?esc(b.en):''}${both?' · ':''}${fa?`<span class="fa">${esc(b.fa)}</span>`:''}</figcaption></figure>`:''}
  if(b.k==='h')return `<h3 class="rh"${V()}>${en?esc(b.en):''}${both?' <span class="fa">· '+FA(b.fa)+'</span>':fa?FA(b.fa):''}</h3>`;
  if(b.k==='p')return `<div class="rp"${V()}>${pair(b.en,b.fa)}</div>`;
  if(b.k==='tip')return `<div class="rtip"${V()}><b>${fa&&!en?'نکته‌ی امتحان':'Exam tip'}</b>${pair(b.en,b.fa)}</div>`;
  if(b.k==='ul')return `<ul class="rl">${b.en.map((x,i)=>`<li${V()}>${pair(x,b.fa[i]||'')}</li>`).join('')}</ul>`;
  if(b.k==='tbl'){
    const cell=c=>`${en?`<div>${W(c[0])}</div>`:''}${fa&&!(en&&c[1]===c[0])?`<div class="fa${both?'':' only'}">${FA(c[1]||'')}</div>`:''}`;
    return `<div class="rtw"><table class="rt"><thead><tr>${b.h.map(c=>`<th>${cell(c)}</th>`).join('')}</tr></thead><tbody>${b.r.map(r=>`<tr${V()}>${r.map(c=>`<td>${cell(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  return '';
}
function renderReader(sk,keep){
  TX=[];
  const [pid,sec]=sk.split(':');const p=PACKS.find(x=>x.id===pid);if(!p||!p.study||!p.study[sec]){go('learn');return}
  const d=p.study[sec],t=d.t||[p.sections[sec].en,p.sections[sec].fa],rd=readSt(),lang=SET.rl||'both';
  if(window._rk!==sk){RV.on=false;RV.tok++;vStop()}
  window._rk=sk;window._rl=noteLines(d,t[0]);ACT='read';lastAct({mode:'Reading',what:' · '+p.short+' · '+(t[0]||'')});{const rp=st.get('rpos',{});st.set('rlast',sk);if(!keep&&rp[sk]>40)setTimeout(()=>window.scrollTo(0,rp[sk]),60)}
  const lg=[['en','English'],['both','English + فارسی'],['fa','فارسی']];
  page(`<div class="spread"><button class="plain sm" data-act="tab" data-v="learn">← Learn</button><span class="mut">${esc(p.short+(secNo(p,sk.split(':')[1])?' · '+secNo(p,sk.split(':')[1]):''))}</span></div>
   <h1 style="margin-top:10px" data-vl="0"${lang==='fa'?' class="fah" dir="rtl"':''}>${lang==='fa'?FA(t[1]):esc(t[0])}</h1>${lang==='both'?`<div class="fa" style="margin:-2px 0 8px;font-size:1.05rem">${FA(t[1])}</div>`:''}
   <div class="chips">${lg.map(x=>`<button class="chip ${lang===x[0]?'on':''}" data-act="rlang" data-v="${x[0]}">${x[1]}</button>`).join('')}</div>
   ${lang==='fa'?'':'<p class="hint">Tap any English word to see its meaning.</p>'}
   <div class="row" style="margin:0 0 10px"><button class="sm" data-act="raloud">${aloudLbl(sk)}</button>${(st.get('rvoice',{})[sk]||0)>0?`<button class="plain sm" data-act="rafresh">↺ ${lang==='fa'?'از اول':'From the start'}</button>`:''}</div>
   <div class="card read${lang==='fa'?' rtl" dir="rtl':''}">${(ln=>d.b.map(b=>blockHTML(b,lang,ln)).join(''))({n:1})}</div>
   <div class="bot"><div class="in"><button class="plain" data-act="markread">${rd[sk]?(lang==='fa'?'✅ خواندم':'✅ Read'):(lang==='fa'?'خواندم ✓':'Mark as read')}</button><button data-act="readprac">${lang==='fa'?'تمرین این بخش ←':'Practice this section →'}</button></div></div>`,false,keep);
  if(RV.on)aloudMark(st.get('rvoice',{})[sk]||0);
}

/* ---- Listen: reads the notes aloud with the app voice and remembers where it stopped ---- */
const RV={on:false,tok:0};
function aloudLbl(sk){return RV.on?'⏸ Pause':(st.get('rvoice',{})[sk]||0)>0?'▶ Continue listening':'🔊 Listen'}
function aloudPos(sk,i){const r=st.get('rvoice',{});r[sk]=i;st.set('rvoice',r)}
function aloudBtn(){const b=$('[data-act=raloud]');if(b)b.textContent=aloudLbl(window._rk)}
/* resolves with true when the line finished, false when it was stopped */
function speakWait(t){return speak(t).then(()=>new Promise(res=>{
  const a=VX.el;
  if(a){if(a.ended)return res(true);a.addEventListener('ended',()=>res(true),{once:true});a.addEventListener('pause',()=>res(a.ended),{once:true});return}
  let n=0;const iv=setInterval(()=>{n++;let sp=false;try{sp=speechSynthesis.speaking}catch(e){}if(!sp&&n>2){clearInterval(iv);res(true)}},250);
}))}
function aloudMark(i){
  document.querySelectorAll('.vl-on').forEach(e=>e.classList.remove('vl-on'));
  const el=document.querySelector(`[data-vl="${i}"]`);if(el){el.classList.add('vl-on');el.scrollIntoView({block:'center',behavior:'smooth'})}
}
function aloudStart(){
  const sk=window._rk,L=window._rl||[];let i=st.get('rvoice',{})[sk]||0;if(i>=L.length)i=0;
  RV.on=true;const tok=++RV.tok;aloudBtn();
  const step=()=>{
    if(!RV.on||RV.tok!==tok||ACT!=='read'||window._rk!==sk)return;
    while(i<L.length&&!L[i])i++;
    if(i>=L.length){RV.on=false;aloudPos(sk,0);aloudBtn();document.querySelectorAll('.vl-on').forEach(e=>e.classList.remove('vl-on'));toast('Finished this section');return}
    aloudPos(sk,i);aloudMark(i);
    speakWait(L[i]).then(done=>{if(RV.tok!==tok)return;if(done){i++;aloudPos(sk,i);step()}else{RV.on=false;aloudBtn()}});
  };
  step();
}
function aloudStop(){RV.on=false;RV.tok++;vStop();aloudBtn()}

/* ================= Courses ================= */
function addPack(){
  const t=($('#packtxt')||{}).value||'';
  try{
    const p=JSON.parse(t);
    if(!p.id||!p.sections||!(p.mcq||p.pbq))throw new Error('Needs id, sections and mcq');
    (p.mcq||[]).forEach((q,i)=>{if(!q.q||!Array.isArray(q.o)||q.o.length<2||q.sec==null)throw new Error('Bad question #'+(i+1))});
    if((window.PACKS||[]).some(x=>x.id===p.id))throw new Error('A built-in course already uses id "'+p.id+'"');
    const up=st.get('userpacks',[]).filter(x=>x.id!==p.id);up.push(p);st.set('userpacks',up);
    loadPacks();toast('Added: '+(p.name||p.id));renderCourses();
  }catch(e){toast('Could not add: '+e.message)}
}

/* ================= Stats ================= */
function renderStats(){
  const rows=[];
  PACKS.filter(packOn).forEach(p=>Object.keys(p.sections).forEach(s=>{
    if(!secOn(p,s))return;
    const ids=Object.keys(Q).filter(i=>Q[i].pack===p&&Q[i].sec===s);
    const a=ids.reduce((x,i)=>x+(P[i]?P[i].c+P[i].w:0),0),c=ids.reduce((x,i)=>x+(P[i]?P[i].c:0),0);
    rows.push({n:p.short+' · '+secTitle(p,s),seen:ids.filter(i=>P[i]).length,t:ids.length,acc:a?pct(c,a):null});
  }));
  const topics={};
  Object.keys(P).forEach(i=>{const q=Q[i];if(!q||!secOn(q.pack,q.sec))return;const k=q.pack.short+' · '+(q.t||'General');const o=topics[k]||(topics[k]={c:0,w:0,ids:[]});o.c+=P[i].c;o.w+=P[i].w;o.ids.push(i)});
  const weak=Object.entries(topics).map(([k,o])=>({k,acc:pct(o.c,o.c+o.w),a:o.c+o.w,ids:o.ids})).filter(x=>x.a>=2).sort((a,b)=>a.acc-b.acc).slice(0,6);
  const hist=st.get('hist',[]).slice(-8).reverse();
  const dk=n=>{const d=new Date(Date.now()-n*DAY);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
  const days=[];for(let i=13;i>=0;i--){const k=dk(i),r=DAYS[k]||{s:0,a:0,c:0};days.push({k,m:Math.round(r.s/60),a:r.a,c:r.c,w:r.a-r.c})}
  const allD=Object.keys(DAYS),totS=allD.reduce((x,k)=>x+DAYS[k].s,0),totA=allD.reduce((x,k)=>x+DAYS[k].a,0),totC=allD.reduce((x,k)=>x+DAYS[k].c,0);
  const wk=(a,b)=>{let t=0,u=0,m=0;for(let i=a;i<b;i++){const r=DAYS[dk(i)];if(r){t+=r.a;u+=r.c;m+=r.s}}return{a:t,c:u,m}};
  const w1=wk(0,7),w2=wk(7,14);
  let streakD=0;for(let i=(DAYS[dk(0)]&&DAYS[dk(0)].a)?0:1;;i++){const r=DAYS[dk(i)];if(r&&(r.a||r.s>60))streakD++;else break}
  const fmtM=s=>{const m=Math.round(s/60);return m>=60?Math.floor(m/60)+'h '+(m%60)+'m':m+' min'};
  const maxM=Math.max(5,...days.map(d=>d.m)),maxA=Math.max(5,...days.map(d=>d.a));
  const W_=300,H_=110,bw=W_/14;
  const barsT=days.map((d,i)=>`<rect x="${i*bw+4}" y="${H_-d.m/maxM*(H_-18)-14}" width="${bw-8}" height="${Math.max(1,d.m/maxM*(H_-18))}" rx="3" fill="var(--ac)" opacity="${d.m?1:.25}"/>${d.m?`<text x="${i*bw+bw/2}" y="${H_-d.m/maxM*(H_-18)-17}" text-anchor="middle" font-size="9" fill="var(--mut)">${d.m}</text>`:''}`).join('');
  const barsA=days.map((d,i)=>{const hc=d.c/maxA*(H_-18),hw=d.w/maxA*(H_-18);return `<rect x="${i*bw+4}" y="${H_-14-hc}" width="${bw-8}" height="${hc}" rx="2" fill="var(--good)"/><rect x="${i*bw+4}" y="${H_-14-hc-hw}" width="${bw-8}" height="${hw}" rx="2" fill="var(--bad)"/>`}).join('');
  const lab=days.map((d,i)=>(i%2===0?`<text x="${i*bw+bw/2}" y="${H_-2}" text-anchor="middle" font-size="9" fill="var(--mut)">${d.k.slice(8)}</text>`:'')).join('');
  const accPts=days.map((d,i)=>d.a?[i*bw+bw/2,H_-14-pct(d.c,d.a)/100*(H_-26)]:null).filter(Boolean);
  const accLine=accPts.length>1?`<polyline points="${accPts.map(p=>p.join(',')).join(' ')}" fill="none" stroke="var(--ac)" stroke-width="2.5" stroke-linejoin="round"/>`+accPts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="var(--ac)"/>`).join(''):accPts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="var(--ac)"/>`).join('');
  const delta=(a,b,u)=>{const d=a-b;return `<span class="${d>=0?'ok':'no'}">${d>=0?'▲ +':'▼ '}${d}${u}</span>`};
  const histAll=st.get('hist',[]).slice(-12);
  const scoreLine=histAll.length?(()=>{const n=histAll.length,pts=histAll.map((h,i)=>[n>1?10+i*(W_-20)/(n-1):W_/2,H_-14-(h.score-100)/800*(H_-26)]);return `<line x1="0" x2="${W_}" y1="${H_-14-(650/800)*(H_-26)}" y2="${H_-14-(650/800)*(H_-26)}" stroke="var(--warn)" stroke-dasharray="4 4"/><polyline points="${pts.map(p=>p.join(',')).join(' ')}" fill="none" stroke="var(--ac)" stroke-width="2.5"/>`+pts.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="var(--ac)"/><text x="${p[0]}" y="${p[1]-7}" text-anchor="middle" font-size="9" fill="var(--mut)">${histAll[i].score}</text>`).join('')})():'';
  page(`<h1>Stats</h1><div class="cols">
  <div class="card"><h2>Your effort</h2><div class="stats">
   <div class="stat"><b>${fmtM(totS)}</b><span>total study time</span></div>
   <div class="stat"><b>${fmtM((DAYS[dk(0)]||{s:0}).s)}</b><span>today</span></div>
   <div class="stat"><b>${streakD}</b><span>day streak 🔥</span></div></div>
   <div class="stats" style="margin-top:10px"><div class="stat"><b>${totA}</b><span>answers</span></div><div class="stat"><b class="ok">${totC}</b><span>correct</span></div><div class="stat"><b class="no">${totA-totC}</b><span>mistakes</span></div></div></div>
  <div class="card"><h2>This week vs last week</h2>
   <div class="spread" style="margin:6px 0"><span>Answers</span><span><b>${w1.a}</b> ${delta(w1.a,w2.a,'')}</span></div>
   <div class="spread" style="margin:6px 0"><span>Accuracy</span><span><b>${w1.a?pct(w1.c,w1.a)+'%':'–'}</b> ${w1.a&&w2.a?delta(pct(w1.c,w1.a),pct(w2.c,w2.a),'%'):''}</span></div>
   <div class="spread" style="margin:6px 0"><span>Study time</span><span><b>${fmtM(w1.m)}</b> ${delta(Math.round(w1.m/60),Math.round(w2.m/60),' min')}</span></div></div>
  <div class="card"><h2>Minutes studied · last 14 days</h2><svg viewBox="0 0 ${W_} ${H_}" width="100%" role="img" aria-label="Minutes studied per day">${barsT}${lab}</svg></div>
  <div class="card"><h2>Right and wrong answers per day</h2><svg viewBox="0 0 ${W_} ${H_}" width="100%" role="img" aria-label="Correct and wrong answers per day">${barsA}${lab}</svg><p class="mut" style="margin:6px 0 0"><span class="ok">■</span> correct &nbsp;<span class="no">■</span> mistakes</p></div>
  <div class="card"><h2>Accuracy trend (%)</h2><svg viewBox="0 0 ${W_} ${H_}" width="100%" role="img" aria-label="Accuracy per day">${accLine}${lab}</svg>${accPts.length?'':'<div class="mut">Answer some questions to see your trend.</div>'}</div>
  ${histAll.length?`<div class="card"><h2>Practice / exam scores</h2><svg viewBox="0 0 ${W_} ${H_}" width="100%" role="img" aria-label="Scores over time">${scoreLine}</svg><p class="mut" style="margin:6px 0 0">Dashed line = 750 pass mark</p></div>`:''}
  <div class="card"><h2>Coverage and accuracy</h2>${rows.length?rows.map(r=>`<div class="bar2"><span>${esc(r.n)}</span><div class="t"><i class="${r.acc==null?'':cls(r.acc)}" style="width:${r.acc==null?0:r.acc}%"></i></div><span>${r.acc==null?'–':r.acc+'%'}</span></div><div class="mut" style="margin:-4px 0 6px">${r.seen}/${r.t} seen</div>`).join(''):'<div class="empty">Nothing active.</div>'}</div>
  <div class="card"><h2>Work on these next</h2>${weak.length?weak.map((w,i)=>`<div class="spread" style="margin:8px 0"><div><div>${esc(w.k)}</div><div class="mut">${w.acc}% over ${w.a} answers</div></div><button class="sm" data-act="drilltopic" data-v="${i}">Drill</button></div>`).join(''):'<div class="mut">Answer a few questions and your weak topics will show up here.</div>'}</div>
  <div class="card"><h2>Recent sessions</h2>${hist.length?hist.map(h=>`<div class="spread mut" style="margin:6px 0"><span>${new Date(h.t).toLocaleDateString()} · ${esc(h.mode)}</span><span><b style="color:var(--ink)">${h.score}</b> /900 · ${h.right}/${h.total}</span></div>`).join(''):'<div class="mut">No sessions yet.</div>'}</div></div>`);
  window._weak=weak;
}

/* ================= Settings ================= */
let deferred=null;
const THG=[['game','🎮 Game','بازی'],['car','🏎️ Cars','ماشین'],['color','🎨 Colours','رنگی']];
let thTab=null;
const thOf=id=>THEMES.find(t=>t[0]===id);
function thPrev(id){
  const dark=isDark(),t=thOf(id),c=t?t[dark?5:4]:[CLASSIC.bg[dark?'dark':'light'],dark?'#121a33':'#ffffff',dark?'#27335c':'#d7dcf3',dark?'#eaf0ff':'#101736',dark?'#9aa8c7':'#58638a',...CLASSIC[dark?'dark':'light']];
  const sc=t&&t[3]==='game'&&window.SCENES?window.SCENES[id]:'';
  return `<span class="thp" style="background:${sc?sc+' center bottom/cover,':''}${c[0]}"><span style="background:${c[1]};border-color:${c[2]}"><i style="background:${c[3]};opacity:.75"></i><i style="background:${c[4]};width:60%;opacity:.6"></i><em style="background:linear-gradient(180deg,${c[5]},${c[6]})"></em></span></span>`;
}
const thName=id=>{const t=thOf(id);return t?t[1]:'StudyPrep'};
function palGrid(){
  const t=thOf(SET.pal);
  return `<button class="thcur" data-act="thopen">${thPrev(SET.pal)}<span><b>${esc(thName(SET.pal))}</b><small>${t&&t[3]==='game'?'Game theme · picture background':'Tap to see all '+(THEMES.length+1)+' themes'}</small></span><span class="thgo">Change ▸</span></button>`;
}
function thModal(){
  const cur=thOf(SET.pal);if(!thTab)thTab=cur?cur[3]:'game';
  const items=(thTab==='color'?[['classic']]:[]).concat(THEMES.filter(t=>t[3]===thTab));
  const html=`<div class="thsheet"><h3 style="margin:0 0 2px">🎨 Theme · تم</h3><p class="mut" style="margin:0 0 10px">Tap one to try it. Every theme uses the game look; Game themes also have their own picture background.</p>
   <div class="seg" style="--n:3;margin-bottom:12px">${THG.map(g=>`<button class="${thTab===g[0]?'on':''}" data-act="thtab" data-v="${g[0]}">${g[1]}</button>`).join('')}</div>
   <div class="thgrid">${items.map(t=>`<button class="thi ${SET.pal===t[0]?'on':''}" data-act="pal" data-v="${esc(t[0])}">${thPrev(t[0])}<b>${esc(thName(t[0]))}</b>${t[2]&&t[2]!==t[1]?`<small class="fa">${esc(t[2])}</small>`:''}${SET.pal===t[0]?'<i class="thok">✓</i>':''}</button>`).join('')}</div>
   <button data-act="close">Done · تمام</button></div>`;
  const sh=$('#ov .thsheet');if(sh){const y=sh.parentNode.scrollTop;sh.parentNode.innerHTML=html;$('#ov .sheet').scrollTop=y}else modal(html);
}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferred=e;if(tab==='settings')renderSettings()});
function aiSettings(){
  const c=aiCfg(),k=aiKeys()[c.p]||'',P0=AIP[c.p];
  return `<div class="card"><h3>🤖 AI tutor</h3>
   <p class="mut" style="margin-top:0">After you answer a question, tap “Ask AI” to get it explained and ask follow-ups. Needs the internet and a free key from one provider.</p>
   <p class="fa" style="margin-top:0">بعد از جواب دادن، «از هوش مصنوعی بپرس» را بزنید تا سؤال را برایتان توضیح بدهد. اینترنت و یک کلید رایگان لازم است.</p>
   <div class="lbl">Provider</div><select data-act="aip">${Object.keys(AIP).map(p=>`<option value="${p}" ${p===c.p?'selected':''}>${esc(AIP[p].n)}</option>`).join('')}</select>
   <div class="lbl">API key · <a href="${P0.key}" target="_blank" rel="noopener" style="color:var(--ac);text-transform:none;letter-spacing:0">get a free key ↗</a></div>
   <div class="aik"><input class="inp" id="aikin" type="password" autocomplete="off" data-act="aikey" value="${esc(k)}" placeholder="Paste your key here"><button data-act="aisave">💾 Save · ذخیره</button></div>
   <div class="mut" id="aiks" style="margin-top:6px">${k?`✅ Key saved on this device (…${esc(k.slice(-4))}) · کلید ذخیره شده است`:'No key saved yet · هنوز کلیدی ذخیره نشده'}</div>
   <div class="lbl">Model</div><input class="inp" data-act="aimodel" value="${esc(c.m[c.p]||'')}" placeholder="${esc(P0.m)} (default)">
   <div class="lbl">AI answers in</div>${`<select data-act="ailang">${[['fa','Persian, with English terms'],['en','English']].map(o=>`<option value="${o[0]}" ${c.lang===o[0]?'selected':''}>${o[1]}</option>`).join('')}</select>`}
   <div class="row" style="margin-top:10px"><button class="plain sm" data-act="aitest">Test AI</button></div>
   <p class="mut" id="aist" style="margin:8px 0 0">The key stays on this device only and is not put in backups. Free plans have a daily limit.</p></div>`;
}
/* ================= Settings =================
   Like phone settings: a search box and a short list of groups; each group opens its own page.
   Choices are buttons you tap (no long dropdowns), and things you set once (the AI key) fold away. */
let SETP=null,SETQ='',AIEDIT=false;
/* buttons for a setting with a few values; numbers stay numbers */
const optA=(cur,opts,act)=>`<div class="seg opt" style="--n:${opts.length}">${opts.map(o=>`<button class="${String(cur)===String(o[0])?'on':''}" ${act} data-v="${o[0]}">${o[1]}</button>`).join('')}</div>`;
const opt=(k,opts)=>optA(SET[k],opts,`data-act="setv" data-k="${k}"`);
const swr=(sid,label,sub,input)=>`<div class="sw" data-sid="${sid}"><span>${label}${sub?`<div class="mut">${sub}</div>`:''}</span>${input}</div>`;
const tg=(k)=>`<input type="checkbox" data-act="tog" data-k="${k}" ${SET[k]?'checked':''}>`;
const row=(sid,label,body)=>`<div class="srowx" data-sid="${sid}"><div class="lbl">${label}</div>${body}</div>`;
const SG=[
  ['courses','📚','Courses','دوره‌ها','#16a34a',()=>{const on=PACKS.filter(packOn);return on.length+' of '+PACKS.length+' on · '+activeKeys().length+' sections'}],
  ['persian','🇮🇷','Persian help','کمک فارسی','#0ea5e9',()=>({off:'Off',tap:'Tap to show',always:'Always'}[SET.fa]||'')+(SET.examFa?' · also in exams':'')],
  ['sound','🔔','Sound & music','صدا و موسیقی','#f59e0b',()=>(SET.snd?'Sounds on':'Sounds off')+(SET.mus?' · music on':'')],
  ['voice','🗣️','Voice','صدای خواندن','#8b5cf6',()=>(SET.auto?'Reads questions aloud':'Off')+' · '+({0.85:'slower',1:'normal speed',1.15:'faster'}[SET.vspeed]||'')],
  ['ai','🤖','AI tutor','معلم هوش مصنوعی','#ec4899',()=>{const c=aiCfg(),k=aiKeys()[c.p];return k?'✅ '+AIP[c.p].n:'Not set up'}],
  ['exam','🎯','Exam & daily goal','امتحان و هدف روزانه','#ef4444',()=>(SET.examDate?'Exam '+SET.examDate:'No exam date')+' · '+(SET.goal||30)+' a day'],
  ['look','🎨','Look & theme','ظاهر و تم','#14b8a6',()=>thName(SET.pal)+' · '+({auto:'match device',dark:'dark',light:'light'}[SET.theme])],
  ['install','📲','Install the app','نصب برنامه','#6366f1',()=>'iPhone, Android, Windows, Mac'],
  ['backup','💾','Backup & reset','پشتیبان و پاک کردن','#64748b',()=>st.get('bkat')?'Last backup '+ago(st.get('bkat')):'No backup yet']
];
/* every setting, for search: [group, id, English words, Persian words] */
const SIDX=[
  ['courses','courses','Courses: turn courses and sections on or off','دوره فصل بخش روشن خاموش'],['courses','addpack','Add a course (JSON pack)','اضافه کردن دوره'],
  ['persian','fa','Persian help in practice and review','فارسی ترجمه کمک'],['persian','examfa','Persian help in Exam mode','فارسی امتحان'],['persian','faExp','Persian explanation after answering','توضیح فارسی'],
  ['sound','snd','Sound effects','صدا افکت'],['sound','mus','Background music','موسیقی آهنگ'],['sound','vib','Vibration','لرزش ویبره'],['sound','vol','Volume','بلندی صدا'],
  ['voice','auto','Read questions aloud','خواندن سؤال با صدا'],['voice','cues','Spoken feedback (Correct! Well done!)','بازخورد صوتی'],['voice','vspeed','Voice speed','سرعت صدا'],['voice','vboost','Voice loudness','بلندی صدا'],['voice','dlaudio','Download voice for offline','دانلود صدا آفلاین'],
  ['ai','aip','AI provider (Gemini, Groq…)','هوش مصنوعی'],['ai','aikey','AI API key','کلید هوش مصنوعی'],['ai','aimodel','AI model','مدل'],['ai','ailang','AI answer language','زبان جواب'],
  ['exam','examdate','Exam date','تاریخ امتحان'],['exam','goal','Daily goal (answers a day)','هدف روزانه'],
  ['look','theme','Dark / light background','تاریک روشن شب'],['look','size','Text size','اندازه متن فونت'],['look','pal','Colour theme','تم رنگ'],
  ['install','install','Install the app (Android, Windows, iPhone)','نصب برنامه'],
  ['backup','export','Save a backup file','پشتیبان ذخیره'],['backup','importfile','Restore from a backup','بازیابی'],['backup','reset','Erase all progress','پاک کردن همه']
];
function sGroup(id){
  const c=aiCfg(),k=aiKeys()[c.p]||'',P0=AIP[c.p];
  switch(id){
  case 'persian':return `<div class="card">${row('fa','Persian help in practice and review',opt('fa',[['off','Off'],['tap','Tap to show'],['always','Always']]))}
    ${swr('examfa','Persian help in Exam mode','Off = like the real English exam',`<input type="checkbox" data-act="examfa" ${SET.examFa?'checked':''}>`)}
    ${row('faExp','Persian explanation after answering',opt('faExp',[['tap','Tap a button'],['auto','Show by itself']]))}</div>`;
  case 'sound':return `<div class="card">${swr('snd','Sound effects','Soft chimes for right and wrong',tg('snd'))}${swr('mus','Calm background music','',tg('mus'))}${swr('vib','Vibration','Android phones only',tg('vib'))}
    ${row('vol','Volume',opt('vol',[[0.25,'Very soft'],[0.45,'Soft'],[0.6,'Medium'],[0.85,'Loud']]))}</div>`;
  case 'voice':return `<div class="card">${swr('auto','Read each new question aloud','',tg('auto'))}${swr('cues','Spoken feedback','“Correct!”, “Well done!”',tg('cues'))}
    ${row('vspeed','Speed · سرعت',opt('vspeed',[[0.85,'Slower'],[1,'Normal'],[1.15,'Faster']]))}${row('vboost','Loudness · بلندی',opt('vboost',[[0,'Normal'],[0.5,'Louder'],[1,'Loudest']]))}
    <div class="row" style="margin-top:12px" data-sid="dlaudio"><button class="plain sm" data-act="speak" data-v="Hello! This is the study voice. Let us get started.">▶ Test</button><button class="plain sm" data-act="dlaudio">⬇ Download for offline · 18 MB</button></div><p class="mut" id="dlst" style="margin:6px 0 0"></p></div>`;
  case 'ai':return `<div class="card"><p class="mut" style="margin-top:0">After you answer, tap “Ask AI” to get the question explained. Needs the internet and a free key. · بعد از جواب، «از هوش مصنوعی بپرس» را بزن.</p>
    ${row('aip','Provider',`<div class="chips" style="margin:0">${Object.keys(AIP).map(p=>`<button class="chip ${p===c.p?'on':''}" data-act="aipick" data-v="${p}">${esc(AIP[p].n)}${aiKeys()[p]?' ✓':''}</button>`).join('')}</div>`)}
    <div class="srowx" data-sid="aikey"><div class="lbl">API key</div>${k&&!AIEDIT?`<div class="keyok"><span>✅ Saved on this device <b>…${esc(k.slice(-4))}</b></span><button class="plain sm" data-act="aikedit">Change</button></div>`:
      `<div class="aik"><input class="inp" id="aikin" type="password" autocomplete="off" data-act="aikey" value="${esc(k)}" placeholder="Paste your key here"><button data-act="aisave">Save</button></div><div class="mut" style="margin-top:6px"><a href="${P0.key}" target="_blank" rel="noopener" style="color:var(--ac)">Get a free key ↗</a> · it stays on this device and is not put in backups</div><div class="mut" id="aiks"></div>`}</div>
    ${row('ailang','AI answers in',optA(c.lang,[['fa','Persian + English terms'],['en','English']],'data-act="ailangv"'))}
    <details class="adv" data-sid="aimodel"><summary>Advanced: model name</summary><input class="inp" data-act="aimodel" value="${esc(c.m[c.p]||'')}" placeholder="${esc(P0.m)} (default)"></details>
    <div class="row" style="margin-top:10px"><button class="plain sm" data-act="aitest">Test AI</button></div><p class="mut" id="aist" style="margin:8px 0 0">Free plans have a daily limit.</p></div>`;
  case 'exam':return `<div class="card">${row('examdate','Exam date · تاریخ امتحان',`<input type="date" class="inp" data-act="examdate" value="${esc(SET.examDate||'')}">`)}
    ${row('goal','Daily goal · answers a day',opt('goal',[[10,'10'],[20,'20'],[30,'30'],[50,'50'],[80,'80'],[120,'120']]))}</div>`;
  case 'look':return `<div class="card">${row('theme','Background',optA(SET.theme,[['auto','Auto'],['dark','🌙 Dark'],['light','☀️ Light']],'data-act="mode"'))}
    ${row('size','Text size',opt('size',[[0.9,'A'],[1,'A+'],[1.12,'A++'],[1.25,'XL'],[1.4,'XXL']]))}${row('pal','Theme',palGrid())}</div>`;
  case 'install':return `<div class="card" data-sid="install">${deferred?`<button data-act="install" style="width:100%;margin-bottom:10px">Install app</button>`:''}
    <div class="row" style="margin-bottom:10px"><a class="btn" href="https://github.com/3omid/studyprep/releases/latest/download/StudyPrep.apk">⬇ Android (.apk)</a><a class="btn" href="https://github.com/3omid/studyprep/releases/latest/download/StudyPrep-Setup.exe">⬇ Windows (.exe)</a></div>
    <details class="adv"><summary>iPhone, Mac and browsers</summary><p class="mut"><b>iPhone / iPad (Safari):</b> Share → Add to Home Screen.<br><b>Android (Chrome):</b> menu → Install app.<br><b>Windows / Linux:</b> install icon in the address bar.<br><b>Mac:</b> Chrome install icon, or Safari File → Add to Dock.<br>Works offline after the first time. Progress stays on each device; use a backup to move it.</p></details></div>`;
  case 'backup':return `<div class="card"><p class="mut" style="margin-top:0">A backup saves everything: progress, stats, game, settings and added courses. ${st.get('bkat')?'Last backup: '+ago(st.get('bkat'))+'.':'No backup yet.'}</p>
    <div class="row" data-sid="export"><button data-act="export">💾 Save backup</button><button class="plain" data-act="importfile" data-sid="importfile">📂 Restore</button><input type="file" id="bkf" accept=".json,application/json" hidden></div>
    <details class="adv"><summary>Copy or paste as text</summary><div class="row" style="margin-top:8px"><button class="plain sm" data-act="exporttxt">Copy as text</button><button class="plain sm" data-act="importui">Paste text</button></div></details></div>
    <div class="card" data-sid="reset"><b>Danger zone</b><p class="mut" style="margin:4px 0 8px">Erases progress and history on this device.</p><button class="danger sm" data-act="reset">Erase all progress</button></div>`;
  }return '';
}
function searchHits(q){q=q.trim().toLowerCase();if(!q)return [];return SIDX.filter(x=>(x[2]+' '+x[3]+' '+x[0]).toLowerCase().includes(q))}
function hitsHTML(){const h=searchHits(SETQ);if(!SETQ.trim())return '';
  return h.length?`<div class="card slist2">${h.map(x=>{const g=SG.find(y=>y[0]===x[0]);return `<button class="sgrp" data-act="sgo" data-v="${x[0]}:${x[1]}"><span class="sgi" style="--c:${g[4]}">${g[1]}</span><span><b>${esc(x[2])}</b><small>${esc(g[2])}</small></span><span class="chev">›</span></button>`}).join('')}</div>`:'<p class="mut" style="text-align:center">Nothing found · چیزی پیدا نشد</p>'}
function renderSettings(keep){
  if(SETP){const g=SG.find(x=>x[0]===SETP);
    page(`<div class="spread"><button class="plain sm" data-act="sback">‹ Settings</button><span class="mut fa" style="margin:0">${esc(g[3])}</span></div><h1 style="margin:10px 0 12px">${g[1]} ${esc(g[2])}</h1>${sGroup(SETP)}`,false,keep===true);return}
  page(`<h1>Settings</h1><div class="ssearch"><span>🔍</span><input id="sq" class="inp" type="search" placeholder="Search settings · جستجو" value="${esc(SETQ)}" autocomplete="off"></div>
   <div id="shits">${hitsHTML()}</div>
   <div class="card slist2" id="sgroups" ${SETQ.trim()?'hidden':''}>${SG.map(g=>`<button class="sgrp" data-act="${g[0]==='courses'?'tab':'sgo'}" data-v="${g[0]==='courses'?'courses':g[0]}"><span class="sgi" style="--c:${g[4]}">${g[1]}</span><span><b>${esc(g[2])}</b><small>${esc(g[5]())}</small></span><span class="chev">›</span></button>`).join('')}</div>
   <p class="mut" style="text-align:center">StudyPrep v5 · scores are practice estimates</p>`,false,keep===true);
  const q=$('#sq');if(q)q.oninput=()=>{SETQ=q.value;$('#shits').innerHTML=hitsHTML();$('#sgroups').hidden=!!SETQ.trim()};
}
function sOpen(v){const[g,sid]=v.split(':');if(g==='courses'){go('courses');return}SETP=g;renderSettings();
  if(sid)setTimeout(()=>{const e=document.querySelector(`[data-sid="${sid}"]`);if(e){e.scrollIntoView({block:'center',behavior:'smooth'});e.classList.add('flash');setTimeout(()=>e.classList.remove('flash'),1800)}},80)}

/* ---- Courses: a switch per course, and round numbered buttons for its sections ---- */
let ADDP=false;
function renderCourses(){
  page(`<div class="spread"><button class="plain sm" data-act="tab" data-v="settings">‹ Settings</button></div><h1 style="margin:10px 0 2px">📚 Courses</h1><p class="sub">Tap a number to turn that section on or off. Practice, exams and games only use what is on. · روی شماره بزن تا روشن یا خاموش شود</p>
  ${PACKS.map(p=>{
    const ids=Object.keys(Q).filter(i=>Q[i].pack===p),seen=ids.filter(i=>P[i]).length,on=packOn(p),ks=Object.keys(p.sections),non=ks.filter(s=>secOn(p,s)).length;
    return `<div class="card ccard ${on?'':'off'}"><div class="sw" style="padding-top:0"><div style="display:flex;align-items:center;gap:12px;min-width:0">${p.cover?`<img src="${esc(p.cover)}" alt="" class="ccov">`:'<span class="ccov ce">📚</span>'}<div style="min-width:0"><b>${esc(p.short==='Book'?'Textbook':p.name)}</b><div class="mut">${on?non+' of '+ks.length+' on · ':''}${ids.length} questions · ${pct(seen,ids.length)}% seen</div></div></div>
      <input type="checkbox" data-act="packtog" data-v="${esc(p.id)}" ${on?'checked':''} aria-label="Turn ${esc(p.name)} on or off"></div>
      ${on?`<div class="dots">${ks.map(s=>{const k=secKey(p,s),o=secOn(p,s),n=ids.filter(i=>Q[i].sec===s).length;
        return `<button class="dot2 ${o?'on':''}" data-act="secdot" data-v="${esc(k)}" title="${esc(secTitle(p,s))} · ${n} q" aria-pressed="${o}" aria-label="${esc(secTitle(p,s))}"><span style="${s.length>2?'font-size:.72rem':''}">${esc(s)}</span></button>`}).join('')}</div>
      <div class="row" style="margin-top:8px;gap:6px"><button class="plain sm" data-act="secall" data-v="${esc(p.id)}">All on</button><button class="plain sm" data-act="secnone" data-v="${esc(p.id)}">All off</button><button class="plain sm" data-act="secnames" data-v="${esc(p.id)}">Names</button>${p.user?`<button class="danger sm" data-act="delpack" data-v="${esc(p.id)}">Remove</button>`:''}</div>`:''}</div>`}).join('')}
  <div class="card" data-sid="addpack">${ADDP?`<h2>Add a course</h2><p class="mut">Paste a course pack (JSON) or pick a .json file.</p>
   <textarea id="packtxt" placeholder='{"id":"netplus","name":"CompTIA Network+","sections":{"1":"Networking concepts"},"mcq":[{"id":"1","sec":"1","q":"Question?","o":["Correct","Wrong","Wrong","Wrong"],"en":"Why"}]}'></textarea>
   <div class="row" style="margin-top:8px"><button data-act="addpack">Add</button><button class="plain" data-act="pickfile">Choose file…</button><button class="plain" data-act="addp">Cancel</button><input type="file" id="pf" accept=".json,application/json" hidden></div>`:`<button class="plain" style="width:100%" data-act="addp">＋ Add a course</button>`}</div>`);
  const pf=$('#pf');if(pf)pf.onchange=()=>{const f=pf.files[0];if(!f)return;f.text().then(t=>{$('#packtxt').value=t;addPack()})};
}
function secNames(id){const p=PACKS.find(x=>x.id===id);if(!p)return;
  modal(`<h3>${esc(p.short==='Book'?'Textbook':p.name)}</h3><div class="slist" style="grid-template-columns:1fr">${Object.keys(p.sections).map(s=>{const k=secKey(p,s),o=secOn(p,s);
    return `<button class="srow ${o?'on':''}" data-act="secdot" data-v="${esc(k)}"><span class="ck">${o?'✓':''}</span><span class="no">${esc(s)}</span><span class="tt">${esc(p.sections[s].en)}</span><span class="nq">${qsIn([k]).length}</span></button>`}).join('')}</div><button class="plain" data-act="close">Done</button>`)}

/* ================= Game mode ================= */
/* Learning as a game: hearts, combo multiplier, points, XP and levels, coins, power-ups, a daily challenge,
   a chapter map with stars, a daily streak and achievements. Every answer still counts toward normal progress. */
let G=Object.assign({xp:0,coins:30,streak:0,day:'',best:0,games:0,ach:{},stars:{},unl:{},daily:'',earned:0,lt:0,sv:0,perfect:0},st.get('game',{}));
const saveG=()=>st.set('game',G);
const lvlOf=xp=>{let L=1,need=100;while(xp>=need){xp-=need;L++;need=100+50*(L-1)}return{L,cur:xp,need}};
const RANKS=[[1,'🐣','Trainee','کارآموز'],[3,'🎧','Help Desk','پشتیبان'],[5,'🔍','Junior Analyst','تحلیلگر تازه‌کار'],[8,'🛡️','SOC Analyst','تحلیلگر SOC'],[12,'🕵️','Pentester','تست نفوذگر'],[16,'⚙️','Security Engineer','مهندس امنیت'],[20,'🏛️','Security Architect','معمار امنیت'],[25,'👑','CISO','مدیر ارشد امنیت']];
const rankOf=L=>RANKS.filter(r=>L>=r[0]).pop();
const GT={quick:['🎮','Quick play','بازی سریع'],survival:['❤️','Survival','بقا'],lightning:['⚡','Lightning','رعد و برق'],daily:['📅','Daily challenge','چالش روزانه'],level:['🗺️','Level','مرحله']};
const multOf=c=>c>=10?4:c>=6?3:c>=3?2:1;
const yday=()=>{const d=new Date(now()-DAY);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const totalStars=()=>Object.values(G.stars).reduce((a,b)=>a+b,0);
const ACH=[
  ['first','🎉','First game','اولین بازی',()=>G.games>=1],
  ['combo5','🔥','Combo ×5','۵ تا پشت سر هم',()=>G.best>=5],
  ['combo10','💥','Combo ×10','۱۰ تا پشت سر هم',()=>G.best>=10],
  ['combo20','🌋','Combo ×20','۲۰ تا پشت سر هم',()=>G.best>=20],
  ['perfect','💎','Perfect game','بازی بی‌اشتباه',()=>G.perfect>=1],
  ['daily','📅','Daily challenge','چالش روزانه',()=>!!G.daily],
  ['streak3','📆','3-day streak','۳ روز پشت سر هم',()=>G.streak>=3],
  ['streak7','🏅','7-day streak','۷ روز پشت سر هم',()=>G.streak>=7],
  ['lvl5','⭐','Level 5','سطح ۵',()=>lvlOf(G.xp).L>=5],
  ['lvl10','🌟','Level 10','سطح ۱۰',()=>lvlOf(G.xp).L>=10],
  ['star3','👑','3 stars on a level','۳ ستاره در یک مرحله',()=>Object.values(G.stars).some(x=>x>=3)],
  ['stars20','🗺️','20 stars','۲۰ ستاره',()=>totalStars()>=20],
  ['light15','⚡','15 in Lightning','۱۵ درست در رعد و برق',()=>G.lt>=15],
  ['surv25','🛡️','25 in Survival','۲۵ درست در بقا',()=>G.sv>=25],
  ['rich','💰','500 coins earned','۵۰۰ سکه',()=>G.earned>=500]
];
/* the same 10 questions for everyone on the same day */
function seeded(a,seed){let h=0;for(const c of seed)h=Math.imul(h^c.charCodeAt(0),2654435761);const r=()=>{h+=0x6D2B79F5;let t=h;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296};
  a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
const gameKeys=()=>cfg.secs&&cfg.secs.length?cfg.secs.filter(k=>activeKeys().includes(k)):activeKeys();
function gameStart(type,o){
  o=o||{};const keys=o.secs||(type==='daily'?activeKeys():gameKeys());const pool=qsIn(keys);
  let chosen,hearts=maxHearts(),total=null;
  if(type==='survival')chosen=shuffle(smart(pool,200));
  else if(type==='lightning'){chosen=shuffle(pool.filter(q=>q.k==='m')).slice(0,150);hearts=null;total=90}
  else if(type==='daily')chosen=seeded(pool,dkey()).slice(0,10);
  else chosen=shuffle(smart(pool,o.n||10));
  if(!chosen.length){toast('No questions in the selected sections.');return}
  const items=chosen.map(mkItem);
  const s={mode:'game',items,i:0,total,left:total,used:0,start:now(),done:false,
    g:{type,h:hearts,mh:hearts,pts:0,combo:0,best:0,right:0,wrong:0,skip:0,rev:0,key:o.key||null,secs:o.secs||null,n:o.n||10}};
  s.id=now();s.what=GT[type][1]+(o.key?' · '+(()=>{const[pid,sec]=o.key.split(':');const p=PACKS.find(x=>x.id===pid);return p?p.short+' · '+secTitle(p,sec):''})():'');
  park();S=s;st.set('sess',S);runTimer();renderQuiz();lastAct({mode:'Game',what:' · '+s.what});
}
/* points after each answer: 10 (scenario 30) × combo multiplier, +5 when fast, half for a retry */
function gameAnswer(it,q){
  const g=S.g;
  if(it.ok){g.combo++;g.best=Math.max(g.best,g.combo);g.right++;
    const m=multOf(g.combo),fast=(now()-(it.t0||now()))/1000<(q.k==='p'?45:15);
    let p=(q.k==='p'?30:10)*m+(fast?5:0);if(it.re)p=Math.ceil(p/2);g.pts+=p;
    if(g.type==='lightning'&&S.left!=null)S.left+=3;
    gpop('+'+p+(m>1?' ×'+m:'')+(fast?' ⚡':''),'good');
    if([3,6,10].includes(g.combo))setTimeout(()=>gpop('Combo ×'+m+'!','combo'),500);
  }else{const lost=g.combo>=3;g.combo=0;g.wrong++;if(g.h!=null){g.h=Math.max(0,g.h-1);gpop(g.h?'💔 −1':'💀','bad')}else gpop(lost?'Combo lost':'✘','bad')}
}
function gpop(t,k){const d=document.createElement('div');d.className='gpop '+(k||'');d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),1500)}
const gOut=()=>S&&S.mode==='game'&&S.g.h===0;
const revCost=()=>30*(S.g.rev+1);
function gameHead(){
  const g=S.g,m=multOf(g.combo);
  const hearts=g.h==null?'':`<span class="ghearts" aria-label="${g.h} hearts">${'❤️'.repeat(g.h)}${'🤍'.repeat(Math.max(0,(g.mh||3)-g.h))}</span>`;
  return `<div class="ghud">${hearts}<span class="gch ${m>1?'hot':''}">${m>1?'🔥 ×'+m:'×1'}</span><span class="gch">⭐ <b>${g.pts}</b></span><span class="gch">🪙 <b>${G.coins}</b></span></div>`;
}
const PWC={f:15,s:10,h:25};
const canUse=k=>(G.inv[k]||0)>0||G.coins>=PWC[k];
function useCard(k){if((G.inv[k]||0)>0){G.inv[k]--;saveG();return true}if(G.coins>=PWC[k]){G.coins-=PWC[k];saveG();return true}return false}
const pwLbl=k=>(G.inv[k]||0)>0?`${CARD[k][0]} ${CARD[k][1]} · <b>×${G.inv[k]}</b>`:`${CARD[k][0]} ${CARD[k][1]} · ${PWC[k]}🪙`;
function gamePowers(it,q){
  if(it.ck)return '';const g=S.g;
  return `<div class="gpw">${q.k==='m'&&!it.hide?`<button class="plain sm" data-act="g5050" ${canUse('f')?'':'disabled'}>${pwLbl('f')}</button>`:''}<button class="plain sm" data-act="gskip" ${canUse('s')?'':'disabled'}>${pwLbl('s')}</button>${g.h!=null&&g.h<6?`<button class="plain sm" data-act="gheart" ${canUse('h')?'':'disabled'}>${pwLbl('h')}</button>`:''}</div>`;
}
function gameFinish(){
  clearInterval(timerId);S.done=true;const g=S.g,lv0=lvlOf(G.xp).L,had=Object.assign({},G.ach);
  const ans=g.right+g.wrong,acc=ans?g.right/ans:0,perfect=g.wrong===0&&g.right>=5&&g.type!=='lightning';
  let xp=g.pts,coins=g.right+(perfect?10:0),bonus=[];
  if(perfect){G.perfect++;bonus.push('💎 Perfect +10🪙')}
  if(g.type==='daily'&&G.daily!==dkey()){xp*=2;coins+=20;G.daily=dkey();bonus.push('📅 Daily ×2 XP · +20🪙')}
  let stars=null;
  if(g.type==='level'&&g.key){stars=g.h>0?(acc>=1?3:acc>=.8?2:acc>=.6?1:0):0;const was=G.stars[g.key]||0;if(stars>was){coins+=(stars-was)*5;G.stars[g.key]=stars;bonus.push('⭐ New stars +'+(stars-was)*5+'🪙')}}
  if(G.day!==dkey()){G.streak=G.day===yday()?G.streak+1:1;G.day=dkey();const b=5*Math.min(G.streak,7);coins+=b;bonus.push('🔥 Day '+G.streak+' streak +'+b+'🪙')}
  if(g.type==='lightning')G.lt=Math.max(G.lt,g.right);if(g.type==='survival')G.sv=Math.max(G.sv,g.right);
  xp=Math.round(xp*xpMul());coins=Math.round(coins*coinMul());
  const win=g.type==='lightning'?g.right>=8:g.type==='survival'?g.right>=10:g.h>0&&acc>=.6;
  const tr0=G.tr,lg0=leagueOf(G.tr),dt=win?20+Math.min(10,g.best):-12;G.tr=Math.max(LEAGUES[lg0][0],G.tr+dt);G.trMax=Math.max(G.trMax,G.tr);
  const promo=leagueOf(G.tr)>lg0&&G.tr>=G.trMax;if(promo){G.gems+=10;bonus.push('🎖️ New league · +10💎')}
  const chest=win?dropChest(acc,perfect):null;
  if(win)qProg('win',1);qProg('combo',g.best);if(g.type==='lightning')qProg('light',1);if(g.type==='daily')qProg('daily',1);
  const xp0=G.xp;G.xp+=xp;G.coins+=coins;G.earned+=coins;G.games++;G.best=Math.max(G.best,g.best);
  ACH.forEach(a=>{if(!G.ach[a[0]]&&a[4]())G.ach[a[0]]=now()});
  saveG();
  S.gres={xp,coins,bonus,stars,acc,ans,perfect,xp0,win,dt:G.tr-tr0,tr:G.tr,promo,chest,lvUp:lvlOf(G.xp).L>lv0,newA:ACH.filter(a=>G.ach[a[0]]&&!had[a[0]])};
  S._wrong=S.items.filter(i=>!i.re&&i.ck&&i.ok===false).map(i=>i.id);
  st.del('sess');renderGameResult();FX.done(acc>=.6);if(acc>=.6||S.gres.lvUp)confetti();
}
function renderGameResult(){
  const g=S.g,r=S.gres,t=GT[g.type],a=lvlOf(r.xp0),b=lvlOf(G.xp),rk=rankOf(b.L);
  const head=g.type==='lightning'?'⚡ Time!':g.h===0?'💀 Game over':r.acc>=.8?'🏆 Great game!':'👍 Well played';
  const fa=g.type==='lightning'?'وقت تموم شد!':g.h===0?'قلب‌ها تموم شد — دوباره امتحان کن!':r.acc>=.8?'عالی بازی کردی!':'خوب بود، ادامه بده!';
  page(`<div class="gres"><div class="gt1">${head}</div><div class="fa" style="text-align:center">${fa}</div>
   ${r.stars!=null?`<div class="gstars">${[1,2,3].map(i=>`<span class="${i<=r.stars?'on':''}" style="--d:${i*.25}s">★</span>`).join('')}</div>`:''}
   <div class="gbig">${g.pts}<span>points</span></div></div>
  <div class="card"><div class="stats"><div class="stat"><b>${g.right}/${r.ans}</b><span>correct</span></div><div class="stat"><b>${Math.round(r.acc*100)}%</b><span>accuracy</span></div><div class="stat"><b>🔥${g.best}</b><span>best combo</span></div></div></div>
  <div class="card"><h2>Rewards · جایزه‌ها</h2>
   <div class="row" style="gap:8px"><span class="gch lg">✨ +${r.xp} XP</span><span class="gch lg">🪙 +${r.coins}</span><span class="gch lg ${r.win?'tup':'tdn'}">🏆 ${r.dt>0?'+':''}${r.dt}</span></div>
   ${r.chest?`<div class="gotchest">${chestSVG(r.chest,64)}<div><b>${CH[r.chest].n} chest won!</b><div class="mut">It is waiting in your chest slots · صندوق ${CH[r.chest].fa} گرفتی</div></div></div>`:r.win?'<p class="warnline">You won, but your chest slots are full — open a chest to make room.</p>':'<p class="mut">Win the game (60% or more without losing all hearts) to earn trophies and a chest.</p>'}
   ${r.promo?`<div class="glvup">🎖️ Promoted to ${LEAGUES[leagueOf(r.tr)][1]} ${esc(LEAGUES[leagueOf(r.tr)][2])}!</div>`:''}
   ${r.bonus.length?`<div class="mut" style="margin-top:8px">${r.bonus.map(esc).join('<br>')}</div>`:''}
   ${r.lvUp?`<div class="glvup">⬆️ Level up! Level ${b.L} · ${rk[1]} ${esc(rk[2])} <span class="fa">${esc(rk[3])}</span></div>`:''}
   <div class="spread" style="margin-top:12px"><b>Level ${b.L}</b><span class="mut">${b.cur} / ${b.need} XP</span></div>
   <div class="gxp"><i id="gxpb" style="width:${r.lvUp?0:pct(a.cur,a.need)}%"></i></div></div>
  ${r.newA.length?`<div class="card"><h2>🏅 New achievements</h2><div class="gach">${r.newA.map(x=>`<div class="ga on new"><span>${x[1]}</span><b>${esc(x[2])}</b><small class="fa">${esc(x[3])}</small></div>`).join('')}</div></div>`:''}
  <div class="row"><button data-act="gagain">▶ Play again</button>${S._wrong.length?`<button class="plain" data-act="drillwrong">Practise my ${S._wrong.length} mistake${S._wrong.length>1?'s':''}</button>`:''}<button class="plain" data-act="answers">Review answers</button><button class="plain" data-act="tab" data-v="game">🎮 Game hub</button></div>`);
  setTimeout(()=>{const x=$('#gxpb');if(x)x.style.width=pct(b.cur,b.need)+'%'},300);
}
function renderGame(keep){
  const v=lvlOf(G.xp),rk=rankOf(v.L),gk=gameKeys(),nq=qsIn(gk).length,dd=G.daily===dkey();
  const map=PACKS.filter(packOn).map(p=>{const ks=Object.keys(p.sections).filter(s=>secOn(p,s)&&qsIn([secKey(p,s)]).length);if(!ks.length)return '';
    const nodes=ks.map((s,i)=>{const k=secKey(p,s),stv=G.stars[k]||0,open=i<3||G.unl[k]||(G.stars[secKey(p,ks[i-1])]||0)>0||stv>0;
      return `<button class="gnode ${open?'':'lock'} ${stv===3?'gold':''}" data-act="${open?'glevel':'gunlock'}" data-v="${esc(k)}" title="${esc(p.sections[s].en)}"><b>${open?esc(s):'🔒'}</b><span>${[1,2,3].map(j=>j<=stv?'★':'☆').join('')}</span></button>`}).join('');
    const got=ks.reduce((a,s)=>a+(G.stars[secKey(p,s)]||0),0);
    return `<div class="card"><div class="spread"><h2 style="margin:0">🗺️ ${esc(p.short==='Book'?'Textbook':p.short)}</h2><span class="mut">★ ${got} / ${ks.length*3}</span></div><p class="mut" style="margin:4px 0 10px">10 questions per level · 60% = ★ · 80% = ★★ · 100% = ★★★ · a star opens the next level</p><div class="gmap">${nodes}</div></div>`}).join('');
  page(`${playerBar()}${leagueCard()}${chestRow()}${questCard()}${baseCard()}
  <div class="stats gstats" style="margin-bottom:12px"><div class="stat"><b>🔥 ${G.streak}</b><span>day streak${G.day===dkey()?' ✓':''}</span></div><div class="stat"><b>×${G.best}</b><span>best combo</span></div><div class="stat"><b>🏆 ${G.trMax||G.tr}</b><span>best trophies</span></div></div>
  <button class="tile plain gdaily ${dd?'done':''}" data-act="gplay" data-v="daily"><span class="ic">📅</span><span><b>Daily challenge${dd?' ✓':''}</b><span class="d">${dd?'Done for today — play again for fun':'10 questions · double XP · +20🪙 · چالش امروز'}</span></span></button>
  <div class="tiles">
   <button class="tile plain" data-act="gplay" data-v="quick"><span class="ic">🎮</span><span><b>Quick play</b><span class="d">10 questions · 3 ❤️ · بازی سریع</span></span></button>
   <button class="tile plain" data-act="gplay" data-v="survival"><span class="ic">❤️</span><span><b>Survival</b><span class="d">Go until your hearts run out · best ${G.sv}</span></span></button>
   <button class="tile plain" data-act="gplay" data-v="lightning"><span class="ic">⚡</span><span><b>Lightning</b><span class="d">90 seconds · +3 s per right answer · best ${G.lt}</span></span></button>
  </div>
  <div class="card"><div class="spread"><div><b>Questions from</b><div class="mut">${gk.length} section${gk.length===1?'':'s'} · ${nq} questions</div></div><button class="plain sm" style="white-space:nowrap;flex:none" data-act="setup" data-v="game">Choose sections</button></div></div>
  <div class="card"><h2>How to score · امتیاز</h2><p class="mut" style="margin:0">✅ 10 points (scenario 30) · 🔥 3 in a row ×2, 6 ×3, 10 ×4 · ⚡ answer fast +5 · 💔 a wrong answer costs a heart · 🪙 coins buy 50/50, skip, extra hearts and locked levels · you always see the explanation, so every game teaches.</p></div>
  ${map}
  <div class="card"><h2>🏅 Achievements · ${Object.keys(G.ach).length}/${ACH.length}</h2><div class="gach">${ACH.map(x=>`<div class="ga ${G.ach[x[0]]?'on':''}"><span>${x[1]}</span><b>${esc(x[2])}</b><small class="fa">${esc(x[3])}</small></div>`).join('')}</div></div>
  <div class="card"><h2>🏆 Leagues</h2>${LEAGUES.map((l,i)=>`<div class="spread lgrow ${leagueOf(G.tr)===i?'cur':''}"><span>${l[1]} <b>${esc(l[2])}</b> <span class="fa">${esc(l[3])}</span></span><span class="mut">${l[0]}🏆</span></div>`).join('')}<p class="mut" style="margin:8px 0 0">Win: +20 to +30 🏆 · lose: −12 🏆 · you never drop below the league you reached.</p></div>`,false,keep===true);
}

/* ================= Daily loop: leagues, chests, daily rewards, quests and the Cyber Base =================
   Every reward comes from studying: answering questions, winning games and reading lessons.
   Timers (chests, building upgrades, the free chest) give a reason to come back later in the day. */
G=Object.assign({gems:20,tr:0,trMax:0,chests:[],free:0,inv:{f:1,s:1,h:1},cal:{n:0,last:''},q:null,base:{hq:1,fw:1,vault:1,lab:1,soc:1},build:null,readR:{}},G);
const MIN=60e3,HR=36e5;
const LEAGUES=[[0,'🥉','Bronze Bunker','سنگر برنزی','#b45309','#f59e0b'],[150,'🥈','Silver Server','سرور نقره‌ای','#475569','#94a3b8'],[400,'🥇','Gold Gateway','دروازه‌ی طلایی','#a16207','#facc15'],[800,'💠','Crystal Cloud','ابر کریستالی','#0e7490','#22d3ee'],[1300,'🗼','Titan Tower','برج تایتان','#6d28d9','#a78bfa'],[2000,'⚛️','Quantum Core','هسته‌ی کوانتومی','#be185d','#f472b6'],[3000,'👑','Legend League','لیگ افسانه‌ها','#b91c1c','#fbbf24']];
const leagueOf=tr=>{let i=0;LEAGUES.forEach((l,j)=>{if(tr>=l[0])i=j});return i};
const CH={wood:{n:'Wooden',fa:'چوبی',m:15,c:[15,30],k:1,g:[0,0],col:['#7c2d12','#d97706']},
  silver:{n:'Silver',fa:'نقره‌ای',m:60,c:[40,80],k:2,g:[0,2],col:['#475569','#cbd5e1']},
  gold:{n:'Golden',fa:'طلایی',m:240,c:[100,180],k:4,g:[3,6],col:['#a16207','#fde047']},
  magic:{n:'Magic',fa:'جادویی',m:480,c:[250,400],k:6,g:[10,15],col:['#6d28d9','#f0abfc']}};
const FREE=4*HR,SLOTS=4;
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const hms=ms=>{let s=Math.max(0,Math.ceil(ms/1000));const h=Math.floor(s/3600),m=Math.floor(s%3600/60);s%=60;return h?h+'h '+String(m).padStart(2,'0')+'m':m?m+'m '+String(s).padStart(2,'0')+'s':s+'s'};
const gemsFor=ms=>Math.max(1,Math.ceil(ms/(10*MIN)));
const CARD={f:['✂️','50/50'],s:['⏭','Skip'],h:['❤️','Heart']};
/* base perks */
const maxHearts=()=>3+(G.base.fw>=3)+(G.base.fw>=5);
const coinMul=()=>1+.1*(G.base.vault-1),xpMul=()=>1+.1*(G.base.lab-1);
const chestDur=t=>CH[t].m*MIN*(1-.1*(G.base.soc-1));
function chestSVG(t,w){const c=CH[t].col;return `<svg class="chest ch-${t}" viewBox="0 0 64 58" width="${w}" height="${Math.round(w*58/64)}" aria-hidden="true">
  <ellipse cx="32" cy="54" rx="25" ry="3.5" fill="rgba(0,0,0,.2)"/><rect x="7" y="25" width="50" height="27" rx="5" fill="${c[0]}"/>
  <rect x="10" y="29" width="44" height="20" rx="3" fill="${c[1]}" opacity=".35"/><path d="M7 27Q7 7 32 7Q57 7 57 27Z" fill="${c[1]}"/>
  <path d="M12 24Q13 12 32 11" stroke="#fff" stroke-opacity=".45" stroke-width="3" fill="none" stroke-linecap="round"/>
  <rect x="7" y="23" width="50" height="5" fill="${c[0]}"/><rect x="28" y="7" width="8" height="45" fill="${c[0]}" opacity=".55"/>
  <rect x="25.5" y="21" width="13" height="13" rx="3" fill="#fef3c7" stroke="${c[0]}" stroke-width="1.5"/><circle cx="32" cy="27.5" r="2.2" fill="${c[0]}"/></svg>`}
/* ---- chests ---- */
function chestState(c){if(!c.s)return 'idle';return now()>=c.s+chestDur(c.t)?'ready':'run'}
const unlocking=()=>G.chests.find(c=>chestState(c)==='run');
function dropChest(acc,perfect){
  if(G.chests.length>=SLOTS)return null;
  let r=Math.random()*100+(perfect?15:0)+(acc>=.9?5:0);
  const t=r>=97?'magic':r>=82?'gold':r>=52?'silver':'wood';G.chests.push({t,s:0});return t;
}
function rollChest(t){const d=CH[t],r={coins:Math.round(rnd(d.c[0],d.c[1])*coinMul()),gems:rnd(d.g[0],d.g[1]),cards:{}};
  for(let i=0;i<d.k;i++){const k='fsh'[rnd(0,2)];r.cards[k]=(r.cards[k]||0)+1}return r}
function giveR(r){G.coins+=r.coins||0;G.earned+=r.coins||0;G.gems+=r.gems||0;Object.entries(r.cards||{}).forEach(([k,n])=>G.inv[k]=(G.inv[k]||0)+n);if(r.xp)G.xp+=r.xp}
const rwHTML=r=>[r.coins?`<span class="rw" style="--d:.5s">🪙<b>+${r.coins}</b></span>`:'',r.gems?`<span class="rw" style="--d:.7s">💎<b>+${r.gems}</b></span>`:'',r.xp?`<span class="rw" style="--d:.8s">✨<b>+${r.xp} XP</b></span>`:'',
  ...Object.entries(r.cards||{}).map(([k,n],i)=>`<span class="rw" style="--d:${.9+i*.2}s">${CARD[k][0]}<b>${CARD[k][1]} ×${n}</b></span>`)].join('');
function openChest(t,title){
  const r=rollChest(t);giveR(r);qProg('chest',1);saveG();FX.streak();
  modal(`<div class="chopen"><div class="chbox">${chestSVG(t,130)}<div class="burst"></div></div><h3>${esc(title||CH[t].n+' chest')}</h3><div class="fa" style="margin-top:-4px">صندوق ${CH[t].fa}</div>
   <div class="rws">${rwHTML(r)}</div></div><button data-act="closeR">Collect · بردار</button>`);
  confetti();
}
function chestTap(i){
  const c=G.chests[i];if(!c)return;const s=chestState(c),u=unlocking();
  if(s==='ready'){G.chests.splice(i,1);openChest(c.t);return}
  if(s==='idle'&&!u){c.s=now();saveG();toast('⏳ Unlocking · '+hms(chestDur(c.t)));refresh();return}
  const left=s==='run'?c.s+chestDur(c.t)-now():chestDur(c.t),g=gemsFor(left);
  modal(`<div class="chopen">${chestSVG(c.t,96)}<h3>${CH[c.t].n} chest</h3><p class="mut">${s==='run'?'Unlocking — '+hms(left)+' left':'Another chest is unlocking. You can open this one now with gems.'}</p></div>
   <button data-act="chgem" data-v="${i}" ${G.gems<g?'disabled':''}>Open now · ${g}💎</button><button class="plain" data-act="close">Wait</button><p class="mut" style="text-align:center">You have ${G.gems}💎 · win games and finish quests for more</p>`);
}
function chestRow(){
  const fr=G.free+FREE-now();
  return `<div class="card chests"><div class="spread"><h2 style="margin:0">🎁 Chests · صندوق‌ها</h2><span class="mut">${G.chests.length}/${SLOTS}</span></div>
  <div class="slots">${Array.from({length:SLOTS},(_,i)=>{const c=G.chests[i];if(!c)return `<div class="slot empty"><span>Win a game<br>to get a chest</span></div>`;
    const s=chestState(c);return `<button class="slot ${s}" data-act="chest" data-v="${i}">${chestSVG(c.t,54)}<b>${CH[c.t].n}</b><span ${s==='run'?`data-end="${c.s+chestDur(c.t)}"`:''}>${s==='ready'?'OPEN!':s==='run'?hms(c.s+chestDur(c.t)-now()):'Tap to unlock · '+hms(chestDur(c.t))}</span></button>`}).join('')}</div>
  <button class="freech ${fr<=0?'ready':''}" data-act="freechest">${chestSVG('wood',36)}<span><b>Free chest</b><span ${fr>0?`data-end="${G.free+FREE}"`:''}>${fr<=0?'Ready — tap to open!':hms(fr)}</span></span></button>
  ${G.chests.length>=SLOTS?'<p class="warnline">Chest slots are full — open one so your next win can drop a new chest!</p>':''}</div>`;
}
/* ---- daily login calendar: 7 days, bigger each day; missing a day starts again at day 1 ---- */
const CAL=[{coins:30},{gems:5},{chest:'wood'},{coins:80},{gems:10},{chest:'silver'},{chest:'gold'}];
const calDue=()=>G.cal.last!==dkey();
function calModal(){
  let n=G.cal.n;if(G.cal.last&&G.cal.last!==yday()&&calDue())n=0;
  modal(`<h3 style="text-align:center">📆 Daily reward · جایزه‌ی روزانه</h3><p class="mut" style="text-align:center;margin-top:0">Come back every day — day 7 is a golden chest!</p>
  <div class="cal">${CAL.map((x,i)=>{const d=i<n%7||(!calDue()&&i===(n-1)%7)?'got':i===n%7&&calDue()?'today':'';
    return `<div class="cd ${d}"><small>Day ${i+1}</small><span>${x.chest?chestSVG(x.chest,34):x.gems?'💎':'🪙'}</span><b>${x.chest?CH[x.chest].n:x.gems?x.gems:x.coins}</b>${d==='got'?'<i>✓</i>':''}</div>`}).join('')}</div>
  ${calDue()?'<button data-act="calclaim">Claim · بگیر</button>':'<p style="text-align:center">✅ Claimed today. See you tomorrow!</p>'}<button class="plain" data-act="close">Close</button>`);
}
function calClaim(){
  if(!calDue())return;if(G.cal.last&&G.cal.last!==yday())G.cal.n=0;
  const x=CAL[G.cal.n%7];G.cal.n++;G.cal.last=dkey();
  if(x.chest){saveG();openChest(x.chest,'Day '+G.cal.n+' reward');return}
  giveR(x);saveG();modal(`<div class="chopen"><div style="font-size:4rem">${x.gems?'💎':'🪙'}</div><h3>Day ${G.cal.n} reward</h3><div class="rws">${rwHTML(x)}</div></div><button data-act="closeR">Collect · بردار</button>`);FX.streak();
}
/* ---- daily quests: three new ones every day, plus a bonus for finishing all three ---- */
const QP=[['ans','Answer {n} questions','به {n} سؤال جواب بده',[20,30,40]],['right','Get {n} answers right','{n} جواب درست بده',[15,25]],
  ['combo','Reach a combo of {n} in a game','در بازی {n} تا پشت سر هم درست بزن',[5,8]],['win','Win {n} games','{n} بازی را ببر',[2,3]],
  ['read','Read {n} lesson in Learn','{n} درس را در Learn بخوان',[1]],['light','Play {n} Lightning game','{n} بازی رعد و برق انجام بده',[1]],
  ['daily','Finish the daily challenge','چالش روزانه را تمام کن',[1]],['chest','Open {n} chests','{n} صندوق باز کن',[2]]];
function quests(){
  if(G.q&&G.q.day===dkey())return G.q;
  const pick=seeded(QP,'q'+dkey()).slice(0,3);
  G.q={day:dkey(),bonus:false,l:pick.map(p=>{const goal=seeded(p[3],dkey()+p[0])[0];return{id:p[0],goal,n:0,cl:false,r:{coins:20+Math.round(goal*1.5),gems:rnd(2,3)}}})};saveG();return G.q;
}
function qProg(id,v){const q=quests();let ch=false;q.l.forEach(x=>{if(x.id!==id||x.n>=x.goal)return;x.n=id==='combo'?Math.max(x.n,v):x.n+v;if(x.n>=x.goal){x.n=x.goal;ch=true}});
  if(ch){saveG();setTimeout(()=>gpop('✅ Quest complete!','combo'),900)}}
function questCard(){
  const q=quests(),all=q.l.every(x=>x.cl);
  return `<div class="card quests"><div class="spread"><h2 style="margin:0">📜 Daily quests · مأموریت‌ها</h2><span class="mut" data-end="${new Date(new Date().toDateString()).getTime()+DAY}">${hms(new Date(new Date().toDateString()).getTime()+DAY-now())}</span></div>
  ${q.l.map((x,i)=>{const p=QP.find(y=>y[0]===x.id),done=x.n>=x.goal;
    return `<div class="qrow ${x.cl?'cl':''}"><div class="qt"><b>${esc(p[1].replace('{n}',x.goal))}</b><small class="fa">${esc(p[2].replace('{n}',x.goal))}</small><div class="qbar"><i style="width:${pct(x.n,x.goal)}%"></i><span>${x.n}/${x.goal}</span></div></div>
    ${x.cl?'<span class="qok">✓</span>':done?`<button class="sm qclaim" data-act="qclaim" data-v="${i}">Claim<br>🪙${x.r.coins} 💎${x.r.gems}</button>`:`<span class="qrw">🪙${x.r.coins}<br>💎${x.r.gems}</span>`}</div>`}).join('')}
  <div class="qbonus ${all&&!q.bonus?'ready':''}">${chestSVG('silver',34)}<span><b>Finish all 3</b> → Silver chest + 10💎</span>${q.bonus?'<span class="qok">✓</span>':all?'<button class="sm" data-act="qbonus">Open</button>':''}</div></div>`;
}
/* ---- Cyber Base: upgrade buildings with coins; each upgrade takes real time and gives a perk ---- */
const BLD={hq:['🏛️','Headquarters','مقر فرماندهی','Other buildings can go one level above it','#6366f1'],
  fw:['🧱','Firewall','فایروال','+1 heart in games at level 3 and level 5','#ef4444'],
  vault:['🏦','Coin Vault','گاوصندوق سکه','+10% coins from games and chests per level','#f59e0b'],
  lab:['🔬','Crypto Lab','آزمایشگاه رمزنگاری','+10% XP from games per level','#10b981'],
  soc:['🛰️','SOC Center','مرکز عملیات امنیت','Chests unlock 10% faster per level','#0ea5e9']};
const BMAX=5,BCOST=[60,180,450,1000],BTIME=[5,30,120,360],HQREQ=[2,4,7,10];
const bCost=(id,L)=>Math.round(BCOST[L-1]*(id==='hq'?1.5:1));
function bBlock(id){const L=G.base[id];if(L>=BMAX)return 'Max level';if(id==='hq'&&lvlOf(G.xp).L<HQREQ[L-1])return 'Needs player level '+HQREQ[L-1];if(id!=='hq'&&L>G.base.hq)return 'Upgrade Headquarters to level '+(L)+' first';return ''}
function bldSVG(id,L){const c=BLD[id][4];let f='';for(let i=0;i<L;i++){const y=74-13*(i+1);
    f+=`<rect x="16" y="${y}" width="48" height="12.5" rx="2" fill="${c}" opacity="${.62+.08*i}"/>`+[23,36,49].map(x=>`<rect x="${x}" y="${y+3.5}" width="7" height="5.5" rx="1" fill="#fff" opacity=".8"/>`).join('')}
  const top=74-13*L;
  return `<svg viewBox="0 0 80 92" width="86" height="99" aria-hidden="true"><ellipse cx="40" cy="80" rx="34" ry="7" fill="#22c55e" opacity=".35"/><ellipse cx="40" cy="78" rx="28" ry="4" fill="rgba(0,0,0,.18)"/>${f}
   <path d="M12 ${top+1}L40 ${top-14}L68 ${top+1}Z" fill="${c}"/><rect x="34" y="66" width="12" height="9" rx="1.5" fill="#1e293b" opacity=".75"/>
   ${L>=BMAX?`<line x1="40" y1="${top-14}" x2="40" y2="${top-26}" stroke="#334155" stroke-width="1.5"/><path d="M40 ${top-26}l10 3-10 3z" fill="#facc15"/>`:''}</svg>`}
function checkBuild(){const b=G.build;if(!b||now()<b.end)return false;G.base[b.id]++;G.build=null;saveG();toast('🎉 '+BLD[b.id][1]+' is now level '+G.base[b.id]+'!');FX.streak();return true}
function renderBase(keep){
  checkBuild();const b=G.build;
  page(`<div class="spread"><button class="plain sm" data-act="tab" data-v="game">← Play</button>${resBar(true)}</div>
  <h1 style="margin-top:10px">🏰 Cyber Base</h1><p class="sub">Upgrade your buildings with coins from studying. One builder works at a time — upgrades finish even while the app is closed. · پایگاه سایبری‌ات را بساز</p>
  <div class="card builder"><div class="spread"><b>👷 Builder</b>${b?`<span>Building ${BLD[b.id][0]} ${esc(BLD[b.id][1])} · <b data-end="${b.end}">${hms(b.end-now())}</b></span>`:'<span class="ok">Free — pick an upgrade</span>'}</div>
   ${b?`<button class="sm" style="margin-top:8px" data-act="bfast" ${G.gems<gemsFor(b.end-now())?'disabled':''}>Finish now · ${gemsFor(b.end-now())}💎</button>`:''}</div>
  <div class="base">${Object.keys(BLD).map(id=>{const d=BLD[id],L=G.base[id],blk=bBlock(id),busy=b&&b.id===id,c=L<BMAX?bCost(id,L):0;
    return `<div class="bcard ${busy?'busy':''}"><div class="bart">${bldSVG(id,L)}<span class="blv">Lv ${L}</span></div><b>${d[0]} ${esc(d[1])}</b><small class="fa">${esc(d[2])}</small><p class="mut">${esc(d[3])}</p>
     ${busy?`<span class="mut">⏳ <span data-end="${b.end}">${hms(b.end-now())}</span></span>`:blk?`<span class="mut">${esc(blk)}</span>`:`<button class="sm" data-act="bup" data-v="${id}" ${b||G.coins<c?'disabled':''}>⬆ Lv ${L+1} · ${c}🪙 · ${hms(BTIME[L-1]*MIN)}</button>`}</div>`}).join('')}</div>
  <div class="card"><h2>Your perks now</h2><p class="mut" style="margin:0">❤️ ${maxHearts()} hearts per game · 🪙 ×${coinMul().toFixed(1)} coins · ✨ ×${xpMul().toFixed(1)} XP · 🎁 chests ${Math.round(100*(1-.1*(G.base.soc-1)))}% of normal time</p></div>`,false,keep===true);
}
function baseCard(){const b=G.build;return `<button class="tile plain basetile" data-act="tab" data-v="base"><span class="ic">🏰</span><span><b>Cyber Base · HQ ${G.base.hq}</b><span class="d">${b?'👷 '+esc(BLD[b.id][1])+' · <span data-end="'+b.end+'">'+hms(b.end-now())+'</span>':'👷 Builder is free — upgrade a building!'}</span></span>${b?'':'<span class="badge">!</span>'}</button>`}
/* ---- league banner and resources ---- */
/* top bar on the Play page: level shield, rank, XP and resources */
function playerBar(){const v=lvlOf(G.xp),rk=rankOf(v.L);
  return `<div class="plbar"><div class="pshield"><span>${v.L}</span></div><div class="pinfo"><b>${rk[1]} ${esc(rk[2])}</b><div class="pxp"><i style="width:${pct(v.cur,v.need)}%"></i><span>${v.cur}/${v.need} XP</span></div></div>
   <div class="pres"><span><em>🪙</em><b>${G.coins}</b></span><span><em>💎</em><b>${G.gems}</b></span></div></div>`}
function resBar(sm){return `<div class="res ${sm?'sm':''}"><span>🪙 <b>${G.coins}</b></span><span>💎 <b>${G.gems}</b></span><span>🏆 <b>${G.tr}</b></span></div>`}
function leagueCard(){
  const i=leagueOf(G.tr),l=LEAGUES[i],nx=LEAGUES[i+1],v=lvlOf(G.xp),rk=rankOf(v.L);
  return `<div class="league" style="--l1:${l[4]};--l2:${l[5]}"><div class="lg1"><span class="lgem">${l[1]}</span><div><small>League ${i+1}</small><b>${esc(l[2])}</b><span class="fa">${esc(l[3])}</span></div>
   <div class="lglv"><span>${v.L}</span><small>${rk[1]} ${esc(rk[2])}</small></div></div>
   <div class="lgbar"><i style="width:${nx?pct(G.tr-l[0],nx[0]-l[0]):100}%"></i><span>🏆 ${G.tr}${nx?' / '+nx[0]+' → '+nx[1]+' '+esc(nx[2]):' · top league!'}</span></div>
   <button class="battle" data-act="gplay" data-v="quick">⚔️ Battle · بازی</button></div>`;
}
const claimable=()=>G.chests.some(c=>chestState(c)==='ready')||G.free+FREE<=now()||calDue()||(()=>{const q=quests();return q.l.some(x=>x.n>=x.goal&&!x.cl)||(q.l.every(x=>x.cl)&&!q.bonus)})()||(!G.build&&Object.keys(BLD).some(id=>!bBlock(id)&&G.coins>=bCost(id,G.base[id])));
/* refresh the page in place (keeps the scroll position) when a timer runs out */
function refresh(){if(ACT==='quiz'||ACT==='read'||$('#ov'))return;if(tab==='home')renderHome(true);else if(tab==='game')renderGame(true);else if(tab==='base')renderBase(true);renderTabs()}
let _calShown=false;
setInterval(()=>{
  if(document.hidden)return;let flip=checkBuild();
  document.querySelectorAll('[data-end]').forEach(e=>{const l=+e.dataset.end-now();if(l<=0){if(!e.dataset.fired){e.dataset.fired=1;flip=true}}else e.textContent=hms(l)});
  if(flip)refresh();
},1000);

/* ================= events ================= */
document.addEventListener('click',e=>{
  FX.unlock();vUnlock();
  const w=e.target.closest('.w');if(w&&!w.closest('[data-act]')){wordSheet(w);return}
  const lt=e.target.closest('bdi.lt');if(lt&&!lt.closest('[data-act]')&&!lt.closest('#ov')){const t=lt.textContent;showWord(t,0,t.length,t);return}
  const b=e.target.closest('[data-act]');if(!b||b.tagName==='SELECT'||b.tagName==='INPUT')return;
  const a=b.dataset.act,v=b.dataset.v;
  switch(a){
    case 'tab':if(v==='settings')SETP=null;closeModal();clearInterval(timerId);if(S&&S.done)S=null;if(S)st.set('sess',S);go(v);break;
    case 'sgo':sOpen(v);break;
    case 'sback':SETP=null;renderSettings();break;
    case 'setv':{const k=b.dataset.k,num=typeof SET[k]==='number';SET[k]=num?+v:v;st.set('set',SET);applyLook();if(k==='vol'){FX.set({vol:SET.vol});FX.ok()}renderSettings(true);break}
    case 'aipick':{const c=aiCfg();c.p=v;SET.ai=c;st.set('set',SET);AIEDIT=false;renderSettings(true);break}
    case 'ailangv':{const c=aiCfg();c.lang=v;SET.ai=c;st.set('set',SET);renderSettings(true);break}
    case 'aikedit':AIEDIT=true;renderSettings(true);setTimeout(()=>{const i=$('#aikin');if(i){i.value='';i.focus()}},50);break;
    case 'secdot':{SET.off.secs=SET.off.secs.includes(v)?SET.off.secs.filter(x=>x!==v):[...SET.off.secs,v];st.set('set',SET);cfg.secs=null;FX.tap();const inM=!!$('#ov .slist');renderCourses();if(inM)secNames(v.split(':')[0]);break}
    case 'secall':case 'secnone':{const p=PACKS.find(x=>x.id===v);const ks=Object.keys(p.sections).map(s=>secKey(p,s));SET.off.secs=SET.off.secs.filter(x=>!ks.includes(x));if(a==='secnone')SET.off.secs.push(...ks);st.set('set',SET);cfg.secs=null;renderCourses();break}
    case 'secnames':secNames(v);break;
    case 'addp':ADDP=!ADDP;renderCourses();break;
    case 'mode':SET.theme=v;st.set('set',SET);applyLook();renderSettings(true);break;
    case 'pal':SET.pal=v;st.set('set',SET);applyLook();if(tab==='settings')renderSettings(true);if($('#ov .thsheet'))thModal();break;
    case 'thopen':thTab=null;thModal();break;
    case 'thtab':thTab=v;thModal();break;
    case 'drillsec':startSession({mode:'review',secs:[v],n:15,timer:'off'});break;
    case 'setup':cfg.mode=v;go('setup');break;
    case 'cfgmode':cfg.mode=v;st.set('cfg',cfg);renderSetup(true);break;
    case 'cfgn':cfg.n=+v;st.set('cfg',cfg);renderSetup(true);break;
    case 'cfgtimer':cfg.timer=v;st.set('cfg',cfg);renderSetup(true);break;

    case 'cfgexp':SETX[v]=!SETX[v];renderSetup(true);break;
    /* All = every section of this course, None = clear it (and open the list to tick by hand), Only this = just this course */
    case 'cfgonly':case 'cfgall':case 'cfgnone':{const p=PACKS.find(x=>x.id===v);const gk=Object.keys(p.sections).filter(x=>secOn(p,x)).map(x=>secKey(p,x));
      if(a==='cfgonly')cfg.secs=gk;else if(a==='cfgall')cfg.secs=[...new Set([...cfg.secs,...gk])];else{cfg.secs=cfg.secs.filter(k=>!gk.includes(k));SETX[v]=true}
      st.set('cfg',cfg);renderSetup(true);break}
    case 'cfgevery':cfg.secs=activeKeys();st.set('cfg',cfg);renderSetup(true);break;
    case 'cfgclear':cfg.secs=[];PACKS.filter(packOn).forEach(p=>SETX[p.id]=true);st.set('cfg',cfg);renderSetup(true);break;
    case 'cfgsec':{const i=cfg.secs.indexOf(v);i>=0?cfg.secs.splice(i,1):cfg.secs.push(v);st.set('cfg',cfg);renderSetup(true);break}
    case 'gplay':gameStart(v);break;
    case 'chest':chestTap(+v);break;
    case 'chgem':{const c=G.chests[+v];if(!c)break;const left=chestState(c)==='run'?c.s+chestDur(c.t)-now():chestDur(c.t),g=gemsFor(left);if(G.gems<g)break;G.gems-=g;G.chests.splice(+v,1);openChest(c.t);break}
    case 'freechest':{const l=G.free+FREE-now();if(l>0){toast('🎁 Free chest in '+hms(l)+' — come back then!');break}G.free=now();openChest('wood','Free chest');break}
    case 'closeR':closeModal();refresh();break;
    case 'cal':calModal();break;
    case 'calclaim':calClaim();break;
    case 'qclaim':{const x=quests().l[+v];if(!x||x.cl||x.n<x.goal)break;x.cl=true;giveR(x.r);saveG();FX.streak();gpop('🪙+'+x.r.coins+' 💎+'+x.r.gems,'good');refresh();break}
    case 'qbonus':{const q=quests();if(q.bonus||!q.l.every(x=>x.cl))break;q.bonus=true;G.gems+=10;openChest('silver','Quest bonus · +10💎');break}
    case 'bup':{const L=G.base[v];if(G.build||bBlock(v)||G.coins<bCost(v,L))break;G.coins-=bCost(v,L);G.build={id:v,end:now()+BTIME[L-1]*MIN};saveG();FX.ok();toast('👷 Building started');renderBase(true);break}
    case 'bfast':{const b=G.build;if(!b)break;const g=gemsFor(b.end-now());if(G.gems<g)break;G.gems-=g;b.end=now();checkBuild();renderBase(true);break}
    case 'glevel':gameStart('level',{secs:[v],key:v,n:10});break;
    case 'gunlock':modal(`<h3>🔒 Locked level</h3><p>Get at least one ★ on the level before it, or unlock it now for <b>30🪙</b> (you have ${G.coins}).</p><button data-act="gbuy" data-v="${esc(v)}" ${G.coins<30?'disabled':''}>Unlock · 30🪙</button><button class="plain" data-act="close">Not now</button>`);break;
    case 'gbuy':if(G.coins>=30){G.coins-=30;G.unl[v]=1;saveG();closeModal();FX.streak();renderGame(true)}break;
    case 'gagain':{const g=S.g;gameStart(g.type,{secs:g.secs,key:g.key,n:g.n});break}
    case 'g5050':{const it=cur(),q=Q[it.id];if(it.ck||it.hide||!useCard('f'))break;
      it.pick=null;it.hide=shuffle(it.ord.map((oi,d)=>oi===0?-1:d).filter(d=>d>=0)).slice(0,Math.max(0,q.o.length-2));st.set('sess',S);FX.tap();renderQuiz(true);break}
    case 'gheart':if(S.g.h!=null&&S.g.h<6&&useCard('h')){S.g.h++;S.g.mh=Math.max(S.g.mh||3,S.g.h);st.set('sess',S);gpop('❤️ +1','good');renderQuiz(true)}break;
    case 'gskip':{const it=cur();if(it.ck||!useCard('s'))break;it.ck=true;it.sk=true;it.ok=null;it.frac=0;S.g.skip++;st.set('sess',S);
      if(S.i>=S.items.length-1)finish();else{S.i++;renderQuiz()}break}
    case 'gover':modal(`<h3>💀 Out of hearts</h3><p>Keep your ${S.g.pts} points and continue with one heart for <b>${revCost()}🪙</b> (you have ${G.coins}), or end the game.</p><button data-act="grevive" ${G.coins<revCost()?'disabled':''}>❤️ Revive · ${revCost()}🪙</button><button class="plain" data-act="finish">End game · see my score</button>`);break;
    case 'grevive':if(G.coins>=revCost()){G.coins-=revCost();S.g.rev++;S.g.h=1;saveG();closeModal();gpop('❤️ Revived!','good');
      if(S.i<S.items.length-1){S.i++;st.set('sess',S);renderQuiz()}else finish()}break;
    case 'begin':if(!cfg.secs||!cfg.secs.length){toast('Pick at least one section');break}st.set('cfg',cfg);if(cfg.mode==='game'){gameStart('quick',{secs:cfg.secs,n:cfg.n===9999?50:cfg.n});break}startSession(cfg);break;
    case 'resume':if(v&&(!S||String(S.id||S.start)!==v)){unpark(v);break}runTimer();renderQuiz();break;
    case 'drop':{if(!confirm('Delete this unfinished session?'))break;if(S&&String(S.id||S.start)===v){S=null;st.del('sess');clearInterval(timerId)}else st.set('paused',pausedL().filter(y=>String(y.id)!==v));go(tab==='home'?'home':'exam');break}
    case 'lastres':{const L=st.get('last',null);if(L&&L.result){S=L;renderResult()}break}
    case 'discard':closeModal();S=null;st.del('sess');clearInterval(timerId);go('exam');break;
    case 'zpick':{const it=cur();if(it.ck)break;const [ii,zi]=v.split(':').map(Number);if(it.ans[ii]===zi)delete it.ans[ii];else it.ans[ii]=zi;st.set('sess',S);FX.tap();renderQuiz(true);break}
    case 'pick':{const it=cur();if(it.ck||(it.hide&&it.hide.includes(+v)))break;it.pick=+v;st.set('sess',S);FX.tap();renderQuiz(true);break}
    case 'check':checkItem();renderQuiz(true);break;
    case 'next':if(S.i<S.items.length-1)S.i++;st.set('sess',S);renderQuiz();break;
    case 'prev':if(S.i>0)S.i--;renderQuiz();break;
    case 'fa':cur().fa=!cur().fa;renderQuiz(true);break;
    case 'hint':cur().hint=!cur().hint;renderQuiz(true);break;
    case 'faexp':cur().fe=true;renderQuiz(true);break;
    case 'speak':speak(v);break;
    case 'speakslow':speak(v,{rate:.75});break;
    case 'wordai':wordAI();break;
    case 'speakq':{const q=Q[cur().id];speak(q.k==='m'?q.q:q.title);break}
    case 'dlaudio':dlAudio();break;
    case 'ai':aiOpen();break;
    case 'aisend':{const i=$('#aiin'),h=AIH[cur().id];if(i&&h){aiSend(h,i.value);i.value=''}break}
    case 'aiask':{const h=AIH[cur().id];if(h)aiSend(h,AIQ[v]);break}
    case 'aitest':aiTest();break;
    case 'aisave':{const i=$('#aikin');if(i&&aiSaveKey(i.value)){AIEDIT=false;renderSettings(true);aiTest()}break}
    case 'aiset':closeModal();clearInterval(timerId);if(S)st.set('sess',S);go('settings');break;
    case 'rdresume':readSess();break;
    case 'read':renderReader(v);break;
    case 'raloud':RV.on?aloudStop():aloudStart();break;
    case 'rafresh':aloudStop();aloudPos(window._rk,0);renderReader(window._rk,true);window.scrollTo(0,0);aloudStart();break;
    case 'rlang':SET.rl=v;st.set('set',SET);renderReader(window._rk,true);break;
    case 'markread':{const r=readSt();r[window._rk]=!r[window._rk];st.set('read',r);
      if(r[window._rk]&&!G.readR[window._rk]){G.readR[window._rk]=1;G.coins+=20;G.xp+=15;qProg('read',1);saveG();gpop('📘 +20🪙 +15 XP','good');FX.ok()}
      renderReader(window._rk,true);break}
    case 'readprac':{cfg.mode='practice';cfg.n=20;cfg.timer='off';cfg.secs=[window._rk];st.set('cfg',cfg);startSession(cfg);break}
    case 'mus':{SET.mus=!FX.isMusic();st.set('set',SET);FX.set({mus:SET.mus});FX.music(SET.mus);if(S&&!S.done)renderQuiz(true);break}
    case 'flag':cur().fl=!cur().fl;renderQuiz(true);break;
    case 'nav':nav();break;
    case 'jump':closeModal();S.i=+v;renderQuiz();break;
    case 'close':closeModal();break;
    case 'finishask':finishAsk();break;
    case 'finish':closeModal();finish();break;
    case 'exit':exitMenu();break;
    case 'saveexit':closeModal();st.set('sess',S);clearInterval(timerId);go('exam');break;
    case 'lpack':st.set('lpack',v);renderLearn();break;
    case 'updnow':if(S&&!S.done)st.set('sess',S);location.reload();break;
    case 'updlater':{const u=$('#upd');if(u)u.remove();break}
    case 'mock':{startSession({mode:'exam',n:90,timer:'90',secs:mockKeys(),what:' · Security+ mock exam'});break}
    case 'drillwrong':{const ids=S._wrong;S=null;startSession({mode:'review',ids,timer:'off',n:ids.length});break}
    case 'answers':renderAnswers();break;
    case 'packtog':break;
    case 'addpack':addPack();break;
    case 'pickfile':$('#pf').click();break;
    case 'delpack':{if(!confirm('Remove this course? Your progress on it is kept.'))break;st.set('userpacks',st.get('userpacks',[]).filter(p=>p.id!==v));loadPacks();renderCourses();break}
    case 'drilltopic':{const w=window._weak[+v];const ids=w.ids.slice().sort((x,y)=>(P[x].b-P[y].b)).slice(0,15);startSession({mode:'review',ids,timer:'off',n:ids.length});break}
    case 'install':if(deferred){deferred.prompt();deferred=null}break;
    case 'export':saveBackup();if(tab==='settings')renderSettings();else if(tab==='home'&&ACT!=='quiz')renderHome();break;
    case 'importfile':{const f=$('#bkf');f.onchange=()=>{const x=f.files[0];if(x)x.text().then(t=>{try{restoreBackup(t)}catch(_){toast('That is not a StudyPrep backup file')}})};f.click();break}
    case 'exporttxt':modal(`<h3>Your progress</h3><textarea id="ex" readonly>${esc(JSON.stringify(backupData()))}</textarea><button data-act="copy">Copy</button><button class="plain" data-act="close">Close</button>`);break;
    case 'copy':{const t=$('#ex');t.select();try{navigator.clipboard.writeText(t.value).then(()=>toast('Copied'),()=>document.execCommand('copy'))}catch(_){document.execCommand('copy')}break}
    case 'importui':modal(`<h3>Import progress</h3><textarea id="im" placeholder="Paste exported progress here"></textarea><button data-act="doimport">Import</button><button class="plain" data-act="close">Cancel</button>`);break;
    case 'doimport':try{restoreBackup($('#im').value);closeModal()}catch(_){toast('That is not valid progress data')}break;
    case 'reset':if(confirm('Erase ALL progress and history on this device?')){P={};['prog','hist','sess','last','paused'].forEach(st.del);S=null;toast('Progress erased');go('home')}break;
  }
});
document.addEventListener('change',e=>{
  const t=e.target,a=t.dataset&&t.dataset.act;if(!a)return;
  if(a==='ans'){const it=cur();if(it.ck)return;t.value===''?delete it.ans[t.dataset.v]:it.ans[t.dataset.v]=+t.value;st.set('sess',S);if(S.mode!=='exam'){const b=$('.bot button');if(b)b.disabled=!Object.keys(it.ans).length}}
  else if(a==='packtog'){const id=t.dataset.v;SET.off.packs=SET.off.packs.filter(x=>x!==id);if(!t.checked)SET.off.packs.push(id);st.set('set',SET);cfg.secs=null;renderCourses()}
  else if(a==='sectog'){const k=t.dataset.v;SET.off.secs=SET.off.secs.filter(x=>x!==k);if(!t.checked)SET.off.secs.push(k);st.set('set',SET);cfg.secs=null;renderCourses()}
  else if(a==='set'){const k=t.dataset.k;SET[k]=(k==='size'||k==='vol'||k==='goal'||k==='vspeed'||k==='vboost')?+t.value:t.value;st.set('set',SET);applyLook();if(k==='vol'){FX.set({vol:SET.vol});FX.ok()}}
  else if(a==='tog'){const k=t.dataset.k;SET[k]=t.checked;st.set('set',SET);FX.set({[k]:SET[k]});if(k==='mus')FX.music(SET.mus);if((k==='auto'||k==='cues')&&!t.checked)vStop();if(k==='snd'&&t.checked)FX.ok()}
  else if(a==='examfa'){SET.examFa=t.checked;st.set('set',SET)}
  else if(a==='examdate'){SET.examDate=t.value;st.set('set',SET)}
  else if(a==='aip'||a==='aimodel'||a==='ailang'){const c=aiCfg();if(a==='aip')c.p=t.value;else if(a==='ailang')c.lang=t.value;else c.m[c.p]=t.value.trim();SET.ai=c;st.set('set',SET);if(a==='aip')renderSettings(true)}
  else if(a==='aikey')aiSaveKey(t.value)
});

document.addEventListener('input',e=>{const t=e.target;if(t.dataset&&t.dataset.act==='aikey')aiSaveKey(t.value)});
/* ask the browser to keep this app's saved data (progress, settings, AI key) instead of clearing it when space runs low */
try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch(e){}
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='aiin'){e.preventDefault();const h=AIH[cur().id];if(h){aiSend(h,e.target.value);e.target.value=''}}});

/* ================= boot ================= */
FX.set({snd:SET.snd,mus:false,vib:SET.vib,vol:SET.vol});loadPacks();applyLook();renderTabs();renderHome();
let _sc=0;window.addEventListener('scroll',()=>{if(ACT!=='read'||!window._rk)return;const n=Date.now();if(n-_sc<400)return;_sc=n;const rp=st.get('rpos',{});rp[window._rk]=Math.round(window.scrollY);st.set('rpos',rp)},{passive:true});
function readSess(){const sk=st.get('rlast');if(sk)renderReader(sk)}
function dlAudio(){
  const box=$('#dlst');const set=m=>{if(box)box.textContent=m};
  set('Downloading voice files… keep this page open.');
  vIdx().then(ix=>{if(!ix.b||!ix.b.length)throw 0;let n=0;return Promise.all(ix.b.map(b=>fetch(b).then(r=>{if(!r.ok)throw 0;return r.arrayBuffer()}).then(()=>{n++;set('Downloaded '+n+' of '+ix.b.length+'…')})))}).then(()=>set('✅ Done. The human voice now works offline.')).catch(()=>set('Voice files are not available in this version (the Claude preview). Install the full app from the ZIP to use them.'));
}
/* updates: the browser checks for a new version on start, whenever the app comes back to the screen and every 15 minutes;
   when one is installed a banner asks to refresh (the current session is saved first) */
function updBanner(){if($('#upd'))return;const d=document.createElement('div');d.id='upd';d.className='upd';
  d.innerHTML='<span class="ui">✨</span><div><b>New version available</b><span>Tap Refresh to update</span></div><button data-act="updnow">Refresh</button><button class="plain sm" data-act="updlater" aria-label="Later">✕</button>';
  document.body.appendChild(d)}
if('serviceWorker' in navigator&&/^https?:/.test(location.protocol)){
  const hadCtrl=!!navigator.serviceWorker.controller;
  navigator.serviceWorker.register('sw.js').then(reg=>{
    const chk=()=>{try{reg.update()}catch(_){}};
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)chk()});
    setInterval(chk,15*60*1000);
    if(reg.waiting&&hadCtrl)updBanner();
  }).catch(()=>{});
  navigator.serviceWorker.addEventListener('message',e=>{if(e.data&&e.data.type==='new-version'&&hadCtrl)updBanner()});
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(hadCtrl)updBanner()});
}
})();
