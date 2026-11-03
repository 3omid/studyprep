/* Security+ extension: Section B14, matched to Chapter 14 ("Monitoring and Incident Response") of the course
   textbook (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written
   for the chapter's objectives (2.4, 2.5, 4.4, 4.8, 4.9); no text from the book is copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['B14']={en:'Book Ch. 14: Monitoring and incident response',fa:'فصل ۱۴ کتاب: پایش و پاسخ به حادثه'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b14_'+(++n),sec:'B14',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='IR process',T2='Team, plans & exercises',T3='Indicators',T4='SIEM & alerting',T5='Logs & data sources',T6='Mitigation & RCA';

  /* ---- IR process ---- */
  M(T1,'A help desk ticket says several laptops are showing a strange pop-up. An analyst reviews the alerts and decides it is a real security incident. Which phase has just finished?',
    'یک تیکت پشتیبانی می‌گوید چند لپ‌تاپ یک پنجره‌ی عجیب نشان می‌دهند. تحلیلگر هشدارها را بررسی می‌کند و تصمیم می‌گیرد که این یک حادثه‌ی امنیتی واقعی است. کدام مرحله همین الان تمام شده؟',
    'دیدن رویدادها و تشخیص این‌که حادثه است، قبل از مهار.',
    ['Detection','Containment','Eradication','Lessons learned'],
    ['Detection (کشف)','Containment (مهار)','Eradication (ریشه‌کنی)','Lessons learned (درس‌آموخته‌ها)'],
    'Detection is reviewing events and deciding which ones are incidents. Analysis then finds related events and the impact, containment stops the spread, eradication removes the attacker\'s artifacts and recovery returns to normal.',
    'Detection یعنی بررسی رویدادها و تشخیص این‌که کدام‌شان حادثه است. بعد Analysis رویدادهای مرتبط و اثر را پیدا می‌کند، Containment جلوی پخش شدن را می‌گیرد، Eradication آثار مهاجم را پاک می‌کند و Recovery کار را به حالت عادی برمی‌گرداند.');

  M(T1,'After malware is contained, the team rebuilds the infected servers from a known good image instead of trying to clean them. Which phase is this?',
    'بعد از مهار بدافزار، تیم سرورهای آلوده را به‌جای پاک‌سازی، از یک ایمیج سالم از نو می‌سازد. این کدام مرحله است؟',
    'آثار حادثه حذف می‌شود.',
    ['Eradication','Recovery','Preparation','Analysis'],
    ['Eradication (ریشه‌کنی)','Recovery (بازیابی)','Preparation (آمادگی)','Analysis (تحلیل)'],
    'Eradication removes everything the incident left behind. Rebuilding from trusted media is common because proving a system is fully clean is very hard. Recovery comes next: bringing services back and fixing the weakness so it does not happen again.',
    'Eradication همه‌ی چیزهایی را که حادثه به جا گذاشته حذف می‌کند. ساختن دوباره از ایمیج سالم رایج است، چون ثابت کردن این‌که سیستم کاملاً پاک شده خیلی سخت است. بعد از آن Recovery می‌آید: برگرداندن سرویس‌ها و رفع ضعفی که باعث حادثه شد.');

  M(T1,'Which phase of the incident response cycle feeds what the team learned back into preparation for the next incident?',
    'کدام مرحله از چرخه‌ی پاسخ به حادثه، آنچه تیم یاد گرفته را دوباره به مرحله‌ی آمادگی برای حادثه‌ی بعدی برمی‌گرداند؟',
    'جلسه‌ی بعد از حادثه.',
    ['Lessons learned','Recovery','Containment','Detection'],
    ['Lessons learned (درس‌آموخته‌ها)','Recovery (بازیابی)','Containment (مهار)','Detection (کشف)'],
    'Lessons learned closes the loop: the team reviews what went well and badly and updates plans, tools and training. The cycle is not strictly linear; teams often move back and forth between phases.',
    'Lessons learned چرخه را می‌بندد: تیم بررسی می‌کند چه چیزی خوب و چه چیزی بد پیش رفت و برنامه‌ها، ابزارها و آموزش را به‌روز می‌کند. چرخه کاملاً خطی نیست؛ تیم‌ها اغلب بین مرحله‌ها جلو و عقب می‌روند.');

  M(T1,'An exam question asks which IR phase uses indicators of compromise and log review to examine events. The options are Preparation, Containment, Eradication and Identification. Which should you pick?',
    'یک سؤال امتحان می‌پرسد کدام مرحله‌ی IR از IoCها و بررسی لاگ برای بررسی رویدادها استفاده می‌کند. گزینه‌ها Preparation، Containment، Eradication و Identification هستند. کدام را انتخاب کنی؟',
    'بعضی منابع Detection و Analysis را با هم «Identification» می‌نامند.',
    ['Identification','Preparation','Containment','Eradication'],
    ['Identification (شناسایی)','Preparation (آمادگی)','Containment (مهار)','Eradication (ریشه‌کنی)'],
    'Some sources use the older name Identification for what the current outline splits into Detection and Analysis. If Detection or Analysis is not offered, Identification is the matching answer.',
    'بعضی منابع اسم قدیمی Identification را برای چیزی به کار می‌برند که سرفصل فعلی به Detection و Analysis تقسیم کرده. اگر Detection یا Analysis در گزینه‌ها نبود، Identification جواب درست است.');

  /* ---- Team, plans & exercises ---- */
  M(T2,'During a major incident, who on the IR team should make urgent business decisions and report to senior leadership?',
    'در یک حادثه‌ی بزرگ، چه کسی در تیم IR باید تصمیم‌های فوری کسب‌وکار را بگیرد و به مدیران ارشد گزارش بدهد؟',
    'کسی با اختیار کافی برای تصمیم‌گیری.',
    ['A member of management','A security analyst','A systems administrator','The public relations lead'],
    ['یکی از مدیران (Management)','تحلیلگر امنیت','مدیر سیستم','مسئول روابط عمومی'],
    'The management member has enough authority to decide in an emergency and is the main link to senior leadership. Security staff do most of the analysis, technical experts know the systems, and communications staff handle internal and external messages.',
    'عضو مدیریتی اختیار کافی برای تصمیم در شرایط اضطراری دارد و رابط اصلی با مدیران ارشد است. کارکنان امنیت بیشتر تحلیل را انجام می‌دهند، متخصصان فنی سیستم‌ها را می‌شناسند و تیم ارتباطات پیام‌های داخلی و بیرونی را مدیریت می‌کند.');

  M(T2,'The IR team sits in a conference room, hears a ransomware scenario and talks through how each person would respond. No systems are touched. What kind of exercise is this?',
    'تیم IR در اتاق جلسه می‌نشیند، یک سناریوی باج‌افزار را می‌شنود و درباره‌ی این‌که هر کس چه واکنشی نشان می‌دهد صحبت می‌کند. به هیچ سیستمی دست زده نمی‌شود. این چه نوع تمرینی است؟',
    'فقط بحث، بدون اجرای واقعی.',
    ['Tabletop exercise','Simulation','Failover test','Penetration test'],
    ['Tabletop (تمرین روی میز)','Simulation (شبیه‌سازی)','Failover test (تست جابه‌جایی)','Penetration test (تست نفوذ)'],
    'A tabletop exercise is a discussion of a scenario, a bit like brainstorming, and is the least disruptive. A simulation acts out parts of an incident, from one function up to the whole organization, and every message should start with a cue like "This is an exercise".',
    'Tabletop بحث درباره‌ی یک سناریو است، کمی شبیه طوفان فکری، و کمترین اختلال را دارد. Simulation بخش‌هایی از حادثه را واقعاً اجرا می‌کند، از یک بخش تا کل سازمان، و هر پیام باید با جمله‌ای مثل «این یک تمرین است» شروع شود.');

  M(T2,'Which plan decides who may talk to the press during an incident and who approves the wording of public statements?',
    'کدام برنامه تعیین می‌کند در زمان حادثه چه کسی با رسانه‌ها حرف بزند و چه کسی متن بیانیه‌های عمومی را تأیید کند؟',
    'درباره‌ی پیام‌ها و نقش‌های ارتباطی است.',
    ['Communication plan','Disaster recovery plan','Business continuity plan','Incident response policy'],
    ['Communication plan (برنامه‌ی ارتباطات)','DR plan (بازیابی از فاجعه)','BC plan (تداوم کسب‌وکار)','IR policy (سیاست پاسخ به حادثه)'],
    'The communication plan lists roles for messages, media and the final say on tone and content. Stakeholder management decides which groups get what support. BC keeps the business running during an incident; DR restores services after a disaster destroys facilities or infrastructure.',
    'برنامه‌ی ارتباطات نقش‌ها را برای پیام‌ها، رسانه و تصمیم نهایی درباره‌ی لحن و محتوا مشخص می‌کند. مدیریت ذی‌نفعان تعیین می‌کند هر گروه چه پشتیبانی بگیرد. BC کار را در حین حادثه سرپا نگه می‌دارد؛ DR بعد از فاجعه‌ای که ساختمان یا زیرساخت را از بین برده سرویس‌ها را برمی‌گرداند.');

  /* ---- Indicators ---- */
  M(T3,'A user signs in from Toronto at 9:00 and from Singapore at 9:20 the same morning. Which indicator is this?',
    'یک کاربر ساعت ۹:۰۰ از تورنتو و ساعت ۹:۲۰ همان صبح از سنگاپور وارد سیستم می‌شود. این کدام نشانه است؟',
    'در ۲۰ دقیقه نمی‌شود این مسیر را رفت.',
    ['Impossible travel','Concurrent session usage','Out-of-cycle logging','Account lockout'],
    ['Impossible travel (سفر غیرممکن)','Concurrent session (نشست هم‌زمان)','Out-of-cycle logging (لاگ خارج از زمان معمول)','Account lockout (قفل شدن حساب)'],
    'Impossible travel means two logins too far apart for the time between them, so someone else probably has the credentials. A SIEM that correlates login events with IP geolocation is the usual way to spot it.',
    'Impossible travel یعنی دو ورود که فاصله‌ی مکانی‌شان برای آن مدت زمان غیرممکن است؛ پس احتمالاً کس دیگری رمز را دارد. معمولاً SIEM با ترکیب لاگ ورود و موقعیت IP آن را پیدا می‌کند.');

  M(T3,'A nightly cleanup script that always runs at 01:00 shows a log entry at 14:35 on a Tuesday. Which indicator should you flag?',
    'یک اسکریپت پاک‌سازی شبانه که همیشه ساعت ۱:۰۰ اجرا می‌شود، روز سه‌شنبه ساعت ۱۴:۳۵ یک ورودی لاگ دارد. کدام نشانه را باید علامت بزنی؟',
    'کاری زمان‌بندی‌شده در زمان غیرعادی.',
    ['Out-of-cycle logging','Resource consumption','Missing logs','Blocked content'],
    ['Out-of-cycle logging (لاگ خارج از چرخه)','Resource consumption (مصرف منابع)','Missing logs (لاگ‌های گم‌شده)','Blocked content (محتوای مسدود)'],
    'Out-of-cycle logging is an event that normally happens on a set schedule appearing at an unusual time, such as a backup job running mid-day or a 9-to-5 worker logging in at 2 a.m. An attacker may be abusing the tool.',
    'Out-of-cycle logging یعنی رویدادی که معمولاً طبق برنامه‌ی ثابت اتفاق می‌افتد، در زمان غیرعادی دیده شود؛ مثل اجرای بکاپ وسط روز یا ورود کارمند ۹ تا ۵ در ساعت ۲ بامداد. ممکن است مهاجم از آن ابزار سوءاستفاده کند.');

  M(T3,'A server\'s security log has no entries between 02:00 and 04:00, but the central log server still holds them. What is the most likely explanation?',
    'لاگ امنیتی یک سرور بین ساعت ۲ تا ۴ هیچ ورودی ندارد، اما سرور لاگ مرکزی هنوز آن‌ها را دارد. محتمل‌ترین توضیح چیست؟',
    'چرا لاگ مرکزی مهم است؟',
    ['An attacker cleared the local logs to hide activity','Normal log rotation removed them','The server was newly built','The logs were encrypted by ransomware'],
    ['مهاجم لاگ‌های محلی را پاک کرده تا کارش پنهان شود','چرخش عادی لاگ آن‌ها را حذف کرده','سرور تازه نصب شده','باج‌افزار لاگ‌ها را رمز کرده'],
    'Missing logs often mean an attacker wiped them. Rotation removes the oldest entries, not a gap in the middle; encrypted logs would still exist as files. This is why organizations send logs to a protected central server.',
    'لاگ‌های گم‌شده معمولاً یعنی مهاجم آن‌ها را پاک کرده. چرخش لاگ قدیمی‌ترین‌ها را حذف می‌کند، نه یک تکه از وسط؛ لاگ رمزشده هم هنوز به‌صورت فایل وجود دارد. به همین دلیل سازمان‌ها لاگ‌ها را به یک سرور مرکزی محافظت‌شده می‌فرستند.');

  M(T3,'The DNS filter shows one workstation repeatedly trying to reach a domain on the block list every five minutes. Which indicator is this, and what does it suggest?',
    'فیلتر DNS نشان می‌دهد یک کامپیوتر هر پنج دقیقه سعی می‌کند به دامنه‌ای در فهرست مسدود وصل شود. این کدام نشانه است و چه چیزی را نشان می‌دهد؟',
    'تلاش منظم برای رسیدن به یک دامنه‌ی ممنوع.',
    ['Blocked content; possible malware beaconing','Resource inaccessibility; a DNS outage','Concurrent session usage; shared credentials','Published indicator; a threat feed update'],
    ['Blocked content؛ احتمال تماس بدافزار با سرور فرمان','Resource inaccessibility؛ قطعی DNS','Concurrent session؛ رمز مشترک','Published indicator؛ به‌روزرسانی فید تهدید'],
    'Attempts to reach blocked content can mean malware or an attacker is trying to contact a resource the organization has prohibited. A regular interval points to automated beaconing to a command-and-control server.',
    'تلاش برای رسیدن به محتوای مسدود ممکن است یعنی بدافزار یا مهاجم می‌خواهد به منبعی که سازمان ممنوع کرده وصل شود. فاصله‌ی زمانی منظم نشان‌دهنده‌ی تماس خودکار (Beaconing) با سرور فرمان و کنترل است.');

  M(T3,'Your threat intelligence feed lists file hashes and IP addresses tied to a new ransomware group. Which indicator type in the exam outline describes these?',
    'فید هوش تهدید شما هش فایل‌ها و آدرس‌های IP مربوط به یک گروه باج‌افزاری جدید را فهرست کرده. کدام نوع نشانه در سرفصل امتحان این‌ها را توصیف می‌کند؟',
    'نشانه‌هایی که دیگران قبلاً کشف و منتشر کرده‌اند.',
    ['Published/documented','Out-of-cycle logging','Resource consumption','Impossible travel'],
    ['Published/documented (منتشر/مستندشده)','Out-of-cycle logging','Resource consumption','Impossible travel'],
    'Published or documented indicators are IoCs that someone has already discovered and shared, usually through threat feeds or information sharing organizations such as ISACs. Threat hunters search their own environment for them.',
    'نشانه‌های Published/documented یعنی IoCهایی که کسی قبلاً کشف و منتشر کرده، معمولاً از طریق فید تهدید یا سازمان‌های اشتراک اطلاعات مثل ISAC. شکارچیان تهدید آن‌ها را در محیط خودشان جست‌وجو می‌کنند.');

  /* ---- SIEM & alerting ---- */
  M(T4,'Analysts have stopped reading SIEM alerts because most of them are false positives from routine backups. What is this problem called, and what fixes it?',
    'تحلیلگرها دیگر هشدارهای SIEM را نمی‌خوانند، چون بیشترشان مثبت کاذب از بکاپ‌های روزمره هستند. اسم این مشکل چیست و چه چیزی آن را درست می‌کند؟',
    'هشدار زیاد → بی‌توجهی.',
    ['Alert fatigue; alert tuning','Log rotation; archiving','Data sprawl; retention limits','Sensor failure; adding agents'],
    ['Alert fatigue (خستگی از هشدار)؛ Alert tuning (تنظیم هشدار)','Log rotation؛ بایگانی','پراکندگی داده؛ محدودیت نگهداری','خرابی حسگر؛ افزودن Agent'],
    'Alert fatigue means so many low-value alerts that real ones get missed. Alert tuning adjusts thresholds and sensitivity and filters known-normal activity, without making the rules so broad that real attacks are ignored.',
    'Alert fatigue یعنی آن‌قدر هشدار کم‌ارزش زیاد است که هشدارهای واقعی دیده نمی‌شوند. Alert tuning آستانه‌ها و حساسیت را تنظیم می‌کند و فعالیت‌های عادی شناخته‌شده را فیلتر می‌کند، بدون این‌که قاعده‌ها آن‌قدر گشاد شوند که حمله‌ی واقعی نادیده گرفته شود.');

  M(T4,'A SIEM rule should fire only after ten failed logins for the same account within five minutes. Which SIEM setting is being configured?',
    'یک قاعده‌ی SIEM باید فقط بعد از ده ورود ناموفق برای یک حساب در عرض پنج دقیقه فعال شود. کدام تنظیم SIEM دارد پیکربندی می‌شود؟',
    'یک عدد که از آن به بعد هشدار می‌دهد.',
    ['Threshold','Dashboard','Trend','Sensor'],
    ['Threshold (آستانه)','Dashboard (داشبورد)','Trend (روند)','Sensor (حسگر)'],
    'Thresholds and sensitivity control when an alert fires: after a set count, only for high-value systems, or once instead of hundreds of times. Dashboards visualize data, trends show change over time and sensors collect data.',
    'Threshold و Sensitivity تعیین می‌کنند هشدار کی فعال شود: بعد از تعداد مشخص، فقط برای سیستم‌های مهم، یا یک بار به‌جای صدها بار. داشبورد داده را نمایش می‌دهد، Trend تغییر در طول زمان را نشان می‌دهد و Sensor داده جمع می‌کند.');

  M(T4,'Your cloud environment produces large amounts of data that the SIEM cannot collect directly. What is usually deployed there to gather and forward it?',
    'محیط ابری شما حجم زیادی داده تولید می‌کند که SIEM نمی‌تواند مستقیم جمع کند. معمولاً چه چیزی آنجا نصب می‌شود تا داده را جمع کند و بفرستد؟',
    'نرم‌افزار، VM یا دستگاهی که داده جمع می‌کند.',
    ['A sensor','A honeypot','A jump server','A load balancer'],
    ['Sensor (حسگر)','Honeypot (تله)','Jump server','Load balancer'],
    'Sensors are usually software agents, but can be a VM or dedicated device. They are placed where lots of unique data is generated, may preprocess it before sending it to the SIEM, and must be protected like any other security component.',
    'Sensor معمولاً یک Agent نرم‌افزاری است، اما می‌تواند VM یا دستگاه جدا باشد. جایی گذاشته می‌شود که داده‌ی خاص زیادی تولید می‌شود، ممکن است قبل از ارسال به SIEM داده را پیش‌پردازش کند و مثل هر قطعه‌ی امنیتی دیگر باید محافظت شود.');

  M(T4,'A SIEM rule automatically adds a firewall block when it detects beaconing. What is the main risk of this kind of rule?',
    'یک قاعده‌ی SIEM وقتی Beaconing می‌بیند خودکار یک قاعده‌ی مسدودسازی به فایروال اضافه می‌کند. ریسک اصلی این نوع قاعده چیست؟',
    'اگر اشتباهی فعال شود چه می‌شود؟',
    ['A mis-triggered rule can cause an outage','It cannot be logged','It makes the SIEM agentless','It disables correlation'],
    ['فعال شدن اشتباهی آن ممکن است باعث قطعی شود','قابل ثبت در لاگ نیست','SIEM را بدون Agent می‌کند','همبستگی را خاموش می‌کند'],
    'Rules with an active response can block legitimate traffic or change infrastructure if their logic is wrong. Rules need to be built carefully, tested and reviewed regularly, and custom rules for your own environment matter most.',
    'قاعده‌هایی که پاسخ فعال دارند، اگر منطقشان غلط باشد می‌توانند ترافیک مجاز را ببندند یا زیرساخت را تغییر دهند. قاعده‌ها باید با دقت ساخته، تست و مرتب بازبینی شوند و قاعده‌های سفارشی برای محیط خودتان از همه مهم‌ترند.');

  /* ---- Logs & data sources ---- */
  M(T5,'An investigator needs to read the actual contents of the traffic between an infected host and an outside server. Which data source is needed?',
    'یک بازرس باید محتوای واقعی ترافیک بین یک سیستم آلوده و یک سرور بیرونی را بخواند. کدام منبع داده لازم است؟',
    'NetFlow فقط مثل قبض تلفن است.',
    ['Packet capture','NetFlow','Firewall logs','sFlow'],
    ['Packet capture (ضبط بسته)','NetFlow','لاگ فایروال','sFlow'],
    'A packet capture (for example with Wireshark) holds the full packet contents. Flow data such as NetFlow, sFlow and IPFIX is like a phone bill: who talked to whom, when, and how much, but not what was said.',
    'Packet capture (مثلاً با Wireshark) محتوای کامل بسته‌ها را دارد. داده‌ی Flow مثل NetFlow، sFlow و IPFIX شبیه قبض تلفن است: چه کسی با چه کسی، کی و چقدر حرف زد، اما نه این‌که چه گفت.');

  M(T5,'Why might flow data from a very busy network miss some connections?',
    'چرا ممکن است داده‌ی Flow از یک شبکه‌ی خیلی شلوغ بعضی اتصال‌ها را نشان ندهد؟',
    'مثلاً ۱ از هر ۱۰۰۰ بسته.',
    ['Flows are often sampled to save processing and storage','Flows only record UDP traffic','Flows are deleted every hour','Flows need an agent on every host'],
    ['Flowها اغلب نمونه‌برداری می‌شوند تا پردازش و فضا کمتر مصرف شود','Flow فقط ترافیک UDP را ثبت می‌کند','Flowها هر ساعت پاک می‌شوند','Flow روی هر سیستم Agent لازم دارد'],
    'Tracking every flow costs a lot of device CPU and storage, so flows are often sampled at rates like 10:1 or 1000:1. Sampling, especially with sFlow, scales well but loses some detail.',
    'ثبت همه‌ی Flowها پردازنده و فضای زیادی از دستگاه می‌گیرد، پس اغلب با نرخ‌هایی مثل ۱۰ به ۱ یا ۱۰۰۰ به ۱ نمونه‌برداری می‌شود. نمونه‌برداری، مخصوصاً در sFlow، برای شبکه‌ی بزرگ خوب است اما بخشی از جزئیات از دست می‌رود.');

  M(T5,'Where would you look for failed SSH logins on an Ubuntu server, and on a Red Hat server?',
    'ورودهای ناموفق SSH را روی سرور Ubuntu کجا پیدا می‌کنی، و روی سرور Red Hat کجا؟',
    'لاگ احراز هویت لینوکس؛ اسم فایل به توزیع بستگی دارد.',
    ['/var/log/auth.log on Ubuntu; /var/log/secure on Red Hat','/var/log/secure on Ubuntu; /var/log/auth.log on Red Hat','The Windows Security log on both','/etc/passwd on both'],
    ['Ubuntu: ‎/var/log/auth.log؛ Red Hat: ‎/var/log/secure','Ubuntu: ‎/var/log/secure؛ Red Hat: ‎/var/log/auth.log','لاگ Security ویندوز در هر دو','‎/etc/passwd در هر دو'],
    'Debian and Ubuntu write authentication events to /var/log/auth.log and general messages to /var/log/syslog; Red Hat uses /var/log/secure and /var/log/messages. journalctl shows the systemd journal on either (-b since last boot, --since for a time range).',
    'Debian و Ubuntu رویدادهای احراز هویت را در ‎/var/log/auth.log و پیام‌های عمومی را در ‎/var/log/syslog می‌نویسند؛ Red Hat از ‎/var/log/secure و ‎/var/log/messages استفاده می‌کند. journalctl روی هر دو ژورنال systemd را نشان می‌دهد (‎-b از آخرین بوت، ‎--since برای بازه‌ی زمانی).');

  M(T5,'A suspicious email reached a user. Which metadata will show the servers it passed through and the real sending system?',
    'یک ایمیل مشکوک به دست کاربری رسیده. کدام فراداده سرورهایی را که ایمیل از آن‌ها عبور کرده و سیستم واقعی فرستنده را نشان می‌دهد؟',
    'بخشی از ایمیل که کاربر معمولاً نمی‌بیند.',
    ['The email headers','The message body','The attachment file name','The recipient\'s address book'],
    ['هدرهای ایمیل','متن پیام','اسم فایل پیوست','دفترچه‌ی آدرس گیرنده'],
    'Email headers record sender, recipient, time, attachments, every system the message passed through and antispam results. Other metadata includes mobile (call logs, GPS, cell towers), web (meta tags, cookies) and file metadata (EXIF in photos, with tools like ExifTool).',
    'هدرهای ایمیل فرستنده، گیرنده، زمان، پیوست‌ها، همه‌ی سیستم‌هایی که پیام از آن‌ها گذشته و نتیجه‌ی ضداسپم را ثبت می‌کنند. انواع دیگر فراداده: موبایل (سابقه‌ی تماس، GPS، دکل‌ها)، وب (Meta tag، کوکی) و فایل (EXIF در عکس، با ابزاری مثل ExifTool).');

  M(T5,'You need to confirm that every Windows workstation logs logons and sends critical events to central logging. What sets that standard across the fleet?',
    'باید مطمئن شوی همه‌ی کامپیوترهای ویندوزی ورودها را ثبت می‌کنند و رویدادهای مهم را به لاگ مرکزی می‌فرستند. چه چیزی این استاندارد را برای همه‌ی دستگاه‌ها تعیین می‌کند؟',
    'پیکربندی امن استاندارد که تنظیمات لاگ هم دارد.',
    ['A security benchmark','A packet capture','A NetFlow collector','A tabletop exercise'],
    ['Benchmark امنیتی (مثل CIS)','Packet capture','جمع‌کننده‌ی NetFlow','تمرین Tabletop'],
    'Benchmarks set a known secure configuration and usually include logging settings, such as central logging, log levels and which events to record. Logon events then appear in the Windows Security log.',
    'Benchmarkها یک پیکربندی امن شناخته‌شده تعیین می‌کنند و معمولاً تنظیمات لاگ هم دارند، مثل لاگ مرکزی، سطح لاگ و رویدادهایی که باید ثبت شوند. رویدادهای ورود بعد در لاگ Security ویندوز دیده می‌شوند.');

  M(T5,'An attacker may have installed a new service on several servers. Which routinely collected data will most reliably show a service that was not there before?',
    'شاید مهاجم روی چند سرور یک سرویس جدید نصب کرده باشد. کدام داده‌ای که به‌طور معمول جمع می‌شود، مطمئن‌تر از همه سرویسی را که قبلاً نبوده نشان می‌دهد؟',
    'ابزاری که پورت‌ها و سرویس‌ها را مرتب می‌شمارد.',
    ['Vulnerability scans','Firewall logs','Flow logs','Email headers'],
    ['اسکن آسیب‌پذیری','لاگ فایروال','لاگ Flow','هدر ایمیل'],
    'Regular vulnerability scans list the services each system offers, and many scanners flag new ones. Firewall and flow logs only show a service if traffic to it passes through them.',
    'اسکن‌های منظم آسیب‌پذیری سرویس‌های هر سیستم را فهرست می‌کنند و خیلی از اسکنرها سرویس جدید را علامت می‌زنند. لاگ فایروال و Flow فقط وقتی سرویس را نشان می‌دهند که ترافیکی به آن از آن‌ها عبور کند.');

  /* ---- Mitigation & RCA ---- */
  M(T6,'A server with malware must stay online for business reasons while it is investigated. Firewall rules now limit what it can send and receive. Which technique is this?',
    'سروری با بدافزار به دلایل کاری باید در حین بررسی روشن بماند. حالا قاعده‌های فایروال محدود می‌کنند چه چیزی بفرستد و دریافت کند. این کدام روش است؟',
    'سیستم سر جایش می‌ماند ولی محدود می‌شود.',
    ['Containment','Isolation','Segmentation','Eradication'],
    ['Containment (مهار)','Isolation (جداسازی کامل)','Segmentation (بخش‌بندی)','Eradication (ریشه‌کنی)'],
    'Containment leaves the system in place but blocks further harm, often with firewall rules. Isolation cuts the system off completely (unplug it or move it to an isolated VLAN). Segmentation is usually set up before an incident to split the network into zones.',
    'Containment سیستم را سر جایش نگه می‌دارد اما جلوی آسیب بیشتر را می‌گیرد، اغلب با قاعده‌های فایروال. Isolation سیستم را کاملاً جدا می‌کند (کشیدن کابل یا انتقال به VLAN جدا). Segmentation معمولاً قبل از حادثه برای تقسیم شبکه به ناحیه‌ها ساخته می‌شود.');

  M(T6,'An analyst unplugs an infected PC and tapes over its network port with a note: "Do not reconnect without IR approval." Which technique is this?',
    'تحلیلگری کابل یک کامپیوتر آلوده را می‌کشد و روی پورت شبکه‌اش چسب می‌زند با یادداشت: «بدون تأیید تیم IR وصل نکنید.» این کدام روش است؟',
    'هیچ ارتباطی با سیستم‌های دیگر باقی نمی‌ماند.',
    ['Isolation','Containment','Segmentation','Deny listing'],
    ['Isolation (جداسازی)','Containment (مهار)','Segmentation (بخش‌بندی)','Deny list (فهرست ممنوع)'],
    'Removing the system from the network so it cannot reach anything is isolation, also called quarantining the device. Containment would keep it connected with restricted access.',
    'جدا کردن سیستم از شبکه طوری که به هیچ چیز نرسد Isolation است، که به آن قرنطینه‌ی دستگاه هم می‌گویند. Containment سیستم را با دسترسی محدود وصل نگه می‌داشت.');

  M(T6,'The security team wants users to run only software they have reviewed and approved. Everything else must be blocked. What should they use?',
    'تیم امنیت می‌خواهد کاربران فقط نرم‌افزارهایی را اجرا کنند که بررسی و تأیید شده‌اند. همه‌چیز دیگر باید مسدود شود. از چه چیزی استفاده کنند؟',
    'فهرست مجازها، نه ممنوع‌ها.',
    ['An application allow list','An application deny list','A SIEM correlation rule','A DLP policy'],
    ['Application allow list (فهرست مجاز)','Application deny list (فهرست ممنوع)','قاعده‌ی همبستگی SIEM','سیاست DLP'],
    'An allow list permits only the listed applications and blocks everything else, so new unknown malware cannot run. A deny list blocks only the listed bad items and lets everything else through.',
    'Allow list فقط برنامه‌های فهرست‌شده را مجاز می‌کند و بقیه را می‌بندد، پس بدافزار ناشناخته‌ی جدید اجرا نمی‌شود. Deny list فقط موارد بد فهرست‌شده را می‌بندد و بقیه را اجازه می‌دهد.');

  M(T6,'Antivirus flags a file but the team is not sure it is really malicious. Which default action keeps the file available for investigation?',
    'آنتی‌ویروس یک فایل را علامت می‌زند اما تیم مطمئن نیست واقعاً مخرب باشد. کدام اقدام پیش‌فرض فایل را برای بررسی نگه می‌دارد؟',
    'اگر آنتی‌ویروس اشتباه کند، فایل از دست نرود.',
    ['Quarantine','Delete','Ignore','Encrypt in place'],
    ['Quarantine (قرنطینه)','Delete (حذف)','Ignore (نادیده گرفتن)','رمزگذاری در همان محل'],
    'Quarantine moves the file to a safe zone where it cannot run but can still be restored or analyzed. Deleting is risky: a bad signature update could remove thousands of legitimate files. The trade-off is that the malicious file still exists on the system.',
    'Quarantine فایل را به یک ناحیه‌ی امن می‌برد که آنجا اجرا نمی‌شود اما می‌شود آن را برگرداند یا تحلیل کرد. حذف خطرناک است: یک به‌روزرسانی اشتباه امضا می‌تواند هزاران فایل سالم را پاک کند. عیبش این است که فایل مخرب هنوز روی سیستم هست.');

  M(T6,'After a ransomware attack, the team keeps asking "why?" until it reaches the underlying cause: no one owned patching for remote access servers. Which root cause analysis technique is this?',
    'بعد از حمله‌ی باج‌افزار، تیم مدام می‌پرسد «چرا؟» تا به علت اصلی برسد: هیچ‌کس مسئول وصله کردن سرورهای دسترسی از راه دور نبود. این کدام روش تحلیل علت ریشه‌ای است؟',
    'چند بار «چرا» پرسیدن.',
    ['Five whys','Event analysis','Fishbone diagram','Root/branch review'],
    ['Five whys (پنج چرا)','Event analysis (تحلیل رویداد)','Fishbone diagram (نمودار استخوان ماهی)','Root/branch review (روش واقعی نیست)'],
    'Five whys repeats "why?" to get past symptoms to the cause. Event analysis checks each event to see if it is the cause or a result, and cause-and-effect diagrams such as fishbone diagrams map causes visually. "Root/branch review" is not a real RCA technique.',
    'Five whys با چند بار پرسیدن «چرا» از نشانه‌ها رد می‌شود و به علت می‌رسد. Event analysis هر رویداد را بررسی می‌کند که علت است یا نتیجه، و نمودار علت و معلول مثل Fishbone علت‌ها را تصویری نشان می‌دهد. «Root/branch review» روش واقعی RCA نیست.');

  M(T6,'An attacker stole the private key of the company\'s web server certificate. Which configuration change best addresses this?',
    'مهاجم کلید خصوصی گواهی وب‌سرور شرکت را دزدیده. کدام تغییر پیکربندی بهترین پاسخ است؟',
    'گواهی دیگر قابل اعتماد نیست.',
    ['Revoke the certificate and issue a new one','Add a DLP rule','Lower the SIEM threshold','Enable NetFlow sampling'],
    ['ابطال گواهی و صدور گواهی جدید','افزودن قاعده‌ی DLP','پایین آوردن آستانه‌ی SIEM','روشن کردن نمونه‌برداری NetFlow'],
    'If attackers have a certificate\'s private key, revoke the certificate and replace it. Other common remediation changes are firewall rules, MDM actions such as remote wipe, DLP rules and URL or content filters. Track every change so it can be rolled back later.',
    'اگر مهاجم کلید خصوصی گواهی را دارد، گواهی را باطل و جایگزین کن. تغییرهای رایج دیگر: قاعده‌ی فایروال، اقدام‌های MDM مثل پاک کردن از راه دور، قاعده‌ی DLP و فیلتر URL یا محتوا. هر تغییر را ثبت کن تا بعداً بشود برگرداند.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['B14']={t:['Book Ch. 14: Monitoring and incident response','فصل ۱۴ کتاب: پایش و پاسخ به حادثه'],b:[
    PP('Matched to Chapter 14 of the course textbook (objectives 2.4, 2.5, 4.4, 4.8 and 4.9). These are short review notes in our own words; read the chapter itself for the full explanation.',
      'این بخش با فصل ۱۴ کتاب درس جور است (سرفصل‌های 2.4، 2.5، 4.4، 4.8 و 4.9). این‌ها یادداشت‌های کوتاه مرور به زبان خودمان است؛ توضیح کامل را در خود کتاب بخوان.'),

    H('Incident response cycle','چرخه‌ی پاسخ به حادثه'),
    TB([['Phase','مرحله'],['What happens','چه اتفاقی می‌افتد']],[
      [['Preparation','آمادگی'],['Team, training, exercises, plans, tools','تیم، آموزش، تمرین، برنامه، ابزار']],
      [['Detection','کشف'],['Review events, spot incidents (IoCs, logs, user reports)','بررسی رویدادها و تشخیص حادثه (IoC، لاگ، گزارش کاربر)']],
      [['Analysis','تحلیل'],['Find related events, target and impact','پیدا کردن رویدادهای مرتبط، هدف و اثر']],
      [['Containment','مهار'],['Stop the spread (quarantine, firewall rules)','جلوی پخش شدن را بگیر (قرنطینه، قاعده‌ی فایروال)']],
      [['Eradication','ریشه‌کنی'],['Remove artifacts; often rebuild from trusted media','حذف آثار؛ اغلب ساختن دوباره از منبع سالم']],
      [['Recovery','بازیابی'],['Back to normal and fix the weakness','برگشت به حالت عادی و رفع ضعف']],
      [['Lessons learned','درس‌آموخته‌ها'],['Review and feed improvements into preparation','بازبینی و برگرداندن بهبودها به آمادگی']]]),
    TT('Event = any observable occurrence; incident = a violation of policy or security practice. Older sources call Detection + Analysis "Identification". Phases can overlap and go backward.',
      'Event = هر اتفاق قابل مشاهده؛ Incident = نقض سیاست یا روش امنیتی. منابع قدیمی‌تر Detection + Analysis را «Identification» می‌نامند. مرحله‌ها می‌توانند هم‌پوشانی داشته باشند و به عقب برگردند.'),

    H('Team, exercises and plans','تیم، تمرین‌ها و برنامه‌ها'),
    L([['Team: management (decisions, link to leadership), security staff (core), technical experts, communications/PR, legal and HR (some incidents), law enforcement (rarely).','تیم: مدیریت (تصمیم، رابط با مدیران ارشد)، کارکنان امنیت (هسته)، متخصصان فنی، ارتباطات/روابط عمومی، حقوقی و منابع انسانی (بعضی حادثه‌ها)، پلیس (به‌ندرت).'],
       ['Tabletop = talk through a scenario. Simulation = act out part or all of it; start every message with "This is an exercise".','Tabletop = بحث درباره‌ی سناریو. Simulation = اجرای بخشی یا همه‌ی آن؛ هر پیام را با «این یک تمرین است» شروع کن.'],
       ['Plans: communication (who says what), stakeholder management, business continuity (keep running), disaster recovery (restore after a disaster).','برنامه‌ها: ارتباطات (چه کسی چه بگوید)، مدیریت ذی‌نفعان، تداوم کسب‌وکار (سرپا ماندن)، بازیابی از فاجعه (برگرداندن بعد از فاجعه).'],
       ['Policy = why (management intent, team authority). Standards = what. Procedures = how.','Policy = چرا (هدف مدیریت، اختیار تیم). Standard = چه چیزی. Procedure = چطور.']]),

    H('Indicators of compromise (2.4)','نشانه‌های نفوذ (2.4)'),
    TB([['Indicator','نشانه'],['Clue','سرنخ']],[
      [['Account lockout','قفل شدن حساب'],['Brute force or wrong passwords','حمله‌ی Brute force یا رمز اشتباه']],
      [['Concurrent session usage','نشست هم‌زمان'],['Same user on two devices/places at once','یک کاربر هم‌زمان روی دو دستگاه یا دو جا']],
      [['Blocked content','محتوای مسدود'],['Tries to reach blocked domains/IPs (malware?)','تلاش برای رسیدن به دامنه/IP مسدود (بدافزار؟)']],
      [['Impossible travel','سفر غیرممکن'],['Two logins too far apart for the time','دو ورود با فاصله‌ی مکانی غیرممکن برای آن زمان']],
      [['Resource consumption','مصرف منابع'],['Full disk, unusual bandwidth','دیسک پر، پهنای باند غیرعادی']],
      [['Resource inaccessibility','دسترس‌ناپذیری منبع'],['System, file or service unavailable','سیستم، فایل یا سرویس در دسترس نیست']],
      [['Out-of-cycle logging','لاگ خارج از چرخه'],['Scheduled event at an unusual time','رویداد زمان‌بندی‌شده در زمان غیرعادی']],
      [['Missing logs','لاگ گم‌شده'],['Attacker wiped logs; keep central copies','مهاجم لاگ را پاک کرده؛ نسخه‌ی مرکزی نگه دار']],
      [['Published/documented','منتشر/مستندشده'],['IoCs shared via threat feeds and ISACs','IoCهای منتشرشده در فید تهدید و ISAC']]]),
    L([['Threat hunting searches for these IoCs and supports detection and analysis.','Threat hunting دنبال این IoCها می‌گردد و به Detection و Analysis کمک می‌کند.'],
       ['MITRE ATT&CK describes adversary tactics and techniques (with IDs) and is the most widely supported framework. Others: Diamond Model, Cyber Kill Chain.','MITRE ATT&CK تاکتیک‌ها و تکنیک‌های مهاجم را (با شناسه) توصیف می‌کند و پرکاربردترین چارچوب است. بقیه: Diamond Model و Cyber Kill Chain.']]),

    H('Monitoring and SIEM (4.4)','پایش و SIEM (4.4)'),
    L([['Monitor systems (logs, management tools), applications (app logs, performance tools) and infrastructure (SNMP, syslog).','پایش سیستم‌ها (لاگ، ابزار مدیریت)، برنامه‌ها (لاگ برنامه، ابزار کارایی) و زیرساخت (SNMP، syslog).'],
       ['SIEM: aggregates and correlates logs, then offers dashboards, trends, alerts, reporting and retention.','SIEM: لاگ‌ها را جمع و به هم مرتبط می‌کند و داشبورد، روند، هشدار، گزارش و نگهداری می‌دهد.'],
       ['Sensors (usually agents) gather data where the SIEM cannot. Agentless sources send logs over standard interfaces such as syslog.','Sensorها (معمولاً Agent) جایی داده جمع می‌کنند که SIEM نمی‌تواند. منابع بدون Agent لاگ را از راه‌های استاندارد مثل syslog می‌فرستند.'],
       ['Alert tuning (thresholds, sensitivity, removing known-normal noise) prevents alert fatigue. Do not tune so broadly that real attacks are ignored.','Alert tuning (آستانه، حساسیت، حذف نویز عادی) جلوی خستگی از هشدار را می‌گیرد. آن‌قدر گشاد تنظیم نکن که حمله‌ی واقعی نادیده گرفته شود.'],
       ['Rules with automatic responses can cause outages if they misfire: build, test and review them.','قاعده‌های با پاسخ خودکار اگر اشتباه فعال شوند می‌توانند قطعی ایجاد کنند: بساز، تست کن، بازبینی کن.'],
       ['Log tools: syslog, rsyslog (fast, TLS, TCP), syslog-ng (filtering, databases, TLS), NXLog (many formats). Linux journal: journalctl (-b, --since).','ابزارهای لاگ: syslog، rsyslog (سریع، TLS، TCP)، syslog-ng (فیلتر، پایگاه داده، TLS)، NXLog (قالب‌های زیاد). ژورنال لینوکس: journalctl ‏(‎-b، ‎--since).'],
       ['Benchmarks set logging configuration. Reporting shows trends; archiving keeps old logs (often 30 to 180 days active) without filling the SIEM.','Benchmarkها تنظیمات لاگ را تعیین می‌کنند. Reporting روندها را نشان می‌دهد؛ Archiving لاگ‌های قدیمی را نگه می‌دارد (معمولاً ۳۰ تا ۱۸۰ روز فعال) بدون پر کردن SIEM.']]),

    H('Data sources for investigations (4.9)','منابع داده برای بررسی (4.9)'),
    TB([['Source','منبع'],['Shows','نشان می‌دهد']],[
      [['Firewall logs','لاگ فایروال'],['Allowed/blocked traffic; NGFW adds app details','ترافیک مجاز/مسدود؛ NGFW جزئیات برنامه را هم دارد']],
      [['Application logs','لاگ برنامه'],['App errors, installs; web logs show requests (SQLi)','خطا و نصب برنامه؛ لاگ وب درخواست‌ها را نشان می‌دهد (SQLi)']],
      [['Endpoint logs','لاگ Endpoint'],['Installs, system and service logs','نصب، لاگ سیستم و سرویس']],
      [['OS security logs','لاگ امنیتی سیستم‌عامل'],['Windows Security log; Linux auth.log / secure','لاگ Security ویندوز؛ auth.log / secure در لینوکس']],
      [['IDS/IPS logs','لاگ IDS/IPS'],['Detected or blocked attacks','حمله‌های کشف‌شده یا مسدودشده']],
      [['Network logs / flows','لاگ شبکه / Flow'],['Who talked to whom, when, how much (no content)','چه کسی با چه کسی، کی، چقدر (بدون محتوا)']],
      [['Packet capture','ضبط بسته'],['Full packet content','محتوای کامل بسته']],
      [['Metadata','فراداده'],['Email headers, mobile, web, file (EXIF/GPS)','هدر ایمیل، موبایل، وب، فایل (EXIF/GPS)']],
      [['Vulnerability scans','اسکن آسیب‌پذیری'],['New or unexpected services','سرویس‌های جدید یا غیرمنتظره']]]),
    TT('NetFlow (Cisco), sFlow (sampled, many vendors) and IPFIX (open, based on NetFlow v9) are flow data: like a phone bill, no content. Sampling can miss traffic.',
      'NetFlow (سیسکو)، sFlow (نمونه‌برداری‌شده، چند سازنده) و IPFIX (باز، بر پایه‌ی NetFlow v9) داده‌ی Flow هستند: مثل قبض تلفن، بدون محتوا. نمونه‌برداری ممکن است بخشی از ترافیک را جا بیندازد.'),

    H('Mitigation and root cause analysis','کاهش اثر و تحلیل علت ریشه‌ای'),
    TB([['Technique','روش'],['System stays connected?','سیستم وصل می‌ماند؟'],['Idea','ایده']],[
      [['Isolation','جداسازی'],['No','نه'],['Unplug or move to an isolated VLAN','کشیدن کابل یا انتقال به VLAN جدا']],
      [['Containment','مهار'],['Yes, restricted','بله، محدود'],['Firewall rules limit its traffic','قاعده‌ی فایروال ترافیکش را محدود می‌کند']],
      [['Segmentation','بخش‌بندی'],['Yes, in its zone','بله، در ناحیه‌ی خودش'],['Usually built before incidents','معمولاً قبل از حادثه ساخته می‌شود']]]),
    L([['Allow list = only approved apps run. Deny/block list = listed bad apps blocked.','Allow list = فقط برنامه‌های تأییدشده اجرا می‌شوند. Deny list = برنامه‌های بد فهرست‌شده مسدود می‌شوند.'],
       ['Quarantine keeps a suspect file safe for analysis; delete cannot be undone.','Quarantine فایل مشکوک را برای تحلیل نگه می‌دارد؛ حذف برگشت ندارد.'],
       ['Configuration changes: firewall rules, MDM (remote wipe), DLP, content/URL filters, revoking or updating certificates. Record every change.','تغییرهای پیکربندی: فایروال، MDM (پاک کردن از راه دور)، DLP، فیلتر محتوا/URL، ابطال یا به‌روزرسانی گواهی. هر تغییر را ثبت کن.'],
       ['Monitoring after remediation confirms the fix and can reveal other compromised systems.','پایش بعد از رفع مشکل درستی کار را تأیید می‌کند و ممکن است سیستم‌های آلوده‌ی دیگر را نشان دهد.'],
       ['SOAR automates assessment and remediation workflows.','SOAR ارزیابی و روال‌های رفع مشکل را خودکار می‌کند.'],
       ['Root cause analysis: five whys, event analysis, cause-and-effect (fishbone) diagrams. Results feed preparation.','تحلیل علت ریشه‌ای: پنج چرا، تحلیل رویداد، نمودار علت و معلول (استخوان ماهی). نتیجه به آمادگی برمی‌گردد.']]),

    TT('Exam shortcut: unplugged = isolation; online but restricted = containment; zones built in advance = segmentation. Content of packets = packet capture; who/when/how much = NetFlow. Too many false alarms = tune sensitivity.',
      'نکته‌ی امتحان: کابل کشیده = Isolation؛ روشن ولی محدود = Containment؛ ناحیه‌های از قبل ساخته = Segmentation. محتوای بسته = Packet capture؛ چه کسی/کی/چقدر = NetFlow. هشدار اشتباه زیاد = تنظیم Sensitivity.')
  ]};
})();
