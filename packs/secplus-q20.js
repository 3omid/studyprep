/* Security+ extension: Section 13, a 20-question practice set on security systems and tools
   (baselines, access control, MFA, vulnerability management, monitoring, email security, identity).
   Loads after secplus.js and adds section 13 (questions + study notes) to the same course.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['13']={en:'Practice set: security systems (20 questions)',fa:'تمرین: سیستم‌ها و ابزارهای امنیتی (۲۰ سؤال)'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:g'+(++n),sec:'13',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }

  /* ================= QUESTIONS ================= */
  var T1='Baselines & configuration compliance',T2='Access control & identity',T3='Vulnerability management',T4='Monitoring & detection',T5='Network & email security';

  /* 1 */
  M(T1,'An organization wants to compare its server configurations to industry best practices. What should they use?',
    'یک سازمان می‌خواهد تنظیمات سرورهای خود را با بهترین روش‌های امنیتی صنعت مقایسه کند. از چه چیزی باید استفاده کند؟',
    'دنبال ابزاری بگرد که «تنظیمات» را با یک «استاندارد پیکربندی امن» مقایسه کند، نه اینکه فقط آسیب‌پذیری‌ها را فهرست کند یا حمله را شبیه‌سازی کند.',
    ['SCAP with CIS Benchmarks','CVE','SIEM with NetFlow','Penetration testing'],
    ['SCAP همراه با CIS Benchmarks (بررسی خودکار تنظیمات با استانداردهای CIS)','CVE (فهرست آسیب‌پذیری‌های شناخته‌شده)','SIEM همراه با NetFlow (رویدادهای امنیتی و ترافیک شبکه)','تست نفوذ'],
    'CIS Benchmarks are industry best-practice secure configuration guides, and SCAP automates checking systems against them. CVE only lists known vulnerabilities, SIEM with NetFlow analyzes events and traffic, and a penetration test simulates an attack.',
    'CIS Benchmarks دستورالعمل‌های پیکربندی امن هستند و SCAP بررسی تنظیمات را با آن‌ها خودکار می‌کند. مثال: چک کنیم Windows Server طبق توصیه‌های CIS تنظیم شده یا نه. CVE فقط آسیب‌پذیری‌ها را فهرست می‌کند، SIEM و NetFlow رویداد و ترافیک را تحلیل می‌کنند و تست نفوذ حمله را شبیه‌سازی می‌کند. فرمول امتحان: SCAP + CIS = انطباق تنظیمات (Configuration compliance).');

  /* 2 */
  M(T2,'A Linux administrator needs to implement fine-grained access control to restrict system calls and file access. Which technology should be enabled?',
    'یک مدیر لینوکس می‌خواهد کنترل دسترسی بسیار دقیق (fine-grained) پیاده کند تا System Callها و دسترسی به فایل‌ها محدود شود. کدام فناوری را باید فعال کند؟',
    'یک فناوری لینوکسی که با Mandatory Access Control (MAC) کار می‌کند و اسم «Security-Enhanced» دارد.',
    ['SELinux','Group Policy','PAM','AppArmor'],
    ['SELinux (لینوکس با امنیت تقویت‌شده)','Group Policy (سیاست گروهی ویندوز)','PAM (ماژول‌های احراز هویت لینوکس)','AppArmor (محدودسازی برنامه‌ها در لینوکس)'],
    'SELinux (Security-Enhanced Linux) enforces Mandatory Access Control with detailed policies on processes, files and system calls, so even a hacked program stays confined. Group Policy is for Windows/Active Directory, PAM handles authentication, and AppArmor is a simpler path-based profile tool; the expected answer for fine-grained control is SELinux.',
    'SELinux با Mandatory Access Control (MAC) دسترسی هر برنامه را با قانون دقیق محدود می‌کند؛ حتی اگر برنامه هک شود، باز هم فقط به همان فایل‌های مجازش دسترسی دارد. Group Policy مال ویندوز است، PAM برای احراز هویت است، و AppArmor هم برنامه‌ها را محدود می‌کند اما ساده‌تر است؛ جواب مورد انتظار برای کنترل «بسیار دقیق» SELinux است.');

  /* 3 */
  M(T3,'A vulnerability is scored as critical but affects a test system not connected to production. Which concept justifies deprioritizing remediation?',
    'یک آسیب‌پذیری امتیاز بحرانی (Critical) دارد، اما فقط روی یک سیستم آزمایشی است که به محیط عملیاتی وصل نیست. کدام مفهوم توجیه می‌کند که رفعش در اولویت پایین‌تر باشد؟',
    'امتیاز پایه همه‌چیز نیست؛ «محیطی» که سیستم در آن قرار دارد ریسک واقعی را تغییر می‌دهد.',
    ['Environmental variable','Risk appetite','Exposure factor','False positive'],
    ['Environmental variable (عامل محیطی)','Risk appetite (میزان ریسک‌پذیری سازمان)','Exposure factor (درصد خسارت به دارایی)','False positive (مثبت کاذب)'],
    'Environmental factors (like CVSS environmental metrics) adjust a base score to your real situation: an isolated test box is far less exposed than an internet-facing production server. Risk appetite is how much risk the organization accepts, exposure factor is the percentage of an asset lost in an incident, and a false positive is a reported problem that is not real.',
    'امتیاز Critical به‌تنهایی نمی‌گوید در واقعیت چقدر خطرناک است. یک سرور Production که به اینترنت وصل است با یک سیستم آزمایشی جدا از شبکه، با همان آسیب‌پذیری، ریسک یکسانی ندارند. این «شرایط محیطی» همان Environmental variable است. Risk appetite = چقدر ریسک قبول می‌کنیم، Exposure factor = درصد خسارت، False positive = هشدار اشتباه.');

  /* 4 */
  M(T2,'A user\'s credentials are stolen, but an attacker is unable to access the system without their company-issued hardware token. Which MFA factor prevented the breach?',
    'اطلاعات ورود یک کاربر دزدیده شده، اما مهاجم بدون توکن سخت‌افزاری شرکت نمی‌تواند وارد شود. کدام عامل MFA جلوی نفوذ را گرفت؟',
    'توکن سخت‌افزاری یک وسیله‌ی فیزیکی است که کاربر در دستش دارد.',
    ['Something you have','Something you know','Something you are','Somewhere you are'],
    ['Something you have (چیزی که داری)','Something you know (چیزی که می‌دانی)','Something you are (چیزی که هستی)','Somewhere you are (جایی که هستی)'],
    'A hardware token (YubiKey, smart card, code generator) is a physical object: something you have. The stolen password is something you know, a fingerprint or face is something you are, and GPS location is somewhere you are.',
    'رمز عبور دزدیده شده (Something you know) ولی مهاجم توکن فیزیکی را ندارد. توکن سخت‌افزاری مثل YubiKey، کارت هوشمند یا دستگاه تولید کد = Something you have. اثر انگشت و چهره = Something you are. موقعیت GPS = Somewhere you are.');

  /* 5 */
  M(T2,'A company needs to assign access rights based on a user\'s role in the organization. Which model should they implement to reduce administrative overhead and increase scalability?',
    'شرکتی می‌خواهد دسترسی‌ها را بر اساس نقش کاربر در سازمان بدهد. برای کم کردن کار مدیریتی و افزایش مقیاس‌پذیری کدام مدل را پیاده کند؟',
    'کلمه‌ی «role» در خود سؤال آمده است.',
    ['RBAC','MAC','Rule-based access control','DAC'],
    ['RBAC (کنترل دسترسی مبتنی بر نقش)','MAC (کنترل دسترسی اجباری)','Rule-based (کنترل دسترسی مبتنی بر قانون)','DAC (کنترل دسترسی اختیاری)'],
    'Role-Based Access Control gives permissions to roles (HR Manager, IT Admin, Accountant) and users get roles, so moving a person means changing one role instead of many permissions. MAC uses labels and classifications, rule-based uses preset rules (like time of day), and DAC lets the resource owner decide.',
    'در RBAC اول نقش‌ها (مدیر منابع انسانی، مدیر IT، حسابدار) تعریف می‌شوند و مجوزها به نقش داده می‌شود. اگر کسی از حسابداری به IT برود، فقط نقشش را عوض می‌کنیم. کار مدیریتی کم می‌شود و مقیاس‌پذیر است. MAC = بر اساس طبقه‌بندی، Rule-based = بر اساس قانون از پیش تعیین‌شده، DAC = صاحب منبع تصمیم می‌گیرد. هر وقت Role یا Job function دیدی، RBAC.');

  /* 6 */
  M(T4,'Which of the following technologies would most help detect insider threats based on deviation from baseline behavior?',
    'کدام فناوری بیشترین کمک را به کشف تهدید داخلی (Insider threat) بر اساس انحراف از رفتار عادی (Baseline) می‌کند؟',
    'دنبال چیزی بگرد که «رفتار کاربر» را یاد می‌گیرد و چیز غیرعادی را گزارش می‌دهد.',
    ['UBA','DMARC','IDS','Firewall logging'],
    ['UBA (تحلیل رفتار کاربران)','DMARC (سیاست ضد جعل ایمیل)','IDS (سیستم تشخیص نفوذ)','Firewall logging (ثبت لاگ فایروال)'],
    'User Behavior Analytics builds a baseline of normal activity for each user and flags deviations, such as logging in at 3 a.m. and downloading 5,000 files. DMARC fights email domain spoofing, an IDS looks for attack signatures and suspicious traffic, and firewall logs only record connections.',
    'UBA رفتار عادی هر کاربر را یاد می‌گیرد (Baseline). مثلاً کارمندی همیشه ساعت ۸ وارد می‌شود و روزی ۱۰ فایل دانلود می‌کند؛ اگر ناگهان ساعت ۳ صبح بیاید و ۵۰۰۰ فایل دانلود کند، UBA هشدار می‌دهد. DMARC برای جعل ایمیل است، IDS برای حمله‌ها، و لاگ فایروال فقط اتصال‌ها را ثبت می‌کند. فرمول: UBA = Baseline + رفتار کاربر + Insider threat.');

  /* 7 */
  M(T2,'What is a common downside of enforcing frequent password changes without additional controls?',
    'یکی از مشکلات رایج اجبار کاربران به تغییر مکرر رمز، بدون کنترل امنیتی اضافه، چیست؟',
    'کاربر خسته وقتی مجبور است مرتب رمز عوض کند، چه نوع رمزی می‌سازد؟',
    ['It decreases password entropy','It increases brute force resistance','Users create stronger passwords','It ensures session persistence'],
    ['آنتروپی (غیرقابل‌پیش‌بینی بودن) رمز را کم می‌کند','مقاومت در برابر brute force را بیشتر می‌کند','کاربرها رمزهای قوی‌تر می‌سازند','ماندگاری نشست را تضمین می‌کند'],
    'Forced frequent changes push users to predictable patterns (Password2025, Password2026), which lowers entropy, the unpredictability of the password. That is why modern guidance (NIST) changes passwords only when there is a sign of compromise.',
    'Password entropy یعنی رمز چقدر پیچیده و غیرقابل‌حدس است. وقتی کاربر مجبور است مدام رمز عوض کند، فقط عدد آخر را عوض می‌کند: Password2025، Password2026، Password2027. این‌طوری رمز قابل‌پیش‌بینی می‌شود و امنیت کم می‌شود. نکته: تغییر دوره‌ای رمز بدون نشانه‌ی نفوذ، الزاماً سیاست خوبی نیست.');

  /* 8 */
  M(T3,'A company uses a bug bounty program. Which phase of vulnerability management does this most directly support?',
    'یک شرکت برنامه‌ی Bug Bounty دارد. این برنامه مستقیماً از کدام مرحله‌ی مدیریت آسیب‌پذیری پشتیبانی می‌کند؟',
    'در Bug Bounty محقق‌ها آسیب‌پذیری «پیدا» می‌کنند و گزارش می‌دهند.',
    ['Identification','Analysis','Remediation','Validation'],
    ['Identification (شناسایی)','Analysis (تحلیل)','Remediation (رفع)','Validation (اعتبارسنجی)'],
    'A bug bounty pays outside researchers to find and report vulnerabilities, so it feeds the identification phase. Analysis rates severity, remediation fixes (patching), and validation confirms the fix (rescanning).',
    'در Bug Bounty شرکت به محقق‌های امنیتی و هکرهای اخلاقی پاداش می‌دهد تا ضعف‌ها را پیدا و گزارش کنند؛ پس مرحله‌ی شناسایی است. ترتیب را حفظ کن: Identification = پیدا کردن، Analysis = سنجیدن شدت، Remediation = رفع (Patch)، Validation = بررسی دوباره (Rescan).');

  /* 9 */
  M(T4,'Which of the following would best help detect lateral movement across a network?',
    'کدام گزینه بهترین کمک را برای کشف حرکت جانبی (Lateral movement) مهاجم در شبکه می‌کند؟',
    'حرکت جانبی یعنی ارتباط از یک سیستم داخلی به سیستم داخلی دیگر؛ کدام ابزار جریان ترافیک بین سیستم‌ها را نشان می‌دهد؟',
    ['NetFlow','SNMP','DLP','SAST'],
    ['NetFlow (تحلیل جریان ترافیک شبکه)','SNMP (مدیریت تجهیزات شبکه)','DLP (جلوگیری از نشت داده)','SAST (تست ایستای کد)'],
    'NetFlow records who talked to whom, on which port and how much, so unusual internal connections (a workstation suddenly reaching many servers) stand out. SNMP manages and monitors network devices, DLP stops sensitive data from leaving, and SAST reviews source code.',
    'Lateral movement یعنی مهاجم اول یک کامپیوتر را آلوده می‌کند و بعد از آن به سرورهای دیگر می‌رود. NetFlow نشان می‌دهد چه سیستمی با چه سیستمی، روی چه پورتی و چقدر حرف زده؛ پس ارتباط داخلی عجیب را می‌بینیم. SNMP برای مدیریت تجهیزات شبکه است، DLP جلوی نشت داده را می‌گیرد و SAST کد را بررسی می‌کند.');

  /* 10 */
  M(T3,'Which of the following is a key characteristic of an agentless vulnerability scanner?',
    'ویژگی اصلی اسکنر آسیب‌پذیری بدون Agent (agentless) کدام است؟',
    'بدون نصب نرم‌افزار روی سیستم، اسکنر باید با چه چیزی به سیستم وصل شود؟',
    ['Uses existing protocols like SSH or WMI','Requires endpoint installation','Generates more detailed reports','Cannot detect missing patches'],
    ['از پروتکل‌های موجود مثل SSH یا WMI استفاده می‌کند','نیاز به نصب روی سیستم مقصد دارد','گزارش‌های دقیق‌تری می‌سازد','نمی‌تواند Patchهای نصب‌نشده را پیدا کند'],
    'An agentless scanner installs nothing on the target; it logs in remotely over existing protocols such as SSH (Linux) or WMI (Windows) and can still check patches and settings. Installing software on each endpoint describes an agent-based scanner.',
    'Agentless یعنی هیچ نرم‌افزاری روی سیستم مقصد نصب نمی‌شود؛ اسکنر با پروتکل‌های موجود وصل می‌شود: SSH برای لینوکس و WMI برای ویندوز. باز هم می‌تواند Patchهای جاافتاده و تنظیمات را چک کند. نصب Agent مال Agent-based است.');

  /* 11 */
  M(T2,'An administrator is implementing identity federation across multiple cloud services. Which protocol is most appropriate for federated authentication in a browser-based environment?',
    'مدیر سیستم در حال پیاده‌سازی اتحاد هویت (Identity federation) بین چند سرویس ابری است. کدام پروتکل برای احراز هویت فدرال در محیط مرورگر مناسب‌تر است؟',
    'پروتکلی مبتنی بر XML که IdP یک «ادعانامه» برای سرویس می‌فرستد و Single Sign-On می‌دهد.',
    ['SAML','LDAP','TACACS+','Kerberos'],
    ['SAML (زبان تبادل ادعای امنیتی)','LDAP (پروتکل دسترسی به دایرکتوری)','TACACS+ (احراز هویت مدیران تجهیزات شبکه)','Kerberos (احراز هویت با Ticket)'],
    'SAML lets an Identity Provider (IdP) send a signed assertion to a Service Provider (SP) through the browser, giving web SSO across cloud services. LDAP queries a directory, TACACS+ controls admin access to network devices, and Kerberos issues tickets inside a domain such as Active Directory.',
    'با SAML کاربر یک بار با حساب سازمانی وارد می‌شود و بدون رمز دوباره به چند سرویس ابری می‌رود (SSO). دو نقش: IdP (ارائه‌دهنده‌ی هویت که کاربر را تأیید می‌کند) و SP (سرویسی که کاربر می‌خواهد وارد آن شود). LDAP = دایرکتوری، TACACS+ = مدیریت تجهیزات شبکه، Kerberos = Ticket در Active Directory.');

  /* 12 */
  M(T5,'A security analyst observes external traffic attempting to connect on TCP port 23. Which firewall action is most appropriate?',
    'تحلیلگر امنیتی می‌بیند ترافیک خارجی تلاش می‌کند به پورت TCP 23 وصل شود. مناسب‌ترین کار فایروال چیست؟',
    'پورت ۲۳ مال کدام پروتکل قدیمی و بدون رمزگذاری است؟',
    ['Block and alert on Telnet traffic','Allow based on access control list','Redirect to internal port 22','Rate-limit the traffic'],
    ['ترافیک Telnet را مسدود کن و هشدار بده','بر اساس ACL اجازه بده','به پورت داخلی ۲۲ هدایت کن','نرخ ترافیک را محدود کن'],
    'TCP 23 is Telnet, which sends usernames and passwords in plaintext, so inbound Telnet from outside should be blocked, alerted on and logged. Allowing it is unsafe, redirecting to 22 is not a real SSH setup, and rate-limiting still lets Telnet through.',
    'پورت TCP 23 = Telnet؛ پروتکلی قدیمی که رمز و اطلاعات را بدون رمزگذاری (Plaintext) می‌فرستد. بهترین کار: مسدود کردن، هشدار دادن و ثبت لاگ. اجازه دادن ناامن است، Redirect به ۲۲ جایگزین درست SSH نیست و Rate-limit هم Telnet را قطع نمی‌کند. پورت‌ها: 22 = SSH، 23 = Telnet، 80 = HTTP، 443 = HTTPS.');

  /* 13 */
  M(T3,'What makes a system/process audit different from a vulnerability scan?',
    'چه چیزی ممیزی سیستم/فرایند (Audit) را از اسکن آسیب‌پذیری متمایز می‌کند؟',
    'اسکن ضعف‌های فنی را پیدا می‌کند؛ ممیزی به کنترل‌ها و تأثیر بر کسب‌وکار نگاه می‌کند.',
    ['It evaluates business impact and control effectiveness','It\'s conducted by external teams','It only applies to open-source software','It cannot be automated'],
    ['تأثیر بر کسب‌وکار و اثربخشی کنترل‌ها را ارزیابی می‌کند','توسط تیم‌های خارجی انجام می‌شود','فقط برای نرم‌افزار متن‌باز است','قابل خودکارسازی نیست'],
    'An audit checks whether controls and processes actually work (access reviews, policy compliance) and what failures would cost the business. A vulnerability scan only finds technical weaknesses such as missing patches, open ports and misconfigurations. Audits can be internal or external and parts can be automated.',
    'ممیزی می‌پرسد: آیا دسترسی‌ها درست مدیریت می‌شوند؟ آیا سیاست‌ها رعایت می‌شوند؟ آیا کنترل‌ها واقعاً کار می‌کنند؟ اگر مشکلی پیش بیاید چه خسارتی به کسب‌وکار می‌خورد؟ اما اسکن آسیب‌پذیری فقط ضعف فنی پیدا می‌کند: Patch نصب‌نشده، پورت باز، تنظیم اشتباه. ممیزی می‌تواند داخلی یا خارجی باشد و بخشی از آن خودکار است.');

  /* 14 */
  M(T5,'What does DKIM ensure when validating incoming email?',
    'DKIM هنگام اعتبارسنجی ایمیل دریافتی چه چیزی را تضمین می‌کند؟',
    'DKIM با امضای دیجیتال کار می‌کند؛ امضای دیجیتال چه چیزی را ثابت می‌کند؟',
    ['The content has not been modified','The email has not been intercepted','The sending server uses DNSSEC','The recipient is authorized'],
    ['محتوای امضاشده‌ی ایمیل تغییر نکرده است','ایمیل رهگیری نشده است','سرور فرستنده از DNSSEC استفاده می‌کند','گیرنده مجاز است'],
    'The sending server signs the message with its private key; the receiver fetches the public key from the domain\'s DNS and checks the signature. If signed headers or body changed, DKIM fails, so it proves integrity (and the signing domain). It does not stop interception, require DNSSEC, or check the recipient. SPF checks the sending server is allowed; DMARC sets the policy for failures.',
    'سرور فرستنده ایمیل را با کلید خصوصی امضا می‌کند؛ کلید عمومی در DNS دامنه است. گیرنده امضا را چک می‌کند و اگر بخش امضاشده تغییر کرده باشد، DKIM رد می‌شود. پس DKIM = یکپارچگی ایمیل. جدول طلایی: DKIM = امضای دیجیتال و یکپارچگی، SPF = سرور فرستنده مجاز است، DMARC = سیاست مقابله با جعل دامنه.');

  /* 15 */
  M(T2,'An admin is configuring just-in-time privileges and wants credentials that expire after a single use. Which method aligns with this requirement?',
    'مدیر سیستم دسترسی Just-in-Time تنظیم می‌کند و می‌خواهد اعتبارنامه بعد از یک بار استفاده منقضی شود. کدام روش با این نیاز جور است؟',
    'Ephemeral یعنی موقت و کوتاه‌عمر.',
    ['Ephemeral credentials','Biometric authentication','Password vaulting','Static key rotation'],
    ['Ephemeral credentials (اعتبارنامه‌ی موقت)','احراز هویت بیومتریک','Password vaulting (گاوصندوق رمز)','Static key rotation (تعویض دوره‌ای کلید ثابت)'],
    'Ephemeral credentials are created on demand, valid for a short time or a single use, then expire, which is exactly how just-in-time access works. Biometrics verify identity, a password vault stores secrets securely, and static key rotation replaces long-lived keys on a schedule.',
    'Ephemeral یعنی موقت. اعتبارنامه فقط وقتی لازم است ساخته می‌شود، یک بار یا برای مدت کوتاه کار می‌کند و بعد باطل می‌شود؛ برای دفعه‌ی بعد باید اعتبارنامه‌ی جدید صادر شود. JIT = دسترسی فقط وقتی لازم است. بیومتریک = اثر انگشت و چهره، Password vault = نگهداری امن رمزها، Static key rotation = عوض کردن کلید ثابت در بازه‌های مشخص.');

  /* 16 */
  M(T3,'You apply a critical patch to a high-value system. What should be done immediately after?',
    'یک Patch بحرانی روی یک سیستم مهم نصب می‌کنی. بلافاصله بعدش چه باید کرد؟',
    'از کجا مطمئن می‌شوی Patch واقعاً مشکل را حل کرده است؟',
    ['Rescan and verify resolution','Wait 30 days before scanning again','Add the asset to CMDB','Archive old logs'],
    ['دوباره اسکن کن و رفع مشکل را تأیید کن','۳۰ روز صبر کن و بعد اسکن کن','دارایی را به CMDB اضافه کن','لاگ‌های قدیمی را بایگانی کن'],
    'After remediation comes validation: rescan to confirm the vulnerability is really gone. Waiting 30 days delays that, the CMDB tracks assets and configuration, and archiving logs does not prove the fix.',
    'بعد از Patch (Remediation) باید مطمئن شویم مشکل واقعاً رفع شده؛ پس دوباره اسکن می‌کنیم (Validation). صبر ۳۰ روزه فقط تأخیر است، CMDB برای ثبت دارایی‌هاست و بایگانی لاگ ربطی به تأیید رفع مشکل ندارد. Patch = Remediation، Rescan = Validation.');

  /* 17 */
  M(T1,'Which technology allows for configuration validation against security baselines?',
    'کدام فناوری امکان اعتبارسنجی تنظیمات را در مقایسه با خط مبنای امنیتی (Security baseline) فراهم می‌کند؟',
    'همان پروتکل خودکارسازی محتوای امنیتی که در سؤال ۱ همراه CIS آمد.',
    ['SCAP','NetFlow','CVSS','DAST'],
    ['SCAP (پروتکل خودکارسازی محتوای امنیتی)','NetFlow (تحلیل جریان ترافیک)','CVSS (امتیازدهی شدت آسیب‌پذیری)','DAST (تست پویای اپلیکیشن)'],
    'SCAP (Security Content Automation Protocol) uses standard content (XCCDF, OVAL) so tools can automatically check systems against a baseline. NetFlow shows traffic, CVSS scores vulnerability severity, and DAST tests a running application.',
    'SCAP بررسی خودکار تنظیمات را ممکن می‌کند؛ مثلاً چک می‌کند Windows Server طبق CIS تنظیم شده یا نه. NetFlow = ترافیک شبکه، CVSS = امتیاز شدت آسیب‌پذیری، DAST = تست برنامه در حال اجرا. SCAP = Configuration compliance.');

  /* 18 */
  M(T4,'Which tool would best help detect unauthorized file modifications on a critical server?',
    'کدام ابزار برای کشف تغییرات غیرمجاز فایل‌ها روی یک سرور حیاتی بهتر است؟',
    'ابزاری که Hash فایل‌ها را نگه می‌دارد و وقتی Hash عوض شود خبر می‌دهد.',
    ['File integrity monitoring','NAC','SELinux','UBA'],
    ['File integrity monitoring (پایش یکپارچگی فایل)','NAC (کنترل دسترسی به شبکه)','SELinux (کنترل دسترسی لینوکس)','UBA (تحلیل رفتار کاربران)'],
    'FIM stores hashes (for example SHA-256) of important files and alerts when a hash changes, revealing unauthorized edits to system files or settings. NAC decides which devices may join the network, SELinux restricts access, and UBA watches user behavior.',
    'FIM از فایل‌های مهم Hash (مثلاً SHA-256) می‌گیرد؛ اگر مهاجم یا کاربر بدون مجوز فایلی را تغییر دهد، Hash عوض می‌شود و FIM هشدار می‌دهد. NAC = چه دستگاهی وارد شبکه شود، SELinux = محدود کردن دسترسی، UBA = رفتار کاربر. هر وقت «Unauthorized file modification» دیدی، FIM را انتخاب کن.');

  /* 19 */
  M(T3,'An organization whitelists an unsupported legacy application that has known vulnerabilities. This is an example of:',
    'سازمانی یک نرم‌افزار قدیمی و بدون پشتیبانی را که آسیب‌پذیری شناخته‌شده دارد، در فهرست مجاز (Whitelist) می‌گذارد. این نمونه‌ای از چیست؟',
    'سازمان رسماً اجازه می‌دهد برخلاف سیاست معمول از آن استفاده شود.',
    ['Exception or exemption','Insurance offset','Risk transference','Remediation bypass'],
    ['Exception / exemption (استثنا یا معافیت)','Insurance offset (جبران با بیمه)','Risk transference (انتقال ریسک)','Remediation bypass (دور زدن رفع)'],
    'Formally allowing a vulnerable system that breaks normal policy, for business reasons, is a documented security exception (exemption). It should come with risk acceptance and compensating controls. Insurance and risk transference move the financial impact to a third party; "remediation bypass" is not the standard term.',
    'گاهی سازمان مجبور است از یک نرم‌افزار قدیمی استفاده کند (مثلاً نرم‌افزار حسابداری که فقط روی ویندوز قدیمی کار می‌کند). وقتی رسماً اجازه‌ی استفاده برخلاف سیاست امنیتی داده می‌شود، یعنی Exception/Exemption؛ همراه با پذیرش ریسک و کنترل جبرانی. Risk transference و بیمه یعنی خسارت مالی را به شخص ثالث بدهیم.');

  /* 20 */
  M(T3,'What is a key limitation of relying solely on OSINT for vulnerability identification?',
    'یکی از محدودیت‌های مهم تکیه‌ی صرف بر OSINT برای شناسایی آسیب‌پذیری چیست؟',
    'اطلاعات منابع عمومی همیشه تأییدشده و کامل نیست.',
    ['Sources may lack validation or context','Data is not machine-readable','Information is always outdated','OSINT requires commercial licensing'],
    ['منابع ممکن است تأییدنشده یا بدون زمینه‌ی کافی باشند','داده‌ها قابل پردازش ماشینی نیستند','اطلاعات همیشه قدیمی است','OSINT مجوز تجاری لازم دارد'],
    'Open-source intelligence comes from public sites, forums, social media and public reports, which may be unverified or miss the affected version or conditions, so it must be confirmed with trusted sources or your own scanning. Much OSINT is machine-readable, it is not always outdated, and it is usually free.',
    'OSINT یعنی اطلاعات از منابع عمومی: وب‌سایت، شبکه‌ی اجتماعی، انجمن‌ها، گزارش‌های عمومی. مشکل: ممکن است منبع معتبر نباشد، نسخه‌ی دقیق نرم‌افزار یا شرایط آسیب‌پذیری گفته نشده باشد. پس باید با منابع معتبر یا اسکن خودمان تأییدش کنیم. «همیشه قدیمی» و «مجوز تجاری لازم دارد» غلط‌اند.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['13']={t:['Practice set: security systems (20 questions)','تمرین: سیستم‌ها و ابزارهای امنیتی (۲۰ سؤال)'],b:[
    PP('A mixed review of the tools and ideas that are easy to confuse on the exam: baselines, Linux access control, MFA factors, access control models, monitoring tools, vulnerability management phases, email security and identity federation.',
      'یک مرور ترکیبی از ابزارها و مفهوم‌هایی که در امتحان راحت با هم قاطی می‌شوند: خط مبنا، کنترل دسترسی لینوکس، عامل‌های MFA، مدل‌های کنترل دسترسی، ابزارهای پایش، مرحله‌های مدیریت آسیب‌پذیری، امنیت ایمیل و اتحاد هویت.'),

    H('Answer key','کلید پاسخ‌ها'),
    TB([['#','#'],['Answer','پاسخ'],['Topic','موضوع']],[
      [['1','1'],['SCAP with CIS Benchmarks','SCAP همراه با CIS'],['Security baselines','خط مبنای امنیتی']],
      [['2','2'],['SELinux','SELinux'],['Linux access control','کنترل دسترسی لینوکس']],
      [['3','3'],['Environmental variable','عامل محیطی'],['Risk prioritization','اولویت‌بندی ریسک']],
      [['4','4'],['Something you have','چیزی که داری'],['MFA','MFA']],
      [['5','5'],['RBAC','RBAC'],['Access control models','مدل‌های کنترل دسترسی']],
      [['6','6'],['UBA','UBA'],['Insider threat','تهدید داخلی']],
      [['7','7'],['Decreases password entropy','آنتروپی رمز کم می‌شود'],['Password policy','سیاست رمز عبور']],
      [['8','8'],['Identification','شناسایی'],['Bug bounty','Bug bounty']],
      [['9','9'],['NetFlow','NetFlow'],['Lateral movement','حرکت جانبی']],
      [['10','10'],['Uses SSH / WMI','استفاده از SSH / WMI'],['Agentless scanner','اسکنر بدون Agent']],
      [['11','11'],['SAML','SAML'],['Identity federation','اتحاد هویت']],
      [['12','12'],['Block and alert','مسدود کن و هشدار بده'],['Telnet / port 23','Telnet / پورت ۲۳']],
      [['13','13'],['Business impact + control effectiveness','تأثیر کسب‌وکار + اثربخشی کنترل'],['Audit vs scan','ممیزی در برابر اسکن']],
      [['14','14'],['Content not modified','محتوا تغییر نکرده'],['DKIM','DKIM']],
      [['15','15'],['Ephemeral credentials','اعتبارنامه‌ی موقت'],['Just-in-time access','دسترسی JIT']],
      [['16','16'],['Rescan and verify','اسکن دوباره و تأیید'],['Validation','اعتبارسنجی']],
      [['17','17'],['SCAP','SCAP'],['Configuration validation','اعتبارسنجی تنظیمات']],
      [['18','18'],['File integrity monitoring','پایش یکپارچگی فایل'],['File changes','تغییر فایل']],
      [['19','19'],['Exception or exemption','استثنا یا معافیت'],['Risk management','مدیریت ریسک']],
      [['20','20'],['Lack of validation or context','نبود تأیید یا زمینه'],['OSINT','OSINT']]]),

    H('Terms to memorize','اصطلاح‌هایی که باید حفظ کنی'),
    TB([['Term','اصطلاح'],['Remember','یادت باشد']],[
      [['SCAP','SCAP'],['Automated configuration compliance checks','بررسی خودکار تنظیمات امنیتی']],
      [['CIS Benchmarks','CIS Benchmarks'],['Secure configuration best practices','استاندارد پیکربندی امن']],
      [['SELinux','SELinux'],['Mandatory access control on Linux','کنترل دسترسی اجباری در لینوکس']],
      [['PAM','PAM'],['Authentication on Linux','احراز هویت در لینوکس']],
      [['RBAC','RBAC'],['Access by job role','دسترسی بر اساس نقش شغلی']],
      [['UBA','UBA'],['User behavior vs baseline','رفتار کاربر در برابر رفتار عادی']],
      [['NetFlow','NetFlow'],['Who talked to whom on the network','چه کسی با چه کسی در شبکه حرف زده']],
      [['FIM','FIM'],['Detects file changes with hashes','تشخیص تغییر فایل با Hash']],
      [['SAML','SAML'],['Federation and browser SSO','اتحاد هویت و SSO در مرورگر']],
      [['DKIM / SPF / DMARC','DKIM / SPF / DMARC'],['Signature + integrity / allowed sender server / policy against spoofing','امضا و یکپارچگی / سرور فرستنده‌ی مجاز / سیاست ضد جعل']],
      [['CVSS','CVSS'],['Vulnerability severity score','امتیاز شدت آسیب‌پذیری']],
      [['SAST / DAST','SAST / DAST'],['Static code review / testing the running app','بررسی ایستای کد / تست برنامه در حال اجرا']],
      [['SSH 22 / Telnet 23','SSH 22 / Telnet 23'],['Encrypted / plaintext remote access','دسترسی از راه دور رمزگذاری‌شده / بدون رمز']],
      [['Ephemeral','Ephemeral'],['Temporary, short-lived, single-use','موقت، کوتاه‌عمر، یک‌بارمصرف']],
      [['OSINT','OSINT'],['Public information; must be verified','اطلاعات عمومی؛ باید تأیید شود']]]),

    H('Three groups you must not mix up','سه گروهی که نباید قاطی کنی'),
    L([['Vulnerability management: Identification = find it (bug bounty, scans) → Analysis = rate it (CVSS + environment) → Remediation = fix it (patch) → Validation = prove it is fixed (rescan).','مدیریت آسیب‌پذیری: Identification = پیدا کردن (Bug bounty، اسکن) ← Analysis = سنجیدن (CVSS + محیط) ← Remediation = رفع (Patch) ← Validation = اثبات رفع (اسکن دوباره).'],
       ['Access control: RBAC = by role. MAC = by labels and mandatory policy (SELinux). DAC = the owner decides. Rule-based = preset rules such as time of day.','کنترل دسترسی: RBAC = بر اساس نقش. MAC = بر اساس برچسب و سیاست اجباری (SELinux). DAC = صاحب منبع تصمیم می‌گیرد. Rule-based = قانون‌های از پیش تعیین‌شده مثل ساعت کاری.'],
       ['Monitoring: UBA = user behavior. NetFlow = network traffic. FIM = file changes.','پایش: UBA = رفتار کاربر. NetFlow = ترافیک شبکه. FIM = تغییر فایل.']]),

    H('MFA factors','عامل‌های MFA'),
    TB([['Factor','عامل'],['Example','مثال']],[
      [['Something you know','چیزی که می‌دانی'],['Password, PIN','رمز عبور، PIN']],
      [['Something you have','چیزی که داری'],['Hardware token, smart card, YubiKey','توکن سخت‌افزاری، کارت هوشمند، YubiKey']],
      [['Something you are','چیزی که هستی'],['Fingerprint, face','اثر انگشت، چهره']],
      [['Somewhere you are','جایی که هستی'],['GPS location','موقعیت GPS']]]),

    TT('Keyword shortcuts: "industry best practices / baseline" → SCAP + CIS. "Deviation from baseline behavior" → UBA. "Lateral movement" → NetFlow. "Unauthorized file modification" → FIM. "Browser federation" → SAML. "Single use / just-in-time" → ephemeral credentials. "Right after patching" → rescan.',
      'کلیدواژه‌ها: «بهترین روش صنعت / خط مبنا» ← SCAP + CIS. «انحراف از رفتار عادی» ← UBA. «حرکت جانبی» ← NetFlow. «تغییر غیرمجاز فایل» ← FIM. «اتحاد هویت در مرورگر» ← SAML. «یک‌بارمصرف / JIT» ← Ephemeral. «درست بعد از Patch» ← Rescan.')
  ]};
})();
