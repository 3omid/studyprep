/* Security+ extension: Practice quiz 1 (vulnerability management, IAM & monitoring).
   20 mixed review questions. Loads after secplus.js and adds section 13 to the same course.
   The correct answer is always the first option (the app shuffles them). */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['13']={en:'Practice quiz: vulnerability mgmt, IAM & monitoring',fa:'آزمون تمرینی: مدیریت آسیب‌پذیری، هویت و پایش'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:g'+(++n),sec:'13',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Vulnerability management',T2='Identity & access management',T3='Monitoring & detection',T4='Hardening & email security';

  M(T4,'An organization wants to compare its server configurations to industry best practices. What should they use?',
    'یک سازمان می‌خواهد تنظیمات سرورهایش را با بهترین روش‌های صنعت مقایسه کند. از چه چیزی استفاده کند؟',
    'یک ابزار خودکار + یک فهرست استاندارد تنظیمات امن.',
    ['SCAP with CIS Benchmarks','CVE','SIEM with NetFlow','Penetration testing'],
    ['SCAP همراه با CIS Benchmarks','CVE','SIEM همراه با NetFlow','تست نفوذ'],
    'CIS Benchmarks are industry best-practice configuration baselines, and SCAP tools check systems against them automatically. CVE is just a list of known vulnerabilities.',
    'CIS Benchmarks فهرست تنظیمات امنِ پیشنهادی صنعت است و SCAP ابزاری است که خودکار سیستم را با آن مقایسه می‌کند. مثل چک‌لیست معاینه‌ی فنی ماشین. CVE فقط فهرست آسیب‌پذیری‌های شناخته‌شده است.');

  M(T4,'A Linux administrator needs to implement fine-grained access control to restrict system calls and file access. Which technology should be enabled?',
    'مدیر لینوکس می‌خواهد کنترل دسترسی بسیار دقیق برای محدود کردن فراخوانی‌های سیستمی و دسترسی به فایل پیاده کند. کدام فناوری را فعال کند؟',
    'کنترل دسترسی اجباری (MAC) با برچسب امنیتی، ساخته‌ی NSA.',
    ['SELinux','Group Policy','PAM','AppArmor'],
    ['SELinux','Group Policy (ویندوز)','PAM','AppArmor'],
    'SELinux enforces mandatory access control with security labels, giving fine-grained control over processes, system calls and files. Group Policy is Windows; PAM handles authentication; AppArmor is simpler, path-based.',
    'SELinux با برچسب‌گذاری روی هر فایل و هر برنامه، دقیق تعیین می‌کند چه کسی به چه چیزی دسترسی دارد، حتی root. Group Policy مال ویندوز است، PAM برای ورود (احراز هویت) است و AppArmor ساده‌تر و بر اساس مسیر فایل است.');

  M(T1,'A vulnerability is scored as critical but affects a test system not connected to production. Which concept justifies deprioritizing remediation?',
    'یک آسیب‌پذیری «بحرانی» امتیاز گرفته، ولی روی یک سیستم تستی است که به محیط اصلی وصل نیست. کدام مفهوم عقب انداختن رفعش را توجیه می‌کند؟',
    'امتیاز CVSS را با شرایط محیط خودت تنظیم کن.',
    ['Environmental variable','Risk appetite','Exposure factor','False positive'],
    ['متغیر محیطی (Environmental)','اشتهای ریسک','ضریب در معرض بودن (EF)','مثبت کاذب'],
    'CVSS environmental metrics adjust a score to your own environment. An isolated test system has low exposure and low business impact, so its real priority is lower.',
    'امتیاز CVSS عمومی است. معیارهای Environmental آن را با شرایط شرکت خودت تنظیم می‌کنند. سیستم تستیِ جدا از شبکه‌ی اصلی، خطر واقعی کمتری دارد، پس اولویتش پایین‌تر است. آسیب‌پذیری واقعی است، پس مثبت کاذب نیست.');

  M(T2,'A user\'s credentials are stolen, but an attacker is unable to access the system without their company-issued hardware token. Which MFA factor prevented the breach?',
    'رمز یک کاربر دزدیده شده، ولی مهاجم بدون توکن سخت‌افزاری شرکت نمی‌تواند وارد شود. کدام عامل MFA جلوی نفوذ را گرفت؟',
    'توکن یک شیء فیزیکی است که در دست داری.',
    ['Something you have','Something you know','Something you are','Somewhere you are'],
    ['چیزی که داری','چیزی که می‌دانی','چیزی که هستی','جایی که هستی'],
    'A hardware token is a physical object the user possesses: something you have. The stolen password was the something-you-know factor.',
    'توکن سخت‌افزاری چیزی است که در جیبت داری (Something you have). رمز عبور «چیزی که می‌دانی» بود که دزدیده شد. چون عامل دوم دست مهاجم نبود، نتوانست وارد شود.');

  M(T2,'A company needs to assign access rights based on a user\'s role in the organization. Which model should they implement to reduce administrative overhead and increase scalability?',
    'شرکتی می‌خواهد دسترسی‌ها را بر اساس نقش شغلی افراد بدهد تا کار مدیریت کم شود و مقیاس‌پذیر باشد. کدام مدل؟',
    'به نقش دسترسی بده، نه به تک‌تک آدم‌ها.',
    ['RBAC','MAC','Rule-based','DAC'],
    ['RBAC (بر اساس نقش)','MAC (اجباری)','Rule-based (بر اساس قانون)','DAC (اختیاری مالک)'],
    'Role-Based Access Control gives permissions to roles; users get them by joining a role. Adding or moving people only means changing their role.',
    'در RBAC دسترسی‌ها به «نقش» داده می‌شود (مثلاً حسابدار). هر کس حسابدار شد، خودکار همه‌ی دسترسی‌های حسابدار را می‌گیرد. برای صدها نفر خیلی ساده‌تر از تنظیم تک‌تک است.');

  M(T3,'Which of the following technologies would most help detect insider threats based on deviation from baseline behavior?',
    'کدام فناوری بیشترین کمک را برای کشف تهدید داخلی بر اساس انحراف از رفتار عادی می‌کند؟',
    'رفتار عادی کاربر را یاد می‌گیرد و چیز عجیب را گزارش می‌دهد.',
    ['UBA','DMARC','IDS','Firewall logging'],
    ['UBA (تحلیل رفتار کاربر)','DMARC','IDS','لاگ فایروال'],
    'User Behavior Analytics builds a baseline of normal user activity and flags deviations, such as odd login times or large downloads, which is how insider threats show up.',
    'UBA یاد می‌گیرد هر کاربر معمولاً چه کار می‌کند. اگر کارمندی نصف شب هزاران فایل دانلود کند، هشدار می‌دهد. DMARC مال ایمیل است و IDS بیشتر دنبال الگوی حمله‌های شناخته‌شده است.');

  M(T2,'What is a common downside of enforcing frequent password changes without additional controls?',
    'عیب رایج اجبار به تغییر مکرر رمز عبور، بدون کنترل‌های دیگر چیست؟',
    'آدم‌ها خسته می‌شوند و رمز ساده و قابل حدس می‌سازند.',
    ['It decreases password entropy','It increases brute force resistance','Users create stronger passwords','It ensures session persistence'],
    ['قدرت (آنتروپی) رمز کم می‌شود','مقاومت در برابر brute force بیشتر می‌شود','کاربران رمز قوی‌تر می‌سازند','نشست کاربر پایدار می‌ماند'],
    'Forced frequent changes lead users to predictable patterns (Summer2025!, Summer2026!), which lowers entropy. NIST now advises changing passwords only when compromise is suspected.',
    'وقتی مدام مجبور به عوض کردن رمز باشی، فقط یک عدد آخرش را عوض می‌کنی (Pass1، Pass2...). این رمز را قابل حدس‌تر و ضعیف‌تر می‌کند. NIST هم می‌گوید فقط وقتی لو رفته عوضش کن.');

  M(T1,'A company uses a bug bounty program. Which phase of vulnerability management does this most directly support?',
    'شرکتی برنامه‌ی Bug Bounty دارد. این مستقیماً به کدام مرحله‌ی مدیریت آسیب‌پذیری کمک می‌کند؟',
    'محققان بیرونی آسیب‌پذیری «پیدا» می‌کنند.',
    ['Identification','Analysis','Remediation','Validation'],
    ['شناسایی','تحلیل','رفع','تأیید'],
    'Bug bounty programs pay outside researchers to find and report vulnerabilities, which is the identification phase.',
    'در Bug Bounty به هکرهای کلاه‌سفید پول می‌دهند تا ضعف‌ها را پیدا و گزارش کنند. پیدا کردن یعنی مرحله‌ی شناسایی (Identification). رفع و تأیید بعداً کار خود شرکت است.');

  M(T3,'Which of the following would best help detect lateral movement across a network?',
    'کدام گزینه برای کشف حرکت جانبی (Lateral movement) در شبکه بهترین است؟',
    'داده‌ی «چه کسی با چه کسی حرف زد» در شبکه.',
    ['NetFlow','SNMP','DLP','SAST'],
    ['NetFlow','SNMP','DLP','SAST'],
    'NetFlow records who talked to whom, on which ports and how much. Unusual internal host-to-host connections are a sign of lateral movement.',
    'NetFlow مثل ریز مکالمات تلفن است: نشان می‌دهد کدام دستگاه با کدام دستگاه ارتباط گرفته. اگر یک لپ‌تاپ ناگهان به ده‌ها سرور داخلی وصل شود، یعنی مهاجم دارد داخل شبکه جابه‌جا می‌شود. SAST بررسی کد است و DLP جلوی خروج داده را می‌گیرد.');

  M(T1,'Which of the following is a key characteristic of an agentless vulnerability scanner?',
    'ویژگی اصلی اسکنر آسیب‌پذیری بدون عامل (Agentless) چیست؟',
    'چیزی نصب نمی‌کند؛ از راه شبکه وارد می‌شود.',
    ['Uses existing protocols like SSH or WMI','Requires endpoint installation','Generates more detailed reports','Cannot detect missing patches'],
    ['از پروتکل‌های موجود مثل SSH یا WMI استفاده می‌کند','باید روی دستگاه نصب شود','گزارش دقیق‌تری می‌دهد','نمی‌تواند وصله‌های نصب‌نشده را پیدا کند'],
    'Agentless scanners install nothing on the endpoint; they log in remotely over SSH (Linux) or WMI/SMB (Windows), usually with credentials, and can still find missing patches.',
    'اسکنر بدون عامل هیچ برنامه‌ای روی دستگاه نصب نمی‌کند. از راه شبکه با SSH (لینوکس) یا WMI (ویندوز) وارد می‌شود و بررسی می‌کند. با رمز درست، وصله‌های جاافتاده را هم پیدا می‌کند.');

  M(T2,'An administrator is implementing identity federation across multiple cloud services. Which protocol is most appropriate for federated authentication in a browser-based environment?',
    'مدیری می‌خواهد هویت فدرال (Federation) را بین چند سرویس ابری پیاده کند. برای احراز هویت فدرال در مرورگر، کدام پروتکل مناسب‌تر است؟',
    'بر پایه‌ی XML، برای SSO وب بین سازمان‌ها.',
    ['SAML','LDAP','TACACS+','Kerberos'],
    ['SAML','LDAP','TACACS+','Kerberos'],
    'SAML passes signed XML assertions from an identity provider to service providers through the browser, enabling web SSO across organizations and clouds. LDAP and Kerberos are mostly internal; TACACS+ is for network devices.',
    'SAML یعنی یک بار در سرور هویت شرکت وارد می‌شوی و مرورگر یک «برگه‌ی تأیید» امضاشده را به سرویس‌های ابری دیگر نشان می‌دهد. LDAP و Kerberos بیشتر داخل شبکه‌ی شرکت‌اند و TACACS+ برای روتر و سوییچ است.');

  M(T4,'A security analyst observes external traffic attempting to connect on TCP port 23. Which firewall action is most appropriate?',
    'تحلیلگر می‌بیند ترافیک بیرونی می‌خواهد به پورت TCP 23 وصل شود. مناسب‌ترین اقدام فایروال چیست؟',
    'پورت ۲۳ = Telnet، بدون رمزگذاری.',
    ['Block and alert on Telnet traffic','Allow based on access control list','Redirect to internal port 22','Rate-limit the traffic'],
    ['مسدود کردن و هشدار برای ترافیک Telnet','اجازه بر اساس ACL','هدایت به پورت داخلی ۲۲','محدود کردن سرعت ترافیک'],
    'Port 23 is Telnet, which sends everything, including passwords, in clear text. Inbound Telnet from the internet should be blocked and alerted on; use SSH (22) instead.',
    'پورت ۲۳ مال Telnet است که همه چیز، حتی رمز عبور را بدون رمزگذاری می‌فرستد. اتصال Telnet از اینترنت باید بسته شود و هشدار بدهد. جایگزین امنش SSH روی پورت ۲۲ است.');

  M(T1,'What makes a system/process audit different from a vulnerability scan?',
    'تفاوت ممیزی سیستم/فرایند با اسکن آسیب‌پذیری چیست؟',
    'اسکن فقط ضعف فنی پیدا می‌کند؛ ممیزی بزرگ‌تر نگاه می‌کند.',
    ['It evaluates business impact and control effectiveness','It\'s conducted by external teams','It only applies to open-source software','It cannot be automated'],
    ['اثر بر کسب‌وکار و اثربخشی کنترل‌ها را می‌سنجد','توسط تیم‌های بیرونی انجام می‌شود','فقط برای نرم‌افزار متن‌باز است','نمی‌شود خودکارش کرد'],
    'A vulnerability scan lists technical weaknesses. An audit checks whether processes and controls work as intended and meet policy, and what that means for the business.',
    'اسکن آسیب‌پذیری فقط می‌گوید «این سرور وصله ندارد». ممیزی می‌پرسد «آیا روند وصله‌کردن ما درست کار می‌کند، طبق سیاست هست و چه اثری بر کسب‌وکار دارد؟». ممیزی می‌تواند داخلی یا بیرونی باشد.');

  M(T4,'What does DKIM ensure when validating incoming email?',
    'DKIM هنگام بررسی ایمیل دریافتی چه چیزی را تضمین می‌کند؟',
    'امضای دیجیتال روی محتوای ایمیل.',
    ['The content has not been modified','The email has not been intercepted','The sending server uses DNSSEC','The recipient is authorized'],
    ['محتوا تغییر نکرده است','ایمیل شنود نشده است','سرور فرستنده DNSSEC دارد','گیرنده مجاز است'],
    'DKIM adds a digital signature to the message; the receiver checks it with the public key in the sender\'s DNS. A valid signature proves integrity and that the sending domain signed it. It does not encrypt, so it cannot stop interception.',
    'DKIM مثل مهر و موم روی نامه است. فرستنده ایمیل را امضا می‌کند و گیرنده با کلید عمومی در DNS بررسی می‌کند. اگر کسی متن را عوض کرده باشد، امضا خراب می‌شود. ولی رمزگذاری نمی‌کند، پس جلوی خوانده شدن را نمی‌گیرد.');

  M(T2,'An admin is configuring just-in-time privileges and wants credentials that expire after a single use. Which method aligns with this requirement?',
    'مدیری دسترسی Just-in-time تنظیم می‌کند و اطلاعات ورودی می‌خواهد که بعد از یک بار استفاده باطل شود. کدام روش؟',
    'موقت، کوتاه‌عمر، یک‌بارمصرف.',
    ['Ephemeral credentials','Biometric authentication','Password vaulting','Static key rotation'],
    ['اطلاعات ورود موقت (Ephemeral)','احراز هویت بیومتریک','گاوصندوق رمز (Vaulting)','چرخش کلید ثابت'],
    'Ephemeral credentials are created on demand for one task or session and then expire, so there is no standing privilege for an attacker to steal.',
    'Ephemeral یعنی «زودگذر». مثل بلیت یک‌بارمصرف مترو: برای یک کار ساخته می‌شود و بعدش باطل است. پس چیزی نمی‌ماند که مهاجم بدزدد. Vaulting رمز را نگه می‌دارد ولی رمز خودش دائمی است.');

  M(T1,'You apply a critical patch to a high-value system. What should be done immediately after?',
    'یک وصله‌ی بحرانی روی سیستم مهمی نصب کردی. بلافاصله بعد از آن چه باید کرد؟',
    'مطمئن شو مشکل واقعاً رفع شده.',
    ['Rescan and verify resolution','Wait 30 days before scanning again','Add the asset to CMDB','Archive old logs'],
    ['دوباره اسکن کن و رفع شدن را تأیید کن','۳۰ روز صبر کن بعد اسکن کن','دارایی را به CMDB اضافه کن','لاگ‌های قدیمی را بایگانی کن'],
    'After remediation comes validation: rescan to confirm the vulnerability is gone and the patch did not break anything.',
    'بعد از رفع، مرحله‌ی تأیید (Validation) است: دوباره اسکن کن تا مطمئن شوی آسیب‌پذیری واقعاً رفته و وصله درست نصب شده. مثل اینکه بعد از تعمیر ماشین، یک دور آزمایشی می‌زنی.');

  M(T4,'Which technology allows for configuration validation against security baselines?',
    'کدام فناوری بررسی تنظیمات را در برابر خط مبنای امنیتی (Baseline) ممکن می‌کند؟',
    'زبان و ابزار استاندارد خودکارسازی بررسی تنظیمات.',
    ['SCAP','NetFlow','CVSS','DAST'],
    ['SCAP','NetFlow','CVSS','DAST'],
    'SCAP (Security Content Automation Protocol) uses standard formats such as XCCDF and OVAL to check systems against baselines automatically. CVSS only scores severity; DAST tests running web apps.',
    'SCAP مجموعه‌ای استاندارد است که خودکار تنظیمات سیستم را با یک چک‌لیست امنیتی مقایسه می‌کند. CVSS فقط شدت آسیب‌پذیری را نمره می‌دهد و DAST برنامه‌ی وب در حال اجرا را تست می‌کند.');

  M(T3,'Which tool would best help detect unauthorized file modifications on a critical server?',
    'کدام ابزار برای کشف تغییر غیرمجاز فایل‌ها روی یک سرور مهم بهترین است؟',
    'هش فایل‌ها را نگه می‌دارد و مقایسه می‌کند.',
    ['File integrity monitoring','NAC','SELinux','UBA'],
    ['پایش یکپارچگی فایل (FIM)','NAC','SELinux','UBA'],
    'FIM stores hashes of important files and alerts when a hash changes, revealing tampering with system files, configs or binaries.',
    'FIM از فایل‌های مهم «اثر انگشت» (هش) می‌گیرد. اگر کسی فایلی را عوض کند، اثر انگشتش فرق می‌کند و هشدار می‌دهد. NAC کنترل ورود دستگاه به شبکه است و SELinux جلوگیری می‌کند ولی کار اصلی‌اش کشف تغییر نیست.');

  M(T1,'An organization whitelists an unsupported legacy application that has known vulnerabilities. This is an example of:',
    'سازمانی یک برنامه‌ی قدیمی و بدون پشتیبانی را که آسیب‌پذیری شناخته‌شده دارد، در فهرست مجاز می‌گذارد. این نمونه‌ای از چیست؟',
    'قبول رسمی ریسک برای یک مورد خاص.',
    ['Exception or exemption','Insurance offset','Risk transference','Remediation bypass'],
    ['استثنا یا معافیت','جبران با بیمه','انتقال ریسک','دور زدن رفع'],
    'When a vulnerability cannot be fixed and the business still needs the system, a formal exception or exemption is documented, approved and usually paired with compensating controls.',
    'وقتی نمی‌شود مشکل را رفع کرد ولی کسب‌وکار به آن برنامه نیاز دارد، یک «استثنا» رسمی ثبت و تأیید می‌شود، معمولاً با کنترل جبرانی (مثلاً جدا کردنش از شبکه). انتقال ریسک یعنی بیمه یا سپردن به شرکت دیگر.');

  M(T1,'What is a key limitation of relying solely on OSINT for vulnerability identification?',
    'محدودیت اصلی تکیه‌ی کامل بر OSINT برای شناسایی آسیب‌پذیری چیست؟',
    'اطلاعات عمومی همیشه دقیق یا مرتبط نیست.',
    ['Sources may lack validation or context','Data is not machine-readable','Information is always outdated','OSINT requires commercial licensing'],
    ['منابع ممکن است تأییدنشده یا بی‌زمینه باشند','داده قابل‌خواندن با ماشین نیست','اطلاعات همیشه قدیمی است','OSINT مجوز تجاری لازم دارد'],
    'Open-source intelligence comes from public sources such as forums, blogs and social media. It can be unverified, inaccurate or missing context about your environment.',
    'OSINT اطلاعات عمومی است (انجمن‌ها، وبلاگ‌ها، شبکه‌های اجتماعی). رایگان است ولی ممکن است درست نباشد یا به سیستم‌های تو ربطی نداشته باشد. پس باید با منابع دیگر تأییدش کرد.');
})();
