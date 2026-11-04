/* Security+ extension: Section B6, matched to Chapter 6 ("Application Security") of the course textbook
   (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written for
   objectives 2.3, 2.4, 4.1, 4.3, 4.7 and 5.1; no text or review questions from the book are copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secbook'});
  if(!pack)return;
  pack.sections['6']={en:'Application security',fa:'امنیت برنامه‌ها'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b6_'+(++n),sec:'6',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='SDLC & DevSecOps',T2='Testing code',T3='Injection & web attacks',T4='Memory & race conditions',T5='Defenses & code security',T6='Automation';

  /* ---- SDLC ---- */
  M(T1,'A developer is fixing a bug in the company\'s web app. In which environment should he write and try the fix first?',
    'برنامه‌نویسی در حال رفع یک باگ در برنامه‌ی وب شرکت است. اول در کدام محیط باید اصلاح را بنویسد و امتحان کند؟',
    'جای کار «سازنده‌ها».',
    ['Development','Production','Staging','Test (QA)'],
    ['توسعه (Development)','اصلی (Production)','Staging','آزمون (QA)'],
    'Code moves development → test (QA) → staging (cleared tests, waiting to deploy) → production (live). Change management controls each move and gives an audit trail.',
    'کد این مسیر را طی می‌کند: توسعه ← آزمون (QA) ← Staging (از آزمون رد شده و منتظر انتشار) ← اصلی (زنده). مدیریت تغییر هر جابه‌جایی را کنترل می‌کند و سابقه‌ی ممیزی می‌سازد.');

  M(T1,'In which SDLC phase do real users confirm the software meets their needs through user acceptance testing (UAT)?',
    'در کدام مرحله‌ی SDLC کاربران واقعی با آزمون پذیرش کاربر (UAT) تأیید می‌کنند که نرم‌افزار نیازشان را برآورده می‌کند؟',
    'بعد از کدنویسی، قبل از آموزش و انتقال.',
    ['Testing','Planning','Design','Decommissioning'],
    ['آزمون (Testing)','برنامه‌ریزی','طراحی','کنار گذاشتن (Decommissioning)'],
    'Typical phases: planning → requirements (including security requirements) → design → coding (unit tests) → testing (integration, UAT) → training and transition → operations and maintenance (longest) → decommissioning.',
    'مرحله‌های معمول: برنامه‌ریزی ← نیازمندی‌ها (شامل نیازمندی‌های امنیتی) ← طراحی ← کدنویسی (Unit test) ← آزمون (یکپارچه‌سازی، UAT) ← آموزش و انتقال ← بهره‌برداری و نگهداری (طولانی‌ترین) ← کنار گذاشتن.');

  M(T1,'Every commit is automatically built and tested, and if it passes it goes straight to production with no manual step. What is this?',
    'هر Commit خودکار ساخته و آزمایش می‌شود و اگر قبول شود بدون هیچ قدم دستی مستقیم به محیط اصلی می‌رود. این چیست؟',
    'CI + انتشار خودکار.',
    ['Continuous integration and continuous deployment (CI/CD)','Waterfall development with one release at the end','Code escrow held by a third party for the customer','Manual change management with a weekly approval board'],
    ['یکپارچه‌سازی و استقرار مداوم (CI/CD)','توسعه‌ی آبشاری با یک انتشار در پایان','امانت کد نزد یک شخص ثالث برای مشتری','مدیریت تغییر دستی با هیئت تأیید هفتگی'],
    'CI checks code into a shared repository often with automated builds and tests; CD pushes tested changes to production automatically. It needs automated security testing, logging and monitoring built into the pipeline.',
    'CI کد را مرتب با ساخت و آزمون خودکار در مخزن مشترک ثبت می‌کند؛ CD تغییرات آزمایش‌شده را خودکار به محیط اصلی می‌فرستد. باید آزمون امنیتی خودکار، لاگ و پایش داخل خط لوله ساخته شود.');

  M(T1,'In which model is security a shared responsibility built into design, development, testing and operations from the start?',
    'در کدام مدل، امنیت مسئولیتی مشترک است که از اول در طراحی، توسعه، آزمون و عملیات گنجانده می‌شود؟',
    'Dev + Sec + Ops.',
    ['DevSecOps','Shadow IT','Waterfall without testing','Security through obscurity'],
    ['DevSecOps','IT سایه','آبشاری بدون آزمون','امنیت با پنهان‌کاری'],
    'DevOps joins development and IT operations using toolchains. DevSecOps adds security as a shared duty across the whole cycle, usually with automated security testing in CI/CD.',
    'DevOps توسعه و عملیات IT را با زنجیره‌ی ابزار به هم وصل می‌کند. DevSecOps امنیت را به‌عنوان وظیفه‌ی مشترک در کل چرخه اضافه می‌کند، معمولاً با آزمون امنیتی خودکار در CI/CD.');

  /* ---- Testing code ---- */
  M(T2,'A reviewer reads an application\'s source code line by line, without running it, looking for flaws. What is this?',
    'بازبینی‌کننده‌ای کد منبع یک برنامه را خط به خط بدون اجرا کردنش می‌خواند تا نقص پیدا کند. این چیست؟',
    'بدون اجرا.',
    ['Static code analysis','Dynamic code analysis','Fuzzing','Penetration testing'],
    ['تحلیل ایستای کد (Static)','تحلیل پویای کد (Dynamic)','Fuzzing','تست نفوذ'],
    'Static analysis reviews code without running it (manual or automated); it is like a known-environment test and points straight to the bad lines. Dynamic analysis runs the code with inputs. Interactive testing combines both.',
    'تحلیل ایستا کد را بدون اجرا بررسی می‌کند (دستی یا خودکار)؛ مثل تست محیط شناخته‌شده است و مستقیم خط‌های مشکل‌دار را نشان می‌دهد. تحلیل پویا کد را با ورودی اجرا می‌کند. آزمون تعاملی هر دو را ترکیب می‌کند.');

  M(T2,'A tool sends millions of random and malformed inputs to an app and watches for crashes. What is this, and what is its main limit?',
    'ابزاری میلیون‌ها ورودی تصادفی و خراب به یک برنامه می‌فرستد و مراقب از کار افتادنش است. این چیست و محدودیت اصلی‌اش چیست؟',
    'ورودی بی‌معنی؛ مسائل ساده را پیدا می‌کند.',
    ['Fuzzing; it finds input bugs but misses business-logic flaws','Static analysis; it cannot read the program\'s source code','Code signing; it slows down every download of the app','Sandboxing; it uses too much disk space during testing'],
    ['Fuzzing؛ باگ‌های ورودی را پیدا می‌کند ولی نقص منطق کسب‌وکار را نه','تحلیل ایستا؛ نمی‌تواند کد منبع برنامه را بخواند','امضای کد؛ همه‌ی دانلودهای برنامه را کند می‌کند','Sandbox؛ موقع آزمون فضای دیسک زیادی مصرف می‌کند'],
    'Fuzzing is automated dynamic testing with invalid or random data. It is good at input validation, error handling and memory leak issues, but not complex logic, and it may not cover all code paths.',
    'Fuzzing آزمون پویای خودکار با داده‌ی نامعتبر یا تصادفی است. برای مشکلات اعتبارسنجی ورودی، مدیریت خطا و نشت حافظه خوب است، اما نه منطق پیچیده، و ممکن است همه‌ی مسیرهای کد را پوشش ندهد.');

  M(T2,'Developers use many open source libraries, and the security team worries about running vulnerable versions without knowing it. Which practice addresses this?',
    'برنامه‌نویسان از کتابخانه‌های متن‌باز زیادی استفاده می‌کنند و تیم امنیت نگران اجرای نسخه‌های آسیب‌پذیر بدون اطلاع است. کدام روش این را حل می‌کند؟',
    'فهرست و پایش وابستگی‌ها.',
    ['Package monitoring','A web application firewall','Disabling comments','Wildcard certificates'],
    ['پایش بسته‌ها (Package monitoring)','فایروال برنامه‌ی وب','حذف کامنت‌ها','گواهی Wildcard'],
    'Package monitoring tracks every third-party library, updates dependencies and alerts on known vulnerabilities, preferably with automated tools. Use only trusted repositories and investigate suspicious package activity.',
    'پایش بسته‌ها هر کتابخانه‌ی شخص ثالث را دنبال می‌کند، وابستگی‌ها را به‌روز می‌کند و درباره‌ی آسیب‌پذیری‌های شناخته‌شده هشدار می‌دهد، ترجیحاً با ابزار خودکار. فقط از مخازن مطمئن استفاده کن و فعالیت مشکوک بسته‌ها را بررسی کن.');

  /* ---- Injection & web ---- */
  M(T3,'A login form passes this into a query: \' OR 1=1;-- . What attack is this?',
    'یک فرم ورود این را به داخل کوئری می‌فرستد: \' OR 1=1;-- . این کدام حمله است؟',
    'همیشه درست؛ بقیه کامنت.',
    ['SQL injection','Cross-site scripting','Directory traversal','Replay attack'],
    ['تزریق SQL (SQLi)','XSS','پیمایش مسیر (Directory traversal)','حمله‌ی بازپخش'],
    'SQL injection inserts SQL code into input that the app passes to the database. The quote closes the string, OR 1=1 is always true, and -- comments out the rest. Parameterized queries and input validation prevent it.',
    'تزریق SQL کد SQL را در ورودی می‌گذارد که برنامه آن را به پایگاه داده می‌دهد. نقل‌قول رشته را می‌بندد، OR 1=1 همیشه درست است و -- بقیه را کامنت می‌کند. کوئری پارامتری و اعتبارسنجی ورودی جلویش را می‌گیرند.');

  M(T3,'A tester adds "; WAITFOR DELAY \'00:00:10\';--" to a field and the page takes exactly 10 seconds longer to load. What does this show?',
    'آزمایش‌کننده‌ای «; WAITFOR DELAY \'00:00:10\';--» را به یک فیلد اضافه می‌کند و صفحه دقیقاً ۱۰ ثانیه دیرتر بارگذاری می‌شود. این چه چیزی را نشان می‌دهد؟',
    'نتیجه دیده نمی‌شود، ولی زمان پاسخ را می‌شود دید.',
    ['The app has a time-based blind SQL injection flaw','The server is simply slow under a normal load','The app is vulnerable to stored cross-site scripting','The firewall blocked the request and held it back'],
    ['برنامه ضعف تزریق SQL کور مبتنی بر زمان دارد','سرور فقط زیر بار معمولی کند است','برنامه در برابر XSS ذخیره‌شده آسیب‌پذیر است','فایروال درخواست را مسدود کرد و نگهش داشت'],
    'Blind SQL injection works even when results are not shown. Timing-based uses delays (WAITFOR) to answer yes/no questions; content-based compares pages for true (1=1) and false (1=2) conditions. Tools like SQLmap automate it.',
    'تزریق SQL کور حتی وقتی نتیجه نمایش داده نمی‌شود کار می‌کند. نوع مبتنی بر زمان با تأخیر (WAITFOR) به سؤال‌های بله/نه جواب می‌گیرد؛ نوع مبتنی بر محتوا صفحه‌ها را برای شرط درست (1=1) و نادرست (1=2) مقایسه می‌کند. ابزارهایی مثل SQLmap خودکارش می‌کنند.');

  M(T3,'A "create folder" field runs mkdir with the user\'s input, and an attacker types "reports & rm -rf /data". What attack is this?',
    'یک فیلد «ساخت پوشه» دستور mkdir را با ورودی کاربر اجرا می‌کند و مهاجم تایپ می‌کند «reports & rm -rf /data». این کدام حمله است؟',
    'به سیستم‌عامل دستور اضافه می‌دهد.',
    ['Command injection','SQL injection','Session replay','Server-side request forgery'],
    ['تزریق فرمان (Command injection)','تزریق SQL','بازپخش نشست','SSRF'],
    'Command injection happens when an app passes user input to an operating system command. The & starts a second command. Avoid system calls with user input, and strictly validate any input that must be used.',
    'تزریق فرمان وقتی رخ می‌دهد که برنامه ورودی کاربر را به یک دستور سیستم‌عامل بدهد. & یک دستور دوم را شروع می‌کند. از فراخوانی سیستم با ورودی کاربر پرهیز کن و هر ورودی لازم را سخت‌گیرانه اعتبارسنجی کن.');

  M(T3,'An attacker posts a forum comment containing a <script> tag, and the script runs in the browser of everyone who later views the thread. What is this?',
    'مهاجمی در یک انجمن نظری با یک تگ <script> می‌گذارد و اسکریپت در مرورگر هر کسی که بعداً آن موضوع را ببیند اجرا می‌شود. این چیست؟',
    'روی سرور می‌ماند.',
    ['Stored (persistent) XSS','Reflected XSS','CSRF','SQL injection'],
    ['XSS ذخیره‌شده (پایدار)','XSS بازتابی','CSRF','تزریق SQL'],
    'Stored XSS saves the malicious script on the server, so it hits every visitor. Reflected XSS bounces the script off the server in a single response, usually through a crafted link. Both exploit the user\'s trust in the site.',
    'XSS ذخیره‌شده اسکریپت مخرب را روی سرور نگه می‌دارد؛ پس به هر بازدیدکننده‌ای می‌خورد. XSS بازتابی اسکریپت را در یک پاسخ از سرور برمی‌گرداند، معمولاً از طریق یک لینک ساختگی. هر دو از اعتماد کاربر به سایت سوءاستفاده می‌کنند.');

  M(T3,'A phishing link to a real bank site contains a script in the "name" parameter, and the bank page echoes it back so it runs in the victim\'s browser. What is this?',
    'یک لینک فیشینگ به سایت واقعی بانک، در پارامتر «name» یک اسکریپت دارد و صفحه‌ی بانک آن را برمی‌گرداند تا در مرورگر قربانی اجرا شود. این چیست؟',
    'در یک پاسخ بازتاب داده می‌شود.',
    ['Reflected XSS','Stored XSS','Directory traversal','Typosquatting'],
    ['XSS بازتابی (Reflected)','XSS ذخیره‌شده','پیمایش مسیر','Typosquatting'],
    'Reflected XSS: the app reflects input back in a page without sanitizing it. The URL and certificate are real, which makes it convincing. Defense: input validation (allow lists) and output encoding.',
    'XSS بازتابی: برنامه ورودی را بدون پاک‌سازی در صفحه برمی‌گرداند. آدرس و گواهی واقعی‌اند و همین باورپذیرش می‌کند. دفاع: اعتبارسنجی ورودی (Allow list) و کدگذاری خروجی.');

  M(T3,'While logged in to her bank, a user opens a forum post with a hidden link that makes her browser send a money-transfer request to the bank. What is this?',
    'کاربری در حالی که وارد حساب بانکی‌اش است، یک پست انجمن با لینک پنهان باز می‌کند که مرورگرش را وادار می‌کند درخواست انتقال پول به بانک بفرستد. این چیست؟',
    'از اعتماد سایت به مرورگر کاربر سوءاستفاده می‌کند.',
    ['Cross-site request forgery (CSRF/XSRF)','Cross-site scripting','Server-side request forgery','Pass-the-hash'],
    ['جعل درخواست بین‌سایتی (CSRF)','XSS','جعل درخواست سمت سرور (SSRF)','Pass-the-hash'],
    'XSS abuses the user\'s trust in a site; CSRF abuses the site\'s trust in the user\'s logged-in browser. Defenses: secret anti-CSRF tokens in requests and checking the referring URL.',
    'XSS از اعتماد کاربر به سایت سوءاستفاده می‌کند؛ CSRF از اعتماد سایت به مرورگر واردشده‌ی کاربر. دفاع: توکن مخفی ضد CSRF در درخواست‌ها و بررسی URL ارجاع‌دهنده.');

  M(T3,'A web app fetches any URL a user gives it, and an attacker makes it fetch an internal-only admin page. What is this?',
    'یک برنامه‌ی وب هر URLی که کاربر بدهد را دریافت می‌کند و مهاجم وادارش می‌کند یک صفحه‌ی مدیریتی فقط-داخلی را بگیرد. این چیست؟',
    'سرور فریب می‌خورد، نه مرورگر.',
    ['Server-side request forgery (SSRF)','Cross-site request forgery (CSRF)','Reflected XSS','Buffer overflow'],
    ['جعل درخواست سمت سرور (SSRF)','CSRF','XSS بازتابی','سرریز بافر'],
    'SSRF tricks a server into requesting a URL from user input. Because the server can reach private addresses, it may leak internal data. Validate and restrict which destinations the server may fetch.',
    'SSRF سرور را فریب می‌دهد تا URLی از ورودی کاربر را درخواست کند. چون سرور به آدرس‌های خصوصی دسترسی دارد، ممکن است داده‌ی داخلی لو برود. مقصدهایی که سرور مجاز است بگیرد را اعتبارسنجی و محدود کن.');

  M(T3,'A web log shows the request /download?file=../../../../etc/shadow. What attack is this?',
    'یک لاگ وب درخواست /download?file=../../../../etc/shadow را نشان می‌دهد. این کدام حمله است؟',
    '«..» یعنی یک پوشه بالاتر.',
    ['Directory traversal','SQL injection','CSRF','Remote file inclusion'],
    ['پیمایش مسیر (Directory traversal)','تزریق SQL','CSRF','گنجاندن فایل از راه دور'],
    'Directory traversal uses ../ to climb out of the web root and read files such as /etc/shadow. File inclusion goes further and executes the file: local (on the server) or remote (from an attacker URL), often to plant a web shell.',
    'پیمایش مسیر با ../ از پوشه‌ی ریشه‌ی وب بیرون می‌رود و فایل‌هایی مثل /etc/shadow را می‌خواند. گنجاندن فایل (File inclusion) یک قدم جلوتر است و فایل را اجرا می‌کند: محلی (روی سرور) یا از راه دور (از URL مهاجم)، اغلب برای کاشتن Web shell.');

  M(T3,'Changing invoice?id=5001 to id=5002 shows another customer\'s invoice because the app never checks ownership. What vulnerability is this?',
    'تغییر invoice?id=5001 به id=5002 فاکتور مشتری دیگری را نشان می‌دهد، چون برنامه هیچ‌وقت مالکیت را بررسی نمی‌کند. این کدام آسیب‌پذیری است؟',
    'ارجاع مستقیم به شیء بدون بررسی مجوز.',
    ['Insecure direct object reference (IDOR)','An unvalidated redirect to another site','HTTP parameter pollution in the URL','A buffer overflow in the invoice page'],
    ['ارجاع مستقیم ناامن به شیء (IDOR)','تغییر مسیر بدون اعتبارسنجی به سایت دیگر','آلودگی پارامتر HTTP در URL','سرریز بافر در صفحه‌ی فاکتور'],
    'IDOR is an authorization flaw: the app uses a user-supplied ID but does not check that the user may see that object. Every request must pass an access control check.',
    'IDOR یک نقص مجوزدهی است: برنامه از شناسه‌ای که کاربر داده استفاده می‌کند اما بررسی نمی‌کند کاربر اجازه‌ی دیدن آن شیء را دارد. هر درخواست باید از بررسی کنترل دسترسی بگذرد.');

  M(T3,'A request contains account=100&account=100\' OR 1=1;-- . What is the attacker trying?',
    'یک درخواست شامل account=100&account=100\' OR 1=1;-- است. مهاجم چه می‌کند؟',
    'یک پارامتر دو بار.',
    ['Parameter pollution to sneak SQL injection past filters','Directory traversal to read files outside the web root','A replay attack using a captured account request','Pass-the-hash using a stolen password hash'],
    ['آلودگی پارامتر برای رد کردن تزریق SQL از فیلترها','پیمایش مسیر برای خواندن فایل‌های بیرون از ریشه‌ی وب','حمله‌ی بازپخش با یک درخواست حساب ضبط‌شده','Pass-the-Hash با هش رمز دزدیده‌شده'],
    'Parameter pollution sends the same parameter twice. A flawed platform may validate the first value but use the second, letting the attack through. Patched platforms and careful custom code defend against it.',
    'آلودگی پارامتر یک پارامتر را دو بار می‌فرستد. یک پلتفرم معیوب ممکن است مقدار اول را اعتبارسنجی کند اما از دومی استفاده کند و حمله رد شود. پلتفرم وصله‌شده و کد سفارشی دقیق جلویش را می‌گیرند.');

  M(T3,'An attacker copies a victim\'s session cookie over open Wi-Fi and sends it to the website to act as the victim. What is this, and which cookie setting helps prevent it?',
    'مهاجمی کوکی نشست قربانی را روی Wi-Fi باز کپی می‌کند و برای سایت می‌فرستد تا به جای قربانی عمل کند. این چیست و کدام تنظیم کوکی به جلوگیری کمک می‌کند؟',
    'کوکی مثل کارت ورود است؛ فقط روی HTTPS بفرستش.',
    ['Session hijacking; the Secure cookie attribute','SQL injection; the HttpOnly cookie attribute','Directory traversal; a longer, random cookie name','CSRF; deleting all of the site\'s cookies every day'],
    ['ربودن نشست؛ ویژگی Secure کوکی','تزریق SQL؛ ویژگی HttpOnly کوکی','پیمایش مسیر؛ نام کوکی طولانی‌تر و تصادفی','CSRF؛ پاک کردن همه‌ی کوکی‌های سایت هر روز'],
    'Session cookies act like a conference badge: whoever holds one is treated as logged in. Cookies can be stolen by eavesdropping, malware or on-path attacks. Secure cookies are never sent over unencrypted HTTP. Pass-the-hash is a similar replay at the OS level using NTLM hashes.',
    'کوکی نشست مثل کارت ورود کنفرانس است: هر کس داشته باشد واردشده حساب می‌شود. کوکی با شنود، بدافزار یا حمله‌ی On-path دزدیده می‌شود. کوکی Secure هیچ‌وقت روی HTTP رمزنشده فرستاده نمی‌شود. Pass-the-hash بازپخشی مشابه در سطح سیستم‌عامل با هش‌های NTLM است.');

  M(T3,'A shopping site uses ?redirect=<any URL> after checkout, so an attacker sends links that land victims on a fake login page. How should developers fix it?',
    'یک سایت خرید بعد از پرداخت از ?redirect=<هر URL> استفاده می‌کند؛ پس مهاجم لینک‌هایی می‌فرستد که قربانی‌ها را به صفحه‌ی ورود جعلی می‌برد. برنامه‌نویسان چطور درستش کنند؟',
    'فقط مقصدهای مجاز.',
    ['Allow only redirect URLs on an approved list','Remove the checkout page from the shopping site','Encode the redirect parameter with ROT13','Show more warning ads on the checkout page'],
    ['فقط URLهای تغییر مسیر داخل فهرست مجاز را بپذیر','صفحه‌ی پرداخت را از سایت حذف کن','پارامتر redirect را با ROT13 کدگذاری کن','تبلیغات هشدار بیشتری در صفحه‌ی پرداخت نشان بده'],
    'An unvalidated redirect sends users to any URL an attacker supplies, after a real transaction on a trusted site. Validated redirects allow only approved URLs or the site\'s own domain.',
    'تغییر مسیر بدون اعتبارسنجی کاربر را بعد از یک تراکنش واقعی در سایت مورد اعتماد به هر URLی که مهاجم بدهد می‌فرستد. تغییر مسیر اعتبارسنجی‌شده فقط URLهای مجاز یا دامنه‌ی خود سایت را می‌پذیرد.');

  /* ---- Memory & race ---- */
  M(T4,'An attacker sends 5,000 characters into a field that expects 50, overwriting nearby memory with his own instructions. What is this, and what is the overwrite called?',
    'مهاجمی ۵۰۰۰ کاراکتر در فیلدی که ۵۰ کاراکتر انتظار دارد می‌فرستد و حافظه‌ی کناری را با دستورهای خودش بازنویسی می‌کند. این چیست و به بازنویسی چه می‌گویند؟',
    'بیش از ظرفیت + کاشتن در حافظه.',
    ['A buffer overflow used for memory injection','A race condition used for TOCTOU','A null pointer used for DLL injection','A memory leak used for denial of service'],
    ['سرریز بافر برای تزریق در حافظه (Memory injection)','شرایط رقابتی برای TOCTOU','اشاره‌گر تهی برای DLL injection','نشت حافظه برای قطع سرویس'],
    'A buffer overflow puts more data into memory than was allocated, aiming to overwrite other memory with code that will run; that insertion is memory injection. Integer overflow is a variant. Patch promptly and validate input length.',
    'سرریز بافر داده‌ای بیش از فضای اختصاص‌یافته در حافظه می‌گذارد تا حافظه‌ی دیگر را با کدی که اجرا خواهد شد بازنویسی کند؛ این کاشتن Memory injection است. Integer overflow یک نوع آن است. سریع وصله کن و طول ورودی را اعتبارسنجی کن.');

  M(T4,'A system builds a user\'s permission list at login and uses it all session. An admin revokes access, but the user keeps it until logging out days later. What flaw is this?',
    'سیستمی فهرست مجوزهای کاربر را موقع ورود می‌سازد و در کل نشست از آن استفاده می‌کند. مدیری دسترسی را لغو می‌کند، اما کاربر تا روزها بعد که خارج شود آن را نگه می‌دارد. این کدام نقص است؟',
    'بررسی خیلی زودتر از استفاده انجام شده.',
    ['A TOCTOU (time-of-check to time-of-use) flaw','A buffer overflow in the login service','A memory leak in the session manager','Directory traversal in the permission file'],
    ['ضعف TOCTOU (زمان بررسی تا زمان استفاده)','سرریز بافر در سرویس ورود','نشت حافظه در مدیر نشست','پیمایش مسیر در فایل مجوزها'],
    'Race conditions depend on the order of events. TOC is when access is checked, TOU is when the resource is used, and the TOE is the component being evaluated. Fix: check permissions at each request, not once at login.',
    'شرایط رقابتی به ترتیب رویدادها بستگی دارد. TOC زمانی است که دسترسی بررسی می‌شود، TOU زمانی که منبع استفاده می‌شود و TOE جزئی است که ارزیابی می‌شود. اصلاح: در هر درخواست مجوز را بررسی کن، نه یک بار موقع ورود.');

  M(T4,'A server\'s memory use climbs steadily for weeks until it crashes; a reboot fixes it, but the cycle repeats. What is the likely cause?',
    'مصرف حافظه‌ی یک سرور چند هفته مدام بالا می‌رود تا از کار بیفتد؛ ری‌استارت درستش می‌کند اما چرخه تکرار می‌شود. علت احتمالی چیست؟',
    'حافظه گرفته می‌شود ولی پس داده نمی‌شود.',
    ['A memory leak causing resource exhaustion','A typosquatting domain sending fake traffic','An expired wildcard certificate on the server','A missing user acceptance testing (UAT) phase'],
    ['نشت حافظه که منابع را تمام می‌کند','دامنه‌ی Typosquatting که ترافیک جعلی می‌فرستد','گواهی Wildcard منقضی‌شده روی سرور','مرحله‌ی آزمون پذیرش کاربر (UAT) جاافتاده'],
    'A memory leak happens when an app does not return memory it no longer needs. Over time it exhausts resources and crashes the system. Rebooting only resets the cycle; the code must be fixed.',
    'نشت حافظه وقتی رخ می‌دهد که برنامه حافظه‌ای که دیگر لازم ندارد را پس ندهد. به‌مرور منابع را تمام می‌کند و سیستم را از کار می‌اندازد. ری‌استارت فقط چرخه را از نو شروع می‌کند؛ کد باید اصلاح شود.');

  /* ---- Defenses ---- */
  M(T5,'A form field asks for age. Which validation approach is strongest?',
    'یک فیلد فرم سن را می‌پرسد. کدام روش اعتبارسنجی قوی‌تر است؟',
    'دقیقاً بگو چه چیزی مجاز است؛ سمت سرور.',
    ['Server-side allow list: only whole numbers 0–125','A client-side JavaScript check in the browser only','A deny list that blocks the word SCRIPT in the field','No validation, leaving the database to reject bad data'],
    ['Allow list سمت سرور: فقط عدد صحیح ۰ تا ۱۲۵','فقط یک بررسی JavaScript سمت مرورگر','Deny list که کلمه‌ی SCRIPT را در فیلد رد می‌کند','بدون اعتبارسنجی، تا پایگاه داده داده‌ی بد را رد کند'],
    'Allow listing defines exactly what is valid and rejects everything else. Validation must happen on the server, because client-side checks are easy to bypass. Deny listing is a fallback for free-text fields.',
    'Allow list دقیقاً تعریف می‌کند چه چیزی معتبر است و بقیه را رد می‌کند. اعتبارسنجی باید سمت سرور باشد، چون بررسی سمت کلاینت به‌راحتی دور زده می‌شود. Deny list راه جایگزین برای فیلدهای متن آزاد است.');

  M(T5,'Which control sends only arguments to the database, which inserts them into a precompiled query template?',
    'کدام کنترل فقط آرگومان‌ها را به پایگاه داده می‌فرستد تا آن‌ها را در یک قالب کوئری از پیش کامپایل‌شده بگذارد؟',
    'Stored procedures نمونه‌ای از آن‌اند.',
    ['Parameterized queries','Output comments','Wildcard certificates','Session cookies'],
    ['کوئری‌های پارامتری (Parameterized queries)','کامنت‌های خروجی','گواهی Wildcard','کوکی نشست'],
    'With parameterized queries, user input is always treated as data, never as SQL code, which stops SQL injection and can improve performance. Stored procedures are one implementation.',
    'در کوئری پارامتری، ورودی کاربر همیشه داده حساب می‌شود، هیچ‌وقت کد SQL؛ همین جلوی تزریق SQL را می‌گیرد و ممکن است کارایی را هم بهتر کند. Stored procedureها یک پیاده‌سازی آن‌اند.');

  M(T5,'An app still has an unfixed injection flaw while developers work on a patch. Which device in front of the web server can filter attacks in the meantime?',
    'یک برنامه هنوز نقص تزریق رفع‌نشده دارد و برنامه‌نویسان روی وصله کار می‌کنند. کدام دستگاه جلوی وب‌سرور می‌تواند در این مدت حمله‌ها را فیلتر کند؟',
    'فایروال در لایه‌ی کاربرد.',
    ['A web application firewall (WAF)','A hardware keylogger','A load balancer with no rules','An offline root CA'],
    ['فایروال برنامه‌ی وب (WAF)','Keylogger سخت‌افزاری','Load balancer بدون قانون','CA ریشه‌ی آفلاین'],
    'A WAF sits in front of the web server at the application layer and inspects input before it reaches the app. It is a layer of defense, not a replacement for input validation in the code.',
    'WAF در لایه‌ی کاربرد جلوی وب‌سرور قرار می‌گیرد و ورودی را قبل از رسیدن به برنامه بررسی می‌کند. یک لایه‌ی دفاعی است، نه جایگزین اعتبارسنجی ورودی در کد.');

  M(T5,'A software vendor wants customers to be sure that an update really came from it and was not changed. What should it do?',
    'یک فروشنده‌ی نرم‌افزار می‌خواهد مشتری‌ها مطمئن باشند یک آپدیت واقعاً از طرف خودش آمده و تغییر نکرده. چه کار کند؟',
    'امضا با کلید خصوصی.',
    ['Digitally sign the code (code signing)','Obfuscate the code so it is hard to read','Compress the code into a smaller package','Email the code directly to each customer'],
    ['کد را امضای دیجیتال کند (Code signing)','کد را مبهم کند تا خواندنش سخت شود','کد را در یک بسته‌ی کوچک‌تر فشرده کند','کد را مستقیم برای هر مشتری ایمیل کند'],
    'Code signing uses the developer\'s private key; systems verify with the public key. If systems accept only signed updates, a malicious update (a fake patch) fails the check and is rejected.',
    'امضای کد از کلید خصوصی برنامه‌نویس استفاده می‌کند؛ سیستم‌ها با کلید عمومی بررسی می‌کنند. اگر سیستم‌ها فقط آپدیت امضاشده بپذیرند، آپدیت مخرب (وصله‌ی جعلی) از بررسی رد می‌شود و پذیرفته نمی‌شود.');

  M(T5,'An analyst wants to open an untrusted attachment and watch what it does without risking the rest of the system. What should she use?',
    'تحلیلگری می‌خواهد یک پیوست نامطمئن را باز کند و ببیند چه می‌کند، بدون اینکه بقیه‌ی سیستم در خطر باشد. از چه استفاده کند؟',
    'محیط ایزوله با دسترسی محدود.',
    ['A sandbox','A code repository','A wildcard certificate','A shared admin account'],
    ['Sandbox','مخزن کد','گواهی Wildcard','حساب مدیر مشترک'],
    'A sandbox runs software in an isolated environment with limited access to files, the OS and other apps, so a malicious or unstable program can be contained and removed. Developers also use sandboxes to test code safely.',
    'Sandbox نرم‌افزار را در یک محیط ایزوله با دسترسی محدود به فایل‌ها، سیستم‌عامل و برنامه‌های دیگر اجرا می‌کند؛ پس برنامه‌ی مخرب یا ناپایدار مهار و حذف می‌شود. برنامه‌نویسان هم برای آزمون امن کد از Sandbox استفاده می‌کنند.');

  M(T5,'A public GitHub repository contains a config file with a live cloud API key written directly in the code. What is this problem called?',
    'یک مخزن عمومی GitHub یک فایل تنظیمات دارد که یک کلید API ابری فعال مستقیماً در کد نوشته شده. اسم این مشکل چیست؟',
    'رمز داخل کد.',
    ['Hard-coded credentials','Package monitoring','Code signing','Elasticity'],
    ['اطلاعات ورود سخت‌کد شده (Hard-coded credentials)','پایش بسته','امضای کد','کشسانی'],
    'Hard-coded credentials include backdoor maintenance accounts and keys for other services written into code. If the code leaks, so do the secrets. Revoke the key and move secrets to a secure vault.',
    'اطلاعات ورود سخت‌کد شده شامل حساب نگهداری در پشتی و کلیدهای سرویس‌های دیگر است که در کد نوشته شده‌اند. اگر کد لو برود، اسرار هم لو می‌روند. کلید را باطل کن و اسرار را به یک Vault امن ببر.');

  M(T5,'An error page shows the full SQL query and table names when a search fails. What should the tester report?',
    'وقتی جستجو شکست می‌خورد، صفحه‌ی خطا کل کوئری SQL و اسم جدول‌ها را نشان می‌دهد. آزمایش‌کننده چه گزارش دهد؟',
    'خطا بیش از حد حرف می‌زند.',
    ['Improper error handling that leaks sensitive details','A successful buffer overflow in the search feature','A wildcard certificate configured on the wrong host','Good debugging practice that helps users report bugs'],
    ['مدیریت نادرست خطا که جزئیات حساس را لو می‌دهد','یک سرریز بافر موفق در قابلیت جستجو','گواهی Wildcard که روی میزبان اشتباه تنظیم شده','روش خوب اشکال‌زدایی که به گزارش باگ کاربران کمک می‌کند'],
    'Error handling should catch unexpected situations securely but reveal little. Verbose errors give attackers a roadmap for injection. Also remove source code comments from code that users can see.',
    'مدیریت خطا باید موقعیت‌های غیرمنتظره را امن بگیرد اما چیز کمی لو بدهد. خطاهای پرجزئیات نقشه‌ی راه تزریق را به مهاجم می‌دهند. کامنت‌های کد منبع را هم از کدی که کاربر می‌بیند حذف کن.');

  M(T5,'Before release, a pipeline compares the SHA-256 hash of the build with the hash of the approved build. What is this?',
    'قبل از انتشار، یک خط لوله هش SHA-256 نسخه‌ی ساخته‌شده را با هش نسخه‌ی تأییدشده مقایسه می‌کند. این چیست؟',
    'آیا همان کدی است که تأیید شد؟',
    ['Code integrity measurement','Fuzzing','Elasticity','User provisioning'],
    ['سنجش یکپارچگی کد','Fuzzing','کشسانی','ایجاد کاربر'],
    'Integrity measurement uses hashes to confirm that the code going to production is exactly the code that was approved. Any change in the hash means the code was modified and needs investigation.',
    'سنجش یکپارچگی با هش تأیید می‌کند کدی که به محیط اصلی می‌رود دقیقاً همان کد تأییدشده است. هر تغییری در هش یعنی کد تغییر کرده و باید بررسی شود.');

  M(T5,'An app automatically adds servers when traffic rises and removes them when traffic falls, to save cost. Which principle is this?',
    'یک برنامه وقتی ترافیک بالا می‌رود خودکار سرور اضافه می‌کند و وقتی پایین می‌آید حذف می‌کند تا هزینه کم شود. این کدام اصل است؟',
    'خودکار در هر دو جهت.',
    ['Elasticity','Scalability only','Software diversity','Dead code'],
    ['کشسانی (Elasticity)','فقط مقیاس‌پذیری','تنوع نرم‌افزار','کد مرده'],
    'Scalability means resources can be added as demand grows. Elasticity goes further: resources are added and removed automatically as needed.',
    'مقیاس‌پذیری یعنی با رشد تقاضا می‌شود منابع اضافه کرد. کشسانی یک قدم جلوتر است: منابع به‌طور خودکار در صورت نیاز اضافه و حذف می‌شوند.');

  M(T5,'A partner API has no authentication, so anyone who knows its URL can change customer records. What should be added first?',
    'یک API شریک هیچ احراز هویتی ندارد؛ پس هر کس آدرسش را بداند می‌تواند رکوردهای مشتری را تغییر دهد. اول چه چیزی باید اضافه شود؟',
    'API غیرعمومی باید قفل شود.',
    ['Authentication, such as API keys, over TLS','More API endpoints to spread out the load','A longer, harder-to-guess URL for the API','Public documentation so partners use it right'],
    ['احراز هویت، مثل کلید API، روی TLS','نقاط پایانی API بیشتر برای پخش بار','URL طولانی‌تر و سخت‌تر برای حدس زدن','مستندات عمومی تا شریک‌ها درست استفاده کنند'],
    'Unprotected APIs allow unauthorized use. API security relies on authentication, authorization, data scoping, rate limiting, input filtering, logging and encryption in transit.',
    'APIهای محافظت‌نشده استفاده‌ی غیرمجاز را ممکن می‌کنند. امنیت API به احراز هویت، مجوزدهی، محدود کردن داده، محدودیت نرخ درخواست، فیلتر ورودی، لاگ و رمزگذاری در انتقال وابسته است.');

  /* ---- Automation ---- */
  M(T6,'A script checks every new cloud resource and blocks any storage bucket that would be made public. Which automation use case is this?',
    'اسکریپتی هر منبع ابری جدید را بررسی می‌کند و جلوی هر Bucket ذخیره‌سازی که قرار است عمومی شود را می‌گیرد. این کدام کاربرد اتوماسیون است؟',
    'جلوی خروج از مسیر امن را می‌گیرد.',
    ['Guard rails','Ticket creation','Escalation','User provisioning'],
    ['Guard rails (نرده‌های محافظ)','ایجاد تیکت','ارجاع به سطح بالاتر (Escalation)','ایجاد کاربر'],
    'Guard rails enforce policy automatically and prevent violations. Other use cases: user and resource provisioning, security groups, ticket creation, escalation, enabling/disabling services and access, CI and testing, integrations and APIs.',
    'Guard rails سیاست را خودکار اجرا می‌کنند و جلوی تخلف را می‌گیرند. کاربردهای دیگر: ایجاد کاربر و منبع، گروه‌های امنیتی، ایجاد تیکت، Escalation، فعال/غیرفعال کردن سرویس و دسترسی، CI و آزمون، یکپارچه‌سازی و API.');

  M(T6,'When HR marks an employee as terminated, a script disables all of their accounts within minutes. Which use case is this?',
    'وقتی منابع انسانی کارمندی را اخراج‌شده علامت می‌زند، اسکریپتی ظرف چند دقیقه همه‌ی حساب‌هایش را غیرفعال می‌کند. این کدام کاربرد است؟',
    'افزودن، تغییر یا حذف دسترسی کاربر.',
    ['User provisioning (removing access)','Resource provisioning for new servers','Continuous integration of HR code','Guard rails that block unsafe code'],
    ['User Provisioning (برداشتن دسترسی)','Resource Provisioning برای سرورهای جدید','یکپارچه‌سازی مداوم کد منابع انسانی','Guard Rails که جلوی کد ناامن را می‌گیرد'],
    'User provisioning automation adds, changes and removes user access, reducing manual effort and human error. Fast deprovisioning also shortens the window for insider misuse.',
    'اتوماسیون User provisioning دسترسی کاربر را اضافه، تغییر و حذف می‌کند و کار دستی و خطای انسانی را کم می‌کند. برداشتن سریع دسترسی پنجره‌ی سوءاستفاده‌ی خودی را هم کوتاه می‌کند.');

  M(T6,'Which of these is a drawback, not a benefit, of security automation?',
    'کدام یک از این‌ها عیب است، نه مزیت اتوماسیون امنیتی؟',
    'چیزی که بعداً باید تاوانش را داد.',
    ['Technical debt from outdated scripts','Enforcing secure baselines everywhere','Faster reaction time to incidents','Acting as a workforce multiplier'],
    ['بدهی فنی از اسکریپت‌های قدیمی','اجرای خط پایه‌ی امن در همه جا','زمان واکنش سریع‌تر به حادثه‌ها','افزایش‌دهنده‌ی نیروی کار'],
    'Benefits: efficiency, enforcing baselines, standard configurations, secure scaling, employee retention, reaction time, workforce multiplier. Considerations: complexity, cost, single point of failure, technical debt, ongoing supportability.',
    'مزیت‌ها: کارایی، اجرای خط پایه، پیکربندی استاندارد، مقیاس‌پذیری امن، ماندگاری کارکنان، زمان واکنش، افزایش نیروی کار. ملاحظات: پیچیدگی، هزینه، نقطه‌ی شکست واحد، بدهی فنی، پشتیبانی مداوم.');

  M(T6,'One script handles all alert routing for the SOC. When it breaks, no alerts reach anyone. Which automation concern does this show?',
    'یک اسکریپت همه‌ی مسیریابی هشدارهای SOC را انجام می‌دهد. وقتی خراب می‌شود، هیچ هشداری به کسی نمی‌رسد. این کدام نگرانی اتوماسیون را نشان می‌دهد؟',
    'یک چیز که اگر بیفتد همه‌چیز می‌افتد.',
    ['Single point of failure','Employee retention','Enforcing baselines','Elasticity'],
    ['نقطه‌ی شکست واحد (Single point of failure)','ماندگاری کارکنان','اجرای خط پایه','کشسانی'],
    'Over-reliance on one automated process can make it a single point of failure. Plan monitoring, fallbacks and ongoing support for important automations.',
    'تکیه‌ی بیش از حد به یک فرایند خودکار می‌تواند آن را نقطه‌ی شکست واحد کند. برای اتوماسیون‌های مهم پایش، راه جایگزین و پشتیبانی مداوم برنامه‌ریزی کن.');

  M(T6,'Which two traits make a security task a good candidate for automation?',
    'کدام دو ویژگی یک کار امنیتی را مناسب اتوماسیون می‌کند؟',
    'تکراری و بدون قضاوت انسانی.',
    ['It is repeatable and does not need human judgment','It is rare and highly creative','It changes every time and needs approval','It is done once a year by one expert'],
    ['تکرارپذیر است و قضاوت انسانی لازم ندارد','نادر و بسیار خلاقانه است','هر بار تغییر می‌کند و تأیید لازم دارد','سالی یک بار توسط یک متخصص انجام می‌شود'],
    'Processes that are repeatable and need no human interaction are best for automation. SOAR platforms automate tasks across many systems, and scripts in Python, Bash or PowerShell automate log analysis, scans and responses.',
    'فرایندهای تکرارپذیر و بدون نیاز به تعامل انسانی برای اتوماسیون بهترند. پلتفرم‌های SOAR کارها را در سیستم‌های مختلف خودکار می‌کنند و اسکریپت‌های Python، Bash یا PowerShell تحلیل لاگ، اسکن و پاسخ را خودکار می‌کنند.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['6']={t:['Application security','امنیت برنامه‌ها'],b:[
    PP('Matched to Chapter 6 of the course textbook (objectives 2.3, 2.4, 4.1, 4.3, 4.7 and 5.1). Short review notes in our own words; read the chapter for the full explanation.',
      'این بخش با فصل ۶ کتاب درس جور است (سرفصل‌های 2.3، 2.4، 4.1، 4.3، 4.7 و 5.1). یادداشت‌های کوتاه مرور به زبان خودمان؛ توضیح کامل را در کتاب بخوان.'),

    H('SDLC and environments','SDLC و محیط‌ها'),
    L([['Phases: planning → requirements (add security requirements) → design → coding (unit tests) → testing (UAT) → training/transition → operations and maintenance → decommissioning.','مرحله‌ها: برنامه‌ریزی ← نیازمندی‌ها (نیازمندی امنیتی اضافه کن) ← طراحی ← کدنویسی (Unit test) ← آزمون (UAT) ← آموزش/انتقال ← بهره‌برداری و نگهداری ← کنار گذاشتن.'],
       ['Environments: development → test (QA) → staging → production, moved through change management.','محیط‌ها: توسعه ← آزمون (QA) ← Staging ← اصلی، با مدیریت تغییر.'],
       ['DevOps uses toolchains; DevSecOps makes security a shared duty. CI = frequent check-ins with automated build/test; CD = automatic release to production.','DevOps از زنجیره‌ی ابزار استفاده می‌کند؛ DevSecOps امنیت را وظیفه‌ی مشترک می‌کند. CI = ثبت مکرر با ساخت/آزمون خودکار؛ CD = انتشار خودکار در محیط اصلی.'],
       ['OWASP proactive controls include: security requirements, frameworks, secure DB access, encode/escape, validate input, digital identity, access control, protect data, logging, handle errors.','کنترل‌های پیشگیرانه‌ی OWASP شامل: نیازمندی امنیتی، چارچوب‌ها، دسترسی امن به DB، کدگذاری/Escape، اعتبارسنجی ورودی، هویت دیجیتال، کنترل دسترسی، حفاظت داده، لاگ، مدیریت خطا.']]),

    H('Testing code','آزمون کد'),
    TB([['Method','روش'],['Runs the code?','کد اجرا می‌شود؟'],['Notes','نکته']],[
      [['Static analysis','تحلیل ایستا'],['No','نه'],['Reads source; points to exact lines','کد منبع را می‌خواند؛ خط دقیق را نشان می‌دهد']],
      [['Dynamic analysis','تحلیل پویا'],['Yes','بله'],['Feeds inputs to running code','به کد در حال اجرا ورودی می‌دهد']],
      [['Fuzzing','Fuzzing'],['Yes','بله'],['Random/invalid data; finds simple issues','داده‌ی تصادفی/نامعتبر؛ مشکلات ساده را پیدا می‌کند']],
      [['Package monitoring','پایش بسته'],['—','—'],['Tracks third-party libraries and their CVEs','کتابخانه‌های شخص ثالث و CVEهایشان را دنبال می‌کند']]]),

    H('Application and web attacks','حمله‌های برنامه و وب'),
    TB([['Attack','حمله'],['Clue','نشانه'],['Defense','دفاع']],[
      [['SQL injection','تزریق SQL'],['\' OR 1=1;--, WAITFOR DELAY (blind timing)','‎\' OR 1=1;--، WAITFOR DELAY (کور زمانی)'],['Parameterized queries, input validation','کوئری پارامتری، اعتبارسنجی ورودی']],
      [['Command injection','تزریق فرمان'],['& or ; adds an OS command','& یا ; دستور سیستم‌عامل اضافه می‌کند'],['Avoid system calls with input','فراخوانی سیستم با ورودی نکن']],
      [['XSS (reflected / stored)','XSS (بازتابی / ذخیره‌شده)'],['<script> in a link / saved on server','‎<script> در لینک / ذخیره روی سرور'],['Allow-list validation, output encoding','اعتبارسنجی Allow list، کدگذاری خروجی']],
      [['CSRF','CSRF'],['Hidden request using a logged-in browser','درخواست پنهان با مرورگر واردشده'],['Anti-CSRF tokens, referrer check','توکن ضد CSRF، بررسی ارجاع‌دهنده']],
      [['SSRF','SSRF'],['Server fetches attacker-chosen URL','سرور URL انتخابی مهاجم را می‌گیرد'],['Restrict destinations','محدود کردن مقصدها']],
      [['Directory traversal / file inclusion','پیمایش مسیر / گنجاندن فایل'],['../../etc/shadow; include=URL','‎../../etc/shadow؛ include=URL'],['Filesystem permissions, input validation','مجوز فایل‌سیستم، اعتبارسنجی ورودی']],
      [['IDOR','IDOR'],['Change id=5001 → 5002','تغییر id=5001 به 5002'],['Authorization check on every request','بررسی مجوز در هر درخواست']],
      [['Session replay','بازپخش نشست'],['Stolen cookie reused','کوکی دزدیده‌شده دوباره استفاده می‌شود'],['Secure cookies (HTTPS only)','کوکی Secure (فقط HTTPS)']],
      [['Privilege escalation','افزایش دسترسی'],['Normal user becomes root/admin','کاربر عادی root/مدیر می‌شود'],['Patching, least privilege','وصله، حداقل دسترسی']]]),
    L([['Parameter pollution sends a parameter twice to slip past filters. Unvalidated redirects send users to attacker sites. Pass-the-hash replays NTLM hashes.','آلودگی پارامتر یک پارامتر را دو بار می‌فرستد تا از فیلتر رد شود. تغییر مسیر بدون اعتبارسنجی کاربر را به سایت مهاجم می‌برد. Pass-the-hash هش NTLM را بازپخش می‌کند.'],
       ['Memory: buffer overflow → memory injection; memory leaks → resource exhaustion; null pointer dereference → crash or bypass.','حافظه: سرریز بافر ← تزریق در حافظه؛ نشت حافظه ← تمام شدن منابع؛ استفاده از اشاره‌گر تهی ← کرش یا دور زدن.'],
       ['Race conditions: TOC (check), TOU (use), TOE (component evaluated). Fix TOCTOU by checking at every request.','شرایط رقابتی: TOC (بررسی)، TOU (استفاده)، TOE (جزء ارزیابی‌شده). TOCTOU را با بررسی در هر درخواست رفع کن.'],
       ['Malicious update = a fake patch; code signing defeats it.','آپدیت مخرب = وصله‌ی جعلی؛ امضای کد شکستش می‌دهد.']]),

    H('Defenses and code security','دفاع‌ها و امنیت کد'),
    L([['Input validation (server-side, allow list first), WAF, parameterized queries, sandboxing, secure cookies, static code analysis, code signing.','اعتبارسنجی ورودی (سمت سرور، اول Allow list)، WAF، کوئری پارامتری، Sandbox، کوکی Secure، تحلیل ایستای کد، امضای کد.'],
       ['Code security: track reuse of libraries/SDKs, avoid single points of failure (software diversity), use code repositories with version control, hash-based integrity measurement.','امنیت کد: استفاده‌ی مجدد از کتابخانه/SDK را دنبال کن، از نقطه‌ی شکست واحد پرهیز کن (تنوع نرم‌افزار)، از مخزن کد با کنترل نسخه و سنجش یکپارچگی با هش استفاده کن.'],
       ['Remove comments from exposed code, handle errors without leaking details, never hard-code credentials, secure APIs with authentication.','کامنت‌ها را از کد در معرض دید حذف کن، خطا را بدون لو دادن جزئیات مدیریت کن، اطلاعات ورود را در کد ننویس، API را با احراز هویت امن کن.'],
       ['Scalability = resources can be added; elasticity = added and removed automatically.','مقیاس‌پذیری = می‌شود منبع اضافه کرد؛ کشسانی = خودکار اضافه و حذف می‌شود.']]),

    H('Automation and orchestration','اتوماسیون و هماهنگ‌سازی'),
    TB([['Use cases','کاربردها'],['Benefits','مزیت‌ها'],['Considerations','ملاحظات']],[
      [['User & resource provisioning','ایجاد کاربر و منبع'],['Efficiency/time saving','کارایی/صرفه‌جویی زمان'],['Complexity','پیچیدگی']],
      [['Guard rails, security groups','Guard rails، گروه امنیتی'],['Enforcing baselines','اجرای خط پایه'],['Cost','هزینه']],
      [['Ticket creation, escalation','ایجاد تیکت، Escalation'],['Standard configurations, secure scaling','پیکربندی استاندارد، مقیاس امن'],['Single point of failure','نقطه‌ی شکست واحد']],
      [['Enable/disable services and access','فعال/غیرفعال کردن سرویس و دسترسی'],['Employee retention, reaction time','ماندگاری کارکنان، زمان واکنش'],['Technical debt','بدهی فنی']],
      [['CI and testing, integrations/APIs','CI و آزمون، یکپارچه‌سازی/API'],['Workforce multiplier','افزایش نیروی کار'],['Ongoing supportability','پشتیبانی مداوم']]]),
    TT('Exam shortcut: XSS = user trusts site; CSRF = site trusts user\'s browser; SSRF = server is tricked. Static = no execution. Automate tasks that are repeatable and need no human judgment.',
      'نکته‌ی امتحان: XSS = کاربر به سایت اعتماد دارد؛ CSRF = سایت به مرورگر کاربر اعتماد دارد؛ SSRF = سرور فریب می‌خورد. ایستا = بدون اجرا. کارهای تکراری و بی‌نیاز از قضاوت انسانی را خودکار کن.')
  ]};
})();
