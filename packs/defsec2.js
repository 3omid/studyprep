/* Course pack: Sheridan "Defensive Security 2" (cyber auditing, IAM, AI & automation in cybersecurity).
   Built from the course slides. Not a Security+ pack: it is its own course and can be switched on/off separately. */
(function(){
  var pack={id:'defsec2',name:'Defensive Security 2 (Sheridan)',short:'DefSec2',version:1,lang:'en',
    sections:{
      '1':{en:'Cyber auditing',fa:'ممیزی سایبری'},
      '2':{en:'Identity & access management',fa:'مدیریت هویت و دسترسی (IAM)'},
      '3':{en:'AI & automation in security',fa:'هوش مصنوعی و اتوماسیون در امنیت'}},
    mcq:[],pbq:[]};
  var n={'1':0,'2':0,'3':0};
  function M(sec,t,q,qf,hf,o,of,en,fa){pack.mcq.push({id:'defsec2:'+sec+'_'+(++n[sec]),sec:sec,t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa})}
  function P(sec,t,title,tf,zones,zf,items,zd,en,fa){pack.pbq.push({id:'defsec2:p'+sec,sec:sec,t:t,title:title,tf:tf,zones:zones,zf:zf,items:items,zd:zd,en:en,fa:fa})}

  /* ===== 1. Cyber auditing ===== */
  var A='Audit basics',B='Audit phases',C='Audit execution',D='Post-audit';

  M('1',A,'What is an information system audit?','ممیزی سیستم اطلاعاتی (information system audit) چیست؟','',
    ['A systematic process of assessing an organization\'s information systems, controls and processes for effectiveness, security and compliance','A one-time penetration test run by attackers','Installing antivirus on every device','A backup of all production data'],
    ['فرآیند نظام‌مند ارزیابی سیستم‌ها، کنترل‌ها و فرآیندهای سازمان از نظر اثربخشی، امنیت و انطباق','یک تست نفوذ یک‌باره توسط مهاجمان','نصب آنتی‌ویروس روی همه‌ی دستگاه‌ها','بکاپ همه‌ی داده‌های production'],
    'An audit systematically examines systems, controls and processes to judge their effectiveness, security and compliance with standards and regulations.',
    'ممیزی به‌صورت نظام‌مند سیستم‌ها، کنترل‌ها و فرآیندها را بررسی می‌کند تا اثربخشی، امنیت و انطباق آن‌ها با استانداردها و مقررات سنجیده شود.');

  M('1',A,'Which three properties of data do information system audits aim to protect?','ممیزی سیستم اطلاعاتی می‌خواهد کدام سه ویژگی داده را حفظ کند؟','CIA triad.',
    ['Integrity, confidentiality and availability','Speed, cost and size','Encryption, hashing and masking','Authentication, authorization and accounting only'],
    ['یکپارچگی، محرمانگی و در دسترس بودن','سرعت، هزینه و حجم','رمزنگاری، hash و masking','فقط احراز هویت، مجوزدهی و حسابرسی'],
    'The purpose of an audit is to identify vulnerabilities, assess risks and ensure the integrity, confidentiality and availability of data.',
    'هدف ممیزی شناسایی آسیب‌پذیری‌ها، ارزیابی ریسک‌ها و اطمینان از یکپارچگی، محرمانگی و در دسترس بودن داده است.');

  M('1',A,'What is the main role of an auditor?','نقش اصلی ممیز (auditor) چیست؟','',
    ['Provide independent, objective assessments of controls and recommend improvements','Fix every vulnerability personally','Approve the budget for security tools','Operate the production systems daily'],
    ['ارائه‌ی ارزیابی مستقل و بی‌طرفانه از کنترل‌ها و پیشنهاد بهبود','رفع شخصی همه‌ی آسیب‌پذیری‌ها','تأیید بودجه‌ی ابزارهای امنیتی','اداره‌ی روزانه‌ی سیستم‌های production'],
    'Auditors examine controls, conduct tests and analyze data to give independent, objective assessments, identify gaps and recommend improvements. Management, not the auditor, takes the lead in making the changes.',
    'ممیز کنترل‌ها را بررسی می‌کند، تست می‌زند و داده را تحلیل می‌کند تا ارزیابی مستقل و بی‌طرفانه بدهد، شکاف‌ها را پیدا و بهبود پیشنهاد کند. اجرای تغییرات با مدیریت است، نه ممیز.');

  M('1',A,'Which framework is a comprehensive framework for governance and management of enterprise IT?','کدام چارچوب برای حاکمیت و مدیریت IT سازمانی است؟','',
    ['COBIT','ISO 27001','OWASP Top 10','PCI-DSS'],
    ['COBIT','ISO 27001','OWASP Top 10','PCI-DSS'],
    'COBIT (Control Objectives for Information and Related Technologies) covers governance and management of enterprise IT, aligning IT goals with business objectives.',
    'COBIT (Control Objectives for Information and Related Technologies) حاکمیت و مدیریت IT سازمانی را پوشش می‌دهد و اهداف IT را با اهداف کسب‌وکار هم‌راستا می‌کند.');

  M('1',A,'ISO 27001 is an international standard for:','ISO 27001 یک استاندارد بین‌المللی برای چیست؟','',
    ['Information security management systems (ISMS)','Wireless site surveys','Software code signing','Network cabling'],
    ['سیستم‌های مدیریت امنیت اطلاعات (ISMS)','site survey بی‌سیم','code signing نرم‌افزار','کابل‌کشی شبکه'],
    'ISO 27001 defines how to establish, implement, maintain and continually improve an ISMS, helping organizations demonstrate commitment to security and meet legal and regulatory needs.',
    'ISO 27001 نحوه‌ی ایجاد، اجرا، نگهداری و بهبود مستمر ISMS را تعریف می‌کند و به سازمان کمک می‌کند تعهدش به امنیت را نشان دهد و الزامات قانونی را رعایت کند.');

  M('1',A,'Why do auditors adhere to standards such as COBIT and ISO 27001?','چرا ممیزها از استانداردهایی مثل COBIT و ISO 27001 پیروی می‌کنند؟','',
    ['They give a common language and criteria, making audits consistent, reliable and credible','They remove the need for evidence','They guarantee that no vulnerabilities exist','They replace the audit report'],
    ['زبان و معیار مشترک می‌دهند و ممیزی را یکنواخت، قابل‌اعتماد و معتبر می‌کنند','نیاز به مدرک را از بین می‌برند','تضمین می‌کنند هیچ آسیب‌پذیری‌ای وجود ندارد','جایگزین گزارش ممیزی می‌شوند'],
    'Standards act as benchmarks for assessing control effectiveness, risk management and compliance, and make audit outcomes consistent and credible.',
    'استانداردها معیار سنجش اثربخشی کنترل، مدیریت ریسک و انطباق هستند و نتیجه‌ی ممیزی را یکنواخت و معتبر می‌کنند.');

  M('1',B,'What are the three main phases of an information system audit, in order?','سه فاز اصلی ممیزی سیستم اطلاعاتی به ترتیب کدام‌اند؟','',
    ['Pre-audit, audit execution, post-audit','Execution, pre-audit, reporting only','Remediation, planning, testing','Scoping, hiring, billing'],
    ['پیش از ممیزی، اجرای ممیزی، پس از ممیزی','اجرا، پیش از ممیزی، فقط گزارش‌دهی','اصلاح، برنامه‌ریزی، تست','تعیین دامنه، استخدام، صورت‌حساب'],
    'Pre-audit covers planning, scoping and risk assessment. Execution covers data collection, analysis and testing. Post-audit covers reporting, communication and follow-up.',
    'پیش از ممیزی شامل برنامه‌ریزی، تعیین دامنه و ارزیابی ریسک است. اجرا شامل جمع‌آوری داده، تحلیل و تست است. پس از ممیزی شامل گزارش، ارتباط و پیگیری است.');

  M('1',B,'Which activity belongs to the pre-audit phase?','کدام فعالیت مربوط به فاز پیش از ممیزی است؟','',
    ['Defining scope and objectives, assessing risk and creating an audit plan and schedule','Interviewing staff and sampling records','Running a penetration test','Presenting findings to management'],
    ['تعریف دامنه و اهداف، ارزیابی ریسک و ساخت برنامه و زمان‌بندی ممیزی','مصاحبه با کارکنان و نمونه‌گیری رکوردها','اجرای تست نفوذ','ارائه‌ی یافته‌ها به مدیریت'],
    'Pre-audit: define scope and objectives, allocate resources (people, time, tools), assess risk to prioritize higher-risk areas, and develop the audit plan and schedule.',
    'پیش از ممیزی: تعریف دامنه و اهداف، تخصیص منابع (نیرو، زمان، ابزار)، ارزیابی ریسک برای اولویت‌بندی بخش‌های پرریسک و تهیه‌ی برنامه و زمان‌بندی.');

  M('1',B,'Why is a risk assessment done during pre-audit?','چرا در مرحله‌ی پیش از ممیزی ارزیابی ریسک انجام می‌شود؟','',
    ['To focus audit effort on the areas with the highest risk','To decide the auditors\' salaries','To skip testing of low-risk systems entirely','To write the final report early'],
    ['تا تلاش ممیزی روی بخش‌های پرریسک‌تر متمرکز شود','برای تعیین حقوق ممیزها','برای کلاً رد کردن تست سیستم‌های کم‌ریسک','برای زودتر نوشتن گزارش نهایی'],
    'Risk assessment identifies threats and vulnerabilities that could affect systems, data and operations, so audit efforts can be prioritized on higher-risk areas.',
    'ارزیابی ریسک تهدیدها و آسیب‌پذیری‌هایی را که می‌توانند سیستم‌ها، داده و عملیات را تحت تأثیر قرار دهند شناسایی می‌کند تا تلاش ممیزی روی بخش‌های پرریسک‌تر اولویت بگیرد.');

  M('1',C,'During audit execution, which technique lets auditors understand how controls are actually run by asking key personnel?','در اجرای ممیزی کدام روش به ممیز اجازه می‌دهد با پرسش از افراد کلیدی بفهمد کنترل‌ها واقعاً چطور اجرا می‌شوند؟','',
    ['Interviews with key personnel','Defragmenting disks','Patching the firewall','Signing the report'],
    ['مصاحبه با افراد کلیدی','defragment کردن دیسک','patch کردن firewall','امضای گزارش'],
    'Interviews help auditors gain insight into systems, controls and practices, clarify information, validate understanding and uncover gaps. Other data collection methods are sampling, reviewing documentation and extracting system logs and audit trails.',
    'مصاحبه به ممیز دید می‌دهد، ابهام را برطرف می‌کند، فهم او را تأیید می‌کند و شکاف‌ها را نشان می‌دهد. روش‌های دیگر: نمونه‌گیری، بررسی مستندات و استخراج لاگ و audit trail.');

  M('1',C,'Why do auditors review system logs and audit trails?','چرا ممیزها لاگ سیستم و audit trail را بررسی می‌کنند؟','',
    ['To detect anomalies, unauthorized activity and deviations from procedures','To increase disk space','To rewrite security policy','To train new employees'],
    ['برای تشخیص ناهنجاری، فعالیت غیرمجاز و انحراف از رویه‌ها','برای افزایش فضای دیسک','برای بازنویسی سیاست امنیتی','برای آموزش کارکنان جدید'],
    'Logs and audit trails show system activity, helping evaluate monitoring and access controls and identify potential breaches or deviations from established procedures.',
    'لاگ و audit trail فعالیت سیستم را نشان می‌دهند و به ارزیابی مانیتورینگ و کنترل دسترسی و شناسایی نفوذ احتمالی یا انحراف از رویه کمک می‌کنند.');

  M('1',C,'What is the difference between a vulnerability assessment and penetration testing?','تفاوت vulnerability assessment و penetration testing چیست؟','',
    ['A vulnerability assessment identifies and evaluates weaknesses; penetration testing simulates real-world attacks to test resilience','They are identical','Penetration testing only reads documentation','Vulnerability assessment exploits systems to steal data'],
    ['vulnerability assessment ضعف‌ها را شناسایی و ارزیابی می‌کند؛ penetration testing حمله‌ی واقعی را برای سنجش تاب‌آوری شبیه‌سازی می‌کند','هر دو یکی هستند','penetration testing فقط مستندات را می‌خواند','vulnerability assessment برای دزدیدن داده exploit می‌کند'],
    'Both are proactive. Vulnerability assessment identifies and evaluates potential weaknesses; penetration testing simulates real-world attacks to see how the system resists and where entry points exist.',
    'هر دو پیش‌دستانه‌اند. vulnerability assessment ضعف‌های بالقوه را شناسایی و ارزیابی می‌کند؛ penetration testing حمله‌ی واقعی را شبیه‌سازی می‌کند تا مقاومت سیستم و نقاط ورود دیده شود.');

  M('1',C,'An auditor checks that users only have the permissions their jobs require. Which principle is being verified?','ممیزی بررسی می‌کند کاربران فقط مجوزهای لازم برای شغلشان را دارند. کدام اصل بررسی می‌شود؟','',
    ['Least privilege','Defense in depth','Data sovereignty','Separation of sites'],
    ['Least privilege (حداقل دسترسی)','Defense in depth','Data sovereignty','جداسازی سایت‌ها'],
    'In a system review, auditors assess access controls and user management to ensure rights are properly assigned and the principle of least privilege is applied.',
    'در بازبینی سیستم، ممیز کنترل دسترسی و مدیریت کاربران را می‌سنجد تا مطمئن شود حقوق درست تخصیص یافته و اصل least privilege رعایت شده است.');

  M('1',C,'During an application review, what does "segregation of duties" mean?','در بازبینی اپلیکیشن، «تفکیک وظایف» (segregation of duties) یعنی چه؟','',
    ['No single person controls all steps of a critical process','Every user has administrator rights','Developers also approve their own production changes','All duties are given to one role'],
    ['هیچ‌کس به‌تنهایی همه‌ی مراحل یک فرآیند حساس را کنترل نمی‌کند','همه‌ی کاربران دسترسی administrator دارند','توسعه‌دهنده تغییرات production خودش را هم تأیید می‌کند','همه‌ی وظایف به یک نقش داده می‌شود'],
    'Application controls review includes access controls, user permissions, segregation of duties and audit trails to ensure accuracy, completeness and confidentiality of data.',
    'بازبینی کنترل‌های اپلیکیشن شامل کنترل دسترسی، مجوز کاربران، تفکیک وظایف و audit trail است تا دقت، کامل بودن و محرمانگی داده تضمین شود.');

  M('1',C,'When reviewing backup and disaster recovery plans, an auditor mainly checks whether the plans are:','در بازبینی برنامه‌های بکاپ و disaster recovery، ممیز بیشتر چه چیزی را بررسی می‌کند؟','',
    ['Comprehensive, regularly tested and able to restore critical systems and data','Printed in color','Written by the auditor','Stored only on the production server'],
    ['جامع، به‌طور منظم تست‌شده و قادر به بازیابی سیستم‌ها و داده‌ی حیاتی','رنگی چاپ شده','توسط ممیز نوشته شده','فقط روی سرور production ذخیره شده'],
    'Auditors evaluate whether backup and DR plans are comprehensive, regularly tested and capable of recovering critical systems to minimize downtime.',
    'ممیز می‌سنجد برنامه‌های backup و DR جامع، به‌طور منظم تست‌شده و قادر به بازیابی سیستم‌های حیاتی باشند تا downtime کم شود.');

  M('1',D,'Which three qualities should an audit report have?','گزارش ممیزی باید کدام سه ویژگی را داشته باشد؟','',
    ['Accurate, objective and actionable','Long, technical and anonymous','Fast, cheap and informal','Private, vague and optional'],
    ['دقیق، بی‌طرفانه و قابل اقدام','طولانی، فنی و ناشناس','سریع، ارزان و غیررسمی','خصوصی، مبهم و اختیاری'],
    'Reports should be based on factual evidence (accurate), reflect an unbiased assessment (objective) and give practical recommendations stakeholders can implement (actionable). They must also be clear and concise.',
    'گزارش باید بر شواهد واقعی بنا شود (دقیق)، ارزیابی بی‌طرفانه باشد (objective) و توصیه‌های عملی بدهد (actionable). همچنین باید واضح و مختصر باشد.');

  M('1',D,'After the report is presented, what is the auditor\'s role in remediation?','بعد از ارائه‌ی گزارش، نقش ممیز در اصلاح (remediation) چیست؟','',
    ['Provide expertise and guidance while management leads the changes','Implement every fix alone','Ignore the issues','Cancel the audit'],
    ['ارائه‌ی تخصص و راهنمایی در حالی که مدیریت اجرای تغییرات را رهبری می‌کند','اجرای تنها همه‌ی اصلاحات','نادیده گرفتن مشکلات','لغو ممیزی'],
    'Auditors collaborate with management and provide expertise and guidance, while management takes the lead in driving the changes. Actions are prioritized by severity.',
    'ممیز با مدیریت همکاری می‌کند و تخصص و راهنمایی می‌دهد، اما رهبری تغییرات با مدیریت است. اقدامات بر اساس شدت مشکل اولویت‌بندی می‌شوند.');

  M('1',D,'What is the purpose of follow-up audits?','هدف ممیزی‌های پیگیری (follow-up) چیست؟','',
    ['Verify that recommended actions were implemented and compliance is sustained','Replace the original audit','Hire new auditors','Delete old logs'],
    ['تأیید اینکه اقدامات پیشنهادی اجرا شده و انطباق پایدار مانده','جایگزین ممیزی اصلی','استخدام ممیز جدید','پاک کردن لاگ‌های قدیمی'],
    'Follow-up audits monitor progress of corrective actions, assess whether remediation worked, identify new risks and give assurance of continuous improvement: a continuous feedback loop.',
    'ممیزی پیگیری پیشرفت اقدامات اصلاحی را رصد می‌کند، اثربخشی اصلاح را می‌سنجد، ریسک‌های جدید را پیدا می‌کند و اطمینان بهبود مستمر می‌دهد؛ یک حلقه‌ی بازخورد پیوسته.');

  P('1','Audit phases','Place each activity in the correct audit phase.','هر فعالیت را در فاز درست ممیزی قرار دهید.',
    ['Pre-audit','Audit execution','Post-audit'],['Pre-audit (پیش از ممیزی)','Audit execution (اجرا)','Post-audit (پس از ممیزی)'],
    [['Define scope and objectives',0,'تعریف دامنه و اهداف'],
     ['Develop audit plan and schedule',0,'تهیه‌ی برنامه و زمان‌بندی ممیزی'],
     ['Assess risk to prioritize focus areas',0,'ارزیابی ریسک برای اولویت‌بندی'],
     ['Interview key personnel',1,'مصاحبه با افراد کلیدی'],
     ['Run vulnerability assessment and penetration test',1,'اجرای vulnerability assessment و penetration test'],
     ['Extract and analyze system logs and audit trails',1,'استخراج و تحلیل لاگ‌ها و audit trail'],
     ['Write the audit report',2,'نوشتن گزارش ممیزی'],
     ['Discuss remediation strategies with management',2,'گفت‌وگو درباره‌ی راهکارهای اصلاح با مدیریت'],
     ['Conduct periodic follow-up audits',2,'انجام ممیزی‌های پیگیری دوره‌ای']],
    [['Planning, scoping, risk assessment','برنامه‌ریزی، تعیین دامنه، ارزیابی ریسک'],['Data collection, analysis, testing','جمع‌آوری داده، تحلیل، تست'],['Reporting, communication, follow-up','گزارش، ارتباط، پیگیری']],
    'Pre-audit: planning, scoping and risk assessment. Execution: data collection, analysis and testing. Post-audit: reporting, communicating findings, remediation discussions and follow-up.',
    'پیش از ممیزی: برنامه‌ریزی، دامنه و ریسک. اجرا: جمع‌آوری داده، تحلیل و تست. پس از ممیزی: گزارش، اطلاع‌رسانی، گفت‌وگو درباره‌ی اصلاح و پیگیری.');

  /* ===== 2. IAM ===== */
  var I='IAM best practices',R='RBAC',Q='Rule-based access control',X='Mandatory access control',T='IAM tools';

  M('2',I,'What does IAM ensure?','IAM چه چیزی را تضمین می‌کند؟','',
    ['The right individuals have appropriate access to the right resources at the right time','Everyone can access everything','Passwords never expire','Only administrators can log in'],
    ['افراد درست به منابع درست در زمان درست دسترسی مناسب دارند','همه به همه‌چیز دسترسی دارند','رمزها هرگز منقضی نمی‌شوند','فقط administratorها می‌توانند وارد شوند'],
    'IAM covers the processes, technologies and policies used to manage identities, authentication and access, while enforcing security and reducing the risk of unauthorized access or data breaches.',
    'IAM شامل فرآیندها، فناوری‌ها و سیاست‌هایی است که برای مدیریت هویت، احراز هویت و دسترسی استفاده می‌شوند و ریسک دسترسی غیرمجاز یا نشت داده را کم می‌کنند.');

  M('2',I,'Which IAM best practice gives better control and visibility over user accounts and access rights across the organization?','کدام بهترین رویه‌ی IAM کنترل و دید بهتری روی حساب‌ها و حقوق دسترسی در کل سازمان می‌دهد؟','',
    ['Centralized identity management','Letting each department manage its own accounts independently','Shared accounts','Paper access forms'],
    ['مدیریت هویت متمرکز','مدیریت مستقل حساب‌ها توسط هر بخش','حساب‌های مشترک','فرم‌های کاغذی دسترسی'],
    'A centralized system to manage identities, rights and permissions improves control and visibility.',
    'یک سیستم متمرکز برای مدیریت هویت‌ها، حقوق و مجوزها کنترل و دید را بهتر می‌کند.');

  M('2',I,'MFA combines multiple factors to verify identity. Which set is a valid example of different factors?','MFA چند عامل را برای تأیید هویت ترکیب می‌کند. کدام مجموعه نمونه‌ی درستی از عامل‌های متفاوت است؟','',
    ['Password plus biometric or hardware token','Two different passwords','Username plus password only','Two security questions'],
    ['رمز عبور به‌علاوه‌ی بیومتریک یا token سخت‌افزاری','دو رمز عبور مختلف','فقط نام کاربری و رمز','دو سؤال امنیتی'],
    'MFA combines factors such as something you know (password), something you are (biometrics) and something you have (token). Two passwords are still one factor.',
    'MFA عامل‌هایی مثل چیزی که می‌دانی (رمز)، چیزی که هستی (بیومتریک) و چیزی که داری (token) را ترکیب می‌کند. دو رمز هنوز یک عامل است.');

  M('2',I,'Automated user provisioning and de-provisioning mainly ensures that:','provisioning و de-provisioning خودکار کاربران بیشتر چه چیزی را تضمین می‌کند؟','',
    ['Access is promptly granted or revoked as users join, move or leave','Users never change roles','Passwords are never reset','Logs are deleted'],
    ['دسترسی هنگام پیوستن، جابه‌جایی یا خروج کاربر سریعاً داده یا لغو می‌شود','کاربران هرگز نقش عوض نمی‌کنند','رمزها هرگز ریست نمی‌شوند','لاگ‌ها پاک می‌شوند'],
    'Automated creation, modification and disabling of accounts streamlines management and prevents leftover access when people leave.',
    'ایجاد، تغییر و غیرفعال‌سازی خودکار حساب‌ها مدیریت را ساده می‌کند و جلوی باقی ماندن دسترسی بعد از خروج افراد را می‌گیرد.');

  M('2',I,'Which IAM practice focuses on monitoring and controlling accounts with elevated privileges?','کدام رویه‌ی IAM روی مانیتور و کنترل حساب‌های با دسترسی بالا تمرکز دارد؟','',
    ['Privileged Access Management (PAM)','Password complexity only','Single sign-on','Screen locking'],
    ['Privileged Access Management (PAM)','فقط پیچیدگی رمز','Single sign-on','قفل صفحه'],
    'PAM solutions help manage, monitor and secure privileged accounts to prevent misuse or unauthorized access.',
    'راهکارهای PAM حساب‌های دارای دسترسی بالا را مدیریت، مانیتور و امن می‌کنند تا سوءاستفاده یا دسترسی غیرمجاز رخ ندهد.');

  M('2',I,'Why are regular access reviews performed?','چرا بازبینی‌های منظم دسترسی (access review) انجام می‌شود؟','',
    ['To validate and recertify access rights and reduce stale or excessive access','To reset everyone\'s password','To increase the number of accounts','To remove MFA'],
    ['برای تأیید و بازتصدیق حقوق دسترسی و کم کردن دسترسی کهنه یا اضافی','برای ریست رمز همه','برای افزایش تعداد حساب‌ها','برای حذف MFA'],
    'Periodic reviews ensure permissions remain appropriate over time and reduce the risk of stale or excessive access.',
    'بازبینی دوره‌ای تضمین می‌کند مجوزها در طول زمان مناسب بمانند و ریسک دسترسی کهنه یا اضافی کم شود.');

  M('2',R,'In RBAC, permissions are assigned based on:','در RBAC مجوزها بر اساس چه چیزی داده می‌شوند؟','',
    ['Job roles, responsibilities and least privilege','The user\'s computer brand','Random selection','Seniority only'],
    ['نقش شغلی، مسئولیت‌ها و least privilege','برند کامپیوتر کاربر','انتخاب تصادفی','فقط ارشدیت'],
    'Role-Based Access Control grants access according to job roles and responsibilities, limiting users to what they need for their job.',
    'RBAC دسترسی را بر اساس نقش‌ها و مسئولیت‌های شغلی می‌دهد و کاربر را به آنچه برای کارش لازم است محدود می‌کند.');

  M('2',R,'A Manager role can view financial reports and approve budgets; an Employee role can only submit expenses. Roles stay the same unless manually changed. Which RBAC type is this?','نقش Manager می‌تواند گزارش مالی ببیند و بودجه تأیید کند؛ نقش Employee فقط هزینه ثبت می‌کند. نقش‌ها تا تغییر دستی ثابت می‌مانند. این کدام نوع RBAC است؟','',
    ['Static RBAC','Dynamic RBAC','Hierarchical RBAC','Constraint RBAC'],
    ['Static RBAC','Dynamic RBAC','Hierarchical RBAC','Constraint RBAC'],
    'Static RBAC uses predefined roles tied to specific access rights that do not change unless manually modified.',
    'Static RBAC از نقش‌های از پیش تعریف‌شده با حقوق دسترسی مشخص استفاده می‌کند که بدون تغییر دستی ثابت می‌مانند.');

  M('2',R,'A Support Representative can access the customer support portal only during working hours. Which RBAC type is this?','یک Support Representative فقط در ساعات کاری به پورتال پشتیبانی دسترسی دارد. این کدام نوع RBAC است؟','Access changes with conditions/attributes.',
    ['Dynamic RBAC','Static RBAC','Hierarchical RBAC','Mandatory access control'],
    ['Dynamic RBAC','Static RBAC','Hierarchical RBAC','Mandatory access control'],
    'Dynamic RBAC assigns access rights dynamically by considering user attributes or environmental conditions, such as working hours or region.',
    'Dynamic RBAC حقوق دسترسی را با در نظر گرفتن ویژگی‌های کاربر یا شرایط محیطی، مثل ساعت کاری یا منطقه، به‌صورت پویا تعیین می‌کند.');

  M('2',R,'Higher-level roles inherit the permissions of lower-level roles (CEO, Department Manager, Employee). Which RBAC type is this?','نقش‌های سطح بالاتر مجوزهای نقش‌های پایین‌تر را به ارث می‌برند (CEO، مدیر بخش، کارمند). این کدام نوع RBAC است؟','',
    ['Hierarchical RBAC','Static RBAC','Constraint RBAC','Dynamic RBAC'],
    ['Hierarchical RBAC','Static RBAC','Constraint RBAC','Dynamic RBAC'],
    'Hierarchical RBAC mirrors the organization\'s reporting structure, and higher roles inherit lower roles\' permissions.',
    'Hierarchical RBAC ساختار سازمانی را بازتاب می‌دهد و نقش‌های بالاتر مجوزهای نقش‌های پایین‌تر را به ارث می‌برند.');

  M('2',R,'A contractor can access project resources only during the contract period, and a remote employee only through an authorized VPN. Which RBAC type is this?','پیمانکار فقط در مدت قرارداد به منابع پروژه دسترسی دارد و کارمند راه‌دور فقط از طریق VPN مجاز. این کدام نوع RBAC است؟','',
    ['Constraint RBAC','Hierarchical RBAC','Static RBAC','Bell-LaPadula'],
    ['Constraint RBAC','Hierarchical RBAC','Static RBAC','Bell-LaPadula'],
    'Constraint RBAC adds conditions (time-based, location-based, context-based) to define access permissions.',
    'Constraint RBAC شروطی (زمانی، مکانی، زمینه‌ای) برای تعیین مجوز دسترسی اضافه می‌کند.');

  M('2',Q,'How does rule-based access control differ from role-based access control?','کنترل دسترسی مبتنی بر قاعده (rule-based) چه تفاوتی با مبتنی بر نقش (role-based) دارد؟','',
    ['Rule-based evaluates predefined rules and conditions (time, location, device) at request time; role-based derives access from static roles','They are identical','Role-based uses labels and clearance levels','Rule-based never uses attributes'],
    ['rule-based در لحظه‌ی درخواست قواعد و شروط از پیش‌تعریف‌شده (زمان، مکان، دستگاه) را ارزیابی می‌کند؛ role-based دسترسی را از نقش‌های ایستا می‌گیرد','هر دو یکی هستند','role-based از برچسب و سطح مجوز استفاده می‌کند','rule-based هرگز از ویژگی‌ها استفاده نمی‌کند'],
    'Role-based grants access via roles that are static unless manually modified. Rule-based decides access dynamically by evaluating logical rules over attributes such as time of day, location, behavior or device type.',
    'Role-based دسترسی را از طریق نقش‌هایی می‌دهد که تا تغییر دستی ثابت‌اند. Rule-based با ارزیابی قواعد منطقی روی ویژگی‌هایی مثل ساعت، مکان، رفتار یا نوع دستگاه به‌صورت پویا تصمیم می‌گیرد.');

  M('2',Q,'"Allow access if user role is Manager AND location is Headquarters." Which model evaluates user, resource and environment attributes in policies like this?','«اجازه بده اگر نقش کاربر Manager و مکان Headquarters باشد.» کدام مدل ویژگی‌های کاربر، منبع و محیط را در سیاست‌هایی مثل این ارزیابی می‌کند؟','',
    ['ABAC (attribute-based access control)','TBAC','MAC','Clark-Wilson'],
    ['ABAC (کنترل دسترسی مبتنی بر ویژگی)','TBAC','MAC','Clark-Wilson'],
    'ABAC evaluates requests based on attributes of the user, resource and environment (role, department, time, location) combined into logical rules.',
    'ABAC درخواست را بر اساس ویژگی‌های کاربر، منبع و محیط (نقش، بخش، زمان، مکان) که در قواعد منطقی ترکیب شده‌اند ارزیابی می‌کند.');

  M('2',Q,'"Allow access if the device is corporate-owned AND the network connection is secure; deny if behavior deviates from normal patterns." Which type is this?','«اجازه بده اگر دستگاه شرکتی و اتصال شبکه امن باشد؛ رد کن اگر رفتار از الگوی عادی منحرف شود.» این کدام نوع است؟','',
    ['CBAC (context-based)','TBAC (time-based)','LBAC (location-based)','Lattice-based MAC'],
    ['CBAC (مبتنی بر زمینه)','TBAC (مبتنی بر زمان)','LBAC (مبتنی بر مکان)','Lattice-based MAC'],
    'CBAC extends RBAC with contextual information: network conditions, device type, user behavior or risk level of the request.',
    'CBAC با اطلاعات زمینه‌ای مثل شرایط شبکه، نوع دستگاه، رفتار کاربر یا سطح ریسک درخواست، RBAC را گسترش می‌دهد.');

  M('2',Q,'"Allow access to a shared resource between 9 AM and 5 PM, Monday to Friday." Which type is this?','«اجازه‌ی دسترسی به منبع مشترک فقط بین ۹ صبح تا ۵ عصر، دوشنبه تا جمعه.» این کدام نوع است؟','',
    ['TBAC (time-based)','LBAC (location-based)','CBAC (context-based)','Biba'],
    ['TBAC (مبتنی بر زمان)','LBAC (مبتنی بر مکان)','CBAC (مبتنی بر زمینه)','Biba'],
    'TBAC controls access based on time periods or days of the week.',
    'TBAC دسترسی را بر اساس بازه‌های زمانی یا روزهای هفته کنترل می‌کند.');

  M('2',Q,'"Allow access to the server room only for authorized personnel physically present in the building." Which type is this?','«ورود به اتاق سرور فقط برای افراد مجاز که فیزیکی در ساختمان حضور دارند.» این کدام نوع است؟','',
    ['LBAC (location-based)','TBAC (time-based)','ABAC with no attributes','Clark-Wilson'],
    ['LBAC (مبتنی بر مکان)','TBAC (مبتنی بر زمان)','ABAC بدون ویژگی','Clark-Wilson'],
    'LBAC considers geographical location or physical proximity when granting or denying access.',
    'LBAC موقعیت جغرافیایی یا نزدیکی فیزیکی را هنگام اعطا یا رد دسترسی در نظر می‌گیرد.');

  M('2',X,'In MAC, who decides access permissions?','در MAC چه کسی مجوزهای دسترسی را تعیین می‌کند؟','',
    ['The system administrator or security policy, based on labels and security levels','Each user for their own files','The file owner','Any user who is logged in'],
    ['مدیر سیستم یا سیاست امنیتی، بر اساس برچسب‌ها و سطوح امنیتی','هر کاربر برای فایل‌های خودش','مالک فایل','هر کاربر واردشده'],
    'MAC enforces predefined policies where subjects and objects carry labels (Top Secret, Confidential, Unclassified). Users have limited control over permissions. It is used in government, defense and highly regulated environments.',
    'MAC سیاست‌های از پیش تعریف‌شده را اعمال می‌کند و کاربر و منبع برچسب (Top Secret، Confidential، Unclassified) دارند. کنترل کاربر روی مجوزها محدود است. در دولت، دفاع و صنایع بسیار مقررات‌مند استفاده می‌شود.');

  M('2',X,'Which model enforces "no read up, no write down" to protect confidentiality?','کدام مدل قاعده‌ی «no read up, no write down» را برای حفظ محرمانگی اعمال می‌کند؟','',
    ['Bell-LaPadula','Biba','Clark-Wilson','RBAC'],
    ['Bell-LaPadula','Biba','Clark-Wilson','RBAC'],
    'Bell-LaPadula is for confidentiality: it prevents information flow from higher to lower security levels. Subjects read at or below their level and write at or above it.',
    'Bell-LaPadula برای محرمانگی است و جریان اطلاعات از سطح بالا به پایین را مهار می‌کند. موضوع در سطح خود یا پایین‌تر می‌خواند و در سطح خود یا بالاتر می‌نویسد.');

  M('2',X,'Which model focuses on data integrity with "no write up, no read down"?','کدام مدل با «no write up, no read down» روی یکپارچگی داده تمرکز دارد؟','',
    ['Biba','Bell-LaPadula','Lattice-based','Context-based'],
    ['Biba','Bell-LaPadula','Lattice-based','Context-based'],
    'Biba prevents unauthorized modification of data: subjects write only at or below their level and read only at or above it. Bell-LaPadula is the confidentiality counterpart.',
    'Biba از تغییر غیرمجاز داده جلوگیری می‌کند: موضوع فقط در سطح خود یا پایین‌تر می‌نویسد و فقط از سطح خود یا بالاتر می‌خواند. Bell-LaPadula نقطه‌ی مقابلش برای محرمانگی است.');

  M('2',X,'Which MAC model is designed for commercial environments and ensures data is changed only through controlled, verified operations?','کدام مدل MAC برای محیط‌های تجاری طراحی شده و تضمین می‌کند داده فقط از طریق عملیات کنترل‌شده و تأییدشده تغییر کند؟','',
    ['Clark-Wilson','Bell-LaPadula','Biba','Lattice'],
    ['Clark-Wilson','Bell-LaPadula','Biba','Lattice'],
    'Clark-Wilson focuses on integrity and consistency in commercial settings, accessing and modifying data only through controlled, verified operations.',
    'Clark-Wilson روی یکپارچگی و سازگاری داده در محیط تجاری تمرکز دارد و دسترسی و تغییر را فقط از طریق عملیات کنترل‌شده و تأییدشده مجاز می‌کند.');

  M('2',T,'Which IAM tool is described as focusing on identity governance and compliance, access certifications and entitlements?','کدام ابزار IAM به‌عنوان ابزار تمرکزیافته روی حاکمیت هویت، انطباق، access certification و entitlement معرفی شده است؟','',
    ['SailPoint IdentityIQ','Splunk','Elasticsearch','Apache Hadoop'],
    ['SailPoint IdentityIQ','Splunk','Elasticsearch','Apache Hadoop'],
    'SailPoint IdentityIQ emphasizes governance and risk management: provisioning, access request management, role management and access risk analysis. Other IAM tools: Azure AD, Okta, Ping Identity, IBM Security Identity Manager, ForgeRock.',
    'SailPoint IdentityIQ بر حاکمیت و مدیریت ریسک تمرکز دارد: provisioning، مدیریت درخواست دسترسی، مدیریت نقش و تحلیل ریسک دسترسی. ابزارهای دیگر IAM: Azure AD، Okta، Ping Identity، IBM Security Identity Manager و ForgeRock.');

  M('2',T,'Which of these is an open-source IAM platform mentioned in the course?','کدام یک پلتفرم IAM متن‌باز معرفی‌شده در درس است؟','',
    ['ForgeRock Identity Platform','Microsoft Azure AD','Okta','SailPoint IdentityIQ'],
    ['ForgeRock Identity Platform','Microsoft Azure AD','Okta','SailPoint IdentityIQ'],
    'ForgeRock is described as an open-source IAM solution offering identity management, access management and identity gateway features.',
    'ForgeRock به‌عنوان راهکار IAM متن‌باز با مدیریت هویت، مدیریت دسترسی و identity gateway معرفی شده است.');

  P('2','Access control models','Match each scenario to the access control type.','هر سناریو را به نوع کنترل دسترسی وصل کنید.',
    ['Static RBAC','Dynamic RBAC','Hierarchical RBAC','Constraint RBAC','TBAC','LBAC','MAC'],
    ['Static RBAC','Dynamic RBAC','Hierarchical RBAC','Constraint RBAC','TBAC (زمان)','LBAC (مکان)','MAC'],
    [['Manager role fixed: view financial reports, approve budgets',0,'نقش ثابت Manager: دیدن گزارش مالی و تأیید بودجه'],
     ['Sales manager sees only reports of the assigned region',1,'مدیر فروش فقط گزارش‌های منطقه‌ی تخصیص‌یافته را می‌بیند'],
     ['CEO inherits the access of Department Manager and Employee',2,'CEO دسترسی مدیر بخش و کارمند را به ارث می‌برد'],
     ['Contractor access ends when the contract ends',3,'دسترسی پیمانکار با پایان قرارداد تمام می‌شود'],
     ['Shared resource open only 9 to 5, Monday to Friday',4,'منبع مشترک فقط ۹ تا ۵ دوشنبه تا جمعه'],
     ['Server room only for staff physically in the building',5,'اتاق سرور فقط برای کسانی که فیزیکی در ساختمان‌اند'],
     ['Users with Confidential clearance cannot read Top Secret files, set by policy',6,'کاربر با مجوز Confidential نمی‌تواند فایل Top Secret بخواند؛ طبق سیاست تعیین شده']],
    [['Fixed predefined roles','نقش‌های ثابت و از پیش تعریف‌شده'],['Access varies with attributes or conditions','دسترسی با ویژگی‌ها یا شرایط تغییر می‌کند'],['Roles inherit from lower roles','نقش‌ها از نقش‌های پایین‌تر ارث می‌برند'],['Added time, location or context limits','محدودیت زمان، مکان یا زمینه اضافه شده'],['Rule based on time periods','قاعده بر اساس بازه‌ی زمانی'],['Rule based on physical position','قاعده بر اساس موقعیت فیزیکی'],['Labels and clearance levels set by policy','برچسب و سطح مجوز تعیین‌شده با سیاست']],
    'Static roles are fixed; dynamic roles depend on attributes or conditions; hierarchical roles inherit; constraint adds time, location or context limits; TBAC uses time; LBAC uses location; MAC uses labels and clearance set by policy.',
    'Static نقش ثابت است؛ Dynamic به ویژگی یا شرایط وابسته است؛ Hierarchical ارث‌بری دارد؛ Constraint محدودیت زمان، مکان یا زمینه اضافه می‌کند؛ TBAC زمانی، LBAC مکانی و MAC بر پایه‌ی برچسب و سطح مجوز تعیین‌شده با سیاست است.');

  /* ===== 3. AI & automation ===== */
  var AI='Roles of AI',AP='AI applications',UE='UEBA',BD='Big data & data lakes',TL='SIEM & analytics tools';

  M('3',AI,'Which role of AI means spotting unusual behaviors or patterns in network traffic that could signal a threat?','کدام نقش AI یعنی پیدا کردن رفتار یا الگوی غیرعادی در ترافیک شبکه که می‌تواند نشانه‌ی تهدید باشد؟','',
    ['Anomaly detection','Predictive analytics','Phishing detection','Data masking'],
    ['Anomaly detection (تشخیص ناهنجاری)','Predictive analytics','Phishing detection','Data masking'],
    'Anomaly detection finds unusual behaviors or patterns in network traffic. AI algorithms continuously learn and adapt, so they can spot subtle deviations.',
    'Anomaly detection رفتار یا الگوی غیرعادی ترافیک شبکه را پیدا می‌کند. الگوریتم‌های AI مدام یاد می‌گیرند و تطبیق می‌یابند، پس انحراف‌های ظریف را هم می‌بینند.');

  M('3',AI,'AI uses historical data to forecast potential future attacks and vulnerabilities. What is this role called?','AI از داده‌ی تاریخی برای پیش‌بینی حمله‌ها و آسیب‌پذیری‌های آینده استفاده می‌کند. این نقش چه نام دارد؟','',
    ['Predictive analytics','Threat intelligence feed','Failover testing','Segmentation'],
    ['Predictive analytics (تحلیل پیش‌بینانه)','Threat intelligence feed','Failover testing','Segmentation'],
    'Predictive analytics lets organizations take proactive security measures and stay a step ahead of attackers.',
    'Predictive analytics به سازمان اجازه می‌دهد اقدام پیش‌دستانه بکند و یک قدم جلوتر از مهاجمان بماند.');

  M('3',AI,'How does automating responses with AI help security teams?','خودکارسازی پاسخ با AI چه کمکی به تیم امنیت می‌کند؟','',
    ['It can isolate affected systems quickly, reducing response times and giving consistent handling','It removes the need for any monitoring','It guarantees no attacks occur','It deletes all logs'],
    ['می‌تواند سیستم‌های آسیب‌دیده را سریع ایزوله کند، زمان پاسخ را کم کند و رفتار یکنواخت بدهد','نیاز به هر نوع مانیتورینگ را از بین می‌برد','تضمین می‌کند هیچ حمله‌ای رخ نمی‌دهد','همه‌ی لاگ‌ها را پاک می‌کند'],
    'AI can automate responses such as isolating affected systems, thereby significantly reducing response times and ensuring a consistent, reliable approach.',
    'AI می‌تواند پاسخ‌هایی مثل ایزوله کردن سیستم‌های آسیب‌دیده را خودکار کند، زمان پاسخ را به‌طور محسوس کم کند و رویکردی یکنواخت و قابل‌اتکا بدهد.');

  M('3',AI,'Which AI role improves authentication through biometric verification and behavioral authentication?','کدام نقش AI احراز هویت را با تأیید بیومتریک و احراز هویت رفتاری بهتر می‌کند؟','',
    ['Improving authentication','Phishing detection','Predictive analytics','Data tokenization'],
    ['Improving authentication (بهبود احراز هویت)','Phishing detection','Predictive analytics','Data tokenization'],
    'AI strengthens authentication by analyzing user behavior and using advanced techniques, making unauthorized access more difficult.',
    'AI با تحلیل رفتار کاربر و تکنیک‌های پیشرفته احراز هویت را قوی‌تر و دسترسی غیرمجاز را سخت‌تر می‌کند.');

  M('3',AP,'Why can machine learning-based antivirus detect threats that signature-based tools miss?','چرا آنتی‌ویروس مبتنی بر یادگیری ماشین تهدیدهایی را می‌بیند که ابزار مبتنی بر signature نمی‌بیند؟','',
    ['It uses AI algorithms that learn from new data to detect new and evolving threats','It stores more signatures','It scans only known files','It runs only offline'],
    ['از الگوریتم‌های AI استفاده می‌کند که از داده‌ی جدید یاد می‌گیرند و تهدیدهای جدید و در حال تکامل را می‌بیند','signature بیشتری ذخیره می‌کند','فقط فایل‌های شناخته‌شده را اسکن می‌کند','فقط آفلاین کار می‌کند'],
    'ML-based antivirus and antimalware detect new and evolving threats that traditional signature-based approaches may miss, and improve as they learn from new data.',
    'آنتی‌ویروس و antimalware مبتنی بر ML تهدیدهای جدید و در حال تکامل را که روش‌های signature-محور شاید از دست بدهند تشخیص می‌دهند و با یادگیری از داده‌ی جدید بهتر می‌شوند.');

  M('3',AP,'Which AI-driven solution analyzes email patterns and content to identify and block phishing?','کدام راهکار مبتنی بر AI الگوها و محتوای ایمیل را برای شناسایی و مسدود کردن phishing تحلیل می‌کند؟','',
    ['Phishing detection tools','Network cable testers','Load balancers','Backup software'],
    ['ابزارهای تشخیص phishing','تستر کابل شبکه','Load balancer','نرم‌افزار بکاپ'],
    'AI phishing detection analyzes email content and sender behavior, blocking phishing before it deceives recipients.',
    'تشخیص phishing با AI محتوای ایمیل و رفتار فرستنده را تحلیل می‌کند و قبل از فریب گیرنده آن را مسدود می‌کند.');

  M('3',AP,'What do AI-integrated SIEM systems add to traditional SIEM?','سیستم‌های SIEM یکپارچه با AI چه چیزی به SIEM سنتی اضافه می‌کنند؟','',
    ['Enhanced threat detection, incident response and compliance reporting','Physical door locks','Wi-Fi heat maps','Disk encryption'],
    ['تشخیص تهدید، پاسخ به حادثه و گزارش انطباق بهتر','قفل فیزیکی در','heat map شبکه‌ی Wi-Fi','رمزنگاری دیسک'],
    'AI-integrated SIEM combines AI with traditional SIEM to enhance threat detection, incident response and compliance reporting.',
    'SIEM یکپارچه با AI، هوش مصنوعی را با SIEM سنتی ترکیب می‌کند تا تشخیص تهدید، پاسخ به حادثه و گزارش انطباق بهتر شود.');

  M('3',UE,'What is UEBA?','UEBA چیست؟','',
    ['A process that uses analytics to learn normal behavior of users and entities and flag deviations that may signal threats','A firewall rule language','A disk encryption standard','A backup technique'],
    ['فرآیندی که با تحلیل، رفتار عادی کاربران و entityها را یاد می‌گیرد و انحراف‌هایی را که می‌توانند تهدید باشند علامت می‌زند','یک زبان قاعده‌ی firewall','یک استاندارد رمزنگاری دیسک','یک روش بکاپ'],
    'User and Entity Behavior Analytics establishes a baseline of normal activity for users and entities (devices, systems) and continuously monitors for deviations.',
    'User and Entity Behavior Analytics یک baseline از فعالیت عادی کاربران و entityها (دستگاه‌ها، سیستم‌ها) می‌سازد و مدام انحراف‌ها را زیر نظر دارد.');

  M('3',UE,'Which threats is UEBA especially good at finding?','UEBA در پیدا کردن کدام تهدیدها مخصوصاً خوب است؟','',
    ['Insider threats, compromised accounts and lateral movement','Power outages','Printer jams','Hardware failures'],
    ['تهدید داخلی، حساب‌های نفوذشده و lateral movement','قطعی برق','گیر کردن پرینتر','خرابی سخت‌افزار'],
    'By focusing on behavior patterns, UEBA detects insider attacks, compromised accounts and external attackers moving laterally, including advanced unknown threats that traditional measures miss.',
    'UEBA با تمرکز بر الگوی رفتار، حمله‌ی داخلی، حساب نفوذشده و مهاجم خارجی در حال lateral movement را پیدا می‌کند، از جمله تهدیدهای پیشرفته‌ی ناشناخته که اقدامات سنتی نمی‌بینند.');

  M('3',UE,'A senior analyst\'s credentials are suddenly used from an unrecognized device in a distant location, and the system demands stronger authentication. This is an example of:','اعتبارنامه‌ی یک تحلیلگر ارشد ناگهان از یک دستگاه ناشناس در مکانی دور استفاده می‌شود و سیستم احراز هویت قوی‌تری می‌خواهد. این نمونه‌ی چیست؟','',
    ['Behavior-based (adaptive) detection of anomalous account use','Static RBAC','Data masking','Journaling'],
    ['تشخیص رفتاری (adaptive) استفاده‌ی غیرعادی از حساب','Static RBAC','Data masking','Journaling'],
    'In the pre-read, Okta\'s adaptive authentication identified an anomaly in user behavior and dynamically increased authentication requirements, blocking the malicious login.',
    'در متن پیش‌مطالعه، احراز هویت adaptive شرکت Okta ناهنجاری رفتار کاربر را تشخیص داد، الزامات احراز هویت را پویا بالا برد و ورود مخرب را مسدود کرد.');

  M('3',BD,'What does "big data" in cybersecurity refer to?','«داده‌ی بزرگ» (big data) در امنیت سایبری به چه معناست؟','',
    ['Vast, complex datasets from many sources such as network traffic, server logs and security systems','Only data larger than 1 TB on one disk','Only encrypted data','Only backup data'],
    ['مجموعه‌داده‌های حجیم و پیچیده از منابع متعدد مثل ترافیک شبکه، لاگ سرور و سیستم‌های امنیتی','فقط داده‌ی بزرگ‌تر از ۱ ترابایت روی یک دیسک','فقط داده‌ی رمزنگاری‌شده','فقط داده‌ی بکاپ'],
    'Big data covers vast and complex datasets generated from multiple sources within the IT environment. Types include structured, unstructured, semi-structured, geospatial, machine/operational logging and open-source data.',
    'big data مجموعه‌داده‌های حجیم و پیچیده از منابع متعدد در محیط IT است. انواع: ساخت‌یافته، بدون‌ساختار، نیمه‌ساخت‌یافته، جغرافیایی، لاگ ماشین/عملیاتی و متن‌باز.');

  M('3',BD,'What is a data lake?','data lake چیست؟','',
    ['A centralized repository that stores vast amounts of raw data in its native format','A firewall zone','A type of backup tape','An encrypted password store'],
    ['مخزن متمرکزی که حجم زیادی داده‌ی خام را در قالب اصلی ذخیره می‌کند','یک zone در firewall','یک نوع نوار بکاپ','مخزن رمز عبور رمزنگاری‌شده'],
    'A data lake stores logs, network traffic, threat intelligence feeds and more in native format. In security it aggregates diverse data, supports scalable analytics and machine learning, and stays flexible and accessible to different tools and teams.',
    'data lake لاگ، ترافیک شبکه، فید اطلاعات تهدید و غیره را در قالب اصلی ذخیره می‌کند. در امنیت، داده‌ی متنوع را جمع می‌کند، تحلیل و ML مقیاس‌پذیر را ممکن می‌کند و برای ابزارها و تیم‌های مختلف انعطاف‌پذیر و در دسترس است.');

  M('3',BD,'Which is a benefit of automated data collection into a data lake?','کدام یک مزیت جمع‌آوری خودکار داده در data lake است؟','',
    ['Real-time ingestion from many sources, scalable and with less manual effort','It requires a person to copy logs by hand','It only works on one device','It stops all analysis'],
    ['ورود لحظه‌ای داده از منابع مختلف، مقیاس‌پذیر و با تلاش دستی کمتر','نیاز دارد کسی لاگ‌ها را دستی کپی کند','فقط روی یک دستگاه کار می‌کند','همه‌ی تحلیل‌ها را متوقف می‌کند'],
    'Automated collection integrates data from network devices, servers, applications and security systems, ingests it in real time, and scales to large volumes while reducing manual work.',
    'جمع‌آوری خودکار داده را از دستگاه‌های شبکه، سرورها، اپلیکیشن‌ها و سیستم‌های امنیتی یکپارچه می‌کند، لحظه‌ای وارد می‌کند و با کم کردن کار دستی برای حجم بالا مقیاس‌پذیر است.');

  M('3',TL,'Which tool ingests logs, network data, cloud sources and IoT data into an indexed data store, with real-time analysis, dashboards, correlation and automated actions?','کدام ابزار لاگ، داده‌ی شبکه، منابع cloud و داده‌ی IoT را در یک مخزن ایندکس‌شده وارد می‌کند و تحلیل لحظه‌ای، داشبورد، correlation و اقدام خودکار دارد؟','',
    ['Splunk','SailPoint IdentityIQ','Okta','Ekahau'],
    ['Splunk','SailPoint IdentityIQ','Okta','Ekahau'],
    'Splunk is widely used as a SIEM: data ingestion, real-time analysis, customizable dashboards, correlation and advanced search, and automated actions or alerts.',
    'Splunk به‌طور گسترده به‌عنوان SIEM استفاده می‌شود: ورود داده، تحلیل لحظه‌ای، داشبورد قابل‌تنظیم، correlation و جست‌وجوی پیشرفته و اقدام یا هشدار خودکار.');

  M('3',TL,'Which tool is part of the ELK Stack and is used to search, analyze and visualize large volumes of data in real time?','کدام ابزار بخشی از ELK Stack است و برای جست‌وجو، تحلیل و نمایش حجم زیاد داده به‌صورت لحظه‌ای استفاده می‌شود؟','',
    ['Elasticsearch','IBM QRadar','Okta','ForgeRock'],
    ['Elasticsearch','IBM QRadar','Okta','ForgeRock'],
    'Elasticsearch (with Logstash and Kibana in the ELK Stack) searches, analyzes and visualizes large volumes of data. In the pre-read it uncovered hidden correlations that hinted at lateral movement.',
    'Elasticsearch (همراه Logstash و Kibana در ELK Stack) حجم زیاد داده را جست‌وجو، تحلیل و نمایش می‌دهد. در پیش‌مطالعه همبستگی‌های پنهانی را پیدا کرد که به lateral movement اشاره داشتند.');

  M('3',TL,'Which cloud-native SIEM+SOAR collects data across the enterprise, detects threats, investigates incidents with AI and responds with automated playbooks?','کدام SIEM+SOAR بومی cloud داده‌ی کل سازمان را جمع می‌کند، تهدید را تشخیص می‌دهد، با AI حادثه را بررسی و با playbook خودکار پاسخ می‌دهد؟','',
    ['Microsoft Azure Sentinel','Apache Hadoop','IBM Security Identity Manager','PingFederate only'],
    ['Microsoft Azure Sentinel','Apache Hadoop','IBM Security Identity Manager','فقط PingFederate'],
    'Sentinel\'s four verbs are Collect, Detect, Investigate and Respond. It scales with the cloud and uses predefined or custom playbooks for automated responses.',
    'چهار فعل Sentinel عبارت‌اند از Collect، Detect، Investigate و Respond. با cloud مقیاس می‌گیرد و برای پاسخ خودکار از playbook آماده یا سفارشی استفاده می‌کند.');

  M('3',TL,'Which tool is described as often used with big data platforms to process and store vast amounts of data in a data lake?','کدام ابزار اغلب با پلتفرم‌های big data برای پردازش و ذخیره‌ی حجم عظیم داده در data lake استفاده می‌شود؟','',
    ['Apache Hadoop','Okta','Ekahau','BitLocker'],
    ['Apache Hadoop','Okta','Ekahau','BitLocker'],
    'Hadoop processes and stores vast amounts of data in a data lake. In the pre-read it ran machine learning on historical data to find attack signatures similar to past incidents.',
    'Hadoop حجم عظیم داده را در data lake پردازش و ذخیره می‌کند. در پیش‌مطالعه روی داده‌ی تاریخی ML اجرا کرد تا امضای حمله‌های مشابه حوادث گذشته را پیدا کند.');

  M('3',TL,'Which SIEM integrates data from various sources and uses AI to correlate events and detect complex attack patterns, such as malware command-and-control servers?','کدام SIEM داده را از منابع مختلف یکپارچه می‌کند و با AI رویدادها را correlate و الگوهای پیچیده‌ی حمله مثل سرورهای فرمان و کنترل بدافزار را پیدا می‌کند؟','',
    ['IBM QRadar','Okta','SailPoint IdentityIQ','ForgeRock'],
    ['IBM QRadar','Okta','SailPoint IdentityIQ','ForgeRock'],
    'IBM QRadar integrates with data lakes for advanced threat detection, analytics and incident response. In the pre-read it highlighted the malware\'s command and control servers.',
    'IBM QRadar با data lake یکپارچه می‌شود و تشخیص تهدید، تحلیل و پاسخ به حادثه‌ی پیشرفته می‌دهد. در پیش‌مطالعه سرورهای فرمان و کنترل بدافزار را مشخص کرد.');

  P('3','Security tools','Match each description to the tool.','هر توضیح را به ابزار درست وصل کنید.',
    ['Splunk','Apache Hadoop','Elasticsearch','IBM QRadar','Azure Sentinel'],['Splunk','Apache Hadoop','Elasticsearch','IBM QRadar','Azure Sentinel'],
    [['SIEM with dashboards, correlation and automated actions on ingested logs',0,'SIEM با داشبورد، correlation و اقدام خودکار روی لاگ‌های واردشده'],
     ['Processes and stores vast data in a data lake for big-data analysis',1,'پردازش و ذخیره‌ی داده‌ی عظیم در data lake برای تحلیل big data'],
     ['Part of the ELK Stack, searches and visualizes data in real time',2,'بخشی از ELK Stack؛ جست‌وجو و نمایش لحظه‌ای داده'],
     ['Correlates events across sources and finds command-and-control servers',3,'رویدادها را بین منابع correlate می‌کند و سرورهای فرمان و کنترل را پیدا می‌کند'],
     ['Cloud-native SIEM+SOAR with playbooks',4,'SIEM+SOAR بومی cloud با playbook']],
    [['Log analytics SIEM','SIEM تحلیل لاگ'],['Big-data processing','پردازش big data'],['Search and visualization','جست‌وجو و نمایش'],['Event correlation','همبستگی رویدادها'],['Cloud SIEM and SOAR','SIEM و SOAR ابری']],
    'Splunk: SIEM with dashboards and automated actions. Hadoop: big-data processing. Elasticsearch: search and visualization in the ELK Stack. QRadar: correlation across sources. Azure Sentinel: cloud-native SIEM and SOAR.',
    'Splunk: SIEM با داشبورد و اقدام خودکار. Hadoop: پردازش big data. Elasticsearch: جست‌وجو و نمایش در ELK. QRadar: correlation بین منابع. Azure Sentinel: SIEM و SOAR بومی cloud.');

  (window.PACKS=window.PACKS||[]).push(pack);
})();
