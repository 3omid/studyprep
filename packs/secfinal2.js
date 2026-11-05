/* Mock Security+ Exam (Final Quiz), questions 51-100. Loads after secfinal.js. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secfinal'});
  if(!pack)return;
  var M=pack._add;

  M(51,'If an automation tool blocks all outbound SMTP traffic without exception, which risk is most likely?',
    'اگر یک ابزار خودکار همه‌ی ترافیک خروجی SMTP (ارسال ایمیل) را بدون هیچ استثنایی مسدود کند، محتمل‌ترین خطر چیست؟',
    'سرور ایمیل خود شرکت هم ایمیل می‌فرستد!',
    ['False positives disrupting legitimate business operations','Data loss prevention bypass','Legal hold violations','Increased attack dwell time'],
    ['مثبت‌های کاذب که کار عادی و قانونی شرکت را مختل می‌کنند','دور زدن DLP (جلوگیری از نشت داده)','نقض Legal hold','بیشتر شدن مدت ماندن هکر در شبکه'],
    'A rule with no exceptions also blocks the company’s real mail servers and apps that send email, so legitimate traffic is treated as malicious (false positives) and business stops. Good rules block broadly but allow known, approved senders.',
    'اگر همه‌ی ارسال ایمیل بسته شود، سرور ایمیل خود شرکت، سیستم فاکتور و هشدارها هم دیگر نمی‌توانند ایمیل بفرستند. یعنی ترافیک سالم به اشتباه مخرب حساب شده (False positive) و کار شرکت مختل می‌شود. قانون خوب: همه را ببند، ولی برای فرستنده‌های مجاز استثنا بگذار.');

  M(52,'Which is the BEST example of automation enhancing employee retention in a SOC environment?',
    'کدام گزینه بهترین نمونه از این است که اتوماسیون باعث شود کارمندان SOC در شرکت بمانند (Employee retention)؟',
    'کار تکراری و خسته‌کننده باعث فرسودگی و رفتن کارمند می‌شود.',
    ['Reducing repetitive manual log reviews so analysts can focus on threat hunting','Removing Tier 1 analysts from escalation workflows','Increasing shift lengths to handle alert surges','Replacing analyst-led investigations with full AI systems'],
    ['کم کردن بررسی دستی و تکراری لاگ‌ها تا تحلیل‌گرها روی شکار تهدید تمرکز کنند','حذف تحلیل‌گران سطح ۱ از روند ارجاع','طولانی کردن شیفت‌ها برای مدیریت هجوم هشدارها','جایگزین کردن کامل تحقیقات تحلیل‌گرها با هوش مصنوعی'],
    'Boring, repetitive work causes burnout and people leave. When automation handles routine log review, analysts do more interesting work such as threat hunting, which keeps them engaged and less likely to quit.',
    'کار تکراری (مثل خواندن هزاران لاگ در روز) آدم را خسته و دلسرد می‌کند (Burnout) و کارمند استعفا می‌دهد. وقتی اتوماسیون این کارهای تکراری را انجام دهد، تحلیل‌گر به کارهای جذاب‌تر مثل شکار تهدید (Threat hunting) می‌رسد و راضی‌تر می‌ماند. طولانی کردن شیفت دقیقاً برعکس است.');

  M(53,'If a Tier 1 SOC analyst does not acknowledge an alert within 10 minutes, automation routes it to Tier 2. This BEST describes:',
    'اگر تحلیل‌گر سطح ۱ در SOC ظرف ۱۰ دقیقه یک هشدار را تأیید نکند، اتوماسیون آن را به سطح ۲ می‌فرستد. این بهتر از همه چه چیزی را توصیف می‌کند؟',
    'فرستادن کار به سطح بالاتر = ارجاع (Escalation).',
    ['Escalation workflow','Guard rails','Orchestration chaining','Incident containment'],
    ['گردش‌کار ارجاع (Escalation workflow)','Guard rails (نرده‌های محافظ)','زنجیره‌ی ارکستراسیون','مهار حادثه'],
    'Moving an alert to a higher tier when it is not handled in time is an escalation workflow. It makes sure important alerts are never ignored. Guard rails are limits that keep automation from doing harmful things.',
    'وقتی هشدار در زمان مشخص جواب نگیرد و به سطح بالاتر فرستاده شود = Escalation workflow. مثل تلفن پشتیبانی که اگر اپراتور اول جواب ندهد، تماس به سرپرست می‌رود. هدف: هیچ هشدار مهمی بی‌جواب نماند.');

  M(54,'Why is progressive reintroduction of systems recommended during recovery?',
    'چرا در مرحله‌ی بازیابی (Recovery) توصیه می‌شود سیستم‌ها «مرحله‌به‌مرحله» به محیط اصلی برگردانده شوند؟',
    'اگر همه را یک‌جا روشن کنیم و دوباره آلوده باشند چه؟',
    ['To validate system stability and detect anomalies before full production use','To allow forensic teams to capture live memory before system use','To comply with legal hold requirements','To reduce load on SIEM systems during recovery'],
    ['برای اینکه پایداری سیستم تأیید شود و رفتار غیرعادی قبل از استفاده‌ی کامل پیدا شود','برای اینکه تیم جرم‌شناسی قبل از استفاده RAM را بردارد','برای رعایت Legal hold','برای کم کردن بار SIEM در زمان بازیابی'],
    'Bringing systems back a few at a time, with close monitoring, shows whether they are stable and clean. If the attacker left a backdoor or a fix broke something, it is caught on a small scale instead of across the whole company.',
    'بعد از حادثه، همه‌ی سرورها را یک‌جا روشن نمی‌کنیم. اول یکی دو تا را برمی‌گردانیم و با دقت زیر نظر می‌گیریم: آیا پایدار است؟ رفتار عجیبی ندارد؟ اگر هکر یک در پشتی گذاشته باشد، در مقیاس کوچک پیدا می‌شود، نه در کل شرکت.');

  M(55,'Which automation use case BEST supports scalability in security operations without proportional staff increases?',
    'کدام کاربرد اتوماسیون بهتر از همه اجازه می‌دهد عملیات امنیتی بزرگ شود (مقیاس‌پذیر باشد) بدون اینکه به همان نسبت نیرو استخدام کنیم؟',
    'هر روز دستگاه و سرور جدید اضافه می‌شود؛ چه چیزی خودکار همه را امن تنظیم می‌کند؟',
    ['Automated baseline enforcement for new assets','Automated escalation of unresolved alerts','Periodic password rotation scripts','SIEM-driven ticket creation for suspicious logins'],
    ['اعمال خودکار خط مبنای امنیتی (Baseline) روی دارایی‌های جدید','ارجاع خودکار هشدارهای حل‌نشده','اسکریپت‌های دوره‌ای چرخش رمز','ساخت تیکت توسط SIEM برای ورودهای مشکوک'],
    'When every new server, laptop or cloud instance automatically gets the secure baseline configuration, the organization can grow from 100 to 10,000 assets without adding people to harden each one. SIEM ticket creation for suspicious logins still produces tickets that humans must work, so the workload still grows with the number of events.',
    'این را اشتباه زدی. اگر هر دستگاه جدید خودکار تنظیمات امن (Baseline) را بگیرد، شرکت می‌تواند از ۱۰۰ دستگاه به ۱۰ هزار دستگاه برسد بدون اینکه آدم بیشتری لازم باشد = مقیاس‌پذیری. تو «ساخت تیکت توسط SIEM» را زدی؛ این خوب است، ولی هر تیکت باز هم یک انسان لازم دارد که بررسی‌اش کند، پس با زیاد شدن رویدادها کار هم زیاد می‌شود. کلیدواژه: «Scalability بدون افزایش نیرو» = Baseline enforcement خودکار.',
    3);

  M(56,'A team identifies a SQL injection flaw, but the application never directly interfaces with user inputs. What is the most likely explanation?',
    'تیم یک آسیب‌پذیری SQL injection پیدا کرده، اما این برنامه اصلاً مستقیماً ورودی کاربر نمی‌گیرد. محتمل‌ترین توضیح چیست؟',
    'تزریق SQL به ورودی کاربر نیاز دارد. اگر ورودی نیست، گزارش اسکنر درست است؟',
    ['False positive','True positive','CVSS is misapplied','CVE not updated'],
    ['مثبت کاذب (False positive)','مثبت واقعی (True positive)','CVSS اشتباه به کار رفته','CVE به‌روز نشده'],
    'SQL injection needs a path for user input to reach a database query. If the application never takes user input, the scanner reported a problem that cannot really be exploited: a false positive. It should still be verified, then documented.',
    'برای SQL injection، هکر باید بتواند یک ورودی (مثل فرم یا آدرس) را به پایگاه داده برساند. اگر برنامه هیچ ورودی‌ای از کاربر نمی‌گیرد، اسکنر اشتباهی هشدار داده = False positive، مثل دزدگیری که با باد به صدا درمی‌آید. باز هم باید یک بار بررسی و ثبت شود.');

  M(57,'In an automated incident response workflow, which risk is MOST associated with a single point of failure in the automation platform?',
    'در یک گردش‌کار خودکار پاسخ به حادثه، کدام خطر بیشتر از همه به «نقطه‌ی شکست واحد» (Single point of failure) در پلتفرم اتوماسیون مربوط است؟',
    'پلتفرمی که به همه‌جا دسترسی دارد، اگر هک شود چه می‌شود؟',
    ['Compromised workflows being leveraged for mass system disruption','Delays in escalation to higher-tier analysts','Increased operational cost due to tool redundancy','Loss of forensic integrity in collected evidence'],
    ['استفاده از گردش‌کارهای هک‌شده برای مختل کردن گسترده‌ی سیستم‌ها','تأخیر در ارجاع به تحلیل‌گران سطح بالاتر','افزایش هزینه به خاطر ابزارهای تکراری','از دست رفتن یکپارچگی مدارک جمع‌شده'],
    'A SOAR platform holds powerful credentials and can disable accounts, block traffic and isolate hosts everywhere. If that one platform is compromised, the attacker can use its own workflows to shut down many systems at once. It must be protected like a crown jewel.',
    'پلتفرم اتوماسیون (SOAR) کلید همه‌جا را دارد: می‌تواند حساب غیرفعال کند، سرور قرنطینه کند و ترافیک ببندد. اگر هکر همین یک پلتفرم را بگیرد، با همان اسکریپت‌ها می‌تواند کل شرکت را یک‌جا از کار بیندازد. برای همین باید مثل باارزش‌ترین دارایی از آن محافظت کرد.');

  M(58,'In the detection phase, correlating multiple failed logins across accounts within a short timeframe is intended to:',
    'در مرحله‌ی تشخیص، هم‌بسته کردن چندین ورود ناموفق روی حساب‌های مختلف در یک بازه‌ی کوتاه، برای چه هدفی است؟',
    'تعداد زیادی حدس رمز در زمان کم.',
    ['Detect brute-force attacks','Identify insider threats','Validate false positives','Perform vulnerability scans'],
    ['تشخیص حمله‌های Brute force (حدس زدن رمز)','شناسایی تهدید داخلی','تأیید مثبت‌های کاذب','اجرای اسکن آسیب‌پذیری'],
    'Many failed logins in a short time, especially across many accounts, are the signature of brute-force guessing (or its variant, password spraying, where a few common passwords are tried on many accounts). A SIEM correlation rule raises one alert for the pattern.',
    'وقتی در چند دقیقه صدها ورود ناموفق روی حساب‌های مختلف دیده شود، یعنی کسی دارد رمز حدس می‌زند = Brute force. نوعی از آن Password spraying است: هکر یک رمز رایج مثل Winter2026! را روی همه‌ی حساب‌ها امتحان می‌کند تا هیچ حسابی قفل نشود. SIEM این الگو را تشخیص می‌دهد.');

  M(59,'Which IR lifecycle step involves correlating logs, alerts, and threat intelligence to determine attacker TTPs?',
    'کدام مرحله‌ی چرخه‌ی پاسخ به حادثه شامل هم‌بسته کردن لاگ‌ها، هشدارها و اطلاعات تهدید برای فهمیدن TTPهای هکر است؟',
    'بعد از اینکه حادثه «تشخیص» داده شد، باید بفهمیم دقیقاً چه شده و هکر چطور کار می‌کند.',
    ['Analysis','Detection','Containment','Lessons Learned'],
    ['Analysis (تحلیل)','Detection (تشخیص)','Containment (مهار)','Lessons Learned (درس‌های آموخته)'],
    'Analysis digs into the incident: correlating logs, alerts and threat intelligence to understand scope and the attacker’s tactics, techniques and procedures (TTPs), often mapped to MITRE ATT&CK. Detection only notices that something is wrong.',
    'Detection یعنی «فهمیدیم یک اتفاقی افتاده». Analysis یعنی کارآگاه‌بازی: لاگ‌ها، هشدارها و اطلاعات تهدید را کنار هم می‌گذاریم تا بفهمیم هکر چطور وارد شد، چه کرد و از چه روش‌هایی استفاده کرد (TTP = تاکتیک، تکنیک، رویه)، معمولاً با چارچوب MITRE ATT&CK.');

  M(60,'Which of the following would provide resiliency if a proxy server fails during peak traffic?',
    'اگر یک سرور پراکسی در اوج ترافیک از کار بیفتد، کدام گزینه تاب‌آوری (Resiliency) ایجاد می‌کند؟',
    'چند سرور و یک دستگاه که ترافیک را بین آن‌ها پخش کند.',
    ['Load balancing','IDS clustering','Host segmentation','Port isolation'],
    ['Load balancing (توزیع بار)','خوشه کردن IDS','بخش‌بندی میزبان','جداسازی پورت'],
    'A load balancer spreads traffic across several proxy servers and stops sending traffic to one that fails, so users keep working. It also handles peak load better. The other options are about detection or separation, not availability.',
    'Load balancer مثل مسئول صف بانک است که مشتری‌ها را بین چند باجه پخش می‌کند؛ اگر یک باجه بسته شود، مشتری‌ها را به باجه‌های دیگر می‌فرستد. پس اگر یک پراکسی خراب شود، کاربرها چیزی حس نمی‌کنند = Resiliency و Availability.');

  M(61,'Which control is most appropriate for detecting policy violations in outbound data transfers?',
    'کدام کنترل برای تشخیص نقض سیاست‌ها در «انتقال داده به بیرون» مناسب‌تر است؟',
    'اسمش یعنی «جلوگیری از نشت داده».',
    ['DLP','Antivirus','SCAP','SNMP'],
    ['DLP (جلوگیری از نشت داده)','آنتی‌ویروس','SCAP (بررسی خودکار تنظیمات امنیتی)','SNMP (پروتکل مدیریت شبکه)'],
    'Data Loss Prevention inspects data leaving the organization (email, uploads, USB) and flags or blocks content that breaks policy, such as credit card numbers or files labeled confidential. Antivirus looks for malware, SCAP checks configurations and SNMP manages network devices.',
    'DLP محتوای چیزی را که از شرکت بیرون می‌رود نگاه می‌کند. مثال: کارمند می‌خواهد فایلی پر از شماره‌ی کارت بانکی را به Gmail شخصی‌اش بفرستد؛ DLP آن را تشخیص می‌دهد و جلویش را می‌گیرد یا هشدار می‌دهد. آنتی‌ویروس دنبال بدافزار است، نه نشت داده.');

  M(62,'Which of the following actors is considered least sophisticated but still capable of causing disruption?',
    'کدام عامل تهدید کمترین مهارت را دارد ولی باز هم می‌تواند اختلال ایجاد کند؟',
    'کسی که ابزار آماده‌ی دیگران را اجرا می‌کند بدون اینکه بفهمد چطور کار می‌کند.',
    ['Script kiddie','Insider','Nation-state','Organized crime'],
    ['Script kiddie (هکر تازه‌کار با ابزار آماده)','Insider (تهدید داخلی)','Nation-state (هکرهای دولتی)','Organized crime (جرائم سازمان‌یافته)'],
    'A script kiddie (unskilled attacker) uses ready-made tools and scripts written by others, without deep knowledge. They are the least sophisticated, but a downloaded DDoS tool or exploit can still cause real damage. Nation-states are the most sophisticated and best funded.',
    'Script kiddie کسی است که ابزار آماده را از اینترنت دانلود می‌کند و اجرا می‌کند، بدون اینکه بفهمد پشتش چه خبر است. مهارتش کم است، ولی یک ابزار DDoS آماده هم می‌تواند سایت را از کار بیندازد. در طرف دیگر، هکرهای دولتی (Nation-state) پیشرفته‌ترین و پولدارترین هستند.');

  M(63,'What attribute most distinguishes organized crime groups from other external threat actors?',
    'کدام ویژگی بیشتر از همه گروه‌های جرائم سازمان‌یافته را از بقیه‌ی عوامل تهدید بیرونی متمایز می‌کند؟',
    'هدف اصلی آن‌ها چیست؟',
    ['Financial gain','Political motives','Use of default credentials','Limited funding'],
    ['سود مالی','انگیزه‌ی سیاسی','استفاده از رمزهای پیش‌فرض','بودجه‌ی محدود'],
    'Organized crime is driven by money: ransomware, fraud, stolen card data and extortion. Hacktivists and nation-states are more often driven by politics or ideology. Organized crime groups are usually well funded, not limited.',
    'گروه‌های جرائم سازمان‌یافته مثل یک شرکت تبهکار هستند و هدفشان «پول» است: باج‌افزار، کلاهبرداری، فروش اطلاعات کارت بانکی. Hacktivist برای عقیده و سیاست حمله می‌کند و Nation-state برای منافع یک کشور. این گروه‌ها معمولاً بودجه‌ی خوبی هم دارند.');

  M(64,'An attacker uses a phishing email to trick an employee into downloading malware. What type of vector is this?',
    'هکر با یک ایمیل فیشینگ کارمندی را فریب می‌دهد تا بدافزار دانلود کند. این چه نوع مسیر حمله‌ای (Vector) است؟',
    'چه کسی فریب خورد؟ یک کامپیوتر یا یک آدم؟',
    ['Human vector','Zero trust','Blockchain-based','Credential stuffing'],
    ['مسیر انسانی (Human vector، مهندسی اجتماعی)','Zero trust (اعتماد صفر)','مبتنی بر بلاک‌چین','Credential stuffing'],
    'Phishing targets people, not technical flaws: the attacker relies on the employee to click and download. That is a human vector (social engineering). Zero trust is a defensive model, not an attack vector.',
    'در فیشینگ، هکر از حفره‌ی نرم‌افزاری استفاده نمی‌کند؛ از «اعتماد و عجله‌ی آدم‌ها» استفاده می‌کند. کارمند خودش کلیک می‌کند و دانلود می‌کند = Human vector یا مهندسی اجتماعی. برای همین آموزش کارمندان یکی از مهم‌ترین دفاع‌هاست. Zero trust یک مدل دفاعی است، نه حمله.');

  M(65,'Which tool or control would best detect unauthorized shadow IT devices?',
    'کدام ابزار یا کنترل بهتر از همه دستگاه‌های غیرمجاز Shadow IT (دستگاه‌هایی که بدون اجازه‌ی IT وصل شده‌اند) را پیدا می‌کند؟',
    'ابزاری که شبکه را می‌گردد و می‌گوید «چه دستگاه‌هایی اینجا هستند».',
    ['Device inventory scanner','Patch management system','Email filtering gateway','Certificate pinning'],
    ['اسکنر فهرست دستگاه‌ها (Device inventory)','سیستم مدیریت وصله','درگاه فیلتر ایمیل','Certificate pinning (سنجاق کردن گواهی)'],
    'A device inventory or discovery scanner finds every device on the network and compares it to the approved asset list; anything unknown (a personal router, a rogue Raspberry Pi, an unapproved NAS) shows up. You cannot protect what you do not know exists.',
    'Shadow IT یعنی کارمندی بدون اجازه یک روتر وای‌فای یا یک هارد شبکه را به شبکه‌ی شرکت وصل کرده. اسکنر Inventory شبکه را می‌گردد، همه‌ی دستگاه‌ها را پیدا می‌کند و با لیست مجاز مقایسه می‌کند؛ هر چیز ناشناخته‌ای مشخص می‌شود. قانون: چیزی را که نمی‌شناسی، نمی‌توانی محافظت کنی.');

  M(66,'Which actor is most likely to abuse authorized access without using malware?',
    'کدام عامل تهدید به احتمال زیاد بدون استفاده از بدافزار، از دسترسی مجاز خودش سوءاستفاده می‌کند؟',
    'کسی که از قبل رمز و دسترسی دارد و لازم نیست چیزی را هک کند.',
    ['Insider','Nation-state','Hacktivist','Shadow IT'],
    ['Insider (تهدید داخلی، کارمند یا پیمانکار)','Nation-state (هکرهای دولتی)','Hacktivist (هکر با انگیزه‌ی عقیدتی)','Shadow IT (فناوری بدون اجازه)'],
    'An insider (employee, contractor) already has valid credentials and permissions, so they can copy or misuse data with normal tools, with no malware needed. That is also why insiders are hard to detect and why least privilege and UBA matter.',
    'Insider کارمند یا پیمانکاری است که از قبل رمز و دسترسی مجاز دارد. لازم نیست چیزی هک کند؛ مثلاً قبل از استعفا فایل مشتری‌ها را روی USB کپی می‌کند. چون کارش عادی به نظر می‌رسد، پیدا کردنش سخت است؛ برای همین Least privilege و UBA مهم هستند.');

  M(67,'What threat vector is used when malicious macros are embedded in Word documents?',
    'وقتی ماکروهای مخرب داخل فایل‌های Word قرار داده می‌شوند، از کدام مسیر حمله استفاده شده؟',
    'خطر داخل خود «فایل» است.',
    ['File-based','Message-based','Voice-based','Steganographic'],
    ['مبتنی بر فایل (File-based)','مبتنی بر پیام','مبتنی بر صدا','پنهان‌نگاری'],
    'The malicious code lives inside the document file and runs when the user enables macros, so it is a file-based vector. The file may arrive by email, but the vector the question asks about is the infected file itself.',
    'کد مخرب داخل خود فایل Word است و وقتی کاربر روی «Enable content» کلیک کند، اجرا می‌شود = File-based. ممکن است فایل با ایمیل آمده باشد، ولی خطر اصلی «فایل آلوده» است. برای همین شرکت‌ها ماکروی فایل‌هایی را که از اینترنت آمده‌اند به‌طور پیش‌فرض می‌بندند.');

  M(68,'How do open ports expand the attack surface of an organization?',
    'پورت‌های باز چطور سطح حمله (Attack surface) سازمان را بزرگ‌تر می‌کنند؟',
    'هر پورت باز یعنی یک سرویس که پشت آن منتظر اتصال است.',
    ['They expose services that can be scanned or exploited','They encrypt data at rest','They prevent email spoofing','They enhance firewall protection'],
    ['سرویس‌هایی را در معرض قرار می‌دهند که می‌شود اسکن کرد یا از آن‌ها سوءاستفاده کرد','داده‌ی ذخیره‌شده را رمز می‌کنند','جلوی جعل ایمیل را می‌گیرند','حفاظت فایروال را بیشتر می‌کنند'],
    'Every open port means a listening service that an attacker can find with a port scan and try to exploit (an unpatched flaw, a weak password). More open ports mean more doors to attack. Open ports never improve firewall protection; closing unused ports is a basic hardening step.',
    'این را اشتباه زدی. هر پورت باز مثل یک در است که پشتش یک سرویس منتظر است. هکر با اسکن پورت (مثل Nmap) درها را پیدا می‌کند و امتحان می‌کند. هرچه درهای باز بیشتر باشد، سطح حمله بزرگ‌تر است. تو «حفاظت فایروال را بیشتر می‌کنند» را زدی که برعکس است: پورت باز یعنی فایروال اجازه‌ی عبور داده؛ امنیت با «بستن» پورت‌های بی‌استفاده بیشتر می‌شود.',
    3);

  M(69,'Which threat vector involves cloned websites with intentionally misspelled domain names?',
    'کدام مسیر حمله از سایت‌های کپی‌شده با نام دامنه‌ای استفاده می‌کند که عمداً غلط املایی دارد؟',
    'مثل g00gle.com یا amazom.com.',
    ['Typosquatting','Social engineering','Watering hole','Fileless malware'],
    ['Typosquatting (ثبت دامنه با غلط تایپی)','Social engineering (مهندسی اجتماعی به‌طور کلی)','Watering hole (آلوده کردن سایتی که قربانی‌ها به آن می‌روند)','بدافزار بدون فایل'],
    'Typosquatting (URL hijacking) registers domains that look like real ones with a small typo (paypa1.com, microsfot.com) and hosts a cloned site to steal logins or spread malware. A watering hole infects a real site the victims already visit.',
    'Typosquatting یعنی هکر دامنه‌ای شبیه دامنه‌ی واقعی با یک غلط کوچک ثبت می‌کند، مثلاً paypa1.com به جای paypal.com، و یک کپی دقیق از سایت را آنجا می‌گذارد. کسی که اشتباه تایپ کند یا دقت نکند، رمزش را در سایت جعلی وارد می‌کند. فرق با Watering hole: در آن هکر خود سایت واقعی‌ای را که قربانی‌ها به آن می‌روند آلوده می‌کند.');

  M(70,'Which attack involves tricking a DNS resolver into caching forged IP addresses, redirecting users to malicious sites?',
    'کدام حمله DNS resolver را فریب می‌دهد تا آدرس IP جعلی را در حافظه‌ی موقت (Cache) نگه دارد و کاربران را به سایت مخرب بفرستد؟',
    'کلمه‌های کلیدی: Caching + جعلی = «مسموم کردن» حافظه‌ی موقت.',
    ['DNS cache poisoning','DNS tunneling','DNS amplification','On-path attack'],
    ['DNS cache poisoning (مسموم کردن کش DNS)','DNS tunneling (قاچاق داده داخل درخواست‌های DNS)','DNS amplification (حمله‌ی DDoS با تقویت DNS)','On-path attack (مرد میانی)'],
    'DNS cache poisoning puts a fake record into a resolver’s cache, so everyone using that resolver is sent to the attacker’s IP when they type the real name. DNSSEC prevents it by signing DNS records. DNS tunneling hides data inside DNS queries, and amplification is a DDoS technique.',
    'DNS مثل دفترچه‌ی تلفن اینترنت است: اسم سایت را به IP تبدیل می‌کند و جواب را مدتی در Cache نگه می‌دارد. در Cache poisoning، هکر یک جواب جعلی داخل این حافظه می‌گذارد؛ از آن به بعد هر کسی bank.com را بزند، به IP هکر می‌رود. دفاع: DNSSEC که رکوردها را امضا می‌کند.');

  M(71,'Which element of a firewall configuration would be most relevant for controlling traffic by application layer protocol type?',
    'کدام بخش از پیکربندی فایروال برای کنترل ترافیک بر اساس پروتکل لایه‌ی کاربرد (Application layer) مرتبط‌تر است؟',
    'لایه‌ی کاربرد یعنی خود محتوای وب، مثل آدرس‌ها؛ نه فقط IP و پورت.',
    ['URL filtering','NAT translation rules','Access control lists','Port forwarding'],
    ['فیلتر URL','قانون‌های ترجمه‌ی NAT','لیست‌های کنترل دسترسی (ACL)','Port forwarding (هدایت پورت)'],
    'URL filtering works at the application layer (layer 7): it reads the HTTP or HTTPS request and allows or blocks it by the web address or category. Basic ACLs, NAT and port forwarding only look at IP addresses and ports (layers 3 and 4).',
    'ACL، NAT و Port forwarding فقط به IP و پورت نگاه می‌کنند (لایه‌ی ۳ و ۴). URL filtering وارد لایه‌ی ۷ (کاربرد) می‌شود و خود درخواست وب را می‌خواند؛ مثلاً می‌گوید «سایت‌های قمار ممنوع» حتی اگر از همان پورت ۴۴۳ باشند. فایروال‌های نسل جدید (NGFW) این کار را می‌کنند.');

  M(72,'What type of sensor detects heat signatures?',
    'کدام نوع حسگر «گرما» را تشخیص می‌دهد؟',
    'نور نامرئی که از بدن گرم ساطع می‌شود.',
    ['Infrared','Ultrasonic','Pressure','Microwave'],
    ['Infrared (مادون قرمز)','Ultrasonic (فراصوت)','Pressure (فشار)','Microwave (مایکروویو)'],
    'Infrared (PIR) sensors detect the heat that people and animals give off, so they notice a warm body moving through a room. Ultrasonic and microwave sensors bounce sound or radio waves off objects, and pressure sensors react to weight.',
    'بدن انسان گرما (اشعه‌ی مادون قرمز) ساطع می‌کند. حسگر Infrared این گرما را می‌بیند؛ مثل حسگر چراغ راهرو که وقتی رد می‌شوی روشن می‌شود. Ultrasonic با صدا، Microwave با امواج رادیویی و Pressure با فشار (وزن) کار می‌کنند.');

  M(73,'What is a directive control?',
    'کنترل دستوری (Directive control) چیست؟',
    'کنترلی که «می‌گوید چه کار کن» یا «چه کار نکن»، مثل یک سیاست یا تابلو.',
    ['A control that provides policy-based guidance','A sensor that detects motion','A tool that responds to alerts','A control that replaces preventive controls'],
    ['کنترلی که بر اساس سیاست، راهنمایی و دستور می‌دهد','حسگری که حرکت را تشخیص می‌دهد','ابزاری که به هشدارها پاسخ می‌دهد','کنترلی که جای کنترل‌های پیشگیرانه را می‌گیرد'],
    'A directive control tells people what to do or not do: policies, procedures, an acceptable use policy, a "Authorized personnel only" sign. It relies on people following it. A motion sensor is detective and a tool that responds to alerts is corrective.',
    'Directive control یعنی «دستور دادن»: سیاست امنیتی، دستورالعمل، تابلوی «ورود افراد متفرقه ممنوع». خودش جلوی کسی را نمی‌گیرد، فقط می‌گوید چه کار کن. حسگر حرکت = Detective (تشخیصی) و ابزاری که به هشدار پاسخ می‌دهد = Corrective (اصلاحی).');

  M(74,'What is the purpose of a compensating control?',
    'هدف کنترل جبرانی (Compensating control) چیست؟',
    'وقتی کنترل اصلی را نمی‌شود پیاده کرد، یک کنترل «جایگزین» می‌گذاریم.',
    ['To provide alternate protection when a primary control is not feasible','To replace physical controls','To block all unauthorized access','To document control failures'],
    ['ایجاد حفاظت جایگزین وقتی کنترل اصلی شدنی نیست','جایگزین کردن کنترل‌های فیزیکی','مسدود کردن همه‌ی دسترسی‌های غیرمجاز','مستند کردن شکست کنترل‌ها'],
    'A compensating control gives similar protection when the normal control cannot be used. Example: an old machine cannot be patched, so it is placed on an isolated VLAN with strict firewall rules and extra monitoring.',
    'Compensating control یعنی «اگر نشد، این را جایش بگذار». مثال: یک دستگاه پزشکی قدیمی را نمی‌شود Patch کرد (کنترل اصلی شدنی نیست)؛ پس آن را در یک VLAN جدا می‌گذاریم، با فایروال سخت و پایش بیشتر. خطر را تقریباً به همان اندازه کم می‌کند.');

  M(75,'Which deception technology is best to identify unauthorized data access attempts?',
    'کدام فناوری فریب (Deception) برای شناسایی تلاش‌های دسترسی غیرمجاز به «داده» بهتر است؟',
    'یک «فایل» طعمه که هیچ‌کس نباید بازش کند.',
    ['Honeyfile','IDS','Biometric sensor','VPN'],
    ['Honeyfile (فایل طعمه)','IDS (سیستم تشخیص نفوذ)','حسگر بیومتریک','VPN'],
    'A honeyfile is a fake but attractive file (for example "passwords.xlsx" or "salaries_2026.docx") that nobody has a reason to open. Any access to it triggers an alert, which reveals someone snooping on data. IDS is a detection system, not a deception tool.',
    'Honeyfile یک فایل طعمه است با اسم وسوسه‌انگیز مثل «رمزها.xlsx» یا «حقوق مدیران.docx». هیچ کارمندی کاری با آن ندارد، پس اگر کسی بازش کند، فوراً هشدار می‌آید که یک نفر دارد در داده‌ها سرک می‌کشد. خانواده‌ی فریب: Honeypot (سرور)، Honeynet (شبکه)، Honeyfile (فایل)، Honeytoken (داده‌ی جعلی مثل یک رمز تقلبی).');

  M(76,'What is the primary purpose of a honeypot?',
    'هدف اصلی Honeypot (سیستم طعمه) چیست؟',
    'یک سیستم تقلبی که هکر را سرگرم می‌کند و ما او را تماشا می‌کنیم.',
    ['Mislead attackers and monitor activity','Provide storage for logs','Defend against phishing','Isolate malware infections'],
    ['گمراه کردن هکرها و زیر نظر گرفتن فعالیتشان','فضایی برای نگهداری لاگ‌ها','دفاع در برابر فیشینگ','جدا کردن آلودگی‌های بدافزاری'],
    'A honeypot is a decoy system that looks valuable and vulnerable. Attackers waste time on it while defenders record their tools and techniques. Real users never touch it, so any activity on it is suspicious.',
    'Honeypot یک سرور تقلبی است که آسیب‌پذیر و باارزش به نظر می‌رسد. هکر سرگرم آن می‌شود و وقتش هدر می‌رود، و ما همه‌ی کارهایش را ثبت می‌کنیم تا روش‌هایش را یاد بگیریم. چون هیچ کاربر واقعی با آن کار ندارد، هر فعالیتی روی آن مشکوک است.');

  M(77,'What is the function of the Policy Enforcement Point (PEP) in Zero Trust?',
    'در Zero Trust، نقش Policy Enforcement Point (PEP، نقطه‌ی اجرای سیاست) چیست؟',
    'یکی «تصمیم می‌گیرد» (PDP در Control plane) و یکی «اجرا می‌کند» (PEP در Data plane).',
    ['Enforce access decisions made by the control plane','Decide whether access should be granted','Log all network traffic','Block access to encrypted traffic'],
    ['اجرای تصمیم‌های دسترسی که Control plane گرفته است','تصمیم‌گیری درباره‌ی اینکه دسترسی داده شود یا نه','ثبت همه‌ی ترافیک شبکه','مسدود کردن دسترسی به ترافیک رمزشده'],
    'In Zero Trust the Policy Decision Point (Policy Engine plus Policy Administrator, in the control plane) decides, and the Policy Enforcement Point (in the data plane) sits in front of the resource and allows or blocks the connection based on that decision. Deciding is the PDP’s job, not the PEP’s.',
    'در Zero Trust مثل یک ساختمان است: PDP (در Control plane) مثل مدیر امنیت است که «تصمیم» می‌گیرد آیا این آدم اجازه دارد. PEP (در Data plane) مثل نگهبان دم در است که تصمیم را «اجرا» می‌کند: در را باز یا بسته می‌کند. کلیدواژه: Decide = PDP، Enforce = PEP.');

  M(78,'Which principle involves least privilege and no implicit trust?',
    'کدام اصل شامل حداقل دسترسی و «هیچ اعتماد ضمنی» است؟',
    'شعارش: «هرگز اعتماد نکن، همیشه بررسی کن».',
    ['Zero Trust','Authentication','Identity Federation','Role-Based Access'],
    ['Zero Trust (اعتماد صفر)','Authentication (احراز هویت)','Identity Federation (اتحاد هویت)','Role-Based Access (دسترسی بر اساس نقش)'],
    'Zero Trust means "never trust, always verify": nothing is trusted just because it is inside the network. Every request is checked (identity, device, context) and given only the access it needs (least privilege).',
    'Zero Trust یعنی «هیچ‌وقت اعتماد نکن، همیشه بررسی کن». در مدل قدیمی، هر کس داخل شبکه بود قابل اعتماد بود. در Zero Trust حتی کسی که داخل دفتر نشسته، برای هر درخواست بررسی می‌شود (هویت، دستگاه، موقعیت) و فقط همان دسترسی لازم را می‌گیرد.');

  M(79,'Which of the following is an example of a technical control?',
    'کدام گزینه نمونه‌ی یک کنترل فنی (Technical control) است؟',
    'کنترل فنی با سخت‌افزار یا نرم‌افزار کار می‌کند، نه با آدم یا کاغذ.',
    ['Firewall','Security policy','Access badge','Security guard'],
    ['فایروال','سیاست امنیتی','کارت ورود (Access badge)','نگهبان'],
    'A technical (logical) control is enforced by technology: firewalls, encryption, antivirus, MFA. A security policy is managerial or directive, while an access badge and a guard are physical controls; the badge is a physical object for the door, even if a card reader is involved.',
    'این را اشتباه زدی. کنترل‌ها سه دسته‌اند: فنی (با نرم‌افزار و سخت‌افزار: فایروال، رمزگذاری، MFA)، مدیریتی (سیاست، آموزش) و فیزیکی (قفل، نگهبان، کارت ورود، حصار). تو Access badge را زدی؛ کارت ورود برای باز کردن «در» است و در دسته‌ی کنترل فیزیکی قرار می‌گیرد. فایروال کاملاً فنی است. قانون امتحان: هر چیزی که در دنیای واقعی لمس می‌شود و جلوی ورود آدم را می‌گیرد = فیزیکی.',
    2);

  M(80,'Which mitigation technique involves verifying digital signatures and ensuring update authenticity?',
    'کدام روش کاهش خطر شامل بررسی امضای دیجیتال و اطمینان از اصل بودن به‌روزرسانی‌هاست؟',
    'قبل از نصب وصله، مطمئن می‌شویم واقعاً از سازنده آمده.',
    ['Patch management','Monitoring','Encryption','Isolation'],
    ['مدیریت وصله (Patch management)','پایش','رمزگذاری','جداسازی'],
    'Good patch management does not just install updates: it verifies the vendor’s digital signature so a fake or tampered update (a supply-chain attack) is rejected, tests the patch and then deploys it on schedule.',
    'Patch management فقط نصب کردن آپدیت نیست. قبل از نصب، امضای دیجیتال سازنده را چک می‌کنیم تا مطمئن شویم آپدیت واقعاً از Microsoft یا سازنده آمده و کسی آن را دست‌کاری نکرده (مثل حمله‌ی زنجیره‌ی تأمین). بعد در محیط تست امتحانش می‌کنیم و بعد نصب می‌کنیم.');

  M(81,'Which hardening technique ensures unused protocols cannot be exploited on a host system?',
    'کدام روش مقاوم‌سازی تضمین می‌کند پروتکل‌های بی‌استفاده روی یک سیستم قابل سوءاستفاده نباشند؟',
    'دری که بسته باشد، کسی نمی‌تواند از آن وارد شود.',
    ['Port disabling','Encryption','DNS filtering','ACL implementation'],
    ['بستن و غیرفعال کردن پورت‌ها و سرویس‌ها','رمزگذاری','فیلتر DNS','پیاده‌سازی ACL'],
    'Disabling unused ports and the services behind them removes those protocols completely, so there is nothing left to attack. An ACL can filter access, but a disabled service cannot be exploited at all.',
    'اگر پروتکلی لازم نیست (مثل Telnet، FTP، SMBv1)، سرویس و پورتش را کامل خاموش می‌کنیم. وقتی سرویسی اجرا نشود، هیچ حمله‌ای به آن ممکن نیست. ACL فقط دسترسی را محدود می‌کند؛ ولی غیرفعال کردن کامل، خطر را به صفر می‌رساند.');

  M(82,'An attacker abuses a forgotten test environment still connected to production. Which mitigation failed?',
    'هکر از یک محیط تست فراموش‌شده که هنوز به محیط اصلی وصل است سوءاستفاده می‌کند. کدام روش کاهش خطر شکست خورده؟',
    'وقتی کار یک سیستم تمام شد، باید چه کار می‌کردیم؟',
    ['Decommissioning','Encryption','Monitoring','Host firewall'],
    ['از رده خارج کردن (Decommissioning)','رمزگذاری','پایش','فایروال میزبان'],
    'When a system is no longer needed it must be decommissioned: disconnected, wiped and removed from inventory. A forgotten test environment is usually unpatched and unmonitored, which makes it an easy way in to production.',
    'وقتی پروژه‌ی تست تمام شد، باید آن محیط را کامل از رده خارج می‌کردیم (Decommissioning): قطع از شبکه، پاک کردن داده و حذف از لیست دارایی‌ها. محیط فراموش‌شده معمولاً نه Patch می‌شود نه کسی مراقبش است؛ یک در باز برای هکر به سمت سیستم اصلی.');

  M(83,'An administrator sets up rules to monitor for specific system calls and DLL injections. What’s being used?',
    'یک مدیر قانون‌هایی می‌گذارد تا System callهای خاص و تزریق DLL را زیر نظر بگیرد. از چه چیزی استفاده می‌کند؟',
    'System call و DLL مربوط به داخل خود «میزبان» (کامپیوتر) هستند، نه شبکه.',
    ['Host-based IPS','Firewall','TLS proxy','Remote access policy'],
    ['IPS مبتنی بر میزبان (HIPS)','فایروال','پراکسی TLS','سیاست دسترسی از راه دور'],
    'System calls and DLL injection happen inside the operating system of one machine, so only a host-based intrusion prevention system (HIPS, often part of EDR) can watch and block them. Network devices such as firewalls and proxies cannot see inside a process.',
    'System call و تزریق DLL داخل سیستم‌عامل یک کامپیوتر اتفاق می‌افتند. فایروال و پراکسی فقط ترافیک شبکه را می‌بینند و داخل کامپیوتر را نمی‌بینند. HIPS روی خود دستگاه نصب می‌شود و رفتار برنامه‌ها را زیر نظر دارد؛ اگر برنامه‌ای بخواهد DLL به برنامه‌ی دیگری تزریق کند، جلویش را می‌گیرد.');

  M(84,'What is a major difference between isolation and segmentation?',
    'یک فرق مهم بین Isolation (جداسازی کامل) و Segmentation (بخش‌بندی) چیست؟',
    'بخش‌بندی معمولاً منطقی است (VLAN و فایروال)؛ جداسازی یعنی بریدن کامل.',
    ['Segmentation is typically logical; isolation is physical or VM-based','Isolation requires VLANs, segmentation does not','Isolation uses MAC filtering; segmentation uses NAT','Segmentation prevents DDoS; isolation prevents data loss'],
    ['بخش‌بندی معمولاً منطقی است؛ جداسازی فیزیکی یا مبتنی بر ماشین مجازی است','جداسازی به VLAN نیاز دارد، بخش‌بندی نه','جداسازی از فیلتر MAC استفاده می‌کند؛ بخش‌بندی از NAT','بخش‌بندی جلوی DDoS را می‌گیرد؛ جداسازی جلوی نشت داده را'],
    'Segmentation splits a network into zones with logical controls (VLANs, subnets, firewall rules) that still allow controlled traffic between them. Isolation cuts a system off completely, physically (air gap) or in its own VM or sandbox, so it cannot talk to the rest at all.',
    'Segmentation مثل آپارتمان‌های یک ساختمان است: هر واحد جداست ولی با در و راهرو (فایروال، VLAN) کنترل‌شده به هم راه دارند. Isolation مثل یک خانه‌ی تک‌افتاده در جزیره است: هیچ راهی به بقیه ندارد (Air gap یا ماشین مجازی جدا). پس بخش‌بندی = منطقی، جداسازی = فیزیکی یا VM.');

  M(85,'In a properly segmented network, what would be the best method to restrict communication between HR and DevOps?',
    'در یک شبکه‌ی درست بخش‌بندی‌شده، بهترین روش برای محدود کردن ارتباط بین بخش منابع انسانی (HR) و DevOps چیست؟',
    'بین دو بخش شبکه، چه چیزی تعیین می‌کند کدام ترافیک رد شود؟',
    ['Firewall ACLs','Application allow list','Encrypted file shares','Patch rollback'],
    ['قانون‌های ACL در فایروال','لیست مجاز برنامه‌ها','پوشه‌های اشتراکی رمزشده','برگرداندن وصله'],
    'When HR and DevOps are on separate segments (VLANs or subnets), firewall ACLs between those segments decide exactly which traffic may cross, for example deny all except one approved service. An application allow list controls what software runs on a device, not network traffic.',
    'وقتی HR و DevOps در دو بخش (VLAN) جدا هستند، فایروال بین آن‌ها با ACL تعیین می‌کند کدام ترافیک اجازه‌ی عبور دارد؛ مثلاً «همه بسته، به جز این یک سرویس». Application allow list مشخص می‌کند چه «برنامه‌ای» روی کامپیوتر اجرا شود، نه کدام ترافیک بین شبکه‌ها برود.');

  M(86,'Which of the following would best prevent installation of unapproved software on user devices?',
    'کدام گزینه بهتر از همه جلوی نصب نرم‌افزارهای تأییدنشده روی دستگاه‌های کاربران را می‌گیرد؟',
    'فقط چیزهایی که در لیست «مجاز» هستند اجرا شوند؛ بقیه همه ممنوع.',
    ['Application allow list','Blacklist','Host firewall','Role-based access control'],
    ['لیست مجاز برنامه‌ها (Application allow list)','لیست سیاه (Blacklist)','فایروال میزبان','کنترل دسترسی بر اساس نقش'],
    'An allow list (whitelist) lets only approved programs run, so anything new or unknown is blocked by default. A blacklist blocks only the bad programs you already know about, so new or unknown software still gets through.',
    'Allow list یعنی «فقط این برنامه‌ها اجازه دارند»؛ هر چیز دیگری، حتی برنامه‌ای که تا حالا کسی ندیده، خودکار مسدود می‌شود. Blacklist برعکس است: فقط برنامه‌های بدِ شناخته‌شده را می‌بندد و هر چیز جدیدی رد می‌شود. مثل مهمانی: Allow list = فقط کسانی که اسمشان در لیست است وارد شوند.');

  M(87,'What is the primary goal of network segmentation in an enterprise environment?',
    'هدف اصلی بخش‌بندی شبکه (Segmentation) در یک سازمان بزرگ چیست؟',
    'اگر هکر وارد یک بخش شد، نتواند به بخش‌های دیگر برود.',
    ['Limit lateral movement during an attack','Improve signal strength across departments','Reduce licensing costs for software','Increase Wi-Fi throughput'],
    ['محدود کردن حرکت جانبی (Lateral movement) در زمان حمله','بهتر کردن قدرت سیگنال بین بخش‌ها','کم کردن هزینه‌ی لایسنس نرم‌افزار','افزایش سرعت وای‌فای'],
    'Segmentation divides the network into zones, so if an attacker compromises one zone they cannot easily move sideways to others (lateral movement). It contains the damage, like watertight compartments in a ship.',
    'Segmentation مثل اتاقک‌های ضدآب کشتی است: اگر یک اتاقک سوراخ شود، فقط همان پر از آب می‌شود و کشتی غرق نمی‌شود. اگر هکر کامپیوتر بخش فروش را هک کند، نمی‌تواند راحت به سرورهای مالی برود. این یعنی جلوگیری از Lateral movement.');

  M(88,'Which type of audit is conducted internally by an organization to verify compliance before a regulatory inspection?',
    'کدام نوع ممیزی را خود سازمان داخلی انجام می‌دهد تا قبل از بازرسی رسمی، انطباقش را بررسی کند؟',
    'خودمان، خودمان را می‌سنجیم.',
    ['Self-assessment','Attestation','Third-party','Compliance audit'],
    ['خودارزیابی (Self-assessment)','Attestation (گواهی و تأیید رسمی)','ممیزی شخص ثالث','ممیزی انطباق'],
    'A self-assessment is the organization checking itself against the requirements, usually before an external or regulatory audit, so gaps can be fixed in time. Third-party audits are done by outsiders, and attestation is a formal statement that controls are in place.',
    'Self-assessment مثل امتحان آزمایشی قبل از امتحان اصلی است: خود شرکت با چک‌لیست قانون، خودش را بررسی می‌کند تا قبل از آمدن بازرس، مشکل‌ها را درست کند. Third-party یعنی یک شرکت بیرونی ممیزی می‌کند و Attestation یعنی یک اعلام رسمی که کنترل‌ها برقرار هستند.');

  M(89,'Which backup strategy captures changes to data in real time and maintains a continuous log of all transactions?',
    'کدام روش پشتیبان‌گیری تغییرات داده را لحظه‌به‌لحظه ثبت می‌کند و یک لاگ پیوسته از همه‌ی تراکنش‌ها نگه می‌دارد؟',
    'مثل دفتر روزانه که هر تغییر را لحظه‌ای می‌نویسد.',
    ['Journaling','Snapshot','Replication','Tabletop'],
    ['Journaling (ثبت روزنامه‌ای تغییرات)','Snapshot (عکس لحظه‌ای)','Replication (تکثیر)','Tabletop (تمرین روی میز)'],
    'Journaling records every change or transaction as it happens in a log (a journal). After a failure the journal can be replayed to rebuild the data up to the last transaction. A snapshot is a point-in-time copy, and replication copies data to another system but does not keep a history log.',
    'Journaling مثل دفترچه‌ای است که هر تغییر را همان لحظه می‌نویسد: «ساعت ۱۰:۰۱ مبلغ ۵۰ دلار اضافه شد، ساعت ۱۰:۰۲…». اگر سیستم خراب شود، با خواندن دوباره‌ی دفتر، داده را تا آخرین تراکنش بازسازی می‌کنیم. Snapshot فقط یک عکس در یک لحظه است و Tabletop اصلاً پشتیبان نیست، تمرین است.');

  M(90,'Which security measure best protects IoT devices against default credential attacks?',
    'کدام اقدام امنیتی بهتر از همه دستگاه‌های IoT (اینترنت اشیا) را در برابر حمله با رمزهای پیش‌فرض محافظت می‌کند؟',
    'جواب در خود سؤال است: رمز پیش‌فرض را چه کنیم؟',
    ['Changing factory-set usernames and passwords','Using network address translation','Placing IoT devices on the same VLAN as critical servers','Disabling encryption'],
    ['عوض کردن نام کاربری و رمزهای پیش‌فرض کارخانه','استفاده از NAT','گذاشتن دستگاه‌های IoT در همان VLAN سرورهای حیاتی','خاموش کردن رمزگذاری'],
    'Default usernames and passwords (admin/admin) are published online, and botnets like Mirai scan the internet trying them. Changing them on every device removes that attack. Putting IoT on the same VLAN as critical servers or disabling encryption would make things worse.',
    'رمزهای پیش‌فرض مثل admin/admin در اینترنت برای هر مدل دوربین و روتر منتشر شده‌اند. بات‌نت Mirai میلیون‌ها دوربین را فقط با امتحان همین رمزها گرفت. پس اولین کار: عوض کردن رمز پیش‌فرض هر دستگاه. گذاشتن IoT کنار سرورهای حیاتی یا خاموش کردن رمزگذاری خطر را بیشتر می‌کند.');

  M(91,'Which vulnerability would most likely result in a key being exposed if padding is implemented poorly?',
    'اگر Padding (پر کردن بلوک در رمزنگاری) بد پیاده شود، کدام آسیب‌پذیری به احتمال زیاد باعث لو رفتن کلید یا داده می‌شود؟',
    'اسم حمله، خود کلمه‌ی Padding را دارد.',
    ['Padding oracle attack','Misconfigured ACL','Broken chain of trust','Certificate pinning'],
    ['Padding oracle attack (حمله‌ی پیشگوی Padding)','ACL با پیکربندی اشتباه','زنجیره‌ی اعتماد شکسته','Certificate pinning'],
    'In a padding oracle attack the server reveals (through different error messages or timing) whether the padding of a decrypted block is valid. By sending many modified ciphertexts the attacker uses that yes/no answer to decrypt data byte by byte without the key. Modern authenticated modes such as AES-GCM prevent it.',
    'در رمزهای بلوکی (مثل AES-CBC)، آخر داده را Padding می‌کنند تا بلوک پر شود. اگر سرور برای Padding درست و غلط پیام خطای متفاوت بدهد، مثل یک پیشگو (Oracle) جواب «بله و نه» می‌دهد. هکر با هزاران درخواست تغییریافته، داده را بایت‌به‌بایت باز می‌کند بدون اینکه کلید داشته باشد. دفاع: حالت‌هایی مثل AES-GCM و پیام خطای یکسان.');

  M(92,'In a quantitative risk assessment, which value represents the expected annual monetary loss from a specific risk?',
    'در ارزیابی ریسک کمّی، کدام مقدار نشان‌دهنده‌ی «زیان مالی مورد انتظار در یک سال» از یک ریسک مشخص است؟',
    'کلمه‌ی Annual (سالانه) و Loss (زیان) در اسمش هست.',
    ['ALE','EF','RTO','ARO'],
    ['ALE (زیان سالانه‌ی مورد انتظار)','EF (ضریب خسارت)','RTO (هدف زمان بازیابی)','ARO (تعداد وقوع در سال)'],
    'Annualized Loss Expectancy is the money you expect to lose per year from one risk: ALE = SLE × ARO. ARO is how many times per year it happens, EF is the percentage of the asset lost in one incident, and RTO is a recovery time target.',
    'ALE = زیان مورد انتظار در یک سال. فرمول: ALE = SLE × ARO. مثال: هر بار سرقت لپ‌تاپ ۲۰۰۰ دلار خسارت دارد (SLE) و سالی ۳ بار اتفاق می‌افتد (ARO)؛ پس ALE = ۶۰۰۰ دلار در سال. با این عدد می‌فهمیم ارزش دارد چقدر برای کنترل خرج کنیم.');

  M(93,'Which of the following best describes the primary purpose of a governance framework within an organization?',
    'کدام گزینه بهتر از همه هدف اصلی یک چارچوب حاکمیت (Governance framework) در سازمان را توصیف می‌کند؟',
    'امنیت باید با اهداف کسب‌وکار و قانون هماهنگ باشد.',
    ['To align security initiatives with business objectives and compliance obligations','To eliminate all operational risks through strict controls','To ensure that only IT departments are responsible for data security','To remove the need for external audits'],
    ['هماهنگ کردن برنامه‌های امنیتی با اهداف کسب‌وکار و الزامات قانونی','حذف همه‌ی ریسک‌های عملیاتی با کنترل‌های سخت','اینکه فقط واحد IT مسئول امنیت داده باشد','حذف نیاز به ممیزی بیرونی'],
    'Governance sets direction, roles and accountability so that security work supports what the business is trying to achieve and what the law requires. No framework can eliminate all risk, and security is everyone’s responsibility, not only IT’s.',
    'Governance مثل فرمان کشتی است: مشخص می‌کند امنیت در کدام جهت برود تا با اهداف شرکت و قانون هماهنگ باشد، و چه کسی مسئول و پاسخ‌گوست. هیچ چارچوبی همه‌ی ریسک‌ها را صفر نمی‌کند و امنیت فقط کار IT نیست؛ کار همه است.');

  M(94,'Which risk metric measures the percentage of an asset’s value lost during an incident?',
    'کدام معیار ریسک، «درصد» از ارزش دارایی را که در یک حادثه از دست می‌رود اندازه می‌گیرد؟',
    'کلمه‌ی کلیدی: «درصد». کدام معیار درصد است، نه مبلغ دلار؟',
    ['EF','ALE','SLE','MTBF'],
    ['EF (ضریب خسارت، Exposure factor)','ALE (زیان سالانه‌ی مورد انتظار)','SLE (زیان یک بار وقوع)','MTBF (میانگین زمان بین خرابی‌ها)'],
    'Exposure Factor is the percentage of the asset’s value lost in one incident (for example 40%). It is used to compute SLE = asset value × EF. ALE is a yearly dollar amount, not a percentage, and MTBF measures reliability.',
    'این را اشتباه زدی. EF = «چند درصد» از دارایی در یک حادثه از بین می‌رود، مثلاً آتش‌سوزی ۴۰٪ انبار را خراب می‌کند. تو ALE را زدی؛ ALE مبلغ دلاری در یک سال است، نه درصد. زنجیره را حفظ کن: AV (ارزش دارایی) × EF (درصد) = SLE (زیان یک بار) ← SLE × ARO (چند بار در سال) = ALE (زیان سالانه). مثال: انبار ۱۰۰ هزار دلار × ۴۰٪ = SLE ۴۰ هزار؛ × ۰٫۵ بار در سال = ALE ۲۰ هزار دلار.',
    1);

  M(95,'Under GDPR, a Data Protection Officer (DPO) primarily acts as:',
    'طبق GDPR، مسئول حفاظت از داده (DPO) در اصل چه نقشی دارد؟',
    'رابط بین شرکت و سازمان ناظر دولتی.',
    ['A liaison between the organization and regulatory authorities','The sole custodian of all corporate data','The lead penetration tester for the company','The creator of all security policies'],
    ['رابط بین سازمان و مقام‌های ناظر قانونی','تنها نگهدارنده‌ی همه‌ی داده‌های شرکت','سرپرست تست نفوذ شرکت','نویسنده‌ی همه‌ی سیاست‌های امنیتی'],
    'The DPO oversees the organization’s GDPR compliance, advises staff on data protection and is the contact point for the supervisory authority and for data subjects. The DPO does not personally maintain the data or write every policy.',
    'DPO مثل «سفیر حریم خصوصی» شرکت است: بر رعایت GDPR نظارت می‌کند، به کارمندان مشاوره می‌دهد و رابط شرکت با سازمان ناظر دولتی (و با مردمی که داده‌شان پیش شرکت است) است. خودش نگهدارنده‌ی داده نیست؛ آن کار Custodian است.');

  M(96,'Which metric in a Business Impact Analysis (BIA) defines the maximum acceptable downtime for a system?',
    'کدام معیار در تحلیل اثر کسب‌وکار (BIA)، حداکثر زمان قابل قبول از کار افتادن یک سیستم را مشخص می‌کند؟',
    'هدف «زمان» بازیابی، نه هدف «نقطه»ی بازیابی.',
    ['RTO','RPO','MTBF','ALE'],
    ['RTO (هدف زمان بازیابی)','RPO (هدف نقطه‌ی بازیابی، چقدر داده از دست برود)','MTBF (میانگین زمان بین خرابی‌ها)','ALE (زیان سالانه)'],
    'Recovery Time Objective is how long a system can be down before the impact is unacceptable, for example "back within 4 hours". RPO is how much data (measured in time) you can afford to lose, for example "no more than 15 minutes of data".',
    'RTO = «حداکثر چقدر می‌توانیم بی‌سیستم بمانیم»، مثلاً سایت فروش باید ظرف ۴ ساعت برگردد. RPO = «حداکثر چقدر داده می‌توانیم از دست بدهیم»، مثلاً حداکثر ۱۵ دقیقه‌ی آخر. ترفند حفظ: RTO = Time (زمان خاموشی)، RPO = Point (تا کدام نقطه داده برگردد، یعنی تناوب پشتیبان).');

  M(97,'Which compliance failure consequence is most likely to result from repeated violations of PCI DSS requirements?',
    'نقض‌های تکراری الزامات PCI DSS (استاندارد امنیت کارت‌های پرداخت) به احتمال زیاد چه پیامدی دارد؟',
    'PCI DSS را شرکت‌های کارت (Visa، Mastercard) گذاشته‌اند؛ مجازاتشان چیست؟',
    ['Loss of payment processing privileges','Invalidation of encryption keys','Mandatory password changes','Increased RTO requirements'],
    ['از دست دادن اجازه‌ی پردازش پرداخت با کارت','باطل شدن کلیدهای رمزنگاری','اجبار به عوض کردن رمزها','افزایش الزامات RTO'],
    'PCI DSS is enforced by the card brands through the banks. Repeated non-compliance leads to fines and, in the end, the business can lose the right to accept or process card payments, which can be fatal for a store.',
    'PCI DSS قانون دولت نیست؛ قانون شرکت‌های کارت (Visa، Mastercard) است. اگر فروشگاهی مدام آن را رعایت نکند، اول جریمه می‌شود و در نهایت بانک اجازه‌ی کارت کشیدن را از او می‌گیرد. برای یک فروشگاه یعنی تقریباً تعطیلی.');

  M(98,'Which governance element provides high-level direction by defining what must be done rather than how it must be done?',
    'کدام جزء حاکمیت، با تعیین «چه» کاری باید انجام شود (نه «چطور»)، جهت کلی می‌دهد؟',
    'سند سطح بالا، کلی و کوتاه که مدیریت ارشد تأیید می‌کند.',
    ['Policies','Procedures','Standards','Playbooks'],
    ['Policies (سیاست‌ها)','Procedures (رویه‌ها، قدم‌به‌قدم)','Standards (استانداردها، الزامات مشخص)','Playbooks (دستورالعمل‌های پاسخ)'],
    'A policy states WHAT must be done and why ("all sensitive data must be encrypted"). Standards set specific requirements (AES-256), procedures give the step-by-step HOW, and playbooks are step-by-step responses to specific incidents.',
    'سلسله‌مراتب را حفظ کن: Policy = «چه» (همه‌ی داده‌های حساس باید رمز شوند). Standard = «با چه مشخصاتی» (AES-256). Procedure = «چطور، قدم‌به‌قدم» (۱. BitLocker را باز کن، ۲. …). Playbook = قدم‌های پاسخ به یک حادثه‌ی مشخص. Policy کلی‌ترین است.');

  M(99,'Which penetration testing approach integrates offensive and defensive activities in real time?',
    'کدام روش تست نفوذ، فعالیت‌های حمله و دفاع را هم‌زمان و با هم ترکیب می‌کند؟',
    'قرمز (حمله) + آبی (دفاع) = ؟',
    ['Purple teaming','Red teaming','Gray-box testing','Physical security testing'],
    ['Purple teaming (تیم بنفش)','Red teaming (تیم قرمز، فقط حمله)','Gray-box testing (تست با اطلاعات نیمه)','تست امنیت فیزیکی'],
    'In purple teaming, the red team (attackers) and blue team (defenders) work together in real time: the red team runs a technique, the blue team checks whether they detected it, and both improve on the spot. Red teaming alone is just the attack side.',
    'رنگ‌ها را حفظ کن: تیم قرمز = حمله‌کننده‌ها، تیم آبی = مدافع‌ها، قرمز + آبی = بنفش. در Purple teaming هر دو کنار هم کار می‌کنند: قرمز یک حمله اجرا می‌کند، آبی همان لحظه نگاه می‌کند «آیا دیدیمش؟» و اگر ندیدند، قانون تشخیص را درست می‌کنند. تیم سفید هم داور و برگزارکننده است.');

  M(100,'Which agreement is non-binding but outlines mutual intentions before formal contracts are created?',
    'کدام توافق‌نامه از نظر قانونی الزام‌آور نیست ولی قصد مشترک دو طرف را قبل از قرارداد رسمی بیان می‌کند؟',
    'یادداشت تفاهم.',
    ['MOU','NDA','SLA','BPA'],
    ['MOU (یادداشت تفاهم)','NDA (توافق‌نامه‌ی عدم افشا)','SLA (توافق سطح خدمات)','BPA (توافق‌نامه‌ی شراکت تجاری)'],
    'A Memorandum of Understanding describes what two parties intend to do together, usually before a formal contract, and is generally not legally binding. An NDA, an SLA and a BPA are binding agreements.',
    'MOU = یادداشت تفاهم: دو طرف می‌گویند «ما قصد داریم با هم کار کنیم و کلیاتش این است»، ولی هنوز قرارداد الزام‌آور نیست. NDA (رازداری)، SLA (سطح خدمات، مثلاً ۹۹٫۹٪ در دسترس بودن) و BPA (شراکت) همه الزام‌آور هستند.');
})();
