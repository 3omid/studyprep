/* Textbook chapter 16 ("Security Governance and Compliance") of Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.
   Original questions and notes written for the chapter's objectives (1.3, 5.1, 5.3, 5.4, 5.6); no text from the book is copied.
   Adds section '16' to the textbook pack (packs/secbook.js). The correct option is always first in o/of. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secbook'});
  if(!pack)return;
  pack.sections['16']={en:'Security governance and compliance',fa:'حاکمیت امنیت و انطباق'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b16_'+(++n),sec:'16',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Governance',T2='Policy framework',T3='Change & personnel',T4='Third parties',T5='Compliance & frameworks',T6='Awareness';

  /* ---- Governance ---- */
  M(T1,'Head office writes all security policies and every branch must follow them exactly. Which governance model is this?',
    'دفتر مرکزی همه‌ی سیاست‌های امنیتی را می‌نویسد و هر شعبه باید دقیقاً از آن‌ها پیروی کند. این کدام مدل حاکمیت است؟',
    'از بالا به پایین.',
    ['Centralized governance','Decentralized governance','Federated identity','Shadow IT'],
    ['حاکمیت متمرکز','حاکمیت غیرمتمرکز','هویت فدره','Shadow IT'],
    'Centralized governance is top-down: a central authority sets and enforces policies. In decentralized governance, business units are given the goals and decide how to meet them.',
    'حاکمیت متمرکز از بالا به پایین است: یک مرجع مرکزی سیاست می‌نویسد و اجرا می‌کند. در حاکمیت غیرمتمرکز، هدف به واحدها داده می‌شود و خودشان تصمیم می‌گیرند چطور به آن برسند.');

  /* ---- Policy framework ---- */
  M(T2,'A document says: "All laptops must use full-disk encryption with AES-256." Which policy framework document is it?',
    'یک سند می‌گوید: «همه‌ی لپ‌تاپ‌ها باید رمزگذاری کامل دیسک با AES-256 داشته باشند.» این کدام سند چارچوب سیاست است؟',
    'جزئیات اجرایی و اجباری.',
    ['A standard','A policy','A procedure','A guideline'],
    ['Standard (استاندارد)','Policy (سیاست)','Procedure (رویه)','Guideline (راهنما)'],
    'Policy = high-level management intent ("protect data on mobile devices"). Standard = specific mandatory requirement (AES-256 FDE). Procedure = step-by-step instructions. Guideline = optional advice.',
    'Policy = قصد کلی مدیریت («از داده روی دستگاه‌های همراه محافظت کن»). Standard = الزام مشخص و اجباری (FDE با AES-256). Procedure = دستورالعمل قدم به قدم. Guideline = توصیه‌ی اختیاری.');

  M(T2,'Which framework document is NOT mandatory?',
    'کدام سند چارچوب، اجباری «نیست»؟',
    'توصیه است.',
    ['Guideline','Policy','Standard','Procedure'],
    ['Guideline (راهنما)','Policy (سیاست)','Standard (استاندارد)','Procedure (رویه)'],
    'Compliance with policies, standards and procedures is required. Guidelines offer optional best-practice advice, for example one possible way to meet a requirement.',
    'رعایت Policy، Standard و Procedure الزامی است. Guideline توصیه‌ی اختیاری است، مثلاً یک راه ممکن برای رسیدن به یک الزام.');

  M(T2,'A lab cannot meet the password standard because of an old instrument. What should a good exception request include?',
    'یک آزمایشگاه به خاطر یک دستگاه قدیمی نمی‌تواند استاندارد رمز را رعایت کند. یک درخواست استثنای خوب باید چه چیزهایی داشته باشد؟',
    'چرا، تا کی، چه ریسکی، و چه جبرانی.',
    ['The requirement, reason, scope, duration, risks and compensating controls','Only the department manager\'s signature on the request form','A promise from the lab that it will be fixed some day','The instrument vendor\'s marketing brochure and price list'],
    ['الزام، دلیل، دامنه، مدت، ریسک‌ها و کنترل‌های جبرانی','فقط امضای مدیر بخش روی فرم درخواست','قول آزمایشگاه که یک روز درستش می‌کند','بروشور تبلیغاتی و لیست قیمت فروشنده‌ی دستگاه'],
    'Exception processes document which rule is not met, why, for how long, what risk remains, which compensating controls reduce it, who approved it and how the organization will eventually comply.',
    'روند استثنا ثبت می‌کند کدام قانون رعایت نمی‌شود، چرا، تا کی، چه ریسکی می‌ماند، کدام کنترل جبرانی آن را کم می‌کند، چه کسی تأیید کرده و سازمان چطور بالاخره منطبق می‌شود.');

  M(T2,'Which policy tells employees what they may and may not do with company computers, email and Internet?',
    'کدام سیاست به کارمندان می‌گوید با کامپیوتر، ایمیل و اینترنت شرکت چه کاری مجاز و چه کاری ممنوع است؟',
    'استفاده‌ی «قابل قبول».',
    ['Acceptable use policy (AUP)','Data retention policy','Change management policy','Incident response plan'],
    ['سیاست استفاده‌ی قابل قبول (AUP)','سیاست نگهداری داده','سیاست مدیریت تغییر','برنامه‌ی پاسخ به حادثه'],
    'An AUP sets the rules for using organizational systems. Other common policies: information security, data ownership, data retention, account management, password, BC/DR and incident response.',
    'AUP قوانین استفاده از سیستم‌های سازمان را تعیین می‌کند. سیاست‌های رایج دیگر: امنیت اطلاعات، مالکیت داده، نگهداری داده، مدیریت حساب، رمز عبور، تداوم کسب‌وکار/بازیابی و پاسخ به حادثه.');

  /* ---- Change & personnel ---- */
  M(T3,'What is the primary goal of change management?',
    'هدف اصلی مدیریت تغییر چیست؟',
    'در دسترس ماندن سیستم‌ها.',
    ['Prevent changes from causing outages','Speed up deployments by skipping tests','Track software licenses across the company','Replace the patch management process'],
    ['جلوگیری از اینکه تغییرها باعث قطعی شوند','سریع‌تر کردن استقرار با حذف تست','ردیابی مجوز نرم‌افزار در کل شرکت','جایگزین کردن فرایند مدیریت وصله'],
    'Change management reviews, approves, tests, schedules (maintenance windows) and documents changes, with impact analysis, a backout plan and version control, so changes do not break availability.',
    'مدیریت تغییر تغییرها را بررسی، تأیید، تست، زمان‌بندی (پنجره‌ی نگهداری) و مستند می‌کند، همراه با تحلیل اثر، برنامه‌ی برگشت و کنترل نسخه، تا تغییرها دسترس‌پذیری را خراب نکنند.');

  M(T3,'Before approving a firewall upgrade, the change board asks whether it needs a reboot, which services depend on it, and how to roll it back. What is being assessed?',
    'هیئت تغییر قبل از تأیید ارتقای فایروال می‌پرسد آیا ری‌استارت لازم دارد، کدام سرویس‌ها به آن وابسته‌اند و چطور برگردانده می‌شود. چه چیزی ارزیابی می‌شود؟',
    'اثر فنی تغییر.',
    ['Technical impact and the backout plan','The firewall vendor\'s financial health','Training needs of the network staff','Classification of the data behind it'],
    ['اثر فنی و برنامه‌ی برگشت','وضعیت مالی فروشنده‌ی فایروال','نیاز آموزشی کارکنان شبکه','طبقه‌بندی داده‌ی پشت آن'],
    'Change review checks downtime for critical systems, needed restarts, dependencies, allow/deny lists, legacy applications and how to back out if something goes wrong.',
    'بررسی تغییر نگاه می‌کند: قطعی سیستم‌های حیاتی، ری‌استارت‌های لازم، وابستگی‌ها، فهرست‌های مجاز/ممنوع، برنامه‌های قدیمی و راه برگشت اگر مشکلی پیش بیاید.');

  M(T3,'One employee can both create a vendor and approve payments to it. Which control is missing?',
    'یک کارمند هم می‌تواند فروشنده تعریف کند و هم پرداخت به آن را تأیید کند. کدام کنترل وجود ندارد؟',
    'دو کار حساس نباید دست یک نفر باشد.',
    ['Separation of duties','Job rotation','Least privilege','Clean desk policy'],
    ['تفکیک وظایف (Separation of duties)','چرخش شغلی','حداقل دسترسی','سیاست میز تمیز'],
    'Separation of duties splits sensitive tasks so one person cannot commit and hide fraud. Job rotation and mandatory vacations help uncover ongoing fraud; least privilege limits access to what each job needs.',
    'Separation of duties کارهای حساس را تقسیم می‌کند تا یک نفر نتواند تقلب کند و پنهانش کند. چرخش شغلی و مرخصی اجباری به کشف تقلب جاری کمک می‌کنند؛ حداقل دسترسی فقط دسترسی لازم هر شغل را می‌دهد.');

  M(T3,'Why does a bank require staff in sensitive roles to take two consecutive weeks of vacation each year?',
    'چرا یک بانک از کارکنان در نقش‌های حساس می‌خواهد هر سال دو هفته‌ی پشت سر هم مرخصی بروند؟',
    'وقتی نیستند، کس دیگری کارشان را می‌بیند.',
    ['So someone else does the work and can spot fraud','To reduce payroll costs during the quiet season','To meet a GDPR rule about employee rest time','So their passwords can be rotated while away'],
    ['تا کس دیگری کارشان را بکند و تقلب را ببیند','برای کم کردن هزینه‌ی حقوق در فصل کم‌کار','برای رعایت قانون GDPR درباره‌ی استراحت کارمند','تا در نبودشان رمزهایشان عوض شود'],
    'Mandatory vacations (like job rotation) put another person in the role, which tends to expose fraud or errors that the absent person was hiding.',
    'مرخصی اجباری (مثل چرخش شغلی) یک نفر دیگر را در آن نقش می‌گذارد و معمولاً تقلب یا خطایی را که فرد غایب پنهان می‌کرد آشکار می‌کند.');

  /* ---- Third parties ---- */
  M(T4,'A company signs one long-term umbrella contract with a vendor, then creates a short document for each new project that refers to it. What are the two documents?',
    'شرکتی یک قرارداد چتری بلندمدت با یک فروشنده امضا می‌کند و برای هر پروژه‌ی جدید یک سند کوتاه می‌نویسد که به آن ارجاع می‌دهد. این دو سند چیستند؟',
    'چتر + سفارش کار.',
    ['MSA and SOW/work order','SLA and NDA','MOU and BPA','MOA and AUP'],
    ['MSA و SOW/Work order','SLA و NDA','MOU و BPA','MOA و AUP'],
    'A master service agreement (MSA) covers the overall relationship, often with security and privacy terms. Each project gets a statement of work (SOW) or work order (WO) that references the MSA.',
    'Master service agreement (MSA) کل رابطه را پوشش می‌دهد و معمولاً شرایط امنیت و حریم خصوصی دارد. هر پروژه یک Statement of work (SOW) یا Work order (WO) دارد که به MSA ارجاع می‌دهد.');

  M(T4,'Which agreement defines the availability and response times a vendor must deliver, and what the customer gets if it fails?',
    'کدام توافق‌نامه دسترس‌پذیری و زمان پاسخی را که فروشنده باید بدهد و جبران آن در صورت کوتاهی را تعیین می‌کند؟',
    'سطح خدمات.',
    ['SLA','MOU','NDA','BPA'],
    ['SLA (توافق سطح خدمات)','MOU (تفاهم‌نامه)','NDA (عدم افشا)','BPA (توافق شراکت تجاری)'],
    'SLA = measurable service levels and remedies. MOU = informal letter documenting a relationship (often between internal units). MOA = more formal and detailed. NDA = confidentiality. BPA = business partnership terms.',
    'SLA = سطح خدمات قابل اندازه‌گیری و جبران خسارت. MOU = نامه‌ی غیررسمی برای ثبت رابطه (اغلب بین واحدهای داخلی). MOA = رسمی‌تر و با جزئیات بیشتر. NDA = محرمانگی. BPA = شرایط شراکت تجاری.');

  M(T4,'Before choosing a new payroll provider, the security team reviews its security practices, finances and any conflicts of interest. What is this?',
    'قبل از انتخاب یک ارائه‌دهنده‌ی جدید حقوق و دستمزد، تیم امنیت روش‌های امنیتی، وضع مالی و تضاد منافع آن را بررسی می‌کند. این چیست؟',
    'بررسی دقیق قبل از انتخاب.',
    ['Vendor due diligence','Vendor monitoring','Penetration testing','Offboarding'],
    ['Due diligence فروشنده (بررسی پیش از انتخاب)','پایش فروشنده','تست نفوذ','Offboarding'],
    'Due diligence happens during vendor selection. After the contract, vendor monitoring continues with questionnaires, audits, and right-to-audit clauses, and the relationship is wound down carefully at the end (return or destroy data, remove access).',
    'Due diligence در مرحله‌ی انتخاب فروشنده است. بعد از قرارداد، پایش فروشنده با پرسشنامه، حسابرسی و بند حق حسابرسی ادامه دارد و در پایان، رابطه با دقت بسته می‌شود (برگرداندن یا نابودی داده، قطع دسترسی).');

  /* ---- Compliance & frameworks ---- */
  M(T5,'An online store in Canada accepts credit cards. Which standard must it follow?',
    'یک فروشگاه اینترنتی در کانادا کارت اعتباری قبول می‌کند. از کدام استاندارد باید پیروی کند؟',
    'صنعت کارت پرداخت.',
    ['PCI DSS','HIPAA','NIST RMF','ISO 27701'],
    ['PCI DSS','HIPAA','NIST RMF','ISO 27701'],
    'PCI DSS applies to merchants and service providers that handle payment cards, anywhere. GDPR applies to personal data of people in the EU. Breaking such rules can mean fines, sanctions, reputational damage and loss of license.',
    'PCI DSS برای هر فروشنده و ارائه‌دهنده‌ای است که کارت پرداخت را پردازش می‌کند، در هر کشوری. GDPR برای داده‌ی شخصی افراد در اتحادیه‌ی اروپاست. نقض این قوانین یعنی جریمه، تحریم، آسیب به اعتبار و از دست دادن مجوز.');

  M(T5,'A company wants a voluntary framework organized around Identify, Protect, Detect, Respond and Recover (plus Govern in version 2.0). Which one?',
    'شرکتی یک چارچوب داوطلبانه می‌خواهد که حول Identify، Protect، Detect، Respond و Recover (و Govern در نسخه‌ی ۲) سازمان یافته است. کدام؟',
    'چارچوب امنیت سایبری NIST.',
    ['NIST Cybersecurity Framework (CSF)','NIST Risk Management Framework (RMF)','ISO 27001 certification only','PCI DSS'],
    ['NIST CSF','NIST RMF','فقط گواهی ISO 27001','PCI DSS'],
    'NIST CSF uses functions (now including Govern), categories and implementation tiers. NIST RMF is the mandatory process for US federal systems (prepare, categorize, select, implement, assess, authorize, monitor). ISO 27001 is a certifiable standard; 27002 lists controls; 27701 covers privacy; 31000 covers risk.',
    'NIST CSF از کارکردها (حالا با Govern)، دسته‌ها و سطوح اجرا تشکیل شده. NIST RMF روند اجباری سیستم‌های فدرال آمریکاست (آماده‌سازی، دسته‌بندی، انتخاب، اجرا، ارزیابی، مجوز، پایش). ISO 27001 قابل گواهی است؛ 27002 کنترل‌ها؛ 27701 حریم خصوصی؛ 31000 ریسک.');

  M(T5,'Who usually reports compliance status to regulators, and who reviews it inside the company?',
    'معمولاً چه کسی وضعیت انطباق را به نهادهای ناظر گزارش می‌دهد، و چه کسی داخل شرکت آن را بررسی می‌کند؟',
    'گزارش‌دهی داخلی و خارجی.',
    ['External reports go to regulators; internal ones to management','The IT help desk sends both reports to everyone involved','Vendors report compliance on the company\'s behalf','No reporting is needed once the company is certified'],
    ['گزارش خارجی به ناظر؛ گزارش داخلی به مدیریت','Help Desk هر دو گزارش را برای همه‌ی افراد درگیر می‌فرستد','فروشنده‌ها از طرف شرکت انطباق را گزارش می‌دهند','بعد از گرفتن گواهی دیگر گزارشی لازم نیست'],
    'Compliance reporting is internal (management, board, audit committee) and external (regulators, auditors, customers). Compliance monitoring uses due diligence, attestation and acknowledgment, internal and external audits, and automation.',
    'گزارش انطباق داخلی (مدیریت، هیئت‌مدیره، کمیته‌ی حسابرسی) و خارجی (ناظر، حسابرس، مشتری) است. پایش انطباق با Due diligence، تأییدیه و اقرار، حسابرسی داخلی و خارجی و اتوماسیون انجام می‌شود.');

  /* ---- Awareness ---- */
  M(T6,'Database administrators get extra training on secure configuration that other staff do not receive. What is this?',
    'مدیران پایگاه داده آموزش اضافه‌ای درباره‌ی پیکربندی امن می‌گیرند که بقیه‌ی کارکنان نمی‌گیرند. این چیست؟',
    'آموزش بر اساس نقش.',
    ['Role-based training','Security awareness','Job rotation','Phishing simulation'],
    ['آموزش مبتنی بر نقش','آگاهی امنیتی','چرخش شغلی','شبیه‌سازی فیشینگ'],
    'Training builds new knowledge and is tailored to a role. Awareness keeps what people already learned top of mind (posters, reminders, newsletters). Phishing campaigns measure and reinforce behavior.',
    'آموزش دانش جدید می‌دهد و برای هر نقش متناسب است. آگاهی (Awareness) آنچه را قبلاً یاد گرفته‌اند یادآوری می‌کند (پوستر، یادآوری، خبرنامه). کمپین فیشینگ رفتار را می‌سنجد و تقویت می‌کند.');

  M(T6,'Which item is part of the employee offboarding process?',
    'کدام مورد جزو روند Offboarding (خروج کارمند) است؟',
    'دسترسی‌ها را جمع کن.',
    ['Disable accounts and collect badges and devices','Give the person extra admin rights to finish work','Keep the account active for a year just in case','Delete the person\'s HR record the same day'],
    ['غیرفعال کردن حساب‌ها و پس گرفتن کارت و دستگاه‌ها','دادن دسترسی مدیر اضافه تا کارش را تمام کند','فعال نگه داشتن حساب برای یک سال، محض احتیاط','پاک کردن پرونده‌ی منابع انسانی همان روز'],
    'Onboarding gives the right access and signs agreements such as the AUP and NDA. Offboarding removes access quickly, recovers equipment and reminds the person of continuing NDA duties.',
    'Onboarding دسترسی درست می‌دهد و توافق‌هایی مثل AUP و NDA را امضا می‌کند. Offboarding دسترسی را سریع قطع می‌کند، تجهیزات را پس می‌گیرد و تعهدات NDA را که ادامه دارد یادآوری می‌کند.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['16']={t:['Security governance and compliance','حاکمیت امنیت و انطباق'],b:[
    PP('Matched to Chapter 16 of the textbook (objectives 1.3, 5.1, 5.3, 5.4, 5.6). Short review notes in our own words; read the chapter for the full explanation.',
      'این بخش با فصل ۱۶ کتاب جور است (سرفصل‌های 1.3، 5.1، 5.3، 5.4، 5.6). یادداشت‌های کوتاه مرور به زبان خودمان؛ توضیح کامل را در کتاب بخوان.'),
    H('Governance','حاکمیت'),
    L([['Governance = how the organization directs its work: boards, committees, regulators, government bodies.','حاکمیت = نحوه‌ی هدایت کار سازمان: هیئت‌مدیره، کمیته‌ها، ناظران، نهادهای دولتی.'],
       ['Centralized = top-down rules. Decentralized = units decide how to meet the goals.','متمرکز = قانون از بالا. غیرمتمرکز = واحدها خودشان راه رسیدن به هدف را انتخاب می‌کنند.']]),
    H('Policy framework','چارچوب سیاست‌ها'),
    TB([['Document','سند'],['What it is','چیست'],['Mandatory?','اجباری؟']],[
      [['Policy','Policy'],['High-level management intent','قصد کلی مدیریت'],['Yes','بله']],
      [['Standard','Standard'],['Specific requirement (e.g., AES-256)','الزام مشخص (مثلاً AES-256)'],['Yes','بله']],
      [['Procedure','Procedure'],['Step-by-step instructions','دستورالعمل قدم به قدم'],['Yes','بله']],
      [['Guideline','Guideline'],['Advice, one possible way','توصیه، یک راه ممکن'],['No','نه']]]),
    L([['Common policies: information security, AUP, data ownership, data retention, account management, password, BC/DR, incident response, SDLC, change management.','سیاست‌های رایج: امنیت اطلاعات، AUP، مالکیت داده، نگهداری داده، مدیریت حساب، رمز عبور، تداوم/بازیابی، پاسخ به حادثه، SDLC، مدیریت تغییر.'],
       ['Exceptions: requirement, reason, justification, scope and duration, risks, compensating controls, plan to comply, approval.','استثنا: الزام، دلیل، توجیه، دامنه و مدت، ریسک، کنترل جبرانی، برنامه‌ی انطباق، تأیید.']]),
    H('Change and personnel','تغییر و کارکنان'),
    L([['Change management: request → impact analysis → approval → test → maintenance window → backout plan → document; version control.','مدیریت تغییر: درخواست ← تحلیل اثر ← تأیید ← تست ← پنجره‌ی نگهداری ← برنامه‌ی برگشت ← مستندسازی؛ کنترل نسخه.'],
       ['Least privilege, separation of duties, job rotation, mandatory vacations, clean desk.','حداقل دسترسی، تفکیک وظایف، چرخش شغلی، مرخصی اجباری، میز تمیز.'],
       ['Onboarding (access, AUP, NDA) and offboarding (remove access fast, recover devices).','Onboarding (دسترسی، AUP، NDA) و Offboarding (قطع سریع دسترسی، پس گرفتن دستگاه).']]),
    H('Third-party agreements','توافق‌نامه‌های طرف سوم'),
    TB([['Agreement','توافق'],['Purpose','کاربرد']],[
      [['MSA','MSA'],['Umbrella contract for a long relationship','قرارداد چتری برای رابطه‌ی بلندمدت']],
      [['SOW / WO','SOW / WO'],['Project details under the MSA','جزئیات پروژه زیر MSA']],
      [['SLA','SLA'],['Service levels and remedies','سطح خدمات و جبران']],
      [['MOU','MOU'],['Informal, documents a relationship','غیررسمی، ثبت رابطه']],
      [['MOA','MOA'],['Formal, detailed roles and terms','رسمی، نقش‌ها و شرایط با جزئیات']],
      [['NDA','NDA'],['Keep information confidential','محرمانه نگه داشتن اطلاعات']],
      [['BPA','BPA'],['Business partnership terms','شرایط شراکت تجاری']]]),
    L([['Vendor life cycle: due diligence and conflict-of-interest check → assessment (questionnaires, audits, right to audit, pen test rules of engagement) → monitoring → wind-down.','چرخه‌ی فروشنده: Due diligence و بررسی تضاد منافع ← ارزیابی (پرسشنامه، حسابرسی، حق حسابرسی، قواعد تست نفوذ) ← پایش ← پایان رابطه.']]),
    H('Compliance and frameworks','انطباق و چارچوب‌ها'),
    L([['Laws and rules: PCI DSS (cards), GDPR (EU personal data), plus national, state and local laws.','قوانین: PCI DSS (کارت)، GDPR (داده‌ی شخصی اتحادیه‌ی اروپا)، و قوانین ملی، ایالتی و محلی.'],
       ['Noncompliance: fines, sanctions, reputational damage, loss of license, contractual impacts.','عدم انطباق: جریمه، تحریم، آسیب اعتبار، از دست دادن مجوز، اثر قراردادی.'],
       ['Reporting: internal and external. Monitoring: due diligence, attestation, internal/external audits, automation.','گزارش: داخلی و خارجی. پایش: Due diligence، تأییدیه، حسابرسی داخلی/خارجی، اتوماسیون.'],
       ['Frameworks: NIST CSF (Govern, Identify, Protect, Detect, Respond, Recover), NIST RMF (federal), ISO 27001/27002/27701/31000, CIS benchmarks.','چارچوب‌ها: NIST CSF (Govern، Identify، Protect، Detect، Respond، Recover)، NIST RMF (فدرال)، ISO 27001/27002/27701/31000، بنچمارک‌های CIS.']]),
    H('Training and awareness','آموزش و آگاهی'),
    L([['Training = new knowledge, role-based. Awareness = reminders. Phishing campaigns test and teach.','آموزش = دانش جدید، بر اساس نقش. آگاهی = یادآوری. کمپین فیشینگ می‌سنجد و آموزش می‌دهد.'],
       ['Program: develop → execute → report and monitor (initial and recurring).','برنامه: طراحی ← اجرا ← گزارش و پایش (اولیه و دوره‌ای).']]),
    TT('Exam shortcut: only guidelines are optional. Centralized = top-down. MSA umbrella, SOW per project, SLA = service levels, MOU informal, MOA formal. Change management\'s main goal = no outages.',
      'نکته‌ی امتحان: فقط Guideline اختیاری است. متمرکز = از بالا. MSA چتر، SOW برای هر پروژه، SLA = سطح خدمات، MOU غیررسمی، MOA رسمی. هدف اصلی مدیریت تغییر = قطعی نداشتن.')
  ]};
})();
