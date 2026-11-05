/* Course pack: the Mock CompTIA Security+ Exam (Final Quiz), 150 questions, taken Nov 5, 2026 (first attempt 92.67%).
   Three files: secfinal.js (pack + questions 1-50), secfinal2.js (51-100), secfinal3.js (101-150 + study notes).
   Each question keeps its number in the original exam (n), so the exam can be taken again in the original order.
   x = the option chosen on the first attempt when it was wrong (index into o); those are "my original mistakes".
   The correct option is always first in o/of; the app shuffles the options.
   The questions are also part of the general question pool while this course is on (Courses, or the Final Quiz page). */
(function(){
  var pack={id:'secfinal',name:'Mock Security+ Exam · Final Quiz (150 questions)',short:'Final Quiz',lab:'Part',version:1,lang:'en',
    orig:{date:'2026-11-05',pct:92.67,right:139,total:150,mins:149},
    sections:{
      '1':{en:'Security concepts, controls & cryptography',fa:'مفاهیم امنیت، کنترل‌ها و رمزنگاری'},
      '2':{en:'Threats, attacks & indicators',fa:'تهدیدها، حمله‌ها و نشانه‌ها'},
      '3':{en:'Identity, hardening & network security',fa:'هویت، مقاوم‌سازی و امنیت شبکه'},
      '4':{en:'Architecture, cloud, mobile & data protection',fa:'معماری، ابر، موبایل و حفاظت از داده'},
      '5':{en:'Incident response, forensics & automation',fa:'پاسخ به حادثه، جرم‌شناسی دیجیتال و اتوماسیون'},
      '6':{en:'Vulnerability management & application testing',fa:'مدیریت آسیب‌پذیری و تست برنامه'},
      '7':{en:'Governance, risk, compliance & change management',fa:'حاکمیت، ریسک، انطباق و مدیریت تغییر'}},
    mcq:[],pbq:[],study:{}};
  /* which part each original question number belongs to */
  var parts={
    '1':[4,5,6,7,8,9,31,32,35,72,73,74,75,76,77,78,79,91,120,134],
    '2':[23,24,25,26,27,28,29,30,62,63,64,66,67,68,69,70],
    '3':[1,2,11,12,13,14,15,16,17,18,20,21,33,34,60,61,65,71,80,81,82,83,84,85,86,87,90,123],
    '4':[89,125,126,127,128,129,130,131,132,133,135,136,137,138,139,141,142,143,144,145,146,147,148,149],
    '5':[22,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,57,58,59,124,150],
    '6':[56,112,113,114,115,116,117,118,119,140],
    '7':[3,10,19,88,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,121,122]};
  var secOf={};Object.keys(parts).forEach(function(s){parts[s].forEach(function(n){secOf[n]=s})});
  pack._add=function(n,q,qf,hf,o,of,en,fa,x){
    var s=secOf[n]||'1';
    var m={id:'secfinal:q'+n,n:n,sec:s,t:pack.sections[s].en,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa};
    if(x!=null){m.x=x;m.miss=true}
    pack.mcq.push(m);
  };
  (window.PACKS=window.PACKS||[]).push(pack);
  var M=pack._add;

  M(1,'A company needs to assign access rights based on a user’s role in the organization. Which model should they implement to reduce administrative overhead and increase scalability?',
    'یک شرکت می‌خواهد دسترسی‌ها را بر اساس «نقش» هر کاربر در سازمان بدهد. کدام مدل را پیاده کند تا کار مدیریتی کم شود و راحت بزرگ شود (مقیاس‌پذیر باشد)؟',
    'کلمه‌ی کلیدی سؤال «نقش» (Role) است.',
    ['RBAC','MAC','Rule-based','DAC'],
    ['RBAC (کنترل دسترسی بر اساس نقش)','MAC (کنترل دسترسی اجباری با برچسب)','Rule-based (بر اساس قانون‌های از پیش تعیین‌شده)','DAC (صاحب فایل تصمیم می‌گیرد)'],
    'Role-Based Access Control gives permissions to roles (HR, Sales, Admin) and puts users into roles. A new hire only needs to be added to a role, so it scales well. MAC uses labels and clearances, rule-based uses conditions such as time of day, and DAC lets the owner decide.',
    'در RBAC دسترسی را به «نقش» می‌دهیم، نه به تک‌تک آدم‌ها. مثال: نقش «حسابداری» به فایل‌های مالی دسترسی دارد؛ کارمند جدید حسابداری را فقط داخل این نقش می‌گذاریم و تمام. برای همین کار مدیریتی کم و مقیاس‌پذیر است. MAC با برچسب محرمانگی کار می‌کند، Rule-based با قانون (مثل ساعت کاری) و DAC یعنی صاحب فایل خودش اجازه می‌دهد.');

  M(2,'Which operational security measure is most critical for securing hybrid and remote work environments?',
    'برای امن کردن کار ترکیبی و دورکاری (Hybrid / Remote)، کدام اقدام امنیتی از همه مهم‌تر است؟',
    'کارمند از بیرون شرکت وصل می‌شود؛ هم «ارتباط» باید امن باشد و هم «هویت» او تأیید شود.',
    ['Implementing VPN and multi-factor authentication for all remote connections','Eliminating all removable media','Using only local storage for data','Disabling internet access for remote employees'],
    ['استفاده از VPN و احراز هویت چندعاملی (MFA) برای همه‌ی اتصال‌های از راه دور','حذف کامل همه‌ی حافظه‌های جداشدنی (USB و…)','فقط استفاده از حافظه‌ی محلی برای داده‌ها','قطع اینترنت کارمندان دورکار'],
    'A VPN encrypts the connection over untrusted home or public networks, and MFA makes sure a stolen password alone is not enough. The other options are either unrelated or make remote work impossible.',
    'VPN مثل یک تونل رمزدار بین خانه‌ی کارمند و شرکت است، و MFA یعنی غیر از رمز، یک چیز دیگر هم لازم است (مثل کد گوشی). پس اگر رمز کسی دزدیده شود، باز هم هکر نمی‌تواند وارد شود. قطع اینترنت یا حذف همه‌ی USBها عملاً دورکاری را غیرممکن می‌کند.');

  M(3,'Which phase of the change management process ensures that potential consequences to security and operations are evaluated before implementation?',
    'در فرایند مدیریت تغییر (Change management)، کدام مرحله پیامدهای احتمالی یک تغییر روی امنیت و کار روزمره را «قبل از اجرا» بررسی می‌کند؟',
    'دنبال مرحله‌ای بگرد که می‌پرسد «اگر این تغییر را بدهیم، چه چیزی تحت تأثیر قرار می‌گیرد؟»',
    ['Impact analysis','Backout plan','Maintenance window','Version control'],
    ['Impact analysis (تحلیل اثر)','Backout plan (برنامه‌ی برگشت)','Maintenance window (بازه‌ی زمانی نگهداری)','Version control (کنترل نسخه)'],
    'Impact analysis looks at what a change could break or weaken (security, uptime, users) before it is approved. A backout plan says how to undo the change, a maintenance window is when it is done, and version control tracks versions of code or configs.',
    'Impact analysis یعنی قبل از تغییر بپرسیم: «این کار چه اثری روی امنیت و سرویس‌ها دارد؟» مثال: قبل از عوض کردن قانون فایروال، بررسی می‌کنیم کدام برنامه‌ها قطع می‌شوند. Backout plan راه برگشت است اگر خراب شد، Maintenance window زمان انجام کار است (مثلاً نیمه‌شب) و Version control نسخه‌ها را نگه می‌دارد.');

  M(4,'What distinguishes tokenization from encryption?',
    'فرق Tokenization (توکن‌سازی) با Encryption (رمزگذاری) چیست؟',
    'یکی با «کلید» برمی‌گردد، دیگری مقدار را با یک مقدار جایگزین (بی‌معنی) عوض می‌کند.',
    ['Encryption allows reversibility with a key; tokenization maps values to surrogate values','Tokenization uses a fixed algorithm','Tokenization hashes values','Encryption cannot be reversed'],
    ['رمزگذاری با کلید برگشت‌پذیر است؛ توکن‌سازی مقدار را به یک مقدار جایگزین وصل می‌کند','توکن‌سازی از یک الگوریتم ثابت استفاده می‌کند','توکن‌سازی مقدارها را هش می‌کند','رمزگذاری قابل برگشت نیست'],
    'Encryption turns data into ciphertext with an algorithm and a key, and the key turns it back. Tokenization swaps the real value for a random token and keeps the mapping in a secure token vault; the token itself has no mathematical link to the real value.',
    'رمزگذاری = داده با الگوریتم و کلید قفل می‌شود و با کلید باز می‌شود. توکن‌سازی = شماره‌ی واقعی کارت بانکی را با یک عدد تصادفی (توکن) عوض می‌کنیم و جدول «توکن ← شماره‌ی واقعی» را در یک جای امن (Token vault) نگه می‌داریم. از خود توکن با هیچ حسابی نمی‌شود به شماره‌ی واقعی رسید.');

  M(5,'Which technique makes brute-force password cracking more difficult by increasing computational effort?',
    'کدام روش، با بیشتر کردن حجم محاسبه، شکستن رمز با Brute force را سخت‌تر می‌کند؟',
    'رمز را بارها و بارها هش می‌کنیم تا هر حدس زمان بیشتری بگیرد.',
    ['Key stretching','Steganography','Salting','Key escrow'],
    ['Key stretching (کشیدن کلید: هش تکراری مثل PBKDF2، bcrypt)','Steganography (پنهان کردن داده داخل فایل دیگر)','Salting (افزودن مقدار تصادفی به رمز)','Key escrow (سپردن کلید به شخص ثالث)'],
    'Key stretching (PBKDF2, bcrypt, scrypt, Argon2) runs the hash thousands of times, so every single guess costs the attacker much more time. Salting stops rainbow tables and identical hashes, but it does not make each guess slower.',
    'Key stretching یعنی رمز را هزاران بار پشت سر هم هش می‌کنیم. برای کاربر عادی یک لحظه است، اما هکری که می‌خواهد میلیاردها حدس بزند، هزاران برابر کندتر می‌شود. Salt جلوی جدول‌های آماده (Rainbow table) را می‌گیرد ولی هر حدس را کند نمی‌کند؛ جواب «افزایش محاسبه» = Key stretching.');

  M(6,'What is the role of a Hardware Security Module (HSM)?',
    'نقش HSM (ماژول امنیتی سخت‌افزاری) چیست؟',
    'یک دستگاه سخت‌افزاری مخصوص «کلیدهای رمزنگاری».',
    ['Securely generates, stores, and manages cryptographic keys','Stores software licenses','Manages password policies','Logs certificate revocations'],
    ['کلیدهای رمزنگاری را به‌صورت امن می‌سازد، نگه می‌دارد و مدیریت می‌کند','لایسنس نرم‌افزارها را نگه می‌دارد','سیاست‌های رمز عبور را مدیریت می‌کند','ابطال گواهی‌ها را ثبت می‌کند'],
    'An HSM is tamper-resistant hardware that creates, stores and uses cryptographic keys so the keys never leave the device in plain form. Banks and certificate authorities use HSMs.',
    'HSM مثل یک گاوصندوق سخت‌افزاری برای کلیدهای رمزنگاری است. کلید داخل خودش ساخته می‌شود، همان‌جا می‌ماند و عملیات رمزنگاری هم داخل همان انجام می‌شود؛ اگر کسی بخواهد بازش کند، کلیدها پاک می‌شوند. بانک‌ها و مراکز صدور گواهی (CA) از HSM استفاده می‌کنند.');

  M(7,'Which cryptographic principle ensures that an encrypted message can only be decrypted by the intended recipient?',
    'کدام اصل رمزنگاری تضمین می‌کند که پیام رمزشده فقط توسط گیرنده‌ی مورد نظر باز شود؟',
    'هدف این است که «کس دیگری نتواند بخواند».',
    ['Confidentiality','Integrity','Obfuscation','Authentication'],
    ['Confidentiality (محرمانگی)','Integrity (یکپارچگی، دست‌نخوردگی)','Obfuscation (مبهم‌سازی)','Authentication (احراز هویت)'],
    'Confidentiality means only authorized people can read the data. Encrypting with the recipient’s public key gives confidentiality, because only their private key can decrypt it. Integrity is about the data not being changed.',
    'Confidentiality یعنی «فقط آدم مجاز بتواند بخواند». مثال: پیام را با کلید عمومی علی رمز می‌کنیم؛ فقط کلید خصوصی علی بازش می‌کند. Integrity یعنی پیام عوض نشده باشد، و Authentication یعنی ثابت شود طرف همان کسی است که ادعا می‌کند.');

  M(8,'Which cryptographic tool helps prevent tampering with boot processes on a device?',
    'کدام ابزار رمزنگاری کمک می‌کند کسی نتواند در فرایند بوت (روشن شدن) دستگاه دست‌کاری کند؟',
    'یک تراشه روی مادربرد که اندازه‌گیری‌های بوت و کلیدها را نگه می‌دارد.',
    ['TPM','OCSP','Tokenization','CSR'],
    ['TPM (تراشه‌ی امنیتی روی مادربرد)','OCSP (بررسی آنلاین ابطال گواهی)','Tokenization (توکن‌سازی)','CSR (درخواست صدور گواهی)'],
    'The Trusted Platform Module stores keys and measurements of the boot chain (Secure Boot, Measured Boot). If the bootloader or firmware is changed, the measurements no longer match. OCSP checks certificate status and a CSR is a request for a certificate.',
    'TPM یک تراشه‌ی کوچک روی مادربرد است. موقع بوت، از هر مرحله (فرم‌ور، بوت‌لودر) یک اثر انگشت (هش) می‌گیرد؛ اگر بدافزاری مثل Rootkit بوت را عوض کند، اثر انگشت فرق می‌کند و دستگاه می‌فهمد. BitLocker هم کلیدش را در TPM نگه می‌دارد.');

  M(9,'Which cryptographic concept is directly supported by blockchain technology?',
    'کدام مفهوم رمزنگاری مستقیماً توسط فناوری بلاک‌چین پشتیبانی می‌شود؟',
    'بلاک‌چین یک دفتر عمومی است که همه می‌بینند و چیزی را نمی‌شود از آن پاک کرد یا انکار کرد.',
    ['Non-repudiation via public ledger','Data masking','Confidentiality','Symmetric key exchange'],
    ['عدم انکار (Non-repudiation) از طریق دفتر کل عمومی','پوشاندن داده (Data masking)','محرمانگی','تبادل کلید متقارن'],
    'A blockchain is a public, append-only ledger where every transaction is signed and chained with hashes. Nobody can later deny or quietly change a recorded transaction, which is non-repudiation (and integrity). A public blockchain is not about confidentiality; everyone can see it.',
    'بلاک‌چین مثل یک دفتر حساب است که نسخه‌اش دست همه هست، هر خط امضا شده و به خط قبلی با هش زنجیر شده. پس کسی نمی‌تواند بگوید «من این تراکنش را انجام ندادم» یا بی‌صدا عوضش کند = Non-repudiation. بلاک‌چین عمومی محرمانه نیست، چون همه آن را می‌بینند.');

  M(10,'In change management, what is the purpose of conducting test results review?',
    'در مدیریت تغییر، هدف از بررسی نتایج تست (Test results review) چیست؟',
    'تست انجام شده؛ حالا می‌خواهیم ببینیم همان چیزی شد که انتظار داشتیم یا مشکلی پیدا شد.',
    ['To validate expected outcomes and uncover issues','To identify unencrypted keys','To revoke old keys','To update DNSSEC records'],
    ['تأیید اینکه نتیجه همان چیزی است که انتظار داشتیم و پیدا کردن مشکل‌ها','پیدا کردن کلیدهای رمزنشده','باطل کردن کلیدهای قدیمی','به‌روزرسانی رکوردهای DNSSEC'],
    'Before a change goes to production it is tested; reviewing the results confirms the change works as planned and shows problems (bugs, broken apps, security gaps) while they are still cheap to fix. The other options are unrelated key and DNS tasks.',
    'قبل از اینکه تغییر روی سیستم اصلی برود، آن را در محیط تست امتحان می‌کنیم. بعد نتایج را بررسی می‌کنیم: «آیا همان شد که می‌خواستیم؟ چیزی خراب نشد؟» مثال: بعد از نصب Patch در تست، چک می‌کنیم نرم‌افزار حسابداری هنوز کار می‌کند. گزینه‌های دیگر ربطی به مدیریت تغییر ندارند.');

  M(11,'Which technology allows users to authenticate once and access multiple connected systems without re-authenticating?',
    'کدام فناوری اجازه می‌دهد کاربر یک بار وارد شود و بدون ورود دوباره به چند سیستم متصل دسترسی داشته باشد؟',
    'اسمش دقیقاً یعنی «یک بار ورود».',
    ['SSO','OAuth','Federation','LDAP'],
    ['SSO (ورود یکپارچه، Single Sign-On)','OAuth (اجازه‌ی دسترسی به برنامه‌ها، Authorization)','Federation (اتحاد هویت بین سازمان‌ها)','LDAP (پروتکل دایرکتوری)'],
    'Single Sign-On means one login gives access to many connected applications. OAuth is about authorization (letting an app act for you), federation is trust between different organizations, and LDAP is a directory protocol.',
    'SSO یعنی صبح یک بار وارد سیستم شرکت می‌شوی و ایمیل، پرتال منابع انسانی و Teams بدون پرسیدن دوباره‌ی رمز باز می‌شوند. OAuth بیشتر «اجازه دادن» است (مثل اینکه یک برنامه به Google Drive تو دسترسی بگیرد)، Federation اعتماد بین دو سازمان است و LDAP پروتکل پرس‌وجو از دایرکتوری (مثل Active Directory).');

  M(12,'Which protocol should be selected to encrypt email transmission over SMTP?',
    'برای رمزگذاری انتقال ایمیل روی SMTP، کدام پروتکل را باید انتخاب کرد؟',
    'یک دستور در SMTP که همان اتصال معمولی را به یک اتصال TLS ارتقا می‌دهد.',
    ['STARTTLS','S/MIME','IMAPS','POP3S'],
    ['STARTTLS (ارتقای اتصال SMTP به TLS)','S/MIME (رمز و امضای خود پیام)','IMAPS (IMAP امن برای دریافت ایمیل)','POP3S (POP3 امن برای دریافت ایمیل)'],
    'STARTTLS upgrades a plain SMTP connection to an encrypted TLS connection, so the transmission between mail servers is protected. S/MIME encrypts and signs the message itself (end to end), while IMAPS and POP3S protect downloading mail, not sending it over SMTP.',
    'STARTTLS یعنی سرور ایمیل می‌گوید «بیا از اینجا به بعد رمزدار حرف بزنیم» و همان اتصال SMTP رمزدار می‌شود؛ پس «انتقال» ایمیل امن است. S/MIME خود متن پیام را رمز و امضا می‌کند. IMAPS و POP3S برای «دریافت» ایمیل از سرور هستند، نه ارسال با SMTP.');

  M(13,'Which of the following best mitigates the risk of credential stuffing attacks in web-based authentication systems?',
    'کدام گزینه بهتر از همه خطر حمله‌ی Credential stuffing را در سیستم‌های ورود تحت وب کم می‌کند؟',
    'در این حمله، هکر رمزهای درستِ لو رفته از سایت‌های دیگر را امتحان می‌کند؛ پس رمز درست دارد! چه چیزی جلویش را می‌گیرد؟',
    ['Requiring multifactor authentication','Implementing password reuse policies','Enforcing password expiration','Enabling CAPTCHA'],
    ['الزام به احراز هویت چندعاملی (MFA)','گذاشتن سیاست درباره‌ی استفاده‌ی دوباره از رمز','اجبار به منقضی شدن رمز','فعال کردن CAPTCHA'],
    'Credential stuffing uses real username and password pairs leaked from other sites. Because the password is correct, only a second factor stops the login. CAPTCHA slows bots a little, and password expiration does not help against a password that is already valid.',
    'در Credential stuffing، هکر لیست ایمیل و رمزهای لو رفته از یک سایت دیگر را برمی‌دارد و روی سایت تو امتحان می‌کند، چون خیلی‌ها یک رمز را همه‌جا استفاده می‌کنند. رمز درست است! پس فقط MFA (مثل کد پیامکی یا اپ Authenticator) جلویش را می‌گیرد. CAPTCHA فقط ربات‌ها را کمی کند می‌کند.');

  M(14,'Which password policy setting directly reduces the risk of brute force attacks by increasing the search space?',
    'کدام تنظیم سیاست رمز عبور، با بزرگ‌تر کردن «فضای جست‌وجو»، مستقیماً خطر Brute force را کم می‌کند؟',
    'هرچه نوع کاراکترهای مجاز بیشتر باشد (حرف بزرگ، کوچک، عدد، علامت)، حالت‌های ممکن بیشتر می‌شود.',
    ['Complexity requirement','Minimum age','Maximum age','History size'],
    ['الزام پیچیدگی رمز (Complexity)','حداقل عمر رمز','حداکثر عمر رمز','تعداد رمزهای قبلی که نباید تکرار شوند'],
    'Complexity (and length) increases the number of possible combinations an attacker has to try. Minimum age, maximum age and history control how often passwords change or repeat; they do not make the search space bigger.',
    'Brute force یعنی امتحان کردن همه‌ی حالت‌ها. اگر رمز فقط عدد باشد، حالت‌ها کم است؛ اگر حرف بزرگ و کوچک و عدد و علامت داشته باشد، حالت‌ها خیلی زیاد می‌شود = فضای جست‌وجو بزرگ‌تر. Minimum/Maximum age و History فقط درباره‌ی زمان عوض کردن و تکرار نکردن رمز هستند.');

  M(15,'Which of the following technologies would most help detect insider threats based on deviation from baseline behavior?',
    'کدام فناوری بیشتر از همه کمک می‌کند تهدید داخلی (Insider) را از روی «انحراف از رفتار عادی» تشخیص بدهیم؟',
    'ابزاری که رفتار عادی «کاربر» را یاد می‌گیرد.',
    ['UBA','DMARC','IDS','Firewall logging'],
    ['UBA (تحلیل رفتار کاربر، User Behavior Analytics)','DMARC (سیاست امنیت ایمیل)','IDS (سیستم تشخیص نفوذ)','لاگ فایروال'],
    'User Behavior Analytics builds a baseline of what each user normally does (login times, data volume, systems used) and alerts on deviations, which is how insider misuse is usually spotted. DMARC is for email, and IDS and firewall logs focus on network attacks and signatures.',
    'UBA رفتار عادی هر کاربر را یاد می‌گیرد: معمولاً ساعت ۹ وارد می‌شود و روزی ۵۰ فایل باز می‌کند. اگر یک شب ساعت ۲ وارد شود و ۵۰۰۰ فایل دانلود کند، UBA هشدار می‌دهد. کلیدواژه‌ی امتحان: «انحراف از رفتار عادی / Baseline behavior» = UBA.');

  M(16,'A security analyst observes external traffic attempting to connect on TCP port 23. Which firewall action is most appropriate?',
    'یک تحلیل‌گر امنیت می‌بیند ترافیکی از بیرون سعی دارد روی پورت TCP 23 وصل شود. مناسب‌ترین اقدام فایروال چیست؟',
    'پورت ۲۳ مال Telnet است؛ یک پروتکل قدیمی که همه‌چیز را بدون رمز می‌فرستد.',
    ['Block and alert on Telnet traffic','Allow based on access control list','Redirect to internal port 22','Rate-limit the traffic'],
    ['مسدود کردن ترافیک Telnet و هشدار دادن','اجازه دادن بر اساس لیست کنترل دسترسی','هدایت به پورت ۲۲ داخلی','محدود کردن سرعت ترافیک'],
    'Port 23 is Telnet, which sends usernames and passwords in plaintext and should not be reachable from the internet. Blocking it and alerting lets the team see who is probing. Redirecting to SSH or only rate-limiting still exposes a service to the attacker.',
    'پورت ۲۳ = Telnet، که رمز و همه‌چیز را بدون رمزگذاری می‌فرستد. اتصال Telnet از اینترنت تقریباً همیشه یعنی اسکن یا حمله. پس آن را می‌بندیم و هشدار می‌دهیم تا تیم امنیت بداند کسی دارد در می‌زند. برای مدیریت از راه دور باید از SSH (پورت ۲۲) آن هم با VPN استفاده کرد.');

  M(17,'Which of the following is an example of a centralized web filtering solution?',
    'کدام گزینه نمونه‌ای از فیلتر وب «متمرکز» است؟',
    'متمرکز یعنی یک جا در شبکه که ترافیک همه از آن رد می‌شود، نه نرم‌افزاری روی تک‌تک کامپیوترها.',
    ['Transparent proxy server','Local agent blacklist','Endpoint antivirus','Host-based firewall'],
    ['سرور پراکسی شفاف (Transparent proxy)','لیست سیاه روی نرم‌افزار محلی هر دستگاه','آنتی‌ویروس روی دستگاه','فایروال روی خود دستگاه'],
    'A transparent proxy sits in the network path and filters web traffic for every user without any setup on the devices, so the policy is managed in one place. The other options are agent-based or host-based controls installed on each device.',
    'Transparent proxy وسط شبکه می‌نشیند و ترافیک وب همه‌ی کارمندها از آن رد می‌شود؛ کاربر حتی متوجه نمی‌شود (شفاف). قانون فیلتر را یک جا عوض می‌کنی و روی همه اعمال می‌شود = متمرکز. آنتی‌ویروس، فایروال میزبان و Agent محلی روی تک‌تک دستگاه‌ها نصب می‌شوند.');

  M(18,'What does DKIM ensure when validating incoming email?',
    'DKIM موقع بررسی ایمیل ورودی چه چیزی را تضمین می‌کند؟',
    'DKIM یک امضای دیجیتال روی پیام است؛ امضای دیجیتال چه چیزی را ثابت می‌کند؟',
    ['The content has not been modified','The email has not been intercepted','The sending server uses DNSSEC','The recipient is authorized'],
    ['محتوای ایمیل تغییر نکرده است','ایمیل در مسیر شنود نشده است','سرور فرستنده از DNSSEC استفاده می‌کند','گیرنده مجاز است'],
    'DKIM adds a digital signature to the message headers and body; the receiving server checks it with the public key in the sender’s DNS. A valid signature proves the content was not changed and that it came from that domain. It does not encrypt the email, so it cannot stop interception.',
    'DKIM مثل مهر و امضای اداره روی نامه است. سرور فرستنده پیام را امضا می‌کند و کلید عمومی‌اش را در DNS می‌گذارد. گیرنده امضا را چک می‌کند: اگر حتی یک کلمه عوض شده باشد، امضا خراب می‌شود. پس DKIM = پیام دست‌کاری نشده و از همان دامنه آمده. ایمیل را رمز نمی‌کند، پس جلوی شنود را نمی‌گیرد.');

  M(19,'Which privacy law applies to organizations handling EU citizens’ data, regardless of where the organization is based?',
    'کدام قانون حریم خصوصی برای هر سازمانی که با داده‌ی شهروندان اتحادیه‌ی اروپا کار می‌کند اعمال می‌شود، فرقی نمی‌کند سازمان کجای دنیا باشد؟',
    'قانون معروف اروپایی.',
    ['GDPR','HIPAA','PIPEDA','CCPA'],
    ['GDPR (قانون عمومی حفاظت از داده‌ی اتحادیه‌ی اروپا)','HIPAA (داده‌ی سلامت در آمریکا)','PIPEDA (قانون حریم خصوصی کانادا)','CCPA (قانون حریم خصوصی کالیفرنیا)'],
    'GDPR protects the personal data of people in the EU and applies to any organization that offers them goods or services or monitors them, even a company in Canada or the US. HIPAA is US health data, PIPEDA is Canada’s private-sector privacy law and CCPA is California.',
    'GDPR قانون اروپاست ولی «دنبال داده» می‌رود، نه دنبال جای شرکت. یعنی اگر یک فروشگاه اینترنتی در تورنتو به مشتری آلمانی جنس بفروشد، باید GDPR را رعایت کند. HIPAA مال داده‌ی پزشکی در آمریکا، PIPEDA مال کانادا و CCPA مال ایالت کالیفرنیاست.');

  M(20,'Which of the following is a key mitigation strategy for unsecured wireless networks?',
    'کدام گزینه یک راهکار اصلی برای کم کردن خطر شبکه‌های بی‌سیم ناامن است؟',
    'جدیدترین و قوی‌ترین استاندارد رمزگذاری وای‌فای.',
    ['Enforce WPA3 encryption','Enable port forwarding','Disable firewalls','Restrict TLS'],
    ['اجبار به رمزگذاری WPA3','فعال کردن Port forwarding','خاموش کردن فایروال‌ها','محدود کردن TLS'],
    'WPA3 is the strongest Wi-Fi security standard: it encrypts traffic and uses SAE, which resists offline password guessing. Port forwarding, turning off firewalls or restricting TLS would all make security worse.',
    'WPA3 جدیدترین استاندارد امنیت وای‌فای است: ترافیک را رمز می‌کند و با روش SAE جلوی حدس زدن رمز وای‌فای به‌صورت آفلاین را می‌گیرد. سه گزینه‌ی دیگر امنیت را بدتر می‌کنند (باز کردن پورت، خاموش کردن فایروال، محدود کردن رمزگذاری).');

  M(21,'During wireless deployment, what is the security risk of signal oversaturation beyond controlled areas?',
    'در راه‌اندازی شبکه‌ی بی‌سیم، اگر سیگنال بیش از حد قوی باشد و تا بیرون از محوطه‌ی شرکت برسد، خطر امنیتی‌اش چیست؟',
    'اگر سیگنال تا پارکینگ یا خیابان برسد، چه کسی می‌تواند به آن دسترسی داشته باشد؟',
    ['It allows attackers outside the premises to attempt unauthorized access','It reduces device battery life','It causes APs to require additional firmware updates','It increases RF dead zones'],
    ['به هکرهای بیرون از ساختمان اجازه می‌دهد برای دسترسی غیرمجاز تلاش کنند','عمر باتری دستگاه‌ها را کم می‌کند','باعث می‌شود اکسس‌پوینت‌ها به‌روزرسانی فرم‌ور بیشتری بخواهند','نقطه‌های بدون سیگنال (Dead zone) را بیشتر می‌کند'],
    'When Wi-Fi leaks past the building, someone in the parking lot or street can sniff traffic, crack the key or try to connect, without ever entering the premises. Site surveys and proper AP power settings keep the signal inside controlled areas.',
    'اگر قدرت اکسس‌پوینت زیاد باشد، سیگنال تا پارکینگ و خیابان می‌رسد؛ هکر می‌تواند در ماشینش بنشیند، ترافیک را شنود کند یا رمز را بشکند، بدون اینکه وارد ساختمان شود. برای همین با Site survey و تنظیم قدرت آنتن، سیگنال را داخل محوطه نگه می‌دارند.');

  M(22,'A forensic team calculates an SHA-256 hash of a disk image before and after transfer. This ensures:',
    'تیم جرم‌شناسی دیجیتال از ایمیج دیسک قبل و بعد از انتقال، هش SHA-256 می‌گیرد. این کار چه چیزی را تضمین می‌کند؟',
    'هش مثل اثر انگشت داده است؛ اگر دو هش یکی باشند یعنی چه؟',
    ['Integrity is maintained during storage and transport','The evidence meets GDPR compliance','Data minimization was applied','The correct encryption key was used for storage'],
    ['یکپارچگی داده در زمان نگهداری و انتقال حفظ شده است','مدرک با GDPR سازگار است','کمینه‌سازی داده (Data minimization) انجام شده است','کلید رمزگذاری درست برای ذخیره استفاده شده است'],
    'A hash is a fingerprint of the data. If the SHA-256 value before and after the transfer is identical, not a single bit changed, so integrity was kept. Hashing does not encrypt anything and has nothing to do with GDPR or data minimization.',
    'هش مثل اثر انگشت فایل است. اگر حتی یک بیت عوض شود، هش کاملاً فرق می‌کند. پس اگر هش قبل و بعد از انتقال یکی باشد، ثابت می‌شود مدرک دست نخورده = Integrity. این برای دادگاه مهم است. هش کردن رمزگذاری نیست.');

  M(23,'A web application repeatedly crashes when supplied with malformed HTTP headers. What type of vulnerability is most likely being exploited?',
    'یک برنامه‌ی وب هر بار که هدرهای HTTP خراب و بدشکل (Malformed) به آن داده می‌شود، کرش می‌کند. احتمالاً از کدام آسیب‌پذیری سوءاستفاده می‌شود؟',
    'ورودی بزرگ‌تر یا عجیب‌تر از حافظه‌ای که برنامه برایش کنار گذاشته، و نتیجه کرش است.',
    ['Buffer overflow','SQL injection','Race condition','DLL injection'],
    ['Buffer overflow (سرریز بافر)','SQL injection (تزریق SQL)','Race condition (شرایط رقابتی)','DLL injection (تزریق DLL)'],
    'Sending oversized or malformed input that makes a program crash again and again is the classic sign of a buffer overflow: the data writes past the memory buffer and corrupts nearby memory. SQL injection targets the database and would usually return data or errors, not crashes on headers.',
    'Buffer overflow یعنی برنامه برای ورودی یک لیوان جا گذاشته ولی ما یک سطل آب می‌ریزیم؛ آب سرریز می‌کند و حافظه‌ی کناری را خراب می‌کند و برنامه کرش می‌کند. ورودی بدشکل + کرش تکراری = نشانه‌ی کلاسیک Buffer overflow. هکر ماهر می‌تواند با این سرریز کد خودش را اجرا کند.');

  M(24,'You detect a significant spike in outbound traffic at 3:00 a.m. What is the most likely indicator?',
    'ساعت ۳ بامداد یک جهش بزرگ در ترافیک خروجی می‌بینی. محتمل‌ترین نشانه (Indicator) کدام است؟',
    'نکته‌ی اصلی سؤال «زمان» است: ساعت ۳ صبح، بیرون از چرخه‌ی کاری عادی.',
    ['Out-of-cycle logging','Logic bomb','Resource consumption','Account lockout'],
    ['Out-of-cycle logging (فعالیت و لاگ بیرون از زمان عادی)','Logic bomb (بمب منطقی)','Resource consumption (مصرف منابع)','Account lockout (قفل شدن حساب)'],
    'CompTIA lists "out-of-cycle logging" as an indicator: activity recorded at a time when it should not happen, such as heavy outbound traffic at 3 a.m. when nobody works. Resource consumption is also an indicator, but the clue the question stresses is the unusual time; that is why the key is out-of-cycle. A large outbound spike at night often means data exfiltration.',
    'این سؤالی است که اشتباه زدی. نکته: سؤال روی «ساعت ۳ صبح» تأکید دارد؛ یعنی فعالیتی بیرون از چرخه‌ی کاری عادی = Out-of-cycle logging. تو Resource consumption را زدی؛ آن هم یک نشانه است (مصرف زیاد CPU، حافظه یا پهنای باند)، ولی کلید سؤال «زمان غیرعادی» است. قانون امتحان: وقتی زمان عجیب (نیمه‌شب، تعطیلات) برجسته است ← Out-of-cycle. جهش ترافیک خروجی در شب معمولاً یعنی دزدیدن داده (Exfiltration).',
    2);

  M(25,'An attacker forces a web app to output /etc/passwd. This is an example of:',
    'هکر یک برنامه‌ی وب را مجبور می‌کند فایل /etc/passwd را نشان دهد. این نمونه‌ای از چیست؟',
    'هکر با ../../ از پوشه‌ی وب بیرون می‌رود و به پوشه‌های سیستم می‌رسد.',
    ['Directory traversal','DLL injection','XSS','Misconfiguration'],
    ['Directory traversal (پیمایش پوشه، Path traversal)','DLL injection (تزریق DLL)','XSS (اسکریپت بین‌سایتی)','Misconfiguration (پیکربندی اشتباه)'],
    'Directory (path) traversal uses sequences like ../../../etc/passwd to climb out of the web folder and read system files. /etc/passwd on Linux is the classic proof file. XSS runs script in a browser and DLL injection loads code into a Windows process.',
    'Directory traversal یعنی هکر در آدرس می‌نویسد ?file=../../../etc/passwd؛ هر ../ یک پوشه بالا می‌رود تا از پوشه‌ی سایت بیرون بزند و فایل‌های سیستم را بخواند. /etc/passwd در لینوکس فایل معروف لیست کاربرهاست و نشانه‌ی کلاسیک این حمله است. دفاع: اعتبارسنجی ورودی و اجازه ندادن به ../.');

  M(26,'A financial institution notices an employee logged into a system from Canada and Germany within a 2-minute window. This is an example of:',
    'یک مؤسسه‌ی مالی می‌بیند یک کارمند در فاصله‌ی ۲ دقیقه یک بار از کانادا و یک بار از آلمان وارد سیستم شده. این نمونه‌ای از چیست؟',
    'هیچ آدمی در ۲ دقیقه از کانادا به آلمان نمی‌رسد.',
    ['Impossible travel','Concurrent session','Credential stuffing','Session hijacking'],
    ['Impossible travel (سفر غیرممکن)','Concurrent session (چند نشست هم‌زمان)','Credential stuffing (امتحان رمزهای لو رفته)','Session hijacking (ربودن نشست)'],
    'Impossible travel is when the same account logs in from two places that are too far apart to travel between in the time between logins. It strongly suggests the credentials are being used by someone else. Many identity platforms raise this alert automatically.',
    'Impossible travel = «سفر غیرممکن». هیچ‌کس در ۲ دقیقه از تورنتو به برلین نمی‌رسد؛ پس یکی از این دو ورود مال خود کارمند نیست و احتمالاً رمزش دست کس دیگری است. سیستم‌هایی مثل Microsoft Entra این را خودکار تشخیص می‌دهند.');

  M(27,'If an organization uses outdated cipher suites due to legacy app requirements, it becomes vulnerable to:',
    'اگر سازمانی به خاطر برنامه‌های قدیمی هنوز از Cipher suiteهای (مجموعه‌الگوریتم‌های رمز) قدیمی استفاده کند، در برابر چه حمله‌ای آسیب‌پذیر می‌شود؟',
    'هکر طرفین را مجبور می‌کند روی ضعیف‌ترین نسخه‌ی پشتیبانی‌شده توافق کنند.',
    ['Downgrade attacks','Side-channel attacks','Collision attacks','Brute force attacks'],
    ['Downgrade attack (حمله‌ی تنزل نسخه)','Side-channel attack (حمله‌ی کانال جانبی)','Collision attack (حمله‌ی برخورد هش)','Brute force (امتحان همه‌ی حالت‌ها)'],
    'If old, weak cipher suites (SSL 3.0, export ciphers, RC4) are still allowed, an on-path attacker can force the client and server to negotiate down to them (POODLE, FREAK, Logjam) and then break the weaker encryption. Disabling old protocols and ciphers is the fix.',
    'Downgrade attack یعنی هکر وسط ارتباط می‌نشیند و به هر دو طرف می‌گوید «طرف مقابل فقط نسخه‌ی قدیمی را بلد است»؛ آن‌ها روی رمز ضعیف قدیمی توافق می‌کنند و هکر آن را می‌شکند (مثل POODLE). تا وقتی سرور رمزهای قدیمی را قبول کند، این خطر هست. راه حل: خاموش کردن SSL و TLS قدیمی و رمزهای ضعیف.');

  M(28,'Which attack involves replacing a legitimate app with a malicious one, typically outside official app stores?',
    'کدام حمله شامل جایگزین کردن یک برنامه‌ی واقعی با یک برنامه‌ی مخرب است، معمولاً بیرون از فروشگاه‌های رسمی برنامه؟',
    'نصب برنامه از «کنار» فروشگاه رسمی، مثلاً با فایل APK از یک سایت.',
    ['Side loading','Jailbreaking','Rootkit','Clickjacking'],
    ['Side loading (نصب برنامه از بیرون فروشگاه رسمی)','Jailbreaking (شکستن محدودیت‌های iOS)','Rootkit (بدافزار پنهان با دسترسی سطح بالا)','Clickjacking (فریب کلیک با لایه‌ی نامرئی)'],
    'Side loading means installing apps from outside the official store (an APK from a website, a third-party store). Those apps skip the store’s review, so attackers repackage popular apps with malware. Clickjacking is a web trick that hides a button under a fake page; it has nothing to do with replacing apps.',
    'این را اشتباه زدی. Side loading یعنی برنامه را از جایی غیر از Google Play یا App Store نصب کنی، مثلاً فایل APK از یک سایت یا تلگرام. این برنامه‌ها بررسی نشده‌اند، پس هکر نسخه‌ی تقلبی یک برنامه‌ی معروف را با بدافزار پخش می‌کند. تو Clickjacking را زدی: آن یک ترفند وب است که یک دکمه‌ی نامرئی را روی صفحه می‌گذارد تا کاربر ناخواسته رویش کلیک کند؛ ربطی به برنامه‌ی موبایل ندارد. کلیدواژه: «خارج از فروشگاه رسمی» = Side loading.',
    3);

  M(29,'An attacker embeds malicious JavaScript into a web form which executes in a victim’s browser. What is being exploited?',
    'هکر یک کد جاوااسکریپت مخرب را داخل فرم یک سایت می‌گذارد و این کد در مرورگر قربانی اجرا می‌شود. از چه چیزی سوءاستفاده شده؟',
    'اسکریپت + مرورگر قربانی.',
    ['XSS','XSRF','SQL Injection','Path traversal'],
    ['XSS (اسکریپت بین‌سایتی، Cross-site scripting)','XSRF / CSRF (جعل درخواست بین‌سایتی)','SQL Injection (تزریق SQL)','Path traversal (پیمایش مسیر)'],
    'Cross-site scripting happens when a site shows user input without encoding it, so injected JavaScript runs in other visitors’ browsers (stealing cookies, faking pages). CSRF instead tricks the browser into sending a request the user did not mean to send.',
    'XSS یعنی هکر در یک فرم (مثلاً بخش نظرات) یک <script> می‌نویسد؛ سایت آن را بدون پاک‌سازی به بقیه نشان می‌دهد و کد در مرورگر هر بازدیدکننده اجرا می‌شود، مثلاً کوکی‌اش را می‌دزدد. فرق با CSRF: در CSRF کدی اجرا نمی‌شود، بلکه مرورگر قربانی فریب می‌خورد یک درخواست ناخواسته بفرستد (مثل انتقال پول).');

  M(30,'A race condition in a file write process could result in:',
    'یک Race condition (شرایط رقابتی) در فرایند نوشتن فایل می‌تواند به چه چیزی منجر شود؟',
    'فاصله‌ی زمانی بین «چک کردن» و «استفاده کردن».',
    ['Time-of-check/time-of-use vulnerability','Firmware corruption','Privilege escalation','Session fixation'],
    ['آسیب‌پذیری TOCTOU (زمان بررسی / زمان استفاده)','خراب شدن فرم‌ور','افزایش سطح دسترسی','Session fixation (تثبیت نشست)'],
    'A race condition in file handling is a TOCTOU flaw: the program checks the file (permissions, existence) and then uses it a moment later. In that gap an attacker swaps the file, for example with a link to a system file. Privilege escalation can be a result, but the vulnerability type itself is TOCTOU.',
    'TOCTOU یعنی برنامه اول چک می‌کند «آیا این فایل مال کاربر است؟» و چند میلی‌ثانیه بعد از آن استفاده می‌کند. هکر در همین فاصله فایل را با یک فایل دیگر (مثلاً لینک به فایل سیستمی) عوض می‌کند. مثل اینکه نگهبان کارت تو را چک کند و قبل از اینکه در را باز کند، کس دیگری جای تو وارد شود. Privilege escalation ممکن است «نتیجه» باشد، ولی اسم خود آسیب‌پذیری TOCTOU است.');

  M(31,'A digital signature provides what key security function?',
    'امضای دیجیتال کدام کارکرد امنیتی اصلی را فراهم می‌کند؟',
    'امضاکننده بعداً نمی‌تواند بگوید «من امضا نکردم».',
    ['Non-repudiation','Confidentiality','Availability','Obfuscation'],
    ['Non-repudiation (عدم انکار)','Confidentiality (محرمانگی)','Availability (در دسترس بودن)','Obfuscation (مبهم‌سازی)'],
    'A digital signature is made with the sender’s private key, which only the sender has, so the sender cannot later deny sending the message (non-repudiation). It also proves integrity and origin. It does not hide the content; that would be encryption (confidentiality).',
    'امضای دیجیتال با کلید خصوصی فرستنده ساخته می‌شود که فقط خودش دارد. پس بعداً نمی‌تواند بگوید «این پیام را من نفرستادم» = Non-repudiation. امضا همچنین ثابت می‌کند پیام عوض نشده (Integrity). اما متن را مخفی نمی‌کند؛ برای مخفی کردن باید رمزگذاری کرد.');

  M(32,'An attacker hides malware within a JPEG file. What method are they using?',
    'هکر یک بدافزار را داخل یک فایل عکس JPEG پنهان می‌کند. از چه روشی استفاده می‌کند؟',
    'پنهان کردن داده «داخل» یک فایل بی‌خطر مثل عکس یا صدا.',
    ['Steganography','Tokenization','Vishing','Pretexting'],
    ['Steganography (پنهان‌نگاری)','Tokenization (توکن‌سازی)','Vishing (فیشینگ تلفنی)','Pretexting (داستان‌سازی برای فریب)'],
    'Steganography hides data inside another file, such as an image, audio or video, so nobody suspects it is there. Attackers use it to sneak malware or commands past filters. Vishing is voice phishing and pretexting is a made-up story used in social engineering.',
    'Steganography یعنی پنهان کردن یک چیز داخل یک چیز عادی. عکس گربه کاملاً عادی به نظر می‌رسد، ولی در بیت‌های رنگ آن بدافزار یا پیام مخفی است. فرقش با رمزگذاری: رمزگذاری داده را ناخوانا می‌کند، Steganography خود «وجود» داده را مخفی می‌کند.');

  M(33,'Which mitigation technique should be implemented first on new systems before deployment?',
    'کدام روش کاهش خطر باید اول، روی سیستم‌های جدید و قبل از راه‌اندازی، انجام شود؟',
    'قبل از اینکه سیستم وارد شبکه شود، آن را «محکم» می‌کنیم: سرویس اضافه خاموش، رمز پیش‌فرض عوض.',
    ['Hardening','Isolation','Patching','Monitoring'],
    ['Hardening (مقاوم‌سازی سیستم)','Isolation (جداسازی)','Patching (نصب وصله)','Monitoring (پایش)'],
    'Hardening is done before a system goes live: remove unneeded software and services, close ports, change default passwords and apply a secure baseline (it usually includes patching). Monitoring and isolation come later, during operation.',
    'Hardening یعنی قبل از اینکه سرور جدید را روشن کنیم و به شبکه بدهیم، آن را مقاوم کنیم: برنامه‌ها و سرویس‌های اضافه را حذف کنیم، پورت‌های بی‌استفاده را ببندیم، رمز پیش‌فرض را عوض کنیم و تنظیمات امن (Baseline) را اعمال کنیم. Patching معمولاً بخشی از Hardening است؛ Monitoring بعد از راه‌اندازی شروع می‌شود.');

  M(34,'An organization uses containers that dynamically scale based on demand. Which security principle is most challenged?',
    'سازمانی از کانتینرهایی استفاده می‌کند که با توجه به تقاضا خودکار زیاد و کم می‌شوند. کدام اصل امنیتی بیشتر از همه به چالش کشیده می‌شود؟',
    'کانتینرهای جدید مدام ساخته می‌شوند؛ آیا هر کدام فقط همان دسترسی لازم را دارد؟',
    ['Least privilege','Encryption at rest','Key rotation','IAM enforcement'],
    ['Least privilege (حداقل دسترسی)','رمزگذاری داده‌ی ذخیره‌شده','چرخش کلیدها','اعمال IAM'],
    'When containers are created and destroyed automatically, it is hard to make sure every new instance gets only the permissions it needs. Teams often give broad permissions "so it just works", which breaks least privilege. Tight templates, service accounts and policies help.',
    'وقتی کانتینرها خودکار و سریع ساخته و حذف می‌شوند، سخت است مطمئن شوی هر کدام فقط همان دسترسی لازم را دارد. خیلی وقت‌ها برای اینکه کار راحت شود، به همه دسترسی زیاد می‌دهند و Least privilege زیر پا می‌رود. راه حل: قالب (Template) دقیق و حساب سرویس جدا برای هر سرویس.');

  M(35,'A company embeds sensitive data in a JPEG image to hide it. Which obfuscation method is being used?',
    'یک شرکت داده‌ی حساس را داخل یک عکس JPEG جاسازی می‌کند تا پنهان بماند. از کدام روش مبهم‌سازی استفاده شده؟',
    'همان روش پنهان کردن داده داخل عکس، این بار برای کار قانونی.',
    ['Steganography','Data masking','Tokenization','Hashing'],
    ['Steganography (پنهان‌نگاری)','Data masking (پوشاندن داده، مثل ****1234)','Tokenization (جایگزینی با توکن)','Hashing (هش کردن)'],
    'Hiding data inside an image is steganography, whether an attacker or the company does it. Data masking shows a partial value (****1234), tokenization swaps the value for a token and hashing creates a one-way fingerprint.',
    'داده‌ای که داخل عکس پنهان شود = Steganography، چه هکر این کار را بکند چه شرکت. فرق با بقیه: Masking بخشی از داده را با ستاره نشان می‌دهد (****1234)، Tokenization داده را با یک کد جایگزین عوض می‌کند و Hashing یک اثر انگشت یک‌طرفه می‌سازد.');

  M(36,'What is the PRIMARY reason to hash digital evidence before and after transfers?',
    'دلیل «اصلی» گرفتن هش از مدارک دیجیتال قبل و بعد از انتقال چیست؟',
    'هش برای مقایسه است: آیا چیزی عوض شده؟',
    ['Validate that no corruption or tampering occurred','Encrypt the data for storage','Ensure compliance with e-discovery formats','Speed up SIEM correlation'],
    ['تأیید اینکه هیچ خرابی یا دست‌کاری‌ای رخ نداده است','رمزگذاری داده برای ذخیره','سازگاری با قالب‌های E-discovery','سریع‌تر کردن هم‌بستگی رویدادها در SIEM'],
    'Matching hashes before and after a transfer prove the evidence was not corrupted or tampered with, which keeps it usable in court. Hashing is not encryption and does not speed up a SIEM.',
    'اگر هش قبل و بعد از انتقال یکی باشد، ثابت می‌شود مدرک نه خراب شده و نه کسی دست‌کاری‌اش کرده. این برای قبول شدن مدرک در دادگاه حیاتی است. یادت باشد: هش = بررسی یکپارچگی، نه رمزگذاری.');

  M(37,'The lessons learned phase can directly improve which other IR lifecycle stage?',
    'مرحله‌ی «درس‌های آموخته» (Lessons learned) می‌تواند مستقیماً کدام مرحله‌ی دیگر چرخه‌ی پاسخ به حادثه را بهتر کند؟',
    'چرخه‌ی IR یک دایره است؛ بعد از آخرین مرحله، دوباره به اولین مرحله برمی‌گردیم.',
    ['Preparation, by enhancing training and playbooks','Detection, through updated SIEM rules','Eradication, by forcing multi-factor authentication','Containment, by limiting lateral movement'],
    ['آمادگی (Preparation)، با بهتر کردن آموزش و Playbookها','تشخیص (Detection)، با به‌روز کردن قانون‌های SIEM','ریشه‌کنی (Eradication)، با اجبار به MFA','مهار (Containment)، با محدود کردن حرکت جانبی'],
    'Lessons learned is the last stage, and its findings feed back into Preparation: better playbooks, training, tools and contacts for the next incident. The incident response lifecycle is a loop, so the end leads back to the beginning.',
    'Lessons learned آخرین مرحله است: جلسه می‌گذاریم و می‌پرسیم «چه چیزی خوب بود، چه چیزی بد بود؟» نتیجه‌اش برمی‌گردد به Preparation، یعنی اولین مرحله: Playbookها را به‌روز می‌کنیم، آموزش می‌دهیم و ابزار می‌خریم. چرخه: آمادگی ← تشخیص ← تحلیل ← مهار ← ریشه‌کنی ← بازیابی ← درس‌ها ← دوباره آمادگی.');

  M(38,'During the preparation phase of the IR lifecycle, which activity MOST directly supports faster containment during an incident?',
    'در مرحله‌ی آمادگی (Preparation) چرخه‌ی پاسخ به حادثه، کدام فعالیت «مستقیم‌تر از همه» کمک می‌کند در زمان حادثه سریع‌تر مهار کنیم؟',
    'دستورالعمل آماده: «اگر این اتفاق افتاد، قدم ۱، قدم ۲…».',
    ['Maintaining updated incident response playbooks','Applying OS patches','Correlating SIEM alerts','Conducting malware sandbox analysis'],
    ['به‌روز نگه داشتن Playbookهای پاسخ به حادثه','نصب وصله‌های سیستم‌عامل','هم‌بسته کردن هشدارهای SIEM','تحلیل بدافزار در Sandbox'],
    'A playbook lists the exact steps for each incident type (who to call, which account to disable, which host to isolate), so during a real incident nobody wastes time deciding. Patching is prevention, while SIEM correlation and sandboxing belong to detection and analysis.',
    'Playbook مثل دفترچه‌ی آتش‌نشانی است: «اگر باج‌افزار دیدی: ۱) کابل شبکه را بکش، ۲) به این شخص زنگ بزن…». وقتی حادثه شروع شود، کسی وقت فکر کردن ندارد؛ با Playbook آماده، مهار خیلی سریع‌تر انجام می‌شود. Patch جلوگیری است و SIEM و Sandbox مال تشخیص و تحلیل هستند.');

  M(39,'Which forensic acquisition method MOST ensures that deleted files and slack space are captured?',
    'کدام روش جمع‌آوری مدرک در جرم‌شناسی، بیشتر از همه تضمین می‌کند فایل‌های پاک‌شده و فضای Slack هم برداشته شوند؟',
    'کپی از «همه‌ی بیت‌ها»، نه فقط فایل‌هایی که سیستم‌عامل نشان می‌دهد.',
    ['Bit-by-bit imaging','Logical backup','Incremental backup','File copy with hash verification'],
    ['ایمیج بیت‌به‌بیت (کپی کامل دیسک)','پشتیبان منطقی','پشتیبان افزایشی','کپی فایل‌ها همراه با بررسی هش'],
    'A bit-by-bit (physical) image copies every sector of the drive, including unallocated space, slack space and deleted files that the file system no longer lists. Logical backups and file copies only take the files the operating system can see.',
    'Bit-by-bit imaging یعنی از کل دیسک، سکتور به سکتور کپی می‌گیریم، حتی جاهایی که الان خالی به نظر می‌رسند. فایل پاک‌شده معمولاً هنوز روی دیسک هست، فقط سیستم‌عامل آن را نشان نمی‌دهد. کپی فایل یا پشتیبان منطقی فقط فایل‌های قابل دیدن را برمی‌دارد و این‌ها را از دست می‌دهد.');

  M(40,'In digital forensics, volatile memory should be collected:',
    'در جرم‌شناسی دیجیتال، حافظه‌ی فرّار (RAM) را چه زمانی باید جمع‌آوری کرد؟',
    'حافظه‌ی فرّار با قطع برق پاک می‌شود.',
    ['Before powering down the system','After all disk imaging is complete','Only after chain of custody is signed','After automated malware analysis'],
    ['قبل از خاموش کردن سیستم','بعد از اینکه ایمیج همه‌ی دیسک‌ها تمام شد','فقط بعد از امضای زنجیره‌ی نگهداری مدرک','بعد از تحلیل خودکار بدافزار'],
    'RAM holds running processes, network connections, encryption keys and fileless malware, and it is lost the moment power goes off. Order of volatility says collect the most volatile data first: CPU cache and RAM before disks.',
    'RAM با خاموش شدن پاک می‌شود و هرچه داخلش بوده (برنامه‌های در حال اجرا، اتصال‌های شبکه، کلیدهای رمز، بدافزار بدون فایل) از بین می‌رود. پس قانون «ترتیب فرّاریت» (Order of volatility) می‌گوید: اول چیزی که زودتر از بین می‌رود، یعنی RAM، بعد دیسک.');

  M(41,'What is the PRIMARY legal risk of failing to implement a chain of custody for digital evidence?',
    'خطر حقوقی «اصلی» رعایت نکردن زنجیره‌ی نگهداری (Chain of custody) برای مدارک دیجیتال چیست؟',
    'دادگاه می‌پرسد: «از کجا معلوم کسی به این مدرک دست نزده؟»',
    ['Evidence may be excluded from court proceedings','Recovery time objectives (RTO) will be missed','Incident detection timelines will be extended','Privilege escalation alerts will not trigger'],
    ['ممکن است مدرک در دادگاه پذیرفته نشود','RTO (هدف زمان بازیابی) از دست می‌رود','زمان تشخیص حادثه طولانی‌تر می‌شود','هشدارهای افزایش دسترسی فعال نمی‌شوند'],
    'Chain of custody records who handled the evidence, when, where and why. Without it the other side can argue the evidence may have been changed, and the court can refuse to admit it. RTO and detection times are operational, not legal, issues.',
    'Chain of custody یک برگه است که ثبت می‌کند چه کسی، کی، کجا و چرا مدرک را دست گرفته. اگر نباشد، وکیل طرف مقابل می‌گوید «شاید کسی مدرک را عوض کرده» و دادگاه ممکن است مدرک را رد کند. یعنی حتی اگر مجرم را پیدا کرده باشی، مدرکت بی‌ارزش می‌شود.');

  M(42,'Which of the following best differentiates orchestration from automation in security operations?',
    'کدام گزینه بهتر از همه فرق Orchestration (هماهنگ‌سازی) و Automation (خودکارسازی) را در عملیات امنیتی نشان می‌دهد؟',
    'اتوماسیون = یک کار خودکار. ارکستراسیون = رهبر ارکستر که چند کار خودکار را با هم هماهنگ می‌کند.',
    ['Orchestration chains multiple automated tasks into coordinated workflows','Automation requires human intervention, orchestration does not','Orchestration focuses on repetitive tasks, automation handles incident escalation','Automation is faster but less reliable than orchestration'],
    ['ارکستراسیون چند کار خودکار را به هم وصل می‌کند و یک گردش‌کار هماهنگ می‌سازد','اتوماسیون به دخالت انسان نیاز دارد، ارکستراسیون نه','ارکستراسیون روی کارهای تکراری تمرکز دارد، اتوماسیون روی ارجاع حادثه','اتوماسیون سریع‌تر ولی کم‌اعتمادتر از ارکستراسیون است'],
    'Automation makes one task run by itself (for example, block an IP). Orchestration connects many automated tasks across different tools into one coordinated workflow (enrich alert, disable account, block IP, open ticket). SOAR platforms do both.',
    'Automation یعنی یک کار بدون دخالت انسان انجام شود، مثل مسدود کردن یک IP. Orchestration مثل رهبر ارکستر است: چند کار خودکار در ابزارهای مختلف را به ترتیب و هماهنگ اجرا می‌کند؛ مثلاً هشدار بیاید ← حساب غیرفعال شود ← IP بسته شود ← تیکت باز شود. ابزار SOAR هر دو را انجام می‌دهد.');

  M(43,'In an e-discovery process, deduplication primarily:',
    'در فرایند E-discovery (کشف الکترونیکی مدارک برای دادگاه)، حذف موارد تکراری (Deduplication) در اصل چه کاری می‌کند؟',
    'اگر یک ایمیل در صندوق ۵۰ نفر باشد، لازم است ۵۰ بار خوانده شود؟',
    ['Reduces data review volume','Preserves metadata integrity','Prevents chain of custody breaks','Ensures encryption-at-rest'],
    ['حجم داده‌ای را که باید بررسی شود کم می‌کند','یکپارچگی فراداده (Metadata) را حفظ می‌کند','جلوی شکستن زنجیره‌ی نگهداری را می‌گیرد','رمزگذاری داده‌ی ذخیره‌شده را تضمین می‌کند'],
    'Deduplication removes identical copies (the same email or file stored in many mailboxes), so lawyers review each item only once. That cuts review time and cost. It does not protect metadata, custody or encryption.',
    'در E-discovery ممکن است میلیون‌ها ایمیل و فایل جمع شود. یک ایمیل که برای ۵۰ نفر رفته، ۵۰ نسخه دارد. Deduplication نسخه‌های تکراری را حذف می‌کند تا وکیل هر چیز را فقط یک بار بخواند؛ پس حجم بررسی و هزینه خیلی کم می‌شود.');

  M(44,'A SOC uses automated SAST/DAST scans in a DevOps pipeline to block deployments with critical flaws. This BEST aligns with:',
    'یک SOC در خط تولید DevOps از اسکن خودکار SAST و DAST استفاده می‌کند تا جلوی انتشار نسخه‌هایی را که نقص بحرانی دارند بگیرد. این بهتر از همه با کدام مفهوم جور است؟',
    'هر بار که کد در Pipeline ادغام می‌شود، خودکار تست می‌شود.',
    ['Continuous integration testing','Guard rails','Threat containment','Baseline enforcement'],
    ['Continuous integration testing (تست در یکپارچه‌سازی پیوسته، CI)','Guard rails (نرده‌های محافظ)','Threat containment (مهار تهدید)','Baseline enforcement (اعمال خط مبنا)'],
    'Running SAST and DAST automatically every time code is merged in the pipeline, and failing the build when critical flaws appear, is continuous integration (CI) testing. Threat containment is an incident response step that limits an active attack; nothing is being attacked here. Guard rails is a close distractor, but the question describes tests inside a CI/CD pipeline.',
    'این را اشتباه زدی. در DevOps هر بار که برنامه‌نویس کدش را در Pipeline ادغام می‌کند، تست‌ها خودکار اجرا می‌شوند؛ اگر SAST (بررسی کد) یا DAST (تست برنامه‌ی در حال اجرا) نقص بحرانی پیدا کند، انتشار متوقف می‌شود = Continuous integration testing. تو Threat containment را زدی؛ آن مرحله‌ی «مهار» در پاسخ به حادثه است، یعنی وقتی حمله در جریان است جلوی گسترشش را می‌گیریم. اینجا هنوز حمله‌ای نیست، فقط تست قبل از انتشار است. کلیدواژه: SAST/DAST + Pipeline = CI testing.',
    2);

  M(45,'Which of the following is a disadvantage of poorly maintained automation scripts?',
    'کدام گزینه یک عیب اسکریپت‌های اتوماسیونی است که خوب نگهداری نمی‌شوند؟',
    'اسکریپت قدیمی که کسی به‌روزش نکرده، ممکن است کار را اشتباه انجام دهد و حفره بسازد.',
    ['Introduction of security gaps','Increased analyst engagement','Reduced alert fatigue','Greater SIEM correlation accuracy'],
    ['ایجاد شکاف‌ها و حفره‌های امنیتی','درگیری بیشتر تحلیل‌گران با کار','کاهش خستگی از هشدارها','دقت بیشتر هم‌بستگی در SIEM'],
    'Scripts that nobody updates can break silently, use old credentials stored in plain text, skip new systems or apply outdated rules. The team trusts them, so these failures become security gaps. The other options are benefits, not disadvantages.',
    'اسکریپتی که کسی به‌روزش نکند، ممکن است بی‌صدا خراب شود، رمز قدیمی داخلش نوشته شده باشد یا سرورهای جدید را نبیند. تیم فکر می‌کند کار انجام می‌شود ولی نمی‌شود = حفره‌ی امنیتی (Technical debt). سه گزینه‌ی دیگر مزیت هستند، نه عیب.');

  M(46,'In legal hold, which of the following is MOST likely to be suspended?',
    'در زمان Legal hold (توقف قانونی حذف داده)، کدام مورد به احتمال زیاد باید متوقف شود؟',
    'Legal hold یعنی «هیچ داده‌ی مرتبطی پاک نشود».',
    ['Automated log rotation and deletion','Patch management cycles','Firewall rule changes','Privileged account escalation'],
    ['چرخش و پاک شدن خودکار لاگ‌ها','چرخه‌های مدیریت وصله','تغییر قانون‌های فایروال','افزایش دسترسی حساب‌های ممتاز'],
    'A legal hold orders the organization to preserve all data related to a lawsuit or investigation. Any automatic deletion, such as log rotation or email retention cleanup, must be paused, or evidence could be destroyed. Patching and firewall changes continue as normal.',
    'Legal hold یعنی وکیل یا دادگاه می‌گوید «هر داده‌ای که به این پرونده مربوط است را نگه دار». پس هر چیزی که خودکار پاک می‌کند (مثلاً لاگ‌هایی که هر ۳۰ روز پاک می‌شوند، یا ایمیل‌های قدیمی) باید متوقف شود؛ وگرنه شرکت متهم به از بین بردن مدرک می‌شود. Patch و فایروال طبق معمول ادامه پیدا می‌کنند.');

  M(47,'A security orchestration platform disables a compromised account, blocks its IP address, and quarantines the endpoint in sequence. Which IR lifecycle phase does this BEST represent?',
    'یک پلتفرم ارکستراسیون امنیتی به ترتیب حساب هک‌شده را غیرفعال می‌کند، IP را مسدود می‌کند و دستگاه را قرنطینه می‌کند. این بهتر از همه کدام مرحله‌ی چرخه‌ی پاسخ به حادثه است؟',
    'همه‌ی این کارها برای «جلوگیری از گسترش» حمله هستند، نه پاک کردن ریشه‌ی آن.',
    ['Containment','Detection','Eradication','Recovery'],
    ['Containment (مهار)','Detection (تشخیص)','Eradication (ریشه‌کنی)','Recovery (بازیابی)'],
    'Disabling the account, blocking the IP and quarantining the endpoint stop the attack from spreading; that is containment. Eradication comes next (removing malware, fixing the root cause), and recovery brings systems back to normal.',
    'غیرفعال کردن حساب، بستن IP و قرنطینه‌ی دستگاه همه برای این است که حمله پخش نشود = Containment (مهار)، مثل بستن در اتاقی که آتش گرفته. بعد Eradication است (پاک کردن بدافزار و رفع علت) و بعد Recovery (برگرداندن سیستم‌ها به حالت عادی).');

  M(48,'Why should automation in security operations always include human oversight for destructive actions?',
    'چرا اتوماسیون در عملیات امنیتی برای کارهای «مخرب» (مثل پاک کردن یا خاموش کردن) همیشه باید نظارت انسانی داشته باشد؟',
    'اگر هشدار اشتباه باشد و اسکریپت سرور اصلی را خاموش کند چه؟',
    ['To prevent accidental service disruptions','To reduce system load during execution','To avoid violating patch management policies','To ensure compliance with GDPR and HIPAA'],
    ['برای جلوگیری از قطع ناخواسته‌ی سرویس‌ها','برای کم کردن بار سیستم در زمان اجرا','برای اینکه سیاست‌های مدیریت وصله نقض نشود','برای سازگاری با GDPR و HIPAA'],
    'Destructive actions (wiping a host, shutting a server, deleting accounts) triggered by a false positive can take down the business. A human approval step for these actions prevents accidental outages while routine, safe steps stay fully automated.',
    'فرض کن یک هشدار اشتباه (False positive) باعث شود اسکریپت خودکار سرور اصلی فروشگاه را خاموش کند یا حساب مدیرعامل را پاک کند! برای همین کارهای خطرناک باید یک انسان اول تأیید کند (Human in the loop). کارهای ساده و بی‌خطر می‌توانند کاملاً خودکار بمانند.');

  M(49,'Which eradication step directly prevents attackers from re-using compromised accounts?',
    'کدام قدم در مرحله‌ی ریشه‌کنی (Eradication) مستقیماً جلوی استفاده‌ی دوباره‌ی هکر از حساب‌های هک‌شده را می‌گیرد؟',
    'هکر رمزها و کلیدها را دزدیده؛ چه کار کنیم که آن‌ها دیگر کار نکنند؟',
    ['Rotating encryption keys','Isolating infected endpoints','Updating IDS signatures','Applying critical OS patches'],
    ['چرخاندن و عوض کردن کلیدهای رمزنگاری','جدا کردن دستگاه‌های آلوده','به‌روز کردن امضاهای IDS','نصب وصله‌های بحرانی سیستم‌عامل'],
    'If the attacker stole keys, tokens or passwords, rotating (replacing) them makes the stolen secrets useless, so the compromised accounts cannot be reused. In practice you also reset passwords and revoke sessions. Isolating endpoints is containment, and patching closes the hole that was used but does not cancel stolen credentials.',
    'هکر کلیدها، توکن‌ها یا رمزها را دزدیده. اگر آن‌ها را عوض کنیم (Rotate)، چیزی که دزدیده بی‌ارزش می‌شود و دیگر نمی‌تواند با آن حساب‌ها وارد شود. در عمل رمزها را هم ریست می‌کنیم و نشست‌ها را باطل می‌کنیم. جدا کردن دستگاه = مهار است و Patch حفره را می‌بندد، ولی رمز دزدیده‌شده را باطل نمی‌کند.');

  M(50,'In an automation plus orchestration workflow, what role does orchestration play in response to a phishing attack?',
    'در یک گردش‌کار اتوماسیون + ارکستراسیون، ارکستراسیون در پاسخ به حمله‌ی فیشینگ چه نقشی دارد؟',
    'ارکستراسیون = چند کار را به هم «وصل» کردن و یک جریان واحد ساختن.',
    ['Linking alert triage, account disablement, and blocklist updates into one flow','Performing malware sandboxing','Disabling email accounts in isolation','Generating automated awareness emails to all users'],
    ['وصل کردن بررسی هشدار، غیرفعال کردن حساب و به‌روزرسانی لیست سیاه در یک جریان واحد','اجرای بدافزار در Sandbox','غیرفعال کردن حساب‌های ایمیل به‌تنهایی','فرستادن خودکار ایمیل آگاهی‌رسانی به همه'],
    'Orchestration ties separate automated steps into one flow: triage the reported email, disable the affected account, add the sender and URL to blocklists and open a ticket. A single isolated action (sandboxing, disabling one account) is just automation.',
    'وقتی ایمیل فیشینگ گزارش می‌شود، ارکستراسیون کارها را پشت سر هم و هماهنگ اجرا می‌کند: ۱) هشدار بررسی شود، ۲) حساب کاربری که کلیک کرده غیرفعال شود، ۳) آدرس فرستنده و لینک در لیست سیاه برود. یک کار تنها (مثل Sandbox) فقط اتوماسیون است، نه ارکستراسیون.');
})();
