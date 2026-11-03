/* Security+ extension: Section B9, matched to Chapter 9 ("Resilience and Physical Security") of the course
   textbook (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written
   for the chapter's objectives (1.2, 2.4, 3.1, 3.4); no text or review questions from the book are copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['B9']={en:'Book Ch. 9: Resilience and physical security',fa:'فصل ۹ کتاب: تاب‌آوری و امنیت فیزیکی'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b9_'+(++n),sec:'B9',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Resilient design',T2='Backups & storage',T3='Recovery sites, power & testing',T4='Physical security';

  /* ---- Resilient design ---- */
  M(T1,'All web traffic enters through one firewall. If it fails, the whole site goes offline. What is this firewall?',
    'همه‌ی ترافیک وب از یک فایروال وارد می‌شود. اگر خراب شود، کل سایت از دسترس خارج می‌شود. این فایروال چیست؟',
    'یک جزء که خرابی‌اش همه چیز را می‌خواباند.',
    ['A single point of failure','A load balancer','A bastion host','A compensating control'],
    ['نقطه‌ی شکست واحد (SPOF)','متعادل‌کننده‌ی بار','Bastion host','کنترل جبرانی'],
    'A single point of failure is any one device, link or component whose failure stops the service. Resilient designs find them and add redundancy (a second firewall, a second path) or document the accepted risk.',
    'نقطه‌ی شکست واحد هر دستگاه، اتصال یا جزئی است که خرابی‌اش سرویس را متوقف کند. طراحی تاب‌آور آن‌ها را پیدا می‌کند و افزونگی اضافه می‌کند (فایروال دوم، مسیر دوم) یا ریسکِ پذیرفته‌شده را مستند می‌کند.');

  M(T1,'An online store puts four identical web servers behind one virtual address. Traffic is spread across them, and one server can be taken out of rotation to be patched while users notice nothing. What is spreading the traffic?',
    'یک فروشگاه آنلاین چهار وب‌سرور یکسان را پشت یک آدرس مجازی گذاشته. ترافیک بینشان پخش می‌شود و می‌شود یکی را برای وصله کردن از چرخه بیرون آورد بدون این‌که کاربر بفهمد. چه چیزی ترافیک را پخش می‌کند؟',
    'چند سیستم که مثل یک منبع دیده می‌شوند و بار را تقسیم می‌کنند.',
    ['A load balancer','A RAID 0 array','A cold site','A UPS'],
    ['Load balancer (متعادل‌کننده‌ی بار)','آرایه‌ی RAID 0','سایت سرد','UPS'],
    'A load balancer makes several systems look like one resource and distributes requests across them. That adds capacity and redundancy, and lets admins drain traffic from a server to patch or upgrade it. Clustering instead joins computers so they work together as one larger system.',
    'Load balancer چند سیستم را مثل یک منبع نشان می‌دهد و درخواست‌ها را بینشان پخش می‌کند. این ظرفیت و افزونگی اضافه می‌کند و اجازه می‌دهد ترافیک یک سرور را برای وصله یا ارتقا خالی کنند. Clustering در عوض کامپیوترها را به هم وصل می‌کند تا مثل یک سیستم بزرگ‌تر با هم کار کنند.');

  M(T1,'A company keeps its main datacenter on the coast and builds its backup datacenter far inland in another region. What is the main goal?',
    'شرکتی دیتاسنتر اصلی‌اش را در ساحل نگه داشته و دیتاسنتر پشتیبان را خیلی دورتر در داخل خشکی و در منطقه‌ای دیگر ساخته. هدف اصلی چیست؟',
    'یک بلا نباید هر دو را بزند.',
    ['Geographic dispersion, so one disaster cannot hit both sites','Lower network latency for coastal users','Platform diversity','Cheaper electricity'],
    ['پراکندگی جغرافیایی، تا یک بلا هر دو سایت را نزند','تأخیر شبکه‌ی کمتر برای کاربران ساحلی','تنوع پلتفرم','برق ارزان‌تر'],
    'Geographic dispersion keeps sites far enough apart (a common rule of thumb is at least 90 miles, about 145 km) that a hurricane, flood, power grid failure or regional network outage is unlikely to affect both. Hurricane regions often push backup sites inland.',
    'پراکندگی جغرافیایی سایت‌ها را آن‌قدر دور نگه می‌دارد (قاعده‌ی رایج: حداقل ۹۰ مایل، حدود ۱۴۵ کیلومتر) که توفان، سیل، خرابی شبکه‌ی برق یا قطعی منطقه‌ای شبکه بعید باشد هر دو را بزند. در مناطق توفان‌خیز، سایت پشتیبان را به داخل خشکی می‌برند.');

  M(T1,'A company uses firewalls from two different vendors in layers, so that one vendor\'s flaw cannot open the whole network. What is this, and what is its downside?',
    'شرکتی از فایروال‌های دو فروشنده‌ی مختلف به صورت لایه‌ای استفاده می‌کند تا ضعف یک فروشنده کل شبکه را باز نکند. این چیست و عیبش چیست؟',
    'تنوع، اما با هزینه.',
    ['Platform (vendor) diversity; more training, integration work and chance of human error','Clustering; it cannot scale','Geographic dispersion; higher latency','Risk transference; higher insurance cost'],
    ['تنوع پلتفرم/فروشنده؛ آموزش بیشتر، کار یکپارچه‌سازی و احتمال خطای انسانی بیشتر','Clustering؛ مقیاس‌پذیر نیست','پراکندگی جغرافیایی؛ تأخیر بیشتر','انتقال ریسک؛ بیمه‌ی گران‌تر'],
    'Platform diversity (different vendors, platforms, crypto and controls) keeps one vulnerability, misconfiguration or vendor failure from affecting everything. The cost is extra training, harder integration and more complexity, which raises the chance of mistakes.',
    'تنوع پلتفرم (فروشنده، پلتفرم، رمزنگاری و کنترل‌های مختلف) نمی‌گذارد یک آسیب‌پذیری، پیکربندی اشتباه یا ورشکستگی یک فروشنده همه چیز را بزند. هزینه‌اش آموزش بیشتر، یکپارچه‌سازی سخت‌تر و پیچیدگی بیشتر است که احتمال خطا را بالا می‌برد.');

  M(T1,'A streaming company runs the same service on two different public cloud providers so it stays online if one provider has a large outage. What is this called?',
    'یک شرکت پخش آنلاین، یک سرویس را روی دو ارائه‌دهنده‌ی ابری عمومی مختلف اجرا می‌کند تا اگر یکی قطعی بزرگی داشت، آنلاین بماند. اسم این چیست؟',
    'بیشتر از یک ابر.',
    ['A multicloud system','A private cloud','A cold site','Vertical scaling'],
    ['سیستم چندابری (Multicloud)','ابر خصوصی','سایت سرد','مقیاس‌دهی عمودی'],
    'Multicloud uses more than one cloud provider so a single provider\'s problem does not take the service down. It adds cost and complexity, so it is mostly used by large organizations that need continuous operations. Even within one provider, spreading across regions and availability zones helps.',
    'Multicloud یعنی استفاده از بیش از یک ارائه‌دهنده‌ی ابری تا مشکل یک ارائه‌دهنده سرویس را نخواباند. هزینه و پیچیدگی اضافه می‌کند، پس بیشتر سازمان‌های بزرگی که به کار پیوسته نیاز دارند از آن استفاده می‌کنند. حتی در یک ارائه‌دهنده، پخش کردن در چند Region و Availability zone کمک می‌کند.');

  M(T1,'An app needs more power, so the team moves it to a server with twice the CPU and memory. Which type of scaling is this?',
    'یک اپ قدرت بیشتری لازم دارد، پس تیم آن را به سروری با دو برابر CPU و حافظه منتقل می‌کند. این کدام نوع مقیاس‌دهی است؟',
    'بزرگ‌تر، نه بیشتر.',
    ['Vertical scaling','Horizontal scaling','Clustering','Elastic load balancing'],
    ['مقیاس‌دهی عمودی (Vertical)','مقیاس‌دهی افقی (Horizontal)','Clustering','Load balancing کشسان'],
    'Vertical scaling means a bigger, more powerful system; it can be expensive and has limits, but some large-memory apps need it. Horizontal scaling adds more smaller systems, which also allows transparent patching and replacing failed nodes.',
    'Vertical scaling یعنی سیستم بزرگ‌تر و قوی‌تر؛ می‌تواند گران باشد و سقف دارد، اما بعضی اپ‌های پرحافظه به آن نیاز دارند. Horizontal scaling سیستم‌های کوچک‌تر بیشتری اضافه می‌کند که وصله کردن بی‌وقفه و جایگزینی نودهای خراب را هم ممکن می‌کند.');

  M(T1,'A factory controller must run 24/7, and its vendor no longer releases updates for it. Which architecture consideration is the biggest concern?',
    'یک کنترلر کارخانه باید ۲۴ ساعته کار کند و فروشنده‌اش دیگر به‌روزرسانی برایش منتشر نمی‌کند. کدام ملاحظه‌ی معماری بزرگ‌ترین نگرانی است؟',
    'وصله وجود ندارد و قطع هم نمی‌شود کرد.',
    ['Inability to patch (and no patch availability)','Ease of deployment','Risk transference','Compute cost'],
    ['ناتوانی در وصله کردن (و نبود وصله)','آسانی استقرار','انتقال ریسک','هزینه‌ی پردازش'],
    'Patch availability asks whether the vendor still supports the product. Inability to patch covers systems that cannot be patched without downtime or at all. Such systems need compensating controls such as isolation and close monitoring.',
    'Patch availability یعنی آیا فروشنده هنوز محصول را پشتیبانی می‌کند. Inability to patch یعنی سیستمی که بدون توقف یا اصلاً قابل وصله نیست. چنین سیستم‌هایی کنترل جبرانی مثل جداسازی و پایش دقیق لازم دارند.');

  M(T1,'A company buys cyber insurance to cover the cost of a long outage instead of building a second datacenter. Which architecture consideration is this?',
    'شرکتی به جای ساختن دیتاسنتر دوم، بیمه‌ی سایبری می‌خرد تا هزینه‌ی یک قطعی طولانی را پوشش دهد. این کدام ملاحظه‌ی معماری است؟',
    'ریسک به طرف دیگری منتقل شده.',
    ['Risk transference','Resilience','Responsiveness','Scalability'],
    ['انتقال ریسک (Risk transference)','تاب‌آوری','پاسخگویی سریع','مقیاس‌پذیری'],
    'Risk transference shifts the financial impact to someone else through insurance or contracts. It is weighed with availability, resilience, cost, responsiveness, scalability, ease of deployment and recovery, patching, power and compute when choosing a design.',
    'Risk transference اثر مالی را با بیمه یا قرارداد به طرف دیگر منتقل می‌کند. هنگام انتخاب طراحی، کنار دسترس‌پذیری، تاب‌آوری، هزینه، پاسخگویی، مقیاس‌پذیری، آسانی استقرار و بازیابی، وصله، برق و پردازش سنجیده می‌شود.');

  /* ---- Backups & storage ---- */
  M(T2,'A server uses two drives that hold exactly the same data, so it keeps running if one drive dies. Which RAID level is this?',
    'سروری از دو درایو استفاده می‌کند که دقیقاً داده‌ی یکسان دارند، تا اگر یکی خراب شد کار ادامه پیدا کند. این کدام سطح RAID است؟',
    'آینه.',
    ['RAID 1 (mirroring)','RAID 0 (striping)','RAID 5 (striping with parity)','RAID 10 (mirror + stripe)'],
    ['RAID 1 (آینه‌سازی)','RAID 0 (نواری کردن)','RAID 5 (نواری با Parity)','RAID 10 (آینه + نوار)'],
    'RAID 1 duplicates all data, so it survives a drive failure but uses twice the storage. RAID 0 only stripes for speed and loses everything if one drive fails. RAID 5 stripes with distributed parity and survives one failure. RAID 10 mirrors then stripes and needs at least four drives.',
    'RAID 1 همه‌ی داده را دوتایی نگه می‌دارد؛ خرابی یک درایو را تحمل می‌کند اما دو برابر فضا می‌خواهد. RAID 0 فقط برای سرعت نواری می‌کند و با خرابی یک درایو همه چیز از دست می‌رود. RAID 5 با Parity پخش‌شده نواری می‌کند و یک خرابی را تحمل می‌کند. RAID 10 آینه و بعد نوار است و حداقل چهار درایو لازم دارد.');

  M(T2,'Which RAID level gives the best speed and uses all disk capacity but offers no fault tolerance at all?',
    'کدام سطح RAID بیشترین سرعت را می‌دهد و از همه‌ی ظرفیت دیسک استفاده می‌کند، اما هیچ تحمل خطایی ندارد؟',
    'فقط نواری، بدون کپی.',
    ['RAID 0','RAID 1','RAID 5','RAID 10'],
    ['RAID 0','RAID 1','RAID 5','RAID 10'],
    'RAID 0 spreads data across all drives for performance, but losing any one drive loses all the data. It is not really a resilience control.',
    'RAID 0 داده را برای سرعت روی همه‌ی درایوها پخش می‌کند، اما با خرابی هر یک درایو همه‌ی داده از دست می‌رود. در واقع کنترل تاب‌آوری نیست.');

  M(T2,'A full backup runs on Sunday. Each night after that, the backup copies only what changed since Sunday\'s full backup. What type is the nightly backup?',
    'یکشنبه یک پشتیبان کامل گرفته می‌شود. هر شب بعد از آن، فقط چیزهایی کپی می‌شوند که از پشتیبان کامل یکشنبه تغییر کرده‌اند. پشتیبان شبانه چه نوعی است؟',
    'همیشه نسبت به آخرین «کامل».',
    ['Differential','Incremental','Snapshot','Full'],
    ['تفاضلی (Differential)','افزایشی (Incremental)','Snapshot','کامل (Full)'],
    'A differential copies everything changed since the last full backup: slower to back up as the week goes on, but a restore needs only the full plus the latest differential. An incremental copies changes since the last backup of any kind: fast to back up, but a restore needs the full plus every incremental in order.',
    'Differential همه‌ی تغییرات از آخرین پشتیبان کامل را کپی می‌کند: هرچه هفته جلو می‌رود پشتیبان‌گیری کندتر می‌شود، اما بازیابی فقط کامل + آخرین Differential را لازم دارد. Incremental تغییرات از آخرین پشتیبان (هر نوعی) را کپی می‌کند: پشتیبان‌گیری سریع، اما بازیابی کامل + همه‌ی Incrementalها به ترتیب را لازم دارد.');

  M(T2,'A full backup runs on Sunday and incremental backups run Monday to Friday. The server fails on Saturday. What is needed to restore it?',
    'یکشنبه پشتیبان کامل و دوشنبه تا جمعه پشتیبان افزایشی گرفته می‌شود. شنبه سرور خراب می‌شود. برای بازیابی چه لازم است؟',
    'هر Incremental فقط تغییرات یک روز را دارد.',
    ['The full backup plus all five incrementals, applied in order','Only Friday\'s incremental','The full backup plus only Friday\'s incremental','Only the full backup'],
    ['پشتیبان کامل به اضافه‌ی هر پنج Incremental، به ترتیب','فقط Incremental جمعه','پشتیبان کامل به اضافه‌ی فقط Incremental جمعه','فقط پشتیبان کامل'],
    'Each incremental holds only the changes since the previous backup, so all of them must be layered on top of the full backup. That is why incrementals are faster to make but slower to restore than differentials.',
    'هر Incremental فقط تغییرات از پشتیبان قبلی را دارد، پس همه باید به ترتیب روی پشتیبان کامل اعمال شوند. به همین دلیل Incremental ساختنش سریع‌تر اما بازیابی‌اش کندتر از Differential است.');

  M(T2,'An admin wants to save a running virtual machine\'s exact state, including memory, right before a risky patch so they can roll back. What should they take?',
    'مدیری می‌خواهد درست قبل از یک وصله‌ی پرخطر، وضعیت دقیق یک ماشین مجازی در حال اجرا را با حافظه‌اش ذخیره کند تا بتواند برگردد. چه چیزی بگیرد؟',
    'عکس لحظه‌ای از وضعیت VM.',
    ['A snapshot','A differential backup','A journal','Live boot media'],
    ['Snapshot (عکس لحظه‌ای)','پشتیبان تفاضلی','Journal','رسانه‌ی Live boot'],
    'A snapshot captures the full state of a system, often a VM, at a point in time while it runs. It is ideal for rolling back a bad patch or cloning. An image is a complete bit-level copy of a drive, often used for servers with complex setups and for nonpersistent "gold master" desktops.',
    'Snapshot وضعیت کامل یک سیستم، معمولاً VM، را در یک لحظه و در حال اجرا ذخیره می‌کند. برای برگشت از وصله‌ی بد یا کلون کردن عالی است. Image یک کپی کامل بیت‌به‌بیت از درایو است که برای سرورهای پیچیده و دسکتاپ‌های Nonpersistent با «Gold master» استفاده می‌شود.');

  M(T2,'A database must be restorable to any moment, for example 10:42 a.m., not just to last night\'s backup. Which technique supports this?',
    'یک پایگاه داده باید به هر لحظه‌ای قابل بازیابی باشد، مثلاً ساعت ۱۰:۴۲ صبح، نه فقط به پشتیبان دیشب. کدام روش این را ممکن می‌کند؟',
    'یک لاگ از تغییرات که دوباره پخش می‌شود.',
    ['Journaling (with the journal also backed up offsite)','RAID 0','A weekly full backup','A cold site'],
    ['Journaling (با پشتیبان گرفتن از خود Journal در جای دیگر)','RAID 0','پشتیبان کامل هفتگی','سایت سرد'],
    'Journaling keeps a log of changes that can be replayed for point-in-time recovery. The journal must itself be copied elsewhere (offsite if you need disaster protection), or one failure loses it too. Replaying a long journal can slow recovery.',
    'Journaling لاگی از تغییرات نگه می‌دارد که برای بازیابی به یک لحظه‌ی خاص دوباره اجرا می‌شود. خود Journal باید جای دیگری (برای محافظت در برابر بلا، خارج از سایت) کپی شود، وگرنه با یک خرابی آن هم از دست می‌رود. اجرای یک Journal طولانی می‌تواند بازیابی را کند کند.');

  M(T2,'Each write to the primary storage is confirmed only after the same write is also saved at the hot site. Which type of replication is this?',
    'هر نوشتن روی ذخیره‌ساز اصلی فقط وقتی تأیید می‌شود که همان نوشتن در سایت گرم/داغ هم ذخیره شده باشد. این کدام نوع Replication است؟',
    'هم‌زمان، در لحظه.',
    ['Synchronous replication','Asynchronous replication','Incremental backup','Journaling'],
    ['Replication هم‌زمان (Synchronous)','Replication ناهم‌زمان (Asynchronous)','پشتیبان افزایشی','Journaling'],
    'Synchronous replication copies changes in real time, so both copies match, but distance adds latency. Asynchronous replication copies shortly after the fact, so a little recent data can be lost. Unlike backups, replication runs continuously as data changes.',
    'Replication هم‌زمان تغییرات را در لحظه کپی می‌کند و دو نسخه یکسان‌اند، اما فاصله تأخیر اضافه می‌کند. ناهم‌زمان کمی بعد کپی می‌کند، پس ممکن است کمی از داده‌ی تازه از دست برود. برخلاف پشتیبان، Replication مداوم و هم‌زمان با تغییر داده انجام می‌شود.');

  M(T2,'Backup tapes are stored at a third-party vault 200 km away. What must the company do so the vault staff cannot read the data?',
    'نوارهای پشتیبان در یک انبار شخص ثالث ۲۰۰ کیلومتر دورتر نگه داشته می‌شوند. شرکت چه کند تا کارکنان انبار نتوانند داده را بخوانند؟',
    'محرمانگی در حالت ذخیره و انتقال.',
    ['Encrypt the backups and keep the keys safe and available for recovery','Hash the backups','Store the tapes onsite instead','Use RAID 5 on the tapes'],
    ['پشتیبان را رمزگذاری کند و کلیدها را امن و برای بازیابی در دسترس نگه دارد','از پشتیبان هش بگیرد','نوارها را در خود سایت نگه دارد','روی نوارها RAID 5 بزند'],
    'Encrypt backups at rest and in transit. Hashing only proves integrity; it does not hide data. Key management is critical: if the keys are lost, the backups are effectively lost too. Offsite storage itself is good practice because one disaster cannot destroy both copies.',
    'پشتیبان را در حالت ذخیره و انتقال رمز کن. هش فقط یکپارچگی را ثابت می‌کند و داده را پنهان نمی‌کند. مدیریت کلید حیاتی است: اگر کلید گم شود، عملاً پشتیبان هم از دست رفته. خود ذخیره‌ی خارج از سایت کار درستی است چون یک بلا هر دو نسخه را نابود نمی‌کند.');

  M(T2,'A tape library robot loads and reads archived tapes on request within minutes, with no person involved. What kind of backup storage is this?',
    'ربات کتابخانه‌ی نوار، نوارهای بایگانی را در عرض چند دقیقه و بدون دخالت آدم بارگذاری و می‌خواند. این چه نوع ذخیره‌ی پشتیبانی است؟',
    'نه کاملاً آنلاین، نه کاملاً آفلاین.',
    ['Nearline','Online','Offline','Onsite journaling'],
    ['Nearline (نیمه‌آنلاین)','Online (همیشه در دسترس)','Offline (آفلاین)','Journaling داخل سایت'],
    'Online backups are instantly available. Offline backups sit unpowered in storage and must be retrieved. Nearline is in between: not immediately mounted but retrievable fairly quickly and automatically, like tape robots or archive cloud tiers such as S3 Glacier.',
    'پشتیبان Online فوراً در دسترس است. Offline بدون برق در انبار است و باید آورده شود. Nearline بین این دو است: فوراً سوار نیست اما نسبتاً سریع و خودکار بازیابی می‌شود، مثل ربات نوار یا لایه‌های بایگانی ابری مثل S3 Glacier.');

  M(T2,'The business says it can lose at most 15 minutes of order data, and the system must be back within 2 hours. Which values are these?',
    'کسب‌وکار می‌گوید حداکثر ۱۵ دقیقه داده‌ی سفارش را می‌تواند از دست بدهد و سیستم باید ظرف ۲ ساعت برگردد. این مقدارها کدام‌اند؟',
    'Point = داده، Time = زمان.',
    ['RPO = 15 minutes, RTO = 2 hours','RTO = 15 minutes, RPO = 2 hours','MTBF = 15 minutes, MTTR = 2 hours','Both are RTOs'],
    ['RPO = ۱۵ دقیقه، RTO = ۲ ساعت','RTO = ۱۵ دقیقه، RPO = ۲ ساعت','MTBF = ۱۵ دقیقه، MTTR = ۲ ساعت','هر دو RTO هستند'],
    'The recovery point objective (RPO) is how much data loss is acceptable and drives backup frequency. The recovery time objective (RTO) is how long recovery may take and drives how fast restoration must be. Shorter values cost more.',
    'RPO میزان از دست رفتن داده‌ی قابل قبول است و تعداد دفعات پشتیبان‌گیری را تعیین می‌کند. RTO مدت مجاز بازیابی است و سرعت لازم برای بازگردانی را تعیین می‌کند. مقدار کوتاه‌تر هزینه‌ی بیشتری دارد.');

  /* ---- Recovery sites, power & testing ---- */
  M(T3,'A recovery site has power, cooling and network connections, but no servers and no data. Which type is it?',
    'یک سایت بازیابی برق، سرمایش و اتصال شبکه دارد، اما نه سرور دارد نه داده. کدام نوع است؟',
    'ارزان‌ترین و کندترین.',
    ['Cold site','Warm site','Hot site','Mobile site'],
    ['سایت سرد (Cold)','سایت گرم (Warm)','سایت داغ (Hot)','سایت سیار'],
    'Cold site: space, power and often connectivity, but systems and data must be brought in; cheapest and slowest. Warm site: some or all hardware ready, but not the live data. Hot site: everything, including current data, ready to take over; most expensive and often run all the time.',
    'سایت سرد: فضا، برق و اغلب اتصال، اما سیستم و داده باید آورده شوند؛ ارزان‌ترین و کندترین. سایت گرم: بخشی یا همه‌ی سخت‌افزار آماده، اما داده‌ی زنده نه. سایت داغ: همه چیز با داده‌ی به‌روز آماده‌ی جایگزینی؛ گران‌ترین و اغلب همیشه در حال کار.');

  M(T3,'A bank cannot be down for more than a few minutes and keeps a second site running with current data at all times. Which site type is this?',
    'بانکی نمی‌تواند بیش از چند دقیقه از کار بیفتد و یک سایت دوم را همیشه با داده‌ی به‌روز در حال کار نگه می‌دارد. این کدام نوع سایت است؟',
    'آماده برای جایگزینی فوری.',
    ['Hot site','Warm site','Cold site','Nearline site'],
    ['سایت داغ (Hot)','سایت گرم (Warm)','سایت سرد (Cold)','سایت Nearline'],
    'A hot site has all infrastructure and data and can take over almost immediately. Some organizations split live traffic between sites, which also proves the hot site works and keeps staff in place.',
    'سایت داغ همه‌ی زیرساخت و داده را دارد و تقریباً فوراً جایگزین می‌شود. بعضی سازمان‌ها ترافیک زنده را بین سایت‌ها تقسیم می‌کنند که هم ثابت می‌کند سایت داغ کار می‌کند و هم کارکنان را آماده نگه می‌دارد.');

  M(T3,'After a disaster, an admin is bringing systems back at the recovery site. Which should normally come first?',
    'بعد از یک بلا، مدیری سیستم‌ها را در سایت بازیابی برمی‌گرداند. معمولاً کدام اول می‌آید؟',
    'بدون شبکه هیچ‌چیز کار نمی‌کند.',
    ['Network connectivity and a secure admin (bastion) host','The company intranet blog','Logging and monitoring dashboards','User file shares'],
    ['اتصال شبکه و یک میزبان مدیریتی امن (Bastion)','وبلاگ اینترانت شرکت','داشبوردهای لاگ و پایش','پوشه‌های اشتراکی کاربران'],
    'A restoration order follows dependencies and criticality: network and a bastion host, then security devices (firewalls, IPS), then storage and databases, then critical servers, then logging and monitoring, then everything else. Each organization writes its own order in advance.',
    'ترتیب بازیابی بر اساس وابستگی و اهمیت است: شبکه و Bastion host، بعد دستگاه‌های امنیتی (فایروال، IPS)، بعد ذخیره‌ساز و پایگاه داده، بعد سرورهای حیاتی، بعد لاگ و پایش، بعد بقیه. هر سازمان ترتیب خودش را از قبل می‌نویسد.');

  M(T3,'The power goes out. Servers keep running for 10 minutes on batteries until a diesel unit starts and takes over for the rest of the day. Which two devices are these?',
    'برق می‌رود. سرورها ۱۰ دقیقه با باتری کار می‌کنند تا یک دستگاه دیزلی روشن شود و بقیه‌ی روز را پوشش دهد. این دو دستگاه کدام‌اند؟',
    'کوتاه‌مدت + بلندمدت.',
    ['A UPS, then a generator','A generator, then a UPS','A PDU, then a UPS','A load balancer, then a generator'],
    ['اول UPS، بعد ژنراتور','اول ژنراتور، بعد UPS','اول PDU، بعد UPS','اول Load balancer، بعد ژنراتور'],
    'A UPS gives short-term battery power and bridges the gap; a generator covers long outages. Dual power supplies protect against a failed server power supply, and managed PDUs give remote control of rack power.',
    'UPS برق کوتاه‌مدت با باتری می‌دهد و فاصله را پر می‌کند؛ ژنراتور قطعی‌های طولانی را پوشش می‌دهد. منبع تغذیه‌ی دوتایی در برابر خرابی منبع تغذیه‌ی سرور محافظت می‌کند و PDU مدیریت‌شده کنترل برق رک را از راه دور می‌دهد.');

  M(T3,'The DR team sits in a conference room and talks through what each person would do if the datacenter flooded. No systems are touched. Which test is this?',
    'تیم بازیابی در یک اتاق جلسه می‌نشیند و درباره‌ی این‌که هر نفر در صورت سیل در دیتاسنتر چه می‌کند حرف می‌زند. به هیچ سیستمی دست نمی‌زنند. این کدام آزمون است؟',
    'فقط بحث، کم‌خطرترین.',
    ['Tabletop exercise','Simulation','Parallel processing','Failover test'],
    ['تمرین رومیزی (Tabletop)','شبیه‌سازی (Simulation)','پردازش موازی (Parallel processing)','آزمون Failover'],
    'From least to most disruptive: tabletop (discussion only; finds gaps but is furthest from reality), simulation (staff act out the response; tell everyone it is a drill), parallel processing (backup site processes alongside the primary), failover (fully switch to the alternate site; most realistic and most risky). Record lessons learned after each.',
    'از کم‌اختلال به پراختلال: Tabletop (فقط بحث؛ کمبودها را پیدا می‌کند اما از واقعیت دورتر است)، Simulation (کارکنان پاسخ را اجرا می‌کنند؛ به همه بگو تمرین است)، Parallel processing (سایت پشتیبان کنار سایت اصلی پردازش می‌کند)، Failover (جابه‌جایی کامل به سایت جایگزین؛ واقعی‌ترین و پرخطرترین). بعد از هر کدام درس‌ها را ثبت کن.');

  M(T3,'A company runs today\'s payroll at its hot site at the same time as at the main site, then compares the results, without switching production over. Which test is this?',
    'شرکتی حقوق امروز را هم‌زمان در سایت داغ و سایت اصلی اجرا می‌کند و نتیجه‌ها را مقایسه می‌کند، بدون این‌که تولید را منتقل کند. این کدام آزمون است؟',
    'دو جا با هم، کنار هم.',
    ['Parallel processing','Failover','Tabletop exercise','Simulation'],
    ['پردازش موازی (Parallel processing)','Failover','تمرین رومیزی','شبیه‌سازی'],
    'Parallel processing proves the backup site can do the work while the primary keeps running. It must be kept separate so the backup does not take over real processing by mistake. A failover test actually moves production and is the most disruptive.',
    'Parallel processing ثابت می‌کند سایت پشتیبان کار را انجام می‌دهد در حالی که سایت اصلی هم کار می‌کند. باید جدا نگه داشته شود تا سایت پشتیبان اشتباهی پردازش واقعی را نگیرد. آزمون Failover واقعاً تولید را منتقل می‌کند و پراختلال‌ترین است.');

  M(T3,'A DR plan has servers and data covered, but only two staff know how to run the backup site, and both work in the main building. Which capacity planning area is weak?',
    'یک طرح بازیابی سرور و داده را پوشش داده، اما فقط دو نفر بلدند سایت پشتیبان را اداره کنند و هر دو در ساختمان اصلی کار می‌کنند. کدام بخش برنامه‌ریزی ظرفیت ضعیف است؟',
    'آدم‌ها، تکنولوژی، زیرساخت.',
    ['People','Technology','Infrastructure','Power'],
    ['آدم‌ها (People)','تکنولوژی','زیرساخت','برق'],
    'Capacity planning covers people (enough staff and skills, in more than one place, plus contractors or support contracts), technology (what deployed tools can handle) and infrastructure (network, throughput, storage). A disaster can affect staff as well as systems.',
    'برنامه‌ریزی ظرفیت شامل آدم‌ها (کارکنان و مهارت کافی، در بیش از یک مکان، به اضافه‌ی پیمانکار یا قرارداد پشتیبانی)، تکنولوژی (ابزارها چقدر بار تحمل می‌کنند) و زیرساخت (شبکه، توان عبور، ذخیره‌ساز) است. یک بلا می‌تواند به کارکنان هم مثل سیستم‌ها آسیب بزند.');

  M(T3,'A Windows server will not start properly after malware infected its boot sector. The admin boots it from a trusted USB operating system to repair the disk. What is this tool?',
    'یک سرور ویندوز بعد از آلوده شدن Boot sector به بدافزار درست بالا نمی‌آید. مدیر آن را با یک سیستم‌عامل مطمئن روی USB بوت می‌کند تا دیسک را تعمیر کند. این ابزار چیست؟',
    'سیستم‌عامل قابل اعتماد روی رسانه‌ی جداشدنی.',
    ['Live boot media','A last-known good configuration','A snapshot','A gold master image'],
    ['رسانه‌ی Live boot','Last-known good configuration','Snapshot','Image «Gold master»'],
    'Live boot media runs a known-good OS from USB or DVD when the installed system cannot be trusted. Last-known good configuration (like a System Restore point) rolls back a bad change. Nonpersistent systems revert to a known state on every restart.',
    'Live boot media یک سیستم‌عامل سالم را از USB یا DVD اجرا می‌کند وقتی به سیستم نصب‌شده نمی‌شود اعتماد کرد. Last-known good configuration (مثل System Restore point) تغییر بد را برمی‌گرداند. سیستم‌های Nonpersistent با هر راه‌اندازی به وضعیت شناخته‌شده برمی‌گردند.');

  /* ---- Physical security ---- */
  M(T4,'Concrete posts and large planters are placed in front of a building\'s glass lobby. What is their purpose?',
    'ستون‌های بتنی و گلدان‌های بزرگ جلوی لابی شیشه‌ای یک ساختمان گذاشته شده‌اند. هدفشان چیست؟',
    'جلوی ماشین را می‌گیرند.',
    ['Bollards that stop vehicles from reaching the entrance','Decoration that hides the data center (industrial camouflage)','Lighting that removes shadows','Sensors that detect pressure'],
    ['Bollard؛ جلوی رسیدن خودرو به ورودی را می‌گیرد','تزئین برای پنهان کردن دیتاسنتر','نورپردازی برای حذف سایه','حسگر فشار'],
    'Bollards are posts, pillars or planters that block vehicles, whether from accidents or ramming attacks. Some can be raised and lowered. They do not stop people on foot.',
    'Bollardها ستون یا گلدان‌هایی هستند که جلوی خودرو را می‌گیرند، چه تصادف و چه حمله با خودرو. بعضی بالا و پایین می‌روند. جلوی آدم پیاده را نمی‌گیرند.');

  M(T4,'To enter the server room, a person badges through a first door, which must close before a second badge reader will open the next door. What stops a second person from slipping in behind?',
    'برای ورود به اتاق سرور، شخص با کارت از در اول رد می‌شود و آن در باید بسته شود تا کارت‌خوانِ در دوم باز کند. چه چیزی جلوی ورود نفر دوم از پشت سر را می‌گیرد؟',
    'دو در، یکی‌یکی.',
    ['An access control vestibule (mantrap)','A bollard','A proximity badge reader alone','A visitor log'],
    ['Access control vestibule (Mantrap؛ اتاقک دو دره)','Bollard','فقط یک کارت‌خوان نزدیکی','دفتر ثبت بازدیدکننده'],
    'An access control vestibule uses two doors that each need authorization, and only one can be open at a time. Someone piggybacking or tailgating gets caught between the doors and noticed.',
    'Access control vestibule دو در دارد که هرکدام مجوز می‌خواهد و در هر لحظه فقط یکی باز است. کسی که دنبال دیگری می‌خزد (Piggybacking/Tailgating) بین دو در گیر می‌افتد و دیده می‌شود.');

  M(T4,'Which physical control can make judgment calls, check that a visitor\'s face matches their ID, and respond to an incident, but is expensive and can be socially engineered?',
    'کدام کنترل فیزیکی می‌تواند قضاوت کند، بررسی کند چهره‌ی بازدیدکننده با کارت شناسایی‌اش جور است و به حادثه پاسخ دهد، اما گران است و ممکن است فریب مهندسی اجتماعی بخورد؟',
    'یک انسان.',
    ['Security guards','Video surveillance','Fencing','Infrared sensors'],
    ['نگهبان امنیتی','دوربین مداربسته','حصار','حسگر مادون قرمز'],
    'Guards provide both detection and response and can make decisions technology cannot, often with visitor logs. Their ongoing cost is the main reason organizations use them only where truly needed, and like all people they can be tricked.',
    'نگهبان هم تشخیص و هم پاسخ می‌دهد و تصمیم‌هایی می‌گیرد که تکنولوژی نمی‌تواند، اغلب همراه دفتر ثبت بازدیدکننده. هزینه‌ی دائمی‌شان دلیل اصلی است که فقط جایی که واقعاً لازم است استفاده می‌شوند، و مثل همه‌ی آدم‌ها ممکن است فریب بخورند.');

  M(T4,'A company wants a cheap sensor to detect people moving in a small, closed indoor storage room. Which sensor is the best fit?',
    'شرکتی یک حسگر ارزان می‌خواهد تا حرکت آدم در یک انبار کوچک و بسته‌ی داخلی را تشخیص دهد. کدام حسگر مناسب‌تر است؟',
    'گرمای بدن، ارزان.',
    ['Infrared','Microwave','Ultrasonic','Pressure'],
    ['مادون قرمز (Infrared)','مایکروویو (Microwave)','فراصوت (Ultrasonic)','فشار (Pressure)'],
    'Infrared sensors detect changes in heat radiation and are cheap and common in small, controlled indoor spaces. Microwave sensors compare against a baseline, are more sensitive, can see through some materials and work in more temperatures, but cost more and false-alarm more. Pressure sensors detect weight on a pad or an object moved; ultrasonic sensors are rare in security and mostly used for proximity.',
    'حسگر Infrared تغییر تابش گرما را تشخیص می‌دهد؛ ارزان و رایج در فضاهای کوچک و کنترل‌شده‌ی داخلی است. Microwave با یک خط مبنا مقایسه می‌کند، حساس‌تر است، از بعضی مواد رد می‌شود و در دمای بیشتری کار می‌کند، اما گران‌تر است و هشدار اشتباه بیشتری دارد. Pressure وزن روی صفحه یا جابه‌جایی شیء را حس می‌کند؛ Ultrasonic در امنیت کم‌کاربرد است و بیشتر برای تشخیص نزدیکی است.');

  M(T4,'A camera records only when something moves, but the saved clip still includes a few seconds from before the movement started. Which feature is this?',
    'یک دوربین فقط وقتی چیزی حرکت کند ضبط می‌کند، اما کلیپ ذخیره‌شده چند ثانیه‌ی قبل از شروع حرکت را هم دارد. این کدام قابلیت است؟',
    'بافر + حرکت.',
    ['Motion recognition with a pre-event buffer','Object detection','Pan/tilt/zoom (PTZ)','Infrared night vision'],
    ['تشخیص حرکت با بافر پیش از رویداد','تشخیص شیء (Object detection)','Pan/Tilt/Zoom (PTZ)','دید در شب مادون قرمز'],
    'Motion recognition cameras save storage by recording on movement and keep a short buffer so you see what happened just before. Object detection watches for specific objects (a gun, a laptop) or for an item being moved.',
    'دوربین تشخیص حرکت با ضبط فقط هنگام حرکت فضا را صرفه‌جویی می‌کند و یک بافر کوتاه دارد تا ببینی درست قبلش چه شد. Object detection دنبال شیء خاص (اسلحه، لپ‌تاپ) یا جابه‌جا شدن یک شیء است.');

  M(T4,'Logs show an employee\'s badge opened the lab door at 2 a.m. while that employee was on a plane overseas. Which physical attack is most likely?',
    'لاگ‌ها نشان می‌دهند کارت یک کارمند ساعت ۲ بامداد در آزمایشگاه را باز کرده، در حالی که آن کارمند در هواپیما و خارج از کشور بوده. کدام حمله‌ی فیزیکی محتمل‌تر است؟',
    'یک کپی از کارت بی‌سیم.',
    ['RFID cloning','Brute force','Environmental attack','Tailgating'],
    ['شبیه‌سازی RFID (RFID cloning)','Brute force (زور فیزیکی)','حمله‌ی محیطی','Tailgating (دنبال کسی رفتن)'],
    'RFID cloning copies a badge\'s radio data to a new card. It is hard to spot if the badge is the only check, so watch for impossible or unusual access patterns, add a PIN or biometric, and use cameras. Brute force is breaking doors or cutting locks.',
    'RFID cloning داده‌ی رادیویی کارت را روی کارت جدیدی کپی می‌کند. اگر کارت تنها کنترل باشد، تشخیصش سخت است؛ پس الگوهای دسترسی غیرممکن یا غیرعادی را پایش کن، PIN یا بیومتریک اضافه کن و از دوربین استفاده کن. Brute force یعنی شکستن در یا بریدن قفل.');

  M(T4,'Someone deliberately sets off the sprinklers above the server room and turns off the cooling. Which type of physical attack is this?',
    'کسی عمداً آب‌پاش‌های بالای اتاق سرور را فعال و سرمایش را خاموش می‌کند. این کدام نوع حمله‌ی فیزیکی است؟',
    'به محیط حمله شده، نه به در.',
    ['Environmental attack','Brute force','RFID cloning','Piggybacking'],
    ['حمله‌ی محیطی (Environmental)','Brute force','شبیه‌سازی RFID','Piggybacking'],
    'Environmental attacks target HVAC, fire suppression, power or water. They often look like ordinary equipment problems, so it is hard to tell they were malicious. Temperature and moisture sensors help detect them early.',
    'حمله‌ی محیطی سرمایش/گرمایش، اطفای حریق، برق یا آب را هدف می‌گیرد. اغلب شبیه خرابی معمولی تجهیزات است و سخت می‌شود فهمید عمدی بوده. حسگرهای دما و رطوبت کمک می‌کنند زود تشخیص داده شود.');

  M(T4,'Which control best helps detect someone cutting a lock or forcing open a fence gate at night?',
    'کدام کنترل بهتر کمک می‌کند کسی که شب قفلی را می‌بُرد یا در حصار را به زور باز می‌کند تشخیص داده شود؟',
    'حمله‌ی فیزیکی را اغلب آدم یا دوربین می‌بیند.',
    ['Security guards watching cameras or patrolling','A network intrusion detection system','Stronger password policy','Access badges'],
    ['نگهبان‌هایی که دوربین را نگاه می‌کنند یا گشت می‌زنند','سیستم تشخیص نفوذ شبکه (IDS)','سیاست رمز قوی‌تر','کارت دسترسی'],
    'Physical brute-force attacks are usually caught by people or cameras, not by network tools. Good lighting, fences and video surveillance also deter and help detect them.',
    'حمله‌ی Brute force فیزیکی معمولاً با آدم یا دوربین دیده می‌شود، نه با ابزار شبکه. نورپردازی خوب، حصار و دوربین هم بازدارنده‌اند و هم به تشخیص کمک می‌کنند.');

  M(T4,'A company\'s call center is in a plain building with no logo or sign. What is this approach called?',
    'مرکز تماس یک شرکت در ساختمانی ساده بدون آرم یا تابلو است. این روش چه نام دارد؟',
    'کمتر دیده شدن.',
    ['Industrial camouflage','An access control vestibule','Platform diversity','Geographic dispersion'],
    ['استتار صنعتی (Industrial camouflage)','Access control vestibule','تنوع پلتفرم','پراکندگی جغرافیایی'],
    'Industrial camouflage makes a facility less noticeable so fewer people target it. It is a form of security through obscurity: helpful as an extra layer in the physical world, but never something to rely on alone.',
    'استتار صنعتی یک ساختمان را کمتر قابل توجه می‌کند تا کمتر هدف قرار گیرد. نوعی امنیت از راه پنهان‌کاری است: در دنیای فیزیکی به عنوان لایه‌ی اضافه مفید است، اما هرگز نباید تنها به آن تکیه کرد.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['B9']={t:['Book Ch. 9: Resilience and physical security','فصل ۹ کتاب: تاب‌آوری و امنیت فیزیکی'],b:[
    PP('Matched to Chapter 9 of the course textbook (objectives 1.2, 2.4, 3.1 and 3.4). These are short review notes in our own words; read the chapter itself for the full explanation.',
      'این بخش با فصل ۹ کتاب درس جور است (سرفصل‌های 1.2، 2.4، 3.1 و 3.4). این‌ها یادداشت‌های کوتاه مرور به زبان خودمان است؛ توضیح کامل را در خود کتاب بخوان.'),

    H('Resilient design','طراحی تاب‌آور'),
    L([['Resilience is part of availability. Redundancy removes single points of failure (one device, link or rack whose failure stops everything).','تاب‌آوری بخشی از Availability است. افزونگی نقاط شکست واحد را حذف می‌کند (یک دستگاه، اتصال یا رک که خرابی‌اش همه چیز را می‌خواباند).'],
       ['Geographic dispersion: sites far apart (rule of thumb 90+ miles / ~145 km). Also spread servers across racks, use multipath networking and redundant network/security devices.','پراکندگی جغرافیایی: سایت‌ها دور از هم (قاعده: ۹۰+ مایل / حدود ۱۴۵ کیلومتر). سرورها را در چند رک پخش کن، شبکه‌ی چندمسیره و دستگاه‌های شبکه/امنیتی افزونه داشته باش.'],
       ['Load balancing = spread requests across many systems that look like one; allows patching without downtime. Clustering = machines joined to act as one larger system.','Load balancing = پخش درخواست بین چند سیستم که یکی دیده می‌شوند؛ وصله بدون قطعی. Clustering = ماشین‌هایی که با هم مثل یک سیستم بزرگ‌تر کار می‌کنند.'],
       ['Platform diversity (vendors, crypto, platforms) and multicloud limit one flaw or provider outage; cost = complexity, training, errors.','تنوع پلتفرم (فروشنده، رمزنگاری، پلتفرم) و Multicloud اثر یک ضعف یا قطعی ارائه‌دهنده را محدود می‌کنند؛ هزینه = پیچیدگی، آموزش، خطا.'],
       ['Scaling: vertical = bigger box; horizontal = more boxes (easier to grow, shrink and patch).','مقیاس‌دهی: عمودی = دستگاه بزرگ‌تر؛ افقی = دستگاه بیشتر (رشد، کوچک شدن و وصله راحت‌تر).'],
       ['Architecture considerations: availability, resilience, cost, responsiveness, scalability, ease of deployment, risk transference, ease of recovery, patch availability, inability to patch, power, compute.','ملاحظات معماری: دسترس‌پذیری، تاب‌آوری، هزینه، پاسخگویی، مقیاس‌پذیری، آسانی استقرار، انتقال ریسک، آسانی بازیابی، وجود وصله، ناتوانی در وصله، برق، پردازش.']]),

    H('Storage and backups','ذخیره‌سازی و پشتیبان'),
    TB([['RAID','RAID'],['How','روش'],['Survives','تحمل']],[
      [['0','0'],['Striping (speed, all capacity)','نواری (سرعت، همه‌ی ظرفیت)'],['No drive failure','هیچ خرابی']],
      [['1','1'],['Mirroring (2x storage)','آینه (دو برابر فضا)'],['A drive failure','خرابی یک درایو']],
      [['5','5'],['Striping + distributed parity','نواری + Parity پخش‌شده'],['One drive at a time; slow rebuild','یک درایو در هر زمان؛ بازسازی کند']],
      [['10 (1+0)','10 (1+0)'],['Mirror then stripe, 4+ drives','آینه بعد نوار، ۴+ درایو'],['A drive in each mirror pair','یک درایو در هر جفت آینه']]]),
    TB([['Backup','پشتیبان'],['Copies','کپی می‌کند'],['Restore needs','بازیابی لازم دارد']],[
      [['Full','کامل'],['Everything','همه چیز'],['Just the full','فقط همان']],
      [['Incremental','افزایشی'],['Changes since the last backup of any type (fast to make)','تغییرات از آخرین پشتیبان (ساخت سریع)'],['Full + every incremental in order (slow)','کامل + همه‌ی Incrementalها به ترتیب (کند)']],
      [['Differential','تفاضلی'],['Changes since the last FULL (grows daily)','تغییرات از آخرین «کامل» (روزبه‌روز بزرگ‌تر)'],['Full + latest differential (fast)','کامل + آخرین Differential (سریع)']]]),
    L([['Snapshot = point-in-time state of a running system/VM (roll back a patch, clone). Image = complete bit-level copy of a drive; gold master images power nonpersistent VDI.','Snapshot = وضعیت یک لحظه از سیستم/VM در حال اجرا (برگشت از وصله، کلون). Image = کپی کامل بیت‌به‌بیت درایو؛ Gold master برای VDI غیرماندگار.'],
       ['Replication runs continuously: synchronous = real time (copies always match), asynchronous = shortly after (small data loss possible).','Replication مداوم است: هم‌زمان = لحظه‌ای (نسخه‌ها همیشه یکسان)، ناهم‌زمان = کمی بعد (احتمال از دست رفتن کمی داده).'],
       ['Journaling = log of changes replayed for point-in-time recovery; back the journal up elsewhere; replay can slow recovery.','Journaling = لاگ تغییرات برای بازیابی به یک لحظه؛ از Journal در جای دیگر پشتیبان بگیر؛ اجرای دوباره می‌تواند بازیابی را کند کند.'],
       ['Online (instant) vs nearline (tape robot, archive tier) vs offline (stored unpowered). Offsite copies survive a local disaster; encrypt backups at rest and in transit and protect the keys.','Online (فوری)، Nearline (ربات نوار، لایه‌ی بایگانی)، Offline (بی‌برق در انبار). نسخه‌ی خارج از سایت از بلای محلی جان سالم به در می‌برد؛ پشتیبان را در ذخیره و انتقال رمز کن و از کلیدها محافظت کن.'],
       ['RPO = acceptable data loss (drives backup frequency). RTO = acceptable downtime (drives restore speed).','RPO = از دست رفتن داده‌ی قابل قبول (تعداد دفعات پشتیبان). RTO = مدت قطعی قابل قبول (سرعت بازیابی).']]),

    H('Recovery sites, power and testing','سایت بازیابی، برق و آزمون'),
    TB([['Site','سایت'],['Has','دارد'],['Cost / speed','هزینه / سرعت']],[
      [['Hot','داغ'],['Systems + current data + often staff','سیستم + داده‌ی به‌روز + اغلب کارکنان'],['Highest cost, fastest','گران‌ترین، سریع‌ترین']],
      [['Warm','گرم'],['Some/most systems, no live data','بخشی/بیشتر سیستم‌ها، بدون داده‌ی زنده'],['Middle','متوسط']],
      [['Cold','سرد'],['Space, power, network only','فقط فضا، برق، شبکه'],['Cheapest, slowest','ارزان‌ترین، کندترین']]]),
    L([['Restoration order: network + bastion host → security devices → storage/databases → critical servers → logging/monitoring → the rest.','ترتیب بازیابی: شبکه + Bastion ← دستگاه‌های امنیتی ← ذخیره‌ساز/پایگاه داده ← سرورهای حیاتی ← لاگ/پایش ← بقیه.'],
       ['Power: UPS = short-term battery bridge; generator = long outages; dual power supplies; managed PDUs.','برق: UPS = پل کوتاه‌مدت با باتری؛ ژنراتور = قطعی طولانی؛ منبع تغذیه‌ی دوتایی؛ PDU مدیریت‌شده.'],
       ['Capacity planning: people, technology, infrastructure. Plan for staff being affected by the disaster too.','برنامه‌ریزی ظرفیت: آدم‌ها، تکنولوژی، زیرساخت. برای آسیب دیدن کارکنان در بلا هم برنامه داشته باش.'],
       ['Tests, least → most disruptive: tabletop → simulation → parallel processing → failover. Always capture lessons learned.','آزمون‌ها از کم‌اختلال به پراختلال: Tabletop ← Simulation ← Parallel processing ← Failover. همیشه درس‌ها را ثبت کن.'],
       ['Response tools: nonpersistence (revert to known state), last-known good configuration, live boot media.','ابزار پاسخ: Nonpersistence (برگشت به وضعیت شناخته‌شده)، Last-known good configuration، Live boot media.']]),

    H('Physical security','امنیت فیزیکی'),
    TB([['Control','کنترل'],['Main job','کار اصلی']],[
      [['Fencing','حصار'],['Deter and delay; height, wire, gate design','بازدارندگی و تأخیر؛ ارتفاع، سیم خاردار، طراحی در']],
      [['Bollards','Bollard'],['Stop vehicles','توقف خودرو']],
      [['Lighting','نورپردازی'],['No dark spots; deters, helps cameras and guards','بدون نقطه‌ی تاریک؛ بازدارنده، کمک به دوربین و نگهبان']],
      [['Access badges','کارت دسترسی'],['Photo ID + RFID/magstripe entry; can be cloned or faked','عکس + ورود با RFID/نوار مغناطیسی؛ قابل کپی یا جعل']],
      [['Access control vestibule','Access control vestibule'],['Two doors, one at a time; stops piggybacking','دو در، یکی‌یکی؛ جلوی Piggybacking']],
      [['Security guards','نگهبان'],['Judgment, detection and response; costly; can be socially engineered','قضاوت، تشخیص و پاسخ؛ گران؛ قابل فریب']],
      [['Video surveillance','دوربین'],['Motion recognition (with buffer), object detection, PTZ, CCTV','تشخیص حرکت (با بافر)، تشخیص شیء، PTZ، CCTV']]]),
    TB([['Sensor','حسگر'],['Notes','نکته']],[
      [['Infrared','مادون قرمز'],['Heat changes; cheap; small indoor rooms','تغییر گرما؛ ارزان؛ اتاق کوچک داخلی']],
      [['Microwave','مایکروویو'],['Baseline; more sensitive, through materials, costlier, more false alarms','خط مبنا؛ حساس‌تر، از مواد رد می‌شود، گران‌تر، هشدار اشتباه بیشتر']],
      [['Pressure','فشار'],['Pads/plates; object moved','صفحه‌ی فشار؛ جابه‌جایی شیء']],
      [['Ultrasonic','فراصوت'],['Rare in security; proximity; set off by vibration','در امنیت کم؛ تشخیص نزدیکی؛ با لرزش فعال می‌شود']]]),
    L([['Physical attacks: brute force (break doors, cut locks), RFID cloning (copied badge; watch for odd access), environmental (HVAC, sprinklers, power; often looks like a fault).','حمله‌های فیزیکی: Brute force (شکستن در، بریدن قفل)، RFID cloning (کارت کپی‌شده؛ دسترسی عجیب را پایش کن)، محیطی (سرمایش، آب‌پاش، برق؛ اغلب شبیه خرابی).'],
       ['Not in the outline but useful: alarms, fire suppression (wet, dry, pre-action, deluge sprinklers; gas agents for datacenters), locks ("keep honest people honest"), drones, industrial camouflage.','در سرفصل نیست اما مفید: آژیر، اطفای حریق (آب‌پاش Wet، Dry، Pre-action، Deluge؛ گاز برای دیتاسنتر)، قفل («آدم درستکار را درستکار نگه می‌دارد»)، پهپاد، استتار صنعتی.']]),

    TT('Exam shortcut: incremental = since last backup (fast backup, slow restore); differential = since last full (slow backup, fast restore). Hot = data ready, warm = hardware but no data, cold = empty room. Tabletop is least disruptive, failover most. Bollards stop cars; vestibules stop tailgaters; infrared is the cheap indoor sensor.',
      'نکته‌ی امتحان: Incremental = از آخرین پشتیبان (ساخت سریع، بازیابی کند)؛ Differential = از آخرین کامل (ساخت کند، بازیابی سریع). داغ = داده آماده، گرم = سخت‌افزار بدون داده، سرد = اتاق خالی. Tabletop کم‌اختلال‌ترین و Failover پراختلال‌ترین است. Bollard جلوی ماشین، Vestibule جلوی Tailgating؛ Infrared حسگر ارزان داخلی است.')
  ]};
})();
