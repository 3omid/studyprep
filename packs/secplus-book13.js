/* Security+ extension: Section B13, matched to Chapter 13 ("Wireless and Mobile Security") of the course
   textbook (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written
   for the chapter's objectives (2.3, 3.3, 4.1); no text from the book is copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secbook'});
  if(!pack)return;
  pack.sections['13']={en:'Wireless & mobile security',fa:'امنیت بی‌سیم و موبایل'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b13_'+(++n),sec:'13',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Connection methods',T2='Wireless attacks',T3='Wi-Fi design & security',T4='Mobile deployment',T5='MDM controls';

  /* ---- Connection methods ---- */
  M(T1,'Field staff send company data over their phones\' 5G connection. How should the security team treat that path?',
    'کارمندان میدانی داده‌ی شرکت را از اتصال 5G گوشی‌شان می‌فرستند. تیم امنیت با این مسیر چطور باید رفتار کند؟',
    'شبکه مال چه کسی است؟',
    ['As an outside network, so protect the traffic','As part of the internal corporate network','As an air-gapped link with no exposure','As a private link that the company controls'],
    ['مثل یک شبکه‌ی بیرونی، پس ترافیک را محافظت کن','مثل بخشی از شبکه‌ی داخلی شرکت','مثل یک لینک Air-gapped بدون در معرض بودن','مثل یک لینک خصوصی که شرکت کنترلش می‌کند'],
    'Cellular networks are run by carriers, not the organization, so traffic crosses a third-party network and should be treated like any external connection.',
    'شبکه‌ی سلولی را اپراتور اداره می‌کند نه سازمان، پس ترافیک از شبکه‌ی شخص ثالث رد می‌شود و باید مثل هر اتصال بیرونی با آن رفتار کرد.');

  M(T1,'Which Bluetooth security mode offers no security at all?',
    'کدام حالت امنیتی بلوتوث هیچ امنیتی ندارد؟',
    'اولین حالت.',
    ['Security Mode 1','Security Mode 2','Security Mode 3','Security Mode 4'],
    ['Security Mode 1','Security Mode 2 (در سطح سرویس)','Security Mode 3 (در سطح لینک)','Security Mode 4 (Secure Simple Pairing)'],
    'Mode 1 = no security; Mode 2 = service-level enforced; Mode 3 = link-level enforced; Mode 4 = standard pairing with Secure Simple Pairing (SSP).',
    'Mode 1 = بدون امنیت؛ Mode 2 = اعمال در سطح سرویس؛ Mode 3 = اعمال در سطح لینک؛ Mode 4 = جفت‌سازی استاندارد با SSP.');

  M(T1,'A warehouse wants tags it can read from several meters away, quickly, for inventory. Which RFID type fits?',
    'یک انبار برچسب‌هایی می‌خواهد که از چند متری و سریع برای انبارداری خوانده شوند. کدام نوع RFID مناسب است؟',
    'بیشترین برد و سرعت.',
    ['Ultra-high-frequency (UHF) RFID','Low-frequency (LF) RFID','NFC tags read at a counter','Infrared barcode scanners'],
    ['RFID با فرکانس خیلی بالا (UHF)','RFID با فرکانس پایین (LF)','برچسب NFC که کنار پیشخوان خوانده می‌شود','بارکدخوان مادون قرمز'],
    'UHF RFID is the fastest to read and has the longest range. Low-frequency tags are short range, common for door access. High-frequency (up to about a meter) underlies NFC, which is limited to a few centimeters.',
    'RFID با فرکانس UHF سریع‌ترین خواندن و بیشترین برد را دارد. برچسب فرکانس پایین برد کمی دارد و برای کارت ورود رایج است. فرکانس بالا (تا حدود یک متر) پایه‌ی NFC است که فقط چند سانتی‌متر برد دارد.');

  /* ---- Wireless attacks ---- */
  M(T2,'In a café, an attacker sets up an access point with the same SSID as the café\'s network and a stronger signal, then captures logins. What is this?',
    'در یک کافه، مهاجمی یک Access point با همان SSID شبکه‌ی کافه و سیگنال قوی‌تر راه می‌اندازد و اطلاعات ورود را می‌دزدد. این چیست؟',
    'شبکه‌ای که خودش را جای شبکه‌ی واقعی جا می‌زند.',
    ['An evil twin','A rogue access point','Bluejacking','Jamming'],
    ['Evil twin','Rogue access point','Bluejacking','Jamming (پارازیت)'],
    'An evil twin imitates a trusted network so clients connect to it; the attacker often provides Internet access so victims do not notice. A rogue AP is any unauthorized AP connected to your network, intentional or not.',
    'Evil twin خودش را جای یک شبکه‌ی مورد اعتماد جا می‌زند تا دستگاه‌ها به آن وصل شوند؛ مهاجم معمولاً اینترنت هم می‌دهد تا قربانی متوجه نشود. Rogue AP هر Access point غیرمجازی است که به شبکه‌ی شما وصل شده، عمدی یا غیرعمدی.');

  M(T2,'An attacker spoofs a laptop\'s MAC address and sends management frames that kick it off the WPA2 network, hoping it reconnects to an evil twin. Which WPA3 feature blocks this?',
    'مهاجمی MAC یک لپ‌تاپ را جعل می‌کند و فریم مدیریتی می‌فرستد که آن را از شبکه‌ی WPA2 بیرون می‌اندازد، به امید اینکه به Evil twin وصل شود. کدام ویژگی WPA3 جلوی این را می‌گیرد؟',
    'فریم‌های مدیریتی را محافظت کن.',
    ['Protected management frames','SAE','Opportunistic wireless encryption','CCMP'],
    ['Protected management frames (فریم‌های مدیریتی محافظت‌شده)','SAE','OWE','CCMP'],
    'This is a deauthentication (disassociation) attack. WPA2 often leaves management frames unprotected; WPA3 requires protected management frames, so forged deauth frames are rejected. A deauther is not a jammer: jamming floods the frequency with noise.',
    'این حمله‌ی Deauthentication (قطع اتصال) است. WPA2 اغلب فریم‌های مدیریتی را محافظت نمی‌کند؛ WPA3 فریم‌های مدیریتی محافظت‌شده را الزامی می‌کند، پس فریم جعلی رد می‌شود. Deauther با Jammer فرق دارد: Jamming فرکانس را با نویز پر می‌کند.');

  M(T2,'A stranger sends unsolicited messages to nearby phones over Bluetooth, but takes no data. What is this?',
    'یک غریبه از طریق بلوتوث پیام ناخواسته به گوشی‌های نزدیک می‌فرستد ولی داده‌ای برنمی‌دارد. این چیست؟',
    'فقط پیام فرستادن.',
    ['Bluejacking','Bluesnarfing','Bluetooth impersonation attack','Evil twin'],
    ['Bluejacking','Bluesnarfing','حمله‌ی جعل هویت بلوتوث (BIA)','Evil twin'],
    'Bluejacking = sending unsolicited messages. Bluesnarfing = unauthorized access to data such as contacts. The best Bluetooth defense: keep it off when not needed, change default pairing codes, and patch.',
    'Bluejacking = فرستادن پیام ناخواسته. Bluesnarfing = دسترسی غیرمجاز به داده‌هایی مثل مخاطبین. بهترین دفاع بلوتوث: وقتی لازم نیست خاموش باشد، کد جفت‌سازی پیش‌فرض عوض شود و وصله نصب شود.');

  M(T2,'An employee uses an OS vulnerability to get root on their iPhone so they can change hidden settings. What is this?',
    'کارمندی با یک آسیب‌پذیری سیستم‌عامل روی آیفونش دسترسی Root می‌گیرد تا تنظیمات پنهان را عوض کند. این چیست؟',
    'ارتقای دسترسی روی خود دستگاه.',
    ['Jailbreaking','Sideloading','Containerization','Geofencing'],
    ['Jailbreak','Sideloading','Containerization','Geofencing'],
    'Jailbreaking exploits weaknesses to escalate privileges and bypass the device\'s security model. Sideloading only means installing apps from outside the official store (USB, microSD, Bluetooth) and does not by itself require root. MDM can detect both.',
    'Jailbreak با سوءاستفاده از ضعف‌ها دسترسی را بالا می‌برد و مدل امنیتی دستگاه را دور می‌زند. Sideloading فقط یعنی نصب برنامه از بیرون فروشگاه رسمی (USB، microSD، بلوتوث) و خودش Root لازم ندارد. MDM هر دو را می‌تواند تشخیص دهد.');

  /* ---- Wi-Fi design & security ---- */
  M(T3,'Before installing access points in an existing building, an engineer walks the floors with a tool recording signal strength and nearby networks. What is this, and what does it produce?',
    'قبل از نصب Access point در یک ساختمان موجود، مهندسی با ابزاری که قدرت سیگنال و شبکه‌های اطراف را ثبت می‌کند طبقه‌ها را قدم می‌زند. این چیست و چه چیزی تولید می‌کند؟',
    'نقشه‌ی رنگی قدرت سیگنال.',
    ['A site survey, producing a heat map','A penetration test, producing a report of exploits','A channel bonding test, producing an SSID list','A war-driving attack, producing PSKs'],
    ['Site survey که Heat map تولید می‌کند','تست نفوذ که گزارش سوءاستفاده تولید می‌کند','تست Channel bonding که فهرست SSID تولید می‌کند','حمله‌ی War-driving که PSK تولید می‌کند'],
    'A site survey maps existing networks, signal strength, channels and building effects; the result is shown as a heat map that guides AP placement and channel choice.',
    'Site survey شبکه‌های موجود، قدرت سیگنال، کانال‌ها و اثر ساختمان را نقشه‌برداری می‌کند؛ نتیجه به شکل Heat map نشان داده می‌شود که برای جای AP و انتخاب کانال راهنماست.');

  M(T3,'Which set of 2.4 GHz channels avoids overlap in North America?',
    'کدام مجموعه از کانال‌های 2.4 GHz در آمریکای شمالی با هم هم‌پوشانی ندارند؟',
    'سه کانال با فاصله‌ی پنج‌تایی.',
    ['1, 6 and 11','1, 2 and 3','4, 8 and 12','2, 7 and 13'],
    ['1، 6 و 11','1، 2 و 3','4، 8 و 12','2، 7 و 13'],
    'Each 2.4 GHz channel is 20 MHz wide with only 5 MHz between centers, so neighbors overlap. Channels 1, 6 and 11 do not. Channels 12 and 13 are not used in the US.',
    'هر کانال 2.4 GHz بیست مگاهرتز پهنا دارد ولی مرکزها فقط ۵ مگاهرتز فاصله دارند، پس کانال‌های کنار هم هم‌پوشانی دارند. کانال‌های 1، 6 و 11 ندارند. کانال 12 و 13 در آمریکا استفاده نمی‌شوند.');

  M(T3,'Which WPA3-Personal feature replaces the WPA2 pre-shared key exchange and makes offline brute-forcing of weak passwords much harder?',
    'کدام ویژگی WPA3-Personal جای تبادل کلید از پیش مشترک WPA2 را می‌گیرد و حدس زدن آفلاین رمزهای ضعیف را خیلی سخت‌تر می‌کند؟',
    'دو طرف «برابر» احراز می‌شوند.',
    ['SAE (Simultaneous Authentication of Equals)','CCMP (Counter Mode CBC-MAC Protocol)','TKIP (Temporal Key Integrity Protocol)','WPS (Wi-Fi Protected Setup) PIN pairing'],
    ['SAE','CCMP','TKIP','WPS (اتصال با PIN)'],
    'SAE requires interaction between client and network to validate both sides, which slows brute force, and it provides perfect forward secrecy. CCMP is WPA2\'s AES-based encryption protocol.',
    'SAE برای تأیید هر دو طرف تعامل بین کلاینت و شبکه لازم دارد که حدس زدن را کند می‌کند، و Perfect forward secrecy هم می‌دهد. CCMP پروتکل رمزگذاری مبتنی بر AES در WPA2 است.');

  M(T3,'A university wants each user to log in to Wi-Fi with their own account, checked by a central server. Which setup fits?',
    'یک دانشگاه می‌خواهد هر کاربر با حساب خودش وارد Wi-Fi شود و یک سرور مرکزی آن را بررسی کند. کدام تنظیم مناسب است؟',
    'حالت Enterprise.',
    ['WPA3-Enterprise with 802.1X and RADIUS','WPA3-Personal with SAE','An open network with a captive portal','WPA2-PSK with a long passphrase'],
    ['WPA3-Enterprise با 802.1X و RADIUS','WPA3-Personal با SAE','شبکه‌ی باز با Captive portal','WPA2-PSK با رمز طولانی'],
    'Enterprise mode uses 802.1X with a RADIUS server and an EAP method, so users have unique credentials. PSK and SAE share one passphrase. RADIUS servers can be federated, as in eduroam.',
    'حالت Enterprise از 802.1X با سرور RADIUS و یک روش EAP استفاده می‌کند، پس هر کاربر اعتبارنامه‌ی خودش را دارد. PSK و SAE یک رمز مشترک دارند. سرورهای RADIUS می‌توانند فدره شوند، مثل eduroam.');

  M(T3,'Which EAP method requires certificates on both the client and the server for mutual authentication, which makes it harder to manage at scale?',
    'کدام روش EAP برای احراز هویت دوطرفه روی هم کلاینت و هم سرور گواهی لازم دارد و مدیریتش در مقیاس بزرگ سخت‌تر است؟',
    'TLS خالص.',
    ['EAP-TLS','EAP-TTLS','PEAP','EAP-FAST'],
    ['EAP-TLS','EAP-TTLS','PEAP','EAP-FAST'],
    'EAP-TLS uses certificates on both sides. EAP-TTLS and PEAP need only a server certificate and tunnel the client login in TLS (TTLS may need extra client software). EAP-FAST is Cisco\'s protocol for fast reauthentication with shared secrets.',
    'EAP-TLS در هر دو طرف گواهی دارد. EAP-TTLS و PEAP فقط گواهی سرور لازم دارند و ورود کلاینت را در تونل TLS می‌برند (TTLS شاید نرم‌افزار اضافه روی کلاینت بخواهد). EAP-FAST پروتکل سیسکو برای احراز سریع دوباره با کلید مشترک است.');

  M(T3,'A hotel wants guests to enter their email address before getting online, without giving out a Wi-Fi password. What should it use?',
    'یک هتل می‌خواهد مهمان‌ها قبل از وصل شدن آدرس ایمیلشان را وارد کنند، بدون اینکه رمز Wi-Fi داده شود. از چه استفاده کند؟',
    'صفحه‌ی ثبت‌نام قبل از اینترنت.',
    ['A captive portal on an open network','WPA2-PSK with a shared guest password','EAP-TLS with a certificate per guest','WPS push-button pairing in each room'],
    ['Captive Portal روی شبکه‌ی باز','WPA2-PSK با یک رمز مهمان مشترک','EAP-TLS با یک گواهی برای هر مهمان','اتصال دکمه‌ای WPS در هر اتاق'],
    'A captive portal redirects new users to a web page before granting access. Open networks are unencrypted unless Wi-Fi Enhanced Open (OWE) is used, so traffic should rely on HTTPS.',
    'Captive portal کاربر جدید را قبل از دادن دسترسی به یک صفحه‌ی وب می‌برد. شبکه‌ی باز رمزگذاری ندارد مگر اینکه Wi-Fi Enhanced Open (OWE) استفاده شود، پس ترافیک باید به HTTPS تکیه کند.');

  /* ---- Mobile deployment ---- */
  M(T4,'The company buys and manages phones but lets staff use them for reasonable personal use so they need only one phone. Which model is this?',
    'شرکت گوشی‌ها را می‌خرد و مدیریت می‌کند ولی اجازه می‌دهد کارمندان استفاده‌ی شخصی معقول داشته باشند تا فقط یک گوشی لازم باشد. این کدام مدل است؟',
    'مال شرکت، با اجازه‌ی استفاده‌ی شخصی.',
    ['COPE','BYOD','CYOD','COBO'],
    ['COPE','BYOD','CYOD','COBO'],
    'COPE = corporate-owned, personally enabled. BYOD = the user owns and manages the device (least control). CYOD = the user picks from a company list and the company owns it. COBO / corporate-owned = business use only (most control).',
    'COPE = مال شرکت، با اجازه‌ی استفاده‌ی شخصی. BYOD = کاربر صاحب و مدیر دستگاه است (کمترین کنترل). CYOD = کاربر از فهرست شرکت انتخاب می‌کند و دستگاه مال شرکت است. COBO / کاملاً شرکتی = فقط کار (بیشترین کنترل).');

  M(T4,'Staff use their own phones (BYOD). The company must keep work email and files apart from personal apps and be able to wipe only the work data. Which technology fits best?',
    'کارمندان از گوشی خودشان استفاده می‌کنند (BYOD). شرکت باید ایمیل و فایل‌های کاری را از برنامه‌های شخصی جدا نگه دارد و فقط داده‌ی کاری را پاک کند. کدام فناوری مناسب‌تر است؟',
    'یک «جعبه‌ی» جدا برای کار.',
    ['Containerization','Full-device encryption','Context-aware authentication','Geolocation'],
    ['Containerization','رمزگذاری کامل دستگاه','احراز هویت آگاه از زمینه','Geolocation'],
    'A secure container runs work apps and stores work data separately, and a selective wipe can remove only the container. Storage segmentation is the related idea of separate (often encrypted) storage areas.',
    'Container امن برنامه‌ها و داده‌های کاری را جدا اجرا و ذخیره می‌کند و پاک‌سازی انتخابی فقط همان را پاک می‌کند. Storage segmentation ایده‌ی مرتبط جدا کردن فضای ذخیره (اغلب رمزشده) است.');

  /* ---- MDM controls ---- */
  M(T5,'Factory tablets must stop working with company data when carried outside the plant. Which MDM feature fits?',
    'تبلت‌های کارخانه وقتی از کارخانه بیرون برده می‌شوند نباید با داده‌ی شرکت کار کنند. کدام ویژگی MDM مناسب است؟',
    'یک «حصار» مجازی دور مکان.',
    ['Geofencing','Push notifications','Remote wipe confirmation','Biometrics'],
    ['Geofencing','Push notification','تأیید پاک‌سازی از راه دور','بیومتریک'],
    'Geofencing uses the device location (from GPS, Wi-Fi, Bluetooth, cellular) to allow or block actions inside or outside a defined area. Geolocation alone only finds where the device is.',
    'Geofencing با موقعیت دستگاه (از GPS، Wi-Fi، بلوتوث، شبکه‌ی سلولی) کارها را داخل یا بیرون یک محدوده اجازه می‌دهد یا می‌بندد. Geolocation به‌تنهایی فقط محل دستگاه را پیدا می‌کند.');

  M(T5,'A stolen phone is immediately put in airplane mode inside an RF-blocking bag, so remote wipe never arrives. What protects the data now?',
    'یک گوشی دزدیده‌شده بلافاصله در حالت پرواز و داخل کیسه‌ی ضدسیگنال گذاشته می‌شود، پس دستور پاک‌سازی از راه دور هیچ‌وقت نمی‌رسد. حالا چه چیزی از داده محافظت می‌کند؟',
    'چیزی که روی خود دستگاه است و به شبکه نیاز ندارد.',
    ['Full-device encryption with a strong passcode','Geofencing that locks it outside the office','Push notifications that warn the user','Application management of company apps'],
    ['رمزگذاری کامل دستگاه با رمز قوی','Geofencing که بیرون از اداره قفلش می‌کند','Push Notification که به کاربر هشدار می‌دهد','مدیریت برنامه‌های شرکت'],
    'Remote wipe needs a network connection. Encryption plus strong authentication works offline, which is why FDE and remote wipe are recommended together.',
    'پاک‌سازی از راه دور اتصال شبکه لازم دارد. رمزگذاری همراه با احراز هویت قوی بدون شبکه هم کار می‌کند؛ برای همین FDE و Remote wipe با هم پیشنهاد می‌شوند.');

  M(T5,'A defense contractor uses MDM to turn off GPS tagging on photos taken inside its sites. What is the main concern?',
    'یک پیمانکار نظامی با MDM برچسب GPS عکس‌هایی را که داخل سایت‌هایش گرفته می‌شود خاموش می‌کند. نگرانی اصلی چیست؟',
    'عکس نباید محل را لو بدهد.',
    ['Privacy and leaked location data','Battery life on employee phones','Chain of custody for the photos','Geofencing accuracy near the site'],
    ['حریم خصوصی و لو رفتن موقعیت','عمر باتری گوشی کارمندان','زنجیره‌ی نگهداری عکس‌ها','دقت Geofencing نزدیک سایت'],
    'GPS tags embed where a photo or file was made, which can reveal sensitive locations (like the fitness tracker story in the book). MDM can also block cameras, microphones, SMS/MMS/RCS, USB OTG, tethering and hotspots.',
    'برچسب GPS محل گرفتن عکس یا ساخت فایل را داخلش می‌گذارد و ممکن است مکان‌های حساس را لو بدهد (مثل داستان ردیاب ورزشی در کتاب). MDM می‌تواند دوربین، میکروفون، SMS/MMS/RCS، USB OTG، Tethering و Hotspot را هم ببندد.');

  M(T5,'Which tool manages phones, tablets, laptops and desktops from a single platform?',
    'کدام ابزار گوشی، تبلت، لپ‌تاپ و دسکتاپ را از یک پلتفرم مدیریت می‌کند؟',
    'مدیریت «یکپارچه».',
    ['UEM (unified endpoint management)','MDM that covers phones only','MAM (mobile application management)','A CIS benchmark for each device type'],
    ['UEM (مدیریت یکپارچه‌ی Endpoint)','MDM که فقط گوشی را پوشش می‌دهد','MAM (مدیریت برنامه‌های موبایل)','بنچمارک CIS برای هر نوع دستگاه'],
    'MDM targets mobile devices; UEM covers mobile devices, desktops, laptops and more in one platform; MAM focuses on managing apps. CIS benchmarks are hardening guides (including iOS and Android), not management tools.',
    'MDM برای دستگاه‌های موبایل است؛ UEM موبایل، دسکتاپ، لپ‌تاپ و بیشتر را در یک پلتفرم پوشش می‌دهد؛ MAM روی مدیریت برنامه‌ها تمرکز دارد. بنچمارک‌های CIS راهنمای Hardening هستند (از جمله iOS و Android)، نه ابزار مدیریت.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['13']={t:['Wireless & mobile security','امنیت بی‌سیم و موبایل'],b:[
    PP('Matched to Chapter 13 of the course textbook. These are short review notes in our own words; read the chapter itself for the full explanation. Mobile devices are also practiced in the Security+ course, section 8.',
      'این بخش با فصل ۱۳ کتاب درس جور است. این‌ها یادداشت‌های کوتاه مرور به زبان خودمان است؛ توضیح کامل را در خود کتاب بخوان. دستگاه‌های موبایل در بخش ۸ دوره‌ی Security+ هم تمرین شده‌اند.'),

    H('Connection methods','روش‌های اتصال'),
    L([['Cellular (4G/5G): run by a carrier, so treat it as an external network.','سلولی (4G/5G): اپراتور اداره‌اش می‌کند، پس مثل شبکه‌ی بیرونی با آن رفتار کن.'],
       ['Wi-Fi: 2.4/5/6 GHz; signal leaks outside your buildings. Ad hoc = device to device; infrastructure = through an AP.','Wi-Fi: 2.4/5/6 گیگاهرتز؛ سیگنال از ساختمان بیرون می‌رود. Ad hoc = دستگاه به دستگاه؛ Infrastructure = از طریق AP.'],
       ['Bluetooth: short range, pairing, often weak PINs (0000). Modes 1–4: none, service, link, SSP.','بلوتوث: برد کوتاه، جفت‌سازی، اغلب PIN ضعیف (0000). حالت‌های ۱ تا ۴: بدون امنیت، سرویس، لینک، SSP.'],
       ['RFID: active/semi-active/passive tags; low, high (NFC), ultra-high frequency (longest range).','RFID: برچسب فعال/نیمه‌فعال/غیرفعال؛ فرکانس پایین، بالا (NFC)، خیلی بالا (بیشترین برد).'],
       ['GPS: receive-only satellite signal; can be jammed or spoofed; used for geolocation together with Wi-Fi, Bluetooth and cellular.','GPS: فقط دریافت سیگنال ماهواره؛ قابل پارازیت یا جعل؛ همراه Wi-Fi، بلوتوث و سلولی برای موقعیت‌یابی.'],
       ['Models: point-to-point, point-to-multipoint (Wi-Fi), mesh, broadcast (GPS, radio).','مدل‌ها: نقطه‌به‌نقطه، نقطه‌به‌چندنقطه (Wi-Fi)، Mesh، Broadcast (GPS، رادیو).']]),

    H('Wireless and mobile attacks','حمله‌های بی‌سیم و موبایل'),
    TB([['Attack','حمله'],['What happens','چه اتفاقی می‌افتد']],[
      [['Evil twin','Evil twin'],['Fake AP copying a trusted SSID','AP جعلی با SSID یک شبکه‌ی مورد اعتماد']],
      [['Rogue AP','Rogue AP'],['Unauthorized AP plugged into your network','AP غیرمجاز وصل به شبکه‌ی شما']],
      [['Deauthentication','Deauthentication'],['Forged frames disconnect clients (stopped by WPA3 protected frames)','فریم جعلی کلاینت را قطع می‌کند (WPA3 با فریم محافظت‌شده جلویش را می‌گیرد)']],
      [['Jamming','Jamming'],['Noise blocks the frequency','نویز فرکانس را مسدود می‌کند']],
      [['Bluejacking','Bluejacking'],['Unsolicited messages','پیام ناخواسته']],
      [['Bluesnarfing','Bluesnarfing'],['Data theft (contacts, etc.)','دزدی داده (مخاطبین و…)']],
      [['Sideloading','Sideloading'],['Installing apps outside the official store','نصب برنامه از بیرون فروشگاه رسمی']],
      [['Jailbreaking/rooting','Jailbreak/Root'],['Privilege escalation that bypasses the OS security model','ارتقای دسترسی که مدل امنیتی سیستم‌عامل را دور می‌زند']]]),

    H('Wi-Fi design and security','طراحی و امنیت Wi-Fi'),
    L([['Site survey → heat map → AP placement and channels. Non-overlapping 2.4 GHz: 1, 6, 11.','Site survey ← Heat map ← جای AP و کانال‌ها. کانال‌های بدون هم‌پوشانی 2.4: 1، 6، 11.'],
       ['Controllers can lower AP power to cut interference and detect rogue APs.','کنترلرها می‌توانند توان AP را کم کنند تا تداخل کم شود و AP غیرمجاز را پیدا کنند.'],
       ['Secure controllers/APs like any network device: change defaults, patch, management VLAN, logging.','کنترلر و AP را مثل هر دستگاه شبکه امن کن: عوض کردن پیش‌فرض‌ها، وصله، VLAN مدیریت، لاگ.']]),
    TB([['Standard','استاندارد'],['Key features','ویژگی‌های اصلی']],[
      [['WPA2-Personal','WPA2-Personal'],['PSK, CCMP (AES)','PSK، CCMP (AES)']],
      [['WPA2-Enterprise','WPA2-Enterprise'],['802.1X + RADIUS, per-user login','802.1X + RADIUS، ورود جدا برای هر کاربر']],
      [['WPA3-Personal','WPA3-Personal'],['SAE (resists brute force), perfect forward secrecy','SAE (مقاوم در برابر حدس)، Perfect forward secrecy']],
      [['WPA3-Enterprise','WPA3-Enterprise'],['RADIUS, optional 192-bit mode, protected frames','RADIUS، حالت اختیاری ۱۹۲ بیتی، فریم‌های محافظت‌شده']],
      [['Enhanced Open','Enhanced Open'],['OWE encrypts open networks','OWE شبکه‌ی باز را رمز می‌کند']]]),
    TB([['EAP method','روش EAP'],['Certificates','گواهی‌ها'],['Note','نکته']],[
      [['EAP-TLS','EAP-TLS'],['Client + server','کلاینت + سرور'],['Strongest, hardest to manage','قوی‌ترین، سخت‌ترین مدیریت']],
      [['EAP-TTLS','EAP-TTLS'],['Server only','فقط سرور'],['May need extra client software','شاید نرم‌افزار اضافه روی کلاینت لازم باشد']],
      [['PEAP','PEAP'],['Server only','فقط سرور'],['EAP inside a TLS tunnel; built in widely','EAP داخل تونل TLS؛ در بیشتر دستگاه‌ها داخلی است']],
      [['EAP-FAST','EAP-FAST'],['Optional','اختیاری'],['Cisco; fast reauthentication while roaming','سیسکو؛ احراز سریع دوباره هنگام جابه‌جایی']]]),

    H('Mobile deployment models','مدل‌های استقرار موبایل'),
    TB([['Model','مدل'],['Owner','مالک'],['Control','کنترل']],[
      [['BYOD','BYOD'],['User','کاربر'],['Least (often only app/email wipe)','کمترین (اغلب فقط پاک کردن برنامه یا ایمیل)']],
      [['CYOD','CYOD'],['Company (user chooses from a list)','شرکت (کاربر از فهرست انتخاب می‌کند)'],['Medium','متوسط']],
      [['COPE','COPE'],['Company, personal use allowed','شرکت، با اجازه‌ی استفاده‌ی شخصی'],['High','زیاد']],
      [['Corporate-owned / COBO','کاملاً شرکتی / COBO'],['Company, business only','شرکت، فقط کار'],['Most','بیشترین']]]),

    H('MDM / UEM features','ویژگی‌های MDM / UEM'),
    L([['Application management, content management (MCM), remote wipe (full or selective).','مدیریت برنامه، مدیریت محتوا (MCM)، پاک‌سازی از راه دور (کامل یا انتخابی).'],
       ['Geolocation (where is it) and geofencing (rules by area).','Geolocation (کجاست) و Geofencing (قانون بر اساس محدوده).'],
       ['Screen lock, PIN/password rules, biometrics (fingerprint and face), context-aware authentication.','قفل صفحه، قوانین PIN/رمز، بیومتریک (اثر انگشت و چهره)، احراز هویت آگاه از زمینه.'],
       ['Containerization and storage segmentation separate work and personal data.','Containerization و Storage segmentation داده‌ی کاری و شخصی را جدا می‌کنند.'],
       ['Full-device encryption + remote wipe = best protection against a lost phone becoming a breach.','رمزگذاری کامل دستگاه + پاک‌سازی از راه دور = بهترین محافظت در برابر تبدیل گوشی گم‌شده به نشت داده.'],
       ['Push notifications; detect root/jailbreak and sideloading; control camera, mic, SMS/MMS/RCS, USB OTG, GPS tagging, tethering, hotspot, Bluetooth, NFC.','Push notification؛ تشخیص Root/Jailbreak و Sideloading؛ کنترل دوربین، میکروفون، SMS/MMS/RCS، USB OTG، برچسب GPS، Tethering، Hotspot، بلوتوث، NFC.'],
       ['Harden with CIS benchmarks for iOS and Android.','Hardening با بنچمارک‌های CIS برای iOS و Android.']]),

    TT('Exam shortcut: SAE = WPA3-Personal; RADIUS + EAP = Enterprise. EAP-TLS = certificates on both sides; TTLS/PEAP = server certificate only. Bluesnarfing steals, bluejacking messages. COPE = company phone with personal use.',
      'نکته‌ی امتحان: SAE = WPA3-Personal؛ RADIUS + EAP = Enterprise. EAP-TLS = گواهی در هر دو طرف؛ TTLS/PEAP = فقط گواهی سرور. Bluesnarfing می‌دزدد، Bluejacking پیام می‌فرستد. COPE = گوشی شرکت با استفاده‌ی شخصی.')
  ]};
})();
