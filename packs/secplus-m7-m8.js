/* Security+ extension: Module 7 (Data Protection & Resilience) and Module 8 (Endpoints, Mobile & Applications).
   Built from the Sheridan session slides. Loads after secplus.js and adds sections 7 and 8 to the same course. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['7']={en:'Data protection & resilience',fa:'حفاظت از داده و تاب‌آوری'};
  pack.sections['8']={en:'Endpoints, mobile & applications',fa:'امنیت endpoint، موبایل و اپلیکیشن'};
  var n7=0,n8=0;
  function M(sec,t,q,qf,hf,o,of,en,fa){
    var id='secplus:'+(sec==='7'?'a':'b')+(sec==='7'?++n7:++n8);
    pack.mcq.push({id:id,sec:sec,t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var P=function(sec,t,title,tf,zones,zf,items,zd,en,fa){
    pack.pbq.push({id:'secplus:p'+sec+'_'+(pack.pbq.length+1),sec:sec,t:t,title:title,tf:tf,zones:zones,zf:zf,items:items,zd:zd,en:en,fa:fa});
  };

  /* ================= MODULE 7 ================= */
  var T1='Data types & classification',T2='Data states & sovereignty',T3='Encryption, hashing & masking',T4='Backups, RPO & RTO',T5='High availability & sites',T6='Resilience testing & power';

  M('7',T1,'A hospital in Ontario must protect patient health records under PHIPA. Which data type is this?',
    'یک بیمارستان در انتاریو باید طبق قانون PHIPA از پرونده‌های سلامت بیماران محافظت کند. این کدام نوع داده است؟',
    'داده‌ای که یک قانون مشخص حفاظتش را اجباری کرده، «Regulated» است (مثل HIPAA، GDPR و PHIPA).',
    ['Regulated data','Trade secret','Intellectual property','Public data'],
    ['داده‌ی تحت مقررات (Regulated)','راز تجاری (Trade secret)','مالکیت فکری (Intellectual property)','داده‌ی عمومی (Public)'],
    'Data whose protection is required by law or regulation (HIPAA, GDPR, PHIPA) is regulated data.',
    'داده‌ای که قانون حفاظتش را الزامی کرده، Regulated است. نمونه‌ها: HIPAA، GDPR و PHIPA.');

  M('7',T1,'A company\'s proprietary pricing algorithm gives it a competitive edge and is never published. What type of data is it?',
    'الگوریتم قیمت‌گذاری اختصاصی یک شرکت مزیت رقابتی به آن می‌دهد و هرگز منتشر نمی‌شود. این چه نوع داده‌ای است؟',
    'چیزی که ارزشش در محرمانه بودنش است و به شرکت مزیت می‌دهد، Trade secret است.',
    ['Trade secret','Regulated data','Legal data','Financial data'],
    ['راز تجاری (Trade secret)','داده‌ی تحت مقررات','داده‌ی حقوقی','داده‌ی مالی'],
    'A trade secret is business information that gains value from being kept confidential, such as an algorithm.',
    'Trade secret اطلاعاتی است که ارزشش به محرمانه ماندنش است، مثل یک الگوریتم.');

  M('7',T1,'Which of the following is an example of non-human-readable data?',
    'کدام مورد نمونه‌ی داده‌ی غیرقابل‌خواندن برای انسان است؟',
    'غیرقابل‌خواندن یعنی برای سیستم ساخته شده و بدون ابزار خاص (رمزگشایی یا parse) خوانده نمی‌شود.',
    ['A compressed archive or a hexadecimal dump','A plain-text email','A Word document','An HTML page'],
    ['فایل فشرده یا hex dump','ایمیل متنی ساده','سند Word','صفحه‌ی HTML'],
    'Encrypted files, binary executables, compressed archives and hex dumps need special tools to read. Word files, PDFs, plain text and HTML pages are human-readable.',
    'فایل رمزنگاری‌شده، فایل اجرایی باینری، آرشیو فشرده و hex dump بدون ابزار خاص خوانده نمی‌شوند. Word، PDF، متن ساده و HTML برای انسان قابل خواندن‌اند.');

  M('7',T1,'A SIEM ingests machine-readable logs in JSON or syslog format. What does it typically produce from them?',
    'یک SIEM لاگ‌های ماشینی با فرمت JSON یا syslog را دریافت می‌کند. معمولاً از آن‌ها چه خروجی‌ای می‌سازد؟',
    '',
    ['Human-readable dashboards and alerts','Encrypted backups','Tokenized card numbers','A hardened system image'],
    ['داشبورد و هشدار قابل‌فهم برای انسان','بکاپ رمزنگاری‌شده','شماره‌ی کارت توکن‌شده','image سخت‌سازی‌شده'],
    'SIEM tools parse large volumes of machine-readable logs and turn them into dashboards and alerts people can act on.',
    'SIEM حجم زیادی لاگ ماشینی را parse می‌کند و به داشبورد و هشدار قابل‌استفاده برای انسان تبدیل می‌کند.');

  M('7',T1,'Which classification level describes information that is freely shareable?',
    'کدام سطح طبقه‌بندی به اطلاعاتی گفته می‌شود که آزادانه قابل اشتراک است؟',
    'ترتیب حساسیت: Public ← Private ← Sensitive ← Confidential ← Critical.',
    ['Public','Private','Sensitive','Confidential'],
    ['Public (عمومی)','Private (خصوصی)','Sensitive (حساس)','Confidential (محرمانه)'],
    'Public: freely shareable. Private: internal use only. Sensitive: internal with limited access. Confidential: highly restricted. Critical: vital for operations.',
    'Public آزادانه قابل اشتراک است. Private فقط داخلی. Sensitive داخلی با دسترسی محدود. Confidential بسیار محدود. Critical برای ادامه‌ی عملیات حیاتی است.');

  M('7',T1,'Data that is vital for keeping the business operating, such as a core transaction system, is best labeled:',
    'داده‌ای که برای ادامه‌ی کار سازمان حیاتی است، مثل سیستم اصلی تراکنش‌ها، بهتر است چه برچسبی بگیرد؟',
    '',
    ['Critical','Public','Private','Internal only'],
    ['Critical (حیاتی)','Public (عمومی)','Private (خصوصی)','Internal only (فقط داخلی)'],
    'The Critical level marks data that is vital for operations. Source code, for example, may be Confidential or Critical depending on impact.',
    'سطح Critical برای داده‌ی حیاتی عملیات است. مثلاً source code بسته به اثرش می‌تواند Confidential یا Critical باشد.');

  M('7',T1,'A breach involves classified legal or financial records. How should classification affect the response?',
    'نشت داده‌ای شامل رکوردهای حقوقی یا مالی طبقه‌بندی‌شده رخ داده است. طبقه‌بندی چه اثری روی واکنش دارد؟',
    'یکی از کاربردهای طبقه‌بندی، اولویت‌بندی پاسخ به حادثه (Incident Response) است.',
    ['It demands faster escalation and reporting','It means the breach can be ignored until the next audit','It removes the need for retention rules','It allows weaker encryption'],
    ['نیاز به escalation و گزارش‌دهی سریع‌تر دارد','می‌توان تا ممیزی بعدی نادیده‌اش گرفت','دیگر به قوانین نگهداری نیازی نیست','رمزنگاری ضعیف‌تر مجاز می‌شود'],
    'Classification drives access control, encryption strength, retention and incident response priority. Breaches of legal or financial records need faster escalation and reporting.',
    'طبقه‌بندی کنترل دسترسی، قدرت رمزنگاری، مدت نگهداری و اولویت پاسخ به حادثه را تعیین می‌کند. نشت داده‌ی مالی یا حقوقی باید سریع‌تر escalate و گزارش شود.');

  M('7',T2,'An archived tax record saved on an encrypted file server is in which data state?',
    'یک رکورد مالیاتی بایگانی‌شده روی فایل‌سرور رمزنگاری‌شده در کدام حالت داده است؟',
    'سه حالت: At rest (ذخیره‌شده)، In transit (در حال انتقال)، In use (در حال پردازش).',
    ['Data at rest','Data in transit','Data in use','Data in motion'],
    ['Data at rest (ذخیره‌شده)','Data in transit (در حال انتقال)','Data in use (در حال استفاده)','Data in motion'],
    'Data at rest is stored on media such as disks, SSDs, cloud storage or databases and is not moving or being processed.',
    'Data at rest روی دیسک، SSD، cloud یا دیتابیس ذخیره شده و نه در حال انتقال است و نه پردازش می‌شود.');

  M('7',T2,'Login credentials sent over HTTPS to a banking website are in which state, and what protects them?',
    'اطلاعات ورود که از طریق HTTPS به سایت بانک می‌رود در کدام حالت است و چه چیزی از آن محافظت می‌کند؟',
    '',
    ['In transit, protected by TLS','At rest, protected by BitLocker','In use, protected by RAM encryption only','At rest, protected by hashing the website'],
    ['In transit و با TLS محافظت می‌شود','At rest و با BitLocker محافظت می‌شود','In use و فقط با رمزنگاری RAM','At rest و با hash کردن سایت'],
    'Data moving across a network is in transit and is vulnerable to interception and man-in-the-middle attacks. HTTPS uses TLS to protect it.',
    'داده‌ای که روی شبکه حرکت می‌کند in transit است و در برابر شنود و man-in-the-middle آسیب‌پذیر است. HTTPS با TLS از آن محافظت می‌کند.');

  M('7',T2,'Which data state is the hardest to encrypt without affecting performance?',
    'رمزنگاری کدام حالت داده بدون اثر روی کارایی از همه سخت‌تر است؟',
    'داده‌ای که همین الان در حافظه (RAM) پردازش می‌شود.',
    ['Data in use','Data at rest','Data in transit','Archived data'],
    ['Data in use (در حال استفاده)','Data at rest','Data in transit','داده‌ی بایگانی‌شده'],
    'Data in use is being processed or held in memory (RAM). It is the most dynamic state and hard to encrypt without a performance cost. Example: a document open in a word processor.',
    'Data in use در حال پردازش یا در RAM است. پویاترین حالت است و رمزنگاری‌اش بدون افت کارایی سخت است. مثال: سندی که در word processor باز است.');

  M('7',T2,'What does data sovereignty mean?',
    'مفهوم data sovereignty (حاکمیت داده) چیست؟',
    'داده تابع قوانین کشوری است که در آن ذخیره می‌شود.',
    ['Digital data is subject to the laws of the country where it is stored','Data belongs to whoever encrypts it first','Data may be stored anywhere regardless of law','Data must always be stored in the cloud'],
    ['داده تابع قوانین کشوری است که در آن ذخیره شده','داده مال کسی است که اول رمزنگاری‌اش کند','داده را می‌توان بدون توجه به قانون هرجا ذخیره کرد','داده باید همیشه در cloud باشد'],
    'Digital information is subject to the laws of the country where it is stored. Some laws require data to stay within national borders, especially for health, finance and government.',
    'اطلاعات دیجیتال تابع قوانین کشور محل ذخیره‌سازی است. بعضی قوانین می‌گویند داده باید داخل مرز بماند، به‌ویژه در سلامت، مالی و دولت.');

  M('7',T2,'A multinational stores European customer data in the U.S. Which concept explains why GDPR may restrict this?',
    'یک شرکت چندملیتی داده‌ی مشتریان اروپایی را در آمریکا ذخیره می‌کند. کدام مفهوم توضیح می‌دهد چرا GDPR ممکن است این را محدود کند؟',
    'مکان فیزیکی یا حقوقی ذخیره/پردازش داده تعیین می‌کند چه قانونی اعمال شود.',
    ['Geolocation and cross-border transfer restrictions','Tokenization','Journaling','Platform diversity'],
    ['Geolocation و محدودیت انتقال بین‌مرزی','Tokenization','Journaling','Platform diversity'],
    'Geolocation (where data is stored, transmitted or processed) determines which privacy laws and cross-border transfer rules apply.',
    'Geolocation (محل ذخیره، انتقال یا پردازش داده) تعیین می‌کند کدام قوانین حریم خصوصی و محدودیت‌های انتقال بین‌مرزی اعمال شود.');

  M('7',T3,'Which of these is a symmetric encryption algorithm?',
    'کدام یک الگوریتم رمزنگاری متقارن (symmetric) است؟',
    'AES متقارن است، RSA و ECC نامتقارن‌اند، SHA هش است نه رمزنگاری.',
    ['AES-256','RSA','ECC','SHA-256'],
    ['AES-256','RSA','ECC','SHA-256'],
    'AES-256 is widely used symmetric encryption. RSA and ECC are asymmetric. SHA-256 is a hash function, not encryption.',
    'AES-256 رمزنگاری متقارن پرکاربردی است. RSA و ECC نامتقارن‌اند. SHA-256 تابع hash است و رمزنگاری نیست.');

  M('7',T3,'Which tools are used for centralized encryption key management and rotation?',
    'کدام ابزارها برای مدیریت متمرکز و چرخش (rotation) کلیدهای رمزنگاری استفاده می‌شوند؟',
    '',
    ['AWS KMS, Azure Key Vault or HashiCorp Vault','NGINX or AWS Elastic Load Balancer','Ekahau or NetSpot','SonarQube or Fortify'],
    ['AWS KMS، Azure Key Vault یا HashiCorp Vault','NGINX یا AWS Elastic Load Balancer','Ekahau یا NetSpot','SonarQube یا Fortify'],
    'Secure key storage is critical. KMS and Vault products centralize key management and rotation. NGINX/ELB are load balancers, Ekahau/NetSpot are Wi-Fi survey tools, SonarQube/Fortify are code scanners.',
    'نگهداری امن کلید حیاتی است و KMS و Vault مدیریت و rotation را متمرکز می‌کنند. NGINX/ELB load balancer، Ekahau/NetSpot ابزار site survey و SonarQube/Fortify اسکنر کد هستند.');

  M('7',T3,'A user downloads a file and compares its SHA-256 value with the one the vendor published. What is being verified?',
    'کاربر فایلی را دانلود می‌کند و مقدار SHA-256 آن را با مقدار منتشرشده‌ی سازنده مقایسه می‌کند. چه چیزی بررسی می‌شود؟',
    'hash برای «یکپارچگی» است، نه محرمانگی.',
    ['Integrity: the file was not altered','Confidentiality of the file','Availability of the download server','Non-repudiation of the user'],
    ['یکپارچگی: فایل تغییر نکرده','محرمانگی فایل','در دسترس بودن سرور دانلود','عدم انکار کاربر'],
    'Hashing creates a fixed-length value that changes dramatically if the data changes even slightly. Matching hashes confirm the file was not altered in transit.',
    'Hash یک مقدار با طول ثابت می‌سازد که با کوچک‌ترین تغییر داده کاملاً عوض می‌شود. یکسان بودن hash یعنی فایل در مسیر تغییر نکرده.');

  M('7',T3,'Which hashing algorithm is considered legacy and not recommended for security purposes?',
    'کدام الگوریتم hash قدیمی است و برای کاربردهای امنیتی توصیه نمی‌شود؟',
    '',
    ['MD5','SHA-256','SHA-3','AES-256'],
    ['MD5','SHA-256','SHA-3','AES-256'],
    'MD5 is legacy and not recommended for security. SHA-256 and SHA-3 are current. AES-256 is encryption, not hashing.',
    'MD5 قدیمی است و برای امنیت توصیه نمی‌شود. SHA-256 و SHA-3 فعلی‌اند. AES-256 رمزنگاری است نه hash.');

  M('7',T3,'A web app shows a credit card as **** **** **** 1234. Which technique is this?',
    'یک اپلیکیشن وب شماره‌ی کارت را به شکل **** **** **** 1234 نشان می‌دهد. این کدام تکنیک است؟',
    'بخشی از داده پنهان می‌شود ولی داده هنوز قابل استفاده است.',
    ['Masking','Tokenization','Hashing','Obfuscation'],
    ['Masking (پوشاندن)','Tokenization','Hashing','Obfuscation'],
    'Masking hides specific parts of data while keeping it usable on screen or in reports.',
    'Masking بخشی از داده را پنهان می‌کند ولی داده در نمایش یا گزارش همچنان قابل استفاده است.');

  M('7',T3,'A payment processor replaces card numbers with random values stored in a secure vault to help meet PCI-DSS. What is this?',
    'یک پردازشگر پرداخت شماره‌ی کارت‌ها را با مقادیر تصادفی جایگزین می‌کند که در یک vault امن نگهداری می‌شود تا PCI-DSS رعایت شود. این چیست؟',
    '',
    ['Tokenization','Masking','Obfuscation','Segmentation'],
    ['Tokenization','Masking','Obfuscation','Segmentation'],
    'Tokenization substitutes sensitive data with a randomly generated token. The real value lives in a secure vault.',
    'Tokenization داده‌ی حساس را با یک token تصادفی جایگزین می‌کند و مقدار واقعی در vault امن می‌ماند.');

  M('7',T3,'Obfuscating JavaScript code is mainly meant to:',
    'obfuscate کردن کد JavaScript بیشتر برای چه هدفی است؟',
    '',
    ['Make the code hard to understand and reverse engineer','Encrypt data at rest','Provide high availability','Verify file integrity'],
    ['سخت کردن فهم کد و reverse engineering','رمزنگاری داده‌ی ذخیره‌شده','فراهم کردن high availability','بررسی یکپارچگی فایل'],
    'Obfuscation alters code or data to make it unintelligible to unauthorized users, for example to prevent reverse engineering.',
    'Obfuscation کد یا داده را برای افراد غیرمجاز نامفهوم می‌کند، مثلاً برای جلوگیری از reverse engineering.');

  M('7',T3,'Using VLANs to isolate development, production and guest networks mainly helps to:',
    'استفاده از VLAN برای جدا کردن شبکه‌ی توسعه، production و مهمان بیشتر چه کمکی می‌کند؟',
    '',
    ['Limit lateral movement and reduce the attack surface','Increase backup frequency','Remove the need for access permissions','Replace encryption'],
    ['محدود کردن lateral movement و کم کردن attack surface','بیشتر کردن تناوب بکاپ','حذف نیاز به مجوزهای دسترسی','جایگزین رمزنگاری'],
    'Segmentation divides resources into zones so a compromise in one zone does not spread easily. RBAC and least privilege complement it.',
    'Segmentation منابع را به zone تقسیم می‌کند تا نفوذ به یک zone به‌راحتی پخش نشود. RBAC و least privilege مکمل آن هستند.');

  M('7',T4,'The RPO is 1 hour. Which backup schedule keeps the organization within it?',
    'RPO برابر ۱ ساعت است. کدام برنامه‌ی بکاپ سازمان را در محدوده‌ی آن نگه می‌دارد؟',
    'RPO یعنی حداکثر مقدار داده‌ای که حاضریم از دست بدهیم (بر حسب زمان).',
    ['Every 30 minutes','Every night','Once a week','Once a month'],
    ['هر ۳۰ دقیقه','هر شب','هفته‌ای یک بار','ماهی یک بار'],
    'RPO is the maximum acceptable data loss measured in time. Backups must run often enough to stay inside it; the slides use every 30 minutes for a 1-hour RPO.',
    'RPO حداکثر داده‌ی قابل‌قبول برای از دست رفتن بر حسب زمان است. بکاپ باید به‌اندازه‌ی کافی مکرر باشد؛ در اسلاید برای RPO یک‌ساعته هر ۳۰ دقیقه بکاپ گرفته شده.');

  M('7',T4,'What does RTO (Recovery Time Objective) measure?',
    'RTO (Recovery Time Objective) چه چیزی را اندازه می‌گیرد؟',
    'RPO = چقدر داده از دست برود. RTO = چقدر طول بکشد تا برگردیم.',
    ['The maximum acceptable downtime to restore operations','The maximum acceptable data loss','The age of the oldest backup','The cost of the DR site'],
    ['حداکثر downtime قابل‌قبول برای برگرداندن عملیات','حداکثر داده‌ی قابل‌قبول برای از دست رفتن','قدیمی‌ترین بکاپ','هزینه‌ی سایت DR'],
    'RTO is the maximum acceptable downtime. It determines how fast backup systems and storage must respond. RPO is about data loss.',
    'RTO حداکثر downtime قابل‌قبول است و تعیین می‌کند سیستم بکاپ و storage چقدر سریع باید پاسخ دهد. RPO درباره‌ی از دست رفتن داده است.');

  M('7',T4,'A ransomware attack encrypts the files on the primary site, including the local NAS. Which backup type protects the business best?',
    'یک باج‌افزار فایل‌های سایت اصلی از جمله NAS محلی را رمزنگاری کرده است. کدام نوع بکاپ بهترین حفاظت را می‌دهد؟',
    '',
    ['Offsite or cloud backup','Backup on the same NAS','Backup on the same server\'s second partition','A screenshot of the files'],
    ['بکاپ offsite یا cloud','بکاپ روی همان NAS','بکاپ روی پارتیشن دوم همان سرور','اسکرین‌شات فایل‌ها'],
    'Offsite backups are stored in geographically separate locations or cloud services, so they survive fire, ransomware or loss of the primary site. Onsite backups give faster recovery for routine failures.',
    'بکاپ offsite در مکان جداگانه یا cloud نگهداری می‌شود و از آتش‌سوزی، باج‌افزار یا از دست رفتن سایت اصلی جان سالم به در می‌برد. بکاپ onsite برای خرابی‌های روزمره سریع‌تر است.');

  M('7',T4,'An admin wants a lightweight point-in-time copy of a VM so they can roll back quickly after a failed patch. What should they use?',
    'ادمین یک کپی سبک و point-in-time از یک VM می‌خواهد تا بعد از یک patch ناموفق سریع rollback کند. از چه چیزی استفاده کند؟',
    '',
    ['A snapshot','Tokenization','A cold site','Load balancing'],
    ['Snapshot','Tokenization','Cold site','Load balancing'],
    'Snapshots are lightweight point-in-time copies of systems or VMs, useful for rapid rollback after updates, patches or accidental deletion.',
    'Snapshot کپی سبک و point-in-time از سیستم یا VM است و برای rollback سریع بعد از به‌روزرسانی، patch یا حذف اشتباهی مناسب است.');

  M('7',T4,'Which technique logs every change before it is applied to the database, allowing rollback or replay after corruption?',
    'کدام تکنیک هر تغییر را قبل از اعمال روی دیتابیس لاگ می‌کند و امکان rollback یا replay بعد از خرابی را می‌دهد؟',
    '',
    ['Journaling','Masking','Hashing','Segmentation'],
    ['Journaling','Masking','Hashing','Segmentation'],
    'Journaling records each change or transaction in a log first. It gives an audit trail and reduces data loss between full backups.',
    'Journaling هر تغییر یا تراکنش را اول در یک log ثبت می‌کند. audit trail می‌دهد و از دست رفتن داده بین بکاپ‌های کامل را کم می‌کند.');

  M('7',T4,'Compared with synchronous replication, asynchronous replication:',
    'در مقایسه با replication همزمان (synchronous)، replication ناهمزمان (asynchronous):',
    '',
    ['May lag slightly but has lower performance impact','Copies data in real time with no delay','Cannot be used for disaster recovery','Always needs a hot site'],
    ['ممکن است کمی تأخیر داشته باشد ولی اثر کمتری روی کارایی دارد','داده را بدون تأخیر و real-time کپی می‌کند','برای disaster recovery قابل استفاده نیست','همیشه به hot site نیاز دارد'],
    'Synchronous replication duplicates data in real time. Asynchronous replication may have a slight delay but costs less performance.',
    'Synchronous داده را real-time کپی می‌کند. Asynchronous ممکن است کمی تأخیر داشته باشد ولی هزینه‌ی کارایی کمتری دارد.');

  M('7',T5,'Which technique distributes incoming traffic across multiple servers to prevent overload?',
    'کدام تکنیک ترافیک ورودی را بین چند سرور پخش می‌کند تا فشار بیش از حد ایجاد نشود؟',
    '',
    ['Load balancing','Clustering','Journaling','Tokenization'],
    ['Load balancing','Clustering','Journaling','Tokenization'],
    'Load balancing (NGINX, AWS Elastic Load Balancer) spreads traffic. Clustering makes several nodes act as a unit so another takes over if one fails.',
    'Load balancing (مثل NGINX یا AWS ELB) ترافیک را پخش می‌کند. Clustering چند node را یک واحد می‌کند تا با خرابی یکی، دیگری کار را ادامه دهد.');

  M('7',T5,'In a database cluster one node is primary and others are replicas. If the primary fails, another node takes over. Which HA strategy is this?',
    'در یک cluster دیتابیس یک node اصلی و بقیه replica هستند. اگر node اصلی خراب شود، node دیگری جایش را می‌گیرد. این کدام راهبرد HA است؟',
    '',
    ['Clustering','Obfuscation','Cold site','Parallel testing'],
    ['Clustering','Obfuscation','Cold site','Parallel testing'],
    'Clustering means multiple servers work as a unit; if one fails another takes over without service interruption, removing a single point of failure.',
    'Clustering یعنی چند سرور مثل یک واحد کار می‌کنند و با خرابی یکی، دیگری بدون قطع سرویس ادامه می‌دهد. این کار single point of failure را حذف می‌کند.');

  M('7',T5,'Which site is a fully operational replica of the primary site with real-time data synchronization?',
    'کدام سایت یک کپی کاملاً عملیاتی از سایت اصلی با همگام‌سازی real-time داده است؟',
    'Hot = آماده‌ی فوری، Warm = نیمه‌آماده، Cold = فقط زیرساخت پایه.',
    ['Hot site','Warm site','Cold site','Staging site'],
    ['Hot site','Warm site','Cold site','Staging site'],
    'A hot site can take over immediately with minimal downtime (banks, hospitals). It costs the most.',
    'Hot site می‌تواند فوراً و با حداقل downtime کار را بگیرد (بانک‌ها، بیمارستان‌ها) و گران‌ترین گزینه است.');

  M('7',T5,'A company\'s primary data center is in Toronto and its backup is in Calgary. What is the main benefit?',
    'مرکز داده‌ی اصلی یک شرکت در تورنتو و مرکز بکاپ آن در کلگری است. مهم‌ترین مزیت چیست؟',
    '',
    ['An outage in Ontario can fail over to Alberta with minimal downtime','Both sites always share the same power grid','It removes the need for backups','It eliminates the need for encryption'],
    ['قطعی در انتاریو می‌تواند با حداقل downtime به آلبرتا failover شود','هر دو سایت همیشه از یک شبکه‌ی برق استفاده می‌کنند','نیاز به بکاپ را از بین می‌برد','نیاز به رمزنگاری را از بین می‌برد'],
    'Geographic distribution separates critical services from regional threats such as floods, wildfires, earthquakes and regional power failures, and supports data residency requirements.',
    'توزیع جغرافیایی سرویس‌های حیاتی را از تهدیدهای منطقه‌ای مثل سیل، آتش‌سوزی، زلزله و قطعی برق جدا می‌کند و به الزامات data residency هم کمک می‌کند.');

  M('7',T5,'Why would an organization use both Windows and Linux (platform diversity)?',
    'چرا یک سازمان هم از Windows و هم از Linux استفاده کند (platform diversity)؟',
    'اگر همه چیز یک جور باشد، یک آسیب‌پذیری همه را می‌زند (monoculture).',
    ['To reduce monoculture risk, where one flaw affects every system','To avoid needing any patches','To guarantee zero downtime','To remove the need for firewalls'],
    ['برای کم کردن ریسک monoculture که یک ضعف روی همه‌ی سیستم‌ها اثر بگذارد','برای بی‌نیازی از patch','برای تضمین صفر downtime','برای بی‌نیازی از firewall'],
    'Platform diversity reduces the attack surface and mitigates monoculture vulnerabilities. Multi-cloud similarly avoids vendor lock-in and improves uptime.',
    'Platform diversity attack surface را کم می‌کند و ریسک monoculture را کاهش می‌دهد. multi-cloud هم از vendor lock-in جلوگیری و uptime را بهتر می‌کند.');

  M('7',T5,'What is a main reason to adopt a multi-cloud strategy?',
    'یکی از دلایل اصلی استفاده از راهبرد multi-cloud چیست؟',
    '',
    ['Prevent vendor lock-in and improve failover options','Make every service run on one provider','Eliminate the shared responsibility model','Avoid ever using encryption'],
    ['جلوگیری از vendor lock-in و بهتر کردن گزینه‌های failover','اجرای همه‌ی سرویس‌ها روی یک ارائه‌دهنده','حذف shared responsibility model','هرگز رمزنگاری استفاده نکردن'],
    'Using more than one provider (AWS, Azure, GCP) prevents vendor lock-in, improves uptime through failover and lets you pick best-fit services for cost or performance.',
    'استفاده از بیش از یک ارائه‌دهنده (AWS، Azure، GCP) از vendor lock-in جلوگیری می‌کند، با failover uptime را بهتر می‌کند و امکان انتخاب بهترین سرویس از نظر هزینه یا کارایی را می‌دهد.');

  M('7',T5,'COOP (Continuity of Operations) planning is mainly about:',
    'برنامه‌ریزی COOP (Continuity of Operations) بیشتر درباره‌ی چیست؟',
    '',
    ['Keeping critical services running during disruptions using alternate sites, communication plans and key staff','Encrypting backups with AES-256','Scanning source code for bugs','Choosing Wi-Fi channels'],
    ['ادامه‌ی سرویس‌های حیاتی هنگام اختلال با سایت جایگزین، برنامه‌ی ارتباطی و نیروی کلیدی','رمزنگاری بکاپ با AES-256','اسکن source code برای باگ','انتخاب کانال Wi-Fi'],
    'COOP uses alternate sites, communication plans and key staff, and is tested with tabletop exercises and simulations.',
    'COOP از سایت جایگزین، برنامه‌ی ارتباطی و نیروی کلیدی استفاده می‌کند و با tabletop exercise و simulation تست می‌شود.');

  M('7',T5,'Cross-training staff so critical roles can be covered during a crisis belongs to which part of capacity planning?',
    'آموزش چندمنظوره‌ی کارکنان برای پوشش نقش‌های حیاتی در بحران، به کدام بخش capacity planning مربوط است؟',
    'سه بخش capacity planning: نیروی انسانی، زیرساخت IT، ظرفیت سیستم.',
    ['Human resources (people) capacity','IT infrastructure capacity','System capacity thresholds','Network bandwidth'],
    ['ظرفیت نیروی انسانی','ظرفیت زیرساخت IT','آستانه‌های ظرفیت سیستم','پهنای باند شبکه'],
    'Capacity planning covers people (backup staffing, cross-training), IT infrastructure (scalable servers, storage, bandwidth) and system capacity (monitoring, thresholds, automatic scaling or failover).',
    'Capacity planning سه بخش دارد: نیروی انسانی (جایگزین و cross-training)، زیرساخت IT (سرور، storage، پهنای باند مقیاس‌پذیر) و ظرفیت سیستم (مانیتورینگ، آستانه‌ها، scaling یا failover خودکار).');

  M('7',T6,'Stakeholders walk through a hypothetical ransomware scenario around a table. No systems are touched. What is this?',
    'ذی‌نفعان یک سناریوی فرضی باج‌افزار را دور یک میز مرور می‌کنند و هیچ سیستمی درگیر نمی‌شود. این چیست؟',
    '',
    ['Tabletop exercise','Failover test','Parallel test','Live penetration test'],
    ['Tabletop exercise','Failover test','Parallel test','تست نفوذ زنده'],
    'A tabletop exercise is a discussion-based walkthrough that evaluates preparedness and coordination without affecting systems.',
    'Tabletop exercise مرور گفت‌وگومحور سناریو است که آمادگی و هماهنگی را می‌سنجد و روی سیستم‌ها اثری ندارد.');

  M('7',T6,'A test actively shifts operations from the primary system to the disaster recovery site to validate recovery readiness. What is it?',
    'در یک تست، عملیات از سیستم اصلی به سایت disaster recovery منتقل می‌شود تا آمادگی بازیابی سنجیده شود. این چیست؟',
    '',
    ['Failover testing','Tabletop exercise','Simulation','Parallel testing'],
    ['Failover testing','Tabletop exercise','Simulation','Parallel testing'],
    'Failover testing really moves operations to the backup or DR site. Parallel testing runs both systems at once; simulations mimic incidents without touching production.',
    'Failover testing واقعاً عملیات را به سایت بکاپ یا DR منتقل می‌کند. Parallel testing هر دو سیستم را هم‌زمان اجرا می‌کند و simulation حادثه را بدون دست زدن به production شبیه‌سازی می‌کند.');

  M('7',T6,'Production and backup systems run at the same time to validate replication accuracy and RPO. Which test is this?',
    'سیستم production و بکاپ هم‌زمان اجرا می‌شوند تا دقت replication و RPO بررسی شود. این کدام تست است؟',
    '',
    ['Parallel testing','Tabletop exercise','Failover testing','Static analysis'],
    ['Parallel testing','Tabletop exercise','Failover testing','Static analysis'],
    'Parallel testing is often used for critical systems such as banking to confirm replication accuracy and recovery point objectives.',
    'Parallel testing اغلب برای سیستم‌های حیاتی مثل بانکداری استفاده می‌شود تا دقت replication و RPO تأیید شود.');

  M('7',T6,'A UPS and a generator are both installed in a data center. What is the correct role of the UPS?',
    'در یک data center هم UPS و هم generator نصب شده است. نقش درست UPS کدام است؟',
    'UPS = پل کوتاه‌مدت، Generator = برق بلندمدت.',
    ['Provide instant short-term power until the generator starts','Provide power for several days','Replace the generator','Encrypt data on disk'],
    ['برق فوری کوتاه‌مدت تا روشن شدن generator','برق برای چند روز','جایگزین generator','رمزنگاری داده‌ی دیسک'],
    'A UPS bridges the gap between power failure and generator startup and protects against brownouts. Generators supply long-duration power once the UPS is depleted. Layer both.',
    'UPS فاصله‌ی بین قطع برق تا روشن شدن generator را پر می‌کند و در برابر افت ولتاژ محافظت می‌کند. generator برق بلندمدت می‌دهد. بهترین کار ترکیب هر دو است.');

  M('7',T6,'What does defense in depth mean?',
    'defense in depth (دفاع در عمق) یعنی چه؟',
    '',
    ['Multiple layers of security where each layer compensates for weaknesses in others','One very strong firewall at the perimeter','Encrypting only data at rest','Trusting internal users completely'],
    ['چند لایه‌ی امنیتی که هر لایه ضعف لایه‌های دیگر را جبران می‌کند','یک firewall بسیار قوی در محیط شبکه','رمزنگاری فقط داده‌ی at rest','اعتماد کامل به کاربران داخلی'],
    'Layers include encryption, data classification, high availability, backups, access controls, and monitoring and alerts.',
    'لایه‌ها شامل رمزنگاری، طبقه‌بندی داده، high availability، بکاپ، کنترل دسترسی و مانیتورینگ و هشدار هستند.');

  /* Scenario questions, Module 7 */
  P('7','Disaster recovery sites','Match each description to the correct site type.',
    'هر توضیح را به نوع درست سایت وصل کنید.',
    ['Hot site','Warm site','Cold site'],['Hot site (آماده‌ی فوری)','Warm site (نیمه‌آماده)','Cold site (سرد)'],
    [['Fully operational replica with real-time data sync, takes over immediately',0,'کپی کاملاً عملیاتی با همگام‌سازی real-time که فوراً کار را می‌گیرد'],
     ['Partially equipped, systems pre-installed but off, needs manual steps to activate',1,'تجهیزات نیمه‌کامل، سیستم‌ها نصب ولی خاموش، فعال‌سازی دستی لازم است'],
     ['Only power and HVAC, no live data or systems, lowest cost but longest recovery',2,'فقط برق و تهویه، بدون داده یا سیستم زنده، ارزان‌ترین ولی با طولانی‌ترین زمان بازیابی'],
     ['A bank needs 24/7 availability with minimal downtime',0,'بانکی که دسترسی ۲۴/۷ با حداقل downtime می‌خواهد'],
     ['A remote office space reserved for emergencies that needs full setup and data restoration',2,'فضای اداری دورافتاده برای شرایط اضطراری که نیاز به راه‌اندازی کامل و بازیابی داده دارد']],
    [['Immediate takeover, highest cost','جایگزینی فوری، گران‌ترین'],['Faster than cold, slower than hot','سریع‌تر از cold و کندتر از hot'],['Basic infrastructure only, slowest recovery','فقط زیرساخت پایه، کندترین بازیابی']],
    'Hot is ready now and costs the most, warm is partly ready and needs manual steps, cold is just space and utilities and takes longest. Choose by risk tolerance and recovery time objectives.',
    'Hot همین حالا آماده و گران است، Warm نیمه‌آماده و نیازمند اقدام دستی، Cold فقط فضا و تأسیسات و کندترین است. انتخاب بر اساس تحمل ریسک و RTO است.');

  P('7','Data protection techniques','Match each need to the best data protection technique.',
    'هر نیاز را به بهترین تکنیک حفاظت از داده وصل کنید.',
    ['Encryption','Hashing','Masking','Tokenization','Obfuscation','Segmentation'],
    ['Encryption (رمزنگاری)','Hashing','Masking','Tokenization','Obfuscation','Segmentation'],
    [['Keep a backup unreadable if the storage is stolen',0,'اگر storage دزدیده شد، بکاپ قابل‌خواندن نباشد'],
     ['Detect that a downloaded file was changed',1,'تشخیص اینکه فایل دانلودشده تغییر کرده'],
     ['Show only the last four digits of a card on screen',2,'نمایش فقط چهار رقم آخر کارت روی صفحه'],
     ['Replace card numbers with random values stored in a vault for PCI-DSS',3,'جایگزینی شماره‌ی کارت‌ها با مقدار تصادفی در vault برای PCI-DSS'],
     ['Make JavaScript hard to reverse engineer',4,'سخت کردن reverse engineering کد JavaScript'],
     ['Use VLANs to limit lateral movement between dev, prod and guest',5,'استفاده از VLAN برای محدود کردن lateral movement بین dev، prod و مهمان']],
    [['Converts data to unreadable text for unauthorized users','داده را برای افراد غیرمجاز ناخوانا می‌کند'],['Fixed-length fingerprint for integrity','اثر انگشت با طول ثابت برای یکپارچگی'],['Hides part of the data, still usable','بخشی از داده را پنهان می‌کند ولی قابل استفاده می‌ماند'],['Substitutes data with a token, real value in a vault','داده را با token عوض می‌کند و مقدار واقعی در vault است'],['Makes code or data unintelligible','کد یا داده را نامفهوم می‌کند'],['Divides the network into zones','شبکه را به zone تقسیم می‌کند']],
    'Encryption protects confidentiality, hashing proves integrity, masking hides part of a value, tokenization swaps it for a token kept in a vault, obfuscation hides meaning, segmentation limits movement.',
    'رمزنگاری محرمانگی، hashing یکپارچگی، masking پنهان‌سازی بخشی از مقدار، tokenization جایگزینی با token در vault، obfuscation پنهان‌کردن معنا و segmentation محدود کردن حرکت را تأمین می‌کند.');

  P('7','Resilience testing','Match each scenario to the correct resilience test.',
    'هر سناریو را به تست مقاومت (resilience) درست وصل کنید.',
    ['Tabletop exercise','Simulation','Failover test','Parallel test'],
    ['Tabletop exercise','Simulation','Failover test','Parallel test'],
    [['Managers discuss a flood scenario and who calls whom; no systems are touched',0,'مدیران سناریوی سیل و ترتیب تماس‌ها را بحث می‌کنند و به سیستمی دست نمی‌زنند'],
     ['A hands-on drill mimics a real incident without affecting production',1,'یک تمرین عملی حادثه‌ی واقعی را بدون اثر روی production شبیه‌سازی می‌کند'],
     ['Operations are actually moved from the primary system to the DR site',2,'عملیات واقعاً از سیستم اصلی به سایت DR منتقل می‌شود'],
     ['Production and backup run together to check replication accuracy and RPO',3,'production و بکاپ با هم اجرا می‌شوند تا دقت replication و RPO بررسی شود']],
    [['Discussion only','فقط بحث و مرور'],['Hands-on, production untouched','عملی، بدون دست زدن به production'],['Real switch to backup','جابه‌جایی واقعی به بکاپ'],['Both systems live together','هر دو سیستم همزمان فعال']],
    'Tabletop is discussion, simulation is a controlled hands-on drill, failover is a real switch to the backup site, parallel runs both systems side by side.',
    'Tabletop بحث و مرور است، simulation تمرین عملی کنترل‌شده، failover جابه‌جایی واقعی به سایت بکاپ و parallel اجرای هم‌زمان هر دو سیستم است.');

  /* ================= MODULE 8 ================= */
  var U1='Secure baselines',U2='System hardening',U3='Wireless & site surveys',U4='Mobile devices & MDM',U5='Application security',U6='Asset management';

  M('8',U1,'What is a secure baseline?',
    'secure baseline چیست؟',
    'یک پیکربندی رسمی و تأییدشده که حداقل کنترل‌های امنیتی را تعریف می‌کند.',
    ['A formally approved configuration that defines the minimum security controls a system must meet','A list of all known malware','A backup of the operating system','A firewall rule that blocks all traffic'],
    ['پیکربندی رسمی و تأییدشده که حداقل کنترل‌های امنیتی لازم برای یک سیستم را تعریف می‌کند','فهرست همه‌ی بدافزارهای شناخته‌شده','بکاپ سیستم‌عامل','قانون firewall که کل ترافیک را مسدود می‌کند'],
    'A baseline is the reference configuration for password policy, privileges, firewall rules, logging, software restrictions and update settings. It must be tailored to asset type, risk tolerance and standards such as NIST, CIS Benchmarks or PCI-DSS.',
    'baseline پیکربندی مرجع برای سیاست رمز، سطح دسترسی، قوانین firewall، logging، محدودیت نرم‌افزار و به‌روزرسانی است. باید بر اساس نوع دارایی، تحمل ریسک و استانداردهایی مثل NIST، CIS Benchmarks یا PCI-DSS تنظیم شود.');

  M('8',U1,'Which item would most likely appear in a secure baseline for corporate laptops?',
    'کدام مورد به احتمال زیاد در secure baseline لپ‌تاپ‌های سازمانی قرار می‌گیرد؟',
    '',
    ['Full disk encryption, automatic screen lock, a host firewall and endpoint protection','Local admin rights for every user','Autorun enabled for USB drives','Telnet enabled for remote support'],
    ['رمزنگاری کامل دیسک، قفل خودکار صفحه، firewall میزبان و endpoint protection','دسترسی local admin برای همه‌ی کاربران','autorun فعال برای USB','Telnet فعال برای پشتیبانی از راه دور'],
    'Example baseline: BitLocker, screen lock after 5 minutes, disabled USB mass storage, host-based firewall and endpoint protection software.',
    'نمونه‌ی baseline: BitLocker، قفل صفحه بعد از ۵ دقیقه، غیرفعال کردن USB mass storage، firewall میزبان و نرم‌افزار endpoint protection.');

  M('8',U1,'Which resources are commonly used as frameworks for building baselines?',
    'کدام منابع معمولاً به‌عنوان چارچوب برای ساخت baseline استفاده می‌شوند؟',
    '',
    ['CIS Benchmarks and NIST 800-53','Ekahau and NetSpot','SonarQube and Fortify','DBAN and NIST SP 800-88 only'],
    ['CIS Benchmarks و NIST 800-53','Ekahau و NetSpot','SonarQube و Fortify','فقط DBAN و NIST SP 800-88'],
    'Baselines should align with best practices and frameworks such as CIS Benchmarks or NIST 800-53 and be tailored for each platform.',
    'baseline باید با بهترین رویه‌ها و چارچوب‌هایی مثل CIS Benchmarks یا NIST 800-53 هم‌راستا باشد و برای هر پلتفرم تنظیم شود.');

  M('8',U1,'While establishing a baseline for a Windows server, which action reduces the attack surface?',
    'هنگام ساخت baseline برای یک Windows server کدام اقدام attack surface را کم می‌کند؟',
    '',
    ['Disabling legacy services and protocols such as Telnet, FTP and SMBv1','Enabling every optional service','Sharing the admin password with the team','Opening ports 135 and 445 to the internet'],
    ['غیرفعال کردن سرویس‌ها و پروتکل‌های قدیمی مثل Telnet، FTP و SMBv1','فعال کردن همه‌ی سرویس‌های اختیاری','به اشتراک گذاشتن رمز admin با تیم','باز کردن پورت‌های 135 و 445 به اینترنت'],
    'Establishing a baseline means defining settings, removing unnecessary services and software, applying least privilege and documenting everything under version control.',
    'ساخت baseline یعنی تعریف تنظیمات، حذف سرویس و نرم‌افزار غیرضروری، اعمال least privilege و مستندسازی با version control.');

  M('8',U1,'Which approach best deploys a secure baseline consistently across hundreds of endpoints?',
    'کدام روش بهترین راه برای اعمال یکنواخت secure baseline روی صدها endpoint است؟',
    'اتوماسیون = تکرارپذیری و خطای انسانی کمتر.',
    ['Automation with Ansible, Puppet, Endpoint Configuration Manager or pre-hardened images','Manually configuring each laptop from memory','Asking users to harden their own devices','Printing a checklist for each user'],
    ['اتوماسیون با Ansible، Puppet، Endpoint Configuration Manager یا image از پیش سخت‌سازی‌شده','تنظیم دستی هر لپ‌تاپ از حافظه','از کاربران بخواهیم دستگاهشان را خودشان سخت‌سازی کنند','چاپ checklist برای هر کاربر'],
    'Scripts (PowerShell, Bash), configuration tools and system imaging maximize consistency and reduce human error.',
    'اسکریپت (PowerShell، Bash)، ابزارهای پیکربندی و system imaging یکنواختی را بیشتر و خطای انسانی را کمتر می‌کنند.');

  M('8',U1,'A quarterly audit finds laptops that no longer match the approved settings after software updates. What is this problem called, and what fixes it?',
    'یک ممیزی سه‌ماهه نشان می‌دهد لپ‌تاپ‌ها بعد از به‌روزرسانی‌ها دیگر با تنظیمات تأییدشده مطابقت ندارند. اسم این مشکل چیست و چه چیزی آن را درست می‌کند؟',
    'drift یعنی فاصله گرفتن تنظیمات واقعی از baseline.',
    ['Configuration drift, fixed by regular reviews and re-applying the baseline','Data sovereignty, fixed by moving data','Monoculture, fixed by buying more servers','Session hijacking, fixed by cookies'],
    ['Configuration drift که با بازبینی منظم و اعمال دوباره‌ی baseline درست می‌شود','Data sovereignty که با جابه‌جایی داده درست می‌شود','Monoculture که با خرید سرور بیشتر درست می‌شود','Session hijacking که با cookie درست می‌شود'],
    'Baselines are not static. Maintenance includes regular drift reviews, patching and testing and documenting changes before applying them organization-wide.',
    'baseline ثابت نیست. نگهداری شامل بازبینی منظم drift، patch و تست و مستندسازی تغییرات قبل از اعمال در کل سازمان است.');

  M('8',U2,'What is the goal of system hardening?',
    'هدف از system hardening (سخت‌سازی سیستم) چیست؟',
    '',
    ['Minimize vulnerabilities and the attack surface','Increase the number of running services','Speed up the network','Replace backups'],
    ['حداقل کردن آسیب‌پذیری‌ها و attack surface','بیشتر کردن تعداد سرویس‌های فعال','سریع‌تر کردن شبکه','جایگزین کردن بکاپ'],
    'Hardening disables unneeded services, removes unused software, enforces access controls and applies secure configurations on endpoints, network devices, cloud infrastructure and industrial systems.',
    'سخت‌سازی سرویس‌های غیرضروری را غیرفعال، نرم‌افزار بلااستفاده را حذف، کنترل دسترسی را اعمال و پیکربندی امن را روی endpoint، دستگاه شبکه، cloud و سیستم‌های صنعتی اجرا می‌کند.');

  M('8',U2,'A laptop with full disk encryption (BitLocker or LUKS) is stolen. What is the main benefit?',
    'لپ‌تاپی که رمزنگاری کامل دیسک (BitLocker یا LUKS) دارد دزدیده شده است. مهم‌ترین مزیت چیست؟',
    '',
    ['Data at rest stays protected from exposure','The laptop cannot be powered on','All malware is removed','The stolen laptop is automatically returned'],
    ['داده‌ی at rest از افشا محافظت‌شده می‌ماند','لپ‌تاپ اصلاً روشن نمی‌شود','همه‌ی بدافزارها پاک می‌شوند','لپ‌تاپ دزدیده‌شده خودکار برمی‌گردد'],
    'Full disk encryption protects data at rest, so even if the device is lost or stolen the likelihood of data exposure is greatly reduced.',
    'رمزنگاری کامل دیسک از داده‌ی at rest محافظت می‌کند؛ پس حتی اگر دستگاه گم یا دزدیده شود احتمال افشای داده خیلی کم می‌شود.');

  M('8',U2,'Which AWS service records API calls for auditing, and which one evaluates resources against organizational policy?',
    'کدام سرویس AWS تماس‌های API را برای ممیزی ثبت می‌کند و کدام منابع را با سیاست سازمان مقایسه می‌کند؟',
    'CloudTrail = چه کسی چه کرد. Config = وضعیت منابع با سیاست می‌خواند یا نه.',
    ['CloudTrail records API calls; AWS Config evaluates compliance','AWS Config records API calls; CloudTrail evaluates compliance','KMS records API calls; CloudTrail encrypts data','Both only monitor CPU usage'],
    ['CloudTrail تماس‌های API را ثبت می‌کند و AWS Config انطباق را ارزیابی می‌کند','AWS Config تماس‌های API را ثبت و CloudTrail انطباق را ارزیابی می‌کند','KMS تماس‌های API را ثبت و CloudTrail داده را رمزنگاری می‌کند','هر دو فقط مصرف CPU را مانیتور می‌کنند'],
    'CloudTrail (or Azure Monitor) tracks changes and user actions. AWS Config (or Azure Policy) detects non-compliant resource states. Together with strong IAM, they help prevent misconfiguration.',
    'CloudTrail (یا Azure Monitor) تغییرات و اقدامات کاربران را ردیابی می‌کند. AWS Config (یا Azure Policy) وضعیت غیرمنطبق منابع را شناسایی می‌کند. در کنار IAM قوی از misconfiguration جلوگیری می‌کنند.');

  M('8',U2,'Which action best hardens a newly installed IP camera or smart thermostat?',
    'کدام اقدام بهترین سخت‌سازی برای یک دوربین IP یا ترموستات هوشمند تازه نصب‌شده است؟',
    '',
    ['Change default credentials, update firmware and place it on a separate VLAN','Leave default credentials so support can log in','Connect it to the same VLAN as the file server','Enable every wireless interface'],
    ['تغییر رمز پیش‌فرض، به‌روزرسانی firmware و قرار دادن آن در VLAN جدا','نگه داشتن رمز پیش‌فرض تا پشتیبانی بتواند وارد شود','وصل کردن آن به همان VLAN فایل‌سرور','فعال کردن همه‌ی رابط‌های بی‌سیم'],
    'IoT devices often lack built-in security and cannot run security tools, so network isolation (VLAN, outbound-only access), strong credentials, firmware updates and disabling unused ports matter more.',
    'دستگاه‌های IoT معمولاً امنیت داخلی ندارند و ابزار امنیتی روی‌شان نصب نمی‌شود، پس ایزوله‌سازی شبکه (VLAN، فقط outbound)، رمز قوی، به‌روزرسانی firmware و بستن پورت‌های بلااستفاده مهم‌تر است.');

  M('8',U2,'Why is patching ICS/SCADA systems done cautiously, and what is a preferred protection?',
    'چرا patch کردن سیستم‌های ICS/SCADA با احتیاط انجام می‌شود و یک روش محافظت ترجیحی چیست؟',
    'این سیستم‌ها برای availability و کارایی ساخته شده‌اند، نه امنیت.',
    ['Updates can disrupt operations, so only tested firmware is applied and the network is air-gapped or firewalled','They never need updates','Patching is illegal for them','Encryption is impossible so nothing can be done'],
    ['به‌روزرسانی می‌تواند عملیات را مختل کند؛ پس فقط firmware تست‌شده اعمال می‌شود و شبکه air-gap یا پشت firewall است','هرگز به به‌روزرسانی نیاز ندارند','patch کردنشان غیرقانونی است','رمزنگاری ممکن نیست پس کاری نمی‌شود کرد'],
    'ICS, SCADA and RTOS are built for availability and performance. Hardening uses isolation (air gap or firewalled segments), strict ACLs, disabling default services, physical security and cautious, tested patching. Failures can cause physical harm.',
    'ICS، SCADA و RTOS برای availability و کارایی ساخته شده‌اند. سخت‌سازی شامل ایزوله‌سازی (air gap یا بخش پشت firewall)، ACL سخت‌گیرانه، غیرفعال کردن سرویس‌های پیش‌فرض، امنیت فیزیکی و patch آزمایش‌شده با احتیاط است. خطا می‌تواند آسیب فیزیکی بزند.');

  M('8',U3,'What is the main purpose of a wireless site survey?',
    'هدف اصلی site survey بی‌سیم چیست؟',
    '',
    ['Find optimal access point placement, RF dead zones and interference sources','Encrypt the Wi-Fi password','Create user accounts','Patch the access points'],
    ['پیدا کردن بهترین محل access point، نقاط کور RF و منابع تداخل','رمزنگاری رمز Wi-Fi','ساخت حساب کاربری','patch کردن access pointها'],
    'A site survey evaluates the physical and RF environment before deploying or upgrading Wi-Fi: AP placement, dead zones and interference such as microwaves, elevators or neighbouring networks.',
    'site survey قبل از راه‌اندازی یا ارتقای Wi-Fi محیط فیزیکی و RF را ارزیابی می‌کند: محل AP، نقاط کور و تداخل مثل مایکروویو، آسانسور یا شبکه‌های مجاور.');

  M('8',U3,'Which site survey type uses software simulations to model RF behaviour in a virtual floor plan?',
    'کدام نوع site survey با شبیه‌سازی نرم‌افزاری رفتار RF را روی یک نقشه‌ی مجازی مدل می‌کند؟',
    'Passive = فقط گوش می‌دهد. Active = وصل می‌شود و تست می‌کند. Predictive = شبیه‌سازی.',
    ['Predictive','Passive','Active','Reactive'],
    ['Predictive','Passive','Active','Reactive'],
    'Passive monitors existing wireless activity without connecting. Active connects to test signal strength and throughput. Predictive models RF behaviour with software.',
    'Passive بدون اتصال فعالیت بی‌سیم موجود را مانیتور می‌کند. Active وصل می‌شود و قدرت سیگنال و throughput را تست می‌کند. Predictive با نرم‌افزار رفتار RF را مدل می‌کند.');

  M('8',U3,'On a Wi-Fi heat map, which colour usually represents weak signal?',
    'روی heat map شبکه‌ی Wi-Fi معمولاً کدام رنگ سیگنال ضعیف را نشان می‌دهد؟',
    '',
    ['Red','Green','Blue','White'],
    ['قرمز','سبز','آبی','سفید'],
    'Heat maps show signal strength (green strong, red weak) so you can find dead zones, interference or oversaturation and adjust AP power and position. Ekahau is an example tool.',
    'heat map قدرت سیگنال را نشان می‌دهد (سبز قوی، قرمز ضعیف) تا نقاط کور، تداخل یا اشباع پیدا شود و توان و محل AP تنظیم شود. Ekahau نمونه‌ی ابزار است.');

  M('8',U3,'Two access points in a meeting room overlap on the same channel and VoIP quality drops. What is the best fix?',
    'دو access point در اتاق جلسه روی یک کانال هم‌پوشانی دارند و کیفیت VoIP افت کرده است. بهترین راه‌حل چیست؟',
    '',
    ['Reconfigure the APs to use non-overlapping channels','Disable encryption','Add more APs on the same channel','Switch to WEP'],
    ['AP ها را روی کانال‌های بدون هم‌پوشانی تنظیم کنیم','رمزنگاری را غیرفعال کنیم','AP بیشتری روی همان کانال اضافه کنیم','به WEP برویم'],
    'Signal overlap causes channel interference and degraded performance. Site surveys reveal it, and AP channels or placement are then adjusted.',
    'هم‌پوشانی سیگنال باعث تداخل کانال و افت کارایی می‌شود. site survey آن را نشان می‌دهد و بعد کانال یا محل AP اصلاح می‌شود.');

  M('8',U3,'Which Wi-Fi security setup is best for a corporate network?',
    'کدام تنظیم امنیتی Wi-Fi برای شبکه‌ی سازمانی بهترین است؟',
    'Enterprise = احراز هویت با RADIUS، نه یک رمز مشترک.',
    ['WPA3-Enterprise with RADIUS','WEP with a shared key','Open network with a captive portal only','WPA2-PSK with a shared password'],
    ['WPA3-Enterprise همراه با RADIUS','WEP با کلید مشترک','شبکه‌ی باز فقط با captive portal','WPA2-PSK با رمز مشترک'],
    'WPA3-Enterprise combines RADIUS (centralized AAA) with strong encryption such as AES-GCMP, giving mutual authentication, dynamic session keys and user accountability. Disable WEP, WPA and WPA2-PSK.',
    'WPA3-Enterprise، RADIUS (AAA متمرکز) را با رمزنگاری قوی مثل AES-GCMP ترکیب می‌کند و احراز هویت دوطرفه، کلید نشست پویا و پاسخ‌گویی کاربر می‌دهد. WEP، WPA و WPA2-PSK باید غیرفعال شوند.');

  M('8',U3,'RADIUS provides which services?',
    'RADIUS چه سرویس‌هایی را فراهم می‌کند؟',
    '',
    ['Centralized authentication, authorization and accounting (AAA)','Disk encryption and key rotation','Static code analysis','Asset tracking with RFID'],
    ['احراز هویت، مجوزدهی و حسابرسی متمرکز (AAA)','رمزنگاری دیسک و چرخش کلید','تحلیل ایستای کد','ردیابی دارایی با RFID'],
    'RADIUS provides centralized AAA. TLS or IPsec secure communication between endpoints and authentication servers.',
    'RADIUS سرویس AAA متمرکز می‌دهد. TLS یا IPsec ارتباط بین endpoint و سرور احراز هویت را امن می‌کند.');

  M('8',U3,'A user sees a nearby Wi-Fi network using the company name that they do not recognize. Which risk best matches?',
    'کاربری شبکه‌ی Wi-Fi مجاوری با نام شرکت می‌بیند که نمی‌شناسد. کدام ریسک بیشتر می‌خورد؟',
    '',
    ['A rogue access point enabling eavesdropping','SIM swapping','Buffer overflow','Cold start'],
    ['Rogue access point که امکان شنود می‌دهد','SIM swapping','Buffer overflow','Cold start'],
    'Wi-Fi risks include weak encryption, rogue access points and eavesdropping. Cellular risks are SIM swapping and rogue base stations. Bluetooth needs secure pairing and discoverability turned off.',
    'ریسک‌های Wi-Fi شامل رمزنگاری ضعیف، rogue access point و شنود است. ریسک سلولی SIM swapping و rogue base station است. Bluetooth به pairing امن و خاموش کردن discoverability نیاز دارد.');

  M('8',U4,'An employee\'s phone with corporate email is lost. Which tool lets IT remotely wipe corporate data and enforce a password policy?',
    'گوشی یک کارمند که ایمیل سازمانی دارد گم شده است. کدام ابزار به IT اجازه می‌دهد داده‌ی سازمانی را از راه دور پاک کند و سیاست رمز را اعمال کند؟',
    '',
    ['Mobile Device Management (MDM)','Static code analysis','A heat map','A load balancer'],
    ['Mobile Device Management (MDM)','تحلیل ایستای کد','heat map','load balancer'],
    'MDM (for example Microsoft Intune or VMware Workspace ONE) enforces policies, remotely wipes lost devices and controls app installs and updates.',
    'MDM (مثل Microsoft Intune یا VMware Workspace ONE) سیاست‌ها را اعمال می‌کند، دستگاه گم‌شده را از راه دور پاک می‌کند و نصب و به‌روزرسانی برنامه را کنترل می‌کند.');

  M('8',U4,'Employees use their personal phones for work. This is cost-effective but gives limited security control. Which model is it?',
    'کارمندان از گوشی شخصی‌شان برای کار استفاده می‌کنند. این مدل ارزان است ولی کنترل امنیتی محدودی دارد. کدام مدل است؟',
    'BYOD = دستگاه مال کاربر است.',
    ['BYOD','COPE','CYOD','MDM'],
    ['BYOD','COPE','CYOD','MDM'],
    'BYOD: personal devices, cheap, limited control. COPE: company-owned, personally enabled. CYOD: user picks from company-approved devices.',
    'BYOD: دستگاه شخصی، ارزان، کنترل محدود. COPE: مال شرکت ولی کاربر می‌تواند شخصی‌سازی کند. CYOD: کاربر از میان دستگاه‌های تأییدشده‌ی شرکت انتخاب می‌کند.');

  M('8',U4,'The company owns the phone, but the employee may personalize it. Which deployment model is this?',
    'گوشی مال شرکت است ولی کارمند می‌تواند آن را شخصی‌سازی کند. این کدام مدل استقرار است؟',
    '',
    ['COPE','BYOD','CYOD','SaaS'],
    ['COPE','BYOD','CYOD','SaaS'],
    'COPE (Corporate-Owned, Personally Enabled) gives stronger security with some flexibility. In CYOD the user chooses from a company-approved list.',
    'COPE (Corporate-Owned, Personally Enabled) امنیت قوی‌تر با کمی انعطاف می‌دهد. در CYOD کاربر از فهرست دستگاه‌های تأییدشده انتخاب می‌کند.');

  M('8',U5,'Which control best prevents SQL injection, XSS and command injection at the application layer?',
    'کدام کنترل بهترین راه جلوگیری از SQL injection، XSS و command injection در لایه‌ی اپلیکیشن است؟',
    '',
    ['Validating and sanitizing all user input','Using a longer Wi-Fi password','Disabling disk encryption','Adding more backups'],
    ['اعتبارسنجی و پاک‌سازی (sanitize) همه‌ی ورودی کاربر','رمز Wi-Fi طولانی‌تر','غیرفعال کردن رمزنگاری دیسک','بکاپ بیشتر'],
    'Input validation ensures user input matches the expected format and length and blocks scripts, SQL or shell commands. OWASP Top 10 is the usual reference for secure coding.',
    'اعتبارسنجی ورودی مطمئن می‌شود ورودی کاربر قالب و طول مورد انتظار را دارد و اسکریپت، SQL یا دستور shell را مسدود می‌کند. OWASP Top 10 مرجع معمول کدنویسی امن است.');

  M('8',U5,'Which cookie flag stops JavaScript from reading the cookie and helps mitigate XSS?',
    'کدام flag کوکی جلوی خواندن کوکی توسط JavaScript را می‌گیرد و به کاهش XSS کمک می‌کند؟',
    'HttpOnly = JS نمی‌بیند. Secure = فقط HTTPS. SameSite = علیه CSRF.',
    ['HttpOnly','Secure','SameSite','Persistent'],
    ['HttpOnly','Secure','SameSite','Persistent'],
    'HttpOnly blocks JavaScript access. Secure sends the cookie only over HTTPS. SameSite reduces CSRF risk.',
    'HttpOnly دسترسی JavaScript را می‌بندد. Secure کوکی را فقط روی HTTPS می‌فرستد. SameSite ریسک CSRF را کم می‌کند.');

  M('8',U5,'A tool scans source code for insecure patterns without executing it, early in the development lifecycle. What is it?',
    'ابزاری در مراحل اولیه‌ی توسعه، source code را بدون اجرا کردن برای الگوهای ناامن اسکن می‌کند. این چیست؟',
    '',
    ['Static code analysis (SAST) such as SonarQube','Dynamic penetration test','Sandboxing','Code signing'],
    ['تحلیل ایستای کد (SAST) مثل SonarQube','تست نفوذ پویا','Sandboxing','Code signing'],
    'Static analysis (SonarQube, Fortify, Checkmarx) finds bugs and vulnerabilities without running the code.',
    'تحلیل ایستا (SonarQube، Fortify، Checkmarx) باگ و آسیب‌پذیری را بدون اجرای کد پیدا می‌کند.');

  M('8',U5,'What does code signing provide?',
    'code signing چه چیزی را فراهم می‌کند؟',
    '',
    ['Verification of the code\'s authenticity and integrity','Faster execution','Automatic bug fixing','Network segmentation'],
    ['تأیید اصالت و یکپارچگی کد','اجرای سریع‌تر','رفع خودکار باگ','segmentation شبکه'],
    'Code signing uses certificates (GPG, EV certificates) to verify authenticity and integrity, detect tampering and build trust in released software.',
    'code signing با گواهی (GPG، EV certificate) اصالت و یکپارچگی را تأیید می‌کند، دست‌کاری را تشخیص می‌دهد و اعتماد به نرم‌افزار منتشرشده را بالا می‌برد.');

  M('8',U5,'A suspicious file is run inside a virtual machine while system calls and network activity are watched. Which two practices are combined?',
    'یک فایل مشکوک داخل یک ماشین مجازی اجرا می‌شود و رفتار آن (system call و شبکه) زیر نظر است. کدام دو کار ترکیب شده است؟',
    '',
    ['Sandboxing and monitoring','Tokenization and masking','Failover and parallel testing','BYOD and COPE'],
    ['Sandboxing و monitoring','Tokenization و masking','Failover و parallel testing','BYOD و COPE'],
    'Sandboxing isolates untrusted apps in VMs or containers so they cannot affect the host. Monitoring (SIEM, EDR, HIDS/NIDS) watches behaviour and alerts on deviations from the baseline.',
    'Sandboxing برنامه‌ی نامطمئن را در VM یا container جدا می‌کند تا روی میزبان اثر نگذارد. Monitoring (SIEM، EDR، HIDS/NIDS) رفتار را زیر نظر دارد و در انحراف از baseline هشدار می‌دهد.');

  M('8',U5,'Which pair is used at runtime to detect and block exploits against a web application?',
    'کدام جفت در زمان اجرا برای تشخیص و مسدود کردن exploit علیه یک اپلیکیشن وب استفاده می‌شود؟',
    '',
    ['RASP and a WAF','SAST and code signing','DBAN and degaussing','CMDB and RFID'],
    ['RASP و WAF','SAST و code signing','DBAN و degaussing','CMDB و RFID'],
    'Runtime protection uses Runtime Application Self-Protection (RASP) and Web Application Firewalls (WAFs).',
    'محافظت زمان اجرا از RASP (Runtime Application Self-Protection) و WAF استفاده می‌کند.');

  M('8',U6,'In which phase of the asset lifecycle are drives wiped, recycled or destroyed?',
    'در کدام فاز چرخه‌ی عمر دارایی دیسک‌ها پاک، بازیافت یا نابود می‌شوند؟',
    'ترتیب: Procurement ← Deployment ← Tracking ← Maintenance ← Disposal.',
    ['Disposal','Procurement','Deployment','Tracking'],
    ['Disposal (دفع)','Procurement (تأمین)','Deployment (استقرار)','Tracking (ردیابی)'],
    'Phases: procurement, deployment, tracking, maintenance, disposal. Proper disposal prevents data breaches and non-compliance.',
    'فازها: procurement، deployment، tracking، maintenance، disposal. دفع درست از نشت داده و عدم انطباق جلوگیری می‌کند.');

  M('8',U6,'Which items are commonly used to track hardware and software assets in real time?',
    'کدام موارد معمولاً برای ردیابی لحظه‌ای دارایی‌های سخت‌افزاری و نرم‌افزاری استفاده می‌شوند؟',
    '',
    ['Barcodes, RFID tags and a CMDB','Heat maps and site surveys','Cookies and tokens','Snapshots and journals'],
    ['بارکد، RFID و CMDB','heat map و site survey','cookie و token','snapshot و journal'],
    'Tracking uses barcodes, RFID or a Configuration Management Database (ServiceNow CMDB, Lansweeper, SCCM). Asset management also prevents shadow IT and supports compliance.',
    'ردیابی با بارکد، RFID یا Configuration Management Database (مثل ServiceNow CMDB، Lansweeper، SCCM) انجام می‌شود. مدیریت دارایی از shadow IT هم جلوگیری و انطباق را پشتیبانی می‌کند.');

  M('8',U6,'Which standard provides guidance for sanitizing data on retired media?',
    'کدام استاندارد راهنمای پاک‌سازی داده روی رسانه‌های از رده خارج‌شده را می‌دهد؟',
    '',
    ['NIST SP 800-88','NIST SP 800-53 only','PCI-DSS 4.0 only','OWASP Top 10'],
    ['NIST SP 800-88','فقط NIST SP 800-53','فقط PCI-DSS 4.0','OWASP Top 10'],
    'Align disposal with NIST SP 800-88: secure erase tools (DBAN), physical destruction (shredding, degaussing, crushing) and destruction certificates for compliance tracking.',
    'دفع باید با NIST SP 800-88 هم‌راستا باشد: ابزار secure erase (مثل DBAN)، نابودی فیزیکی (خردکردن، degaussing، له کردن) و گواهی نابودی برای ردیابی انطباق.');

  /* Scenario questions, Module 8 */
  P('8','Mobile deployment models','Match each description to the correct mobile deployment model.',
    'هر توضیح را به مدل استقرار موبایل درست وصل کنید.',
    ['BYOD','COPE','CYOD'],['BYOD (دستگاه شخصی)','COPE (مال شرکت، شخصی‌سازی مجاز)','CYOD (انتخاب از فهرست شرکت)'],
    [['Employees use their own phones; cheap, but limited security control',0,'کارمندان از گوشی خودشان استفاده می‌کنند؛ ارزان ولی کنترل امنیتی محدود'],
     ['The company buys and owns the phone, and the user may personalize it',1,'شرکت گوشی را می‌خرد و مالک است و کاربر می‌تواند شخصی‌سازی کند'],
     ['The user picks a phone from a company-approved list',2,'کاربر گوشی را از فهرست تأییدشده‌ی شرکت انتخاب می‌کند'],
     ['Balanced security and user choice',2,'تعادل بین امنیت و انتخاب کاربر'],
     ['Stronger security with some flexibility, company-owned',1,'امنیت قوی‌تر با کمی انعطاف، مالکیت شرکت']],
    [['User-owned device','دستگاه متعلق به کاربر'],['Company-owned, personally enabled','مال شرکت با امکان شخصی‌سازی'],['User chooses from approved devices','کاربر از دستگاه‌های تأییدشده انتخاب می‌کند']],
    'BYOD is user-owned. COPE is company-owned with personal use allowed. CYOD lets the user choose from an approved list. Each has different security, privacy and management trade-offs.',
    'BYOD مال کاربر است. COPE مال شرکت با اجازه‌ی استفاده‌ی شخصی. CYOD انتخاب از فهرست تأییدشده. هر کدام مبادله‌ی متفاوتی بین امنیت، حریم خصوصی و مدیریت دارد.');

  P('8','Secure cookies','Match each need to the correct cookie attribute.',
    'هر نیاز را به ویژگی (attribute) درست کوکی وصل کنید.',
    ['HttpOnly','Secure','SameSite'],['HttpOnly','Secure','SameSite'],
    [['Prevent JavaScript from reading the cookie to mitigate XSS',0,'جلوگیری از خواندن کوکی توسط JavaScript برای کاهش XSS'],
     ['Make sure the cookie is sent only over HTTPS',1,'مطمئن شدن از اینکه کوکی فقط روی HTTPS فرستاده شود'],
     ['Reduce the risk of CSRF',2,'کم کردن ریسک CSRF'],
     ['Stop a malicious script on the page from stealing the session cookie',0,'جلوگیری از دزدیده شدن کوکی نشست توسط اسکریپت مخرب صفحه'],
     ['Prevent the cookie leaking over plain HTTP on public Wi-Fi',1,'جلوگیری از لو رفتن کوکی روی HTTP ساده در Wi-Fi عمومی']],
    [['Blocks JavaScript access','دسترسی JavaScript را می‌بندد'],['HTTPS only','فقط HTTPS'],['Limits cross-site sending, reduces CSRF','ارسال بین‌سایتی را محدود می‌کند و CSRF را کم می‌کند']],
    'HttpOnly hides the cookie from scripts (XSS), Secure restricts it to HTTPS, SameSite limits cross-site requests (CSRF).',
    'HttpOnly کوکی را از اسکریپت پنهان می‌کند (XSS)، Secure آن را به HTTPS محدود می‌کند و SameSite درخواست‌های بین‌سایتی را محدود می‌کند (CSRF).');

  P('8','Site survey types','Match each description to the correct survey type.',
    'هر توضیح را به نوع درست site survey وصل کنید.',
    ['Passive','Active','Predictive'],['Passive (غیرفعال)','Active (فعال)','Predictive (پیش‌بینی‌کننده)'],
    [['Monitors existing wireless activity without connecting to the network',0,'فعالیت بی‌سیم موجود را بدون اتصال به شبکه مانیتور می‌کند'],
     ['Connects to the network to test signal strength and throughput',1,'برای تست قدرت سیگنال و throughput به شبکه وصل می‌شود'],
     ['Uses software to model RF behaviour on a virtual floor plan before anything is installed',2,'قبل از نصب هر چیز، با نرم‌افزار رفتار RF را روی نقشه‌ی مجازی مدل می‌کند'],
     ['Walking around with a laptop and listening for nearby networks and interference',0,'گشتن با لپ‌تاپ و شنیدن شبکه‌ها و تداخل اطراف'],
     ['Planning AP placement for a new building that does not exist yet',2,'برنامه‌ریزی محل AP برای ساختمانی که هنوز ساخته نشده']],
    [['Listens only','فقط گوش می‌دهد'],['Connects and measures','وصل می‌شود و اندازه می‌گیرد'],['Simulation in software','شبیه‌سازی در نرم‌افزار']],
    'Passive listens without connecting, active connects and measures real throughput, predictive simulates RF in software. Tools include Ekahau, NetSpot, AirMagnet, Kismet and WiFi Analyzer.',
    'Passive بدون اتصال گوش می‌دهد، Active وصل می‌شود و throughput واقعی را می‌سنجد، Predictive RF را در نرم‌افزار شبیه‌سازی می‌کند. ابزارها: Ekahau، NetSpot، AirMagnet، Kismet و WiFi Analyzer.');
})();
