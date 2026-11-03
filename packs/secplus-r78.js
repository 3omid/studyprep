/* Security+ extension: the online review quiz for Modules 7 & 8 (Domains 3.3, 3.4, 4.1 and 4.2), 20 questions.
   Loads after secplus.js and adds them as their own section, so they can be practised as a pre-test. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['R7-8']={en:'Modules 7 & 8 review quiz',fa:'آزمون مرور ماژول ۷ و ۸'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:r'+(++n),sec:'R7-8',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Hardening & app security',T2='Data protection & crypto',T3='Backups & resilience',T4='Mobile & IoT';

  M(T1,'When hardening a Windows server, disabling SMBv1 primarily helps prevent which type of vulnerability?',
    'هنگام ایمن‌سازی یک سرور ویندوز، غیرفعال کردن SMBv1 عمدتاً از چه نوع آسیب‌پذیری جلوگیری می‌کند؟',
    'SMBv1 نسخه‌ی خیلی قدیمی پروتکل اشتراک فایل ویندوز است (همان که WannaCry از آن استفاده کرد).',
    ['Exploitation of outdated file sharing protocols','Privilege escalation via local accounts','Bypassing encryption during TLS handshakes','Cross-site scripting in web applications'],
    ['سوءاستفاده از پروتکل‌های قدیمی اشتراک فایل','افزایش سطح دسترسی با حساب‌های محلی','دور زدن رمزنگاری هنگام دست‌دادن TLS','حمله‌ی XSS به برنامه‌های وب'],
    'SMBv1 is a legacy file-sharing protocol with well-known exploits (e.g. EternalBlue). Disabling it removes that attack surface. Privilege escalation, TLS and XSS are unrelated.',
    'SMBv1 پروتکل قدیمی اشتراک فایل ویندوز است و آسیب‌پذیری‌های معروفی دارد. خاموش کردنش سطح حمله را کم می‌کند. افزایش دسترسی، TLS و XSS ربطی به آن ندارند.');

  M(T2,'An organization detects unexpected changes in a database but no unauthorized access logs. What should be used next?',
    'سازمان تغییرات غیرمنتظره‌ای در پایگاه داده می‌بیند، اما هیچ گزارشی از دسترسی غیرمجاز نیست. قدم بعدی چیست؟',
    'سوال درباره‌ی «آیا داده دست خورده؟» است، یعنی یکپارچگی (Integrity).',
    ['Hash integrity verification','Load balancer logs','UPS diagnostics','Token rotation metrics'],
    ['بررسی یکپارچگی با هش','لاگ‌های Load balancer','عیب‌یابی UPS','آمار تعویض توکن'],
    'Comparing the current hash of the data with a known-good hash shows whether it was changed. Load balancer logs show traffic, UPS is power, token rotation is not about data integrity.',
    'هش فعلی داده را با هش سالم قبلی مقایسه می‌کنیم؛ اگر فرق کند، داده عوض شده. لاگ Load balancer ترافیک است، UPS برق است و تعویض توکن یکپارچگی داده را بررسی نمی‌کند.');

  M(T1,'Which cryptographic protocol is commonly used with RADIUS in WPA3-Enterprise?',
    'کدام پروتکل رمزنگاری معمولاً در WPA3-Enterprise همراه با RADIUS استفاده می‌شود؟',
    'WPA3 از نسخه‌ی جدید AES استفاده می‌کند؛ بقیه‌ی گزینه‌ها قدیمی و ضعیف‌اند.',
    ['AES-GCMP','RC4','DES','Blowfish'],
    ['AES-GCMP','RC4','DES','Blowfish'],
    'WPA3 uses AES-GCMP (Galois/Counter Mode Protocol) for encryption and integrity; RADIUS handles user authentication. RC4 and DES are old and insecure; Blowfish is not used in WPA3.',
    'WPA3 برای رمزنگاری و یکپارچگی از AES-GCMP استفاده می‌کند و RADIUS کار احراز هویت کاربران را انجام می‌دهد. RC4 و DES قدیمی و ناامن‌اند و Blowfish در WPA3 نیست.');

  M(T1,'Setting the HttpOnly flag on cookies primarily mitigates which risk?',
    'فعال کردن ویژگی HttpOnly روی کوکی‌ها عمدتاً کدام خطر را کم می‌کند؟',
    'HttpOnly یعنی «فقط HTTP»؛ پس JavaScript نمی‌تواند کوکی را بخواند.',
    ['Cross-site scripting from accessing cookies','SQL injection','CSRF token reuse','Privilege escalation in databases'],
    ['دسترسی اسکریپت XSS به کوکی‌ها','تزریق SQL','استفاده‌ی دوباره از توکن CSRF','افزایش دسترسی در پایگاه داده'],
    'HttpOnly stops JavaScript (document.cookie) from reading the cookie, so an XSS script cannot steal the session cookie. SQL injection is fixed with parameterized queries; CSRF needs tokens/SameSite.',
    'HttpOnly نمی‌گذارد JavaScript (مثلاً document.cookie) کوکی را بخواند، پس اسکریپت XSS نمی‌تواند کوکی نشست را بدزدد. تزریق SQL با کوئری پارامتری و CSRF با توکن یا SameSite کنترل می‌شود.');

  M(T1,'Static code analysis is performed:',
    'تحلیل ایستای کد (Static) چطور انجام می‌شود؟',
    'Static یعنی «ساکن»: برنامه اجرا نمی‌شود.',
    ['On source code without executing it','On running applications to detect vulnerabilities','Only during penetration testing','During end-user acceptance testing'],
    ['روی کد منبع، بدون اجرای آن','روی برنامه‌ی در حال اجرا','فقط هنگام تست نفوذ','هنگام تست پذیرش کاربر نهایی'],
    'Static analysis (SAST) reads the source code without running it. Testing a running app is dynamic analysis (DAST). It is not limited to pen tests, and UAT checks user requirements.',
    'تحلیل ایستا (SAST) کد منبع را بدون اجرا بررسی می‌کند. تست برنامه‌ی در حال اجرا DAST است. SAST فقط مخصوص تست نفوذ نیست و UAT برای بررسی نیاز کاربران است.');

  M(T4,'Which security measure best protects IoT devices against default credential attacks?',
    'کدام اقدام بهتر از همه دستگاه‌های IoT را در برابر حمله با نام کاربری و رمز پیش‌فرض محافظت می‌کند؟',
    'مشکل «رمز پیش‌فرض» است؛ ساده‌ترین راه‌حل مستقیم را پیدا کن.',
    ['Changing factory-set usernames and passwords','Using network address translation','Placing IoT devices on the same VLAN as critical servers','Disabling encryption'],
    ['تغییر نام کاربری و رمز کارخانه','استفاده از NAT','گذاشتن IoT در همان VLAN سرورهای حساس','خاموش کردن رمزنگاری'],
    'Default usernames and passwords are public, so attackers (e.g. the Mirai botnet) just try them. Changing them to strong unique ones fixes it. NAT does not, sharing a VLAN with critical servers makes things worse, and disabling encryption weakens security.',
    'رمزهای پیش‌فرض همه‌جا منتشر شده‌اند و مهاجم (مثل بات‌نت Mirai) فقط امتحانشان می‌کند. عوض کردن آن‌ها با رمز قوی و یکتا مشکل را حل می‌کند. NAT کمکی نمی‌کند، کنار سرورهای حساس گذاشتن بدتر است و خاموش کردن رمزنگاری امنیت را کم می‌کند.');

  M(T1,'Which of the following best describes a key reason for maintaining secure baselines over time?',
    'کدام گزینه دلیل اصلی نگهداری و به‌روز کردن مداوم secure baseline را بهتر توضیح می‌دهد؟',
    'تهدیدها و استانداردها مدام عوض می‌شوند؛ baseline هم باید همراهشان به‌روز شود.',
    ['To ensure system settings remain compliant with evolving threats and standards','To provide identical configurations for all systems regardless of role','To eliminate the need for patch management','To reduce the number of user accounts on a system'],
    ['تا تنظیمات با تهدیدها و استانداردهای جدید هماهنگ بماند','تا همه‌ی سیستم‌ها بدون توجه به نقششان تنظیمات یکسان داشته باشند','تا دیگر نیازی به مدیریت وصله نباشد','تا تعداد حساب‌های کاربری کم شود'],
    'A secure baseline is the approved security configuration; it must be reviewed so it keeps up with new threats and standards. Different roles need different baselines, baselines do not replace patching, and account count is not the goal.',
    'Secure baseline مجموعه‌ی تنظیمات امنیتی تأییدشده است و باید مرتب بازبینی شود تا با تهدیدها و استانداردهای جدید هماهنگ بماند. نقش‌های مختلف baseline متفاوت دارند، baseline جای وصله را نمی‌گیرد و کم کردن حساب‌ها هدفش نیست.');

  M(T3,'An organization runs nightly full backups and hourly incremental backups. What tradeoff does this approach address?',
    'سازمان هر شب پشتیبان کامل و هر ساعت پشتیبان افزایشی می‌گیرد. این روش کدام مصالحه را مدیریت می‌کند؟',
    'Full فضای زیادی می‌گیرد؛ incremental کم‌حجم است و می‌شود زیاد گرفتش.',
    ['Storage space vs. recovery granularity','Recovery speed vs. uptime','Snapshot size vs. obfuscation','Resilience vs. classification'],
    ['فضای ذخیره‌سازی در برابر ریزدانگی (دقت) بازیابی','سرعت بازیابی در برابر uptime','حجم snapshot در برابر مبهم‌سازی','تاب‌آوری در برابر طبقه‌بندی'],
    'A full backup copies everything and uses a lot of space; incrementals copy only changes since the last backup. Together they save space while giving a restore point every hour.',
    'پشتیبان کامل همه چیز را کپی می‌کند و جای زیادی می‌گیرد؛ افزایشی فقط تغییرات از آخرین پشتیبان را. ترکیبشان هم فضا را صرفه‌جویی می‌کند و هم هر ساعت یک نقطه‌ی بازیابی می‌دهد.');

  M(T2,'Which of the following best secures data at rest without altering the original format?',
    'کدام گزینه بهتر از همه از داده‌ی ذخیره‌شده (data at rest) محافظت می‌کند، بدون اینکه قالب اصلی را از دست بدهد؟',
    'دنبال روشی بگرد که محرمانگی بدهد و بعد بشود دقیقاً همان داده‌ی اصلی را برگرداند.',
    ['Encryption','Obfuscation','Masking','Tokenization'],
    ['رمزنگاری (Encryption)','مبهم‌سازی (Obfuscation)','پوشاندن (Masking)','توکن‌سازی (Tokenization)'],
    'Encryption makes stored data unreadable without the key, and decrypting returns the exact original. Obfuscation only makes it harder to understand, masking hides part of it (****1234), and tokenization swaps it for a token. (Strictly, encryption changes the bytes, but it is the best answer here.)',
    'رمزنگاری داده‌ی ذخیره‌شده را بدون کلید غیرقابل خواندن می‌کند و با رمزگشایی دقیقاً داده‌ی اصلی برمی‌گردد. مبهم‌سازی فقط فهمیدن را سخت می‌کند، Masking بخشی را پنهان می‌کند (****1234) و Tokenization داده را با توکن عوض می‌کند. (از نظر فنی رمزنگاری بایت‌ها را عوض می‌کند، ولی بهترین گزینه همین است.)');

  M(T2,'An encrypted backup file cannot be decrypted due to missing keys. What principle was not followed?',
    'فایل پشتیبان رمزنگاری‌شده چون کلیدش گم شده، باز نمی‌شود. کدام اصل رعایت نشده است؟',
    'رمزنگاری انجام شده؛ مشکل از نگهداری کلید است.',
    ['Key management','Geolocation policy','Encryption at rest','Obfuscation'],
    ['مدیریت کلید (Key management)','سیاست موقعیت جغرافیایی','رمزنگاری داده‌ی ذخیره‌شده','مبهم‌سازی'],
    'Key management covers creating, storing, protecting, backing up and recovering keys. The data was already encrypted at rest; losing the key is a key-management failure.',
    'مدیریت کلید یعنی ساختن، نگهداری امن، پشتیبان‌گیری و بازیابی کلیدها. داده از قبل رمز شده بود؛ گم شدن کلید یعنی مدیریت کلید درست انجام نشده.');

  M(T4,'Which MDM feature best mitigates data loss from a lost corporate smartphone?',
    'کدام قابلیت MDM بهتر از همه جلوی افشای اطلاعات یک گوشی سازمانی گم‌شده را می‌گیرد؟',
    'گوشی دیگر دست شما نیست؛ چه کاری از راه دور می‌شود کرد؟',
    ['Remote wipe capability','Enforcing strong passwords','Restricting app downloads','Installing antivirus software'],
    ['پاک‌سازی از راه دور (Remote wipe)','الزام رمز قوی','محدود کردن دانلود برنامه','نصب آنتی‌ویروس'],
    'Remote wipe lets the admin erase the lost or stolen device over the network. A strong password only slows an attacker, app restrictions and antivirus address other risks.',
    'Remote wipe به مدیر اجازه می‌دهد اطلاعات گوشی گم‌شده یا دزدیده‌شده را از راه دور پاک کند. رمز قوی فقط کار مهاجم را سخت‌تر می‌کند و محدودیت برنامه و آنتی‌ویروس برای خطرهای دیگرند.');

  M(T4,'Why is network segmentation critical when deploying IoT devices in an enterprise environment?',
    'چرا هنگام استفاده از دستگاه‌های IoT در سازمان، بخش‌بندی شبکه (segmentation) اهمیت زیادی دارد؟',
    'اگر یک دوربین IoT هک شود، نباید راهی به سرورهای مهم داشته باشد.',
    ['It prevents IoT devices from accessing unauthorized internal systems','It increases device battery life','It eliminates the need for firmware updates','It allows IoT devices to use default credentials securely'],
    ['جلوی دسترسی IoT به سیستم‌های داخلی غیرمجاز را می‌گیرد','عمر باتری را بیشتر می‌کند','نیاز به به‌روزرسانی firmware را حذف می‌کند','استفاده‌ی امن از رمز پیش‌فرض را ممکن می‌کند'],
    'Putting IoT devices in their own VLAN with restricted traffic isolates them, so a hacked camera cannot reach the finance servers. It does nothing for battery, does not replace firmware updates, and does not make default passwords safe.',
    'گذاشتن IoT در VLAN جدا با ترافیک محدود آن‌ها را ایزوله می‌کند؛ اگر دوربین هک شود، به سرورهای مالی نمی‌رسد. ربطی به باتری ندارد، جای به‌روزرسانی firmware را نمی‌گیرد و رمز پیش‌فرض را امن نمی‌کند.');

  M(T3,'An organization needs to recover to its last known good state within minutes. Which strategy is most effective?',
    'سازمان باید ظرف چند دقیقه به آخرین وضعیت سالم برگردد. کدام راهبرد مؤثرتر است؟',
    'گزینه‌ای را پیدا کن که تغییرات را پیوسته ثبت می‌کند، نه ماهانه یا با راه‌اندازی طولانی.',
    ['Journaling','Monthly replication','Differential backup','Cold site deployment'],
    ['ثبت پیوسته‌ی تغییرات (Journaling)','تکثیر ماهانه','پشتیبان تفاضلی','راه‌اندازی cold site'],
    'Journaling keeps a running log of changes, so the system can be rolled back or forward to a consistent good state quickly. Monthly replication loses too much data, a differential restore needs the full plus the differential, and a cold site takes days to bring up.',
    'Journaling تغییرات را پیوسته در یک لاگ ثبت می‌کند، پس سیستم سریع به یک وضعیت سالم و سازگار برمی‌گردد. تکثیر ماهانه داده‌ی زیادی از دست می‌دهد، بازیابی تفاضلی به نسخه‌ی کامل و تفاضلی نیاز دارد و cold site چند روز طول می‌کشد.');

  M(T2,'A system uses hashing to verify file integrity. What critical weakness must be mitigated in this method?',
    'یک سیستم برای بررسی یکپارچگی فایل از هش استفاده می‌کند. کدام ضعف مهم این روش باید کنترل شود؟',
    'اگر دو فایل متفاوت هش یکسان بدهند، چه می‌شود؟',
    ['Hash collisions','Snapshot timing','Password reuse','Symmetric key loss'],
    ['برخورد هش (Hash collision)','زمان‌بندی snapshot','استفاده‌ی دوباره از رمز','گم شدن کلید متقارن'],
    'A collision is two different inputs giving the same hash, so a changed file could still pass the check. Use strong algorithms such as SHA-256, not MD5 or SHA-1. Snapshot timing, password reuse and key loss are other topics.',
    'برخورد یعنی دو ورودی متفاوت هش یکسان بدهند؛ آن‌وقت فایل دست‌خورده هم از بررسی رد می‌شود. باید از الگوریتم قوی مثل SHA-256 استفاده کرد، نه MD5 یا SHA-1. بقیه‌ی گزینه‌ها موضوع‌های دیگری‌اند.');

  M(T3,'A high-availability cluster fails over during maintenance. What does this indicate?',
    'یک کلاستر high-availability هنگام نگهداری (maintenance) به گره‌ی جایگزین منتقل می‌شود (fail over). این نشانه‌ی چیست؟',
    'Failover دقیقاً همان کاری است که HA باید بکند.',
    ['Testing strategy succeeded','UPS was misconfigured','Load balancing failed','Backup snapshot was corrupted'],
    ['راهبرد تست موفق بوده','UPS اشتباه تنظیم شده','load balancing شکست خورده','snapshot پشتیبان خراب شده'],
    'Failover moves service from the main node to a standby node. If it happens smoothly during maintenance, the HA mechanism works as designed, so the test succeeded. It says nothing bad about the UPS, load balancing or snapshots.',
    'Failover یعنی سرویس از گره‌ی اصلی به گره‌ی جایگزین منتقل شود. اگر هنگام نگهداری درست انجام شود، یعنی HA همان‌طور که طراحی شده کار می‌کند و تست موفق بوده. نشانه‌ی خرابی UPS، load balancing یا snapshot نیست.');

  M(T2,'Which method would be most appropriate to limit access to segmented customer data within a cloud database?',
    'کدام روش برای محدود کردن دسترسی به داده‌ی بخش‌بندی‌شده‌ی مشتریان در یک پایگاه داده‌ی ابری مناسب‌تر است؟',
    'سوال درباره‌ی «چه کسی به چه چیزی دسترسی دارد» است.',
    ['Permission restrictions','Load balancing','Obfuscation','Tokenization'],
    ['محدودیت مجوزها (Permission restrictions)','توزیع بار','مبهم‌سازی','توکن‌سازی'],
    'Permission restrictions decide which users can see which data, following least privilege (e.g. sales staff see only their own region\'s customers). Load balancing spreads requests, obfuscation hides meaning, and tokenization replaces data but does not control who can access it.',
    'محدودیت مجوز تعیین می‌کند هر کاربر به کدام داده دسترسی دارد، طبق اصل کمترین دسترسی (مثلاً کارمند فروش فقط مشتریان منطقه‌ی خودش را می‌بیند). توزیع بار درخواست‌ها را پخش می‌کند، مبهم‌سازی فهم را سخت می‌کند و توکن‌سازی داده را عوض می‌کند ولی دسترسی را کنترل نمی‌کند.');

  M(T3,'Which backup strategy captures changes to data in real time and maintains a continuous log of all transactions?',
    'کدام راهبرد پشتیبان‌گیری تغییرات داده را لحظه‌ای ثبت می‌کند و لاگ پیوسته‌ای از همه‌ی تراکنش‌ها نگه می‌دارد؟',
    'کلمه‌ی کلیدی «لاگ پیوسته‌ی تراکنش‌ها» است.',
    ['Journaling','Snapshot','Replication','Tabletop'],
    ['Journaling (ثبت پیوسته)','Snapshot (تصویر لحظه‌ای)','Replication (تکثیر)','Tabletop (تمرین روی میز)'],
    'Journaling writes every change to a log in real time. A snapshot captures one point in time, replication copies data to another system without a transaction log, and a tabletop is a discussion exercise, not a backup.',
    'Journaling هر تغییر را لحظه‌ای در یک لاگ می‌نویسد. Snapshot فقط یک لحظه را ثبت می‌کند، Replication داده را به سیستم دیگری کپی می‌کند ولی لاگ تراکنش نگه نمی‌دارد و Tabletop یک تمرین گفت‌وگویی است، نه پشتیبان.');

  M(T3,'Which backup site type has pre-configured systems and near-instant failover capabilities?',
    'کدام نوع سایت پشتیبان سیستم‌های از پیش آماده دارد و انتقال به آن تقریباً فوری است؟',
    'Hot = آماده و روشن، Warm = نیمه‌آماده، Cold = فقط ساختمان و برق.',
    ['Hot','Warm','Cold','Distributed'],
    ['Hot (کاملاً آماده)','Warm (نیمه‌آماده)','Cold (سرد)','Distributed (توزیع‌شده)'],
    'A hot site has equipment running and data kept up to date, so services move over almost immediately. A warm site needs data restored or set-up, a cold site needs much more work, and "distributed" is an architecture, not a site type.',
    'Hot site تجهیزات روشن و داده‌ی به‌روز دارد، پس سرویس تقریباً فوری منتقل می‌شود. Warm site به بازیابی داده یا تنظیمات نیاز دارد، Cold site کار خیلی بیشتری می‌خواهد و Distributed نوعی معماری است، نه نوع سایت.');

  M(T4,'What is a common risk of BYOD in an enterprise?',
    'یکی از خطرهای رایج BYOD در سازمان چیست؟',
    'BYOD یعنی گوشی مال خود کارمند است، نه شرکت.',
    ['Lower control over security configurations','Higher corporate device costs','Reduced network latency','Increased password length requirements'],
    ['کنترل کمتر روی تنظیمات امنیتی','هزینه‌ی بیشتر خرید دستگاه برای شرکت','کاهش تأخیر شبکه','الزام رمزهای طولانی‌تر'],
    'With Bring Your Own Device the employee owns the device, so the company controls less of its OS, updates, apps and settings. BYOD usually lowers device costs, latency is not a risk, and a password-length rule is a policy, not a risk.',
    'در BYOD دستگاه مال کارمند است، پس شرکت روی سیستم‌عامل، به‌روزرسانی، برنامه‌ها و تنظیماتش کنترل کمتری دارد. BYOD معمولاً هزینه‌ی دستگاه را کم می‌کند، کاهش تأخیر خطر نیست و طول رمز یک سیاست است، نه خطر.');

  M(T4,'Which mobile deployment model offers the strongest security control while allowing limited personal use?',
    'کدام مدل استفاده از موبایل بیشترین کنترل امنیتی را می‌دهد و در عین حال اجازه‌ی استفاده‌ی شخصی محدود را هم می‌دهد؟',
    'دستگاه مال شرکت + اجازه‌ی استفاده‌ی شخصی = ؟',
    ['COPE','BYOD','CYOD','Open Enrollment'],
    ['COPE (مال شرکت، استفاده‌ی شخصی مجاز)','BYOD (دستگاه شخصی)','CYOD (انتخاب از دستگاه‌های مجاز)','ثبت‌نام آزاد'],
    'COPE (Corporate-Owned, Personally Enabled): the company owns and fully manages the device but allows some personal use. BYOD = employee-owned, least control. CYOD = choose from an approved list. COBO = company-owned, business only.',
    'COPE یعنی دستگاه مال شرکت است و شرکت کامل مدیریتش می‌کند، ولی استفاده‌ی شخصی محدود مجاز است. BYOD = دستگاه شخصی و کمترین کنترل. CYOD = انتخاب از فهرست مجاز. COBO = مال شرکت و فقط کاری.');
})();
