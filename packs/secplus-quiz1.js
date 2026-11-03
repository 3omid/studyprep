/* Security+ extension: Practice quiz 1 (20 mixed questions from the course quiz).
   Loads after secplus.js and adds section 13 to the same course.
   The correct answer is always o[0]; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['13']={en:'Practice quiz 1 (mixed, 20 questions)',fa:'آزمون تمرینی ۱ (ترکیبی، ۲۰ سؤال)'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:q1_'+(++n),sec:'13',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }

  M('Security baselines',
    'An organization wants to compare its server configurations to industry best practices. What should they use?',
    'یک سازمان می‌خواهد تنظیمات سرورهایش را با بهترین استانداردهای امنیتی صنعت مقایسه کند. از چه چیزی باید استفاده کند؟',
    'دنبال ابزار «مقایسه‌ی تنظیمات با استاندارد» بگرد.',
    ['SCAP with CIS Benchmarks','CVE','SIEM with NetFlow','Penetration testing'],
    ['SCAP همراه با CIS Benchmarks','CVE (فهرست آسیب‌پذیری‌های شناخته‌شده)','SIEM همراه با NetFlow','تست نفوذ'],
    'SCAP automates checking configurations; CIS Benchmarks are the industry best-practice secure configuration guides. Together they measure configuration compliance. CVE only lists known vulnerabilities, SIEM/NetFlow analyze events and traffic, and a pen test simulates attacks.',
    'SCAP بررسی تنظیمات را خودکار می‌کند و CIS Benchmarks دستورالعمل‌های تنظیم امن سیستم‌ها هستند. مثلاً بررسی می‌کنیم Windows Server مطابق توصیه‌های CIS تنظیم شده یا نه. نکته: SCAP + CIS = Configuration Compliance.');

  M('Linux access control',
    'A Linux administrator needs to implement fine-grained access control to restrict system calls and file access. Which technology should be enabled?',
    'مدیر سیستم لینوکس می‌خواهد کنترل دسترسی خیلی دقیق داشته باشد تا System Call‌ها و دسترسی به فایل‌ها را محدود کند. کدام فناوری را باید فعال کند؟',
    'کنترل دسترسی اجباری (MAC) در لینوکس.',
    ['SELinux','Group Policy','PAM','AppArmor'],
    ['SELinux','Group Policy (سیاست گروهی ویندوز)','PAM (ماژول‌های احراز هویت)','AppArmor'],
    'SELinux (Security-Enhanced Linux) enforces mandatory access control with fine-grained policies over processes, files and system calls. Group Policy is for Windows, PAM handles authentication, and AppArmor is a simpler path-based profile tool; the expected answer is SELinux.',
    'SELinux با کنترل دسترسی اجباری (MAC) مشخص می‌کند هر برنامه دقیقاً به چه چیزهایی دسترسی دارد. حتی اگر یک برنامه هک شود، دسترسی‌اش محدود می‌ماند. Group Policy مال ویندوز است و PAM برای احراز هویت است.');

  M('Risk prioritization',
    'A vulnerability is scored as critical but affects a test system not connected to production. Which concept justifies deprioritizing remediation?',
    'یک آسیب‌پذیری امتیاز Critical دارد، اما فقط روی یک سیستم آزمایشی است که به محیط اصلی (Production) وصل نیست. کدام مفهوم توجیه می‌کند که اولویت رفع آن پایین بیاید؟',
    'به «محیطی» که سیستم در آن قرار دارد فکر کن.',
    ['Environmental variable','Risk appetite','Exposure factor','False positive'],
    ['عامل محیطی (Environmental variable)','میزان ریسک‌پذیری سازمان','عامل مواجهه (Exposure factor)','مثبت کاذب'],
    'The base score does not reflect where the system sits. Environmental variables (such as an isolated, non-production test system) change the real risk and the remediation priority. Risk appetite is how much risk the organization accepts, exposure factor is the % of asset value lost, and a false positive is a wrong finding.',
    'امتیاز Critical به‌تنهایی نشان نمی‌دهد خطر واقعی چقدر است. یک سرور وصل به اینترنت در Production با یک سیستم آزمایشی جدا از شبکه فرق دارد. شرایط محیطی سیستم روی اولویت رفع اثر می‌گذارد.');

  M('MFA',
    'A user\'s credentials are stolen, but an attacker is unable to access the system without their company-issued hardware token. Which MFA factor prevented the breach?',
    'رمز یک کاربر دزدیده شده، اما مهاجم بدون توکن سخت‌افزاری شرکت نمی‌تواند وارد شود. کدام عامل MFA جلوی نفوذ را گرفت؟',
    'توکن سخت‌افزاری یک «وسیله» است.',
    ['Something you have','Something you know','Something you are','Somewhere you are'],
    ['چیزی که داری','چیزی که می‌دانی','چیزی که هستی','جایی که هستی'],
    'A hardware token (smart card, YubiKey, key fob) is a possession factor: something you have. Passwords/PINs are something you know, biometrics are something you are, and location is somewhere you are.',
    'توکن سخت‌افزاری مثل YubiKey یا کارت هوشمند یک وسیله‌ی فیزیکی است، پس «Something you have». رمز و PIN = چیزی که می‌دانی؛ اثر انگشت = چیزی که هستی؛ GPS = جایی که هستی.');

  M('Access control models',
    'A company needs to assign access rights based on a user\'s role in the organization. Which model should they implement to reduce administrative overhead and increase scalability?',
    'یک شرکت می‌خواهد دسترسی‌ها را بر اساس نقش کاربر در سازمان بدهد. برای کم کردن کار مدیریتی و افزایش مقیاس‌پذیری کدام مدل را باید پیاده کند؟',
    'کلمه‌ی کلیدی: Role.',
    ['RBAC','MAC','Rule-based','DAC'],
    ['RBAC (مبتنی بر نقش)','MAC (اجباری)','Rule-based (مبتنی بر قانون)','DAC (اختیاری)'],
    'Role-Based Access Control assigns permissions to roles (HR, IT admin, accountant) and users to roles, so moving a user means changing one role. MAC uses labels/classifications, rule-based uses predefined rules, and DAC lets the owner decide.',
    'در RBAC اول نقش‌ها تعریف می‌شوند و مجوزها به نقش داده می‌شود. اگر کارمندی از حسابداری به IT برود، فقط نقشش عوض می‌شود. هر وقت Role یا Job function یا Scalability دیدی، RBAC.');

  M('Insider threats',
    'Which of the following technologies would most help detect insider threats based on deviation from baseline behavior?',
    'کدام فناوری بیشتر از همه به شناسایی تهدید داخلی بر اساس انحراف از رفتار عادی کاربر کمک می‌کند؟',
    'رفتار کاربر + Baseline.',
    ['UBA','DMARC','IDS','Firewall logging'],
    ['UBA (تحلیل رفتار کاربر)','DMARC','IDS (سیستم تشخیص نفوذ)','لاگ فایروال'],
    'User Behavior Analytics learns each user\'s normal behavior and flags deviations, such as a 3 a.m. login or a sudden mass download. DMARC is email anti-spoofing, IDS looks for attack signatures/anomalies in traffic, and firewall logs record connections.',
    'UBA رفتار عادی هر کاربر را یاد می‌گیرد. اگر کسی که همیشه ساعت ۸ صبح وارد می‌شود و روزی ۱۰ فایل دانلود می‌کند، ناگهان ساعت ۳ صبح ۵۰۰۰ فایل دانلود کند، UBA هشدار می‌دهد.');

  M('Password security',
    'What is a common downside of enforcing frequent password changes without additional controls?',
    'یک مشکل رایج اجبار به تغییر مکرر رمز عبور، بدون کنترل‌های اضافی، چیست؟',
    'کاربرها چه رمزهایی می‌سازند وقت مجبور شوند مدام عوضش کنند؟',
    ['It decreases password entropy','It increases brute force resistance','Users create stronger passwords','It ensures session persistence'],
    ['آنتروپی (غیرقابل‌پیش‌بینی بودن) رمز را کم می‌کند','مقاومت در برابر Brute Force را زیاد می‌کند','کاربران رمزهای قوی‌تری می‌سازند','ماندگاری نشست را تضمین می‌کند'],
    'Forced frequent changes push users to predictable patterns (Password2025, Password2026), which lowers entropy. That is why current guidance changes passwords on evidence of compromise rather than on a fixed schedule.',
    'وقتی کاربر مجبور است مدام رمز عوض کند، فقط عدد آخرش را عوض می‌کند: Password2025 ← Password2026. رمز قابل حدس می‌شود و Entropy (پیچیدگی و غیرقابل‌پیش‌بینی بودن) پایین می‌آید.');

  M('Vulnerability management',
    'A company uses a bug bounty program. Which phase of vulnerability management does this most directly support?',
    'یک شرکت برنامه‌ی Bug Bounty دارد. این برنامه مستقیماً به کدام مرحله‌ی مدیریت آسیب‌پذیری کمک می‌کند؟',
    'محققان امنیتی آسیب‌پذیری «پیدا» می‌کنند و گزارش می‌دهند.',
    ['Identification','Analysis','Remediation','Validation'],
    ['شناسایی','تحلیل','رفع','اعتبارسنجی'],
    'A bug bounty pays outside researchers to find and report vulnerabilities, so it feeds the identification phase. Analysis rates severity, remediation fixes, and validation confirms the fix.',
    'در Bug Bounty شرکت به هکرهای اخلاقی پاداش می‌دهد تا ضعف‌ها را پیدا کنند. پس مرحله‌ی شناسایی است. Patch = رفع، Rescan = اعتبارسنجی، ارزیابی شدت = تحلیل.');

  M('Network monitoring',
    'Which of the following would best help detect lateral movement across a network?',
    'کدام گزینه بهترین کمک را برای شناسایی حرکت جانبی (Lateral movement) مهاجم در شبکه می‌کند؟',
    'باید ارتباطات بین سیستم‌های داخلی را ببینی.',
    ['NetFlow','SNMP','DLP','SAST'],
    ['NetFlow (تحلیل جریان ترافیک)','SNMP (مدیریت تجهیزات شبکه)','DLP (جلوگیری از نشت داده)','SAST (بررسی ایستای کد)'],
    'Lateral movement is an attacker hopping from one internal host to another. NetFlow records who talked to whom, on which ports and how much, so unusual internal connections stand out. SNMP manages devices, DLP stops data leaving, and SAST scans source code.',
    'حرکت جانبی یعنی مهاجم بعد از نفوذ به یک کامپیوتر، به سرورهای دیگر داخل شبکه می‌رود. NetFlow نشان می‌دهد چه سیستمی با چه سیستمی حرف زده، پس ارتباطات عجیب داخلی را می‌بینیم.');

  M('Vulnerability scanning',
    'Which of the following is a key characteristic of an agentless vulnerability scanner?',
    'ویژگی اصلی اسکنر آسیب‌پذیری بدون Agent چیست؟',
    'بدون نصب نرم‌افزار، پس از چه راهی وصل می‌شود؟',
    ['Uses existing protocols like SSH or WMI','Requires endpoint installation','Generates more detailed reports','Cannot detect missing patches'],
    ['از پروتکل‌های موجود مثل SSH یا WMI استفاده می‌کند','نیاز به نصب روی سیستم مقصد دارد','گزارش دقیق‌تری می‌دهد','نمی‌تواند Patchهای نصب‌نشده را پیدا کند'],
    'Agentless scanners log in remotely over existing protocols (SSH for Linux, WMI for Windows) instead of installing software. Installation is the agent-based approach, and agentless scans can still find missing patches.',
    'Agentless یعنی روی هیچ کامپیوتری نرم‌افزار نصب نمی‌کنیم؛ اسکنر با SSH (لینوکس) یا WMI (ویندوز) وصل می‌شود و اطلاعات Patch و تنظیمات را می‌خواند.');

  M('Identity federation',
    'An administrator is implementing identity federation across multiple cloud services. Which protocol is most appropriate for federated authentication in a browser-based environment?',
    'مدیر سیستم در حال پیاده‌سازی Identity Federation بین چند سرویس ابری است. کدام پروتکل برای احراز هویت فدرال در محیط مرورگر مناسب‌تر است؟',
    'Federation + مرورگر + SSO.',
    ['SAML','LDAP','TACACS+','Kerberos'],
    ['SAML','LDAP (سرویس دایرکتوری)','TACACS+ (مدیریت تجهیزات شبکه)','Kerberos (مبتنی بر Ticket)'],
    'SAML passes signed assertions from an identity provider (IdP) to service providers (SP), enabling browser-based single sign-on across organizations and cloud apps. LDAP queries directories, TACACS+ authenticates network device admins, and Kerberos is ticket-based inside a domain.',
    'SAML اجازه می‌دهد کاربر یک بار با حساب سازمانی وارد شود (SSO) و بدون رمز دوباره به سرویس‌های ابری مختلف برود. IdP هویت را تأیید می‌کند و SP سرویسی است که کاربر وارد آن می‌شود.');

  M('Firewalls & ports',
    'A security analyst observes external traffic attempting to connect on TCP port 23. Which firewall action is most appropriate?',
    'تحلیلگر امنیتی می‌بیند ترافیک خارجی می‌خواهد به پورت TCP 23 وصل شود. مناسب‌ترین اقدام فایروال چیست؟',
    'پورت 23 = Telnet = متن ساده (بدون رمزنگاری).',
    ['Block and alert on Telnet traffic','Allow based on access control list','Redirect to internal port 22','Rate-limit the traffic'],
    ['ترافیک Telnet را مسدود کن و هشدار بده','بر اساس ACL اجازه بده','به پورت داخلی 22 هدایت کن','نرخ ترافیک را محدود کن'],
    'TCP 23 is Telnet, which sends credentials in plaintext and should never be exposed to the internet. Block it and alert so the attempt is investigated. Redirecting to 22 does not make it SSH, and rate limiting still lets it through.',
    'Telnet رمز و اطلاعات را بدون رمزنگاری می‌فرستد. پس از بیرون باید مسدود شود و هشدار ثبت شود. جایگزین امن آن SSH روی پورت 22 است. پورت‌ها: 22 SSH، 23 Telnet، 80 HTTP، 443 HTTPS.');

  M('Audits',
    'What makes a system/process audit different from a vulnerability scan?',
    'چه چیزی ممیزی سیستم/فرایند را از اسکن آسیب‌پذیری متمایز می‌کند؟',
    'ممیزی فقط مشکل فنی پیدا نمی‌کند؛ به کسب‌وکار و کنترل‌ها هم نگاه می‌کند.',
    ['It evaluates business impact and control effectiveness','It\'s conducted by external teams','It only applies to open-source software','It cannot be automated'],
    ['تأثیر بر کسب‌وکار و اثربخشی کنترل‌ها را ارزیابی می‌کند','توسط تیم‌های خارجی انجام می‌شود','فقط برای نرم‌افزار متن‌باز است','قابل خودکارسازی نیست'],
    'A vulnerability scan finds technical weaknesses (missing patches, open ports, misconfigurations). An audit checks whether controls and processes actually work and what failure would cost the business. Audits can be internal or external and can be partly automated.',
    'اسکن آسیب‌پذیری ضعف فنی پیدا می‌کند: Patch نصب‌نشده، پورت باز. ممیزی می‌پرسد: آیا کنترل‌ها واقعاً کار می‌کنند؟ سیاست‌ها رعایت می‌شوند؟ اگر مشکلی پیش بیاید چه خسارتی به کسب‌وکار می‌خورد؟');

  M('Email security',
    'What does DKIM ensure when validating incoming email?',
    'DKIM هنگام بررسی ایمیل دریافتی چه چیزی را تضمین می‌کند؟',
    'DKIM = امضای دیجیتال = یکپارچگی.',
    ['The content has not been modified','The email has not been intercepted','The sending server uses DNSSEC','The recipient is authorized'],
    ['محتوای امضاشده تغییر نکرده است','ایمیل رهگیری نشده است','سرور فرستنده از DNSSEC استفاده می‌کند','گیرنده مجاز است'],
    'DKIM signs selected headers and the body with the sending domain\'s private key; the receiver checks it with the public key published in DNS. If the signed content changed, validation fails. SPF checks the sending server is allowed, and DMARC sets the policy using SPF/DKIM.',
    'سرور فرستنده ایمیل را با کلید خصوصی امضا می‌کند و کلید عمومی در DNS است. اگر محتوا در راه عوض شده باشد، امضا نامعتبر می‌شود. DKIM = یکپارچگی؛ SPF = سرور فرستنده مجاز است؛ DMARC = سیاست ضد جعل دامنه.');

  M('Privileged access',
    'An admin is configuring just-in-time privileges and wants credentials that expire after a single use. Which method aligns with this requirement?',
    'مدیر سیستم دسترسی Just-in-Time تنظیم می‌کند و می‌خواهد اعتبارنامه بعد از یک بار استفاده منقضی شود. کدام روش مناسب است؟',
    'Ephemeral یعنی موقت و کوتاه‌عمر.',
    ['Ephemeral credentials','Biometric authentication','Password vaulting','Static key rotation'],
    ['اعتبارنامه‌های موقت (Ephemeral)','احراز هویت بیومتریک','گاوصندوق رمز (Password vaulting)','تعویض دوره‌ای کلید ثابت'],
    'Ephemeral credentials are issued on demand and expire after one use or a short time, which is exactly what just-in-time access needs. Biometrics verify identity, vaulting stores secrets, and scheduled key rotation still leaves long-lived keys.',
    'در JIT دسترسی فقط وقتی لازم است و برای مدت کوتاه داده می‌شود. اعتبارنامه‌ی Ephemeral بعد از یک بار استفاده یا پایان زمان باطل می‌شود و برای دفعه‌ی بعد باید یکی تازه صادر شود.');

  M('Vulnerability management',
    'You apply a critical patch to a high-value system. What should be done immediately after?',
    'یک Patch بحرانی روی یک سیستم باارزش نصب کرده‌ای. بلافاصله بعدش چه باید کرد؟',
    'مرحله‌ی Validation.',
    ['Rescan and verify resolution','Wait 30 days before scanning again','Add the asset to CMDB','Archive old logs'],
    ['دوباره اسکن کن و رفع مشکل را تأیید کن','۳۰ روز برای اسکن بعدی صبر کن','دارایی را به CMDB اضافه کن','لاگ‌های قدیمی را بایگانی کن'],
    'After remediation comes validation: rescan to confirm the vulnerability is actually gone. Waiting 30 days delays confirmation, and CMDB updates or log archiving do not prove the fix.',
    'بعد از نصب Patch باید دوباره اسکن کنیم تا مطمئن شویم مشکل واقعاً رفع شده. Identification = پیدا کردن، Remediation = نصب Patch، Validation = اسکن دوباره و تأیید.');

  M('Security baselines',
    'Which technology allows for configuration validation against security baselines?',
    'کدام فناوری امکان اعتبارسنجی تنظیمات سیستم در مقایسه با Security Baselineها را می‌دهد؟',
    'Configuration + Baseline.',
    ['SCAP','NetFlow','CVSS','DAST'],
    ['SCAP','NetFlow (تحلیل ترافیک)','CVSS (امتیاز شدت آسیب‌پذیری)','DAST (تست پویای برنامه)'],
    'SCAP (Security Content Automation Protocol) automates checking system settings against baselines and reports misconfigurations. NetFlow analyzes traffic, CVSS scores vulnerability severity, and DAST tests running applications.',
    'SCAP تنظیمات Windows و Linux را با استانداردهای امنیتی مقایسه می‌کند و تنظیمات اشتباه را گزارش می‌دهد. SCAP = Configuration Compliance؛ CVSS = شدت آسیب‌پذیری.');

  M('Integrity monitoring',
    'Which tool would best help detect unauthorized file modifications on a critical server?',
    'کدام ابزار برای شناسایی تغییرات غیرمجاز فایل‌ها روی یک سرور حیاتی بهتر است؟',
    'تغییر فایل = تغییر Hash.',
    ['File integrity monitoring','NAC','SELinux','UBA'],
    ['پایش یکپارچگی فایل (FIM)','NAC (کنترل دسترسی به شبکه)','SELinux','UBA (تحلیل رفتار کاربر)'],
    'FIM stores hashes (e.g. SHA-256) of important files and alerts when a hash changes. NAC controls which devices join the network, SELinux restricts access, and UBA watches user behavior.',
    'FIM از فایل‌های مهم Hash می‌گیرد. اگر مهاجم یا کاربر بی‌اجازه فایلی را عوض کند، Hash عوض می‌شود و FIM هشدار می‌دهد. هر وقت Unauthorized file modification دیدی، FIM.');

  M('Risk management',
    'An organization whitelists an unsupported legacy application that has known vulnerabilities. This is an example of:',
    'سازمان یک نرم‌افزار قدیمی و بدون پشتیبانی را که آسیب‌پذیری شناخته‌شده دارد در Whitelist قرار می‌دهد. این نمونه‌ای از چیست؟',
    'اجازه‌ی رسمی برخلاف سیاست معمول.',
    ['Exception or exemption','Insurance offset','Risk transference','Remediation bypass'],
    ['استثنا یا معافیت (Exception / Exemption)','جبران با بیمه','انتقال ریسک','دور زدن رفع آسیب‌پذیری'],
    'Formally allowing a system that breaks normal security policy, usually for a business reason and with risk acceptance and compensating controls, is a security exception or exemption. Risk transference shifts the cost to a third party, such as an insurer.',
    'مثلاً نرم‌افزار حسابداری قدیمی فقط روی ویندوز قدیمی اجرا می‌شود و شرکت به دلایل کاری اجازه‌ی استفاده‌اش را می‌دهد. این یک استثنای امنیتی است و باید با پذیرش ریسک و کنترل جبرانی همراه باشد.');

  M('Threat intelligence',
    'What is a key limitation of relying solely on OSINT for vulnerability identification?',
    'یک محدودیت مهم تکیه‌ی صرف بر OSINT برای شناسایی آسیب‌پذیری چیست؟',
    'منبع عمومی همیشه تأییدشده نیست.',
    ['Sources may lack validation or context','Data is not machine-readable','Information is always outdated','OSINT requires commercial licensing'],
    ['منابع ممکن است تأییدنشده یا بدون زمینه‌ی کافی باشند','داده‌ها قابل پردازش ماشینی نیستند','اطلاعات همیشه قدیمی است','OSINT مجوز تجاری لازم دارد'],
    'OSINT comes from public sources (sites, forums, social media, public advisories) that may be unverified, incomplete or missing context such as affected versions. Much of it is machine-readable, not always outdated, and free. Confirm OSINT with authoritative sources.',
    'OSINT یعنی اطلاعات از منابع عمومی. ممکن است یک سایت بگوید نرم‌افزاری آسیب‌پذیر است، اما نسخه‌ی دقیق را نگوید یا منبع معتبر نباشد. پس باید با منابع معتبر دیگر تأییدش کرد.');
})();
