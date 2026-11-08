// Lists every English text the app can read aloud that has no recording yet in audio/idx.json.
// Usage: node tools/voice/texts.js <repo root> <out.json>
// Output: {"stats":{...},"items":[{"k":key,"t":text,"kind":"s"|"w","group":...}]}
// "s" = sentence (question, notes line, cue), "w" = a single word or short glossary term.
// The key is the same hash the app uses (vkey in app.js), so a recording made for it is found by the app.
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=process.argv[2]||'.',outFile=process.argv[3]||'missing.json';
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
// load the same data files the page loads (packs, glossary), skipping the app and browser-only scripts
const files=[...html.matchAll(/<script src="([^"]+)"/g)].map(m=>m[1]).filter(f=>!/^(app|fx|themes|figs)\.js$/.test(f));
const ctx={window:{},document:{},navigator:{}};ctx.window.window=ctx.window;vm.createContext(ctx);
files.forEach(f=>{try{vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx,{filename:f})}catch(e){console.error('skipped',f,e.message)}});
const W=ctx.window;
const vkey=t=>{t=String(t).replace(/\s+/g,' ').trim().toLowerCase();let h=2166136261;for(let i=0;i<t.length;i++){h^=t.charCodeAt(i);h=Math.imul(h,16777619)>>>0}return h.toString(36)+t.length.toString(36)};
const ix=JSON.parse(fs.readFileSync(path.join(root,'audio/idx.json'),'utf8'));
const WORD=/[A-Za-z0-9](?:[A-Za-z0-9'’\-\.\/]*[A-Za-z0-9])?/g;
const nclean=x=>String(x||'').replace(/\s+/g,' ').trim();
const want=new Map(); // key -> item (first text seen wins)
const add=(t,kind,group)=>{t=nclean(t);if(!t||!/[A-Za-z]/.test(t))return;const k=vkey(t);if(!want.has(k))want.set(k,{k,t,kind,group})};
const words=t=>{(String(t||'').match(WORD)||[]).forEach(w=>add(w,'w','words'))};
// cues spoken after answers (keep in sync with CUES in app.js)
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');const cm=app.match(/const CUES=(\{[^;]+\});/);
if(cm)Object.values(vm.runInNewContext('('+cm[1]+')')).flat().forEach(t=>add(t,'s','cues'));
(W.PACKS||[]).forEach(p=>{
  (p.mcq||[]).forEach(q=>{add(q.q,'s','questions');words(q.q);(q.o||[]).forEach(words);words(q.en)});
  (p.pbq||[]).forEach(q=>{add(q.title,'s','questions');words(q.title);(q.items||[]).forEach(x=>words(x[0]));(q.zones||[]).forEach(words);words(q.en)});
  // the lines "Listen" reads in the notes (same as noteLines in app.js)
  Object.values(p.study||{}).forEach(d=>{
    add((d.t||[])[0],'s','notes');
    (d.b||[]).forEach(b=>{if(b.k==='fig')return;
      if(b.k==='ul')b.en.forEach(x=>{add(x,'s','notes');words(x)});
      else if(b.k==='tbl'){b.r.forEach(r=>add(r.map(c=>nclean(c[0]).replace(/[.;:,]+$/,'')).filter(Boolean).join('. ')+'.','s','notes'));[b.h,...b.r].forEach(r=>r.forEach(c=>words(c[0])))}
      else{add(b.en,'s','notes');words(b.en)}});
  });
});
(W.GLOSS||[]).forEach(g=>add(g[2],'w','terms'));
const all=[...want.values()],items=all.filter(x=>!ix.k[x.k]);
const stats={};all.forEach(x=>{const s=stats[x.group]||(stats[x.group]={total:0,missing:0,chars:0});s.total++;if(!ix.k[x.k]){s.missing++;s.chars+=x.t.length}});
fs.writeFileSync(outFile,JSON.stringify({stats,items}));
Object.entries(stats).forEach(([g,s])=>console.log(g.padEnd(10),'total',String(s.total).padStart(6),'missing',String(s.missing).padStart(6),'chars',s.chars));
console.log('missing in all',items.length);
