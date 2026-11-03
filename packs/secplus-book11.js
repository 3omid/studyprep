/* Security+ extension: Section B11, matched to Chapter 11 ("Endpoint Security") of the course
   textbook (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written
   for the chapter's objectives (1.4, 2.3, 2.5, 3.1, 4.1, 4.2, 4.4, 4.5); no text from the book is copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secbook'});
  if(!pack)return;
  pack.sections['11']={en:'Endpoint security',fa:'امنیت Endpoint'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b11_'+(++n),sec:'11',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Hardware & boot',T2='Endpoint tools',T3='Hardening',T4='Embedded & IoT',T5='Assets & disposal';

  /* ---- Hardware & boot ---- */
  M(T1,'A vendor still sells spare parts and security fixes for a switch model, but has announced it will stop making new units. A year later it stops all updates. What is the switch called after updates stop?',
    'فروشنده هنوز قطعه و وصله‌ی امنیتی برای یک مدل سوئیچ می‌دهد ولی اعلام کرده دیگر آن را نمی‌سازد. یک سال بعد همه‌ی آپدیت‌ها را قطع می‌کند. بعد از قطع آپدیت به این سوئیچ چه می‌گویند؟',
    'وقتی دیگر هیچ پشتیبانی‌ای نیست.',
    ['Legacy (unsupported)','End of sales','End of life (still supported)','Firmware-locked'],
    ['Legacy (بدون پشتیبانی)','End of sales (پایان فروش)','End of life (هنوز پشتیبانی دارد)','Firmware-locked (اصطلاح درسی نیست)'],
    'In the book\'s terms, end of sales is the last sale date, end of life means no longer sold but still supported, end of support is the last update date, and legacy describes hardware or software that is no longer supported. Unsupported devices need compensating controls such as isolation.',
    'طبق تعریف کتاب: End of sales آخرین تاریخ فروش است، End of life یعنی دیگر فروخته نمی‌شود ولی هنوز پشتیبانی دارد، End of support آخرین تاریخ آپدیت است و Legacy یعنی بدون پشتیبانی. برای دستگاه بدون پشتیبانی باید کنترل جبرانی (مثل جداسازی) گذاشت.');

  M(T1,'Malware is written into a laptop\'s SPI flash chip. The team reinstalls the operating system and replaces the disk, but the infection returns. Why?',
    'بدافزاری داخل چیپ SPI flash یک لپ‌تاپ نوشته شده. تیم سیستم‌عامل را دوباره نصب می‌کند و دیسک را عوض می‌کند، ولی آلودگی برمی‌گردد. چرا؟',
    'بدافزار کجا نشسته؟ روی دیسک یا روی خود سخت‌افزار؟',
    ['It lives in firmware, which an OS reinstall does not touch','The new disk came pre-infected','The OS installer was not patched','The TPM re-installed it'],
    ['در Firmware است و نصب دوباره‌ی سیستم‌عامل به آن دست نمی‌زند','دیسک جدید از قبل آلوده بوده','نصب‌کننده‌ی سیستم‌عامل وصله نشده','TPM دوباره نصبش کرده'],
    'Firmware malware (like the MoonBounce UEFI implant) survives reboots, disk swaps and OS reinstalls because it sits in the board\'s flash memory. Defenses are firmware validation, secure/measured boot and trusted firmware updates.',
    'بدافزار Firmware (مثل MoonBounce در UEFI) روی حافظه‌ی فلش مادربورد است، پس با ری‌استارت، عوض کردن دیسک یا نصب دوباره‌ی سیستم‌عامل پاک نمی‌شود. راه دفاع: بررسی صحت Firmware، Secure/Measured boot و آپدیت Firmware فقط از منبع مطمئن.');

  M(T1,'Which boot feature refuses to load a bootloader or driver whose signature is not in the trusted signature database?',
    'کدام ویژگی بوت، Bootloader یا درایوری را که امضایش در پایگاه امضاهای مورد اعتماد نیست بارگذاری نمی‌کند؟',
    'این یکی «جلوگیری» می‌کند، نه فقط ثبت.',
    ['Secure Boot','Measured Boot','Remote attestation','BIOS password'],
    ['Secure Boot','Measured Boot','Remote attestation (تأیید از راه دور)','رمز BIOS'],
    'UEFI Secure Boot checks each boot component against the signature database (and the revoked list) and blocks untrusted code. Measured Boot does not block anything; it hashes each component into the TPM so the state can be checked later.',
    'Secure Boot در UEFI هر جزء بوت را با پایگاه امضا (و فهرست امضاهای باطل‌شده) مقایسه می‌کند و کد نامعتبر را اجرا نمی‌کند. Measured Boot چیزی را بلاک نمی‌کند؛ فقط هش هر جزء را در TPM ثبت می‌کند تا بعداً بررسی شود.');

  M(T1,'Before a laptop may join the network, a server checks hash values of its firmware, bootloader and boot drivers that were recorded in the TPM. What is this process?',
    'قبل از اینکه لپ‌تاپ اجازه‌ی ورود به شبکه بگیرد، یک سرور هش‌های Firmware، Bootloader و درایورهای بوت را که در TPM ثبت شده بررسی می‌کند. اسم این فرایند چیست؟',
    'Measured boot + بررسی از راه دور.',
    ['Measured boot with remote attestation','Secure boot with a signature database','Full-disk encryption sealing','Code signing'],
    ['Measured boot همراه با Remote attestation','Secure boot با پایگاه امضا','Sealing در رمزگذاری کامل دیسک','امضای کد (Code signing)'],
    'Measured boot records hashes of each boot component in the TPM. Remote attestation sends those measurements to a server, which compares them with a known good state and can allow, quarantine or deny the device.',
    'Measured boot هش هر جزء بوت را در TPM ثبت می‌کند. در Remote attestation این اندازه‌ها برای سرور فرستاده می‌شود و سرور آن‌ها را با حالت سالم مقایسه می‌کند و می‌تواند دستگاه را بپذیرد، قرنطینه کند یا رد کند.');

  M(T1,'A bank needs a FIPS 140-certified device to generate and store the signing keys used by many application servers, and to offload their cryptographic work. What should it buy?',
    'یک بانک دستگاهی با گواهی FIPS 140 لازم دارد که کلیدهای امضای چندین سرور برنامه را بسازد و نگه دارد و کار رمزنگاری آن‌ها را هم انجام دهد. چه چیزی باید بخرد؟',
    'برای «چند سیستم»، نه یک لپ‌تاپ.',
    ['A hardware security module (HSM)','A TPM in each server','A secure enclave','A self-encrypting drive'],
    ['HSM (ماژول امنیتی سخت‌افزاری)','یک TPM در هر سرور','Secure enclave','دیسک خودرمزگذار (SED)'],
    'An HSM is a dedicated device or card that creates, stores and manages keys for many systems and offloads crypto processing; HSMs are commonly FIPS 140 or Common Criteria certified. A TPM protects one machine, and a secure enclave is a key area inside one device\'s chip.',
    'HSM یک دستگاه یا کارت جداست که برای چندین سیستم کلید می‌سازد، نگه می‌دارد و مدیریت می‌کند و بار رمزنگاری را برمی‌دارد؛ معمولاً گواهی FIPS 140 یا Common Criteria دارد. TPM فقط از یک دستگاه محافظت می‌کند و Secure enclave بخشی امن داخل چیپ یک دستگاه است.');

  M(T1,'Which TPM function encrypts data so that it can only be decrypted when the TPM reports a specific, expected system state?',
    'کدام کارکرد TPM داده را طوری رمز می‌کند که فقط وقتی سیستم در یک وضعیت مشخص و مورد انتظار است رمزگشایی شود؟',
    'رمزگذاری + شرط وضعیت سیستم.',
    ['Sealing','Binding','Remote attestation','Hashing'],
    ['Sealing','Binding','Remote attestation','Hashing (هش)'],
    'Binding encrypts data with a TPM key. Sealing goes further: it encrypts data and also requires the TPM to be in a certain state before decrypting. Remote attestation proves the hardware and software configuration to another system.',
    'Binding داده را با کلید TPM رمز می‌کند. Sealing یک قدم جلوتر است: علاوه بر رمزگذاری، شرط می‌گذارد که TPM در یک وضعیت مشخص باشد تا رمزگشایی شود. Remote attestation پیکربندی سخت‌افزار و نرم‌افزار را به سیستم دیگری ثابت می‌کند.');

  /* ---- Endpoint tools ---- */
  M(T2,'A new ransomware variant changes its code every time it installs, so no hash matches. Which antimalware detection method is most likely to catch it?',
    'یک باج‌افزار جدید هر بار که نصب می‌شود کدش را عوض می‌کند، پس هیچ هشی با آن جور نمی‌شود. کدام روش تشخیص احتمال بیشتری دارد که آن را بگیرد؟',
    'به «کاری که می‌کند» نگاه کن، نه به ظاهرش.',
    ['Heuristic (behavior-based) detection','Signature-based detection','A deny list of file hashes','Port scanning'],
    ['تشخیص Heuristic (بر اساس رفتار)','تشخیص Signature-based (امضا)','فهرست سیاه هش فایل‌ها','اسکن پورت'],
    'Polymorphic, packed or encrypted malware defeats signatures. Heuristic or behavior-based detection looks at what the program does (for example mass file encryption) and matches it to unwanted activity profiles. AI/ML and sandboxing help too.',
    'بدافزار چندریختی (Polymorphic)، فشرده یا رمزشده امضا را دور می‌زند. تشخیص Heuristic به کار برنامه نگاه می‌کند (مثلاً رمز کردن انبوه فایل‌ها) و آن را با الگوی رفتار ناخواسته مقایسه می‌کند. AI/ML و Sandbox هم کمک می‌کنند.');

  M(T2,'A security team wants one platform that collects and correlates detections from endpoints, email, cloud services and the network, then uses analytics to help respond. What fits best?',
    'تیم امنیت یک پلتفرم می‌خواهد که هشدارها را از Endpointها، ایمیل، سرویس‌های ابری و شبکه جمع کند، به هم ربط بدهد و با تحلیل به پاسخ کمک کند. کدام مناسب‌تر است؟',
    'فراتر از Endpoint.',
    ['XDR','EDR','A HIDS','Traditional antivirus'],
    ['XDR','EDR','HIDS','آنتی‌ویروس سنتی'],
    'EDR focuses on endpoints: an agent collects data, detects IoCs and supports investigation and response. XDR extends the same idea across the wider stack: email, cloud, identity, network and security tools.',
    'EDR روی Endpoint تمرکز دارد: Agent داده جمع می‌کند، IoC را پیدا می‌کند و به بررسی و پاسخ کمک می‌کند. XDR همین ایده را به کل فناوری‌ها گسترش می‌دهد: ایمیل، ابر، هویت، شبکه و ابزارهای امنیتی.');

  M(T2,'A lab computer must only run five approved programs; anything else should be blocked, even brand-new software nobody has seen before. Which control fits?',
    'یک کامپیوتر آزمایشگاه فقط باید پنج برنامه‌ی تأییدشده را اجرا کند؛ هر چیز دیگری، حتی نرم‌افزار کاملاً جدید، باید بلاک شود. کدام کنترل مناسب است؟',
    'فقط چیزهای «مجاز» اجرا شوند.',
    ['An application allow list','An application deny list','Signature-based antivirus','A host-based firewall'],
    ['Allow list برنامه‌ها','Deny list (Block list) برنامه‌ها','آنتی‌ویروس مبتنی بر امضا','فایروال میزبان'],
    'An allow list permits only listed software, so unknown programs are blocked by default; it is the stronger choice for high-security systems but takes work to maintain. A deny list blocks only named software and lets unknown programs run.',
    'Allow list فقط نرم‌افزارهای داخل فهرست را اجازه می‌دهد، پس برنامه‌ی ناشناخته به‌طور پیش‌فرض بلاک می‌شود؛ برای سیستم‌های خیلی حساس قوی‌تر است ولی نگهداری‌اش زحمت دارد. Deny list فقط موارد نام‌برده را بلاک می‌کند و برنامه‌ی ناشناخته اجرا می‌شود.');

  M(T2,'An organization rolls out DLP but its first alerts are useless because it cannot tell which files are sensitive. What step was skipped?',
    'سازمانی DLP را راه می‌اندازد ولی هشدارهای اولش بی‌فایده‌اند چون نمی‌داند کدام فایل‌ها حساس‌اند. کدام قدم جا افتاده؟',
    'DLP اول باید بداند از «چه» محافظت کند.',
    ['Mapping and classifying the data','Buying a second DLP product','Disabling email attachments','Installing EDR'],
    ['شناسایی و طبقه‌بندی داده‌ها','خرید یک محصول DLP دوم','غیرفعال کردن پیوست ایمیل','نصب EDR'],
    'DLP depends on knowing what to protect: map where data lives, classify it and label or tag it, then write policies. Without classification, policies cannot target the right data. Remember DLP still misses screenshots, photos of screens and printing.',
    'DLP باید بداند از چه محافظت می‌کند: اول داده‌ها را پیدا کن، طبقه‌بندی کن و برچسب بزن، بعد سیاست بنویس. بدون طبقه‌بندی، سیاست‌ها داده‌ی درست را هدف نمی‌گیرند. یادت باشد DLP عکس از صفحه، اسکرین‌شات و چاپ را هم معمولاً نمی‌گیرد.');

  M(T2,'An admin wants host-level detection of network attacks but is afraid a false positive could cut off a production server. What should be installed?',
    'یک مدیر می‌خواهد حمله‌های شبکه‌ای را روی خود میزبان تشخیص دهد، ولی می‌ترسد یک هشدار اشتباه سرور اصلی را از کار بیندازد. چه چیزی باید نصب شود؟',
    'فقط هشدار بدهد، چیزی را بلاک نکند.',
    ['A HIDS','A HIPS','A host-based firewall in default-deny mode','A WAF in blocking mode'],
    ['HIDS','HIPS','فایروال میزبان با حالت پیش‌فرض «رد»','WAF در حالت بلاک'],
    'A HIDS only alerts, so it cannot cause an outage. A HIPS can block traffic, which means a misidentification can block legitimate traffic (as in the book\'s story of a Windows domain going offline).',
    'HIDS فقط هشدار می‌دهد، پس قطعی ایجاد نمی‌کند. HIPS می‌تواند ترافیک را بلاک کند، پس یک تشخیص اشتباه می‌تواند ترافیک درست را هم ببندد (مثل داستان کتاب که یک دامنه‌ی ویندوز از کار افتاد).');

  /* ---- Hardening ---- */
  M(T3,'Which of these is the best reason to uninstall unused software instead of only disabling it?',
    'بهترین دلیل برای حذف کامل نرم‌افزار بی‌استفاده، به جای فقط غیرفعال کردنش، کدام است؟',
    'چیزی که هست، می‌شود دوباره روشنش کرد.',
    ['It cannot be re-enabled, and it shrinks the attack surface and patch load','It makes the firewall rules shorter','It speeds up incident response reports','It is required by SELinux'],
    ['دیگر نمی‌شود دوباره فعالش کرد و سطح حمله و تعداد وصله‌ها کم می‌شود','قوانین فایروال کوتاه‌تر می‌شود','گزارش پاسخ به حادثه سریع‌تر می‌شود','SELinux آن را الزامی کرده'],
    'Removing software removes the chance that a disabled tool is turned back on, reduces the attack surface, and cuts how much must be patched and monitored. Many organizations reimage new devices to strip vendor bloatware.',
    'حذف نرم‌افزار احتمال روشن شدن دوباره‌ی ابزار غیرفعال را از بین می‌برد، سطح حمله را کم می‌کند و تعداد چیزهایی که باید وصله و پایش شوند کم می‌شود. خیلی سازمان‌ها روی دستگاه نو، Image خودشان را نصب می‌کنند تا نرم‌افزارهای اضافه‌ی فروشنده پاک شود.');

  M(T3,'A port scan of a Linux server shows TCP 21, 22, 23, 80 and 443 open. The server must keep remote administration and web service. Which ports should be closed?',
    'اسکن پورت یک سرور لینوکسی پورت‌های TCP 21، 22، 23، 80 و 443 را باز نشان می‌دهد. سرور باید مدیریت از راه دور و وب را نگه دارد. کدام پورت‌ها باید بسته شوند؟',
    'نسخه‌های بدون رمزگذاری را ببند.',
    ['21, 23 and 80','22 and 443','21 and 22','80 and 443'],
    ['21، 23 و 80','22 و 443','21 و 22','80 و 443'],
    'FTP (21), Telnet (23) and HTTP (80) send data in clear text. Keep SSH (22) for administration and file transfer (SFTP) and HTTPS (443) for the web.',
    'FTP (21)، Telnet (23) و HTTP (80) داده را بدون رمز می‌فرستند. SSH (22) را برای مدیریت و انتقال فایل (SFTP) و HTTPS (443) را برای وب نگه دار.');

  M(T3,'An admin wants to enforce password length, disable guest accounts and block software installs on 3,000 domain-joined Windows PCs from one place. Which tool fits?',
    'یک مدیر می‌خواهد طول رمز، غیرفعال بودن حساب Guest و منع نصب نرم‌افزار را روی ۳۰۰۰ کامپیوتر ویندوزی عضو دامنه از یک جا اعمال کند. کدام ابزار مناسب است؟',
    'ابزار داخلی Active Directory.',
    ['Group Policy Objects (GPOs)','SELinux','EDR','A HIPS'],
    ['Group Policy (GPO)','SELinux','EDR','HIPS'],
    'Group Policy applies settings through GPOs, locally or across an Active Directory domain. Microsoft\'s Security Compliance Toolkit can compare GPOs with Microsoft\'s security baselines. SELinux is the Linux equivalent area of control (mandatory access control).',
    'Group Policy تنظیمات را با GPO اعمال می‌کند، چه محلی و چه روی کل دامنه‌ی Active Directory. ابزار Security Compliance Toolkit مایکروسافت هم GPOها را با Baseline امنیتی مقایسه می‌کند. SELinux مربوط به لینوکس است (کنترل دسترسی اجباری).');

  M(T3,'Which Linux security module enforces mandatory access control using labels (user, role, type) on processes, files and ports?',
    'کدام ماژول امنیتی لینوکس با برچسب‌ها (کاربر، نقش، نوع) روی پردازه‌ها، فایل‌ها و پورت‌ها کنترل دسترسی اجباری (MAC) اعمال می‌کند؟',
    'در Android هم استفاده می‌شود.',
    ['SELinux','Group Policy','The Windows Registry','BitLocker'],
    ['SELinux','Group Policy','رجیستری ویندوز','BitLocker'],
    'SELinux is a kernel module that adds mandatory access control on top of normal Linux permissions. It labels subjects and objects with user, role and type/domain and enforces policy, supporting least privilege. AppArmor is a similar MAC tool.',
    'SELinux یک ماژول کرنل است که کنترل دسترسی اجباری را روی مجوزهای عادی لینوکس اضافه می‌کند. به کاربر و منبع برچسب کاربر، نقش و نوع می‌زند و سیاست را اجرا می‌کند و به حداقل دسترسی کمک می‌کند. AppArmor ابزار مشابهی است.');

  M(T3,'A team takes the CIS benchmark for Windows 11, adjusts a few settings for business needs, pushes it with a management tool, and the tool keeps resetting any drift. Which baseline phase is the last part?',
    'تیمی بنچمارک CIS ویندوز ۱۱ را برمی‌دارد، چند تنظیم را برای نیاز کسب‌وکار تغییر می‌دهد، با ابزار مدیریت پخش می‌کند و ابزار هر تغییر ناخواسته را برمی‌گرداند. بخش آخر کدام مرحله‌ی Baseline است؟',
    'سه مرحله: Establish، Deploy، Maintain.',
    ['Maintain (with configuration enforcement)','Establish','Deploy','Decommission'],
    ['Maintain (نگهداری، با Configuration enforcement)','Establish (تعریف)','Deploy (پخش)','Decommission (کنار گذاشتن)'],
    'Establish = build the baseline, often from CIS or NIST guides adjusted to your needs. Deploy = push it with central tools. Maintain = keep it in place with enforcement that corrects drift, and update the baseline when needs change.',
    'Establish = ساختن Baseline، معمولاً از روی راهنمای CIS یا NIST با تغییرات لازم. Deploy = پخش آن با ابزار مرکزی. Maintain = نگه داشتن آن با Enforcement که تغییرات ناخواسته را برمی‌گرداند، و به‌روز کردن Baseline وقتی نیاز تغییر کند.');

  M(T3,'A laptop uses transparent full-disk encryption with a TPM. In which state is its data most exposed to a thief?',
    'یک لپ‌تاپ رمزگذاری کامل دیسک شفاف (Transparent) با TPM دارد. در کدام حالت داده‌اش بیشتر در معرض دزد است؟',
    'رمزگذاری شفاف وقتی دیسک باز است چیزی را پنهان نمی‌کند.',
    ['Logged in and unlocked','Powered off','Shut down with the battery removed','Locked at boot before the key is entered'],
    ['وارد شده و قفل‌نشده','خاموش','خاموش و بدون باتری','در شروع بوت، قبل از وارد کردن کلید'],
    'With transparent FDE the drive looks unencrypted while it is unlocked, so the easiest attack is to grab a logged-in or sleeping machine. When the machine is off, the key is not in memory and the disk stays encrypted.',
    'در FDE شفاف، وقتی دیسک باز است مثل یک دیسک بدون رمز دیده می‌شود؛ پس ساده‌ترین حمله گرفتن دستگاهِ وارد‌شده یا در حالت Sleep است. وقتی دستگاه خاموش است کلید در حافظه نیست و دیسک رمز‌شده می‌ماند.');

  /* ---- Embedded & IoT ---- */
  M(T4,'A robotic welding controller must react to sensor input within a fixed, tiny time window every time. Which kind of operating system does it need?',
    'کنترلر یک ربات جوشکاری باید هر بار در یک بازه‌ی زمانی خیلی کوتاه و ثابت به ورودی حسگر واکنش نشان دهد. چه نوع سیستم‌عاملی لازم دارد؟',
    'اولویت با پردازش داده به‌محض رسیدن است.',
    ['A real-time operating system (RTOS)','A general-purpose desktop OS','A hypervisor','A system on chip (SoC)'],
    ['سیستم‌عامل بلادرنگ (RTOS)','سیستم‌عامل همه‌منظوره‌ی دسکتاپ','Hypervisor','SoC (این سخت‌افزار است، نه سیستم‌عامل)'],
    'An RTOS processes data as it arrives with predictable timing, which industrial and embedded systems need. A desktop OS may delay tasks. An SoC is a chip design, not an OS.',
    'RTOS داده را به‌محض رسیدن و با زمان قابل پیش‌بینی پردازش می‌کند؛ چیزی که سیستم‌های صنعتی و نهفته لازم دارند. سیستم‌عامل دسکتاپ ممکن است کار را عقب بیندازد. SoC طراحی چیپ است، نه سیستم‌عامل.');

  M(T4,'A water utility monitors pumps across a whole region with RTUs and PLCs reporting to a central control screen. What is this architecture usually called?',
    'یک شرکت آب پمپ‌های کل یک منطقه را با RTU و PLC که به یک صفحه‌ی کنترل مرکزی گزارش می‌دهند پایش می‌کند. به این معماری معمولاً چه می‌گویند؟',
    'سیستم صنعتی بزرگ و پراکنده.',
    ['SCADA','HVAC','SD-WAN','RTOS'],
    ['SCADA','HVAC (گرمایش و تهویه)','SD-WAN','RTOS'],
    'SCADA (supervisory control and data acquisition) usually describes large, spread-out industrial systems like power and water distribution. ICS is the broader term for industrial control. PLCs control machines; RTUs collect data from sensors.',
    'SCADA معمولاً برای سیستم‌های صنعتی بزرگ و پراکنده مثل توزیع برق و آب به کار می‌رود. ICS اصطلاح کلی‌تر کنترل صنعتی است. PLC ماشین‌ها را کنترل می‌کند و RTU داده‌ی حسگرها را جمع می‌کند.');

  M(T4,'A building\'s IoT thermostats have a web admin page the vendor never patches. What is the most practical protection?',
    'ترموستات‌های IoT یک ساختمان صفحه‌ی مدیریت وب دارند که فروشنده هرگز وصله‌اش نمی‌کند. عملی‌ترین محافظت چیست؟',
    'روی خود دستگاه نمی‌شود چیزی نصب کرد.',
    ['Put them on a separate, access-controlled VLAN','Install antivirus on each thermostat','Install a HIPS on each thermostat','Replace them with RTOS devices'],
    ['آن‌ها را در یک VLAN جدا با کنترل دسترسی بگذار','روی هر ترموستات آنتی‌ویروس نصب کن','روی هر ترموستات HIPS نصب کن','آن‌ها را با دستگاه RTOS عوض کن'],
    'IoT devices usually cannot run firewalls, antivirus or HIPS and often lack patches. Segmenting them onto a protected VLAN with tight access rules limits who can reach them and what they can reach.',
    'دستگاه‌های IoT معمولاً نمی‌توانند فایروال، آنتی‌ویروس یا HIPS اجرا کنند و اغلب وصله ندارند. گذاشتن آن‌ها در یک VLAN محافظت‌شده با قوانین دسترسی سخت، محدود می‌کند چه کسی به آن‌ها برسد و آن‌ها به کجا برسند.');

  M(T4,'Which statement about embedded systems is true?',
    'کدام جمله درباره‌ی سیستم‌های نهفته (Embedded) درست است؟',
    'به محدودیت‌ها فکر کن: پردازش، شبکه، احراز هویت.',
    ['They often rely on implied trust: physical access is treated as authorization','They always have enough CPU for strong encryption','They are always connected and easy to patch','They always require multifactor login'],
    ['اغلب به اعتماد ضمنی تکیه می‌کنند: دسترسی فیزیکی یعنی مجاز بودن','همیشه پردازنده‌ی کافی برای رمزگذاری قوی دارند','همیشه وصل‌اند و وصله کردنشان آسان است','همیشه ورود چندعاملی لازم دارند'],
    'Embedded systems often have little compute, memory and storage, may have no network (so no remote patching), and may have no authentication. Many assume anyone with physical access is allowed to change them, which is a risk to plan for.',
    'سیستم‌های نهفته معمولاً پردازش، حافظه و فضای کمی دارند، شاید شبکه نداشته باشند (پس وصله‌ی از راه دور ممکن نیست) و شاید احراز هویت نداشته باشند. خیلی‌هاشان فرض می‌کنند هرکس دسترسی فیزیکی دارد مجاز است تغییرشان دهد؛ این ریسکی است که باید برایش برنامه داشت.');

  /* ---- Assets & disposal ---- */
  M(T5,'An admin runs network scans and finds a dozen systems that are not in the asset inventory. Which asset management activity is this?',
    'یک مدیر اسکن شبکه اجرا می‌کند و دوازده سیستم پیدا می‌کند که در فهرست دارایی‌ها نیستند. این کدام فعالیت مدیریت دارایی است؟',
    'پیدا کردن دارایی با اسکن.',
    ['Enumeration','Classification','Certification','Data retention'],
    ['Enumeration (شمارش و شناسایی)','Classification (طبقه‌بندی)','Certification (گواهی امحا)','Data retention (نگهداری داده)'],
    'Enumeration usually means scanning to discover assets, often catching systems missing from the inventory. Ownership and classification are assigned when assets are acquired; certification proves proper disposal.',
    'Enumeration معمولاً یعنی اسکن برای پیدا کردن دارایی‌ها، که اغلب سیستم‌های جاافتاده از فهرست را پیدا می‌کند. مالکیت و طبقه‌بندی هنگام خرید تعیین می‌شود و Certification امحای درست را ثابت می‌کند.');

  M(T5,'Old SSDs are being retired. Why is a standard multi-pass overwrite tool not enough?',
    'SSDهای قدیمی کنار گذاشته می‌شوند. چرا یک ابزار معمولی بازنویسی چندمرحله‌ای کافی نیست؟',
    'SSD فضای پنهان دارد.',
    ['Wear leveling keeps copies in areas the tool cannot reach','SSDs cannot be written to more than once','Degaussing is faster for SSDs','Overwriting voids the warranty'],
    ['Wear leveling کپی‌هایی در جاهایی نگه می‌دارد که ابزار به آن‌ها نمی‌رسد','روی SSD بیشتر از یک بار نمی‌شود نوشت','Degauss برای SSD سریع‌تر است','بازنویسی گارانتی را باطل می‌کند'],
    'SSDs spread writes over more cells than their listed capacity, so overwriting every visible block can leave data remanence. Use the drive\'s built-in secure erase, crypto-erase (destroy the FDE key), or physical destruction. Degaussers only work on magnetic media.',
    'SSD نوشتن را روی سلول‌هایی بیشتر از ظرفیت اعلام‌شده پخش می‌کند، پس بازنویسی همه‌ی بلاک‌های قابل دیدن ممکن است داده‌ی باقی‌مانده (Remanence) بگذارد. از Secure erase داخلی دیسک، پاک کردن کلید FDE یا نابودی فیزیکی استفاده کن. Degausser فقط روی رسانه‌ی مغناطیسی کار می‌کند.');

  M(T5,'Backup tapes must be wiped quickly and reused. Which method fits?',
    'نوارهای پشتیبان باید سریع پاک شوند و دوباره استفاده شوند. کدام روش مناسب است؟',
    'رسانه‌ی مغناطیسی + سرعت.',
    ['Degaussing','Shredding','Incineration','Writing all zeros over it several times'],
    ['Degauss (میدان مغناطیسی قوی)','خرد کردن','سوزاندن','چند بار نوشتن صفر روی آن'],
    'A degausser scrambles magnetic media with a strong field and is the quickest way to clear tapes. Shredding and incineration destroy the media. Overwriting works but is much slower on tape.',
    'Degausser با میدان مغناطیسی قوی رسانه‌ی مغناطیسی را به هم می‌ریزد و سریع‌ترین راه پاک کردن نوار است. خرد کردن و سوزاندن رسانه را از بین می‌برند. بازنویسی کار می‌کند ولی روی نوار خیلی کندتر است.');

  M(T5,'A vendor shreds a company\'s retired drives. What should the company get back to prove the drives were properly destroyed?',
    'یک شرکت بیرونی دیسک‌های کنارگذاشته‌ی یک سازمان را خرد می‌کند. سازمان برای اثبات امحای درست چه چیزی باید بگیرد؟',
    'مدرک کتبی.',
    ['A certificate of destruction','A chain-of-custody form for evidence','A data retention policy','An asset tag'],
    ['گواهی امحا (Certificate of destruction)','فرم زنجیره‌ی نگهداری مدرک','سیاست نگهداری داده','برچسب دارایی'],
    'Certification documents that assets were decommissioned; destruction vendors provide certificates of destruction tracking each drive. Before disposal, also check retention rules and legal holds so nothing that must be kept is destroyed.',
    'Certification مستند می‌کند که دارایی درست کنار گذاشته شده؛ شرکت‌های امحا برای هر دیسک گواهی امحا می‌دهند. قبل از امحا قوانین نگهداری داده و Legal hold را هم بررسی کن تا چیزی که باید بماند از بین نرود.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['11']={t:['Endpoint security','امنیت Endpoint'],b:[
    PP('Matched to Chapter 11 of the course textbook. These are short review notes in our own words; read the chapter itself for the full explanation. Endpoints and mobile are also practiced in the Security+ course, section 8.',
      'این بخش با فصل ۱۱ کتاب درس جور است. این‌ها یادداشت‌های کوتاه مرور به زبان خودمان است؛ توضیح کامل را در خود کتاب بخوان. Endpoint و موبایل در بخش ۸ دوره‌ی Security+ هم تمرین شده‌اند.'),

    H('Hardware life cycle words','اصطلاح‌های چرخه‌ی عمر سخت‌افزار'),
    TB([['Term','اصطلاح'],['Sold?','فروخته می‌شود؟'],['Supported?','پشتیبانی دارد؟']],[
      [['End of sales','پایان فروش'],['No (resellers may still have stock)','نه (شاید فروشنده‌ها هنوز داشته باشند)'],['Yes','بله']],
      [['End of life','پایان عمر'],['No','نه'],['Yes, but plan retirement','بله، ولی باید برای کنار گذاشتن برنامه داشت']],
      [['End of support','پایان پشتیبانی'],['No','نه'],['Last update date','آخرین تاریخ آپدیت']],
      [['Legacy','قدیمی (Legacy)'],['No','نه'],['No: use compensating controls','نه: کنترل جبرانی لازم است']]]),

    H('Boot integrity and keys','سلامت بوت و کلیدها'),
    TB([['Item','مورد'],['What it does','چه می‌کند']],[
      [['Secure Boot','Secure Boot'],['Blocks boot code not signed by a trusted key','کد بوتی را که امضای معتبر ندارد اجرا نمی‌کند']],
      [['Measured Boot','Measured Boot'],['Hashes each boot part into the TPM; does not block','هش هر جزء بوت را در TPM ثبت می‌کند؛ بلاک نمی‌کند']],
      [['Remote attestation','Remote attestation'],['Server checks the TPM measurements, then allows or quarantines','سرور اندازه‌های TPM را بررسی می‌کند و اجازه می‌دهد یا قرنطینه می‌کند']],
      [['TPM','TPM'],['Chip in one computer: attestation, binding, sealing','چیپ داخل یک کامپیوتر: Attestation، Binding، Sealing']],
      [['HSM','HSM'],['Device/card that makes and stores keys for many systems','دستگاه یا کارتی که برای چند سیستم کلید می‌سازد و نگه می‌دارد']],
      [['KMS','KMS'],['Central service (often cloud) to store and manage secrets','سرویس مرکزی (اغلب ابری) برای نگهداری و مدیریت رازها']],
      [['Secure enclave','Secure enclave'],['Isolated key area inside a device\'s chip (Apple, Titan M, TrustZone)','بخش جدای کلیدها داخل چیپ دستگاه (Apple، Titan M، TrustZone)']]]),

    H('Endpoint tools','ابزارهای Endpoint'),
    L([['Antimalware detection: signature (known hashes), heuristic/behavior, AI/ML, sandboxing.','روش‌های تشخیص آنتی‌بدافزار: امضا (هش شناخته‌شده)، Heuristic/رفتار، AI/ML، Sandbox.'],
       ['Allow list = only listed software runs (stronger). Deny/block list = listed software is blocked.','Allow list = فقط موارد فهرست اجرا می‌شوند (قوی‌تر). Deny/Block list = موارد فهرست بلاک می‌شوند.'],
       ['EDR = endpoint agent + detection + investigation + response. XDR = the same across email, cloud, network and more.','EDR = Agent روی Endpoint + تشخیص + بررسی + پاسخ. XDR = همین روی ایمیل، ابر، شبکه و بیشتر.'],
       ['DLP needs data classification first; it can block, alert, encrypt or tokenize.','DLP اول طبقه‌بندی داده لازم دارد؛ می‌تواند بلاک کند، هشدار دهد، رمز کند یا توکن کند.'],
       ['Host firewall = allow/block by port, app, protocol. HIPS = inspects and blocks. HIDS = inspects and only alerts.','فایروال میزبان = اجازه/بلاک با پورت، برنامه، پروتکل. HIPS = بررسی و بلاک. HIDS = بررسی و فقط هشدار.']]),

    H('Hardening checklist (exam list)','فهرست Hardening (فهرست آزمون)'),
    L([['Encryption: FDE, SED, volume, file/folder.','رمزگذاری: FDE، SED، Volume، فایل و پوشه.'],
       ['Install endpoint protection; host-based firewall; HIPS.','نصب محافظ Endpoint؛ فایروال میزبان؛ HIPS.'],
       ['Disable unneeded ports, protocols and services.','بستن پورت‌ها، پروتکل‌ها و سرویس‌های غیرلازم.'],
       ['Change default passwords; remove unnecessary software.','عوض کردن رمزهای پیش‌فرض؛ حذف نرم‌افزارهای غیرلازم.'],
       ['Patch with managed tools; Group Policy (Windows) and SELinux (Linux) enforce settings.','وصله با ابزار مدیریت‌شده؛ Group Policy (ویندوز) و SELinux (لینوکس) تنظیمات را اعمال می‌کنند.'],
       ['Baselines: Establish (CIS/NIST), Deploy, Maintain (enforce and correct drift).','Baseline: تعریف (CIS/NIST)، پخش، نگهداری (اعمال و برگرداندن تغییرات).']]),

    H('Embedded, ICS/SCADA and IoT','سیستم‌های نهفته، ICS/SCADA و IoT'),
    L([['RTOS = predictable, immediate processing for embedded and industrial use.','RTOS = پردازش فوری و قابل پیش‌بینی برای سیستم‌های نهفته و صنعتی.'],
       ['SCADA = large, spread-out control systems (power, water); PLCs control machines, RTUs collect data.','SCADA = سیستم‌های کنترل بزرگ و پراکنده (برق، آب)؛ PLC ماشین را کنترل می‌کند و RTU داده جمع می‌کند.'],
       ['Constraints: low compute, little memory, no network, no authentication, hard to replace, implied trust.','محدودیت‌ها: پردازش کم، حافظه‌ی کم، نبود شبکه، نبود احراز هویت، تعویض سخت، اعتماد ضمنی.'],
       ['Best common defense: isolate or segment (VLAN), change defaults, patch when possible.','بهترین دفاع رایج: جداسازی یا بخش‌بندی (VLAN)، عوض کردن پیش‌فرض‌ها، وصله در صورت امکان.'],
       ['IoT worries: weak defaults, short support, vendor data handling. Zigbee/Z-Wave have weak security models.','نگرانی‌های IoT: پیش‌فرض‌های ضعیف، پشتیبانی کوتاه، نحوه‌ی برخورد فروشنده با داده. Zigbee و Z-Wave مدل امنیتی ضعیفی دارند.']]),

    H('Asset life cycle and disposal','چرخه‌ی عمر دارایی و امحا'),
    L([['Acquisition/procurement → assign owner and classification → inventory and enumeration → disposal.','خرید → تعیین مالک و طبقه‌بندی → فهرست‌برداری و Enumeration → امحا.'],
       ['Magnetic media: degauss or overwrite. SSD/flash: secure erase command, crypto-erase, or destroy.','رسانه‌ی مغناطیسی: Degauss یا بازنویسی. SSD/فلش: دستور Secure erase، پاک کردن کلید رمز، یا نابودی.'],
       ['Destruction: shred, pulverize, incinerate. Certification = certificate of destruction.','نابودی: خرد کردن، پودر کردن، سوزاندن. Certification = گواهی امحا.'],
       ['Check data retention and legal holds before disposal.','قبل از امحا نگهداری داده و Legal hold را بررسی کن.']]),

    TT('Exam shortcut: TPM = one machine, HSM = keys for many systems, KMS = managed secrets service. Secure boot blocks; measured boot records. HIDS alerts; HIPS blocks. Degausser only for magnetic media.',
      'نکته‌ی امتحان: TPM = یک دستگاه، HSM = کلید برای چند سیستم، KMS = سرویس مدیریت رازها. Secure boot بلاک می‌کند؛ Measured boot ثبت می‌کند. HIDS هشدار می‌دهد؛ HIPS بلاک می‌کند. Degausser فقط برای رسانه‌ی مغناطیسی.')
  ]};
})();
