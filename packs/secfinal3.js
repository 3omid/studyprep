/* Mock Security+ Exam (Final Quiz), questions 101-150 and the study notes for the seven parts.
   Loads after secfinal.js and secfinal2.js. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secfinal'});
  if(!pack)return;
  var M=pack._add;

  M(101,'In vendor selection, due diligence primarily ensures:',
    'در انتخاب فروشنده (Vendor)، بررسی دقیق (Due diligence) در اصل چه چیزی را تضمین می‌کند؟',
    'قبل از قرارداد، فروشنده را از همه جهت می‌سنجیم، نه فقط قیمت.',
    ['Vendors meet operational, financial, and security requirements','Vendors have the lowest cost bid','Vendors are located in the same jurisdiction','Vendors can bypass right-to-audit clauses'],
    ['فروشنده الزامات عملیاتی، مالی و امنیتی را برآورده می‌کند','فروشنده ارزان‌ترین پیشنهاد را داده است','فروشنده در همان حوزه‌ی قضایی است','فروشنده می‌تواند بند «حق ممیزی» را دور بزند'],
    'Due diligence means investigating a vendor before signing: is it financially stable, can it deliver the service, and does it protect data properly (certifications, audit reports, security questionnaires). The cheapest bid is not the goal, and a right-to-audit clause should be kept, not bypassed.',
    'Due diligence یعنی قبل از امضای قرارداد، تحقیق کنیم: آیا این شرکت از نظر مالی پایدار است؟ آیا می‌تواند کار را درست انجام دهد؟ آیا از داده‌ی ما خوب محافظت می‌کند (گواهی‌ها، گزارش SOC 2، پرسش‌نامه‌ی امنیتی)؟ ارزان‌ترین بودن هدف نیست.');

  M(102,'Which governance structure centralizes decision-making authority, improving consistency but reducing agility?',
    'کدام ساختار حاکمیت، اختیار تصمیم‌گیری را متمرکز می‌کند؛ یکنواختی را بیشتر ولی چابکی را کمتر می‌کند؟',
    'همه‌ی تصمیم‌ها در یک جا گرفته می‌شود.',
    ['Centralized model','Board of Directors','Decentralized model','Government oversight model'],
    ['مدل متمرکز (Centralized)','هیئت‌مدیره','مدل غیرمتمرکز (Decentralized)','مدل نظارت دولتی'],
    'In a centralized model one group (for example the head office security team) makes the decisions for everyone, so rules are consistent, but local teams must wait for approval and react more slowly. A decentralized model is the opposite: faster locally, less consistent.',
    'در مدل متمرکز، دفتر مرکزی برای همه‌ی شعبه‌ها تصمیم می‌گیرد: همه یک قانون دارند (یکنواختی)، ولی هر شعبه برای هر تغییری باید منتظر مرکز بماند (چابکی کم). مدل غیرمتمرکز برعکس است: هر شعبه خودش تصمیم می‌گیرد؛ سریع‌تر ولی ناهماهنگ‌تر.');

  M(103,'What is the key purpose of a Business Partner Agreement (BPA)?',
    'هدف اصلی توافق‌نامه‌ی شراکت تجاری (BPA) چیست؟',
    'شراکت بلندمدت؛ چه کسی چه کاری می‌کند و چه سهمی دارد.',
    ['To define roles, responsibilities, and shared obligations in a long-term relationship','To ensure confidentiality of data','To set non-binding terms for collaboration','To describe security awareness training'],
    ['تعیین نقش‌ها، مسئولیت‌ها و تعهدات مشترک در یک رابطه‌ی بلندمدت','تضمین محرمانه ماندن داده','تعیین شرایط غیرالزام‌آور برای همکاری','توضیح آموزش آگاهی امنیتی'],
    'A BPA governs a long-term partnership: each partner’s responsibilities, how profits and decisions are shared and what happens if the partnership ends. Confidentiality is an NDA, and non-binding terms are an MOU.',
    'BPA برای شراکت بلندمدت است، مثل دو شرکتی که با هم یک محصول می‌فروشند: چه کسی چه کاری می‌کند، سود چطور تقسیم می‌شود، تصمیم‌ها را چه کسی می‌گیرد و اگر جدا شدند چه می‌شود. رازداری = NDA و تفاهم غیرالزام‌آور = MOU.');

  M(104,'Which of the following is an example of a risk transfer strategy?',
    'کدام گزینه نمونه‌ای از راهبرد «انتقال ریسک» (Risk transfer) است؟',
    'هزینه‌ی خسارت را به دوش کس دیگری می‌اندازیم.',
    ['Purchasing cyber insurance','Implementing stronger firewall rules','Decommissioning a vulnerable system','Accepting low-probability downtime risk'],
    ['خرید بیمه‌ی سایبری','گذاشتن قانون‌های قوی‌تر فایروال','از رده خارج کردن یک سیستم آسیب‌پذیر','پذیرفتن ریسک کم‌احتمال از کار افتادن'],
    'Transferring risk shifts the financial impact to someone else, most often an insurer (cyber insurance) or a vendor by contract. Stronger firewall rules are mitigation, removing the system is avoidance and doing nothing is acceptance.',
    'چهار راهبرد ریسک: Transfer (انتقال) = بیمه‌ی سایبری؛ اگر حادثه شد، بیمه پول خسارت را می‌دهد. Mitigate (کاهش) = فایروال قوی‌تر. Avoid (اجتناب) = سیستم خطرناک را کلاً حذف کنیم. Accept (پذیرش) = می‌دانیم و کاری نمی‌کنیم چون ارزان‌تر است.');

  M(105,'What is the key difference between risk tolerance and risk appetite?',
    'فرق اصلی Risk tolerance (تحمل ریسک) و Risk appetite (اشتهای ریسک) چیست؟',
    'اشتها = نگاه کلی شرکت به ریسک. تحمل = تا چه حدی می‌شود از آن فاصله گرفت.',
    ['Tolerance is the maximum acceptable risk variation; appetite is the general willingness to take risk','Tolerance is qualitative; appetite is quantitative','Tolerance applies only to financial risk; appetite applies to operational risk','Tolerance is set by the IT team; appetite is set by regulators'],
    ['تحمل = حداکثر انحراف قابل قبول از ریسک؛ اشتها = تمایل کلی به ریسک کردن','تحمل کیفی است؛ اشتها کمّی است','تحمل فقط برای ریسک مالی است؛ اشتها برای ریسک عملیاتی','تحمل را تیم IT تعیین می‌کند؛ اشتها را ناظر قانونی'],
    'Risk appetite is the overall amount and type of risk the organization is willing to pursue to reach its goals (for example "low appetite for data risk"). Risk tolerance is the acceptable variation around that, often a concrete limit (for example "no more than 4 hours of downtime per year").',
    'Risk appetite = «شخصیت» شرکت در برابر ریسک، مثلاً یک استارتاپ اشتهای ریسک بالا دارد و یک بانک پایین. Risk tolerance = «حد مشخص» تا کجا قابل قبول است، مثلاً «حداکثر ۴ ساعت قطعی در سال». اشتها کلی است، تحمل یک حد و مرز مشخص است.');

  M(106,'Which compliance process involves proactive prevention of non-compliance through reviews and process validation?',
    'کدام فرایند انطباق شامل جلوگیری پیشگیرانه از عدم انطباق، از طریق بازبینی‌ها و تأیید فرایندهاست؟',
    'مراقبت لازم و رفتار مسئولانه، قبل از اینکه مشکلی پیش بیاید.',
    ['Due diligence & duty of care','Attestation','Self-assessment','Automation'],
    ['Due diligence و Duty of care (بررسی دقیق و وظیفه‌ی مراقبت)','Attestation (گواهی رسمی)','Self-assessment (خودارزیابی)','Automation (خودکارسازی)'],
    'Due diligence and due care (duty of care) mean the organization actively does what a reasonable organization should: reviews processes, validates controls and fixes gaps before they become violations. Attestation is a formal statement that controls exist.',
    'Due diligence یعنی بررسی و تحقیق مداوم (آیا کنترل‌ها کار می‌کنند؟)، و Duty of care یعنی رفتار مسئولانه‌ای که هر سازمان معقولی باید داشته باشد. هر دو «پیشگیرانه» هستند: قبل از اینکه قانون نقض شود، فرایندها را بازبینی و درست می‌کنیم.');

  M(107,'In the context of security governance, custodians are responsible for:',
    'در حاکمیت امنیت، Custodianها (نگهدارنده‌های داده) مسئول چه چیزی هستند؟',
    'کارهای روزمره روی داده: پشتیبان‌گیری، دسترسی‌ها، نگهداری.',
    ['Day-to-day maintenance and protection of data assets','Approving and funding security initiatives','Determining why and how personal data is processed','Signing third-party contracts'],
    ['نگهداری و حفاظت روزمره از دارایی‌های داده','تأیید و تأمین بودجه‌ی برنامه‌های امنیتی','تعیین اینکه داده‌ی شخصی چرا و چطور پردازش شود','امضای قراردادهای شخص ثالث'],
    'Custodians (often IT staff) do the hands-on work: backups, applying access rights, patching and storing the data safely, following rules the data owner sets. Deciding why and how personal data is processed is the data controller’s role, and funding comes from senior management.',
    'نقش‌ها را حفظ کن: Owner (صاحب داده، معمولاً مدیر بخش) = تصمیم می‌گیرد چه کسی دسترسی داشته باشد. Custodian (معمولاً تیم IT) = کار روزمره: پشتیبان می‌گیرد، دسترسی‌ها را اعمال می‌کند و سرور را نگه می‌دارد. Controller = تعیین می‌کند داده‌ی شخصی چرا و چطور پردازش شود. Processor = از طرف Controller پردازش می‌کند.');

  M(108,'Which of the following is an example of anomalous behavior detection?',
    'کدام گزینه نمونه‌ای از تشخیص رفتار غیرعادی (Anomalous behavior) است؟',
    'چیزی که با رفتار همیشگی کاربر فرق دارد.',
    ['Login attempt from an unusual geographic location','Quarterly risk assessment','SLA performance review','Scheduled vendor penetration testing'],
    ['تلاش برای ورود از یک موقعیت جغرافیایی غیرعادی','ارزیابی ریسک فصلی','بازبینی عملکرد SLA','تست نفوذ زمان‌بندی‌شده‌ی فروشنده'],
    'Anomalous behavior is activity that differs from the normal pattern, such as a login from a country the user has never been in. The other options are planned, routine activities, not detections.',
    'رفتار غیرعادی یعنی چیزی که با الگوی همیشگی فرق دارد: کارمندی که همیشه از تورنتو وارد می‌شود، ناگهان از کشور دیگری وارد شود. سه گزینه‌ی دیگر کارهای برنامه‌ریزی‌شده و عادی هستند، نه تشخیص چیزی عجیب.');

  M(109,'Which compliance monitoring method involves employees confirming their understanding of updated policies?',
    'کدام روش پایش انطباق شامل این است که کارمندان تأیید کنند سیاست‌های به‌روزشده را فهمیده‌اند؟',
    'کارمند امضا می‌کند یا تیک می‌زند: «خواندم و فهمیدم».',
    ['Attestation & acknowledgment','Internal audit','Automated compliance tracking','Regulatory review'],
    ['Attestation و Acknowledgment (گواهی و تأیید دریافت)','ممیزی داخلی','ردیابی خودکار انطباق','بازبینی نهاد ناظر'],
    'Attestation and acknowledgment means each employee formally confirms (signs or clicks "I agree") that they have read and understood a policy. It creates a record that can be shown to auditors.',
    'وقتی سیاست امنیتی عوض می‌شود، از کارمند می‌خواهیم امضا کند یا در سیستم تیک بزند: «خواندم و فهمیدم» = Attestation و Acknowledgment. این یک مدرک است که بعداً می‌شود به ممیز نشان داد و کارمند دیگر نمی‌تواند بگوید «خبر نداشتم».');

  M(110,'Which is the primary purpose of a security awareness phishing simulation?',
    'هدف اصلی شبیه‌سازی فیشینگ در برنامه‌ی آگاهی امنیتی چیست؟',
    'هدف یاد دادن است، نه تنبیه.',
    ['Identify and train users on phishing recognition','Punish employees for clicking malicious links','Replace the need for spam filters','Test network firewall resilience'],
    ['شناسایی و آموزش کاربران برای تشخیص فیشینگ','تنبیه کارمندانی که روی لینک مخرب کلیک می‌کنند','حذف نیاز به فیلتر اسپم','تست مقاومت فایروال شبکه'],
    'A phishing simulation sends safe fake phishing emails to see who clicks, then gives those people immediate, targeted training. The goal is learning and measuring improvement over time, not punishment; it does not replace technical filters.',
    'شبیه‌سازی فیشینگ یعنی تیم امنیت خودش یک ایمیل فیشینگ بی‌خطر می‌فرستد. هر کس کلیک کند، فوراً یک آموزش کوتاه می‌بیند. هدف یاد دادن و اندازه‌گیری پیشرفت است، نه تنبیه؛ تنبیه باعث می‌شود کارمندان دیگر اشتباهشان را گزارش نکنند. جای فیلتر اسپم را هم نمی‌گیرد.');

  M(111,'A risk register entry lists a “KRIs threshold exceeded” event. What should happen next?',
    'در ثبت ریسک (Risk register) یک رویداد «عبور از آستانه‌ی KRI» ثبت شده. قدم بعدی چیست؟',
    'KRI مثل چراغ هشدار داشبورد ماشین است؛ وقتی روشن شد، کاری که از قبل تعیین شده انجام می‌شود.',
    ['Trigger predefined mitigation or escalation actions','Immediately close the risk register entry','Accept the risk without action','Begin new vendor onboarding'],
    ['اجرای اقدامات کاهش یا ارجاعی که از قبل تعیین شده','بستن فوری آن مورد در ثبت ریسک','پذیرفتن ریسک بدون هیچ اقدامی','شروع پذیرش یک فروشنده‌ی جدید'],
    'Key Risk Indicators have thresholds; when one is crossed, the response that was agreed in advance should start (extra controls, notifying the risk owner, escalating to management). Closing the entry or ignoring it defeats the purpose of the indicator.',
    'KRI (شاخص کلیدی ریسک) مثل چراغ «روغن» در داشبورد ماشین است. وقتی از آستانه رد شود (مثلاً تعداد حساب‌های بدون MFA از ۵٪ بیشتر شود)، کاری که از قبل تعیین شده شروع می‌شود: به صاحب ریسک خبر می‌دهیم، کنترل اضافه می‌کنیم یا به مدیریت ارجاع می‌دهیم.');

  M(112,'Which of the following provides dynamic input during application execution to detect runtime vulnerabilities?',
    'کدام گزینه در زمان «اجرای» برنامه، ورودی پویا به آن می‌دهد تا آسیب‌پذیری‌های زمان اجرا را پیدا کند؟',
    'کلمه‌های کلیدی: Dynamic و در حال اجرا (Runtime).',
    ['Dynamic application security testing (DAST)','Static application security testing (SAST)','Package monitoring','Signature-based scanning'],
    ['DAST (تست امنیت پویای برنامه)','SAST (تست امنیت ایستای برنامه، روی کد)','پایش بسته‌ها و کتابخانه‌ها','اسکن مبتنی بر امضا'],
    'DAST tests a running application from the outside, sending crafted inputs (like a real attacker) and watching the responses to find runtime flaws such as injection or XSS. SAST reads the source code without running it. Signature-based scanning compares files to known malware or vulnerability patterns; it does not send dynamic input to a running app.',
    'این را اشتباه زدی. DAST برنامه را «در حال اجرا» از بیرون تست می‌کند: مثل هکر، ورودی‌های عجیب (مثل ' + "' OR 1=1" + ') می‌فرستد و جواب‌ها را نگاه می‌کند. SAST کد را بدون اجرا می‌خواند. تو Signature-based scanning را زدی؛ آن فایل‌ها را با یک لیست الگوهای شناخته‌شده (امضا) مقایسه می‌کند، مثل آنتی‌ویروس، و ورودی پویا به برنامه نمی‌دهد. ترفند: D = Dynamic = در حال اجرا، S = Static = کد ساکن.',
    3);

  M(113,'What makes a system/process audit different from a vulnerability scan?',
    'چه چیزی ممیزی سیستم و فرایند (System/Process audit) را از اسکن آسیب‌پذیری متمایز می‌کند؟',
    'اسکنر فقط حفره‌ی فنی پیدا می‌کند؛ ممیزی می‌پرسد آیا کنترل‌ها و فرایندها واقعاً کار می‌کنند؟',
    ['It evaluates business impact and control effectiveness','It’s conducted by external teams','It only applies to open-source software','It cannot be automated'],
    ['اثر بر کسب‌وکار و کارآمدی کنترل‌ها را ارزیابی می‌کند','توسط تیم‌های بیرونی انجام می‌شود','فقط برای نرم‌افزار متن‌باز است','نمی‌شود خودکارش کرد'],
    'A vulnerability scan is a technical tool that lists known weaknesses. An audit looks wider: it checks whether processes are followed, whether controls are effective and what that means for the business. Audits can be internal or external.',
    'اسکن آسیب‌پذیری مثل دستگاه فلزیاب است: فقط می‌گوید «این‌جا حفره هست». ممیزی مثل بازرس است: بررسی می‌کند آیا فرایندها رعایت می‌شوند، آیا کنترل‌ها واقعاً جواب می‌دهند و این برای کسب‌وکار چه معنایی دارد. ممیزی هم می‌تواند داخلی باشد هم بیرونی.');

  M(114,'Which type of scan should be used when testing for vulnerabilities without exploiting them?',
    'برای تست آسیب‌پذیری‌ها «بدون سوءاستفاده از آن‌ها»، از کدام نوع اسکن باید استفاده کرد؟',
    'فقط نگاه می‌کنیم و گوش می‌دهیم، به سیستم ضربه نمی‌زنیم.',
    ['Passive scan','Active scan','Penetration test','Code review'],
    ['اسکن غیرفعال (Passive scan)','اسکن فعال (Active scan)','تست نفوذ','بازبینی کد'],
    'A passive scan only observes (traffic, banners, versions) and identifies likely vulnerabilities without sending attack traffic or exploiting anything, so it is safe for fragile systems. A penetration test actually exploits weaknesses, and an active scan probes the systems directly.',
    'Passive scan فقط نگاه و گوش می‌کند: ترافیک و نسخه‌ی نرم‌افزارها را می‌بیند و می‌گوید «احتمالاً این آسیب‌پذیری هست»، بدون اینکه به سیستم ضربه بزند. برای سیستم‌های حساس (مثل OT) امن است. Penetration test واقعاً از حفره سوءاستفاده می‌کند تا ثابت کند قابل نفوذ است.');

  M(115,'An organization whitelists an unsupported legacy application that has known vulnerabilities. This is an example of:',
    'یک سازمان یک برنامه‌ی قدیمی بدون پشتیبانی را که آسیب‌پذیری‌های شناخته‌شده دارد، در لیست مجاز می‌گذارد. این نمونه‌ای از چیست؟',
    'سازمان رسماً می‌گوید: «این مورد از قانون معاف است».',
    ['Exception or exemption','Insurance offset','Risk transference','Remediation bypass'],
    ['استثنا یا معافیت (Exception / Exemption)','جبران با بیمه','انتقال ریسک','دور زدن رفع آسیب‌پذیری'],
    'When a known vulnerability cannot be fixed (the app is needed and unsupported), the organization formally grants an exception or exemption: it documents the risk, gets approval, sets an expiry date and usually adds compensating controls.',
    'وقتی نمی‌شود یک آسیب‌پذیری را رفع کرد (برنامه‌ی قدیمی لازم است ولی سازنده پشتیبانی نمی‌کند)، سازمان رسماً یک Exception می‌دهد: ریسک را ثبت می‌کند، مدیر تأیید می‌کند، تاریخ انقضا می‌گذارد و معمولاً کنترل جبرانی هم اضافه می‌کند. این با «دور زدن» فرق دارد، چون رسمی و ثبت‌شده است.');

  M(116,'Which of the following best explains the role of CVSS in vulnerability analysis?',
    'کدام گزینه بهتر از همه نقش CVSS را در تحلیل آسیب‌پذیری توضیح می‌دهد؟',
    'CVSS یک نمره از ۰ تا ۱۰ است.',
    ['Assigns a severity score to aid prioritization','Describes exploits in detail','Identifies the vulnerability’s CVE ID','Lists systems affected by a vulnerability'],
    ['یک نمره‌ی شدت می‌دهد تا اولویت‌بندی راحت شود','سوءاستفاده‌ها را با جزئیات توضیح می‌دهد','شناسه‌ی CVE آسیب‌پذیری را مشخص می‌کند','سیستم‌های آسیب‌دیده را فهرست می‌کند'],
    'The Common Vulnerability Scoring System gives each vulnerability a severity score from 0 to 10 (low, medium, high, critical), so teams know what to fix first. The CVE is the ID (name) of the vulnerability, and CVSS is its score.',
    'CVSS به هر آسیب‌پذیری یک نمره از ۰ تا ۱۰ می‌دهد (۹ تا ۱۰ = بحرانی). مثل نمره‌ی اورژانس بیمارستان که می‌گوید اول به کدام بیمار برسیم. CVE «اسم و شماره»ی آسیب‌پذیری است (مثل CVE-2021-44228)، CVSS «نمره‌ی شدت» آن.');

  M(117,'Which technique validates whether vulnerability remediation has been successful?',
    'کدام روش تأیید می‌کند که رفع یک آسیب‌پذیری موفق بوده است؟',
    'بعد از درست کردن، دوباره همان آزمایش را انجام بده.',
    ['Rescanning and auditing','Penetration testing','Threat intelligence review','Manual data correlation'],
    ['اسکن دوباره و ممیزی','تست نفوذ','بازبینی اطلاعات تهدید','هم‌بستگی دستی داده‌ها'],
    'After a patch or fix, you scan again (and audit configs) to prove the vulnerability is really gone. This is the validation step of vulnerability management: identify, analyze, remediate, validate.',
    'بعد از اینکه Patch نصب شد، باید ثابت کنیم واقعاً درست شده: دوباره اسکن می‌کنیم و تنظیمات را ممیزی می‌کنیم. اگر اسکن دیگر آن آسیب‌پذیری را نشان ندهد، رفع موفق بوده. مراحل مدیریت آسیب‌پذیری: پیدا کردن ← تحلیل ← رفع ← تأیید (Rescan).');

  M(118,'Which factor increases the exposure factor of a vulnerability?',
    'کدام عامل، ضریب خسارت (Exposure factor) یک آسیب‌پذیری را بیشتر می‌کند؟',
    'هرچه بیشتر در معرض اینترنت باشد، احتمال و اندازه‌ی خسارت بیشتر است.',
    ['Vulnerability exists on a public-facing web server','Presence of compensating controls','Internal-only network access','Asset is in a segmented VLAN'],
    ['آسیب‌پذیری روی یک وب‌سرور رو به اینترنت است','وجود کنترل‌های جبرانی','دسترسی فقط از شبکه‌ی داخلی','دارایی در یک VLAN بخش‌بندی‌شده است'],
    'A vulnerability on a public-facing server can be reached by anyone on the internet, so the likely loss is much larger. Compensating controls, internal-only access and segmentation all reduce exposure.',
    'آسیب‌پذیری روی سروری که رو به اینترنت است، یعنی هر کسی در دنیا می‌تواند امتحانش کند؛ پس احتمال حمله و اندازه‌ی خسارت خیلی بیشتر است. سه گزینه‌ی دیگر (کنترل جبرانی، فقط داخلی، VLAN جدا) همه خطر را «کمتر» می‌کنند.');

  M(119,'Which technology allows for configuration validation against security baselines?',
    'کدام فناوری اجازه می‌دهد تنظیمات سیستم‌ها را با خط مبنای امنیتی (Baseline) مقایسه و تأیید کنیم؟',
    'یک پروتکل استاندارد برای بررسی خودکار تنظیمات (همراه با CIS Benchmarks).',
    ['SCAP','NetFlow','CVSS','DAST'],
    ['SCAP (پروتکل خودکار محتوای امنیتی)','NetFlow (آمار ترافیک شبکه)','CVSS (نمره‌ی شدت آسیب‌پذیری)','DAST (تست برنامه‌ی در حال اجرا)'],
    'The Security Content Automation Protocol defines standard formats so tools can automatically check system settings against a baseline such as CIS Benchmarks or DISA STIGs and report every setting that does not match. NetFlow is traffic data and CVSS is a score.',
    'SCAP یک زبان استاندارد است که ابزارها با آن تنظیمات سیستم را خودکار با خط مبنا (مثل CIS Benchmarks) مقایسه می‌کنند و گزارش می‌دهند کدام تنظیم با استاندارد فرق دارد. فرمول امتحان: Baseline / Configuration compliance = SCAP.');

  M(120,'A SIEM alert triggered by unauthorized login attempts is an example of what control type?',
    'یک هشدار SIEM که با تلاش‌های ورود غیرمجاز فعال می‌شود، نمونه‌ای از کدام نوع کنترل است؟',
    'هشدار جلوی حمله را نمی‌گیرد؛ فقط «می‌فهمد» و خبر می‌دهد.',
    ['Detective','Corrective','Preventive','Deterrent'],
    ['Detective (تشخیصی)','Corrective (اصلاحی)','Preventive (پیشگیرانه)','Deterrent (بازدارنده)'],
    'A SIEM alert notices and reports something that already happened, so it is a detective control. Preventive controls stop it (a firewall, MFA), corrective controls fix it afterwards (restoring a backup) and deterrent controls discourage it (a warning banner).',
    'هشدار SIEM مثل دزدگیر است: جلوی دزد را نمی‌گیرد، فقط «تشخیص» می‌دهد و خبر می‌دهد = Detective. Preventive جلویش را می‌گیرد (قفل، فایروال)، Corrective بعدش درست می‌کند (برگرداندن پشتیبان) و Deterrent می‌ترساند (تابلوی «دوربین مداربسته»).');

  M(121,'An organization calculates an SLE of $5,000 for a critical asset and determines the ARO is 0.25. What is the ALE?',
    'یک سازمان برای یک دارایی حیاتی SLE را ۵۰۰۰ دلار و ARO را ۰٫۲۵ حساب کرده است. ALE چقدر است؟',
    'ALE = SLE × ARO.',
    ['$1,250','$5,000','$20,000','$1,000'],
    ['۱٬۲۵۰ دلار','۵٬۰۰۰ دلار','۲۰٬۰۰۰ دلار','۱٬۰۰۰ دلار'],
    'ALE = SLE × ARO = $5,000 × 0.25 = $1,250 per year. An ARO of 0.25 means the event is expected once every four years. $20,000 is what you get if you divide instead of multiply.',
    'فرمول: ALE = SLE × ARO = ۵۰۰۰ × ۰٫۲۵ = ۱۲۵۰ دلار در سال. ARO = ۰٫۲۵ یعنی این اتفاق هر ۴ سال یک بار می‌افتد. اگر اشتباهی تقسیم کنی (۵۰۰۰ ÷ ۰٫۲۵) به ۲۰٬۰۰۰ می‌رسی که دام سؤال است.');

  M(122,'Which of the following is an example of risk avoidance?',
    'کدام گزینه نمونه‌ای از «اجتناب از ریسک» (Risk avoidance) است؟',
    'کاری را که ریسک می‌سازد اصلاً انجام نده.',
    ['Eliminating a system that stores sensitive customer data','Using an SLA to enforce vendor uptime','Implementing endpoint encryption','Increasing the RTO threshold'],
    ['حذف سیستمی که داده‌ی حساس مشتری را نگه می‌دارد','استفاده از SLA برای الزام فروشنده به در دسترس بودن','پیاده‌سازی رمزگذاری روی دستگاه‌ها','بالا بردن آستانه‌ی RTO'],
    'Avoidance removes the activity that creates the risk. If the system that stores sensitive customer data is eliminated, the risk of that data being breached from it is gone. Encryption is mitigation, and an SLA moves some risk to the vendor.',
    'Avoid = «اصلاً انجامش نده». اگر سیستمی که داده‌ی حساس مشتری را نگه می‌دارد کلاً حذف شود، دیگر داده‌ای نیست که لو برود و ریسک از بین رفته. رمزگذاری = کاهش (Mitigate) و SLA = بخشی از ریسک را به فروشنده منتقل می‌کند.');

  M(123,'An employee has access to payroll, HR, and legal files due to overlapping roles. What is violated?',
    'یک کارمند به خاطر نقش‌های هم‌پوشان، به فایل‌های حقوق، منابع انسانی و حقوقی دسترسی دارد. کدام اصل نقض شده؟',
    'آیا واقعاً برای کارش به همه‌ی این‌ها نیاز دارد؟',
    ['Least privilege','Segmentation','Principle of separation of duties','Encryption policies'],
    ['Least privilege (حداقل دسترسی)','Segmentation (بخش‌بندی)','اصل تفکیک وظایف (Separation of duties)','سیاست‌های رمزگذاری'],
    'Least privilege means each person gets only the access needed for their current job. Collecting extra permissions over time (privilege creep) violates it. Separation of duties is about splitting one critical task between people, for example one person requests a payment and another approves it.',
    'Least privilege یعنی هر کس فقط همان دسترسی‌ای را داشته باشد که برای کار فعلی‌اش لازم است. وقتی کارمند از نقش‌های قبلی دسترسی جمع کرده (Privilege creep) و الان به حقوق و HR و حقوقی دسترسی دارد، این اصل نقض شده. Separation of duties فرق دارد: یک کار حساس بین دو نفر تقسیم می‌شود، مثلاً یکی پرداخت را ثبت کند و دیگری تأیید.');

  M(124,'Which incident response stage MOST benefits from vulnerability scan results to prioritize remediation?',
    'کدام مرحله‌ی پاسخ به حادثه بیشتر از همه از نتایج اسکن آسیب‌پذیری برای اولویت‌بندی رفع مشکل استفاده می‌کند؟',
    'مرحله‌ای که در آن حفره‌ها را می‌بندیم و ریشه‌ی مشکل را پاک می‌کنیم.',
    ['Eradication','Analysis','Containment','Lessons Learned'],
    ['Eradication (ریشه‌کنی)','Analysis (تحلیل)','Containment (مهار)','Lessons Learned (درس‌های آموخته)'],
    'During eradication the team removes the attacker’s foothold and fixes the weaknesses that were used. Vulnerability scan results show which holes still exist and which to patch first, so the attacker cannot come back the same way.',
    'در Eradication، بدافزار را پاک می‌کنیم و حفره‌هایی را که هکر از آن وارد شد می‌بندیم. نتایج اسکن آسیب‌پذیری نشان می‌دهد کدام حفره‌ها هنوز باز هستند و کدام را اول Patch کنیم، تا هکر از همان راه برنگردد.');

  M(125,'Why would an organization use parallel processing during resilience testing?',
    'چرا یک سازمان در تست تاب‌آوری از پردازش موازی (Parallel processing) استفاده می‌کند؟',
    'سیستم پشتیبان هم‌زمان با سیستم اصلی کار می‌کند، بدون اینکه سیستم اصلی را قطع کنیم.',
    ['To isolate production from testing','To increase geolocation redundancy','To replace replication','To eliminate cold sites'],
    ['برای جدا نگه داشتن محیط اصلی از تست','برای افزایش افزونگی جغرافیایی','برای جایگزین کردن Replication','برای حذف سایت‌های سرد'],
    'In a parallel test the backup or recovery systems process real work at the same time as production, while production keeps running untouched. That way the recovery side is tested without risking or interrupting the live systems.',
    'در تست موازی، سیستم پشتیبان (مثلاً سایت DR) همان کارهای واقعی را هم‌زمان با سیستم اصلی انجام می‌دهد، ولی سیستم اصلی دست نمی‌خورد و کار خودش را می‌کند. پس تست انجام می‌شود بدون اینکه محیط اصلی در خطر بیفتد یا قطع شود. فرق با Full interruption test: در آن واقعاً سیستم اصلی را خاموش می‌کنیم.');

  M(126,'In an SDN-based architecture, what is the primary security challenge?',
    'در معماری SDN (شبکه‌ی نرم‌افزارمحور)، چالش امنیتی اصلی چیست؟',
    'در SDN همه‌چیز از یک کنترلر مرکزی مدیریت می‌شود.',
    ['Centralized policy enforcement risks','Hardware compatibility','Ineffective EAP chaining','Missing TPM encryption'],
    ['خطرهای اعمال متمرکز سیاست‌ها','سازگاری سخت‌افزار','زنجیره‌ی ناکارآمد EAP','نبودن رمزگذاری TPM'],
    'SDN moves control of the whole network into a central controller. That is efficient, but the controller becomes a single point of failure and a prime target: whoever controls it can change routing and security policy for every device.',
    'در SDN، یک کنترلر مرکزی (Control plane) به همه‌ی سوئیچ‌ها و روترها می‌گوید چه کار کنند. راحت است، ولی اگر هکر کنترلر را بگیرد، کل شبکه دستش است: می‌تواند ترافیک را عوض کند یا قانون‌های امنیتی را خاموش کند. پس کنترلر یک نقطه‌ی شکست واحد و هدف اصلی است.');

  M(127,'A manufacturing plant uses legacy OT systems to control robotic arms. What is the likely risk associated with patching?',
    'یک کارخانه از سیستم‌های OT قدیمی برای کنترل بازوهای رباتیک استفاده می‌کند. خطر احتمالی مربوط به Patch کردن چیست؟',
    'خط تولید نباید حتی چند دقیقه متوقف شود.',
    ['Inability to patch due to availability constraints','Recovery latency','Hypervisor dependency','Load balancing conflict'],
    ['ناتوانی در Patch کردن به خاطر محدودیت‌های در دسترس بودن','تأخیر در بازیابی','وابستگی به Hypervisor','تداخل در توزیع بار'],
    'OT and ICS systems must run all the time, and a patch may need a restart or could break the machine control, so they often cannot be patched (or the vendor no longer makes patches). The usual answer is compensating controls: segmentation, isolation and monitoring.',
    'در کارخانه، خط تولید باید شبانه‌روز کار کند؛ Patch کردن یعنی ری‌استارت و توقف تولید، و ممکن است بازوی ربات را هم خراب کند. خیلی وقت‌ها سازنده هم دیگر Patch نمی‌دهد. پس معمولاً نمی‌شود Patch کرد و به جایش سیستم را جدا (Segmentation) و زیر نظر می‌گیرند. در OT «در دسترس بودن» از همه مهم‌تر است.');

  M(128,'In cloud environments, what helps delineate responsibility between provider and customer?',
    'در محیط‌های ابری، چه چیزی مرز مسئولیت بین ارائه‌دهنده‌ی ابر و مشتری را مشخص می‌کند؟',
    'یک مدل که می‌گوید «این قسمت با من، آن قسمت با تو».',
    ['Shared responsibility model','SASE implementation','Risk transference matrix','Identity federation policy'],
    ['مدل مسئولیت مشترک (Shared responsibility)','پیاده‌سازی SASE','ماتریس انتقال ریسک','سیاست اتحاد هویت'],
    'The shared responsibility model spells out who secures what. The provider always secures the physical data centers and infrastructure; the customer always secures its data, accounts and access. In between, it depends on IaaS, PaaS or SaaS.',
    'مدل مسئولیت مشترک می‌گوید چه کسی مسئول کدام بخش است. ارائه‌دهنده (مثل AWS) همیشه مسئول ساختمان، سخت‌افزار و زیرساخت است. مشتری همیشه مسئول داده‌ها، حساب‌ها و دسترسی‌هایش است. بقیه بستگی دارد: در IaaS مشتری سیستم‌عامل را هم Patch می‌کند، در SaaS تقریباً همه با ارائه‌دهنده است.');

  M(129,'A company migrates its ERP system to the cloud but retains sensitive payroll services on-prem. What architecture model is this?',
    'یک شرکت سیستم ERP خود را به ابر می‌برد ولی سرویس‌های حساس حقوق و دستمزد را در سرورهای داخلی (On-prem) نگه می‌دارد. این کدام مدل معماری است؟',
    'ترکیب ابر و داخلی.',
    ['Hybrid cloud','Serverless','Community cloud','Multi-cloud'],
    ['ابر ترکیبی (Hybrid cloud)','بدون سرور (Serverless)','ابر اجتماعی (Community cloud)','چند ابری (Multi-cloud)'],
    'Hybrid cloud combines on-premises (or private cloud) systems with public cloud services that work together. Multi-cloud means using several public cloud providers (for example AWS and Azure), and community cloud is shared by organizations with common needs.',
    'Hybrid = ترکیب: بخشی در ابر عمومی (ERP) و بخشی در سرورهای خود شرکت (حقوق و دستمزد). Multi-cloud یعنی استفاده از چند ارائه‌دهنده‌ی ابر با هم (مثلاً AWS و Azure). Community cloud یعنی چند سازمان با نیاز مشابه (مثلاً چند بیمارستان) یک ابر را با هم شریک می‌شوند.');

  M(130,'What is the best reason to implement jump servers in enterprise architecture?',
    'بهترین دلیل برای استفاده از Jump server در معماری سازمان چیست؟',
    'برای رسیدن به منطقه‌ی امن، باید از یک «در» کنترل‌شده رد شوی.',
    ['To mediate access to isolated zones','To reduce port usage','To enforce least privilege','To improve latency'],
    ['واسطه شدن برای دسترسی به منطقه‌های جداشده','کم کردن استفاده از پورت‌ها','اعمال حداقل دسترسی','بهتر کردن تأخیر شبکه'],
    'A jump server (jump box, bastion host) is the single, hardened and monitored entry point that admins must connect through to reach servers in an isolated zone (a secure VLAN, a cloud VPC). Everything passes one controlled, logged gateway.',
    'Jump server مثل اتاق نگهبانی دم در یک منطقه‌ی امن است. مدیر سیستم نمی‌تواند مستقیم به سرورهای حساس وصل شود؛ اول باید به Jump server وصل شود (با MFA) و از آنجا به سرورها برود. چون همه از یک در کنترل‌شده رد می‌شوند، همه‌چیز ثبت و کنترل می‌شود.');

  M(131,'Which architectural model is most prone to increased attack surfaces due to distributed deployments?',
    'کدام مدل معماری به خاطر استقرار توزیع‌شده، بیشتر از همه در معرض بزرگ شدن سطح حمله است؟',
    'برنامه به ده‌ها سرویس کوچک تقسیم شده که با API با هم حرف می‌زنند.',
    ['Microservices','On-prem','RTOS','Physical segmentation'],
    ['ریزسرویس‌ها (Microservices)','داخلی (On-prem)','RTOS (سیستم‌عامل بلادرنگ)','بخش‌بندی فیزیکی'],
    'Microservices split one application into many small services, each with its own API, container and network connections. Every service and API is another thing that can be attacked or misconfigured, so the attack surface grows.',
    'در Microservices یک برنامه‌ی بزرگ به ده‌ها سرویس کوچک تقسیم می‌شود و هر کدام API و کانتینر خودش را دارد. هر API یک در دیگر برای حمله است و هر سرویس ممکن است اشتباه تنظیم شود. پس هرچه سرویس بیشتر، سطح حمله بزرگ‌تر.');

  M(132,'Which model is most appropriate for high-performance, time-sensitive medical devices?',
    'کدام مدل برای دستگاه‌های پزشکی پرسرعت و حساس به زمان مناسب‌تر است؟',
    'سیستم‌عاملی که دقیقاً سر وقت جواب می‌دهد.',
    ['RTOS','Microservices','Containerization','SDN'],
    ['RTOS (سیستم‌عامل بلادرنگ، Real-time OS)','ریزسرویس‌ها','کانتینرسازی','SDN'],
    'A Real-Time Operating System guarantees responses within strict time limits, which pacemakers, insulin pumps and other medical devices need. Microservices, containers and SDN are general IT architectures without those timing guarantees.',
    'RTOS سیستم‌عاملی است که تضمین می‌کند کار دقیقاً در زمان مشخص (مثلاً چند میلی‌ثانیه) انجام شود. دستگاه ضربان‌ساز قلب یا پمپ انسولین نمی‌تواند حتی کمی دیر کند. Microservices و کانتینر و SDN برای IT عمومی هستند و چنین تضمینی ندارند.');

  M(133,'Which architectural model introduces risk due to reliance on third-party APIs for orchestration?',
    'کدام مدل معماری به خاطر وابستگی به APIهای شخص ثالث برای هماهنگ‌سازی (Orchestration)، ریسک ایجاد می‌کند؟',
    'همان مدلی که با ده‌ها API و سرویس کوچک کار می‌کند.',
    ['Microservices','On-prem','Virtualization','RTOS'],
    ['ریزسرویس‌ها (Microservices)','داخلی (On-prem)','مجازی‌سازی','RTOS'],
    'Microservice applications usually rely on outside APIs and platforms (orchestrators like Kubernetes services, payment or identity APIs). If one of those third parties is breached, changes or goes down, the application is affected: a supply-chain risk.',
    'برنامه‌های Microservices معمولاً به APIهای بیرونی وابسته‌اند (مثلاً API پرداخت، سرویس ورود، پلتفرم ارکستراسیون). اگر آن شرکت سوم هک شود، تغییر کند یا از کار بیفتد، برنامه‌ی ما هم خراب می‌شود. این یک ریسک زنجیره‌ی تأمین است.');

  M(134,'Which key management component ensures that encrypted data can be recovered by a third party if needed?',
    'کدام جزء مدیریت کلید تضمین می‌کند داده‌ی رمزشده در صورت نیاز توسط یک شخص ثالث قابل بازیابی باشد؟',
    'یک نسخه از کلید را پیش یک امانت‌دار مطمئن می‌گذاریم.',
    ['Key escrow','OCSP','Digital signature','HSM'],
    ['Key escrow (امانت‌گذاری کلید)','OCSP (بررسی آنلاین وضعیت گواهی)','امضای دیجیتال','HSM (ماژول امنیتی سخت‌افزاری)'],
    'Key escrow stores a copy of encryption keys with a trusted third party (or a separate internal team), so data can still be decrypted if the original key holder leaves, loses the key or a court orders access.',
    'Key escrow مثل سپردن کلید یدک خانه به یک امانت‌دار مطمئن است. اگر کارمندی که فایل‌ها را رمز کرده از شرکت برود یا کلیدش را گم کند، با کلید امانتی می‌شود داده را باز کرد. HSM جای نگهداری امن کلید است، ولی خودش یعنی «شخص ثالث بازیابی» نیست.');

  M(135,'What is a common risk of BYOD in an enterprise?',
    'یک ریسک رایج BYOD (آوردن دستگاه شخصی به محل کار) در سازمان چیست؟',
    'گوشی مال کارمند است، نه شرکت.',
    ['Lower control over security configurations','Higher corporate device costs','Reduced network latency','Increased password length requirements'],
    ['کنترل کمتر روی تنظیمات امنیتی','هزینه‌ی بیشتر دستگاه‌های شرکتی','کاهش تأخیر شبکه','الزام رمزهای طولانی‌تر'],
    'With Bring Your Own Device, the company does not own or fully manage the phone or laptop, so it cannot fully control updates, apps or settings. MDM, containerization and access policies help reduce that risk. BYOD usually lowers device costs, not raises them.',
    'در BYOD، گوشی مال خود کارمند است؛ شرکت نمی‌تواند کامل کنترل کند چه برنامه‌ای نصب شود، آیا آپدیت شده یا رمز صفحه دارد. برای کم کردن خطر از MDM و جدا کردن فضای کاری (Containerization) استفاده می‌کنند. BYOD معمولاً هزینه را کم می‌کند، نه زیاد.');

  M(136,'Enforcing full disk encryption on all corporate laptops primarily mitigates which risk?',
    'اجبار به رمزگذاری کامل دیسک (Full disk encryption) روی همه‌ی لپ‌تاپ‌های شرکت، در اصل کدام ریسک را کم می‌کند؟',
    'رمزگذاری دیسک از داده‌ی «ذخیره‌شده روی دستگاه» محافظت می‌کند؛ کی این مهم است؟',
    ['Data theft from lost or stolen devices','Data exfiltration over the network','Unauthorized API access','Insider privilege escalation'],
    ['دزدیده شدن داده از دستگاه‌های گم‌شده یا دزدیده‌شده','خارج کردن داده از طریق شبکه','دسترسی غیرمجاز به API','افزایش دسترسی توسط فرد داخلی'],
    'Full disk encryption protects data at rest: if a laptop is lost or stolen, the thief cannot read the drive without the key. It does nothing against exfiltration over the network, because while the user is logged in the disk is unlocked and files are sent in readable form; that needs DLP and network controls.',
    'این را اشتباه زدی. رمزگذاری کامل دیسک (مثل BitLocker) از داده‌ی «ذخیره‌شده» محافظت می‌کند: اگر لپ‌تاپ در تاکسی جا بماند یا دزدیده شود، دزد بدون رمز نمی‌تواند هارد را بخواند. تو «خارج کردن داده از شبکه» را زدی؛ وقتی کاربر وارد شده، دیسک باز است و فایل‌ها به‌صورت عادی از شبکه فرستاده می‌شوند، پس FDE جلویش را نمی‌گیرد؛ برای آن DLP لازم است. قانون: FDE = داده‌ی در حال استراحت (At rest) = دستگاه گم‌شده یا دزدیده‌شده.',
    1);

  M(137,'Which type of site survey uses real-time measurements by connecting to the network?',
    'کدام نوع بررسی محل (Site survey) وای‌فای، با «وصل شدن» به شبکه اندازه‌گیری لحظه‌ای انجام می‌دهد؟',
    'وصل شدن و تست واقعی = فعال.',
    ['Active','Passive','Predictive','Simulated'],
    ['Active (فعال)','Passive (غیرفعال)','Predictive (پیش‌بینی، با نرم‌افزار)','Simulated (شبیه‌سازی‌شده)'],
    'In an active survey the tester connects to the access points and measures real throughput, packet loss and roaming. A passive survey only listens to signals without connecting, and a predictive survey uses floor plans and software before any hardware is installed.',
    'Active survey = به وای‌فای وصل می‌شویم و واقعاً سرعت، قطعی و جابه‌جایی بین اکسس‌پوینت‌ها را تست می‌کنیم. Passive = فقط به سیگنال‌ها گوش می‌دهیم بدون اینکه وصل شویم. Predictive = قبل از نصب، با نقشه‌ی ساختمان و نرم‌افزار پیش‌بینی می‌کنیم.');

  M(138,'What is the primary reason for air-gapping an ICS network?',
    'دلیل اصلی Air-gap کردن شبکه‌ی ICS (سیستم کنترل صنعتی) چیست؟',
    'Air gap یعنی هیچ سیم و راهی به بیرون نباشد.',
    ['To completely isolate operational systems from external networks','To reduce electromagnetic interference','To improve system redundancy','To speed up firmware patching'],
    ['جدا کردن کامل سیستم‌های عملیاتی از شبکه‌های بیرونی','کم کردن تداخل الکترومغناطیسی','بیشتر کردن افزونگی سیستم','سریع‌تر کردن Patch فرم‌ور'],
    'An air gap means the ICS network has no physical or wireless connection to the corporate network or the internet, so remote attackers cannot reach it. The weak point that remains is removable media, as Stuxnet showed with USB drives.',
    'Air gap یعنی شبکه‌ی کنترل کارخانه یا نیروگاه هیچ اتصالی (نه سیم، نه وای‌فای) به اینترنت یا شبکه‌ی اداری ندارد؛ پس هکر از راه دور نمی‌تواند به آن برسد. نقطه‌ی ضعف باقی‌مانده USB است؛ ویروس Stuxnet با USB وارد یک سیستم Air-gap شد.');

  M(139,'Deploying WPA3-Enterprise with RADIUS improves security primarily by:',
    'راه‌اندازی WPA3-Enterprise همراه با RADIUS، در اصل امنیت را چطور بهتر می‌کند؟',
    'Enterprise یعنی هر کاربر با هویت خودش وارد می‌شود (802.1X) و کلید جدا می‌گیرد.',
    ['Enforcing mutual authentication and per-session encryption keys','Encrypting all internet-bound traffic','Blocking all MAC addresses not whitelisted','Allowing anonymous access to guest networks'],
    ['اجبار به احراز هویت دوطرفه و کلید رمزگذاری جدا برای هر نشست','رمزگذاری همه‌ی ترافیک رو به اینترنت','مسدود کردن همه‌ی MACهایی که در لیست مجاز نیستند','اجازه‌ی دسترسی ناشناس به شبکه‌ی مهمان'],
    'WPA3-Enterprise uses 802.1X with a RADIUS server: each user authenticates with their own credentials or certificate, the client verifies the server’s certificate (mutual authentication), and every session gets its own encryption keys. One user cannot decrypt another user’s traffic.',
    'در حالت Personal همه یک رمز وای‌فای مشترک دارند. در Enterprise هر کاربر با نام کاربری یا گواهی خودش از طریق سرور RADIUS وارد می‌شود، دستگاه هم گواهی سرور را چک می‌کند (احراز هویت دوطرفه، تا اکسس‌پوینت جعلی فریبش ندهد) و هر نشست کلید رمز خودش را می‌گیرد. پس کاربرها نمی‌توانند ترافیک همدیگر را باز کنند.');

  M(140,'Static code analysis is performed:',
    'تحلیل ایستای کد (Static code analysis) چه زمانی و چطور انجام می‌شود؟',
    'Static = ساکن؛ برنامه اجرا نمی‌شود.',
    ['On source code without executing it','On running applications to detect vulnerabilities','Only during penetration testing','During end-user acceptance testing'],
    ['روی کد منبع، بدون اجرای آن','روی برنامه‌های در حال اجرا برای پیدا کردن آسیب‌پذیری','فقط در زمان تست نفوذ','در زمان تست پذیرش کاربر نهایی'],
    'Static analysis (SAST) reads the source code or binaries without running them, looking for insecure patterns such as SQL built from user input or hard-coded passwords. It can run early in development, in the IDE or the CI pipeline. Testing a running application is DAST.',
    'SAST مثل غلط‌گیری یک نامه قبل از فرستادن است: کد را می‌خواند بدون اینکه اجرایش کند و دنبال الگوهای خطرناک می‌گردد (مثل رمز نوشته‌شده داخل کد یا ساختن SQL از ورودی کاربر). می‌شود خیلی زود، حتی موقع نوشتن کد، انجامش داد. تست برنامه‌ی در حال اجرا = DAST.');

  M(141,'Why is network segmentation critical when deploying IoT devices in an enterprise environment?',
    'چرا موقع راه‌اندازی دستگاه‌های IoT در سازمان، بخش‌بندی شبکه (Segmentation) حیاتی است؟',
    'دستگاه‌های IoT معمولاً ضعیف هستند؛ اگر هک شوند نباید به سرورهای مهم برسند.',
    ['It prevents IoT devices from accessing unauthorized internal systems','It increases device battery life','It eliminates the need for firmware updates','It allows IoT devices to use default credentials securely'],
    ['جلوی دسترسی دستگاه‌های IoT به سیستم‌های داخلی غیرمجاز را می‌گیرد','عمر باتری دستگاه‌ها را بیشتر می‌کند','نیاز به به‌روزرسانی فرم‌ور را از بین می‌برد','اجازه می‌دهد IoT با رمز پیش‌فرض به‌صورت امن کار کند'],
    'IoT devices are often weak (old firmware, few security features). Putting them on their own segment means that if one is hacked, it cannot reach file servers, databases or user PCs. Segmentation never makes default passwords safe or removes the need for updates.',
    'دوربین، ترموستات و چاپگر هوشمند معمولاً امنیت ضعیفی دارند. اگر آن‌ها را در یک VLAN جدا بگذاریم، حتی اگر هک شوند، هکر نمی‌تواند از آن‌ها به سرورهای مالی یا کامپیوتر کارمندان برسد. یک ماجرای معروف: هکرها از دماسنج هوشمند آکواریوم یک کازینو وارد شبکه شدند.');

  M(142,'Which method best ensures mobile devices connect only to trusted corporate Wi-Fi networks?',
    'کدام روش بهتر از همه تضمین می‌کند گوشی‌ها فقط به وای‌فای مطمئن شرکت وصل شوند؟',
    'دستگاه باید بتواند «هویت» شبکه را بررسی کند؛ این کار با گواهی دیجیتال انجام می‌شود.',
    ['Implementing certificate-based authentication','Enforcing WPA3-Personal','Using MAC address filtering only','Disabling SSID broadcast'],
    ['پیاده‌سازی احراز هویت مبتنی بر گواهی دیجیتال','اجبار به WPA3-Personal','فقط استفاده از فیلتر آدرس MAC','مخفی کردن نام شبکه (SSID)'],
    'With certificate-based authentication (EAP-TLS), the device checks the network’s server certificate and only connects if it was issued by the company’s CA, so an evil twin with the same name is rejected. Hidden SSIDs and MAC filtering are easy to bypass.',
    'هکر می‌تواند یک وای‌فای جعلی با همان اسم شرکت بسازد (Evil twin). با احراز هویت مبتنی بر گواهی (EAP-TLS)، گوشی گواهی سرور شبکه را چک می‌کند؛ اگر توسط CA شرکت صادر نشده باشد، وصل نمی‌شود. مخفی کردن SSID و فیلتر MAC را راحت می‌شود دور زد.');

  M(143,'Which data state is most vulnerable during file transfers across untrusted networks?',
    'در انتقال فایل از طریق شبکه‌های نامطمئن، کدام حالت داده آسیب‌پذیرتر است؟',
    'داده دارد «جابه‌جا» می‌شود.',
    ['In transit','At rest','In use','Tokenized'],
    ['In transit (در حال انتقال)','At rest (ذخیره‌شده)','In use (در حال استفاده)','توکن‌شده'],
    'Data moving across a network is data in transit. Over an untrusted network (public Wi-Fi, the internet) it can be sniffed or changed unless it is protected with TLS, SFTP or a VPN.',
    'سه حالت داده: At rest = روی هارد ذخیره شده. In transit = دارد از شبکه جابه‌جا می‌شود. In use = در RAM و در حال پردازش. وقتی فایل از اینترنت یا وای‌فای کافه رد می‌شود، In transit است و اگر رمز نشده باشد (با TLS، SFTP یا VPN) هر کسی در مسیر می‌تواند آن را بخواند.');

  M(144,'Which of the following best secures data at rest without altering the original format?',
    'کدام گزینه بهتر از همه داده‌ی ذخیره‌شده (At rest) را امن می‌کند، بدون اینکه داده‌ی اصلی را تغییر دهد؟',
    'روشی که داده را قفل می‌کند ولی با کلید، دقیقاً همان داده‌ی اصلی برمی‌گردد.',
    ['Encryption','Obfuscation','Masking','Tokenization'],
    ['رمزگذاری (Encryption)','مبهم‌سازی (Obfuscation)','پوشاندن (Masking)','توکن‌سازی (Tokenization)'],
    'The answer key is encryption: it is the standard control for data at rest (full disk encryption, database TDE), and decrypting with the key gives back the exact original data. Masking and obfuscation permanently hide or change the value, and tokenization replaces the stored value with a token kept in a separate vault, so the stored data is no longer the original. (Format-preserving tokenization exists, but for "secure data at rest" the exam expects encryption.)',
    'این را اشتباه زدی. جواب کلید Encryption است: رمزگذاری روش استاندارد حفاظت از داده‌ی ذخیره‌شده است (مثل BitLocker یا رمزگذاری پایگاه داده) و وقتی با کلید باز شود، «دقیقاً همان داده‌ی اصلی» برمی‌گردد. تو Tokenization را زدی: توکن‌سازی داده‌ی اصلی را از جای خودش برمی‌دارد و یک توکن جایش می‌گذارد، یعنی چیزی که ذخیره شده دیگر داده‌ی اصلی نیست. Masking و Obfuscation هم داده را برای همیشه پنهان یا عوض می‌کنند. قانون امتحان: «Secure data at rest» ← Encryption.',
    3);

  M(145,'Which of the following best addresses risks associated with data sovereignty laws?',
    'کدام گزینه بهتر از همه ریسک‌های مربوط به قانون‌های حاکمیت داده (Data sovereignty) را پوشش می‌دهد؟',
    'قانون می‌گوید داده باید داخل یک کشور خاص بماند.',
    ['Geographic data restrictions','Obfuscation','Remote journaling','Replication'],
    ['محدودیت‌های جغرافیایی برای محل داده','مبهم‌سازی','Journaling از راه دور','تکثیر داده (Replication)'],
    'Data sovereignty means data is subject to the laws of the country where it is stored, and some laws require certain data to stay inside the country. Geographic restrictions (choosing cloud regions, blocking replication abroad) keep data where the law requires. Replication to other regions can actually break those laws.',
    'Data sovereignty یعنی داده تابع قانون کشوری است که در آن ذخیره شده، و بعضی کشورها می‌گویند داده‌ی شهروندانشان نباید از کشور خارج شود. پس با محدودیت جغرافیایی (مثلاً انتخاب منطقه‌ی Canada Central در ابر و جلوگیری از کپی به کشور دیگر) داده را همان‌جا نگه می‌داریم. Replication به کشور دیگر ممکن است قانون را نقض کند.');

  M(146,'Which of the following strategies would best support continuous operations during a regional disaster?',
    'کدام راهبرد بهتر از همه در زمان یک فاجعه‌ی منطقه‌ای (مثل سیل یا زلزله‌ی بزرگ) ادامه‌ی کار را ممکن می‌کند؟',
    'اگر کل منطقه از کار بیفتد، باید یک سایت در منطقه‌ی دیگری داشته باشیم.',
    ['Geographic site redundancy','UPS','Obfuscation','Journaling'],
    ['افزونگی سایت در مناطق جغرافیایی مختلف','UPS (برق اضطراری)','مبهم‌سازی','Journaling'],
    'A regional disaster can take out every data center in that area. Having redundant sites far apart (another city or region) lets operations continue from the unaffected site. A UPS only covers short power outages in one building.',
    'اگر سیل یا زلزله کل یک شهر را از کار بیندازد، همه‌ی ساختمان‌های آن منطقه با هم از دست می‌روند. پس باید سایت دوم در یک منطقه‌ی دور (شهر یا استان دیگر) داشته باشیم که کار را ادامه دهد. UPS فقط چند دقیقه برق یک ساختمان را نگه می‌دارد.');

  M(147,'An organization needs to recover to its last known good state within minutes. Which strategy is most effective?',
    'یک سازمان باید ظرف چند دقیقه به آخرین وضعیت سالم شناخته‌شده برگردد. کدام راهبرد مؤثرتر است؟',
    'روشی که هر تراکنش را لحظه‌ای ثبت کرده تا بشود تا آخرین لحظه‌ی سالم برگشت.',
    ['Journaling','Monthly replication','Differential backup','Cold site deployment'],
    ['Journaling (ثبت لحظه‌ای تراکنش‌ها)','Replication ماهانه','پشتیبان تفاضلی (Differential)','راه‌اندازی سایت سرد'],
    'Journaling keeps a continuous log of every change, so data can be rolled forward or back to the exact moment before the problem, quickly. Monthly replication and differential backups can lose a lot of recent data, and a cold site takes days to bring up.',
    'Journaling هر تغییر را همان لحظه ثبت می‌کند؛ پس می‌شود دقیقاً تا یک لحظه قبل از خرابی برگشت، آن هم سریع. Replication ماهانه یعنی ممکن است داده‌ی یک ماه از دست برود، پشتیبان تفاضلی هم تا آخرین پشتیبان برمی‌گردد، و سایت سرد چند روز طول می‌کشد تا راه بیفتد.');

  M(148,'Which method would be most appropriate to limit access to segmented customer data within a cloud database?',
    'کدام روش برای «محدود کردن دسترسی» به داده‌های بخش‌بندی‌شده‌ی مشتری در یک پایگاه داده‌ی ابری مناسب‌تر است؟',
    'کلمه‌ی کلیدی سؤال «محدود کردن دسترسی» است: چه کسی اجازه دارد ببیند؟',
    ['Permission restrictions','Load balancing','Obfuscation','Tokenization'],
    ['محدودیت مجوزها و دسترسی‌ها (Permission restrictions)','توزیع بار','مبهم‌سازی (Obfuscation)','توکن‌سازی'],
    'The question asks how to limit who can access the data, which is an access control problem: permission restrictions (IAM roles, database grants, row-level security) decide who can read which customer segment. Obfuscation only makes data harder to understand; anyone who can access it still can.',
    'این را اشتباه زدی. سؤال می‌پرسد «چطور دسترسی را محدود کنیم»، پس جواب یک کنترل دسترسی است: Permission restrictions (نقش‌های IAM، مجوزهای پایگاه داده، امنیت در سطح ردیف) تعیین می‌کند چه کسی کدام بخش از داده‌ی مشتری را ببیند. تو Obfuscation را زدی؛ مبهم‌سازی فقط داده را سخت‌فهم‌تر می‌کند، ولی جلوی دسترسی را نمی‌گیرد. قانون: «Limit access» ← Permissions / Access control.',
    2);

  M(149,'Which backup method involves storing only the changes made since the last full backup?',
    'کدام روش پشتیبان‌گیری فقط تغییراتی را که از «آخرین پشتیبان کامل» به بعد ایجاد شده ذخیره می‌کند؟',
    'دقت کن: از آخرین پشتیبان «کامل»، نه از آخرین پشتیبان هر نوعی.',
    ['Differential','Snapshot','Replication','Journaling'],
    ['تفاضلی (Differential)','عکس لحظه‌ای (Snapshot)','تکثیر (Replication)','Journaling'],
    'A differential backup saves everything that changed since the last full backup, so restoring needs only the full backup plus the latest differential. An incremental backup saves only what changed since the last backup of any type, so it is smaller but a restore needs every incremental in order.',
    'Differential = همه‌ی تغییرات از آخرین پشتیبان «کامل». هر روز بزرگ‌تر می‌شود، ولی برای بازگردانی فقط پشتیبان کامل + آخرین Differential لازم است. Incremental = فقط تغییرات از آخرین پشتیبان (هر نوعی)؛ کوچک‌تر است ولی برای بازگردانی همه‌ی Incrementalها به ترتیب لازم‌اند. ترفند: D = از روز کامل (Day of full).');

  M(150,'Which testing strategy is typically used to validate incident response plans without live systems?',
    'کدام روش تست معمولاً برای سنجیدن برنامه‌های پاسخ به حادثه، «بدون» استفاده از سیستم‌های واقعی به کار می‌رود؟',
    'همه دور یک میز می‌نشینند و سناریو را مرور می‌کنند.',
    ['Tabletop exercise','Parallel test','Warm site test','Simulation failover'],
    ['تمرین روی میز (Tabletop exercise)','تست موازی','تست سایت گرم','Failover شبیه‌سازی‌شده'],
    'In a tabletop exercise the team sits together and talks through a scenario ("ransomware hits the file server, what do you do?") step by step, using the plan. Nothing is touched on live systems, so it is cheap and safe, and it shows gaps in the plan.',
    'Tabletop exercise یعنی تیم دور یک میز می‌نشیند و یک نفر سناریو می‌گوید: «ساعت ۹ صبح باج‌افزار سرور فایل را قفل کرد، چه کار می‌کنید؟» هر کس می‌گوید طبق برنامه چه کار می‌کند. به هیچ سیستم واقعی دست نمی‌زنیم؛ ارزان و بی‌خطر است و ضعف‌های برنامه را نشان می‌دهد.');

  /* ================= STUDY NOTES ================= */
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};
  var KH=[['Term','اصطلاح'],['Remember','یادت باشد']];
  /* answer key of a part, built from its questions (original number, question, correct answer) */
  function key(s){
    var qs=pack.mcq.filter(function(q){return q.sec===s}).sort(function(a,b){return a.n-b.n});
    return L(qs.map(function(q){return ['Q'+q.n+(q.miss?' (missed on 1st try)':'')+': '+q.q+' → '+q.o[0],'سؤال '+q.n+(q.miss?' (بار اول اشتباه)':'')+': '+q.qf+' ← '+q.of[0]]}));
  }
  function miss(s){
    var qs=pack.mcq.filter(function(q){return q.sec===s&&q.miss});
    if(!qs.length)return PP('You answered every question in this part correctly on the first attempt.','همه‌ی سؤال‌های این بخش را بار اول درست جواب دادی.');
    return L(qs.map(function(q){return ['Q'+q.n+': you chose "'+q.o[q.x]+'", the answer is "'+q.o[0]+'".','سؤال '+q.n+': تو «'+q.of[q.x]+'» را زدی، جواب «'+q.of[0]+'» است.']}));
  }
  function note(s,intro,blocks,tip){
    pack.study[s]={t:[pack.sections[s].en,pack.sections[s].fa],b:[PP(intro[0],intro[1])].concat(blocks,[
      H('My mistakes in this part','اشتباه‌های من در این بخش'),miss(s),
      TT(tip[0],tip[1]),
      H('All questions of this part with the answer','همه‌ی سؤال‌های این بخش با جواب'),key(s)])};
  }

  note('1',['The basic ideas behind security: what each cryptographic tool proves, how data is hidden, and how controls are grouped by type and by job.',
    'ایده‌های پایه‌ی امنیت: هر ابزار رمزنگاری چه چیزی را ثابت می‌کند، داده چطور پنهان می‌شود، و کنترل‌ها چطور بر اساس نوع و کارشان دسته‌بندی می‌شوند.'],
    [H('What each tool gives you','هر ابزار چه چیزی می‌دهد'),
     TB(KH,[[['Encryption','رمزگذاری'],['Confidentiality; reversible with the key','محرمانگی؛ با کلید برمی‌گردد']],
       [['Hash (SHA-256)','هش'],['Integrity; one-way fingerprint','یکپارچگی؛ اثر انگشت یک‌طرفه']],
       [['Digital signature','امضای دیجیتال'],['Non-repudiation + integrity (private key signs)','عدم انکار + یکپارچگی (با کلید خصوصی امضا می‌شود)']],
       [['Blockchain','بلاک‌چین'],['Non-repudiation via public ledger','عدم انکار با دفتر عمومی']],
       [['Tokenization','توکن‌سازی'],['Real value swapped for a token; mapping in a vault','مقدار واقعی با توکن عوض می‌شود؛ جدول در Vault']],
       [['Steganography','پنهان‌نگاری'],['Data hidden inside an image or audio file','داده داخل عکس یا صدا پنهان می‌شود']],
       [['Key stretching','کشیدن کلید'],['Hash many times; slows brute force (bcrypt, PBKDF2)','هش تکراری؛ Brute force را کند می‌کند']],
       [['Salting','نمک'],['Random value per password; stops rainbow tables','مقدار تصادفی برای هر رمز؛ ضد جدول آماده']]]),
     H('Where keys live','کلیدها کجا نگه داشته می‌شوند'),
     TB(KH,[[['HSM','HSM'],['Hardware that generates, stores and uses keys','سخت‌افزاری که کلید می‌سازد، نگه می‌دارد و استفاده می‌کند']],
       [['TPM','TPM'],['Chip on the motherboard; secure/measured boot, BitLocker','تراشه‌ی مادربرد؛ بوت امن، BitLocker']],
       [['Key escrow','امانت کلید'],['Third party keeps a copy so data can be recovered','شخص ثالث یک نسخه نگه می‌دارد تا داده قابل بازیابی باشد']],
       [['Padding oracle','پیشگوی Padding'],['Different padding errors leak the plaintext','خطاهای متفاوت Padding متن را لو می‌دهند']]]),
     H('Control types','انواع کنترل'),
     TB(KH,[[['Preventive','پیشگیرانه'],['Stops it: firewall, lock, MFA','جلویش را می‌گیرد: فایروال، قفل، MFA']],
       [['Detective','تشخیصی'],['Notices it: SIEM alert, IDS, camera recording','می‌فهمد: هشدار SIEM، IDS']],
       [['Corrective','اصلاحی'],['Fixes it: restore backup, patch','درست می‌کند: بازگردانی پشتیبان']],
       [['Deterrent','بازدارنده'],['Discourages it: warning sign','می‌ترساند: تابلوی هشدار']],
       [['Directive','دستوری'],['Tells people what to do: policy, procedure','می‌گوید چه کن: سیاست، رویه']],
       [['Compensating','جبرانی'],['Alternative when the primary control is not feasible','جایگزین وقتی کنترل اصلی شدنی نیست']],
       [['Technical / Managerial / Physical','فنی / مدیریتی / فیزیکی'],['Firewall / policy / badge, guard, fence','فایروال / سیاست / کارت ورود، نگهبان، حصار']]]),
     H('Deception and Zero Trust','فریب و اعتماد صفر'),
     L([['Honeypot = fake server, honeynet = fake network, honeyfile = bait file, honeytoken = fake data or credential.','Honeypot = سرور جعلی، Honeynet = شبکه‌ی جعلی، Honeyfile = فایل طعمه، Honeytoken = داده یا رمز جعلی.'],
        ['Zero Trust: never trust, always verify; least privilege; no implicit trust inside the network.','Zero Trust: هرگز اعتماد نکن، همیشه بررسی کن؛ حداقل دسترسی؛ داخل شبکه بودن دلیل اعتماد نیست.'],
        ['PDP (control plane) decides; PEP (data plane) enforces the decision.','PDP (Control plane) تصمیم می‌گیرد؛ PEP (Data plane) تصمیم را اجرا می‌کند.'],
        ['Infrared sensors detect heat; ultrasonic/microwave bounce waves; pressure reacts to weight.','حسگر Infrared گرما را می‌بیند؛ Ultrasonic و Microwave موج می‌فرستند؛ Pressure به وزن واکنش می‌دهد.']])],
    ['A badge, a guard and a fence are physical controls. A firewall, encryption and MFA are technical. A policy is managerial/directive.',
     'کارت ورود، نگهبان و حصار = فیزیکی. فایروال، رمزگذاری و MFA = فنی. سیاست = مدیریتی و دستوری.']);

  note('2',['Who attacks, how they get in, and the clues that show an attack is happening.',
    'چه کسی حمله می‌کند، از چه راهی وارد می‌شود و چه نشانه‌هایی می‌گویند حمله در جریان است.'],
    [H('Threat actors','عوامل تهدید'),
     TB(KH,[[['Script kiddie','Script kiddie'],['Least skilled, uses ready-made tools','کم‌مهارت‌ترین، ابزار آماده']],
       [['Organized crime','جرائم سازمان‌یافته'],['Money: ransomware, fraud','پول: باج‌افزار، کلاهبرداری']],
       [['Nation-state','دولتی'],['Most skilled and funded; espionage, APT','پیشرفته‌ترین و پولدارترین؛ جاسوسی']],
       [['Hacktivist','Hacktivist'],['Ideology or politics','عقیده و سیاست']],
       [['Insider','Insider'],['Already has access; no malware needed','دسترسی دارد؛ بدافزار لازم ندارد']]]),
     H('Vectors and attacks','مسیرها و حمله‌ها'),
     TB(KH,[[['Human vector','مسیر انسانی'],['Phishing tricks a person','فیشینگ آدم را فریب می‌دهد']],
       [['File-based','مبتنی بر فایل'],['Malicious macro in a Word file','ماکروی مخرب در فایل Word']],
       [['Typosquatting','Typosquatting'],['Misspelled domain with a cloned site','دامنه‌ی غلط‌املایی با سایت کپی']],
       [['Side loading','Side loading'],['App installed from outside the official store','برنامه از بیرون فروشگاه رسمی']],
       [['DNS cache poisoning','مسموم کردن کش DNS'],['Forged record cached; users sent to fake IP','رکورد جعلی در کش؛ کاربر به IP جعلی می‌رود']],
       [['Open ports','پورت باز'],['Expose services; bigger attack surface','سرویس را در معرض می‌گذارد؛ سطح حمله بزرگ‌تر']]]),
     H('Application attacks','حمله‌های برنامه'),
     TB(KH,[[['Buffer overflow','سرریز بافر'],['Malformed/oversized input → crashes','ورودی بدشکل یا بزرگ ← کرش']],
       [['Directory traversal','پیمایش پوشه'],['../../etc/passwd','../../etc/passwd']],
       [['XSS','XSS'],['Script runs in the victim’s browser','اسکریپت در مرورگر قربانی اجرا می‌شود']],
       [['CSRF / XSRF','CSRF'],['Browser tricked into sending a request','مرورگر فریب می‌خورد درخواست بفرستد']],
       [['Race condition','شرایط رقابتی'],['TOCTOU: gap between check and use','TOCTOU: فاصله‌ی بین بررسی و استفاده']],
       [['Downgrade','تنزل نسخه'],['Old cipher suites allowed → forced to weak crypto','رمزهای قدیمی مجاز ← اجبار به رمز ضعیف']]]),
     H('Indicators','نشانه‌ها'),
     L([['Impossible travel: two logins too far apart for the time between them.','Impossible travel: دو ورود از دو جای خیلی دور در زمان کوتاه.'],
        ['Out-of-cycle logging: activity at a time it should not happen (3 a.m. spike).','Out-of-cycle logging: فعالیت در زمانی که نباید باشد (جهش ساعت ۳ صبح).'],
        ['Resource consumption: unusual CPU, memory, disk or bandwidth use.','Resource consumption: مصرف غیرعادی CPU، حافظه، دیسک یا پهنای باند.'],
        ['Account lockout: many failed logins locking accounts.','Account lockout: ورودهای ناموفق زیاد که حساب را قفل می‌کنند.']])],
    ['When the question stresses WHEN something happened (3 a.m., outside business hours), think out-of-cycle. When it stresses "outside the official store", think side loading.',
     'وقتی سؤال روی «زمان» تأکید دارد (ساعت ۳ صبح، بیرون از ساعت کاری) ← Out-of-cycle. وقتی می‌گوید «بیرون از فروشگاه رسمی» ← Side loading.']);

  note('3',['Who gets in and how (identity and access), how systems are made hard to attack, and how the network and email are protected.',
    'چه کسی و چطور وارد می‌شود (هویت و دسترسی)، سیستم‌ها چطور مقاوم می‌شوند، و از شبکه و ایمیل چطور محافظت می‌شود.'],
    [H('Identity and access','هویت و دسترسی'),
     TB(KH,[[['RBAC','RBAC'],['Access by role; scales well','دسترسی بر اساس نقش؛ مقیاس‌پذیر']],
       [['SSO','SSO'],['Log in once, use many systems','یک بار ورود، چند سیستم']],
       [['MFA','MFA'],['Stops credential stuffing; essential for remote work with VPN','ضد Credential stuffing؛ همراه VPN برای دورکاری']],
       [['Complexity','پیچیدگی رمز'],['Bigger search space against brute force','فضای جست‌وجوی بزرگ‌تر ضد Brute force']],
       [['Least privilege','حداقل دسترسی'],['Only what the job needs; privilege creep violates it','فقط به اندازه‌ی کار؛ جمع شدن دسترسی نقضش می‌کند']],
       [['UBA','UBA'],['Deviation from baseline behavior → insider threat','انحراف از رفتار عادی ← تهدید داخلی']]]),
     H('Hardening','مقاوم‌سازی'),
     L([['Hardening comes first, before deployment: remove extras, change defaults, apply baseline.','Hardening اول و قبل از راه‌اندازی: حذف اضافه‌ها، عوض کردن پیش‌فرض‌ها، اعمال Baseline.'],
        ['Port disabling removes unused protocols completely.','بستن پورت پروتکل‌های بی‌استفاده را کامل حذف می‌کند.'],
        ['Patch management verifies digital signatures of updates.','Patch management امضای دیجیتال آپدیت را بررسی می‌کند.'],
        ['Decommissioning: forgotten test systems must be removed.','Decommissioning: سیستم‌های تست فراموش‌شده باید حذف شوند.'],
        ['Application allow list blocks every program not approved.','Allow list هر برنامه‌ی تأییدنشده را می‌بندد.'],
        ['HIPS watches system calls and DLL injection on the host.','HIPS روی خود دستگاه System call و تزریق DLL را می‌پاید.'],
        ['IoT: change factory default usernames and passwords.','IoT: رمز و نام کاربری پیش‌فرض کارخانه را عوض کن.']]),
     H('Network and email','شبکه و ایمیل'),
     TB(KH,[[['Segmentation','بخش‌بندی'],['Logical (VLAN, firewall ACLs); limits lateral movement','منطقی (VLAN، ACL)؛ حرکت جانبی را محدود می‌کند']],
       [['Isolation','جداسازی'],['Physical / VM; fully cut off','فیزیکی یا VM؛ کاملاً جدا']],
       [['Load balancing','توزیع بار'],['Resiliency if one proxy fails','تاب‌آوری اگر یک پراکسی خراب شود']],
       [['DLP','DLP'],['Policy violations in outbound data','نقض سیاست در داده‌ی خروجی']],
       [['URL filtering','فیلتر URL'],['Layer 7 control; transparent proxy = centralized','کنترل لایه‌ی ۷؛ پراکسی شفاف = متمرکز']],
       [['Port 23','پورت ۲۳'],['Telnet, plaintext → block and alert','Telnet بدون رمز ← ببند و هشدار بده']],
       [['STARTTLS / DKIM','STARTTLS / DKIM'],['Encrypts SMTP transmission / proves content not modified','رمز انتقال SMTP / اثبات دست‌نخوردن محتوا']],
       [['WPA3 / signal leak','WPA3 / نشت سیگنال'],['Strong Wi-Fi encryption / outsiders can attack','رمز قوی وای‌فای / بیرونی‌ها حمله می‌کنند']]])],
    ['Badge = physical. Allow list = only approved software runs. Segmentation = logical; isolation = physical or VM.',
     'کارت ورود = فیزیکی. Allow list = فقط برنامه‌ی تأییدشده. Segmentation = منطقی؛ Isolation = فیزیکی یا VM.']);

  note('4',['How systems are built (cloud, microservices, OT, mobile, wireless) and how data is protected and recovered.',
    'سیستم‌ها چطور ساخته می‌شوند (ابر، ریزسرویس، OT، موبایل، بی‌سیم) و داده چطور محافظت و بازیابی می‌شود.'],
    [H('Architecture','معماری'),
     TB(KH,[[['Hybrid cloud','ابر ترکیبی'],['Part cloud, part on-prem','بخشی ابر، بخشی داخلی']],
       [['Shared responsibility','مسئولیت مشترک'],['Who secures what between provider and customer','مرز مسئولیت ارائه‌دهنده و مشتری']],
       [['Microservices','ریزسرویس‌ها'],['Bigger attack surface; third-party API risk','سطح حمله بزرگ‌تر؛ ریسک API شخص ثالث']],
       [['SDN','SDN'],['Central controller = single point of risk','کنترلر مرکزی = نقطه‌ی خطر واحد']],
       [['RTOS','RTOS'],['Time-sensitive medical/embedded devices','دستگاه‌های پزشکی حساس به زمان']],
       [['OT / ICS','OT / ICS'],['Often cannot patch (availability); air gap isolates','اغلب Patch نمی‌شود؛ Air gap جدا می‌کند']],
       [['Jump server','Jump server'],['Controlled entry to isolated zones','ورود کنترل‌شده به منطقه‌ی جدا']]]),
     H('Mobile and wireless','موبایل و بی‌سیم'),
     L([['BYOD risk: less control over security settings.','ریسک BYOD: کنترل کمتر روی تنظیمات امنیتی.'],
        ['Full disk encryption protects lost or stolen devices (data at rest).','رمزگذاری کامل دیسک از دستگاه گم‌شده یا دزدیده‌شده محافظت می‌کند (At rest).'],
        ['Certificate-based authentication: devices join only trusted Wi-Fi.','احراز هویت با گواهی: فقط وای‌فای مطمئن.'],
        ['WPA3-Enterprise + RADIUS: mutual authentication, per-session keys.','WPA3-Enterprise + RADIUS: احراز هویت دوطرفه، کلید جدا برای هر نشست.'],
        ['Active site survey connects and measures; passive only listens.','Site survey فعال وصل می‌شود و اندازه می‌گیرد؛ غیرفعال فقط گوش می‌دهد.'],
        ['Segment IoT so a hacked device cannot reach internal systems.','IoT را جدا کن تا دستگاه هک‌شده به سیستم‌های داخلی نرسد.']]),
     H('Data protection and recovery','حفاظت و بازیابی داده'),
     TB(KH,[[['Data states','حالت‌های داده'],['At rest / in transit (most exposed on untrusted networks) / in use','ذخیره / در انتقال (روی شبکه‌ی نامطمئن آسیب‌پذیرتر) / در استفاده']],
       [['Secure data at rest','امنیت داده‌ی ذخیره'],['Encryption','رمزگذاری']],
       [['Limit access','محدود کردن دسترسی'],['Permission restrictions','محدودیت مجوزها']],
       [['Data sovereignty','حاکمیت داده'],['Geographic data restrictions','محدودیت جغرافیایی']],
       [['Regional disaster','فاجعه‌ی منطقه‌ای'],['Geographic site redundancy','سایت در منطقه‌ی دیگر']],
       [['Journaling','Journaling'],['Real-time log of every transaction; recover in minutes','ثبت لحظه‌ای؛ بازیابی در چند دقیقه']],
       [['Differential','تفاضلی'],['Changes since the last FULL backup','تغییرات از آخرین پشتیبان کامل']],
       [['Parallel test','تست موازی'],['Recovery side runs alongside; production untouched','سیستم پشتیبان هم‌زمان؛ اصلی دست نمی‌خورد']]])],
    ['Read the verb: "secure data at rest" → encryption; "limit access" → permissions; "lost or stolen" → full disk encryption.',
     'به فعل سؤال دقت کن: «امن کردن داده‌ی ذخیره» ← رمزگذاری؛ «محدود کردن دسترسی» ← مجوزها؛ «گم یا دزدیده شدن» ← رمزگذاری کامل دیسک.']);

  note('5',['The incident response lifecycle, digital forensics and how automation and orchestration help (and can hurt) a SOC.',
    'چرخه‌ی پاسخ به حادثه، جرم‌شناسی دیجیتال و اینکه اتوماسیون و ارکستراسیون چطور به SOC کمک می‌کنند (و کجا خطر دارند).'],
    [H('IR lifecycle','چرخه‌ی پاسخ به حادثه'),
     TB(KH,[[['Preparation','آمادگی'],['Playbooks, training; fed by lessons learned','Playbook و آموزش؛ از درس‌ها تغذیه می‌شود']],
       [['Detection','تشخیص'],['Notice it: many failed logins → brute force','فهمیدن: ورود ناموفق زیاد ← Brute force']],
       [['Analysis','تحلیل'],['Correlate logs + threat intel → TTPs','هم‌بستگی لاگ و اطلاعات تهدید ← TTP']],
       [['Containment','مهار'],['Disable account, block IP, quarantine host','غیرفعال کردن حساب، بستن IP، قرنطینه']],
       [['Eradication','ریشه‌کنی'],['Rotate keys/credentials, patch using scan results','عوض کردن کلید و رمز، Patch با نتیجه‌ی اسکن']],
       [['Recovery','بازیابی'],['Bring systems back progressively and watch','برگرداندن مرحله‌به‌مرحله و پایش']],
       [['Lessons learned','درس‌های آموخته'],['Improves preparation','آمادگی را بهتر می‌کند']]]),
     H('Forensics','جرم‌شناسی دیجیتال'),
     L([['Collect volatile memory (RAM) before powering down: order of volatility.','RAM را قبل از خاموش کردن بردار: ترتیب فرّاریت.'],
        ['Bit-by-bit image captures deleted files and slack space.','ایمیج بیت‌به‌بیت فایل پاک‌شده و Slack را هم برمی‌دارد.'],
        ['Hash before and after transfer = integrity, no tampering.','هش قبل و بعد از انتقال = یکپارچگی، بدون دست‌کاری.'],
        ['No chain of custody → evidence may be excluded from court.','بدون Chain of custody ← مدرک ممکن است در دادگاه رد شود.'],
        ['Legal hold suspends automatic log rotation and deletion.','Legal hold پاک شدن خودکار لاگ‌ها را متوقف می‌کند.'],
        ['E-discovery deduplication reduces review volume.','Deduplication در E-discovery حجم بررسی را کم می‌کند.'],
        ['Tabletop exercise tests the IR plan without live systems.','Tabletop طرح IR را بدون سیستم واقعی تست می‌کند.']]),
     H('Automation and orchestration','اتوماسیون و ارکستراسیون'),
     TB(KH,[[['Orchestration','ارکستراسیون'],['Chains automated tasks into one workflow','کارهای خودکار را در یک گردش‌کار به هم وصل می‌کند']],
       [['Escalation workflow','گردش‌کار ارجاع'],['Unacknowledged alert goes to Tier 2','هشدار بی‌جواب به سطح ۲ می‌رود']],
       [['Scalability','مقیاس‌پذیری'],['Automated baseline enforcement for new assets','اعمال خودکار Baseline روی دارایی جدید']],
       [['CI testing','تست CI'],['SAST/DAST in the pipeline blocks bad deployments','SAST/DAST در Pipeline جلوی انتشار بد را می‌گیرد']],
       [['Risks','خطرها'],['Stale scripts = gaps; no exceptions = false positives; platform = single point of failure','اسکریپت کهنه = حفره؛ بدون استثنا = مثبت کاذب؛ پلتفرم = نقطه‌ی شکست واحد']],
       [['Human oversight','نظارت انسانی'],['For destructive actions, to avoid outages','برای کارهای مخرب، تا سرویس قطع نشود']],
       [['Retention','ماندن کارمند'],['Less repetitive work, more threat hunting','کار تکراری کمتر، شکار تهدید بیشتر']]])],
    ['Containment stops the spread; eradication removes the cause; recovery brings it back. "SAST/DAST in the pipeline" is continuous integration testing.',
     'Containment = جلوی گسترش؛ Eradication = حذف علت؛ Recovery = برگرداندن. «SAST/DAST در Pipeline» = Continuous integration testing.']);

  note('6',['Finding, scoring, fixing and proving the fix of vulnerabilities, and the two ways of testing applications.',
    'پیدا کردن، نمره دادن، رفع کردن و اثبات رفع آسیب‌پذیری‌ها، و دو روش تست برنامه‌ها.'],
    [H('Key ideas','ایده‌های اصلی'),
     TB(KH,[[['SAST','SAST'],['Source code, not executed','کد منبع، بدون اجرا']],
       [['DAST','DAST'],['Running app, dynamic input, runtime flaws','برنامه‌ی در حال اجرا، ورودی پویا']],
       [['Passive scan','اسکن غیرفعال'],['Finds without exploiting','پیدا می‌کند بدون سوءاستفاده']],
       [['CVSS','CVSS'],['Severity score 0-10 for prioritizing','نمره‌ی شدت ۰ تا ۱۰ برای اولویت']],
       [['SCAP','SCAP'],['Validate configs against baselines','مقایسه‌ی تنظیمات با Baseline']],
       [['False positive','مثبت کاذب'],['Reported but not real (SQLi without user input)','گزارش شده ولی واقعی نیست']],
       [['Exception / exemption','استثنا / معافیت'],['Formally accepted unfixable vulnerability','آسیب‌پذیری غیرقابل رفع که رسماً پذیرفته شده']],
       [['Rescan and audit','اسکن دوباره و ممیزی'],['Validates remediation','رفع را تأیید می‌کند']],
       [['Exposure factor ↑','ضریب خسارت ↑'],['Public-facing server','سرور رو به اینترنت']],
       [['Audit vs scan','ممیزی و اسکن'],['Audit checks business impact and control effectiveness','ممیزی اثر کسب‌وکار و کارآمدی کنترل را می‌سنجد']]])],
    ['D = Dynamic = running. S = Static = source code. Signature-based scanning compares to known patterns; it does not feed input to a running app.',
     'D = Dynamic = در حال اجرا. S = Static = کد. اسکن مبتنی بر امضا با الگوهای شناخته‌شده مقایسه می‌کند، ورودی به برنامه نمی‌دهد.']);

  note('7',['Rules, roles, contracts, risk math and laws: how the organization governs security and proves it.',
    'قانون‌ها، نقش‌ها، قراردادها، حساب ریسک و قوانین: سازمان چطور امنیت را اداره می‌کند و ثابت می‌کند.'],
    [H('Risk math','حساب ریسک'),
     TB(KH,[[['AV × EF = SLE','AV × EF = SLE'],['EF = percentage lost in one incident','EF = درصد خسارت در یک حادثه']],
       [['SLE × ARO = ALE','SLE × ARO = ALE'],['ALE = expected loss per year ($5,000 × 0.25 = $1,250)','ALE = زیان سالانه (۵۰۰۰ × ۰٫۲۵ = ۱۲۵۰)']],
       [['RTO / RPO','RTO / RPO'],['Max downtime / max data loss','حداکثر زمان خاموشی / حداکثر داده‌ی از دست رفته']],
       [['Transfer / Avoid / Mitigate / Accept','انتقال / اجتناب / کاهش / پذیرش'],['Insurance / remove system / firewall / do nothing','بیمه / حذف سیستم / فایروال / کاری نکردن']],
       [['Appetite vs tolerance','اشتها و تحمل'],['General willingness vs acceptable variation','تمایل کلی و حد انحراف قابل قبول']],
       [['KRI threshold exceeded','عبور از آستانه‌ی KRI'],['Trigger predefined actions','اجرای اقدامات از پیش تعیین‌شده']]]),
     H('Governance and agreements','حاکمیت و قراردادها'),
     TB(KH,[[['Policy','سیاست'],['WHAT must be done (high level)','«چه» باید انجام شود']],
       [['Centralized model','مدل متمرکز'],['Consistent but less agile','یکنواخت ولی کم‌چابک']],
       [['Custodian','Custodian'],['Day-to-day care of data','نگهداری روزمره‌ی داده']],
       [['DPO','DPO'],['GDPR liaison with regulators','رابط GDPR با ناظر']],
       [['MOU','MOU'],['Non-binding intentions','تفاهم غیرالزام‌آور']],
       [['BPA','BPA'],['Long-term partnership roles and obligations','نقش‌ها و تعهدات شراکت بلندمدت']],
       [['Due diligence','بررسی دقیق'],['Vendor meets operational, financial, security needs','فروشنده الزامات عملیاتی، مالی و امنیتی را دارد']]]),
     H('Compliance, audits and awareness','انطباق، ممیزی و آگاهی'),
     L([['GDPR applies to anyone handling EU residents’ data. PCI DSS violations → loss of card processing.','GDPR برای هر کسی که داده‌ی اروپایی‌ها را دارد. نقض PCI DSS ← از دست دادن پردازش کارت.'],
        ['Self-assessment = internal check before a regulator arrives. Attestation & acknowledgment = employees confirm policies.','Self-assessment = بررسی داخلی قبل از بازرس. Attestation = کارمند تأیید می‌کند سیاست را فهمیده.'],
        ['Due diligence & duty of care = proactive reviews that prevent non-compliance.','Due diligence و Duty of care = بازبینی پیشگیرانه.'],
        ['Purple team = red + blue together in real time.','تیم بنفش = قرمز + آبی با هم، هم‌زمان.'],
        ['Phishing simulation = identify and train, never punish.','شبیه‌سازی فیشینگ = شناسایی و آموزش، نه تنبیه.'],
        ['Change management: impact analysis before; test results review validates outcomes.','مدیریت تغییر: تحلیل اثر قبل از اجرا؛ بررسی نتیجه‌ی تست برای تأیید.']])],
    ['EF is a percentage; SLE and ALE are dollar amounts. ALE = SLE × ARO, never divide.',
     'EF درصد است؛ SLE و ALE مبلغ دلار. ALE = SLE × ARO؛ هیچ‌وقت تقسیم نکن.']);
})();
