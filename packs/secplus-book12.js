/* Security+ extension: Section B12, matched to Chapter 12 ("Network Security") of the course
   textbook (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written
   for the chapter's objectives (1.2, 2.4, 2.5, 3.1, 3.2, 4.1, 4.4, 4.5); no text from the book is copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secbook'});
  if(!pack)return;
  pack.sections['12']={en:'Network security',fa:'امنیت شبکه'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b12_'+(++n),sec:'12',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Design & zero trust',T2='Access & VPN',T3='Appliances',T4='Services & protocols',T5='Network attacks';

  /* ---- Design & zero trust ---- */
  M(T1,'A firewall protecting a hospital\'s patient-monitoring network breaks. The hospital decides traffic must keep flowing even without inspection. Which failure mode did it choose?',
    'فایروالی که از شبکه‌ی پایش بیماران یک بیمارستان محافظت می‌کند خراب می‌شود. بیمارستان تصمیم گرفته ترافیک حتی بدون بررسی هم جریان داشته باشد. کدام حالت خرابی را انتخاب کرده؟',
    'در زمان خرابی همه چیز «باز» می‌ماند.',
    ['Fail-open','Fail-closed','Fail-secure','Active/passive'],
    ['Fail-open','Fail-closed','Fail-secure (یعنی بسته)','Active/passive'],
    'Fail-open lets all traffic pass when the device fails, keeping the business running but without the control. Fail-closed stops all traffic, keeping security but causing an outage. The choice depends on which risk the business can accept.',
    'در Fail-open وقتی دستگاه خراب شود همه‌ی ترافیک رد می‌شود؛ کار ادامه دارد ولی کنترل امنیتی نیست. در Fail-closed همه‌ی ترافیک می‌ایستد؛ امنیت می‌ماند ولی قطعی پیش می‌آید. انتخاب به این بستگی دارد که کسب‌وکار کدام ریسک را می‌پذیرد.');

  M(T1,'A research lab keeps its most sensitive systems on a network with no cable or wireless link to any other network; data moves only by approved removable media. What is this?',
    'یک آزمایشگاه حساس‌ترین سیستم‌هایش را روی شبکه‌ای نگه می‌دارد که هیچ کابل یا لینک بی‌سیمی به شبکه‌ی دیگری ندارد؛ داده فقط با رسانه‌ی قابل‌حمل تأییدشده جابه‌جا می‌شود. این چیست؟',
    'بین شبکه‌ها فقط «هوا» است.',
    ['An air gap (physical isolation)','A VLAN (logical segmentation)','A screened subnet','A split-tunnel VPN'],
    ['Air gap (جداسازی فیزیکی)','VLAN (بخش‌بندی منطقی)','Screened subnet','VPN با Split tunnel'],
    'An air gap physically isolates systems so remote attackers cannot reach them. It is the strongest separation but not perfect: Stuxnet crossed an air gap on infected USB drives, so removable media still needs control.',
    'Air gap سیستم‌ها را فیزیکی جدا می‌کند تا مهاجم از راه دور به آن‌ها نرسد. قوی‌ترین جداسازی است ولی بی‌نقص نیست: Stuxnet با فلش آلوده از Air gap رد شد، پس رسانه‌ی قابل‌حمل هم باید کنترل شود.');

  M(T1,'In a zero trust architecture, which component actually decides to grant, deny or revoke access, using a trust algorithm fed by identity, threat intelligence and SIEM data?',
    'در معماری Zero Trust کدام جزء با یک الگوریتم اعتماد که از هویت، اطلاعات تهدید و SIEM تغذیه می‌شود، درباره‌ی دادن، رد یا لغو دسترسی «تصمیم» می‌گیرد؟',
    'تصمیم‌گیرنده، نه اجراکننده.',
    ['Policy Engine','Policy Administrator','Policy Enforcement Point','Subject'],
    ['Policy Engine (موتور سیاست)','Policy Administrator (مجری سیاست)','Policy Enforcement Point (نقطه‌ی اعمال)','Subject (درخواست‌کننده)'],
    'The Policy Engine decides. The Policy Administrator (a component, not a person) sets up or tears down the path and issues session credentials. The Policy Enforcement Point sits in the data path, forwards requests and allows or ends sessions as told.',
    'Policy Engine تصمیم می‌گیرد. Policy Administrator (یک جزء نرم‌افزاری، نه آدم) مسیر ارتباط را برقرار یا قطع می‌کند و اعتبارنامه‌ی جلسه می‌سازد. Policy Enforcement Point در مسیر داده است، درخواست را رد می‌کند و به دستور، جلسه را اجازه می‌دهد یا قطع می‌کند.');

  M(T1,'A zero trust design gives each user access only to the specific apps they need and segments by identity instead of IP or VLAN, so a compromised account can do little. Which control-plane concept is this?',
    'یک طراحی Zero Trust به هر کاربر فقط به برنامه‌های لازمش دسترسی می‌دهد و بخش‌بندی را بر اساس هویت انجام می‌دهد نه IP یا VLAN، تا یک حساب هک‌شده کار زیادی نتواند بکند. این کدام مفهوم Control plane است؟',
    'محدود کردن «شعاع انفجار».',
    ['Threat scope reduction','Adaptive identity','Implicit trust zones','Policy Enforcement Point'],
    ['Threat scope reduction (کاهش دامنه‌ی تهدید)','Adaptive identity (هویت تطبیقی)','Implicit trust zones (ناحیه‌ی اعتماد ضمنی)','Policy Enforcement Point'],
    'Threat scope reduction (limited blast radius) uses least privilege and identity-based segmentation. Adaptive identity uses context such as location and device health during authentication. Implicit trust zones and PEPs belong to the data plane.',
    'Threat scope reduction (محدود کردن شعاع انفجار) از حداقل دسترسی و بخش‌بندی بر اساس هویت استفاده می‌کند. Adaptive identity در احراز هویت از زمینه مثل مکان و سلامت دستگاه استفاده می‌کند. Implicit trust zones و PEP جزو Data plane هستند.');

  M(T1,'A company replaces expensive MPLS links between branches with a mix of broadband and 5G, and wants traffic routed by application needs. What should it deploy?',
    'شرکتی لینک‌های گران MPLS بین شعبه‌ها را با ترکیبی از اینترنت پهن‌باند و 5G عوض می‌کند و می‌خواهد ترافیک بر اساس نیاز هر برنامه مسیریابی شود. چه چیزی باید راه بیندازد؟',
    'WAN نرم‌افزاری.',
    ['SD-WAN','SASE','An IPSec site-to-site VPN only','A jump server'],
    ['SD-WAN','SASE','فقط VPN سایت‌به‌سایت IPSec','Jump server'],
    'SD-WAN combines several connection types (MPLS, broadband, 4G/5G) into a virtual WAN, routes by application requirements and uses cheaper links when possible. SASE adds cloud security services (CASB, firewall, zero trust) on top of SD-WAN and VPN.',
    'SD-WAN چند نوع اتصال (MPLS، پهن‌باند، 4G/5G) را در یک WAN مجازی ترکیب می‌کند، بر اساس نیاز برنامه مسیر می‌دهد و هر وقت بشود از لینک ارزان‌تر استفاده می‌کند. SASE سرویس‌های امنیتی ابری (CASB، فایروال، Zero Trust) را روی SD-WAN و VPN اضافه می‌کند.');

  /* ---- Access & VPN ---- */
  M(T2,'Before a laptop joins the network, an installed agent checks its patch level and antivirus; if it fails, it is sent to a quarantine VLAN. Which NAC type is this?',
    'قبل از اینکه لپ‌تاپ به شبکه وصل شود، یک Agent نصب‌شده سطح وصله و آنتی‌ویروسش را بررسی می‌کند؛ اگر رد شود، به VLAN قرنطینه می‌رود. این کدام نوع NAC است؟',
    'Agent دارد + قبل از ورود.',
    ['Agent-based, preadmission','Agentless, postadmission','Agent-based, postadmission','Port security'],
    ['مبتنی بر Agent، قبل از ورود (Preadmission)','بدون Agent، بعد از ورود','مبتنی بر Agent، بعد از ورود','Port security'],
    'Agent-based NAC sees the most detail (patches, settings, AV versions); preadmission keeps unhealthy systems off the network. Agentless is lighter but sees less; postadmission checks after connection and avoids blocking work on a failed check.',
    'NAC مبتنی بر Agent بیشترین جزئیات را می‌بیند (وصله، تنظیمات، نسخه‌ی آنتی‌ویروس)؛ Preadmission سیستم ناسالم را بیرون نگه می‌دارد. بدون Agent سبک‌تر است ولی کمتر می‌بیند؛ Postadmission بعد از اتصال بررسی می‌کند و جلوی کار را با یک بررسی ناموفق نمی‌گیرد.');

  M(T2,'An attacker floods a switch with fake MAC addresses so it starts sending frames out every port. Which switch feature prevents this?',
    'مهاجمی سوئیچ را با آدرس‌های MAC جعلی پر می‌کند تا سوئیچ فریم‌ها را به همه‌ی پورت‌ها بفرستد. کدام ویژگی سوئیچ جلوی این را می‌گیرد؟',
    'محدود کردن تعداد MAC روی هر پورت.',
    ['Port security','BPDU Guard','DHCP snooping','Storm control'],
    ['Port security','BPDU Guard','DHCP snooping','Storm control'],
    'Port security limits how many (or which) MAC addresses a port accepts, preventing CAM table overflow. BPDU Guard stops user ports from sending STP messages, DHCP snooping blocks rogue DHCP servers, and storm control rate-limits broadcasts.',
    'Port security تعداد (یا خود) آدرس‌های MAC مجاز روی هر پورت را محدود می‌کند و جلوی پر شدن جدول CAM را می‌گیرد. BPDU Guard نمی‌گذارد پورت کاربر پیام STP بفرستد، DHCP snooping سرور DHCP غیرمجاز را بلاک می‌کند و Storm control نرخ Broadcast را محدود می‌کند.');

  M(T2,'Users on a laptop VPN browse the web through the hotel Wi-Fi directly, while only traffic for company servers goes through the tunnel. What is this, and what is the risk?',
    'کاربرها روی VPN لپ‌تاپ وب‌گردی را مستقیم از Wi-Fi هتل انجام می‌دهند و فقط ترافیک سرورهای شرکت از تونل می‌رود. این چیست و ریسکش چیست؟',
    'فقط بخشی از ترافیک داخل تونل است.',
    ['Split tunnel; the other traffic is not protected or monitored','Full tunnel; it wastes bandwidth','Transport mode; the IP header is exposed','Always-on VPN; it cannot reconnect'],
    ['Split tunnel؛ بقیه‌ی ترافیک محافظت و پایش نمی‌شود','Full tunnel؛ پهنای باند هدر می‌رود','Transport mode؛ هدر IP دیده می‌شود','Always-on VPN؛ نمی‌تواند دوباره وصل شود'],
    'A split tunnel sends only company-bound traffic through the VPN, saving bandwidth but leaving other traffic unprotected on an untrusted network. A full tunnel sends everything through the VPN, which is safer on hotel or coffee-shop Wi-Fi.',
    'Split tunnel فقط ترافیک مقصد شرکت را از VPN می‌فرستد؛ پهنای باند صرفه‌جویی می‌شود ولی بقیه‌ی ترافیک روی شبکه‌ی نامطمئن بی‌محافظت است. Full tunnel همه چیز را از VPN می‌فرستد که روی Wi-Fi هتل یا کافه امن‌تر است.');

  M(T2,'Which IPSec component protects the payload with encryption and, in tunnel mode, protects the whole original packet?',
    'کدام جزء IPSec بار داده را رمز می‌کند و در Tunnel mode کل بسته‌ی اصلی را محافظت می‌کند؟',
    'AH رمزگذاری ندارد.',
    ['ESP (Encapsulating Security Payload)','AH (Authentication Header)','IKE','ISAKMP'],
    ['ESP','AH','IKE','ISAKMP'],
    'ESP provides confidentiality (and integrity); in transport mode it protects the payload, in tunnel mode the entire packet. AH gives integrity and sender authentication but no encryption. IKE/ISAKMP handle key exchange and security associations.',
    'ESP محرمانگی (و یکپارچگی) می‌دهد؛ در Transport mode فقط Payload و در Tunnel mode کل بسته را محافظت می‌کند. AH یکپارچگی و احراز فرستنده می‌دهد ولی رمزگذاری ندارد. IKE/ISAKMP تبادل کلید و Security association را انجام می‌دهند.');

  /* ---- Appliances ---- */
  M(T3,'Admins must reach servers in a high-security zone. The company wants a single hardened, logged system they connect to first, with audit logs copied elsewhere. What is this?',
    'مدیران باید به سرورهای یک ناحیه‌ی خیلی امن دسترسی داشته باشند. شرکت می‌خواهد اول به یک سیستم سخت‌شده و لاگ‌دار وصل شوند و لاگ‌هایش جای دیگری کپی شود. این چیست؟',
    'نقطه‌ی پرش بین ناحیه‌ها.',
    ['A jump server','A reverse proxy','A load balancer','A honeypot'],
    ['Jump server','Reverse proxy','Load balancer','Honeypot'],
    'A jump server (jump box) is a secured, monitored system used to cross between security zones, usually via SSH or RDP, with the admin tools needed and an audit trail kept in a separate place.',
    'Jump server یک سیستم امن و پایش‌شده برای رد شدن بین ناحیه‌های امنیتی است، معمولاً با SSH یا RDP، که ابزارهای مدیریت لازم را دارد و لاگ حسابرسی‌اش جای دیگری نگه داشته می‌شود.');

  M(T3,'A load balancer sends each new request to whichever web server currently has the fewest open sessions. Which algorithm is this?',
    'یک Load balancer هر درخواست جدید را به وب‌سروری می‌فرستد که الان کمترین جلسه‌ی باز را دارد. این کدام الگوریتم است؟',
    'به تعداد اتصال نگاه می‌کند.',
    ['Least connection','Round-robin','Source IP hashing','Fixed weighted'],
    ['Least connection','Round-robin (نوبتی)','Source IP hashing','Fixed weighted (وزن ثابت)'],
    'Least connection picks the server with the fewest active connections. Round-robin goes down the list in turn; source IP hashing maps clients by a hash of their IP; weighted versions add a preset capacity score. Active/active spreads load across all nodes; active/passive keeps a standby.',
    'Least connection سروری را انتخاب می‌کند که کمترین اتصال فعال را دارد. Round-robin به نوبت جلو می‌رود، Source IP hashing بر اساس هش IP کاربر تقسیم می‌کند و نسخه‌های Weighted یک امتیاز ظرفیت از پیش تعیین‌شده اضافه می‌کنند. Active/active بار را بین همه‌ی گره‌ها پخش می‌کند و Active/passive یک گره‌ی آماده‌به‌کار نگه می‌دارد.');

  M(T3,'Which firewall type is designed to inspect HTTP requests to a web app and block attacks such as SQL injection in queries?',
    'کدام نوع فایروال برای بررسی درخواست‌های HTTP به یک برنامه‌ی وب و بلاک کردن حمله‌هایی مثل SQL injection ساخته شده؟',
    'فایروال مخصوص وب.',
    ['WAF','Stateless packet filter','Layer 4 stateful firewall','Host-based firewall'],
    ['WAF','Packet filter بدون حالت','فایروال Stateful لایه‌ی ۴','فایروال میزبان'],
    'A web application firewall works like a firewall plus an IPS for web traffic: it inspects requests and responses at layer 7 and can block or clean malicious input. Layer 4 firewalls see only IPs, ports and protocols.',
    'WAF مثل ترکیب فایروال و IPS برای ترافیک وب است: درخواست و پاسخ را در لایه‌ی ۷ بررسی می‌کند و می‌تواند ورودی مخرب را بلاک یا پاک کند. فایروال لایه‌ی ۴ فقط IP، پورت و پروتکل را می‌بیند.');

  M(T3,'A small business wants one box, quick to set up, that includes firewall, IPS, antimalware, URL and email filtering, VPN and DLP. What fits best?',
    'یک کسب‌وکار کوچک یک دستگاه می‌خواهد که سریع راه بیفتد و فایروال، IPS، ضدبدافزار، فیلتر URL و ایمیل، VPN و DLP را با هم داشته باشد. کدام مناسب‌تر است؟',
    'همه چیز در یک جعبه برای سازمان کوچک.',
    ['A UTM appliance','An NGFW','A WAF','A jump server'],
    ['دستگاه UTM','NGFW','WAF','Jump server'],
    'UTM devices bundle many security functions and are popular as an out-of-the-box option for small and mid-sized organizations. NGFWs are more focused, faster with higher throughput, and usually need more configuration and expertise.',
    'UTM چند کارکرد امنیتی را در یک دستگاه جمع می‌کند و برای سازمان‌های کوچک و متوسط راه‌حل آماده است. NGFW متمرکزتر، سریع‌تر و با توان عبور بیشتر است و معمولاً تنظیم و تخصص بیشتری لازم دارد.');

  M(T3,'An IDS receives a copy of traffic from a passive tap. What can it NOT do?',
    'یک IDS یک کپی از ترافیک را از یک Tap غیرفعال (Passive) می‌گیرد. چه کاری را نمی‌تواند انجام دهد؟',
    'کپی ترافیک است، نه خود ترافیک.',
    ['Block the original traffic','Detect known attack signatures','Detect anomalies from a baseline','Send alerts'],
    ['ترافیک اصلی را بلاک کند','امضای حمله‌های شناخته‌شده را تشخیص دهد','ناهنجاری نسبت به Baseline را تشخیص دهد','هشدار بفرستد'],
    'A tap or SPAN port gives a copy, so the device can detect (signature or anomaly based) and alert but cannot stop traffic. To block, an IPS must be inline, which adds a possible point of failure. A passive tap keeps passing traffic even without power.',
    'Tap یا پورت SPAN یک کپی می‌دهد، پس دستگاه می‌تواند تشخیص دهد (با امضا یا ناهنجاری) و هشدار بدهد ولی نمی‌تواند ترافیک را متوقف کند. برای بلاک کردن، IPS باید Inline باشد که یک نقطه‌ی خرابی احتمالی اضافه می‌کند. Tap غیرفعال حتی بدون برق هم ترافیک را رد می‌کند.');

  M(T3,'A fake customer record that no real process ever uses is placed in a database; DLP alerts if it ever appears in outbound traffic. What is it?',
    'یک رکورد مشتری ساختگی که هیچ فرایند واقعی از آن استفاده نمی‌کند در پایگاه داده گذاشته شده؛ اگر در ترافیک خروجی دیده شود DLP هشدار می‌دهد. این چیست؟',
    'تکه‌ای «داده»، نه سیستم.',
    ['A honeytoken','A honeypot','A honeynet','A tarpit'],
    ['Honeytoken','Honeypot','Honeynet','Tarpit'],
    'A honeytoken is trackable fake data (record, entry, credential) whose use or movement signals a breach. A honeyfile is the same idea as a file. Honeypots and honeynets are fake systems or networks used to study attackers.',
    'Honeytoken داده‌ی ساختگی قابل‌ردیابی است (رکورد، ورودی، اعتبارنامه) که استفاده یا جابه‌جایی‌اش نشانه‌ی نفوذ است. Honeyfile همین ایده به شکل فایل است. Honeypot و Honeynet سیستم یا شبکه‌ی ساختگی برای مطالعه‌ی مهاجم‌اند.');

  /* ---- Services & protocols ---- */
  M(T4,'Which email record lets a receiving server check a signature on the message body and headers using a public key published in DNS?',
    'کدام رکورد ایمیل به سرور گیرنده اجازه می‌دهد امضای بدنه و هدرهای پیام را با کلید عمومی منتشرشده در DNS بررسی کند؟',
    'امضا + کلید عمومی.',
    ['DKIM','SPF','DMARC','S/MIME'],
    ['DKIM','SPF','DMARC','S/MIME'],
    'DKIM adds a DKIM-Signature header that receivers verify with the domain\'s public key in DNS. SPF lists which servers may send for a domain. DMARC builds on SPF and DKIM and tells receivers whether to reject or quarantine failures and where to send reports.',
    'DKIM یک هدر DKIM-Signature اضافه می‌کند که گیرنده با کلید عمومی دامنه در DNS بررسی می‌کند. SPF فهرست سرورهای مجاز ارسال برای دامنه است. DMARC روی SPF و DKIM سوار است و می‌گوید پیام ناموفق رد شود یا قرنطینه، و گزارش کجا برود.');

  M(T4,'A team rolls out DMARC for the first time. What does the book recommend to avoid blocking legitimate mail?',
    'تیمی برای اولین بار DMARC را راه می‌اندازد. کتاب برای جلوگیری از بلاک شدن ایمیل‌های درست چه پیشنهادی می‌دهد؟',
    'اول فقط گزارش بگیر.',
    ['Start with policy "none" and review the reports first','Start with "reject" for all mail','Disable SPF before enabling DMARC','Publish DMARC only on internal DNS'],
    ['با سیاست "none" شروع کن و اول گزارش‌ها را بررسی کن','از اول همه‌ی ایمیل‌ها را "reject" کن','قبل از DMARC، SPF را خاموش کن','DMARC را فقط در DNS داخلی منتشر کن'],
    'Begin with p=none to collect aggregate reports without affecting delivery, fix any legitimate senders that fail SPF/DKIM, then move to quarantine and reject.',
    'با p=none شروع کن تا بدون اثر روی تحویل ایمیل گزارش جمع شود، فرستنده‌های درستی را که در SPF/DKIM رد می‌شوند درست کن، بعد به Quarantine و Reject برو.');

  M(T4,'Which protocol pair is correct: insecure protocol → secure replacement and its port?',
    'کدام جفت درست است: پروتکل ناامن ← جایگزین امن و پورتش؟',
    'LDAPS روی 636 است.',
    ['LDAP 389 → LDAPS 636','IMAP 143 → IMAPS 995','POP3 110 → POP3S 993','Telnet 23 → SSH 443'],
    ['LDAP 389 ← LDAPS 636','IMAP 143 ← IMAPS 995','POP3 110 ← POP3S 993','Telnet 23 ← SSH 443'],
    'LDAPS uses TCP 636. IMAPS is 993 and secure POP3 is 995 (they are easy to swap). SSH is 22, HTTPS 443, SFTP runs over SSH on 22, FTPS uses 990 (implicit) or 21 (explicit). DNSSEC and SNMPv3 keep their original ports.',
    'LDAPS روی TCP 636 است. IMAPS روی 993 و POP3 امن روی 995 است (این دو راحت جابه‌جا می‌شوند). SSH روی 22، HTTPS روی 443، SFTP روی SSH و پورت 22، FTPS روی 990 (Implicit) یا 21 (Explicit). DNSSEC و SNMPv3 همان پورت قبلی را نگه می‌دارند.');

  M(T4,'Which of these has no secure version of the protocol, so it must be protected by detection and network controls such as DHCP snooping?',
    'کدام یک نسخه‌ی امن پروتکل ندارد و باید با تشخیص و کنترل‌های شبکه مثل DHCP snooping محافظت شود؟',
    'آدرس‌دهی خودکار.',
    ['DHCP','DNS','SNMP','LDAP'],
    ['DHCP','DNS','SNMP','LDAP'],
    'DHCP has no secure protocol version; defense relies on DHCP snooping and detection. DNS has DNSSEC, SNMP has SNMPv3 (with authPriv for encryption), and LDAP has LDAPS. BGP also lacks built-in security.',
    'DHCP نسخه‌ی امن ندارد؛ دفاع با DHCP snooping و تشخیص است. DNS نسخه‌ی DNSSEC دارد، SNMP نسخه‌ی SNMPv3 (با authPriv برای رمزگذاری) و LDAP نسخه‌ی LDAPS. BGP هم امنیت داخلی ندارد.');

  M(T4,'A router sends an unsolicited linkDown message to the network management station. What is this?',
    'یک روتر بدون درخواست یک پیام linkDown به ایستگاه مدیریت شبکه می‌فرستد. این چیست؟',
    'Agent خودش خبر می‌دهد.',
    ['An SNMP trap','An SNMP GET request','A syslog query','A NetFlow export request'],
    ['SNMP trap','درخواست SNMP GET','پرس‌وجوی Syslog','درخواست خروجی NetFlow'],
    'Traps are sent by the SNMP agent on a device to the manager when something happens (coldStart, warmStart, linkDown, linkUp, authenticationFailure, plus vendor traps). Normal SNMP polling is the manager asking the device.',
    'Trap را Agent SNMP روی دستگاه وقتی اتفاقی می‌افتد به Manager می‌فرستد (coldStart، warmStart، linkDown، linkUp، authenticationFailure و Trapهای سفارشی فروشنده). Polling معمولی SNMP یعنی Manager از دستگاه بپرسد.');

  M(T4,'Tripwire reports that a system binary changed overnight with no approved change. Which kind of tool is Tripwire?',
    'Tripwire گزارش می‌دهد که یک فایل اجرایی سیستم شبانه بدون تغییر تأییدشده عوض شده. Tripwire چه نوع ابزاری است؟',
    'اثر انگشت فایل‌ها را نگه می‌دارد.',
    ['File integrity monitor','DLP','Web filter','NAC'],
    ['File integrity monitor (پایش یکپارچگی فایل)','DLP','فیلتر وب','NAC'],
    'A file integrity monitor stores fingerprints (hashes) of files and alerts on unexpected changes, or restores them. It is valuable but can be noisy, so tune it to allow patching and normal changes.',
    'File integrity monitor اثر انگشت (هش) فایل‌ها را نگه می‌دارد و روی تغییر غیرمنتظره هشدار می‌دهد یا فایل را برمی‌گرداند. مفید است ولی ممکن است پرهشدار باشد، پس باید برای وصله و تغییرات عادی تنظیم شود.');

  /* ---- Network attacks ---- */
  M(T5,'An attacker sends tiny DNS queries with the victim\'s IP as the source to many open resolvers, which reply to the victim with large answers. Which two DDoS traits are these?',
    'مهاجمی پرس‌وجوهای DNS کوچک با IP قربانی به‌عنوان مبدأ به تعداد زیادی Resolver باز می‌فرستد و آن‌ها پاسخ‌های بزرگ به قربانی می‌دهند. این دو ویژگی DDoS کدام‌اند؟',
    'سرویس دیگری حمله را «منعکس» و «بزرگ» می‌کند.',
    ['Reflected and amplified','SYN flood and Smurf','Credential replay and on-path','Jamming and deauthentication'],
    ['Reflected و Amplified','SYN flood و Smurf','Credential replay و On-path','Jamming و Deauthentication'],
    'Reflected: a spoofed source makes legitimate servers send the traffic, hiding the attacker. Amplified: a small request produces a much larger response. DNS amplification combines both.',
    'Reflected: با جعل مبدأ، سرورهای مشروع ترافیک را به قربانی می‌فرستند و مهاجم پنهان می‌ماند. Amplified: یک درخواست کوچک پاسخ خیلی بزرگ‌تری تولید می‌کند. DNS amplification هر دو را با هم دارد.');

  M(T5,'Users typing the company intranet name are sent to a fake site, but only on one PC; DNS servers return correct answers. What should be checked first?',
    'کاربرانی که اسم اینترانت شرکت را تایپ می‌کنند به یک سایت جعلی می‌روند، ولی فقط روی یک کامپیوتر؛ سرورهای DNS پاسخ درست می‌دهند. اول چه چیزی را باید بررسی کرد؟',
    'فایلی که قبل از DNS خوانده می‌شود.',
    ['The hosts file on that PC','The domain registration','The DMARC record','The switch CAM table'],
    ['فایل hosts روی همان کامپیوتر','ثبت دامنه','رکورد DMARC','جدول CAM سوئیچ'],
    'The hosts file is checked before DNS, so adding an entry there redirects one machine (URL redirection). Domain hijacking changes the registration for everyone; DNS poisoning corrupts resolver answers or caches.',
    'فایل hosts قبل از DNS خوانده می‌شود، پس یک خط اضافه در آن فقط همان دستگاه را منحرف می‌کند (URL redirection). Domain hijacking ثبت دامنه را برای همه عوض می‌کند و DNS poisoning پاسخ یا Cache سرور DNS را خراب می‌کند.');

  M(T5,'On public Wi-Fi, a user types a site name without https; an attacker in the middle keeps the user on plain HTTP while talking HTTPS to the real site. What is this, and which mechanism helps prevent it?',
    'روی Wi-Fi عمومی کاربر اسم سایت را بدون https تایپ می‌کند؛ مهاجمی در میانه کاربر را روی HTTP ساده نگه می‌دارد و خودش با سایت واقعی HTTPS حرف می‌زند. این چیست و کدام سازوکار کمک می‌کند جلویش گرفته شود؟',
    'رمزگذاری «کنده» می‌شود.',
    ['SSL stripping; HSTS','DNS poisoning; DNSSEC','Credential replay; Kerberos','Browser-based on-path; a host firewall'],
    ['SSL stripping؛ HSTS','DNS poisoning؛ DNSSEC','Credential replay؛ Kerberos','On-path مبتنی بر مرورگر؛ فایروال میزبان'],
    'SSL stripping is an on-path attack that downgrades the user to HTTP. HSTS tells browsers to use only HTTPS for the site (after the first visit). A browser-based on-path attack needs a Trojan in the browser and is stopped by endpoint security.',
    'SSL stripping یک حمله‌ی On-path است که کاربر را به HTTP پایین می‌آورد. HSTS به مرورگر می‌گوید برای آن سایت فقط HTTPS استفاده کند (بعد از اولین بازدید). حمله‌ی On-path مبتنی بر مرورگر یک تروجان در مرورگر لازم دارد و با امنیت Endpoint متوقف می‌شود.');

  M(T5,'A packet capture shows thousands of SYN packets to a web server from many sources, with no ACK completing the handshakes. What is happening?',
    'یک ضبط بسته هزاران بسته‌ی SYN از مبدأهای مختلف به یک وب‌سرور نشان می‌دهد که هیچ ACK‌ای دست‌دادن را کامل نمی‌کند. چه اتفاقی می‌افتد؟',
    'مرحله‌ی اول دست‌دادن سه‌طرفه، بدون ادامه.',
    ['A protocol-based DDoS (SYN flood)','A UDP flood','A credential replay attack','DNS amplification'],
    ['DDoS مبتنی بر پروتکل (SYN flood)','UDP flood','حمله‌ی Credential replay','DNS amplification'],
    'A SYN flood sends the first step of the TCP handshake and never answers the SYN-ACK, exhausting the server\'s connection resources. UDP and ICMP floods are volume-based; amplification uses large responses from third-party servers.',
    'SYN flood فقط قدم اول دست‌دادن TCP را می‌فرستد و هرگز به SYN-ACK جواب نمی‌دهد تا منابع اتصال سرور تمام شود. UDP flood و ICMP flood حجمی‌اند و Amplification از پاسخ‌های بزرگ سرورهای دیگر استفاده می‌کند.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['12']={t:['Network security','امنیت شبکه'],b:[
    PP('Matched to Chapter 12 of the course textbook. These are short review notes in our own words; read the chapter itself for the full explanation. Secure protocols are also practiced in the Security+ course, section 10.',
      'این بخش با فصل ۱۲ کتاب درس جور است. این‌ها یادداشت‌های کوتاه مرور به زبان خودمان است؛ توضیح کامل را در خود کتاب بخوان. پروتکل‌های امن در بخش ۱۰ دوره‌ی Security+ هم تمرین شده‌اند.'),

    H('Design ideas','ایده‌های طراحی'),
    L([['Attack surface = every point an attacker could use. Security zones = segments split by trust or data sensitivity (guest, screened subnet/DMZ, management VLAN).','سطح حمله = هر نقطه‌ای که مهاجم بتواند از آن استفاده کند. ناحیه‌های امنیتی = بخش‌هایی که بر اساس اعتماد یا حساسیت داده جدا شده‌اند (مهمان، Screened subnet/DMZ، VLAN مدیریت).'],
       ['Fail-open = traffic passes when the device dies (availability). Fail-closed = traffic stops (security).','Fail-open = با خرابی دستگاه ترافیک رد می‌شود (دسترس‌پذیری). Fail-closed = ترافیک قطع می‌شود (امنیت).'],
       ['Inline = traffic goes through the device (can block, can fail). Tap/monitor = copy of traffic (cannot block). Active tap needs power; passive does not cut traffic on power loss.','Inline = ترافیک از دستگاه رد می‌شود (می‌تواند بلاک کند، می‌تواند خراب شود). Tap/Monitor = کپی ترافیک (نمی‌تواند بلاک کند). Tap فعال برق لازم دارد؛ غیرفعال با قطع برق ترافیک را قطع نمی‌کند.'],
       ['Air gap = physical isolation. VLAN = logical segmentation. SDN = central software control of the network.','Air gap = جداسازی فیزیکی. VLAN = بخش‌بندی منطقی. SDN = کنترل نرم‌افزاری و مرکزی شبکه.'],
       ['SD-WAN = virtual WAN over MPLS/broadband/5G. SASE = SD-WAN + VPN + cloud security (CASB, firewall, zero trust).','SD-WAN = WAN مجازی روی MPLS/پهن‌باند/5G. SASE = SD-WAN + VPN + امنیت ابری (CASB، فایروال، Zero Trust).']]),

    H('Zero trust parts','اجزای Zero Trust'),
    TB([['Plane','لایه'],['Part','جزء'],['Role','نقش']],[
      [['Control','Control'],['Policy Engine','Policy Engine'],['Decides grant/deny/revoke','تصمیم به دادن/رد/لغو دسترسی']],
      [['Control','Control'],['Policy Administrator','Policy Administrator'],['Opens/closes the path, issues session tokens','باز و بستن مسیر، صدور توکن جلسه']],
      [['Control','Control'],['Adaptive identity','Adaptive identity'],['Context-based authentication','احراز هویت بر اساس زمینه']],
      [['Control','Control'],['Threat scope reduction','Threat scope reduction'],['Least privilege, identity-based segments','حداقل دسترسی، بخش‌بندی بر اساس هویت']],
      [['Data','Data'],['Policy Enforcement Point','Policy Enforcement Point'],['Gatekeeper in the traffic path','دروازه‌بان در مسیر ترافیک']],
      [['Data','Data'],['Subject/system','Subject/System'],['User or device asking for access','کاربر یا دستگاه درخواست‌کننده']],
      [['Data','Data'],['Implicit trust zone','Implicit trust zone'],['Area trusted after the PEP lets you in','ناحیه‌ای که بعد از عبور از PEP مورد اعتماد است']]]),

    H('Access control on the LAN and VPNs','کنترل دسترسی در شبکه‌ی محلی و VPN'),
    L([['NAC: agent-based (more detail) or agentless (lighter); preadmission or postadmission; failures go to quarantine.','NAC: با Agent (جزئیات بیشتر) یا بدون Agent (سبک‌تر)؛ قبل یا بعد از ورود؛ موارد رد‌شده به قرنطینه می‌روند.'],
       ['802.1X: supplicant → authenticator (switch/AP) → authentication server (RADIUS) using EAP.','802.1X: Supplicant ← Authenticator (سوئیچ/AP) ← سرور احراز هویت (RADIUS) با EAP.'],
       ['Switch protections: port security (MAC limits), loop prevention/STP, BPDU Guard, storm control, DHCP snooping.','محافظت‌های سوئیچ: Port security (محدودیت MAC)، جلوگیری از Loop/STP، BPDU Guard، Storm control، DHCP snooping.'],
       ['IPSec VPN: layer 3, needs a client, common for site-to-site. TLS (SSL) VPN: often clientless via browser, granular app access.','VPN با IPSec: لایه‌ی ۳، کلاینت لازم دارد، رایج برای سایت‌به‌سایت. VPN با TLS (SSL): اغلب بدون کلاینت و با مرورگر، دسترسی جزئی به برنامه‌ها.'],
       ['IPSec: AH = integrity/authentication, no encryption. ESP = encryption; transport mode = payload, tunnel mode = whole packet. IKE sets up SAs.','IPSec: AH = یکپارچگی/احراز، بدون رمز. ESP = رمزگذاری؛ Transport = فقط Payload، Tunnel = کل بسته. IKE، SA را برقرار می‌کند.'],
       ['Full tunnel = all traffic in the VPN (safer on untrusted Wi-Fi). Split tunnel = only company traffic.','Full tunnel = همه‌ی ترافیک در VPN (روی Wi-Fi نامطمئن امن‌تر). Split tunnel = فقط ترافیک شرکت.']]),

    H('Appliances','دستگاه‌ها'),
    TB([['Device','دستگاه'],['Key point','نکته‌ی اصلی']],[
      [['Jump server','Jump server'],['Hardened, logged hop into a secure zone','پرش امن و لاگ‌دار به ناحیه‌ی امن']],
      [['Load balancer','Load balancer'],['VIP; round-robin, least connection, weighted, source IP hash; persistence = sticky sessions','VIP؛ Round-robin، Least connection، Weighted، Source IP hash؛ Persistence = جلسه‌ی چسبنده']],
      [['Forward proxy','Forward proxy'],['Clients out to servers; hides clients, filters, caches','از کاربر به سرور؛ کاربر را پنهان، فیلتر و Cache می‌کند']],
      [['Reverse proxy','Reverse proxy'],['In front of servers; load balancing and caching','جلوی سرورها؛ توزیع بار و Cache']],
      [['Web filter','Web filter'],['Centralized proxy or agent; URL scanning, categories, block rules, reputation','پروکسی مرکزی یا Agent؛ اسکن URL، دسته‌بندی، قوانین بلاک، اعتبار']],
      [['IDS / IPS','IDS / IPS'],['Signature or anomaly; IPS must be inline to block','امضا یا ناهنجاری؛ IPS برای بلاک باید Inline باشد']],
      [['NGFW','NGFW'],['Layer 4 + layer 7 (app aware); fast, needs expertise','لایه‌ی ۴ + لایه‌ی ۷ (آگاه از برنامه)؛ سریع، تخصص لازم دارد']],
      [['UTM','UTM'],['Many functions in one box; easy for small/mid orgs','چند کارکرد در یک دستگاه؛ مناسب سازمان کوچک و متوسط']],
      [['WAF','WAF'],['Firewall + IPS for web apps','فایروال + IPS برای برنامه‌های وب']]]),
    L([['Stateless firewall = checks each packet. Stateful = tracks connections in a state table.','فایروال Stateless = هر بسته را جدا بررسی می‌کند. Stateful = اتصال‌ها را در جدول حالت دنبال می‌کند.'],
       ['Screened subnet = firewall with three interfaces: Internet, private network, public zone (DMZ).','Screened subnet = فایروال با سه رابط: اینترنت، شبکه‌ی خصوصی، ناحیه‌ی عمومی (DMZ).'],
       ['Deception: honeypot (fake system), honeynet (fake network), honeyfile (bait file), honeytoken (bait data).','فریب: Honeypot (سیستم ساختگی)، Honeynet (شبکه‌ی ساختگی)، Honeyfile (فایل طعمه)، Honeytoken (داده‌ی طعمه).']]),

    H('Secure protocols and ports','پروتکل‌های امن و پورت‌ها'),
    TB([['Insecure','ناامن'],['Secure','امن'],['Port','پورت']],[
      [['Telnet 23','Telnet 23'],['SSH','SSH'],['22','22']],
      [['FTP 21','FTP 21'],['SFTP (over SSH) / FTPS','SFTP (روی SSH) / FTPS'],['22 / 990 or 21','22 / 990 یا 21']],
      [['HTTP 80','HTTP 80'],['HTTPS','HTTPS'],['443','443']],
      [['IMAP 143','IMAP 143'],['IMAPS','IMAPS'],['993','993']],
      [['POP3 110','POP3 110'],['POP3S','POP3S'],['995','995']],
      [['LDAP 389','LDAP 389'],['LDAPS','LDAPS'],['636','636']],
      [['DNS 53','DNS 53'],['DNSSEC (signatures, no encryption)','DNSSEC (امضا، بدون رمزگذاری)'],['53','53']],
      [['SNMP 161/162','SNMP 161/162'],['SNMPv3 (authPriv encrypts)','SNMPv3 (authPriv رمز می‌کند)'],['161/162','161/162']],
      [['RTP','RTP'],['SRTP','SRTP'],['—','—']]]),
    L([['No secure version: DHCP, BGP (and NTP has the rarely used NTS). SMTP has no widely used secure version; use S/MIME for message encryption.','بدون نسخه‌ی امن: DHCP، BGP (و NTP فقط NTS کم‌استفاده را دارد). SMTP نسخه‌ی امن رایج ندارد؛ برای رمز کردن پیام از S/MIME استفاده کن.'],
       ['Email authentication: SPF (allowed senders), DKIM (signature), DMARC (policy + reports; start with none). Email gateway filters in and out.','احراز ایمیل: SPF (فرستنده‌های مجاز)، DKIM (امضا)، DMARC (سیاست + گزارش؛ با none شروع کن). Email gateway ورودی و خروجی را فیلتر می‌کند.'],
       ['Ephemeral Diffie–Hellman keys in TLS give perfect forward secrecy.','کلیدهای موقت Diffie–Hellman در TLS، Perfect forward secrecy می‌دهند.'],
       ['Out-of-band management = separate VLAN or network for device admin interfaces.','مدیریت Out-of-band = VLAN یا شبکه‌ی جدا برای رابط مدیریت دستگاه‌ها.']]),

    H('Attacks and their indicators','حمله‌ها و نشانه‌هایشان'),
    TB([['Attack','حمله'],['Indicator / defense','نشانه / دفاع']],[
      [['On-path (incl. SSL stripping)','On-path (از جمله SSL stripping)'],['Changed gateway or routes, compromised router; HSTS, full HTTPS','Gateway یا مسیر تغییرکرده، روتر هک‌شده؛ HSTS و HTTPS کامل']],
      [['Browser-based on-path','On-path مبتنی بر مرورگر'],['Trojan/plug-in in the browser; antimalware','تروجان/افزونه در مرورگر؛ ضدبدافزار']],
      [['Domain hijacking','Domain hijacking'],['Registration changed; registrar locks and monitoring','ثبت دامنه تغییر کرده؛ قفل و پایش نزد ثبت‌کننده']],
      [['DNS poisoning','DNS poisoning'],['Wrong answers or cache; DNSSEC','پاسخ یا Cache اشتباه؛ DNSSEC']],
      [['URL redirection','URL redirection'],['Modified hosts file','فایل hosts تغییرکرده']],
      [['Credential replay','Credential replay'],['Captured hashes re-sent; on-path signs; session IDs and encryption','هش ضبط‌شده دوباره فرستاده می‌شود؛ نشانه‌های On-path؛ شناسه‌ی جلسه و رمزگذاری']],
      [['Malicious code (worms)','کد مخرب (کرم‌ها)'],['IDS/IPS signatures, scanning on worm ports','امضای IDS/IPS، اسکن روی پورت‌های کرم']],
      [['DDoS','DDoS'],['Volume (UDP/ICMP flood), protocol (SYN flood), reflected, amplified; ISP DDoS protection','حجمی (UDP/ICMP)، پروتکلی (SYN flood)، Reflected، Amplified؛ محافظت DDoS از ISP']]]),

    TT('Exam shortcut: Policy Engine decides, Policy Administrator executes, PEP enforces. NGFW = faster and focused; UTM = all-in-one for smaller orgs. DNSSEC signs but does not encrypt. DHCP has no secure version.',
      'نکته‌ی امتحان: Policy Engine تصمیم می‌گیرد، Policy Administrator اجرا می‌کند، PEP اعمال می‌کند. NGFW = سریع‌تر و متمرکز؛ UTM = همه‌چیز در یک دستگاه برای سازمان کوچک‌تر. DNSSEC امضا می‌کند ولی رمز نمی‌کند. DHCP نسخه‌ی امن ندارد.')
  ]};
})();
