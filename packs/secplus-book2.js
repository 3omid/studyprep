/* Security+ extension: Section B2, matched to Chapter 2 ("Cybersecurity Threat Landscape") of the course
   textbook (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written
   for the chapter's objectives (2.1, 2.2, 2.3, 4.3); no text or review questions from the book are copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['B2']={en:'Book Ch. 2: Threat landscape',fa:'فصل ۲ کتاب: چشم‌انداز تهدیدها'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b2_'+(++n),sec:'B2',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Threat actors',T2='Motivations & hats',T3='Threat vectors',T4='Threat intelligence';

  /* ---- Threat actors ---- */
  M(T1,'A teenager downloads a ready-made DDoS tool and points it at random school websites without understanding how the tool works. Which threat actor is this?',
    'یک نوجوان یک ابزار آماده‌ی DDoS را دانلود می‌کند و بدون اینکه بداند ابزار چطور کار می‌کند، آن را روی سایت‌های تصادفی مدرسه‌ها اجرا می‌کند. این کدام نوع مهاجم است؟',
    'مهارت کم، ابزار آماده، هدف تصادفی.',
    ['Unskilled attacker (script kiddie)','Hacktivist','Nation-state actor','Organized crime'],
    ['مهاجم کم‌مهارت (Script kiddie)','هکتیویست','مهاجم دولتی','جرائم سازمان‌یافته'],
    'Unskilled attackers rely on tools written by others, have few resources and pick targets of opportunity, often just to prove they can. They are still dangerous because the tools are free and they are numerous.',
    'مهاجم کم‌مهارت از ابزار دیگران استفاده می‌کند، منابع کمی دارد و هدف‌های در دسترس را انتخاب می‌کند؛ اغلب فقط برای نشان دادن توانایی. چون ابزارها رایگان و این افراد زیادند، باز هم خطرناک‌اند.');

  M(T1,'A group defaces an oil company\'s website with a message about climate change and posts the attack proudly on social media. Which threat actor best fits?',
    'گروهی ظاهر سایت یک شرکت نفتی را با پیامی درباره‌ی تغییر اقلیم خراب می‌کند و با افتخار حمله را در شبکه‌های اجتماعی منتشر می‌کند. کدام مهاجم بهتر جور است؟',
    'انگیزه‌ی سیاسی/عقیدتی و پذیرفتن خطر گیر افتادن.',
    ['Hacktivist','Organized crime','Competitor','Shadow IT'],
    ['هکتیویست','جرائم سازمان‌یافته','رقیب تجاری','IT سایه'],
    'Hacktivists act for a cause they see as the greater good. Because they believe in the cause, they are harder to deter and may even accept being caught. Organized crime usually avoids attention and wants money.',
    'هکتیویست برای هدفی کار می‌کند که آن را «خیر عمومی» می‌داند؛ به همین خاطر سخت‌تر بازداشته می‌شود و حتی گیر افتادن را می‌پذیرد. جرائم سازمان‌یافته معمولاً از دیده شدن فرار می‌کند و دنبال پول است.');

  M(T1,'Attackers stay hidden in a defense contractor\'s network for two years, using custom malware and a flaw nobody else knows about. Which actor is most likely?',
    'مهاجمان دو سال در شبکه‌ی یک پیمانکار نظامی پنهان می‌مانند و از بدافزار اختصاصی و یک نقص ناشناخته استفاده می‌کنند. احتمال کدام مهاجم بیشتر است؟',
    'Advanced + Persistent + منابع زیاد.',
    ['A nation-state APT','An unskilled attacker','An insider acting alone','A hacktivist collective'],
    ['APT دولتی','مهاجم کم‌مهارت','یک خودی که تنها کار می‌کند','گروه هکتیویست'],
    'An advanced persistent threat (APT) uses advanced, often custom tools and stays in a target for a long time. Nation-states have the staff, time and money for this and often hold zero-day vulnerabilities for later use.',
    'APT از ابزارهای پیشرفته و اختصاصی استفاده می‌کند و مدت طولانی در هدف می‌ماند. دولت‌ها نیرو، زمان و پول لازم را دارند و اغلب آسیب‌پذیری‌های Zero-day را برای بعد نگه می‌دارند.');

  M(T1,'Which threat actor usually has the most resources and funding?',
    'کدام مهاجم معمولاً بیشترین منابع و بودجه را دارد؟',
    'پشتش یک کشور است.',
    ['Nation-state actor','Organized crime','Hacktivist','Unskilled attacker'],
    ['مهاجم دولتی','جرائم سازمان‌یافته','هکتیویست','مهاجم کم‌مهارت'],
    'Nation-state actors are backed by governments and have nearly unlimited people, time and money. Organized crime is also well funded and invests to make money, but national governments are at the top.',
    'مهاجمان دولتی پشتوانه‌ی دولت دارند و نیرو، زمان و پول تقریباً نامحدود. جرائم سازمان‌یافته هم بودجه‌ی خوبی دارد و برای سود سرمایه‌گذاری می‌کند، اما دولت‌ها بالاترند.');

  M(T1,'A ransomware gang runs a help desk for victims, rents its malware to affiliates and never posts political messages. What is its main motive?',
    'یک گروه باج‌افزاری برای قربانی‌ها پشتیبانی تلفنی دارد، بدافزارش را به همکاران اجاره می‌دهد و هیچ پیام سیاسی نمی‌دهد. انگیزه‌ی اصلی‌اش چیست؟',
    'جرائم سازمان‌یافته = پول.',
    ['Financial gain','Political beliefs','Revenge','Espionage'],
    ['سود مالی','عقاید سیاسی','انتقام','جاسوسی'],
    'Organized crime groups are driven by illegal profit. They run like businesses, are moderately to highly skilled, and prefer to stay out of the news. Ransomware, fraud and selling data on the dark web are typical.',
    'گروه‌های جرائم سازمان‌یافته برای سود غیرقانونی کار می‌کنند. مثل یک کسب‌وکار اداره می‌شوند، مهارت متوسط تا بالا دارند و ترجیح می‌دهند خبرساز نشوند. باج‌افزار، کلاهبرداری و فروش داده در دارک وب نمونه‌ی کارشان است.');

  M(T1,'A database administrator who was passed over for promotion copies the customer list before resigning. What gives this attacker the biggest advantage?',
    'یک مدیر پایگاه داده که ترفیع نگرفته، قبل از استعفا فهرست مشتری‌ها را کپی می‌کند. بزرگ‌ترین مزیت این مهاجم چیست؟',
    'لازم نیست از دیوار بیرونی رد شود.',
    ['Existing authorized access and inside knowledge','Large funding','Custom zero-day exploits','A large group of helpers'],
    ['دسترسی مجاز فعلی و شناخت از داخل','بودجه‌ی زیاد','اکسپلویت Zero-day اختصاصی','گروه بزرگی از همدستان'],
    'Insiders often work alone with little money, but they already have access and know where valuable data is. Behavioral assessments, done together with HR, help spot warning signs early.',
    'خودی‌ها معمولاً تنها و با پول کم کار می‌کنند، اما از قبل دسترسی دارند و می‌دانند داده‌ی ارزشمند کجاست. ارزیابی رفتاری با همکاری منابع انسانی کمک می‌کند نشانه‌ها زود دیده شوند.');

  M(T1,'The marketing team signs up for an unapproved online file-sharing service with a company card to work faster. What is this, and what does it usually tell IT?',
    'تیم بازاریابی برای سریع‌تر کار کردن، با کارت شرکت در یک سرویس اشتراک فایل آنلاین تأییدنشده ثبت‌نام می‌کند. این چیست و معمولاً چه چیزی به IT می‌گوید؟',
    'نیت بد نیست؛ نیاز کاری برآورده نشده.',
    ['Shadow IT; a business need is not being met by approved services','Insider threat; the team is stealing data','Hacktivism; the team disagrees with policy','Supply chain attack; the vendor is malicious'],
    ['IT سایه؛ یک نیاز کاری با سرویس‌های تأییدشده برآورده نشده','تهدید خودی؛ تیم دارد داده می‌دزدد','هکتیویسم؛ تیم با سیاست مخالف است','حمله‌ی زنجیره‌ی تأمین؛ فروشنده بدخواه است'],
    'Shadow IT is technology used without approval, usually by well-meaning staff. The risk is that company data sits with a vendor outside IT\'s control. Talking to the users often finds a safe, approved alternative.',
    'IT سایه یعنی استفاده از فناوری بدون تأیید، معمولاً توسط کارمندان خوش‌نیت. خطرش این است که داده‌ی شرکت پیش فروشنده‌ای خارج از کنترل IT است. صحبت با کاربران معمولاً یک جایگزین امن و تأییدشده پیدا می‌کند.');

  M(T1,'A rival company buys stolen product roadmaps from a dark web market. Which threat actor and motivation fit?',
    'یک شرکت رقیب نقشه‌ی راه محصولات دزدیده‌شده را از یک بازار دارک وب می‌خرد. کدام مهاجم و انگیزه جور است؟',
    'رقیب + اطلاعات محرمانه.',
    ['Competitor; corporate espionage','Hacktivist; political beliefs','Unskilled attacker; thrill','Nation-state; war'],
    ['رقیب؛ جاسوسی صنعتی','هکتیویست؛ عقاید سیاسی','مهاجم کم‌مهارت؛ هیجان','دولت؛ جنگ'],
    'Competitors may steal or buy confidential information such as plans, customer lists or source code to gain a business advantage. Dark web markets sell data no matter how it was obtained, including from insiders.',
    'رقبا ممکن است اطلاعات محرمانه مثل برنامه‌ها، فهرست مشتری یا کد را بدزدند یا بخرند تا مزیت تجاری بگیرند. بازارهای دارک وب داده را می‌فروشند، مهم نیست چطور به دست آمده، حتی از خودی‌ها.');

  /* ---- Motivations & hats ---- */
  M(T2,'Attackers steal photos from a CEO\'s phone and demand payment, or they will publish them. Which motivation is this?',
    'مهاجمان عکس‌هایی از گوشی مدیرعامل می‌دزدند و پول می‌خواهند، وگرنه منتشرشان می‌کنند. این کدام انگیزه است؟',
    'تهدید به افشا برای گرفتن امتیاز.',
    ['Blackmail','Service disruption','Ethical','War'],
    ['اخاذی (Blackmail)','اختلال در سرویس','اخلاقی','جنگ'],
    'Blackmail uses the threat of releasing sensitive information, or of more attacks, to force the victim to pay or give something up. It often follows data exfiltration.',
    'اخاذی با تهدید به افشای اطلاعات حساس یا حمله‌ی بیشتر، قربانی را مجبور به پرداخت یا دادن امتیاز می‌کند. اغلب بعد از خارج کردن داده (Exfiltration) می‌آید.');

  M(T2,'During an armed conflict, hackers knock out the power grid of the enemy country to support troops on the ground. Which motivation is this?',
    'در یک درگیری مسلحانه، هکرها شبکه‌ی برق کشور دشمن را از کار می‌اندازند تا به نیروهای زمینی کمک کنند. این کدام انگیزه است؟',
    'هدف: تغییر نتیجه‌ی جنگ.',
    ['War','Financial gain','Revenge','Philosophical beliefs'],
    ['جنگ','سود مالی','انتقام','باورهای فلسفی'],
    'War as a motivation means military units or civilian groups use cyberattacks to disrupt military operations or change the outcome of an armed conflict. Service disruption is the method; war is the reason.',
    'انگیزه‌ی جنگ یعنی واحدهای نظامی یا گروه‌های غیرنظامی با حمله‌ی سایبری عملیات نظامی را مختل می‌کنند یا نتیجه‌ی جنگ را تغییر می‌دهند. اختلال در سرویس روش است؛ جنگ دلیل.');

  M(T2,'A fired employee deletes shared folders on his last night "to make them pay for how I was treated." Which motivation is this?',
    'کارمند اخراج‌شده‌ای در آخرین شب کاری پوشه‌های مشترک را پاک می‌کند تا «تاوان رفتاری که با من شد را بدهند». این کدام انگیزه است؟',
    'تلافی شخصی.',
    ['Revenge','Espionage','Data exfiltration','Ethical'],
    ['انتقام','جاسوسی','خارج کردن داده','اخلاقی'],
    'Revenge attacks aim to get even with a person or organization by embarrassing or harming them. Disgruntled insiders are a common source.',
    'حمله‌ی انتقامی برای تلافی کردن از یک شخص یا سازمان است؛ با آبروریزی یا آسیب زدن. کارمندان ناراضی منبع رایج آن هستند.');

  M(T2,'While shopping online, a customer changes a number in the URL, sees another person\'s order, stops, and emails the store about the flaw. No one gave her permission. What is she?',
    'مشتری‌ای هنگام خرید آنلاین یک عدد را در URL عوض می‌کند، سفارش شخص دیگری را می‌بیند، دست نگه می‌دارد و درباره‌ی نقص به فروشگاه ایمیل می‌زند. کسی به او اجازه نداده بود. او چیست؟',
    'نیت خوب، ولی بدون مجوز.',
    ['Semi-authorized (gray hat) attacker','Authorized (white hat) attacker','Unauthorized (black hat) attacker','Insider threat'],
    ['مهاجم نیمه‌مجاز (کلاه خاکستری)','مهاجم مجاز (کلاه سفید)','مهاجم غیرمجاز (کلاه سیاه)','تهدید خودی'],
    'Gray-hat (semi-authorized) attackers act without permission but intend to tell the target about the flaw. Good intent does not make it legal. White hats have authorization; black hats have malicious intent.',
    'کلاه خاکستری (نیمه‌مجاز) بدون اجازه کار می‌کند اما قصد دارد نقص را به هدف اطلاع دهد. نیت خوب کار را قانونی نمی‌کند. کلاه سفید مجوز دارد؛ کلاه سیاه نیت بد دارد.');

  M(T2,'A bank signs a contract with a security firm to try to break into its online banking app and report every flaw found. What are the testers?',
    'یک بانک با یک شرکت امنیتی قرارداد می‌بندد تا برای نفوذ به اپ بانکداری آنلاینش تلاش کند و همه‌ی نقص‌ها را گزارش دهد. آزمایش‌کننده‌ها چه هستند؟',
    'قرارداد = اجازه.',
    ['Authorized (white hat) attackers','Semi-authorized (gray hat) attackers','Unauthorized (black hat) attackers','Hacktivists'],
    ['مهاجمان مجاز (کلاه سفید)','مهاجمان نیمه‌مجاز (کلاه خاکستری)','مهاجمان غیرمجاز (کلاه سیاه)','هکتیویست‌ها'],
    'Authorized attackers (white hats) have permission and try to find weaknesses so they can be fixed. Penetration testers, internal or hired, are the classic example. Their motivation is "ethical."',
    'مهاجمان مجاز (کلاه سفید) اجازه دارند و دنبال ضعف‌ها می‌گردند تا رفع شوند. تست‌کننده‌ی نفوذ، داخلی یا قراردادی، نمونه‌ی کلاسیک است. انگیزه‌شان «اخلاقی» است.');

  /* ---- Threat vectors ---- */
  M(T3,'An attacker sends a text message that looks like it is from a delivery company, with a link to "reschedule your package." Which message-based vector is this?',
    'مهاجم پیامکی می‌فرستد که شبیه پیام شرکت پست است و لینکی برای «تغییر زمان تحویل بسته» دارد. این کدام مسیر پیام‌محور است؟',
    'Short Message Service.',
    ['SMS','Email','Instant messaging','Voice call'],
    ['پیامک (SMS)','ایمیل','پیام‌رسان فوری (IM)','تماس صوتی'],
    'Message-based vectors include email, SMS (text messages) and instant messaging apps. A phishing attack by text is called smishing. Voice calls are a separate vector (vishing).',
    'مسیرهای پیام‌محور شامل ایمیل، پیامک و اپ‌های پیام‌رسان فوری است. فیشینگ با پیامک را Smishing می‌گویند. تماس صوتی مسیر جداست (Vishing).');

  M(T3,'Someone in a café near the office connects to the company\'s Wi-Fi because it still uses an old, weak password. Which attack surface was used?',
    'کسی در کافه‌ای نزدیک دفتر به Wi-Fi شرکت وصل می‌شود، چون هنوز رمز قدیمی و ضعیفی دارد. از کدام سطح حمله استفاده شد؟',
    'لازم نبود وارد ساختمان شود.',
    ['Unsecure wireless network','Unsecure wired network','Removable device','Supply chain'],
    ['شبکه‌ی بی‌سیم ناامن','شبکه‌ی سیمی ناامن','دستگاه قابل‌حمل','زنجیره‌ی تأمین'],
    'Wireless networks let attackers reach the internal network from outside the building, such as a parking lot. Wired networks usually need physical access to a jack. Bluetooth devices without security settings are another unsecure network vector.',
    'شبکه‌ی بی‌سیم اجازه می‌دهد مهاجم از بیرون ساختمان (مثلاً پارکینگ) به شبکه‌ی داخلی برسد. شبکه‌ی سیمی معمولاً به دسترسی فیزیکی به پریز شبکه نیاز دارد. دستگاه‌های بلوتوث بدون تنظیمات امنیتی هم مسیر دیگری هستند.');

  M(T3,'A new security camera still accepts the username "admin" and password "admin" that are printed in its public manual. Which vector is this?',
    'یک دوربین امنیتی جدید هنوز نام کاربری «admin» و رمز «admin» را که در دفترچه‌ی عمومی‌اش چاپ شده می‌پذیرد. این کدام مسیر است؟',
    'رمزی که هیچ‌وقت عوض نشده.',
    ['Default credentials','Open service ports','Unsupported systems','Image-based vector'],
    ['اطلاعات ورود پیش‌فرض','پورت‌های سرویس باز','سیستم‌های بدون پشتیبانی','مسیر مبتنی بر تصویر'],
    'Default credentials are well known and published, so any device left with them is easy to take over. Changing them during setup is a basic hardening step.',
    'اطلاعات ورود پیش‌فرض معروف و منتشرشده است؛ هر دستگاهی که با آن رها شود به‌راحتی تسخیر می‌شود. عوض کردنش هنگام نصب یک قدم پایه‌ی سخت‌سازی است.');

  M(T3,'A factory still runs a control PC on an operating system the vendor stopped updating years ago. What is the main security concern?',
    'یک کارخانه هنوز یک کامپیوتر کنترلی با سیستم‌عاملی دارد که سازنده سال‌هاست به‌روزرسانی‌اش را متوقف کرده. نگرانی اصلی امنیتی چیست؟',
    'نقص‌های جدید هیچ‌وقت رفع نمی‌شوند.',
    ['No new security patches will be released','The computer will run slowly','The license will cost more','Users will need new training'],
    ['هیچ وصله‌ی امنیتی جدیدی منتشر نمی‌شود','کامپیوتر کند کار می‌کند','لایسنس گران‌تر می‌شود','کاربران آموزش جدید لازم دارند'],
    'Unsupported systems and applications get no more patches, so every new vulnerability stays open forever. If the system cannot be replaced, isolate it and add compensating controls.',
    'سیستم‌ها و برنامه‌های بدون پشتیبانی دیگر وصله نمی‌گیرند؛ پس هر آسیب‌پذیری جدید برای همیشه باز می‌ماند. اگر جایگزینی ممکن نیست، جدایش کن و کنترل جبرانی بگذار.');

  M(T3,'A security team must check laptops for vulnerabilities, but the company does not allow extra software to be installed on them. Which approach fits?',
    'تیم امنیت باید لپ‌تاپ‌ها را از نظر آسیب‌پذیری بررسی کند، اما شرکت اجازه‌ی نصب نرم‌افزار اضافه روی آن‌ها را نمی‌دهد. کدام روش جور است؟',
    'بدون Agent.',
    ['Agentless scanning over the network','Client-based (agent) scanning','Disabling the laptops\' firewalls','Waiting for users to report problems'],
    ['اسکن بدون Agent از طریق شبکه','اسکن مبتنی بر کلاینت (Agent)','خاموش کردن فایروال لپ‌تاپ‌ها','صبر تا کاربران مشکل را گزارش دهند'],
    'Client-based tools install an agent on each device; agentless tools reach devices over the network without installing anything. Note that agents themselves are software and can add vulnerabilities to the attack surface.',
    'ابزار مبتنی بر کلاینت روی هر دستگاه یک Agent نصب می‌کند؛ ابزار بدون Agent از طریق شبکه به دستگاه می‌رسد و چیزی نصب نمی‌کند. توجه کن که خود Agent هم نرم‌افزار است و می‌تواند آسیب‌پذیری به سطح حمله اضافه کند.');

  M(T3,'Attackers break into an IT company that remotely manages servers for 200 clients, then use its tools to push ransomware to those clients. Which vector is this?',
    'مهاجمان به یک شرکت IT که سرورهای ۲۰۰ مشتری را از راه دور مدیریت می‌کند نفوذ می‌کنند و با ابزارهای خودش باج‌افزار را به آن مشتری‌ها می‌فرستند. این کدام مسیر است؟',
    'از طریق شریکی که به همه دسترسی دارد.',
    ['Supply chain (managed service provider)','Removable device','Typosquatting','Open service ports'],
    ['زنجیره‌ی تأمین (ارائه‌دهنده‌ی خدمات مدیریت‌شده، MSP)','دستگاه قابل‌حمل','Typosquatting','پورت‌های سرویس باز'],
    'Supply chain attacks hit an organization through its MSPs, vendors or suppliers. An MSP already has trusted access to many customers, so one breach spreads widely. Strong vendor management helps.',
    'حمله‌ی زنجیره‌ی تأمین از طریق MSPها، فروشندگان یا تأمین‌کنندگان به سازمان می‌رسد. MSP از قبل به مشتری‌های زیادی دسترسی مورد اعتماد دارد؛ پس یک نفوذ گسترده پخش می‌شود. مدیریت خوب فروشنده کمک می‌کند.');

  M(T3,'A batch of routers is intercepted during shipping and a backdoor is added to their firmware before they reach the customer. What type of vulnerability is this?',
    'یک محموله روتر در مسیر ارسال رهگیری می‌شود و قبل از رسیدن به مشتری یک در پشتی در فریم‌ورشان قرار می‌گیرد. این کدام نوع آسیب‌پذیری است؟',
    'مشکل از تأمین سخت‌افزار است.',
    ['Hardware provider supply chain','Software provider supply chain','Zero-day in the operating system','Default credentials'],
    ['زنجیره‌ی تأمین سخت‌افزار','زنجیره‌ی تأمین نرم‌افزار','Zero-day در سیستم‌عامل','اطلاعات ورود پیش‌فرض'],
    'Supply chain vulnerabilities can come from hardware providers (tampering at the factory or in transit), software providers (malicious code in releases or updates) or service providers. They are hard to detect once installed.',
    'آسیب‌پذیری زنجیره‌ی تأمین می‌تواند از تأمین‌کننده‌ی سخت‌افزار (دستکاری در کارخانه یا مسیر)، تأمین‌کننده‌ی نرم‌افزار (کد مخرب در نسخه یا آپدیت) یا ارائه‌دهنده‌ی خدمات باشد. بعد از نصب سخت پیدا می‌شوند.');

  M(T3,'Why is a zero-day vulnerability especially dangerous?',
    'چرا آسیب‌پذیری Zero-day به‌طور خاص خطرناک است؟',
    'سازنده هنوز از آن خبر ندارد.',
    ['The vendor does not know about it, so no patch exists','It only affects old systems','It always needs physical access','It is listed in every threat feed'],
    ['سازنده از آن خبر ندارد، پس وصله‌ای وجود ندارد','فقط روی سیستم‌های قدیمی اثر دارد','همیشه دسترسی فیزیکی لازم دارد','در همه‌ی فیدهای تهدید آمده است'],
    'A zero-day is a flaw unknown to the vendor and defenders, so there is no patch. APT groups often find zero-days themselves and keep them secret for later use. Defense in depth and behavior-based detection help.',
    'Zero-day نقصی است که سازنده و مدافعان از آن خبر ندارند؛ پس وصله‌ای نیست. گروه‌های APT اغلب خودشان Zero-day پیدا می‌کنند و برای بعد مخفی نگه می‌دارند. دفاع چندلایه و تشخیص رفتاری کمک می‌کنند.');

  M(T3,'Scanning cloud storage, an analyst finds a public file. Which of these contents is the most urgent to fix?',
    'تحلیلگری در اسکن فضای ابری یک فایل عمومی پیدا می‌کند. کدام محتوا فوری‌ترین مشکل است؟',
    'چیزی که مستقیم دسترسی می‌دهد.',
    ['Live API keys and passwords','A published press release','A public product brochure','Open source license text'],
    ['کلیدهای API و رمزهای فعال','یک بیانیه‌ی خبری منتشرشده','بروشور عمومی محصول','متن لایسنس متن‌باز'],
    'Attackers routinely scan cloud services for files with weak access controls and exposed secrets. An API key or password gives direct access, so it must be revoked and rotated right away, not just hidden.',
    'مهاجمان مرتب سرویس‌های ابری را برای فایل‌هایی با کنترل دسترسی ضعیف و اسرار لو رفته می‌گردند. کلید API یا رمز مستقیم دسترسی می‌دهد؛ پس باید فوراً باطل و عوض شود، نه فقط پنهان.');

  /* ---- Threat intelligence ---- */
  M(T4,'An analyst researches a target using search engines, public social media, WHOIS records and DNS lookups. What is this called?',
    'تحلیلگری با موتور جستجو، شبکه‌های اجتماعی عمومی، رکوردهای WHOIS و جستجوی DNS درباره‌ی یک هدف تحقیق می‌کند. اسم این کار چیست؟',
    'منابع عمومی و در دسترس همه.',
    ['Open-source intelligence (OSINT)','Proprietary intelligence','Dark web monitoring','Port scanning'],
    ['اطلاعات منبع‌باز (OSINT)','اطلاعات اختصاصی','پایش دارک وب','اسکن پورت'],
    'OSINT is intelligence gathered from publicly available sources. Port scans are not OSINT because they actively touch the target\'s systems.',
    'OSINT اطلاعاتی است که از منابع عمومی جمع می‌شود. اسکن پورت OSINT نیست، چون مستقیماً با سیستم‌های هدف تماس می‌گیرد.');

  M(T4,'A company pays a vendor for a curated threat feed built with the vendor\'s own research and tools. Which identification method is this?',
    'شرکتی برای یک فید تهدید گزینش‌شده که با تحقیق و ابزارهای خود فروشنده ساخته شده پول می‌دهد. این کدام روش شناسایی است؟',
    'منبعش خصوصی است و فروخته می‌شود.',
    ['Proprietary/third-party (closed-source) intelligence','Open-source intelligence','Information-sharing organization','Responsible disclosure'],
    ['اطلاعات اختصاصی/شخص ثالث (منبع‌بسته)','اطلاعات منبع‌باز','سازمان اشتراک اطلاعات','افشای مسئولانه'],
    'Proprietary or closed-source intelligence comes from vendors who keep their methods secret and sell the results. It saves effort because the vendor filters and validates huge amounts of open data.',
    'اطلاعات اختصاصی یا منبع‌بسته از فروشنده‌هایی می‌آید که روش‌هایشان را مخفی نگه می‌دارند و نتیجه را می‌فروشند. کار را کم می‌کند، چون فروشنده حجم زیادی از داده‌ی باز را فیلتر و تأیید می‌کند.');

  M(T4,'A hospital joins a sector group where members share attack details with each other under a trust agreement and get 24/7 analysis. What kind of group is this?',
    'یک بیمارستان عضو گروهی در صنعت خودش می‌شود که اعضا با توافق اعتماد جزئیات حمله‌ها را با هم به اشتراک می‌گذارند و تحلیل شبانه‌روزی می‌گیرند. این چه گروهی است؟',
    'Information Sharing and Analysis Center.',
    ['An ISAC (information-sharing organization)','A bug bounty program','A dark web forum','An Approved Scanning Vendor'],
    ['ISAC (سازمان اشتراک اطلاعات)','برنامه‌ی Bug bounty','انجمن دارک وب','فروشنده‌ی اسکن مورد تأیید (ASV)'],
    'ISACs are sector-based communities (health, finance, energy…) where members share threat information on a trust model. Many run 24/7 and offer incident response help to members.',
    'ISACها جامعه‌هایی بر اساس صنعت (سلامت، مالی، انرژی…) هستند که اعضا با مدل اعتماد اطلاعات تهدید را به اشتراک می‌گذارند. بسیاری شبانه‌روزی کار می‌کنند و به اعضا در پاسخ به حادثه کمک می‌کنند.');

  M(T4,'Employee usernames and passwords from your company suddenly appear for sale on a Tor marketplace. What should you conclude?',
    'نام کاربری و رمز کارمندان شرکتت ناگهان در یک بازار روی Tor برای فروش گذاشته می‌شود. چه نتیجه‌ای باید بگیری؟',
    'این داده از جایی لو رفته.',
    ['A successful compromise has likely happened and needs investigation','It is normal background noise and can be ignored','The Tor network itself was hacked','Only the employees\' personal accounts are at risk'],
    ['احتمالاً یک نفوذ موفق رخ داده و باید بررسی شود','نویز عادی است و می‌شود نادیده گرفت','خود شبکه‌ی Tor هک شده','فقط حساب‌های شخصی کارمندان در خطر است'],
    'The dark web uses layered encryption (for example Tor) for anonymity, and criminals sell stolen data there. Monitoring it for your organization\'s credentials can reveal a breach early; reset the accounts and investigate.',
    'دارک وب با رمزگذاری چندلایه (مثل Tor) ناشناس می‌ماند و مجرمان داده‌ی دزدی را آنجا می‌فروشند. پایش آن برای اطلاعات ورود سازمان می‌تواند نفوذ را زود نشان دهد؛ حساب‌ها را ریست و موضوع را بررسی کن.');

  M(T4,'Another company shares the file hashes, C2 IP addresses and registry keys left behind by malware that hit them. What are these?',
    'شرکت دیگری هش فایل‌ها، آدرس IP سرورهای C2 و کلیدهای رجیستری باقی‌مانده از بدافزاری که به آن‌ها حمله کرد را به اشتراک می‌گذارد. این‌ها چه هستند؟',
    'نشانه‌هایی که می‌گویند حمله رخ داده.',
    ['Indicators of compromise (IoCs)','Tactics, techniques and procedures (TTPs)','CVSS scores','Requests for Comments (RFCs)'],
    ['شاخص‌های نفوذ (IoC)','تاکتیک‌ها، تکنیک‌ها و رویه‌ها (TTP)','امتیازهای CVSS','اسناد RFC'],
    'IoCs are telltale signs that an attack happened: hashes, IPs, domains, file paths, log patterns. TTPs describe how an attacker behaves in general. You can search your own systems for shared IoCs.',
    'IoCها نشانه‌هایی هستند که می‌گویند حمله رخ داده: هش، IP، دامنه، مسیر فایل، الگوی لاگ. TTP رفتار کلی مهاجم را توصیف می‌کند. می‌توانی سیستم‌های خودت را برای IoCهای اشتراکی جستجو کنی.');

  M(T4,'A threat feed is fast and well sourced, but every alert is about software your company does not use. Which assessment factor does it fail?',
    'یک فید تهدید سریع و با منابع خوب است، اما همه‌ی هشدارهایش درباره‌ی نرم‌افزاری است که شرکتت استفاده نمی‌کند. در کدام معیار ارزیابی رد می‌شود؟',
    'به درد ما نمی‌خورد.',
    ['Relevance','Timeliness','Accuracy','Confidence score'],
    ['ارتباط (Relevance)','به‌موقع بودن','دقت','امتیاز اطمینان'],
    'Threat intelligence is assessed for timeliness (is it current?), accuracy (can it be trusted?) and relevance (does it apply to us?). Perfectly timely and accurate data is useless if it is not relevant.',
    'اطلاعات تهدید از سه جهت ارزیابی می‌شود: به‌موقع بودن، دقت و ارتباط با ما. داده‌ی کاملاً به‌روز و دقیق اگر به ما مربوط نباشد بی‌فایده است.');

  M(T4,'Two security tools need to exchange threat data automatically. Which pair is the standard format and transport for this?',
    'دو ابزار امنیتی باید داده‌ی تهدید را خودکار با هم مبادله کنند. کدام جفت، قالب و پروتکل انتقال استاندارد این کار است؟',
    'یکی زبان توصیف است، یکی پروتکل HTTPS.',
    ['STIX for the data format and TAXII for the transport','TAXII for the data format and STIX for the transport','CVSS for the data format and CVE for the transport','RFC for the data format and SMTP for the transport'],
    ['STIX برای قالب داده و TAXII برای انتقال','TAXII برای قالب داده و STIX برای انتقال','CVSS برای قالب و CVE برای انتقال','RFC برای قالب و SMTP برای انتقال'],
    'STIX (Structured Threat Information eXpression) describes threat objects such as threat actors, malware and attack patterns. TAXII is the protocol that carries STIX data over HTTPS. Both are now maintained by OASIS.',
    'STIX شیءهای تهدید مثل مهاجم، بدافزار و الگوی حمله را توصیف می‌کند. TAXII پروتکلی است که داده‌ی STIX را روی HTTPS منتقل می‌کند. هر دو حالا توسط OASIS نگهداری می‌شوند.');

  M(T4,'An engineer wants the exact technical specification of how the DNS protocol works. Which source is the authoritative one?',
    'مهندسی مشخصات فنی دقیق کارکرد پروتکل DNS را می‌خواهد. کدام منبع مرجع اصلی است؟',
    'اسناد استاندارد پروتکل‌های اینترنت.',
    ['Internet RFC documents','Vendor marketing blogs','A threat map','Social media posts by experts'],
    ['اسناد RFC اینترنت','وبلاگ‌های تبلیغاتی فروشنده','نقشه‌ی تهدید','پست‌های متخصصان در شبکه‌های اجتماعی'],
    'Requests for Comments (RFCs) hold the detailed technical specifications of Internet protocols. Vendor sites, conferences, academic journals and social media are useful for research, but RFCs define the protocol.',
    'RFCها مشخصات فنی دقیق پروتکل‌های اینترنت را دارند. سایت فروشنده، کنفرانس، مجلات علمی و شبکه‌های اجتماعی برای تحقیق مفیدند، اما RFC خود پروتکل را تعریف می‌کند.');

  M(T4,'A live threat map shows most attacks on your network coming from one country. Why should you be careful with this conclusion?',
    'یک نقشه‌ی تهدید زنده نشان می‌دهد بیشتر حمله‌ها به شبکه‌ات از یک کشور می‌آید. چرا باید در این نتیجه‌گیری محتاط بود؟',
    'مهاجمان از سیستم‌های دیگران عبور می‌کنند.',
    ['Attackers relay through cloud services and compromised systems, so location is unreliable','Threat maps only show old attacks','Threat maps never show real data','Countries cannot be identified from IP addresses at all'],
    ['مهاجمان از سرویس‌های ابری و سیستم‌های آلوده عبور می‌کنند؛ پس موقعیت قابل اعتماد نیست','نقشه‌ها فقط حمله‌های قدیمی را نشان می‌دهند','نقشه‌ها هیچ‌وقت داده‌ی واقعی نشان نمی‌دهند','از IP اصلاً نمی‌شود کشور را فهمید'],
    'Threat maps give a geographic view of attacks, but attribution by location is notoriously unreliable because attackers hide behind relays, VPNs, cloud hosts and botnets.',
    'نقشه‌ی تهدید نمای جغرافیایی حمله‌ها را نشان می‌دهد، اما نسبت دادن بر اساس مکان بسیار غیرقابل اعتماد است، چون مهاجمان پشت سرورهای واسط، VPN، میزبان‌های ابری و بات‌نت پنهان می‌شوند.');

  M(T4,'A new report has a confidence score of 35 on a 1–100 scale. How should the team treat it?',
    'یک گزارش جدید روی مقیاس ۱ تا ۱۰۰ امتیاز اطمینان ۳۵ دارد. تیم با آن چطور رفتار کند؟',
    'نادیده نگیر، ولی تصمیم بزرگ هم نگیر.',
    ['Keep watching it, but do not base major decisions on it yet','Delete it because it is discredited','Act on it immediately as confirmed','Share it publicly as a confirmed threat'],
    ['زیر نظرش داشته باش، اما فعلاً تصمیم مهمی بر اساسش نگیر','پاکش کن چون بی‌اعتبار است','فوراً مثل یک تهدید تأییدشده عمل کن','عمومی منتشرش کن به‌عنوان تهدید قطعی'],
    'Low-confidence intelligence (here in the "doubtful" range) is often early information that may firm up as more sources confirm it. Do not ignore it, but do not rely on it alone for big decisions. "Discredited" is the lowest level, proven wrong.',
    'اطلاعات با اطمینان پایین (اینجا در محدوده‌ی «مشکوک») اغلب اطلاعات اولیه است که با تأیید منابع بیشتر محکم می‌شود. نادیده‌اش نگیر، اما برای تصمیم بزرگ فقط به آن تکیه نکن. «Discredited» پایین‌ترین سطح است، یعنی ثابت شده غلط است.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['B2']={t:['Book Ch. 2: Threat landscape','فصل ۲ کتاب: چشم‌انداز تهدیدها'],b:[
    PP('Matched to Chapter 2 of the course textbook (objectives 2.1, 2.2, 2.3 and 4.3). These are short review notes in our own words; read the chapter itself for the full explanation.',
      'این بخش با فصل ۲ کتاب درس جور است (سرفصل‌های 2.1، 2.2، 2.3 و 4.3). این‌ها یادداشت‌های کوتاه مرور به زبان خودمان است؛ توضیح کامل را در خود کتاب بخوان.'),

    H('Four attributes of a threat actor','چهار ویژگی هر مهاجم'),
    L([['Internal or external: inside the organization (insider) or outside it.','داخلی یا خارجی: درون سازمان (خودی) یا بیرون آن.'],
       ['Sophistication/capability: from tool-users to researchers who find their own zero-days.','پیچیدگی/توانایی: از کسی که فقط ابزار اجرا می‌کند تا محققی که خودش Zero-day پیدا می‌کند.'],
       ['Resources/funding: from spare-time hobbyists to government budgets.','منابع/بودجه: از آماتور در وقت آزاد تا بودجه‌ی دولتی.'],
       ['Intent/motivation: why they attack (money, cause, revenge, war…).','نیت/انگیزه: چرا حمله می‌کنند (پول، آرمان، انتقام، جنگ…).']]),

    H('Threat actors compared','مقایسه‌ی مهاجمان'),
    TB([['Actor','مهاجم'],['Skill','مهارت'],['Resources','منابع'],['Typical motive','انگیزه‌ی معمول']],[
      [['Unskilled attacker','کم‌مهارت'],['Low','کم'],['Very few','خیلی کم'],['Thrill, proving skill','هیجان، نشان دادن توانایی']],
      [['Hacktivist','هکتیویست'],['Low to high','کم تا زیاد'],['Low; more in groups (Anonymous)','کم؛ در گروه بیشتر (Anonymous)'],['Political/philosophical beliefs','عقاید سیاسی/فلسفی']],
      [['Organized crime','جرائم سازمان‌یافته'],['Medium to high','متوسط تا زیاد'],['High','زیاد'],['Financial gain','سود مالی']],
      [['Nation-state / APT','دولتی / APT'],['Very high','خیلی زیاد'],['Highest','بیشترین'],['Espionage, politics, war','جاسوسی، سیاست، جنگ']],
      [['Insider','خودی'],['Any','هر سطحی'],['Low, but has access','کم، اما دسترسی دارد'],['Revenge, money, activism','انتقام، پول، فعالیت آرمانی']],
      [['Competitor','رقیب'],['Varies','متغیر'],['Medium','متوسط'],['Corporate espionage','جاسوسی صنعتی']],
      [['Shadow IT','IT سایه'],['N/A (not malicious)','ندارد (بدخواه نیست)'],['—','—'],['Getting work done faster','کار سریع‌تر']]]),
    TT('Hats: white = authorized, black = unauthorized/malicious, gray = semi-authorized (no permission, but reports the flaw). Gray-hat hacking can still be a crime.',
      'کلاه‌ها: سفید = مجاز، سیاه = غیرمجاز/بدخواه، خاکستری = نیمه‌مجاز (بدون اجازه، اما نقص را گزارش می‌دهد). کار کلاه خاکستری هم می‌تواند جرم باشد.'),

    H('Motivations','انگیزه‌ها'),
    L([['Data exfiltration (steal data), espionage (secrets of states or companies), service disruption (take systems down).','Data exfiltration (دزدیدن داده)، جاسوسی (اسرار دولت یا شرکت)، اختلال در سرویس (از کار انداختن سیستم‌ها).'],
       ['Blackmail (threaten to leak), financial gain (theft, fraud, ransom), philosophical/political beliefs (hacktivists).','اخاذی (تهدید به افشا)، سود مالی (دزدی، کلاهبرداری، باج)، باورهای سیاسی/فلسفی (هکتیویست‌ها).'],
       ['Ethical (white hats), revenge (get even), disruption/chaos, war (support military goals).','اخلاقی (کلاه سفید)، انتقام (تلافی)، ایجاد هرج‌ومرج، جنگ (کمک به اهداف نظامی).']]),

    H('Threat vectors and attack surfaces','مسیرهای تهدید و سطح حمله'),
    PP('Attack surface = the systems, apps and services an attacker could exploit. Threat vector = the path used to get in. Security teams try to shrink the attack surface.',
      'سطح حمله = سیستم‌ها، برنامه‌ها و سرویس‌هایی که مهاجم می‌تواند از آن‌ها سوءاستفاده کند. مسیر تهدید = راهی که برای ورود استفاده می‌شود. تیم امنیت سعی می‌کند سطح حمله را کوچک کند.'),
    L([['Message-based: email, SMS, instant messaging. Also voice calls (vishing), image-based and file-based (malicious code hidden in files).','پیام‌محور: ایمیل، پیامک، پیام‌رسان. همچنین تماس صوتی (Vishing)، مبتنی بر تصویر و فایل (کد مخرب داخل فایل).'],
       ['Removable devices: USB sticks dropped in public places for curious people to plug in.','دستگاه قابل‌حمل: فلش USB رها شده در مکان عمومی تا آدم کنجکاو وصلش کند.'],
       ['Vulnerable software: client-based (agent installed) vs. agentless. Unsupported systems and applications get no patches.','نرم‌افزار آسیب‌پذیر: مبتنی بر کلاینت (Agent نصب‌شده) در برابر بدون Agent. سیستم‌ها و برنامه‌های بدون پشتیبانی وصله نمی‌گیرند.'],
       ['Unsecure networks: wireless (from the parking lot), wired (open jack in a lobby), Bluetooth.','شبکه‌های ناامن: بی‌سیم (از پارکینگ)، سیمی (پریز باز در لابی)، بلوتوث.'],
       ['Open service ports that are not needed, and default credentials that were never changed.','پورت‌های سرویس باز و غیرضروری، و اطلاعات ورود پیش‌فرض که هیچ‌وقت عوض نشده.'],
       ['Supply chain: MSPs, vendors and suppliers (hardware, software and service providers).','زنجیره‌ی تأمین: MSPها، فروشندگان و تأمین‌کنندگان (سخت‌افزار، نرم‌افزار و خدمات).'],
       ['Cloud: public files, exposed API keys and misconfigured services.','ابر: فایل‌های عمومی، کلیدهای API لو رفته و سرویس‌های بد پیکربندی‌شده.']]),
    TT('Zero-day = unknown to the vendor, no patch exists yet. A favorite of APTs.',
      'Zero-day = سازنده از آن خبر ندارد و هنوز وصله‌ای نیست. مورد علاقه‌ی APTها.'),

    H('Threat intelligence sources','منابع اطلاعات تهدید'),
    TB([['Source','منبع'],['What it is','چیست']],[
      [['OSINT','OSINT'],['Public sources: websites, DNS, WHOIS, social media, government alerts (CISA)','منابع عمومی: سایت‌ها، DNS، WHOIS، شبکه‌های اجتماعی، هشدارهای دولتی (CISA)']],
      [['Proprietary / third-party','اختصاصی / شخص ثالث'],['Paid, closed-source feeds with the vendor\'s own research','فیدهای پولی و منبع‌بسته با تحقیق خود فروشنده']],
      [['Information-sharing organization','سازمان اشتراک اطلاعات'],['ISACs: sector members share on a trust model','ISAC: اعضای یک صنعت با مدل اعتماد به اشتراک می‌گذارند']],
      [['Dark web','دارک وب'],['Tor markets selling stolen data; watch for your credentials','بازارهای Tor که داده‌ی دزدی می‌فروشند؛ دنبال اطلاعات ورود خودت بگرد']],
      [['Threat feed','فید تهدید'],['Machine-readable IoCs: IPs, domains, hashes, CVEs','IoCهای قابل خواندن برای ماشین: IP، دامنه، هش، CVE']]]),
    L([['Assess intel by timeliness, accuracy and relevance; summarize with a confidence score (confirmed → discredited).','اطلاعات را با به‌موقع بودن، دقت و ارتباط ارزیابی کن؛ با امتیاز اطمینان خلاصه کن (تأییدشده تا بی‌اعتبار).'],
       ['IoC = evidence an attack happened. TTP = how an attacker operates.','IoC = شواهدی که حمله رخ داده. TTP = روش کار مهاجم.'],
       ['STIX = format for threat data (JSON objects). TAXII = HTTPS transport for STIX. Both run by OASIS.','STIX = قالب داده‌ی تهدید (شیء JSON). TAXII = انتقال STIX روی HTTPS. هر دو زیر نظر OASIS.'],
       ['Threat maps show attacks by location, but geographic attribution is unreliable.','نقشه‌ی تهدید حمله‌ها را بر اساس مکان نشان می‌دهد، اما نسبت دادن جغرافیایی قابل اعتماد نیست.'],
       ['Own research: vendor sites, feeds, academic journals, RFCs (protocol specs), conferences, social media.','تحقیق شخصی: سایت فروشنده، فیدها، مجلات علمی، RFC (مشخصات پروتکل)، کنفرانس، شبکه‌های اجتماعی.']]),

    TT('Exam shortcut: money = organized crime; cause = hacktivist; long, stealthy, well funded = nation-state APT; already has access = insider; unapproved but well-meaning = shadow IT.',
      'نکته‌ی امتحان: پول = جرائم سازمان‌یافته؛ آرمان = هکتیویست؛ طولانی، مخفی و پرپول = APT دولتی؛ از قبل دسترسی دارد = خودی؛ تأییدنشده اما خوش‌نیت = IT سایه.')
  ]};
})();
