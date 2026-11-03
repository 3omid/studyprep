/* Security+ extension: Section B5, matched to Chapter 5 ("Security Assessment and Testing") of the course
   textbook (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written
   for objectives 4.3, 4.4, 4.8, 5.3 and 5.5; no text or review questions from the book are copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['B5']={en:'Book Ch. 5: Assessment & testing',fa:'فصل ۵ کتاب: ارزیابی و آزمون امنیت'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b5_'+(++n),sec:'B5',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Vulnerability scanning',T2='CVSS & SCAP',T3='Vulnerability life cycle',T4='Penetration testing',T5='Audits & assessments';

  /* ---- Vulnerability scanning ---- */
  M(T1,'A scanner is given an account on each server so it can read installed patches and settings. What kind of account should it get?',
    'به یک اسکنر روی هر سرور یک حساب داده می‌شود تا وصله‌ها و تنظیمات نصب‌شده را بخواند. چه نوع حسابی باید بگیرد؟',
    'فقط خواندن لازم است.',
    ['A read-only account','A domain administrator account','The root account','A shared admin account used by staff'],
    ['یک حساب فقط‌خواندنی','حساب مدیر دامنه','حساب root','یک حساب مدیر مشترک که کارکنان هم استفاده می‌کنند'],
    'Credentialed scans only read configuration, so least privilege says read-only access is enough. Credentialed scans are more accurate than noncredentialed ones and produce fewer false positives.',
    'اسکن با اطلاعات ورود فقط تنظیمات را می‌خواند؛ پس طبق اصل حداقل دسترسی، دسترسی فقط‌خواندنی کافی است. اسکن با اطلاعات ورود دقیق‌تر از اسکن بدون آن است و هشدار اشتباه کمتری می‌دهد.');

  M(T1,'A network scan says a server "may be missing" an OS update. Which change would let the scanner confirm this with more confidence?',
    'یک اسکن شبکه می‌گوید یک سرور «ممکن است» یک آپدیت سیستم‌عامل را نداشته باشد. کدام تغییر اجازه می‌دهد اسکنر با اطمینان بیشتری تأیید کند؟',
    'از بیرون حدس می‌زند؛ از داخل می‌بیند.',
    ['Run a credentialed scan or use an agent on the server','Scan from a different country','Disable the scanner\'s plug-in updates','Scan only at night'],
    ['اسکن با اطلاعات ورود یا یک Agent روی سرور','از یک کشور دیگر اسکن کن','آپدیت افزونه‌های اسکنر را خاموش کن','فقط شب اسکن کن'],
    'Remote, noncredentialed scans can only guess at some issues. Credentialed scans and agent-based ("inside-out") scans read the real configuration, improving accuracy. Roll out agents carefully with a small pilot first.',
    'اسکن از راه دور و بدون اطلاعات ورود درباره‌ی بعضی مشکلات فقط حدس می‌زند. اسکن با اطلاعات ورود و اسکن با Agent («از داخل به بیرون») تنظیمات واقعی را می‌خوانند و دقت را بالا می‌برند. Agentها را با احتیاط و اول با یک آزمایش کوچک نصب کن.');

  M(T1,'A team wants to use plug-ins that might crash a critical production database. What is the best first step?',
    'تیمی می‌خواهد از افزونه‌هایی استفاده کند که ممکن است یک پایگاه داده‌ی حیاتی اصلی را از کار بیندازند. بهترین قدم اول چیست؟',
    'اول جایی امتحان کن که خرابی مهم نیست.',
    ['Run the scan against a test copy of the system first','Run it on production during peak hours','Never scan the database at all','Run it without telling anyone'],
    ['اول اسکن را روی یک نسخه‌ی آزمایشی از سیستم اجرا کن','روی سیستم اصلی در ساعت شلوغ اجرا کن','هیچ‌وقت پایگاه داده را اسکن نکن','بدون اطلاع به کسی اجرایش کن'],
    'Intrusive plug-ins can disrupt or damage systems. Testing in an environment that mirrors production lets you fix problems on both before scanning production. Disabling unneeded plug-ins also speeds scans and reduces false positives.',
    'افزونه‌های مزاحم (Intrusive) می‌توانند سیستم را مختل یا خراب کنند. آزمایش در محیطی شبیه سیستم اصلی اجازه می‌دهد قبل از اسکن اصلی، مشکلات هر دو را رفع کنی. خاموش کردن افزونه‌های غیرلازم هم اسکن را سریع‌تر و هشدار اشتباه را کمتر می‌کند.');

  M(T1,'A company scans its web servers from the Internet, from the office LAN and from inside the data center, and gets different results. Why?',
    'شرکتی وب‌سرورهایش را از اینترنت، از شبکه‌ی اداری و از داخل دیتاسنتر اسکن می‌کند و نتایج متفاوتی می‌گیرد. چرا؟',
    'چیزهایی بین اسکنر و هدف قرار دارند.',
    ['Firewalls, segmentation, IDS and IPS on the path change what each perspective sees','The scanner is broken','The servers change their software every hour','Only external scans are real'],
    ['فایروال، بخش‌بندی، IDS و IPS در مسیر، چیزی که هر دیدگاه می‌بیند را تغییر می‌دهند','اسکنر خراب است','سرورها هر ساعت نرم‌افزارشان را عوض می‌کنند','فقط اسکن بیرونی واقعی است'],
    'Scan perspective matters. External scans show the attacker\'s view, internal scans show an insider\'s view, and data center scans or agents show the server\'s true state. PCI DSS requires external scans by an Approved Scanning Vendor (ASV).',
    'دیدگاه اسکن مهم است. اسکن بیرونی دید مهاجم بیرونی، اسکن داخلی دید یک خودی، و اسکن دیتاسنتر یا Agent وضعیت واقعی سرور را نشان می‌دهد. PCI DSS اسکن بیرونی توسط یک فروشنده‌ی مورد تأیید (ASV) را الزامی می‌کند.');

  M(T1,'A scanner reports a vulnerability, but the admin shows the system is already patched for it. What kind of result was this?',
    'اسکنر یک آسیب‌پذیری گزارش می‌دهد، اما مدیر نشان می‌دهد سیستم قبلاً برای آن وصله شده. این چه نوع نتیجه‌ای بود؟',
    'گزارش «هست» داد، ولی نبود.',
    ['False positive','False negative','True positive','True negative'],
    ['مثبت کاذب (False positive)','منفی کاذب (False negative)','مثبت واقعی','منفی واقعی'],
    'A false positive reports a problem that is not there. A false negative misses a problem that is there (more dangerous). Analysts confirm findings using their own checks, logs, SIEM data, configuration management and subject matter experts.',
    'مثبت کاذب مشکلی را گزارش می‌دهد که وجود ندارد. منفی کاذب مشکلی را که هست نمی‌بیند (خطرناک‌تر). تحلیلگران یافته‌ها را با بررسی خودشان، لاگ‌ها، داده‌ی SIEM، مدیریت پیکربندی و متخصصان موضوع تأیید می‌کنند.');

  M(T1,'Which tool is best for finding SQL injection and cross-site scripting flaws in a company website?',
    'کدام ابزار برای پیدا کردن نقص‌های SQL injection و XSS در سایت یک شرکت بهتر است؟',
    'مخصوص وب.',
    ['A web application vulnerability scanner','A network port scanner only','A spam filter','A hardware security module'],
    ['اسکنر آسیب‌پذیری برنامه‌ی وب','فقط اسکنر پورت شبکه','فیلتر اسپم','ماژول امنیتی سخت‌افزاری (HSM)'],
    'Web application scanners (Nikto, Arachni, Acunetix, or the web features of Nessus, Qualys and Nexpose) probe for SQLi, XSS and CSRF using malicious input and fuzzing. Network scanners like Nessus, Qualys, Nexpose and OpenVAS focus on hosts and services.',
    'اسکنرهای برنامه‌ی وب (Nikto، Arachni، Acunetix یا بخش وب Nessus، Qualys و Nexpose) با ورودی مخرب و Fuzzing دنبال SQLi، XSS و CSRF می‌گردند. اسکنرهای شبکه مثل Nessus، Qualys، Nexpose و OpenVAS روی میزبان‌ها و سرویس‌ها تمرکز دارند.');

  M(T1,'A scan finds a public web server that answers DEBUG requests and shows detailed error pages. What should be done?',
    'یک اسکن نشان می‌دهد یک وب‌سرور عمومی به درخواست‌های DEBUG جواب می‌دهد و صفحه‌های خطای مفصل نشان می‌دهد. چه باید کرد؟',
    'اطلاعات داخلی نباید به بیرون برسد.',
    ['Disable debug mode on public systems and debug only in development','Leave it on so developers can help users','Add more RAM to the server','Change the server\'s IP address'],
    ['حالت Debug را روی سیستم‌های عمومی خاموش کن و فقط در محیط توسعه Debug کن','روشن بگذار تا برنامه‌نویس‌ها به کاربران کمک کنند','RAM سرور را زیاد کن','IP سرور را عوض کن'],
    'Debug output can reveal database structure, authentication methods and other internals to attackers. Other common weak configurations: default settings, default credentials, unsecured root accounts, open ports and open permissions.',
    'خروجی Debug می‌تواند ساختار پایگاه داده، روش احراز هویت و جزئیات داخلی دیگر را به مهاجم نشان دهد. پیکربندی‌های ضعیف رایج دیگر: تنظیمات پیش‌فرض، اطلاعات ورود پیش‌فرض، حساب root ناامن، پورت‌های باز و مجوزهای باز.');

  M(T1,'A scan flags a server running Telnet and FTP. What is the right fix?',
    'یک اسکن سروری را که Telnet و FTP اجرا می‌کند علامت می‌زند. اصلاح درست چیست؟',
    'جایگزین‌های رمزگذاری‌شده.',
    ['Replace Telnet with SSH and FTP with SFTP or FTPS','Change the Telnet password monthly','Move FTP to a different port','Block the scanner'],
    ['Telnet را با SSH و FTP را با SFTP یا FTPS جایگزین کن','رمز Telnet را ماهانه عوض کن','FTP را به یک پورت دیگر ببر','جلوی اسکنر را بگیر'],
    'Telnet and FTP send usernames, passwords and data in clear text, so they are insecure protocols. SSH, SFTP and FTPS encrypt the session. Similarly, weak ciphers such as RC4 should be replaced with AES.',
    'Telnet و FTP نام کاربری، رمز و داده را به‌صورت متن آشکار می‌فرستند؛ پس پروتکل ناامن‌اند. SSH، SFTP و FTPS جلسه را رمزگذاری می‌کنند. به همین شکل، رمزهای ضعیف مثل RC4 باید با AES جایگزین شوند.');

  /* ---- CVSS & SCAP ---- */
  M(T2,'A new vulnerability has a CVSS base score of 9.1. Which severity rating does it get?',
    'یک آسیب‌پذیری جدید امتیاز پایه‌ی CVSS برابر ۹٫۱ دارد. کدام رده‌ی شدت را می‌گیرد؟',
    '۹ تا ۱۰.',
    ['Critical','High','Medium','Low'],
    ['بحرانی (Critical)','بالا (High)','متوسط (Medium)','پایین (Low)'],
    'CVSS rating scale: 0.0 None, 0.1–3.9 Low, 4.0–6.9 Medium, 7.0–8.9 High, 9.0–10.0 Critical.',
    'مقیاس رده‌بندی CVSS: ۰٫۰ هیچ، ۰٫۱ تا ۳٫۹ پایین، ۴٫۰ تا ۶٫۹ متوسط، ۷٫۰ تا ۸٫۹ بالا، ۹٫۰ تا ۱۰٫۰ بحرانی.');

  M(T2,'A vulnerability scores 4.0 in CVSS. Which category is it in?',
    'یک آسیب‌پذیری در CVSS امتیاز ۴٫۰ دارد. در کدام رده است؟',
    'مرز پایین یک رده.',
    ['Medium','Low','High','None'],
    ['متوسط (Medium)','پایین','بالا','هیچ'],
    'Medium starts at exactly 4.0 and runs to 6.9. Low is 0.1–3.9. Learn the edges: 4.0, 7.0 and 9.0 each begin a new category.',
    'رده‌ی متوسط دقیقاً از ۴٫۰ شروع می‌شود و تا ۶٫۹ ادامه دارد. پایین ۰٫۱ تا ۳٫۹ است. مرزها را حفظ کن: ۴٫۰، ۷٫۰ و ۹٫۰ هر کدام شروع یک رده‌ی جدیدند.');

  M(T2,'In the vector AV:N/AC:L/PR:N/UI:N, what does "PR:N" tell you?',
    'در بردار AV:N/AC:L/PR:N/UI:N، عبارت «PR:N» چه می‌گوید؟',
    'PR = Privileges Required.',
    ['The attacker needs no account or login to exploit it','The attack needs physical access','A user must click something','The attack has no impact on confidentiality'],
    ['مهاجم برای سوءاستفاده به هیچ حساب یا ورودی نیاز ندارد','حمله دسترسی فیزیکی لازم دارد','کاربر باید روی چیزی کلیک کند','حمله روی محرمانگی اثری ندارد'],
    'Privileges Required (PR) is None, Low (basic user) or High (admin). Here AV:N = over the network, AC:L = low complexity, UI:N = no user interaction. All four point to an easy-to-exploit flaw.',
    'Privileges Required (PR) می‌تواند None، Low (کاربر عادی) یا High (مدیر) باشد. اینجا AV:N = از طریق شبکه، AC:L = پیچیدگی کم، UI:N = بدون تعامل کاربر. هر چهار نشان می‌دهند نقص به‌راحتی قابل سوءاستفاده است.');

  M(T2,'Which CVSS attack vector value means the attacker must physically touch the device?',
    'کدام مقدار Attack vector در CVSS یعنی مهاجم باید دستگاه را فیزیکی لمس کند؟',
    'چهار گزینه: N، A، L، P.',
    ['Physical (P)','Local (L)','Adjacent (A)','Network (N)'],
    ['Physical (P)','Local (L)','Adjacent (A)','Network (N)'],
    'Attack vector from hardest to easiest: Physical (touch the device), Local (physical or logical access to the system), Adjacent (same local network), Network (remotely over a network). Network scores highest.',
    'Attack vector از سخت‌ترین به آسان‌ترین: Physical (لمس دستگاه)، Local (دسترسی فیزیکی یا منطقی به سیستم)، Adjacent (همان شبکه‌ی محلی)، Network (از راه دور روی شبکه). Network بیشترین امتیاز را دارد.');

  M(T2,'Which CVSS value for attack complexity means the attack is simplest to carry out?',
    'کدام مقدار پیچیدگی حمله (Attack complexity) در CVSS یعنی حمله ساده‌ترین است؟',
    'فقط دو مقدار دارد.',
    ['Low','High','Medium','None'],
    ['Low (پایین)','High (بالا)','Medium (متوسط)','None (هیچ)'],
    'Attack complexity is only Low (no special conditions needed) or High (needs specialized, hard-to-find conditions). Low complexity raises the score.',
    'Attack complexity فقط Low (شرایط خاصی لازم نیست) یا High (شرایط خاص و سخت لازم است) دارد. پیچیدگی پایین امتیاز را بالا می‌برد.');

  M(T2,'An exploit in a virtual machine lets the attacker take over the host that runs it. Which CVSS metric captures this?',
    'یک اکسپلویت در ماشین مجازی به مهاجم اجازه می‌دهد میزبانی که آن را اجرا می‌کند تسخیر کند. کدام معیار CVSS این را نشان می‌دهد؟',
    'اثر از مرز امنیتی خودش بیرون می‌رود.',
    ['Scope: Changed','Scope: Unchanged','User interaction: Required','Attack vector: Adjacent'],
    ['Scope: Changed (دامنه تغییر می‌کند)','Scope: Unchanged','User interaction: Required','Attack vector: Adjacent'],
    'Scope is Changed when exploiting one component can affect resources managed by a different security authority, like escaping a VM to the host. Scope has no score of its own but changes the PR values and multiplies the base score.',
    'Scope وقتی Changed است که سوءاستفاده از یک جزء بتواند روی منابعی اثر بگذارد که زیر یک مرجع امنیتی دیگرند؛ مثل فرار از VM به میزبان. Scope امتیاز مستقل ندارد، اما مقدارهای PR را تغییر می‌دهد و امتیاز پایه را ضرب می‌کند.');

  M(T2,'Which SCAP component gives each publicly known software flaw a standard ID like CVE-2024-12345?',
    'کدام جزء SCAP به هر نقص نرم‌افزاری شناخته‌شده یک شناسه‌ی استاندارد مثل CVE-2024-12345 می‌دهد؟',
    'اسم‌گذاری نقص‌ها، نه امتیاز.',
    ['CVE','CVSS','CPE','CCE'],
    ['CVE','CVSS','CPE','CCE'],
    'SCAP parts: CVE names flaws, CVSS scores their severity, CPE names products and versions, CCE names configuration issues, XCCDF describes checklists and results, OVAL describes low-level test procedures.',
    'اجزای SCAP: CVE نقص‌ها را نام‌گذاری می‌کند، CVSS شدت را امتیاز می‌دهد، CPE محصولات و نسخه‌ها را نام می‌گذارد، CCE مشکلات پیکربندی را نام می‌گذارد، XCCDF چک‌لیست و نتیجه را توصیف می‌کند، OVAL روش‌های آزمون سطح پایین را.');

  M(T2,'A tool needs a standard way to name "Microsoft Windows Server 2022" so different products agree on it. Which SCAP standard is this?',
    'یک ابزار به روشی استاندارد برای نام‌گذاری «Microsoft Windows Server 2022» نیاز دارد تا محصولات مختلف روی آن توافق داشته باشند. این کدام استاندارد SCAP است؟',
    'Platform = محصول و نسخه.',
    ['CPE (Common Platform Enumeration)','CCE (Common Configuration Enumeration)','OVAL','CVSS'],
    ['CPE (شمارش مشترک پلتفرم)','CCE (شمارش مشترک پیکربندی)','OVAL','CVSS'],
    'CPE provides standard names for products and versions. CCE is for configuration settings. Together with CVE, CVSS, XCCDF and OVAL, they let security tools share data automatically.',
    'CPE برای محصولات و نسخه‌ها نام استاندارد می‌دهد. CCE برای تنظیمات پیکربندی است. همراه با CVE، CVSS، XCCDF و OVAL به ابزارهای امنیتی اجازه می‌دهند داده را خودکار به اشتراک بگذارند.');

  /* ---- Vulnerability life cycle ---- */
  M(T3,'What is the correct order of the vulnerability life cycle?',
    'ترتیب درست چرخه‌ی عمر آسیب‌پذیری کدام است؟',
    'پیدا کن، بفهم، رفع کن، چک کن، گزارش بده.',
    ['Identification → analysis → response and remediation → validation of remediation → reporting','Analysis → identification → reporting → remediation → validation','Remediation → identification → analysis → reporting → validation','Reporting → validation → analysis → identification → remediation'],
    ['شناسایی ← تحلیل ← پاسخ و رفع ← تأیید رفع ← گزارش','تحلیل ← شناسایی ← گزارش ← رفع ← تأیید','رفع ← شناسایی ← تحلیل ← گزارش ← تأیید','گزارش ← تأیید ← تحلیل ← شناسایی ← رفع'],
    'Identification (scans, pen tests, responsible disclosure/bug bounty, audits) → Analysis (confirm, prioritize with CVSS/CVE, add local context) → Response (patch, segment, compensating controls, insurance, exceptions) → Validation (rescan, audit, verification) → Reporting.',
    'شناسایی (اسکن، تست نفوذ، افشای مسئولانه/Bug bounty، ممیزی) ← تحلیل (تأیید، اولویت با CVSS/CVE، افزودن شرایط محلی) ← پاسخ (وصله، بخش‌بندی، کنترل جبرانی، بیمه، استثنا) ← تأیید (اسکن مجدد، ممیزی، بررسی) ← گزارش.');

  M(T3,'Two vulnerabilities have the same CVSS score, but one is on an Internet-facing payment server and the other is on an isolated lab PC. Why fix the payment server first?',
    'دو آسیب‌پذیری امتیاز CVSS یکسان دارند، اما یکی روی سرور پرداخت رو به اینترنت است و دیگری روی یک کامپیوتر آزمایشگاهی ایزوله. چرا اول سرور پرداخت را رفع کنیم؟',
    'CVSS دید بیرونی است؛ شرایط خودت را اضافه کن.',
    ['Exposure factor, environmental variables and organizational impact are higher there','CVSS scores are always wrong','Lab PCs never get attacked','Payment servers are cheaper to patch'],
    ['ضریب در معرض بودن، متغیرهای محیطی و اثر سازمانی آنجا بیشتر است','امتیاز CVSS همیشه غلط است','کامپیوترهای آزمایشگاه هیچ‌وقت حمله نمی‌بینند','وصله کردن سرور پرداخت ارزان‌تر است'],
    'CVSS and CVE give an outside view. Analysis then adds your own context: exposure factor, environmental variables, industry and organizational impact, and risk tolerance. That decides real priority.',
    'CVSS و CVE دید بیرونی می‌دهند. تحلیل سپس شرایط خودت را اضافه می‌کند: ضریب در معرض بودن، متغیرهای محیطی، اثر صنعتی و سازمانی و تحمل ریسک. این‌ها اولویت واقعی را تعیین می‌کنند.');

  M(T3,'A legacy app server cannot be patched yet, so the team moves it to its own VLAN and puts an IPS in front of it. Which responses are these?',
    'یک سرور برنامه‌ی قدیمی هنوز قابل وصله نیست؛ پس تیم آن را به VLAN جداگانه می‌برد و یک IPS جلویش می‌گذارد. این‌ها کدام پاسخ‌ها هستند؟',
    'وصله نشد؛ اما ریسک کم شد.',
    ['Segmentation and a compensating control','Patching and insurance','An exception and an exemption','Rescanning and reporting'],
    ['بخش‌بندی (Segmentation) و کنترل جبرانی','وصله و بیمه','استثنا و معافیت','اسکن مجدد و گزارش'],
    'Response options: patch; segment the system so exploits are unlikely; add compensating controls (WAF, IPS); buy insurance to transfer financial risk; or grant a formal exception/exemption as risk acceptance.',
    'گزینه‌های پاسخ: وصله؛ بخش‌بندی تا سوءاستفاده بعید شود؛ کنترل جبرانی (WAF، IPS)؛ خرید بیمه برای انتقال ریسک مالی؛ یا استثنا/معافیت رسمی به‌عنوان پذیرش ریسک.');

  M(T3,'After patching a critical flaw, how does the team usually confirm the fix worked?',
    'بعد از وصله کردن یک نقص بحرانی، تیم معمولاً چطور تأیید می‌کند که رفع شده؟',
    'دوباره نگاه کن.',
    ['Rescan the system and check the finding is gone','Assume the patch worked','Delete the old scan report','Ask the vendor by email'],
    ['سیستم را دوباره اسکن کن و ببین یافته از بین رفته','فرض کن وصله کار کرده','گزارش اسکن قبلی را پاک کن','با ایمیل از فروشنده بپرس'],
    'Validation of remediation is usually a rescan. For serious issues, internal or external auditors may verify to give independent assurance. Then report findings, actions, trends and recommendations to stakeholders.',
    'تأیید رفع معمولاً با اسکن مجدد است. برای مشکلات جدی، ممیزان داخلی یا بیرونی ممکن است برای اطمینان مستقل بررسی کنند. بعد یافته‌ها، اقدامات، روندها و پیشنهادها به ذی‌نفعان گزارش می‌شود.');

  M(T3,'A software company invites outside researchers to report flaws through a secure form and pays cash for each valid finding. What is this?',
    'یک شرکت نرم‌افزاری از محققان بیرونی دعوت می‌کند نقص‌ها را از طریق یک فرم امن گزارش دهند و برای هر یافته‌ی معتبر پول نقد می‌دهد. این چیست؟',
    'پاداش = Bounty.',
    ['A bug bounty program','Threat hunting','An internal audit','A known environment penetration test'],
    ['برنامه‌ی Bug bounty','شکار تهدید','ممیزی داخلی','تست نفوذ با محیط شناخته‌شده'],
    'Responsible disclosure programs give researchers a safe way to report flaws to the vendor. A bug bounty is a responsible disclosure program that pays rewards, giving outsiders a reason to report instead of exploit.',
    'برنامه‌ی افشای مسئولانه به محققان راه امنی برای گزارش نقص به فروشنده می‌دهد. Bug bounty یک برنامه‌ی افشای مسئولانه است که پاداش می‌دهد و به افراد بیرونی دلیلی می‌دهد گزارش کنند به جای سوءاستفاده.');

  M(T3,'Assuming attackers are already inside, an analyst searches logs and endpoints for signs of lateral movement, using the latest threat intelligence. What is this?',
    'تحلیلگری با فرض اینکه مهاجمان از قبل داخل‌اند، با آخرین اطلاعات تهدید، لاگ‌ها و دستگاه‌ها را برای نشانه‌های حرکت جانبی جستجو می‌کند. این چیست؟',
    'فرض نفوذ (Presumption of compromise).',
    ['Threat hunting','Vulnerability scanning','Penetration testing','War driving'],
    ['شکار تهدید (Threat hunting)','اسکن آسیب‌پذیری','تست نفوذ','War driving'],
    'Threat hunting presumes compromise and searches for evidence of attacks that already happened, using intelligence fusion (feeds, advisories, bulletins). If it finds something, incident response begins.',
    'شکار تهدید فرض می‌کند نفوذ رخ داده و دنبال شواهد حمله‌هایی می‌گردد که قبلاً اتفاق افتاده؛ با ترکیب اطلاعات (فیدها، هشدارها، بولتن‌ها). اگر چیزی پیدا کند، پاسخ به حادثه شروع می‌شود.');

  /* ---- Penetration testing ---- */
  M(T4,'Testers receive network diagrams, IP ranges and admin credentials before the test starts. What type of test is this?',
    'آزمایش‌کننده‌ها قبل از شروع تست نقشه‌ی شبکه، محدوده‌ی IP و اطلاعات ورود مدیر را می‌گیرند. این کدام نوع تست است؟',
    'همه‌چیز را می‌دانند.',
    ['Known environment test','Unknown environment test','Partially known environment test','Passive reconnaissance'],
    ['تست با محیط شناخته‌شده (Known environment)','تست با محیط ناشناخته (Unknown environment)','تست با محیط نیمه‌شناخته','شناسایی غیرفعال'],
    'Known environment = full information (thorough, but not a real outsider\'s view). Unknown environment = no information (realistic, slower). Partially known = some information, a balance of focus and realism.',
    'محیط شناخته‌شده = اطلاعات کامل (کامل‌تر، اما دید واقعی یک بیگانه نیست). محیط ناشناخته = بدون اطلاعات (واقعی‌تر، کندتر). نیمه‌شناخته = بخشی از اطلاعات، تعادل بین تمرکز و واقع‌گرایی.');

  M(T4,'A tester is given only the company name and must discover everything else like a real outside attacker. What type of test is this?',
    'به یک آزمایش‌کننده فقط اسم شرکت داده می‌شود و باید بقیه‌ی چیزها را مثل یک مهاجم بیرونی واقعی کشف کند. این کدام نوع تست است؟',
    'هیچ اطلاعاتی نمی‌دهند.',
    ['Unknown environment test','Known environment test','Partially known environment test','Integrated test'],
    ['تست با محیط ناشناخته','تست با محیط شناخته‌شده','تست با محیط نیمه‌شناخته','تست یکپارچه'],
    'Unknown environment tests replicate an outside attacker and are only as realistic as the tester\'s skill. If the expected attacker is more capable than the tester, the result may look better than reality.',
    'تست با محیط ناشناخته یک مهاجم بیرونی را شبیه‌سازی می‌کند و فقط به اندازه‌ی مهارت آزمایش‌کننده واقعی است. اگر مهاجم مورد انتظار تواناتر از آزمایش‌کننده باشد، نتیجه بهتر از واقعیت به نظر می‌رسد.');

  M(T4,'A test team tailgates staff into the building and tries to get into the wiring closet. Which penetration test category is this?',
    'تیم تست پشت سر کارمندان وارد ساختمان می‌شود و سعی می‌کند وارد اتاق سیم‌کشی شود. این کدام دسته از تست نفوذ است؟',
    'قفل، در، دوربین.',
    ['Physical','Defensive','Integrated','Passive'],
    ['فیزیکی (Physical)','دفاعی (Defensive)','یکپارچه (Integrated)','غیرفعال (Passive)'],
    'Categories: physical (buildings, locks, cameras), offensive (act as attackers against networks and apps), defensive (test how well defenses detect and respond), integrated (offensive and defensive teams working together).',
    'دسته‌ها: فیزیکی (ساختمان، قفل، دوربین)، تهاجمی (رفتار مثل مهاجم روی شبکه و برنامه‌ها)، دفاعی (آزمون اینکه دفاع‌ها چقدر خوب تشخیص می‌دهند و پاسخ می‌دهند)، یکپارچه (تیم‌های تهاجمی و دفاعی با هم).');

  M(T4,'Which reconnaissance activity is passive?',
    'کدام فعالیت شناسایی غیرفعال (Passive) است؟',
    'به سیستم‌های هدف دست نمی‌زند.',
    ['Looking up WHOIS and DNS records','Port scanning the target\'s servers','Running a vulnerability scan','Footprinting the operating system with probes'],
    ['جستجوی رکوردهای WHOIS و DNS','اسکن پورت سرورهای هدف','اجرای اسکن آسیب‌پذیری','شناسایی سیستم‌عامل با کاوش مستقیم'],
    'Passive reconnaissance gathers information without directly engaging the target (OSINT, WHOIS, DNS, websites, search). Active reconnaissance touches the target: port scans, footprinting and vulnerability scans.',
    'شناسایی غیرفعال بدون تماس مستقیم با هدف اطلاعات جمع می‌کند (OSINT، WHOIS، DNS، سایت‌ها، جستجو). شناسایی فعال با هدف تماس دارد: اسکن پورت، Footprinting و اسکن آسیب‌پذیری.');

  M(T4,'After gaining a normal user shell, a tester exploits a kernel flaw to become root on the same machine. What phase is this?',
    'آزمایش‌کننده بعد از گرفتن یک Shell کاربر عادی، از یک نقص کرنل استفاده می‌کند تا روی همان ماشین root شود. این کدام مرحله است؟',
    'روی همان سیستم، دسترسی بالاتر.',
    ['Privilege escalation','Lateral movement (pivoting)','Persistence','Reconnaissance'],
    ['افزایش سطح دسترسی (Privilege escalation)','حرکت جانبی (Pivoting)','ماندگاری (Persistence)','شناسایی'],
    'Phases: initial access (first foothold) → privilege escalation (more rights on the same system) → lateral movement/pivoting (to other systems) → persistence (backdoors to return later). Metasploit is a common exploitation framework.',
    'مرحله‌ها: دسترسی اولیه (اولین جای پا) ← افزایش دسترسی (حقوق بیشتر روی همان سیستم) ← حرکت جانبی (به سیستم‌های دیگر) ← ماندگاری (در پشتی برای برگشتن). Metasploit یک چارچوب رایج اکسپلویت است.');

  M(T4,'A tester installs a scheduled task that reconnects to her server every hour, so access survives even if the first flaw is patched. What is this?',
    'یک آزمایش‌کننده یک کار زمان‌بندی‌شده نصب می‌کند که هر ساعت به سرورش وصل می‌شود تا حتی اگر نقص اول وصله شد، دسترسی بماند. این چیست؟',
    'برای برگشتن در آینده.',
    ['Persistence','Pivoting','Privilege escalation','War flying'],
    ['ماندگاری (Persistence)','Pivoting','افزایش دسترسی','War flying'],
    'Persistence mechanisms let an attacker regain access later. At the end of a test, cleanup must remove all tools and persistence mechanisms the testers installed.',
    'سازوکارهای ماندگاری به مهاجم اجازه می‌دهند بعداً دوباره دسترسی بگیرد. در پایان تست، پاک‌سازی باید همه‌ی ابزارها و سازوکارهای ماندگاری‌ای که آزمایش‌کننده‌ها نصب کرده‌اند را حذف کند.');

  M(T4,'A tester wants to know whether phishing staff is allowed and what to do if she finds a real attacker already inside. Where should she look?',
    'آزمایش‌کننده‌ای می‌خواهد بداند آیا فیشینگ کارکنان مجاز است و اگر یک مهاجم واقعی را داخل پیدا کرد چه کند. کجا را ببیند؟',
    'قوانین کار در این تست.',
    ['The rules of engagement (RoE)','The lessons learned report','The CVSS calculator','The SCAP checklist'],
    ['قوانین درگیری (Rules of engagement)','گزارش درس‌های آموخته','ماشین‌حساب CVSS','چک‌لیست SCAP'],
    'Rules of engagement cover timeline, in-scope and out-of-scope targets, data handling, expected defensive behavior, committed resources, legal concerns and communications, including what to do on finding an active compromise. Always have signed permission.',
    'قوانین درگیری شامل زمان‌بندی، هدف‌های داخل و خارج از محدوده، نحوه‌ی کار با داده، رفتار دفاعی مورد انتظار، منابع، مسائل حقوقی و ارتباطات است؛ از جمله اینکه با پیدا کردن یک نفوذ فعال چه کار کند. همیشه اجازه‌ی امضاشده داشته باش.');

  M(T4,'Testers drive around an office park with a high-gain antenna looking for weak Wi-Fi, then repeat the search with a drone. What are these techniques?',
    'آزمایش‌کننده‌ها با یک آنتن قوی دور یک شهرک اداری رانندگی می‌کنند تا Wi-Fi ضعیف پیدا کنند، بعد همین را با پهپاد تکرار می‌کنند. این روش‌ها چه هستند؟',
    'رانندگی، بعد پرواز.',
    ['War driving and war flying','Footprinting and fuzzing','Pivoting and persistence','Smishing and vishing'],
    ['War driving و War flying','Footprinting و Fuzzing','Pivoting و Persistence','Smishing و Vishing'],
    'War driving finds wireless networks from a vehicle; war flying uses drones or UAVs. Both look for a way into the internal network without entering the building.',
    'War driving شبکه‌های بی‌سیم را از داخل خودرو پیدا می‌کند؛ War flying از پهپاد استفاده می‌کند. هر دو دنبال راهی به شبکه‌ی داخلی بدون وارد شدن به ساختمان‌اند.');

  /* ---- Audits & assessments ---- */
  M(T5,'A bank regulator chooses the auditors and the scope, then audits the bank\'s security controls. What type of audit is this?',
    'ناظر بانکی ممیزان و محدوده را انتخاب می‌کند و بعد کنترل‌های امنیتی بانک را ممیزی می‌کند. این کدام نوع ممیزی است؟',
    'درخواست از طرف یک نهاد بیرونی است.',
    ['Independent third-party (regulatory) audit','Internal audit','Self-assessment','Penetration test'],
    ['ممیزی مستقل شخص ثالث (نظارتی)','ممیزی داخلی','خودارزیابی','تست نفوذ'],
    'Independent third-party audits are external audits requested by an outside party (regulator, customer), which also picks the auditors and scope. A regular external audit is requested by the organization or its board.',
    'ممیزی مستقل شخص ثالث نوعی ممیزی بیرونی است که یک طرف بیرونی (ناظر، مشتری) درخواست می‌کند و ممیز و محدوده را هم انتخاب می‌کند. ممیزی بیرونی عادی را خود سازمان یا هیئت‌مدیره‌اش درخواست می‌کند.');

  M(T5,'The board\'s audit committee wants assurance before a formal external audit, so the company\'s own audit staff, who report directly to the CEO and board, review controls. What is this?',
    'کمیته‌ی ممیزی هیئت‌مدیره قبل از یک ممیزی بیرونی رسمی اطمینان می‌خواهد؛ پس کارکنان ممیزی خود شرکت که مستقیم به مدیرعامل و هیئت‌مدیره گزارش می‌دهند کنترل‌ها را بررسی می‌کنند. این چیست؟',
    'از داخل سازمان، اما مستقل از بخش‌های بررسی‌شده.',
    ['An internal audit','An independent third-party audit','A regulatory examination','A bug bounty'],
    ['ممیزی داخلی','ممیزی مستقل شخص ثالث','بازرسی نظارتی','Bug bounty'],
    'Internal audits are done by the organization\'s own audit staff, whose reporting line is independent of the functions they evaluate (often to the CEO, board or audit committee). They are used for compliance checks and self-assessments.',
    'ممیزی داخلی را کارکنان ممیزی خود سازمان انجام می‌دهند که مسیر گزارش‌دهی‌شان مستقل از بخش‌های بررسی‌شده است (اغلب به مدیرعامل، هیئت‌مدیره یا کمیته‌ی ممیزی). برای بررسی انطباق و خودارزیابی استفاده می‌شود.');

  M(T5,'At the end of an audit, the auditor formally states that the controls are adequate and working properly. What is this statement called?',
    'در پایان ممیزی، ممیز به‌طور رسمی اعلام می‌کند که کنترل‌ها کافی‌اند و درست کار می‌کنند. اسم این اعلام چیست؟',
    'گواهی رسمی ممیز.',
    ['Attestation','Exemption','Remediation','Reconnaissance'],
    ['گواهی (Attestation)','معافیت','رفع','شناسایی'],
    'Attestation is the auditor\'s formal statement about the adequacy and effectiveness of controls. Audits are formal and meant for third parties; assessments and tests are mainly for internal improvement.',
    'Attestation اعلام رسمی ممیز درباره‌ی کافی بودن و اثربخشی کنترل‌هاست. ممیزی رسمی است و برای طرف‌های بیرونی؛ ارزیابی و آزمون بیشتر برای بهبود داخلی‌اند.');

  M(T5,'A cloud provider has hundreds of customers who each want to audit it. Which approach reduces this burden?',
    'یک ارائه‌دهنده‌ی ابری صدها مشتری دارد که هر کدام می‌خواهند آن را ممیزی کنند. کدام روش این بار را کم می‌کند؟',
    'یک گزارش استاندارد برای همه.',
    ['One SSAE 18 (SOC) audit whose report is shared with customers','Refusing all audits','A separate audit for each customer','Publishing its passwords'],
    ['یک ممیزی SSAE 18 (SOC) که گزارشش با مشتری‌ها به اشتراک گذاشته شود','رد کردن همه‌ی ممیزی‌ها','ممیزی جداگانه برای هر مشتری','منتشر کردن رمزهایش'],
    'SSAE 18 from the AICPA lets a service organization get one standardized external audit (a SOC audit) and share the report, instead of many separate third-party audits. COBIT and ISO 27001/27002 are common audit standards.',
    'SSAE 18 از AICPA اجازه می‌دهد یک سازمان خدماتی یک ممیزی بیرونی استاندارد (ممیزی SOC) بگیرد و گزارشش را به اشتراک بگذارد، به جای ممیزی‌های جداگانه‌ی زیاد. COBIT و ISO 27001/27002 استانداردهای رایج ممیزی‌اند.');

  M(T5,'What is the main difference between a security assessment and a security audit?',
    'فرق اصلی ارزیابی امنیتی (Assessment) و ممیزی امنیتی (Audit) چیست؟',
    'چه کسی انجام می‌دهد و برای چه کسی؟',
    ['Audits must be done by independent auditors to show control effectiveness to third parties','Assessments are always done by regulators','Audits never use testing tools','Assessments cannot include recommendations'],
    ['ممیزی باید توسط ممیز مستقل انجام شود تا اثربخشی کنترل‌ها را به طرف‌های بیرونی نشان دهد','ارزیابی همیشه توسط ناظر انجام می‌شود','ممیزی هیچ‌وقت از ابزار آزمون استفاده نمی‌کند','ارزیابی نمی‌تواند پیشنهاد داشته باشد'],
    'Assessments are comprehensive reviews with a risk assessment and recommendations, usually for management and internal use. Audits use similar techniques but are formal, done by independent auditors, and aimed at boards, regulators and other third parties.',
    'ارزیابی یک بررسی جامع با ارزیابی ریسک و پیشنهاد است، معمولاً برای مدیریت و استفاده‌ی داخلی. ممیزی از روش‌های مشابه استفاده می‌کند اما رسمی است، توسط ممیز مستقل انجام می‌شود و برای هیئت‌مدیره، ناظران و طرف‌های بیرونی است.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['B5']={t:['Book Ch. 5: Assessment & testing','فصل ۵ کتاب: ارزیابی و آزمون امنیت'],b:[
    PP('Matched to Chapter 5 of the course textbook (objectives 4.3, 4.4, 4.8, 5.3 and 5.5). Short review notes in our own words; read the chapter for the full explanation.',
      'این بخش با فصل ۵ کتاب درس جور است (سرفصل‌های 4.3، 4.4، 4.8، 5.3 و 5.5). یادداشت‌های کوتاه مرور به زبان خودمان؛ توضیح کامل را در کتاب بخوان.'),

    H('Planning and configuring scans','برنامه‌ریزی و تنظیم اسکن'),
    L([['Scope by data classification, Internet exposure, services offered and environment (prod/test/dev). Build an asset inventory.','محدوده بر اساس طبقه‌بندی داده، در معرض اینترنت بودن، سرویس‌ها و محیط (اصلی/آزمایشی/توسعه). فهرست دارایی بساز.'],
       ['Frequency depends on risk appetite, regulations (PCI DSS, FISMA), technical, business and licensing limits.','تناوب به میل به ریسک، مقررات (PCI DSS، FISMA)، محدودیت‌های فنی، تجاری و لایسنس بستگی دارد.'],
       ['Credentialed scans (read-only account) and agents are more accurate than noncredentialed network scans.','اسکن با اطلاعات ورود (حساب فقط‌خواندنی) و Agent دقیق‌تر از اسکن شبکه‌ی بدون اطلاعات ورود است.'],
       ['Intrusive plug-ins can break systems: test in a copy of production first. Disable plug-ins you do not need.','افزونه‌های مزاحم می‌توانند سیستم را خراب کنند: اول در یک کپی از سیستم اصلی امتحان کن. افزونه‌های غیرلازم را خاموش کن.'],
       ['Scan perspective: external, internal, data center/agent. Keep scanner software and plug-in feeds updated (ideally daily).','دیدگاه اسکن: بیرونی، داخلی، دیتاسنتر/Agent. نرم‌افزار اسکنر و فید افزونه‌ها را به‌روز نگه دار (ترجیحاً روزانه).']]),
    TB([['Result','نتیجه'],['Meaning','معنی']],[
      [['True positive','مثبت واقعی'],['Reported and really there','گزارش شد و واقعاً هست']],
      [['False positive','مثبت کاذب'],['Reported but not really there','گزارش شد اما واقعاً نیست']],
      [['True negative','منفی واقعی'],['Not reported and not there','گزارش نشد و نیست']],
      [['False negative','منفی کاذب'],['Not reported but really there (dangerous)','گزارش نشد اما واقعاً هست (خطرناک)']]]),

    H('CVSS and SCAP','CVSS و SCAP'),
    TB([['Metric','معیار'],['Values (easy → hard / low → high impact)','مقدارها']],[
      [['Attack vector (AV)','مسیر حمله'],['Network, Adjacent, Local, Physical','N، A، L، P']],
      [['Attack complexity (AC)','پیچیدگی حمله'],['Low, High','L، H']],
      [['Privileges required (PR)','دسترسی لازم'],['None, Low, High','N، L، H']],
      [['User interaction (UI)','تعامل کاربر'],['None, Required','N، R']],
      [['Scope (S)','دامنه'],['Unchanged, Changed','U، C']],
      [['C / I / A impact','اثر بر C / I / A'],['None, Low, High','N، L، H']]]),
    TB([['Score','امتیاز'],['Rating','رده']],[
      [['0.0','۰٫۰'],['None','هیچ']],[['0.1–3.9','۰٫۱–۳٫۹'],['Low','پایین']],[['4.0–6.9','۴٫۰–۶٫۹'],['Medium','متوسط']],
      [['7.0–8.9','۷٫۰–۸٫۹'],['High','بالا']],[['9.0–10.0','۹٫۰–۱۰٫۰'],['Critical','بحرانی']]]),
    L([['SCAP (led by NIST): CVE names flaws, CVSS scores them, CPE names products/versions, CCE names configuration issues, XCCDF = checklists, OVAL = low-level tests.','SCAP (به رهبری NIST): CVE نقص را نام می‌گذارد، CVSS امتیاز می‌دهد، CPE محصول/نسخه، CCE مشکل پیکربندی، XCCDF = چک‌لیست، OVAL = آزمون سطح پایین.'],
       ['Common findings: missing patches, legacy/unsupported systems, weak configurations, debug mode/error messages, insecure protocols (Telnet, FTP), weak ciphers (RC4).','یافته‌های رایج: وصله‌ی جاافتاده، سیستم قدیمی/بدون پشتیبانی، پیکربندی ضعیف، حالت Debug/پیام خطا، پروتکل ناامن (Telnet، FTP)، رمز ضعیف (RC4).']]),

    H('Vulnerability life cycle','چرخه‌ی عمر آسیب‌پذیری'),
    L([['1. Identification: scans, pen tests, responsible disclosure and bug bounty programs, system/process audits.','۱. شناسایی: اسکن، تست نفوذ، برنامه‌های افشای مسئولانه و Bug bounty، ممیزی سیستم/فرایند.'],
       ['2. Analysis: confirm (not a false positive), prioritize with CVSS/CVE, add exposure factor, environment, organizational impact, risk tolerance.','۲. تحلیل: تأیید (مثبت کاذب نباشد)، اولویت با CVSS/CVE، افزودن ضریب در معرض بودن، محیط، اثر سازمانی، تحمل ریسک.'],
       ['3. Response: patch, segment, compensating controls, insurance, exceptions/exemptions.','۳. پاسخ: وصله، بخش‌بندی، کنترل جبرانی، بیمه، استثنا/معافیت.'],
       ['4. Validation: rescan, audit, verification. 5. Reporting: findings, actions, trends, recommendations.','۴. تأیید: اسکن مجدد، ممیزی، بررسی. ۵. گزارش: یافته‌ها، اقدامات، روندها، پیشنهادها.']]),

    H('Penetration testing','تست نفوذ'),
    L([['Categories: physical, offensive, defensive, integrated. Knowledge: known, partially known, unknown environment.','دسته‌ها: فیزیکی، تهاجمی، دفاعی، یکپارچه. میزان اطلاعات: محیط شناخته‌شده، نیمه‌شناخته، ناشناخته.'],
       ['Rules of engagement: timeline, scope, data handling, target behavior, resources, legal concerns, communications. Get signed permission.','قوانین درگیری: زمان‌بندی، محدوده، کار با داده، رفتار هدف، منابع، مسائل حقوقی، ارتباطات. اجازه‌ی امضاشده بگیر.'],
       ['Reconnaissance: passive (OSINT, WHOIS, DNS) vs. active (port scans, footprinting, vulnerability scans); war driving / war flying.','شناسایی: غیرفعال (OSINT، WHOIS، DNS) در برابر فعال (اسکن پورت، Footprinting، اسکن آسیب‌پذیری)؛ War driving / War flying.'],
       ['Phases: initial access → privilege escalation → lateral movement (pivoting) → persistence → cleanup and report.','مرحله‌ها: دسترسی اولیه ← افزایش دسترسی ← حرکت جانبی ← ماندگاری ← پاک‌سازی و گزارش.'],
       ['Threat hunting is different: it presumes compromise and searches for evidence, using intelligence fusion.','شکار تهدید فرق دارد: فرض نفوذ می‌کند و دنبال شواهد می‌گردد، با ترکیب اطلاعات.']]),

    H('Tests, assessments and audits','آزمون، ارزیابی و ممیزی'),
    TB([['Type','نوع'],['Who / for whom','چه کسی / برای چه کسی']],[
      [['Security test','آزمون امنیتی'],['Checks a control works (scans, pen tests)','بررسی کار کردن یک کنترل (اسکن، تست نفوذ)']],
      [['Assessment','ارزیابی'],['Broad risk review with recommendations, for management','بررسی گسترده‌ی ریسک با پیشنهاد، برای مدیریت']],
      [['Internal audit','ممیزی داخلی'],['Own audit staff, independent line to CEO/board/audit committee','کارکنان ممیزی خود سازمان، گزارش مستقل به مدیرعامل/هیئت‌مدیره/کمیته‌ی ممیزی']],
      [['External audit','ممیزی بیرونی'],['Outside firm (e.g., Big Four), requested by the organization','شرکت بیرونی (مثل Big Four)، به درخواست خود سازمان']],
      [['Independent third-party audit','ممیزی مستقل شخص ثالث'],['Requested by a regulator or customer, who sets scope','به درخواست ناظر یا مشتری که محدوده را تعیین می‌کند']]]),
    TT('Exam shortcut: audits end with an attestation. SSAE 18 = SOC reports shared with customers. CVSS edges: 4.0 Medium, 7.0 High, 9.0 Critical. Passive recon never touches the target.',
      'نکته‌ی امتحان: ممیزی با Attestation تمام می‌شود. SSAE 18 = گزارش SOC که با مشتری‌ها به اشتراک گذاشته می‌شود. مرزهای CVSS: ۴٫۰ متوسط، ۷٫۰ بالا، ۹٫۰ بحرانی. شناسایی غیرفعال هیچ‌وقت به هدف دست نمی‌زند.')
  ]};
})();
