/* Security+ extension: Section B7, matched to Chapter 7 ("Cryptography and the PKI") of the course
   textbook (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written
   for objectives 1.4, 2.3 and 2.4; no text or review questions from the book are copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secbook'});
  if(!pack)return;
  pack.sections['7']={en:'Cryptography & PKI',fa:'رمزنگاری و PKI'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b7_'+(++n),sec:'7',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Goals & basics',T2='Symmetric & asymmetric',T3='Hashing & signatures',T4='PKI & certificates',T5='Attacks & emerging';

  /* ---- Goals & basics ---- */
  M(T1,'A company encrypts every laptop drive so data is safe if a laptop is stolen. Which goal of cryptography is this?',
    'شرکتی دیسک همه‌ی لپ‌تاپ‌ها را رمزگذاری می‌کند تا اگر لپ‌تاپی دزدیده شد داده امن بماند. این کدام هدف رمزنگاری است؟',
    'دزد نباید بتواند بخواند.',
    ['Confidentiality','Integrity','Non-repudiation','Availability'],
    ['محرمانگی (Confidentiality)','یکپارچگی (Integrity)','عدم انکار (Non-repudiation)','دسترس‌پذیری'],
    'The four goals of cryptography are confidentiality, integrity, authentication and non-repudiation. Note: availability is in the CIA triad, but it is not a goal of cryptography.',
    'چهار هدف رمزنگاری: محرمانگی، یکپارچگی، احراز هویت و عدم انکار. توجه: دسترس‌پذیری در CIA هست، اما هدف رمزنگاری نیست.');

  M(T1,'Which encryption level protects everything on a drive, including the operating system, but leaves data readable once the system is booted and unlocked?',
    'کدام سطح رمزگذاری همه‌چیز روی دیسک، حتی سیستم‌عامل، را محافظت می‌کند، اما وقتی سیستم بوت و باز شد داده خوانا می‌شود؟',
    'کل دیسک.',
    ['Full-disk encryption','File-level encryption','Record-level encryption','Transport encryption'],
    ['رمزگذاری کل دیسک (FDE)','رمزگذاری سطح فایل','رمزگذاری سطح رکورد','رمزگذاری انتقال'],
    'Levels: full-disk (whole drive incl. OS), partition (one partition), volume (a set volume of folders/files), file (single files), database (TDE whole DB or column-level) and record (individual rows). FDE protects against theft, not a compromise of the running system.',
    'سطح‌ها: کل دیسک (همه‌ی درایو با سیستم‌عامل)، پارتیشن (یک پارتیشن)، Volume (مجموعه‌ای از پوشه/فایل)، فایل (فایل تکی)، پایگاه داده (TDE کل DB یا سطح ستون) و رکورد (ردیف‌های تکی). FDE در برابر دزدی محافظت می‌کند، نه نفوذ به سیستم روشن.');

  M(T1,'A shared HR database must let each manager see only the encrypted rows of their own team. Which encryption level fits best?',
    'یک پایگاه داده‌ی مشترک منابع انسانی باید اجازه دهد هر مدیر فقط ردیف‌های رمزشده‌ی تیم خودش را ببیند. کدام سطح رمزگذاری بهتر است؟',
    'دانه‌دانه، برای هر ردیف.',
    ['Record-level encryption','Full-disk encryption','Partition encryption','Transparent encryption of the whole database only'],
    ['رمزگذاری سطح رکورد','رمزگذاری کل دیسک','رمزگذاری پارتیشن','فقط رمزگذاری شفاف کل پایگاه داده'],
    'Record-level encryption protects individual rows, giving fine control in shared environments. Database-level options are Transparent Data Encryption (whole database) and column-level encryption.',
    'رمزگذاری سطح رکورد ردیف‌های تکی را محافظت می‌کند و در محیط مشترک کنترل دقیق می‌دهد. گزینه‌های سطح پایگاه داده: TDE (کل پایگاه داده) و رمزگذاری سطح ستون.');

  M(T1,'A suspect posts many ordinary-looking photos to a forum. Investigators think secret data is hidden in the images\' least significant bits. What technique is this?',
    'یک مظنون عکس‌های عادی زیادی در یک انجمن می‌گذارد. بازرسان فکر می‌کنند داده‌ی مخفی در کم‌ارزش‌ترین بیت‌های تصویرها پنهان شده. این کدام روش است؟',
    'پنهان کردن در دید آشکار.',
    ['Steganography','Homomorphic encryption','Key stretching','Tokenization'],
    ['استگانوگرافی (Steganography)','رمزگذاری همریخت','کشش کلید','توکن‌سازی'],
    'Steganography hides messages inside other files (images, audio, video) by changing bits too small to notice. It has legitimate uses too, such as digital watermarks to trace copies.',
    'استگانوگرافی پیام را داخل فایل‌های دیگر (تصویر، صدا، ویدیو) با تغییر بیت‌هایی که دیده نمی‌شوند پنهان می‌کند. کاربرد مشروع هم دارد، مثل واترمارک دیجیتال برای ردیابی کپی‌ها.');

  M(T1,'Which statement reflects Kerckhoffs\' principle?',
    'کدام جمله اصل Kerckhoffs را بیان می‌کند؟',
    '«دشمن سیستم را می‌شناسد.»',
    ['A system should stay secure even if all but the key is public','Algorithms must always be kept secret from attackers','Longer keys are never needed if the algorithm is strong','Only governments may design ciphers for public use'],
    ['سیستم باید حتی اگر همه‌چیز جز کلید عمومی باشد امن بماند','الگوریتم‌ها باید همیشه از مهاجم مخفی بمانند','اگر الگوریتم قوی باشد کلید طولانی‌تر هیچ‌وقت لازم نیست','فقط دولت‌ها می‌توانند رمز برای استفاده‌ی عمومی طراحی کنند'],
    'Modern cryptography relies on secret keys, not secret algorithms. Public algorithms get reviewed and weak ones are found and dropped. "Security through obscurity" is not a reliable approach.',
    'رمزنگاری مدرن به کلید مخفی تکیه دارد، نه الگوریتم مخفی. الگوریتم‌های عمومی بررسی می‌شوند و ضعیف‌ها پیدا و کنار گذاشته می‌شوند. «امنیت با پنهان‌کاری» روش قابل اعتمادی نیست.');

  M(T1,'Which cipher type encrypts one bit or character of the data at a time?',
    'کدام نوع رمز داده را یک بیت یا یک کاراکتر در هر بار رمز می‌کند؟',
    'مثل جریان آب.',
    ['Stream cipher','Block cipher','Transposition cipher','Hash function'],
    ['رمز جریانی (Stream cipher)','رمز قطعه‌ای (Block cipher)','رمز جابه‌جایی','تابع هش'],
    'Stream ciphers work on one bit or character at a time (Caesar cipher, one-time pad). Block ciphers work on whole blocks at once, and most modern algorithms, like AES, are block ciphers.',
    'رمز جریانی هر بار روی یک بیت یا کاراکتر کار می‌کند (رمز سزار، One-time pad). رمز قطعه‌ای روی کل یک قطعه با هم کار می‌کند و بیشتر الگوریتم‌های مدرن مثل AES رمز قطعه‌ای‌اند.');

  M(T1,'ROT13 shifts every letter 13 places. Why can the same operation both encrypt and decrypt?',
    'ROT13 هر حرف را ۱۳ جا جابه‌جا می‌کند. چرا همین عمل هم رمز می‌کند هم رمزگشایی؟',
    'الفبای انگلیسی ۲۶ حرف دارد.',
    ['13 is half of 26, so shifting twice returns to the start','ROT13 uses a public key to encrypt and a private one to decrypt','ROT13 is a hash function, so it gives the same result twice','The key changes for every letter, so it cancels itself out'],
    ['۱۳ نصف ۲۶ است، پس دو بار جابه‌جایی به اول برمی‌گردد','ROT13 با کلید عمومی رمز و با کلید خصوصی باز می‌کند','ROT13 یک تابع هش است، پس دو بار همان نتیجه را می‌دهد','کلید برای هر حرف عوض می‌شود، پس خودش را خنثی می‌کند'],
    'ROT13 and the Caesar cipher (shift 3) are simple substitution ciphers. Vigenère is polyalphabetic (a keyword creates several alphabets). Transposition ciphers, like columnar transposition, rearrange letters instead of replacing them.',
    'ROT13 و رمز سزار (جابه‌جایی ۳) رمزهای جایگزینی ساده‌اند. Vigenère چندالفبایی است (یک کلمه‌ی کلیدی چند الفبا می‌سازد). رمزهای جابه‌جایی مثل Columnar transposition به جای جایگزین کردن، حروف را جابه‌جا می‌کنند.');

  /* ---- Symmetric & asymmetric ---- */
  M(T2,'Two coworkers use a symmetric algorithm. Which key does the sender use to encrypt?',
    'دو همکار از یک الگوریتم متقارن استفاده می‌کنند. فرستنده با کدام کلید رمز می‌کند؟',
    'متقارن = یک کلید مشترک.',
    ['The shared secret key','The recipient\'s public key','The sender\'s private key','The CA\'s public key'],
    ['کلید مخفی مشترک','کلید عمومی گیرنده','کلید خصوصی فرستنده','کلید عمومی CA'],
    'Symmetric encryption uses one shared secret key to both encrypt and decrypt. It is fast and good for bulk data, but key exchange is hard, it does not scale, and it gives no non-repudiation.',
    'رمزگذاری متقارن از یک کلید مخفی مشترک برای رمز و رمزگشایی استفاده می‌کند. سریع و مناسب داده‌ی حجیم است، اما تبادل کلید سخت است، مقیاس‌پذیر نیست و عدم انکار نمی‌دهد.');

  M(T2,'A team of 20 people needs private symmetric keys between every pair. How many keys are required?',
    'تیمی ۲۰ نفره بین هر دو نفر کلید متقارن خصوصی لازم دارد. چند کلید لازم است؟',
    'n(n−1)/2.',
    ['190','40','20','380'],
    ['۱۹۰','۴۰','۲۰','۳۸۰'],
    'Symmetric keys needed = n(n−1)/2 = 20×19/2 = 190. Asymmetric needs only 2 keys per person = 40. That difference is why symmetric systems do not scale.',
    'تعداد کلید متقارن = n(n−1)/2 = ۲۰×۱۹/۲ = ۱۹۰. نامتقارن فقط ۲ کلید برای هر نفر لازم دارد = ۴۰. همین تفاوت دلیل مقیاس‌پذیر نبودن سیستم متقارن است.');

  M(T2,'A symmetric system already has 10 users. How many NEW keys are needed when an 11th person joins?',
    'یک سیستم متقارن ۱۰ کاربر دارد. وقتی نفر یازدهم اضافه شود چند کلید جدید لازم است؟',
    'نفر جدید با هر کدام از ۱۰ نفر یک کلید لازم دارد.',
    ['10','1','2','55'],
    ['۱۰','۱','۲','۵۵'],
    'The new person needs a separate shared key with each of the 10 existing users: 10 new keys (total goes from 45 to 55). In an asymmetric system, only 2 new keys (one key pair) are needed.',
    'نفر جدید با هر یک از ۱۰ کاربر فعلی یک کلید مشترک جدا لازم دارد: ۱۰ کلید جدید (کل از ۴۵ به ۵۵ می‌رسد). در سیستم نامتقارن فقط ۲ کلید جدید (یک جفت کلید) لازم است.');

  M(T2,'Alice wants to send Bob a message only Bob can read, using asymmetric encryption. Which key does she encrypt with?',
    'آلیس می‌خواهد با رمزگذاری نامتقارن پیامی برای باب بفرستد که فقط باب بتواند بخواند. با کدام کلید رمز کند؟',
    'رمز برای گیرنده = کلید عمومی گیرنده.',
    ['Bob\'s public key','Bob\'s private key','Alice\'s private key','Alice\'s public key'],
    ['کلید عمومی باب','کلید خصوصی باب','کلید خصوصی آلیس','کلید عمومی آلیس'],
    'Rules: encrypt with the recipient\'s public key; decrypt with your own private key; sign with your own private key; verify with the sender\'s public key.',
    'قاعده‌ها: با کلید عمومی گیرنده رمز کن؛ با کلید خصوصی خودت رمزگشایی کن؛ با کلید خصوصی خودت امضا کن؛ با کلید عمومی فرستنده تأیید کن.');

  M(T2,'Bob receives the message Alice encrypted for him. Which key does he decrypt with?',
    'باب پیامی را که آلیس برایش رمز کرده دریافت می‌کند. با کدام کلید رمزگشایی کند؟',
    'فقط خود باب آن را دارد.',
    ['Bob\'s private key','Bob\'s public key','Alice\'s public key','Alice\'s private key'],
    ['کلید خصوصی باب','کلید عمومی باب','کلید عمومی آلیس','کلید خصوصی آلیس'],
    'Whatever is encrypted with a public key can only be decrypted by the matching private key. Not even Alice can decrypt it after encrypting with Bob\'s public key.',
    'هر چیزی که با کلید عمومی رمز شود فقط با کلید خصوصی جفتش رمزگشایی می‌شود. حتی خود آلیس هم بعد از رمز کردن با کلید عمومی باب نمی‌تواند رمزگشایی‌اش کند.');

  M(T2,'Why do protocols like TLS use asymmetric cryptography only at the start and then switch to symmetric encryption?',
    'چرا پروتکل‌هایی مثل TLS فقط در شروع از رمزنگاری نامتقارن استفاده می‌کنند و بعد به متقارن تغییر می‌دهند؟',
    'یکی کند است، یکی سریع.',
    ['Asymmetric is slow, so it only exchanges a symmetric key','Symmetric encryption is what provides non-repudiation','Asymmetric keys expire one second after they are made','Symmetric keys are public, so anyone can share them'],
    ['نامتقارن کند است، پس فقط برای تبادل کلید متقارن به کار می‌رود','رمز متقارن است که عدم انکار را فراهم می‌کند','کلیدهای نامتقارن یک ثانیه بعد از ساخته شدن منقضی می‌شوند','کلیدهای متقارن عمومی‌اند، پس هر کسی می‌تواند پخششان کند'],
    'Symmetric encryption can be 1,000–10,000 times faster. Asymmetric solves key exchange and scales well. Combining them (hybrid cryptography) gets the strengths of both.',
    'رمز متقارن می‌تواند ۱۰۰۰ تا ۱۰۰۰۰ برابر سریع‌تر باشد. نامتقارن مشکل تبادل کلید را حل می‌کند و مقیاس‌پذیر است. ترکیبشان (رمزنگاری ترکیبی) نقاط قوت هر دو را می‌گیرد.');

  M(T2,'Two parties with no prior contact and no PKI need to agree on a shared secret key over an open network. Which method fits?',
    'دو طرف بدون آشنایی قبلی و بدون PKI باید روی یک شبکه‌ی باز روی یک کلید مخفی مشترک توافق کنند. کدام روش مناسب است؟',
    'g^r mod p.',
    ['Diffie-Hellman key exchange','Offline courier delivery','MD5 hashing','Steganography'],
    ['تبادل کلید Diffie-Hellman','تحویل حضوری با پیک','هش MD5','استگانوگرافی'],
    'Key exchange methods: offline (physical) distribution, public key encryption, and Diffie-Hellman, where each side combines public values with its own secret number so both reach the same key without sending it.',
    'روش‌های تبادل کلید: توزیع آفلاین (فیزیکی)، رمزگذاری با کلید عمومی و Diffie-Hellman که در آن هر طرف مقدارهای عمومی را با عدد مخفی خودش ترکیب می‌کند تا هر دو بدون فرستادن کلید به همان کلید برسند.');

  M(T2,'Which symmetric algorithm is the strongest choice today?',
    'کدام الگوریتم متقارن امروز قوی‌ترین انتخاب است؟',
    'جایگزین DES، کلید ۱۲۸/۱۹۲/۲۵۶ بیتی.',
    ['AES','DES','3DES','RSA'],
    ['AES','DES','3DES','RSA'],
    'AES (Rijndael) uses 128-bit blocks and 128, 192 or 256-bit keys (10, 12 or 14 rounds). DES (56-bit key) is broken and 3DES is deprecated. RSA is asymmetric, not symmetric.',
    'AES (Rijndael) قطعه‌های ۱۲۸ بیتی و کلید ۱۲۸، ۱۹۲ یا ۲۵۶ بیتی دارد (۱۰، ۱۲ یا ۱۴ دور). DES (کلید ۵۶ بیتی) شکسته شده و 3DES منسوخ است. RSA نامتقارن است، نه متقارن.');

  M(T2,'Why can a 256-bit ECC key give security similar to a much longer RSA key?',
    'چرا یک کلید ECC ۲۵۶ بیتی می‌تواند امنیتی مشابه یک کلید RSA خیلی طولانی‌تر بدهد؟',
    'مسئله‌ی ریاضی متفاوت و سخت‌تر.',
    ['The elliptic curve math problem is harder than factoring','ECC is a symmetric algorithm, so its keys can be shorter','ECC keys are never used for signatures, only encryption','RSA keys are always public, so they must be much longer'],
    ['مسئله‌ی ریاضی منحنی بیضوی از تجزیه‌ی اعداد سخت‌تر است','ECC الگوریتم متقارن است، پس کلیدش می‌تواند کوتاه‌تر باشد','کلیدهای ECC فقط برای رمز به کار می‌روند، نه امضا','کلیدهای RSA همیشه عمومی‌اند، پس باید خیلی طولانی‌تر باشند'],
    'RSA relies on the difficulty of factoring large primes. ECC relies on the elliptic curve discrete logarithm problem, believed to be harder, so shorter keys give equal strength (for example, a 160-bit ECC key ≈ 1,024-bit RSA).',
    'RSA به سختی تجزیه‌ی اعداد اول بزرگ تکیه دارد. ECC به مسئله‌ی لگاریتم گسسته‌ی منحنی بیضوی تکیه دارد که سخت‌تر فرض می‌شود؛ پس کلید کوتاه‌تر همان قدرت را می‌دهد (مثلاً ECC ۱۶۰ بیتی ≈ RSA ۱۰۲۴ بیتی).');

  M(T2,'An employee leaves and nobody can decrypt files they protected. Which arrangement would have prevented this?',
    'کارمندی می‌رود و هیچ‌کس نمی‌تواند فایل‌هایی که رمز کرده بود را باز کند. کدام ترتیب جلوی این را می‌گرفت؟',
    'یک نسخه‌ی محافظت‌شده از کلید پیش طرف سوم.',
    ['Key escrow with a key recovery policy','Shorter keys','Deleting the key after each use','Sharing the key in email'],
    ['امانت کلید (Key escrow) با سیاست بازیابی کلید','کلیدهای کوتاه‌تر','پاک کردن کلید بعد از هر استفاده','فرستادن کلید با ایمیل'],
    'Key escrow stores a protected copy of a key with a trusted third party for emergencies, under a formal recovery policy. Other good practices: never store keys with the data, use split knowledge for sensitive keys, use HSMs.',
    'امانت کلید یک نسخه‌ی محافظت‌شده از کلید را برای مواقع اضطراری پیش یک طرف سوم مطمئن نگه می‌دارد، با یک سیاست رسمی بازیابی. روش‌های خوب دیگر: کلید را کنار داده نگه ندار، برای کلیدهای حساس دانش تقسیم‌شده (Split knowledge)، از HSM استفاده کن.');

  M(T2,'Which device stores and manages encryption keys in tamper-resistant hardware so people never handle the keys directly?',
    'کدام دستگاه کلیدهای رمزگذاری را در سخت‌افزار مقاوم در برابر دستکاری نگه می‌دارد و مدیریت می‌کند تا انسان‌ها هیچ‌وقت مستقیم با کلید کار نکنند؟',
    'H = Hardware.',
    ['Hardware security module (HSM)','SIEM that stores all log data','IPS that inspects network traffic','SOAR that runs response playbooks'],
    ['ماژول امنیتی سخت‌افزاری (HSM)','SIEM که همه‌ی لاگ‌ها را نگه می‌دارد','IPS که ترافیک شبکه را بازرسی می‌کند','SOAR که Playbookهای پاسخ را اجرا می‌کند'],
    'HSMs range from USB tokens like a YubiKey to enterprise data center appliances and cloud HSM services. They protect keys and perform crypto operations securely.',
    'HSMها از توکن USB مثل YubiKey تا دستگاه‌های سازمانی دیتاسنتر و سرویس‌های HSM ابری فرق می‌کنند. کلیدها را محافظت می‌کنند و عملیات رمزنگاری را امن انجام می‌دهند.');

  /* ---- Hashing & signatures ---- */
  M(T3,'A download page lists a SHA-256 value. After downloading, you compute the hash and it is different. What does this tell you?',
    'یک صفحه‌ی دانلود یک مقدار SHA-256 نشان می‌دهد. بعد از دانلود هش را محاسبه می‌کنی و متفاوت است. این چه می‌گوید؟',
    'حتی یک بیت تغییر، هش کاملاً متفاوت.',
    ['The file was changed or corrupted','The file is encrypted and must be unlocked','The file is smaller than expected, but fine','SHA-256 gives a random result each time'],
    ['فایل تغییر کرده یا خراب شده','فایل رمزگذاری شده و باید باز شود','فایل کوچک‌تر از انتظار است، ولی سالم','SHA-256 هر بار نتیجه‌ی تصادفی می‌دهد'],
    'Hash requirements: any input length, fixed output length, easy to compute, one-way, collision-free. Any change, even one character, gives a completely different digest, but you cannot tell how big the change was.',
    'ویژگی‌های هش: ورودی با هر طول، خروجی با طول ثابت، محاسبه‌ی آسان، یک‌طرفه، بدون تصادم. هر تغییری، حتی یک کاراکتر، خلاصه‌ی کاملاً متفاوتی می‌دهد، اما نمی‌شود فهمید تغییر چقدر بزرگ بوده.');

  M(T3,'Why should MD5 no longer be used to verify message integrity?',
    'چرا دیگر نباید از MD5 برای بررسی یکپارچگی پیام استفاده کرد؟',
    'دو ورودی، یک خروجی.',
    ['It is vulnerable to collisions','Its output is far too long to store','It can only hash plain text files','It needs a private key to run'],
    ['در برابر تصادم (Collision) آسیب‌پذیر است','خروجی‌اش برای ذخیره خیلی طولانی است','فقط فایل متنی ساده را هش می‌کند','برای اجرا کلید خصوصی لازم دارد'],
    'A collision is two different inputs giving the same hash, which lets an attacker swap content. MD5 (128-bit) and SHA-1 (160-bit) have known weaknesses. Use SHA-2 (SHA-256, SHA-384, SHA-512) or SHA-3.',
    'تصادم یعنی دو ورودی متفاوت هش یکسان بدهند و مهاجم بتواند محتوا را جابه‌جا کند. MD5 (۱۲۸ بیتی) و SHA-1 (۱۶۰ بیتی) ضعف‌های شناخته‌شده دارند. از SHA-2 (SHA-256، SHA-384، SHA-512) یا SHA-3 استفاده کن.');

  M(T3,'Alice wants to digitally sign a contract she emails to Bob. Which key does she use to create the signature?',
    'آلیس می‌خواهد قراردادی را که برای باب ایمیل می‌کند امضای دیجیتال کند. با کدام کلید امضا را بسازد؟',
    'فقط خودش باید بتواند امضا کند.',
    ['Alice\'s private key','Alice\'s public key','Bob\'s public key','Bob\'s private key'],
    ['کلید خصوصی آلیس','کلید عمومی آلیس','کلید عمومی باب','کلید خصوصی باب'],
    'To sign: hash the message, then encrypt only the digest with your private key. To verify: decrypt the signature with the sender\'s public key and compare it to your own hash of the message.',
    'برای امضا: پیام را هش کن، بعد فقط خلاصه را با کلید خصوصی خودت رمز کن. برای تأیید: امضا را با کلید عمومی فرستنده رمزگشایی کن و با هشی که خودت از پیام گرفتی مقایسه کن.');

  M(T3,'Bob receives Alice\'s signed contract. Which key does he use to verify the signature?',
    'باب قرارداد امضاشده‌ی آلیس را دریافت می‌کند. با کدام کلید امضا را تأیید کند؟',
    'کلیدی که همه از آلیس دارند.',
    ['Alice\'s public key','Alice\'s private key','Bob\'s private key','Bob\'s public key'],
    ['کلید عمومی آلیس','کلید خصوصی آلیس','کلید خصوصی باب','کلید عمومی باب'],
    'If the digest decrypted with Alice\'s public key matches Bob\'s own hash, the message came from Alice and was not changed. Digital signatures give integrity, authentication and non-repudiation, but not confidentiality.',
    'اگر خلاصه‌ای که با کلید عمومی آلیس رمزگشایی شد با هش خود باب یکی باشد، پیام از آلیس آمده و تغییر نکرده. امضای دیجیتال یکپارچگی، احراز هویت و عدم انکار می‌دهد، اما محرمانگی نه.');

  M(T3,'Two servers share a secret key and use it with SHA-256 to check that messages were not changed. Why does this NOT give non-repudiation?',
    'دو سرور یک کلید مخفی مشترک دارند و با SHA-256 بررسی می‌کنند پیام‌ها تغییر نکرده‌اند. چرا این عدم انکار نمی‌دهد؟',
    'HMAC با کلید مشترک.',
    ['Both sides hold the key, so either could make the code','SHA-256 is too weak to prove who sent the message','HMAC encrypts the whole message, hiding the sender','HMAC needs a certificate authority to prove identity'],
    ['هر دو طرف کلید را دارند، پس هر کدام می‌توانست کد را بسازد','SHA-256 برای اثبات فرستنده خیلی ضعیف است','HMAC کل پیام را رمز می‌کند و فرستنده پنهان می‌ماند','HMAC برای اثبات هویت به CA نیاز دارد'],
    'HMAC combines a hash with a shared secret key. It proves integrity and that the sender knows the key, and it is faster than digital signatures, but since both sides hold the key it cannot prove which one sent it.',
    'HMAC یک هش را با کلید مخفی مشترک ترکیب می‌کند. یکپارچگی و اینکه فرستنده کلید را می‌داند را ثابت می‌کند و از امضای دیجیتال سریع‌تر است، اما چون هر دو طرف کلید دارند نمی‌تواند ثابت کند کدام فرستاده.');

  M(T3,'Attackers stole a password database. Which TWO measures most slow down cracking it?',
    'مهاجمان یک پایگاه داده‌ی رمز را دزدیده‌اند. کدام دو اقدام بیشتر از همه شکستن آن را کند می‌کنند؟',
    'مقدار تصادفی + تکرار هزاران‌باره.',
    ['Salting and key stretching (PBKDF2)','Shorter passwords hashed with MD5','Encrypting the file twice with ROT13','Storing the passwords in plain text'],
    ['Salt و کشش کلید (PBKDF2)','رمزهای کوتاه‌تر با هش MD5','دو بار رمز کردن فایل با ROT13','ذخیره‌ی رمزها به‌صورت متن ساده'],
    'Salting adds a random value per password before hashing, which defeats rainbow tables. Key stretching (PBKDF2) runs thousands of salt-and-hash iterations, making each guess expensive.',
    'Salt قبل از هش یک مقدار تصادفی به هر رمز اضافه می‌کند و جدول Rainbow را بی‌اثر می‌کند. کشش کلید (PBKDF2) هزاران دور Salt و هش را اجرا می‌کند تا هر حدس پرهزینه شود.');

  /* ---- PKI & certificates ---- */
  M(T4,'What does a digital certificate mainly do?',
    'گواهی دیجیتال اصلاً چه کار می‌کند؟',
    'کلید عمومی + تأیید یک طرف مطمئن.',
    ['Binds a public key to an identity, signed by a CA','Stores the owner\'s private key so others can use it','Encrypts all of the data stored on a website','Replaces user passwords when logging in to a site'],
    ['یک کلید عمومی را به یک هویت وصل می‌کند، با امضای CA','کلید خصوصی صاحبش را نگه می‌دارد تا دیگران استفاده کنند','همه‌ی داده‌ی ذخیره‌شده روی یک سایت را رمز می‌کند','موقع ورود به سایت جای رمز کاربران را می‌گیرد'],
    'A certificate is an endorsed copy of a public key, following X.509. It holds version, serial number, signature algorithm, issuer, validity period, subject (CN), optional SANs and the subject\'s public key.',
    'گواهی یک نسخه‌ی تأییدشده از کلید عمومی است و از استاندارد X.509 پیروی می‌کند. شامل نسخه، شماره‌ی سریال، الگوریتم امضا، صادرکننده، دوره‌ی اعتبار، صاحب (CN)، SANهای اختیاری و کلید عمومی صاحب است.');

  M(T4,'A company buys a wildcard certificate for *.example.com. Which name is NOT covered?',
    'شرکتی گواهی Wildcard برای ‎*.example.com می‌خرد. کدام نام پوشش داده نمی‌شود؟',
    'فقط یک سطح زیردامنه.',
    ['api.dev.example.com','www.example.com','mail.example.com','shop.example.com'],
    ['api.dev.example.com','www.example.com','mail.example.com','shop.example.com'],
    'A wildcard covers exactly one level of subdomain. *.example.com covers www, mail and shop (and is commonly accepted for example.com), but not api.dev.example.com, which is two levels deep.',
    'Wildcard دقیقاً یک سطح زیردامنه را پوشش می‌دهد. ‎*.example.com شامل www، mail و shop است (و معمولاً برای example.com هم پذیرفته می‌شود)، اما api.dev.example.com را که دو سطح پایین‌تر است نه.');

  M(T4,'Why is the root CA in a large PKI usually kept offline and powered down?',
    'چرا CA ریشه در یک PKI بزرگ معمولاً آفلاین و خاموش نگه داشته می‌شود؟',
    'اگر ریشه لو برود همه‌چیز از بین می‌رود.',
    ['To protect the root of trust; intermediates do daily issuing','Because root CAs are technically unable to join a network','Only to save electricity, since it is rarely needed','Because browsers do not trust root CAs that stay online'],
    ['برای محافظت از ریشه‌ی اعتماد؛ CAهای میانی کار روزمره را انجام می‌دهند','چون CA ریشه از نظر فنی نمی‌تواند به شبکه وصل شود','فقط برای صرفه‌جویی برق، چون کم لازم می‌شود','چون مرورگرها به CA ریشه‌ای که آنلاین بماند اعتماد ندارند'],
    'The root certificate is the root of trust. Keeping the root CA offline protects its private key. It signs intermediate CAs, which issue certificates. Browsers validate by following the certificate chain back to a trusted root.',
    'گواهی ریشه، ریشه‌ی اعتماد است. آفلاین نگه داشتن CA ریشه کلید خصوصی‌اش را محافظت می‌کند. CA ریشه CAهای میانی را امضا می‌کند و آن‌ها گواهی صادر می‌کنند. مرورگرها با دنبال کردن زنجیره‌ی گواهی تا یک ریشه‌ی مطمئن بررسی می‌کنند.');

  M(T4,'An admin generates a key pair on a web server and sends the public key with the server\'s details to a CA to get a certificate. What is this file?',
    'مدیری روی وب‌سرور یک جفت کلید می‌سازد و کلید عمومی را با مشخصات سرور برای CA می‌فرستد تا گواهی بگیرد. این فایل چیست؟',
    'درخواست امضای گواهی.',
    ['A certificate signing request (CSR)','A certificate revocation list (CRL)','An OCSP response','A private key backup'],
    ['درخواست امضای گواهی (CSR)','فهرست ابطال گواهی (CRL)','پاسخ OCSP','پشتیبان کلید خصوصی'],
    'During enrollment you prove your identity, then send a CSR containing your public key. The CA builds an X.509 certificate and signs it with its private key. The private key never leaves your server.',
    'در ثبت‌نام (Enrollment) هویتت را ثابت می‌کنی و بعد یک CSR شامل کلید عمومی‌ات می‌فرستی. CA یک گواهی X.509 می‌سازد و با کلید خصوصی خودش امضا می‌کند. کلید خصوصی هیچ‌وقت از سرورت خارج نمی‌شود.');

  M(T4,'Before issuing a certificate, a CA checks that the company is a legally registered business, not just that it controls the domain. Which certificate type is this?',
    'یک CA قبل از صدور گواهی بررسی می‌کند که شرکت یک کسب‌وکار ثبت‌شده‌ی قانونی است، نه فقط اینکه دامنه را کنترل می‌کند. این کدام نوع گواهی است؟',
    'بیشترین سطح بررسی.',
    ['Extended Validation (EV)','Domain Validation (DV)','Self-signed','Wildcard only'],
    ['اعتبارسنجی گسترده (EV)','اعتبارسنجی دامنه (DV)','خودامضا (Self-signed)','فقط Wildcard'],
    'DV certificates only prove control of the domain and are the most common. EV certificates add checks that the owner is a legitimate business, giving the highest assurance.',
    'گواهی DV فقط کنترل دامنه را ثابت می‌کند و رایج‌ترین است. گواهی EV بررسی‌های بیشتری اضافه می‌کند که صاحبش یک کسب‌وکار مشروع است و بالاترین اطمینان را می‌دهد.');

  M(T4,'A company runs its own internal CA for intranet servers. What should it expect?',
    'شرکتی برای سرورهای اینترانت CA داخلی خودش را اجرا می‌کند. چه انتظاری باید داشته باشد؟',
    'داخلی‌ها اعتماد می‌کنند، بیرونی‌ها نه.',
    ['Outside browsers will not trust them unless configured','Every public browser will trust them automatically','The certificates cannot be used for encryption at all','It must pay a public CA a fee for each certificate'],
    ['مرورگرهای بیرونی اعتماد نمی‌کنند مگر تنظیم شوند','همه‌ی مرورگرهای عمومی خودکار به آن‌ها اعتماد می‌کنند','این گواهی‌ها اصلاً برای رمزگذاری قابل استفاده نیستند','باید برای هر گواهی به یک CA عمومی پول بدهد'],
    'Self-signed or internal CA certificates save money and work inside the organization once systems trust the internal root. Third-party CAs are trusted by browsers by default, which matters for public sites.',
    'گواهی‌های خودامضا یا CA داخلی پول را صرفه‌جویی می‌کنند و وقتی سیستم‌ها به ریشه‌ی داخلی اعتماد کنند داخل سازمان کار می‌کنند. CAهای ثالث به‌طور پیش‌فرض مورد اعتماد مرورگرها هستند که برای سایت‌های عمومی مهم است.');

  M(T4,'A web server fetches a signed, time-stamped "good" status for its certificate from the CA and sends it to visitors along with the certificate. What is this?',
    'یک وب‌سرور وضعیت «سالم» امضاشده و زمان‌دار گواهی‌اش را از CA می‌گیرد و همراه گواهی به بازدیدکننده‌ها می‌فرستد. این چیست؟',
    'پاسخ OCSP به گواهی «منگنه» می‌شود.',
    ['OCSP stapling','A certificate revocation list','Certificate pinning','A certificate signing request'],
    ['OCSP stapling (منگنه کردن)','فهرست ابطال گواهی','Certificate pinning','درخواست امضای گواهی'],
    'CRLs are lists downloaded periodically (latency). OCSP checks status in real time but loads the CA\'s servers. Stapling lets the web server attach a recent signed OCSP response (often valid 24 hours), cutting that load.',
    'CRL فهرستی است که دوره‌ای دانلود می‌شود (تأخیر دارد). OCSP وضعیت را لحظه‌ای بررسی می‌کند اما بار روی سرورهای CA می‌گذارد. Stapling اجازه می‌دهد وب‌سرور یک پاسخ OCSP تازه و امضاشده (اغلب ۲۴ ساعته) ضمیمه کند و آن بار را کم کند.');

  M(T4,'A server\'s private key was accidentally posted online. What must happen to its certificate?',
    'کلید خصوصی یک سرور اشتباهی آنلاین منتشر شده. با گواهی‌اش چه باید کرد؟',
    'گواهی دیگر قابل اعتماد نیست.',
    ['The CA must revoke it (CRL and OCSP)','Nothing, since certificates cannot be cancelled','Extend its validity period by another year','Reissue it as a wildcard certificate'],
    ['CA باید باطلش کند (CRL و OCSP)','کاری لازم نیست، چون گواهی قابل لغو نیست','دوره‌ی اعتبارش را یک سال دیگر تمدید کن','دوباره به شکل گواهی Wildcard صادرش کن'],
    'Revocation reasons: key compromise, wrongly issued, changed details, changed association (e.g., the subject left the sponsoring organization). The CA\'s certificate practice statement (CPS) defines how fast it revokes.',
    'دلایل ابطال: لو رفتن کلید، صدور اشتباه، تغییر مشخصات، تغییر وابستگی (مثلاً صاحب گواهی از سازمان حامی رفته). بیانیه‌ی رویه‌ی گواهی (CPS) مشخص می‌کند CA با چه سرعتی باطل می‌کند.');

  M(T4,'A Windows admin exports a certificate together with its private key into a binary .pfx file. Which format is this?',
    'یک مدیر ویندوز یک گواهی را همراه کلید خصوصی‌اش در یک فایل باینری ‎.pfx خروجی می‌گیرد. این کدام قالب است؟',
    'Personal Information Exchange.',
    ['PFX (also .p12)','PEM','P7B','DER text'],
    ['PFX (یا ‎.p12)','PEM','P7B','DER متنی'],
    'Formats: DER = binary (.der, .crt, .cer); PEM = text version of DER (.pem, .crt); PFX = binary, common on Windows (.pfx, .p12); P7B = text, Windows (.p7b). A .crt file can be either binary or text.',
    'قالب‌ها: DER = باینری (‎.der، ‎.crt، ‎.cer)؛ PEM = نسخه‌ی متنی DER (‎.pem، ‎.crt)؛ PFX = باینری، رایج در ویندوز (‎.pfx، ‎.p12)؛ P7B = متنی، ویندوز (‎.p7b). فایل ‎.crt می‌تواند باینری یا متنی باشد.');

  /* ---- Attacks & emerging ---- */
  M(T5,'An on-path attacker forces a client and server to negotiate an old, weak TLS version and cipher, then breaks it. What attack is this?',
    'مهاجمی در مسیر، کلاینت و سرور را وادار می‌کند روی یک نسخه و رمز قدیمی و ضعیف TLS توافق کنند و بعد آن را می‌شکند. این کدام حمله است؟',
    'پایین آوردن سطح امنیت.',
    ['Downgrade attack','Birthday attack','Collision attack','Frequency analysis'],
    ['حمله‌ی تنزل (Downgrade)','حمله‌ی تولد (Birthday)','حمله‌ی تصادم','تحلیل فراوانی'],
    'A downgrade attack tricks systems into using a less secure protocol mode. Disable old protocol versions and weak cipher suites on servers and clients so they cannot be negotiated.',
    'حمله‌ی تنزل سیستم‌ها را فریب می‌دهد تا از حالت ناامن‌تر پروتکل استفاده کنند. نسخه‌های قدیمی پروتکل و مجموعه‌رمزهای ضعیف را روی سرور و کلاینت خاموش کن تا قابل توافق نباشند.');

  M(T5,'An attacker generates huge numbers of documents looking for any two with the same hash, which takes far fewer tries than guessing one specific hash. What is this?',
    'مهاجمی تعداد زیادی سند می‌سازد تا هر دو سندی با هش یکسان پیدا کند؛ این خیلی کمتر از حدس زدن یک هش مشخص تلاش می‌خواهد. این چیست؟',
    '۲۳ نفر کافی است تا احتمال تولد یکسان ۵۰٪ شود.',
    ['A birthday attack','A downgrade attack','A known plain-text attack','Steganography'],
    ['حمله‌ی تولد (Birthday attack)','حمله‌ی تنزل','حمله‌ی متن آشکار معلوم','استگانوگرافی'],
    'The birthday paradox says only 23 people give about a 50% chance of a shared birthday. Likewise, finding any collision needs about 1.7√n tries, far less than brute forcing all n outputs. Longer hashes resist it.',
    'پارادوکس تولد می‌گوید فقط ۲۳ نفر حدود ۵۰٪ احتمال تولد یکسان می‌دهند. به همین شکل، پیدا کردن هر تصادمی حدود ‎1.7√n تلاش لازم دارد، خیلی کمتر از امتحان همه‌ی n خروجی. هش‌های طولانی‌تر مقاوم‌ترند.');

  M(T5,'Analysts collect pairs of plain text and the matching ciphertext to work out the key, like the Enigma messages that always ended the same way. What attack is this?',
    'تحلیلگران جفت‌هایی از متن آشکار و متن رمزشده‌ی مربوطش جمع می‌کنند تا کلید را پیدا کنند؛ مثل پیام‌های Enigma که همیشه یک‌جور تمام می‌شدند. این کدام حمله است؟',
    'متن آشکار را از قبل می‌دانند.',
    ['Known plain-text attack','Chosen plain-text attack','Downgrade attack','Brute force of every key'],
    ['حمله‌ی متن آشکار معلوم (Known plain text)','حمله‌ی متن آشکار انتخابی','حمله‌ی تنزل','Brute force همه‌ی کلیدها'],
    'Known plain text: the attacker has plain text/ciphertext pairs. Chosen plain text: the attacker picks the plain text and gets its ciphertext. Related key: ciphertexts under two related keys. Frequency analysis only works on historical ciphers.',
    'متن آشکار معلوم: مهاجم جفت متن آشکار/رمزشده دارد. متن آشکار انتخابی: مهاجم متن را انتخاب می‌کند و رمزشده‌اش را می‌گیرد. کلید مرتبط: متن رمزشده با دو کلید مرتبط. تحلیل فراوانی فقط روی رمزهای قدیمی کار می‌کند.');

  M(T5,'A Wi-Fi network still uses WEP, which applies the RC4 algorithm in a flawed way. Which kind of cryptographic weakness is this?',
    'یک شبکه‌ی Wi-Fi هنوز از WEP استفاده می‌کند که الگوریتم RC4 را به شکل معیوب به کار می‌برد. این کدام نوع ضعف رمزنگاری است؟',
    'مشکل از پیاده‌سازی و کلیدسازی است.',
    ['Weak key generation / poor implementation','A birthday collision in the SHA-3 hash','Homomorphic encryption of the traffic','Too much entropy in the shared key'],
    ['ساخت کلید ضعیف / پیاده‌سازی بد','تصادم تولد در هش SHA-3','رمزگذاری همریخت ترافیک','آنتروپی بیش از حد در کلید مشترک'],
    'Even a reasonable algorithm fails when implemented badly or with weak keys. Other common crypto weaknesses: deprecated algorithms (DES, MD5), short keys, low-entropy keys and human errors like sending the same message in the clear.',
    'حتی یک الگوریتم معقول وقتی بد پیاده‌سازی شود یا کلید ضعیف داشته باشد شکست می‌خورد. ضعف‌های رایج دیگر: الگوریتم منسوخ (DES، MD5)، کلید کوتاه، کلید کم‌آنتروپی و خطای انسانی مثل فرستادن همان پیام به‌صورت آشکار.');

  M(T5,'Which technology is a distributed, tamper-resistant open public ledger first built for Bitcoin?',
    'کدام فناوری یک دفتر کل عمومی، توزیع‌شده و مقاوم در برابر دستکاری است که اول برای بیت‌کوین ساخته شد؟',
    'زنجیره‌ای از بلوک‌ها.',
    ['Blockchain','Tor','PFX','OCSP'],
    ['بلاک‌چین (Blockchain)','Tor','PFX','OCSP'],
    'Blockchain is an immutable, distributed open public ledger with no central authority. Beyond cryptocurrency it can track property records and supply chains.',
    'بلاک‌چین یک دفتر کل عمومی تغییرناپذیر و توزیع‌شده بدون مرجع مرکزی است. جدا از رمزارز، می‌تواند سوابق مالکیت و زنجیره‌ی تأمین را دنبال کند.');

  M(T5,'A hospital wants a cloud service to compute statistics on patient data without ever decrypting it. Which technology allows this?',
    'یک بیمارستان می‌خواهد یک سرویس ابری روی داده‌ی بیماران آمار بگیرد بدون اینکه هیچ‌وقت رمزگشایی‌اش کند. کدام فناوری این را ممکن می‌کند؟',
    'محاسبه روی داده‌ی رمزشده.',
    ['Homomorphic encryption','Steganography','Lightweight cryptography','Certificate stapling'],
    ['رمزگذاری همریخت (Homomorphic)','استگانوگرافی','رمزنگاری سبک','Certificate stapling'],
    'Homomorphic encryption lets you compute on encrypted data; decrypting the result gives the same answer as computing on plain text. Lightweight cryptography is for low-power devices, and quantum computing may one day break factoring-based crypto like RSA.',
    'رمزگذاری همریخت اجازه می‌دهد روی داده‌ی رمزشده محاسبه کنی؛ رمزگشایی نتیجه همان جوابی را می‌دهد که محاسبه روی متن آشکار. رمزنگاری سبک برای دستگاه‌های کم‌مصرف است و محاسبات کوانتومی ممکن است روزی رمزهای مبتنی بر تجزیه مثل RSA را بشکند.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['7']={t:['Cryptography & PKI','رمزنگاری و PKI'],b:[
    PP('Matched to Chapter 7 of the course textbook (objectives 1.4, 2.3 and 2.4). Short review notes in our own words; read the chapter for the full explanation. Key escrow, OCSP stapling and Diffie-Hellman are also practiced in the Security+ course, section 14.',
      'این بخش با فصل ۷ کتاب درس جور است (سرفصل‌های 1.4، 2.3 و 2.4). یادداشت‌های کوتاه مرور به زبان خودمان؛ توضیح کامل را در کتاب بخوان. Key escrow، OCSP stapling و Diffie-Hellman در بخش ۱۴ دوره‌ی Security+ هم تمرین شده‌اند.'),

    H('Basics','پایه‌ها'),
    L([['Goals: confidentiality, integrity, authentication, non-repudiation (availability is not a crypto goal).','هدف‌ها: محرمانگی، یکپارچگی، احراز هویت، عدم انکار (دسترس‌پذیری هدف رمزنگاری نیست).'],
       ['Historical: substitution (Caesar, ROT13, Vigenère = polyalphabetic), transposition (columnar), Enigma. Stream = 1 bit/char at a time; block = whole blocks.','قدیمی: جایگزینی (سزار، ROT13، Vigenère = چندالفبایی)، جابه‌جایی (ستونی)، Enigma. جریانی = هر بار ۱ بیت/کاراکتر؛ قطعه‌ای = کل قطعه.'],
       ['Kerckhoffs: only the key is secret. Key length sets the key space (2^n); longer is stronger but slower.','Kerckhoffs: فقط کلید مخفی است. طول کلید فضای کلید را تعیین می‌کند (‎2^n)؛ بلندتر قوی‌تر اما کندتر.'],
       ['Steganography hides data inside other files (also used for watermarks). Obfuscation makes code hard to understand.','استگانوگرافی داده را داخل فایل‌های دیگر پنهان می‌کند (برای واترمارک هم). Obfuscation فهم کد را سخت می‌کند.']]),
    TB([['Encryption level','سطح رمزگذاری'],['What it covers','چه چیزی را می‌پوشاند']],[
      [['Full-disk','کل دیسک'],['Whole drive incl. OS','کل درایو با سیستم‌عامل']],
      [['Partition','پارتیشن'],['One partition','یک پارتیشن']],
      [['Volume','Volume'],['A set volume of folders/files','مجموعه‌ای از پوشه/فایل']],
      [['File','فایل'],['Individual files','فایل‌های تکی']],
      [['Database','پایگاه داده'],['TDE (whole DB) or column-level','TDE (کل DB) یا سطح ستون']],
      [['Record','رکورد'],['Individual rows','ردیف‌های تکی']],
      [['Transport/communication','انتقال/ارتباط'],['Data in transit (TLS)','داده در حال انتقال (TLS)']]]),

    H('Symmetric vs. asymmetric','متقارن در برابر نامتقارن'),
    TB([['','',],['Symmetric','متقارن'],['Asymmetric','نامتقارن']],[
      [['Keys','کلیدها'],['One shared secret','یک کلید مخفی مشترک'],['Public + private pair','جفت عمومی + خصوصی']],
      [['Speed','سرعت'],['Fast (bulk data)','سریع (داده‌ی حجیم)'],['Slow (small data, signatures)','کند (داده‌ی کم، امضا)']],
      [['Key count for n users','تعداد کلید برای n کاربر'],['n(n−1)/2','‎n(n−1)/2'],['2n','‎2n']],
      [['Non-repudiation','عدم انکار'],['No','نه'],['Yes','بله']],
      [['Examples','نمونه‌ها'],['AES (DES/3DES deprecated)','AES (DES/3DES منسوخ)'],['RSA, ECC; Diffie-Hellman for key exchange','RSA، ECC؛ Diffie-Hellman برای تبادل کلید']]]),
    TB([['Task','کار'],['Key to use','کلید']],[
      [['Encrypt to someone','رمز برای کسی'],['Recipient\'s public key','کلید عمومی گیرنده']],
      [['Decrypt a message to you','رمزگشایی پیامی که برای توست'],['Your private key','کلید خصوصی خودت']],
      [['Sign','امضا'],['Your private key','کلید خصوصی خودت']],
      [['Verify a signature','تأیید امضا'],['Sender\'s public key','کلید عمومی فرستنده']]]),
    L([['Key management: never store keys with the data, split knowledge, key escrow + recovery policy, rotate keys, back up keys, use HSMs.','مدیریت کلید: کلید را کنار داده نگه ندار، دانش تقسیم‌شده، امانت کلید + سیاست بازیابی، چرخش کلید، پشتیبان کلید، HSM.']]),

    H('Hashing and signatures','هش و امضا'),
    L([['Hash: any input, fixed output, easy to compute, one-way, collision-free. MD5 and SHA-1 have collisions; use SHA-2 or SHA-3.','هش: هر ورودی، خروجی ثابت، محاسبه‌ی آسان، یک‌طرفه، بدون تصادم. MD5 و SHA-1 تصادم دارند؛ از SHA-2 یا SHA-3 استفاده کن.'],
       ['Digital signature = hash of the message encrypted with the sender\'s private key → integrity, authentication, non-repudiation (no confidentiality).','امضای دیجیتال = هش پیام رمزشده با کلید خصوصی فرستنده ← یکپارچگی، احراز هویت، عدم انکار (بدون محرمانگی).'],
       ['HMAC = hash + shared key → integrity but no non-repudiation.','HMAC = هش + کلید مشترک ← یکپارچگی، بدون عدم انکار.'],
       ['Salting defeats rainbow tables; key stretching (PBKDF2) repeats salting and hashing thousands of times.','Salt جدول Rainbow را شکست می‌دهد؛ کشش کلید (PBKDF2) Salt و هش را هزاران بار تکرار می‌کند.']]),

    H('PKI and certificates','PKI و گواهی‌ها'),
    L([['X.509 certificate = public key + identity, signed by a CA. Fields: version, serial, signature algorithm, issuer, validity, subject CN, SANs, public key.','گواهی X.509 = کلید عمومی + هویت، با امضای CA. فیلدها: نسخه، سریال، الگوریتم امضا، صادرکننده، اعتبار، CN صاحب، SANها، کلید عمومی.'],
       ['Root CA (offline, root of trust) → intermediate CAs → certificates; validation follows the chain. RAs verify identities for CAs.','CA ریشه (آفلاین، ریشه‌ی اعتماد) ← CAهای میانی ← گواهی‌ها؛ بررسی زنجیره را دنبال می‌کند. RAها هویت را برای CA بررسی می‌کنند.'],
       ['Enrollment: prove identity, send a CSR (public key). DV = domain control; EV = verified legitimate business.','ثبت‌نام: اثبات هویت، ارسال CSR (کلید عمومی). DV = کنترل دامنه؛ EV = کسب‌وکار مشروع تأییدشده.'],
       ['Wildcard *.domain covers one subdomain level. Self-signed/internal CA = trusted only where configured; third-party CA = trusted by browsers.','Wildcard ‎*.domain یک سطح زیردامنه را پوشش می‌دهد. خودامضا/CA داخلی = فقط جایی که تنظیم شده مورد اعتماد است؛ CA ثالث = مورد اعتماد مرورگرها.'],
       ['Revocation checks: CRL (periodic list), OCSP (real time), stapling (server attaches a recent OCSP response). Pinning ties a site to its key.','بررسی ابطال: CRL (فهرست دوره‌ای)، OCSP (لحظه‌ای)، Stapling (سرور پاسخ OCSP تازه را ضمیمه می‌کند). Pinning یک سایت را به کلیدش گره می‌زند.']]),
    TB([['Format','قالب'],['Type','نوع'],['Extensions','پسوند']],[
      [['DER','DER'],['Binary','باینری'],['.der .crt .cer','‎.der ‎.crt ‎.cer']],
      [['PEM','PEM'],['Text','متنی'],['.pem .crt','‎.pem ‎.crt']],
      [['PFX','PFX'],['Binary (Windows)','باینری (ویندوز)'],['.pfx .p12','‎.pfx ‎.p12']],
      [['P7B','P7B'],['Text (Windows)','متنی (ویندوز)'],['.p7b','‎.p7b']]]),

    H('Attacks and emerging topics','حمله‌ها و موضوعات نوظهور'),
    L([['Downgrade: force a weaker protocol/cipher. Collision: two inputs, one hash. Birthday: collisions need only about 1.7√n tries.','Downgrade: وادار کردن به پروتکل/رمز ضعیف‌تر. Collision: دو ورودی، یک هش. Birthday: تصادم فقط حدود ‎1.7√n تلاش لازم دارد.'],
       ['Others: brute force, frequency analysis (historical only), known/chosen plain text, related key, weak keys (WEP), human error, deprecated algorithms.','دیگر: Brute force، تحلیل فراوانی (فقط قدیمی)، متن آشکار معلوم/انتخابی، کلید مرتبط، کلید ضعیف (WEP)، خطای انسانی، الگوریتم منسوخ.'],
       ['Blockchain = distributed immutable open public ledger. Tor uses layered encryption and perfect forward secrecy. Homomorphic = compute on encrypted data. Lightweight crypto = low power/latency. Quantum may break RSA.','بلاک‌چین = دفتر کل عمومی توزیع‌شده و تغییرناپذیر. Tor رمزگذاری لایه‌ای و Perfect forward secrecy دارد. همریخت = محاسبه روی داده‌ی رمزشده. رمز سبک = مصرف/تأخیر کم. کوانتوم ممکن است RSA را بشکند.']]),
    TT('Exam shortcut: encrypt with THEIR public key, sign with YOUR private key. Symmetric keys = n(n−1)/2. Wildcard = one level. Stapling = server delivers the OCSP answer.',
      'نکته‌ی امتحان: با کلید عمومی «او» رمز کن، با کلید خصوصی «خودت» امضا کن. کلید متقارن = ‎n(n−1)/2. Wildcard = یک سطح. Stapling = سرور جواب OCSP را تحویل می‌دهد.')
  ]};
})();
