/* Textbook chapter 17 ("Risk Management and Privacy") of Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.
   Original questions and notes written for the chapter's objectives (3.3, 4.2, 5.2, 5.4); no text from the book is copied.
   Adds section '17' to the textbook pack (packs/secbook.js). The correct option is always first in o/of. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secbook'});
  if(!pack)return;
  pack.sections['17']={en:'Risk management and privacy',fa:'مدیریت ریسک و حریم خصوصی'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b17_'+(++n),sec:'17',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Risk analysis',T2='Risk strategies',T3='Risk tracking',T4='BIA & DR',T5='Privacy';

  /* ---- Risk analysis ---- */
  M(T1,'A server worth $200,000 would lose 25% of its value in a flood. Floods are expected once every 50 years. What is the ALE?',
    'سروری به ارزش ۲۰۰٬۰۰۰ دلار در سیل ۲۵٪ ارزشش را از دست می‌دهد. انتظار می‌رود هر ۵۰ سال یک سیل بیاید. ALE چقدر است؟',
    'SLE = AV × EF، بعد ALE = SLE × ARO.',
    ['$1,000','$50,000','$4,000','$10,000'],
    ['۱٬۰۰۰ دلار','۵۰٬۰۰۰ دلار','۴٬۰۰۰ دلار','۱۰٬۰۰۰ دلار'],
    'SLE = asset value × exposure factor = $200,000 × 0.25 = $50,000. ARO = 1/50 = 0.02. ALE = SLE × ARO = $50,000 × 0.02 = $1,000 per year.',
    'SLE = ارزش دارایی × EF = ۲۰۰٬۰۰۰ × ۰٫۲۵ = ۵۰٬۰۰۰. ARO = ۱/۵۰ = ۰٫۰۲. ALE = SLE × ARO = ۵۰٬۰۰۰ × ۰٫۰۲ = ۱٬۰۰۰ دلار در سال.');

  M(T1,'Which value is the percentage of an asset\'s value lost in one occurrence of a risk?',
    'کدام مقدار درصد ارزش دارایی است که در یک بار وقوع ریسک از دست می‌رود؟',
    'میزان «در معرض» بودن.',
    ['Exposure factor (EF)','Annualized rate of occurrence (ARO)','Single loss expectancy (SLE)','Annualized loss expectancy (ALE)'],
    ['Exposure factor (EF)','ARO (نرخ سالانه‌ی وقوع)','SLE (زیان یک‌باره)','ALE (زیان سالانه)'],
    'EF = % of value lost per event. SLE = dollar loss per event. ARO = how many times per year. ALE = expected yearly loss (SLE × ARO).',
    'EF = درصد ارزش ازدست‌رفته در هر رخداد. SLE = زیان دلاری هر رخداد. ARO = چند بار در سال. ALE = زیان مورد انتظار سالانه (SLE × ARO).');

  M(T1,'A team rates risks as low, medium or high based on expert judgment about likelihood and impact, without dollar figures. What kind of analysis is this?',
    'تیمی ریسک‌ها را بر اساس نظر کارشناسی درباره‌ی احتمال و اثر، بدون عدد دلاری، کم، متوسط یا زیاد ارزیابی می‌کند. این چه نوع تحلیلی است؟',
    'کیفیت، نه کمیت.',
    ['Qualitative risk analysis','Quantitative risk analysis','Business impact analysis','Penetration testing'],
    ['تحلیل کیفی ریسک','تحلیل کمی ریسک','تحلیل اثر کسب‌وکار','تست نفوذ'],
    'Qualitative analysis uses categories (often on a likelihood/impact heat map). Quantitative analysis uses numbers such as SLE, ARO and ALE. Many organizations combine both.',
    'تحلیل کیفی از دسته‌ها استفاده می‌کند (اغلب روی نقشه‌ی گرمایی احتمال/اثر). تحلیل کمی از عدد استفاده می‌کند، مثل SLE، ARO و ALE. خیلی سازمان‌ها هر دو را با هم به کار می‌برند.');

  M(T1,'A company checks risk only when a new acquisition happens, with no schedule. Which risk assessment type is this?',
    'شرکتی فقط وقتی یک خرید جدید پیش می‌آید ریسک را بررسی می‌کند، بدون برنامه‌ی زمانی. این کدام نوع ارزیابی ریسک است؟',
    'هر وقت لازم شد.',
    ['Ad hoc','Recurring','Continuous','One-time'],
    ['Ad hoc (موردی)','Recurring (دوره‌ای)','Continuous (پیوسته)','One-time (یک‌باره)'],
    'Ad hoc = as needed in response to an event. Recurring = on a schedule (e.g., yearly). One-time = for a single project or decision. Continuous = ongoing, often automated monitoring.',
    'Ad hoc = هر وقت لازم شد، در پاسخ به یک رویداد. Recurring = طبق برنامه (مثلاً سالانه). One-time = برای یک پروژه یا تصمیم. Continuous = پیوسته، اغلب با پایش خودکار.');

  /* ---- Risk strategies ---- */
  M(T2,'A company buys cyber insurance to cover breach costs. Which risk strategy is this?',
    'شرکتی بیمه‌ی سایبری می‌خرد تا هزینه‌های نفوذ را پوشش دهد. این کدام راهبرد ریسک است؟',
    'بخشی از ریسک را به دیگری بده.',
    ['Transference','Mitigation','Avoidance','Acceptance'],
    ['Transference (انتقال)','Mitigation (کاهش)','Avoidance (اجتناب)','Acceptance (پذیرش)'],
    'Transfer moves some financial impact to a third party (insurance, contracts). Mitigate lowers likelihood or impact (controls). Avoid changes the activity so the risk no longer applies. Accept continues despite the risk.',
    'Transfer بخشی از اثر مالی را به طرف سوم می‌دهد (بیمه، قرارداد). Mitigate احتمال یا اثر را کم می‌کند (کنترل‌ها). Avoid کار را عوض می‌کند تا ریسک دیگر مطرح نباشد. Accept با وجود ریسک ادامه می‌دهد.');

  M(T2,'A retailer stops storing card numbers entirely so a database breach can no longer expose them. Which strategy?',
    'یک فروشگاه دیگر اصلاً شماره‌ی کارت ذخیره نمی‌کند تا نفوذ به پایگاه داده نتواند آن‌ها را لو بدهد. کدام راهبرد؟',
    'فعالیت پرریسک را کنار بگذار.',
    ['Avoidance','Transference','Acceptance','Mitigation'],
    ['Avoidance (اجتناب)','Transference (انتقال)','Acceptance (پذیرش)','Mitigation (کاهش)'],
    'Avoidance changes business practice so the risk is irrelevant. Encrypting the stored numbers instead would be mitigation.',
    'Avoidance روش کار را عوض می‌کند تا ریسک بی‌ربط شود. اگر شماره‌ها را رمز می‌کرد، Mitigation می‌شد.');

  M(T2,'A patch removes a vulnerability on a web server. What changed in the risk equation?',
    'یک وصله آسیب‌پذیری یک وب‌سرور را برطرف می‌کند. در معادله‌ی ریسک چه چیزی عوض شد؟',
    'ریسک = تهدید × آسیب‌پذیری.',
    ['The vulnerability was reduced; the threat still exists','The threat was eliminated','The asset value went down','The risk was transferred'],
    ['آسیب‌پذیری کم شد؛ تهدید هنوز هست','تهدید از بین رفت','ارزش دارایی کم شد','ریسک منتقل شد'],
    'Risk needs both a threat and a vulnerability. Patching removes the vulnerability (mitigation); attackers (the threat) are still out there. Exemptions and exceptions are formal ways to accept a risk.',
    'ریسک هم تهدید می‌خواهد و هم آسیب‌پذیری. وصله آسیب‌پذیری را برمی‌دارد (Mitigation)؛ مهاجمان (تهدید) هنوز هستند. Exemption و Exception راه‌های رسمی پذیرش ریسک‌اند.');

  /* ---- Risk tracking ---- */
  M(T3,'A fast-growing startup willingly takes on high risk to capture market share. What is its risk appetite?',
    'یک استارتاپ با رشد سریع آگاهانه ریسک زیاد می‌پذیرد تا سهم بازار بگیرد. اشتهای ریسکش چیست؟',
    'تهاجمی و رشدمحور.',
    ['Expansionary','Conservative','Neutral','Risk-averse threshold'],
    ['Expansionary (گسترش‌طلب)','Conservative (محافظه‌کار)','Neutral (متعادل)','آستانه‌ی ریسک‌گریز'],
    'Expansionary = accepts higher risk for higher reward. Conservative = prefers low risk and stability (e.g., banks, hospitals). Neutral = balances the two. Risk tolerance is how much deviation from the appetite is acceptable.',
    'Expansionary = ریسک بیشتر برای سود بیشتر. Conservative = ریسک کم و ثبات (مثل بانک و بیمارستان). Neutral = تعادل بین این دو. Risk tolerance یعنی چقدر انحراف از اشتهای ریسک قابل قبول است.');

  M(T3,'Which document lists each risk with its owner, rating, planned response and key risk indicators?',
    'کدام سند هر ریسک را با مالک، رتبه، پاسخ برنامه‌ریزی‌شده و شاخص‌های کلیدی ریسک فهرست می‌کند؟',
    'دفتر ثبت ریسک‌ها.',
    ['Risk register','Business impact analysis','Disaster recovery plan','Data inventory'],
    ['Risk register (دفتر ثبت ریسک)','تحلیل اثر کسب‌وکار','برنامه‌ی بازیابی از فاجعه','فهرست داده‌ها'],
    'The risk register tracks risks over time: description, owner, likelihood and impact, response, KRIs and thresholds. Risk reporting shares this with leadership.',
    'Risk register ریسک‌ها را در طول زمان دنبال می‌کند: شرح، مالک، احتمال و اثر، پاسخ، KRI و آستانه‌ها. گزارش ریسک این را با مدیران به اشتراک می‌گذارد.');

  M(T3,'Before buying routers, a company verifies they were not tampered with between the factory and delivery. What is this part of?',
    'شرکتی قبل از خرید روترها بررسی می‌کند که بین کارخانه و تحویل دست‌کاری نشده باشند. این بخشی از چیست؟',
    'ریسک زنجیره‌ی تأمین.',
    ['Supply chain assessment (hardware source authenticity)','Risk avoidance','Qualitative risk analysis','Data minimization'],
    ['ارزیابی زنجیره‌ی تأمین (اصالت منبع سخت‌افزار)','اجتناب از ریسک','تحلیل کیفی ریسک','کمینه‌سازی داده'],
    'Vendors are an external risk. Supply chain assessments include vendor due diligence and checking hardware source authenticity (trusted suppliers, tamper evidence) so devices are not compromised before arrival.',
    'فروشنده‌ها ریسک بیرونی‌اند. ارزیابی زنجیره‌ی تأمین شامل Due diligence فروشنده و بررسی اصالت منبع سخت‌افزار است (تأمین‌کننده‌ی مطمئن، نشانه‌ی دست‌کاری) تا دستگاه قبل از رسیدن آلوده نشده باشد.');

  /* ---- BIA & DR ---- */
  M(T4,'The business says the order system can be down for at most 4 hours and may lose at most 15 minutes of data. Which two metrics are these?',
    'کسب‌وکار می‌گوید سیستم سفارش حداکثر ۴ ساعت می‌تواند از کار بیفتد و حداکثر ۱۵ دقیقه داده از دست برود. این دو معیار کدام‌اند؟',
    'زمان برگشت و نقطه‌ی برگشت.',
    ['RTO = 4 hours, RPO = 15 minutes','RPO = 4 hours, RTO = 15 minutes','MTTR = 4 hours, MTBF = 15 minutes','ALE = 4 hours, ARO = 15 minutes'],
    ['RTO = ۴ ساعت، RPO = ۱۵ دقیقه','RPO = ۴ ساعت، RTO = ۱۵ دقیقه','MTTR = ۴ ساعت، MTBF = ۱۵ دقیقه','ALE = ۴ ساعت، ARO = ۱۵ دقیقه'],
    'RTO = maximum time to restore service. RPO = maximum acceptable data loss, measured in time (drives backup frequency). MTTR = average repair time. MTBF = average time between failures (reliability).',
    'RTO = حداکثر زمان برگرداندن سرویس. RPO = حداکثر داده‌ی قابل قبول برای از دست رفتن، بر حسب زمان (تعداد دفعات پشتیبان را تعیین می‌کند). MTTR = میانگین زمان تعمیر. MTBF = میانگین زمان بین خرابی‌ها (قابلیت اطمینان).');

  M(T4,'Which statement about disasters is true for disaster recovery planning?',
    'کدام جمله درباره‌ی فاجعه برای برنامه‌ریزی بازیابی از فاجعه درست است؟',
    'فقط طوفان و سیل نیست.',
    ['A disaster is any event that can disrupt the business: natural or human-made, internal or external','Only natural events count as disasters','Cyberattacks are never disasters','Disasters only affect data centers'],
    ['فاجعه هر رویدادی است که کار را مختل کند: طبیعی یا انسانی، داخلی یا خارجی','فقط رویدادهای طبیعی فاجعه‌اند','حمله‌ی سایبری هیچ‌وقت فاجعه نیست','فاجعه فقط روی مرکز داده اثر دارد'],
    'DR planning covers environmental disasters (floods, fires, storms) and human-made ones (attacks, errors, power loss), from external or internal sources. The BIA identifies mission-essential functions and their RTO/RPO.',
    'برنامه‌ی DR فاجعه‌های محیطی (سیل، آتش، طوفان) و انسانی (حمله، خطا، قطع برق) را از منبع بیرونی یا درونی پوشش می‌دهد. BIA کارکردهای حیاتی و RTO/RPO آن‌ها را مشخص می‌کند.');

  /* ---- Privacy ---- */
  M(T5,'A retailer uses a payment service to process customer card data on its behalf. Which privacy roles do they have?',
    'یک فروشگاه از یک سرویس پرداخت استفاده می‌کند تا داده‌ی کارت مشتری‌ها را به نمایندگی از او پردازش کند. نقش‌های حریم خصوصی آن‌ها چیست؟',
    'چه کسی تصمیم می‌گیرد، چه کسی اجرا می‌کند.',
    ['Retailer = data controller; payment service = data processor','Retailer = processor; payment service = controller','Both are data subjects','Both are data custodians only'],
    ['فروشگاه = Data controller؛ سرویس پرداخت = Data processor','فروشگاه = Processor؛ سرویس = Controller','هر دو Data subject هستند','هر دو فقط Custodian هستند'],
    'The controller decides why and how data is processed and keeps responsibility. The processor handles data on the controller\'s behalf. Data owners are senior leaders accountable for data, stewards carry out the controller\'s intent, custodians keep data safe day to day, and the data subject is the person the data is about.',
    'Controller تصمیم می‌گیرد داده چرا و چطور پردازش شود و مسئولیت را نگه می‌دارد. Processor به نمایندگی از او پردازش می‌کند. Owner مدیر ارشد پاسخگوی داده است، Steward قصد Controller را اجرا می‌کند، Custodian نگهداری روزمره‌ی امن را انجام می‌دهد و Data subject کسی است که داده درباره‌ی اوست.');

  M(T5,'An EU customer asks a company to erase all of their personal data. Which right is this under GDPR?',
    'یک مشتری اروپایی از شرکتی می‌خواهد همه‌ی داده‌های شخصی‌اش را پاک کند. این کدام حق طبق GDPR است؟',
    'حق فراموش شدن.',
    ['Right to be forgotten (erasure)','Right to audit','Legal hold','Data sovereignty'],
    ['حق فراموش شدن (پاک کردن)','حق حسابرسی','Legal hold','حاکمیت داده'],
    'GDPR gives data subjects the right to have their personal data erased in many cases. Organizations need a data inventory to find it, and a data protection officer (DPO) to oversee privacy compliance.',
    'GDPR در خیلی موارد به Data subject حق پاک شدن داده‌های شخصی‌اش را می‌دهد. سازمان برای پیدا کردن داده به فهرست داده (Data inventory) و برای نظارت بر حریم خصوصی به مسئول حفاظت داده (DPO) نیاز دارد.');

  M(T5,'An analytics team needs customer records but not names. The company replaces names with random values it can map back only through a protected lookup table. Which technique is this?',
    'تیم تحلیل به رکورد مشتری‌ها نیاز دارد ولی نه به اسم‌ها. شرکت اسم‌ها را با مقدارهای تصادفی عوض می‌کند که فقط با یک جدول محافظت‌شده قابل برگرداندن‌اند. این کدام روش است؟',
    'برگشت‌پذیر با جدول.',
    ['Tokenization','Hashing','Masking','Data minimization'],
    ['Tokenization (توکن‌سازی)','Hashing','Masking (پوشاندن)','کمینه‌سازی داده'],
    'Privacy-enhancing technologies include deidentification/anonymization and obfuscation: tokenization (reversible via a lookup table), hashing (one-way) and masking (hide part of the value).',
    'فناوری‌های افزایش حریم خصوصی شامل De-identification/Anonymization و Obfuscation هستند: Tokenization (با جدول برگشت‌پذیر)، Hashing (یک‌طرفه) و Masking (پوشاندن بخشی از مقدار).');

  M(T5,'A sign-up form collects only an email address because nothing else is needed for the service. Which principle is this?',
    'یک فرم ثبت‌نام فقط آدرس ایمیل می‌گیرد چون برای سرویس چیز دیگری لازم نیست. این کدام اصل است؟',
    'کمتر جمع کن.',
    ['Data minimization','Data retention','Least privilege','Data sovereignty'],
    ['کمینه‌سازی داده (Data minimization)','نگهداری داده','حداقل دسترسی','حاکمیت داده'],
    'Data minimization means collecting the least information needed and discarding the rest, at every stage of the information life cycle (collect, use, store, share, dispose).',
    'Data minimization یعنی کمترین اطلاعات لازم را جمع کن و بقیه را دور بریز، در همه‌ی مراحل چرخه‌ی عمر اطلاعات (جمع‌آوری، استفاده، ذخیره، اشتراک، امحا).');

  M(T5,'A company labels its unreleased product designs as the most sensitive category, available only to a small named group. Which label fits best?',
    'شرکتی طرح‌های محصول منتشرنشده‌اش را در حساس‌ترین دسته قرار می‌دهد که فقط یک گروه کوچک و مشخص به آن دسترسی دارد. کدام برچسب مناسب‌تر است؟',
    'محدودترین دسترسی.',
    ['Restricted','Public','Private','Critical'],
    ['Restricted (محدودشده)','Public (عمومی)','Private (خصوصی)','Critical (حیاتی)'],
    'Common labels include public, private, sensitive, confidential, critical and restricted. Restricted and confidential cover data whose exposure would cause serious harm; critical describes data essential to operations.',
    'برچسب‌های رایج: Public، Private، Sensitive، Confidential، Critical و Restricted. Restricted و Confidential برای داده‌ای است که افشایش آسیب جدی دارد؛ Critical برای داده‌ای است که برای ادامه‌ی کار ضروری است.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['17']={t:['Risk management and privacy','مدیریت ریسک و حریم خصوصی'],b:[
    PP('Matched to Chapter 17 of the textbook (objectives 3.3, 4.2, 5.2, 5.4). Short review notes in our own words; read the chapter for the full explanation.',
      'این بخش با فصل ۱۷ کتاب جور است (سرفصل‌های 3.3، 4.2، 5.2، 5.4). یادداشت‌های کوتاه مرور به زبان خودمان؛ توضیح کامل را در کتاب بخوان.'),
    H('Risk analysis','تحلیل ریسک'),
    TB([['Term','اصطلاح'],['Meaning','معنی']],[
      [['AV','AV'],['Asset value','ارزش دارایی']],
      [['EF','EF'],['% of value lost per event','درصد ارزش ازدست‌رفته در هر رخداد']],
      [['SLE = AV × EF','SLE = AV × EF'],['Loss per event','زیان هر رخداد']],
      [['ARO','ARO'],['Events per year (once in 50 years = 0.02)','رخداد در سال (هر ۵۰ سال = ۰٫۰۲)']],
      [['ALE = SLE × ARO','ALE = SLE × ARO'],['Expected loss per year','زیان مورد انتظار در سال']]]),
    L([['Risk = threat × vulnerability (likelihood × impact). Qualitative = categories; quantitative = numbers.','ریسک = تهدید × آسیب‌پذیری (احتمال × اثر). کیفی = دسته؛ کمی = عدد.'],
       ['Assessment types: ad hoc, recurring, one-time, continuous.','انواع ارزیابی: موردی، دوره‌ای، یک‌باره، پیوسته.'],
       ['Supply chain: vendor due diligence and hardware source authenticity.','زنجیره‌ی تأمین: Due diligence فروشنده و اصالت منبع سخت‌افزار.']]),
    H('Risk strategies','راهبردهای ریسک'),
    L([['Mitigate = reduce likelihood or impact (controls, patches).','Mitigate = کم کردن احتمال یا اثر (کنترل، وصله).'],
       ['Avoid = stop or change the activity.','Avoid = متوقف کردن یا تغییر فعالیت.'],
       ['Transfer = insurance or contracts move some impact to others.','Transfer = بیمه یا قرارداد بخشی از اثر را به دیگری می‌دهد.'],
       ['Accept = continue; exemptions and exceptions are formal acceptance.','Accept = ادامه دادن؛ Exemption و Exception پذیرش رسمی‌اند.'],
       ['Appetite: expansionary (more risk), conservative (less), neutral (balance). Tolerance = acceptable deviation.','اشتها: گسترش‌طلب (ریسک بیشتر)، محافظه‌کار (کمتر)، متعادل. Tolerance = انحراف قابل قبول.'],
       ['Risk register: owner, rating, response, KRIs, thresholds; risk reporting to leaders.','Risk register: مالک، رتبه، پاسخ، KRI، آستانه؛ گزارش ریسک به مدیران.']]),
    H('BIA and disaster recovery','BIA و بازیابی از فاجعه'),
    L([['RTO = max downtime. RPO = max data loss (time). MTTR = average repair time. MTBF = average time between failures.','RTO = حداکثر زمان قطعی. RPO = حداکثر داده‌ی ازدست‌رفته (بر حسب زمان). MTTR = میانگین زمان تعمیر. MTBF = میانگین زمان بین خرابی‌ها.'],
       ['Disasters: natural or human-made, internal or external. The DR plan restores systems and data.','فاجعه: طبیعی یا انسانی، داخلی یا خارجی. برنامه‌ی DR سیستم‌ها و داده را برمی‌گرداند.']]),
    H('Privacy','حریم خصوصی'),
    L([['Roles: data subject, owner, controller, processor, steward, custodian, DPO.','نقش‌ها: Data subject، Owner، Controller، Processor، Steward، Custodian، DPO.'],
       ['Data inventory first; classify: public, private, sensitive, confidential, critical, restricted. Types include PII, PHI, financial data.','اول فهرست داده؛ طبقه‌بندی: عمومی، خصوصی، حساس، محرمانه، حیاتی، محدود. انواع: PII، PHI، داده‌ی مالی.'],
       ['Life cycle: minimize collection, protect in use and storage, dispose when no longer needed.','چرخه‌ی عمر: کم جمع کن، در استفاده و ذخیره محافظت کن، وقتی لازم نیست امحا کن.'],
       ['Right to be forgotten (GDPR). Breach notification laws set deadlines and who must be told.','حق فراموش شدن (GDPR). قوانین اطلاع‌رسانی نفوذ مهلت و گیرنده‌ها را تعیین می‌کنند.'],
       ['Privacy-enhancing technologies: deidentification/anonymization, tokenization (reversible), hashing (one-way), masking.','فناوری‌های حریم خصوصی: De-identification/Anonymization، Tokenization (برگشت‌پذیر)، Hashing (یک‌طرفه)، Masking.']]),
    TT('Exam shortcut: ALE = AV × EF × ARO. Insurance = transfer; stopping the activity = avoid. RTO = time to restore, RPO = data you can lose. Controller decides, processor acts.',
      'نکته‌ی امتحان: ALE = AV × EF × ARO. بیمه = انتقال؛ کنار گذاشتن فعالیت = اجتناب. RTO = زمان برگشت، RPO = داده‌ای که می‌شود از دست داد. Controller تصمیم می‌گیرد، Processor اجرا می‌کند.')
  ]};
})();
