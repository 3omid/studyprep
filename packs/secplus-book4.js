/* Security+ extension: Section B4, matched to Chapter 4 ("Social Engineering and Password Attacks") of the
   course textbook (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes
   written for objectives 2.2 (human vectors) and 2.4 (password attacks); no text or review questions from
   the book are copied. The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secbook'});
  if(!pack)return;
  pack.sections['4']={en:'Social engineering & passwords',fa:'مهندسی اجتماعی و حمله به رمز'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b4_'+(++n),sec:'4',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Principles',T2='Human vectors',T3='Password attacks';

  /* ---- Principles ---- */
  M(T1,'A caller says, "Everyone else on your team already reset their password through this link, you are the last one." Which principle is being used?',
    'تماس‌گیرنده می‌گوید: «همه‌ی هم‌تیمی‌هایت قبلاً با این لینک رمزشان را عوض کرده‌اند، فقط تو مانده‌ای.» از کدام اصل استفاده شده؟',
    'همه دارند این کار را می‌کنند.',
    ['Consensus (social proof)','Scarcity','Authority','Intimidation'],
    ['اجماع (اثبات اجتماعی)','کمیابی','اقتدار','ارعاب'],
    'Consensus, also called social proof, works because people tend to do what others are doing. Fake testimonials and "everyone already did it" messages use this principle.',
    'اجماع یا اثبات اجتماعی کار می‌کند چون آدم‌ها دوست دارند کاری را بکنند که دیگران می‌کنند. نظرهای جعلی و پیام «همه قبلاً انجامش داده‌اند» از این اصل استفاده می‌کنند.');

  M(T1,'An email says, "Only 3 discounted licenses left! Click now before they are gone." Which principle is this?',
    'ایمیلی می‌گوید: «فقط ۳ لایسنس تخفیف‌دار مانده! قبل از تمام شدن کلیک کن.» این کدام اصل است؟',
    'چیزی که کم است ارزشمندتر به نظر می‌رسد.',
    ['Scarcity','Familiarity','Trust','Consensus'],
    ['کمیابی (Scarcity)','آشنایی','اعتماد','اجماع'],
    'Scarcity makes something seem more desirable because it may run out. It is often paired with urgency ("before midnight"). Both push people to react instead of thinking.',
    'کمیابی چیزی را خواستنی‌تر نشان می‌دهد چون ممکن است تمام شود. اغلب با فوریت («قبل از نیمه‌شب») همراه است. هر دو آدم را به واکنش سریع به جای فکر کردن می‌کشانند.');

  M(T1,'A caller claims to be from the tax agency and warns that police will arrive within the hour unless a fine is paid by gift card. Which TWO principles are strongest here?',
    'تماس‌گیرنده‌ای خودش را از اداره‌ی مالیات معرفی می‌کند و هشدار می‌دهد اگر جریمه با کارت هدیه پرداخت نشود، پلیس ظرف یک ساعت می‌رسد. کدام دو اصل قوی‌ترند؟',
    'یک مقام رسمی + ترساندن.',
    ['Authority and intimidation','Familiarity and scarcity','Consensus and trust','Scarcity and consensus'],
    ['اقتدار و ارعاب','آشنایی و کمیابی','اجماع و اعتماد','کمیابی و اجماع'],
    'Authority (a government official) and intimidation (threat of arrest), plus urgency (within the hour). Real attacks usually combine several principles, which makes them more effective.',
    'اقتدار (مقام دولتی) و ارعاب (تهدید به بازداشت)، به‌علاوه‌ی فوریت (ظرف یک ساعت). حمله‌های واقعی معمولاً چند اصل را با هم ترکیب می‌کنند که اثرشان را بیشتر می‌کند.');

  M(T1,'Over several weeks, an attacker chats friendly with an employee on a hobby forum, then asks for "a small favor" from inside the company. Which principle is this?',
    'مهاجمی چند هفته در یک انجمن سرگرمی با کارمندی دوستانه گپ می‌زند، بعد «یک لطف کوچک» از داخل شرکت می‌خواهد. این کدام اصل است؟',
    'رابطه ساخته می‌شود.',
    ['Trust','Scarcity','Intimidation','Urgency'],
    ['اعتماد (Trust)','کمیابی','ارعاب','فوریت'],
    'With trust, the social engineer builds a real connection with the target first. Familiarity is different: it relies on the target already liking the person or brand, or the request feeling normal.',
    'در اصل اعتماد، مهندس اجتماعی اول یک رابطه‌ی واقعی با هدف می‌سازد. آشنایی فرق دارد: به این تکیه دارد که هدف از قبل آن شخص یا برند را دوست دارد یا درخواست عادی به نظر می‌رسد.');

  /* ---- Human vectors ---- */
  M(T2,'An attacker researches one finance clerk on social media and sends her a personalized email about her daughter\'s school fundraiser with a malicious link. What is this?',
    'مهاجمی یک کارمند مالی را در شبکه‌های اجتماعی بررسی می‌کند و ایمیل شخصی‌سازی‌شده‌ای درباره‌ی جمع‌آوری کمک مدرسه‌ی دخترش با یک لینک مخرب برایش می‌فرستد. این چیست؟',
    'هدف مشخص، اما مدیر ارشد نیست.',
    ['Spear phishing','Whaling','Smishing','Watering hole'],
    ['Spear phishing (فیشینگ هدفمند)','Whaling','Smishing','Watering hole'],
    'Spear phishing targets specific people or groups. Whaling is spear phishing aimed at senior leaders such as the CEO or CFO. General phishing is sent widely to many people.',
    'Spear phishing افراد یا گروه‌های مشخصی را هدف می‌گیرد. Whaling همان Spear phishing است ولی برای مدیران ارشد مثل مدیرعامل یا مدیر مالی. فیشینگ عمومی برای تعداد زیادی فرستاده می‌شود.');

  M(T2,'A CFO receives a carefully written fake legal notice made just for her, asking her to log in to a "court portal." What is this attack called?',
    'مدیر مالی یک اخطار حقوقی جعلی و با دقت نوشته‌شده که فقط برای او ساخته شده دریافت می‌کند که از او می‌خواهد وارد یک «پرتال دادگاه» شود. اسم این حمله چیست؟',
    '«ماهی بزرگ».',
    ['Whaling','Vishing','Typosquatting','Pretexting only'],
    ['Whaling','Vishing','Typosquatting','فقط Pretexting'],
    'Whaling goes after "big fish": executives with high authority and access. Awareness training for leaders and strong verification for unusual requests are key defenses.',
    'Whaling دنبال «ماهی‌های بزرگ» است: مدیرانی با اختیار و دسترسی بالا. آموزش آگاهی برای مدیران و تأیید قوی برای درخواست‌های غیرعادی دفاع‌های اصلی‌اند.');

  M(T2,'A voicemail from "your bank\'s fraud team" asks you to call back and confirm your card number and PIN. What is this?',
    'یک پیام صوتی از «تیم کلاهبرداری بانکت» می‌خواهد تماس بگیری و شماره‌ی کارت و رمزت را تأیید کنی. این چیست؟',
    'فیشینگ با صدا.',
    ['Vishing','Smishing','Whaling','Brand impersonation by email'],
    ['Vishing (فیشینگ صوتی)','Smishing','Whaling','جعل برند با ایمیل'],
    'Vishing is phishing by phone call or voicemail. It often uses urgency and authority. Defense: hang up and call the number printed on your card or the official website.',
    'Vishing فیشینگ با تماس تلفنی یا پیام صوتی است. اغلب از فوریت و اقتدار استفاده می‌کند. دفاع: قطع کن و با شماره‌ی روی کارت یا سایت رسمی تماس بگیر.');

  M(T2,'A text message says "Your account is locked, reply with the 6-digit code we just sent you." What is the attacker most likely after?',
    'پیامکی می‌گوید «حسابت قفل شده، کد ۶ رقمی که الان فرستادیم را جواب بده.» مهاجم احتمالاً دنبال چیست؟',
    'کدی که برای ورود دومرحله‌ای می‌آید.',
    ['Your MFA code, through smishing','Your phone\'s battery level','A watering hole on your phone','Your hosts file'],
    ['کد MFA تو، از طریق Smishing','میزان شارژ گوشی','یک Watering hole روی گوشی','فایل hosts تو'],
    'Smishing is phishing by SMS. Besides links to fake sites or malware, a common goal is stealing a one-time MFA code so the attacker can finish logging in with a password they already have.',
    'Smishing فیشینگ با پیامک است. جدا از لینک به سایت جعلی یا بدافزار، یک هدف رایج دزدیدن کد یک‌بار مصرف MFA است تا مهاجم با رمزی که از قبل دارد ورودش را کامل کند.');

  M(T2,'A news site accidentally reports the wrong date for a software update deadline and corrects it the next day. What is this an example of?',
    'یک سایت خبری اشتباهاً تاریخ نادرستی برای مهلت یک آپدیت نرم‌افزاری منتشر می‌کند و روز بعد اصلاحش می‌کند. این نمونه‌ی چیست؟',
    'اشتباه است، نه عمدی.',
    ['Misinformation','Disinformation','Pretexting','Brand impersonation'],
    ['اطلاعات نادرست (Misinformation)','اطلاعات گمراه‌کننده‌ی عمدی (Disinformation)','Pretexting','جعل برند'],
    'Misinformation is incorrect information, often from honest mistakes. Disinformation is false information spread on purpose to serve someone\'s goals, such as state-run influence campaigns.',
    'Misinformation اطلاعات غلط است، اغلب از اشتباه صادقانه. Disinformation اطلاعات دروغی است که عمداً برای رسیدن به هدف کسی پخش می‌شود، مثل کارزارهای نفوذ دولتی.');

  M(T2,'A foreign government runs thousands of fake social media accounts that spread made-up stories to reduce trust in another country\'s election. What is this?',
    'یک دولت خارجی هزاران حساب جعلی در شبکه‌های اجتماعی اداره می‌کند که داستان‌های ساختگی پخش می‌کنند تا اعتماد به انتخابات کشور دیگری کم شود. این چیست؟',
    'دروغ عمدی برای تغییر افکار عمومی.',
    ['A disinformation (influence) campaign','Misinformation','Typosquatting','Password spraying'],
    ['کارزار Disinformation (نفوذ)','Misinformation','Typosquatting','Password spraying'],
    'Influence campaigns try to shift public opinion. When the content is false on purpose, it is disinformation. CISA suggests the TRUST process: Tell your story, Ready your team, Understand and assess MDM, Strategize response, Track outcomes.',
    'کارزار نفوذ سعی می‌کند افکار عمومی را تغییر دهد. وقتی محتوا عمداً دروغ باشد، Disinformation است. CISA فرایند TRUST را پیشنهاد می‌کند: داستانت را بگو، تیمت را آماده کن، MDM را بفهم و ارزیابی کن، پاسخ را برنامه‌ریزی کن، نتیجه‌ها را پیگیری کن.');

  M(T2,'Someone in a delivery uniform with a box says, "I need to drop this at the server room, it\'s urgent for IT." He has no specific name or badge. What is he mainly using?',
    'کسی با لباس پیک و یک جعبه می‌گوید: «باید این را به اتاق سرور برسانم، برای IT فوری است.» اسم یا کارت مشخصی ندارد. بیشتر از چه استفاده می‌کند؟',
    'وانمود به یک نقش؛ با یک داستان.',
    ['Impersonation with a pretext','Identity fraud of a specific person','Business email compromise','A watering hole attack'],
    ['جعل نقش (Impersonation) با یک بهانه (Pretext)','سرقت هویت یک فرد مشخص','نفوذ به ایمیل تجاری (BEC)','حمله‌ی Watering hole'],
    'Impersonation can be generic (a delivery driver, a technician) or a specific identity (identity fraud). The pretext is the made-up story that justifies the request. Asking questions or a verification call often defeats it.',
    'جعل نقش می‌تواند عمومی (پیک، تکنسین) یا هویت یک فرد مشخص (سرقت هویت) باشد. Pretext داستان ساختگی است که درخواست را توجیه می‌کند. پرسیدن سؤال یا یک تماس برای تأیید اغلب آن را شکست می‌دهد.');

  M(T2,'Accounts payable gets an email from the real mailbox of a regular supplier, saying their bank details changed and the next invoice should go to a new account. The supplier\'s mailbox had been hacked. What is this?',
    'بخش پرداخت از صندوق ایمیل واقعی یک تأمین‌کننده‌ی همیشگی ایمیلی می‌گیرد که می‌گوید حساب بانکی‌شان عوض شده و فاکتور بعدی باید به حساب جدید برود. صندوق ایمیل تأمین‌کننده هک شده بود. این چیست؟',
    'ایمیل واقعی و مورد اعتماد، اما در دست مهاجم.',
    ['Business email compromise (BEC)','Typosquatting','Smishing','Misinformation'],
    ['نفوذ به ایمیل تجاری (BEC)','Typosquatting','Smishing','Misinformation'],
    'BEC uses legitimate-looking email (compromised accounts, spoofing, look-alike domains) for invoice scams, gift card scams and data theft. Defenses: MFA, awareness, and a policy to verify payment changes by phone using a known number.',
    'BEC از ایمیلی با ظاهر واقعی (حساب هک‌شده، جعل فرستنده، دامنه‌ی شبیه) برای کلاهبرداری فاکتور، کارت هدیه و دزدی داده استفاده می‌کند. دفاع: MFA، آموزش و سیاستی که تغییر حساب پرداخت با تماس به شماره‌ی شناخته‌شده تأیید شود.');

  M(T2,'Attackers learn that engineers at a target company often visit one industry news site, so they plant malware in that site\'s ads. What is this?',
    'مهاجمان می‌فهمند مهندسان یک شرکت هدف اغلب یک سایت خبری صنعتی را می‌بینند؛ پس در تبلیغات آن سایت بدافزار می‌گذارند. این چیست؟',
    'جایی که شکار برای آب خوردن می‌آید.',
    ['A watering hole attack','Typosquatting','Pharming','Whaling'],
    ['حمله‌ی Watering hole','Typosquatting','Pharming','Whaling'],
    'A watering hole attack compromises a site the targets already trust and visit, either the site itself or something it loads such as an ad network. The victims come to the trap themselves.',
    'حمله‌ی Watering hole سایتی را آلوده می‌کند که هدف‌ها از قبل به آن اعتماد دارند و می‌بینند؛ یا خود سایت را یا چیزی که بارگذاری می‌کند مثل شبکه‌ی تبلیغات. قربانی‌ها خودشان سراغ تله می‌آیند.');

  M(T2,'An email uses a well-known streaming service\'s real logo, colors and layout to say "Your payment failed, update your card." What is this attack type?',
    'ایمیلی با لوگو، رنگ‌ها و قالب واقعی یک سرویس پخش معروف می‌گوید «پرداختت ناموفق بود، کارتت را به‌روز کن.» این کدام نوع حمله است؟',
    'اعتبار یک برند شناخته‌شده را قرض می‌گیرد.',
    ['Brand impersonation','Vishing','Watering hole','Password spraying'],
    ['جعل برند (Brand impersonation)','Vishing','Watering hole','Password spraying'],
    'Brand impersonation (brand spoofing) copies a trusted brand so people log in, pay or open an attachment. Quality ranges from almost perfect copies to obvious fakes. Fake social media accounts using a company\'s name are also brand impersonation.',
    'جعل برند یک برند مورد اعتماد را کپی می‌کند تا آدم‌ها وارد شوند، پرداخت کنند یا پیوست را باز کنند. کیفیتش از کپی تقریباً کامل تا جعلی آشکار فرق می‌کند. حساب‌های جعلی شبکه‌ی اجتماعی با نام یک شرکت هم جعل برند هستند.');

  M(T2,'A user types "gooogle.com" by mistake and lands on an ad-filled page made to look like a search engine. What is this?',
    'کاربری اشتباهی «gooogle.com» تایپ می‌کند و به صفحه‌ای پر از تبلیغ می‌رسد که شبیه موتور جستجو ساخته شده. این چیست؟',
    'از اشتباه تایپی سوءاستفاده می‌کند.',
    ['Typosquatting','Pharming','DNS poisoning','Watering hole'],
    ['Typosquatting','Pharming','مسموم کردن DNS','Watering hole'],
    'Typosquatters register misspelled or look-alike domains to catch typing mistakes. Organizations often register common typos of their own domain and redirect them to the real site.',
    'Typosquatterها دامنه‌های غلط املایی یا شبیه را ثبت می‌کنند تا اشتباه تایپی را شکار کنند. سازمان‌ها اغلب غلط‌های رایج دامنه‌ی خودشان را ثبت و به سایت اصلی هدایت می‌کنند.');

  M(T2,'A user types the bank\'s address correctly, but malware has edited the PC\'s hosts file, so the browser opens a fake bank site. What is this?',
    'کاربری آدرس بانک را درست تایپ می‌کند، اما بدافزار فایل hosts کامپیوتر را تغییر داده؛ پس مرورگر یک سایت بانک جعلی باز می‌کند. این چیست؟',
    'تایپ درست بود؛ مشکل در جستجوی نام است.',
    ['Pharming','Typosquatting','Brand impersonation by email','Smishing'],
    ['Pharming','Typosquatting','جعل برند با ایمیل','Smishing'],
    'Pharming redirects the user even when they type the right address, by changing the hosts file (checked before DNS) or the system\'s DNS servers. Typosquatting needs the user to make a typo.',
    'Pharming کاربر را حتی وقتی آدرس را درست تایپ کند منحرف می‌کند؛ با تغییر فایل hosts (که قبل از DNS بررسی می‌شود) یا سرورهای DNS سیستم. Typosquatting به اشتباه تایپی کاربر نیاز دارد.');

  M(T2,'What is the most effective general defense against phishing, vishing and smishing?',
    'مؤثرترین دفاع کلی در برابر فیشینگ، Vishing و Smishing چیست؟',
    'هدف این حمله‌ها انسان است.',
    ['Security awareness training plus regular phishing exercises','Longer encryption keys','Disabling all email','Installing more web servers'],
    ['آموزش آگاهی امنیتی به‌همراه تمرین‌های منظم فیشینگ','کلیدهای رمزگذاری طولانی‌تر','خاموش کردن کل ایمیل','نصب وب‌سرورهای بیشتر'],
    'Because social engineering targets people, awareness and practice are the core defense. Technical filters (reputation, keyword and pattern matching) help catch messages before users see them.',
    'چون مهندسی اجتماعی انسان را هدف می‌گیرد، آگاهی و تمرین دفاع اصلی‌اند. فیلترهای فنی (اعتبار فرستنده، تطبیق کلمه و الگو) کمک می‌کنند پیام‌ها قبل از رسیدن به کاربر گرفته شوند.');

  /* ---- Password attacks ---- */
  M(T3,'Logs show one source IP trying hundreds of different passwords against the single account "jsmith" within minutes. What attack is this?',
    'لاگ‌ها نشان می‌دهد یک IP در عرض چند دقیقه صدها رمز مختلف را روی تنها حساب «jsmith» امتحان می‌کند. این کدام حمله است؟',
    'یک حساب، رمزهای زیاد.',
    ['Brute force','Password spraying','Pharming','Pretexting'],
    ['Brute force','Password spraying','Pharming','Pretexting'],
    'Brute force tries many passwords until one works, often from word lists with rules for complexity. Account lockout and MFA defend against online brute force.',
    'Brute force رمزهای زیادی را امتحان می‌کند تا یکی کار کند؛ اغلب از فهرست کلمات با قوانینی برای پیچیدگی. قفل شدن حساب و MFA در برابر Brute force آنلاین دفاع می‌کنند.');

  M(T3,'Logs show "Spring2025!" tried once against each of 2,000 different usernames, slowly over a day. What attack is this?',
    'لاگ‌ها نشان می‌دهد رمز «Spring2025!» یک بار روی هر یک از ۲۰۰۰ نام کاربری مختلف، آهسته در طول یک روز امتحان شده. این کدام حمله است؟',
    'یک رمز، حساب‌های زیاد.',
    ['Password spraying','Classic brute force against one account','Rainbow table attack','Typosquatting'],
    ['Password spraying','Brute force کلاسیک روی یک حساب','حمله با Rainbow table','Typosquatting'],
    'Password spraying tries one or a few common passwords against many accounts. It stays under lockout limits because each account sees only one failure. Detect it by the same password failing across many usernames.',
    'Password spraying یک یا چند رمز رایج را روی حساب‌های زیادی امتحان می‌کند. زیر حد قفل شدن می‌ماند، چون هر حساب فقط یک شکست می‌بیند. تشخیص: یک رمز یکسان که روی نام‌های کاربری زیادی شکست می‌خورد.');

  M(T3,'A SOC analyst wants a SIEM rule that catches password spraying. What should the rule look for?',
    'تحلیلگر SOC قانونی در SIEM می‌خواهد که Password spraying را بگیرد. قانون دنبال چه باشد؟',
    'الگو را برعکس Brute force ببین.',
    ['Failed logins with the same password across many different usernames','Many failed passwords for one username','Successful logins at lunchtime','Large file downloads'],
    ['ورودهای ناموفق با یک رمز یکسان روی نام‌های کاربری زیاد','رمزهای ناموفق زیاد برای یک نام کاربری','ورود موفق در وقت ناهار','دانلود فایل‌های بزرگ'],
    'Spraying = one password, many accounts. Classic brute force = many passwords, one account. If your logs do not store passwords, look for many accounts failing once each from the same source or in the same time window.',
    'Spraying = یک رمز، حساب‌های زیاد. Brute force کلاسیک = رمزهای زیاد، یک حساب. اگر لاگ‌ها رمز را ذخیره نمی‌کنند، دنبال حساب‌های زیادی بگرد که هر کدام یک بار از یک منبع یا در یک بازه‌ی زمانی شکست خورده‌اند.');

  M(T3,'An attacker steals a file of unsalted MD5 password hashes and looks each one up in a huge precomputed table. What is being used, and what would have stopped it?',
    'مهاجمی فایلی از هش‌های MD5 بدون Salt را می‌دزدد و هر کدام را در یک جدول بزرگ از پیش محاسبه‌شده جستجو می‌کند. از چه استفاده می‌کند و چه چیزی جلویش را می‌گرفت؟',
    'جدول آماده‌ی هش‌ها؛ یک مقدار تصادفی برای هر رمز.',
    ['A rainbow table; salting each password before hashing','A dictionary of usernames; longer usernames','Password spraying; account lockout','Typosquatting; registering typos'],
    ['Rainbow table؛ اضافه کردن Salt به هر رمز قبل از هش','فرهنگ لغت نام‌های کاربری؛ نام کاربری طولانی‌تر','Password spraying؛ قفل شدن حساب','Typosquatting؛ ثبت غلط‌های تایپی'],
    'Rainbow tables are precomputed hash-to-password lookups and work offline against stolen hashes. A random salt per password makes precomputed tables useless. MD5 is also weak; use a strong password hashing algorithm.',
    'Rainbow table جستجوی آماده‌ی هش به رمز است و به‌صورت آفلاین روی هش‌های دزدیده‌شده کار می‌کند. Salt تصادفی برای هر رمز جدول‌های آماده را بی‌فایده می‌کند. MD5 هم ضعیف است؛ از الگوریتم قوی هش رمز استفاده کن.');

  M(T3,'What is the main difference between an online and an offline password attack?',
    'فرق اصلی حمله‌ی آنلاین و آفلاین به رمز چیست؟',
    'سیستم زنده یا فایل دزدیده‌شده؟',
    ['Online attacks hit a live system with defenses like lockout; offline attacks crack a stolen password store','Online attacks need internet; offline attacks need a USB drive','Online attacks are always faster','Offline attacks only work against MFA'],
    ['حمله‌ی آنلاین به سیستم زنده با دفاعی مثل قفل حساب می‌خورد؛ آفلاین یک فایل رمز دزدیده‌شده را می‌شکند','آنلاین اینترنت لازم دارد؛ آفلاین فلش USB','آنلاین همیشه سریع‌تر است','آفلاین فقط روی MFA کار می‌کند'],
    'Online attacks are slow and visible in logs. Offline attacks on captured hashes can run at full speed with crackers like John the Ripper or rainbow tables, with no lockout to stop them. Strong salted hashing slows offline attacks.',
    'حمله‌ی آنلاین کند است و در لاگ دیده می‌شود. حمله‌ی آفلاین روی هش‌های دزدیده‌شده با ابزارهایی مثل John the Ripper یا Rainbow table با حداکثر سرعت اجرا می‌شود و هیچ قفلی جلویش نیست. هش قوی با Salt حمله‌ی آفلاین را کند می‌کند.');

  M(T3,'What is the best practice for storing user passwords in an application?',
    'بهترین روش برای ذخیره‌ی رمز کاربران در یک برنامه چیست؟',
    'رمز اصلاً ذخیره نشود.',
    ['Store only a strong salted hash and compare hashes at login','Store passwords encrypted with a key in the same database','Store passwords in plain text in a protected folder','Store MD5 hashes without salt'],
    ['فقط یک هش قوی با Salt ذخیره کن و هنگام ورود هش‌ها را مقایسه کن','رمزها را با کلیدی در همان پایگاه داده رمزگذاری کن','رمزها را به‌صورت متن ساده در پوشه‌ی محافظت‌شده نگه دار','هش MD5 بدون Salt ذخیره کن'],
    'Best practice is to never store the password at all, only a well-built password hash (with salt and optionally a pepper). At login, hash the entered password and compare. Plain text and weak MD5 hashes are easy targets.',
    'بهترین روش این است که خود رمز هیچ‌وقت ذخیره نشود، فقط یک هش خوب ساخته‌شده (با Salt و در صورت تمایل Pepper). هنگام ورود، رمز واردشده را هش کن و مقایسه کن. متن ساده و هش ضعیف MD5 هدف آسانی‌اند.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['4']={t:['Social engineering & passwords','مهندسی اجتماعی و حمله به رمز'],b:[
    PP('Matched to Chapter 4 of the course textbook (objectives 2.2 and 2.4). Short review notes in our own words; read the chapter for the full explanation.',
      'این بخش با فصل ۴ کتاب درس جور است (سرفصل‌های 2.2 و 2.4). یادداشت‌های کوتاه مرور به زبان خودمان؛ توضیح کامل را در کتاب بخوان.'),

    H('Social engineering principles','اصول مهندسی اجتماعی'),
    TB([['Principle','اصل'],['How it works','چطور کار می‌کند']],[
      [['Authority','اقتدار'],['Pretends to be a boss, official or expert','وانمود به رئیس، مقام رسمی یا متخصص']],
      [['Intimidation','ارعاب'],['Scares or bullies the target','هدف را می‌ترساند یا تحت فشار می‌گذارد']],
      [['Consensus (social proof)','اجماع (اثبات اجتماعی)'],['"Everyone else already did it"','«همه قبلاً انجامش داده‌اند»']],
      [['Scarcity','کمیابی'],['"Only a few left"','«فقط چند تا مانده»']],
      [['Familiarity','آشنایی'],['Target already likes the person/brand; feels normal','هدف از قبل شخص/برند را دوست دارد؛ عادی به نظر می‌رسد']],
      [['Trust','اعتماد'],['Attacker builds a relationship first','مهاجم اول رابطه می‌سازد']],
      [['Urgency','فوریت'],['Must act right now','باید همین الان کاری کرد']]]),
    TT('These principles work because people react instead of thinking. Real attacks combine several. The exam does not ask you to label principles, but they explain why attacks work.',
      'این اصول کار می‌کنند چون آدم‌ها واکنش نشان می‌دهند به جای فکر کردن. حمله‌های واقعی چند اصل را ترکیب می‌کنند. امتحان از تو نمی‌خواهد اصول را نام‌گذاری کنی، اما آن‌ها توضیح می‌دهند چرا حمله‌ها موفق می‌شوند.'),

    H('Human vectors','مسیرهای انسانی'),
    TB([['Attack','حمله'],['Key clue','نشانه‌ی کلیدی']],[
      [['Phishing','فیشینگ'],['Fraudulent message (usually email) to steal credentials or data','پیام جعلی (معمولاً ایمیل) برای دزدیدن اطلاعات ورود یا داده']],
      [['Spear phishing / whaling','فیشینگ هدفمند / Whaling'],['Specific people / senior executives','افراد مشخص / مدیران ارشد']],
      [['Vishing','Vishing'],['Phone call or voicemail','تماس تلفنی یا پیام صوتی']],
      [['Smishing','Smishing'],['SMS text, often a link or a request for an MFA code','پیامک، اغلب با لینک یا درخواست کد MFA']],
      [['Misinformation / disinformation','اطلاعات نادرست / گمراه‌کننده'],['Wrong by mistake / false on purpose','غلط از روی اشتباه / دروغ عمدی']],
      [['Impersonation / pretexting','جعل نقش / بهانه‌سازی'],['Pretending to be someone + a made-up story','وانمود به کسی بودن + داستان ساختگی']],
      [['Business email compromise','نفوذ به ایمیل تجاری'],['Legitimate-looking email for invoice/gift card scams','ایمیل با ظاهر واقعی برای کلاهبرداری فاکتور/کارت هدیه']],
      [['Watering hole','Watering hole'],['Infects a site the targets already visit','سایتی که هدف‌ها از قبل می‌بینند را آلوده می‌کند']],
      [['Brand impersonation','جعل برند'],['Copies a trusted brand\'s look','ظاهر یک برند مورد اعتماد را کپی می‌کند']],
      [['Typosquatting','Typosquatting'],['Look-alike domain catches typing mistakes','دامنه‌ی شبیه، اشتباه تایپی را شکار می‌کند']]]),
    L([['Pharming is related: the user types the right address but a changed hosts file or DNS setting sends them to a fake site.','Pharming مرتبط است: کاربر آدرس درست را تایپ می‌کند، اما فایل hosts یا تنظیم DNS تغییرکرده او را به سایت جعلی می‌برد.'],
       ['Defenses: awareness training and exercises, email/SMS filtering, MFA, verification calls, registering common typo domains.','دفاع‌ها: آموزش و تمرین، فیلتر ایمیل/پیامک، MFA، تماس برای تأیید، ثبت دامنه‌های غلط تایپی رایج.'],
       ['CISA TRUST model for MDM: Tell your story, Ready your team, Understand and assess MDM, Strategize response, Track outcomes.','مدل TRUST از CISA برای MDM: داستانت را بگو، تیمت را آماده کن، MDM را بفهم و ارزیابی کن، پاسخ را برنامه‌ریزی کن، نتیجه را پیگیری کن.']]),

    H('Password attacks','حمله به رمز'),
    TB([['Attack','حمله'],['Pattern','الگو']],[
      [['Brute force','Brute force'],['Many passwords → one account (until one works)','رمزهای زیاد ← یک حساب (تا یکی کار کند)']],
      [['Password spraying','Password spraying'],['One/few common passwords → many accounts','یک/چند رمز رایج ← حساب‌های زیاد']],
      [['Dictionary (context)','فرهنگ لغت (برای زمینه)'],['Word list of likely passwords','فهرست کلمات محتمل']],
      [['Rainbow table (context)','Rainbow table (برای زمینه)'],['Precomputed hash lookups, offline','جستجوی هش از پیش محاسبه‌شده، آفلاین']]]),
    L([['Online = live system with lockout and logs. Offline = stolen hash file cracked at full speed (e.g., John the Ripper).','آنلاین = سیستم زنده با قفل و لاگ. آفلاین = فایل هش دزدیده‌شده که با حداکثر سرعت شکسته می‌شود (مثلاً John the Ripper).'],
       ['Salt (random value per password) and pepper make rainbow tables useless. Never store plain text; store a strong password hash.','Salt (مقدار تصادفی برای هر رمز) و Pepper جدول Rainbow را بی‌فایده می‌کنند. هیچ‌وقت متن ساده ذخیره نکن؛ هش قوی رمز را ذخیره کن.']]),

    TT('Exam shortcut: same password, many users = spraying; many passwords, one user = brute force. Typo needed = typosquatting; correct address but wrong site = pharming.',
      'نکته‌ی امتحان: یک رمز، کاربران زیاد = Spraying؛ رمزهای زیاد، یک کاربر = Brute force. اشتباه تایپی لازم است = Typosquatting؛ آدرس درست اما سایت اشتباه = Pharming.')
  ]};
})();
