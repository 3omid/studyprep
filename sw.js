// Offline cache. App files are fetched fresh when online (so an update shows up the next
// time the app is opened) and come from the cache when offline. Audio stays cache-first.
const VERSION='studyprep-v7';
const AUDIO='sp-audio2'; // new name drops the old cache that still listed the .bin bundles
const FILES=['./','index.html','style.css','app.js','manifest.webmanifest','packs/secplus.js','packs/secplus-m7-m8.js','packs/secplus-study.js','glossary.js','dict.js','fx.js','themes.js',
  'icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION&&k!==AUDIO).map(k=>caches.delete(k))))
  .then(()=>self.clients.claim())
  // reload windows still showing the old version, so one open is enough to see the update
  .then(()=>self.clients.matchAll({type:'window'})).then(cs=>cs.forEach(c=>{try{c.navigate(c.url)}catch(_){}})))});
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
