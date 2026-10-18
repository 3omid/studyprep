/* Security+ study notes (bilingual) for sections 1-8. Short, exam-focused. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var P=function(en,fa){return{k:'p',en:en,fa:fa}};
  var T=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};
  var S=function(sec,en,fa,b){pack.study[sec]={t:[en,fa],b:b}};

  S('1','General security concepts','مفاهیم کلی امنیت',[
    H('Control categories (WHO/WHAT enforces it)','دسته‌بندی کنترل‌ها (چه چیزی آن را اجرا می‌کند)'),
    TB([['Category','دسته'],['Meaning','معنی'],['Example','مثال']],[
      [['Technical','فنی'],['Enforced by IT systems','توسط سیستم IT اجرا می‌شود'],['Firewall, IDS, encryption, antivirus','فایروال، IDS، رمزنگاری، آنتی‌ویروس']],
      [['Managerial','مدیریتی'],['Set by management, on paper','توسط مدیریت تعیین می‌شود'],['Policy, risk assessment','سیاست، ارزیابی ریسک']],
      [['Operational','عملیاتی'],['Done by people day to day','کار روزمره‌ی افراد'],['Access review, onboarding, training','بازبینی دسترسی، آموزش']],
      [['Physical','فیزیکی'],['Protects physical space','حفاظت از فضای فیزیکی'],['Lock, camera, badge, bollard','قفل، دوربین، کارت، بولارد']]]),
    H('Control types (WHAT it does)','نوع کنترل‌ها (چه کاری می‌کند)'),
    TB([['Type','نوع'],['Goal','هدف'],['Example','مثال']],[
      [['Preventive','پیشگیرانه'],['Stop it before it happens','قبل از وقوع جلوگیری می‌کند'],['Account lockout, firewall rule','قفل شدن حساب، قانون فایروال']],
      [['Detective','کشفی'],['Find and log events','رویداد را پیدا و ثبت می‌کند'],['IDS, log review, CCTV','IDS، بررسی لاگ، دوربین']],
      [['Corrective','اصلاحی'],['Fix / recover after','بعد از حادثه ترمیم می‌کند'],['Restore from backup, patch','بازیابی از بک‌آپ، وصله']],
      [['Deterrent','بازدارنده'],['Discourage the attacker','مهاجم را منصرف می‌کند'],['Warning sign, guard','تابلوی هشدار، نگهبان']],
      [['Compensating','جایگزین'],['Substitute when main control is not possible','وقتی کنترل اصلی ممکن نیست'],['Extra monitoring for a legacy system','نظارت بیشتر روی سیستم قدیمی']],
      [['Directive','دستوری'],['Tells people what to do','به افراد می‌گوید چه کنند'],['Acceptable Use Policy','سیاست استفاده‌ی قابل قبول']]]),
    T('Two questions solve most control questions: "who enforces it?" gives the category, "what does it do?" gives the type. Restore from backup = Corrective. A policy = Managerial + Directive.','دو سؤال اکثر سوال‌های کنترل را حل می‌کند: «چه کسی/چه چیزی اجرا می‌کند؟» می‌شود دسته، «چه کاری می‌کند؟» می‌شود نوع. بازیابی از بک‌آپ = Corrective. یک سیاست = Managerial و Directive.'),
    H('CIA triad and AAA','سه‌گانه‌ی CIA و AAA'),
    L([['Confidentiality: only authorized people see data (encryption, access control).','محرمانگی: فقط افراد مجاز داده را می‌بینند (رمزنگاری، کنترل دسترسی).'],
       ['Integrity: data is not changed without permission (hashing, checksum, digital signature).','یکپارچگی: داده بدون اجازه تغییر نمی‌کند (هش، چک‌سام، امضای دیجیتال).'],
       ['Availability: systems work when needed (backup, RAID, redundancy).','دسترس‌پذیری: سیستم وقتی لازم است کار می‌کند (بک‌آپ، RAID، افزونگی).'],
       ['Authentication = prove who you are. Authorization = what you may do. Accounting = log what you did.','Authentication = اثبات هویت. Authorization = مجوز انجام کار. Accounting = ثبت کارهای انجام‌شده.'],
       ['Non-repudiation: you cannot deny an action (digital signature, audit log).','عدم انکار: نمی‌شود عملی را انکار کرد (امضای دیجیتال، لاگ ممیزی).']]),
    T('Ransomware hits Availability (and Confidentiality if data is stolen). Hash = Integrity. Encryption = Confidentiality.','باج‌افزار به Availability ضربه می‌زند (و اگر داده دزدیده شود Confidentiality). هش = Integrity. رمزنگاری = Confidentiality.'),
    H('Zero Trust','اعتماد صفر'),
    L([['Assume breach: verify every request, every time, no matter the location.','فرض بر نفوذ: هر درخواست هر بار تأیید شود، مهم نیست از کجا آمده.'],
       ['Control plane = decides: Policy Engine evaluates, Policy Administrator issues the decision.','Control plane = تصمیم می‌گیرد: Policy Engine ارزیابی می‌کند، Policy Administrator تصمیم را ابلاغ می‌کند.'],
       ['Data plane = enforces: Policy Enforcement Point (PEP) allows or blocks traffic.','Data plane = اجرا می‌کند: Policy Enforcement Point (PEP) ترافیک را مجاز یا مسدود می‌کند.']]),
    H('Gap analysis','تحلیل شکاف'),
    P('Pick a standard (e.g. ISO 27001), assess the current state, list the gaps, prioritize fixes.','یک استاندارد انتخاب کن (مثلاً ISO 27001)، وضع فعلی را بسنج، شکاف‌ها را فهرست کن، رفع آن‌ها را اولویت‌بندی کن.'),
    H('Physical security and sensors','امنیت فیزیکی و سنسورها'),
    L([['Bollards stop vehicles; badge + PIN/biometric controls entry; guards deter.','بولارد جلوی خودرو را می‌گیرد؛ کارت + PIN/بیومتریک ورود را کنترل می‌کند؛ نگهبان بازدارنده است.'],
       ['Infrared = heat. Pressure = weight. Microwave = movement by waves. Ultrasonic = movement by sound.','Infrared = گرما. Pressure = وزن. Microwave = حرکت با امواج. Ultrasonic = حرکت با صوت.']]),
    H('Deception technology','فناوری فریب'),
    TB([['Item','مورد'],['What it is','چیست']],[
      [['Honeypot','Honeypot'],['Fake vulnerable system','سیستم آسیب‌پذیر جعلی']],
      [['Honeynet','Honeynet'],['A network of honeypots','شبکه‌ای از honeypotها']],
      [['Honeyfile','Honeyfile'],['Bait file such as passwords.docx','فایل طعمه مثل passwords.docx']],
      [['Honeytoken','Honeytoken'],['Fake credential/data that alerts when used','اعتبارنامه/داده‌ی جعلی که با استفاده، هشدار می‌دهد']]]),
    T('Honey-anything = early detection + learn attacker behavior. It is a Detective control.','هر چیز honey = کشف زودهنگام و شناخت رفتار مهاجم. یک کنترل Detective است.')
  ]);

  S('2','Change management & cryptography','مدیریت تغییر و رمزنگاری',[
    H('Change management','مدیریت تغییر'),
    L([['Approval by CAB (Change Advisory Board), clear owner, list of stakeholders.','تأیید توسط CAB، مالک مشخص، فهرست ذی‌نفعان.'],
       ['Impact analysis, test in staging, backout plan (how to undo), maintenance window.','تحلیل اثر، تست در محیط staging، backout plan (راه بازگشت)، پنجره‌ی نگهداری.'],
       ['Technical effects: firewall allow/deny lists, downtime, restarts, legacy systems, dependencies.','اثرات فنی: لیست‌های allow/deny فایروال، downtime، ری‌استارت، سیستم‌های قدیمی، وابستگی‌ها.'],
       ['Document everything: diagrams, SOPs, version control (Git).','همه چیز مستند شود: دیاگرام‌ها، SOP، کنترل نسخه (Git).']]),
    T('If a question mentions "undo / restore previous state" the answer is backout plan.','اگر سوال از «برگرداندن به حالت قبل» حرف زد، جواب backout plan است.'),
    H('Symmetric vs asymmetric','متقارن و نامتقارن'),
    TB([['','' ],['Symmetric','متقارن'],['Asymmetric','نامتقارن']],[
      [['Keys','کلیدها'],['One shared key','یک کلید مشترک'],['Public + private pair','جفت کلید عمومی و خصوصی']],
      [['Speed','سرعت'],['Fast, for bulk data','سریع، برای داده‌ی حجیم'],['Slow, for key exchange/signatures','کند، برای تبادل کلید/امضا']],
      [['Examples','مثال'],['AES','AES'],['RSA, ECC','RSA، ECC']]]),
    P('TLS uses asymmetric crypto to agree on a symmetric session key, then encrypts data with that fast key.','TLS با رمزنگاری نامتقارن روی یک کلید نشست متقارن توافق می‌کند و بعد داده را با همان کلید سریع رمز می‌کند.'),
    T('Encrypt with the RECEIVER\'s public key for confidentiality. Sign with the SENDER\'s private key for authenticity.','برای محرمانگی با کلید عمومی «گیرنده» رمز کن. برای اصالت با کلید خصوصی «فرستنده» امضا کن.'),
    H('Encryption levels','سطوح رمزنگاری'),
    L([['Full-disk (BitLocker), file (EFS), volume/container (VeraCrypt), database, record-level, transport (TLS, IPsec).','کل دیسک (BitLocker)، فایل (EFS)، حجم/کانتینر (VeraCrypt)، پایگاه داده، سطح رکورد، انتقال (TLS، IPsec).']]),
    H('PKI and certificates','PKI و گواهی‌ها'),
    L([['CA issues certificates; RA verifies identity of the requester.','CA گواهی صادر می‌کند؛ RA هویت درخواست‌کننده را تأیید می‌کند.'],
       ['X.509 certificate = subject, public key, issuer, validity dates, CA signature.','گواهی X.509 = موضوع، کلید عمومی، صادرکننده، تاریخ اعتبار، امضای CA.'],
       ['Chain: Root CA > Intermediate CA > server certificate.','زنجیره: Root CA ← Intermediate CA ← گواهی سرور.'],
       ['CSR = request sent to a CA to get a certificate. Wildcard = *.example.com. Self-signed = internal/testing only.','CSR = درخواستی که برای دریافت گواهی به CA می‌دهی. Wildcard = *.example.com. Self-signed = فقط داخلی/تست.'],
       ['Revocation: CRL = downloaded list; OCSP = real-time check of one certificate.','ابطال: CRL = فهرست دانلودی؛ OCSP = بررسی لحظه‌ای یک گواهی.']]),
    H('Key storage','نگهداری کلید'),
    TB([['Tool','ابزار'],['Use','کاربرد']],[
      [['TPM','TPM'],['Chip in one device; stores keys, enables disk encryption','تراشه در یک دستگاه؛ کلید را نگه می‌دارد، رمزنگاری دیسک را ممکن می‌کند']],
      [['HSM','HSM'],['Dedicated enterprise device for keys (banks, CAs)','دستگاه اختصاصی سازمانی برای کلید (بانک‌ها، CA)']],
      [['KMS','KMS'],['Cloud service managing key lifecycle','سرویس ابری مدیریت چرخه‌ی عمر کلید']],
      [['Secure enclave','Secure enclave'],['Isolated protected memory area for sensitive processing','ناحیه‌ی ایزوله و محافظت‌شده‌ی حافظه برای پردازش حساس']]]),
    H('Hashing, salting, signatures','هش، سالت و امضا'),
    L([['Hash = fixed-size one-way fingerprint (SHA-256). Proves integrity, cannot be reversed.','هش = اثر انگشت یک‌طرفه با اندازه‌ی ثابت (SHA-256). یکپارچگی را ثابت می‌کند، برگشت‌پذیر نیست.'],
       ['Salt = random data added before hashing; defeats rainbow tables and identical-hash leaks.','Salt = داده‌ی تصادفی که قبل از هش اضافه می‌شود؛ جلوی rainbow table را می‌گیرد.'],
       ['Digital signature = hash of data encrypted with sender\'s private key. Gives integrity + authentication + non-repudiation.','امضای دیجیتال = هش داده که با کلید خصوصی فرستنده رمز شده. یکپارچگی + احراز هویت + عدم انکار می‌دهد.']]),
    H('Obfuscation','پنهان‌سازی'),
    L([['Steganography: hide data inside images/audio.','Steganography: پنهان کردن داده در تصویر/صدا.'],
       ['Tokenization: replace real value with a token (original stored elsewhere).','Tokenization: جایگزینی مقدار واقعی با توکن (اصل جای دیگری نگهداری می‌شود).'],
       ['Masking: show only part, e.g. last 4 digits of a card.','Masking: نمایش بخشی از داده، مثلاً ۴ رقم آخر کارت.']]),
    T('Credit card numbers at a payment processor = tokenization. "Show only last 4 digits" = masking.','شماره کارت در پردازشگر پرداخت = tokenization. «فقط ۴ رقم آخر» = masking.')
  ]);

  S('3','Threat actors & attack surfaces','عوامل تهدید و سطوح حمله',[
    H('Threat actors','عوامل تهدید'),
    TB([['Actor','عامل'],['Motivation','انگیزه'],['Key traits','ویژگی']],[
      [['Nation-state','دولتی'],['Espionage, war, politics','جاسوسی، جنگ، سیاست'],['Biggest resources, APT, zero-days, stealthy','بیشترین منابع، APT، zero-day، مخفی‌کار']],
      [['Organized crime','جرایم سازمان‌یافته'],['Money','پول'],['Ransomware, fraud, well organized','باج‌افزار، کلاهبرداری، سازمان‌یافته']],
      [['Hacktivist','هکتیویست'],['Ideology/cause','ایدئولوژی/آرمان'],['Defacement, DDoS, leaks','تغییر چهره‌ی سایت، DDoS، افشا']],
      [['Insider','خودی'],['Revenge, money, mistake','انتقام، پول، اشتباه'],['Has legitimate access, hard to detect','دسترسی مجاز دارد، کشف سخت']],
      [['Unskilled (script kiddie)','تازه‌کار'],['Curiosity, fame','کنجکاوی، شهرت'],['Uses ready-made tools','از ابزار آماده استفاده می‌کند']],
      [['Shadow IT','Shadow IT'],['Convenience (not malicious)','راحتی (بدخواهانه نیست)'],['Unapproved apps/devices = unmanaged risk','برنامه/دستگاه تأییدنشده = ریسک مدیریت‌نشده']]]),
    P('Attributes: internal vs external, resources/funding, sophistication.','ویژگی‌ها: داخلی یا خارجی، منابع/بودجه، پیچیدگی فنی.'),
    T('Highest resources + long-term stealth = nation-state. Cause/protest = hacktivist. Money = organized crime. Authorized user abusing access = insider.','بیشترین منابع + پنهان‌کاری بلندمدت = دولتی. آرمان/اعتراض = هکتیویست. پول = جرایم سازمان‌یافته. کاربر مجاز که سوءاستفاده می‌کند = insider.'),
    H('Threat vectors (how the attack arrives)','بردارهای تهدید (حمله از کجا می‌رسد)'),
    TB([['Vector','بردار'],['Example','مثال'],['Mitigation','راه مقابله']],[
      [['Message-based','پیام‌محور'],['Phishing email, smishing (SMS)','ایمیل فیشینگ، SMS'],['Filtering, user training, MFA','فیلتر، آموزش کاربر، MFA']],
      [['File-based','فایل‌محور'],['Malicious macro in Office/PDF','ماکروی مخرب در Office/PDF'],['Sandbox, block macros, EDR','sandbox، مسدود کردن ماکرو، EDR']],
      [['Image-based','تصویر‌محور'],['Malware hidden in image (stego)','بدافزار پنهان در تصویر'],['Scan content, restrict downloads','اسکن محتوا، محدودیت دانلود']],
      [['Voice-based','صوتی'],['Vishing, caller-ID spoofing','vishing، جعل شماره تماس‌گیرنده'],['Callback to known number, training','تماس برگشتی با شماره‌ی شناخته‌شده، آموزش']],
      [['Removable device','حافظه‌ی قابل جابه‌جایی'],['USB drop in parking lot','USB رهاشده در پارکینگ'],['Disable USB, port control, DLP','غیرفعال کردن USB، کنترل پورت، DLP']]]),
    H('Attack surfaces','سطوح حمله'),
    L([['Unsupported/legacy systems: no patches, so permanent exposure.','سیستم‌های قدیمی/بدون پشتیبانی: وصله ندارند، پس همیشه در معرض‌اند.'],
       ['Open ports (RDP 3389, Telnet 23): close what is not needed, firewall the rest.','پورت‌های باز (RDP 3389، Telnet 23): آنچه لازم نیست ببند، بقیه را با فایروال محدود کن.'],
       ['Default credentials: always change them.','اعتبارنامه‌های پیش‌فرض: همیشه تغییرشان بده.'],
       ['Unsecure networks: open Wi-Fi, evil twin (fake SSID).','شبکه‌های ناامن: Wi-Fi باز، evil twin (SSID جعلی).'],
       ['Supply chain: attack through a vendor or software update (e.g. SolarWinds). Mitigate with vendor assessment and monitoring.','زنجیره‌ی تأمین: حمله از طریق تأمین‌کننده یا به‌روزرسانی نرم‌افزار (مثل SolarWinds). با ارزیابی تأمین‌کننده و پایش کاهش بده.']]),
    H('Social engineering','مهندسی اجتماعی'),
    TB([['Technique','تکنیک'],['What happens','چه می‌شود']],[
      [['Phishing','Phishing'],['Mass fake email','ایمیل جعلی انبوه']],
      [['Spear phishing','Spear phishing'],['Targeted at one person/group','هدفمند برای یک فرد/گروه']],
      [['Whaling','Whaling'],['Targets executives','مدیران ارشد هدفند']],
      [['Vishing / Smishing','Vishing / Smishing'],['Phone call / SMS','تماس تلفنی / پیامک']],
      [['Pretexting','Pretexting'],['Invented story/identity to get info','داستان/هویت ساختگی برای گرفتن اطلاعات']],
      [['BEC','BEC'],['Fake boss/vendor asks for payment','رئیس/تأمین‌کننده‌ی جعلی درخواست پرداخت می‌کند']],
      [['Typosquatting','Typosquatting'],['Look-alike domain (gooogle.com)','دامنه‌ی شبیه (gooogle.com)']],
      [['Tailgating','Tailgating'],['Following someone through a door','ورود پشت سر فرد مجاز']],
      [['Watering hole','Watering hole'],['Infect a site the target visits','آلوده کردن سایتی که هدف می‌رود']]]),
    T('Defense against social engineering = awareness training + verification procedures. Urgency and authority are the classic red flags.','دفاع در برابر مهندسی اجتماعی = آموزش آگاهی + رویه‌ی راستی‌آزمایی. فوریت و ادعای اختیار، نشانه‌های کلاسیک‌اند.')
  ]);

  S('4','Vulnerabilities, malware & IoCs','آسیب‌پذیری‌ها، بدافزار و IoC',[
    H('Vulnerability types','انواع آسیب‌پذیری'),
    L([['Application: buffer overflow (write past memory), memory injection, race condition.','برنامه: buffer overflow (نوشتن بیرون از حافظه)، memory injection، race condition.'],
       ['Web: SQL injection, XSS, CSRF.','وب: SQL injection، XSS، CSRF.'],
       ['OS: unpatched services, privilege escalation, insecure defaults.','سیستم‌عامل: سرویس‌های بدون وصله، ارتقای دسترسی، تنظیمات پیش‌فرض ناامن.'],
       ['Hardware: firmware malware, end-of-life devices.','سخت‌افزار: بدافزار firmware، دستگاه‌های پایان عمر.'],
       ['Virtualization: VM escape (guest reaches the hypervisor), resource reuse.','مجازی‌سازی: VM escape (مهمان به hypervisor می‌رسد)، استفاده‌ی مجدد منابع.'],
       ['Cloud: misconfigured storage (open bucket), insecure APIs.','ابر: ذخیره‌سازی بد پیکربندی‌شده (bucket باز)، API ناامن.'],
       ['Mobile: sideloading, jailbreak/root. Fix with MDM.','موبایل: sideloading، jailbreak/root. راه‌حل: MDM.'],
       ['Crypto: weak algorithms (MD5, DES), bad key handling.','رمزنگاری: الگوریتم ضعیف (MD5، DES)، مدیریت بد کلید.'],
       ['Zero-day: unknown to the vendor, no patch yet.','Zero-day: برای سازنده ناشناخته، هنوز وصله ندارد.']]),
    H('Malware','بدافزار'),
    TB([['Type','نوع'],['Key behavior','رفتار کلیدی']],[
      [['Virus','ویروس'],['Needs a host file and user action to spread','به فایل میزبان و اقدام کاربر نیاز دارد']],
      [['Worm','کرم'],['Self-spreads over network, no user action','خودش در شبکه پخش می‌شود، بدون اقدام کاربر']],
      [['Trojan','تروجان'],['Looks legitimate, does not self-replicate','قانونی به نظر می‌رسد، خود تکثیر نیست']],
      [['Ransomware','باج‌افزار'],['Encrypts files, demands payment','فایل‌ها را رمز می‌کند، پول می‌خواهد']],
      [['Spyware / Keylogger','Spyware / Keylogger'],['Secretly collects info / keystrokes','مخفیانه اطلاعات/کلیدها را جمع می‌کند']],
      [['Rootkit','Rootkit'],['Hides deep in OS, persistent','عمیق در سیستم‌عامل پنهان و پایدار']],
      [['Logic bomb','Logic bomb'],['Triggers on a condition (date, user deleted)','با شرط خاص فعال می‌شود (تاریخ، حذف کاربر)']],
      [['Bloatware / RAT / Botnet','Bloatware / RAT / Botnet'],['Unwanted apps / remote control / zombie network','برنامه‌ی ناخواسته / کنترل از راه دور / شبکه‌ی زامبی']]]),
    T('"Spreads by itself with no user action" = worm. "Triggered by an employee being fired / a date" = logic bomb.','«بدون اقدام کاربر خودش پخش می‌شود» = worm. «با اخراج کارمند / یک تاریخ فعال می‌شود» = logic bomb.'),
    H('Attacks','حمله‌ها'),
    L([['Password: brute force (all combos), dictionary (word list), spraying (one password on many accounts), credential stuffing (leaked pairs).','رمز: brute force (همه‌ی حالت‌ها)، dictionary (فهرست کلمات)، spraying (یک رمز روی حساب‌های زیاد)، credential stuffing (جفت‌های لو رفته).'],
       ['Network: DDoS (flood), DNS poisoning, on-path / MITM (sits between two parties), replay.','شبکه: DDoS (سیل ترافیک)، DNS poisoning، on-path / MITM (بین دو طرف)، replay.'],
       ['Injection: SQLi (database), XSS (script in browser), command injection.','Injection: SQLi (پایگاه داده)، XSS (اسکریپت در مرورگر)، command injection.'],
       ['Crypto: downgrade, collision, birthday attack.','رمزنگاری: downgrade، collision، birthday.'],
       ['Physical: RFID cloning, brute-force of locks, environmental (power, flood).','فیزیکی: کلون RFID، حمله به قفل، محیطی (برق، سیل).']]),
    H('Indicators of Compromise (IoC)','شاخص‌های نفوذ'),
    L([['Account lockouts, impossible travel logins, out-of-hours access.','قفل شدن حساب، ورود با «سفر غیرممکن»، دسترسی خارج از ساعت.'],
       ['Sudden outbound traffic spike, unknown ports/processes, blocked content.','جهش ناگهانی ترافیک خروجی، پورت/پردازش ناشناخته.'],
       ['File changes, missing logs, resource spikes, published/leaked data.','تغییر فایل‌ها، لاگ‌های گم‌شده، مصرف ناگهانی منابع، داده‌ی منتشرشده.']]),
    T('Many failed logins from one source = brute force. One password tried on many accounts = password spraying.','ورودهای ناموفق زیاد از یک منبع = brute force. یک رمز روی حساب‌های متعدد = password spraying.')
  ]);

  S('5','Mitigations & enterprise security','کاهش ریسک و امنیت سازمانی',[
    H('Core mitigations','راهکارهای اصلی'),
    L([['Segmentation: split network into zones (DMZ for public servers, VLANs per department) so a breach is contained.','Segmentation: تقسیم شبکه به ناحیه‌ها (DMZ برای سرورهای عمومی، VLAN برای هر بخش) تا نفوذ محدود بماند.'],
       ['ACL: ordered allow/deny rules on firewalls/routers/files. Permissions: who can read/write/execute.','ACL: قوانین مرتب allow/deny روی فایروال/روتر/فایل. Permission: چه کسی بخواند/بنویسد/اجرا کند.'],
       ['Least privilege: only what the job needs. Use RBAC and JIT (just-in-time) for admin rights.','کمترین دسترسی: فقط آنچه کار لازم دارد. از RBAC و JIT برای دسترسی ادمین استفاده کن.'],
       ['Application allow list: only approved programs run (stronger than a deny list).','Application allow list: فقط برنامه‌های تأییدشده اجرا می‌شوند (قوی‌تر از deny list).'],
       ['Isolation: quarantine VLAN, air gap for critical systems.','Isolation: VLAN قرنطینه، air gap برای سیستم‌های حیاتی.']]),
    T('Allow list = default deny (safest). Deny list = default allow (weaker, can miss new threats).','Allow list = پیش‌فرض انکار (امن‌تر). Deny list = پیش‌فرض اجازه (ضعیف‌تر، تهدید جدید را از دست می‌دهد).'),
    H('Patching and configuration','وصله و پیکربندی'),
    L([['Patch cycle: inventory > test > deploy by criticality > verify > document.','چرخه‌ی وصله: موجودی ← تست ← استقرار بر اساس اهمیت ← راستی‌آزمایی ← مستندسازی.'],
       ['Configuration enforcement: GPO / MDM / Ansible reset drifted settings back to the baseline.','اجرای پیکربندی: GPO / MDM / Ansible تنظیمات منحرف‌شده را به baseline برمی‌گردانند.']]),
    H('Hardening','سخت‌سازی'),
    L([['Patch, disable unused services and ports, change default credentials, remove unneeded software.','وصله، غیرفعال کردن سرویس و پورت بلااستفاده، تغییر رمز پیش‌فرض، حذف نرم‌افزار غیرضروری.'],
       ['Host firewall, HIPS/EDR, full-disk encryption, MFA.','فایروال میزبان، HIPS/EDR، رمزنگاری کل دیسک، MFA.']]),
    H('Monitoring','پایش'),
    TB([['Tool','ابزار'],['Role','نقش']],[
      [['SIEM','SIEM'],['Collects and correlates logs, raises alerts','لاگ‌ها را جمع و همبسته می‌کند، هشدار می‌دهد']],
      [['IDS','IDS'],['Detects and alerts only','فقط تشخیص و هشدار']],
      [['IPS','IPS'],['Detects and blocks (inline)','تشخیص و مسدودسازی (inline)']],
      [['DLP','DLP'],['Stops sensitive data leaving','جلوی خروج داده‌ی حساس را می‌گیرد']],
      [['NetFlow / sFlow','NetFlow / sFlow'],['Traffic metadata, finds unusual flows','فراداده‌ی ترافیک، جریان غیرعادی را پیدا می‌کند']]]),
    H('Secure decommissioning','خارج‌کردن امن از رده'),
    L([['Sanitize data (wipe/crypto-erase), destroy hardware if needed (shred, incinerate), keep chain of custody and certificate of destruction.','پاک‌سازی داده (wipe/crypto-erase)، در صورت نیاز نابودی سخت‌افزار (خردکردن، سوزاندن)، حفظ chain of custody و گواهی نابودی.']]),
    T('Drive leaves the company or is reused = sanitize. Highly sensitive and not reused = physical destruction.','دیسک از شرکت خارج یا دوباره استفاده می‌شود = sanitize. بسیار حساس و بدون استفاده‌ی مجدد = نابودی فیزیکی.')
  ]);

  S('6','Architecture models & infrastructure','معماری و زیرساخت',[
    H('Architecture models','مدل‌های معماری'),
    TB([['Model','مدل'],['Security view','دید امنیتی']],[
      [['Cloud','ابر'],['Shared responsibility: provider secures the infrastructure, you secure data, access and configuration','مسئولیت مشترک: ارائه‌دهنده زیرساخت را امن می‌کند، تو داده، دسترسی و پیکربندی را']],
      [['Serverless','Serverless'],['No OS to manage, small surface, but less visibility and vendor reliance','سیستم‌عامل برای مدیریت نیست، سطح حمله کوچک، اما دید کمتر و وابستگی به فروشنده']],
      [['IaC','IaC'],['Infrastructure defined as code: consistent, versioned. Risk: hardcoded secrets, bad templates','زیرساخت به‌صورت کد: یکسان و نسخه‌دار. ریسک: رمز داخل کد، قالب بد']],
      [['Microservices','Microservices'],['Many small API services: isolation, but more endpoints to protect','سرویس‌های کوچک با API: جداسازی خوب، اما نقاط بیشتر برای محافظت']],
      [['On-premises','On-premises'],['Full control, high cost, you handle physical security','کنترل کامل، هزینه‌ی بالا، امنیت فیزیکی با خودت']],
      [['SDN','SDN'],['Control plane separated from data plane; controller is a single point of failure','control plane از data plane جداست؛ controller نقطه‌ی شکست واحد است']]]),
    H('Specialized systems','سیستم‌های خاص'),
    L([['ICS/SCADA: factories, power; availability first, often legacy, poor encryption. Isolate and air-gap.','ICS/SCADA: کارخانه، برق؛ در اولویت دسترس‌پذیری، اغلب قدیمی، رمزنگاری ضعیف. ایزوله و air-gap کن.'],
       ['RTOS: predictable timing for safety systems, limited resources for security.','RTOS: زمان‌بندی قابل پیش‌بینی برای سیستم‌های ایمنی، منابع محدود برای امنیت.'],
       ['Embedded/IoT: hardcoded credentials, rare firmware updates. Segment them.','Embedded/IoT: رمز ثابت داخل دستگاه، به‌روزرسانی firmware نادر. آن‌ها را segment کن.']]),
    H('Device placement and zones','جایگذاری دستگاه و ناحیه‌ها'),
    L([['Screened subnet (DMZ): public servers between two firewalls.','Screened subnet (DMZ): سرورهای عمومی بین دو فایروال.'],
       ['Attack surface = everything exposed; connectivity = what must talk to what. Place controls at trust boundaries.','سطح حمله = همه‌ی آنچه در معرض است؛ ارتباطات = چه چیز باید با چه چیز صحبت کند. کنترل‌ها را در مرز اعتماد بگذار.'],
       ['Fail-open keeps availability (door unlocks); fail-closed keeps security (door locks).','Fail-open دسترس‌پذیری را حفظ می‌کند (در باز می‌شود)؛ fail-closed امنیت را (در قفل می‌ماند).']]),
    H('Security appliances','تجهیزات امنیتی'),
    TB([['Device','دستگاه'],['Role','نقش']],[
      [['Firewall / NGFW / WAF','Firewall / NGFW / WAF'],['Filter traffic; NGFW is app-aware; WAF protects web apps from SQLi/XSS','فیلتر ترافیک؛ NGFW برنامه‌محور؛ WAF از برنامه‌ی وب در برابر SQLi/XSS محافظت می‌کند']],
      [['IDS / IPS','IDS / IPS'],['Detect / detect+block','تشخیص / تشخیص + مسدودسازی']],
      [['Proxy (forward / reverse)','Proxy'],['Forward: users out to web. Reverse: protects servers','Forward: کاربران به وب. Reverse: از سرورها محافظت می‌کند']],
      [['Load balancer','Load balancer'],['Spreads traffic, improves availability','ترافیک را پخش می‌کند، دسترس‌پذیری را بالا می‌برد']],
      [['Jump server','Jump server'],['Hardened gateway for admin access','دروازه‌ی سخت‌شده برای دسترسی ادمین']]]),
    H('Secure communication','ارتباط امن'),
    L([['VPN: encrypted tunnel. IPsec (network layer, ESP/AH), TLS VPN (SSL).','VPN: تونل رمزشده. IPsec (لایه‌ی شبکه، ESP/AH)، TLS VPN.'],
       ['Site-to-site VPN links offices; remote-access VPN links a user.','Site-to-site دفترها را وصل می‌کند؛ remote-access یک کاربر را.'],
       ['SD-WAN: smart WAN routing. SASE: networking + security delivered from the cloud.','SD-WAN: مسیریابی هوشمند WAN. SASE: شبکه + امنیت که از ابر ارائه می‌شود.']]),
    T('Inline device that BLOCKS = IPS. Out-of-band that only alerts = IDS.','دستگاه inline که «مسدود» می‌کند = IPS. دستگاه خارج از مسیر که فقط هشدار می‌دهد = IDS.')
  ]);

  S('7','Data protection & resilience','حفاظت از داده و تاب‌آوری',[
    H('Data types and classification','انواع داده و طبقه‌بندی'),
    L([['Types: regulated (HIPAA, GDPR, PHIPA), trade secret, intellectual property, legal, financial.','انواع: مقرراتی (HIPAA، GDPR، PHIPA)، راز تجاری، مالکیت فکری، حقوقی، مالی.'],
       ['Classification levels: Public < Private < Sensitive < Confidential < Critical.','سطوح طبقه‌بندی: Public < Private < Sensitive < Confidential < Critical.'],
       ['Classification decides who can access, how it is stored, sent and deleted.','طبقه‌بندی مشخص می‌کند چه کسی دسترسی دارد و چگونه ذخیره، ارسال و حذف شود.']]),
    H('Data states','حالت‌های داده'),
    TB([['State','حالت'],['Meaning','معنی'],['Protect with','محافظت']],[
      [['At rest','در حال سکون'],['Stored on disk/DB/backup','ذخیره‌شده روی دیسک/DB/بک‌آپ'],['Disk/DB encryption','رمزنگاری دیسک/DB']],
      [['In transit','در حال انتقال'],['Moving across a network','در حال حرکت در شبکه'],['TLS, IPsec, VPN','TLS، IPsec، VPN']],
      [['In use','در حال استفاده'],['Being processed in memory/CPU','در حافظه/CPU پردازش می‌شود'],['Secure enclave, memory protection','secure enclave، حفاظت حافظه']]]),
    H('Sovereignty and protection methods','حاکمیت داده و روش‌های حفاظت'),
    L([['Data sovereignty: data is subject to the laws of the country where it is stored. Geolocation controls where it lives.','حاکمیت داده: داده تابع قوانین کشوری است که در آن ذخیره می‌شود. Geolocation محل آن را کنترل می‌کند.'],
       ['Encryption for confidentiality, hashing for integrity, masking/tokenization to hide values, segmentation to limit access.','رمزنگاری برای محرمانگی، هش برای یکپارچگی، masking/tokenization برای پنهان‌سازی، segmentation برای محدود کردن دسترسی.'],
       ['Data roles: owner (accountable), steward, custodian (technical handling), controller/processor (GDPR).','نقش‌های داده: owner (پاسخگو)، steward، custodian (نگهداری فنی)، controller/processor (GDPR).']]),
    H('Backup and recovery','بک‌آپ و بازیابی'),
    TB([['Type','نوع'],['What it copies','چه چیزی را کپی می‌کند']],[
      [['Full','کامل'],['Everything; slowest backup, fastest restore','همه چیز؛ بک‌آپ کند، بازیابی سریع']],
      [['Incremental','افزایشی'],['Changes since last backup of any kind; fastest backup, slowest restore','تغییرات از آخرین بک‌آپ؛ بک‌آپ سریع، بازیابی کند']],
      [['Differential','تفاضلی'],['Changes since last FULL backup','تغییرات از آخرین بک‌آپ کامل']],
      [['Snapshot','Snapshot'],['Point-in-time image of a VM/volume','تصویر لحظه‌ای از VM/حجم']],
      [['Journaling','Journaling'],['Logs changes so you can replay to a point','تغییرات را ثبت می‌کند تا به یک نقطه برگردی']]]),
    T('3-2-1 rule: 3 copies, 2 media types, 1 offsite. Test restores regularly; an untested backup is not a backup. Ransomware defense = offline/immutable backups.','قاعده‌ی 3-2-1: ۳ نسخه، ۲ نوع رسانه، ۱ نسخه بیرون از محل. بازیابی را مرتب تست کن. دفاع در برابر باج‌افزار = بک‌آپ آفلاین/غیرقابل تغییر.'),
    H('High availability and sites','دسترس‌پذیری بالا و سایت‌ها'),
    L([['HA: clustering, load balancing, RAID, redundant power (UPS, generator), multi-path networking.','HA: کلاستر، load balancing، RAID، برق اضافه (UPS، ژنراتور)، چند مسیر شبکه.'],
       ['Hot site: ready now. Warm site: partly ready. Cold site: empty space. Cost and recovery speed go together.','Hot site: همین الان آماده. Warm site: نیمه‌آماده. Cold site: فقط فضای خالی. هزینه و سرعت بازیابی با هم بالا می‌روند.'],
       ['RTO = how long you can be down. RPO = how much data you can lose.','RTO = چقدر می‌توانی از کار بیفتی. RPO = چقدر داده را می‌توانی از دست بدهی.'],
       ['Test recovery: tabletop exercise, failover test, parallel processing.','تست بازیابی: tabletop، تست failover، پردازش موازی.']]),
    T('RTO = time. RPO = data. If the company can lose at most 1 hour of data, RPO = 1 hour, so backups at least hourly.','RTO = زمان. RPO = داده. اگر شرکت حداکثر ۱ ساعت داده را می‌تواند از دست بدهد، RPO = ۱ ساعت است، پس بک‌آپ حداقل ساعتی.')
  ]);

  S('8','Endpoints, mobile & applications','Endpoint، موبایل و برنامه‌ها',[
    H('Secure baselines','baseline امن'),
    L([['Establish: define secure settings (patches, firewall, encryption, least privilege).','ایجاد: تنظیمات امن را تعریف کن (وصله، فایروال، رمزنگاری، کمترین دسترسی).'],
       ['Deploy: GPO, scripts (PowerShell/Bash), pre-hardened images, MDM.','استقرار: GPO، اسکریپت، image سخت‌شده، MDM.'],
       ['Maintain: patch, monitor drift, review regularly.','نگهداری: وصله، پایش انحراف، بازبینی منظم.']]),
    H('Hardening targets','اهداف سخت‌سازی'),
    L([['Workstations/servers: remove unused software, disable Telnet/SMBv1, MFA, EDR, disk encryption.','ایستگاه کاری/سرور: حذف نرم‌افزار بلااستفاده، غیرفعال کردن Telnet/SMBv1، MFA، EDR، رمزنگاری دیسک.'],
       ['Cloud: no public buckets, least-privilege IAM, log all API calls, encrypt.','ابر: bucket عمومی نباشد، IAM با کمترین دسترسی، لاگ همه‌ی API، رمزنگاری.'],
       ['IoT/embedded: change default passwords, update firmware, segment on own VLAN.','IoT/embedded: رمز پیش‌فرض را عوض کن، firmware را به‌روز کن، روی VLAN جدا بگذار.'],
       ['ICS/SCADA/RTOS: isolate, air-gap, strict access, careful patch windows.','ICS/SCADA/RTOS: ایزوله، air-gap، دسترسی سخت‌گیرانه، پنجره‌ی وصله‌ی محتاطانه.']]),
    H('Wireless planning','برنامه‌ریزی بی‌سیم'),
    L([['Site survey finds dead zones and interference; heat map shows signal strength.','Site survey نقاط کور و تداخل را پیدا می‌کند؛ heat map قدرت سیگنال را نشان می‌دهد.'],
       ['WPA3 > WPA2. Enterprise mode (802.1X + RADIUS) = individual logins. Avoid WEP/open networks.','WPA3 بهتر از WPA2. حالت Enterprise (802.1X + RADIUS) = ورود فردی. از WEP و شبکه‌ی باز دوری کن.'],
       ['Place access points to limit coverage outside the building.','AP را طوری بگذار که پوشش بیرون ساختمان کم باشد.']]),
    H('Mobile device management','مدیریت دستگاه موبایل'),
    TB([['Model','مدل'],['Who owns the device','مالک دستگاه']],[
      [['BYOD','BYOD'],['Employee; mixed personal/work data','کارمند؛ داده‌ی شخصی و کاری مخلوط']],
      [['COPE','COPE'],['Company, personal use allowed','شرکت، استفاده‌ی شخصی مجاز']],
      [['CYOD','CYOD'],['Employee chooses from approved list','کارمند از فهرست تأییدشده انتخاب می‌کند']]]),
    L([['MDM enforces: screen lock, remote wipe, encryption, app control, geofencing, containerization (separate work area).','MDM اعمال می‌کند: قفل صفحه، remote wipe، رمزنگاری، کنترل برنامه، geofencing، containerization (فضای کاری جدا).'],
       ['Block jailbroken/rooted devices and sideloading.','دستگاه jailbreak/root و sideloading مسدود شود.']]),
    H('Application security','امنیت برنامه'),
    L([['Input validation + parameterized queries stop injection.','اعتبارسنجی ورودی + parameterized query جلوی injection را می‌گیرد.'],
       ['Secure cookies, code signing, sandboxing, static analysis (SAST) and dynamic testing (DAST).','کوکی امن، code signing، sandbox، تحلیل ایستا (SAST) و پویا (DAST).'],
       ['Patch management for apps; remove default accounts.','مدیریت وصله برای برنامه‌ها؛ حذف حساب‌های پیش‌فرض.']]),
    H('Asset management','مدیریت دارایی'),
    L([['Lifecycle: acquire > assign owner > inventory > monitor > maintain > dispose securely.','چرخه‌ی عمر: تهیه ← تعیین مالک ← ثبت موجودی ← پایش ← نگهداری ← دفع امن.'],
       ['You cannot protect what you do not know you have; inventory comes first.','چیزی را که نمی‌دانی داری نمی‌توانی محافظت کنی؛ اول موجودی.']]),
    T('Personal phone used for work + company wants to wipe only work data = MDM containerization (BYOD).','گوشی شخصی برای کار + شرکت فقط داده‌ی کاری را می‌خواهد پاک کند = containerization در MDM (BYOD).')
  ]);
})();
