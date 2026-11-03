/* Security+ extension: Section 14, "Extra topics". Original questions for SY0-701 objective topics
   that sections 1-13 did not cover yet (found by checking an exam-guide table of contents against the app).
   Loads after secplus.js. The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['14']={en:'Extra topics: gaps in the exam objectives',fa:'موضوع‌های تکمیلی: بخش‌های جامانده از سرفصل‌های آزمون'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:h'+(++n),sec:'14',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Controls & physical security',T2='Cryptography & PKI',T3='Threats & attacks',T4='Architecture & wireless',T5='Identity & access',T6='Risk, vendors & awareness';

  /* ---- Controls & physical ---- */
  M(T1,'A company posts a rule that all visitors must sign in at reception and wear a badge. Which control type is this?',
    'شرکتی قانونی اعلام می‌کند که همه‌ی مهمان‌ها باید در پذیرش ثبت‌نام کنند و کارت بزنند. این کدام نوع کنترل است؟',
    'این کنترل به آدم‌ها «دستور» می‌دهد چه کار کنند.',
    ['Directive','Compensating','Corrective','Detective'],
    ['Directive (دستوری)','Compensating (جبرانی)','Corrective (اصلاحی)','Detective (کشف‌کننده)'],
    'A directive control tells people what they must do (policies, procedures, posted rules). Compensating replaces a control that cannot be used, corrective fixes damage, and detective discovers an event.',
    'کنترل Directive به آدم‌ها می‌گوید چه کار کنند: سیاست، دستورالعمل، تابلوی «ثبت‌نام الزامی است». Compensating جایگزین کنترلی است که نمی‌شود اجرا کرد، Corrective خرابی را درست می‌کند و Detective اتفاق را کشف می‌کند.');

  M(T1,'An entrance has two doors; the second door opens only after the first one closes and the person is verified. What is this called?',
    'یک ورودی دو در دارد؛ در دوم فقط وقتی باز می‌شود که در اول بسته شده و هویت فرد تأیید شده باشد. اسم این چیست؟',
    'هدفش جلوگیری از اینکه کسی پشت سر دیگری وارد شود (Tailgating).',
    ['Access control vestibule','Bollard','Screened subnet','Turnstile badge reader'],
    ['Access control vestibule (اتاقک کنترل ورود، Mantrap)','Bollard (ستون مانع خودرو)','Screened subnet (زیرشبکه‌ی محافظت‌شده، DMZ)','گیت چرخان با کارت‌خوان'],
    'An access control vestibule (formerly "mantrap") is a small room between two interlocked doors, so only one verified person passes at a time. It stops tailgating and piggybacking. Bollards stop vehicles; a screened subnet is a network zone.',
    'Access control vestibule (قبلاً Mantrap) یک اتاقک کوچک بین دو در است که با هم قفل شده‌اند؛ در دوم تا در اول بسته نشود باز نمی‌شود. پس کسی نمی‌تواند پشت سر تو وارد شود. Bollard جلوی ماشین را می‌گیرد و Screened subnet یک بخش شبکه است، نه فیزیکی.');

  M(T1,'Which deception technology is a fake credential or record placed in a database that triggers an alert when anyone uses it?',
    'کدام فناوری فریب، یک اطلاعات ورود یا رکورد جعلی در پایگاه داده است که اگر کسی از آن استفاده کند هشدار می‌دهد؟',
    'مثل «عسل» برای جذب مهاجم، اما به اندازه‌ی یک «نشانه» (Token).',
    ['Honeytoken','Honeynet','Sinkhole','Tarpit'],
    ['Honeytoken (نشانه‌ی طعمه)','Honeynet (شبکه‌ی طعمه)','Sinkhole (چاهک DNS)','Tarpit (کند کردن مهاجم)'],
    'A honeytoken is a single fake piece of data (account, API key, record) that no real user should touch, so any use is a strong sign of an intruder. A honeynet is a whole network of decoys; a DNS sinkhole redirects bad domains.',
    'Honeytoken یک داده‌ی تقلبی است (حساب، کلید API یا رکورد) که هیچ کاربر واقعی از آن استفاده نمی‌کند؛ پس هر استفاده‌ای یعنی مهاجم داخل شبکه است. Honeynet یک شبکه‌ی کامل طعمه است و Sinkhole دامنه‌های بد را به جای امن هدایت می‌کند.');

  M(T1,'Before a firewall upgrade, the change request must describe how to return to the old configuration if something breaks. What is this part called?',
    'قبل از ارتقای فایروال، درخواست تغییر باید بگوید اگر چیزی خراب شد چطور به تنظیمات قبلی برگردیم. اسم این بخش چیست؟',
    'نقشه‌ی «برگشت به عقب».',
    ['Backout plan','Maintenance window','Impact analysis','Standard operating procedure'],
    ['Backout plan (برنامه‌ی بازگشت)','Maintenance window (بازه‌ی زمانی نگهداری)','Impact analysis (تحلیل تأثیر)','SOP (روش اجرایی استاندارد)'],
    'A backout (rollback) plan explains how to undo a change and restore the previous state. The maintenance window is when the change happens, impact analysis predicts effects, and an SOP is a routine step-by-step procedure.',
    'Backout plan یعنی اگر تغییر خراب شد، چطور سریع به حالت قبل برگردیم. Maintenance window زمانی است که تغییر انجام می‌شود (مثلاً ساعت ۲ شب)، Impact analysis پیش‌بینی اثر تغییر است و SOP دستورالعمل قدم‌به‌قدم کارهای تکراری است.');

  M(T1,'A security team compares the controls they have today with the controls required by ISO 27001 to see what is missing. What is this?',
    'تیم امنیت کنترل‌هایی را که امروز دارد با کنترل‌های لازم در ISO 27001 مقایسه می‌کند تا ببیند چه چیزی کم است. این چیست؟',
    '«فاصله» بین وضعیت فعلی و وضعیت مطلوب.',
    ['Gap analysis','Penetration test','Root cause analysis','Business impact analysis'],
    ['Gap analysis (تحلیل شکاف)','تست نفوذ','Root cause analysis (تحلیل ریشه‌ی مشکل)','BIA (تحلیل تأثیر بر کسب‌وکار)'],
    'Gap analysis compares the current state with a target (a framework or standard) and lists the gaps to close. Root cause analysis finds why an incident happened; BIA measures the business effect of an outage.',
    'Gap analysis یعنی «الان کجاییم و باید کجا باشیم؟» و فهرست چیزهایی که کم داریم. Root cause analysis علت یک حادثه را پیدا می‌کند و BIA اثر قطعی را روی کسب‌وکار می‌سنجد.');

  /* ---- Cryptography & PKI ---- */
  M(T2,'A company stores copies of employees\' private encryption keys with a trusted third party so data can be recovered if a key is lost. What is this?',
    'شرکتی یک نسخه از کلیدهای خصوصی رمزگذاری کارکنان را نزد یک طرف سوم مورداعتماد نگه می‌دارد تا اگر کلیدی گم شد داده بازیابی شود. این چیست؟',
    'مثل سپردن کلید یدکی خانه به یک امانت‌دار.',
    ['Key escrow','Key stretching','Certificate pinning','Key rotation'],
    ['Key escrow (امانت‌گذاری کلید)','Key stretching (کشش کلید)','Certificate pinning (سنجاق کردن گواهی)','Key rotation (تعویض دوره‌ای کلید)'],
    'Key escrow keeps a copy of keys with a trusted party for recovery or legal access. Key stretching makes weak passwords harder to crack, pinning ties an app to a specific certificate, and rotation replaces keys on a schedule.',
    'Key escrow یعنی کلید یدکی را نزد امانت‌دار مطمئن بگذاریم تا اگر کارمند رفت یا کلید گم شد، داده‌ها از دست نروند. Key stretching رمز ضعیف را سخت‌تر قابل‌شکستن می‌کند، Pinning برنامه را به یک گواهی خاص وصل می‌کند و Rotation کلید را مرتب عوض می‌کند.');

  M(T2,'Which technique makes a weak password much slower to crack by running it through a hashing function thousands of times (for example PBKDF2 or bcrypt)?',
    'کدام روش با هزاران بار هش کردن یک رمز ضعیف (مثلاً PBKDF2 یا bcrypt)، شکستن آن را خیلی کندتر می‌کند؟',
    'رمز را «کش می‌دهیم» تا حدس زدنش وقت‌گیر شود.',
    ['Key stretching','Salting only','Tokenization','Steganography'],
    ['Key stretching (کشش کلید)','فقط Salting (افزودن نمک)','Tokenization (جایگزینی با توکن)','Steganography (پنهان‌نگاری)'],
    'Key stretching (PBKDF2, bcrypt, scrypt, Argon2) repeats hashing many times so each guess costs more time. Salting adds random data to stop rainbow tables but does not slow each guess by itself.',
    'Key stretching رمز را هزاران بار هش می‌کند تا هر حدس مهاجم کلی وقت بگیرد. Salt یک مقدار تصادفی اضافه می‌کند تا جدول‌های آماده (Rainbow table) کار نکنند، ولی به‌تنهایی هر حدس را کند نمی‌کند. بهترین کار: هر دو با هم.');

  M(T2,'A web server attaches a fresh, CA-signed certificate status response to the TLS handshake so browsers do not need to contact the CA. What is this?',
    'یک وب‌سرور پاسخ وضعیت گواهی را که تازه و با امضای CA است، به Handshake سرور TLS ضمیمه می‌کند تا مرورگرها لازم نباشد با CA تماس بگیرند. این چیست؟',
    'نسخه‌ی سریع‌تر OCSP که سرور جواب را «منگنه» می‌کند.',
    ['OCSP stapling','Certificate revocation list','Certificate pinning','Wildcard certificate'],
    ['OCSP stapling (منگنه کردن پاسخ OCSP)','CRL (فهرست گواهی‌های باطل‌شده)','Certificate pinning (سنجاق کردن گواهی)','Wildcard certificate (گواهی ستاره‌ای)'],
    'With OCSP stapling the server regularly fetches its own signed OCSP response and "staples" it to the handshake, which is faster and more private. A CRL is a downloadable list of revoked certificates; pinning locks an app to an expected certificate.',
    'در OCSP stapling خود سرور هر چند وقت جواب امضاشده‌ی OCSP را می‌گیرد و به Handshake می‌چسباند؛ سریع‌تر است و CA نمی‌فهمد کاربر کدام سایت را باز کرده. CRL فهرست بزرگ گواهی‌های باطل است و Pinning برنامه را به یک گواهی مشخص قفل می‌کند.');

  M(T2,'A mobile banking app accepts only the bank\'s exact certificate (or public key) and rejects any other, even one signed by a trusted CA. What is this?',
    'یک برنامه‌ی موبایل بانک فقط گواهی (یا کلید عمومی) دقیق خود بانک را می‌پذیرد و هر گواهی دیگر را، حتی اگر CA معتبر امضا کرده باشد، رد می‌کند. این چیست؟',
    'گواهی درست را در خود برنامه «سنجاق» کرده‌اند.',
    ['Certificate pinning','OCSP stapling','Key escrow','Self-signed certificate'],
    ['Certificate pinning (سنجاق کردن گواهی)','OCSP stapling','Key escrow (امانت‌گذاری کلید)','گواهی خودامضا'],
    'Pinning stores the expected certificate or public key inside the app, which blocks on-path attacks that use a fake but CA-signed or company-installed certificate.',
    'در Pinning گواهی یا کلید عمومی درست داخل خود برنامه ذخیره می‌شود. اگر مهاجم وسط راه یک گواهی جعلی (حتی امضاشده) بدهد، برنامه قبول نمی‌کند. پس جلوی حمله‌ی On-path را می‌گیرد.');

  M(T2,'Which key exchange lets two parties create a shared secret over an insecure network without ever sending the secret itself?',
    'کدام روش تبادل کلید به دو طرف اجازه می‌دهد روی یک شبکه‌ی ناامن یک راز مشترک بسازند، بدون اینکه خود راز را بفرستند؟',
    'اسم دو ریاضی‌دان؛ پایه‌ی Perfect Forward Secrecy.',
    ['Diffie-Hellman','RSA signature','SHA-256','AES-256'],
    ['Diffie-Hellman (تبادل کلید دیفی-هلمن)','امضای RSA','SHA-256 (هش)','AES-256 (رمز متقارن)'],
    'Diffie-Hellman (and ECDHE) lets each side combine its private value with the other\'s public value to reach the same secret. Using new (ephemeral) DH keys per session gives Perfect Forward Secrecy. SHA-256 is a hash and AES is symmetric encryption.',
    'در Diffie-Hellman هر طرف یک عدد خصوصی دارد و فقط بخش عمومی را می‌فرستد؛ هر دو به یک راز مشترک می‌رسند، بی‌آنکه راز روی شبکه برود. اگر برای هر نشست کلید تازه بسازیم (ECDHE)، Perfect Forward Secrecy داریم: دزدیدن کلید امروز، ترافیک دیروز را باز نمی‌کند.');

  M(T2,'Which technology is a distributed, append-only ledger where each block contains the hash of the previous block?',
    'کدام فناوری یک دفتر توزیع‌شده است که فقط می‌شود به آن اضافه کرد و هر بلوکش هش بلوک قبلی را دارد؟',
    'پایه‌ی رمزارزها.',
    ['Blockchain','Certificate authority','Key escrow','Hardware security module'],
    ['Blockchain (زنجیره‌ی بلوکی)','CA (مرجع صدور گواهی)','Key escrow','HSM (ماژول امنیتی سخت‌افزاری)'],
    'A blockchain links blocks with hashes and copies the ledger to many nodes, so changing an old record breaks every later hash and is easy to detect. It is an integrity and transparency tool, not a key store.',
    'در Blockchain هر بلوک هش بلوک قبلی را دارد و دفتر روی کامپیوترهای زیادی کپی است. اگر کسی رکورد قدیمی را عوض کند، همه‌ی هش‌های بعدی به هم می‌ریزد و معلوم می‌شود. پس برای یکپارچگی و شفافیت است.');

  /* ---- Threats & attacks ---- */
  M(T3,'An attacker steals sensitive photos and threatens to publish them unless the victim pays. Which motivation is this?',
    'مهاجمی عکس‌های حساس را می‌دزدد و تهدید می‌کند اگر قربانی پول ندهد آن‌ها را منتشر می‌کند. این کدام انگیزه است؟',
    'تهدید به افشا برای گرفتن پول یا امتیاز.',
    ['Blackmail','Espionage','Hacktivism','Service disruption'],
    ['Blackmail (باج‌گیری با تهدید)','Espionage (جاسوسی)','Hacktivism (هک با انگیزه‌ی سیاسی/عقیدتی)','Service disruption (اختلال در سرویس)'],
    'Blackmail uses a threat (usually exposing information) to force payment or action. Espionage secretly collects information, hacktivism is driven by political or philosophical beliefs, and service disruption aims to take systems down.',
    'Blackmail یعنی «یا پول بده یا منتشرش می‌کنم». Espionage مخفیانه اطلاعات جمع می‌کند، Hacktivism برای عقیده یا سیاست حمله می‌کند و Service disruption فقط می‌خواهد سرویس را از کار بیندازد.');

  M(T3,'Attackers overheat a data center by attacking its connected HVAC controller. Which attack type is this?',
    'مهاجمان با حمله به کنترلر متصل به شبکه‌ی سیستم سرمایش و تهویه (HVAC)، دیتاسنتر را داغ می‌کنند. این کدام نوع حمله است؟',
    'حمله به «محیط» فیزیکی که سیستم‌ها در آن کار می‌کنند.',
    ['Environmental attack','RFID cloning','Brute-force attack','Directory traversal'],
    ['Environmental attack (حمله‌ی محیطی)','RFID cloning (کپی کارت RFID)','Brute-force (حدس زدن پشت‌سرهم)','Directory traversal (پیمایش پوشه‌ها)'],
    'An environmental attack targets power, cooling, fire suppression or humidity systems so equipment fails. RFID cloning copies access badges; brute force tries many guesses; directory traversal reads files outside a web folder.',
    'حمله‌ی محیطی به برق، سرمایش، اطفای حریق یا رطوبت حمله می‌کند تا تجهیزات خراب شوند. مثلاً خاموش کردن کولرهای دیتاسنتر. RFID cloning کارت ورود را کپی می‌کند و Directory traversal فایل‌های بیرون از پوشه‌ی وب را می‌خواند.');

  M(T3,'A program checks that a user may open a file, but before it opens it, an attacker swaps the file for a link to /etc/shadow. What is this?',
    'یک برنامه چک می‌کند که کاربر اجازه‌ی باز کردن فایلی را دارد، اما قبل از باز کردنش مهاجم فایل را با لینکی به /etc/shadow عوض می‌کند. این چیست؟',
    'بین زمان «چک کردن» و زمان «استفاده» فاصله افتاده.',
    ['A TOCTOU race condition','A buffer overflow in the file reader','Cross-site request forgery (CSRF)','Memory injection into the program'],
    ['TOCTOU (شرط رقابتی بین زمان چک و زمان استفاده)','Buffer Overflow در خواننده‌ی فایل','CSRF (جعل درخواست بین‌سایتی)','تزریق به حافظه‌ی برنامه'],
    'A TOCTOU race condition happens when the state changes between the check and the use, so the program acts on something it never checked. Buffer overflow writes past memory limits; CSRF tricks a logged-in browser into sending a request.',
    'TOCTOU یعنی برنامه اول چک می‌کند و کمی بعد استفاده می‌کند؛ مهاجم در همان فاصله چیز را عوض می‌کند. مثل اینکه نگهبان بلیت را چک کند و بعد آدم دیگری وارد شود. Buffer overflow نوشتن بیش از ظرفیت حافظه است و CSRF مرورگر واردشده‌ی کاربر را فریب می‌دهد.');

  M(T3,'A logged-in user visits a malicious page that silently submits a money transfer to their bank using their existing session cookie. What is this?',
    'کاربری که وارد سایت بانکش شده، یک صفحه‌ی مخرب را باز می‌کند که بی‌صدا با کوکی نشست او یک انتقال پول به بانک می‌فرستد. این چیست؟',
    'درخواست «جعلی» از طرف مرورگر خود کاربر، از یک سایت دیگر.',
    ['Cross-site request forgery (CSRF)','Cross-site scripting (XSS)','SQL injection','Directory traversal'],
    ['CSRF (جعل درخواست بین‌سایتی)','XSS (تزریق اسکریپت بین‌سایتی)','SQL injection (تزریق SQL)','Directory traversal'],
    'CSRF abuses the trust a site has in the user\'s browser: the browser automatically sends the session cookie with the forged request. Defenses: anti-CSRF tokens, SameSite cookies and re-authentication for sensitive actions. XSS runs attacker script inside the trusted site.',
    'در CSRF مرورگر کاربر خودش کوکی را می‌فرستد و بانک فکر می‌کند درخواست واقعی است. راه مقابله: توکن ضد CSRF، کوکی SameSite و رمز دوباره برای کارهای حساس. در XSS مهاجم اسکریپت خودش را داخل سایت معتبر اجرا می‌کند؛ فرقشان این است.');

  M(T3,'An attacker captures a user\'s NTLM password hash from memory and uses it to log in to other servers without cracking it. What is this?',
    'مهاجم هش رمز NTLM کاربر را از حافظه برمی‌دارد و بدون شکستن آن، با همان هش وارد سرورهای دیگر می‌شود. این چیست؟',
    'خود «هش» را مثل رمز پاس می‌دهد.',
    ['Pass-the-hash','Password spraying','Birthday attack','Downgrade attack'],
    ['Pass-the-hash (استفاده‌ی مستقیم از هش)','Password spraying (امتحان چند رمز رایج روی حساب‌های زیاد)','Birthday attack (حمله‌ی روز تولد)','Downgrade attack (حمله‌ی تنزل نسخه)'],
    'Pass-the-hash is a credential replay attack: Windows NTLM accepts the hash itself, so the attacker never needs the plain password. Password spraying tries a few common passwords on many accounts; a birthday attack looks for hash collisions.',
    'Pass-the-hash یک نوع Credential replay است: در NTLM خود هش کافی است، پس مهاجم لازم نیست رمز را بداند. Password spraying یعنی چند رمز رایج روی حساب‌های زیاد، و Birthday attack دنبال دو ورودی با هش یکسان می‌گردد.');

  M(T3,'Attackers infect a niche industry forum that a target company\'s engineers visit often, hoping to compromise them. What is this?',
    'مهاجمان یک انجمن تخصصی را که مهندسان شرکت هدف زیاد به آن سر می‌زنند آلوده می‌کنند تا سیستم آن‌ها را آلوده کنند. این چیست؟',
    'مثل شکارچی که کنار برکه منتظر حیوانات تشنه می‌ماند.',
    ['Watering hole attack','Typosquatting','Brand impersonation','Smishing'],
    ['Watering hole (حمله‌ی آبشخور)','Typosquatting (ثبت دامنه با غلط تایپی)','Brand impersonation (جعل برند)','Smishing (فیشینگ پیامکی)'],
    'A watering hole attack compromises a site the victims already trust and visit. Typosquatting registers misspelled domains, brand impersonation fakes a known company, and smishing is SMS phishing.',
    'در Watering hole مهاجم سراغ خود قربانی نمی‌رود؛ سایتی را آلوده می‌کند که قربانی همیشه به آن سر می‌زند. Typosquatting یعنی دامنه‌ای مثل gooogle.com، Brand impersonation یعنی جعل یک شرکت معروف و Smishing فیشینگ با پیامک است.');

  M(T3,'A new laptop arrives with many pre-installed trial apps and toolbars the company never asked for, increasing its attack surface. What is this called?',
    'یک لپ‌تاپ نو با کلی برنامه‌ی آزمایشی و نوار ابزار از پیش نصب‌شده می‌رسد که شرکت نخواسته و سطح حمله را بیشتر می‌کند. اسم این چیست؟',
    'نرم‌افزار «پف‌کرده» و اضافی.',
    ['Bloatware','Logic bomb','Keylogger','Rootkit'],
    ['Bloatware (نرم‌افزار اضافی پیش‌نصب)','Logic bomb (بمب منطقی)','Keylogger (ثبت‌کننده‌ی کلید)','Rootkit (روت‌کیت)'],
    'Bloatware is unwanted pre-installed software; it wastes resources and may contain vulnerabilities, so hardening removes it. A logic bomb runs when a condition is met, a keylogger records typing, and a rootkit hides with high privileges.',
    'Bloatware برنامه‌های اضافی پیش‌نصب است که منابع را هدر می‌دهد و ممکن است آسیب‌پذیر باشد؛ در ایمن‌سازی پاکشان می‌کنیم. Logic bomb در یک شرط خاص فعال می‌شود (مثلاً وقتی اسم کارمند از لیست حقوق حذف شد)، Keylogger تایپ را ضبط می‌کند و Rootkit خودش را عمیق پنهان می‌کند.');

  M(T3,'Malware writes its code directly into the memory of a running trusted process instead of saving a file to disk. What is this?',
    'بدافزار کدش را مستقیم داخل حافظه‌ی یک پروسه‌ی معتبر در حال اجرا می‌نویسد، به‌جای اینکه فایلی روی دیسک بگذارد. این چیست؟',
    'تزریق به حافظه؛ آنتی‌ویروس مبتنی بر فایل چیزی نمی‌بیند.',
    ['Memory injection','Directory traversal','Jailbreaking','Bluejacking'],
    ['Memory injection (تزریق به حافظه)','Directory traversal','Jailbreaking (شکستن قفل iOS)','Bluejacking (فرستادن پیام ناخواسته با بلوتوث)'],
    'Memory injection (for example DLL injection) runs malicious code inside a legitimate process, which helps fileless malware avoid file-based antivirus. EDR that watches process behavior is a better defense.',
    'در Memory injection (مثل DLL injection) کد مخرب داخل یک پروسه‌ی سالم اجرا می‌شود و فایلی روی دیسک نیست؛ پس آنتی‌ویروس معمولی نمی‌بیند. EDR که رفتار پروسه‌ها را می‌بیند بهتر است.');

  M(T3,'A user removes the manufacturer\'s restrictions on an iPhone so they can install apps from outside the App Store. What is this?',
    'کاربری محدودیت‌های سازنده را روی آیفون برمی‌دارد تا بتواند از بیرون App Store برنامه نصب کند. این چیست؟',
    'شکستن «زندان» iOS. در اندروید به آن Rooting می‌گویند.',
    ['Jailbreaking','Sideloading only','Bluesnarfing','Bloatware'],
    ['Jailbreaking (شکستن قفل iOS)','فقط Sideloading (نصب از بیرون فروشگاه)','Bluesnarfing (دزدیدن داده با بلوتوث)','Bloatware'],
    'Jailbreaking (iOS) or rooting (Android) removes built-in security limits so the user gets full control. It often leads to sideloading, but the act of breaking the restrictions is jailbreaking. MDM can detect and block jailbroken devices.',
    'Jailbreak در iOS (و Root در اندروید) قفل‌های امنیتی سازنده را برمی‌دارد. بعدش معمولاً Sideloading می‌آید (نصب برنامه از بیرون فروشگاه)، اما اسم خود کار شکستن قفل Jailbreak است. MDM می‌تواند گوشی Jailbreak‌شده را تشخیص دهد و مسدود کند.');

  M(T3,'Someone in a café uses Bluetooth to copy contacts and messages from nearby phones without the owners knowing. What is this?',
    'کسی در کافه با بلوتوث، مخاطبین و پیام‌های گوشی‌های اطراف را بدون اطلاع صاحبانشان کپی می‌کند. این چیست؟',
    'Snarf یعنی «قاپیدن».',
    ['Bluesnarfing','Bluejacking','Evil twin','Jamming'],
    ['Bluesnarfing (دزدیدن داده با بلوتوث)','Bluejacking (فرستادن پیام ناخواسته با بلوتوث)','Evil twin (اکسس‌پوینت جعلی)','Jamming (پارازیت)'],
    'Bluesnarfing steals data over Bluetooth. Bluejacking only sends unsolicited messages. An evil twin is a fake Wi-Fi access point and jamming blocks the radio signal. Turn Bluetooth off or set it to non-discoverable when not in use.',
    'Bluesnarfing = دزدیدن داده با بلوتوث (خطرناک). Bluejacking = فقط فرستادن پیام مزاحم (کم‌خطر). Evil twin = Wi-Fi جعلی با اسم شبیه اصلی. Jamming = پارازیت روی سیگنال. وقتی لازم نیست، بلوتوث را خاموش یا غیرقابل‌کشف کن.');

  M(T3,'An attacker takes over a company\'s domain registrar account and points the domain to their own servers. What is this?',
    'مهاجم حساب کاربری شرکت در سایت ثبت دامنه (Registrar) را تصاحب می‌کند و دامنه را به سرورهای خودش هدایت می‌کند. این چیست؟',
    'کل «دامنه» دزدیده شده، نه فقط کش DNS.',
    ['Domain hijacking','DNS cache poisoning','Typosquatting','ARP poisoning'],
    ['Domain hijacking (ربودن دامنه)','DNS cache poisoning (مسموم کردن کش DNS)','Typosquatting','ARP poisoning (مسموم کردن ARP)'],
    'Domain hijacking changes the real domain registration, so every visitor goes to the attacker. DNS cache poisoning puts a fake record in a resolver\'s cache, typosquatting uses a look-alike domain, and ARP poisoning works only on the local network. Use registrar MFA and registry lock.',
    'در Domain hijacking خود ثبت دامنه در دست مهاجم است؛ پس همه‌ی بازدیدکننده‌ها به سرور او می‌روند. DNS poisoning فقط کش یک سرور DNS را خراب می‌کند، Typosquatting دامنه‌ی شبیه می‌سازد و ARP poisoning فقط در شبکه‌ی محلی است. راه حل: MFA روی حساب ثبت دامنه و Registry lock.');

  M(T3,'Which two social engineering techniques collect information by looking over someone\'s shoulder and by searching through thrown-away papers?',
    'کدام دو روش مهندسی اجتماعی با نگاه کردن از بالای شانه‌ی کسی و گشتن در کاغذهای دورریخته‌شده اطلاعات جمع می‌کنند؟',
    'یکی «شانه» است، یکی «سطل زباله».',
    ['Shoulder surfing and dumpster diving','Pretexting and vishing','Tailgating and piggybacking','Phishing and whaling'],
    ['Shoulder surfing و Dumpster diving (نگاه از بالای شانه و گشتن در زباله)','Pretexting و Vishing (داستان‌سازی و فیشینگ تلفنی)','Tailgating و Piggybacking (ورود پشت سر دیگری)','Phishing و Whaling (فیشینگ و فیشینگ مدیران ارشد)'],
    'Shoulder surfing watches someone type a PIN or password; privacy screens help. Dumpster diving searches trash for documents; shredding helps. Tailgating is following someone through a door, and whaling targets executives.',
    'Shoulder surfing = نگاه کردن به صفحه یا کیبورد کسی (راه حل: محافظ صفحه). Dumpster diving = گشتن در سطل زباله برای کاغذهای مهم (راه حل: کاغذخردکن). Tailgating ورود پشت سر کسی است و Whaling فیشینگ مدیران ارشد.');

  /* ---- Architecture & wireless ---- */
  M(T4,'WPA3-Personal replaces the WPA2 pre-shared key handshake with which method that resists offline dictionary attacks?',
    'WPA3-Personal روش Handshake با کلید مشترک WPA2 را با کدام روش عوض کرده که در برابر حمله‌ی دیکشنری آفلاین مقاوم است؟',
    'یک «احراز هویت هم‌زمان بین برابرها» که اسم دیگرش Dragonfly است.',
    ['SAE (Simultaneous Authentication of Equals)','TKIP (Temporal Key Integrity Protocol)','WEP shared key authentication','EAP-MD5 challenge authentication'],
    ['SAE (احراز هویت هم‌زمان بین برابرها)','TKIP (پروتکل قدیمی WPA)','احراز هویت با کلید مشترک WEP','احراز هویت چالشی EAP-MD5'],
    'SAE (Dragonfly) lets both sides prove they know the password without exposing anything an attacker can crack offline, and gives forward secrecy. TKIP and WEP are old and broken; EAP-MD5 is weak and used with 802.1X, not personal mode.',
    'SAE (یا Dragonfly) در WPA3 کاری می‌کند که حتی اگر مهاجم Handshake را ضبط کند، نتواند رمز Wi-Fi را آفلاین با دیکشنری حدس بزند. TKIP و WEP قدیمی و شکسته‌اند و EAP-MD5 ضعیف است.');

  M(T4,'A company runs some workloads in AWS and others in Azure so that an outage at one provider does not stop the business. What is this?',
    'شرکتی بعضی سرویس‌ها را روی AWS و بعضی را روی Azure اجرا می‌کند تا اگر یکی از ارائه‌دهنده‌ها قطع شد، کسب‌وکار متوقف نشود. این چیست؟',
    'بیش از یک «ابر».',
    ['Multicloud','Hybrid cloud with on-premises only','Serverless','Cold site'],
    ['Multicloud (چندابری)','فقط ابر هیبریدی با سرورهای داخلی','Serverless (بدون سرور)','Cold site (سایت سرد)'],
    'Multicloud uses two or more cloud providers to avoid vendor lock-in and a single point of failure; it is a form of platform diversity. Hybrid mixes cloud with on-premises, serverless runs functions without managing servers, and a cold site is an empty backup facility.',
    'Multicloud یعنی استفاده از چند ارائه‌دهنده‌ی ابری؛ اگر یکی خراب شد، دیگری کار می‌کند و به یک شرکت وابسته نیستیم. Hybrid ترکیب ابر با سرورهای خود شرکت است، Serverless یعنی فقط کد می‌نویسی و سرور را مدیریت نمی‌کنی، و Cold site ساختمان خالی پشتیبان است.');

  M(T4,'A firewall that controls a door lock loses power. For life safety, which failure mode should the door use?',
    'فایروال یا کنترلری که قفل یک در را کنترل می‌کند برقش قطع می‌شود. برای ایمنی جان آدم‌ها، در باید در کدام حالت خرابی قرار بگیرد؟',
    'در آتش‌سوزی آدم‌ها باید بتوانند بیرون بروند.',
    ['Fail-open','Fail-closed','Fail-secure for every door','Fail-stop with no override'],
    ['Fail-open (در حالت خرابی باز)','Fail-closed (در حالت خرابی بسته)','همه‌ی درها Fail-secure','توقف کامل بدون راه نجات'],
    'Fail-open keeps the door unlocked when power fails so people can escape: safety first. Fail-closed (fail-secure) keeps it locked, which protects assets and is preferred for network firewalls, but not for emergency exits.',
    'Fail-open یعنی وقتی برق رفت، در باز بماند تا آدم‌ها بتوانند فرار کنند؛ جان آدم مهم‌تر است. Fail-closed (Fail-secure) یعنی بسته بماند؛ برای فایروال شبکه بهتر است (ترافیک قطع شود)، ولی برای در خروج اضطراری نه.');

  /* ---- Identity & access ---- */
  M(T5,'Before creating a new hire\'s account, HR checks their passport and a background check to confirm they are who they claim to be. What is this?',
    'قبل از ساختن حساب کارمند جدید، منابع انسانی پاسپورت و سوابق او را چک می‌کند تا مطمئن شود همان کسی است که ادعا می‌کند. این چیست؟',
    'اثبات هویت «قبل از» دادن حساب.',
    ['Identity proofing','Attestation','Federation','Provisioning'],
    ['Identity proofing (اثبات هویت)','Attestation (گواهی/تأیید دوره‌ای)','Federation (اتحاد هویت)','Provisioning (ساختن حساب و دسترسی)'],
    'Identity proofing verifies a real person\'s identity (documents, background checks) before an account is issued. Provisioning then creates the account, attestation later confirms access is still correct, and federation shares identities across organizations.',
    'Identity proofing یعنی اول ثابت کنیم این آدم واقعاً خودش است (مدارک، سوابق). بعد Provisioning حساب را می‌سازد، Attestation بعدها چک می‌کند دسترسی هنوز درست است و Federation هویت را بین سازمان‌ها به اشتراک می‌گذارد.');

  M(T5,'An HR application allows logins only Monday to Friday between 8 a.m. and 6 p.m. Which access restriction is this?',
    'برنامه‌ی منابع انسانی فقط از دوشنبه تا جمعه بین ساعت ۸ صبح تا ۶ عصر اجازه‌ی ورود می‌دهد. این کدام محدودیت دسترسی است؟',
    'محدودیت بر اساس «ساعت».',
    ['Time-of-day restriction','Geolocation restriction','Least privilege','Mandatory access control'],
    ['Time-of-day restriction (محدودیت زمانی)','Geolocation (محدودیت مکانی)','Least privilege (حداقل دسترسی)','MAC (کنترل دسترسی اجباری)'],
    'Time-of-day restrictions limit when an account can be used, so a stolen password is useless at 3 a.m. It is a rule-based or attribute-based control. Geolocation limits where, and least privilege limits what.',
    'Time-of-day یعنی ورود فقط در ساعت کاری؛ اگر رمز دزدیده شود، مهاجم ساعت ۳ صبح نمی‌تواند وارد شود. Geolocation محدودیت «کجا» است و Least privilege محدودیت «چه چیزی».');

  /* ---- Risk, vendors & awareness ---- */
  M(T6,'Which metric is the average time a non-repairable component (like an SSD) runs before it fails for good?',
    'کدام معیار میانگین زمانی است که یک قطعه‌ی غیرقابل‌تعمیر (مثل SSD) کار می‌کند تا برای همیشه خراب شود؟',
    'برای قطعه‌ای که تعمیر نمی‌شود، «بین» خرابی‌ها معنا ندارد.',
    ['MTTF (Mean Time To Failure)','MTBF (Mean Time Between Failures)','MTTR (Mean Time To Repair)','RTO (Recovery Time Objective)'],
    ['MTTF (میانگین زمان تا خرابی)','MTBF (میانگین زمان بین خرابی‌ها)','MTTR (میانگین زمان تعمیر)','RTO (هدف زمان بازیابی)'],
    'MTTF is for items that are replaced, not repaired. MTBF is for repairable systems (time between failures), MTTR is how long a repair takes, and RTO is the maximum acceptable downtime.',
    'MTTF برای چیزی است که تعمیر نمی‌شود و عوض می‌شود (مثل SSD یا لامپ). MTBF برای چیزهای قابل‌تعمیر است (زمان بین دو خرابی)، MTTR مدت تعمیر است و RTO حداکثر زمان قطعی قابل‌قبول.');

  M(T6,'Before a penetration test, the client and testers sign a document listing which systems may be tested, testing hours and who to call if something breaks. What is it?',
    'قبل از تست نفوذ، مشتری و تسترها سندی امضا می‌کنند که می‌گوید کدام سیستم‌ها را می‌شود تست کرد، در چه ساعتی، و اگر چیزی خراب شد با چه کسی تماس بگیرند. این سند چیست؟',
    'قانون‌های «بازی» برای تست.',
    ['Rules of engagement','Service level agreement','Non-disclosure agreement','Memorandum of understanding'],
    ['Rules of engagement (قواعد اجرای تست)','SLA (توافق‌نامه‌ی سطح خدمات)','NDA (توافق‌نامه‌ی عدم افشا)','MOU (یادداشت تفاهم)'],
    'Rules of engagement set scope, allowed techniques, time windows, contacts and how to handle sensitive data, and give legal permission to test. An SLA defines service levels, an NDA protects secrets, and an MOU is a non-binding statement of intent.',
    'Rules of engagement قانون تست است: چه چیزی تست شود، با چه روشی، چه ساعتی، با چه کسی تماس بگیریم و داده‌ی حساس را چه کنیم. بدون آن، تست نفوذ مثل حمله‌ی غیرقانونی است. SLA سطح خدمات است، NDA محرمانگی و MOU تفاهم غیرالزام‌آور.');

  M(T6,'A company already has a master agreement with a vendor. For each new project they sign a document describing the exact tasks, deliverables and timeline. What is that document?',
    'شرکتی با یک فروشنده قرارداد کلی دارد. برای هر پروژه‌ی جدید سندی امضا می‌کنند که کارهای دقیق، تحویلی‌ها و زمان‌بندی را می‌گوید. این سند چیست؟',
    'سند «شرح کار».',
    ['Statement of work (SOW)','Master service agreement (MSA)','Business partners agreement (BPA)','Memorandum of agreement (MOA)'],
    ['SOW (شرح کار)','MSA (قرارداد خدمات کلی)','BPA (توافق‌نامه‌ی شرکای تجاری)','MOA (یادداشت توافق)'],
    'The MSA holds the general terms for the whole relationship; each SOW (or work order) lists the specific work, deliverables, schedule and price for one project. A BPA covers a partnership and shared profits; an MOA is a more formal MOU.',
    'MSA قرارداد کلی و بلندمدت است (شرایط عمومی). برای هر پروژه یک SOW امضا می‌شود که دقیقاً می‌گوید چه کاری، چه تحویلی، چه زمانی و چه قیمتی. BPA برای شراکت تجاری است و MOA نسخه‌ی رسمی‌تر MOU است.');

  M(T6,'The security team sends employees a fake phishing email; those who click get a short training page. What is this?',
    'تیم امنیت یک ایمیل فیشینگ جعلی برای کارکنان می‌فرستد و هر کس کلیک کند یک صفحه‌ی آموزشی کوتاه می‌بیند. این چیست؟',
    'شبیه‌سازی فیشینگ برای آموزش.',
    ['Phishing campaign (simulation)','Spear phishing attack','Tabletop exercise','Penetration test of the email server'],
    ['Phishing campaign (کمپین شبیه‌سازی فیشینگ)','Spear phishing (فیشینگ هدفمند واقعی)','Tabletop exercise (تمرین رومیزی)','تست نفوذ سرور ایمیل'],
    'A phishing campaign is an awareness exercise: simulated phishing measures click and report rates and trains people right away. Spear phishing is a real targeted attack, and a tabletop is a discussion exercise for the incident response team.',
    'Phishing campaign یک تمرین آگاهی است: ایمیل فیشینگ تقلبی می‌فرستیم، می‌بینیم چند نفر کلیک می‌کنند و چند نفر گزارش می‌دهند، و به کسی که کلیک کرد فوراً آموزش می‌دهیم. Spear phishing حمله‌ی واقعی و هدفمند است و Tabletop تمرین بحث‌محور تیم پاسخ به حادثه است.');

  M(T6,'An employee notices a coworker suddenly copying large amounts of files to a USB drive late at night and reports it. Which awareness skill is this?',
    'کارمندی می‌بیند همکارش ناگهان نصف شب حجم زیادی فایل روی فلش کپی می‌کند و گزارش می‌دهد. این کدام مهارت آگاهی امنیتی است؟',
    'تشخیص رفتار «غیرعادی».',
    ['Anomalous behavior recognition','Situational awareness of the building only','Data classification','Change management'],
    ['تشخیص رفتار غیرعادی (Anomalous behavior recognition)','فقط آگاهی موقعیتی از ساختمان','طبقه‌بندی داده','مدیریت تغییر'],
    'Awareness training teaches people to recognize risky (copying data at night), unexpected (new admin tools) and unintentional (emailing the wrong person) behavior and to report it through the right channel.',
    'آموزش آگاهی یاد می‌دهد سه نوع رفتار عجیب را بشناسیم: خطرناک (کپی داده نصف شب)، غیرمنتظره (نصب ابزار عجیب) و غیرعمدی (ایمیل به آدرس اشتباه)، و آن را از راه درست گزارش کنیم.');

  M(T6,'Which term means being aware of what is happening around you, such as an unknown person in a restricted area or an unlocked screen?',
    'کدام اصطلاح یعنی آگاه بودن از آنچه اطرافت می‌گذرد، مثل یک غریبه در منطقه‌ی ممنوعه یا صفحه‌ی قفل‌نشده؟',
    'آگاهی از «موقعیت».',
    ['Situational awareness','Risk appetite','Due diligence','Non-repudiation'],
    ['Situational awareness (آگاهی موقعیتی)','Risk appetite (میزان ریسک‌پذیری)','Due diligence (بررسی دقیق قبل از تصمیم)','Non-repudiation (انکارناپذیری)'],
    'Situational awareness means noticing your surroundings: strangers without badges, tailgaters, shoulder surfers, unlocked devices, odd messages. It is a core topic of user security training.',
    'Situational awareness یعنی چشمت باز باشد: آدم بدون کارت، کسی که پشت سرت وارد می‌شود، کسی که به صفحه‌ات نگاه می‌کند، کامپیوتر قفل‌نشده. یکی از موضوع‌های اصلی آموزش امنیت کارکنان است.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['14']={t:['Extra topics: gaps in the exam objectives','موضوع‌های تکمیلی: بخش‌های جامانده از سرفصل‌های آزمون'],b:[
    PP('These topics are in the SY0-701 objectives but were not covered by the earlier sections. Read the tables, then practice the 34 questions.',
      'این موضوع‌ها در سرفصل‌های آزمون SY0-701 هستند ولی در بخش‌های قبلی نبودند. جدول‌ها را بخوان و بعد ۳۴ سؤال را تمرین کن.'),

    H('Controls, physical security & change','کنترل‌ها، امنیت فیزیکی و تغییر'),
    TB([['Term','اصطلاح'],['Meaning','معنی']],[
      [['Directive control','کنترل دستوری'],['Tells people what to do (policy, sign)','به آدم‌ها می‌گوید چه کنند (سیاست، تابلو)']],
      [['Access control vestibule','اتاقک کنترل ورود'],['Two interlocked doors; stops tailgating','دو در قفل‌به‌هم؛ جلوی ورود پشت سر دیگری']],
      [['Honeytoken','نشانه‌ی طعمه'],['Fake record or key; any use = alert','داده‌ی تقلبی؛ هر استفاده = هشدار']],
      [['Backout plan','برنامه‌ی بازگشت'],['How to undo a change','چطور تغییر را برگردانیم']],
      [['Gap analysis','تحلیل شکاف'],['Current state vs target standard','وضعیت فعلی در برابر استاندارد هدف']]]),

    H('Cryptography & PKI','رمزنگاری و PKI'),
    TB([['Term','اصطلاح'],['Meaning','معنی']],[
      [['Key escrow','امانت‌گذاری کلید'],['Copy of keys with a trusted third party','کلید یدکی نزد امانت‌دار']],
      [['Key stretching','کشش کلید'],['Hash many times (PBKDF2, bcrypt)','هزاران بار هش (PBKDF2، bcrypt)']],
      [['OCSP stapling','منگنه‌ی OCSP'],['Server attaches its own signed status','سرور وضعیت امضاشده‌ی گواهی را خودش ضمیمه می‌کند']],
      [['Certificate pinning','سنجاق کردن گواهی'],['App trusts only one expected certificate','برنامه فقط یک گواهی مشخص را قبول دارد']],
      [['Diffie-Hellman / PFS','دیفی-هلمن / PFS'],['Shared secret without sending it; new keys per session','راز مشترک بدون فرستادن؛ کلید تازه برای هر نشست']],
      [['Blockchain','بلاک‌چین'],['Hash-linked, distributed, append-only ledger','دفتر توزیع‌شده با بلوک‌های زنجیرشده با هش']]]),

    H('Threats & attacks','تهدیدها و حمله‌ها'),
    TB([['Attack','حمله'],['Key sign','نشانه‌ی کلیدی']],[
      [['Blackmail','باج‌گیری با تهدید'],['Pay or we expose it','پول بده وگرنه منتشر می‌کنیم']],
      [['Environmental','محیطی'],['Power, HVAC, fire systems','برق، سرمایش، اطفای حریق']],
      [['TOCTOU race condition','شرط رقابتی TOCTOU'],['Changed between check and use','بین چک و استفاده عوض شد']],
      [['CSRF','جعل درخواست بین‌سایتی'],['Forged request with the user\'s own session','درخواست جعلی با نشست خود کاربر']],
      [['Pass-the-hash','استفاده از هش'],['Hash reused as a password (NTLM)','هش مثل رمز استفاده می‌شود (NTLM)']],
      [['Watering hole','آبشخور'],['Infect a site the victims visit','آلوده کردن سایتی که قربانی‌ها می‌روند']],
      [['Bloatware','نرم‌افزار اضافی'],['Unwanted pre-installed apps','برنامه‌های پیش‌نصب ناخواسته']],
      [['Memory injection','تزریق به حافظه'],['Code inside a trusted running process','کد داخل پروسه‌ی سالم در حال اجرا']],
      [['Jailbreak / root','جیلبریک / روت'],['Removing phone OS restrictions','برداشتن محدودیت‌های سیستم‌عامل گوشی']],
      [['Bluesnarfing / Bluejacking','بلواسنارفینگ / بلوجکینگ'],['Steal data / send spam over Bluetooth','دزدی داده / پیام مزاحم با بلوتوث']],
      [['Domain hijacking','ربودن دامنه'],['Registrar account taken over','حساب ثبت دامنه تصاحب شد']],
      [['Shoulder surfing / dumpster diving','نگاه از بالای شانه / گشتن در زباله'],['Watching screens / searching trash','نگاه به صفحه / گشتن در زباله']]]),

    H('Architecture, identity & risk','معماری، هویت و ریسک'),
    TB([['Term','اصطلاح'],['Meaning','معنی']],[
      [['SAE (WPA3)','SAE در WPA3'],['Password handshake that resists offline cracking','Handshake مقاوم در برابر حدس آفلاین']],
      [['Multicloud','چندابری'],['Two or more cloud providers','دو یا چند ارائه‌دهنده‌ی ابری']],
      [['Fail-open / fail-closed','باز در خرابی / بسته در خرابی'],['Safety (doors) / security (firewalls)','ایمنی (درها) / امنیت (فایروال)']],
      [['Identity proofing','اثبات هویت'],['Verify the person before issuing an account','تأیید آدم قبل از دادن حساب']],
      [['Time-of-day restriction','محدودیت زمانی'],['Logins only in allowed hours','ورود فقط در ساعت مجاز']],
      [['MTTF vs MTBF vs MTTR','MTTF، MTBF و MTTR'],['Until failure (replace) / between failures (repair) / repair time','تا خرابی (تعویض) / بین خرابی‌ها (تعمیر) / زمان تعمیر']],
      [['Rules of engagement','قواعد اجرای تست'],['Pen test scope, hours, contacts, permission','محدوده، ساعت، مخاطب و مجوز تست نفوذ']],
      [['MSA vs SOW','MSA در برابر SOW'],['General terms / one project\'s exact work','شرایط کلی / کار دقیق یک پروژه']],
      [['Phishing campaign','کمپین فیشینگ'],['Simulated phishing for training','فیشینگ آزمایشی برای آموزش']],
      [['Situational awareness','آگاهی موقعیتی'],['Noticing strangers, tailgaters, unlocked screens','دیدن غریبه‌ها، ورود پشت سر، صفحه‌ی باز']]]),

    TT('Watch the pairs: Bluesnarfing steals, Bluejacking only messages. CSRF uses the user\'s session; XSS runs script in the site. MTTF = replace, MTBF = repair. MSA = umbrella contract, SOW = one job.',
      'جفت‌ها را قاطی نکن: Bluesnarfing می‌دزدد، Bluejacking فقط پیام می‌فرستد. CSRF از نشست کاربر سوءاستفاده می‌کند؛ XSS اسکریپت را در سایت اجرا می‌کند. MTTF = تعویض، MTBF = تعمیر. MSA = قرارداد چتری، SOW = یک کار مشخص.')
  ]};
})();
