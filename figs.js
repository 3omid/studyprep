/* Diagrams for the study notes. Each one is drawn here as SVG (no image files), with English and Persian labels,
   and is added to the notes right after the heading it explains. Colours work in both light and dark themes:
   text uses the theme ink colour, shapes use tinted fills. */
(function(){
  var C={b:'#0ea5e9',g:'#10b981',a:'#f59e0b',r:'#ef4444',p:'#8b5cf6',k:'#ec4899',s:'#64748b'};
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
  function svg(h,body){return '<svg viewBox="0 0 360 '+h+'" width="100%" role="img"><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="ahp"/></marker></defs>'+body+'</svg>'}
  /* box with a title, an optional English sub line and an optional Persian line */
  function box(x,y,w,h,c,t,s,f,ic){var cx=x+w/2,o='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="10" fill="'+c+'" fill-opacity=".16" stroke="'+c+'" stroke-width="1.6"/>';
    var ty=y+(s&&f?(h-26)/2+9:s||f?h/2-2:h/2+4);if(ic){o+='<text x="'+cx+'" y="'+(y+19)+'" text-anchor="middle" class="ic">'+ic+'</text>';ty=y+36}
    o+='<text x="'+cx+'" y="'+ty+'" text-anchor="middle" class="t">'+esc(t)+'</text>';
    if(s)o+='<text x="'+cx+'" y="'+(ty+12)+'" text-anchor="middle" class="s">'+esc(s)+'</text>';
    if(f)o+='<text x="'+cx+'" y="'+(ty+(s?25:14))+'" text-anchor="middle" class="f">'+esc(f)+'</text>';return o}
  function ar(x1,y1,x2,y2,c){return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+(c||C.s)+'" stroke-width="2" marker-end="url(#ah)"/>'}
  function tx(x,y,t,cl,anc){return '<text x="'+x+'" y="'+y+'" text-anchor="'+(anc||'middle')+'" class="'+(cl||'t')+'">'+esc(t)+'</text>'}
  /* steps placed around a circle, with arrows between them */
  function cycle(h,steps,title,fa){var cx=180,cy=h/2+4,R=Math.min(h/2-34,120),n=steps.length,o='<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'" fill="none" stroke="'+C.s+'" stroke-opacity=".35" stroke-width="2" stroke-dasharray="4 5"/>';
    o+=tx(cx,cy-4,title,'t')+tx(cx,cy+12,fa,'f');
    var cols=[C.b,C.g,C.a,C.r,C.p,C.k,C.b,C.g];
    steps.forEach(function(s,i){var a=-Math.PI/2+i*2*Math.PI/n,x=cx+R*Math.cos(a),y=cy+R*Math.sin(a),w=96,hh=40;
      o+=box(x-w/2,y-hh/2,w,hh,cols[i%cols.length],(i+1)+'. '+s[0],null,s[1])});
    return svg(h,o)}
  var F={};
  F.cia=svg(256,
    '<polygon points="180,40 70,200 290,200" fill="'+C.b+'" fill-opacity=".07" stroke="'+C.s+'" stroke-opacity=".5" stroke-width="2"/>'+
    box(116,8,128,60,C.b,'Confidentiality','only the right people','محرمانگی')+
    box(10,172,130,60,C.g,'Integrity','not changed','یکپارچگی')+
    box(220,172,130,60,C.a,'Availability','there when needed','دسترس‌پذیری')+
    tx(180,130,'CIA','big')+tx(180,148,'goals of security · هدف‌ها','s')+
    tx(180,248,'Opposite (DAD): Disclosure ✗C · Alteration ✗I · Destruction ✗A','s'));
  F.aaa=svg(150,
    box(4,40,108,78,C.b,'Authentication','Who are you?','کی هستی؟','🪪')+ar(114,79,126,79)+
    box(128,40,104,78,C.g,'Authorization','What may you do?','اجازه‌ات چیست؟','🔑')+ar(234,79,246,79)+
    box(248,40,108,78,C.a,'Accounting','What did you do?','چه کردی؟ (لاگ)','📒')+
    tx(180,24,'AAA — in this order · به این ترتیب','t')+tx(180,140,'Example: password → open the HR folder → the log records it','s'));
  F.sym=svg(250,
    tx(8,20,'Symmetric — ONE shared key · یک کلید مشترک','t','start')+
    box(6,30,70,46,C.s,'📄 Text','Alice')+ar(78,53,108,53)+box(110,30,70,46,C.a,'🔑 Lock','same key')+ar(182,53,208,53)+
    box(210,30,62,46,C.r,'🔒 #@!x','cipher')+ar(274,53,288,53)+box(290,30,64,46,C.a,'🔑 Open','Bob')+
    tx(180,96,'Fast · good for lots of data · AES · problem: sharing the key safely','s')+
    tx(8,132,'Asymmetric — a KEY PAIR · جفت کلید','t','start')+
    box(6,142,70,46,C.s,'📄 Text','Alice')+ar(78,165,108,165)+box(110,142,70,46,C.g,'🟢 Bob\'s','public key')+ar(182,165,208,165)+
    box(210,142,62,46,C.r,'🔒 #@!x','cipher')+ar(274,165,288,165)+box(290,142,64,46,C.p,'🔴 Bob\'s','private key')+
    tx(180,208,'Slow · RSA, ECC · public key locks, only the private key opens','s')+
    tx(180,226,'Real life (TLS): asymmetric to swap a key, then symmetric for the data','s')+
    tx(180,244,'در عمل: اول نامتقارن برای تبادل کلید، بعد متقارن برای داده','f'));
  F.hash=svg(180,
    box(6,30,96,56,C.b,'"Summer24"','password','رمز')+tx(117,62,'+','big')+box(130,30,70,56,C.a,'x9!Q','salt','نمک تصادفی')+ar(202,58,222,58)+
    box(224,24,130,68,C.p,'Hash (SHA-256)','→ 9f86d08…a3c1','همیشه هم‌طول')+
    '<path d="M290 96 Q180 150 60 96" fill="none" stroke="'+C.r+'" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah)"/>'+tx(180,138,'✗ cannot go back (one-way) · برگشت‌پذیر نیست','t')+
    tx(180,160,'Same input → same hash · 1 letter changed → totally different hash','s')+
    tx(180,174,'Salt makes equal passwords look different → stops rainbow tables','s'));
  F.sig=svg(230,
    tx(8,18,'Sender signs · فرستنده امضا می‌کند','t','start')+
    box(6,26,62,44,C.s,'📄 Message')+ar(70,48,84,48)+box(86,26,60,44,C.p,'Hash','#9f86…')+ar(148,48,162,48)+
    box(164,26,110,44,C.r,'Encrypt hash','sender PRIVATE key')+ar(276,48,290,48)+box(292,26,62,44,C.a,'✍️','signature')+
    tx(8,104,'Receiver checks · گیرنده بررسی می‌کند','t','start')+
    box(6,112,108,44,C.g,'Decrypt signature','sender PUBLIC key')+ar(116,134,132,134)+box(134,112,70,44,C.p,'Hash A')+
    tx(222,139,'=?','big')+box(240,112,70,44,C.p,'Hash B','of message')+
    tx(180,180,'Same → ✓ really from the sender (authenticity, non-repudiation)','s')+
    tx(180,196,'and ✓ not changed on the way (integrity)','s')+tx(180,216,'امضای دیجیتال = هش + کلید خصوصی فرستنده','f'));
  F.pki=svg(250,
    box(100,8,160,54,C.r,'Root CA','self-signed · kept offline','ریشه — آفلاین')+ar(180,64,180,82)+
    box(100,84,160,54,C.a,'Intermediate CA','signed by the root','میانی')+ar(180,140,180,158)+
    box(100,160,160,54,C.g,'Server certificate','www.shop.com + public key','گواهی سایت')+
    box(4,40,84,62,C.b,'🌐 Browser','trust store','ریشه‌های معتمد')+'<path d="M88 70 L98 40" stroke="'+C.b+'" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#ah)"/>'+
    box(272,96,84,70,C.p,'Revoked?','CRL / OCSP','باطل شده؟')+
    tx(180,236,'Chain of trust: browser trusts root → root vouches for the rest','s'));
  F.ir=cycle(330,[['Preparation','آمادگی'],['Detection','شناسایی'],['Analysis','تحلیل'],['Containment','مهار'],['Eradication','ریشه‌کنی'],['Recovery','بازیابی'],['Lessons learned','درس‌ها']],'Incident response','پاسخ به حادثه');
  F.vuln=cycle(290,[['Identify','پیدا کردن'],['Analyze','تحلیل (CVSS)'],['Respond','اصلاح / پچ'],['Validate','دوباره اسکن'],['Report','گزارش']],'Vulnerability mgmt','مدیریت آسیب‌پذیری');
  F.dmz=svg(210,
    box(4,70,64,60,C.s,'☁️ Internet','untrusted','نا امن')+ar(70,100,84,100)+
    box(86,64,30,72,C.r,'🧱','FW')+ar(118,100,130,100)+
    box(132,30,96,140,C.a,'DMZ','screened subnet','')+box(142,64,76,30,C.a,'🌐 Web')+box(142,102,76,30,C.a,'✉️ Mail')+
    ar(230,100,242,100)+box(244,64,30,72,C.r,'🧱','FW')+ar(276,100,286,100)+
    box(288,30,68,140,C.g,'Internal','LAN','شبکه داخلی')+tx(322,104,'💻 🗄️','ic')+
    tx(180,190,'Public servers live in the DMZ, so a hacked web server is still','s')+tx(180,204,'outside the internal network · سرورهای عمومی در DMZ','s'));
  F.zt=svg(240,
    '<rect x="96" y="6" width="168" height="78" rx="12" fill="'+C.p+'" fill-opacity=".07" stroke="'+C.p+'" stroke-dasharray="5 4"/>'+tx(180,22,'Control plane · تصمیم','s')+
    box(106,30,148,46,C.p,'Policy Decision Point','engine + administrator')+
    box(4,128,84,64,C.b,'👤 Subject','user + device','کاربر + دستگاه')+ar(90,160,128,160)+
    box(130,132,100,56,C.r,'🚪 PEP','enforcement point','دروازه')+ar(232,160,270,160)+
    box(272,128,84,64,C.g,'🗄️ Resource','app / data','منبع')+
    '<line x1="180" y1="78" x2="180" y2="128" stroke="'+C.s+'" stroke-width="2" marker-start="url(#ah)" marker-end="url(#ah)"/>'+tx(184,104,'allow / deny?','s','start')+
    tx(180,206,'Data plane · Never trust, always verify — every request is checked','s')+tx(180,224,'هیچ‌وقت اعتماد نکن، همیشه بررسی کن','f'));
  F.risk=(function(){var o='',cols=['#22c55e','#84cc16','#eab308','#f97316','#ef4444'],x0=52,y0=20,s=38;
    for(var r=0;r<5;r++)for(var c=0;c<5;c++){var v=(5-r)*(c+1),k=v>=15?4:v>=10?3:v>=6?2:v>=3?1:0;
      o+='<rect x="'+(x0+c*s)+'" y="'+(y0+r*s)+'" width="'+(s-3)+'" height="'+(s-3)+'" rx="6" fill="'+cols[k]+'" fill-opacity=".8"/><text x="'+(x0+c*s+18)+'" y="'+(y0+r*s+23)+'" text-anchor="middle" class="t wt">'+v+'</text>'}
    o+=tx(145,226,'Impact → · شدت اثر','t')+'<text x="22" y="112" text-anchor="middle" class="t" transform="rotate(-90 22 112)">Likelihood → · احتمال</text>';
    o+='<rect x="250" y="20" width="106" height="186" rx="10" fill="'+C.s+'" fill-opacity=".16" stroke="'+C.s+'" stroke-width="1.6"/>'+tx(303,46,'Risk =','t')+tx(303,62,'likelihood','s')+tx(303,76,'× impact','s')+tx(303,92,'ریسک = احتمال × اثر','f')+tx(303,110,'🟥 15+ act now','s')+tx(303,128,'🟧 10+ reduce','s')+tx(303,146,'🟨 6+ plan','s')+tx(303,164,'🟩 low: accept','s');
    return svg(244,o)})();
  F.mfa=svg(200,
    box(4,30,84,104,C.b,'Know','PIN, password','چیزی که می‌دانی','🔢')+box(94,30,84,104,C.g,'Have','phone, token','چیزی که داری','📱')+
    box(184,30,84,104,C.a,'Are','fingerprint, face','چیزی که هستی','👆')+box(274,30,82,104,C.p,'Where','location','جایی که هستی','📍')+
    tx(180,18,'Authentication factors · عامل‌های احراز هویت','t')+
    tx(180,158,'MFA = two DIFFERENT kinds. Password + PIN = still one kind ✗','s')+tx(180,176,'Password + phone code ✓','s')+tx(180,194,'دو نوع متفاوت، نه دو چیز از یک نوع','f'));
  F.backup=(function(){var d=['Sun','Mon','Tue','Wed','Thu'],o='',x0=96,w=50;
    d.forEach(function(n,i){o+=tx(x0+i*w+22,18,n,'s')});
    function row(y,lab,fa,kind){o+=tx(6,y+16,lab,'t','start')+tx(6,y+30,fa,'s','start');
      d.forEach(function(n,i){var full=i===0,h=full?30:kind==='i'?10:8+i*5,c=full?C.b:kind==='i'?C.g:C.a;
        o+='<rect x="'+(x0+i*w)+'" y="'+(y+34-h)+'" width="44" height="'+h+'" rx="4" fill="'+c+'" fill-opacity=".75"/>'})}
    row(26,'Full','کامل','f');
    row(74,'Incremental','افزایشی','i');row(122,'Differential','تفاضلی','d');
    o+=tx(180,180,'Incremental: changes since the LAST backup → restore = full + every incremental','s');
    o+=tx(180,196,'Differential: changes since the last FULL → restore = full + the latest one','s');
    return svg(206,o)})();
  F.sites=svg(190,
    box(4,40,108,70,C.b,'❄️ Cold site','space + power only','فقط فضا و برق')+box(126,40,108,70,C.a,'🌤️ Warm site','some hardware','بخشی از تجهیزات')+box(248,40,108,70,C.r,'🔥 Hot site','ready, live data','آماده و به‌روز')+
    ar(20,134,340,134,C.r)+tx(180,128,'cost ↑ · هزینه بیشتر','s')+ar(340,160,20,160,C.g)+tx(180,154,'recovery time ↓ is FASTEST on the right · زمان بازیابی کمتر','s')+
    tx(180,24,'Recovery sites · سایت‌های پشتیبان','t')+tx(180,182,'Hot = minutes · Warm = hours/days · Cold = weeks','s'));
  F.rto=svg(180,
    '<line x1="14" y1="80" x2="346" y2="80" stroke="'+C.s+'" stroke-width="3"/>'+
    '<circle cx="70" cy="80" r="7" fill="'+C.b+'"/>'+tx(70,60,'💾 last backup','s')+
    '<circle cx="180" cy="80" r="9" fill="'+C.r+'"/>'+tx(180,60,'⚡ disaster','t')+
    '<circle cx="300" cy="80" r="7" fill="'+C.g+'"/>'+tx(300,60,'✅ back online','s')+
    '<rect x="70" y="92" width="110" height="26" rx="6" fill="'+C.a+'" fill-opacity=".25" stroke="'+C.a+'"/>'+tx(125,109,'RPO · data lost','t')+
    '<rect x="180" y="92" width="120" height="26" rx="6" fill="'+C.p+'" fill-opacity=".25" stroke="'+C.p+'"/>'+tx(240,109,'RTO · downtime','t')+
    tx(125,136,'data you can lose','s')+tx(240,136,'time you can be down','s')+
    tx(125,152,'چقدر داده از دست برود','f')+tx(240,152,'چقدر از کار بیفتد','f')+
    tx(180,24,'RPO looks BACK, RTO looks FORWARD from the disaster','t'));
  F.sso=svg(220,
    box(4,80,80,60,C.b,'👤 User','browser','کاربر')+box(140,6,80,56,C.g,'🛒 App','service provider','')+box(276,80,80,60,C.p,'🏢 IdP','identity provider','ورود یک‌باره')+
    ar(60,78,138,40)+tx(76,46,'1 open app','s','start')+
    '<path d="M220 40 Q300 40 312 76" fill="none" stroke="'+C.s+'" stroke-width="2" marker-end="url(#ah)"/>'+tx(276,34,'2 sent to IdP','s')+
    ar(274,112,88,112)+tx(180,106,'3 log in once','s')+
    ar(270,132,90,132,C.g)+tx(180,148,'4 signed token / assertion','s')+
    '<path d="M60 142 Q120 200 176 66" fill="none" stroke="'+C.g+'" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah)"/>'+tx(150,190,'5 token → you are in ✓','s','start')+
    tx(180,212,'SAML (enterprise SSO) · OAuth = authorization · OIDC = login on top of OAuth','s'));
  window.FIGS=F;
  /* where each diagram goes: [pack, section, heading starts with, diagram id, English caption, Persian caption] */
  var PLACE=[
    ['secplus','1','CIA triad','cia','The CIA triad','سه هدف امنیت'],['secplus','1','CIA triad','aaa','AAA in order','احراز، مجوز، ثبت'],
    ['secplus','1','Zero Trust','zt','Zero Trust parts','اجزای اعتماد صفر'],
    ['secplus','2','Symmetric vs asymmetric','sym','Symmetric vs asymmetric','متقارن و نامتقارن'],
    ['secplus','2','Hashing','hash','Hashing and salt','هش و نمک'],['secplus','2','Hashing','sig','Digital signature','امضای دیجیتال'],
    ['secplus','2','PKI and certificates','pki','Chain of trust','زنجیره‌ی اعتماد'],
    ['secplus','6','Device placement','dmz','DMZ between two firewalls','DMZ بین دو فایروال'],
    ['secplus','7','Backup and recovery','backup','Backup types','انواع پشتیبان'],['secplus','7','High availability','sites','Recovery sites','سایت‌های بازیابی'],
    ['secplus','9','The cycle','vuln','Vulnerability management cycle','چرخه‌ی مدیریت آسیب‌پذیری'],
    ['secplus','10','Federation and SSO','sso','How SSO works','SSO چطور کار می‌کند'],['secplus','10','MFA','mfa','MFA factors','عامل‌های MFA'],
    ['secplus','11','Incident response','ir','Incident response steps','مراحل پاسخ به حادثه'],
    ['secplus','12','Risk management','risk','Risk matrix','ماتریس ریسک'],['secplus','12','Business impact','rto','RPO and RTO','RPO و RTO'],
    ['secbook','1','CIA goals','cia','The CIA triad','سه هدف امنیت'],
    ['secbook','5','Vulnerability life cycle','vuln','Vulnerability management cycle','چرخه‌ی مدیریت آسیب‌پذیری'],
    ['secbook','7','Symmetric vs','sym','Symmetric vs asymmetric','متقارن و نامتقارن'],
    ['secbook','7','Hashing and signatures','hash','Hashing and salt','هش و نمک'],['secbook','7','Hashing and signatures','sig','Digital signature','امضای دیجیتال'],
    ['secbook','7','PKI and certificates','pki','Chain of trust','زنجیره‌ی اعتماد'],
    ['secbook','8','SSO and federation','sso','How SSO works','SSO چطور کار می‌کند'],['secbook','8','Multifactor','mfa','MFA factors','عامل‌های MFA'],
    ['secbook','9','Storage and backups','backup','Backup types','انواع پشتیبان'],['secbook','9','Recovery sites','sites','Recovery sites','سایت‌های بازیابی'],
    ['secbook','12','Design ideas','dmz','DMZ between two firewalls','DMZ بین دو فایروال'],['secbook','12','Zero trust parts','zt','Zero Trust parts','اجزای اعتماد صفر'],
    ['secbook','14','Incident response cycle','ir','Incident response steps','مراحل پاسخ به حادثه'],
    ['secbook','17','Risk analysis','risk','Risk matrix','ماتریس ریسک'],['secbook','17','BIA and disaster','rto','RPO and RTO','RPO و RTO']
  ];
  var P=window.PACKS||[];
  /* insert from the last entry backwards so two diagrams under one heading keep their order */
  PLACE.slice().reverse().forEach(function(x){
    var p=P.find(function(q){return q.id===x[0]});if(!p||!p.study||!p.study[x[1]])return;
    var b=p.study[x[1]].b,i=b.findIndex(function(k){return k.k==='h'&&k.en.indexOf(x[2])===0});
    if(i<0)return;b.splice(i+1,0,{k:'fig',id:x[3],en:x[4],fa:x[5]});
  });
})();
