/* Security+ extension: Section B1, matched to Chapter 1 ("Today's Security Professional") of the course
   textbook (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written
   for the chapter's objectives (1.1, 1.2, 1.4, 3.3, 5.2); no text from the book is copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secbook'});
  if(!pack)return;
  pack.sections['1']={en:'Today\'s security professional',fa:'متخصص امنیت امروز'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b1_'+(++n),sec:'1',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='CIA & DAD',T2='Breach impact',T3='Controls',T4='Data protection & DLP';

  /* ---- CIA & DAD ---- */
  M(T1,'An employee accidentally emails a spreadsheet of customer phone numbers to the wrong outside address. Which DAD threat is this?',
    'کارمندی اشتباهی یک فایل اکسل از شماره‌تلفن مشتری‌ها را به یک آدرس بیرونی اشتباه ایمیل می‌کند. این کدام تهدید DAD است؟',
    'DAD = Disclosure، Alteration، Denial. داده به دست آدم غیرمجاز رسیده.',
    ['Disclosure','Alteration','Denial','Duplication'],
    ['Disclosure (افشا)','Alteration (تغییر)','Denial (قطع دسترسی)','Duplication (تکثیر؛ جزو DAD نیست)'],
    'Disclosure is exposing data to unauthorized people and breaks confidentiality. It can be accidental, like this email, or malicious (exfiltration). Alteration breaks integrity and denial breaks availability.',
    'Disclosure یعنی داده به دست کسی برسد که نباید؛ ضد Confidentiality است. می‌تواند عمدی (دزدی داده) یا تصادفی (ایمیل اشتباه، گم شدن لپ‌تاپ) باشد. Alteration ضد Integrity و Denial ضد Availability است.');

  M(T1,'A power surge flips bits in a database file, so some stored values change. Which DAD threat and CIA goal are involved?',
    'یک نوسان برق چند بیت را در فایل پایگاه داده عوض می‌کند و بعضی مقدارها تغییر می‌کنند. کدام تهدید DAD و کدام هدف CIA درگیر است؟',
    'داده «تغییر» کرده، حتی بدون مهاجم.',
    ['Alteration, which violates integrity','Disclosure, which violates confidentiality','Denial, which violates availability','Alteration, which violates non-repudiation'],
    ['Alteration (تغییر)؛ نقض Integrity','Disclosure؛ نقض Confidentiality','Denial؛ نقض Availability','Alteration؛ نقض Non-repudiation'],
    'Any unauthorized change to data is alteration and violates integrity, whether it comes from an attacker, a typo or a natural event like a power surge. Hashing and integrity monitoring help detect it.',
    'هر تغییر بدون مجوز در داده Alteration است و Integrity را می‌شکند؛ فرقی ندارد مهاجم باشد، اشتباه تایپی یا نوسان برق. Hash و FIM کمک می‌کنند تغییر را بفهمیم.');

  M(T1,'A failed storage controller makes the payroll system unreachable on payday. No attacker is involved. Which DAD threat is this?',
    'خراب شدن کنترلر ذخیره‌سازی باعث می‌شود سیستم حقوق در روز پرداخت در دسترس نباشد. هیچ مهاجمی در کار نیست. این کدام تهدید DAD است؟',
    'کاربر مجاز نمی‌تواند به داده برسد.',
    ['Denial','Disclosure','Alteration','Repudiation'],
    ['Denial (انکار/قطع دسترسی)','Disclosure (افشا)','Alteration (تغییر)','Repudiation (انکار انجام کار)'],
    'Denial is losing legitimate access to data or systems and violates availability. It can be malicious (DDoS), accidental (hardware failure) or natural (flood). Fault tolerance, clustering and backups are availability controls.',
    'Denial یعنی کاربر مجاز نتواند به سیستم برسد؛ ضد Availability است. می‌تواند عمدی (DDoS)، تصادفی (خرابی سخت‌افزار) یا طبیعی (سیل) باشد. کنترل‌های Availability: تحمل خطا، کلاستر و پشتیبان.');

  M(T1,'A manager says, "I never sent that approval email." Which control would best prove that the message really came from them?',
    'مدیری می‌گوید: «من هیچ‌وقت آن ایمیل تأیید را نفرستادم.» کدام کنترل بهتر ثابت می‌کند پیام واقعاً از طرف خودش بوده؟',
    'باید جلوی «انکار» را بگیریم.',
    ['A digital signature on the email','Encrypting the mailbox at rest','A DLP rule on outbound mail','Daily email backups'],
    ['امضای دیجیتال روی ایمیل','رمزگذاری صندوق ایمیل روی دیسک','قانون DLP روی ایمیل خروجی','پشتیبان روزانه از ایمیل‌ها'],
    'A digital signature is created with the sender\'s private key, so anyone can verify it with the public key and the sender cannot credibly deny sending it. That is non-repudiation, which is an important goal but not part of the CIA triad.',
    'امضای دیجیتال با کلید خصوصی خود فرستنده ساخته می‌شود؛ پس بعداً نمی‌تواند بگوید «من نفرستادم». این Non-repudiation است؛ مهم است اما جزو سه هدف CIA نیست.');

  /* ---- Breach impact ---- */
  M(T2,'After a breach, a hospital is fined by regulators for failing to protect patient records. Which risk category is this?',
    'بعد از یک نفوذ، بیمارستانی به خاطر محافظت نکردن از پرونده‌ی بیماران توسط نهاد ناظر جریمه می‌شود. این کدام دسته‌ی ریسک است؟',
    'پای «قانون و مقررات» در میان است.',
    ['Compliance risk','Strategic risk','Operational risk','Reputational risk'],
    ['Compliance risk (ریسک انطباق با قانون)','Strategic risk (ریسک راهبردی)','Operational risk (ریسک عملیاتی)','Reputational risk (ریسک اعتبار)'],
    'Compliance risk is breaking a law or regulation (for example HIPAA for health data or PCI DSS for card data), which leads to sanctions and fines. Fines also cause financial damage: one breach usually crosses several categories.',
    'Compliance risk یعنی به خاطر نفوذ، قانون یا مقررات را زیر پا گذاشته‌ایم (مثلاً HIPAA برای داده‌ی سلامت یا PCI DSS برای کارت بانکی) و جریمه می‌شویم. جریمه خودش ضرر مالی هم هست؛ یک حادثه معمولاً چند دسته‌ی ریسک را با هم دارد.');

  M(T2,'Stolen design files let a competitor launch a similar product first, threatening the company\'s main business plan. Which risk category fits best?',
    'فایل‌های طراحی دزدیده‌شده باعث می‌شود رقیب زودتر محصول مشابه را عرضه کند و برنامه‌ی اصلی کسب‌وکار شرکت در خطر بیفتد. کدام دسته‌ی ریسک بهتر جور است؟',
    'هدف‌های «بزرگ و بلندمدت» شرکت در خطرند، نه کارهای روزانه.',
    ['Strategic risk','Operational risk','Compliance risk','Physical risk'],
    ['Strategic risk (ریسک راهبردی)','Operational risk (ریسک عملیاتی)','Compliance risk (ریسک انطباق)','ریسک فیزیکی'],
    'Strategic risk threatens the organization\'s ability to reach its major goals or even survive. Operational risk only causes delay and inefficiency in day-to-day work, such as manual workarounds.',
    'Strategic risk یعنی هدف‌های اصلی یا حتی بقای شرکت در خطر است (رقیب زودتر به بازار می‌رسد). Operational risk فقط کار روزانه را کند می‌کند (مثلاً سفارش‌ها دیر ارسال می‌شوند یا کارها دستی انجام می‌شود).');

  M(T2,'Because the order system is down, staff must write orders on paper and enter them later, so deliveries are delayed. Which risk category is this?',
    'چون سیستم سفارش از کار افتاده، کارکنان باید سفارش‌ها را روی کاغذ بنویسند و بعداً وارد کنند و ارسال‌ها دیر می‌شود. این کدام دسته‌ی ریسک است؟',
    'کار «روزمره» کند شده، ولی شرکت از هدف‌هایش دور نشده.',
    ['Operational risk','Strategic risk','Compliance risk','Reputational risk'],
    ['Operational risk (ریسک عملیاتی)','Strategic risk (ریسک راهبردی)','Compliance risk (ریسک انطباق)','Reputational risk (ریسک اعتبار)'],
    'Operational risk affects day-to-day functions: slower processes, delayed orders and manual workarounds. If it threatened the company\'s survival or main plans, it would be strategic.',
    'Operational risk روی کارهای روزانه اثر می‌گذارد: روندها کند می‌شوند، سفارش‌ها دیر می‌رسند و کارها دستی انجام می‌شود. اگر بقای شرکت یا برنامه‌ی اصلی‌اش در خطر بود، Strategic risk بود.');

  M(T2,'After news of a breach, loyal customers quietly move to a competitor, although few say why. Which risk category is hardest to measure here?',
    'بعد از خبر یک نفوذ، مشتری‌های قدیمی بی‌سروصدا سراغ رقیب می‌روند، هرچند کمتر کسی دلیلش را می‌گوید. کدام دسته‌ی ریسک اینجا سخت‌تر از همه اندازه‌گیری می‌شود؟',
    'از دست رفتن «اعتماد» و حسن‌نیت.',
    ['Reputational risk','Compliance risk','Operational risk','Physical risk'],
    ['Reputational risk (ریسک اعتبار و آبرو)','Compliance risk (ریسک انطباق)','Operational risk (ریسک عملیاتی)','ریسک فیزیکی'],
    'Reputational risk is loss of goodwill among customers, employees, suppliers and other stakeholders because of bad publicity. It is hard to put a number on because people rarely announce that they are leaving.',
    'Reputational risk یعنی از دست رفتن اعتماد مشتری، کارمند و شریک‌ها به خاطر خبر بد. سخت اندازه‌گیری می‌شود چون مردم معمولاً نمی‌گویند به خاطر نفوذ رفته‌اند.');

  M(T2,'Which set of data elements is most attractive to criminals for identity theft?',
    'کدام مجموعه از داده‌ها برای سرقت هویت بیشتر از همه به درد مجرمان می‌خورد؟',
    'شناسه‌هایی که با آن‌ها می‌شود حساب بانکی باز کرد یا خود را جای کسی جا زد.',
    ['SIN number, bank card number and passport number','Favorite color, shoe size, hobbies and pet\'s name','Loyalty points balance, seat preference and meal choice','Office floor number, desk color and parking spot number'],
    ['شماره‌ی SIN، شماره‌ی کارت بانکی و شماره‌ی پاسپورت','رنگ مورد علاقه، سایز کفش، سرگرمی و اسم حیوان خانگی','امتیاز باشگاه مشتریان، صندلی دلخواه و نوع غذا','طبقه‌ی دفتر، رنگ میز و شماره‌ی جای پارک'],
    'Identity thieves want PII that can open accounts or impersonate someone: government ID numbers (SSN, SIN), driver\'s license and passport numbers, and bank or credit card data. Organizations should inventory and protect these first.',
    'دزد هویت دنبال PII است که با آن بشود حساب باز کرد یا خود را جای کسی جا زد: شماره‌ی تأمین اجتماعی (در کانادا SIN)، گواهینامه، پاسپورت و اطلاعات بانکی. سازمان باید اول این‌ها را پیدا، فهرست و محافظت کند.');

  /* ---- Controls ---- */
  M(T3,'"Only authorized staff may enter the datacenter" is written in a plan, but nothing has been put in place yet. What is this statement?',
    'در یک برنامه نوشته شده «فقط کارکنان مجاز می‌توانند وارد دیتاسنتر شوند»، اما هنوز هیچ کاری انجام نشده. این جمله چیست؟',
    'وضعیت «مطلوب»، نه خود کنترل.',
    ['A control objective','A security control','A compensating control','A gap'],
    ['Control objective (هدف کنترل)','Security control (کنترل امنیتی)','Compensating control (کنترل جبرانی)','Gap (شکاف)'],
    'A control objective describes the desired security state; it does not do anything by itself. Security controls (badge readers, access reviews, risk assessments) are the measures that achieve it. A gap is where controls fail to meet the objective.',
    'Control objective فقط می‌گوید «می‌خواهیم به کجا برسیم»؛ خودش کاری نمی‌کند. کنترل‌ها (کارت‌خوان، بازبینی دسترسی، ارزیابی ریسک) آن را اجرا می‌کنند. اگر کنترل‌ها به هدف نرسند، Gap داریم.');

  M(T3,'To meet one objective, a company uses biometric door locks, monthly reviews of the access list and yearly risk assessments. Which categories are these, in order?',
    'شرکتی برای رسیدن به یک هدف از قفل بیومتریک در، بازبینی ماهانه‌ی فهرست دسترسی و ارزیابی ریسک سالانه استفاده می‌کند. این‌ها به ترتیب کدام دسته‌اند؟',
    'قفل = دنیای فیزیکی. بازبینی = روند انسانی. ارزیابی ریسک = مدیریت.',
    ['Physical, operational, managerial','Technical, managerial, operational','Physical, technical, directive','Operational, physical, managerial'],
    ['فیزیکی، عملیاتی، مدیریتی','فنی، مدیریتی، عملیاتی','فیزیکی، فنی، دستوری','عملیاتی، فیزیکی، مدیریتی'],
    'A lock on a door is physical. Reviewing who has access is an operational process done by people. Periodic risk assessments are managerial. One objective is usually met by a mix of categories.',
    'قفل در = Physical. بازبینی منظم دسترسی‌ها توسط آدم‌ها = Operational. ارزیابی ریسک دوره‌ای = Managerial. معمولاً یک هدف با ترکیبی از چند دسته کنترل به دست می‌آید.');

  M(T3,'A web application firewall rule blocks requests that contain SQL injection strings. Which control category is the rule?',
    'یک قانون در فایروال وب‌اپلیکیشن (WAF) درخواست‌هایی را که رشته‌ی تزریق SQL دارند مسدود می‌کند. این قانون کدام دسته‌ی کنترل است؟',
    'قانون در دنیای دیجیتال و با نرم‌افزار اجرا می‌شود.',
    ['Technical','Operational','Managerial','Physical'],
    ['Technical (فنی)','Operational (عملیاتی)','Managerial (مدیریتی)','Physical (فیزیکی)'],
    'Firewall rules, ACLs, IPS and encryption enforce security in the digital space, so they are technical controls. The category follows the control itself, even if a person writes or tunes the rule.',
    'قانون فایروال، ACL، IPS و رمزگذاری امنیت را در دنیای دیجیتال اجرا می‌کنند؛ پس Technical هستند. دسته را از خود کنترل تشخیص بده، حتی اگر آدمی قانون را نوشته یا تنظیم کرده باشد.');

  M(T3,'A store cannot meet one PCI DSS requirement and proposes its existing antivirus, which another PCI DSS requirement already demands, as the compensating control. What should the assessor say?',
    'فروشگاهی نمی‌تواند یکی از الزامات PCI DSS را اجرا کند و پیشنهاد می‌دهد آنتی‌ویروس فعلی‌اش، که یک الزام دیگر PCI DSS از قبل لازمش دارد، کنترل جبرانی باشد. ارزیاب چه باید بگوید؟',
    'کنترل جبرانی باید «اضافه بر» الزامات دیگر باشد.',
    ['Not acceptable: it must go beyond other requirements and meet the original intent','Acceptable, because any control the store already has counts as compensating','Acceptable, as long as the antivirus signatures are updated every week','Not needed, because a requirement that cannot be met can simply be skipped'],
    ['قابل قبول نیست: باید فراتر از الزامات دیگر باشد و هدف الزام اصلی را برآورده کند','قابل قبول است، چون هر کنترلی که فروشگاه از قبل دارد جایگزین حساب می‌شود','قابل قبول است، به شرطی که امضاهای آنتی‌ویروس هر هفته به‌روز شوند','لازم نیست، چون الزامی که نمی‌شود برآورده کرد را می‌شود نادیده گرفت'],
    'PCI DSS compensating controls must meet the intent and rigor of the original requirement, give a similar level of defense, and go "above and beyond" other requirements. A control you already need for another requirement does not count.',
    'کنترل جبرانی در PCI DSS باید: هدف و سخت‌گیری الزام اصلی را داشته باشد، دفاع مشابه بدهد، و «بیشتر از» الزامات دیگر باشد. کنترلی که برای یک الزام دیگر لازم است، به حساب نمی‌آید.');

  M(T3,'A machine must run an unsupported operating system for one business app, so it is placed on an isolated network with almost no connections. What is the isolated network?',
    'یک دستگاه برای یک برنامه‌ی کاری مجبور است سیستم‌عامل بدون پشتیبانی اجرا کند، پس آن را در یک شبکه‌ی جدا با تقریباً هیچ ارتباطی می‌گذارند. شبکه‌ی جدا چه نوع کنترلی است؟',
    'به‌جای کنترل اصلی (سیستم‌عامل به‌روز) یک راه دیگر برای کم کردن ریسک.',
    ['Compensating control','Corrective control','Directive control','Deterrent control'],
    ['Compensating (جبرانی)','Corrective (اصلاحی)','Directive (دستوری)','Deterrent (بازدارنده)'],
    'When the normal requirement cannot be met, a compensating control reduces the same risk another way. The organization should also have a plan to remove the exception later.',
    'وقتی نمی‌شود کنترل اصلی را اجرا کرد (سیستم‌عامل به‌روز)، کنترل جبرانی ریسک را از راه دیگری کم می‌کند (جدا کردن شبکه). سازمان باید برنامه‌ای هم داشته باشد که بعداً این استثنا را برطرف کند.');

  M(T3,'A review finds that backup tapes sent offsite are not encrypted, although the control objective says stored data must be unreadable if stolen. Which control type is missing?',
    'یک بازبینی نشان می‌دهد نوارهای پشتیبانی که به بیرون از سازمان فرستاده می‌شوند رمزگذاری نشده‌اند، در حالی که هدف کنترل می‌گوید داده‌ی ذخیره‌شده اگر دزدیده شد نباید خوانا باشد. کدام نوع کنترل کم است؟',
    'رمزگذاری «قبل از» اتفاق جلوی افشا را می‌گیرد.',
    ['Preventive','Detective','Corrective','Deterrent'],
    ['Preventive (پیشگیرانه)','Detective (کشف‌کننده)','Corrective (اصلاحی)','Deterrent (بازدارنده)'],
    'Encryption stops stolen media from being read before any harm happens, so it is a preventive control. A missing control found in a gap analysis is a risk to remediate.',
    'رمزگذاری قبل از اتفاق جلوی خوانده شدن داده‌ی دزدیده‌شده را می‌گیرد؛ پس Preventive است. نبودنش در Gap analysis یک ریسک است که باید رفع شود.');

  /* ---- Data protection & DLP ---- */
  M(T4,'Contractors bring their own laptops, and the company is not allowed to install software on them. It still wants to stop health records leaving in outbound traffic. Which DLP approach fits?',
    'پیمانکارها لپ‌تاپ خودشان را می‌آورند و شرکت اجازه ندارد روی آن‌ها نرم‌افزار نصب کند. با این حال می‌خواهد جلوی خروج پرونده‌های سلامت در ترافیک خروجی را بگیرد. کدام نوع DLP مناسب است؟',
    'روی دستگاه نمی‌شود نصب کرد، پس باید روی «شبکه» باشد.',
    ['Network-based (agentless) DLP','Host-based (agent) DLP','Watermarking only','Full-disk encryption'],
    ['DLP مبتنی بر شبکه (بدون Agent)','DLP مبتنی بر میزبان (با Agent)','فقط Watermarking','رمزگذاری کامل دیسک'],
    'Network-based DLP is a device on the network that inspects outbound traffic, so it works for devices you do not control. Host-based DLP needs an agent on each system; watermarking is a detection method, not a placement.',
    'DLP شبکه‌ای یک دستگاه روی شبکه است که ترافیک خروجی را نگاه می‌کند؛ پس برای دستگاه‌هایی که دست ما نیستند هم کار می‌کند. DLP میزبانی باید روی هر دستگاه Agent نصب کند. Watermarking روش تشخیص است، نه محل نصب.');

  M(T4,'A DLP system blocks an email because the body contains numbers in the format 4111-1111-1111-1111. Which detection method is this?',
    'یک DLP ایمیلی را مسدود می‌کند چون متنش عددهایی با قالب 4111-1111-1111-1111 دارد. این کدام روش تشخیص است؟',
    'DLP «الگوی» شکل شماره‌ی کارت را شناخت.',
    ['Pattern matching','Watermarking','Tokenization','Geographic restriction'],
    ['Pattern matching (تطبیق الگو)','Watermarking (برچسب دیجیتال)','Tokenization (جایگزینی با توکن)','محدودیت جغرافیایی'],
    'Pattern matching looks for the shape of sensitive data (card or ID number formats) or sensitive words such as "Confidential". Watermarking instead relies on electronic tags that were added to sensitive documents beforehand.',
    'Pattern matching دنبال «شکل» داده‌ی حساس می‌گردد (قالب شماره‌ی کارت یا شناسه) یا کلمه‌هایی مثل «Confidential». Watermarking روی برچسب دیجیتالی کار می‌کند که از قبل روی سند حساس گذاشته شده.');

  M(T4,'A records team adds hidden electronic tags to every confidential contract so the DLP system can spot them leaving the network. Which method is this?',
    'تیم اسناد روی همه‌ی قراردادهای محرمانه یک برچسب الکترونیکی پنهان می‌گذارد تا DLP بتواند خروجشان از شبکه را ببیند. این کدام روش است؟',
    'همان فناوری که در DRM هم استفاده می‌شود.',
    ['Watermarking','Pattern matching','Masking','Hashing'],
    ['Watermarking (برچسب‌گذاری دیجیتال)','Pattern matching (تطبیق الگو)','Masking (پوشاندن)','Hashing (هش)'],
    'Digital watermarking tags sensitive files so DLP can recognize them anywhere. The same idea is used in digital rights management (DRM) to enforce copyright.',
    'Watermarking روی فایل حساس برچسب می‌گذارد تا DLP هر جا دیدش بشناسد. همین ایده در DRM (مدیریت حق دیجیتال) برای حفاظت از کپی‌رایت هم استفاده می‌شود.');

  M(T4,'A receipt shows a card number as ************4242. Which data protection technique is this?',
    'یک رسید شماره‌ی کارت را به‌صورت ************4242 نشان می‌دهد. این کدام روش حفاظت داده است؟',
    'بخشی از داده با ستاره «پوشانده» شده.',
    ['Masking','Tokenization','Hashing','Encryption'],
    ['Masking (پوشاندن)','Tokenization (جایگزینی با توکن)','Hashing (هش)','Encryption (رمزگذاری)'],
    'Masking hides part or all of a value with characters such as * or X. It is not reversible from what is shown. Tokenization swaps the whole value for a random token kept in a lookup table.',
    'Masking بخشی از داده را با * یا X می‌پوشاند (فقط ۴ رقم آخر پیداست). از روی آن نمی‌شود عدد اصلی را برگرداند. Tokenization کل مقدار را با یک عدد تصادفی عوض می‌کند و جدول تبدیل را جای امنی نگه می‌دارد.');

  M(T4,'A payroll app stores a protected stand-in for each employee ID, but the HR system must later turn it back into the real ID. Which technique allows this?',
    'برنامه‌ی حقوق به‌جای شماره‌ی هر کارمند یک جایگزین محافظت‌شده نگه می‌دارد، ولی سیستم منابع انسانی بعداً باید آن را به شماره‌ی واقعی برگرداند. کدام روش این را ممکن می‌کند؟',
    'یک جدول جستجو (Lookup table) دارد.',
    ['Tokenization','Masking','Hashing','Shredding'],
    ['Tokenization (جایگزینی با توکن)','Masking (پوشاندن)','Hashing (هش)','Shredding (خرد کردن)'],
    'Tokenization keeps a secure lookup table that maps each token back to the original value, so it is reversible for whoever holds the table, which therefore must be well protected. Hashing is one-way, masking throws characters away and shredding destroys the data.',
    'در Tokenization یک جدول امن داریم که هر توکن را به مقدار اصلی وصل می‌کند؛ پس برگشت‌پذیر است و آن جدول باید خیلی خوب محافظت شود. Hash یک‌طرفه است، Masking بخشی را دور می‌ریزد و Shredding داده را نابود می‌کند.');

  M(T4,'A school hashes student IDs in a list of failed courses. Why is this still risky?',
    'مدرسه‌ای شماره‌ی دانش‌آموزی را در فهرست درس‌های ردشده هش می‌کند. چرا هنوز خطر دارد؟',
    'اگر مهاجم فهرست همه‌ی شماره‌های ممکن را داشته باشد...',
    ['Anyone with all student IDs can hash them and match them','Hashes can be decrypted with the school\'s public key','Hashing makes the file too large to store or share','The hash of each ID changes every day, so it leaks'],
    ['هر کس همه‌ی شماره‌ها را داشته باشد می‌تواند هشان کند و تطبیق دهد','هش با کلید عمومی مدرسه رمزگشایی می‌شود','هش فایل را برای ذخیره یا اشتراک خیلی بزرگ می‌کند','هش هر شماره هر روز عوض می‌شود، پس لو می‌رود'],
    'Hashing is one-way, but if the set of possible inputs is small and known, an attacker can hash every candidate and compare (a rainbow-table style attack). Salting or tokenization reduces this risk.',
    'Hash یک‌طرفه است، اما اگر ورودی‌های ممکن کم و معلوم باشند (مثل شماره‌ی دانش‌آموزی)، مهاجم همه را هش می‌کند و مقایسه می‌کند (شبیه حمله‌ی Rainbow table). Salt یا Tokenization این خطر را کم می‌کند.');

  M(T4,'What is the best way to practice data minimization for records that are no longer needed for their business purpose?',
    'بهترین راه کم کردن داده (Data minimization) برای رکوردهایی که دیگر برای هدف کاری لازم نیستند چیست؟',
    'داده‌ای که نداری، دزدیده نمی‌شود.',
    ['Securely destroy them','Copy them to a second backup','Move them to a cheaper cloud storage tier','Email them to the data owner'],
    ['آن‌ها را به‌طور امن نابود کن','یک نسخه‌ی پشتیبان دوم بگیر','به فضای ابری ارزان‌تر منتقلشان کن','آن‌ها را به صاحب داده ایمیل کن'],
    'Data minimization reduces risk by keeping less sensitive data. Destroying data you no longer need is best; if you must keep it, de-identify it (remove the link to a person) or obfuscate it with hashing, tokenization or masking.',
    'Data minimization یعنی داده‌ی حساس کمتر نگه داریم. بهترین کار نابود کردن داده‌ی غیرلازم است. اگر مجبوریم نگهش داریم، De-identification (قطع ارتباط داده با آدم) یا Obfuscation (هش، توکن یا ماسک).');

  M(T4,'A company allows its HR database to be reached only from inside Canada. Which access restriction is this?',
    'شرکتی اجازه می‌دهد پایگاه داده‌ی منابع انسانی فقط از داخل کانادا قابل دسترسی باشد. این کدام محدودیت دسترسی است؟',
    'محدودیت بر اساس «مکان».',
    ['Geographic restriction','Permission restriction','Segmentation','Data masking'],
    ['Geographic restriction (محدودیت جغرافیایی)','Permission restriction (محدودیت مجوز)','Segmentation (بخش‌بندی شبکه)','Data masking (پوشاندن داده)'],
    'Geographic restrictions limit access by the physical location of the user or system. Permission restrictions limit it by role or authorization level; segmentation separates networks, and isolation cuts a system off completely.',
    'Geographic restriction بر اساس مکان کاربر محدود می‌کند. Permission restriction بر اساس نقش یا سطح مجوز است، Segmentation شبکه‌ها را جدا می‌کند و Isolation سیستم را کاملاً از بیرون قطع می‌کند.');

  M(T4,'An attacker with admin rights reads a decrypted credit card number from the RAM of a payment server while it is being processed. Which data state was attacked?',
    'مهاجمی با دسترسی مدیر، شماره‌ی کارت رمزگشایی‌شده را از RAM سرور پرداخت، در حین پردازش، می‌خواند. به کدام حالت داده حمله شده؟',
    'داده نه روی دیسک است و نه روی شبکه؛ در حال پردازش است.',
    ['Data in use','Data at rest','Data in transit','Data in archive'],
    ['Data in use (داده در حال استفاده)','Data at rest (داده‌ی ذخیره‌شده)','Data in transit (داده در حال انتقال)','داده‌ی بایگانی‌شده'],
    'Data in use is in memory while a system processes it, often unencrypted. Data at rest is stored (disk, tape, cloud) and data in transit moves over a network. Each state needs its own protection.',
    'Data in use در حافظه (RAM) و در حال پردازش است و معمولاً رمزگشایی شده. Data at rest روی دیسک یا ابر ذخیره است و Data in transit روی شبکه حرکت می‌کند. هر حالت محافظت خودش را لازم دارد.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['1']={t:['Today\'s security professional','متخصص امنیت امروز'],b:[
    PP('Matched to Chapter 1 of the course textbook (objectives 1.1, 1.2, 1.4, 3.3 and 5.2). These are short review notes in our own words; read the chapter itself for the full explanation. Controls, CIA and gap analysis are also practiced in the Security+ course, sections 1 and 14.',
      'این بخش با فصل ۱ کتاب درس جور است (سرفصل‌های 1.1، 1.2، 1.4، 3.3 و 5.2). این‌ها یادداشت‌های کوتاه مرور به زبان خودمان است؛ توضیح کامل را در خود کتاب بخوان. کنترل‌ها، CIA و Gap analysis در بخش ۱ و ۱۴ دوره‌ی Security+ هم تمرین شده‌اند.'),

    H('CIA goals and DAD threats','هدف‌های CIA و تهدیدهای DAD'),
    TB([['Goal (CIA)','هدف (CIA)'],['Threat (DAD)','تهدید (DAD)'],['Example','مثال']],[
      [['Confidentiality','محرمانگی'],['Disclosure','افشا'],['Stolen records, wrong email, lost laptop','رکوردهای دزدیده‌شده، ایمیل اشتباه، لپ‌تاپ گم‌شده']],
      [['Integrity','یکپارچگی'],['Alteration','تغییر'],['Defaced website, fake transactions, bit flip','تخریب ظاهر سایت، تراکنش جعلی، تغییر بیت با نوسان برق']],
      [['Availability','دسترس‌پذیری'],['Denial','قطع دسترسی'],['DDoS, failed server, natural disaster','DDoS، خرابی سرور، بلای طبیعی']]]),
    TT('Non-repudiation (digital signatures) is important but is NOT one of the three CIA goals. Threats can be malicious, accidental or natural.',
      'Non-repudiation (امضای دیجیتال) مهم است اما جزو سه هدف CIA نیست. تهدیدها می‌توانند عمدی، تصادفی یا طبیعی باشند.'),

    H('Breach impact: five risk categories','اثر نفوذ: پنج دسته‌ی ریسک'),
    TB([['Category','دسته'],['Simple idea','به زبان ساده']],[
      [['Financial','مالی'],['Direct costs (recovery, experts) and indirect losses (lost sales)','هزینه‌ی مستقیم (بازسازی، متخصص) و غیرمستقیم (فروش از دست رفته)']],
      [['Reputational','اعتبار'],['Loss of goodwill; hard to measure','از دست رفتن اعتماد؛ سخت اندازه‌گیری می‌شود']],
      [['Strategic','راهبردی'],['Threatens major goals or survival','هدف‌های اصلی یا بقای شرکت در خطر']],
      [['Operational','عملیاتی'],['Slows day-to-day work, manual workarounds','کار روزانه کند می‌شود، کارها دستی']],
      [['Compliance','انطباق'],['Breaks laws/regulations: fines, sanctions (HIPAA, PCI DSS)','نقض قانون: جریمه و تحریم (HIPAA، PCI DSS)']]]),
    L([['One breach usually crosses several categories (for example reputational + financial + compliance).','یک نفوذ معمولاً چند دسته را با هم دارد (مثلاً اعتبار + مالی + انطباق).'],
       ['Identity theft hurts customers and employees: protect SSN/SIN, driver\'s license, passport and bank card data first.','سرقت هویت به مشتری و کارمند آسیب می‌زند: اول از SIN، گواهینامه، پاسپورت و کارت بانکی محافظت کن.']]),

    H('Controls','کنترل‌ها'),
    L([['Control objective = the desired security state. Security control = the measure that achieves it. Gap = a control that does not meet its objective.','Control objective = وضعیت مطلوب. Security control = کاری که آن را محقق می‌کند. Gap = جایی که کنترل به هدف نمی‌رسد.'],
       ['Categories (HOW it works): technical, operational, managerial, physical.','دسته‌ها (چطور کار می‌کند): فنی، عملیاتی، مدیریتی، فیزیکی.'],
       ['Types (WHAT it is for): preventive, deterrent, detective, corrective, compensating, directive.','نوع‌ها (برای چه کاری است): پیشگیرانه، بازدارنده، کشف‌کننده، اصلاحی، جبرانی، دستوری.'],
       ['PCI DSS compensating control: same intent and rigor, similar level of defense, and above and beyond other requirements.','کنترل جبرانی در PCI DSS: همان هدف و سخت‌گیری، دفاع مشابه، و اضافه بر الزامات دیگر.']]),

    H('Protecting data','حفاظت از داده'),
    TB([['Technique','روش'],['Reversible?','برگشت‌پذیر؟'],['Idea','ایده']],[
      [['Encryption','رمزگذاری'],['Yes, with the key','بله، با کلید'],['Math makes data unreadable without the key','ریاضی داده را بدون کلید ناخوانا می‌کند']],
      [['Tokenization','توکن‌سازی'],['Yes, with the lookup table','بله، با جدول تبدیل'],['Random token replaces the value','یک عدد تصادفی جای مقدار اصلی']],
      [['Hashing','هش'],['No (one-way)','نه (یک‌طرفه)'],['Risky if possible inputs are known','اگر ورودی‌های ممکن معلوم باشند خطر دارد']],
      [['Masking','پوشاندن'],['No','نه'],['Hide part with * or X','بخشی را با * یا X بپوشان']]]),
    L([['Data states: at rest (stored), in transit (network), in use (memory while processing).','حالت‌های داده: ذخیره‌شده، در حال انتقال (شبکه)، در حال استفاده (حافظه در حین پردازش).'],
       ['DLP placement: host-based (agent on each device, can block USB) or network-based (agentless device watching outbound traffic).','محل DLP: میزبانی (Agent روی هر دستگاه، می‌تواند USB را ببندد) یا شبکه‌ای (دستگاه بدون Agent که ترافیک خروجی را می‌بیند).'],
       ['DLP detection: pattern matching (formats, keywords) or watermarking (tags on documents, also used in DRM). DLP can block or auto-encrypt.','تشخیص DLP: تطبیق الگو (قالب، کلمه‌ی کلیدی) یا Watermarking (برچسب روی سند، مثل DRM). DLP می‌تواند مسدود کند یا خودکار رمزگذاری کند.'],
       ['Data minimization: destroy what you do not need; otherwise de-identify or obfuscate (hash, tokenize, mask).','کم کردن داده: آنچه لازم نیست را نابود کن؛ وگرنه De-identify یا Obfuscate (هش، توکن، ماسک).'],
       ['Access restrictions: geographic (location) and permission (role/authorization). Segmentation separates networks; isolation cuts a system off completely.','محدودیت دسترسی: جغرافیایی (مکان) و مجوز (نقش). Segmentation شبکه‌ها را جدا می‌کند؛ Isolation کاملاً قطع می‌کند.']]),

    TT('Exam shortcut: CIA = goals, DAD = threats. Category = how (technical/operational/managerial/physical); type = why (preventive/deterrent/detective/corrective/compensating/directive). Tokenization is the only reversible obfuscation.',
      'نکته‌ی امتحان: CIA = هدف‌ها، DAD = تهدیدها. Category = چطور (فنی/عملیاتی/مدیریتی/فیزیکی)؛ Type = چرا (پیشگیرانه/بازدارنده/کشف‌کننده/اصلاحی/جبرانی/دستوری). از روش‌های Obfuscation فقط Tokenization برگشت‌پذیر است.')
  ]};
})();
