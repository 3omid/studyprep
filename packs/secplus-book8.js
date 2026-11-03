/* Security+ extension: Section B8, matched to Chapter 8 ("Identity and Access Management") of the course
   textbook (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written
   for the chapter's objectives (1.2, 2.5, 4.6); no text or review questions from the book are copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secplus'});
  if(!pack)return;
  pack.sections['B8']={en:'Book Ch. 8: Identity and access management',fa:'فصل ۸ کتاب: مدیریت هویت و دسترسی'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b8_'+(++n),sec:'B8',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Identity & AAA',T2='SSO & federation',T3='Passwords & MFA',T4='Accounts & PAM',T5='Access control & permissions';

  /* ---- Identity & AAA ---- */
  M(T1,'A user types only their username on a login page and has not entered anything else yet. What has happened so far?',
    'کاربری فقط نام کاربری‌اش را در صفحه‌ی ورود تایپ کرده و هنوز چیز دیگری وارد نکرده. تا این لحظه چه اتفاقی افتاده؟',
    'نام کاربری خودش عامل احراز هویت نیست.',
    ['The user has claimed an identity','The user has been authenticated','The user has been authorized','The user\'s session has been accounted for'],
    ['کاربر یک هویت را ادعا کرده (Identification)','کاربر احراز هویت شده','کاربر مجوز گرفته','نشست کاربر حسابرسی شده'],
    'A username only claims (asserts) an identity. Authentication is proving the claim with a factor such as a password or token. Authorization then decides what the account may do, and accounting records what it did.',
    'نام کاربری فقط هویت را «ادعا» می‌کند. Authentication یعنی ثابت کردن این ادعا با یک عامل مثل رمز یا توکن. بعد Authorization تعیین می‌کند حساب چه کاری می‌تواند بکند و Accounting ثبت می‌کند چه کرده.');

  M(T1,'A VPN server records how long each user stayed connected and how much data they transferred. Which part of AAA is this?',
    'یک سرور VPN ثبت می‌کند هر کاربر چه مدت وصل بوده و چقدر داده جابه‌جا کرده. این کدام بخش AAA است؟',
    'ثبت مصرف منابع.',
    ['Accounting','Authentication','Authorization','Attestation'],
    ['Accounting (حسابرسی/ثبت مصرف)','Authentication (احراز هویت)','Authorization (مجوزدهی)','Attestation (گواهی دادن)'],
    'Accounting tracks what an authenticated user did and what resources they used, such as time, bandwidth or commands. RADIUS and TACACS+ both provide accounting.',
    'Accounting ثبت می‌کند کاربرِ احرازشده چه کرده و چه منابعی مصرف کرده، مثل زمان، پهنای باند یا دستورها. RADIUS و TACACS+ هر دو Accounting دارند.');

  M(T1,'A network team wants administrators\' router logins to use TCP, encrypt the whole packet and allow or block individual commands. Which AAA protocol fits best?',
    'تیم شبکه می‌خواهد ورود مدیران به روترها از TCP استفاده کند، کل بسته رمزگذاری شود و بتوان تک‌تک دستورها را اجازه داد یا بست. کدام پروتکل AAA بهتر است؟',
    'پروتکل ساخت Cisco با کنترل دستور به دستور.',
    ['TACACS+','RADIUS','CHAP','LDAP'],
    ['TACACS+','RADIUS','CHAP','LDAP'],
    'TACACS+ uses TCP, encrypts the full packet and can authorize each command separately, so it is popular for managing network devices. RADIUS protects only the password (with a shared secret and MD5) and is common for network access such as Wi-Fi and VPN.',
    'TACACS+ روی TCP کار می‌کند، کل بسته را رمز می‌کند و می‌تواند هر دستور را جدا مجوز دهد؛ برای مدیریت دستگاه‌های شبکه رایج است. RADIUS فقط رمز عبور را (با Shared secret و MD5) محافظت می‌کند و بیشتر برای دسترسی به شبکه مثل Wi-Fi و VPN است.');

  M(T1,'In Kerberos, what does a client send to the ticket-granting service when it wants to use a file server?',
    'در Kerberos، کلاینت وقتی می‌خواهد از یک فایل‌سرور استفاده کند، چه چیزی را برای Ticket-granting service می‌فرستد؟',
    'بلیتی که بعد از ورود اول گرفته.',
    ['Its ticket-granting ticket (TGT) and the name of the service','Its password in clear text','A SAML assertion from the identity provider','An OAuth access token'],
    ['TGT خودش و نام سرویس','رمز عبورش به صورت متن ساده','یک SAML assertion از IdP','یک OAuth access token'],
    'After the first login the authentication server gives the client a TGT, encrypted with the TGS key. To reach a service, the client sends the TGT and the service name to the TGS (usually part of the KDC), which returns a service ticket and session key. The password is not sent across the network.',
    'بعد از ورود اول، سرور احراز هویت یک TGT به کلاینت می‌دهد که با کلید TGS رمز شده. برای رسیدن به یک سرویس، کلاینت TGT و نام سرویس را به TGS (معمولاً بخشی از KDC) می‌فرستد و بلیت سرویس و کلید نشست می‌گیرد. رمز عبور روی شبکه فرستاده نمی‌شود.');

  M(T1,'In an 802.1X network, which role does a wireless access point play when it passes a laptop\'s login request to a RADIUS server?',
    'در یک شبکه‌ی 802.1X، اکسس‌پوینت بی‌سیم وقتی درخواست ورود یک لپ‌تاپ را به سرور RADIUS می‌رساند چه نقشی دارد؟',
    'سه نقش: Supplicant، Authenticator، Authentication server.',
    ['Authenticator','Supplicant','Authentication server','Relying party'],
    ['Authenticator (واسطه‌ی احراز هویت)','Supplicant (دستگاهی که می‌خواهد وصل شود)','Authentication server (سرور احراز هویت)','Relying party (طرف اعتمادکننده در Federation)'],
    'The supplicant is the device asking to join (the laptop). The authenticator is the switch, access point or wireless controller that relays the request. The authentication server, usually RADIUS, decides, often by checking a directory such as LDAP or Active Directory. EAP carries the messages.',
    'Supplicant دستگاهی است که می‌خواهد وصل شود (لپ‌تاپ). Authenticator سوئیچ، اکسس‌پوینت یا کنترلر بی‌سیم است که درخواست را می‌رساند. Authentication server، معمولاً RADIUS، تصمیم می‌گیرد و اغلب از دایرکتوری مثل LDAP یا AD کمک می‌گیرد. پیام‌ها را EAP حمل می‌کند.');

  M(T1,'Which protocol has the server send a random challenge, and the client answer with a hash made from the challenge and the shared secret, so the password itself is never sent?',
    'در کدام پروتکل سرور یک چالش تصادفی می‌فرستد و کلاینت با یک هش ساخته‌شده از چالش و رمز مشترک جواب می‌دهد، تا خود رمز هرگز فرستاده نشود؟',
    'جانشین امن‌تر PAP.',
    ['CHAP','PAP','LDAP','SAML'],
    ['CHAP','PAP (رمز را ساده می‌فرستد)','LDAP','SAML'],
    'CHAP uses a challenge and a three-way handshake: challenge, hashed response, then accept or reject. PAP sends the password in clear text, which is why CHAP replaced it.',
    'CHAP از چالش و دست‌دادن سه‌مرحله‌ای استفاده می‌کند: چالش، پاسخ هش‌شده، سپس پذیرش یا رد. PAP رمز را ساده می‌فرستد و به همین دلیل CHAP جای آن را گرفت.');

  /* ---- SSO & federation ---- */
  M(T2,'Employees log in once at their company\'s identity provider, and a cloud payroll app then accepts an XML-based assertion that they are authenticated. Which standard is this?',
    'کارمندان یک بار در IdP شرکت وارد می‌شوند و بعد یک اپ ابری حقوق، یک Assertion مبتنی بر XML را قبول می‌کند که آن‌ها احراز هویت شده‌اند. این کدام استاندارد است؟',
    'XML + IdP + SP.',
    ['SAML','OAuth','Kerberos','TACACS+'],
    ['SAML','OAuth','Kerberos','TACACS+'],
    'SAML is an XML-based open standard for passing authentication and authorization information from an identity provider to a service provider. It is widely used for web SSO and federation.',
    'SAML یک استاندارد باز مبتنی بر XML است که اطلاعات احراز هویت و مجوز را از IdP به SP می‌رساند. برای SSO وب و Federation خیلی رایج است.');

  M(T2,'A meeting app asks, "Allow this app to view and edit your calendar?" and never sees your account password. Which technology is doing this?',
    'یک اپ جلسه می‌پرسد «اجازه می‌دهی این اپ تقویمت را ببیند و ویرایش کند؟» و هرگز رمز حسابت را نمی‌بیند. کدام فناوری این کار را می‌کند؟',
    'مجوز دادن به اپ دیگر، بدون دادن رمز.',
    ['OAuth','LDAP','RADIUS','CHAP'],
    ['OAuth','LDAP','RADIUS','CHAP'],
    'OAuth is an authorization framework: the user approves a set of permissions (scopes) and the app gets an access token instead of the password. OpenID Connect adds authentication on top of OAuth; SAML is the other common federation standard.',
    'OAuth چارچوب «مجوزدهی» است: کاربر مجموعه‌ای از اجازه‌ها (Scope) را تأیید می‌کند و اپ به جای رمز یک Access token می‌گیرد. OpenID Connect روی OAuth احراز هویت اضافه می‌کند؛ SAML هم استاندارد رایج دیگر Federation است.');

  M(T2,'A directory stores entries in a tree of organizational units (OU) and common names (CN) and is often used behind SSO and email lookups. Which protocol is used to query it?',
    'یک دایرکتوری ورودی‌ها را در یک درخت از OU و CN نگه می‌دارد و اغلب پشت SSO و جستجوی ایمیل استفاده می‌شود. با کدام پروتکل از آن پرس‌وجو می‌شود؟',
    'دایرکتوری سلسله‌مراتبی.',
    ['LDAP','SAML','OAuth','EAP'],
    ['LDAP','SAML','OAuth','EAP'],
    'LDAP is a directory service protocol with a hierarchy (for example dc=example, ou=Security, cn=Alice). The exam lists it under SSO because many SSO and RADIUS setups check identities against an LDAP or Active Directory store. Because it holds so much organizational data, it must be well protected.',
    'LDAP پروتکل سرویس دایرکتوری با ساختار درختی است (مثلاً dc=example، ou=Security، cn=Alice). امتحان آن را زیر SSO آورده چون خیلی از SSOها و RADIUSها هویت را از LDAP یا Active Directory چک می‌کنند. چون داده‌ی زیادی از سازمان دارد، باید خوب محافظت شود.');

  M(T2,'Two partner companies federate. A software vendor in the federation trusts the partners\' identity providers and gives their users access to its app. What is the vendor\'s role?',
    'دو شرکت همکار Federation می‌سازند. یک فروشنده‌ی نرم‌افزار در این Federation به IdPهای همکارها اعتماد می‌کند و به کاربرانشان دسترسی به اپ خودش می‌دهد. نقش فروشنده چیست؟',
    'خودش احراز هویت نمی‌کند، فقط سرویس می‌دهد.',
    ['Service provider (relying party)','Identity provider','Principal','Certificate authority'],
    ['Service provider (طرف اعتمادکننده)','Identity provider (ارائه‌دهنده‌ی هویت)','Principal (کاربر)','Certificate authority (مرجع صدور گواهی)'],
    'In federation the principal is the user, the identity provider (IdP) authenticates the user and vouches for them, and the service provider or relying party trusts that assertion and provides the service.',
    'در Federation، Principal همان کاربر است، IdP کاربر را احراز هویت می‌کند و ضمانتش را می‌دهد، و SP یا Relying party به آن Assertion اعتماد می‌کند و سرویس را می‌دهد.');

  M(T2,'After a user logs in, the identity provider formally confirms to the service provider that the user is who they claim to be. What is this confirmation called?',
    'بعد از ورود کاربر، IdP به طور رسمی به SP تأیید می‌کند که کاربر همان کسی است که ادعا می‌کند. اسم این تأیید چیست؟',
    'یک «گواهی» رسمی که چیزی درست است.',
    ['Attestation','Identity proofing','Provisioning','Accounting'],
    ['Attestation (گواهی/تصدیق)','Identity proofing (اثبات هویت هنگام ساخت حساب)','Provisioning (ساخت حساب)','Accounting (حسابرسی)'],
    'Attestation is a formal statement that something is true; here the IdP attests that the user authenticated. Identity proofing is a different step: checking a person\'s real-world identity (for example a government ID) when the account is created.',
    'Attestation یعنی بیان رسمی این‌که چیزی درست است؛ این‌جا IdP گواهی می‌دهد که کاربر احراز هویت شده. Identity proofing مرحله‌ی دیگری است: بررسی هویت واقعی شخص (مثلاً کارت شناسایی دولتی) هنگام ساخت حساب.');

  M(T2,'Two companies use identity products from different vendors but still want their users to sign in to each other\'s web apps. What mainly makes this interoperability possible?',
    'دو شرکت از محصولات هویت فروشنده‌های مختلف استفاده می‌کنند اما می‌خواهند کاربرانشان به اپ‌های وب یکدیگر وارد شوند. چه چیزی بیشتر از همه این سازگاری (Interoperability) را ممکن می‌کند؟',
    'زبان مشترک.',
    ['Shared open standards such as SAML and OpenID Connect','Using the same password policy in both companies','Copying all user accounts into both directories','Turning off MFA for partner users'],
    ['استانداردهای باز مشترک مثل SAML و OpenID Connect','سیاست رمز یکسان در هر دو شرکت','کپی کردن همه‌ی حساب‌ها در هر دو دایرکتوری','خاموش کردن MFA برای کاربران همکار'],
    'Interoperability comes from standards both sides speak. SAML and OpenID Connect handle federated authentication, and OAuth handles authorization to protected resources. Copying accounts defeats the point of federation and creates extra accounts to manage.',
    'Interoperability از استانداردهایی می‌آید که هر دو طرف می‌فهمند. SAML و OpenID Connect احراز هویت فدره را انجام می‌دهند و OAuth مجوز دسترسی به منابع را. کپی کردن حساب‌ها هدف Federation را از بین می‌برد و حساب اضافه می‌سازد.');

  M(T2,'What is the main security trade-off of single sign-on (SSO)?',
    'اصلی‌ترین بده‌بستان امنیتی SSO چیست؟',
    'یک کلید برای همه‌ی درها.',
    ['One stolen login can open many systems, so strong MFA and extra checks for sensitive systems are needed','Users must remember more passwords','It cannot work with cloud services','It removes the need for authorization'],
    ['یک ورود دزدیده‌شده می‌تواند درِ خیلی از سیستم‌ها را باز کند؛ پس MFA قوی و بررسی اضافه برای سیستم‌های حساس لازم است','کاربر باید رمزهای بیشتری به خاطر بسپارد','با سرویس‌های ابری کار نمی‌کند','دیگر به Authorization نیازی نیست'],
    'SSO means fewer passwords and smoother work, but fewer identity boundaries. If the single login is compromised, the attacker reaches everything it covers. Organizations add MFA and may require extra authentication or a separate privileged account for high-security systems.',
    'SSO یعنی رمز کمتر و کار راحت‌تر، اما مرزهای هویتی کمتر. اگر همان یک ورود لو برود، مهاجم به همه‌ی سیستم‌های زیر پوشش آن می‌رسد. سازمان‌ها MFA اضافه می‌کنند و برای سیستم‌های خیلی حساس احراز هویت اضافه یا حساب مدیریتی جدا می‌خواهند.');

  /* ---- Passwords & MFA ---- */
  M(T3,'Which of these is in line with NIST SP 800-63B password guidance?',
    'کدام یک با راهنمای رمز عبور NIST SP 800-63B هم‌خوان است؟',
    'NIST طول را مهم‌تر از پیچیدگی می‌داند.',
    ['Favor long passwords, allow pasting, and block passwords found in breach lists','Require at least one special character in every password','Give users password hints to reduce help desk calls','Block pasting into password fields to stop malware'],
    ['رمز طولانی را ترجیح بده، Paste را اجازه بده و رمزهای لو رفته را رد کن','در هر رمز حداقل یک کاراکتر خاص اجباری باشد','برای کم کردن تماس با Help desk راهنمای رمز (Hint) بده','Paste در فیلد رمز را ببند تا بدافزار جلویش گرفته شود'],
    'NIST favors length over complexity, does not require special characters, allows ASCII and Unicode, allows pasting so password managers work, checks new passwords against known-compromised lists, and drops password hints. It also recommends MFA, lockout after repeated failures, and salted secure hashing.',
    'NIST طول را بر پیچیدگی ترجیح می‌دهد، کاراکتر خاص را اجباری نمی‌کند، ASCII و Unicode را قبول می‌کند، Paste را اجازه می‌دهد تا Password manager کار کند، رمز جدید را با فهرست رمزهای لو رفته چک می‌کند و Hint را حذف می‌کند. MFA، قفل حساب بعد از تلاش‌های ناموفق و هش امن با Salt را هم توصیه می‌کند.');

  M(T3,'A policy says the system remembers each user\'s last 12 passwords and will not accept any of them again. Which setting is this?',
    'یک سیاست می‌گوید سیستم ۱۲ رمز آخر هر کاربر را به یاد دارد و هیچ‌کدام را دوباره قبول نمی‌کند. این کدام تنظیم است؟',
    'جلوگیری از استفاده‌ی دوباره.',
    ['Password reuse limit (history)','Minimum password age','Password expiration','Password complexity'],
    ['محدودیت استفاده‌ی دوباره (History)','حداقل عمر رمز (Age)','انقضای رمز (Expiration)','پیچیدگی رمز (Complexity)'],
    'Reuse limits (password history) block old passwords. Minimum age stops users from changing the password many times in a row to cycle back to an old one. Expiration forces a change after a set time, and complexity requires a mix of character types.',
    'Reuse limit (تاریخچه‌ی رمز) رمزهای قبلی را رد می‌کند. Minimum age نمی‌گذارد کاربر پشت سر هم رمز را عوض کند تا به رمز قدیمی برگردد. Expiration بعد از مدتی تعویض را اجباری می‌کند و Complexity ترکیب انواع کاراکتر را می‌خواهد.');

  M(T3,'An app accepts a login only when the phone\'s GPS shows the user inside the company building. Which factor is the GPS check?',
    'یک اپ فقط وقتی ورود را قبول می‌کند که GPS گوشی نشان دهد کاربر داخل ساختمان شرکت است. بررسی GPS کدام عامل است؟',
    'مکان.',
    ['Somewhere you are','Something you have','Something you are','Something you know'],
    ['جایی که هستی (Somewhere you are)','چیزی که داری (Something you have)','چیزی که هستی (Something you are)','چیزی که می‌دانی (Something you know)'],
    'A location factor uses GPS, IP address or network location. The four exam factors are something you know (password, PIN), something you have (token, smartcard, security key), something you are (biometrics) and somewhere you are (location).',
    'عامل مکان از GPS، آدرس IP یا محل شبکه استفاده می‌کند. چهار عامل امتحان: چیزی که می‌دانی (رمز، PIN)، چیزی که داری (توکن، کارت هوشمند، کلید امنیتی)، چیزی که هستی (بیومتریک) و جایی که هستی (مکان).');

  M(T3,'A bank login asks for a password and then the answer to a security question. Is this multifactor authentication?',
    'ورود یک بانک اول رمز و بعد جواب یک سؤال امنیتی را می‌خواهد. آیا این احراز هویت چندعاملی است؟',
    'هر دو از یک نوع‌اند؟',
    ['No, both are something you know','Yes, because there are two separate steps','Yes, because the security question is something you have','No, because security questions are biometric'],
    ['نه، هر دو «چیزی که می‌دانی» هستند','بله، چون دو مرحله‌ی جدا دارد','بله، چون سؤال امنیتی «چیزی که داری» است','نه، چون سؤال امنیتی بیومتریک است'],
    'MFA needs factors of different types. Two knowledge factors are still single-factor (sometimes called two-step). Adding a token, an authenticator app or a fingerprint would make it MFA.',
    'MFA به عامل‌هایی از «نوع‌های مختلف» نیاز دارد. دو عامل دانستنی هنوز تک‌عاملی است (گاهی دومرحله‌ای می‌گویند). اضافه کردن توکن، اپ Authenticator یا اثر انگشت آن را MFA می‌کند.');

  M(T3,'A small key fob shows a new code each time its button is pressed. The fob and the server both keep a counter. What kind of one-time password is this?',
    'یک جاکلیدی کوچک هر بار که دکمه‌اش را فشار می‌دهی یک کد جدید نشان می‌دهد. جاکلیدی و سرور هر دو یک شمارنده نگه می‌دارند. این چه نوع رمز یک‌بارمصرفی است؟',
    'شمارنده = رویداد، نه زمان.',
    ['HOTP','TOTP','SMS OTP','Static backup code'],
    ['HOTP (بر پایه‌ی شمارنده/رویداد)','TOTP (بر پایه‌ی زمان)','کد پیامکی','کد پشتیبان ثابت'],
    'HOTP (HMAC-based OTP) uses a shared seed plus a counter that moves forward on each event, like a button press. TOTP uses the seed plus the current time, so each code is valid only for a short window (often 30 seconds), as in authenticator apps.',
    'HOTP از یک Seed مشترک و یک شمارنده استفاده می‌کند که با هر رویداد، مثل فشار دکمه، جلو می‌رود. TOTP از Seed و زمان فعلی استفاده می‌کند، پس هر کد فقط برای مدت کوتاهی (معمولاً ۳۰ ثانیه) معتبر است، مثل اپ‌های Authenticator.');

  M(T3,'At 2 a.m. an attacker who knows a user\'s password sends dozens of push approval requests until the tired user taps "Approve." What is this attack, and what helps stop it?',
    'ساعت ۲ بامداد مهاجمی که رمز کاربر را می‌داند ده‌ها درخواست تأیید Push می‌فرستد تا کاربرِ خسته «تأیید» را بزند. این چه حمله‌ای است و چه چیزی کمک می‌کند جلویش گرفته شود؟',
    'خسته کردن کاربر با درخواست زیاد.',
    ['MFA fatigue; use number matching or phishing-resistant security keys','SIM cloning; use longer passwords','Pass-the-hash; use password expiration','Brute force; use password hints'],
    ['MFA fatigue (خسته کردن با درخواست)؛ Number matching یا کلید امنیتی مقاوم در برابر فیشینگ','شبیه‌سازی SIM؛ رمز طولانی‌تر','Pass-the-hash؛ انقضای رمز','Brute force؛ راهنمای رمز'],
    'Flooding a user with prompts until they approve one is MFA fatigue (push bombing). Number matching makes the user type a code shown on the login screen, and FIDO2 security keys cannot be approved remotely. SMS codes have their own risk: SIM cloning or VoIP redirection.',
    'غرق کردن کاربر با درخواست تا یکی را تأیید کند MFA fatigue (Push bombing) است. Number matching کاربر را مجبور می‌کند کدی را که روی صفحه‌ی ورود است وارد کند، و کلید امنیتی FIDO2 از راه دور قابل تأیید نیست. کد پیامکی هم خطر خودش را دارد: شبیه‌سازی SIM یا هدایت از طریق VoIP.');

  M(T3,'A fingerprint reader sometimes refuses to unlock for the real, enrolled employee. Which error is this?',
    'یک دستگاه اثر انگشت گاهی برای خود کارمندِ ثبت‌شده باز نمی‌شود. این کدام خطاست؟',
    'آدم درست رد شده.',
    ['False rejection (Type I, FRR)','False acceptance (Type II, FAR)','Crossover error','Presentation attack'],
    ['رد اشتباه (Type I، FRR)','پذیرش اشتباه (Type II، FAR)','Crossover error (نقطه‌ی برابری)','حمله‌ی ارائه (جعل اثر انگشت)'],
    'Type I = false rejection (FRR): a legitimate user is refused. Type II = false acceptance (FAR): the wrong person is accepted, which is the more dangerous error. Making a system less strict lowers FRR but raises FAR; the ROC curve shows this trade-off.',
    'Type I = رد اشتباه (FRR): کاربر مجاز رد می‌شود. Type II = پذیرش اشتباه (FAR): آدم اشتباه پذیرفته می‌شود که خطرناک‌تر است. سهل‌گیرتر کردن سیستم FRR را کم و FAR را زیاد می‌کند؛ منحنی ROC این بده‌بستان را نشان می‌دهد.');

  M(T3,'An employee uses an authenticator app on their phone to get login codes. How is this classified?',
    'کارمندی برای گرفتن کد ورود از یک اپ Authenticator روی گوشی‌اش استفاده می‌کند. این چه دسته‌ای است؟',
    'نرم‌افزار، نه دستگاه مخصوص.',
    ['A soft token (something you have)','A hard token (something you know)','A biometric factor','A static code'],
    ['توکن نرم‌افزاری (چیزی که داری)','توکن سخت‌افزاری (چیزی که می‌دانی)','عامل بیومتریک','کد ثابت'],
    'A soft token is software, such as an authenticator app, that generates codes. A hard token is a dedicated physical device, such as a key fob or USB security key. Both count as something you have.',
    'توکن نرم‌افزاری (Soft token) نرم‌افزاری مثل اپ Authenticator است که کد می‌سازد. توکن سخت‌افزاری (Hard token) یک دستگاه فیزیکی مخصوص است، مثل جاکلیدی یا کلید امنیتی USB. هر دو «چیزی که داری» هستند.');

  M(T3,'In a passwordless login with a FIDO2 security key, where is the user\'s private key kept?',
    'در ورود بدون رمز با کلید امنیتی FIDO2، کلید خصوصی کاربر کجا نگه داشته می‌شود؟',
    'سرویس فقط کلید عمومی را دارد.',
    ['On the security key; the service stores only the public key','On the website\'s server, encrypted with the user\'s PIN','In the user\'s password manager','In the identity provider\'s LDAP directory'],
    ['روی خود کلید امنیتی؛ سرویس فقط کلید عمومی را نگه می‌دارد','روی سرور سایت، رمزشده با PIN کاربر','در Password manager کاربر','در دایرکتوری LDAP ارائه‌دهنده‌ی هویت'],
    'FIDO2 uses key pairs: the private key never leaves the authenticator, and the service gets only the public key. A PIN or fingerprint unlocks the key locally. Since there is no shared secret on the server, a breach or phishing site has nothing reusable to steal.',
    'FIDO2 از جفت کلید استفاده می‌کند: کلید خصوصی هرگز از دستگاه بیرون نمی‌رود و سرویس فقط کلید عمومی را دارد. PIN یا اثر انگشت کلید را به صورت محلی باز می‌کند. چون رازی روی سرور نیست، نفوذ به سرور یا سایت فیشینگ چیز قابل استفاده‌ای به دست نمی‌آورد.');

  /* ---- Accounts & PAM ---- */
  M(T4,'Before opening an online bank account, a customer must scan a government photo ID and take a live selfie that is matched to it. What is this step?',
    'قبل از باز کردن حساب بانکی آنلاین، مشتری باید کارت شناسایی دولتی عکس‌دار را اسکن کند و یک سلفی زنده بگیرد که با آن مقایسه می‌شود. این مرحله چیست؟',
    'ثابت کردن این‌که حساب برای همان آدم واقعی ساخته می‌شود.',
    ['Identity proofing','Federation','Attestation by a relying party','Just-in-time provisioning'],
    ['Identity proofing (اثبات هویت)','Federation','Attestation توسط Relying party','Provisioning لحظه‌ای'],
    'Identity proofing confirms that the real person is who they claim to be before the account is created, using things like government ID or details only they should know. It is part of provisioning and onboarding (NIST SP 800-63A covers it).',
    'Identity proofing قبل از ساخت حساب تأیید می‌کند که آدم واقعی همان کسی است که ادعا می‌کند، با کارت شناسایی دولتی یا اطلاعاتی که فقط خودش باید بداند. بخشی از Provisioning و Onboarding است (NIST SP 800-63A).');

  M(T4,'Three night-shift operators all log in with the same "ops" account. What is the biggest security problem?',
    'سه اپراتور شیفت شب همه با یک حساب مشترک «ops» وارد می‌شوند. بزرگ‌ترین مشکل امنیتی چیست؟',
    'بعد از یک حادثه، چه کسی چه کرده؟',
    ['No one can tell which person performed an action (no accountability)','The account will run out of storage','It breaks the time-of-day restriction','The account cannot use MFA at all'],
    ['نمی‌شود فهمید کدام نفر چه کاری کرده (پاسخگویی از بین می‌رود)','فضای ذخیره‌ی حساب پر می‌شود','محدودیت ساعت را می‌شکند','حساب اصلاً نمی‌تواند MFA داشته باشد'],
    'Shared and generic accounts break accountability because logs show only the account, not the person. The password is also known by many people and rarely changed. Give each person their own account and use delegation or groups for shared rights.',
    'حساب‌های مشترک پاسخگویی را از بین می‌برند چون لاگ فقط حساب را نشان می‌دهد نه آدم را. رمز هم دست چند نفر است و کمتر عوض می‌شود. به هر نفر حساب خودش را بده و برای حق‌های مشترک از Delegation یا گروه استفاده کن.');

  M(T4,'A backup application runs under its own account. Which rule is most important for this account?',
    'یک برنامه‌ی پشتیبان‌گیری با حساب مخصوص خودش اجرا می‌شود. مهم‌ترین قاعده برای این حساب چیست؟',
    'حساب برنامه است، نه آدم.',
    ['It should be a service account that is not used for interactive logins','It should be added to the guest group','It should share its password with the help desk','It should be deleted after each backup'],
    ['باید Service account باشد و برای ورود تعاملی (لاگین آدم) استفاده نشود','باید به گروه مهمان اضافه شود','رمزش باید با Help desk به اشتراک گذاشته شود','بعد از هر پشتیبان‌گیری باید حذف شود'],
    'Service accounts belong to applications and services. They should have only the rights the service needs and should not be used by people to log in, so misuse stands out in logs. Their credentials are often kept in a password vault.',
    'Service account مال برنامه‌ها و سرویس‌هاست. فقط باید حق‌هایی را داشته باشد که سرویس لازم دارد و آدم‌ها نباید با آن وارد شوند، تا سوءاستفاده در لاگ معلوم شود. رمزش اغلب در Password vault نگه داشته می‌شود.');

  M(T4,'An employee moved from sales to finance to IT over five years and still has access from all three jobs. What is this, and what control finds it?',
    'کارمندی در پنج سال از فروش به مالی و بعد به IT رفته و هنوز دسترسی هر سه شغل را دارد. این چیست و کدام کنترل آن را پیدا می‌کند؟',
    'دسترسی‌ها مثل خزه جمع شده‌اند.',
    ['Permission creep; regular access reviews with least privilege','Identity proofing; a new government ID check','Federation; adding a new identity provider','Password reuse; a longer password history'],
    ['Permission creep (انباشت مجوز)؛ بازبینی منظم دسترسی‌ها با اصل کمترین دسترسی','Identity proofing؛ بررسی دوباره‌ی کارت شناسایی','Federation؛ اضافه کردن IdP جدید','استفاده‌ی دوباره از رمز؛ تاریخچه‌ی رمز طولانی‌تر'],
    'Permission (privilege) creep is collecting rights over time that no longer match the current role. Regular access reviews and removing old rights at each role change fix it. Copying "the same access as the person they replace" spreads the problem to new hires.',
    'Permission creep یعنی جمع شدن مجوزها در طول زمان که دیگر با نقش فعلی جور نیست. بازبینی منظم دسترسی و حذف مجوزهای قدیمی در هر تغییر نقش آن را درست می‌کند. «همان دسترسی نفر قبلی را بده» مشکل را به کارمند جدید هم منتقل می‌کند.');

  M(T4,'An employee has left the company. According to good deprovisioning practice, what should happen to their account?',
    'کارمندی از شرکت رفته. طبق روش درست Deprovisioning، با حسابش چه باید کرد؟',
    'حساب خوابیده هدف مهاجم است.',
    ['Remove it and its rights promptly, after keeping any data the organization needs','Rename it and give it to the replacement','Keep it enabled in case the employee returns','Change the password and leave it in place'],
    ['حساب و مجوزهایش را سریع حذف کن، بعد از نگه داشتن داده‌هایی که سازمان لازم دارد','اسمش را عوض کن و به جانشین بده','فعال نگهش دار شاید برگردد','رمزش را عوض کن و همان‌جا بگذار'],
    'Deprovisioning removes the account, its permissions and related artifacts according to policy. Dormant or merely disabled accounts can be re-enabled or taken over by attackers, so deletion is usually preferred. New staff get their own new accounts.',
    'Deprovisioning طبق سیاست سازمان، حساب، مجوزها و آثار مربوطه را حذف می‌کند. حساب‌های خوابیده یا فقط غیرفعال‌شده ممکن است دوباره فعال یا توسط مهاجم تصاحب شوند، پس معمولاً حذف بهتر است. کارمند جدید حساب جدید خودش را می‌گیرد.');

  M(T4,'An administrator opens a PAM console, requests domain admin rights for two hours to apply a patch, and the rights are removed automatically afterwards. Which PAM feature is this?',
    'مدیری کنسول PAM را باز می‌کند، برای نصب یک وصله دسترسی Domain admin را برای دو ساعت درخواست می‌کند و بعد مجوز خودکار برداشته می‌شود. این کدام قابلیت PAM است؟',
    'مجوز فقط همان وقتی که لازم است.',
    ['Just-in-time (JIT) permissions','Password vaulting','Ephemeral credentials for guests','Time-of-day restriction'],
    ['مجوز لحظه‌ای (JIT)','Password vaulting (گاوصندوق رمز)','اعتبار موقت برای مهمان','محدودیت ساعت روز'],
    'JIT permissions are checked out only when needed and expire when the task or time window ends, which limits standing privilege and creep. Password vaulting lets users check out a privileged account\'s password (often without seeing it) with every use logged; vaults also keep root passwords available for emergencies.',
    'JIT یعنی مجوز فقط وقتی لازم است گرفته شود و بعد از کار یا مدت معین منقضی شود؛ این دسترسی دائمی و Creep را کم می‌کند. Password vaulting اجازه می‌دهد رمز حساب ممتاز را (اغلب بدون دیدنش) Check out کنی و هر استفاده ثبت شود؛ Vault رمزهای root را برای شرایط اضطراری هم در دسترس نگه می‌دارد.');

  M(T4,'A visiting auditor gets an account that is created for this week only and disables and deletes itself on Friday evening. What is this?',
    'به یک حسابرس مهمان حسابی داده می‌شود که فقط برای همین هفته ساخته شده و جمعه عصر خودش غیرفعال و حذف می‌شود. این چیست؟',
    'عمر کوتاه و از پیش تعیین‌شده.',
    ['An ephemeral account','A service account','A shared account','A privileged account with password vaulting'],
    ['حساب موقت (Ephemeral)','Service account','حساب مشترک','حساب ممتاز با Password vaulting'],
    'Ephemeral accounts or credentials have a limited, preset lifespan for a guest or a specific task. The key is choosing the right lifespan and making sure they really are deprovisioned when it ends.',
    'حساب یا اعتبار Ephemeral عمر محدود و از پیش تعیین‌شده برای یک مهمان یا یک کار خاص دارد. نکته‌ی اصلی این است که مدت درست انتخاب شود و واقعاً در پایان حذف شود.');

  /* ---- Access control & permissions ---- */
  M(T5,'On a system, every file has a sensitivity label set by the security administrator, and even a file\'s owner cannot give other users access. Which model is this?',
    'در یک سیستم، هر فایل برچسب حساسیتی دارد که مدیر امنیت تعیین کرده و حتی صاحب فایل هم نمی‌تواند به دیگران دسترسی بدهد. این کدام مدل است؟',
    'سیستم‌عامل سیاست مرکزی را اجبار می‌کند.',
    ['Mandatory access control (MAC)','Discretionary access control (DAC)','Role-based access control','Rule-based access control'],
    ['کنترل دسترسی اجباری (MAC)','کنترل دسترسی اختیاری (DAC)','کنترل دسترسی بر پایه‌ی نقش','کنترل دسترسی بر پایه‌ی قاعده'],
    'In MAC the operating system enforces a central policy and users cannot change it. Examples are SELinux and Windows Mandatory Integrity Control. In DAC, owners decide who gets access to their files.',
    'در MAC سیستم‌عامل یک سیاست مرکزی را اجبار می‌کند و کاربران نمی‌توانند آن را عوض کنند. مثال: SELinux و Mandatory Integrity Control ویندوز. در DAC صاحب فایل تصمیم می‌گیرد چه کسی دسترسی داشته باشد.');

  M(T5,'A firewall checks each connection against an ordered list of allow and deny entries before letting it through. Which access control scheme is this?',
    'یک فایروال هر اتصال را قبل از عبور با یک فهرست مرتب از ورودی‌های Allow و Deny مقایسه می‌کند. این کدام طرح کنترل دسترسی است؟',
    'ACL = فهرست قاعده‌ها.',
    ['Rule-based access control','Role-based access control','Attribute-based access control','Discretionary access control'],
    ['کنترل دسترسی بر پایه‌ی قاعده (Rule-based)','کنترل دسترسی بر پایه‌ی نقش (Role-based)','کنترل دسترسی بر پایه‌ی ویژگی (ABAC)','کنترل دسترسی اختیاری (DAC)'],
    'Rule-based access control (sometimes RuBAC) applies rules or access control lists (ACLs) to every request, regardless of who the user is. A firewall ruleset is the classic example. Role-based control instead grants rights based on job roles.',
    'Rule-based (گاهی RuBAC) برای هر درخواست، قاعده‌ها یا ACLها را اعمال می‌کند، بدون توجه به این‌که کاربر کیست. مثال کلاسیک: قوانین فایروال. Role-based به جای آن بر اساس نقش شغلی مجوز می‌دهد.');

  M(T5,'A policy says: allow access to the payroll API only if department = Finance AND the device is company-managed AND the request comes from Canada. Which model is this?',
    'یک سیاست می‌گوید: دسترسی به API حقوق فقط وقتی مجاز است که دپارتمان = مالی و دستگاه مدیریت‌شده‌ی شرکت باشد و درخواست از کانادا بیاید. این کدام مدل است؟',
    'ترکیب چند ویژگی کاربر، دستگاه و محیط.',
    ['Attribute-based access control (ABAC)','Role-based access control (RBAC)','Mandatory access control (MAC)','Discretionary access control (DAC)'],
    ['کنترل دسترسی بر پایه‌ی ویژگی (ABAC)','کنترل دسترسی بر پایه‌ی نقش (RBAC)','کنترل دسترسی اجباری (MAC)','کنترل دسترسی اختیاری (DAC)'],
    'ABAC decides using combinations of attributes about the user, resource and context, such as department, device state and location. It is very flexible and common for APIs, microservices and databases, but its rules can become complex to manage.',
    'ABAC با ترکیبی از ویژگی‌های کاربر، منبع و شرایط تصمیم می‌گیرد، مثل دپارتمان، وضعیت دستگاه و مکان. خیلی انعطاف‌پذیر است و برای API، میکروسرویس و پایگاه داده رایج است، اما مدیریت قاعده‌هایش می‌تواند پیچیده شود.');

  M(T5,'New cashiers are added to the "Cashier" group and automatically get exactly the system access that job needs. Which model is this?',
    'صندوق‌دارهای جدید به گروه «Cashier» اضافه می‌شوند و خودکار دقیقاً همان دسترسی‌ای را می‌گیرند که آن شغل لازم دارد. این کدام مدل است؟',
    'مجوز به شغل وصل است، نه به آدم.',
    ['Role-based access control (RBAC)','Rule-based access control','Mandatory access control (MAC)','Discretionary access control (DAC)'],
    ['کنترل دسترسی بر پایه‌ی نقش (RBAC)','کنترل دسترسی بر پایه‌ی قاعده','کنترل دسترسی اجباری (MAC)','کنترل دسترسی اختیاری (DAC)'],
    'RBAC ties permissions to roles and puts people in roles. Its three rules: role assignment (you can use only permissions of a role you were given), role authorization (your active role must be approved for you) and permission authorization (you can use only permissions your active role allows).',
    'RBAC مجوزها را به نقش‌ها وصل می‌کند و آدم‌ها را در نقش می‌گذارد. سه قاعده‌اش: Role assignment (فقط مجوزهای نقشی که به تو داده شده)، Role authorization (نقش فعالت باید برایت تأیید شده باشد) و Permission authorization (فقط مجوزهایی که نقش فعالت اجازه می‌دهد).');

  M(T5,'Active Directory is set so that warehouse staff can log on only between 6 a.m. and 6 p.m. on weekdays. Which control is this?',
    'Active Directory طوری تنظیم شده که کارکنان انبار فقط بین ۶ صبح تا ۶ عصر روزهای کاری بتوانند وارد شوند. این کدام کنترل است؟',
    'محدودیت زمان.',
    ['Time-of-day restriction','Just-in-time permission','Password expiration','Geographic restriction'],
    ['محدودیت ساعت روز (Time-of-day)','مجوز لحظه‌ای (JIT)','انقضای رمز','محدودیت جغرافیایی'],
    'Time-of-day restrictions (logon hours in Active Directory) limit when an account can be used. They make a stolen account less useful outside normal working hours.',
    'Time-of-day restriction (ساعات ورود در Active Directory) محدود می‌کند حساب چه زمانی قابل استفاده باشد. این‌طور حساب دزدیده‌شده بیرون از ساعت کاری کمتر به درد مهاجم می‌خورد.');

  M(T5,'An administrator runs "chmod 750 report.sh" on Linux. What permissions result?',
    'مدیری در لینوکس دستور «chmod 750 report.sh» را اجرا می‌کند. نتیجه چه مجوزهایی است؟',
    'r=4، w=2، x=1. ترتیب: Owner، Group، Others.',
    ['Owner rwx, group r-x, others no access (rwxr-x---)','Owner rwx, group rw-, others r-- (rwxrw-r--)','Owner r-x, group rwx, others no access (r-xrwx---)','Everyone can read, write and execute (rwxrwxrwx)'],
    ['صاحب rwx، گروه r-x، بقیه هیچ (rwxr-x---)','صاحب rwx، گروه rw-، بقیه r-- (rwxrw-r--)','صاحب r-x، گروه rwx، بقیه هیچ (r-xrwx---)','همه خواندن، نوشتن و اجرا (rwxrwxrwx)'],
    'Each digit is read (4) + write (2) + execute (1), in the order owner, group, others. 7 = rwx, 5 = r-x, 0 = ---. Linux file permissions are an example of discretionary access control because the owner sets them.',
    'هر رقم جمع Read (4) + Write (2) + Execute (1) است، به ترتیب صاحب، گروه، بقیه. 7 = rwx، 5 = r-x، 0 = ---. مجوزهای فایل لینوکس نمونه‌ی DAC هستند چون صاحب فایل تعیینشان می‌کند.');

  M(T5,'"ls -l" shows a file as -rw-r-----. Which numeric mode matches it?',
    'دستور «ls -l» فایلی را به شکل -rw-r----- نشان می‌دهد. کدام عدد با آن جور است؟',
    'اولین کاراکتر نوع فایل است (- یعنی فایل معمولی).',
    ['640','644','750','600'],
    ['640','644','750','600'],
    'The first character is the file type (- = regular file, d = directory). Then owner rw- = 4+2 = 6, group r-- = 4, others --- = 0, so 640. 644 would let everyone read it.',
    'اولین کاراکتر نوع فایل است (- = فایل معمولی، d = پوشه). بعد صاحب rw- = 4+2 = 6، گروه r-- = 4، بقیه --- = 0؛ پس 640. عدد 644 یعنی همه می‌توانند بخوانند.');

  M(T5,'On a Windows share, a team needs to read, change and delete files, but must not be able to change the file permissions. Which permission should they get?',
    'در یک اشتراک ویندوز، تیمی باید فایل‌ها را بخواند، تغییر دهد و حذف کند، اما نباید بتواند مجوزهای فایل را عوض کند. کدام مجوز را بگیرد؟',
    'یک پله پایین‌تر از Full control.',
    ['Modify','Full control','Read & execute','Read'],
    ['Modify (تغییر)','Full control (کنترل کامل)','Read & execute (خواندن و اجرا)','Read (خواندن)'],
    'Modify allows viewing, changing and deleting files. Full control adds changing permissions and taking ownership, so following least privilege it is kept for administrators. Read & execute allows running files but no changes.',
    'Modify اجازه‌ی دیدن، تغییر و حذف فایل‌ها را می‌دهد. Full control تغییر مجوزها و گرفتن مالکیت را هم اضافه می‌کند، پس طبق اصل کمترین دسترسی برای مدیرها می‌ماند. Read & execute اجرای فایل را بدون تغییر اجازه می‌دهد.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['B8']={t:['Book Ch. 8: Identity and access management','فصل ۸ کتاب: مدیریت هویت و دسترسی'],b:[
    PP('Matched to Chapter 8 of the course textbook (objectives 1.2, 2.5 and 4.6). These are short review notes in our own words; read the chapter itself for the full explanation.',
      'این بخش با فصل ۸ کتاب درس جور است (سرفصل‌های 1.2، 2.5 و 4.6). این‌ها یادداشت‌های کوتاه مرور به زبان خودمان است؛ توضیح کامل را در خود کتاب بخوان.'),

    H('Identity, authentication, authorization','هویت، احراز هویت، مجوزدهی'),
    L([['Identity = claims about a subject (person, device, app). Attributes can change (title, address); traits are inherent (height, eye color).','هویت = ادعاهایی درباره‌ی یک Subject (آدم، دستگاه، اپ). Attributeها قابل تغییرند (سمت، آدرس)؛ Traitها ذاتی‌اند (قد، رنگ چشم).'],
       ['Claim an identity with: username, certificate, token, SSH key, smartcard. A username is NOT an authentication factor.','ادعای هویت با: نام کاربری، گواهی، توکن، کلید SSH، کارت هوشمند. نام کاربری عامل احراز هویت نیست.'],
       ['AAA: Authentication (prove who you are) → Authorization (what you may do) → Accounting (record what you did and used).','AAA: احراز هویت (ثابت کن کی هستی) ← مجوزدهی (چه کاری مجازی) ← حسابرسی (ثبت کارها و مصرف).']]),
    TB([['Protocol','پروتکل'],['Key facts','نکته‌های اصلی']],[
      [['RADIUS','RADIUS'],['AAA for network access (Wi-Fi, VPN); UDP or TCP; only the password is obscured (shared secret + MD5)','AAA برای دسترسی شبکه (Wi-Fi، VPN)؛ UDP یا TCP؛ فقط رمز پنهان می‌شود (Shared secret + MD5)']],
      [['TACACS+','TACACS+'],['Cisco; TCP; encrypts the full packet; per-command authorization for device admins','Cisco؛ TCP؛ کل بسته را رمز می‌کند؛ مجوز دستور به دستور برای مدیران دستگاه']],
      [['Kerberos','Kerberos'],['Tickets: TGT from the authentication server, then service tickets from the TGS (KDC); realms; used in Windows domains','بلیت: TGT از سرور احراز هویت، بعد بلیت سرویس از TGS (KDC)؛ Realm؛ در دامنه‌ی ویندوز']],
      [['CHAP','CHAP'],['Challenge + hashed response; password never sent (PAP sends it in clear)','چالش + پاسخ هش‌شده؛ رمز فرستاده نمی‌شود (PAP آن را ساده می‌فرستد)']],
      [['802.1X / EAP','802.1X / EAP'],['Port-based NAC: supplicant → authenticator (switch/AP) → authentication server (RADIUS) → directory (LDAP/AD)','کنترل دسترسی پورت: Supplicant ← Authenticator (سوئیچ/AP) ← سرور (RADIUS) ← دایرکتوری (LDAP/AD)']]]),

    H('SSO and federation','SSO و Federation'),
    TB([['Technology','فناوری'],['Does what','کارش']],[
      [['LDAP','LDAP'],['Directory service (tree of OU, CN, DN); identity store behind SSO','سرویس دایرکتوری (درخت OU، CN، DN)؛ منبع هویت پشت SSO']],
      [['SAML','SAML'],['XML assertions from IdP to SP; web SSO and federation (authentication + authorization info)','Assertion با XML از IdP به SP؛ SSO وب و Federation']],
      [['OAuth','OAuth'],['Authorization: app gets an access token with limited scopes, never your password','مجوزدهی: اپ یک Access token با دامنه‌ی محدود می‌گیرد، نه رمز تو']],
      [['OpenID Connect','OpenID Connect'],['Authentication on top of OAuth ("Log in with Google"); not in the exam outline','احراز هویت روی OAuth («ورود با گوگل»)؛ در سرفصل امتحان نیست']]]),
    L([['Federation roles: principal (user), identity provider (IdP: authenticates and attests), service provider / relying party (trusts the IdP and gives the service).','نقش‌ها: Principal (کاربر)، IdP (احراز هویت و گواهی)، SP یا Relying party (به IdP اعتماد می‌کند و سرویس می‌دهد).'],
       ['Attestation = the IdP formally vouching that the user is who they claim. Interoperability = shared standards (SAML, OIDC, OAuth) let different products work together.','Attestation = ضمانت رسمی IdP که کاربر همان است. Interoperability = استانداردهای مشترک (SAML، OIDC، OAuth) محصولات مختلف را با هم سازگار می‌کنند.'],
       ['SSO trade-off: convenience vs one login opening many systems. Add MFA and step-up authentication for sensitive systems.','بده‌بستان SSO: راحتی در برابر این‌که یک ورود درِ خیلی سیستم‌ها را باز می‌کند. MFA و احراز هویت اضافه برای سیستم‌های حساس.']]),

    H('Passwords','رمز عبور'),
    TB([['Setting','تنظیم'],['Stops','جلوی چه را می‌گیرد']],[
      [['Length','طول'],['Brute force (the strongest single setting)','Brute force (قوی‌ترین تنظیم)']],
      [['Complexity','پیچیدگی'],['Small character sets, common words, repeats','مجموعه‌ی کاراکتر کوچک، کلمه‌های رایج، تکرار']],
      [['Reuse (history)','استفاده‌ی دوباره'],['Going back to an old, maybe exposed password','برگشت به رمز قدیمی که شاید لو رفته']],
      [['Expiration (max age)','انقضا'],['Using one password for too long','استفاده‌ی خیلی طولانی از یک رمز']],
      [['Minimum age','حداقل عمر'],['Changing many times in a row to beat the history rule','تعویض پشت سر هم برای دور زدن History']]]),
    L([['NIST SP 800-63B: length over complexity, no forced special characters, allow pasting and Unicode, screen against breached passwords, no hints, MFA, lockout, salted hashing.','NIST SP 800-63B: طول به جای پیچیدگی، بدون کاراکتر خاص اجباری، اجازه‌ی Paste و Unicode، چک با رمزهای لو رفته، بدون Hint، MFA، قفل حساب، هش با Salt.'],
       ['Password managers (1Password, Bitwarden, Keychain, Credential Manager) reduce reuse and make long passwords practical, but the vault itself becomes a high-value target.','Password manager (1Password، Bitwarden، Keychain، Credential Manager) استفاده‌ی دوباره را کم و رمز طولانی را عملی می‌کند، اما خود Vault هدف باارزشی می‌شود.'],
       ['Passwordless: security key (FIDO2) or biometrics; private key stays on the device, the service has only the public key.','بدون رمز: کلید امنیتی (FIDO2) یا بیومتریک؛ کلید خصوصی روی دستگاه می‌ماند و سرویس فقط کلید عمومی دارد.']]),

    H('Multifactor authentication','احراز هویت چندعاملی'),
    TB([['Factor','عامل'],['Examples','مثال']],[
      [['Something you know','چیزی که می‌دانی'],['Password, PIN, security question','رمز، PIN، سؤال امنیتی']],
      [['Something you have','چیزی که داری'],['Smartcard, hard token, soft token app, USB/Bluetooth security key','کارت هوشمند، توکن سخت‌افزاری، اپ توکن نرم‌افزاری، کلید امنیتی USB/بلوتوث']],
      [['Something you are','چیزی که هستی'],['Fingerprint, face, iris, retina, voice, veins, gait','اثر انگشت، چهره، عنبیه، شبکیه، صدا، رگ، طرز راه رفتن']],
      [['Somewhere you are','جایی که هستی'],['GPS, IP or network location','GPS، IP یا محل شبکه']]]),
    L([['MFA needs different factor TYPES. Password + security question = still one factor.','MFA به «نوع‌های» مختلف عامل نیاز دارد. رمز + سؤال امنیتی = هنوز یک عامل.'],
       ['TOTP = seed + time (authenticator apps). HOTP = seed + counter (button-press tokens). SMS OTP is weakest (SIM cloning, VoIP redirect). Static backup codes must be stored safely.','TOTP = Seed + زمان (اپ Authenticator). HOTP = Seed + شمارنده (توکن دکمه‌ای). کد پیامکی ضعیف‌ترین است (شبیه‌سازی SIM، هدایت VoIP). کدهای پشتیبان ثابت باید امن نگه داشته شوند.'],
       ['MFA fatigue: flooding push prompts until the user approves. Defenses: number matching, FIDO2 keys, user training.','MFA fatigue: غرق کردن کاربر با Push تا تأیید کند. دفاع: Number matching، کلید FIDO2، آموزش.'],
       ['Biometric errors: Type I = false rejection (FRR); Type II = false acceptance (FAR, more dangerous). ROC curve compares them; fingerprints and face are the most widely accepted.','خطای بیومتریک: Type I = رد اشتباه (FRR)؛ Type II = پذیرش اشتباه (FAR، خطرناک‌تر). منحنی ROC آن‌ها را مقایسه می‌کند؛ اثر انگشت و چهره پذیرفته‌شده‌ترین‌اند.']]),

    H('Accounts and privileged access management','حساب‌ها و مدیریت دسترسی ممتاز'),
    L([['Account types: user, privileged/administrative (root, Administrator), shared/generic (no accountability; avoid), guest (very limited), service (for apps; no interactive login).','نوع حساب: کاربر، ممتاز/مدیر (root، Administrator)، مشترک (بدون پاسخگویی؛ پرهیز کن)، مهمان (خیلی محدود)، سرویس (برای برنامه؛ بدون ورود تعاملی).'],
       ['Provisioning: create the account, identity-proof the person (government ID, known details), assign least-privilege rights and groups, train them.','Provisioning: ساخت حساب، Identity proofing (کارت شناسایی، اطلاعات شخصی)، دادن مجوز و گروه با کمترین دسترسی، آموزش.'],
       ['Permission creep: rights pile up as people change roles. Fix with access reviews; do not copy "the same access as the last person."','Permission creep: با تغییر نقش، مجوزها جمع می‌شوند. با بازبینی دسترسی درستش کن؛ «همان دسترسی نفر قبلی» را کپی نکن.'],
       ['Deprovisioning: remove the account and its rights when someone leaves; deletion beats leaving it disabled.','Deprovisioning: وقتی کسی می‌رود حساب و مجوزهایش را حذف کن؛ حذف بهتر از غیرفعال گذاشتن است.']]),
    TB([['PAM feature','قابلیت PAM'],['Idea','ایده']],[
      [['Just-in-time permissions','مجوز لحظه‌ای (JIT)'],['Check out rights only when needed; they expire automatically','مجوز فقط وقت نیاز؛ خودکار منقضی می‌شود']],
      [['Password vaulting','گاوصندوق رمز'],['Check out privileged passwords with logging; keeps root passwords ready for outages','گرفتن رمز ممتاز با ثبت لاگ؛ رمز root برای اضطرار آماده است']],
      [['Ephemeral accounts/credentials','حساب/اعتبار موقت'],['Short preset lifespan, then deprovisioned','عمر کوتاه از پیش تعیین‌شده، بعد حذف']]]),

    H('Access control schemes','طرح‌های کنترل دسترسی'),
    TB([['Model','مدل'],['Who decides / how','چه کسی / چطور تصمیم می‌گیرد']],[
      [['MAC (mandatory)','MAC (اجباری)'],['OS enforces central labels/policy; users cannot change it (SELinux, Windows MIC)','سیستم‌عامل برچسب/سیاست مرکزی را اجبار می‌کند؛ کاربر نمی‌تواند عوض کند']],
      [['DAC (discretionary)','DAC (اختیاری)'],['Owner grants access (Linux file permissions, sharing a file with Fred)','صاحب فایل دسترسی می‌دهد (مجوزهای فایل لینوکس، اشتراک فایل با یک نفر)']],
      [['Role-based (RBAC)','بر پایه‌ی نقش'],['Permissions attached to job roles (cashier, DBA)','مجوز به نقش شغلی وصل است']],
      [['Rule-based (RuBAC)','بر پایه‌ی قاعده'],['Rules/ACLs checked on each request (firewall ruleset)','قاعده/ACL روی هر درخواست (قوانین فایروال)']],
      [['ABAC','ABAC'],['Combinations of user, resource and context attributes; flexible but complex','ترکیب ویژگی‌های کاربر، منبع و شرایط؛ منعطف اما پیچیده']]]),
    L([['Time-of-day restrictions: logon hours (Active Directory). Least privilege: only the minimum rights a role needs.','محدودیت ساعت: ساعات ورود (Active Directory). کمترین دسترسی: فقط حداقل مجوزی که نقش لازم دارد.'],
       ['Linux: drwxrwxrwx = type, then owner, group, others. r=4, w=2, x=1 (755 = rwxr-xr-x, 644 = rw-r--r--, 640 = rw-r-----).','لینوکس: drwxrwxrwx = نوع، بعد صاحب، گروه، بقیه. r=4، w=2، x=1 (755 = rwxr-xr-x، 644 = rw-r--r--، 640 = rw-r-----).'],
       ['Windows NTFS: Full control (incl. change permissions/ownership) > Modify (read, change, delete) > Read & execute > Read; Write is separate. Deny overrides allow.','ویندوز NTFS: Full control (شامل تغییر مجوز/مالکیت) > Modify (خواندن، تغییر، حذف) > Read & execute > Read؛ Write جداست. Deny بر Allow غلبه دارد.']]),

    TT('Exam shortcut: SAML = XML SSO between IdP and SP; OAuth = authorization (tokens, no password); LDAP = directory. Owner decides = DAC; admin labels = MAC; job = RBAC; firewall/ACL = rule-based; many attributes = ABAC. Min age stops cycling back to an old password.',
      'نکته‌ی امتحان: SAML = SSO با XML بین IdP و SP؛ OAuth = مجوزدهی (توکن، بدون رمز)؛ LDAP = دایرکتوری. صاحب تصمیم می‌گیرد = DAC؛ برچسب مدیر = MAC؛ شغل = RBAC؛ فایروال/ACL = Rule-based؛ چند ویژگی = ABAC. Minimum age جلوی برگشت به رمز قدیمی را می‌گیرد.')
  ]};
})();
