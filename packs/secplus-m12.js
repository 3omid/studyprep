/* Security+ extension: Module 12 (Governance, Risk, Compliance & Awareness).
   Built from the Sheridan session slides. Loads after secplus.js and adds section 12 (questions + study notes) to the same course.
   The Persian side is written in plain, everyday language with simple examples. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['12']={en:'Governance, risk, compliance & awareness',fa:'حاکمیت، ریسک، انطباق و آگاهی امنیتی'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:f'+(++n),sec:'12',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var P=function(t,name,title,tf,zones,zf,items,zd,en,fa){ /* name = short label; the app shows title */
    pack.pbq.push({id:'secplus:p12_'+(pack.pbq.length+1),sec:'12',t:t,name:name,title:title,tf:tf,zones:zones,zf:zf,items:items,zd:zd,en:en,fa:fa});
  };

  /* ================= QUESTIONS ================= */
  var T1='Governance: policies, standards & roles',T2='Risk analysis & strategies',T3='Business impact analysis',T4='Third-party risk',T5='Compliance & privacy',T6='Audits & penetration tests',T7='Security awareness';

  M(T1,'What is security governance?',
    'حاکمیت امنیت (Security governance) چیست؟',
    'قانون‌ها، نقش‌ها و اینکه چه کسی تصمیم می‌گیرد.',
    ['The framework of policies, processes and decision-making authority that makes security meet business and legal goals','A tool that scans for vulnerabilities','A type of firewall rule','Encrypting all company data'],
    ['چارچوب قانون‌ها، روندها و اختیار تصمیم‌گیری که امنیت را با اهداف کسب‌وکار و قانون هماهنگ می‌کند','ابزاری برای اسکن آسیب‌پذیری','نوعی قانون فایروال','رمزگذاری همه‌ی داده‌های شرکت'],
    'Governance aligns security with business goals, laws and best practices through accountability, responsibility and oversight.',
    'Governance یعنی «چه کسی رئیس است و قانون چیست». مثل قانون اساسی و دولت یک کشور: مشخص می‌کند چه کسی تصمیم می‌گیرد، چه کسی مسئول است و چه کسی نظارت می‌کند.');

  M(T1,'Which document type is a high-level directive that says WHAT must be done, such as "all company data must be protected"?',
    'کدام نوع سند یک دستور کلی است که می‌گوید «چه» باید انجام شود، مثل «همه‌ی داده‌های شرکت باید محافظت شوند»؟',
    'بالاترین سطح، کلی‌ترین.',
    ['Policy','Standard','Procedure','Guideline for one device'],
    ['Policy (سیاست)','Standard (استاندارد)','Procedure (روش اجرایی)','راهنمای یک دستگاه'],
    'Policies are high-level directives (what). Standards are specific measurable rules that support them. Procedures are step-by-step instructions (how).',
    'Policy = «چه کار کنیم» (کلی). Standard = «با چه عدد و معیاری» (دقیق). Procedure = «قدم‌به‌قدم چطور» (دستور پخت).');

  M(T1,'"Passwords must be at least 14 characters with uppercase, numbers and symbols." What type of document is this?',
    '«رمز عبور باید حداقل ۱۴ حرف با حرف بزرگ، عدد و علامت باشد.» این چه نوع سندی است؟',
    'یک قاعده‌ی دقیق و قابل اندازه‌گیری.',
    ['Standard','Policy','Procedure','Memorandum of understanding'],
    ['Standard (استاندارد)','Policy (سیاست)','Procedure (روش اجرایی)','MOU'],
    'A standard is a specific, measurable rule that supports a policy, such as password complexity or encryption strength.',
    'Standard عدد و معیار دقیق می‌دهد. «رمز قوی داشته باشید» یک Policy است؛ «حداقل ۱۴ حرف» یک Standard است.');

  M(T1,'A document lists the exact steps to request, review, approve and record a change to a production server. What type of document is this?',
    'سندی قدم‌های دقیق درخواست، بررسی، تأیید و ثبت یک تغییر روی سرور اصلی را می‌نویسد. این چه نوع سندی است؟',
    'قدم‌به‌قدم.',
    ['Procedure','Policy','Standard','SLA'],
    ['Procedure (روش اجرایی)','Policy','Standard','SLA'],
    'Procedures are step-by-step instructions for carrying out policies and standards, such as change management, onboarding/offboarding or security playbooks.',
    'Procedure مثل دستور پخت غذاست: اول این، بعد آن. مثلاً روش تغییر، روش ورود و خروج کارمند، یا دستورالعمل حادثه.');

  M(T1,'Which policy tells employees what they may and may not do with company computers and internet?',
    'کدام سیاست به کارمندها می‌گوید با کامپیوتر و اینترنت شرکت چه کارهایی مجاز و چه کارهایی ممنوع است؟',
    'استفاده‌ی «قابل قبول».',
    ['Acceptable Use Policy (AUP)','Business Continuity Plan','Disaster Recovery Plan','Change Management Policy'],
    ['سیاست استفاده‌ی مجاز (AUP)','برنامه‌ی تداوم کسب‌وکار (BCP)','برنامه‌ی بازیابی از فاجعه (DRP)','سیاست مدیریت تغییر'],
    'The AUP sets rules for how employees use company systems. BCP keeps critical operations running; DRP restores systems after a major incident.',
    'AUP مثل قانون استفاده از کامپیوتر مدرسه است: بازی ممنوع، دانلود فیلم ممنوع، فقط کار درسی.');

  M(T1,'Which plan keeps critical business operations running during a disruption, while another plan restores IT systems afterward?',
    'کدام برنامه کارهای حیاتی شرکت را در زمان اختلال سرپا نگه می‌دارد، در حالی که برنامه‌ی دیگری بعد از آن سیستم‌های IT را برمی‌گرداند؟',
    'Continuity = ادامه دادن.',
    ['Business Continuity Plan (BCP); the other is the Disaster Recovery Plan (DRP)','DRP; the other is the BCP','AUP; the other is the SDLC policy','Incident response policy; the other is the AUP'],
    ['BCP (تداوم کسب‌وکار)؛ دیگری DRP است','DRP؛ دیگری BCP است','AUP؛ دیگری سیاست SDLC است','سیاست پاسخ به حادثه؛ دیگری AUP است'],
    'BCP keeps the business operating during disruptions. DRP is the set of steps to restore systems after a major incident.',
    'BCP = چطور کار را ادامه بدهیم وقتی همه چیز به هم ریخته (مثلاً با کاغذ و تلفن). DRP = چطور سرورها و سیستم‌ها را دوباره راه بیندازیم.');

  M(T1,'Under GDPR, which role decides why and how personal data is processed?',
    'طبق GDPR، کدام نقش تصمیم می‌گیرد داده‌ی شخصی «چرا» و «چطور» پردازش شود؟',
    'کسی که «کنترل» می‌کند.',
    ['Data controller','Data processor','Data custodian','Data subject'],
    ['کنترل‌کننده‌ی داده (Controller)','پردازشگر داده (Processor)','نگهبان داده (Custodian)','صاحب داده (Data subject)'],
    'The controller determines how and why personal data is processed. The processor handles data on the controller\'s behalf, often a third-party provider.',
    'Controller مثل صاحب رستوران است که تصمیم می‌گیرد چه غذایی بپزند. Processor مثل شرکت پخش است که فقط طبق دستور غذا را می‌رساند.');

  M(T1,'A payroll company processes salary data on behalf of a client that decides what data is collected. What is the payroll company?',
    'یک شرکت حقوق و دستمزد، اطلاعات حقوق را از طرف مشتری پردازش می‌کند و مشتری تصمیم می‌گیرد چه داده‌ای جمع شود. شرکت حقوق و دستمزد چه نقشی دارد؟',
    'از طرف کس دیگری کار می‌کند.',
    ['Data processor','Data controller','Data owner','Data protection officer'],
    ['پردازشگر داده (Processor)','کنترل‌کننده‌ی داده','صاحب داده','مسئول حفاظت داده (DPO)'],
    'Processors handle data on behalf of controllers. The client deciding what is collected is the controller.',
    'Processor فقط کار را طبق دستور انجام می‌دهد. تصمیم‌گیرنده (Controller) مشتری است.');

  M(T1,'Which role maintains and protects data day to day, for example by running backups and applying access settings?',
    'کدام نقش هر روز از داده نگه‌داری و محافظت می‌کند، مثلاً پشتیبان می‌گیرد و تنظیمات دسترسی را اعمال می‌کند؟',
    'نگهبان روزانه.',
    ['Custodian / steward','Owner','Controller','Regulator'],
    ['نگهبان داده (Custodian/Steward)','صاحب (Owner)','کنترل‌کننده','نهاد ناظر'],
    'Custodians/stewards maintain and protect data in daily operations. Owners are responsible for the overall security of the asset.',
    'Owner مثل صاحب خانه است که تصمیم می‌گیرد. Custodian مثل سرایدار است که هر روز در را قفل می‌کند و تمیز نگه می‌دارد.');

  M(T1,'Under GDPR, who oversees privacy compliance, reports to top management and acts as the contact with regulators?',
    'طبق GDPR، چه کسی بر رعایت حریم خصوصی نظارت می‌کند، به مدیران ارشد گزارش می‌دهد و رابط با نهادهای ناظر است؟',
    'مسئول حفاظت از داده.',
    ['Data Protection Officer (DPO)','Data processor','Help desk technician','Penetration tester'],
    ['مسئول حفاظت داده (DPO)','پردازشگر داده','کارشناس پشتیبانی','تست‌کننده‌ی نفوذ'],
    'GDPR requires a Data Protection Officer (DPO) in many cases to oversee privacy compliance and liaise with regulators.',
    'DPO مثل ناظم مدرسه برای حریم خصوصی است: مراقب است قانون رعایت شود و با اداره‌ی بالاتر (نهاد ناظر) در تماس است.');

  M(T1,'A company where one central security committee makes all security decisions for every department is using which model?',
    'شرکتی که یک کمیته‌ی امنیت مرکزی همه‌ی تصمیم‌های امنیتی همه‌ی واحدها را می‌گیرد، از کدام مدل استفاده می‌کند؟',
    'همه چیز در یک مرکز.',
    ['Centralized governance','Decentralized governance','Federation','Discretionary access control'],
    ['حاکمیت متمرکز','حاکمیت غیرمتمرکز','Federation','DAC'],
    'Centralized models concentrate authority in one body: consistent but less agile. Decentralized models spread authority: flexible but need strong coordination.',
    'متمرکز = یک رئیس برای همه؛ یکسان ولی کند. غیرمتمرکز = هر واحد رئیس خودش؛ سریع و انعطاف‌پذیر ولی هماهنگی سخت‌تر.');

  M(T1,'Which law applies to any organization anywhere that handles personal data of people in the EU?',
    'کدام قانون برای هر سازمانی در هر جای دنیا که داده‌ی شخصی مردم اتحادیه‌ی اروپا را نگه می‌دارد اعمال می‌شود؟',
    'جهانی، از اروپا.',
    ['GDPR','HIPAA','PIPEDA','CCPA'],
    ['GDPR','HIPAA','PIPEDA','CCPA'],
    'GDPR (EU) is global in scope. HIPAA is US health data, PIPEDA is Canada\'s national privacy law, CCPA is California (local/state).',
    'GDPR قانون اروپاست ولی هر شرکتی در دنیا که با اطلاعات اروپایی‌ها کار کند باید رعایتش کند. HIPAA = داده‌ی پزشکی آمریکا. PIPEDA = کانادا. CCPA = ایالت کالیفرنیا.');

  M(T1,'A Canadian online store wants to know which national privacy law applies to the personal information it collects. Which one?',
    'یک فروشگاه اینترنتی کانادایی می‌خواهد بداند کدام قانون ملی حریم خصوصی برای اطلاعات شخصی‌ای که جمع می‌کند اعمال می‌شود. کدام است؟',
    'قانون ملی کانادا؛ اسمش با P شروع می‌شود.',
    ['PIPEDA','CCPA','HIPAA','PCI DSS'],
    ['PIPEDA','CCPA','HIPAA','PCI DSS'],
    'PIPEDA is Canada\'s national private-sector privacy law. PCI DSS is an industry standard for card payments, not a law.',
    'PIPEDA قانون ملی کانادا برای حفاظت از اطلاعات شخصی در شرکت‌های خصوصی است. PCI DSS قانون دولت نیست؛ استاندارد صنعت کارت بانکی است.');

  M(T2,'What does SLE (Single Loss Expectancy) measure?',
    'SLE (انتظار ضرر یک‌باره) چه چیزی را اندازه می‌گیرد؟',
    'Single = یک بار.',
    ['The expected money lost from one occurrence of a risk','How many times a risk happens per year','The yearly expected loss','The time to repair a system'],
    ['پولی که از یک بار اتفاق افتادن ریسک از دست می‌رود','چند بار در سال اتفاق می‌افتد','ضرر سالانه','زمان تعمیر سیستم'],
    'SLE = expected monetary loss from a single incident. It can be calculated as asset value x exposure factor (EF).',
    'SLE یعنی اگر «یک بار» این اتفاق بیفتد چقدر ضرر می‌کنی. مثلاً اگر یک لپ‌تاپ دزدیده شود و ۲۰۰۰ دلار خرج دارد، SLE = ۲۰۰۰ دلار.');

  M(T2,'A risk is expected to happen 3 times a year. Which value is 3?',
    'انتظار می‌رود یک ریسک سالی ۳ بار اتفاق بیفتد. عدد ۳ کدام مقدار است؟',
    'Rate = نرخ، Annual = سالانه.',
    ['ARO (Annualized Rate of Occurrence)','SLE','ALE','EF'],
    ['ARO (تعداد بار در سال)','SLE','ALE','EF'],
    'ARO is how often a risk is expected to occur in one year.',
    'ARO یعنی «سالی چند بار». اگر سالی ۳ بار اتفاق بیفتد، ARO = ۳. اگر هر ۱۰ سال یک بار، ARO = ۰٫۱.');

  M(T2,'Replacing a stolen laptop costs $2,000, and laptops are stolen twice a year. What is the ALE?',
    'جایگزین کردن یک لپ‌تاپ دزدیده‌شده ۲۰۰۰ دلار خرج دارد و سالی دو بار لپ‌تاپ دزدیده می‌شود. ALE چقدر است؟',
    'ALE = SLE × ARO.',
    ['$4,000','$1,000','$2,002','$2,000'],
    ['۴۰۰۰ دلار','۱۰۰۰ دلار','۲۰۰۲ دلار','۲۰۰۰ دلار'],
    'ALE = SLE x ARO = $2,000 x 2 = $4,000 per year.',
    'ALE = SLE × ARO = ۲۰۰۰ × ۲ = ۴۰۰۰ دلار در سال. یعنی هر سال انتظار داری حدود ۴۰۰۰ دلار به خاطر این ریسک ضرر کنی.');

  M(T2,'A server is worth $50,000. A flood would destroy 40% of it (EF = 40%). Floods are expected once every 10 years. What is the ALE?',
    'یک سرور ۵۰٬۰۰۰ دلار ارزش دارد. سیل ۴۰٪ آن را از بین می‌برد (EF = 40%). انتظار می‌رود هر ۱۰ سال یک بار سیل بیاید. ALE چقدر است؟',
    'اول SLE = ارزش × EF. بعد ARO = ۱ تقسیم بر ۱۰.',
    ['$2,000','$20,000','$5,000','$200,000'],
    ['۲۰۰۰ دلار','۲۰٬۰۰۰ دلار','۵۰۰۰ دلار','۲۰۰٬۰۰۰ دلار'],
    'SLE = $50,000 x 0.40 = $20,000. ARO = 1/10 = 0.1. ALE = $20,000 x 0.1 = $2,000.',
    'SLE = ۵۰٬۰۰۰ × ۰٫۴ = ۲۰٬۰۰۰ دلار (ضرر یک سیل). ARO = ۰٫۱ (هر ده سال یک بار). ALE = ۲۰٬۰۰۰ × ۰٫۱ = ۲۰۰۰ دلار در سال.');

  M(T2,'What is the exposure factor (EF)?',
    'Exposure factor (EF) چیست؟',
    'چند درصد از دست می‌رود؟',
    ['The percentage of an asset lost if the risk occurs','The number of attacks per year','The cost of insurance','The recovery time'],
    ['درصدی از دارایی که اگر ریسک رخ دهد از دست می‌رود','تعداد حمله در سال','هزینه‌ی بیمه','زمان بازیابی'],
    'EF is the percentage of asset value lost in one incident. SLE = asset value x EF.',
    'EF یعنی «چند درصد خراب می‌شود». اگر آتش نصف انبار را بسوزاند، EF = ۵۰٪.');

  M(T2,'A risk team rates risks as low, medium or high based on expert judgment and past incidents. Which analysis is this?',
    'تیم ریسک، ریسک‌ها را بر اساس نظر کارشناس و حادثه‌های قبلی کم، متوسط یا زیاد امتیاز می‌دهد. این کدام نوع تحلیل است؟',
    'کلمه، نه عدد پولی.',
    ['Qualitative','Quantitative','Annualized','Continuous'],
    ['کیفی (Qualitative)','کمّی (Quantitative)','سالانه','پیوسته'],
    'Qualitative analysis uses descriptive ratings (low/medium/high). Quantitative analysis uses measurable numbers such as SLE, ARO and ALE in dollars.',
    'Qualitative = با کلمه (کم، متوسط، زیاد). Quantitative = با عدد و پول (SLE، ALE). Quality = کیفیت، Quantity = تعداد.');

  M(T2,'A company buys cyber insurance to cover ransomware costs. Which risk strategy is this?',
    'یک شرکت بیمه‌ی سایبری می‌خرد تا هزینه‌های باج‌افزار را پوشش دهد. این کدام راهبرد ریسک است؟',
    'ضرر را به دوش کس دیگری «منتقل» می‌کند.',
    ['Transfer','Accept','Avoid','Mitigate'],
    ['انتقال (Transfer)','پذیرش (Accept)','اجتناب (Avoid)','کاهش (Mitigate)'],
    'Transfer shifts the financial impact to a third party, such as an insurer. The risk itself still exists.',
    'Transfer یعنی ضرر مالی را به شرکت بیمه می‌دهی. مثل بیمه‌ی ماشین: تصادف هنوز ممکن است، ولی پولش را بیمه می‌دهد.');

  M(T2,'A company decides to stop storing customer credit card numbers at all, removing that breach risk. Which strategy is this?',
    'یک شرکت تصمیم می‌گیرد اصلاً شماره‌ی کارت مشتری‌ها را ذخیره نکند تا خطر نشت آن کلاً از بین برود. این کدام راهبرد است؟',
    'کار خطرناک را اصلاً انجام نده.',
    ['Avoid','Transfer','Accept','Mitigate'],
    ['اجتناب (Avoid)','انتقال','پذیرش','کاهش'],
    'Avoidance eliminates the risk by stopping the activity that causes it.',
    'Avoid یعنی کار خطرناک را کنار بگذاری. اگر نمی‌خواهی در دریا غرق شوی، شنا نکن. داده‌ای که نداری، دزدیده هم نمی‌شود.');

  M(T2,'A company deploys MFA to reduce the chance of stolen passwords being used. Which strategy is this?',
    'یک شرکت MFA راه می‌اندازد تا احتمال استفاده از رمزهای دزدیده‌شده کم شود. این کدام راهبرد است؟',
    'یک کنترل اضافه کن تا ریسک «کمتر» شود.',
    ['Mitigate','Avoid','Transfer','Accept'],
    ['کاهش (Mitigate)','اجتناب','انتقال','پذیرش'],
    'Mitigation reduces likelihood or impact by adding controls such as MFA, patching or backups.',
    'Mitigate یعنی ریسک را کوچک‌تر کنی، مثل بستن کمربند ایمنی. تصادف ممکن است، ولی آسیب کمتر می‌شود.');

  M(T2,'Building redundancy for a cheap printer would cost more than simply replacing it if it fails, so management signs off on the risk. Which strategy is this?',
    'ساختن یدکی برای یک پرینتر ارزان گران‌تر از عوض کردنش در صورت خرابی است، پس مدیریت ریسک را امضا و قبول می‌کند. این کدام راهبرد است؟',
    'قبولش کن.',
    ['Accept','Mitigate','Transfer','Avoid'],
    ['پذیرش (Accept)','کاهش','انتقال','اجتناب'],
    'Acceptance acknowledges the risk without action, usually when mitigation costs more than the possible loss. It may be documented as an exemption or exception.',
    'Accept یعنی «اشکالی ندارد، اگر شد، شد». وقتی هزینه‌ی محافظت از خود ضرر بیشتر باشد، منطقی است. ولی باید مکتوب و امضا شود.');

  M(T2,'Which document tracks all identified risks with their owners, key risk indicators and thresholds?',
    'کدام سند همه‌ی ریسک‌های شناسایی‌شده را با صاحب ریسک، شاخص‌های کلیدی و آستانه‌ها ثبت می‌کند؟',
    'دفتر ثبت ریسک.',
    ['Risk register','Service-level agreement','Acceptable use policy','Chain of custody form'],
    ['دفتر ثبت ریسک (Risk register)','SLA','AUP','فرم زنجیره‌ی نگه‌داری'],
    'A risk register is a central record of risks, including KRIs, risk owners and thresholds that trigger action.',
    'Risk register مثل دفتر نمره‌ی کلاس است ولی برای ریسک‌ها: هر ریسک، صاحبش، شاخص هشدار (KRI) و حدی که اگر از آن رد شد باید کاری کرد.');

  M(T2,'A startup is willing to take big risks to enter new markets quickly. Which risk appetite is this?',
    'یک استارتاپ حاضر است ریسک‌های بزرگ بکند تا سریع وارد بازارهای جدید شود. این کدام نوع اشتهای ریسک است؟',
    'گسترش‌طلب.',
    ['Expansionary','Conservative','Neutral','Zero'],
    ['گسترش‌طلب (Expansionary)','محافظه‌کار (Conservative)','متعادل (Neutral)','صفر'],
    'Risk appetite: expansionary accepts higher risk for greater reward; conservative prioritizes stability; neutral takes calculated risks.',
    'Expansionary = جسور، برای سود بیشتر ریسک بیشتر. Conservative = محتاط، ثبات مهم‌تر است (مثل بانک). Neutral = وسط.');

  M(T2,'What is the difference between risk appetite and risk tolerance?',
    'فرق risk appetite و risk tolerance چیست؟',
    'یکی «چقدر می‌خواهی»، یکی «چقدر انحراف قبول است».',
    ['Appetite is the risk you are willing to take for your goals; tolerance is the acceptable variation around it','They are exactly the same','Tolerance is only for insurance','Appetite is a legal requirement'],
    ['Appetite یعنی چقدر ریسک برای هدف‌هایت قبول می‌کنی؛ Tolerance یعنی چقدر انحراف از آن قابل قبول است','دقیقاً یکی هستند','Tolerance فقط برای بیمه است','Appetite یک الزام قانونی است'],
    'Risk appetite is the overall level of risk an organization accepts in pursuit of goals. Risk tolerance is the acceptable variation in performance relative to those objectives.',
    'Appetite مثل اینکه بگویی «من غذای کمی تند دوست دارم». Tolerance یعنی «تا این حد تندی را تحمل می‌کنم، بیشتر نه».');

  M(T2,'A quarterly review that checks all risks on a fixed schedule is which type of risk assessment?',
    'بررسی‌ای که هر سه ماه یک بار همه‌ی ریسک‌ها را طبق برنامه چک می‌کند، کدام نوع ارزیابی ریسک است؟',
    'تکرارشونده.',
    ['Recurring','Ad hoc','One-time','Continuous'],
    ['تکرارشونده (Recurring)','موردی (Ad hoc)','یک‌باره (One-time)','پیوسته (Continuous)'],
    'Recurring = scheduled at regular intervals. Ad hoc = in response to an event. One-time = for a unique project. Continuous = built into daily monitoring.',
    'Recurring = طبق برنامه، مثلاً هر فصل. Ad hoc = وقتی اتفاقی افتاد. One-time = فقط برای یک پروژه. Continuous = همیشه و هر روز.');

  M(T3,'A payment system must be back online within 2 hours of an outage to avoid major revenue loss. Which metric is this?',
    'سیستم پرداخت باید حداکثر ۲ ساعت بعد از قطعی دوباره کار کند تا ضرر بزرگ پیش نیاید. این کدام معیار است؟',
    'زمان برگشت.',
    ['RTO (Recovery Time Objective)','RPO (Recovery Point Objective)','MTBF','ARO'],
    ['RTO (حداکثر زمان برگشت)','RPO (حداکثر داده‌ی از دست رفته)','MTBF','ARO'],
    'RTO is the maximum acceptable downtime before significant impact occurs.',
    'RTO = «حداکثر چقدر می‌توانیم خاموش باشیم». اینجا ۲ ساعت.');

  M(T3,'The business can lose at most 15 minutes of data, so backups must run at least every 15 minutes. Which metric is this?',
    'شرکت حداکثر می‌تواند ۱۵ دقیقه داده از دست بدهد، پس پشتیبان باید حداقل هر ۱۵ دقیقه گرفته شود. این کدام معیار است؟',
    'نقطه‌ای که به آن برمی‌گردی.',
    ['RPO','RTO','MTTR','SLE'],
    ['RPO (حداکثر داده‌ی از دست رفته)','RTO','MTTR','SLE'],
    'RPO is the maximum acceptable data loss measured in time. It drives backup frequency.',
    'RPO = «حداکثر چقدر داده می‌توانیم از دست بدهیم». اگر RPO = ۱۵ دقیقه است، باید هر ۱۵ دقیقه پشتیبان بگیری. RTO درباره‌ی «زمان» است، RPO درباره‌ی «داده».');

  M(T3,'On average it takes 4 hours to fix and restore a failed router. Which metric is this?',
    'به طور میانگین ۴ ساعت طول می‌کشد یک روتر خراب تعمیر و دوباره راه‌اندازی شود. این کدام معیار است؟',
    'Repair = تعمیر.',
    ['MTTR (Mean Time to Repair)','MTBF (Mean Time Between Failures)','RPO','ALE'],
    ['MTTR (میانگین زمان تعمیر)','MTBF (میانگین زمان بین خرابی‌ها)','RPO','ALE'],
    'MTTR is the average time to repair and restore a failed component. Lower MTTR is better.',
    'MTTR = میانگین زمان تعمیر. هر چه کمتر، بهتر.');

  M(T3,'A hard drive model runs on average 100,000 hours before it fails. Which metric is this, and is higher better or worse?',
    'یک مدل هارد به طور میانگین ۱۰۰٬۰۰۰ ساعت کار می‌کند تا خراب شود. این کدام معیار است و بیشتر بودنش خوب است یا بد؟',
    'زمان «بین» خرابی‌ها.',
    ['MTBF; higher is better','MTTR; higher is better','MTBF; lower is better','RTO; lower is better'],
    ['MTBF؛ بیشتر بهتر است','MTTR؛ بیشتر بهتر است','MTBF؛ کمتر بهتر است','RTO؛ کمتر بهتر است'],
    'MTBF is the average operating time between failures. Higher MTBF means a more reliable system.',
    'MTBF = میانگین زمانی که دستگاه بدون خرابی کار می‌کند. هر چه بیشتر، دستگاه قابل‌اعتمادتر. MTTR کم خوب است، MTBF زیاد خوب است.');

  M(T3,'What is the purpose of a Business Impact Analysis (BIA)?',
    'هدف تحلیل اثر بر کسب‌وکار (BIA) چیست؟',
    'اگر این سیستم بخوابد، چه به سر کار می‌آید؟',
    ['Predict the effects of disruptions and prioritize recovery','Find every software bug','Choose a new logo','Test employees with phishing emails'],
    ['پیش‌بینی اثر اختلال‌ها و اولویت‌بندی بازیابی','پیدا کردن همه‌ی باگ‌های نرم‌افزار','انتخاب لوگوی جدید','امتحان کارمندها با ایمیل فیشینگ'],
    'A BIA predicts how disruptions affect operations and sets recovery priorities using metrics like RTO, RPO, MTTR and MTBF. It feeds DR and BC planning.',
    'BIA می‌پرسد: اگر هر سیستم خراب شود، چقدر ضرر می‌کنیم و کدام را باید اول درست کنیم؟ جواب‌ها برنامه‌ی بازیابی را می‌سازند.');

  M(T4,'Attackers break into a small HVAC vendor that has remote access to a retailer\'s network, and then reach the retailer\'s payment systems. Which risk is this?',
    'هکرها وارد یک شرکت کوچک تعمیر تهویه می‌شوند که به شبکه‌ی یک فروشگاه بزرگ دسترسی از راه دور دارد، و از آنجا به سیستم پرداخت فروشگاه می‌رسند. این کدام ریسک است؟',
    'از راه «شخص ثالث».',
    ['Third-party (vendor access) risk','Privilege creep','Data sovereignty','False negative'],
    ['ریسک شخص ثالث (دسترسی فروشنده)','جمع شدن دسترسی','حاکمیت داده','False negative'],
    'Third parties with access can be exploited by attackers. Supply chain compromises can cascade into the organization.',
    'ریسک شخص ثالث یعنی دزد از در پشتی که به پیمانکار داده‌ای وارد می‌شود. امنیت تو به اندازه‌ی ضعیف‌ترین شریکت است.');

  M(T4,'A contract clause lets the company inspect a vendor\'s security practices at any time. What is it called?',
    'یک بند در قرارداد به شرکت اجازه می‌دهد هر وقت خواست شیوه‌های امنیتی فروشنده را بازرسی کند. اسمش چیست؟',
    'حق ممیزی.',
    ['Right-to-audit clause','Non-disclosure agreement','Memorandum of understanding','Acceptable use policy'],
    ['بند حق ممیزی (Right-to-audit)','NDA','MOU','AUP'],
    'A right-to-audit clause gives contractual authority to inspect vendor security practices.',
    'Right-to-audit یعنی در قرارداد نوشته‌ای «من حق دارم بیایم و امنیت تو را بازرسی کنم».');

  M(T4,'Before signing a vendor, the company reviews its financial stability, operational maturity and security capabilities. What is this?',
    'قبل از قرارداد با یک فروشنده، شرکت وضعیت مالی، پختگی کاری و توان امنیتی او را بررسی می‌کند. این چیست؟',
    'تحقیق قبل از انتخاب.',
    ['Due diligence','Due care','Chain of custody','Legal hold'],
    ['بررسی لازم قبل از تصمیم (Due diligence)','مراقبت لازم (Due care)','زنجیره‌ی نگه‌داری مدرک','نگه‌داری قانونی'],
    'Due diligence is a comprehensive review of a vendor\'s finances, maturity and security before engagement. Conflict-of-interest checks and compliance verification are also part of selection.',
    'Due diligence یعنی قبل از اینکه با کسی شریک شوی، خوب تحقیق کنی؛ مثل اینکه قبل از خرید ماشین دست دوم، آن را پیش مکانیک ببری.');

  M(T4,'Which agreement defines a vendor\'s uptime, response times and penalties if it misses them?',
    'کدام توافق‌نامه زمان روشن بودن سرویس، زمان پاسخ و جریمه در صورت کوتاهی فروشنده را مشخص می‌کند؟',
    'سطح سرویس.',
    ['SLA (Service-Level Agreement)','NDA','MOU','BPA'],
    ['SLA (توافق سطح خدمات)','NDA','MOU','BPA'],
    'An SLA defines performance metrics, availability, response times and penalties for non-compliance.',
    'SLA مثل قول پیتزافروشی است: «۳۰ دقیقه‌ای می‌رسانیم، وگرنه مجانی». اعداد دقیق و جریمه دارد.');

  M(T4,'Two companies want to write down their shared intentions before a formal contract, without it being legally binding. Which document fits?',
    'دو شرکت می‌خواهند قبل از قرارداد رسمی، قصد مشترکشان را بنویسند بدون اینکه از نظر قانونی الزام‌آور باشد. کدام سند مناسب است؟',
    'تفاهم‌نامه.',
    ['MOU (Memorandum of Understanding)','SLA','NDA','BPA'],
    ['MOU (تفاهم‌نامه)','SLA','NDA','BPA'],
    'An MOU is a non-binding document expressing mutual intentions, often before formal contracts.',
    'MOU تفاهم‌نامه است: «ما قصد داریم با هم کار کنیم». هنوز قرارداد محکم نیست و الزام قانونی ندارد.');

  M(T4,'Which agreement legally stops a vendor from sharing your confidential information?',
    'کدام توافق‌نامه از نظر قانونی جلوی فاش کردن اطلاعات محرمانه‌ی تو توسط فروشنده را می‌گیرد؟',
    'عدم افشا.',
    ['NDA (Non-Disclosure Agreement)','MOU','SLA','AUP'],
    ['NDA (توافق عدم افشا)','MOU','SLA','AUP'],
    'An NDA legally prohibits unauthorized sharing or use of confidential information.',
    'NDA یعنی «قول می‌دهم رازت را به کسی نگویم» و اگر بگوید، می‌شود از او شکایت کرد.');

  M(T4,'Two firms enter a long-term partnership and write down each side\'s roles, shared obligations and joint security requirements. Which agreement is this?',
    'دو شرکت وارد یک شراکت بلندمدت می‌شوند و نقش هر طرف، تعهدهای مشترک و الزامات امنیتی مشترک را می‌نویسند. کدام توافق‌نامه است؟',
    'توافق «شریک تجاری».',
    ['BPA (Business Partner Agreement)','SLA','NDA','MOU'],
    ['BPA (توافق شریک تجاری)','SLA','NDA','MOU'],
    'A BPA outlines roles, responsibilities and shared obligations in a long-term partnership, often including joint security and compliance requirements.',
    'BPA قرارداد شراکت است: چه کسی چه کاری می‌کند، سود و مسئولیت چطور تقسیم می‌شود.');

  M(T4,'After signing, the company sends vendors yearly security questionnaires and reviews performance scorecards. What is this?',
    'بعد از قرارداد، شرکت هر سال پرسشنامه‌ی امنیتی برای فروشنده‌ها می‌فرستد و کارنامه‌ی عملکردشان را بررسی می‌کند. این چیست؟',
    'بعد از امضا هم ادامه دارد.',
    ['Ongoing vendor monitoring','Due diligence before selection','E-discovery','Penetration testing of your own network'],
    ['پایش مداوم فروشنده','بررسی قبل از انتخاب','E-discovery','تست نفوذ شبکه‌ی خودت'],
    'Vendor monitoring continues for the whole relationship: assessments, performance reviews, incident handling rules and continuous improvement.',
    'پایش فروشنده یعنی بعد از امضا هم چشمت به او باشد؛ مثل اینکه بعد از استخدام کسی، هر سال ارزیابی‌اش کنی.');

  M(T5,'What can happen to an organization that fails to comply with regulations?',
    'سازمانی که قوانین را رعایت نکند، چه اتفاقی ممکن است برایش بیفتد؟',
    'پول، مجوز، آبرو.',
    ['Fines, sanctions, loss of licenses and reputational damage','Automatic tax refunds','Faster network speed','Nothing, compliance is optional'],
    ['جریمه، تحریم، از دست دادن مجوز و آسیب به آبرو','بازگشت خودکار مالیات','شبکه‌ی سریع‌تر','هیچ؛ انطباق اختیاری است'],
    'Non-compliance can bring financial penalties, sanctions, operational restrictions, loss of licenses and severe reputational damage.',
    'اگر قانون را رعایت نکنی: جریمه می‌شوی، ممکن است مجوز کارت را بگیرند، و مشتری‌ها دیگر به تو اعتماد نمی‌کنند.');

  M(T5,'A customer asks a company to permanently delete all of their personal data. Which privacy right is this?',
    'یک مشتری از شرکت می‌خواهد همه‌ی اطلاعات شخصی‌اش را برای همیشه پاک کند. این کدام حق حریم خصوصی است؟',
    'فراموش شدن.',
    ['Right to be forgotten','Right to audit','Legal hold','Data sovereignty'],
    ['حق فراموش شدن','حق ممیزی','نگه‌داری قانونی','حاکمیت داده'],
    'The right to be forgotten lets data subjects request permanent deletion from all systems and backups, subject to legal retention requirements.',
    'حق فراموش شدن یعنی می‌توانی بگویی «اطلاعات مرا پاک کنید» و شرکت باید از همه جا، حتی پشتیبان‌ها، پاکش کند؛ مگر قانون بگوید باید مدتی نگهش دارند.');

  M(T5,'Why should an organization keep a data inventory and retention schedule for personal data?',
    'چرا سازمان باید فهرست داده‌ها و برنامه‌ی مدت نگه‌داری برای داده‌های شخصی داشته باشد؟',
    'بدانی چه داری و تا کی نگهش داری.',
    ['To know what personal data it holds and keep it only as long as needed','To keep all data forever','To share data with partners freely','To avoid encrypting data'],
    ['تا بداند چه داده‌ی شخصی دارد و فقط به اندازه‌ی لازم نگهش دارد','تا همه‌ی داده‌ها را برای همیشه نگه دارد','تا داده را آزادانه با شریک‌ها به اشتراک بگذارد','تا داده را رمزگذاری نکند'],
    'A data inventory records what personal data is collected, processed and stored. Retention schedules keep data only as long as necessary, balancing business and legal needs.',
    'اگر ندانی چه داده‌ای کجاست، نمی‌توانی از آن محافظت کنی یا به موقع پاکش کنی. داده‌ای که بی‌دلیل نگه داشته شود فقط خطر نشت را بیشتر می‌کند.');

  M(T5,'Every employee must sign each year that they have read and accept the updated security policies. What is this?',
    'هر کارمند باید هر سال امضا کند که سیاست‌های امنیتی به‌روزشده را خوانده و قبول دارد. این چیست؟',
    'تأیید رسمی و امضا.',
    ['Attestation and acknowledgment','Due diligence of a vendor','Right-to-audit clause','Risk transfer'],
    ['تأیید و اقرار (Attestation & acknowledgment)','بررسی فروشنده','بند حق ممیزی','انتقال ریسک'],
    'Attestation and acknowledgment require employees, vendors and partners to formally confirm they understand and accept compliance requirements.',
    'Attestation یعنی امضا کنی که «خواندم، فهمیدم، قبول دارم». بعداً کسی نمی‌تواند بگوید «خبر نداشتم».');

  M(T5,'An organization takes ongoing, reasonable steps such as regular reviews and training to prevent non-compliance. Which concept is this?',
    'یک سازمان مدام کارهای معقولی مثل بازبینی مرتب و آموزش انجام می‌دهد تا قانون‌شکنی پیش نیاید. این کدام مفهوم است؟',
    'مراقبت لازم، در کار روزمره.',
    ['Due care','Risk avoidance','E-discovery','Orchestration'],
    ['مراقبت لازم (Due care)','اجتناب از ریسک','E-discovery','Orchestration'],
    'Due diligence and duty of care are proactive measures (reviews, training, process validation) that show accountability. Due diligence is researching; due care is acting responsibly day to day.',
    'Due diligence = قبل از کار خوب تحقیق کن. Due care = در کار روزانه مسئولانه رفتار کن. مثل پدر و مادری که هم قبل از خرید صندلی ماشین تحقیق می‌کنند، هم هر روز کمربند بچه را می‌بندند.');

  M(T5,'Which is an example of external compliance reporting?',
    'کدام نمونه‌ی گزارش انطباق «بیرونی» است؟',
    'برای چه کسی بیرون از شرکت؟',
    ['A formal submission to a regulator','A self-assessment for senior leadership','A team meeting','An internal email reminder'],
    ['ارسال رسمی گزارش به نهاد ناظر','خودارزیابی برای مدیران ارشد','جلسه‌ی تیم','ایمیل یادآوری داخلی'],
    'Internal reporting goes to leadership and compliance committees. External reporting is formal submissions to regulators, industry bodies and oversight authorities.',
    'گزارش داخلی برای مدیران خود شرکت است. گزارش بیرونی برای دولت و نهادهای ناظر است.');

  M(T6,'An independent CPA firm formally declares that a cloud provider\'s controls meet SOC 2 criteria. What type of audit is this?',
    'یک شرکت حسابرسی مستقل رسماً اعلام می‌کند که کنترل‌های یک ارائه‌دهنده‌ی ابری معیارهای SOC 2 را دارند. این کدام نوع ممیزی است؟',
    'گواهی رسمی از طرف مستقل.',
    ['Attestation','Self-assessment','Internal audit','Tabletop exercise'],
    ['گواهی رسمی (Attestation)','خودارزیابی','ممیزی داخلی','تمرین روی میز'],
    'Attestation is a formal declaration by an independent party that controls meet defined standards, as in SOC 1, SOC 2 or ISO certification.',
    'Attestation یعنی یک طرف مستقل و معتبر «شهادت» می‌دهد که کنترل‌های تو درست است؛ مثل کارنامه‌ی رسمی که مدرسه امضا می‌کند.');

  M(T6,'Staff review their own controls to get ready before the external auditors arrive. What is this?',
    'کارمندان خودشان کنترل‌هایشان را بررسی می‌کنند تا قبل از آمدن ممیزهای بیرونی آماده باشند. این چیست؟',
    'خودت، خودت را می‌سنجی.',
    ['Self-assessment','Third-party audit','Regulatory audit','Attestation'],
    ['خودارزیابی (Self-assessment)','ممیزی شخص ثالث','ممیزی نهاد ناظر','گواهی رسمی'],
    'Self-assessments are internal reviews by the organization\'s own staff. They are cost-effective and help prepare for external audits.',
    'Self-assessment مثل امتحان آزمایشی است که خودت در خانه می‌دهی تا برای امتحان اصلی آماده شوی.');

  M(T6,'A government agency requires a hospital to undergo a HIPAA audit, with fines if it fails. What type of audit is this?',
    'یک نهاد دولتی بیمارستانی را مجبور به ممیزی HIPAA می‌کند و در صورت رد شدن جریمه دارد. این کدام نوع ممیزی است؟',
    'به دستور قانون.',
    ['Regulatory audit','Self-assessment','Internal audit','Phishing simulation'],
    ['ممیزی نظارتی (Regulatory)','خودارزیابی','ممیزی داخلی','شبیه‌سازی فیشینگ'],
    'Regulatory audits are mandated by governing bodies to confirm compliance with laws such as GDPR, HIPAA or PCI DSS. Failing can bring fines or legal consequences.',
    'ممیزی نظارتی را دولت یا نهاد قانونی اجبار می‌کند. اگر رد شوی، جریمه داری.');

  M(T6,'A penetration tester gets full network diagrams and source code before testing. Which environment type is this?',
    'یک تست‌کننده‌ی نفوذ قبل از تست، نقشه‌ی کامل شبکه و کد منبع را می‌گیرد. این کدام نوع محیط است؟',
    'همه چیز «شناخته‌شده» است.',
    ['Known environment (white-box)','Unknown environment (black-box)','Partially known environment (gray-box)','Passive reconnaissance'],
    ['محیط شناخته‌شده (White-box)','محیط ناشناخته (Black-box)','محیط نیمه‌شناخته (Gray-box)','شناسایی غیرفعال'],
    'Known environment = full knowledge (white-box). Partially known = limited info (gray-box). Unknown = no knowledge, like an outside attacker (black-box).',
    'Known = همه چیز را می‌داند (جعبه‌سفید). Partially known = کمی می‌داند (جعبه‌خاکستری). Unknown = هیچ نمی‌داند (جعبه‌سیاه).');

  M(T6,'A tester looks up WHOIS records and searches public social media about the target without touching its systems. What is this?',
    'یک تست‌کننده رکوردهای WHOIS را نگاه می‌کند و در شبکه‌های اجتماعی عمومی درباره‌ی هدف جستجو می‌کند، بدون اینکه به سیستم‌هایش دست بزند. این چیست؟',
    'بدون تماس مستقیم.',
    ['Passive reconnaissance','Active reconnaissance','Defensive testing','Physical testing'],
    ['شناسایی غیرفعال (Passive)','شناسایی فعال (Active)','تست دفاعی','تست فیزیکی'],
    'Passive reconnaissance gathers information without engaging the target (OSINT, WHOIS). Active reconnaissance interacts directly, such as port scanning.',
    'Passive = از دور با دوربین نگاه کنی؛ هدف متوجه نمی‌شود. Active = بروی در بزنی (port scan)؛ ممکن است متوجه شود.');

  M(T6,'Attackers (red team) and defenders (blue team) work together in real time so defenders learn from each attack. Which test approach is this?',
    'مهاجم‌ها (تیم قرمز) و مدافع‌ها (تیم آبی) همزمان با هم کار می‌کنند تا مدافع‌ها از هر حمله یاد بگیرند. این کدام نوع تست است؟',
    'قرمز + آبی = بنفش.',
    ['Integrated (purple teaming)','Physical','Passive reconnaissance','Unknown environment only'],
    ['یکپارچه (تیم بنفش / Purple team)','فیزیکی','شناسایی غیرفعال','فقط محیط ناشناخته'],
    'Integrated testing combines offensive and defensive exercises in real time, known as purple teaming.',
    'Purple team یعنی تیم حمله و تیم دفاع کنار هم کار می‌کنند. قرمز و آبی با هم بنفش می‌شوند.');

  M(T6,'A tester tries to tailgate into the building and clone employee badges. Which type of penetration test is this?',
    'یک تست‌کننده سعی می‌کند پشت سر کارمندان وارد ساختمان شود و کارت‌هایشان را کپی کند. این کدام نوع تست نفوذ است؟',
    'دنیای واقعی، نه شبکه.',
    ['Physical','Defensive','Passive','Known environment'],
    ['فیزیکی (Physical)','دفاعی','غیرفعال','محیط شناخته‌شده'],
    'Physical penetration tests evaluate building access, badge systems and other physical controls.',
    'تست فیزیکی یعنی امتحان کنی آیا می‌شود با پا وارد ساختمان شد؛ قفل‌ها، کارت‌ها و نگهبان‌ها را می‌سنجد.');

  M(T7,'Why do organizations run security awareness training?',
    'چرا سازمان‌ها آموزش آگاهی امنیتی برگزار می‌کنند؟',
    'ضعیف‌ترین حلقه کیست؟',
    ['To reduce human-factor risk by adding a human layer to defense in depth','To replace all firewalls','Because training removes the need for MFA','To increase alert fatigue'],
    ['تا ریسک خطای انسانی کم شود و یک لایه‌ی انسانی به دفاع اضافه شود','تا جای همه‌ی فایروال‌ها را بگیرد','چون آموزش نیاز به MFA را حذف می‌کند','تا هشدارهای بیشتری بیاید'],
    'Awareness programs teach people to recognize and respond to threats. They complement technical controls as part of defense in depth.',
    'بیشتر حمله‌ها با یک آدم شروع می‌شوند که روی لینک بد کلیک می‌کند. آموزش، کارمندها را به یک لایه‌ی دفاعی تبدیل می‌کند.');

  M(T7,'Which is a common sign of a phishing email?',
    'کدام یک نشانه‌ی رایج ایمیل فیشینگ است؟',
    'فوری، عجیب، اشتباه تایپی.',
    ['An urgent request from a mismatched sender address with a generic greeting','A message from a coworker you were expecting','A newsletter you subscribed to','An email with a correct, known sender and no links'],
    ['درخواست فوری از آدرس فرستنده‌ی عجیب با سلام کلی','پیامی از همکاری که منتظرش بودی','خبرنامه‌ای که عضوش شدی','ایمیل از فرستنده‌ی درست و شناخته‌شده بدون لینک'],
    'Phishing signs: mismatched sender addresses, urgency or too-good-to-be-true offers, poor grammar, generic greetings and links whose real URL differs (hover to check).',
    'نشانه‌های فیشینگ: آدرس فرستنده کمی عجیب است، می‌گوید «فوری!»، غلط املایی دارد، می‌نویسد «مشتری عزیز» به جای اسمت، و لینکش به جای دیگری می‌رود. قبل از کلیک، موس را روی لینک نگه دار.');

  M(T7,'An employee receives a suspicious email. What should they do?',
    'یک کارمند ایمیل مشکوکی دریافت می‌کند. چه کار باید بکند؟',
    'پاکش نکن؛ گزارشش بده.',
    ['Report it with the reporting button and keep it in its original form','Forward it to all coworkers to warn them','Reply and ask if it is real','Delete it immediately and tell no one'],
    ['با دکمه‌ی گزارش اعلام کند و ایمیل را به همان شکل اصلی نگه دارد','برای همه‌ی همکارها بفرستد تا خبردار شوند','جواب بدهد و بپرسد واقعی است یا نه','فوراً پاکش کند و به کسی نگوید'],
    'Use the designated reporting tool to alert the security team, and preserve the email in its original format for investigation.',
    'از دکمه‌ی «گزارش فیشینگ» استفاده کن و ایمیل را پاک نکن، چون تیم امنیت برای تحقیق به همان ایمیل اصلی نیاز دارد.');

  M(T7,'Why do companies send fake phishing emails to their own staff?',
    'چرا شرکت‌ها برای کارمندان خودشان ایمیل فیشینگ جعلی می‌فرستند؟',
    'امتحان تمرینی.',
    ['To test readiness and give targeted training to people who click','To steal employee passwords','To punish employees publicly','To test the mail server speed'],
    ['تا آمادگی را بسنجند و به کسانی که کلیک می‌کنند آموزش هدفمند بدهند','تا رمز کارمندها را بدزدند','تا کارمندها را جلوی همه تنبیه کنند','تا سرعت سرور ایمیل را تست کنند'],
    'Phishing simulations measure readiness, identify who needs help and reinforce training.',
    'شبیه‌سازی فیشینگ مثل مانور آتش‌نشانی است: امتحان می‌کنی مردم درست واکنش نشان می‌دهند یا نه، و به کسانی که اشتباه کردند دوباره آموزش می‌دهی.');

  M(T7,'An employee accidentally emails a client file to the wrong person. How is this behavior classified?',
    'یک کارمند به اشتباه فایل یک مشتری را برای آدم اشتباهی ایمیل می‌کند. این رفتار در کدام دسته است؟',
    'عمدی نبود.',
    ['Unintentional behavior','Malicious insider attack','Passive reconnaissance','Risk transfer'],
    ['رفتار غیرعمدی','حمله‌ی عمدی از داخل','شناسایی غیرفعال','انتقال ریسک'],
    'Unintentional behaviors include misdirected emails, improper sharing or accidental access to restricted systems. They still create risk and should be detected.',
    'همه‌ی خطرها از آدم بد نیست؛ گاهی آدم خوب اشتباه می‌کند. ایمیل به آدرس اشتباه، رفتار غیرعمدی است ولی هنوز می‌تواند داده را لو بدهد.');

  M(T7,'An employee finds a USB stick labeled "Salaries 2025" in the parking lot. What does good training say to do?',
    'یک کارمند یک USB با برچسب «حقوق‌ها ۲۰۲۵» در پارکینگ پیدا می‌کند. آموزش درست می‌گوید چه کند؟',
    'کنجکاوی = تله.',
    ['Do not plug it in; hand it to the security team','Plug it in to find the owner','Plug it into a home computer instead','Copy the files to the shared drive'],
    ['به کامپیوتر وصلش نکند و به تیم امنیت تحویل دهد','وصلش کند تا صاحبش را پیدا کند','به جای کامپیوتر شرکت، به کامپیوتر خانه وصل کند','فایل‌ها را روی درایو اشتراکی کپی کند'],
    'Unknown removable media and even charging cables can carry malware. Training covers safe use of removable media and cables.',
    'هکرها عمداً USB آلوده را جایی می‌اندازند و یک برچسب جذاب رویش می‌زنند تا کسی از کنجکاوی وصلش کند. هیچ‌وقت USB ناشناس را وصل نکن.');

  M(T7,'Which practice best secures employees working from home?',
    'کدام کار برای امنیت کارمندانی که از خانه کار می‌کنند بهتر است؟',
    'اتصال امن + دو مرحله‌ای.',
    ['VPN, endpoint security and MFA for all remote connections','Turning off the laptop firewall','Using the same password for home Wi-Fi and work','Sharing the work laptop with family members'],
    ['VPN، امنیت دستگاه و MFA برای همه‌ی اتصال‌های از راه دور','خاموش کردن فایروال لپ‌تاپ','رمز یکسان برای وای‌فای خانه و کار','استفاده‌ی مشترک خانواده از لپ‌تاپ کاری'],
    'Hybrid and remote work need endpoint security, VPNs and MFA, plus clear workspace security policies to protect data outside the office.',
    'برای کار از خانه: VPN (تونل امن)، آنتی‌ویروس و EDR روی لپ‌تاپ، MFA برای ورود، و اینکه لپ‌تاپ کاری مال خودت باشد، نه همه‌ی خانواده.');

  /* ================= MATCHING (PBQ) ================= */
  P(T2,'Risk strategies','Match each action to the correct risk management strategy.',
    'هر کار را به راهبرد درست مدیریت ریسک وصل کنید.',
    ['Transfer','Accept','Avoid','Mitigate'],['انتقال (Transfer)','پذیرش (Accept)','اجتناب (Avoid)','کاهش (Mitigate)'],
    [['Buy cyber insurance',0,'خرید بیمه‌ی سایبری'],
     ['Sign off on a low risk because fixing it costs more than the loss',1,'امضای یک ریسک کوچک چون درست کردنش گران‌تر از ضررش است'],
     ['Stop collecting customer card numbers',2,'دیگر شماره‌ی کارت مشتری جمع نکن'],
     ['Deploy MFA and patch servers',3,'MFA راه بینداز و سرورها را وصله کن'],
     ['Outsource the risk to a vendor through a contract with penalties',0,'ریسک را با قرارداد جریمه‌دار به یک فروشنده بسپار']],
    [['Shift it to someone else','به کس دیگر بده'],['Live with it','با آن کنار بیا'],['Stop the activity','کار را کنار بگذار'],['Make it smaller','کوچکش کن']],
    'Transfer = insurance or contracts. Accept = documented decision to live with it. Avoid = stop the activity. Mitigate = add controls.',
    'Transfer = بیمه یا قرارداد. Accept = قبولش کن و بنویس. Avoid = کار را انجام نده. Mitigate = کنترل اضافه کن تا کوچک شود.');

  P(T4,'Third-party agreements','Match each description to the correct agreement.',
    'هر توضیح را به توافق‌نامه‌ی درستش وصل کنید.',
    ['SLA','NDA','BPA','MOU'],['SLA','NDA','BPA','MOU'],
    [['99.9% uptime and a 1-hour response, with penalties',0,'۹۹٫۹٪ روشن بودن و پاسخ در ۱ ساعت، با جریمه'],
     ['Do not share our confidential product plans',1,'برنامه‌های محرمانه‌ی محصول ما را به کسی نگو'],
     ['Roles and shared security duties in a long-term partnership',2,'نقش‌ها و وظایف امنیتی مشترک در یک شراکت بلندمدت'],
     ['Non-binding statement of shared intentions before a contract',3,'بیان غیرالزام‌آور قصد مشترک، قبل از قرارداد']],
    [['Performance and penalties','عملکرد و جریمه'],['Keep secrets','حفظ راز'],['Long-term partnership','شراکت بلندمدت'],['Non-binding intent','قصد بدون الزام']],
    'SLA = service levels and penalties. NDA = confidentiality. BPA = partnership roles. MOU = non-binding intentions.',
    'SLA = قول سرویس با جریمه. NDA = راز نگه دار. BPA = قرارداد شراکت. MOU = تفاهم‌نامه‌ی بدون الزام.');

  P(T3,'Risk and recovery metrics','Match each statement to the correct metric.',
    'هر جمله را به معیار درستش وصل کنید.',
    ['SLE','ARO','ALE','RTO','RPO','MTBF'],['SLE','ARO','ALE','RTO','RPO','MTBF'],
    [['One stolen laptop costs $2,000',0,'یک لپ‌تاپ دزدیده‌شده ۲۰۰۰ دلار ضرر دارد'],
     ['This happens twice a year',1,'این سالی دو بار اتفاق می‌افتد'],
     ['$4,000 expected loss per year',2,'۴۰۰۰ دلار ضرر مورد انتظار در سال'],
     ['The system must be back within 2 hours',3,'سیستم باید در ۲ ساعت برگردد'],
     ['We can lose at most 15 minutes of data',4,'حداکثر ۱۵ دقیقه داده می‌توانیم از دست بدهیم'],
     ['The disk runs 100,000 hours on average before failing',5,'هارد به طور میانگین ۱۰۰٬۰۰۰ ساعت کار می‌کند تا خراب شود']],
    [['Loss from one event','ضرر یک بار'],['Times per year','بار در سال'],['SLE x ARO','SLE × ARO'],['Max downtime','حداکثر زمان خاموشی'],['Max data loss','حداکثر داده‌ی از دست رفته'],['Reliability','قابلیت اطمینان']],
    'SLE = one loss. ARO = yearly frequency. ALE = SLE x ARO. RTO = time to recover. RPO = data you can lose. MTBF = time between failures.',
    'SLE = ضرر یک بار. ARO = چند بار در سال. ALE = ضرب این دو. RTO = زمان برگشت. RPO = داده‌ی از دست رفته. MTBF = زمان بین خرابی‌ها.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['12']={t:['Governance, risk, compliance & awareness','حاکمیت، ریسک، انطباق و آگاهی امنیتی'],b:[
    PP('This module is about the "management side" of security: who makes the rules, how risks are measured in money, how partners are checked, which laws apply, how audits prove it all works, and how people are trained not to be the weak link.',
      'این بخش درباره‌ی «طرف مدیریتی» امنیت است: چه کسی قانون می‌گذارد، ریسک را چطور با پول اندازه می‌گیریم، شریک‌ها را چطور بررسی می‌کنیم، کدام قانون‌ها اعمال می‌شوند، ممیزی چطور ثابت می‌کند همه چیز درست کار می‌کند، و آدم‌ها را چطور آموزش می‌دهیم که ضعیف‌ترین حلقه نباشند.'),

    H('Governance: who decides','حاکمیت: چه کسی تصمیم می‌گیرد'),
    L([['Accountability: who answers for decisions. Responsibility: who owns each task. Oversight: who checks it works.','پاسخگویی: چه کسی جواب تصمیم را می‌دهد. مسئولیت: هر کار مال کیست. نظارت: چه کسی چک می‌کند درست کار می‌کند.'],
       ['Must align with laws (GDPR, HIPAA, PIPEDA), regulations and standards (PCI DSS, ISO 27001) and internal goals.','باید با قانون (GDPR، HIPAA، PIPEDA)، استانداردهای صنعت (PCI DSS، ISO 27001) و هدف‌های خود شرکت هماهنگ باشد.']]),
    TB([['Document','سند'],['Answers','جواب می‌دهد'],['Example','مثال']],[
      [['Policy','Policy (سیاست)'],['WHAT must be done (high level)','«چه» باید بشود (کلی)'],['AUP, information security policy, BCP, DRP, incident response, SDLC, change management','AUP، سیاست امنیت اطلاعات، BCP، DRP، پاسخ به حادثه، SDLC، مدیریت تغییر']],
      [['Standard','Standard (استاندارد)'],['Exact, measurable rules','معیار دقیق و قابل اندازه‌گیری'],['Passwords 14+ characters; AES-256','رمز حداقل ۱۴ حرف؛ رمزگذاری AES-256']],
      [['Procedure','Procedure (روش اجرایی)'],['HOW, step by step','«چطور»، قدم‌به‌قدم'],['Change request steps, onboarding/offboarding, playbooks','قدم‌های درخواست تغییر، ورود و خروج کارمند، دستورالعمل حادثه']]]),
    TT('BCP keeps the business running during a disruption. DRP brings the IT systems back afterwards.',
      'BCP = کار را در زمان بحران ادامه بده (حتی با کاغذ و تلفن). DRP = بعد از بحران سیستم‌ها را دوباره راه بینداز.'),
    TB([['Role','نقش'],['Simple idea','به زبان ساده']],[
      [['Owner','Owner (صاحب)'],['Responsible for the asset\'s overall security','صاحب خانه؛ تصمیم‌گیرنده']],
      [['Controller','Controller (کنترل‌کننده)'],['Decides why and how personal data is processed','صاحب رستوران؛ تصمیم می‌گیرد چه بپزند']],
      [['Processor','Processor (پردازشگر)'],['Processes data for the controller (often a vendor)','شرکت پخش؛ طبق دستور کار می‌کند']],
      [['Custodian / steward','Custodian (نگهبان)'],['Protects data day to day: backups, access settings','سرایدار؛ هر روز در را قفل می‌کند']],
      [['DPO (GDPR)','DPO'],['Oversees privacy compliance, talks to regulators','ناظم حریم خصوصی؛ رابط با نهاد ناظر']]]),
    L([['Centralized governance: one body decides, consistent but slower. Decentralized: each unit decides, flexible but needs coordination.','متمرکز: یک رئیس برای همه؛ یکسان ولی کند. غیرمتمرکز: هر واحد رئیس خودش؛ سریع ولی هماهنگی سخت.'],
       ['Scope of laws: local (CCPA, California), national (HIPAA in the US, PIPEDA in Canada), global (GDPR for anyone handling EU residents\' data).','دامنه‌ی قانون‌ها: محلی (CCPA در کالیفرنیا)، ملی (HIPAA در آمریکا، PIPEDA در کانادا)، جهانی (GDPR برای هر کس که داده‌ی اروپایی‌ها را دارد).']]),

    H('Risk management','مدیریت ریسک'),
    PP('Risk management is a never-ending cycle: find risks, measure them, decide what to do, and keep watching. Sources of risk information: threat intelligence, vulnerability scans and audits.',
      'مدیریت ریسک یک چرخه‌ی همیشگی است: ریسک را پیدا کن، اندازه بگیر، تصمیم بگیر چه کنی، و مدام مراقب باش. منبع‌ها: خبر تهدید، اسکن آسیب‌پذیری و ممیزی.'),
    L([['Assessment types: ad hoc (after an event), recurring (scheduled, e.g. quarterly), one-time (a single project), continuous (built into daily monitoring).','نوع ارزیابی: Ad hoc (بعد از یک اتفاق)، Recurring (طبق برنامه، مثلاً هر فصل)، One-time (فقط برای یک پروژه)، Continuous (همیشه، هر روز).'],
       ['Qualitative = words (low, medium, high). Quantitative = numbers and money.','Qualitative = با کلمه (کم، متوسط، زیاد). Quantitative = با عدد و پول.']]),
    TB([['Metric','معیار'],['Meaning','یعنی'],['Example','مثال']],[
      [['EF','EF'],['Percentage of the asset lost in one event','چند درصد خراب می‌شود'],['Fire destroys 40% of a server','آتش ۴۰٪ سرور را خراب می‌کند']],
      [['SLE','SLE'],['Money lost in ONE event = asset value x EF','ضرر یک بار = ارزش × EF'],['Laptop $2,000','لپ‌تاپ ۲۰۰۰ دلار']],
      [['ARO','ARO'],['Times per year','چند بار در سال'],['Twice a year = 2; once in 10 years = 0.1','سالی دو بار = ۲؛ هر ده سال یک بار = ۰٫۱']],
      [['ALE','ALE'],['Yearly expected loss = SLE x ARO','ضرر سالانه = SLE × ARO'],['$2,000 x 2 = $4,000','۲۰۰۰ × ۲ = ۴۰۰۰ دلار']]]),
    TT('Worked example: server worth $50,000, EF 40%, flood every 10 years. SLE = $20,000. ARO = 0.1. ALE = $2,000 per year. If a control costs more than $2,000 a year, it may not be worth it.',
      'مثال: سرور ۵۰٬۰۰۰ دلاری، EF = ۴۰٪، سیل هر ده سال. SLE = ۲۰٬۰۰۰. ARO = ۰٫۱. ALE = ۲۰۰۰ دلار در سال. اگر محافظت سالی بیشتر از ۲۰۰۰ دلار خرج دارد، شاید ارزشش را نداشته باشد.'),
    L([['Risk register: list of risks with owners, KRIs (key risk indicators) and thresholds that trigger action.','Risk register: دفتر ریسک‌ها با صاحب هر ریسک، شاخص هشدار (KRI) و حدی که اگر رد شد باید کاری کرد.'],
       ['Risk appetite: how much risk you will take for your goals (expansionary, neutral, conservative). Risk tolerance: how much variation around that is acceptable.','Risk appetite: چقدر ریسک برای هدف‌هایت قبول می‌کنی (جسور، متعادل، محتاط). Risk tolerance: چقدر انحراف از آن قابل تحمل است.']]),
    TB([['Strategy','راهبرد'],['Means','یعنی'],['Example','مثال']],[
      [['Transfer','Transfer (انتقال)'],['Shift the cost to someone else','ضرر را به دیگری بده'],['Cyber insurance','بیمه‌ی سایبری']],
      [['Accept','Accept (پذیرش)'],['Live with it (documented), when fixing costs more','قبولش کن و بنویس، وقتی درمان گران‌تر است'],['Cheap printer failure','خراب شدن پرینتر ارزان']],
      [['Avoid','Avoid (اجتناب)'],['Stop the risky activity','کار خطرناک را انجام نده'],['Do not store card numbers','شماره‌ی کارت ذخیره نکن']],
      [['Mitigate','Mitigate (کاهش)'],['Add controls to reduce likelihood or impact','کنترل اضافه کن تا کوچک شود'],['MFA, patching','MFA، وصله']]]),

    H('Business impact analysis (BIA)','تحلیل اثر بر کسب‌وکار (BIA)'),
    TB([['Metric','معیار'],['Question','سؤال'],['Better when','بهتر وقتی']],[
      [['RTO','RTO'],['How long can it be down?','چقدر می‌تواند خاموش باشد؟'],['Met (e.g. back within 2 hours)','رعایت شود (مثلاً ۲ ساعت)']],
      [['RPO','RPO'],['How much data (in time) can we lose?','چقدر داده (به زمان) می‌توانیم از دست بدهیم؟'],['Backups at least that often (e.g. every 15 min)','پشتیبان حداقل به همان فاصله (مثلاً هر ۱۵ دقیقه)']],
      [['MTTR','MTTR'],['Average time to repair','میانگین زمان تعمیر'],['Lower','کمتر']],
      [['MTBF','MTBF'],['Average time between failures','میانگین زمان بین خرابی‌ها'],['Higher','بیشتر']]]),
    TT('RTO = Time. RPO = Point (data). Low MTTR good, high MTBF good.',
      'RTO = زمان برگشت. RPO = داده‌ی از دست رفته. MTTR کم خوب است، MTBF زیاد خوب است.'),

    H('Third-party risk','ریسک شخص ثالث (فروشنده‌ها و شریک‌ها)'),
    PP('Your security is only as strong as your weakest partner. Vendors with access, supply chain weaknesses and vendors holding your data all add risk.',
      'امنیت تو به اندازه‌ی ضعیف‌ترین شریکت است. فروشنده‌ای که به شبکه‌ات دسترسی دارد، ضعف در زنجیره‌ی تأمین، و فروشنده‌ای که داده‌ی تو را نگه می‌دارد، همه ریسک اضافه می‌کنند.'),
    L([['Before signing: due diligence (finances, maturity, security), conflict of interest checks, compliance verification (GDPR, HIPAA, ISO 27001), pen tests, independent reviews.','قبل از امضا: تحقیق کامل (وضع مالی، پختگی، امنیت)، بررسی تضاد منافع، چک کردن رعایت قانون، تست نفوذ، بررسی مستقل.'],
       ['In the contract: right-to-audit clause and security requirements.','در قرارداد: بند حق ممیزی و الزامات امنیتی.'],
       ['After signing: ongoing questionnaires and scorecards, performance reviews, incident handling rules, continuous improvement.','بعد از امضا: پرسشنامه و کارنامه‌ی مرتب، بررسی عملکرد، قانون‌های واکنش به حادثه، بهتر شدن مداوم.']]),
    TB([['Agreement','توافق‌نامه'],['Simple idea','به زبان ساده']],[
      [['SLA','SLA'],['Service levels: uptime, response times, penalties','قول سرویس با عدد و جریمه؛ مثل «۳۰ دقیقه‌ای پیتزا یا مجانی»']],
      [['NDA','NDA'],['Keep confidential information secret','راز نگه دار']],
      [['BPA','BPA'],['Roles and shared duties in a long-term partnership','قرارداد شراکت بلندمدت']],
      [['MOU','MOU'],['Non-binding statement of intent before a contract','تفاهم‌نامه؛ هنوز الزام قانونی ندارد']]]),

    H('Compliance and privacy','انطباق و حریم خصوصی'),
    L([['Compliance = following laws, regulations, contracts and internal policies. Reporting is internal (to leadership) and external (to regulators).','انطباق = رعایت قانون، مقررات، قرارداد و سیاست‌های داخلی. گزارش داخلی برای مدیران است، گزارش بیرونی برای نهاد ناظر.'],
       ['Non-compliance: fines, sanctions, operating limits, lost licenses, damaged reputation.','نتیجه‌ی رعایت نکردن: جریمه، تحریم، محدودیت کار، از دست دادن مجوز، و آبروریزی.'],
       ['Data subject rights: access, correct, restrict processing, transfer their data.','حقوق صاحب داده: دیدن، اصلاح، محدود کردن پردازش و انتقال داده‌اش.'],
       ['Right to be forgotten: delete personal data everywhere, including backups, unless the law requires keeping it.','حق فراموش شدن: داده را از همه جا، حتی پشتیبان‌ها، پاک کن؛ مگر قانون بگوید نگهش دار.'],
       ['Data inventory and retention: know what personal data you hold and keep it only as long as needed.','فهرست و مدت نگه‌داری: بدان چه داده‌ای داری و فقط به اندازه‌ی لازم نگهش دار.'],
       ['Compliance monitoring: due diligence and due care, attestation and acknowledgment (staff sign that they read the policies), and automation tools for tracking and evidence.','پایش انطباق: تحقیق و مراقبت لازم، امضای کارمندها که سیاست‌ها را خوانده‌اند، و ابزارهای خودکار برای پیگیری و جمع کردن مدرک.']]),
    TT('Due diligence = research before acting. Due care = act responsibly every day.',
      'Due diligence = قبل از کار، خوب تحقیق کن. Due care = هر روز مسئولانه رفتار کن.'),

    H('Audits and assessments','ممیزی و ارزیابی'),
    TB([['Type','نوع'],['Who and why','چه کسی و چرا']],[
      [['Internal audit / self-assessment','ممیزی داخلی / خودارزیابی'],['Own staff; finds issues early and prepares for external audits','کارمندان خود شرکت؛ امتحان آزمایشی قبل از امتحان اصلی']],
      [['External / third-party audit','ممیزی بیرونی'],['Independent auditors; unbiased view','ممیز مستقل؛ نظر بی‌طرف']],
      [['Regulatory audit','ممیزی نظارتی'],['Required by law (HIPAA, PCI DSS, GDPR); fines if failed','به دستور قانون؛ رد شدن = جریمه']],
      [['Attestation','Attestation'],['Independent formal declaration that controls meet a standard (SOC 1, SOC 2, ISO)','گواهی رسمی طرف مستقل؛ مثل کارنامه‌ی امضاشده']],
      [['Compliance audit','ممیزی انطباق'],['Checks adherence to rules (HIPAA in healthcare, PCI DSS for payments)','بررسی رعایت قانون‌ها']]]),

    H('Penetration test types','انواع تست نفوذ'),
    L([['Scope: physical (doors, badges), offensive (attack), defensive (detect and respond), integrated (purple team: red + blue together).','دامنه: فیزیکی (در و کارت)، حمله‌ای، دفاعی (کشف و واکنش)، یکپارچه (تیم بنفش: قرمز و آبی با هم).'],
       ['Knowledge: known environment (white-box), partially known (gray-box), unknown (black-box).','دانش: محیط شناخته‌شده (جعبه‌سفید)، نیمه‌شناخته (خاکستری)، ناشناخته (سیاه).'],
       ['Reconnaissance: passive (OSINT, WHOIS, no contact) vs active (port scans, service enumeration).','شناسایی: غیرفعال (از دور، بدون تماس، مثل OSINT و WHOIS) در برابر فعال (در زدن، مثل port scan).']]),

    H('Security awareness','آگاهی امنیتی'),
    PP('Most attacks start with a person: a click, a reply, a USB stick. Training turns people into a defense layer that works alongside the technical controls.',
      'بیشتر حمله‌ها با یک آدم شروع می‌شوند: یک کلیک، یک جواب، یک USB. آموزش، آدم‌ها را به یک لایه‌ی دفاعی تبدیل می‌کند که کنار ابزارهای فنی کار می‌کند.'),
    TB([['Phishing sign','نشانه‌ی فیشینگ'],['What to do','چه کنی']],[
      [['Odd or mismatched sender address','آدرس فرستنده‌ی عجیب'],['Check it carefully','دقیق نگاهش کن']],
      [['Urgency or too-good-to-be-true offers','فوری! یا پیشنهاد خیلی خوب'],['Slow down; verify another way','عجله نکن؛ از راه دیگری بپرس']],
      [['Bad grammar, generic greeting','غلط املایی، «مشتری عزیز»'],['Treat as suspicious','مشکوک حساب کن']],
      [['Link text differs from the real URL','لینک به جای دیگری می‌رود'],['Hover before clicking','قبل از کلیک، موس را رویش نگه دار']]]),
    L([['Report with the reporting button and keep the original email for investigation.','با دکمه‌ی گزارش اعلام کن و ایمیل اصلی را پاک نکن.'],
       ['Phishing simulations test readiness and target extra training.','شبیه‌سازی فیشینگ آمادگی را می‌سنجد و آموزش را هدفمند می‌کند.'],
       ['Anomalous behavior: risky (odd logins, huge downloads, after-hours work) or unintentional (misdirected email, accidental sharing). UBA baselines normal behavior and flags anomalies.','رفتار غیرعادی: یا خطرناک (ورود عجیب، دانلود زیاد، کار نصف شب) یا غیرعمدی (ایمیل به آدرس اشتباه). UBA رفتار عادی را یاد می‌گیرد و چیز عجیب را گزارش می‌دهد.'],
       ['Training topics: policy and handbook, social engineering (phishing, pretexting), removable media and cables (never plug in a found USB).','موضوع‌های آموزش: سیاست‌ها و دفترچه‌ی کارمند، مهندسی اجتماعی (فیشینگ، داستان‌سازی)، USB و کابل (هیچ‌وقت USB پیداشده را وصل نکن).'],
       ['Remote and hybrid work: VPN, endpoint security, MFA, clear workspace rules; clear channels to report incidents.','کار از خانه: VPN، امنیت دستگاه، MFA، قانون محیط کار؛ و یک راه روشن برای گزارش حادثه.']]),
    TT('Exam shortcut: governance sets the rules, risk management prioritizes, third-party risk checks partners, compliance follows the law, audits prove it, awareness trains the people.',
      'نکته‌ی امتحان: حاکمیت قانون می‌گذارد، مدیریت ریسک اولویت می‌دهد، ریسک شخص ثالث شریک‌ها را می‌سنجد، انطباق قانون را رعایت می‌کند، ممیزی ثابتش می‌کند، و آگاهی آدم‌ها را آموزش می‌دهد.')
  ]};
})();
