/* Security+ extension: Module 10 (IAM, Access Controls & Secure Protocols).
   Built from the Sheridan session slides. Loads after secplus.js and adds section 10 (questions + study notes) to the same course.
   The Persian side is written in plain, everyday language with simple examples. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['10']={en:'IAM, access controls & secure protocols',fa:'مدیریت هویت، کنترل دسترسی و پروتکل‌های امن'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:d'+(++n),sec:'10',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var P=function(t,name,title,tf,zones,zf,items,zd,en,fa){ /* name = short label; the app shows title */
    pack.pbq.push({id:'secplus:p10_'+(pack.pbq.length+1),sec:'10',t:t,name:name,title:title,tf:tf,zones:zones,zf:zf,items:items,zd:zd,en:en,fa:fa});
  };

  /* ================= QUESTIONS ================= */
  var T1='IAM lifecycle, federation & SSO',T2='Access control models',T3='MFA, passwords & PAM',T4='Secure protocols, firewalls & IDS/IPS',T5='Filtering & endpoint protection',T6='IAM scenarios';

  M(T1,'Which IAM function creates a new hire\'s account and gives it the right roles and permissions?',
    'کدام کار IAM برای کارمند تازه‌وارد حساب می‌سازد و نقش و دسترسی درست را به او می‌دهد؟',
    'روز اول کار: «تهیه کردن» حساب.',
    ['Provisioning','De-provisioning','Accounting','Attestation'],
    ['Provisioning (ساختن حساب)','De-provisioning (گرفتن دسترسی)','Accounting (ثبت کارها)','Attestation (گواهی سلامت)'],
    'Provisioning creates user accounts and assigns access based on role, department or job function, so users can work from day one.',
    'Provisioning یعنی ساختن حساب کاربری و دادن دسترسی‌های لازم بر اساس شغل آدم. مثل اینکه روز اول کار، کارت ورود و کلید اتاقت را به تو بدهند.');

  M(T1,'An employee quits on Friday. What IAM process should remove all of their access right away?',
    'یک کارمند روز جمعه استعفا می‌دهد. کدام فرایند IAM باید فوراً همه‌ی دسترسی‌هایش را بگیرد؟',
    'برعکسِ ساختن حساب.',
    ['De-provisioning','Provisioning','Federation','Single sign-on'],
    ['De-provisioning (گرفتن دسترسی)','Provisioning (ساختن حساب)','Federation (اعتماد بین سازمان‌ها)','SSO (یک بار ورود)'],
    'De-provisioning revokes access when a user leaves or changes role: disable accounts, reclaim credentials, remove tokens and permissions.',
    'De-provisioning یعنی وقتی کسی می‌رود یا شغلش عوض می‌شود، حساب را غیرفعال کنی و کارت و کلید و رمزها را پس بگیری. اگر این کار را نکنی، در شرکت برای یک غریبه باز می‌ماند.');

  M(T1,'An account still works months after its owner left the company. What is this called?',
    'حسابی چند ماه بعد از رفتن صاحبش از شرکت هنوز کار می‌کند. به این چه می‌گویند؟',
    'حسابی که صاحب ندارد، مثل بچه‌ی «یتیم».',
    ['Orphaned account','Service account','Privileged account','Federated account'],
    ['حساب یتیم (Orphaned account)','حساب سرویس (Service account)','حساب ادمین (Privileged account)','حساب فدرال (Federated account)'],
    'Orphaned accounts are active accounts with no current owner. They increase the attack surface and are a classic result of poor de-provisioning.',
    'Orphaned account یعنی حسابی که صاحبش رفته ولی حساب هنوز روشن است. هکر یا کارمند سابق می‌تواند از آن استفاده کند و کسی هم متوجه نمی‌شود.');

  M(T1,'A user moved from Finance to HR three years ago and to IT last year, and still has access from every old job. What is this?',
    'کاربری سه سال پیش از مالی به منابع انسانی رفت و پارسال به IT، و هنوز دسترسی همه‌ی شغل‌های قبلی را دارد. این چیست؟',
    'دسترسی‌ها آرام‌آرام «بالا می‌خزند».',
    ['Privilege (access) creep','Least privilege','Separation of duties','Federation'],
    ['Privilege creep (جمع شدن دسترسی)','Least privilege (کمترین دسترسی)','Separation of duties (تفکیک وظایف)','Federation'],
    'Privilege creep happens when users keep permissions they no longer need. Regular access reviews prevent it and enforce least privilege.',
    'Privilege creep یعنی دسترسی‌ها مثل وسایل اضافه در کمد جمع می‌شوند و هیچ‌وقت دور ریخته نمی‌شوند. با بازبینی مرتب دسترسی‌ها جلویش را بگیر.');

  M(T1,'Users log in once in the morning and can then open email, the HR portal and the CRM without typing a password again. What is this?',
    'کاربرها صبح یک بار وارد می‌شوند و بعد بدون زدن دوباره‌ی رمز، ایمیل، پرتال منابع انسانی و CRM را باز می‌کنند. این چیست؟',
    'یک بار وارد شو، همه جا برو.',
    ['Single sign-on (SSO)','Multi-factor authentication','Password vaulting','Just-in-time access'],
    ['SSO (یک بار ورود)','MFA (ورود چندمرحله‌ای)','گاوصندوق رمز (Password vaulting)','دسترسی لحظه‌ای (JIT)'],
    'SSO lets a user authenticate once and reach many connected applications. It reduces password fatigue and centralizes access control.',
    'SSO مثل دستبند ورود به شهربازی است: یک بار دم در نشانش می‌دهی و بعد سوار همه‌ی وسیله‌ها می‌شوی. کاربر فقط یک رمز را به خاطر می‌سپارد.');

  M(T1,'Two companies set up a trust so partner employees can use their own company login to reach the other company\'s portal. What is this?',
    'دو شرکت به هم اعتماد می‌کنند تا کارمندان شریک با همان ورود شرکت خودشان وارد پرتال شرکت دیگر شوند. این چیست؟',
    'اعتماد بین «دو سازمان جدا».',
    ['Federation','Provisioning','Rule-based access control','Attestation'],
    ['Federation (اعتماد بین سازمان‌ها)','Provisioning','Rule-based access control','Attestation'],
    'Federation is a trust relationship between an identity provider (IdP) and service providers (SPs) across organizational boundaries, so no separate credentials are needed.',
    'Federation یعنی دو سازمان به هم قول اعتماد می‌دهند. سازمان اول (IdP) می‌گوید «این آدم را می‌شناسم» و سازمان دوم (SP) قبول می‌کند. مثل اینکه با گذرنامه‌ی کشور خودت وارد کشور دیگر شوی.');

  M(T1,'Which XML-based standard exchanges authentication data between an identity provider and a service provider for enterprise web SSO?',
    'کدام استاندارد مبتنی بر XML، اطلاعات ورود را بین IdP و SP برای SSO در برنامه‌های وب شرکتی رد و بدل می‌کند؟',
    'زبانش XML است و کلمه‌ی Assertion (ادعا) در اسمش هست.',
    ['SAML','OAuth','LDAP','SNMP'],
    ['SAML','OAuth','LDAP','SNMP'],
    'SAML (Security Assertion Markup Language) is XML-based and is the classic standard for enterprise web SSO between an IdP and an SP.',
    'SAML با XML کار می‌کند و یک «ادعانامه» از IdP به SP می‌فرستد که «این کاربر واقعاً خودش است». برای SSO در سایت‌های شرکتی خیلی رایج است.');

  M(T1,'A fitness app asks permission to read your Google Calendar without ever seeing your Google password. Which protocol makes this possible?',
    'یک برنامه‌ی ورزشی اجازه می‌خواهد تقویم گوگل تو را بخواند، بدون اینکه رمز گوگل تو را ببیند. کدام پروتکل این را ممکن می‌کند؟',
    'به برنامه یک «توکن» با دسترسی محدود داده می‌شود، نه رمز.',
    ['OAuth','SAML','LDAP','Telnet'],
    ['OAuth','SAML','LDAP','Telnet'],
    'OAuth is token-based authorization: it grants an app limited access to your resources without sharing your password. It is common in mobile apps, REST APIs and "Log in with Google".',
    'OAuth مثل کلید پارکینگ (valet key) است: به پارکبان کلیدی می‌دهی که فقط ماشین را روشن می‌کند ولی صندوق عقب را باز نمی‌کند. برنامه یک توکن محدود می‌گیرد و هیچ‌وقت رمز تو را نمی‌بیند.');

  M(T1,'Which protocol is used to query and manage a directory service such as Microsoft Active Directory?',
    'کدام پروتکل برای جستجو و مدیریت یک سرویس دفترچه (directory) مثل Active Directory استفاده می‌شود؟',
    'Directory در اسمش است.',
    ['LDAP','OAuth','SAML','SFTP'],
    ['LDAP','OAuth','SAML','SFTP'],
    'LDAP (Lightweight Directory Access Protocol) queries and manages directory entries (users, groups, permissions) organized in a hierarchy, e.g. Active Directory.',
    'LDAP مثل دفترچه تلفن بزرگ شرکت است که همه‌ی کاربرها، گروه‌ها و دسترسی‌ها را به ترتیب نگه می‌دارد. با LDAP در این دفترچه جستجو می‌کنی.');

  M(T2,'In a military system, a file labeled Top Secret can be opened only by users with Top Secret clearance, and users cannot change this. Which model is this?',
    'در یک سیستم نظامی، فایلی با برچسب «فوق سری» فقط برای کسی که مجوز فوق سری دارد باز می‌شود و کاربر نمی‌تواند این را عوض کند. کدام مدل است؟',
    'یک مقام مرکزی «اجبار» می‌کند؛ کاربر اختیاری ندارد.',
    ['MAC (Mandatory Access Control)','DAC (Discretionary Access Control)','RBAC (Role-Based Access Control)','Rule-based access control'],
    ['MAC (اجباری)','DAC (به اختیار صاحب)','RBAC (بر اساس نقش)','Rule-based (بر اساس قانون)'],
    'MAC uses security labels set by a central authority. Users cannot change permissions. It is common in government and military settings.',
    'در MAC یک مقام مرکزی به هر فایل برچسب می‌زند (مثلاً سری، فوق سری) و به هر آدم هم مجوز می‌دهد. حتی صاحب فایل هم نمی‌تواند دسترسی را عوض کند.');

  M(T2,'You create a file on a shared drive and decide yourself which coworkers may read or edit it. Which model is this?',
    'تو یک فایل روی درایو اشتراکی می‌سازی و خودت تصمیم می‌گیری کدام همکارها بخوانند یا ویرایش کنند. کدام مدل است؟',
    'به «صلاحدید» صاحب فایل.',
    ['DAC','MAC','ABAC','Rule-based access control'],
    ['DAC (به اختیار صاحب)','MAC (اجباری)','ABAC (بر اساس ویژگی)','Rule-based (بر اساس قانون)'],
    'In DAC the resource owner decides who has access. It is flexible but less secure, and common in file-sharing systems.',
    'DAC یعنی صاحب فایل رئیس است و خودش به هر کس بخواهد دسترسی می‌دهد، مثل اشتراک‌گذاری یک فایل در Google Drive. راحت است ولی امنیتش کمتر است، چون هر کسی ممکن است اشتباه کند.');

  M(T2,'Everyone in the Finance department automatically gets access to the accounting system because of their job. Which model is this?',
    'همه‌ی کارمندان واحد مالی فقط به خاطر شغلشان خودکار به سیستم حسابداری دسترسی می‌گیرند. کدام مدل است؟',
    'دسترسی به «نقش» یا شغل وصل است.',
    ['RBAC','DAC','MAC','ABAC'],
    ['RBAC (بر اساس نقش)','DAC','MAC','ABAC'],
    'RBAC assigns permissions to roles or job functions (Finance, HR, IT). Users get permissions by being placed in a role, which simplifies administration.',
    'RBAC یعنی دسترسی را به «شغل» می‌دهی، نه به تک‌تک آدم‌ها. هر کس حسابدار شد، خودکار کلید اتاق حسابداری را می‌گیرد.');

  M(T2,'Access to a cloud app is allowed only if the user is a manager, using a company laptop, inside Canada, and during work hours. Which model is this?',
    'دسترسی به یک برنامه‌ی ابری فقط وقتی داده می‌شود که کاربر مدیر باشد، با لپ‌تاپ شرکت، داخل کانادا و در ساعت کاری. کدام مدل است؟',
    'چندین «ویژگی» با هم بررسی می‌شوند.',
    ['ABAC','RBAC','DAC','MAC'],
    ['ABAC (بر اساس ویژگی)','RBAC (بر اساس نقش)','DAC','MAC'],
    'ABAC decides using many attributes such as role, device, location and time. It is dynamic and flexible, and common in cloud environments.',
    'ABAC چند ویژگی را با هم چک می‌کند: چه کسی هستی، با چه دستگاهی، از کجا، چه ساعتی. مثل نگهبانی که هم کارت، هم ساعت، هم لباس فرم را نگاه می‌کند.');

  M(T2,'A system blocks all logins between 10 p.m. and 6 a.m. for every user. Which model does this best describe?',
    'یک سیستم از ساعت ۱۰ شب تا ۶ صبح جلوی ورود همه‌ی کاربرها را می‌گیرد. این بیشتر کدام مدل است؟',
    'یک «قانون» ثابت برای همه.',
    ['Rule-based access control','Role-based access control','Discretionary access control','Federation'],
    ['Rule-based (بر اساس قانون)','Role-based (بر اساس نقش)','DAC','Federation'],
    'Rule-based access control applies predefined rules to everyone (e.g. business hours only). It is often used with firewalls and system policies.',
    'Rule-based یعنی یک قانون ثابت برای همه، مثل «بعد از ساعت ۱۰ شب در مدرسه بسته است». فرقی نمی‌کند چه شغلی داری. RBAC به شغل نگاه می‌کند، Rule-based به قانون.');

  M(T2,'Which principle says users and systems should get only the minimum access needed to do their job?',
    'کدام اصل می‌گوید کاربر و سیستم فقط باید حداقل دسترسی لازم برای کارشان را داشته باشند؟',
    'کمترین امتیاز.',
    ['Least privilege','Defense in depth','Implicit trust','Single sign-on'],
    ['Least privilege (کمترین دسترسی)','Defense in depth (دفاع لایه‌لایه)','Implicit trust (اعتماد بی‌دلیل)','SSO'],
    'Least privilege grants the minimum access needed. It reduces the attack surface and limits the damage of a breach or misuse.',
    'Least privilege یعنی به هر کس فقط کلید اتاق‌هایی را بده که واقعاً لازم دارد. اگر حساب یک نفر هک شود، هکر فقط به همان چند اتاق می‌رسد.');

  M(T3,'A login asks for a password and then a code from an authenticator app on your phone. Which two factor categories are used?',
    'برای ورود، اول رمز می‌خواهد و بعد یک کد از برنامه‌ی Authenticator روی گوشی. کدام دو دسته‌ی عامل استفاده شده؟',
    'رمز را «می‌دانی»، گوشی را «داری».',
    ['Something you know and something you have','Something you know and something you are','Something you have and somewhere you are','Something you are and something you have'],
    ['چیزی که می‌دانی + چیزی که داری','چیزی که می‌دانی + چیزی که هستی','چیزی که داری + جایی که هستی','چیزی که هستی + چیزی که داری'],
    'A password is something you know. A phone with an authenticator app (or a smart card or token) is something you have. Using two different categories is MFA.',
    'رمز = چیزی که «می‌دانی». گوشی یا توکن = چیزی که «داری». اثر انگشت = چیزی که «هستی». موقعیت = جایی که «هستی». MFA یعنی حداقل دو دسته‌ی مختلف.');

  M(T3,'A user unlocks a laptop with a fingerprint. Which factor category is this?',
    'کاربر لپ‌تاپ را با اثر انگشت باز می‌کند. این کدام دسته از عامل‌هاست؟',
    'بدن خودت.',
    ['Something you are','Something you know','Something you have','Somewhere you are'],
    ['چیزی که هستی (بیومتریک)','چیزی که می‌دانی','چیزی که داری','جایی که هستی'],
    'Biometrics (fingerprint, face, iris) are "something you are".',
    'اثر انگشت، صورت و عنبیه‌ی چشم بخشی از بدن تو هستند، پس «چیزی که هستی» حساب می‌شوند.');

  M(T3,'A bank blocks logins that come from IP addresses outside the country. Which factor category is this?',
    'یک بانک جلوی ورودهایی را که از IP خارج از کشور می‌آیند می‌گیرد. این کدام دسته است؟',
    'به «مکان» نگاه می‌کند.',
    ['Somewhere you are','Something you have','Something you know','Something you are'],
    ['جایی که هستی (مکان)','چیزی که داری','چیزی که می‌دانی','چیزی که هستی'],
    '"Somewhere you are" uses location context such as geolocation or IP address.',
    '«جایی که هستی» یعنی سیستم نگاه می‌کند از کجا وصل شده‌ای، با GPS یا آدرس IP.');

  M(T3,'Is a password plus a PIN considered multi-factor authentication?',
    'آیا رمز عبور + PIN، احراز هویت چندعاملی (MFA) حساب می‌شود؟',
    'هر دو از یک دسته‌اند؟',
    ['No, both are something you know','Yes, because there are two secrets','Yes, because a PIN is something you have','No, because PINs are never allowed'],
    ['نه، هر دو «چیزی که می‌دانی» هستند','بله، چون دو رمز است','بله، چون PIN «چیزی که داری» است','نه، چون PIN هیچ‌وقت مجاز نیست'],
    'MFA requires factors from different categories. A password and a PIN are both something you know, so this is only single-factor (two-step).',
    'MFA یعنی عامل‌ها از «دسته‌های مختلف» باشند. رمز و PIN هر دو چیزی است که در ذهنت داری، پس فقط یک دسته است. مثل این است که دو قفل یک‌جور با یک کلید داشته باشی.');

  M(T3,'Which password practice is best?',
    'کدام عادت رمز عبور بهترین است؟',
    'بلند، پیچیده و هر حساب جدا.',
    ['A long, unique password for each account, stored in a password manager','The same strong password for work and personal accounts','Your pet\'s name followed by the year','A short password changed every day'],
    ['رمز بلند و جدا برای هر حساب، نگه‌داری‌شده در password manager','یک رمز قوی برای حساب کاری و شخصی','اسم حیوان خانگی + سال','رمز کوتاهی که هر روز عوض شود'],
    'Use long (12+ characters), complex and unique passwords for every account, and a password manager to store them. Never reuse passwords between work and personal accounts.',
    'رمز خوب بلند است (حداقل ۱۲ حرف با عدد و علامت) و برای هر حساب فرق دارد. لازم نیست همه را حفظ کنی؛ password manager مثل یک گاوصندوق برایت نگهشان می‌دارد.');

  M(T3,'Which control stops an attacker from trying thousands of passwords against one account?',
    'کدام کنترل جلوی هکری را می‌گیرد که هزاران رمز را روی یک حساب امتحان می‌کند؟',
    'بعد از چند اشتباه، در قفل می‌شود.',
    ['Account lockout policy','Password expiration','Single sign-on','Federation'],
    ['قفل شدن حساب (Lockout)','منقضی شدن رمز','SSO','Federation'],
    'A lockout policy locks the account after a set number of failed attempts, defeating brute force attacks.',
    'Lockout مثل گوشی است که بعد از چند بار رمز غلط قفل می‌شود. هکر دیگر نمی‌تواند هزاران رمز را پشت سر هم امتحان کند.');

  M(T3,'Which option removes passwords completely and uses things like FIDO2 security keys or biometrics?',
    'کدام روش رمز عبور را کلاً حذف می‌کند و از چیزهایی مثل کلید امنیتی FIDO2 یا بیومتریک استفاده می‌کند؟',
    'بدون رمز.',
    ['Passwordless authentication','Password complexity rules','Password expiration','Security questions'],
    ['ورود بدون رمز (Passwordless)','قانون پیچیدگی رمز','منقضی شدن رمز','سؤال امنیتی'],
    'Passwordless authentication (biometrics, smart cards, FIDO2 keys) is more secure and user friendly because there is no password to steal or reuse.',
    'Passwordless یعنی اصلاً رمزی وجود ندارد که دزدیده شود. با اثر انگشت یا یک کلید USB کوچک (FIDO2) وارد می‌شوی.');

  M(T3,'An admin gets domain admin rights for only two hours to install a patch, and the rights then disappear automatically. Which PAM feature is this?',
    'یک ادمین فقط برای دو ساعت دسترسی Domain Admin می‌گیرد تا وصله نصب کند و بعد این دسترسی خودکار از بین می‌رود. کدام ویژگی PAM است؟',
    'درست «به موقع» و فقط برای همان زمان.',
    ['Just-in-time (JIT) access','Password vaulting','Federation','Discretionary access control'],
    ['دسترسی لحظه‌ای (JIT)','گاوصندوق رمز (Vaulting)','Federation','DAC'],
    'Just-in-time access grants elevated rights only when needed and for a limited time, minimizing exposure and enforcing least privilege.',
    'JIT یعنی کلید اتاق سرور را فقط همان وقتی که کار داری می‌گیری و بعد خودش پس گرفته می‌شود. وقتی دسترسی همیشگی نباشد، چیزی هم برای دزدیدن نیست.');

  M(T3,'A PAM tool stores admin passwords in an encrypted vault, rotates them, and lets admins log in without ever seeing the real password. What is this?',
    'یک ابزار PAM رمزهای ادمین را در یک گاوصندوق رمزگذاری‌شده نگه می‌دارد، مرتب عوضشان می‌کند و ادمین بدون دیدن رمز واقعی وارد می‌شود. این چیست؟',
    'گاوصندوق.',
    ['Password vaulting','Ephemeral credentials','Single sign-on','Credential stuffing'],
    ['گاوصندوق رمز (Vaulting)','اعتبار موقت (Ephemeral)','SSO','Credential stuffing (حمله)'],
    'Password vaulting stores and rotates privileged credentials in an encrypted vault and grants access without revealing the password.',
    'Vaulting مثل این است که کلید در یک صندوق امانات باشد و تو فقط در را با کمک صندوق باز کنی، بدون اینکه کلید را ببینی یا کپی کنی.');

  M(T3,'A DevOps pipeline gets a cloud credential that is created on demand and expires automatically after 15 minutes. What is this?',
    'یک pipeline در DevOps یک اعتبار ابری می‌گیرد که همان لحظه ساخته می‌شود و بعد از ۱۵ دقیقه خودش باطل می‌شود. این چیست؟',
    'Ephemeral یعنی «زودگذر».',
    ['Ephemeral credentials','Orphaned account','Shared account','Hardcoded secret'],
    ['اعتبار موقت (Ephemeral)','حساب یتیم','حساب مشترک','رمز داخل کد'],
    'Ephemeral credentials are temporary, time-limited credentials issued dynamically. They are useful in cloud and DevOps pipelines.',
    'Ephemeral credential مثل بلیت یک‌بار مصرف مترو است که بعد از چند دقیقه باطل می‌شود. اگر دزدیده شود هم زود به درد نمی‌خورد.');

  M(T3,'Why are privileged accounts such as system administrators the main focus of PAM?',
    'چرا حساب‌های ادمین (privileged) تمرکز اصلی PAM هستند؟',
    'کلید همه‌ی درها دست کیست؟',
    ['They have broad access to critical systems, so they are high-value targets','They are used only by guests','They never need passwords','They cannot be audited'],
    ['چون به سیستم‌های حیاتی دسترسی وسیع دارند و هدف باارزشی هستند','چون فقط مهمان‌ها از آن استفاده می‌کنند','چون هیچ‌وقت رمز لازم ندارند','چون نمی‌شود بررسی‌شان کرد'],
    'Privileged accounts can reach critical infrastructure. PAM reduces insider threats, prevents lateral movement and improves auditability.',
    'حساب ادمین مثل شاه‌کلید ساختمان است. اگر دست دزد بیفتد، همه‌ی درها باز می‌شود. برای همین PAM مراقب این حساب‌هاست.');

  M(T4,'Which protocol encrypts web traffic for HTTPS and has replaced SSL?',
    'کدام پروتکل ترافیک وب را برای HTTPS رمزگذاری می‌کند و جای SSL را گرفته؟',
    'قفل کنار آدرس سایت.',
    ['TLS','IPSec','Telnet','FTP'],
    ['TLS','IPSec','Telnet','FTP'],
    'TLS encrypts application-layer traffic such as HTTPS and FTPS and replaces the older SSL.',
    'TLS همان چیزی است که قفل کوچک کنار آدرس سایت را می‌سازد. SSL نسخه‌ی قدیمی و ناامن آن بود.');

  M(T4,'A company builds a site-to-site VPN that protects all IP traffic using AH and ESP. Which protocol is this?',
    'یک شرکت VPN بین دو دفتر می‌سازد که همه‌ی ترافیک IP را با AH و ESP محافظت می‌کند. کدام پروتکل است؟',
    'IP در اسمش است.',
    ['IPSec','SSH','TLS','LDAP'],
    ['IPSec','SSH','TLS','LDAP'],
    'IPSec secures IP traffic in VPNs. AH provides authentication and integrity; ESP adds encryption.',
    'IPSec ترافیک را در سطح IP قفل می‌کند و برای VPN استفاده می‌شود. AH فقط امضا می‌زند که دست نخورده؛ ESP رمزگذاری هم می‌کند.');

  M(T4,'An admin still uses Telnet to manage routers. What should replace it?',
    'یک ادمین هنوز با Telnet روترها را مدیریت می‌کند. چه چیزی باید جایش بیاید؟',
    'Shell امن.',
    ['SSH','FTP','HTTP','SNMPv1'],
    ['SSH','FTP','HTTP','SNMPv1'],
    'Telnet sends everything, including passwords, in clear text. SSH provides encrypted remote access and command execution, plus SFTP and tunneling.',
    'Telnet همه چیز، حتی رمز را، بدون رمزگذاری می‌فرستد؛ مثل کارت‌پستال که همه می‌خوانند. SSH همان کار را با رمزگذاری انجام می‌دهد. FTP هم قدیمی است و باید با SFTP عوض شود.');

  M(T4,'Which firewall strategy is considered best practice?',
    'کدام روش تنظیم فایروال بهترین است؟',
    'پیش‌فرض: «نه».',
    ['Default deny: block everything and allow only known-good traffic','Default allow: allow everything and block known-bad traffic','Allow all inbound traffic on weekends','Never log denied traffic'],
    ['همه چیز ممنوع، فقط ترافیک خوب شناخته‌شده مجاز (Default deny)','همه چیز مجاز، فقط بدها ممنوع','آخر هفته‌ها همه چیز آزاد','هیچ‌وقت ترافیک ردشده را ثبت نکن'],
    'Default deny blocks everything except explicitly allowed traffic. Also review rules regularly and log denied traffic for forensics.',
    'Default deny مثل مهمانی با لیست مهمان است: فقط اسم‌هایی که در لیست هستند وارد می‌شوند. ترافیک ردشده را هم ثبت کن تا بعداً بفهمی چه کسی سعی کرده وارد شود.');

  M(T4,'Where should a company put its public web and mail servers so they are reachable from the internet but separated from the internal network?',
    'یک شرکت سرور وب و ایمیل عمومی‌اش را کجا بگذارد تا از اینترنت در دسترس باشد ولی از شبکه‌ی داخلی جدا بماند؟',
    'منطقه‌ی حائل بین بیرون و داخل.',
    ['A screened subnet (DMZ)','The internal user VLAN','The domain controller subnet','An air-gapped network'],
    ['زیرشبکه‌ی حائل (DMZ)','شبکه‌ی داخلی کاربرها','زیرشبکه‌ی Domain Controller','شبکه‌ی کاملاً جدا (Air gap)'],
    'A screened subnet (DMZ) hosts public-facing services while isolating them from the internal network, limiting exposure if they are compromised.',
    'DMZ مثل اتاق پذیرایی خانه است: مهمان‌ها آنجا می‌آیند ولی به اتاق خواب‌ها راه ندارند. اگر سرور وب هک شود، هکر هنوز به شبکه‌ی داخلی نرسیده است.');

  M(T4,'A device watches network traffic, spots a port scan, and only sends an alert to the security team. What is it?',
    'دستگاهی ترافیک شبکه را نگاه می‌کند، یک port scan می‌بیند و فقط به تیم امنیت هشدار می‌دهد. این چیست؟',
    'فقط «کشف» می‌کند، جلویش را نمی‌گیرد.',
    ['IDS','IPS','WAF in blocking mode','Load balancer'],
    ['IDS (سیستم کشف نفوذ)','IPS (سیستم جلوگیری از نفوذ)','WAF در حالت مسدودسازی','Load balancer'],
    'An IDS is passive: it monitors and alerts. An IPS sits inline and actively blocks or drops malicious packets.',
    'IDS مثل دوربین مداربسته است: می‌بیند و خبر می‌دهد. IPS مثل نگهبان دم در است: خودش جلوی دزد را می‌گیرد. D = Detection (کشف)، P = Prevention (جلوگیری).');

  M(T4,'What is a risk of placing an IPS inline if it is badly configured?',
    'اگر IPS که وسط مسیر ترافیک است بد تنظیم شود، چه خطری دارد؟',
    'هشدار الکی + قدرت مسدود کردن = ؟',
    ['False positives may block legitimate traffic','It can only send email alerts','It cannot see any traffic','It encrypts all packets by mistake'],
    ['هشدار الکی ممکن است ترافیک سالم را مسدود کند','فقط می‌تواند ایمیل هشدار بفرستد','هیچ ترافیکی را نمی‌بیند','همه‌ی بسته‌ها را اشتباهی رمزگذاری می‌کند'],
    'An IPS actively blocks traffic, so a false positive can stop real users or business services. IDS false positives only create extra alerts.',
    'چون IPS خودش ترافیک را قطع می‌کند، اگر اشتباه کند ممکن است مشتری‌های واقعی را هم پشت در نگه دارد. خطای IDS فقط یک هشدار اضافه است.');

  M(T4,'An IDS raises an alert because a server that normally sends 1 GB a day suddenly sends 80 GB. Which detection method is this?',
    'IDS هشدار می‌دهد چون سروری که معمولاً روزی ۱ گیگ می‌فرستد ناگهان ۸۰ گیگ می‌فرستد. کدام روش تشخیص است؟',
    'با «حالت عادی» مقایسه می‌کند، نه با امضای حمله.',
    ['Anomaly-based detection','Signature-based detection','Port mirroring','Content categorization'],
    ['تشخیص بر اساس رفتار غیرعادی (Anomaly)','تشخیص بر اساس امضا (Signature)','Port mirroring','دسته‌بندی محتوا'],
    'Anomaly-based detection flags deviations from normal behavior. Signature-based detection matches known attack patterns and cannot catch brand-new attacks.',
    'Anomaly-based حالت عادی را یاد می‌گیرد و هر چیز عجیب را گزارش می‌دهد. Signature-based مثل عکس دزدهای معروف است؛ فقط کسانی را می‌شناسد که قبلاً دیده.');

  M(T5,'A company wants to block gambling and adult websites on all laptops, even when employees work from a café. Which web filtering deployment fits best?',
    'یک شرکت می‌خواهد سایت‌های قمار و بزرگسالان را روی همه‌ی لپ‌تاپ‌ها مسدود کند، حتی وقتی کارمند در کافه کار می‌کند. کدام نوع فیلتر وب بهتر است؟',
    'فیلتر باید روی خود دستگاه باشد، هر جا که برود.',
    ['Agent-based filtering with content categorization','Proxy-based filtering only in the office','A DMZ','An IDS in passive mode'],
    ['فیلتر نصب‌شده روی دستگاه (Agent-based) با دسته‌بندی محتوا','فقط فیلتر Proxy داخل دفتر','DMZ','IDS در حالت غیرفعال'],
    'Agent-based filtering runs on the endpoint, so rules apply on any network. Content categorization blocks whole categories like gambling or adult content.',
    'Agent-based یعنی فیلتر روی خود لپ‌تاپ نصب است و همراهش به کافه و خانه می‌رود. Proxy فقط وقتی کار می‌کند که از شبکه‌ی شرکت رد شوی.');

  M(T5,'Which Windows tool lets admins enforce password rules, disable USB storage and force screen lock across the whole domain?',
    'کدام ابزار ویندوز به ادمین اجازه می‌دهد قانون رمز، غیرفعال کردن USB و قفل صفحه را روی کل دامنه اجرا کند؟',
    'سیاست گروهی.',
    ['Group Policy','SELinux','SNMP','NetFlow'],
    ['Group Policy','SELinux','SNMP','NetFlow'],
    'Group Policy centrally enforces security settings, software restrictions, password policies and user rights across a Windows domain.',
    'Group Policy مثل قانون مدرسه است که مدیر یک بار می‌نویسد و روی همه‌ی کلاس‌ها اجرا می‌شود. مثلاً «همه‌ی کامپیوترها بعد از ۱۰ دقیقه قفل شوند».');

  M(T5,'A hacked web server process on Linux runs as root but still cannot read sensitive files because of a kernel security policy. What is enforcing this?',
    'یک برنامه‌ی وب هک‌شده روی لینوکس با دسترسی root اجرا می‌شود ولی به خاطر یک سیاست امنیتی هسته هنوز نمی‌تواند فایل‌های حساس را بخواند. چه چیزی این را اجرا می‌کند؟',
    'Linux امنیت‌افزوده، با MAC.',
    ['SELinux','Group Policy','DAC file permissions','DMARC'],
    ['SELinux','Group Policy','دسترسی DAC فایل‌ها','DMARC'],
    'SELinux is a Linux kernel module that applies Mandatory Access Control (MAC) policies, limiting processes and users even with root privileges.',
    'SELinux روی لینوکس قانون MAC اجرا می‌کند. یعنی حتی root هم هر کاری نمی‌تواند بکند. اگر برنامه‌ی وب هک شود، هکر در قفس همان برنامه می‌ماند.');

  M(T5,'Which control stops a laptop from even connecting to a known malicious domain, before any web page loads?',
    'کدام کنترل جلوی اتصال لپ‌تاپ به یک دامنه‌ی مخرب شناخته‌شده را می‌گیرد، حتی قبل از باز شدن صفحه؟',
    'اسم سایت به IP تبدیل نمی‌شود.',
    ['DNS filtering','DKIM','SNMP','Bit-by-bit imaging'],
    ['فیلتر DNS','DKIM','SNMP','کپی بیت‌به‌بیت'],
    'DNS filtering blocks resolution of known malicious domains before a connection is made, stopping phishing, malware downloads and C2 callbacks (e.g. Cisco Umbrella).',
    'DNS مثل دفترچه تلفن اینترنت است. DNS filtering وقتی اسم یک سایت بد را می‌پرسی، شماره را نمی‌دهد؛ پس اصلاً به آن سایت وصل نمی‌شوی.');

  M(T5,'Which email protocol lists the mail servers that are allowed to send email for a domain?',
    'کدام پروتکل ایمیل، فهرست سرورهایی را که اجازه دارند برای یک دامنه ایمیل بفرستند مشخص می‌کند؟',
    'سیاست «فرستنده».',
    ['SPF','DKIM','DMARC','LDAP'],
    ['SPF','DKIM','DMARC','LDAP'],
    'SPF validates sending mail servers. DKIM adds a digital signature to verify integrity. DMARC uses SPF and DKIM and tells receivers what to do with mail that fails.',
    'SPF = لیست پستچی‌های مجاز. DKIM = مهر و امضا روی نامه. DMARC = دستور به گیرنده که اگر نامه امتحان را رد شد، چه کارش کند (رد کن، اسپم کن، گزارش بده).');

  M(T5,'Which email standard tells receiving servers how to handle messages that fail SPF and DKIM checks, and sends reports back?',
    'کدام استاندارد ایمیل به سرور گیرنده می‌گوید با ایمیلی که SPF و DKIM را رد می‌کند چه کند و گزارش هم برمی‌گرداند؟',
    'R در اسمش یعنی Reporting.',
    ['DMARC','SPF','DKIM','S/MIME'],
    ['DMARC','SPF','DKIM','S/MIME'],
    'DMARC (Domain-based Message Authentication, Reporting & Conformance) builds on SPF and DKIM and instructs receivers how to treat unauthenticated email.',
    'DMARC روی SPF و DKIM ساخته شده و تصمیم نهایی را می‌گیرد: ایمیل جعلی را رد کن یا در اسپم بگذار، و به صاحب دامنه گزارش بده.');

  M(T5,'An employee tries to email a spreadsheet full of client social insurance numbers to a personal Gmail account, and the message is blocked. Which control did this?',
    'یک کارمند می‌خواهد فایلی پر از شماره‌ی بیمه‌ی مشتری‌ها را به جیمیل شخصی‌اش بفرستد و ایمیل مسدود می‌شود. کدام کنترل این کار را کرد؟',
    'جلوی «نشت داده» را می‌گیرد.',
    ['DLP','NAC','SSO','IDS'],
    ['DLP (جلوگیری از نشت داده)','NAC','SSO','IDS'],
    'DLP classifies sensitive data (PII, PHI, financial) and blocks or alerts on unauthorized emailing, copying to USB, printing or cloud uploads.',
    'DLP مثل مأمور گمرک است که چمدان‌ها را می‌گردد و نمی‌گذارد اطلاعات حساس از شرکت بیرون برود؛ چه با ایمیل، چه با USB، چه با آپلود.');

  M(T5,'A visitor plugs an unpatched laptop into an office network jack and is automatically placed on a guest VLAN. What did this?',
    'یک مهمان لپ‌تاپ وصله‌نشده‌اش را به پریز شبکه‌ی دفتر وصل می‌کند و خودکار به VLAN مهمان فرستاده می‌شود. چه چیزی این کار را کرد؟',
    'قبل از ورود به شبکه، «سلامت» دستگاه چک می‌شود.',
    ['NAC with posture assessment','DLP','EDR','Web filtering'],
    ['NAC با بررسی سلامت دستگاه','DLP','EDR','فیلتر وب'],
    'NAC validates devices and checks posture (antivirus, patches, firewall) before granting access, quarantining non-compliant or unknown devices.',
    'NAC مثل نگهبان دم در مدرسه است که قبل از ورود، کارت و لباس فرم را چک می‌کند. دستگاه سالم وارد می‌شود؛ دستگاه ناسالم به اتاق انتظار (VLAN مهمان) می‌رود.');

  M(T5,'Which tool is installed on laptops and servers to detect, investigate and respond to threats such as ransomware or fileless attacks on that device?',
    'کدام ابزار روی لپ‌تاپ و سرور نصب می‌شود تا تهدیدهایی مثل باج‌افزار یا حمله‌ی بدون فایل را روی همان دستگاه کشف و بررسی کند و جواب بدهد؟',
    'Endpoint در اسمش است.',
    ['EDR','XDR','NAC','SIEM'],
    ['EDR','XDR','NAC','SIEM'],
    'EDR (Endpoint Detection and Response) gives visibility into endpoint activity and enables rapid detection, investigation and response, such as isolating the host or killing a process.',
    'EDR روی هر دستگاه یک نگهبان هوشمند می‌گذارد که رفتار برنامه‌ها را نگاه می‌کند و اگر چیزی مشکوک بود، دستگاه را از شبکه جدا یا برنامه را خاموش می‌کند.');

  M(T5,'How does XDR differ from EDR?',
    'فرق XDR با EDR چیست؟',
    'X = Extended (گسترش‌یافته).',
    ['XDR combines data from endpoints, network, cloud and identity for a unified view','XDR only works on one laptop','XDR replaces all firewalls','XDR is a password manager'],
    ['XDR داده‌ی دستگاه‌ها، شبکه، ابر و هویت را با هم ترکیب می‌کند','XDR فقط روی یک لپ‌تاپ کار می‌کند','XDR جای همه‌ی فایروال‌ها را می‌گیرد','XDR یک password manager است'],
    'XDR extends EDR by correlating data across endpoints, networks, servers, cloud workloads and identity systems to detect cross-domain threats and reduce alert fatigue.',
    'EDR فقط یک دستگاه را می‌بیند. XDR مثل اتاق کنترل است که دوربین‌های همه جا را با هم نگاه می‌کند: دستگاه‌ها، شبکه، ابر و حساب‌های کاربری.');

  M(T5,'An accountant who always logs in from Toronto at 9 a.m. suddenly logs in at 3 a.m. from another country and downloads 10,000 files. Which tool is designed to flag this?',
    'حسابداری که همیشه ساعت ۹ صبح از تورنتو وارد می‌شود، ناگهان ساعت ۳ صبح از کشور دیگری وارد می‌شود و ۱۰ هزار فایل دانلود می‌کند. کدام ابزار برای کشف این ساخته شده؟',
    'رفتار «کاربر» را با حالت عادی‌اش مقایسه می‌کند.',
    ['UBA (User Behavior Analytics)','Group Policy','SPF','Password vaulting'],
    ['UBA (تحلیل رفتار کاربر)','Group Policy','SPF','گاوصندوق رمز'],
    'UBA learns normal user patterns (login times, file access) and uses machine learning to flag anomalies that may signal stolen credentials, insider threats or data exfiltration.',
    'UBA عادت‌های هر کاربر را یاد می‌گیرد. اگر کسی مثل همیشه رفتار نکند، مثلاً نصف شب از کشور دیگر وارد شود، هشدار می‌دهد. احتمالاً رمزش دزدیده شده.');

  M(T5,'Before a laptop is allowed onto the network, its TPM proves the boot process and firmware have not been tampered with. What is this?',
    'قبل از اینکه لپ‌تاپ اجازه‌ی ورود به شبکه بگیرد، TPM آن ثابت می‌کند که فرایند روشن شدن و firmware دستکاری نشده. این چیست؟',
    'گواهی دادن درباره‌ی سلامت.',
    ['Attestation','Interoperability','Federation','De-provisioning'],
    ['گواهی سلامت (Attestation)','سازگاری (Interoperability)','Federation','De-provisioning'],
    'Attestation confirms the identity, integrity or compliance of a system, often using a TPM or secure boot, so trust is based on its current state.',
    'Attestation یعنی دستگاه «شهادت» می‌دهد که سالم است و کسی دستکاری‌اش نکرده؛ مثل گواهی سلامت قبل از ورود به استخر.');

  M(T5,'Users log in once and reach apps from three different cloud vendors with the same access rules. Which IAM quality makes this possible?',
    'کاربرها یک بار وارد می‌شوند و به برنامه‌های سه شرکت ابری مختلف با همان قانون‌های دسترسی می‌رسند. کدام ویژگی IAM این را ممکن می‌کند؟',
    'سیستم‌های مختلف با هم «کنار بیایند».',
    ['Interoperability','Attestation','Privilege creep','Air gapping'],
    ['سازگاری (Interoperability)','Attestation','Privilege creep','Air gap'],
    'Interoperability means IAM works seamlessly across platforms and vendors, using federation standards such as SAML and OAuth. It is critical in hybrid and multi-cloud setups.',
    'Interoperability یعنی سیستم‌های شرکت‌های مختلف زبان هم را می‌فهمند، مثل شارژری که به همه‌ی گوشی‌ها بخورد. با SAML و OAuth ممکن می‌شود.');

  M(T6,'A former employee\'s VPN account still works three weeks after they were fired. What is the best long-term fix?',
    'حساب VPN یک کارمند اخراجی سه هفته بعد هنوز کار می‌کند. بهترین راه‌حل بلندمدت چیست؟',
    'وقتی HR می‌گوید «رفت»، دسترسی هم باید خودکار برود.',
    ['Automated de-provisioning tied to the HR system','Ask the ex-employee to stop using it','Change the VPN logo','Turn on SSO for the ex-employee'],
    ['De-provisioning خودکار وصل به سیستم HR','از کارمند سابق خواهش کن استفاده نکند','لوگوی VPN را عوض کن','برای کارمند سابق SSO روشن کن'],
    'Automate de-provisioning from HR events so access is revoked immediately, monitor with UBA, and audit VPN and account lists regularly. IAM must cover the whole lifecycle.',
    'بهترین راه این است که سیستم HR و IAM به هم وصل باشند: همین که HR ثبت کند کسی رفته، همه‌ی دسترسی‌هایش خودکار قطع شود. بعد هم مرتب لیست حساب‌ها را بازبینی کن.');

  M(T6,'An old firewall rule leaves TCP 3389 open to the internet, and attackers use it to get into a critical server. Which service was exposed?',
    'یک قانون قدیمی فایروال پورت TCP 3389 را به اینترنت باز گذاشته و هکرها از آن وارد یک سرور حیاتی شده‌اند. کدام سرویس باز مانده بود؟',
    'دسکتاپ از راه دور ویندوز.',
    ['RDP (Remote Desktop Protocol)','HTTPS','SSH','DNS'],
    ['RDP (دسکتاپ از راه دور)','HTTPS','SSH','DNS'],
    'Port 3389 is RDP. Fix: audit firewall rules regularly, remove broad rules, apply least privilege, and alert on unusual external access.',
    'پورت 3389 مال RDP است، یعنی کنترل کامپیوتر از راه دور. باز گذاشتنش روی اینترنت مثل این است که در خانه را باز بگذاری. فایروال را مرتب بازبینی کن و قانون‌های اضافه را پاک کن.');

  M(T6,'Employees reuse "Summer2024!" on work and personal sites. One site is breached and attackers try those logins on company systems. What attack is this, and what stops it best?',
    'کارمندها رمز «Summer2024!» را هم برای کار و هم برای سایت‌های شخصی استفاده می‌کنند. یک سایت هک می‌شود و هکرها همان ورودها را روی سیستم شرکت امتحان می‌کنند. این چه حمله‌ای است و بهترین جلوگیری چیست؟',
    'رمزهای دزدیده‌شده را «می‌چپانند».',
    ['Credential stuffing; MFA plus unique passwords','Phishing; a DMZ','SQL injection; a WAF','Tailgating; a badge reader'],
    ['Credential stuffing؛ MFA + رمز جدا برای هر حساب','فیشینگ؛ DMZ','SQL injection؛ WAF','دنبال کسی وارد شدن؛ کارت‌خوان'],
    'Credential stuffing replays leaked username/password pairs on other sites. MFA, unique passwords, password managers and dark web monitoring defend against it.',
    'Credential stuffing یعنی هکر رمزهای لو رفته از یک سایت را روی سایت‌های دیگر امتحان می‌کند، چون می‌داند آدم‌ها رمز تکراری دارند. MFA جلویش را می‌گیرد، چون رمز به تنهایی کافی نیست.');

  /* ================= MATCHING (PBQ) ================= */
  P(T2,'Access control models','Match each scenario to the correct access control model.',
    'هر سناریو را به مدل درست کنترل دسترسی وصل کنید.',
    ['MAC','DAC','RBAC','ABAC','Rule-based'],['MAC (اجباری)','DAC (به اختیار صاحب)','RBAC (نقش)','ABAC (ویژگی)','Rule-based (قانون)'],
    [['Files carry Secret or Top Secret labels set by a central authority',0,'فایل‌ها برچسب سری یا فوق سری دارند که یک مقام مرکزی زده'],
     ['The file owner shares a folder with chosen coworkers',1,'صاحب فایل یک پوشه را با همکارهای دلخواهش به اشتراک می‌گذارد'],
     ['All nurses get the patient chart app because of their job',2,'همه‌ی پرستارها به خاطر شغلشان به برنامه‌ی پرونده‌ی بیمار دسترسی دارند'],
     ['Access needs a managed device, a Canadian location and work hours',3,'دسترسی به دستگاه شرکت، مکان کانادا و ساعت کاری نیاز دارد'],
     ['Nobody may log in on Sundays',4,'یکشنبه‌ها هیچ‌کس نمی‌تواند وارد شود']],
    [['Labels, central authority','برچسب و مقام مرکزی'],['Owner decides','صاحب تصمیم می‌گیرد'],['Job role','شغل'],['Many attributes','چند ویژگی'],['Fixed rule for everyone','یک قانون ثابت برای همه']],
    'MAC = labels set centrally. DAC = owner decides. RBAC = job role. ABAC = attributes like device, location, time. Rule-based = fixed rules for all.',
    'MAC = برچسب و مقام مرکزی. DAC = صاحب فایل تصمیم می‌گیرد. RBAC = شغل. ABAC = چند ویژگی با هم. Rule-based = یک قانون برای همه.');

  P(T3,'Authentication factors','Match each example to its factor category.',
    'هر مثال را به دسته‌ی عامل احراز هویت وصل کنید.',
    ['Something you know','Something you have','Something you are','Somewhere you are'],['چیزی که می‌دانی','چیزی که داری','چیزی که هستی','جایی که هستی'],
    [['A PIN or passphrase',0,'PIN یا جمله‌ی عبور'],
     ['A smart card or hardware token',1,'کارت هوشمند یا توکن سخت‌افزاری'],
     ['A 6-digit code in an authenticator app on your phone',1,'کد ۶ رقمی در برنامه‌ی Authenticator گوشی'],
     ['Face recognition or iris scan',2,'تشخیص چهره یا اسکن عنبیه'],
     ['Access blocked from outside a trusted region',3,'دسترسی از بیرون منطقه‌ی مورد اعتماد مسدود است']],
    [['Knowledge','دانستنی'],['Possession','داشتنی'],['Biometric','بدن'],['Location','مکان']],
    'Know = password/PIN. Have = phone, token, smart card. Are = biometrics. Where = geolocation or IP.',
    'می‌دانی = رمز و PIN. داری = گوشی، توکن، کارت. هستی = اثر انگشت و صورت. کجا = مکان یا IP.');

  P(T5,'Security tools','Match each need to the correct tool.',
    'هر نیاز را به ابزار درستش وصل کنید.',
    ['NAC','DLP','EDR','UBA','DMARC'],['NAC','DLP','EDR','UBA','DMARC'],
    [['Check device patches and antivirus before it joins the network',0,'قبل از ورود دستگاه به شبکه، وصله و آنتی‌ویروسش را چک کن'],
     ['Stop customer data from being copied to a USB drive',1,'جلوی کپی شدن اطلاعات مشتری روی USB را بگیر'],
     ['Isolate a laptop where ransomware is running',2,'لپ‌تاپی که باج‌افزار رویش اجرا شده را جدا کن'],
     ['Flag a user who suddenly logs in at 3 a.m. and downloads huge amounts of data',3,'کاربری را که ناگهان ساعت ۳ صبح وارد می‌شود و حجم زیادی دانلود می‌کند گزارش کن'],
     ['Tell receiving servers to reject spoofed email from your domain',4,'به سرورهای گیرنده بگو ایمیل جعلی از دامنه‌ی تو را رد کنند']],
    [['Device admission','ورود دستگاه'],['Data leaks','نشت داده'],['Endpoint threats','تهدید روی دستگاه'],['Unusual user behavior','رفتار عجیب کاربر'],['Email spoofing policy','سیاست ضد جعل ایمیل']],
    'NAC = admit only healthy devices. DLP = stop data leaving. EDR = detect and respond on endpoints. UBA = unusual user behavior. DMARC = email spoofing policy.',
    'NAC = نگهبان در شبکه. DLP = مأمور گمرک داده. EDR = نگهبان روی هر دستگاه. UBA = رفتار عجیب کاربر. DMARC = دستور درباره‌ی ایمیل جعلی.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['10']={t:['IAM, access controls & secure protocols','مدیریت هویت، کنترل دسترسی و پروتکل‌های امن'],b:[
    PP('IAM (Identity and Access Management) answers one question: who can reach what, when, and for how long? Think of a school: every student gets an ID card on day one, the card opens only the rooms they need, and it is taken back when they leave.',
      'IAM (مدیریت هویت و دسترسی) به یک سؤال جواب می‌دهد: چه کسی، به چه چیزی، کِی و تا کِی دسترسی دارد؟ مدرسه را تصور کن: روز اول به هر دانش‌آموز کارت می‌دهند، کارت فقط درِ کلاس‌های خودش را باز می‌کند، و روزی که می‌رود کارت را پس می‌گیرند.'),
    H('The IAM lifecycle','چرخه‌ی عمر حساب کاربری'),
    L([['Provisioning: create the account and give the right role.','Provisioning: ساختن حساب و دادن دسترسی درست بر اساس شغل.'],
       ['Authentication: prove who you are (password, biometrics, MFA).','Authentication: ثابت کن خودت هستی (رمز، اثر انگشت، MFA).'],
       ['Authorization: decide what you may access (roles, attributes, policies).','Authorization: تصمیم بگیر به چه چیزهایی اجازه داری (بر اساس نقش، ویژگی، قانون).'],
       ['De-provisioning: remove access the moment someone leaves or changes role.','De-provisioning: همین که کسی رفت یا شغلش عوض شد، دسترسی‌اش را بگیر.']]),
    TT('Bad de-provisioning leaves orphaned accounts and stale credentials. Keeping old permissions after role changes is privilege (access) creep. Automate with HR integration and review access regularly.',
      'اگر دسترسی‌ها را پس نگیری، «حساب یتیم» (orphaned) می‌ماند که صاحب ندارد ولی کار می‌کند. اگر بعد از عوض شدن شغل، دسترسی‌های قبلی بماند، به آن privilege creep می‌گویند. راه‌حل: اتصال خودکار به سیستم HR و بازبینی مرتب.'),

    H('Federation and SSO','Federation و SSO'),
    L([['SSO: log in once, use many apps. Less password fatigue, central control.','SSO: یک بار وارد شو، همه‌ی برنامه‌ها باز می‌شوند. مثل دستبند شهربازی.'],
       ['Federation: trust between an identity provider (IdP) and service providers (SPs) across organizations.','Federation: اعتماد بین دو سازمان. IdP می‌گوید «این آدم را می‌شناسم» و SP قبول می‌کند. مثل گذرنامه.']]),
    TB([['Standard','استاندارد'],['Used for','کاربرد'],['Remember','یادت بماند']],[
      [['SAML','SAML'],['Enterprise web SSO, XML-based','SSO در سایت‌های شرکتی، با XML'],['IdP sends an "assertion" to the SP','IdP یک «ادعانامه» برای SP می‌فرستد']],
      [['OAuth','OAuth'],['Token-based authorization for mobile apps and APIs','دادن دسترسی محدود با توکن، برای موبایل و API'],['"Log in with Google"; the app never sees your password','«ورود با گوگل»؛ برنامه هیچ‌وقت رمز تو را نمی‌بیند']],
      [['LDAP','LDAP'],['Query and manage directories like Active Directory','جستجو و مدیریت دفترچه‌ی کاربرها مثل Active Directory'],['A phone book of users and groups','دفترچه تلفن کاربرها و گروه‌ها']]]),

    H('Access control models','مدل‌های کنترل دسترسی'),
    TB([['Model','مدل'],['Who decides','چه کسی تصمیم می‌گیرد'],['Example','مثال']],[
      [['MAC (Mandatory)','MAC (اجباری)'],['Central authority, labels; users cannot change it','مقام مرکزی با برچسب؛ کاربر نمی‌تواند عوضش کند'],['Military: Top Secret files','ارتش: فایل‌های فوق سری']],
      [['DAC (Discretionary)','DAC (به اختیار صاحب)'],['The owner of the file','صاحب فایل'],['Sharing your own file','اشتراک فایل خودت در Google Drive']],
      [['RBAC (Role-based)','RBAC (بر اساس نقش)'],['Job role','شغل'],['All of Finance gets the accounting app','همه‌ی واحد مالی به حسابداری دسترسی دارند']],
      [['ABAC (Attribute-based)','ABAC (بر اساس ویژگی)'],['Many attributes: role, device, location, time','چند ویژگی: نقش، دستگاه، مکان، ساعت'],['Manager + company laptop + in Canada','مدیر + لپ‌تاپ شرکت + داخل کانادا']],
      [['Rule-based','Rule-based (بر اساس قانون)'],['Fixed rules for everyone','قانون ثابت برای همه'],['No logins after 10 p.m.','بعد از ساعت ۱۰ شب ورود ممنوع']]]),
    TT('Least privilege: give only the minimum access needed. Review access often to stop privilege creep.',
      'کمترین دسترسی (Least privilege): به هر کس فقط کلید اتاق‌هایی را بده که لازم دارد. مرتب بازبینی کن تا دسترسی اضافه جمع نشود.'),

    H('MFA: more than one kind of proof','MFA: بیشتر از یک نوع مدرک'),
    TB([['Factor','عامل'],['Example','مثال']],[
      [['Something you know','چیزی که می‌دانی'],['Password, PIN, passphrase','رمز، PIN، جمله‌ی عبور']],
      [['Something you have','چیزی که داری'],['Phone with authenticator app, smart card, token','گوشی با برنامه‌ی Authenticator، کارت هوشمند، توکن']],
      [['Something you are','چیزی که هستی'],['Fingerprint, face, iris','اثر انگشت، صورت، عنبیه']],
      [['Somewhere you are','جایی که هستی'],['Geolocation, IP address','موقعیت جغرافیایی، آدرس IP']]]),
    TT('MFA needs factors from DIFFERENT categories. Password + PIN is still one factor (both are something you know).',
      'MFA یعنی عامل‌ها از دسته‌های «مختلف» باشند. رمز + PIN هنوز یک دسته است، چون هر دو در ذهن توست.'),

    H('Passwords','رمز عبور'),
    L([['Long (12+), complex, unique for every account; never reuse work and personal passwords.','بلند (حداقل ۱۲ حرف)، پیچیده، و برای هر حساب جدا. هیچ‌وقت رمز کار و شخصی یکی نباشد.'],
       ['Avoid guessable patterns like "Password123!" or a pet name.','از الگوهای قابل حدس مثل «Password123!» یا اسم حیوان خانگی استفاده نکن.'],
       ['Lockout policies stop brute force. Expiration based on risk (e.g. 90 days for privileged accounts).','قفل شدن حساب جلوی حدس زدن پشت سر هم را می‌گیرد. رمز حساب‌های مهم مثلاً هر ۹۰ روز عوض شود.'],
       ['Password managers store and generate strong passwords. Passwordless (biometrics, smart cards, FIDO2 keys) removes the password entirely.','Password manager رمزها را برایت می‌سازد و نگه می‌دارد. Passwordless (اثر انگشت، کارت، کلید FIDO2) کلاً رمز را حذف می‌کند.']]),

    H('PAM: guarding the master keys','PAM: مراقبت از شاه‌کلیدها'),
    PP('Admin accounts can open every door, so attackers want them most. PAM (Privileged Access Management) controls and records how these accounts are used.',
      'حساب ادمین شاه‌کلید ساختمان است، برای همین هکرها بیشتر از همه دنبالش هستند. PAM کنترل می‌کند و ثبت می‌کند این حساب‌ها چطور استفاده می‌شوند.'),
    TB([['Feature','ویژگی'],['Simple idea','به زبان ساده']],[
      [['Just-in-time (JIT) access','JIT (دسترسی لحظه‌ای)'],['Admin rights only when needed, for a short time','کلید فقط وقتی کار داری و برای مدت کوتاه']],
      [['Password vaulting','Password vaulting (گاوصندوق)'],['Passwords kept and rotated in an encrypted vault; user never sees them','رمزها در گاوصندوق هستند و مرتب عوض می‌شوند؛ کاربر هیچ‌وقت خود رمز را نمی‌بیند']],
      [['Ephemeral credentials','Ephemeral (موقت)'],['Temporary credentials that expire by themselves','رمز یک‌بارمصرف که خودش باطل می‌شود، مثل بلیت مترو']]]),
    L([['Benefits: fewer insider threats, less lateral movement, better audits (ISO 27001, NIST SP 800-53, CIS Controls).','فایده‌ها: خطر کمتر از طرف کارمندان، هکر نمی‌تواند راحت در شبکه جابه‌جا شود، و ممیزی آسان‌تر است.']]),

    H('Secure protocols','پروتکل‌های امن'),
    TB([['Protocol','پروتکل'],['Protects','از چه محافظت می‌کند'],['Replaces','جای چه چیزی']],[
      [['TLS','TLS'],['Web and app traffic (HTTPS on TCP 443, FTPS)','ترافیک وب و برنامه (HTTPS روی پورت 443)'],['SSL','SSL']],
      [['IPSec','IPSec'],['All IP traffic in VPNs; AH = integrity, ESP = encryption','همه‌ی ترافیک IP در VPN؛ AH امضا، ESP رمزگذاری'],['Unprotected IP','IP بدون محافظت']],
      [['SSH','SSH'],['Remote command line, SFTP, tunneling','خط فرمان از راه دور، انتقال فایل SFTP'],['Telnet, FTP','Telnet و FTP']]]),
    TT('Avoid legacy clear-text protocols (Telnet, FTP). Prefer certificate-based authentication. This stops on-path (man-in-the-middle) attacks.',
      'پروتکل‌های قدیمی مثل Telnet و FTP همه چیز را بدون رمزگذاری می‌فرستند، مثل کارت‌پستال. از گواهی دیجیتال برای ورود استفاده کن تا حمله‌ی «مرد میانی» نشود.'),

    H('Firewalls and IDS/IPS','فایروال و IDS/IPS'),
    L([['Rules allow or deny by IP, port and protocol (e.g. block inbound TCP 23 Telnet).','قانون‌های فایروال بر اساس IP، پورت و پروتکل اجازه می‌دهند یا رد می‌کنند (مثلاً پورت 23 Telnet را ببند).'],
       ['ACLs: lists of allowed or denied traffic between IPs or networks, on routers and firewalls.','ACL: فهرست ترافیک مجاز و ممنوع بین شبکه‌ها، روی روتر و فایروال.'],
       ['Screened subnet (DMZ): public servers live here, separated from the internal network.','DMZ: سرورهای عمومی (وب، ایمیل) اینجا هستند، جدا از شبکه‌ی داخلی؛ مثل اتاق پذیرایی خانه.'],
       ['Best practice: default deny, review rules often, log denied traffic.','بهترین روش: پیش‌فرض همه چیز ممنوع، قانون‌ها را مرتب بازبینی کن، ترافیک ردشده را ثبت کن.']]),
    TB([['','' ],['IDS','IDS'],['IPS','IPS']],[
      [['Does','کارش'],['Detects and alerts (passive)','می‌بیند و هشدار می‌دهد (مثل دوربین)'],['Blocks in real time (inline)','همان لحظه جلویش را می‌گیرد (مثل نگهبان)']],
      [['Risk','خطر'],['Extra alerts','هشدار اضافه'],['False positives can block real users','خطای آن ممکن است کاربر واقعی را مسدود کند']]]),
    L([['Signature-based: matches known attacks. Anomaly-based: flags anything unusual. Trend analysis: unusual frequency or volume.','Signature-based: حمله‌های شناخته‌شده را با «عکسشان» پیدا می‌کند. Anomaly-based: هر چیز غیرعادی را گزارش می‌دهد. Trend analysis: تعداد یا حجم عجیب را می‌بیند.']]),

    H('Filtering the web, DNS and email','فیلتر وب، DNS و ایمیل'),
    L([['Web filtering: agent-based (on the device, works anywhere) or proxy-based (central, in the office). Techniques: URL scanning, content categories, custom rules, reputation services.','فیلتر وب: Agent-based روی خود دستگاه است و همه جا کار می‌کند؛ Proxy-based در شبکه‌ی شرکت است. روش‌ها: بررسی لینک، دسته‌بندی سایت‌ها (قمار، شبکه‌ی اجتماعی)، قانون دلخواه، و فهرست سایت‌های بدنام.'],
       ['DNS filtering: refuses to resolve known bad domains, so the connection never starts (e.g. Cisco Umbrella).','فیلتر DNS: اسم سایت بد را به IP تبدیل نمی‌کند، پس اصلاً وصل نمی‌شوی.'],
       ['Email gateways scan mail for spam, phishing, malware and BEC, and apply DLP and encryption.','دروازه‌ی ایمیل نامه‌ها را برای اسپم، فیشینگ و بدافزار می‌گردد.']]),
    TB([['Email check','بررسی ایمیل'],['Simple idea','به زبان ساده']],[
      [['SPF','SPF'],['Which servers may send for this domain','لیست پستچی‌های مجاز']],
      [['DKIM','DKIM'],['Digital signature proves the message was not changed','مهر و امضا روی نامه']],
      [['DMARC','DMARC'],['Uses SPF + DKIM; tells receivers what to do with failures, and reports','دستور نهایی: نامه‌ی جعلی را رد کن و گزارش بده']]]),

    H('Protecting operating systems','محافظت از سیستم‌عامل'),
    L([['Group Policy (Windows): central settings for the whole domain, such as disabling USB or locking the screen after 10 minutes.','Group Policy (ویندوز): قانون‌هایی که مدیر یک بار می‌نویسد و روی همه‌ی کامپیوترها اجرا می‌شود.'],
       ['SELinux: Linux kernel MAC policies that limit processes even when running as root.','SELinux: قانون MAC در لینوکس؛ حتی root هم نمی‌تواند هر کاری بکند. برنامه‌ی هک‌شده در قفس خودش می‌ماند.']]),

    H('Watching devices, data and users','مراقبت از دستگاه، داده و کاربر'),
    TB([['Tool','ابزار'],['Simple idea','به زبان ساده']],[
      [['DLP','DLP'],['Stops sensitive data leaving by email, USB or cloud upload','مأمور گمرک داده؛ نمی‌گذارد اطلاعات حساس بیرون برود']],
      [['NAC','NAC'],['Checks device health (patches, antivirus) before it joins; quarantines bad devices','نگهبان در شبکه؛ دستگاه ناسالم به VLAN مهمان می‌رود']],
      [['EDR','EDR'],['Detects and responds on each endpoint (isolate host, kill process)','نگهبان هوشمند روی هر دستگاه']],
      [['XDR','XDR'],['EDR extended across network, cloud, servers and identity','اتاق کنترلی که همه جا را با هم می‌بیند']],
      [['UBA','UBA'],['Learns normal user behavior and flags anomalies','عادت‌های کاربر را یاد می‌گیرد و رفتار عجیب را گزارش می‌دهد']]]),
    L([['Attestation: a device proves it is untampered (TPM, secure boot) before it gets access.','Attestation: دستگاه ثابت می‌کند دستکاری نشده (با TPM و secure boot)؛ مثل گواهی سلامت.'],
       ['Interoperability: IAM works across vendors and clouds through SAML and OAuth.','Interoperability: سیستم‌های شرکت‌های مختلف با SAML و OAuth با هم کار می‌کنند.']]),

    H('Three things that go wrong','سه اشتباه رایج'),
    TB([['Problem','مشکل'],['Fix','راه‌حل']],[
      [['Ex-employee VPN still active','VPN کارمند اخراجی هنوز کار می‌کند'],['Automated de-provisioning from HR, UBA, regular account audits','قطع خودکار دسترسی از طریق HR، UBA، بازبینی مرتب حساب‌ها']],
      [['Old firewall rule leaves RDP (3389) open','قانون قدیمی فایروال، RDP (پورت 3389) را باز گذاشته'],['Regular rule audits, least privilege, alerts on unusual external access','بازبینی مرتب قانون‌ها، کمترین دسترسی، هشدار برای اتصال‌های عجیب']],
      [['Reused weak passwords lead to credential stuffing','رمز تکراری و ضعیف باعث credential stuffing می‌شود'],['Strong unique passwords, MFA, password manager, dark web monitoring','رمز قوی و جدا، MFA، password manager، پایش دارک‌وب']]]),
    TT('Exam shortcut: IAM covers the WHOLE lifecycle, from onboarding to immediate offboarding. MFA, SSO, PAM, DLP, IDS/IPS, NAC and UBA work together as layers.',
      'نکته‌ی امتحان: IAM از روز اول ورود تا لحظه‌ی رفتن را پوشش می‌دهد. MFA، SSO، PAM، DLP، IDS/IPS، NAC و UBA مثل لایه‌های یک پیاز با هم کار می‌کنند.')
  ]};
})();
