/* Textbook chapter 15 ("Digital Forensics") of Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.
   Original questions and notes written for the chapter's objective (4.8); no text from the book is copied.
   Adds section '15' to the textbook pack (packs/secbook.js). The correct option is always first in o/of. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secbook'});
  if(!pack)return;
  pack.sections['15']={en:'Digital forensics',fa:'جرم‌شناسی دیجیتال'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b15_'+(++n),sec:'15',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Legal holds & e-discovery',T2='Acquisition',T3='Integrity & custody',T4='Reporting & intelligence';

  /* ---- Legal holds ---- */
  M(T1,'Legal counsel tells IT that a lawsuit is expected and that emails, backups and files about a project must not be deleted, even by normal retention jobs. What is this notice?',
    'مشاور حقوقی به IT می‌گوید یک دعوای حقوقی در راه است و ایمیل‌ها، نسخه‌های پشتیبان و فایل‌های یک پروژه نباید پاک شوند، حتی با کارهای عادی حذف خودکار. این ابلاغیه چیست؟',
    'دستور «نگه داشتن» داده برای دادگاه.',
    ['A legal (litigation) hold','E-discovery','A chain of custody','A right-to-audit clause'],
    ['Legal hold (توقیف قانونی داده)','E-discovery (کشف الکترونیکی)','زنجیره‌ی نگهداری مدرک','بند حق حسابرسی'],
    'A legal hold requires an organization to preserve data that might otherwise be changed or destroyed in normal operations, including backups and paper. E-discovery is the later process of finding and handing over that electronic information.',
    'Legal hold سازمان را موظف می‌کند داده‌هایی را که در کار عادی تغییر می‌کنند یا پاک می‌شوند نگه دارد، از جمله نسخه‌ی پشتیبان و کاغذ. E-discovery مرحله‌ی بعد است: پیدا کردن و تحویل دادن همان اطلاعات الکترونیکی.');

  M(T1,'After a legal hold, an admin lets the nightly job delete the relevant mailboxes anyway. What can the court call this?',
    'بعد از Legal hold، یک مدیر اجازه می‌دهد کار شبانه صندوق‌های ایمیل مربوط را باز هم پاک کند. دادگاه به این چه می‌گوید؟',
    'از بین بردن مدرک، حتی از روی بی‌دقتی.',
    ['Spoliation of evidence','Nonrepudiation','Data sovereignty','Admissibility'],
    ['Spoliation of evidence (از بین بردن مدرک)','Nonrepudiation (انکارناپذیری)','حاکمیت داده','قابل‌پذیرش بودن مدرک'],
    'Spoliation means altering, destroying, hiding or withholding relevant evidence, whether intentional, reckless or negligent. It can lead to sanctions and losing the case.',
    'Spoliation یعنی تغییر دادن، از بین بردن، پنهان کردن یا ندادن مدرک مربوط، چه عمدی، چه از روی بی‌احتیاطی یا سهل‌انگاری. می‌تواند به جریمه و باختن پرونده منجر شود.');

  M(T1,'A company stores data with a cloud provider. Which contract term best ensures it can get forensic data from the provider after an incident?',
    'شرکتی داده‌اش را نزد یک ارائه‌دهنده‌ی ابری نگه می‌دارد. کدام بند قرارداد بهتر تضمین می‌کند بعد از حادثه بتواند داده‌ی جرم‌شناسی از ارائه‌دهنده بگیرد؟',
    'از قبل در قرارداد بنویس.',
    ['A right-to-audit / forensic cooperation clause','A nondisclosure agreement only','A shorter SLA response time','Choosing the cheapest region'],
    ['بند حق حسابرسی / همکاری جرم‌شناسی','فقط یک NDA','زمان پاسخ کوتاه‌تر در SLA','انتخاب ارزان‌ترین منطقه'],
    'In the cloud you usually cannot image the provider\'s hardware, so contracts should cover right to audit, access to forensic data, breach notification timeframes and which jurisdiction applies. Data location also matters for jurisdiction.',
    'در ابر معمولاً نمی‌توانی از سخت‌افزار ارائه‌دهنده Image بگیری، پس قرارداد باید حق حسابرسی، دسترسی به داده‌ی جرم‌شناسی، مهلت اطلاع‌رسانی نفوذ و قانون حاکم (Jurisdiction) را پوشش دهد. محل داده هم روی قانون حاکم اثر دارد.');

  /* ---- Acquisition ---- */
  M(T2,'A responder reaches a running server. Following the order of volatility, what should be captured first?',
    'یک پاسخ‌دهنده به یک سرور روشن می‌رسد. طبق ترتیب فرّاری (Order of volatility) اول چه چیزی باید گرفته شود؟',
    'چیزی که زودتر از همه از بین می‌رود.',
    ['CPU cache, registers and RAM contents','The hard drive image','Backup tapes','Printed logs'],
    ['Cache و رجیسترهای CPU و محتوای RAM','Image هارد دیسک','نوارهای پشتیبان','لاگ‌های چاپ‌شده'],
    'Capture the most volatile data first: CPU registers and cache, then RAM, routing/ARP tables and running processes, temporary files, then disk, then remote logs and monitoring data, and finally backups and archives.',
    'اول فرّارترین داده را بگیر: رجیستر و Cache پردازنده، بعد RAM، جدول مسیریابی/ARP و پردازه‌های در حال اجرا، فایل‌های موقت، بعد دیسک، بعد لاگ‌های راه دور، و در آخر پشتیبان‌ها و بایگانی.');

  M(T2,'Which acquisition copies a drive bit by bit, including unallocated and slack space, so deleted data can be recovered later?',
    'کدام روش برداشت، دیسک را بیت به بیت کپی می‌کند، از جمله فضای تخصیص‌نیافته و Slack، تا بعداً بتوان داده‌ی پاک‌شده را بازیابی کرد؟',
    'فقط کپی فایل‌ها کافی نیست.',
    ['A forensic disk image (e.g., dd or FTK Imager)','Copying the user folders','A file-level backup','Exporting the event log'],
    ['Image جرم‌شناسی از دیسک (مثل dd یا FTK Imager)','کپی پوشه‌های کاربر','پشتیبان در سطح فایل','خروجی گرفتن از Event log'],
    'Imaging tools such as dd, FTK Imager and WinHex copy every sector, so slack space and deleted files remain available for recovery. Normal file copies miss them and also change metadata.',
    'ابزارهای Image مثل dd، FTK Imager و WinHex همه‌ی سکتورها را کپی می‌کنند، پس فضای Slack و فایل‌های پاک‌شده برای بازیابی می‌مانند. کپی معمولی فایل این‌ها را ندارد و متادیتا را هم عوض می‌کند.');

  M(T2,'An analyst must examine a suspect USB drive without the computer writing anything to it. What should be used?',
    'تحلیلگری باید یک فلش مشکوک را بررسی کند بدون اینکه کامپیوتر چیزی روی آن بنویسد. از چه چیزی باید استفاده کند؟',
    'سخت‌افزاری که نوشتن را می‌بندد.',
    ['A write blocker','A degausser','A Faraday bag','A packet sniffer'],
    ['Write blocker (مسدودکننده‌ی نوشتن)','Degausser','کیسه‌ی فارادی','Packet sniffer'],
    'A write blocker lets the examiner read the device while preventing any write, so the original evidence stays unchanged. Work is then done on a verified copy, not the original.',
    'Write blocker اجازه‌ی خواندن می‌دهد ولی جلوی هر نوشتنی را می‌گیرد تا مدرک اصلی دست‌نخورده بماند. بعد کار روی یک کپی تأییدشده انجام می‌شود، نه روی نسخه‌ی اصلی.');

  M(T2,'A suspicious cloud VM must be preserved quickly before it is terminated. What is the usual way to acquire it?',
    'یک ماشین مجازی ابری مشکوک باید قبل از حذف شدن سریع حفظ شود. روش معمول برداشت داده از آن چیست؟',
    'در دنیای مجازی، «عکس» بگیر.',
    ['Take a snapshot of the VM and its volumes','Pull the physical disk from the data center','Run a degausser on the host','Reinstall the VM and copy the logs'],
    ['از VM و دیسک‌هایش Snapshot بگیر','دیسک فیزیکی را از مرکز داده بیرون بکش','روی میزبان Degausser بزن','VM را دوباره نصب کن و لاگ‌ها را کپی کن'],
    'Virtual machines are captured with snapshots (memory and disk state) and cloud volumes with volume copies. Physical access to provider hardware is usually not possible.',
    'ماشین‌های مجازی با Snapshot (وضعیت حافظه و دیسک) و دیسک‌های ابری با کپی Volume برداشت می‌شوند. دسترسی فیزیکی به سخت‌افزار ارائه‌دهنده معمولاً ممکن نیست.');

  M(T2,'Which source of network forensic data shows who talked to whom, when and how much, but not the content?',
    'کدام منبع داده‌ی جرم‌شناسی شبکه نشان می‌دهد چه کسی با چه کسی، کی و چقدر ارتباط داشته، ولی محتوا را نشان نمی‌دهد؟',
    'خلاصه‌ی جریان‌ها، نه بسته‌ی کامل.',
    ['Flow data (NetFlow)','Full packet capture','A disk image','A memory dump'],
    ['داده‌ی جریان (NetFlow)','ضبط کامل بسته‌ها','Image دیسک','Dump حافظه'],
    'Flow records summarize connections (addresses, ports, times, byte counts). Full packet capture keeps the content but is large and rarely kept for long, so it is often not available after the fact.',
    'رکوردهای Flow اتصال‌ها را خلاصه می‌کنند (آدرس، پورت، زمان، حجم). ضبط کامل بسته محتوا را هم دارد ولی خیلی حجیم است و مدت کوتاهی نگه داشته می‌شود، پس بعد از حادثه اغلب در دسترس نیست.');

  /* ---- Integrity & custody ---- */
  M(T3,'Before and after copying a drive, an examiner computes a SHA-256 value of both the original and the image. Why?',
    'یک بازرس قبل و بعد از کپی دیسک، مقدار SHA-256 هم نسخه‌ی اصلی و هم Image را حساب می‌کند. چرا؟',
    'ثابت کن هیچ بیتی عوض نشده.',
    ['To prove the image matches the original and has not changed','To encrypt the evidence','To compress the image','To remove malware from the image'],
    ['برای اثبات اینکه Image با اصل یکی است و تغییر نکرده','برای رمز کردن مدرک','برای فشرده کردن Image','برای پاک کردن بدافزار از Image'],
    'Matching hashes show the copy is identical and unchanged, which supports admissibility. MD5 and SHA-1 are still common in forensics; checksums detect changes but do not give the same unique fingerprint as a hash.',
    'یکی بودن هش‌ها نشان می‌دهد کپی دقیقاً همان اصل است و تغییر نکرده، که به پذیرش در دادگاه کمک می‌کند. MD5 و SHA-1 هنوز در جرم‌شناسی رایج‌اند؛ Checksum تغییر را نشان می‌دهد ولی اثر انگشت یکتای هش را نمی‌دهد.');

  M(T3,'Which document records every person who handled a piece of evidence, when, and why, from collection to court?',
    'کدام سند هر کسی را که مدرک را در دست داشته، زمان و دلیلش را از جمع‌آوری تا دادگاه ثبت می‌کند؟',
    'زنجیره‌ای از دست به دست شدن.',
    ['Chain of custody','Legal hold notice','Evidence hash list','Incident timeline'],
    ['زنجیره‌ی نگهداری (Chain of custody)','ابلاغیه‌ی Legal hold','فهرست هش مدارک','خط زمانی حادثه'],
    'Chain of custody forms track each transfer: item ID, who gave and who received it (signatures), date, time, purpose and storage. Gaps can make evidence inadmissible.',
    'فرم Chain of custody هر جابه‌جایی را ثبت می‌کند: شناسه‌ی مورد، تحویل‌دهنده و تحویل‌گیرنده (امضا)، تاریخ، ساعت، هدف و محل نگهداری. هر شکاف می‌تواند مدرک را غیرقابل‌پذیرش کند.');

  M(T3,'For evidence to be admissible, which of these matters most?',
    'برای اینکه مدرک در دادگاه پذیرفته شود، کدام از همه مهم‌تر است؟',
    'مربوط بودن + دست‌نخورده بودن.',
    ['It is relevant and has stayed unaltered, with documented handling','It was collected by the most senior manager','It is stored only in the cloud','It was compressed to save space'],
    ['مربوط به پرونده باشد و دست‌نخورده مانده باشد، با ثبت نحوه‌ی نگهداری','مدیر ارشد آن را جمع کرده باشد','فقط در ابر ذخیره شده باشد','برای صرفه‌جویی فشرده شده باشد'],
    'Admissible evidence must be relevant, reliably collected and unchanged, which is shown through hashes, write blockers, documented tools and procedures, and an intact chain of custody.',
    'مدرک قابل‌پذیرش باید مربوط باشد، درست جمع شده باشد و تغییر نکرده باشد؛ این با هش، Write blocker، ثبت ابزارها و روش‌ها و یک Chain of custody کامل نشان داده می‌شود.');

  M(T3,'A forensic workstation log notes the tool name, version and patch level used for each step. Why is this recorded?',
    'لاگ ایستگاه جرم‌شناسی نام ابزار، نسخه و سطح وصله‌ی آن را برای هر مرحله ثبت می‌کند. چرا؟',
    'دیگران باید بتوانند کار را تکرار و بررسی کنند.',
    ['So the process can be repeated and defended, including known tool limitations','To pass a vulnerability scan','To speed up imaging','Because licenses require it'],
    ['تا روند قابل تکرار و قابل دفاع باشد، از جمله محدودیت‌های شناخته‌شده‌ی ابزار','برای قبول شدن در اسکن آسیب‌پذیری','برای سریع‌تر شدن Image گرفتن','چون مجوز نرم‌افزار می‌خواهد'],
    'Documenting tools, versions and settings lets another examiner reproduce the results and lets the report explain any limitations that affect the findings.',
    'ثبت ابزار، نسخه و تنظیمات اجازه می‌دهد بازرس دیگری نتیجه را تکرار کند و گزارش بتواند محدودیت‌هایی را که روی یافته‌ها اثر دارند توضیح دهد.');

  /* ---- Reporting & intelligence ---- */
  M(T4,'In what order does a typical forensic report present its content?',
    'یک گزارش جرم‌شناسی معمولاً محتوا را به چه ترتیبی ارائه می‌دهد؟',
    'اول خلاصه، آخر نتیجه‌گیری.',
    ['Summary → process, tools and limitations → findings with evidence → conclusions/recommendations','Raw logs → summary → tools','Recommendations only','Timeline → invoice → summary'],
    ['خلاصه ← روش، ابزار و محدودیت‌ها ← یافته‌ها با مدرک ← نتیجه‌گیری/پیشنهاد','لاگ خام ← خلاصه ← ابزار','فقط پیشنهادها','خط زمانی ← فاکتور ← خلاصه'],
    'A good report starts with a short summary of key findings, then explains methods, tools, assumptions and limitations, then details findings with supporting evidence, and ends with conclusions and recommendations.',
    'یک گزارش خوب با خلاصه‌ی کوتاه یافته‌ها شروع می‌شود، بعد روش‌ها، ابزارها، فرض‌ها و محدودیت‌ها را توضیح می‌دهد، بعد یافته‌ها را با مدرک می‌آورد و با نتیجه‌گیری و پیشنهاد تمام می‌شود.');

  M(T4,'A national defense team analyzes an APT\'s malware and infrastructure to understand and counter the adversary. What use of forensics is this?',
    'یک تیم دفاع ملی بدافزار و زیرساخت یک APT را تحلیل می‌کند تا دشمن را بشناسد و با آن مقابله کند. این کدام کاربرد جرم‌شناسی است؟',
    'هدف دادگاه نیست، شناخت دشمن است.',
    ['Strategic intelligence and counterintelligence','E-discovery','Legal hold','Data recovery for users'],
    ['اطلاعات راهبردی و ضدجاسوسی','E-discovery','Legal hold','بازیابی داده برای کاربران'],
    'Besides legal cases and incident response, forensics supports intelligence (understanding adversary tools and methods) and counterintelligence (detecting and countering their operations).',
    'جرم‌شناسی علاوه بر پرونده‌ی حقوقی و پاسخ به حادثه، به اطلاعات (شناخت ابزار و روش دشمن) و ضدجاسوسی (کشف و خنثی کردن عملیاتش) کمک می‌کند.');

  M(T4,'Which forensic tool is a full suite that images drives, indexes them and lets the examiner search and build a case?',
    'کدام ابزار جرم‌شناسی یک مجموعه‌ی کامل است که از دیسک Image می‌گیرد، فهرست‌سازی می‌کند و به بازرس اجازه‌ی جست‌وجو و ساختن پرونده می‌دهد؟',
    'نه فقط کپی، بلکه تحلیل کامل.',
    ['Autopsy or a similar forensic suite','dd','Wireshark','A write blocker'],
    ['Autopsy یا مجموعه‌ی جرم‌شناسی مشابه','dd','Wireshark','Write blocker'],
    'Forensic suites such as Autopsy (and commercial ones like FTK or EnCase) combine acquisition, indexing, timelines, keyword search, file recovery and reporting. dd only copies; Wireshark analyzes network traffic.',
    'مجموعه‌های جرم‌شناسی مثل Autopsy (و نمونه‌های تجاری مثل FTK و EnCase) برداشت، فهرست‌سازی، خط زمانی، جست‌وجوی کلمه، بازیابی فایل و گزارش را با هم دارند. dd فقط کپی می‌کند؛ Wireshark ترافیک شبکه را تحلیل می‌کند.');

  M(T4,'A deleted file\'s directory entry is gone but its data blocks have not been overwritten. What can recover it?',
    'ورودی پوشه‌ی یک فایل پاک‌شده رفته ولی بلاک‌های داده‌اش هنوز بازنویسی نشده‌اند. با چه چیزی می‌شود آن را برگرداند؟',
    'دنبال امضای شروع فایل در بلاک‌ها بگرد.',
    ['File carving / data recovery tools on a forensic image','A legal hold','A write blocker alone','Reinstalling the OS'],
    ['File carving / ابزار بازیابی داده روی Image جرم‌شناسی','Legal hold','فقط Write blocker','نصب دوباره‌ی سیستم‌عامل'],
    'Deleting usually removes only the pointer. Recovery tools and file carving search unallocated space for file headers and structure. This is why bit-by-bit images matter.',
    'پاک کردن معمولاً فقط اشاره‌گر را حذف می‌کند. ابزارهای بازیابی و File carving فضای تخصیص‌نیافته را برای سرآیند و ساختار فایل جست‌وجو می‌کنند. برای همین Image بیت‌به‌بیت مهم است.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};

  pack.study['15']={t:['Digital forensics','جرم‌شناسی دیجیتال'],b:[
    PP('Matched to Chapter 15 of the textbook (objective 4.8). Short review notes in our own words; read the chapter for the full explanation.',
      'این بخش با فصل ۱۵ کتاب جور است (سرفصل 4.8). یادداشت‌های کوتاه مرور به زبان خودمان؛ توضیح کامل را در کتاب بخوان.'),
    H('Legal side','جنبه‌ی حقوقی'),
    L([['Legal (litigation) hold = preserve relevant data, including backups and paper; stop normal deletion.','Legal hold = نگه داشتن داده‌ی مربوط، از جمله پشتیبان و کاغذ؛ حذف عادی متوقف شود.'],
       ['Spoliation = altering, destroying or hiding evidence (even by negligence).','Spoliation = تغییر، نابودی یا پنهان کردن مدرک (حتی از روی سهل‌انگاری).'],
       ['E-discovery = finding and producing electronic information for a case.','E-discovery = پیدا کردن و تحویل اطلاعات الکترونیکی برای پرونده.'],
       ['Cloud: put right to audit, forensic access, breach notification time and jurisdiction in the contract.','ابر: حق حسابرسی، دسترسی جرم‌شناسی، مهلت اطلاع نفوذ و قانون حاکم را در قرارداد بیاور.']]),
    H('Acquisition','برداشت داده'),
    L([['Order of volatility: CPU cache/registers → RAM → routing/ARP tables, processes → temp files → disk → remote logs → backups/archives.','ترتیب فرّاری: Cache/رجیستر ← RAM ← جدول مسیریابی/ARP، پردازه‌ها ← فایل موقت ← دیسک ← لاگ راه دور ← پشتیبان/بایگانی.'],
       ['Disk images are bit by bit (dd, FTK Imager, WinHex) and keep slack and unallocated space.','Image دیسک بیت‌به‌بیت است (dd، FTK Imager، WinHex) و فضای Slack و تخصیص‌نیافته را نگه می‌دارد.'],
       ['VMs → snapshots; cloud → volume copies; phones and workstations → images.','VM ← Snapshot؛ ابر ← کپی Volume؛ گوشی و کامپیوتر ← Image.'],
       ['Network: full packet capture (content, rarely kept) vs flow data (who/when/how much).','شبکه: ضبط کامل بسته (محتوا، کم نگه داشته می‌شود) در برابر Flow (چه کسی/کی/چقدر).'],
       ['Use write blockers; work on copies, not the original.','از Write blocker استفاده کن؛ روی کپی کار کن، نه اصل.']]),
    H('Integrity, custody, reporting','یکپارچگی، نگهداری، گزارش'),
    L([['Hash original and copy (MD5/SHA-1 still common, SHA-256 better); matching hashes = unchanged.','از اصل و کپی هش بگیر (MD5/SHA-1 هنوز رایج، SHA-256 بهتر)؛ هش یکسان = بدون تغییر.'],
       ['Chain of custody: item ID, who handed over and who received (signatures), when, why, how transported and stored.','Chain of custody: شناسه، تحویل‌دهنده و تحویل‌گیرنده (امضا)، زمان، دلیل، نحوه‌ی حمل و نگهداری.'],
       ['Admissible = relevant + reliable + unaltered + documented.','قابل‌پذیرش = مربوط + قابل اعتماد + دست‌نخورده + مستند.'],
       ['Report: summary → methods, tools, limits → findings with evidence → conclusions and recommendations.','گزارش: خلاصه ← روش، ابزار، محدودیت ← یافته با مدرک ← نتیجه و پیشنهاد.'],
       ['Forensics also feeds intelligence and counterintelligence.','جرم‌شناسی به اطلاعات و ضدجاسوسی هم کمک می‌کند.']]),
    TT('Exam shortcut: most volatile first (RAM before disk). Hash before and after. Chain of custody for every hand-off. Legal hold stops deletion.',
      'نکته‌ی امتحان: اول فرّارترین (RAM قبل از دیسک). قبل و بعد هش بگیر. برای هر دست‌به‌دست شدن Chain of custody. Legal hold جلوی حذف را می‌گیرد.')
  ]};
})();
