// Offline cache. App files are fetched fresh when online (so an update shows up the next
// time the app is opened) and come from the cache when offline. Audio stays cache-first.
const VERSION='studyprep-v38';
const AUDIO='sp-audio3'; // new name drops the old cache that still held the Kokoro bundles
const FILES=['./','index.html','style.css','app.js','manifest.webmanifest','packs/secplus.js','packs/secplus-m7-m8.js','packs/secplus-study.js','packs/secplus-m9.js','packs/secplus-r78.js','packs/secplus-m10.js','packs/secplus-m11.js','packs/secplus-m12.js','packs/secplus-q20.js','packs/secplus-gaps.js','packs/secbook.js','packs/secplus-book1.js','packs/secplus-book2.js','packs/secplus-book3.js','packs/secplus-book4.js','packs/secplus-book5.js','packs/secplus-book6.js','packs/secplus-book7.js','packs/secplus-book8.js','packs/secplus-book9.js','packs/secplus-book10.js','packs/secplus-book11.js','packs/secplus-book12.js','packs/secplus-book13.js','packs/secplus-book14.js','packs/secplus-book15.js','packs/secplus-book16.js','packs/secplus-book17.js','packs/defsec2.js',
  'figs.js','glossary.js','glossx.js','glossx2.js','glossx3.js','dict.js','fx.js','themes.js','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png','icons/secbook-cover.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION&&k!==AUDIO).map(k=>caches.delete(k))))
  .then(()=>self.clients.claim())
  // tell open windows a new version is ready; the page shows a "Refresh" banner instead of reloading by itself
  .then(()=>self.clients.matchAll({type:'window'})).then(cs=>cs.forEach(c=>{try{c.postMessage({type:'new-version',v:VERSION})}catch(_){}})))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(url.origin!==location.origin)return;
  // the voice index changes with each update, so only the bundles themselves are cache-first
  if(/\/audio\//.test(url.pathname)&&!/\.json$/.test(url.pathname)){
    e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(AUDIO).then(c=>c.put(e.request,cp))}return r})));
    return;
  }
  e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{
    if(r&&r.ok){const cp=r.clone();caches.open(VERSION).then(c=>c.put(e.request,cp))}
    return r}).catch(()=>caches.match(e.request).then(hit=>hit||caches.match('index.html'))));
});
