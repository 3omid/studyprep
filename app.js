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
let P=st.get('prog',{}),PACKS=[],Q={};
function normPack(p,user){
  const id=String(p.id);const pre=id+':';
  const fixId=i=>String(i).startsWith(pre)?String(i):pre+i;
  const secs={};Object.keys(p.sections||{}).forEach(k=>{const s=p.sections[k];secs[k]=typeof s==='string'?{en:s,fa:''}:{en:s.en||k,fa:s.fa||''}});
  return{id,name:p.name||id,short:p.short||p.name||id,user:!!user,sections:secs,study:p.study||{},
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
}
const secKey=(p,s)=>p.id+':'+s;
const packOn=p=>!SET.off.packs.includes(p.id);
const secOn=(p,s)=>packOn(p)&&!SET.off.secs.includes(secKey(p,s));
const qIn=(q,keys)=>keys.includes(secKey(q.pack,q.sec));
function activeKeys(){const k=[];PACKS.forEach(p=>Object.keys(p.sections).forEach(s=>{if(secOn(p,s))k.push(secKey(p,s))}));return k}
function qsIn(keys){return Object.values(Q).filter(q=>qIn(q,keys))}
const secName=(q)=>q.pack.short+' · '+(q.pack.sections[q.sec]||{en:q.sec}).en;

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
  S=s;st.set('sess',S);runTimer();renderQuiz();
  const sn=(c.secs&&c.secs.length===1)?(()=>{const[pid,sec]=c.secs[0].split(':');const p=PACKS.find(x=>x.id===pid);return p&&p.sections[sec]?' · '+p.short+' · '+p.sections[sec].en:''})():'';
  lastAct({mode:{practice:'Practice',exam:'Exam',review:'Smart review'}[S.mode]||S.mode,what:sn});
}
const lastAct=o=>st.set('lastact',Object.assign({t:now()},o));
const ago=t=>{const d=Math.floor((now()-t)/DAY);return d<=0?'today':d===1?'yesterday':d+' days ago'};
function runTimer(){
  clearInterval(timerId);if(!S||S.done)return;
  let n=0;
  timerId=setInterval(()=>{
    if(document.hidden||!S||S.done)return;
    S.used++;
    if(S.left!=null){S.left--;const t=$('#tm');if(t){t.textContent=fmt(S.left);t.classList.toggle('low',S.left<300)}
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
  if(it.ok){S.streak=(S.streak||0)+1;S.best=Math.max(S.best||0,S.streak);const big=S.streak%5===0;big?FX.streak():FX.ok();praise(true,big?S.streak:0);cue(big?'streak':'ok')}else{S.streak=0;FX.bad();praise(false);cue('bad')}
  if(!it.ok&&(it.tries||0)<2&&S.mode!=='exam'){
    const rem=S.items.length-1-S.i,at=S.i+1+Math.min(3,rem);
    S.items.splice(at,0,{...mkItem(q),re:true,tries:(it.tries||0)+1});
  }
  st.set('sess',S);
}
function finish(){
  if(!S||S.done)return;
  clearInterval(timerId);S.done=true;
  const real=S.items.filter(i=>!i.re);
  if(S.mode==='exam'){real.forEach(it=>{if(!it.ck){const q=Q[it.id];
    if(q.k==='m'){it.ok=it.pick!=null&&it.ord[it.pick]===0;it.frac=it.ok?1:0}
    else{let c=0;q.items.forEach((x,i)=>{if(it.ans[i]===x[1])c++});it.frac=c/q.items.length;it.ok=c===q.items.length}
    it.ck=true;rec(it.id,it.ok)}});savP()}
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
  document.querySelectorAll('body>.bot').forEach(b=>b.remove());const bb=m.querySelector('.bot');if(bb)document.body.appendChild(bb);window.scrollTo(0,keep?y:0)}
function renderTabs(){
  const T=[['home','🏠','Home'],['learn','📖','Learn'],['courses','📚','Courses'],['stats','📈','Stats'],['settings','⚙️','Settings']];
  $('#tabs').innerHTML=T.map(t=>`<button data-act="tab" data-v="${t[0]}" class="${tab===t[0]?'on':''}"><span class="i">${t[1]}</span>${t[2]}</button>`).join('');
  tabH();
}
/* the menu bar is on every page; bars at the bottom of a page sit just above it */
function tabH(){const t=$('#tabs');if(t)document.documentElement.style.setProperty('--tabh',t.offsetHeight+'px')}
window.addEventListener('resize',tabH);
function go(t){ACT=null;vStop();tab=t;renderTabs();({home:renderHome,learn:renderLearn,courses:renderCourses,stats:renderStats,settings:renderSettings,setup:renderSetup})[t]()}
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
  return `--bg:${bg};--sf:${card};--sf2:${mixC(card,line,.45)};--ink:${ink};--mut:${mut};--line:${line};--ac:${ac};--ac2:${ac2};--acink:${acink};`+
    `--sel:${mixC(card,ac,dark?.2:.12)};--grad:linear-gradient(135deg,${ac},${mixC(ac,dark?'#ffffff':'#000000',.16)});--glow1:${rgba(ac,.12)};--glow2:${rgba(ac2,.1)};color-scheme:${dark?'dark':'light'}`;
}
function applyLook(){
  const r=document.documentElement,dark=isDark();
  r.setAttribute('data-theme',dark?'dark':'light');
  r.style.setProperty('--fs',SET.size);
  const th=THEMES.find(t=>t[0]===SET.pal);
  let css=$('#palcss');if(!css){css=document.createElement('style');css.id='palcss';document.head.appendChild(css)}
  css.textContent=th?`:root[data-theme]{${palVars(th[dark?5:4],dark)}}`:'';
  const m=document.querySelector('meta[name=theme-color]');if(m)m.content=th?th[dark?5:4][0]:CLASSIC.bg[dark?'dark':'light'];
  tabH();
}
if(darkMQ&&darkMQ.addEventListener)darkMQ.addEventListener('change',()=>{if(SET.theme==='auto'){applyLook();if(tab==='settings')renderSettings()}});

/* ================= Home ================= */
function renderHome(){
  const keys=activeKeys(),pool=qsIn(keys),ids=pool.map(q=>q.id);
  const seen=ids.filter(i=>P[i]).length,weak=ids.filter(isWeak).length,due=ids.filter(i=>P[i]&&!isWeak(i)&&isDue(i)).length;
  const att=ids.reduce((a,i)=>a+(P[i]?P[i].c+P[i].w:0),0),cor=ids.reduce((a,i)=>a+(P[i]?P[i].c:0),0);
  const mas=ids.filter(mastered).length;
  const active=PACKS.filter(packOn).map(p=>p.short).join(', ')||'none';
  const res=S&&!S.done;
  const mp=pct(mas,pool.length);
  page(`<div class="hero"><div class="ring" style="--p:${mp}"><i>${mp}%</i></div><div><h1>StudyPrep</h1>
  <p class="sub">Active: ${esc(active)} · ${keys.length} sections · ${pool.length} questions<br>${mas} mastered${(S&&S.best)?'':''}</p></div></div>
  ${res?`<div class="card" style="border-color:var(--ac)"><div class="spread"><div><b>Continue where you stopped</b><div class="mut">${esc(S.mode)} · question ${Math.min(S.i+1,S.items.length)} of ${S.items.length}${S.left!=null?' · '+fmt(S.left)+' left':''}</div></div></div>
  <div class="row" style="margin-top:10px"><button data-act="resume">Resume</button><button class="plain" data-act="discard">Discard</button></div></div>`:''}
  ${(!res&&st.get('rlast')&&PACKS.some(p=>p.study&&p.study[(st.get('rlast')||'').split(':')[1]]))?`<div class="card"><div class="spread"><div><b>Continue reading</b><div class="mut">Pick up your notes where you left off</div></div><button class="sm" data-act="rdresume">Open</button></div></div>`:''}
  ${pool.length?coachCard(pool,ids,weak,due,seen):''}
  ${bkDue()?`<div class="card"><div class="spread"><div><b>💾 Back up your progress</b><div class="mut">${st.get('bkat')?'Last backup '+ago(st.get('bkat')):'You have not saved a backup yet'} · keeps your progress safe</div></div><button class="sm" data-act="export">Save</button></div></div>`:''}
  ${pool.length?`<div class="tiles">
   <button class="tile plain" data-act="tab" data-v="learn"><span class="ic">📖</span><span><b>Learn</b><span class="d">Read the key points of a section first</span></span></button>
   <button class="tile plain" data-act="setup" data-v="practice"><span class="ic">🎓</span><span><b>Practice</b><span class="d">Answer, see why, retry what you miss</span></span></button>
   <button class="tile plain" data-act="setup" data-v="exam"><span class="ic">⏱️</span><span><b>Exam</b><span class="d">Timed, no feedback until the end</span></span></button>
   <button class="tile plain" data-act="setup" data-v="review"><span class="ic">🎯</span><span><b>Smart review</b><span class="d">Weak and due questions first</span></span>${weak+due?`<span class="badge">${weak+due}</span>`:''}</button>
  </div>
  <div class="card"><h2>Progress</h2><div class="stats">
   <div class="stat"><b>${pct(seen,pool.length)}%</b><span>seen</span></div>
   <div class="stat"><b>${att?pct(cor,att):'–'}${att?'%':''}</b><span>accuracy</span></div>
   <div class="stat"><b>${mas}</b><span>mastered</span></div></div>
   <p class="mut" style="margin:10px 0 0">${weak?weak+' question'+(weak>1?'s':'')+' need work. ':''}Mastered = answered correctly 3 times in a row.</p></div>`
  :`<div class="card empty">No sections are on. Open <b>Courses</b> and turn a course on.</div>`}`);
}

/* ================= Exam coach ================= */
/* remembers where you are weak and what you did last, and suggests the next step */
function weakSecs(){
  const out=[];
  PACKS.filter(packOn).forEach(p=>Object.keys(p.sections).forEach(s=>{
    if(!secOn(p,s))return;const k=secKey(p,s),ids=qsIn([k]).map(q=>q.id);
    const a=ids.reduce((x,i)=>x+(P[i]?P[i].c+P[i].w:0),0),c=ids.reduce((x,i)=>x+(P[i]?P[i].c:0),0);
    if(a>=3)out.push({k,n:p.short+' · '+p.sections[s].en,acc:pct(c,a),w:ids.filter(isWeak).length});
  }));
  return out.sort((x,y)=>x.acc-y.acc);
}
function readiness(pool){let s=0;pool.forEach(q=>{const p=P[q.id];s+=!p?.3:p.b>=3?.95:p.l===1?.75:.35});return Math.round(100+800*s/pool.length)}
function nextRead(){const rd=readSt();for(const p of PACKS.filter(packOn))for(const k of Object.keys(p.sections))if(secOn(p,k)&&p.study&&p.study[k]&&!rd[secKey(p,k)])return{sk:secKey(p,k),t:(p.study[k].t||[p.sections[k].en])[0]};return null}
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
const BK=['prog','hist','day','read','rpos','rlast','sess','last','set','cfg','userpacks','lastact'];
function backupData(){const d={app:'StudyPrep',v:5,at:new Date().toISOString()};BK.forEach(k=>{const v=st.get(k,undefined);if(v!==undefined)d[k]=v});d.prog=P;d.set=SET;d.day=DAYS;if(S&&!S.done)d.sess=S;return d}
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
function renderSetup(){
  const keys=activeKeys();
  if(!cfg.secs)cfg.secs=keys.slice();
  cfg.secs=cfg.secs.filter(k=>keys.includes(k));
  if(!cfg.secs.length)cfg.secs=keys.slice();
  const pool=qsIn(cfg.secs);
  const modes=[['practice','Practice'],['exam','Exam'],['review','Smart review']];
  const ns=[10,20,30,60,90];
  const tm=[['off','Off'],['auto','Auto'],['15','15 min'],['30','30 min'],['60','60 min'],['90','90 min']];
  const groups=PACKS.filter(packOn).map(p=>{
    const ks=Object.keys(p.sections).filter(s=>secOn(p,s));
    return ks.length?`<div class="lbl">${esc(p.name)}</div><div class="chips">${ks.map(s=>{const k=secKey(p,s);const n=qsIn([k]).length;
      return `<button class="chip ${cfg.secs.includes(k)?'on':''}" data-act="cfgsec" data-v="${esc(k)}">${esc(s.length<3?'S'+s:s)} · ${esc(p.sections[s].en)} (${n})</button>`}).join('')}</div>`:''}).join('');
  page(`<div class="spread"><h1>Start a session</h1><button class="plain sm" data-act="tab" data-v="home">Back</button></div>
  <div class="lbl">Mode</div><div class="chips">${modes.map(m=>`<button class="chip ${cfg.mode===m[0]?'on':''}" data-act="cfgmode" data-v="${m[0]}">${m[1]}</button>`).join('')}</div>
  <div class="lbl">Questions</div><div class="chips">${ns.map(n=>`<button class="chip ${cfg.n===n?'on':''}" data-act="cfgn" data-v="${n}">${n}</button>`).join('')}<button class="chip ${cfg.n===9999?'on':''}" data-act="cfgn" data-v="9999">All (${pool.length})</button></div>
  <div class="lbl">Timer</div><div class="chips">${tm.map(m=>`<button class="chip ${cfg.timer===m[0]?'on':''}" data-act="cfgtimer" data-v="${m[0]}">${m[1]}</button>`).join('')}</div>
  <p class="mut" style="margin-top:-6px">Auto = 1 min per question, 3 min per scenario. ${cfg.mode==='exam'?'Exam pages show English only unless you changed that in Settings.':''}</p>
  <div class="lbl">Sections (${pool.length} questions)</div>${groups}
  <div class="bot"><div class="in"><button data-act="begin" ${pool.length?'':'disabled'}>Start</button></div></div>`,false);
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
// Free models are often "busy" (503/429). Then try again, moving to a lighter Gemini model,
// so one busy model does not stop the tutor.
const AIBUSY=[429,500,502,503,504],AIFALL=['gemini-flash-lite-latest','gemini-2.5-flash'];
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
  const ctl=new AbortController();let t=setTimeout(()=>ctl.abort(),60000);
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
      return pump()});
    return pump();
  },e=>{clearTimeout(t);throw new Error(e.name==='AbortError'?'The AI took too long. Try again.':'No connection to the AI. Check the internet.')});
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
  const exam=S.mode==='exam',n=S.items.length;
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
      let c='opt2';if(it.ck){if(oi===0)c+=' right';else if(it.pick===d)c+=' wrong'}else if(it.pick===d)c+=' sel';
      return `<div class="${c}"><button class="rc" data-act="pick" data-v="${d}" aria-label="Choose option ${'ABCDEFGH'[d]}" aria-pressed="${it.pick===d}">${'ABCDEFGH'[d]}</button><div class="t">${W(q.o[oi])}${sf&&q.of[oi]?`<div class="fa">${FA(q.of[oi])}</div>`:''}</div></div>`}).join('')}</div>
    ${it.ck?fbBlock(it,q):''}`;
  }else{
    const sf=sf0;
    const zs=sf&&q.zf.length?q.zf:q.zones;
    body=`<div class="tag spread"><span>${esc(secName(q))} · scenario${it.re?' · ↻ retry':''}</span><button class="plain sm spk" data-act="speakq" aria-label="Read the question aloud">🔊</button></div><p class="q">${W(q.title)}</p>
    ${sf&&q.tf?`<div class="fabox">${FA(q.tf)}</div>`:''}
    <div class="opts">${it.ord.map(ii=>{const x=q.items[ii];const a=it.ans[ii];
      const rc=it.ck?(a===x[1]?' rk':' rn'):'';
      return `<div class="pbq${rc}"><div>${W(x[0])}</div>${sf&&x[2]?`<div class="fa">${FA(x[2])}</div>`:''}
      <select data-act="ans" data-v="${ii}" ${it.ck?'disabled':''}><option value="">Choose…</option>${zs.map((z,zi)=>`<option value="${zi}" ${a===zi?'selected':''}>${esc(z)}</option>`).join('')}</select>
      ${it.ck&&a!==x[1]?`<div class="mut" style="margin-top:4px">Correct: <b>${W(q.zones[x[1]])}</b></div>`:''}</div>`}).join('')}</div>
    ${it.ck?fbBlock(it,q):''}`;
  }
  const ready=q.k==='m'?it.pick!=null:Object.keys(it.ans).length>0;
  const last=S.i===n-1;
  let bar;
  if(exam)bar=`<button class="plain" data-act="prev" ${S.i===0?'disabled':''}>←</button><button class="plain" data-act="nav">${S.i+1}/${n}</button>${last?`<button data-act="finishask">Finish</button>`:`<button data-act="next">Next →</button>`}`;
  else bar=!it.ck?`<button data-act="check" ${ready?'':'disabled'}>Check</button>`:`<button data-act="${last?'finishask':'next'}">${last?'Finish':'Next →'}</button>`;
  page(`<div class="qhead"><div class="spread"><button class="plain sm" data-act="exit">✕ Menu</button>
    <span class="mut">${exam?'Exam':S.mode==='review'?'Review':'Practice'} · ${S.i+1} / ${n}${(S.streak||0)>=2&&!exam?` · <span class="streak">🔥 ${S.streak}</span>`:''}</span>
    <span class="row" style="gap:6px;flex-wrap:nowrap"><button class="plain sm" data-act="mus" aria-label="Music" title="Music">${FX.isMusic()?'🎵':'🔇'}</button>${S.left!=null?`<span class="timer ${S.left<300?'low':''}" id="tm">${fmt(S.left)}</span>`:''}</span></div>
    <div class="pbar"><i style="width:${Math.round(100*(S.i+(it.ck?1:0))/n)}%"></i></div></div>
    <div class="card">${body}<div class="row" style="margin-top:10px">${faBtn}${hintBtn}${exam?`<button class="plain sm" data-act="flag">${it.fl?'⚑ Flagged':'⚐ Flag'}</button>`:''}</div></div>
    <div class="bot"><div class="in">${bar}</div></div>`,false,keep===true);
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
   <button class="plain" data-act="finish">End now and see results</button><button class="danger" data-act="discard">Discard session</button><button class="plain" data-act="close">Cancel</button>`);
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
  const L=st.get('last',S);
  page(`<div class="spread"><h1>Answers</h1><button class="plain sm" data-act="tab" data-v="home">Home</button></div>
  ${L.items.filter(i=>!i.re).map((it,n)=>{const q=Q[it.id];if(!q)return'';
    const st_=!it.ck?'– skipped':it.ok?'✔':'✘';
    const mine=q.k==='m'?(it.pick!=null?q.o[it.ord[it.pick]]:'No answer'):'';
    return `<details><summary>${n+1}. ${st_} ${esc((q.k==='m'?q.q:q.title).slice(0,90))}</summary>
    <p>${q.k==='m'?`<b>Correct:</b> ${esc(q.o[0])}<br>${it.ok?'':`<b>You chose:</b> ${esc(mine)}`}`:q.items.map((x,i)=>`${esc(x[0])} → <b>${esc(q.zones[x[1]])}</b>${it.ans[i]===x[1]?' ✔':' ✘'}`).join('<br>')}</p>
    <p>${esc(q.en)}</p>${SET.fa!=='off'&&q.fa?`<p class="fa" style="color:var(--ink)">${FA(q.fa)}</p>`:''}</details>`}).join('')}`);
}


/* ================= Learn (study notes) ================= */
const readSt=()=>st.get('read',{});
function renderLearn(){
  const rd=readSt();
  const cards=PACKS.filter(packOn).map(p=>{
    const ks=Object.keys(p.sections).filter(k=>p.study&&p.study[k]);
    if(!ks.length)return '';
    return `<div class="card"><h2>${esc(p.name)}</h2><div class="lgrid">${ks.map(k=>{const sk=secKey(p,k);const t=p.study[k].t||[p.sections[k].en,p.sections[k].fa];
      return `<button class="tile plain ltile" data-act="read" data-v="${esc(sk)}"><span class="ic">${rd[sk]?'✅':'📘'}</span><span><b>${esc(k.length<3?k+' · ':'')}${esc(t[0])}</b><span class="d">${esc(t[1]||'')}</span></span></button>`}).join('')}</div></div>`}).join('');
  const rl=st.get('rlast'),rlp=rl&&PACKS.find(x=>x.id===rl.split(':')[0]),rlt=rlp&&rlp.study&&rlp.study[rl.split(':')[1]];
  const cont=rlt?`<div class="card" style="border-color:var(--ac)"><b>Continue reading</b><div class="mut">${esc((rlt.t||[''])[0])}</div><div class="row" style="margin-top:10px"><button data-act="rdresume">Continue</button></div></div>`:'';
  page(`<h1>Learn</h1>${cont}<p class="sub">Read the key points first, then practice the questions. Notes are in English and Persian.</p>${cards||'<div class="card empty">No study notes for the courses that are on.</div>'}`);
}
function blockHTML(b,lang){
  const both=lang==='both',en=lang!=='fa',fa=lang!=='en';
  const E=t=>en?W(t):'';
  const pair=(e,f)=>{const h=(en?`<div>${E(e)}</div>`:'')+(fa?`<div class="fa${both?'':' only'}">${FA(f)}</div>`:'');return both?`<div class="pair">${h}</div>`:h};
  if(b.k==='h')return `<h3 class="rh">${en?esc(b.en):''}${both?' <span class="fa">· '+FA(b.fa)+'</span>':fa?FA(b.fa):''}</h3>`;
  if(b.k==='p')return `<div class="rp">${pair(b.en,b.fa)}</div>`;
  if(b.k==='tip')return `<div class="rtip"><b>${fa&&!en?'نکته‌ی امتحان':'Exam tip'}</b>${pair(b.en,b.fa)}</div>`;
  if(b.k==='ul')return `<ul class="rl">${b.en.map((x,i)=>`<li>${pair(x,b.fa[i]||'')}</li>`).join('')}</ul>`;
  if(b.k==='tbl'){
    const cell=c=>`${en?`<div>${W(c[0])}</div>`:''}${fa&&!(en&&c[1]===c[0])?`<div class="fa${both?'':' only'}">${FA(c[1]||'')}</div>`:''}`;
    return `<div class="rtw"><table class="rt"><thead><tr>${b.h.map(c=>`<th>${cell(c)}</th>`).join('')}</tr></thead><tbody>${b.r.map(r=>`<tr>${r.map(c=>`<td>${cell(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  return '';
}
function renderReader(sk,keep){
  TX=[];
  const [pid,sec]=sk.split(':');const p=PACKS.find(x=>x.id===pid);if(!p||!p.study||!p.study[sec]){go('learn');return}
  const d=p.study[sec],t=d.t||[p.sections[sec].en,p.sections[sec].fa],rd=readSt(),lang=SET.rl||'both';
  window._rk=sk;ACT='read';lastAct({mode:'Reading',what:' · '+p.short+' · '+(t[0]||'')});{const rp=st.get('rpos',{});st.set('rlast',sk);if(!keep&&rp[sk]>40)setTimeout(()=>window.scrollTo(0,rp[sk]),60)}
  const lg=[['en','English'],['both','English + فارسی'],['fa','فارسی']];
  page(`<div class="spread"><button class="plain sm" data-act="tab" data-v="learn">← Learn</button><span class="mut">${esc(p.short)}</span></div>
   <h1 style="margin-top:10px"${lang==='fa'?' class="fah" dir="rtl"':''}>${lang==='fa'?FA(t[1]):esc(t[0])}</h1>${lang==='both'?`<div class="fa" style="margin:-2px 0 8px;font-size:1.05rem">${FA(t[1])}</div>`:''}
   <div class="chips">${lg.map(x=>`<button class="chip ${lang===x[0]?'on':''}" data-act="rlang" data-v="${x[0]}">${x[1]}</button>`).join('')}</div>
   ${lang==='fa'?'':'<p class="hint">Tap any English word to see its meaning.</p>'}
   <div class="card read${lang==='fa'?' rtl" dir="rtl':''}">${d.b.map(b=>blockHTML(b,lang)).join('')}</div>
   <div class="bot"><div class="in"><button class="plain" data-act="markread">${rd[sk]?(lang==='fa'?'✅ خواندم':'✅ Read'):(lang==='fa'?'خواندم ✓':'Mark as read')}</button><button data-act="readprac">${lang==='fa'?'تمرین این بخش ←':'Practice this section →'}</button></div></div>`,false,keep);
}

/* ================= Courses ================= */
function renderCourses(){
  page(`<h1>Courses</h1><p class="sub">Turn whole courses or single sections on and off. Practice, exams and review only use what is on.</p>
  <div class="cols">${PACKS.map(p=>{
    const ids=Object.keys(Q).filter(i=>Q[i].pack===p);const seen=ids.filter(i=>P[i]).length;
    return `<div class="card"><div class="sw"><div><b>${esc(p.name)}</b><div class="mut">${ids.length} questions · ${pct(seen,ids.length)}% seen${p.user?' · imported':''}</div></div>
      <input type="checkbox" data-act="packtog" data-v="${esc(p.id)}" ${packOn(p)?'checked':''} aria-label="Enable ${esc(p.name)}"></div>
      <div class="sec" style="${packOn(p)?'':'opacity:.45'}">${Object.keys(p.sections).map(s=>{
        const sid=ids.filter(i=>Q[i].sec===s),m=sid.filter(mastered).length;
        return `<div class="sw"><div><div>${esc(s.length<3?'Section '+s+' · ':'')}${esc(p.sections[s].en)}</div><div class="mut">${sid.length} q · ${m} mastered${p.sections[s].fa?' · '+esc(p.sections[s].fa):''}</div></div>
        <input type="checkbox" data-act="sectog" data-v="${esc(secKey(p,s))}" ${secOn(p,s)?'checked':''} ${packOn(p)?'':'disabled'}></div>`}).join('')}</div>
      ${p.user?`<button class="danger sm" data-act="delpack" data-v="${esc(p.id)}" style="margin-top:8px">Remove this course</button>`:''}</div>`}).join('')}
  <div class="card"><h2>Add a course</h2><p class="mut">Paste a course pack (JSON), or pick a .json file. Ask Claude to turn your class slides into a pack in this format.</p>
   <textarea id="packtxt" placeholder='{"id":"netplus","name":"CompTIA Network+","short":"Network+","sections":{"1":"Networking concepts"},"mcq":[{"id":"1","sec":"1","q":"Question?","o":["Correct answer","Wrong","Wrong","Wrong"],"en":"Why it is correct"}]}'></textarea>
   <div class="row" style="margin-top:8px"><button data-act="addpack">Add pack</button><button class="plain" data-act="pickfile">Choose file…</button><input type="file" id="pf" accept=".json,application/json" hidden></div></div></div>`);
  const pf=$('#pf');if(pf)pf.onchange=()=>{const f=pf.files[0];if(!f)return;f.text().then(t=>{$('#packtxt').value=t;addPack()})};
}
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
    rows.push({n:p.short+' · '+p.sections[s].en,seen:ids.filter(i=>P[i]).length,t:ids.length,acc:a?pct(c,a):null});
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
function palGrid(){
  const dark=isDark(),sw=(id,name,a,b)=>`<button class="pal ${SET.pal===id?'on':''}" data-act="pal" data-v="${esc(id)}"><i style="background:linear-gradient(135deg,${a},${b})"></i><span>${esc(name)}</span></button>`;
  const grp=g=>THEMES.filter(t=>t[3]===g).map(t=>{const c=t[dark?5:4];return sw(t[0],t[1],c[5],c[6])}).join('');
  return `<div class="pals">${sw('classic','StudyPrep',...CLASSIC[dark?'dark':'light'])}${grp('car')}</div><div class="lbl">More colours</div><div class="pals">${grp('color')}</div>`;
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
function renderSettings(){
  const sel=(k,opts)=>`<select data-act="set" data-k="${k}">${opts.map(o=>`<option value="${o[0]}" ${String(SET[k])===String(o[0])?'selected':''}>${o[1]}</option>`).join('')}</select>`;
  page(`<h1>Settings</h1><div class="cols">
  <div class="card"><h3>Persian help (practice and review)</h3>${sel('fa',[['off','Off — English only'],['tap','Tap to show per question'],['always','Always show']])}
   <div class="sw" style="margin-top:6px"><span>Allow Persian help in Exam mode<div class="mut">Off = like the real English exam</div></span><input type="checkbox" data-act="examfa" ${SET.examFa?'checked':''}></div></div>
  <div class="card"><h3>Persian explanation after answering</h3>${sel('faExp',[['tap','Tap a button to show it'],['auto','Show automatically']])}</div>
  <div class="card"><h3>Sound and feel</h3>
   <div class="sw"><span>Sound effects<div class="mut">Soft chimes for right and wrong</div></span><input type="checkbox" data-act="tog" data-k="snd" ${SET.snd?'checked':''}></div>
   <div class="sw"><span>Calm background music<div class="mut">Quiet generated ambience while you study</div></span><input type="checkbox" data-act="tog" data-k="mus" ${SET.mus?'checked':''}></div>
   <div class="sw"><span>Vibration<div class="mut">Android phones only</div></span><input type="checkbox" data-act="tog" data-k="vib" ${SET.vib?'checked':''}></div>
   <div class="lbl">Volume</div>${sel('vol',[[0.25,'Very soft'],[0.45,'Soft'],[0.6,'Medium'],[0.85,'Loud']])}</div>
  <div class="card"><h3>Human voice (American English)</h3>
   <div class="sw"><span>Read each new question aloud<div class="mut">Also plays when you tap Next</div></span><input type="checkbox" data-act="tog" data-k="auto" ${SET.auto?'checked':''}></div>
   <div class="sw"><span>Spoken feedback<div class="mut">“Correct!”, “Well done!”, “Congratulations!”</div></span><input type="checkbox" data-act="tog" data-k="cues" ${SET.cues?'checked':''}></div>
   <div class="lbl">Voice speed · سرعت صدا</div>${sel('vspeed',[[0.85,'Slower · آهسته‌تر'],[1,'Normal · عادی'],[1.15,'Faster · تندتر']])}
   <div class="lbl">Voice loudness · بلندی صدا</div>${sel('vboost',[[0,'Normal · عادی'],[0.5,'Louder · بلندتر'],[1,'Loudest · خیلی بلند']])}
   <div class="row" style="margin-top:10px"><button class="plain sm" data-act="speak" data-v="Hello! This is the study voice. Let us get started.">▶ Test voice</button><button class="plain sm" data-act="dlaudio">⬇ Download voice for offline</button></div>
   <p class="mut" id="dlst" style="margin:8px 0 0">Tap any word and press 🔊 to hear it. About 18 MB, downloaded once.</p></div>
  ${aiSettings()}
  <div class="card"><h3>Exam</h3><div class="lbl" style="margin-top:0">Exam date</div><input type="date" class="inp" data-act="examdate" value="${esc(SET.examDate||'')}">
   <div class="lbl">Daily goal (answers)</div>${sel('goal',[[10,'10'],[20,'20'],[30,'30'],[50,'50'],[80,'80'],[120,'120']])}</div>
  <div class="card"><h3>Look</h3><div class="lbl" style="margin-top:0">Background</div>
   <div class="chips">${[['auto','Match device'],['dark','🌙 Dark'],['light','☀️ Light']].map(o=>`<button class="chip ${SET.theme===o[0]?'on':''}" data-act="mode" data-v="${o[0]}">${o[1]}</button>`).join('')}</div>
   <div class="lbl">Text size</div>${sel('size',[[0.9,'Small'],[1,'Normal'],[1.12,'Large'],[1.25,'Extra large'],[1.4,'Huge']])}
   <div class="lbl">Colour theme</div>${palGrid()}</div>
  <div class="card"><h3>Install on this device</h3>
   ${deferred?`<button data-act="install">Install app</button>`:''}
   <div class="row" style="margin:6px 0 10px"><a class="btn" href="https://github.com/3omid/studyprep/releases/latest/download/StudyPrep.apk">⬇ Android app (.apk)</a><a class="btn" href="https://github.com/3omid/studyprep/releases/latest/download/StudyPrep-Setup.exe">⬇ Windows app (.exe)</a></div>
   <p class="mut"><b>iPhone / iPad (Safari):</b> Share → Add to Home Screen.<br><b>Android (Chrome):</b> menu → Install app.<br><b>Windows / Linux (Chrome, Edge):</b> install icon in the address bar.<br><b>Mac:</b> Chrome install icon, or Safari File → Add to Dock.<br>It works offline once opened one time. Progress is stored on each device separately; use backup to move it.</p></div>
  <div class="card"><h3>Backup</h3><p class="mut" style="margin-top:0">Saves everything: progress, weak questions, reading position, stats, settings and added courses. ${st.get('bkat')?'Last backup: '+ago(st.get('bkat'))+'.':'No backup yet.'}</p>
   <div class="row"><button data-act="export">💾 Save backup file</button><button class="plain" data-act="importfile">📂 Restore from file</button><input type="file" id="bkf" accept=".json,application/json" hidden></div>
   <div class="row" style="margin-top:8px"><button class="plain sm" data-act="exporttxt">Copy as text</button><button class="plain sm" data-act="importui">Paste text</button></div></div>
  <div class="card"><h3>Reset</h3><button class="danger" data-act="reset">Erase all progress</button></div>
  </div><p class="mut">StudyPrep v5 · scores are practice estimates.</p>`);
}

/* ================= events ================= */
document.addEventListener('click',e=>{
  FX.unlock();vUnlock();
  const w=e.target.closest('.w');if(w&&!w.closest('[data-act]')){wordSheet(w);return}
  const lt=e.target.closest('bdi.lt');if(lt&&!lt.closest('[data-act]')&&!lt.closest('#ov')){const t=lt.textContent;showWord(t,0,t.length,t);return}
  const b=e.target.closest('[data-act]');if(!b||b.tagName==='SELECT'||b.tagName==='INPUT')return;
  const a=b.dataset.act,v=b.dataset.v;
  switch(a){
    case 'tab':closeModal();clearInterval(timerId);if(S&&S.done)S=null;if(S)st.set('sess',S);go(v);break;
    case 'mode':SET.theme=v;st.set('set',SET);applyLook();renderSettings();break;
    case 'pal':SET.pal=v;st.set('set',SET);applyLook();renderSettings();break;
    case 'drillsec':startSession({mode:'review',secs:[v],n:15,timer:'off'});break;
    case 'setup':cfg.mode=v;go('setup');break;
    case 'cfgmode':cfg.mode=v;st.set('cfg',cfg);renderSetup();break;
    case 'cfgn':cfg.n=+v;st.set('cfg',cfg);renderSetup();break;
    case 'cfgtimer':cfg.timer=v;st.set('cfg',cfg);renderSetup();break;
    case 'cfgsec':{const i=cfg.secs.indexOf(v);i>=0?cfg.secs.splice(i,1):cfg.secs.push(v);if(!cfg.secs.length)cfg.secs=[v];st.set('cfg',cfg);renderSetup();break}
    case 'begin':st.set('cfg',cfg);startSession(cfg);break;
    case 'resume':runTimer();renderQuiz();break;
    case 'discard':closeModal();S=null;st.del('sess');clearInterval(timerId);go('home');break;
    case 'pick':{const it=cur();if(it.ck)break;it.pick=+v;st.set('sess',S);FX.tap();renderQuiz(true);break}
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
    case 'aisave':{const i=$('#aikin');if(i&&aiSaveKey(i.value))aiTest();break}
    case 'aiset':closeModal();clearInterval(timerId);if(S)st.set('sess',S);go('settings');break;
    case 'rdresume':readSess();break;
    case 'read':renderReader(v);break;
    case 'rlang':SET.rl=v;st.set('set',SET);renderReader(window._rk,true);break;
    case 'markread':{const r=readSt();r[window._rk]=!r[window._rk];st.set('read',r);renderReader(window._rk,true);break}
    case 'readprac':{cfg.mode='practice';cfg.n=20;cfg.timer='off';cfg.secs=[window._rk];st.set('cfg',cfg);startSession(cfg);break}
    case 'mus':{SET.mus=!FX.isMusic();st.set('set',SET);FX.set({mus:SET.mus});FX.music(SET.mus);if(S&&!S.done)renderQuiz(true);break}
    case 'flag':cur().fl=!cur().fl;renderQuiz(true);break;
    case 'nav':nav();break;
    case 'jump':closeModal();S.i=+v;renderQuiz();break;
    case 'close':closeModal();break;
    case 'finishask':finishAsk();break;
    case 'finish':closeModal();finish();break;
    case 'exit':exitMenu();break;
    case 'saveexit':closeModal();st.set('sess',S);clearInterval(timerId);go('home');break;
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
    case 'reset':if(confirm('Erase ALL progress and history on this device?')){P={};['prog','hist','sess','last'].forEach(st.del);S=null;toast('Progress erased');go('home')}break;
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
  else if(a==='aip'||a==='aimodel'||a==='ailang'){const c=aiCfg();if(a==='aip')c.p=t.value;else if(a==='ailang')c.lang=t.value;else c.m[c.p]=t.value.trim();SET.ai=c;st.set('set',SET);if(a==='aip')renderSettings()}
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
if('serviceWorker' in navigator&&/^https?:/.test(location.protocol)){navigator.serviceWorker.register('sw.js').catch(()=>{})}
})();
