/* Security+ extension: Module 11 (Automation, Incident Response & Investigation).
   Built from the Sheridan session slides. Loads after secplus.js and adds section 11 (questions + study notes) to the same course.
   The Persian side is written in plain, everyday language with simple examples. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['11']={en:'Automation, incident response & forensics',fa:'خودکارسازی، پاسخ به حادثه و جرم‌شناسی دیجیتال'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:e'+(++n),sec:'11',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var P=function(t,name,title,tf,zones,zf,items,zd,en,fa){ /* name = short label; the app shows title */
    pack.pbq.push({id:'secplus:p11_'+(pack.pbq.length+1),sec:'11',t:t,name:name,title:title,tf:tf,zones:zones,zf:zf,items:items,zd:zd,en:en,fa:fa});
  };

  /* ================= QUESTIONS ================= */
  var T1='Automation use cases',T2='Benefits, risks & orchestration',T3='Incident response lifecycle',T4='Digital forensics & evidence',T5='Data sources & investigations';

  M(T1,'HR approves a new hire, and within minutes the person automatically has email, VPN and app access with the right groups. Which automation use case is this?',
    'HR یک کارمند جدید را تأیید می‌کند و چند دقیقه بعد خودکار ایمیل، VPN و دسترسی برنامه‌ها با گروه‌های درست را دارد. این کدام کاربرد خودکارسازی است؟',
    'ساختن حساب کاربر.',
    ['User provisioning','Escalation','Ticket creation','Continuous integration testing'],
    ['ساخت خودکار حساب (User provisioning)','ارجاع به سطح بالاتر (Escalation)','ساخت تیکت','تست خودکار در CI'],
    'Automated user provisioning creates accounts with the correct roles and groups from templates or HR triggers, reducing onboarding time and keeping access consistent.',
    'User provisioning خودکار یعنی تا HR تأیید کرد، سیستم خودش حساب را با همان دسترسی‌های استاندارد آن شغل می‌سازد. سریع است و هیچ دسترسی اضافه یا جاافتاده‌ای نمی‌ماند.');

  M(T1,'A cloud server build request is automatically rejected because encryption at rest is not enabled. What is this?',
    'درخواست ساخت یک سرور ابری خودکار رد می‌شود چون رمزگذاری داده‌ی ذخیره‌شده روشن نیست. این چیست؟',
    'مثل نرده‌ی کنار جاده که نمی‌گذارد ماشین از جاده بیرون برود.',
    ['A guard rail','An escalation','A legal hold','A chain of custody'],
    ['نرده‌ی محافظ (Guard rail)','ارجاع (Escalation)','نگه‌داری قانونی (Legal hold)','زنجیره‌ی نگه‌داری مدرک'],
    'Guard rails enforce security policy automatically, blocking or alerting on insecure configurations before they reach production.',
    'Guard rail مثل نرده‌ی کنار جاده‌ی کوهستانی است: نمی‌گذارد اشتباه کنی. اگر کسی بخواهد سرور ناامن بسازد، سیستم خودکار جلویش را می‌گیرد.');

  M(T1,'The SIEM sees 50 failed logins on one account in 5 minutes and automatically opens a ticket for Tier 1 analysts. Which use case is this?',
    'SIEM در ۵ دقیقه ۵۰ ورود ناموفق روی یک حساب می‌بیند و خودکار برای تحلیلگران سطح ۱ تیکت باز می‌کند. این کدام کاربرد است؟',
    'یک «تیکت» ساخته شد.',
    ['Ticket creation','User provisioning','Guard rails','Security group update'],
    ['ساخت خودکار تیکت','ساخت حساب کاربر','نرده‌ی محافظ','به‌روزرسانی security group'],
    'Automated ticket creation makes sure incidents are tracked from the moment they occur and routed to the right team.',
    'ساخت خودکار تیکت یعنی هیچ هشداری فراموش نمی‌شود. از همان لحظه‌ی اول ثبت می‌شود و به تیم درست می‌رسد.');

  M(T1,'A Tier 1 analyst ignores a privilege escalation alert for 10 minutes, so the system re-routes it to Tier 2 with higher urgency. What is this?',
    'تحلیلگر سطح ۱ تا ۱۰ دقیقه به هشدار «بالا بردن دسترسی» جواب نمی‌دهد، پس سیستم آن را با فوریت بیشتر به سطح ۲ می‌فرستد. این چیست؟',
    'بالا بردن به سطح بعدی.',
    ['Automated escalation','Guard rail','De-provisioning','Legal hold'],
    ['ارجاع خودکار (Escalation)','نرده‌ی محافظ','گرفتن دسترسی','نگه‌داری قانونی'],
    'Automated escalation re-routes alerts to higher tiers when they are not acknowledged in time, so critical alerts are never ignored.',
    'Escalation یعنی اگر نفر اول جواب نداد، کار خودکار به نفر بالاتر می‌رسد. مثل زنگی که اگر برنداشتی، به گوشی رئیس هم زنگ می‌زند.');

  M(T1,'When a new web server is deployed, automation adds its IP to the load balancer\'s security group and opens inbound HTTPS. Which use case is this?',
    'وقتی یک سرور وب جدید راه می‌افتد، سیستم خودکار IP آن را به security group لود بالانسر اضافه می‌کند و HTTPS ورودی را باز می‌کند. این کدام کاربرد است؟',
    'قانون‌های دسترسی شبکه خودکار عوض می‌شوند.',
    ['Security group automation','Ticket creation','E-discovery','Continuous integration testing'],
    ['خودکارسازی security group','ساخت تیکت','E-discovery','تست در CI'],
    'Security group automation updates firewall and access rules when servers or services are added or removed, so only authorized traffic is allowed without manual changes.',
    'یعنی وقتی سرور جدید اضافه یا حذف می‌شود، قانون‌های فایروال خودشان درست می‌شوند و لازم نیست کسی دستی و با احتمال اشتباه عوضشان کند.');

  M(T1,'SAST and DAST run automatically on every code build, and any build with a critical flaw is blocked from deployment. What is this?',
    'SAST و DAST خودکار روی هر build کد اجرا می‌شوند و هر build با ضعف بحرانی اجازه‌ی انتشار نمی‌گیرد. این چیست؟',
    'تست دائمی در pipeline برنامه‌نویسی.',
    ['Continuous integration testing','A tabletop exercise for developers','Chain of custody for the source code','Escalation to the security manager'],
    ['تست خودکار در CI (Continuous integration)','تمرین روی میز برای برنامه‌نویس‌ها','زنجیره‌ی نگه‌داری برای کد منبع','ارجاع به مدیر امنیت'],
    'Continuous integration testing builds security tests into the DevOps pipeline to catch vulnerabilities early in the SDLC.',
    'یعنی هر بار که برنامه‌نویس کد را ذخیره می‌کند، تست امنیتی خودکار اجرا می‌شود. اگر ضعف جدی پیدا شود، کد منتشر نمی‌شود. زودتر پیدا کردن یعنی ارزان‌تر درست کردن.');

  M(T2,'What is the main purpose of security automation?',
    'هدف اصلی خودکارسازی امنیت چیست؟',
    'کارهای تکراری را ماشین انجام دهد.',
    ['Faster, consistent response, so analysts can focus on hard work','Replacing every security analyst with scripts and playbooks','Removing the need to collect or keep any security logs','Making security incidents impossible once it is turned on'],
    ['پاسخ سریع‌تر و یکسان، تا تحلیلگرها روی کارهای سخت تمرکز کنند','جایگزین کردن همه‌ی تحلیلگرهای امنیت با اسکریپت و Playbook','حذف نیاز به جمع‌آوری یا نگه داشتن هر لاگ امنیتی','غیرممکن کردن حادثه‌ی امنیتی وقتی روشن شد'],
    'Automation runs repetitive, predefined tasks without manual work. It cuts response time, reduces human error, enforces consistency and lets analysts focus on complex threats.',
    'خودکارسازی کارهای تکراری را به ماشین می‌دهد: سریع‌تر، بدون خستگی و بدون اشتباه. آدم‌ها وقت آزاد می‌کنند برای کارهای سخت مثل شکار تهدید.');

  M(T2,'Which is a benefit of automation for the security team itself?',
    'کدام فایده‌ی خودکارسازی برای خود تیم امنیت است؟',
    'کار یکنواخت کمتر = خستگی کمتر.',
    ['Analysts stay longer because they do less boring work','Analysts no longer need any security training','The team no longer needs managers or team leads','Security logs no longer need to be stored at all'],
    ['تحلیلگرها بیشتر می‌مانند چون کار خسته‌کننده‌ی کمتری دارند','تحلیلگرها دیگر هیچ آموزش امنیتی لازم ندارند','تیم دیگر مدیر یا سرپرست لازم ندارد','دیگر اصلاً لازم نیست لاگ امنیتی نگه داشته شود'],
    'Automation removes repetitive work, reducing burnout and improving job satisfaction and retention. It also supports scalability without proportional staff increases.',
    'وقتی کارهای تکراری و خسته‌کننده را ماشین انجام دهد، تحلیلگرها کمتر فرسوده می‌شوند و راحت‌تر در شرکت می‌مانند.');

  M(T2,'An organization runs every automated workflow on one platform. If attackers compromise it, they could misuse all the workflows at once. Which risk is this?',
    'یک سازمان همه‌ی کارهای خودکارش را روی یک پلتفرم اجرا می‌کند. اگر هکر آن را بگیرد، می‌تواند همه را با هم سوءاستفاده کند. این کدام خطر است؟',
    'همه‌ی تخم‌مرغ‌ها در یک سبد.',
    ['Single point of failure','Technical debt','Privilege creep','False negative'],
    ['نقطه‌ی شکست واحد (Single point of failure)','بدهی فنی (Technical debt)','جمع شدن دسترسی','False negative'],
    'Overreliance on one automation platform is a single point of failure: if it breaks or is compromised, damage can be large and fast.',
    'Single point of failure یعنی همه‌ی تخم‌مرغ‌ها را در یک سبد گذاشته‌ای. اگر سبد بیفتد، همه می‌شکنند.');

  M(T2,'Old scripts with no version control and no reviews start causing errors years later. Which automation risk is this?',
    'اسکریپت‌های قدیمی بدون کنترل نسخه و بدون بازبینی، سال‌ها بعد شروع به خطا دادن می‌کنند. این کدام خطر خودکارسازی است؟',
    '«بساز و فراموش کن» یک بدهی می‌سازد.',
    ['Technical debt','Single point of failure','Cost','Escalation'],
    ['بدهی فنی (Technical debt)','نقطه‌ی شکست واحد','هزینه','ارجاع'],
    'Technical debt comes from outdated, poorly maintained scripts. Regular audits and code reviews avoid "set and forget" risks.',
    'Technical debt مثل خانه‌ای است که سال‌ها تعمیرش نکرده‌ای؛ یک روز لوله‌ها می‌ترکند. اسکریپت‌ها هم باید مرتب بازبینی و به‌روز شوند.');

  M(T2,'Only one engineer understands how the company\'s automation works, and they are about to leave. Which risk is this?',
    'فقط یک مهندس می‌داند خودکارسازی شرکت چطور کار می‌کند و او دارد می‌رود. این کدام خطر است؟',
    'دانش فقط در ذهن یک نفر است.',
    ['Supportability and skills gap','Guard rails','Cost savings','Continuous integration'],
    ['پشتیبانی و کمبود مهارت (Skills gap)','نرده‌ی محافظ','صرفه‌جویی در هزینه','CI'],
    'Automation needs skilled staff to design, monitor and troubleshoot it. Knowledge silos are a risk when only a few people understand the system.',
    'اگر فقط یک نفر بلد باشد، با رفتنش هیچ‌کس نمی‌تواند سیستم را تعمیر کند. باید مستندسازی و آموزش باشد تا دانش پخش شود.');

  M(T2,'Why should critical or destructive automated actions keep human oversight?',
    'چرا کارهای خودکار مهم یا خطرناک باید زیر نظر انسان باشند؟',
    'ماشین هم اشتباه می‌کند، ولی خیلی سریع.',
    ['So a wrong automatic action does not break a service','Because automating security actions is always illegal','So that the actions leave no logs behind for auditors','To slow the team down on purpose during an incident'],
    ['تا یک کار خودکار اشتباه سرویسی را از کار نیندازد','چون خودکار کردن کارهای امنیتی همیشه غیرقانونی است','تا آن کارها هیچ لاگی برای ممیزها باقی نگذارند','تا عمداً سرعت تیم در زمان حادثه کم شود'],
    'Automation should have fail-safes and human approval for critical or destructive actions, such as shutting down production servers.',
    'ماشین اگر اشتباه کند، در چند ثانیه صدها سرور را خاموش می‌کند. برای کارهای بزرگ و خطرناک، یک آدم باید دکمه‌ی آخر را بزند.');

  M(T2,'A workflow collects logs, isolates the host, blocks the IP, notifies the team, and closes the ticket after validation, all as one connected process. What is this?',
    'یک فرایند لاگ جمع می‌کند، دستگاه را جدا می‌کند، IP را مسدود می‌کند، به تیم خبر می‌دهد و بعد از تأیید تیکت را می‌بندد؛ همه به صورت یک فرایند به‌هم‌وصل. این چیست؟',
    'رهبر ارکستر چند ساز را با هم هماهنگ می‌کند.',
    ['Orchestration','Single-task automation','A legal hold','A tabletop exercise'],
    ['هماهنگ‌سازی (Orchestration)','خودکارسازی یک کار','نگه‌داری قانونی','تمرین روی میز'],
    'Automation does one task faster. Orchestration connects many automated tasks across tools into one end-to-end workflow, reducing handoffs and delays.',
    'Automation = یک نوازنده که یک ساز را خوب می‌زند. Orchestration = رهبر ارکستر که همه‌ی سازها را با هم هماهنگ می‌کند تا یک آهنگ کامل ساخته شود.');

  M(T2,'Automatically disabling one user account when suspicious activity is detected is an example of what?',
    'غیرفعال کردن خودکار یک حساب کاربری وقتی فعالیت مشکوک دیده می‌شود، نمونه‌ی چیست؟',
    'فقط «یک» کار.',
    ['Automation','Orchestration','E-discovery','Lessons learned'],
    ['خودکارسازی (Automation)','هماهنگ‌سازی (Orchestration)','E-discovery','درس گرفتن'],
    'A single predefined task done without human intervention is automation. Chaining many such tasks into a workflow is orchestration.',
    'یک کار تنها = Automation. چند کار پشت سر هم و به‌هم‌وصل = Orchestration.');

  M(T3,'What is the correct order of the incident response lifecycle taught in this module?',
    'ترتیب درست چرخه‌ی پاسخ به حادثه در این درس کدام است؟',
    'آماده شو، پیدا کن، بفهم، مهار کن، پاک کن، برگردان، درس بگیر.',
    ['Preparation, detection, analysis, containment, eradication, recovery, lessons learned','Detection, recovery, preparation, eradication, analysis, containment, lessons learned','Containment, preparation, detection, recovery, analysis, eradication, lessons learned','Analysis, eradication, detection, preparation, recovery, containment, lessons learned'],
    ['آمادگی، کشف، تحلیل، مهار، ریشه‌کنی، بازیابی، درس‌آموزی','کشف، بازیابی، آمادگی، ریشه‌کنی، تحلیل، مهار، درس‌آموزی','مهار، آمادگی، کشف، بازیابی، تحلیل، ریشه‌کنی، درس‌آموزی','تحلیل، ریشه‌کنی، کشف، آمادگی، بازیابی، مهار، درس‌آموزی'],
    'Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons learned. Memory aid: "People Don\'t Always Clean Every Room Later".',
    'ترتیب: آمادگی ← کشف ← تحلیل ← مهار ← ریشه‌کنی ← بازیابی ← درس‌آموزی. مثل آتش‌سوزی: کپسول داشته باش، دود را ببین، بفهم کجاست، نگذار پخش شود، خاموشش کن، خانه را تعمیر کن، و یاد بگیر چرا شروع شد.');

  M(T3,'The team writes IR roles, keeps a contact list for legal and law enforcement, and runs tabletop exercises before anything happens. Which phase is this?',
    'تیم نقش‌های پاسخ به حادثه را می‌نویسد، لیست تماس با بخش حقوقی و پلیس را نگه می‌دارد و قبل از هر اتفاقی تمرین روی میز انجام می‌دهد. این کدام مرحله است؟',
    'قبل از آتش‌سوزی.',
    ['Preparation','Containment','Eradication','Recovery'],
    ['آمادگی (Preparation)','مهار (Containment)','ریشه‌کنی (Eradication)','بازیابی (Recovery)'],
    'Preparation sets policies, roles, training, tabletop exercises, contact lists and playbooks so the team can respond quickly and in a coordinated way.',
    'Preparation یعنی قبل از حادثه آماده باشی: هر کس بداند چه کاره است، شماره‌ها دم دست باشد و تمرین کرده باشید. مثل مانور آتش‌نشانی در مدرسه.');

  M(T3,'A sudden spike of failed logins across many accounts triggers an automated alert from the SIEM. Which phase is this?',
    'افزایش ناگهانی ورودهای ناموفق روی چند حساب، یک هشدار خودکار از SIEM ایجاد می‌کند. این کدام مرحله است؟',
    'متوجه شدن که چیزی درست نیست.',
    ['Detection','Preparation','Recovery','Lessons learned'],
    ['کشف (Detection)','آمادگی','بازیابی','درس‌آموزی'],
    'Detection uses SIEM, IDS/IPS and logs, automated alerting and event correlation to spot indicators of compromise early.',
    'Detection یعنی فهمیدن اینکه چیزی مشکوک است، با SIEM، IDS و لاگ‌ها. هر چه زودتر بفهمی، هکر وقت کمتری دارد.');

  M(T3,'An analyst runs a suspicious file in a sandbox, compares it with known malware and confirms it is ransomware, then works out which systems are affected. Which phase is this?',
    'تحلیلگر یک فایل مشکوک را در sandbox اجرا می‌کند، با بدافزارهای شناخته‌شده مقایسه می‌کند، می‌فهمد باج‌افزار است و بعد مشخص می‌کند کدام سیستم‌ها درگیرند. این کدام مرحله است؟',
    'تأیید کن واقعاً حادثه است و چقدر بزرگ است.',
    ['Analysis','Containment','Eradication','Preparation'],
    ['تحلیل (Analysis)','مهار','ریشه‌کنی','آمادگی'],
    'Analysis verifies the incident (real or false positive), assesses scope and impact, and correlates with threat intelligence TTPs.',
    'Analysis یعنی بررسی کنی هشدار واقعی است یا الکی، چه سیستم‌هایی درگیرند، از کجا وارد شده و آیا هنوز ادامه دارد.');

  M(T3,'An infected database server is moved to an isolated VLAN and its external connections are blocked, but it stays powered on for evidence. Which phase is this?',
    'یک سرور پایگاه‌داده‌ی آلوده به یک VLAN جدا منتقل می‌شود و اتصال‌های بیرونی‌اش بسته می‌شود، ولی برای جمع‌آوری مدرک روشن می‌ماند. این کدام مرحله است؟',
    'نگذار آتش پخش شود.',
    ['Containment','Eradication','Recovery','Detection'],
    ['مهار (Containment)','ریشه‌کنی','بازیابی','کشف'],
    'Containment limits the spread: isolate systems, disable compromised accounts, block malicious IPs (short-term), then segment and patch (long-term).',
    'Containment یعنی آتش را در یک اتاق نگه داری که به بقیه‌ی خانه نرسد. دستگاه آلوده را جدا کن، حساب‌های هک‌شده را ببند، IP بد را مسدود کن.');

  M(T3,'Which action is part of short-term containment?',
    'کدام کار جزو مهار کوتاه‌مدت است؟',
    'همین الان، سریع.',
    ['Disconnect the infected laptop from the network now','Rebuild every server from a golden image','Write the post-incident report for management','Update the incident response playbook'],
    ['همین حالا لپ‌تاپ آلوده را از شبکه جدا کن','همه‌ی سرورها را از Golden Image دوباره بساز','گزارش بعد از حادثه را برای مدیریت بنویس','دستورالعمل پاسخ به حادثه را به‌روز کن'],
    'Short-term containment is immediate: isolate infected systems, disable compromised accounts, block malicious IPs. Long-term containment adds segmentation, targeted firewall rules and patching.',
    'مهار کوتاه‌مدت یعنی همان لحظه: کابل را بکش، حساب را ببند، IP را مسدود کن. مهار بلندمدت یعنی کارهای محکم‌تر مثل بخش‌بندی شبکه و وصله کردن.');

  M(T3,'After a ransomware attack, the team deletes the malware, patches the RDP flaw that was exploited, resets all admin passwords and rescans for rootkits. Which phase is this?',
    'بعد از حمله‌ی باج‌افزار، تیم بدافزار را پاک می‌کند، ضعف RDP را که از آن وارد شده بودند وصله می‌کند، همه‌ی رمزهای ادمین را عوض می‌کند و دوباره برای rootkit اسکن می‌کند. این کدام مرحله است؟',
    'ریشه‌ی مشکل را بکن.',
    ['Eradication','Containment','Preparation','Detection'],
    ['ریشه‌کنی (Eradication)','مهار','آمادگی','کشف'],
    'Eradication removes malware and artifacts, closes exploited vulnerabilities, resets credentials, validates no persistence remains, and documents everything.',
    'Eradication یعنی علف هرز را از ریشه درآوری، نه فقط برگ‌هایش را بچینی. بدافزار را پاک کن، راه ورود را ببند، رمزها را عوض کن، و مطمئن شو چیزی جا نمانده.');

  M(T3,'Systems are rebuilt from clean backups, brought back in phases starting with critical services, and watched closely for weeks. Which phase is this?',
    'سیستم‌ها از نسخه‌ی پشتیبان سالم دوباره ساخته می‌شوند، مرحله‌به‌مرحله و اول سرویس‌های حیاتی برمی‌گردند، و چند هفته از نزدیک زیر نظرند. این کدام مرحله است؟',
    'برگشت به حالت عادی.',
    ['Recovery','Eradication','Analysis','Lessons learned'],
    ['بازیابی (Recovery)','ریشه‌کنی','تحلیل','درس‌آموزی'],
    'Recovery restores systems from clean backups or golden images, validates them, reintroduces them in phases, informs users and increases monitoring.',
    'Recovery یعنی خانه را بعد از آتش‌سوزی تعمیر کنی و دوباره در آن زندگی کنی، ولی با چشم باز. سیستم‌ها یکی‌یکی برمی‌گردند و چند هفته بیشتر مراقبشان هستی.');

  M(T3,'All stakeholders meet after an incident, rebuild the timeline, find the root cause and update the playbooks. Which phase is this?',
    'بعد از حادثه همه‌ی افراد مرتبط جلسه می‌گذارند، خط زمانی را بازسازی می‌کنند، علت اصلی را پیدا می‌کنند و دستورالعمل‌ها را به‌روز می‌کنند. این کدام مرحله است؟',
    'از اشتباه یاد بگیر.',
    ['Lessons learned','Preparation','Containment','Detection'],
    ['درس‌آموزی (Lessons learned)','آمادگی','مهار','کشف'],
    'Lessons learned includes a post-incident review, timeline reconstruction, root cause and gap analysis, improvement planning, playbook updates and knowledge sharing (e.g. with ISACs).',
    'Lessons learned یعنی بعد از حادثه بنشینی و بپرسی: چه شد؟ چرا شد؟ دفعه‌ی بعد چه کنیم؟ و جواب‌ها را در دستورالعمل بنویسی.');

  M(T3,'Which step comes directly after containment?',
    'کدام مرحله درست بعد از مهار (Containment) می‌آید؟',
    'اول جلوی پخش شدن را می‌گیری، بعد ریشه را می‌کنی.',
    ['Eradication','Recovery','Analysis','Preparation'],
    ['ریشه‌کنی (Eradication)','بازیابی','تحلیل','آمادگی'],
    'After containment comes eradication (remove the threat), then recovery (restore operations).',
    'اول آتش را در یک اتاق نگه می‌داری (مهار)، بعد خاموشش می‌کنی (ریشه‌کنی)، بعد تعمیر می‌کنی (بازیابی).');

  M(T3,'Why is eradication essential before recovery?',
    'چرا ریشه‌کنی باید قبل از بازیابی کامل شود؟',
    'اگر در باز مانده باشد چه؟',
    ['Otherwise attackers can come back through leftover access','Because recovery is optional once containment is finished','Because eradication is the step that creates the backups','Because the law forbids recovery until a report is filed'],
    ['وگرنه هکر از راه دسترسی باقی‌مانده برمی‌گردد','چون بعد از مهار، بازیابی اختیاری است','چون ریشه‌کنی همان مرحله‌ای است که بکاپ می‌سازد','چون قانون تا ثبت گزارش بازیابی را ممنوع کرده'],
    'If backdoors, persistence or the original vulnerability remain, restored systems will be compromised again.',
    'اگر قبل از تعمیر خانه، دزد هنوز در زیرزمین قایم شده باشد، فردا دوباره دزدی می‌کند. اول مطمئن شو چیزی جا نمانده.');

  M(T4,'What is digital forensics?',
    'جرم‌شناسی دیجیتال (Digital forensics) چیست؟',
    'کار کارآگاه، ولی روی کامپیوتر.',
    ['Collecting, preserving and analyzing digital evidence','Deleting logs after an incident to protect privacy','Writing new firewall rules to block the attacker','Installing antivirus on every laptop after an attack'],
    ['جمع‌آوری، نگه‌داری و تحلیل مدرک دیجیتال','پاک کردن لاگ‌ها بعد از حادثه برای حفظ حریم خصوصی','نوشتن قانون جدید فایروال برای مسدود کردن مهاجم','نصب آنتی‌ویروس روی همه‌ی لپ‌تاپ‌ها بعد از حمله'],
    'Digital forensics identifies, collects, preserves and analyzes digital evidence so it stays admissible in court and helps find the root cause.',
    'Digital forensics یعنی کارآگاه‌بازی روی کامپیوتر: مدرک جمع می‌کنی، دستش نمی‌زنی، تحلیلش می‌کنی و ثابت می‌کنی چه کسی، کِی و چطور کاری کرده.');

  M(T4,'Litigation is expected, so legal tells IT to suspend automatic email deletion and preserve all related logs and backups. What is this?',
    'احتمال شکایت در دادگاه هست، پس بخش حقوقی به IT می‌گوید حذف خودکار ایمیل‌ها را متوقف کند و همه‌ی لاگ‌ها و نسخه‌های پشتیبان مرتبط را نگه دارد. این چیست؟',
    'داده را «نگه دار»، به خاطر قانون.',
    ['Legal hold','Chain of custody','Eradication','Data minimization'],
    ['نگه‌داری قانونی (Legal hold)','زنجیره‌ی نگه‌داری مدرک','ریشه‌کنی','کم کردن داده'],
    'A legal hold freezes all relevant physical and digital data so it is not altered or destroyed, including suspending automated deletion policies.',
    'Legal hold یعنی «به هیچ چیز دست نزن». هر چیزی که شاید در پرونده لازم شود باید نگه داشته شود، حتی اگر قانون معمول شرکت پاک کردنش بود.');

  M(T4,'Every person who handles a seized hard drive signs a log with the date, time and reason. What is this?',
    'هر کسی که هارد ضبط‌شده را دست می‌گیرد، یک برگه را با تاریخ، ساعت و دلیل امضا می‌کند. این چیست؟',
    'یک زنجیر که نباید پاره شود.',
    ['Chain of custody','Legal hold','E-discovery','Write blocking'],
    ['زنجیره‌ی نگه‌داری مدرک (Chain of custody)','نگه‌داری قانونی','E-discovery','جلوگیری از نوشتن'],
    'Chain of custody documents every person who handled the evidence, when and why, proving it was not tampered with from collection to court.',
    'Chain of custody مثل امضای تحویل بسته است: هر کس مدرک را گرفت، اسم و ساعتش ثبت می‌شود. اگر یک حلقه گم شود، دادگاه ممکن است مدرک را قبول نکند.');

  M(T4,'What can happen if the chain of custody is broken?',
    'اگر زنجیره‌ی نگه‌داری مدرک (Chain of custody) پاره شود، چه می‌شود؟',
    'دادگاه به آن اعتماد می‌کند؟',
    ['The evidence may be ruled inadmissible in court','The evidence becomes encrypted','The attacker is automatically arrested','Nothing, it is optional'],
    ['ممکن است مدرک در دادگاه پذیرفته نشود','مدرک رمزگذاری می‌شود','هکر خودکار دستگیر می‌شود','هیچ اتفاقی؛ اختیاری است'],
    'A broken chain of custody or missing legal hold can disqualify evidence, weaken legal cases and, in regulated industries, lead to fines.',
    'اگر معلوم نباشد مدرک چند ساعت دست چه کسی بوده، وکیل طرف مقابل می‌گوید «شاید دستکاری شده» و دادگاه مدرک را قبول نمی‌کند.');

  M(T4,'Investigators need an exact copy of a suspect\'s drive, including deleted files and slack space. What should they make?',
    'بازرس‌ها یک کپی دقیق از هارد مظنون می‌خواهند، شامل فایل‌های پاک‌شده و فضای خالی بین فایل‌ها. چه چیزی بسازند؟',
    'کپی تک‌تک بیت‌ها.',
    ['A bit-by-bit forensic image made with a write blocker','A normal copy of the files made with drag and drop','A set of screenshots of the desktop and open windows','A zip archive of the user\'s Documents and Desktop folders'],
    ['کپی بیت‌به‌بیت جرم‌شناسی با Write Blocker','کپی معمولی فایل‌ها با کشیدن و رها کردن','چند عکس از صفحه‌ی دسکتاپ و پنجره‌های باز','فایل zip از پوشه‌های Documents و Desktop کاربر'],
    'A bit-by-bit image copies every sector, including deleted files, slack space and unallocated areas. A write blocker prevents changes to the original drive.',
    'کپی بیت‌به‌بیت یعنی همه چیز، حتی چیزهایی که پاک شده‌اند، کپی می‌شود. Write blocker مثل دستکش است: نمی‌گذارد هیچ چیزی روی هارد اصلی نوشته شود.');

  M(T4,'How do investigators prove a forensic image has not changed since it was collected?',
    'بازرس‌ها چطور ثابت می‌کنند کپی جرم‌شناسی از لحظه‌ی جمع‌آوری تغییر نکرده؟',
    'اثر انگشت دیجیتال فایل.',
    ['Record a SHA-256 hash and compare it later','Rename the image file every day it is stored','Compress the image so it cannot be edited','Print the image\'s file list on paper'],
    ['یک Hash مثل SHA-256 ثبت می‌کنند و بعداً مقایسه می‌کنند','هر روز اسم فایل Image را عوض می‌کنند','Image را فشرده می‌کنند تا قابل ویرایش نباشد','فهرست فایل‌های Image را روی کاغذ چاپ می‌کنند'],
    'A hash value (e.g. SHA-256) is generated and documented for each evidence item. If the hash still matches later, the evidence is unchanged.',
    'Hash مثل اثر انگشت فایل است. اگر حتی یک حرف عوض شود، hash کاملاً فرق می‌کند. پس اگر hash امروز با hash روز اول یکی باشد، مدرک دست نخورده.');

  M(T4,'Why capture memory (RAM) and other volatile data before powering a system off?',
    'چرا باید قبل از خاموش کردن سیستم، حافظه‌ی RAM و داده‌های فرّار را جمع کرد؟',
    'با خاموش شدن چه چیزی پاک می‌شود؟',
    ['It is lost when the system is powered down','It is always encrypted on disk','RAM never holds useful evidence','It is required to install patches'],
    ['با خاموش شدن سیستم از بین می‌رود','همیشه روی هارد رمزگذاری شده','RAM هیچ‌وقت مدرک مفیدی ندارد','برای نصب وصله لازم است'],
    'Volatile data such as memory, running processes and network connections disappears on shutdown, so it must be preserved first.',
    'RAM مثل تخته‌ی وایت‌برد است: با خاموش شدن برق پاک می‌شود. برنامه‌های در حال اجرا و اتصال‌ها آنجا هستند، پس اول از آن عکس بگیر.');

  M(T4,'A lawsuit requires the company to find, preserve and hand over relevant emails and chat messages in an agreed format with metadata. What is this process?',
    'یک دعوای حقوقی از شرکت می‌خواهد ایمیل‌ها و پیام‌های مرتبط را پیدا کند، نگه دارد و با فرمت توافق‌شده و metadata تحویل دهد. این چه فرایندی است؟',
    'کشف «الکترونیکی».',
    ['E-discovery','Chain of custody','Containment','Orchestration'],
    ['کشف الکترونیکی (E-discovery)','زنجیره‌ی نگه‌داری مدرک','مهار','هماهنگ‌سازی'],
    'E-discovery identifies, collects, preserves, processes, reviews and produces electronically stored information (ESI) for litigation or regulators.',
    'E-discovery یعنی وقتی دادگاه می‌گوید «همه‌ی ایمیل‌های مربوط به این موضوع را بیاور»، شرکت آن‌ها را پیدا کند، اضافه‌ها و تکراری‌ها را کنار بگذارد و درست تحویل بدهد.');

  M(T4,'During e-discovery, the team removes duplicate files and uses keyword searches to shrink the data before lawyers review it. Which stage is this?',
    'در E-discovery، تیم فایل‌های تکراری را حذف می‌کند و با جستجوی کلمه‌ی کلیدی حجم داده را کم می‌کند تا وکیل‌ها بررسی کنند. این کدام مرحله است؟',
    'پردازش و بررسی.',
    ['Processing and review','Identification','Production','Legal hold'],
    ['پردازش و بررسی (Processing & review)','شناسایی','تحویل (Production)','نگه‌داری قانونی'],
    'E-discovery stages: identification and scoping, collection and preservation, processing and review (filter, deduplicate, search), and production in agreed formats.',
    'مراحل: پیدا کن کجاست ← جمع کن و نگه دار ← تکراری‌ها را حذف کن و بگرد ← تحویل بده. حذف تکراری‌ها مرحله‌ی «پردازش» است.');

  M(T5,'Which data source shows file creation, modification and access times (MAC times)?',
    'کدام منبع داده زمان ساخت، تغییر و باز شدن فایل‌ها (MAC times) را نشان می‌دهد؟',
    'داده درباره‌ی داده.',
    ['File metadata','Firewall logs','Vulnerability scans','NetFlow'],
    ['Metadata فایل','لاگ فایروال','اسکن آسیب‌پذیری','NetFlow'],
    'File metadata includes MAC times (modified, accessed, created). User activity metadata includes login times, session duration and file access trails.',
    'Metadata یعنی «اطلاعات درباره‌ی اطلاعات»، مثل تاریخ پشت عکس. می‌گوید فایل کِی ساخته شد، کِی عوض شد و کِی باز شد.');

  M(T5,'An analyst wants to see which inbound connections were blocked or allowed during an attack. Which log is most useful?',
    'تحلیلگر می‌خواهد ببیند در زمان حمله کدام اتصال‌های ورودی مسدود یا مجاز شدند. کدام لاگ بیشتر به درد می‌خورد؟',
    'کسی که دم در شبکه ایستاده.',
    ['Firewall logs','Application error logs','File metadata','Printer logs'],
    ['لاگ فایروال','لاگ خطای برنامه','Metadata فایل','لاگ پرینتر'],
    'Firewall logs show blocked and allowed traffic and possible intrusion attempts. IDS/IPS logs show detected threats; endpoint logs show local logins and changes.',
    'لاگ فایروال مثل دفتر نگهبان دم در است: می‌گوید چه کسی آمد، چه کسی را راه داد و چه کسی را برگرداند.');

  M(T5,'How do vulnerability scans help an investigation?',
    'اسکن آسیب‌پذیری چطور به تحقیقات کمک می‌کند؟',
    'هکر از کدام در وارد شد؟',
    ['They show weaknesses that may be the attack vector','They reveal the attacker\'s real name and location','They restore files the attacker deleted from disks','They encrypt the evidence so it cannot be changed'],
    ['ضعف‌هایی را نشان می‌دهند که شاید راه ورود حمله بوده','اسم و محل واقعی مهاجم را نشان می‌دهند','فایل‌هایی را که مهاجم پاک کرده برمی‌گردانند','مدرک را رمزنگاری می‌کنند تا تغییر نکند'],
    'Vulnerability scans highlight misconfigurations, outdated software and unpatched flaws, which can be mapped to incident indicators to find the likely entry point.',
    'اسکن آسیب‌پذیری پنجره‌های باز خانه را نشان می‌دهد. اگر دزد آمده، احتمالاً از یکی از همین پنجره‌ها آمده.');

  M(T5,'In the example workflow, what happens right after the SIEM alerts on a suspicious login from an unusual location?',
    'در فرایند نمونه، درست بعد از اینکه SIEM برای یک ورود مشکوک از مکان غیرعادی هشدار می‌دهد، چه اتفاقی می‌افتد؟',
    'ماشین در چند ثانیه کار می‌کند، قبل از آدم.',
    ['Automation blocks the IP, disables the account and alerts the SOC','The forensics team takes a bit-by-bit image of the user\'s drive','A lessons-learned meeting is held with everyone who was involved','The company contacts its insurer and buys more cyber insurance'],
    ['سیستم خودکار IP را مسدود، حساب را غیرفعال و به SOC خبر می‌دهد','تیم جرم‌شناسی از هارد کاربر کپی بیت‌به‌بیت می‌گیرد','جلسه‌ی درس‌آموزی با همه‌ی افراد درگیر برگزار می‌شود','شرکت با بیمه تماس می‌گیرد و بیمه‌ی سایبری بیشتری می‌خرد'],
    'Workflow: SIEM detection and alert, automated response (block IP, disable account, notify SOC), analyst review of logs and packet captures, then forensic imaging with hashing.',
    'ترتیب: SIEM هشدار می‌دهد ← سیستم خودکار IP را می‌بندد و حساب را قفل می‌کند ← تحلیلگر لاگ‌ها را بررسی می‌کند ← تیم جرم‌شناسی کپی بیت‌به‌بیت با hash می‌گیرد.');

  M(T5,'In the ransomware case study, how did the attack start?',
    'در مطالعه‌ی موردی باج‌افزار، حمله از کجا شروع شد؟',
    'رایج‌ترین راه ورود.',
    ['A phishing email with a malicious attachment','An exposed web server in the DMZ with no patches','A stolen laptop with saved VPN credentials','A misconfigured network printer on the guest VLAN'],
    ['یک ایمیل فیشینگ با پیوست مخرب','یک وب‌سرور باز و وصله‌نشده در DMZ','یک لپ‌تاپ دزدیده‌شده با رمز VPN ذخیره‌شده','یک پرینتر شبکه‌ی بد تنظیم‌شده روی VLAN مهمان'],
    'Forensics traced the compromise to a phishing email attachment. Email server logs, firewall records and endpoint telemetry confirmed the path. Clean backups avoided paying the ransom, and awareness training was updated.',
    'یک ایمیل فیشینگ با پیوست آلوده. چون نسخه‌ی پشتیبان سالم داشتند، باج ندادند و در چند ساعت برگشتند. بعد آموزش کارمندها درباره‌ی فیشینگ را بهتر کردند.');

  M(T5,'Why should investigators correlate several data sources instead of relying on one?',
    'چرا بازرس‌ها باید چند منبع داده را کنار هم بگذارند و فقط به یکی تکیه نکنند؟',
    'تکه‌های پازل.',
    ['Each source shows part of the story; together they show the whole','One complete log is always enough to explain any incident','Combining sources makes the evidence inadmissible in court','Correlation deletes duplicate events, so evidence is lost'],
    ['هر منبع یک تکه از داستان را نشان می‌دهد؛ با هم کل ماجرا معلوم می‌شود','یک لاگ کامل همیشه برای توضیح هر حادثه کافی است','کنار هم گذاشتن منابع باعث می‌شود مدرک در دادگاه پذیرفته نشود','همبسته کردن، رویدادهای تکراری را پاک می‌کند و مدرک از بین می‌رود'],
    'Logs, metadata and scans each give unique insight. Correlated, they form a comprehensive picture of the incident.',
    'هر منبع یک تکه‌ی پازل است: فایروال می‌گوید از کجا آمد، لاگ دستگاه می‌گوید چه کرد، metadata می‌گوید کِی. با هم تصویر کامل ساخته می‌شود.');

  /* ================= MATCHING (PBQ) ================= */
  P(T3,'Incident response phases','Match each action to the correct incident response phase.',
    'هر کار را به مرحله‌ی درست پاسخ به حادثه وصل کنید.',
    ['Preparation','Detection','Analysis','Containment','Eradication','Recovery','Lessons learned'],['آمادگی','کشف','تحلیل','مهار','ریشه‌کنی','بازیابی','درس‌آموزی'],
    [['Run a tabletop exercise and update the contact list',0,'تمرین روی میز و به‌روز کردن لیست تماس'],
     ['A SIEM alert fires on a spike of failed logins',1,'SIEM برای افزایش ورودهای ناموفق هشدار می‌دهد'],
     ['Confirm the alert is real and find which systems are affected',2,'تأیید کن هشدار واقعی است و ببین کدام سیستم‌ها درگیرند'],
     ['Move the infected server to an isolated VLAN',3,'سرور آلوده را به VLAN جدا منتقل کن'],
     ['Delete the malware and reset all admin passwords',4,'بدافزار را پاک کن و همه‌ی رمزهای ادمین را عوض کن'],
     ['Restore from clean backups and bring services back in phases',5,'از پشتیبان سالم برگردان و سرویس‌ها را مرحله‌به‌مرحله راه بینداز'],
     ['Hold a post-incident review and update the playbook',6,'جلسه‌ی بعد از حادثه بگذار و دستورالعمل را به‌روز کن']],
    [['Before','قبل'],['Notice','متوجه شدن'],['Understand','فهمیدن'],['Stop the spread','جلوی پخش'],['Remove','پاک کردن'],['Restore','برگرداندن'],['Improve','بهتر شدن']],
    'Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons learned.',
    'آمادگی ← کشف ← تحلیل ← مهار ← ریشه‌کنی ← بازیابی ← درس‌آموزی.');

  P(T1,'Automation use cases','Match each example to the automation use case.',
    'هر مثال را به کاربرد خودکارسازی وصل کنید.',
    ['User provisioning','Guard rails','Ticket creation','Escalation','Continuous integration testing'],['ساخت حساب','نرده‌ی محافظ','ساخت تیکت','ارجاع','تست در CI'],
    [['A new hire gets email and VPN minutes after HR approval',0,'کارمند جدید چند دقیقه بعد از تأیید HR ایمیل و VPN دارد'],
     ['A server build without encryption at rest is rejected',1,'ساخت سروری که رمزگذاری ندارد رد می‌شود'],
     ['The SIEM opens a helpdesk ticket for suspicious activity',2,'SIEM برای فعالیت مشکوک تیکت باز می‌کند'],
     ['An unacknowledged alert moves from Tier 1 to Tier 2',3,'هشداری که جواب داده نشده از سطح ۱ به سطح ۲ می‌رود'],
     ['SAST runs on every build and blocks critical flaws',4,'SAST روی هر build اجرا می‌شود و ضعف‌های بحرانی را متوقف می‌کند']],
    [['Accounts','حساب‌ها'],['Block insecure settings','جلوی تنظیم ناامن'],['Tracking','پیگیری'],['Move up a tier','بالا بردن'],['DevOps pipeline','pipeline برنامه‌نویسی']],
    'Provisioning = accounts. Guard rails = block insecure configs. Tickets = tracking. Escalation = re-route unanswered alerts. CI testing = security tests in the pipeline.',
    'ساخت حساب = حساب‌ها. نرده = جلوی تنظیم ناامن. تیکت = پیگیری. ارجاع = رفتن به سطح بالاتر. CI = تست در هر build.');

  P(T4,'Forensics and evidence','Match each description to the correct term.',
    'هر توضیح را به اصطلاح درستش وصل کنید.',
    ['Legal hold','Chain of custody','Bit-by-bit image','Hashing','E-discovery'],['Legal hold','Chain of custody','کپی بیت‌به‌بیت','Hash','E-discovery'],
    [['Freeze all relevant data and stop automatic deletion',0,'همه‌ی داده‌های مرتبط را منجمد کن و حذف خودکار را متوقف کن'],
     ['Log of everyone who handled the evidence, with date and time',1,'ثبت همه‌ی کسانی که مدرک را دست گرفتند، با تاریخ و ساعت'],
     ['Exact copy including deleted files and slack space',2,'کپی دقیق، شامل فایل‌های پاک‌شده و فضای خالی'],
     ['SHA-256 value that proves the evidence is unchanged',3,'مقدار SHA-256 که ثابت می‌کند مدرک تغییر نکرده'],
     ['Find and hand over emails and chats for a lawsuit',4,'پیدا کردن و تحویل ایمیل‌ها و پیام‌ها برای دادگاه']],
    [['Preserve','نگه دار'],['Who touched it','چه کسی دست زد'],['Full copy','کپی کامل'],['Integrity proof','اثبات سالم بودن'],['Legal production','تحویل قانونی']],
    'Legal hold preserves. Chain of custody tracks handling. Bit-by-bit image copies everything. Hashing proves integrity. E-discovery produces ESI for litigation.',
    'Legal hold = دست نزن. Chain of custody = چه کسی دست زد. کپی بیت‌به‌بیت = همه چیز. Hash = اثر انگشت سالم بودن. E-discovery = تحویل به دادگاه.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['11']={t:['Automation, incident response & forensics','خودکارسازی، پاسخ به حادثه و جرم‌شناسی دیجیتال'],b:[
    PP('Attackers can break in within minutes, but cleaning up can take days or weeks. Automation helps defenders move as fast as attackers. A clear incident response process keeps everyone calm and organized. Careful evidence handling keeps the case strong in court.',
      'هکر در چند دقیقه وارد می‌شود، ولی تمیز کردن خرابی‌اش ممکن است روزها یا هفته‌ها طول بکشد. خودکارسازی کمک می‌کند مدافع هم به همان سرعت کار کند. یک روند روشن برای پاسخ به حادثه همه را آرام و منظم نگه می‌دارد. و نگه‌داری درست مدرک، پرونده را در دادگاه محکم نگه می‌دارد.'),

    H('Automation: let the machine do the boring part','خودکارسازی: کار تکراری را به ماشین بده'),
    TB([['Use case','کاربرد'],['Example','مثال']],[
      [['User provisioning','ساخت حساب'],['New hire gets email, VPN and apps minutes after HR approval','کارمند جدید چند دقیقه بعد از تأیید HR همه چیز را دارد']],
      [['Guard rails','Guard rail (نرده‌ی محافظ)'],['Reject a cloud server build without encryption at rest','ساخت سرور بدون رمزگذاری را رد کن']],
      [['Ticket creation','ساخت تیکت'],['SIEM opens a ticket after too many failed logins','SIEM بعد از ورودهای ناموفق زیاد تیکت باز می‌کند']],
      [['Security groups','Security group'],['New web server added to the load balancer rules automatically','سرور جدید خودکار به قانون‌های لود بالانسر اضافه می‌شود']],
      [['Escalation','ارجاع'],['Alert ignored 10 minutes by Tier 1 goes to Tier 2','هشداری که سطح ۱ ده دقیقه جواب نداد به سطح ۲ می‌رود']],
      [['CI testing','تست در CI'],['SAST/DAST on every build; critical flaws block release','SAST و DAST در هر build؛ ضعف جدی جلوی انتشار را می‌گیرد']],
      [['Threat containment','مهار تهدید'],['Block bad IPs or isolate a device instantly','IP بد را مسدود یا دستگاه را فوراً جدا کن']]]),
    L([['Benefits: faster reaction (minutes to seconds), fewer human errors, consistent baselines, better employee retention, scalability.','فایده‌ها: واکنش سریع‌تر (از دقیقه به ثانیه)، اشتباه انسانی کمتر، تنظیمات یکسان، کارمند کمتر خسته می‌شود و می‌ماند، کار بیشتر بدون آدم بیشتر.'],
       ['Risks: complexity, cost, single point of failure, technical debt (old unmaintained scripts), skills gap and knowledge silos.','خطرها: پیچیدگی، هزینه، همه چیز وابسته به یک سیستم (single point of failure)، اسکریپت‌های قدیمی و رهاشده (technical debt)، و اینکه فقط چند نفر بلدند.']]),
    TT('Keep fail-safes and human approval for critical or destructive automatic actions.',
      'برای کارهای خودکار خطرناک (مثل خاموش کردن سرورها) همیشه یک آدم باید تأیید نهایی را بدهد.'),

    H('Automation vs orchestration','Automation در برابر Orchestration'),
    TB([['','' ],['Automation','Automation'],['Orchestration','Orchestration']],[
      [['Idea','ایده'],['One task, done faster','یک کار، سریع‌تر'],['Many automated tasks chained into one workflow','چند کار خودکار به هم وصل در یک فرایند']],
      [['Example','مثال'],['Disable one user account','غیرفعال کردن یک حساب'],['Collect logs, isolate host, block IP, notify team, close ticket','لاگ جمع کن ← دستگاه را جدا کن ← IP را ببند ← خبر بده ← تیکت را ببند']],
      [['Picture','تصویر'],['One musician','یک نوازنده'],['The orchestra conductor','رهبر ارکستر']]]),

    H('Incident response: seven steps','پاسخ به حادثه: هفت مرحله'),
    TB([['Phase','مرحله'],['What you do','چه می‌کنی'],['Fire example','مثال آتش‌سوزی']],[
      [['1. Preparation','۱. آمادگی'],['Policies, roles, training, tabletop exercises, contact lists, playbooks','قانون‌ها، نقش‌ها، آموزش، تمرین، لیست تماس، دستورالعمل'],['Fire extinguishers and fire drills','کپسول آتش‌نشانی و مانور']],
      [['2. Detection','۲. کشف'],['SIEM, IDS/IPS, logs, automated alerts, correlation','SIEM، IDS، لاگ‌ها، هشدار خودکار'],['Smoke alarm goes off','دزدگیر دود صدا می‌کند']],
      [['3. Analysis','۳. تحلیل'],['Real or false positive? Scope, impact, entry point, TTPs','واقعی است یا الکی؟ چقدر بزرگ؟ از کجا آمده؟'],['Find which room is burning','بفهمی کدام اتاق آتش گرفته']],
      [['4. Containment','۴. مهار'],['Isolate hosts, disable accounts, block IPs; then segment and patch','دستگاه را جدا کن، حساب را ببند، IP را مسدود کن'],['Close the door so fire does not spread','در را ببند که آتش پخش نشود']],
      [['5. Eradication','۵. ریشه‌کنی'],['Remove malware, close the hole, reset credentials, rescan, document','بدافزار را پاک کن، راه ورود را ببند، رمزها را عوض کن'],['Put the fire out completely','آتش را کامل خاموش کن']],
      [['6. Recovery','۶. بازیابی'],['Restore from clean backups, phased return, extra monitoring','از پشتیبان سالم برگردان، مرحله‌به‌مرحله، با مراقبت بیشتر'],['Repair the house and move back in','خانه را تعمیر کن و برگرد']],
      [['7. Lessons learned','۷. درس‌آموزی'],['Review, timeline, root cause, update playbooks, share (ISACs)','جلسه، خط زمانی، علت اصلی، به‌روز کردن دستورالعمل'],['Find out why the fire started','بفهمی چرا آتش شروع شد']]]),
    TT('Memory aid: "People Don\'t Always Clean Every Room Later" = Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons learned.',
      'برای حفظ کردن، جمله‌ی انگلیسی را به خاطر بسپار: People Don\'t Always Clean Every Room Later. حرف اول هر کلمه = یک مرحله. نکته‌ی مهم: ریشه‌کنی باید قبل از بازیابی کامل شود، وگرنه هکر دوباره برمی‌گردد.'),

    H('Digital forensics','جرم‌شناسی دیجیتال'),
    PP('Digital forensics is detective work on computers: collect evidence, keep it untouched, analyze it, and prove what happened in a way a court will accept.',
      'جرم‌شناسی دیجیتال یعنی کارآگاه‌بازی روی کامپیوتر: مدرک جمع کن، دستش نزن، تحلیلش کن، و طوری ثابت کن چه شده که دادگاه قبول کند.'),
    TB([['Term','اصطلاح'],['Simple idea','به زبان ساده']],[
      [['Legal hold','Legal hold'],['Freeze all relevant data; stop automatic deletion','«به هیچ چیز دست نزن»؛ حذف خودکار را متوقف کن']],
      [['Chain of custody','Chain of custody'],['Record of everyone who handled the evidence, when and why','امضای تحویل؛ هر کس مدرک را گرفت، اسم و ساعتش ثبت می‌شود']],
      [['Bit-by-bit image','کپی بیت‌به‌بیت'],['Exact copy of every sector, including deleted files and slack space','کپی دقیق همه چیز، حتی فایل‌های پاک‌شده']],
      [['Write blocker','Write blocker'],['Stops any change to the original drive during copying','دستکش؛ نمی‌گذارد روی هارد اصلی چیزی نوشته شود']],
      [['Hash (SHA-256)','Hash (SHA-256)'],['Fingerprint that proves evidence is unchanged','اثر انگشت فایل؛ اگر عوض نشده باشد، hash یکی است']],
      [['Volatile data','داده‌ی فرّار'],['RAM, running processes, connections; lost at power-off, so capture first','RAM و برنامه‌های در حال اجرا؛ با خاموش شدن پاک می‌شوند، پس اول جمعشان کن']]]),
    TT('Broken chain of custody or no legal hold = evidence may be thrown out of court, and regulated companies may be fined.',
      'اگر زنجیره‌ی نگه‌داری پاره شود یا legal hold نباشد، دادگاه ممکن است مدرک را قبول نکند و شرکت جریمه شود.'),

    H('E-discovery','E-discovery (کشف الکترونیکی)'),
    L([['1. Identification and scoping: which mailboxes, file shares, cloud and phones; which people and dates.','۱. پیدا کردن: کدام ایمیل‌ها، پوشه‌ها، فضای ابری و گوشی‌ها؛ کدام آدم‌ها و چه تاریخ‌هایی.'],
       ['2. Collection and preservation: copy without changing it, keep metadata, apply legal holds.','۲. جمع کردن و نگه‌داری: بدون تغییر کپی کن، metadata را نگه دار، legal hold بگذار.'],
       ['3. Processing and review: filter, deduplicate, keyword search; lawyers check relevance and privilege.','۳. پردازش و بررسی: تکراری‌ها را حذف کن، با کلمه‌ی کلیدی بگرد؛ وکیل‌ها بررسی می‌کنند.'],
       ['4. Production: deliver ESI in agreed formats (PDF, TIFF, native) with metadata.','۴. تحویل: داده را با فرمت توافق‌شده (PDF، TIFF، اصلی) و با metadata تحویل بده.']]),

    H('Where the clues are','سرنخ‌ها کجا هستند'),
    TB([['Source','منبع'],['What it tells you','چه می‌گوید']],[
      [['Firewall logs','لاگ فایروال'],['Blocked and allowed traffic, intrusion attempts','چه ترافیکی آمد، چه چیزی رد شد']],
      [['Application logs','لاگ برنامه'],['Errors, transactions, security events','خطاها، تراکنش‌ها، رویدادهای امنیتی']],
      [['Endpoint and OS logs','لاگ دستگاه و سیستم‌عامل'],['Local logins and configuration changes','ورودها و تغییر تنظیمات روی همان دستگاه']],
      [['IDS/IPS logs','لاگ IDS/IPS'],['Detected threats and blocked exploits','تهدیدهای کشف‌شده و حمله‌های متوقف‌شده']],
      [['Network logs','لاگ شبکه'],['Traffic patterns, bandwidth spikes, odd connections','الگوی ترافیک، افزایش ناگهانی، اتصال عجیب']],
      [['Metadata','Metadata'],['MAC times (modified, accessed, created), login times, file access trails','زمان ساخت، تغییر و باز شدن فایل؛ زمان ورود کاربر']],
      [['Vulnerability scans','اسکن آسیب‌پذیری'],['Weaknesses that may have been the way in','پنجره‌های بازی که شاید دزد از آن آمده']]]),
    L([['Example workflow: SIEM alert, then automation blocks the IP and disables the account, then the analyst reviews logs and packet captures, then forensics takes a hashed bit-by-bit image.','نمونه: SIEM هشدار می‌دهد ← سیستم خودکار IP را می‌بندد و حساب را قفل می‌کند ← تحلیلگر لاگ و بسته‌های شبکه را بررسی می‌کند ← تیم جرم‌شناسی کپی بیت‌به‌بیت با hash می‌گیرد.'],
       ['Ransomware case: started with a phishing attachment; automation isolated workstations; clean backups meant no ransom was paid; awareness training was updated.','مطالعه‌ی موردی باج‌افزار: با پیوست یک ایمیل فیشینگ شروع شد؛ سیستم خودکار دستگاه‌ها را جدا کرد؛ پشتیبان سالم داشتند پس باج ندادند؛ بعد آموزش کارمندها بهتر شد.']]),
    TT('No single log tells the whole story. Correlate several sources like puzzle pieces.',
      'هیچ لاگی به تنهایی کل داستان را نمی‌گوید. منبع‌ها را مثل تکه‌های پازل کنار هم بگذار.')
  ]};
})();
