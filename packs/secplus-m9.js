/* Security+ extension: Module 9 (Vulnerability Management & Monitoring).
   Built from the Sheridan session slides. Loads after secplus.js and adds section 9 (questions + study notes) to the same course.
   The Persian side is written in plain, everyday language with simple examples. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['9']={en:'Vulnerability management & monitoring',fa:'مدیریت آسیب‌پذیری و پایش'};
  var n9=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:c'+(++n9),sec:'9',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var P=function(t,title,tf,zones,zf,items,zd,en,fa){
    pack.pbq.push({id:'secplus:p9_'+(pack.pbq.length+1),sec:'9',t:t,title:title,tf:tf,zones:zones,zf:zf,items:items,zd:zd,en:en,fa:fa});
  };

  /* ================= QUESTIONS ================= */
  var T1='Vulnerability management cycle',T2='Identification methods',T3='Analysis: CVSS, CVE & accuracy',T4='Remediation, validation & reporting',T5='Monitoring tools';

  M(T1,'Which sequence best describes the vulnerability management process?',
    'کدام ترتیب، مراحل مدیریت آسیب‌پذیری را درست نشان می‌دهد؟',
    'اول باید ضعف را «پیدا» کنی، بعد «بسنجی» چقدر خطرناک است، بعد «درستش کنی» و آخر «چک کنی» واقعاً درست شده.',
    ['Identify, analyze, remediate, validate (and repeat)','Remediate, identify, report, stop','Analyze, buy insurance, ignore, audit','Patch everything once, then stop scanning'],
    ['پیدا کردن، تحلیل، رفع، تأیید (و دوباره از اول)','رفع، پیدا کردن، گزارش، تمام','تحلیل، خرید بیمه، نادیده گرفتن، ممیزی','یک بار همه را وصله کن و دیگر اسکن نکن'],
    'Vulnerability management is a continuous cycle: identify weaknesses, analyze their risk, remediate them, then validate the fix. It repeats because new threats and changes keep appearing.',
    'مدیریت آسیب‌پذیری یک چرخه‌ی همیشگی است: ضعف را پیدا کن، ببین چقدر خطرناک است، درستش کن، و بعد مطمئن شو درست شده. چون هر روز ضعف جدید پیدا می‌شود، این چرخه هیچ‌وقت تمام نمی‌شود. مثل مسواک زدن: یک بار کافی نیست.');

  M(T1,'Why must vulnerability management be repeated regularly instead of done once?',
    'چرا مدیریت آسیب‌پذیری باید مرتب تکرار شود و یک بار کافی نیست؟',
    'فکر کن: آیا نرم‌افزارها و هکرها ثابت می‌مانند؟',
    ['New threats emerge and software and infrastructure keep changing','Scanners stop working after one use','Regulations forbid scanning more than once','Patches expire after one year'],
    ['تهدیدهای جدید پیدا می‌شوند و نرم‌افزار و زیرساخت مدام عوض می‌شوند','اسکنر بعد از یک بار استفاده خراب می‌شود','قانون اسکن بیشتر از یک بار را ممنوع کرده','وصله‌ها بعد از یک سال منقضی می‌شوند'],
    'New vulnerabilities are published every day, and every software update or new system can add weaknesses, so the cycle must run continuously.',
    'هر روز ضعف‌های تازه کشف می‌شود و هر آپدیت یا دستگاه جدید هم ممکن است ضعف تازه بیاورد. پس باید مدام چک کنی.');

  M(T2,'A security team wants a fast, automated way to check 2,000 servers every week for known missing patches. What should they use?',
    'تیم امنیت می‌خواهد هر هفته ۲۰۰۰ سرور را سریع و خودکار برای وصله‌های نصب‌نشده‌ی شناخته‌شده چک کند. از چه چیزی استفاده کند؟',
    'کار زیاد + تکراری + ضعف‌های «شناخته‌شده» = یک ابزار خودکار.',
    ['A vulnerability scanner such as Nessus or Qualys','A penetration test','A bug bounty program','A tabletop exercise'],
    ['اسکنر آسیب‌پذیری مثل Nessus یا Qualys','تست نفوذ (penetration test)','برنامه‌ی جایزه‌ی باگ (bug bounty)','تمرین روی میز (tabletop)'],
    'Vulnerability scanners automatically compare systems against databases of known flaws (CVE). They are efficient for regular checks across large environments.',
    'اسکنر آسیب‌پذیری خودکار است و سیستم‌ها را با فهرست ضعف‌های شناخته‌شده (CVE) مقایسه می‌کند. برای چک کردن مرتب تعداد زیادی دستگاه بهترین است. تست نفوذ دستی و کند است.');

  M(T2,'Which vulnerability scanner is open-source?',
    'کدام اسکنر آسیب‌پذیری متن‌باز (open-source و رایگان) است؟',
    'اسمش با Open شروع می‌شود.',
    ['OpenVAS','Nessus','Qualys','Splunk'],
    ['OpenVAS','Nessus','Qualys','Splunk'],
    'OpenVAS is open-source. Nessus is a commercial enterprise scanner, Qualys is cloud-based, and Splunk is a SIEM, not a scanner.',
    'OpenVAS متن‌باز و رایگان است. Nessus تجاری و مخصوص شرکت‌هاست، Qualys ابری است، و Splunk اصلاً اسکنر نیست؛ یک SIEM است.');

  M(T2,'A scan logs in to each server with an admin account so it can see installed software and settings from the inside. What kind of scan is this?',
    'اسکنر با یک حساب ادمین وارد هر سرور می‌شود تا نرم‌افزارها و تنظیمات را از داخل ببیند. این چه نوع اسکنی است؟',
    'با «رمز عبور» وارد شده است.',
    ['Authenticated (credentialed) scan','Unauthenticated scan','Black-box penetration test','Passive site survey'],
    ['اسکن احراز هویت‌شده (Authenticated)','اسکن بدون احراز هویت (Unauthenticated)','تست نفوذ جعبه‌سیاه (Black-box)','بررسی غیرفعال محل (Passive site survey)'],
    'An authenticated scan uses credentials and gives an internal view with more detail and fewer false positives. An unauthenticated scan shows what an outside attacker would see.',
    'اسکن Authenticated مثل این است که با کلید وارد خانه شوی و همه‌ی اتاق‌ها را ببینی؛ دقیق‌تر است. اسکن Unauthenticated فقط از بیرون نگاه می‌کند، یعنی همان چیزی که یک هکر بیرونی می‌بیند.');

  M(T2,'Developers want to find hardcoded passwords in their source code before the application is ever run. Which testing method fits?',
    'برنامه‌نویس‌ها می‌خواهند قبل از اینکه برنامه حتی اجرا شود، رمزهایی که داخل کد نوشته شده را پیدا کنند. کدام روش تست مناسب است؟',
    'Static یعنی «ساکن»؛ برنامه اجرا نمی‌شود، فقط کد خوانده می‌شود.',
    ['SAST (Static Application Security Testing)','DAST (Dynamic Application Security Testing)','Penetration testing','NetFlow analysis'],
    ['SAST (تست ایستا)','DAST (تست پویا)','تست نفوذ','تحلیل NetFlow'],
    'SAST analyzes source code or binaries without running the application. It finds hardcoded secrets, insecure functions and logic flaws early in development.',
    'SAST کد را بدون اجرا می‌خواند، مثل معلمی که برگه‌ی انشا را قبل از خواندن در کلاس غلط‌گیری می‌کند. رمزهای داخل کد و اشتباه‌های منطقی را زود پیدا می‌کند.');

  M(T2,'A tester sends SQL injection and XSS attempts to a web application while it is running in a test environment. Which method is this?',
    'یک تست‌کننده در حالی که برنامه‌ی وب روشن است، حمله‌ی SQL injection و XSS را رویش امتحان می‌کند. این کدام روش است؟',
    'برنامه «در حال اجرا» است = پویا (Dynamic).',
    ['DAST','SAST','Package monitoring','SCAP'],
    ['DAST (تست پویا)','SAST (تست ایستا)','پایش بسته‌ها (Package monitoring)','SCAP'],
    'DAST tests the running application from the outside, simulating real attacks such as SQL injection or XSS.',
    'DAST برنامه را وقتی روشن است امتحان می‌کند و مثل یک هکر واقعی به آن حمله می‌کند. SAST فقط کد را می‌خواند و برنامه را اجرا نمی‌کند.');

  M(T2,'An app uses dozens of open-source libraries. Which practice tracks known vulnerabilities and licence issues in those third-party dependencies?',
    'یک برنامه از ده‌ها کتابخانه‌ی متن‌باز آماده استفاده می‌کند. کدام کار ضعف‌های شناخته‌شده و مشکلات مجوز این قطعه‌های آماده را زیر نظر می‌گیرد؟',
    'ابزارهایی مثل Snyk و OWASP Dependency-Check.',
    ['Package (dependency) monitoring','Log archiving','Black-box testing','Cyber insurance'],
    ['پایش بسته‌ها و وابستگی‌ها (Package monitoring)','بایگانی لاگ','تست جعبه‌سیاه','بیمه‌ی سایبری'],
    'Package monitoring scans third-party dependencies for known vulnerabilities, licensing issues and outdated libraries, with tools like Snyk or OWASP Dependency-Check.',
    'برنامه‌ها پر از قطعه‌های آماده‌ای هستند که دیگران نوشته‌اند. Package monitoring مثل چک کردن تاریخ انقضای مواد غذایی است: می‌گوید کدام قطعه قدیمی یا خراب است.');

  M(T2,'A bank joins a group where banks share verified threat information only with trusted members. What is this?',
    'یک بانک عضو گروهی می‌شود که در آن بانک‌ها اطلاعات تأییدشده‌ی تهدیدها را فقط با اعضای مورد اعتماد به اشتراک می‌گذارند. این چیست؟',
    'مثال معروفش FS-ISAC برای بخش مالی است.',
    ['An ISAC (Information Sharing and Analysis Center)','A proprietary feed','Dark web monitoring','A CVE'],
    ['ISAC (مرکز اشتراک و تحلیل اطلاعات)','فید تجاری (Proprietary)','پایش دارک‌وب','یک CVE'],
    'ISACs are industry-specific organizations that share vetted threat intelligence among trusted members, for example FS-ISAC for the financial sector.',
    'ISAC مثل گروه تلگرامی خصوصی بین شرکت‌های یک صنعت است: هر کس حمله‌ای دید، به بقیه خبر می‌دهد. مثلاً FS-ISAC برای بانک‌ها.');

  M(T2,'Which threat intelligence source is public and free, such as CVE databases, security blogs and social media?',
    'کدام منبع اطلاعات تهدید عمومی و رایگان است، مثل پایگاه CVE، وبلاگ‌های امنیتی و شبکه‌های اجتماعی؟',
    'Open-Source یعنی «در دسترس همه».',
    ['OSINT (Open-Source Intelligence)','Proprietary feed','ISAC','SIEM'],
    ['OSINT (اطلاعات منبع‌باز)','فید تجاری','ISAC','SIEM'],
    'OSINT is publicly available information: CVE databases, threat blogs, GitHub disclosures and social media.',
    'OSINT یعنی هر اطلاعاتی که همه می‌توانند پیدا کنند: سایت CVE، وبلاگ‌ها، گیت‌هاب، توییتر. رایگان است.');

  M(T2,'A company pays for a commercial service such as Recorded Future that provides curated, high-confidence threat data with context. What type of feed is this?',
    'شرکت برای یک سرویس تجاری مثل Recorded Future پول می‌دهد که اطلاعات تهدید دست‌چین‌شده و مطمئن با توضیح کامل می‌دهد. این چه نوع فیدی است؟',
    'پولی و مال یک شرکت خاص = اختصاصی.',
    ['Proprietary feed','OSINT','ISAC','Responsible disclosure'],
    ['فید تجاری/اختصاصی (Proprietary)','OSINT','ISAC','افشای مسئولانه'],
    'Proprietary feeds are commercial platforms (FireEye, Recorded Future, Palo Alto Cortex XSOAR) that sell curated, high-confidence data with context and attribution.',
    'فید Proprietary پولی است. مثل روزنامه‌ی اشتراکی: کسی اطلاعات را جمع، بررسی و مرتب کرده و به تو می‌فروشد.');

  M(T2,'Security staff are alerted that employee usernames and passwords are being sold on an underground forum. Which source found this?',
    'به تیم امنیت خبر می‌رسد که نام‌کاربری و رمز کارمندها در یک انجمن زیرزمینی فروخته می‌شود. کدام منبع این را پیدا کرده؟',
    'انجمن‌های زیرزمینی و بازارهای مخفی کجای اینترنت هستند؟',
    ['Dark web monitoring','Static code analysis','SNMP polling','A configuration baseline'],
    ['پایش دارک‌وب (Dark web monitoring)','تحلیل ایستای کد','SNMP','baseline پیکربندی'],
    'Dark web monitoring tracks leaked credentials, malware discussions and exploits in underground forums and marketplaces.',
    'Dark web بخش مخفی اینترنت است که تبهکارها آنجا اطلاعات دزدی می‌فروشند. Dark web monitoring آنجا را می‌گردد تا ببیند رمزهای شرکت لو رفته یا نه.');

  M(T2,'What is the main difference between a vulnerability scan and a penetration test?',
    'فرق اصلی اسکن آسیب‌پذیری با تست نفوذ چیست؟',
    'یکی فقط «پیدا می‌کند»، دیگری «امتحان می‌کند که واقعاً می‌شود وارد شد».',
    ['A pen test actively tries to exploit weaknesses; a scan only detects known issues','A scan is always manual; a pen test is always automated','A pen test only checks for missing patches','There is no difference'],
    ['تست نفوذ واقعاً سعی می‌کند از ضعف سوءاستفاده کند؛ اسکن فقط ضعف‌های شناخته‌شده را پیدا می‌کند','اسکن همیشه دستی و تست نفوذ همیشه خودکار است','تست نفوذ فقط وصله‌های جاافتاده را چک می‌کند','هیچ فرقی ندارند'],
    'A scanner reports known issues. A penetration test simulates a real attack and tries to exploit weaknesses to show how far an attacker could actually get.',
    'اسکنر مثل کسی است که دور خانه می‌گردد و می‌گوید «این پنجره قفل ندارد». تست نفوذ مثل کسی است که واقعاً از پنجره وارد می‌شود تا ببیند تا کجای خانه می‌تواند برود.');

  M(T2,'A pen tester is hired with no information about the company network, to act like an outside attacker. What type of test is this?',
    'یک تست‌کننده‌ی نفوذ استخدام می‌شود بدون اینکه هیچ اطلاعاتی از شبکه‌ی شرکت داشته باشد، تا مثل یک هکر بیرونی رفتار کند. این چه نوع تستی است؟',
    'جعبه‌ای که داخلش را نمی‌بینی چه رنگی است؟',
    ['Black-box','White-box','Gray-box','Authenticated scan'],
    ['جعبه‌سیاه (Black-box)','جعبه‌سفید (White-box)','جعبه‌خاکستری (Gray-box)','اسکن احراز هویت‌شده'],
    'Black-box: no prior knowledge, simulating an external attacker. White-box: full knowledge. Gray-box: partial knowledge.',
    'Black-box = هیچ چیز نمی‌داند (مثل هکر غریبه). White-box = همه چیز را می‌داند، حتی نقشه و کد. Gray-box = کمی می‌داند، مثلاً یک حساب کاربری معمولی دارد.');

  M(T2,'A tester is given network diagrams, source code and admin credentials before testing. What type of penetration test is this?',
    'به تست‌کننده قبل از شروع، نقشه‌ی شبکه، کد برنامه و رمز ادمین داده شده. این چه نوع تست نفوذی است؟',
    'همه چیز «شفاف» و معلوم است.',
    ['White-box','Black-box','Gray-box','Passive'],
    ['جعبه‌سفید (White-box)','جعبه‌سیاه (Black-box)','جعبه‌خاکستری (Gray-box)','غیرفعال (Passive)'],
    'White-box testing gives the tester full knowledge of the system, giving a deep internal, trusted view.',
    'White-box یعنی جعبه شیشه‌ای است و همه چیز داخلش پیداست. تست‌کننده همه‌ی اطلاعات را دارد.');

  M(T2,'Which tool is a framework for developing and running exploit code during a penetration test?',
    'کدام ابزار، چارچوبی برای ساختن و اجرای کدهای حمله (exploit) در تست نفوذ است؟',
    'اسمش با Meta شروع می‌شود.',
    ['Metasploit','Burp Suite','OpenVAS','Microsoft Sentinel'],
    ['Metasploit','Burp Suite','OpenVAS','Microsoft Sentinel'],
    'Metasploit is the exploit framework. Burp Suite is for testing web applications. OpenVAS is a scanner. Sentinel is a SIEM.',
    'Metasploit جعبه‌ابزار حمله است. Burp Suite مخصوص تست سایت‌ها و برنامه‌های وب است. OpenVAS اسکنر است. Sentinel یک SIEM است.');

  M(T2,'A company invites outside researchers through HackerOne to report bugs ethically in exchange for rewards. What is this?',
    'شرکت از طریق HackerOne از محققان بیرونی دعوت می‌کند که باگ‌ها را به روش اخلاقی گزارش کنند و در عوض جایزه بگیرند. این چیست؟',
    'Bugcrowd هم همین کار را می‌کند.',
    ['A responsible disclosure / bug bounty program','An ISAC','A compensating control','A system audit'],
    ['برنامه‌ی افشای مسئولانه / جایزه‌ی باگ (Bug bounty)','ISAC','کنترل جایگزین','ممیزی سیستم'],
    'Responsible disclosure programs (HackerOne, Bugcrowd) give researchers a clear, legal channel to report vulnerabilities, often with rewards, so issues are fixed before attackers exploit them.',
    'شرکت می‌گوید: «اگر ضعفی پیدا کردی، به جای سوءاستفاده به ما بگو تا جایزه بگیری.» هکرِ خوب امنیت قانونی و پول می‌گیرد، شرکت هم زودتر مشکل را درست می‌کند.');

  M(T2,'An external assessor reviews firewall rules against CIS benchmarks and checks user permissions for PCI DSS compliance. What is this activity?',
    'یک ارزیاب بیرونی قانون‌های فایروال را با استاندارد CIS مقایسه می‌کند و دسترسی کاربران را برای انطباق با PCI DSS بررسی می‌کند. این چه فعالیتی است؟',
    'بررسی دستی و بر اساس قانون و سیاست، نه حمله.',
    ['A system and process audit','A penetration test','A DAST scan','Dark web monitoring'],
    ['ممیزی سیستم و فرایند (Audit)','تست نفوذ','اسکن DAST','پایش دارک‌وب'],
    'Audits are structured, often manual or policy-driven reviews: configuration reviews, access control checks and compliance assessments. They can be internal or external.',
    'Audit مثل بازرسی مدرسه است: بازرس با چک‌لیست می‌آید و نگاه می‌کند همه چیز طبق قانون است یا نه. حمله نمی‌کند، فقط بررسی می‌کند.');

  M(T3,'Which three things should be weighed when analyzing a vulnerability?',
    'وقتی یک آسیب‌پذیری را تحلیل می‌کنیم، کدام سه چیز را باید بسنجیم؟',
    'چقدر بد است؟ چقدر احتمال دارد؟ چقدر به کسب‌وکار ضربه می‌زند؟',
    ['Severity, likelihood and business impact','Price, colour and vendor','Only the CVSS base score','Number of users and screen size'],
    ['شدت، احتمال و اثر بر کسب‌وکار','قیمت، رنگ و فروشنده','فقط امتیاز پایه‌ی CVSS','تعداد کاربران و اندازه‌ی صفحه'],
    'Analysis looks at severity (how damaging), likelihood (how probable, e.g. public exploits) and business impact (downtime, legal, reputation, money).',
    'سه سؤال: ۱) اگر سوءاستفاده شود چقدر خراب می‌شود؟ (شدت) ۲) چقدر احتمال دارد کسی سوءاستفاده کند؟ (احتمال) ۳) چقدر به کار شرکت، پول و آبرویش ضربه می‌زند؟ (اثر بر کسب‌وکار)');

  M(T3,'What range of scores does CVSS use?',
    'امتیاز CVSS بین چه عددهایی است؟',
    'از «هیچ» تا «بحرانی».',
    ['0.0 to 10.0','1 to 5','0 to 100','A to F'],
    ['۰ تا ۱۰','۱ تا ۵','۰ تا ۱۰۰','A تا F'],
    'CVSS scores range from 0.0 (none) to 10.0 (critical).',
    'CVSS مثل نمره است، از ۰ (بی‌خطر) تا ۱۰ (خیلی خطرناک). هر چه بالاتر، زودتر باید درستش کنی.');

  M(T3,'A CVSS 9.8 flaw is found on a public web app and a CVSS 5.0 flaw on an isolated internal system. What is the best approach?',
    'یک ضعف با امتیاز ۹٫۸ روی سایت عمومی پیدا شده و یک ضعف با امتیاز ۵ روی یک سیستم داخلی جداافتاده. بهترین کار چیست؟',
    'امتیاز بالا + در معرض اینترنت = اول همین.',
    ['Patch the 9.8 public-facing flaw immediately; handle the 5.0 in routine updates','Fix the 5.0 first because it is easier','Ignore both until the next audit','Buy cyber insurance instead of patching'],
    ['ضعف ۹٫۸ روی سایت عمومی را فوراً وصله کن؛ ضعف ۵ را در آپدیت‌های معمول','اول ضعف ۵ را درست کن چون راحت‌تر است','هر دو را تا ممیزی بعدی نادیده بگیر','به جای وصله، بیمه‌ی سایبری بخر'],
    'High severity plus internet exposure means immediate patching. A medium flaw on an isolated system can wait for routine maintenance.',
    'امتیاز ۹٫۸ خیلی خطرناک است و سایت هم جلوی چشم همه‌ی هکرهای دنیاست، پس فوری. ضعف ۵ روی سیستمی که به اینترنت وصل نیست، می‌تواند تا آپدیت بعدی صبر کند.');

  M(T3,'Which CVSS metric group asks "how easy is it to exploit?" (attack vector, complexity, privileges required)?',
    'کدام گروه از معیارهای CVSS می‌پرسد «سوءاستفاده از این ضعف چقدر آسان است؟» (راه حمله، پیچیدگی، دسترسی لازم)',
    'Exploit یعنی سوءاستفاده.',
    ['Exploitability','Impact','Scope','Environmental'],
    ['Exploitability (قابلیت سوءاستفاده)','Impact (اثر)','Scope (دامنه)','Environmental (محیطی)'],
    'Exploitability = how easy to exploit. Impact = effect on confidentiality, integrity, availability. Scope = whether it spreads to other components. Temporal/Environmental adjust for exploit maturity and your environment.',
    'Exploitability = سوءاستفاده چقدر راحت است. Impact = اگر بشود، چقدر به CIA ضربه می‌زند. Scope = فقط همان قسمت آسیب می‌بیند یا به بقیه هم سرایت می‌کند. Temporal و Environmental = امتیاز را بر اساس شرایط روز و محیط خودت تنظیم می‌کنند.');

  M(T3,'In CVSS, what does the Scope metric describe?',
    'در CVSS، معیار Scope (دامنه) چه چیزی را نشان می‌دهد؟',
    'فقط یک قسمت یا زنجیره‌وار به بقیه؟',
    ['Whether the vulnerability affects only one component or cascades to others','How much the patch costs','How many CVE numbers it has','Which country found the flaw'],
    ['اینکه ضعف فقط یک قسمت را درگیر می‌کند یا به قسمت‌های دیگر هم سرایت می‌کند','هزینه‌ی وصله چقدر است','چند شماره‌ی CVE دارد','کدام کشور ضعف را پیدا کرده'],
    'Scope shows whether exploitation stays in one component or has a cascading effect on others.',
    'Scope مثل این است که آتش فقط در یک اتاق بماند یا به کل خانه سرایت کند.');

  M(T3,'What is CVE-2023-12345?',
    'CVE-2023-12345 چیست؟',
    'یک «شماره‌ی شناسایی» است، نه یک نمره.',
    ['A unique identifier for a publicly known vulnerability','A severity score from 0 to 10','A type of malware','A SIEM product'],
    ['یک شناسه‌ی یکتا برای یک آسیب‌پذیری شناخته‌شده‌ی عمومی','نمره‌ی شدت از ۰ تا ۱۰','نوعی بدافزار','یک محصول SIEM'],
    'CVE gives each publicly known vulnerability a unique ID, managed by MITRE, so every tool and team refers to the same issue. Details are searchable at nvd.nist.gov.',
    'CVE مثل کد ملی برای هر ضعف است. هر ضعف شناخته‌شده یک شماره‌ی منحصربه‌فرد می‌گیرد تا همه‌ی ابزارها و تیم‌ها بدانند از کدام حرف می‌زنند. سازمان MITRE مدیریتش می‌کند.');

  M(T3,'What is the difference between CVE and CVSS?',
    'فرق CVE و CVSS چیست؟',
    'یکی «اسم» است، یکی «نمره».',
    ['CVE names the vulnerability; CVSS scores how severe it is','CVE scores severity; CVSS names it','They are the same thing','CVE is for hardware only'],
    ['CVE اسم/شماره‌ی ضعف است؛ CVSS نمره‌ی شدت آن','CVE نمره است و CVSS اسم','هر دو یکی‌اند','CVE فقط برای سخت‌افزار است'],
    'CVE = the identifier (which vulnerability). CVSS = the score (how bad it is, 0-10). A report usually gives both.',
    'CVE = اسم و شماره‌ی ضعف (کدام ضعف؟). CVSS = نمره‌ی خطرناکی (چقدر بد؟). مثل اسم دانش‌آموز و نمره‌اش.');

  M(T3,'Where can security staff look up a CVE to see its severity score, affected systems and fixes?',
    'تیم امنیت کجا می‌تواند یک CVE را جستجو کند تا نمره، سیستم‌های درگیر و راه‌حلش را ببیند؟',
    'پایگاه ملی آسیب‌پذیری آمریکا (NVD).',
    ['nvd.nist.gov','hackerone.com','The SIEM dashboard only','The CIS benchmark'],
    ['nvd.nist.gov','hackerone.com','فقط داشبورد SIEM','استاندارد CIS'],
    'The National Vulnerability Database (nvd.nist.gov) lists each CVE with its CVSS score, affected products and remediation.',
    'سایت nvd.nist.gov مثل دایرةالمعارف ضعف‌هاست؛ برای هر CVE نمره، محصولات درگیر و راه درمان را نوشته.');

  M(T3,'A scanner reports an outdated library as vulnerable, but the library is not actually used by the system. What is this?',
    'اسکنر می‌گوید یک کتابخانه‌ی قدیمی آسیب‌پذیر است، اما سیستم اصلاً از آن استفاده نمی‌کند. این چیست؟',
    'هشدار داد ولی در واقع مشکلی نبود.',
    ['False positive','False negative','True positive','True negative'],
    ['مثبت کاذب (False positive)','منفی کاذب (False negative)','مثبت درست (True positive)','منفی درست (True negative)'],
    'A false positive is a reported vulnerability that does not really exist. It wastes time and resources.',
    'False positive = آژیر بی‌دلیل. مثل دزدگیری که با رد شدن گربه آژیر می‌کشد. وقت تیم را هدر می‌دهد.');

  M(T3,'A real, unpatched web app vulnerability is missed because the scanner was misconfigured. What is this?',
    'یک ضعف واقعی و وصله‌نشده در برنامه‌ی وب پیدا نمی‌شود، چون اسکنر بد تنظیم شده بود. این چیست؟',
    'مشکل واقعاً بود، ولی هشداری نیامد.',
    ['False negative','False positive','True positive','Compensating control'],
    ['منفی کاذب (False negative)','مثبت کاذب (False positive)','مثبت درست (True positive)','کنترل جایگزین'],
    'A false negative is a real vulnerability that goes undetected. It is the more dangerous error because the threat stays hidden.',
    'False negative = دزد آمد و دزدگیر صدا نکرد. خطرناک‌تر است، چون فکر می‌کنی همه چیز امن است ولی نیست.');

  M(T3,'Which scanner error is generally more dangerous, and why?',
    'کدام خطای اسکنر معمولاً خطرناک‌تر است و چرا؟',
    'کدام یکی باعث می‌شود اصلاً از خطر خبردار نشوی؟',
    ['False negative, because a real threat goes unnoticed','False positive, because it creates too many tickets','True positive, because it costs money to fix','True negative, because nothing is reported'],
    ['منفی کاذب، چون یک تهدید واقعی دیده نمی‌شود','مثبت کاذب، چون تیکت زیادی درست می‌کند','مثبت درست، چون درست کردنش هزینه دارد','منفی درست، چون چیزی گزارش نمی‌شود'],
    'False positives waste effort, but false negatives leave real vulnerabilities open. Both are reduced by tuning scanners and manual verification.',
    'False positive فقط وقت تلف می‌کند، ولی False negative یک در باز را مخفی نگه می‌دارد. برای کم کردن هر دو، اسکنر را درست تنظیم کن و نتایج را دستی هم چک کن.');

  M(T3,'A vulnerability is found in a laptop\'s BIOS. How is it classified?',
    'یک ضعف در BIOS یک لپ‌تاپ پیدا شده. در کدام دسته قرار می‌گیرد؟',
    'BIOS نرم‌افزار داخلی خود سخت‌افزار است.',
    ['Hardware & firmware','Web-based','Network-based','Application-specific'],
    ['سخت‌افزار و firmware','وب','شبکه','مخصوص یک برنامه'],
    'Categories: OS-based, web-based (XSS, SQLi), network-based (open ports, weak TLS), application-specific (Adobe Reader, Apache), hardware & firmware (BIOS, chipset).',
    'دسته‌ها: سیستم‌عامل (مثل باگ ویندوز)، وب (مثل XSS و SQL injection)، شبکه (پورت باز، TLS ضعیف)، یک برنامه‌ی خاص (مثل Adobe Reader)، سخت‌افزار و firmware (مثل BIOS). دسته‌بندی کمک می‌کند کار را به تیم درست بدهی.');

  M(T3,'The same vulnerability is found on a hospital\'s patient system and on a startup\'s test server. Why might the hospital fix it first?',
    'یک ضعف یکسان، هم روی سیستم بیماران یک بیمارستان پیدا شده و هم روی سرور آزمایشی یک استارتاپ. چرا ممکن است بیمارستان زودتر درستش کند؟',
    'اهمیت دستگاه، قانون، و اینکه چقدر ریسک را تحمل می‌کنند.',
    ['Asset criticality, regulations (HIPAA) and lower risk tolerance','The CVSS score is different for hospitals','Hospitals have more scanners','Startups are not allowed to patch'],
    ['اهمیت دستگاه، قانون (HIPAA) و تحمل ریسک کمتر','امتیاز CVSS برای بیمارستان فرق دارد','بیمارستان اسکنر بیشتری دارد','استارتاپ‌ها اجازه‌ی وصله ندارند'],
    'Prioritization depends on the environment: asset criticality, exposure, regulations and business risk tolerance. A hospital tolerates far less risk than a startup.',
    'اولویت فقط به نمره بستگی ندارد. باید ببینی آن دستگاه چقدر مهم است، به اینترنت وصل است یا نه، قانون چه می‌گوید، و شرکت چقدر می‌تواند ریسک تحمل کند. جان بیمار در خطر است، پس بیمارستان خیلی کمتر ریسک قبول می‌کند.');

  M(T4,'What is the most direct and effective way to remediate a known software flaw?',
    'مستقیم‌ترین و مؤثرترین راه برای رفع یک ضعف نرم‌افزاری شناخته‌شده چیست؟',
    'سازنده یک آپدیت برایش داده.',
    ['Patching','Cyber insurance','An exception','Log archiving'],
    ['وصله کردن (Patching)','بیمه‌ی سایبری','استثنا (Exception)','بایگانی لاگ'],
    'Patching applies the vendor\'s fix and is the most effective, direct remediation.',
    'Patch یعنی آپدیتی که خود سازنده برای بستن همان سوراخ داده. بهترین و مستقیم‌ترین راه است.');

  M(T4,'A legacy app has an SQL injection flaw but the code cannot be changed. The team puts a WAF in front of it. What is the WAF here?',
    'یک برنامه‌ی قدیمی ضعف SQL injection دارد ولی نمی‌شود کدش را عوض کرد. تیم یک WAF جلویش می‌گذارد. WAF اینجا چه نقشی دارد؟',
    'راه اصلی (درست کردن کد) ممکن نیست، پس یک راه «جایگزین».',
    ['A compensating control','A patch','A false positive','Cyber insurance'],
    ['کنترل جایگزین (Compensating control)','وصله','مثبت کاذب','بیمه‌ی سایبری'],
    'A compensating control is an alternative safeguard used when the ideal fix is not feasible, such as a WAF instead of a code fix.',
    'وقتی نمی‌شود خود مشکل را درست کرد، یک محافظ دیگر جلویش می‌گذاری. مثل اینکه قفل در خراب است و نمی‌شود عوضش کرد، پس یک نگهبان جلوی در می‌گذاری.');

  M(T4,'Which remediation option transfers some of the financial risk of a breach to another company?',
    'کدام راه، بخشی از ضرر مالی یک حمله را به یک شرکت دیگر منتقل می‌کند؟',
    'مثل بیمه‌ی ماشین.',
    ['Cyber insurance','Network segmentation','Patching','Rescanning'],
    ['بیمه‌ی سایبری (Cyber insurance)','بخش‌بندی شبکه','وصله کردن','اسکن دوباره'],
    'Cyber insurance does not fix the vulnerability; it transfers part of the financial risk if a breach happens.',
    'بیمه جلوی حمله را نمی‌گیرد، فقط اگر حمله شد، بخشی از پول ضرر را بیمه می‌دهد. مثل بیمه‌ی ماشین: تصادف را متوقف نمی‌کند.');

  M(T4,'Which remediation method isolates critical assets so an attacker who gets in cannot move sideways to them?',
    'کدام روش، دستگاه‌های مهم را جدا می‌کند تا هکری که وارد شبکه شده نتواند به سمت آن‌ها برود؟',
    'حرکت به پهلو (lateral movement) را می‌گیرد.',
    ['Network segmentation','Cyber insurance','Responsible disclosure','Alert tuning'],
    ['بخش‌بندی شبکه (Segmentation)','بیمه‌ی سایبری','افشای مسئولانه','تنظیم هشدارها'],
    'Network segmentation isolates critical assets to prevent lateral movement by attackers.',
    'Segmentation شبکه را به اتاق‌های جدا با در قفل تقسیم می‌کند. هکری که وارد یک اتاق شد، به اتاق‌های مهم دسترسی ندارد.');

  M(T4,'A medical device cannot be patched because the vendor no longer supports it. The risk is formally documented and reviewed every quarter. What is this?',
    'یک دستگاه پزشکی را نمی‌شود وصله کرد چون سازنده دیگر پشتیبانی نمی‌کند. این ریسک رسماً ثبت می‌شود و هر سه ماه بازبینی می‌شود. این چیست؟',
    'رسماً قبول کرده‌اند که «فعلاً نمی‌شود درستش کرد».',
    ['An exception / exemption','A false negative','A patch','A white-box test'],
    ['استثنا / معافیت (Exception)','منفی کاذب','وصله','تست جعبه‌سفید'],
    'Exceptions and exemptions are formally documented cases where remediation is not possible. They must be tracked and revisited regularly.',
    'Exception یعنی رسماً می‌نویسی «این را نمی‌توانیم درست کنیم، دلیلش این است». ولی نباید فراموشش کنی؛ باید مرتب دوباره بررسی‌اش کنی.');

  M(T4,'After patching, how can the team best confirm the vulnerability is really gone?',
    'بعد از وصله کردن، تیم چطور بهتر از همه مطمئن شود ضعف واقعاً از بین رفته؟',
    'همان آزمایش را دوباره انجام بده.',
    ['Rescan the systems','Delete the old scan report','Assume the patch worked','Raise the CVSS score'],
    ['سیستم‌ها را دوباره اسکن کن','گزارش اسکن قبلی را پاک کن','فرض کن وصله کار کرده','امتیاز CVSS را بالا ببر'],
    'Validation methods: rescanning, reviewing audit trails, and independent verification by internal testers or third parties.',
    'به این مرحله Validation (تأیید) می‌گویند. راه‌ها: دوباره اسکن کن، گزارش‌ها (audit trail) را بخوان تا ببینی همه‌ی مراحل انجام شده، یا از یک نفر مستقل بخواه چک کند. مثل اینکه بعد از تعمیر ماشین، یک دور با آن رانندگی کنی.');

  M(T4,'Which item belongs in a vulnerability report?',
    'کدام مورد باید در گزارش آسیب‌پذیری باشد؟',
    'گزارش خوب می‌گوید: چه شد، چقدر بد بود، کجا، چه کردیم، کِی.',
    ['CVE/CVSS reference, impacted systems, remediation actions and timeline','The attacker\'s home address','Only the scanner\'s brand name','Employees\' personal passwords'],
    ['ارجاع CVE/CVSS، سیستم‌های درگیر، اقدامات رفع و زمان‌بندی','آدرس خانه‌ی هکر','فقط اسم برند اسکنر','رمزهای شخصی کارمندها'],
    'A good report has: a summary, CVSS/CVE reference, impacted systems, remediation actions taken or planned, and a timeline from discovery to resolution.',
    'گزارش خوب ۵ بخش دارد: خلاصه‌ی ضعف، شماره‌ی CVE و نمره‌ی CVSS، کدام سیستم‌ها درگیرند، چه کاری انجام شده یا قرار است بشود، و زمان‌بندی (کِی پیدا شد و کِی درست شد).');

  M(T5,'Why is real-time monitoring needed in addition to vulnerability scanning?',
    'چرا علاوه بر اسکن آسیب‌پذیری، به پایش لحظه‌ای (monitoring) هم نیاز داریم؟',
    'اسکن «ضعف» را پیدا می‌کند؛ پایش «حمله‌ی در حال وقوع» را.',
    ['It detects active threats that scanning misses','It replaces the need for patching','It lowers CVSS scores','It is required only for printers'],
    ['حمله‌های در حال وقوع را که اسکن نمی‌بیند پیدا می‌کند','دیگر نیازی به وصله نیست','امتیاز CVSS را پایین می‌آورد','فقط برای پرینترها لازم است'],
    'Scanning finds weaknesses at a point in time. Monitoring gives continuous visibility over systems, applications and infrastructure to detect active attacks quickly.',
    'اسکن مثل معاینه‌ی سالانه‌ی پزشک است؛ پایش مثل دستگاه ضربان قلب که لحظه‌به‌لحظه نشان می‌دهد چه خبر است. اگر حمله‌ای همین الان رخ بدهد، پایش زود خبر می‌دهد.');

  M(T5,'Logs from firewalls, servers and apps are all collected in one central place for analysis. What is this activity called?',
    'لاگ‌های فایروال، سرورها و برنامه‌ها همه در یک جای مرکزی جمع می‌شوند تا بررسی شوند. اسم این کار چیست؟',
    'Aggregate یعنی جمع کردن.',
    ['Log aggregation','Log archiving','Quarantine','Package monitoring'],
    ['تجمیع لاگ (Log aggregation)','بایگانی لاگ (Archiving)','قرنطینه','پایش بسته‌ها'],
    'Log aggregation centralizes logs from many sources so they can be analyzed and correlated together. Archiving is storing logs long-term for compliance and forensics.',
    'Aggregation = همه‌ی گزارش‌ها را یک جا جمع کنی تا کنار هم ببینی. Archiving = گزارش‌های قدیمی را برای مدت طولانی امن نگه داری، برای قانون و تحقیقات بعدی.');

  M(T5,'The SOC gets hundreds of meaningless alerts a day and analysts start ignoring them. Which activity helps most?',
    'مرکز امنیت (SOC) هر روز صدها هشدار بی‌معنی می‌گیرد و کارشناس‌ها دیگر به هشدارها توجه نمی‌کنند. کدام کار بیشتر کمک می‌کند؟',
    'باید هشدارها را «تنظیم» کنی تا فقط مهم‌ها بیایند.',
    ['Alert tuning to reduce noise and false positives','Turning off the SIEM','Archiving all alerts unread','Buying more scanners'],
    ['تنظیم هشدارها (Alert tuning) برای کم کردن هشدار بی‌مورد','خاموش کردن SIEM','بایگانی همه‌ی هشدارها بدون خواندن','خریدن اسکنر بیشتر'],
    'Alert tuning refines detection rules to reduce noise and false positives so real alerts stand out.',
    'Alert tuning یعنی تنظیم کنی که فقط هشدارهای واقعی بیایند. مثل چوپان دروغگو: اگر آژیر زیاد الکی بزند، روزی که گرگ واقعاً بیاید، کسی گوش نمی‌دهد.');

  M(T5,'Which tool collects, normalizes and correlates logs across the enterprise and raises alerts? Examples: Splunk, IBM QRadar, Microsoft Sentinel.',
    'کدام ابزار لاگ‌ها را از کل سازمان جمع می‌کند، یکدست می‌کند، کنار هم تحلیل می‌کند و هشدار می‌دهد؟ مثال‌ها: Splunk، IBM QRadar، Microsoft Sentinel.',
    'چهار حرف است و با S شروع می‌شود.',
    ['SIEM','SNMP','SCAP','DLP'],
    ['SIEM','SNMP','SCAP','DLP'],
    'A SIEM does real-time log correlation, alert prioritization, escalation, dashboards and reporting. It supports compliance, threat hunting and incident response.',
    'SIEM مغز مرکز امنیت است: از همه‌ی دستگاه‌ها گزارش می‌گیرد، کنار هم می‌گذارد و الگوی مشکوک پیدا می‌کند. مثلاً می‌بیند «۵۰ رمز غلط + ورود موفق + دانلود زیاد» پشت هم اتفاق افتاده، و آژیر می‌زند.');

  M(T5,'An analyst wants to see which IP addresses talk to each other, how much bandwidth they use and over which protocols. Which tool fits?',
    'یک کارشناس می‌خواهد ببیند کدام IPها با هم حرف می‌زنند، چقدر پهنای باند مصرف می‌کنند و با چه پروتکلی. کدام ابزار مناسب است؟',
    'Flow یعنی جریان ترافیک.',
    ['NetFlow','SNMP','SAST','CVE'],
    ['NetFlow','SNMP','SAST','CVE'],
    'NetFlow analyzes IP traffic flows: source/destination pairs, bandwidth and protocols. It helps spot unusual network behaviour.',
    'NetFlow مثل قبض تلفن است: محتوای مکالمه را نشان نمی‌دهد، ولی می‌گوید چه کسی، به چه کسی، چقدر و کِی زنگ زده. برای پیدا کردن ترافیک عجیب عالی است.');

  M(T5,'A network admin wants to monitor CPU usage, interface status and health of routers and switches. Which protocol is used?',
    'ادمین شبکه می‌خواهد مصرف CPU، وضعیت پورت‌ها و سلامت روترها و سوییچ‌ها را زیر نظر داشته باشد. از کدام پروتکل استفاده می‌شود؟',
    'Simple Network Management Protocol.',
    ['SNMP','NetFlow','SCAP','OSINT'],
    ['SNMP','NetFlow','SCAP','OSINT'],
    'SNMP gathers device metrics (CPU, bandwidth, interface status, health) from routers, switches and firewalls. NetFlow shows traffic; SNMP shows device health. Together they give full visibility.',
    'SNMP حال خود دستگاه‌ها را می‌پرسد، مثل دماسنج و فشارسنج. NetFlow ترافیک را نشان می‌دهد. با هم، هم ترافیک را می‌بینی هم سلامت دستگاه‌ها را.');

  M(T5,'Which suite of open standards automates vulnerability checks and compliance reporting using formats like XCCDF and OVAL?',
    'کدام مجموعه از استانداردهای باز، چک کردن آسیب‌پذیری و گزارش انطباق را با فرمت‌هایی مثل XCCDF و OVAL خودکار می‌کند؟',
    'Security Content Automation Protocol.',
    ['SCAP','SIEM','SNMP','CVSS'],
    ['SCAP','SIEM','SNMP','CVSS'],
    'SCAP standardizes how security tools describe and check vulnerabilities and settings, enabling automated scans against baselines and consistent compliance reports (NIST, PCI DSS).',
    'SCAP یک «زبان مشترک» برای ابزارهای امنیتی است، تا همه یک‌جور ضعف‌ها و تنظیمات را چک و گزارش کنند. با آن، اسکن خودکار و گزارش قانونی راحت‌تر و بدون اشتباه انسانی انجام می‌شود.');

  M(T5,'A company wants to stop employees emailing customer credit card numbers outside the company. Which tool fits?',
    'شرکت می‌خواهد جلوی کارمندهایی را بگیرد که شماره‌ی کارت مشتری‌ها را به بیرون ایمیل می‌کنند. کدام ابزار مناسب است؟',
    'Data Loss Prevention.',
    ['DLP','Antivirus','SNMP','NetFlow'],
    ['DLP (جلوگیری از نشت داده)','آنتی‌ویروس','SNMP','NetFlow'],
    'DLP monitors and controls data transfers to stop sensitive or regulated data from leaving.',
    'DLP مثل مأمور گمرک است: هر چیزی که از شرکت بیرون می‌رود را نگاه می‌کند و اگر اطلاعات حساس بود، جلویش را می‌گیرد.');

  M(T5,'Which monitoring approach installs software on each host to collect deep telemetry?',
    'کدام روش پایش، روی هر دستگاه یک نرم‌افزار نصب می‌کند تا اطلاعات دقیق و عمیق جمع کند؟',
    'Agent یعنی «مأمور» که روی خود دستگاه می‌نشیند.',
    ['Agent-based monitoring','Agentless monitoring','OSINT','Black-box testing'],
    ['پایش با عامل (Agent-based)','پایش بدون عامل (Agentless)','OSINT','تست جعبه‌سیاه'],
    'Agent-based monitoring installs software on hosts for deep data. Agentless uses protocols such as WMI or SSH to check remotely with less overhead.',
    'Agent-based = یک مأمور داخل هر خانه می‌گذاری؛ دقیق‌تر است ولی باید روی همه نصب شود. Agentless = از بیرون با WMI یا SSH سر می‌زنی؛ سبک‌تر است ولی جزئیات کمتری می‌بینی.');

  M(T5,'A team compares every server against CIS Benchmarks to detect settings that drifted from the secure standard. What are they using?',
    'تیم هر سرور را با CIS Benchmarks مقایسه می‌کند تا تنظیماتی که از حالت امن استاندارد خارج شده را پیدا کند. از چه چیزی استفاده می‌کنند؟',
    'یک «خط مبنا» از تنظیمات درست.',
    ['Benchmarks and configuration baselines','Dark web monitoring','Cyber insurance','A proprietary threat feed'],
    ['Benchmark و baseline پیکربندی','پایش دارک‌وب','بیمه‌ی سایبری','فید تهدید تجاری'],
    'Benchmarks and configuration baselines (e.g. CIS Benchmarks) define secure settings so tools can detect deviations from the expected state.',
    'Baseline مثل عکس «اتاق مرتب» است. هر روز اتاق را با عکس مقایسه می‌کنی تا ببینی چه چیزی جابه‌جا شده.');

  /* ================= MATCHING (PBQ) ================= */
  P('Penetration test types','Match each scenario to the correct penetration test type.',
    'هر سناریو را به نوع درست تست نفوذ وصل کنید.',
    ['Black-box','White-box','Gray-box'],['Black-box (هیچ اطلاعاتی)','White-box (همه‌ی اطلاعات)','Gray-box (کمی اطلاعات)'],
    [['The tester knows nothing and acts like an outside attacker',0,'تست‌کننده هیچ چیز نمی‌داند و مثل هکر بیرونی رفتار می‌کند'],
     ['The tester gets source code, diagrams and admin credentials',1,'تست‌کننده کد، نقشه‌ی شبکه و رمز ادمین را دارد'],
     ['The tester gets a normal user account but no diagrams',2,'تست‌کننده فقط یک حساب کاربری معمولی دارد، بدون نقشه'],
     ['Simulates a stranger on the internet',0,'شبیه یک غریبه در اینترنت'],
     ['Gives the deepest internal, trusted view',1,'عمیق‌ترین دید داخلی را می‌دهد']],
    [['No prior knowledge','بدون هیچ اطلاعات قبلی'],['Full knowledge','اطلاعات کامل'],['Partial knowledge','اطلاعات نصفه']],
    'Black-box = no knowledge (external attacker). White-box = full knowledge. Gray-box = partial knowledge.',
    'Black-box = هیچ نمی‌داند (هکر غریبه). White-box = همه چیز را می‌داند. Gray-box = کمی می‌داند.');

  P('Scanner accuracy','Match each scanner result to the correct term.',
    'هر نتیجه‌ی اسکنر را به اصطلاح درستش وصل کنید.',
    ['True positive','False positive','False negative','True negative'],['True positive (هشدار درست)','False positive (هشدار الکی)','False negative (خطر دیده نشد)','True negative (درست گفت مشکلی نیست)'],
    [['The scanner reports a missing patch, and the patch really is missing',0,'اسکنر می‌گوید وصله نصب نیست و واقعاً هم نصب نیست'],
     ['The scanner flags an unused library that is not really a risk',1,'اسکنر کتابخانه‌ای را که اصلاً استفاده نمی‌شود خطرناک اعلام می‌کند'],
     ['A real vulnerability is missed because of a misconfigured scanner',2,'یک ضعف واقعی به خاطر تنظیم بد اسکنر دیده نمی‌شود'],
     ['The scanner reports a fully patched server as clean, and it is clean',3,'اسکنر می‌گوید سرور سالم است و واقعاً سالم است']],
    [['Alert and real problem','هشدار + مشکل واقعی'],['Alert but no real problem','هشدار ولی مشکلی نیست'],['No alert but real problem','هشدار نیامد ولی مشکل هست'],['No alert and no problem','نه هشدار، نه مشکل']],
    'Positive/negative = did the scanner raise an alert. True/false = was the scanner right. False negatives are the most dangerous.',
    'Positive یا Negative = اسکنر هشدار داد یا نه. True یا False = اسکنر درست گفت یا اشتباه. False negative از همه خطرناک‌تر است، چون خطر واقعی مخفی می‌ماند.');

  P('Monitoring tools','Match each need to the correct tool.',
    'هر نیاز را به ابزار درستش وصل کنید.',
    ['SIEM','NetFlow','SNMP','SCAP','DLP'],['SIEM','NetFlow','SNMP','SCAP','DLP'],
    [['Correlate logs from the whole company and raise alerts',0,'لاگ‌های کل شرکت را کنار هم تحلیل کن و هشدار بده'],
     ['See which IPs talk to each other and how much bandwidth they use',1,'ببین کدام IPها با هم حرف می‌زنند و چقدر پهنای باند مصرف می‌کنند'],
     ['Check CPU and interface health of routers and switches',2,'سلامت CPU و پورت‌های روتر و سوییچ را چک کن'],
     ['Automate compliance checks with standard formats like XCCDF and OVAL',3,'چک کردن انطباق را با فرمت‌های استاندارد XCCDF و OVAL خودکار کن'],
     ['Stop credit card numbers from being emailed outside',4,'جلوی ایمیل شدن شماره‌کارت‌ها به بیرون را بگیر']],
    [['Log correlation and alerts','تحلیل لاگ و هشدار'],['Traffic flows','جریان ترافیک'],['Device health','سلامت دستگاه'],['Automated standards and compliance','استاندارد و انطباق خودکار'],['Stops data leaks','جلوگیری از نشت داده']],
    'SIEM correlates logs; NetFlow shows traffic flows; SNMP shows device health; SCAP automates standardized checks; DLP stops sensitive data leaving.',
    'SIEM = مغز تحلیل لاگ‌ها. NetFlow = قبض تلفن شبکه. SNMP = دماسنج دستگاه‌ها. SCAP = زبان مشترک برای چک خودکار. DLP = مأمور گمرک داده.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['9']={t:['Vulnerability management & monitoring','مدیریت آسیب‌پذیری و پایش'],b:[
    PP('A vulnerability is a weak spot, like a window with a broken lock. Vulnerability management means: find the weak spots, decide which are most dangerous, fix them, and check the fix worked. Then do it again, forever.',
      'آسیب‌پذیری یعنی یک نقطه‌ی ضعف، مثل پنجره‌ای که قفلش خراب است. مدیریت آسیب‌پذیری یعنی: ضعف‌ها را پیدا کن، ببین کدام خطرناک‌ترند، درستشان کن، و چک کن واقعاً درست شده‌اند. بعد دوباره از اول، برای همیشه.'),
    H('The cycle','چرخه‌ی چهار مرحله‌ای'),
    L([['1. Identify: find weaknesses (scanners, threat feeds, pen tests).','۱. پیدا کردن (Identify): ضعف‌ها را پیدا کن، با اسکنر، خبرهای تهدید، یا تست نفوذ.'],
       ['2. Analyze: how severe, how likely, what business impact (CVSS, CVE).','۲. تحلیل (Analyze): چقدر خطرناک است؟ چقدر احتمال دارد؟ چقدر به کار شرکت ضربه می‌زند؟ (با CVSS و CVE)'],
       ['3. Remediate: patch, segment, or add a compensating control.','۳. رفع (Remediate): وصله کن، شبکه را بخش‌بندی کن، یا یک محافظ جایگزین بگذار.'],
       ['4. Validate and report: rescan to confirm, then document.','۴. تأیید و گزارش (Validate): دوباره اسکن کن تا مطمئن شوی درست شده، بعد گزارش بنویس.']]),
    TT('It is a continuous cycle, never a one-time job: new threats appear every day.',
      'این کار هیچ‌وقت تمام نمی‌شود. مثل مسواک زدن است، چون هر روز ضعف تازه پیدا می‌شود.'),

    H('Finding weaknesses (identification)','راه‌های پیدا کردن ضعف'),
    TB([['Method','روش'],['What it does','چه کار می‌کند']],[
      [['Vulnerability scan','Vulnerability scan (اسکن)'],['Automated check against known flaws (CVE). Nessus, Qualys (cloud), OpenVAS (open-source)','یک ابزار خودکار، دستگاه‌ها را با فهرست ضعف‌های شناخته‌شده مقایسه می‌کند. مثل چک‌لیست بازرسی']],
      [['Penetration test','Penetration test (تست نفوذ)'],['Ethical hackers actually try to break in','یک هکر خوب واقعاً سعی می‌کند وارد شود تا ببیند تا کجا می‌رسد']],
      [['Threat intelligence','Threat intelligence (خبر تهدید)'],['Real-time news about new threats','خبرهای تازه درباره‌ی حمله‌ها و ضعف‌های جدید']],
      [['Responsible disclosure','Responsible disclosure (افشای مسئولانه)'],['Outside researchers report bugs for rewards (HackerOne, Bugcrowd)','محققان بیرونی باگ را به شرکت گزارش می‌دهند و جایزه می‌گیرند']],
      [['Audit','Audit (ممیزی)'],['Manual review of settings, access and compliance','بازرس با چک‌لیست می‌آید و تنظیمات و دسترسی‌ها را با قانون مقایسه می‌کند']]]),
    L([['Authenticated scan = logs in, sees inside, more accurate. Unauthenticated = outside view, like an attacker.','اسکن Authenticated با رمز وارد دستگاه می‌شود و از داخل نگاه می‌کند، پس دقیق‌تر است. اسکن Unauthenticated فقط از بیرون نگاه می‌کند، یعنی همان چیزی که هکر می‌بیند.'],
       ['Scanning should be paired with manual testing for accuracy and context.','اسکنر همیشه درست نمی‌گوید، پس نتایجش را دستی هم چک کن.']]),

    H('Testing applications','تست کردن برنامه‌ها'),
    TB([['Test','تست'],['When','کِی'],['Finds','چه پیدا می‌کند']],[
      [['SAST (static)','SAST (ایستا)'],['Reads code without running it','کد را می‌خواند، برنامه اجرا نمی‌شود'],['Hardcoded passwords, insecure functions','رمزی که داخل کد نوشته شده، اشتباه‌های منطقی']],
      [['DAST (dynamic)','DAST (پویا)'],['Attacks the running app','به برنامه‌ی روشن حمله می‌کند'],['SQL injection, XSS','حمله‌هایی مثل SQL injection و XSS']],
      [['Package monitoring','Package monitoring'],['Checks third-party libraries','قطعه‌های آماده‌ای که دیگران نوشته‌اند را چک می‌کند'],['Old or vulnerable dependencies (Snyk)','کتابخانه‌های قدیمی یا خراب (ابزار Snyk)']]]),
    TT('Static = not running (reads the code). Dynamic = running (attacks the app).',
      'Static = برنامه خاموش است و فقط کد را می‌خوانی، مثل غلط‌گیری انشا. Dynamic = برنامه روشن است و به آن حمله می‌کنی.'),

    H('Threat intelligence feeds','منابع خبر تهدید'),
    L([['OSINT: free public sources (CVE lists, blogs, GitHub, social media).','OSINT: منبع رایگان و عمومی، مثل سایت CVE، وبلاگ‌ها، گیت‌هاب و شبکه‌های اجتماعی.'],
       ['Proprietary: paid, curated feeds (FireEye, Recorded Future).','Proprietary: پولی. یک شرکت اطلاعات را جمع و بررسی کرده و به تو می‌فروشد.'],
       ['ISAC: industry groups sharing trusted info (FS-ISAC for banks).','ISAC: گروه خصوصی شرکت‌های یک صنعت که به هم خبر می‌دهند. مثلاً FS-ISAC برای بانک‌ها.'],
       ['Dark web monitoring: looks for leaked passwords and exploits for sale.','Dark web monitoring: بخش مخفی اینترنت را می‌گردد تا ببیند رمزهای شرکت آنجا فروخته می‌شود یا نه.']]),

    H('Penetration test types','انواع تست نفوذ'),
    TB([['Type','نوع'],['Tester knows','تست‌کننده چه می‌داند']],[
      [['Black-box','Black-box (جعبه‌سیاه)'],['Nothing, like an outside attacker','هیچ چیز؛ مثل یک هکر غریبه']],
      [['White-box','White-box (جعبه‌سفید)'],['Everything: code, diagrams, passwords','همه چیز: کد، نقشه‌ی شبکه، رمزها']],
      [['Gray-box','Gray-box (جعبه‌خاکستری)'],['A little, e.g. a normal user account','کمی؛ مثلاً یک حساب کاربری معمولی']]]),
    PP('Tools: Metasploit (exploit framework), Burp Suite (web app testing).',
      'ابزارها: Metasploit جعبه‌ابزار حمله است. Burp Suite مخصوص تست سایت‌ها و برنامه‌های وب است.'),

    H('Analyzing: how bad is it?','تحلیل: چقدر خطرناک است؟'),
    PP('Not every weakness is equally dangerous. You ask three questions: how bad (severity), how likely (likelihood), and how much it hurts the business (impact).',
      'همه‌ی ضعف‌ها به یک اندازه خطرناک نیستند. سه سؤال بپرس: چقدر بد است؟ (شدت) چقدر احتمال دارد اتفاق بیفتد؟ (احتمال) چقدر به کار، پول و آبروی شرکت ضربه می‌زند؟ (اثر)'),
    TB([['','' ],['CVE','CVE'],['CVSS','CVSS']],[
      [['What it is','چیست'],['A unique ID for a known vulnerability','یک شماره‌ی شناسایی برای هر ضعف؛ مثل کد ملی'],['A severity score','نمره‌ی خطرناکی']],
      [['Looks like','شکلش'],['CVE-2023-12345','CVE-2023-12345'],['0.0 to 10.0','از ۰ تا ۱۰']],
      [['Managed by','مسئولش'],['MITRE; look up at nvd.nist.gov','MITRE؛ جستجو در nvd.nist.gov'],['FIRST (used in scanners and reports)','سازمان FIRST؛ در اسکنرها و گزارش‌ها استفاده می‌شود']]]),
    L([['Exploitability: how easy to attack (attack vector, complexity, privileges needed).','Exploitability: حمله چقدر راحت است؟ (از کجا، چقدر سخت، چه دسترسی‌ای لازم است)'],
       ['Impact: damage to confidentiality, integrity, availability.','Impact: چقدر به محرمانگی، درستی و در دسترس بودن (CIA) ضربه می‌زند؟'],
       ['Scope: stays in one component or spreads to others.','Scope: فقط همان قسمت آسیب می‌بیند یا مثل آتش به بقیه سرایت می‌کند؟'],
       ['Temporal & environmental: adjust for exploit maturity and how important the system is to you.','Temporal و Environmental: نمره را بر اساس شرایط روز و اهمیت سیستم برای شرکت خودت تنظیم می‌کنند.']]),
    TT('CVE = the name. CVSS = the score. A CVSS 9.8 on a public website: fix now. A CVSS 5.0 on an isolated machine: next routine update.',
      'CVE = اسم ضعف. CVSS = نمره‌اش. ضعف ۹٫۸ روی سایتی که همه می‌بینند = همین الان درستش کن. ضعف ۵ روی دستگاهی که به اینترنت وصل نیست = در آپدیت معمولی بعدی.'),

    H('False positives and false negatives','آژیر الکی و خطر دیده‌نشده'),
    TB([['Result','نتیجه'],['Meaning','یعنی'],['Everyday example','مثال روزمره']],[
      [['False positive','False positive'],['Alert, but no real problem','هشدار آمد، ولی مشکلی نبود'],['Burglar alarm goes off because of a cat','دزدگیر به خاطر یک گربه آژیر می‌کشد']],
      [['False negative','False negative'],['Real problem, but no alert','مشکل واقعی بود، ولی هشداری نیامد'],['A burglar gets in and the alarm stays silent','دزد آمد و دزدگیر صدا نکرد']]]),
    TT('False negatives are more dangerous: you think you are safe, but you are not. Reduce both by tuning the scanner and checking manually.',
      'False negative خطرناک‌تر است، چون فکر می‌کنی امنی ولی نیستی. False positive فقط وقت تلف می‌کند. برای کم کردن هر دو، اسکنر را درست تنظیم کن و دستی هم چک کن.'),

    H('Classification and priority','دسته‌بندی و اولویت'),
    L([['Categories: OS, web (XSS, SQLi), network (open ports, weak TLS), application (Adobe Reader, Apache), hardware/firmware (BIOS).','دسته‌ها: سیستم‌عامل، وب (XSS و SQL injection)، شبکه (پورت باز، TLS ضعیف)، یک برنامه‌ی خاص (Adobe Reader، Apache)، سخت‌افزار و firmware (BIOS). هر دسته را تیم مخصوص خودش درست می‌کند.'],
       ['Priority also depends on: asset criticality, exposure (internet-facing?), regulations (PCI DSS, HIPAA), risk tolerance.','اولویت فقط به نمره بستگی ندارد. این‌ها هم مهم‌اند: آن دستگاه چقدر مهم است؟ به اینترنت وصل است؟ قانون چه می‌گوید؟ شرکت چقدر ریسک تحمل می‌کند؟ (بیمارستان خیلی کمتر از یک استارتاپ)']]),

    H('Fixing (remediation)','درست کردن (رفع)'),
    TB([['Option','راه'],['What it means','یعنی']],[
      [['Patching','Patching (وصله)'],['Install the vendor fix; best and most direct','آپدیتی که سازنده داده را نصب کن؛ بهترین راه']],
      [['Segmentation','Segmentation (بخش‌بندی)'],['Isolate important systems so attackers cannot move sideways','دستگاه‌های مهم را در اتاق جدا با در قفل بگذار']],
      [['Compensating control','Compensating control (جایگزین)'],['Another safeguard when the real fix is impossible (WAF instead of code fix)','وقتی نمی‌شود مشکل را درست کرد، یک محافظ دیگر جلویش بگذار؛ مثل گذاشتن WAF جلوی برنامه']],
      [['Cyber insurance','Cyber insurance (بیمه)'],['Moves some financial risk to an insurer','جلوی حمله را نمی‌گیرد؛ فقط بخشی از ضرر مالی را جبران می‌کند']],
      [['Exception','Exception (استثنا)'],['Documented "we cannot fix this now"; review regularly','رسماً می‌نویسی «فعلاً نمی‌شود درستش کرد» و مرتب دوباره بررسی‌اش می‌کنی']]]),

    H('Checking and reporting','چک کردن و گزارش'),
    L([['Validate: rescan, review audit trails, independent verification.','تأیید (Validate): دوباره اسکن کن، گزارش‌های ثبت‌شده را بخوان، یا از یک نفر مستقل بخواه چک کند. مثل اینکه بعد از تعمیر ماشین، یک دور با آن رانندگی کنی.'],
       ['Report: summary, CVE/CVSS, impacted systems, actions taken or planned, timeline.','گزارش خوب ۵ بخش دارد: خلاصه، شماره‌ی CVE و نمره‌ی CVSS، کدام سیستم‌ها درگیرند، چه کاری شده یا می‌شود، و زمان‌بندی.']]),

    H('Monitoring: watching all the time','پایش: همیشه حواست باشد'),
    PP('Scanning is like a yearly check-up at the doctor. Monitoring is like a heart monitor that watches every second. It catches attacks that are happening right now.',
      'اسکن مثل معاینه‌ی سالانه پیش پزشک است. پایش مثل دستگاه نوار قلب است که لحظه‌به‌لحظه نگاه می‌کند. حمله‌ای را که همین الان دارد اتفاق می‌افتد، پیدا می‌کند.'),
    L([['Log aggregation: collect all logs in one place.','Log aggregation: همه‌ی گزارش‌ها (لاگ‌ها) را یک جا جمع کن.'],
       ['Alerting & escalation: notify and send the incident to the right team.','Alerting: اگر چیز مشکوکی دیدی، هشدار بده و به تیم درست بسپار.'],
       ['Archiving: keep old logs safely for law and investigations.','Archiving: لاگ‌های قدیمی را امن نگه دار، برای قانون و تحقیقات بعدی.'],
       ['Quarantine: isolate an infected device.','Quarantine: دستگاه آلوده را از بقیه جدا کن.'],
       ['Alert tuning: cut useless alerts so real ones are noticed.','Alert tuning: هشدارهای الکی را کم کن تا هشدار واقعی گم نشود. یادت باشد داستان چوپان دروغگو.']]),

    H('Monitoring tools','ابزارهای پایش'),
    TB([['Tool','ابزار'],['Simple idea','به زبان ساده']],[
      [['SIEM','SIEM'],['Collects and correlates all logs, raises alerts (Splunk, QRadar, Sentinel)','مغز مرکز امنیت: همه‌ی گزارش‌ها را کنار هم می‌گذارد و الگوی مشکوک پیدا می‌کند']],
      [['NetFlow','NetFlow'],['Who talks to whom, how much, which protocol','مثل قبض تلفن: می‌گوید چه کسی با چه کسی و چقدر حرف زده، نه محتوای حرف را']],
      [['SNMP','SNMP'],['Health of routers and switches (CPU, interfaces)','مثل دماسنج: حال خود دستگاه‌های شبکه را می‌پرسد']],
      [['SCAP','SCAP'],['Open standards to automate checks and compliance reports (XCCDF, OVAL)','زبان مشترک ابزارهای امنیتی، تا چک کردن و گزارش‌دادن خودکار و یکسان باشد']],
      [['DLP','DLP'],['Stops sensitive data leaving','مثل مأمور گمرک: نمی‌گذارد اطلاعات حساس از شرکت بیرون برود']],
      [['Antivirus','Antivirus'],['Blocks known malware','بدافزارهای شناخته‌شده را پیدا و مسدود می‌کند']],
      [['Baselines (CIS)','Baseline (CIS)'],['Standard secure settings; detects drift','عکس «اتاق مرتب»؛ هر تغییری را نسبت به آن پیدا می‌کند']]]),
    L([['Agent-based: software on each host, deep data. Agentless: remote checks via WMI/SSH, lighter.','Agent-based: روی هر دستگاه یک نرم‌افزار نصب می‌کنی؛ دقیق‌تر است. Agentless: از راه دور با WMI یا SSH سر می‌زنی؛ سبک‌تر است ولی جزئیات کمتری می‌بینی.']]),
    TT('NetFlow = traffic. SNMP = device health. SIEM = brain that connects the logs. SCAP = automation standards. DLP = stops leaks.',
      'NetFlow = ترافیک. SNMP = سلامت دستگاه. SIEM = مغزی که لاگ‌ها را به هم وصل می‌کند. SCAP = استاندارد برای چک خودکار. DLP = جلوی نشت داده را می‌گیرد.')
  ]};
})();
