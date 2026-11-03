/* Security+ extension: Section B3, matched to Chapter 3 ("Malicious Code") of the course textbook
   (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written for
   objective 2.4 (malware attacks); no text or review questions from the book are copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secbook'});
  if(!pack)return;
  pack.sections['3']={en:'Malicious code',fa:'کد مخرب'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b3_'+(++n),sec:'3',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Malware types',T2='Indicators (IoCs)',T3='Defense & removal';

  /* ---- Malware types ---- */
  M(T1,'A user installs a free "PDF converter" from a forum. It converts files as promised, but it also opens a hidden connection that lets an attacker control the PC. What is it?',
    'کاربری یک «مبدل PDF» رایگان را از یک انجمن نصب می‌کند. فایل‌ها را واقعاً تبدیل می‌کند، اما یک اتصال مخفی هم باز می‌کند که مهاجم کامپیوتر را کنترل کند. این چیست؟',
    'ظاهر مفید، کار مخفی؛ کاربر خودش اجرایش کرد.',
    ['A remote access Trojan (RAT)','A worm that spreads over the network','A logic bomb that waits for a date','Bloatware installed by the vendor'],
    ['تروجان دسترسی از راه دور (RAT)','کرمی که در شبکه پخش می‌شود','بمب منطقی که منتظر یک تاریخ است','Bloatware نصب‌شده توسط سازنده'],
    'A Trojan disguises itself as legitimate software and depends on the user running it. A RAT is a Trojan that gives the attacker remote control. Awareness, software restrictions and EDR are the main defenses.',
    'تروجان خودش را نرم‌افزار سالم جا می‌زند و به اجرا شدن توسط کاربر وابسته است. RAT نوعی تروجان است که به مهاجم کنترل از راه دور می‌دهد. آموزش کاربر، محدود کردن نرم‌افزار و EDR دفاع‌های اصلی‌اند.');

  M(T1,'Malware jumps from server to server across a data center by exploiting an unpatched network service. No user clicks anything. What type of malware is this?',
    'بدافزاری با سوءاستفاده از یک سرویس شبکه‌ی وصله‌نشده از سروری به سرور دیگر در دیتاسنتر می‌پرد. هیچ کاربری روی چیزی کلیک نمی‌کند. این کدام نوع بدافزار است؟',
    'خودش پخش می‌شود.',
    ['Worm','Virus','Trojan','Rootkit'],
    ['کرم (Worm)','ویروس','تروجان','روت‌کیت'],
    'Worms spread and install themselves automatically, often through vulnerable services, file shares or email. Viruses need some action, such as running a file, to activate. Network controls, segmentation and patching stop worms best.',
    'کرم خودش پخش و نصب می‌شود؛ اغلب از طریق سرویس‌های آسیب‌پذیر، فایل‌های مشترک یا ایمیل. ویروس برای فعال شدن به یک اقدام مثل اجرای فایل نیاز دارد. کنترل شبکه، بخش‌بندی و وصله بهترین راه جلوگیری از کرم‌اند.');

  M(T1,'Malware attaches itself to documents, waits until the 13th of the month (its trigger), then deletes files (its payload). It spreads when users copy infected files. What is it?',
    'بدافزاری خودش را به سندها می‌چسباند، تا روز ۱۳ ماه (ماشه) صبر می‌کند، بعد فایل‌ها را پاک می‌کند (محموله). وقتی کاربران فایل آلوده را کپی می‌کنند پخش می‌شود. این چیست؟',
    'Trigger + Payload + خودتکثیری با کمک کاربر.',
    ['Virus','Worm','Spyware','Keylogger'],
    ['ویروس','کرم','جاسوس‌افزار','Keylogger'],
    'Viruses self-copy once activated and usually have a trigger (when to act) and a payload (what to do). They spread through mechanisms like file copies, USB drives or email rather than exploiting services on their own like worms.',
    'ویروس بعد از فعال شدن از خودش کپی می‌سازد و معمولاً یک ماشه (کی عمل کند) و یک محموله (چه کند) دارد. از راه‌هایی مثل کپی فایل، فلش USB یا ایمیل پخش می‌شود، نه مثل کرم با سوءاستفاده‌ی مستقل از سرویس‌ها.');

  M(T1,'After a malicious website exploits a browser plug-in, code runs only in memory and adds a registry entry so it reloads at boot. No malware file is saved to disk. What is this?',
    'بعد از اینکه یک سایت مخرب از افزونه‌ی مرورگر سوءاستفاده می‌کند، کدی فقط در حافظه اجرا می‌شود و یک ورودی رجیستری اضافه می‌کند تا موقع روشن شدن دوباره بارگذاری شود. هیچ فایل بدافزاری روی دیسک ذخیره نمی‌شود. این چیست؟',
    'بدون فایل؛ تنها ردپا ماندگاری است.',
    ['A fileless virus','A boot sector virus','A macro virus','Bloatware'],
    ['ویروس بدون فایل (Fileless)','ویروس بوت‌سکتور','ویروس ماکرو','Bloatware'],
    'Fileless attacks live in memory and often abuse tools like PowerShell. The only stored artifact may be the persistence mechanism, such as a registry key. Patching browsers and plug-ins and behavior-based antimalware help.',
    'حمله‌ی بدون فایل در حافظه زندگی می‌کند و اغلب از ابزارهایی مثل PowerShell سوءاستفاده می‌کند. تنها ردپای ذخیره‌شده ممکن است سازوکار ماندگاری مثل کلید رجیستری باشد. وصله‌ی مرورگر و افزونه‌ها و ضدبدافزار رفتاری کمک می‌کنند.');

  M(T1,'A spreadsheet contains embedded code that runs when the file is opened with editing enabled and then copies itself into other spreadsheets. What virus type is this?',
    'یک فایل اکسل کدی جاسازی‌شده دارد که وقتی فایل با ویرایش فعال باز شود اجرا می‌شود و خودش را در فایل‌های دیگر کپی می‌کند. این کدام نوع ویروس است؟',
    'از امکانات خود برنامه‌ی آفیس استفاده می‌کند.',
    ['Macro virus','Boot sector virus','Memory-resident virus','Rootkit'],
    ['ویروس ماکرو','ویروس بوت‌سکتور','ویروس مقیم در حافظه','روت‌کیت'],
    'Macro viruses use the macro or scripting features of office software to run and spread. Other types: memory-resident, non-memory-resident, boot sector (in the drive\'s boot area) and email viruses.',
    'ویروس ماکرو از امکانات ماکرو یا اسکریپت نرم‌افزار آفیس برای اجرا و پخش استفاده می‌کند. انواع دیگر: مقیم در حافظه، غیرمقیم، بوت‌سکتور (در ناحیه‌ی بوت درایو) و ویروس ایمیلی.');

  M(T1,'A browser add-on silently records which websites a user visits and which programs are installed, then sends this to an advertising server. What best describes it?',
    'یک افزونه‌ی مرورگر بی‌صدا سایت‌هایی که کاربر می‌بیند و برنامه‌های نصب‌شده را ثبت می‌کند و برای یک سرور تبلیغاتی می‌فرستد. کدام توصیف بهتر است؟',
    'هدف اصلی: جمع کردن اطلاعات درباره‌ی کاربر.',
    ['Spyware','Bloatware','Ransomware','Logic bomb'],
    ['جاسوس‌افزار (Spyware)','Bloatware','باج‌افزار','بمب منطقی'],
    'Spyware is defined by its goal: gathering information about a user, organization or system and sending it elsewhere. It may spread like a Trojan, worm or virus. Stalkerware is spyware used to watch a partner.',
    'جاسوس‌افزار با هدفش تعریف می‌شود: جمع کردن اطلاعات درباره‌ی کاربر، سازمان یا سیستم و فرستادنش به جای دیگر. ممکن است مثل تروجان، کرم یا ویروس پخش شود. Stalkerware جاسوس‌افزاری است برای زیر نظر گرفتن شریک زندگی.');

  M(T1,'New laptops arrive with a trial game, a toolbar and a "PC optimizer" installed by the manufacturer. Nobody asked for them. What is the main issue and fix?',
    'لپ‌تاپ‌های جدید با یک بازی آزمایشی، یک نوار ابزار و یک «بهینه‌ساز» که سازنده نصب کرده می‌رسند. کسی آن‌ها را نخواسته. مشکل اصلی و راه‌حل چیست؟',
    'بدخواه نیست، فقط ناخواسته است.',
    ['Bloatware; it wastes resources and adds attack surface, so remove it','Ransomware; restore the laptops from the latest clean backup','A rootkit; reflash the BIOS on every laptop before use','A worm; isolate the network segment the laptops are on'],
    ['Bloatware؛ منابع را هدر می‌دهد و سطح حمله را زیاد می‌کند، پس حذفش کن','باج‌افزار؛ لپ‌تاپ‌ها را از آخرین پشتیبان سالم بازگردانی کن','روت‌کیت؛ قبل از استفاده BIOS همه‌ی لپ‌تاپ‌ها را دوباره بنویس','کرم؛ بخشی از شبکه را که لپ‌تاپ‌ها در آن هستند جدا کن'],
    'Bloatware is unwanted software preinstalled by manufacturers. It is not usually malicious and has no real IoCs, but it uses disk, memory and CPU and may be vulnerable. Uninstall it or deploy a clean OS image.',
    'Bloatware نرم‌افزار ناخواسته‌ای است که سازنده از قبل نصب کرده. معمولاً بدخواه نیست و IoC واقعی ندارد، اما دیسک، حافظه و CPU مصرف می‌کند و ممکن است آسیب‌پذیر باشد. حذفش کن یا یک ایمیج تمیز سیستم‌عامل نصب کن.');

  M(T1,'A developer adds code to the payroll system that will wipe the database if his account is ever disabled. What is this?',
    'برنامه‌نویسی کدی به سیستم حقوق اضافه می‌کند که اگر حسابش روزی غیرفعال شود، پایگاه داده را پاک کند. این چیست؟',
    'برنامه‌ی مستقل نیست؛ کدی است داخل برنامه‌ی دیگر با یک شرط.',
    ['Logic bomb','Trojan','Worm','Keylogger'],
    ['بمب منطقی (Logic bomb)','تروجان','کرم','Keylogger'],
    'A logic bomb is code hidden inside another program that runs when a condition is met (a date, an event, an account being removed). It rarely has IoCs, so code review is the main way to find and prevent it.',
    'بمب منطقی کدی پنهان داخل یک برنامه‌ی دیگر است که با برقرار شدن یک شرط (تاریخ، رویداد، حذف یک حساب) اجرا می‌شود. معمولاً IoC ندارد؛ پس بازبینی کد راه اصلی پیدا کردن و جلوگیری از آن است.');

  M(T1,'Malware hooks the file system driver so that its own files never appear in directory listings, and it keeps a backdoor open for the attacker. What is this?',
    'بدافزاری درایور فایل‌سیستم را دستکاری می‌کند تا فایل‌های خودش هیچ‌وقت در فهرست پوشه‌ها دیده نشوند و یک در پشتی برای مهاجم باز نگه می‌دارد. این چیست؟',
    'پنهان‌کاری + در پشتی.',
    ['Rootkit','Spyware','Bloatware','Macro virus'],
    ['روت‌کیت (Rootkit)','جاسوس‌افزار','Bloatware','ویروس ماکرو'],
    'Rootkits give attackers backdoor access and hide themselves, for example by hooking drivers or infecting the boot record. Because the infected OS cannot be trusted, detection is best done from a trusted system.',
    'روت‌کیت به مهاجم دسترسی از در پشتی می‌دهد و خودش را پنهان می‌کند، مثلاً با دستکاری درایورها یا آلوده کردن رکورد بوت. چون سیستم‌عامل آلوده قابل اعتماد نیست، تشخیص بهتر است از یک سیستم مطمئن انجام شود.');

  M(T1,'Thousands of home routers infected with the same malware wait for instructions from a central server, then all flood one website at once. What are the infected routers?',
    'هزاران روتر خانگی آلوده به یک بدافزار منتظر دستور از یک سرور مرکزی می‌مانند و بعد همه با هم یک سایت را غرق درخواست می‌کنند. روترهای آلوده چه هستند؟',
    'زیر فرمان مرکزی.',
    ['Bots in a botnet run from a C&C server','Logic bombs set to go off on a date','Bloatware added by the router maker','Keyloggers that record typed passwords'],
    ['بات‌هایی در یک بات‌نت که از سرور C&C کنترل می‌شوند','بمب‌های منطقی که در یک تاریخ فعال می‌شوند','Bloatware که سازنده‌ی روتر اضافه کرده','Keyloggerهایی که رمزهای تایپ‌شده را ضبط می‌کنند'],
    'A bot is a system under an attacker\'s central control; a group of bots is a botnet. Command and control (C&C) often uses encrypted HTTP to changing hosts, though IRC (port 6667) is still seen.',
    'بات سیستمی است زیر کنترل مرکزی مهاجم؛ گروهی از بات‌ها بات‌نت است. فرماندهی و کنترل (C&C) اغلب از HTTP رمزگذاری‌شده به میزبان‌های متغیر استفاده می‌کند، هرچند IRC (پورت ۶۶۶۷) هنوز دیده می‌شود.');

  M(T1,'A small device is found plugged in between a teacher\'s keyboard and the PC. What is it most likely capturing?',
    'یک دستگاه کوچک بین کیبورد یک معلم و کامپیوتر پیدا می‌شود. احتمالاً چه چیزی را ضبط می‌کند؟',
    'سخت‌افزاری؛ هر کلیدی که زده می‌شود.',
    ['Every keystroke, including passwords','Screenshots of the display','Files saved on the hard drive','Network traffic from the PC'],
    ['همه‌ی کلیدهای زده‌شده، از جمله رمزها','عکس از صفحه‌نمایش','فایل‌های ذخیره‌شده روی دیسک','ترافیک شبکه‌ی کامپیوتر'],
    'A hardware keylogger records keyboard input. Software keyloggers may also capture mouse, touch or card-swipe input. MFA limits the damage because a stolen password alone is not enough.',
    'Keylogger سخت‌افزاری ورودی کیبورد را ثبت می‌کند. Keylogger نرم‌افزاری ممکن است ورودی ماوس، صفحه‌ی لمسی یا کشیدن کارت را هم بگیرد. MFA آسیب را محدود می‌کند، چون رمز دزدیده‌شده به‌تنهایی کافی نیست.');

  /* ---- Indicators ---- */
  M(T2,'Users see a note on their screens demanding Bitcoin, and their files now end in ".locked" and will not open. Which malware does this indicate?',
    'کاربران روی صفحه یادداشتی می‌بینند که بیت‌کوین می‌خواهد و فایل‌هایشان حالا با «.locked» تمام می‌شوند و باز نمی‌شوند. این نشانه‌ی کدام بدافزار است؟',
    'رمزگذاری + درخواست پول.',
    ['Ransomware (crypto malware)','Spyware that watches the user','Bloatware from the vendor','A rootkit hiding in the kernel'],
    ['باج‌افزار (Crypto malware)','جاسوس‌افزار که کاربر را می‌پاید','Bloatware از طرف سازنده','روت‌کیتی که در هسته پنهان شده'],
    'Ransomware IoCs include encrypted files, ransom notes, C&C traffic, lateral movement, misuse of legitimate tools and large outbound transfers (data stolen before encryption for extra pressure).',
    'IoCهای باج‌افزار: فایل‌های رمزگذاری‌شده، یادداشت باج، ترافیک C&C، حرکت جانبی، سوءاستفاده از ابزارهای سالم و انتقال حجم زیاد داده به بیرون (دزدیدن داده قبل از رمزگذاری برای فشار بیشتر).');

  M(T2,'Which indicator would be LEAST useful when writing detection rules for a stealthy rootkit?',
    'هنگام نوشتن قانون تشخیص برای یک روت‌کیت مخفی، کدام شاخص کمترین فایده را دارد؟',
    'روت‌کیت می‌خواهد دیده نشود.',
    ['A pop-up message demanding payment','Hashes of its known files','Its command and control domains','New services and reverse tunnels it creates'],
    ['پیام پاپ‌آپ درخواست پول','هش فایل‌های شناخته‌شده‌اش','دامنه‌های فرماندهی و کنترلش','سرویس‌ها و تونل‌های معکوس جدیدی که می‌سازد'],
    'Rootkits try to stay invisible, so they do not announce themselves. Useful rootkit IoCs are file hashes and signatures, C&C domains and IPs, behavior (new services, config changes) and opened ports or reverse proxy tunnels.',
    'روت‌کیت سعی می‌کند دیده نشود، پس خودش را اعلام نمی‌کند. IoCهای مفید روت‌کیت: هش و امضای فایل، دامنه و IP سرور C&C، رفتار (سرویس جدید، تغییر تنظیمات) و باز کردن پورت یا تونل پراکسی معکوس.');

  M(T2,'The firewall shows a workstation repeatedly connecting to an unknown host on TCP port 6667. What is the most likely explanation?',
    'فایروال نشان می‌دهد یک کامپیوتر مرتب به یک میزبان ناشناس روی پورت TCP ۶۶۶۷ وصل می‌شود. محتمل‌ترین توضیح چیست؟',
    'پورت IRC.',
    ['The workstation is a bot talking to a C&C server','The user is browsing secure HTTPS websites','A scheduled backup job is copying files','The workstation is downloading OS updates'],
    ['کامپیوتر یک بات است که با سرور C&C حرف می‌زند','کاربر سایت‌های امن HTTPS را مرور می‌کند','یک کار پشتیبان‌گیری زمان‌بندی‌شده فایل کپی می‌کند','کامپیوتر آپدیت سیستم‌عامل دانلود می‌کند'],
    'Port 6667 is the classic IRC port, long used for botnet command and control. Unexpected outbound connections to unknown hosts are a sign a system may be part of a botnet.',
    'پورت ۶۶۶۷ پورت کلاسیک IRC است که مدت‌ها برای فرماندهی بات‌نت استفاده شده. اتصال‌های غیرمنتظره به میزبان‌های ناشناس نشانه‌ی این است که سیستم ممکن است عضو بات‌نت باشد.');

  M(T2,'An infection starts from a shortcut (LNK) file on a USB drive, then uses msiexec.exe and cmd.exe to download more parts and survive reboots. Which malware type fits these IoCs?',
    'یک آلودگی از یک فایل میان‌بر (LNK) روی فلش USB شروع می‌شود، بعد با msiexec.exe و cmd.exe بخش‌های بیشتری دانلود می‌کند و بعد از ری‌استارت هم می‌ماند. کدام نوع بدافزار با این IoCها جور است؟',
    'مثل Raspberry Robin؛ با USB پخش می‌شود و از ابزارهای خود ویندوز استفاده می‌کند.',
    ['A worm','Bloatware','A logic bomb','A hardware keylogger'],
    ['کرم','Bloatware','بمب منطقی','Keylogger سخت‌افزاری'],
    'Worm IoCs include known malicious files, downloads of extra components, C&C contact, abuse of built-in tools (cmd.exe, msiexec.exe) and hands-on-keyboard attacker activity. Using system tools this way is often called "living off the land."',
    'IoCهای کرم: فایل‌های مخرب شناخته‌شده، دانلود بخش‌های اضافه، تماس با C&C، سوءاستفاده از ابزارهای داخلی (cmd.exe، msiexec.exe) و فعالیت مستقیم مهاجم پشت کیبورد. استفاده از ابزارهای سیستم به این شکل را «Living off the land» هم می‌گویند.');

  M(T2,'An analyst uploads a suspicious file to a site that scans it with dozens of antivirus engines. The engines report many different names. What does this usually mean?',
    'تحلیلگری یک فایل مشکوک را به سایتی می‌دهد که با ده‌ها موتور آنتی‌ویروس اسکنش می‌کند. موتورها اسم‌های خیلی متفاوتی گزارش می‌دهند. معمولاً یعنی چه؟',
    'هر شرکت اسم‌گذاری خودش را دارد.',
    ['Different vendors use different names for the same malware','The file contains dozens of different malware samples','The scanning site is broken','The malware changed itself during the scan'],
    ['فروشنده‌های مختلف برای یک بدافزار اسم‌های متفاوت می‌گذارند','فایل ده‌ها بدافزار متفاوت دارد','سایت اسکن خراب است','بدافزار در حین اسکن خودش را تغییر داد'],
    'Online tools like VirusTotal show results from many engines, and naming is not standardized between vendors. Other analysis methods include sandboxes, manual code review for scripts, and the strings tool to find readable artifacts.',
    'ابزارهای آنلاین مثل VirusTotal نتیجه‌ی موتورهای زیادی را نشان می‌دهند و نام‌گذاری بین فروشنده‌ها یکسان نیست. روش‌های دیگر تحلیل: Sandbox، بازبینی دستی کد اسکریپت‌ها و ابزار strings برای پیدا کردن متن‌های قابل خواندن.');

  /* ---- Defense & removal ---- */
  M(T3,'What is the single most important preparation for surviving a ransomware attack?',
    'مهم‌ترین آمادگی برای جان سالم به در بردن از حمله‌ی باج‌افزار چیست؟',
    'اگر فایل‌ها قفل شدند، از کجا برشان می‌گردانی؟',
    ['Separate backups the ransomware cannot reach','Paying the ransom quickly to get the key','A larger hard drive with more free space','Turning off antivirus updates to save time'],
    ['پشتیبان جدا که باج‌افزار به آن نرسد','پرداخت سریع باج برای گرفتن کلید','هارد بزرگ‌تر با فضای خالی بیشتر','خاموش کردن آپدیت آنتی‌ویروس برای صرفه‌جویی وقت'],
    'Separate (offline or isolated) backups let you restore without paying. Paying does not guarantee files back; sometimes attackers just ask for more. Some ransomware families have public decryption tools.',
    'پشتیبان جدا (آفلاین یا ایزوله) اجازه می‌دهد بدون پرداخت بازگردانی کنی. پرداخت تضمینی برای برگشتن فایل‌ها نیست؛ گاهی مهاجمان فقط پول بیشتری می‌خواهند. برای بعضی خانواده‌های باج‌افزار ابزار رمزگشایی عمومی وجود دارد.');

  M(T3,'Antimalware on a suspected rootkit machine reports "no threats," but network logs still show C&C traffic. What should the analyst do next?',
    'ضدبدافزار روی کامپیوتری که به روت‌کیت مشکوک است «هیچ تهدیدی» گزارش می‌دهد، اما لاگ شبکه هنوز ترافیک C&C نشان می‌دهد. تحلیلگر بعد چه کند؟',
    'به سیستم‌عامل آلوده اعتماد نکن.',
    ['Remove the drive and scan it from a trusted system','Run the same scan again to confirm the result','Disable the antivirus so the rootkit shows itself','Close the case, since the scan found no threats'],
    ['دیسک را جدا کن و از یک سیستم مطمئن اسکنش کن','همان اسکن را دوباره اجرا کن تا نتیجه تأیید شود','آنتی‌ویروس را خاموش کن تا روت‌کیت خودش را نشان دهد','پرونده را ببند، چون اسکن تهدیدی پیدا نکرد'],
    'A rootkit can make the running OS lie to security tools. Mounting the drive on another system (or scanning a VM snapshot) means the rootkit is not running and cannot hide.',
    'روت‌کیت می‌تواند سیستم‌عامل در حال اجرا را وادار کند به ابزارهای امنیتی دروغ بگوید. وصل کردن دیسک به سیستم دیگر (یا اسکن Snapshot ماشین مجازی) یعنی روت‌کیت اجرا نمی‌شود و نمی‌تواند پنهان شود.');

  M(T3,'A team wants to be certain a complex infection is fully gone from a workstation. What is the most reliable approach?',
    'تیمی می‌خواهد مطمئن شود یک آلودگی پیچیده کاملاً از یک کامپیوتر پاک شده. قابل اعتمادترین روش چیست؟',
    'شروع از صفر.',
    ['Wipe the drive and reimage from known good media','Run three different antivirus tools one after another','Quarantine every file that the scanners detect','Delete the user\'s profile and create a new one'],
    ['دیسک را پاک کن و از رسانه‌ی سالم Reimage کن','سه آنتی‌ویروس مختلف را پشت سر هم اجرا کن','همه‌ی فایل‌هایی را که اسکنرها پیدا می‌کنند قرنطینه کن','پروفایل کاربر را حذف کن و یک پروفایل تازه بساز'],
    'It is very hard to prove every part of a complex infection was removed by tools. Wiping and reimaging (or restoring a known good backup) is standard practice. Rare BIOS/UEFI malware may survive even that.',
    'ثابت کردن اینکه ابزارها همه‌ی بخش‌های یک آلودگی پیچیده را پاک کرده‌اند خیلی سخت است. پاک کردن و Reimage (یا بازگردانی پشتیبان سالم) روش استاندارد است. بدافزار نادر BIOS/UEFI ممکن است حتی از این هم جان سالم به در ببرد.');

  M(T3,'Which control best stops a worm from spreading between departments once one machine is infected?',
    'وقتی یک کامپیوتر آلوده شد، کدام کنترل بهتر جلوی پخش کرم بین دپارتمان‌ها را می‌گیرد؟',
    'اگر دستگاه‌ها نتوانند با هم حرف بزنند…',
    ['Network segmentation with firewall and IPS rules','Security awareness posters in every department','Longer passwords for every user account','Code review of the department\'s applications'],
    ['بخش‌بندی شبکه با قوانین فایروال و IPS','پوستر آموزش امنیت در همه‌ی بخش‌ها','رمز طولانی‌تر برای همه‌ی حساب‌های کاربری','بازبینی کد برنامه‌های آن بخش'],
    'Worms need to reach other vulnerable systems. Firewalls, IPS and segmentation block that path, and patching removes the hole. After infection, antimalware/EDR or a full reinstall cleans up.',
    'کرم باید به سیستم‌های آسیب‌پذیر دیگر برسد. فایروال، IPS و بخش‌بندی این مسیر را می‌بندند و وصله سوراخ را از بین می‌برد. بعد از آلودگی، ضدبدافزار/EDR یا نصب مجدد کامل پاک‌سازی می‌کند.');

  M(T3,'A keylogger is suspected on shared lab PCs. Which control limits the damage even if a password is captured?',
    'روی کامپیوترهای مشترک آزمایشگاه به Keylogger مشکوکیم. کدام کنترل حتی اگر رمز ضبط شود آسیب را محدود می‌کند؟',
    'رمز به‌تنهایی کافی نباشد.',
    ['Multifactor authentication','Longer screen-lock timeouts','Disabling Wi-Fi','Hiding file extensions'],
    ['احراز هویت چندعاملی (MFA)','زمان قفل صفحه‌ی طولانی‌تر','خاموش کردن Wi-Fi','پنهان کردن پسوند فایل‌ها'],
    'MFA does not stop the keylogger, but a captured password alone no longer gets the attacker in. Patching, antimalware and, in untrusted environments, booting from a trusted USB also help.',
    'MFA جلوی Keylogger را نمی‌گیرد، اما رمز ضبط‌شده به‌تنهایی دیگر مهاجم را وارد نمی‌کند. وصله، ضدبدافزار و در محیط‌های نامطمئن، بوت از یک USB مطمئن هم کمک می‌کنند.');

  M(T3,'Which technology helps prevent rootkits that load before the operating system during startup?',
    'کدام فناوری کمک می‌کند جلوی روت‌کیت‌هایی که قبل از سیستم‌عامل در زمان بوت بارگذاری می‌شوند گرفته شود؟',
    'فقط کد امضاشده موقع بوت.',
    ['Secure Boot','A web application firewall','A spam filter','Data loss prevention'],
    ['Secure Boot','فایروال برنامه‌ی وب (WAF)','فیلتر اسپم','جلوگیری از نشت داده (DLP)'],
    'Secure Boot allows only trusted, signed code to load during startup, which blocks many boot-level rootkits. Patching, secure configurations and least privilege also reduce the chance a rootkit gets installed.',
    'Secure Boot فقط اجازه‌ی بارگذاری کد مطمئن و امضاشده را در زمان بوت می‌دهد و جلوی بسیاری از روت‌کیت‌های سطح بوت را می‌گیرد. وصله، پیکربندی امن و حداقل دسترسی هم احتمال نصب روت‌کیت را کم می‌کنند.');

  M(T3,'An analyst receives a Python script found on a server and needs to know if it is malicious. What is the simplest first step?',
    'تحلیلگری یک اسکریپت پایتون پیدا شده روی سرور را دریافت می‌کند و باید بفهمد مخرب است یا نه. ساده‌ترین قدم اول چیست؟',
    'پایتون کامپایل نمی‌شود؛ متنش خواناست.',
    ['Open it in a text editor and read the code','Run a decompiler on it','Run it on a production server to watch it','Email it to all staff for review'],
    ['در یک ویرایشگر متن بازش کن و کد را بخوان','دی‌کامپایلر رویش اجرا کن','روی سرور اصلی اجرایش کن تا ببینی','برای همه‌ی کارمندان ایمیلش کن تا بررسی کنند'],
    'Scripts and interpreted code (Python, Perl, PowerShell) are plain text, so manual code analysis is common. A sandbox is the safe place to watch behavior. Never run unknown code on production systems.',
    'اسکریپت‌ها و کدهای مفسری (Python، Perl، PowerShell) متن ساده‌اند؛ پس بازبینی دستی کد رایج است. Sandbox جای امن برای دیدن رفتار است. هیچ‌وقت کد ناشناس را روی سیستم اصلی اجرا نکن.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['3']={t:['Malicious code','کد مخرب'],b:[
    PP('Matched to Chapter 3 of the course textbook (objective 2.4, malware attacks). Short review notes in our own words; read the chapter for the full explanation.',
      'این بخش با فصل ۳ کتاب درس جور است (سرفصل 2.4، حمله‌های بدافزاری). یادداشت‌های کوتاه مرور به زبان خودمان؛ توضیح کامل را در کتاب بخوان.'),

    H('Malware types at a glance','انواع بدافزار در یک نگاه'),
    TB([['Type','نوع'],['Key trait','ویژگی کلیدی'],['Main defense','دفاع اصلی']],[
      [['Ransomware','باج‌افزار'],['Encrypts or threatens data, demands payment','داده را رمز می‌کند یا تهدید می‌کند، پول می‌خواهد'],['Separate backups','پشتیبان جدا']],
      [['Trojan / RAT','تروجان / RAT'],['Looks legitimate; user runs it; RAT = remote control','ظاهر سالم؛ کاربر اجرا می‌کند؛ RAT = کنترل از راه دور'],['Awareness, app control, EDR','آموزش، کنترل برنامه، EDR']],
      [['Worm','کرم'],['Spreads and installs itself','خودش پخش و نصب می‌شود'],['Firewalls, IPS, segmentation, patching','فایروال، IPS، بخش‌بندی، وصله']],
      [['Virus','ویروس'],['Self-copies after activation; trigger + payload','بعد از فعال شدن کپی می‌شود؛ ماشه + محموله'],['Antimalware, awareness','ضدبدافزار، آموزش']],
      [['Spyware','جاسوس‌افزار'],['Goal is gathering information','هدف: جمع کردن اطلاعات'],['Antispyware, app control','ضدجاسوس‌افزار، کنترل برنامه']],
      [['Bloatware','Bloatware'],['Unwanted preinstalled apps; not really malicious','برنامه‌ی ناخواسته‌ی پیش‌نصب؛ واقعاً مخرب نیست'],['Uninstall, clean image','حذف، ایمیج تمیز']],
      [['Keylogger','Keylogger'],['Captures keystrokes (software or hardware)','ضبط کلیدها (نرم‌افزاری یا سخت‌افزاری)'],['MFA limits impact','MFA آسیب را کم می‌کند']],
      [['Logic bomb','بمب منطقی'],['Code inside a program, runs on a condition','کد داخل برنامه، با یک شرط اجرا می‌شود'],['Code review','بازبینی کد']],
      [['Rootkit','روت‌کیت'],['Backdoor + hides itself','در پشتی + پنهان‌کاری'],['Scan from trusted system, Secure Boot, rebuild','اسکن از سیستم مطمئن، Secure Boot، بازسازی']]]),

    H('Virus varieties','انواع ویروس'),
    L([['Memory-resident (stays in RAM) vs. non-memory-resident (runs, spreads, exits).','مقیم در حافظه (در RAM می‌ماند) در برابر غیرمقیم (اجرا، پخش، خروج).'],
       ['Boot sector, macro (office documents) and email viruses.','بوت‌سکتور، ماکرو (سندهای آفیس) و ویروس ایمیلی.'],
       ['Fileless: lives only in memory, often abuses PowerShell; the only artifact may be a persistence entry such as a registry key.','بدون فایل: فقط در حافظه است، اغلب از PowerShell سوءاستفاده می‌کند؛ تنها ردپا ممکن است یک ورودی ماندگاری مثل کلید رجیستری باشد.']]),

    H('Common indicators of compromise','شاخص‌های رایج نفوذ'),
    L([['Command and control (C&C) traffic to known bad IPs or domains; IRC on port 6667 is a classic botnet sign.','ترافیک C&C به IP یا دامنه‌ی بد شناخته‌شده؛ IRC روی پورت ۶۶۶۷ نشانه‌ی کلاسیک بات‌نت است.'],
       ['File hashes and signatures of known malware; new files, folders, services or registry entries.','هش و امضای بدافزار شناخته‌شده؛ فایل، پوشه، سرویس یا ورودی رجیستری جدید.'],
       ['Legitimate tools used in odd ways (cmd.exe, msiexec.exe, PowerShell), lateral movement, hands-on-keyboard activity.','استفاده‌ی عجیب از ابزارهای سالم (cmd.exe، msiexec.exe، PowerShell)، حرکت جانبی، فعالیت مستقیم مهاجم.'],
       ['Ransomware: encrypted files, ransom notes and large outbound transfers. Logic bombs and bloatware have few or no IoCs.','باج‌افزار: فایل رمزشده، یادداشت باج و انتقال حجیم به بیرون. بمب منطقی و Bloatware تقریباً IoC ندارند.']]),

    H('Analyzing and removing malware','تحلیل و حذف بدافزار'),
    L([['Analysis: multi-engine sites (VirusTotal), sandboxes, manual review of scripts, the strings tool.','تحلیل: سایت‌های چندموتوره (VirusTotal)، Sandbox، بازبینی دستی اسکریپت، ابزار strings.'],
       ['Different vendors give different names to the same malware.','فروشنده‌های مختلف برای یک بدافزار اسم‌های متفاوت می‌گذارند.'],
       ['Safest removal: wipe and reinstall/reimage or restore a known good backup.','امن‌ترین حذف: پاک کردن و نصب مجدد/Reimage یا بازگردانی پشتیبان سالم.']]),

    TT('Exam shortcut: spreads by itself = worm; needs the user to run it = Trojan/virus; hides + backdoor = rootkit; triggers on a condition inside code = logic bomb; unwanted but not malicious = bloatware.',
      'نکته‌ی امتحان: خودش پخش می‌شود = کرم؛ کاربر باید اجرایش کند = تروجان/ویروس؛ پنهان + در پشتی = روت‌کیت؛ داخل کد با یک شرط اجرا می‌شود = بمب منطقی؛ ناخواسته اما نه مخرب = Bloatware.')
  ]};
})();
