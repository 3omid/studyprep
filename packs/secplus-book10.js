/* Security+ extension: Section B10, matched to Chapter 10 ("Cloud and Virtualization Security") of the course
   textbook (Chapple & Seidl, CompTIA Security+ Study Guide, 9th ed.). Original questions and notes written
   for the chapter's objectives (2.3, 3.1, 3.3, 4.1); no text or review questions from the book are copied.
   The correct option is always first in o/of; the app shuffles the options. */
(function(){
  var pack=(window.PACKS||[]).find(function(p){return p.id==='secbook'});
  if(!pack)return;
  pack.sections['10']={en:'Cloud and virtualization security',fa:'امنیت ابر و مجازی‌سازی'};
  var n=0;
  function M(t,q,qf,hf,o,of,en,fa){
    pack.mcq.push({id:'secplus:b10_'+(++n),sec:'10',t:t,q:q,qf:qf,hf:hf,o:o,of:of,en:en,fa:fa});
  }
  var T1='Cloud basics & service models',T2='Deployment & shared responsibility',T3='Virtualization, containers & storage',T4='Cloud security controls';

  /* ---- Cloud basics & service models ---- */
  M(T1,'During a holiday sale a web app automatically adds servers as traffic grows, then removes them when traffic drops so the company stops paying for them. Which cloud property is this?',
    'در حراج تعطیلات، یک اپ وب با بالا رفتن ترافیک خودکار سرور اضافه می‌کند و وقتی ترافیک کم شد آن‌ها را حذف می‌کند تا شرکت دیگر پولشان را ندهد. این کدام ویژگی ابر است؟',
    'هم بزرگ می‌شود، هم کوچک.',
    ['Elasticity','Vertical scaling','Measured service','Multitenancy'],
    ['کشسانی (Elasticity)','مقیاس‌دهی عمودی','سرویس اندازه‌گیری‌شده','چندمستأجری (Multitenancy)'],
    'Scalability is the ability to grow capacity. Elasticity goes further: capacity expands AND contracts automatically with demand to optimize cost. Measured service means the provider meters usage and bills for exactly what you use.',
    'Scalability یعنی توانایی افزایش ظرفیت. Elasticity یک قدم جلوتر است: ظرفیت با تقاضا خودکار بزرگ «و» کوچک می‌شود تا هزینه بهینه شود. Measured service یعنی ارائه‌دهنده مصرف را اندازه می‌گیرد و دقیقاً به همان اندازه صورت‌حساب می‌دهد.');

  M(T1,'A cloud server runs out of memory, so the admin resizes it from 8 GB to 32 GB of RAM in the console. What is this?',
    'یک سرور ابری حافظه کم می‌آورد، پس مدیر در کنسول آن را از ۸ به ۳۲ گیگابایت RAM تغییر اندازه می‌دهد. این چیست؟',
    'همان سرور، بزرگ‌تر.',
    ['Vertical scaling','Horizontal scaling','Elasticity','Load balancing'],
    ['مقیاس‌دهی عمودی (Vertical)','مقیاس‌دهی افقی (Horizontal)','کشسانی','Load balancing'],
    'Vertical scaling increases the capacity of an existing server (more CPU or memory). Horizontal scaling adds more servers to a pool behind a load balancer.',
    'Vertical scaling ظرفیت همان سرور را بالا می‌برد (CPU یا حافظه‌ی بیشتر). Horizontal scaling سرورهای بیشتری به مجموعه‌ی پشت Load balancer اضافه می‌کند.');

  M(T1,'Many customers\' virtual machines run on the same physical hardware in a provider\'s datacenter without knowing about each other. What is this called?',
    'ماشین‌های مجازی چندین مشتری روی همان سخت‌افزار فیزیکی در دیتاسنتر یک ارائه‌دهنده اجرا می‌شوند بدون این‌که از هم خبر داشته باشند. اسم این چیست؟',
    'چند مستأجر در یک ساختمان.',
    ['Multitenancy','Data sovereignty','Resource reuse','VM sprawl'],
    ['چندمستأجری (Multitenancy)','حاکمیت داده','استفاده‌ی دوباره از منابع','VM sprawl (پراکندگی VM)'],
    'Multitenancy means many customers share the same pooled infrastructure, which gives economies of scale and oversubscription. The provider must keep tenants isolated so they cannot see or disturb each other.',
    'Multitenancy یعنی چند مشتری زیرساخت مشترک را به اشتراک می‌گذارند که صرفه‌ی مقیاس و Oversubscription می‌دهد. ارائه‌دهنده باید مستأجرها را جدا نگه دارد تا نتوانند همدیگر را ببینند یا مزاحم شوند.');

  M(T1,'A company rents virtual servers, storage and networks from a provider and installs and patches its own operating systems and apps on them. Which service model is this?',
    'شرکتی سرور مجازی، ذخیره‌ساز و شبکه از یک ارائه‌دهنده اجاره می‌کند و سیستم‌عامل و اپ‌های خودش را رویشان نصب و وصله می‌کند. این کدام مدل سرویس است؟',
    'بلوک‌های پایه‌ی زیرساخت.',
    ['IaaS','PaaS','SaaS','FaaS'],
    ['IaaS (زیرساخت به عنوان سرویس)','PaaS (پلتفرم به عنوان سرویس)','SaaS (نرم‌افزار به عنوان سرویس)','FaaS (تابع به عنوان سرویس)'],
    'IaaS provides compute, storage and networking; the provider handles the facility and hardware, and the customer manages the OS, apps and data. Common IaaS providers are AWS, Azure and Google Cloud. A CRM app is SaaS, not IaaS.',
    'IaaS پردازش، ذخیره‌ساز و شبکه می‌دهد؛ ارائه‌دهنده مسئول ساختمان و سخت‌افزار است و مشتری سیستم‌عامل، اپ و داده را مدیریت می‌کند. ارائه‌دهنده‌های رایج: AWS، Azure، Google Cloud. اپ CRM نمونه‌ی SaaS است نه IaaS.');

  M(T1,'A small business builds its own invoicing app, hosts it on AWS, and sells it to customers who simply log in through a web browser. From the customers\' point of view, what is it?',
    'یک کسب‌وکار کوچک اپ صدور فاکتور خودش را می‌سازد، روی AWS میزبانی می‌کند و به مشتری‌هایی می‌فروشد که فقط با مرورگر وارد می‌شوند. از دید مشتری‌ها این چیست؟',
    'اپ کامل و مدیریت‌شده.',
    ['SaaS','IaaS','PaaS','A private cloud'],
    ['SaaS','IaaS','PaaS','ابر خصوصی'],
    'Customers get a fully managed application, so it is SaaS. The business is a cloud consumer of AWS and at the same time a cloud service provider to its own customers; one organization can play several roles.',
    'مشتری یک اپ کامل و مدیریت‌شده می‌گیرد، پس SaaS است. آن کسب‌وکار هم مصرف‌کننده‌ی ابری AWS است و هم برای مشتری‌های خودش ارائه‌دهنده‌ی سرویس ابری؛ یک سازمان می‌تواند چند نقش داشته باشد.');

  M(T1,'Developers upload a small Python function that the provider runs only when a file lands in a storage bucket. They never see or manage a server. What is this?',
    'برنامه‌نویس‌ها یک تابع کوچک Python بارگذاری می‌کنند که ارائه‌دهنده فقط وقتی فایلی در یک Bucket قرار می‌گیرد اجرایش می‌کند. هیچ‌وقت سروری نمی‌بینند یا مدیریت نمی‌کنند. این چیست؟',
    'تابع در پاسخ به رویداد.',
    ['Function as a service (serverless)','Infrastructure as a service','A Type II hypervisor','A managed service provider'],
    ['تابع به عنوان سرویس (Serverless)','زیرساخت به عنوان سرویس','Hypervisor نوع دوم','ارائه‌دهنده‌ی سرویس مدیریت‌شده'],
    'FaaS (for example AWS Lambda) is a kind of PaaS: the customer supplies code that runs on events, on a schedule or on demand. It is called serverless because servers are hidden from the customer, although they still exist.',
    'FaaS (مثلاً AWS Lambda) نوعی PaaS است: مشتری کد می‌دهد که با رویداد، زمان‌بندی یا درخواست اجرا می‌شود. به آن Serverless می‌گویند چون سرورها از دید مشتری پنهان‌اند، هرچند وجود دارند.');

  M(T1,'A company hires an outside firm to run 24/7 security monitoring, vulnerability scanning and incident response for it. What kind of provider is this?',
    'شرکتی یک شرکت بیرونی را برای پایش امنیتی ۲۴ ساعته، اسکن آسیب‌پذیری و پاسخ به حادثه استخدام می‌کند. این چه نوع ارائه‌دهنده‌ای است؟',
    'MSP + امنیت.',
    ['MSSP','MSP that only manages networks','Cloud carrier','Cloud auditor'],
    ['MSSP (ارائه‌دهنده‌ی سرویس امنیتی مدیریت‌شده)','MSP که فقط شبکه را مدیریت می‌کند','حامل ابری (Cloud carrier)','حسابرس ابری'],
    'A managed service provider (MSP) runs some or all IT for customers across cloud and on-premises. When the services are security services (monitoring, vulnerability management, incident response, firewall management), it is a managed security service provider (MSSP).',
    'MSP بخشی یا همه‌ی IT مشتری را در ابر و داخل سازمان اداره می‌کند. وقتی سرویس‌ها امنیتی باشند (پایش، مدیریت آسیب‌پذیری، پاسخ به حادثه، مدیریت فایروال)، MSSP نام دارد.');

  M(T1,'An independent firm is hired to assess whether a cloud provider\'s security controls work as claimed. Which cloud role is this firm playing?',
    'یک شرکت مستقل استخدام می‌شود تا بررسی کند آیا کنترل‌های امنیتی یک ارائه‌دهنده‌ی ابری همان‌طور که ادعا شده کار می‌کنند. این شرکت چه نقشی در ابر دارد؟',
    'ارزیابی شخص ثالث.',
    ['Cloud auditor','Cloud broker (partner)','Cloud carrier','Cloud consumer'],
    ['حسابرس ابری (Cloud auditor)','کارگزار/شریک ابری','حامل ابری','مصرف‌کننده‌ی ابری'],
    'The five roles: cloud service provider (sells the service), cloud consumer (buys it), cloud partner or broker (training, consulting, integration), cloud auditor (independent assessment) and cloud carrier (network connectivity between them).',
    'پنج نقش: ارائه‌دهنده (سرویس را می‌فروشد)، مصرف‌کننده (می‌خرد)، شریک یا کارگزار (آموزش، مشاوره، یکپارچه‌سازی)، حسابرس (ارزیابی مستقل) و حامل (اتصال شبکه بین آن‌ها).');

  /* ---- Deployment & shared responsibility ---- */
  M(T2,'Several universities share a cloud platform that only member institutions can use, because they have similar missions and compliance needs. Which deployment model is this?',
    'چند دانشگاه یک پلتفرم ابری مشترک دارند که فقط اعضا می‌توانند از آن استفاده کنند، چون مأموریت و الزامات انطباق مشابهی دارند. این کدام مدل استقرار است؟',
    'چندمستأجر، اما فقط برای یک گروه خاص.',
    ['Community cloud','Public cloud','Private cloud','Hybrid cloud'],
    ['ابر اجتماعی (Community)','ابر عمومی (Public)','ابر خصوصی (Private)','ابر ترکیبی (Hybrid)'],
    'Community cloud is multitenant, but tenants are limited to a defined community with shared needs. Public cloud is open to any customer. Private cloud serves a single customer. Hybrid cloud ties several models together with a unifying platform.',
    'ابر اجتماعی چندمستأجر است اما مستأجرها به یک جامعه‌ی مشخص با نیازهای مشترک محدودند. ابر عمومی برای هر مشتری باز است. ابر خصوصی فقط یک مشتری دارد. ابر ترکیبی چند مدل را با یک پلتفرم یکپارچه به هم وصل می‌کند.');

  M(T2,'A company runs most workloads in its own private cloud and, through one management platform, automatically sends overflow to a public cloud during busy periods. What is this?',
    'شرکتی بیشتر بارها را در ابر خصوصی خودش اجرا می‌کند و با یک پلتفرم مدیریتی واحد، در زمان‌های شلوغ بار اضافه را خودکار به ابر عمومی می‌فرستد. این چیست؟',
    'ترکیب یکپارچه + Bursting.',
    ['Hybrid cloud with cloud bursting','Community cloud shared by companies','Multitenancy on one public cloud','Edge computing at branch offices'],
    ['ابر ترکیبی با Cloud Bursting','ابر اجتماعی مشترک بین شرکت‌ها','چندمستأجری روی یک ابر عمومی','رایانش لبه در شعبه‌ها'],
    'Hybrid cloud blends public, private and/or community clouds into one coherent platform; simply buying both separately is not hybrid. Sending overflow to the public cloud is public cloud bursting. Hybrid also supports a decentralized design with fewer single points of failure.',
    'ابر ترکیبی ابرهای عمومی، خصوصی و/یا اجتماعی را در یک پلتفرم یکپارچه ترکیب می‌کند؛ فقط خریدن جداگانه‌ی هر دو ترکیبی نیست. فرستادن بار اضافه به ابر عمومی Public cloud bursting است. Hybrid طراحی غیرمتمرکز با نقاط شکست کمتر را هم ممکن می‌کند.');

  M(T2,'A company uses an IaaS virtual server. Under the shared responsibility model, who must patch the guest operating system?',
    'شرکتی از یک سرور مجازی IaaS استفاده می‌کند. طبق مدل مسئولیت مشترک، چه کسی باید سیستم‌عامل مهمان را وصله کند؟',
    'در IaaS، مشتری از سیستم‌عامل به بالا را دارد.',
    ['The customer','The cloud provider','The cloud carrier','The cloud auditor'],
    ['مشتری','ارائه‌دهنده‌ی ابری','حامل ابری','حسابرس ابری'],
    'The provider always secures the physical datacenter and hardware (and the hypervisor). In IaaS the customer secures the OS, apps and data. In PaaS the provider also takes the OS, and app security is shared. In SaaS the provider handles almost everything; the customer handles its data and access settings.',
    'ارائه‌دهنده همیشه مسئول دیتاسنتر فیزیکی و سخت‌افزار (و Hypervisor) است. در IaaS مشتری مسئول سیستم‌عامل، اپ و داده است. در PaaS سیستم‌عامل هم با ارائه‌دهنده است و امنیت اپ مشترک است. در SaaS تقریباً همه چیز با ارائه‌دهنده است؛ مشتری فقط داده و تنظیمات دسترسی را دارد.');

  M(T2,'In which service model does the customer carry the LEAST security responsibility?',
    'در کدام مدل سرویس، مشتری «کمترین» مسئولیت امنیتی را دارد؟',
    'اپ کامل آماده.',
    ['SaaS','PaaS','IaaS','On-premises'],
    ['SaaS','PaaS','IaaS','داخل سازمان (On-premises)'],
    'In SaaS the provider runs everything from the datacenter to the application. The customer still owns its choice of data and the access controls inside the app. On-premises, the organization is responsible for everything.',
    'در SaaS ارائه‌دهنده همه چیز را از دیتاسنتر تا اپ اداره می‌کند. مشتری هنوز مالک انتخاب داده و کنترل‌های دسترسی داخل اپ است. در On-premises همه‌ی مسئولیت با خود سازمان است.');

  M(T2,'A compliance team needs a spreadsheet that maps cloud security controls to regulations such as PCI DSS and HIPAA. Which reference fits best?',
    'تیم انطباق یک جدول می‌خواهد که کنترل‌های امنیتی ابر را به مقرراتی مثل PCI DSS و HIPAA نگاشت کند. کدام مرجع مناسب‌تر است؟',
    'Cloud Security Alliance.',
    ['CSA Cloud Controls Matrix (CCM)','NIST SP 500-292 Cloud Reference Architecture','The OWASP Top 10','MITRE ATT&CK'],
    ['CSA Cloud Controls Matrix (CCM)','NIST SP 500-292 (معماری مرجع ابر)','OWASP Top 10','MITRE ATT&CK'],
    'The Cloud Security Alliance\'s Cloud Controls Matrix maps cloud controls to many standards and regulations. NIST SP 500-292 is a high-level reference architecture and taxonomy, including the five cloud roles. Document who owns each control, especially for PCI DSS.',
    'Cloud Controls Matrix از CSA کنترل‌های ابری را به استانداردها و مقررات زیادی نگاشت می‌کند. NIST SP 500-292 یک معماری مرجع و طبقه‌بندی سطح بالاست که پنج نقش ابری را هم دارد. مستند کن هر کنترل با کیست، مخصوصاً برای PCI DSS.');

  M(T2,'Remote oil well sensors have weak connections, so a small gateway box at each well collects the sensor data and summarizes it before sending it to the cloud. The sensors themselves do no processing. What is this?',
    'حسگرهای چاه‌های نفت دورافتاده اتصال ضعیفی دارند، پس یک جعبه‌ی Gateway کوچک کنار هر چاه داده‌ی حسگرها را جمع و خلاصه می‌کند و بعد به ابر می‌فرستد. خود حسگرها پردازشی نمی‌کنند. این چیست؟',
    'پردازش در Gateway نزدیک، نه روی حسگر.',
    ['Fog computing','Edge computing','Thin client computing','Serverless computing'],
    ['رایانش مه (Fog)','رایانش لبه (Edge)','رایانش Thin client','رایانش Serverless'],
    'Fog computing preprocesses data on nearby IoT gateway devices. Edge computing puts the processing on the sensors or devices themselves at the edge of the network. Both reduce the data sent back over weak links.',
    'Fog computing داده را روی Gatewayهای IoT نزدیک پیش‌پردازش می‌کند. Edge computing پردازش را روی خود حسگر یا دستگاه در لبه‌ی شبکه می‌گذارد. هر دو داده‌ی ارسالی روی اتصال ضعیف را کم می‌کنند.');

  M(T2,'A Canadian company\'s cloud provider stores customer backups in datacenters in three other countries. Which concern does this raise?',
    'ارائه‌دهنده‌ی ابری یک شرکت کانادایی، پشتیبان مشتری‌ها را در دیتاسنترهایی در سه کشور دیگر نگه می‌دارد. این چه نگرانی‌ای ایجاد می‌کند؟',
    'قانون کجا اعمال می‌شود؟',
    ['Data sovereignty: each country\'s laws may apply','Multitenancy with other customers on the same hosts','VM sprawl from backup servers nobody tracks','Resource reuse of disks that were not wiped'],
    ['حاکمیت داده: ممکن است قانون هر کشور اعمال شود','چندمستأجری با مشتری‌های دیگر روی همان میزبان‌ها','VM Sprawl از سرورهای پشتیبانی که کسی ردیابی نمی‌کند','استفاده‌ی دوباره از دیسک‌هایی که پاک نشده‌اند'],
    'Data sovereignty means data is subject to the laws of every jurisdiction where it is collected, stored or processed. Choose allowed regions when the provider offers it, know where your data goes, and consider encrypting with keys the provider does not control.',
    'حاکمیت داده یعنی داده تابع قانون هر حوزه‌ای است که در آن جمع‌آوری، ذخیره یا پردازش می‌شود. اگر ارائه‌دهنده اجازه دهد Regionهای مجاز را انتخاب کن، بدان داده‌ات کجا می‌رود و رمزگذاری با کلیدی که دست ارائه‌دهنده نیست را در نظر بگیر.');

  /* ---- Virtualization, containers & storage ---- */
  M(T3,'Which hypervisor runs directly on the server hardware with no host operating system underneath and is the usual choice in datacenters?',
    'کدام Hypervisor مستقیم روی سخت‌افزار سرور و بدون سیستم‌عامل میزبان اجرا می‌شود و انتخاب معمول دیتاسنترهاست؟',
    'Bare metal.',
    ['Type I (bare-metal) hypervisor','Type II (hosted) hypervisor','A container runtime','A guest operating system'],
    ['Hypervisor نوع اول (Bare-metal)','Hypervisor نوع دوم (روی سیستم‌عامل)','Container runtime','سیستم‌عامل مهمان'],
    'Type I hypervisors sit directly on hardware and are efficient, so datacenters and clouds use them. Type II hypervisors run as an app on a host OS (common on personal computers) and are less efficient because of that extra layer.',
    'Hypervisor نوع اول مستقیم روی سخت‌افزار است و کارآمد است، پس دیتاسنتر و ابر از آن استفاده می‌کنند. نوع دوم مثل یک اپ روی سیستم‌عامل میزبان اجرا می‌شود (رایج روی کامپیوتر شخصی) و به خاطر آن لایه‌ی اضافه کم‌بازده‌تر است.');

  M(T3,'An attacker with control of one guest VM exploits a flaw to read memory belonging to another VM on the same host. What is this, and what is supposed to prevent it?',
    'مهاجمی که یک VM مهمان را در دست دارد از یک ضعف استفاده می‌کند تا حافظه‌ی یک VM دیگر روی همان میزبان را بخواند. این چیست و چه چیزی قرار است جلویش را بگیرد؟',
    'فرار از قفس.',
    ['VM escape; the hypervisor\'s isolation','Resource reuse; the guest OS firewall','VM sprawl; an asset inventory','Data sovereignty; encryption'],
    ['فرار از VM (VM escape)؛ جداسازی Hypervisor','استفاده‌ی دوباره از منابع؛ فایروال سیستم‌عامل مهمان','VM sprawl؛ فهرست دارایی','حاکمیت داده؛ رمزگذاری'],
    'VM escape is the most serious virtualization flaw, especially when VMs of different security levels share a host. The hypervisor\'s main job is isolation; keep it patched and separate high- and low-security workloads.',
    'VM escape جدی‌ترین ضعف مجازی‌سازی است، مخصوصاً وقتی VMهای با سطح امنیت متفاوت روی یک میزبان باشند. کار اصلی Hypervisor جداسازی است؛ آن را وصله‌شده نگه دار و بارهای حساس و کم‌حساس را جدا کن.');

  M(T3,'A new cloud customer gets a storage volume and finds leftover files from the previous customer who used that hardware. Which vulnerability is this?',
    'یک مشتری جدید ابری یک Volume ذخیره‌سازی می‌گیرد و فایل‌های باقی‌مانده از مشتری قبلیِ آن سخت‌افزار را پیدا می‌کند. این کدام آسیب‌پذیری است؟',
    'منبع بدون پاک‌سازی دوباره داده شده.',
    ['Resource reuse','VM escape','VM sprawl','Multitenancy by design'],
    ['استفاده‌ی دوباره از منابع (Resource reuse)','فرار از VM','VM sprawl','چندمستأجری'],
    'Resource reuse happens when hardware (disk, memory) is reassigned to another customer without properly wiping it. Encrypting your own data protects you even if remnants are left behind.',
    'Resource reuse وقتی رخ می‌دهد که سخت‌افزار (دیسک، حافظه) بدون پاک‌سازی درست به مشتری دیگری داده شود. رمزگذاری داده‌ی خودت حتی اگر باقی‌مانده‌ای بماند از تو محافظت می‌کند.');

  M(T3,'An audit finds dozens of forgotten test VMs that nobody owns. They are unpatched and still cost money every month. What is this problem, and what prevents it?',
    'یک ممیزی ده‌ها VM آزمایشی فراموش‌شده پیدا می‌کند که مالکی ندارند. وصله نشده‌اند و هنوز هر ماه هزینه دارند. این مشکل چیست و چه چیزی جلویش را می‌گیرد؟',
    'VMها مثل علف هرز پخش شده‌اند.',
    ['VM sprawl; tracking every instance','VM escape; switching to a Type I hypervisor','Resource reuse; wiping disks before reuse','Data sovereignty; locking data to one region'],
    ['VM Sprawl؛ ردیابی همه‌ی Instanceها','VM Escape؛ رفتن به Hypervisor نوع اول','Resource Reuse؛ پاک کردن دیسک قبل از استفاده‌ی دوباره','حاکمیت داده؛ قفل کردن داده به یک Region'],
    'VM sprawl is instances created and then forgotten or abandoned, building up cost and security gaps. Instance awareness, tagging owners and automatic cleanup prevent it.',
    'VM sprawl یعنی Instanceهایی که ساخته و بعد فراموش یا رها شده‌اند و هزینه و ضعف امنیتی جمع می‌کنند. آگاهی از Instanceها، برچسب مالک و پاک‌سازی خودکار جلویش را می‌گیرد.');

  M(T3,'A team packages an app with its libraries so it runs the same on any host, sharing the host\'s kernel instead of carrying a full OS. Which NIST practice helps secure this?',
    'تیمی یک اپ را با کتابخانه‌هایش بسته‌بندی می‌کند تا روی هر میزبانی یکسان اجرا شود و به جای داشتن یک سیستم‌عامل کامل، از Kernel میزبان استفاده کند. کدام توصیه‌ی NIST به امن کردنش کمک می‌کند؟',
    'کانتینر؛ مثل VM محافظتش کن.',
    ['Use a container-specific host OS and group containers by risk','Run every container as root so the libraries stay compatible','Put all containers on one flat network to simplify traffic','Turn off image vulnerability scanning to keep images small'],
    ['از سیستم‌عامل میزبان مخصوص کانتینر استفاده کن و کانتینرها را بر اساس ریسک جدا کن','همه‌ی کانتینرها را با root اجرا کن تا کتابخانه‌ها سازگار بمانند','همه‌ی کانتینرها را برای سادگی در یک شبکه‌ی تخت بگذار','اسکن آسیب‌پذیری Image را خاموش کن تا Image کوچک بماند'],
    'Containers (for example Docker) give application-level virtualization and must be isolated like VMs. NIST suggests stripped-down container host OSs to shrink the attack surface, segmenting containers by risk and purpose, and container-aware vulnerability tools.',
    'کانتینرها (مثلاً Docker) مجازی‌سازی در سطح اپ می‌دهند و باید مثل VM جدا نگه داشته شوند. NIST توصیه می‌کند سیستم‌عامل میزبانِ کم‌حجم مخصوص کانتینر (سطح حمله‌ی کمتر)، تفکیک کانتینرها بر اساس ریسک و کاربرد، و ابزار آسیب‌پذیری مخصوص کانتینر.');

  M(T3,'A team needs a disk that a cloud VM will format with a file system and use like a local drive. Which storage type is this, and how is it billed?',
    'تیمی دیسکی لازم دارد که یک VM ابری آن را با فایل‌سیستم فرمت کند و مثل درایو محلی استفاده کند. این کدام نوع ذخیره‌ساز است و چطور هزینه می‌شود؟',
    'از قبل تخصیص داده می‌شود.',
    ['Block storage; you pay for the full allocated size','Object storage; you pay only for what you store','Object storage; you pay for the full allocated size','Block storage; it is free with the VM'],
    ['Block storage؛ برای کل اندازه‌ی تخصیص‌یافته پول می‌دهی','Object storage؛ فقط برای مقدار ذخیره‌شده پول می‌دهی','Object storage؛ برای کل اندازه‌ی تخصیص‌یافته','Block storage؛ همراه VM رایگان است'],
    'Block storage (like AWS EBS) is preallocated volumes used as virtual disks; you pay for the allocated size and it costs more. Object storage (like AWS S3) holds files in buckets reached over the web or API; you pay for what you use. For both: set permissions carefully, plan for durability and replication, and encrypt.',
    'Block storage (مثل AWS EBS) Volumeهای از پیش تخصیص‌یافته است که مثل دیسک مجازی استفاده می‌شود؛ برای اندازه‌ی تخصیص‌یافته پول می‌دهی و گران‌تر است. Object storage (مثل AWS S3) فایل‌ها را در Bucket نگه می‌دارد که از وب یا API در دسترس‌اند؛ به اندازه‌ی مصرف پول می‌دهی. برای هر دو: مجوزها را دقیق تنظیم کن، برای دوام و Replication برنامه داشته باش و رمز کن.');

  M(T3,'A sensitive PDF in an object storage bucket shows up in search engine results. What is the most likely cause?',
    'یک PDF حساس در یک Bucket ذخیره‌ساز شیء در نتایج موتور جستجو پیدا می‌شود. محتمل‌ترین علت چیست؟',
    'چند کلیک اشتباه.',
    ['The bucket\'s permissions were set to public','A VM escape on the storage provider\'s host','The block storage volume was too small','A Type II hypervisor was used for storage'],
    ['مجوز Bucket عمومی تنظیم شده بود','VM Escape روی میزبان ارائه‌دهنده‌ی ذخیره‌سازی','Volume ذخیره‌سازی بلوکی خیلی کوچک بود','برای ذخیره‌سازی از Hypervisor نوع دوم استفاده شده بود'],
    'Misconfigured permissions on object storage are a common cloud breach cause: a few wrong clicks can publish files to the whole web. Review bucket policies, block public access by default and encrypt sensitive data.',
    'مجوزهای اشتباه روی Object storage یکی از علت‌های رایج نشت داده در ابر است: چند کلیک اشتباه می‌تواند فایل را برای کل وب منتشر کند. Policyهای Bucket را بازبینی کن، دسترسی عمومی را به طور پیش‌فرض ببند و داده‌ی حساس را رمز کن.');

  /* ---- Cloud security controls ---- */
  M(T4,'A cloud web server should accept only HTTPS from the internet and SSH from the office IP range. Which cloud feature should enforce this?',
    'یک وب‌سرور ابری باید فقط HTTPS را از اینترنت و SSH را از محدوده‌ی IP دفتر بپذیرد. کدام قابلیت ابر باید این را اعمال کند؟',
    'فایروال مجازی خود ارائه‌دهنده.',
    ['A security group','A resource policy','A CASB','An HSM'],
    ['Security group (گروه امنیتی)','Resource policy','CASB','HSM'],
    'Security groups are sets of firewall-like rules attached to cloud instances, working at the network layer. Providers offer them instead of direct access to their physical firewalls, to keep tenants isolated. Web application firewalls cover higher layers.',
    'Security group مجموعه‌ای از قوانین شبیه فایروال است که به Instanceهای ابری وصل می‌شود و در لایه‌ی شبکه کار می‌کند. ارائه‌دهنده‌ها به جای دسترسی مستقیم به فایروال فیزیکی این را می‌دهند تا مستأجرها جدا بمانند. WAF لایه‌های بالاتر را پوشش می‌دهد.');

  M(T4,'An architect puts the web tier in a public subnet and the database tier in a private subnet with no direct internet access. Which cloud feature provides this segmentation?',
    'یک معمار لایه‌ی وب را در یک Subnet عمومی و لایه‌ی پایگاه داده را در یک Subnet خصوصی بدون دسترسی مستقیم به اینترنت می‌گذارد. کدام قابلیت ابر این تفکیک را فراهم می‌کند؟',
    'معادل VLAN در ابر.',
    ['A virtual private cloud (VPC)','A secure web gateway','A hardware security module','Function as a service'],
    ['ابر خصوصی مجازی (VPC)','Secure web gateway','ماژول امنیت سخت‌افزاری (HSM)','تابع به عنوان سرویس'],
    'A VPC is the cloud version of VLAN segmentation: systems are grouped into public or private subnets. VPC endpoints connect VPCs to each other (or to provider services) over the provider\'s backbone, and transit gateways connect VPCs to on-premises networks.',
    'VPC نسخه‌ی ابری تفکیک با VLAN است: سیستم‌ها در Subnetهای عمومی یا خصوصی گروه‌بندی می‌شوند. VPC endpoint، VPCها را به هم (یا به سرویس‌های ارائه‌دهنده) روی شبکه‌ی اصلی ارائه‌دهنده وصل می‌کند و Transit gateway، VPCها را به شبکه‌ی داخل سازمان وصل می‌کند.');

  M(T4,'A company wants to connect its on-premises datacenter VLANs directly and securely to several cloud VPCs for hybrid operations. What should it use?',
    'شرکتی می‌خواهد VLANهای دیتاسنتر داخلی‌اش را مستقیم و امن به چند VPC ابری برای کار ترکیبی وصل کند. از چه استفاده کند؟',
    'دروازه‌ی عبور بین ابر و داخل سازمان.',
    ['A transit gateway','A VPC endpoint','A security group','A secure web gateway'],
    ['Transit gateway','VPC endpoint','Security group','Secure web gateway (SWG)'],
    'Cloud transit gateways interconnect VPCs with on-premises networks. VPC endpoints link VPCs and services over the provider\'s backbone. A secure web gateway filters users\' web requests and is not a network interconnect.',
    'Transit gateway، VPCها را به شبکه‌های داخل سازمان وصل می‌کند. VPC endpoint، VPCها و سرویس‌ها را روی شبکه‌ی اصلی ارائه‌دهنده به هم می‌رساند. Secure web gateway درخواست‌های وب کاربران را فیلتر می‌کند و اتصال شبکه نیست.');

  M(T4,'The team defines its servers, networks and security groups in YAML templates kept in version control, and a pipeline builds them automatically. What is this?',
    'تیم سرورها، شبکه‌ها و Security groupهایش را در قالب‌های YAML تعریف می‌کند که در Version control نگه داشته می‌شوند و یک Pipeline خودکار آن‌ها را می‌سازد. این چیست؟',
    'زیرساخت با کد، نه با کلیک.',
    ['Infrastructure as code (IaC)','Using the provider\'s web console','VM sprawl','Platform diversity'],
    ['زیرساخت به عنوان کد (IaC)','استفاده از کنسول وب ارائه‌دهنده','VM sprawl','تنوع پلتفرم'],
    'IaC automates provisioning, changes and deprovisioning through code (JSON, YAML, API scripts, for example AWS CloudFormation) instead of manual clicks. It is a key DevOps enabler: repeatable, reviewable and consistent. Clicking in the web console is not IaC.',
    'IaC ساخت، تغییر و حذف زیرساخت را با کد (JSON، YAML، اسکریپت API، مثلاً AWS CloudFormation) به جای کلیک دستی خودکار می‌کند. کلید DevOps است: تکرارپذیر، قابل بازبینی و یکنواخت. کلیک کردن در کنسول وب IaC نیست.');

  M(T4,'An app is built from many small, independent services, each doing one job and talking to the others through APIs. What is this design called, and what extra control helps protect it?',
    'یک اپ از تعداد زیادی سرویس کوچک و مستقل ساخته شده که هرکدام یک کار انجام می‌دهد و از طریق API با بقیه حرف می‌زند. اسم این طراحی چیست و چه کنترل اضافه‌ای به محافظتش کمک می‌کند؟',
    'سرویس‌های ریز + API.',
    ['Microservices; API inspection, often in a WAF','A monolith; a bigger server with more memory','Type II virtualization; a host-based firewall','A cold site; geographic dispersion of services'],
    ['میکروسرویس؛ بازرسی API، معمولاً در WAF','یکپارچه (Monolith)؛ سرور بزرگ‌تر با حافظه‌ی بیشتر','مجازی‌سازی نوع دوم؛ فایروال روی میزبان','سایت سرد؛ پراکندگی جغرافیایی سرویس‌ها'],
    'Microservices provide narrow functions to other services, often as FaaS, and react to events through APIs. Because so much depends on APIs, use secure coding plus API inspection that checks requests for attacks.',
    'میکروسرویس‌ها کارهای ریز را برای سرویس‌های دیگر انجام می‌دهند، اغلب به شکل FaaS، و از طریق API به رویدادها پاسخ می‌دهند. چون همه چیز به API وابسته است، کدنویسی امن به اضافه‌ی بازرسی API که درخواست‌ها را برای حمله بررسی می‌کند لازم است.');

  M(T4,'A company uses dozens of SaaS apps and wants one tool that sits between users and those services to see activity and block uploads that break policy before they reach the cloud. Which option fits?',
    'شرکتی از ده‌ها اپ SaaS استفاده می‌کند و یک ابزار می‌خواهد که بین کاربران و این سرویس‌ها بنشیند، فعالیت را ببیند و بارگذاری‌هایی را که سیاست را نقض می‌کنند قبل از رسیدن به ابر مسدود کند. کدام گزینه مناسب است؟',
    'کارگزار امنیتی، در مسیر.',
    ['An inline CASB','An API-based CASB','A security group','A resource policy'],
    ['CASB درون‌خطی (Inline)','CASB مبتنی بر API','Security group','Resource policy'],
    'A cloud access security broker enforces consistent policy across many cloud services. Inline CASBs sit in the traffic path (appliance or endpoint agent) and can block requests, but need network or device setup. API-based CASBs talk to the provider directly, need no device setup, but can only monitor and fix things after the fact.',
    'CASB سیاست یکسان را روی سرویس‌های ابری زیادی اعمال می‌کند. CASB درون‌خطی در مسیر ترافیک است (دستگاه یا Agent روی سیستم) و می‌تواند درخواست را مسدود کند، اما تنظیم شبکه یا دستگاه لازم دارد. CASB مبتنی بر API مستقیم با ارائه‌دهنده حرف می‌زند، تنظیم دستگاه لازم ندارد، اما فقط می‌تواند پایش کند و بعداً اصلاح کند.');

  M(T4,'A cloud admin wants to stop staff from launching expensive large server types and from using any region outside North America. Which control fits best?',
    'یک مدیر ابر می‌خواهد کارکنان نتوانند سرورهای بزرگ و گران راه بیندازند یا از هر Region بیرون از آمریکای شمالی استفاده کنند. کدام کنترل مناسب‌تر است؟',
    'سیاستی که کارهای مجاز حساب را محدود می‌کند.',
    ['A resource policy','A security group','Multifactor authentication','A secure web gateway'],
    ['Resource policy (سیاست منابع)','Security group','احراز هویت چندعاملی','Secure web gateway'],
    'Resource policies (such as service control policies written in JSON) limit what actions accounts can take, which regions they can use and which instance types they can launch. They limit damage from mistakes, compromised accounts and malicious insiders, and control cost.',
    'Resource policy (مثل Service control policy نوشته‌شده با JSON) محدود می‌کند حساب‌ها چه کارهایی بکنند، از کدام Region استفاده کنند و چه نوع Instanceی بسازند. آسیب ناشی از اشتباه، حساب لو رفته و خرابکار داخلی را محدود و هزینه را کنترل می‌کند.');

  M(T4,'A company needs to generate and use encryption keys so that no single person, including cloud provider staff, ever sees the raw key. What should it use?',
    'شرکتی باید کلیدهای رمزگذاری بسازد و استفاده کند طوری که هیچ‌کس، حتی کارکنان ارائه‌دهنده‌ی ابر، هرگز کلید خام را نبیند. از چه استفاده کند؟',
    'دستگاه سخت‌افزاری مخصوص کلید.',
    ['A hardware security module (HSM)','A security group on the key server','A transit gateway between networks','An API-based CASB for cloud apps'],
    ['ماژول امنیت سخت‌افزاری (HSM)','Security Group روی سرور کلید','Transit Gateway بین شبکه‌ها','CASB مبتنی بر API برای برنامه‌های ابری'],
    'HSMs are special devices that create, store and use keys and do crypto operations without exposing keys to people. They are expensive but very secure. Cloud providers offer HSM services so customers can manage their own keys without exposing them to the provider.',
    'HSM دستگاه مخصوصی است که کلید را می‌سازد، نگه می‌دارد و استفاده می‌کند و عملیات رمزنگاری را بدون نشان دادن کلید به آدم‌ها انجام می‌دهد. گران اما خیلی امن است. ارائه‌دهنده‌های ابری سرویس HSM می‌دهند تا مشتری کلیدهای خودش را بدون افشا برای ارائه‌دهنده مدیریت کند.');

  M(T4,'A company runs workloads on AWS, Azure and Google Cloud and wants one security tool that works the same way across all three. Which approach fits best?',
    'شرکتی بارها را روی AWS، Azure و Google Cloud اجرا می‌کند و یک ابزار امنیتی می‌خواهد که روی هر سه یکسان کار کند. کدام رویکرد مناسب‌تر است؟',
    'بومی هر ابر فقط با همان ابر کار می‌کند.',
    ['A third-party control','A cloud-native control from one provider','An internally built control for each cloud','No control, because providers secure everything'],
    ['کنترل شخص ثالث','کنترل بومی یک ارائه‌دهنده','کنترل ساخت داخل برای هر ابر','هیچ کنترلی، چون ارائه‌دهنده همه چیز را امن می‌کند'],
    'Cloud-native controls integrate tightly with their own provider and are often cheaper and easier. Third-party controls usually cost more but work across many providers, which suits multicloud environments and reduces admin effort.',
    'کنترل‌های بومی ابر با ارائه‌دهنده‌ی خودشان یکپارچه‌اند و اغلب ارزان‌تر و راحت‌ترند. کنترل‌های شخص ثالث معمولاً گران‌ترند اما روی چند ارائه‌دهنده کار می‌کنند که برای محیط Multicloud مناسب است و کار مدیریتی را کم می‌کند.');

  M(T4,'Before signing with a cloud vendor, what contract clause best gives the customer assurance that the vendor is protecting its data as promised?',
    'قبل از امضای قرارداد با یک فروشنده‌ی ابری، کدام بند قرارداد بهتر به مشتری اطمینان می‌دهد که فروشنده طبق قول از داده‌اش محافظت می‌کند؟',
    'حق بررسی.',
    ['A right-to-audit clause','A clause promising unlimited free storage','A clause banning multitenancy on all hosts','A clause requiring a Type II hypervisor'],
    ['بند حق ممیزی','بند فضای ذخیره‌ی رایگان نامحدود','بند ممنوعیت چندمستأجری روی همه‌ی میزبان‌ها','بند الزام Hypervisor نوع دوم'],
    'Cloud governance covers vetting vendors, watching their stability and managing the cloud portfolio. Contracts should guarantee the right to audit, either directly or through an independent third party, so the customer can verify security and data protection.',
    'حاکمیت ابر شامل ارزیابی فروشنده‌ها، پایش ثبات آن‌ها و مدیریت مجموعه‌ی سرویس‌های ابری است. قرارداد باید حق ممیزی را تضمین کند، مستقیم یا با حسابرس مستقل، تا مشتری بتواند امنیت و حفاظت از داده را بررسی کند.');

  M(T4,'A company moves a critical app to one virtual server in one cloud availability zone and assumes the cloud makes it highly available. What is wrong with this assumption?',
    'شرکتی یک اپ حیاتی را روی یک سرور مجازی در یک Availability zone ابری می‌برد و فرض می‌کند ابر خودش آن را High availability می‌کند. این فرض چه اشکالی دارد؟',
    'HA خودکار نیست.',
    ['High availability must be designed, e.g. across several zones','Nothing; every cloud service is highly available by default','Nothing; availability zones are built so they never fail','Only SaaS products can be highly available, not servers'],
    ['High Availability باید طراحی شود، مثلاً در چند Zone','هیچ اشکالی؛ همه‌ی سرویس‌های ابری به‌طور پیش‌فرض HA هستند','هیچ اشکالی؛ Availability Zoneها طوری ساخته شده‌اند که هرگز خراب نشوند','فقط محصولات SaaS می‌توانند HA باشند، نه سرورها'],
    'Base cloud services do not guarantee high availability. Customers must configure and often pay for redundancy, such as servers in several zones or regions behind a load balancer, plus replicated storage and backups.',
    'سرویس‌های پایه‌ی ابر High availability را تضمین نمی‌کنند. مشتری باید افزونگی را تنظیم و اغلب خریداری کند، مثل سرور در چند Zone یا Region پشت Load balancer، به اضافه‌ی ذخیره‌ساز تکثیرشده و پشتیبان.');

  /* ================= STUDY NOTES ================= */
  pack.study=pack.study||{};
  var H=function(en,fa){return{k:'h',en:en,fa:fa}};
  var PP=function(en,fa){return{k:'p',en:en,fa:fa}};
  var TT=function(en,fa){return{k:'tip',en:en,fa:fa}};
  var L=function(items){return{k:'ul',en:items.map(function(x){return x[0]}),fa:items.map(function(x){return x[1]})}};
  var TB=function(h,r){return{k:'tbl',h:h,r:r}};

  pack.study['10']={t:['Cloud and virtualization security','امنیت ابر و مجازی‌سازی'],b:[
    PP('Matched to Chapter 10 of the course textbook (objectives 2.3, 3.1, 3.3 and 4.1). These are short review notes in our own words; read the chapter itself for the full explanation.',
      'این بخش با فصل ۱۰ کتاب درس جور است (سرفصل‌های 2.3، 3.1، 3.3 و 4.1). این‌ها یادداشت‌های کوتاه مرور به زبان خودمان است؛ توضیح کامل را در خود کتاب بخوان.'),

    H('Cloud basics','مبانی ابر'),
    L([['NIST: on-demand network access to a shared pool of configurable resources, provisioned and released quickly with little provider interaction (self-service, no sales team).','NIST: دسترسی شبکه‌ای و درلحظه به مجموعه‌ی مشترکی از منابع قابل پیکربندی که سریع و با کمترین تعامل با ارائه‌دهنده ساخته و آزاد می‌شوند (سلف‌سرویس، بدون تیم فروش).'],
       ['Benefits: self-service, scalability (vertical = bigger server, horizontal = more servers), elasticity (grow AND shrink automatically), measured service (pay for use), agility. Multitenancy = many customers on shared hardware.','مزایا: سلف‌سرویس، مقیاس‌پذیری (عمودی = سرور بزرگ‌تر، افقی = سرور بیشتر)، کشسانی (بزرگ «و» کوچک شدن خودکار)، سرویس اندازه‌گیری‌شده (پرداخت به اندازه‌ی مصرف)، چابکی. Multitenancy = چند مشتری روی سخت‌افزار مشترک.'],
       ['Roles: provider, consumer, partner/broker, auditor, carrier. One organization can be both consumer and provider.','نقش‌ها: ارائه‌دهنده، مصرف‌کننده، شریک/کارگزار، حسابرس، حامل. یک سازمان می‌تواند هم مصرف‌کننده و هم ارائه‌دهنده باشد.'],
       ['MSP runs IT for customers; MSSP provides managed security (monitoring, vulnerability management, IR, firewalls).','MSP، IT مشتری را اداره می‌کند؛ MSSP امنیت مدیریت‌شده می‌دهد (پایش، مدیریت آسیب‌پذیری، پاسخ به حادثه، فایروال).']]),
    TB([['Model','مدل'],['You get','می‌گیری'],['Customer secures','مشتری امن می‌کند']],[
      [['IaaS','IaaS'],['Compute, storage, network (AWS, Azure, GCP)','پردازش، ذخیره‌ساز، شبکه'],['OS, apps, data, security groups','سیستم‌عامل، اپ، داده، Security group']],
      [['PaaS / FaaS','PaaS / FaaS'],['Platform to run your own code; FaaS = serverless functions on events','پلتفرم برای کد خودت؛ FaaS = تابع Serverless با رویداد'],['Data, its config; app shared','داده و تنظیماتش؛ اپ مشترک']],
      [['SaaS','SaaS'],['A complete managed app (email, CRM, ERP) in a browser','اپ کامل مدیریت‌شده (ایمیل، CRM، ERP) در مرورگر'],['Choice of data and in-app access controls','انتخاب داده و کنترل دسترسی داخل اپ']]]),
    TT('The provider ALWAYS secures the physical datacenter and hardware. Responsibility moves to the provider as you go IaaS → PaaS → SaaS. Document the split (the responsibility matrix), especially for PCI DSS.',
      'ارائه‌دهنده «همیشه» مسئول دیتاسنتر فیزیکی و سخت‌افزار است. هرچه از IaaS به PaaS و SaaS می‌رویم مسئولیت بیشتری با ارائه‌دهنده است. تقسیم کار (Responsibility matrix) را مستند کن، مخصوصاً برای PCI DSS.'),

    H('Deployment models and references','مدل‌های استقرار و مراجع'),
    TB([['Deployment','استقرار'],['Who uses it','چه کسی استفاده می‌کند']],[
      [['Public','عمومی'],['Any customer, multitenant','هر مشتری، چندمستأجر']],
      [['Private','خصوصی'],['One customer only (can be run by a third party); less cost-efficient','فقط یک مشتری (ممکن است شخص ثالث اداره کند)؛ کم‌صرفه‌تر']],
      [['Community','اجتماعی'],['Multitenant, limited to a community with shared needs','چندمستأجر، محدود به یک جامعه با نیاز مشترک']],
      [['Hybrid','ترکیبی'],['Mix tied together by one unifying platform (e.g., cloud bursting, AWS Outposts)','ترکیب با یک پلتفرم یکپارچه (مثلاً Cloud bursting، AWS Outposts)']]]),
    L([['Centralized vs decentralized: hybrid/multi-provider designs spread components to reduce single points of failure.','متمرکز در برابر غیرمتمرکز: طراحی ترکیبی/چندارائه‌دهنده اجزا را پخش می‌کند تا نقطه‌ی شکست کمتر شود.'],
       ['CSA Cloud Controls Matrix = maps cloud controls to regulations. NIST SP 500-292 = cloud reference architecture and roles.','CSA CCM = نگاشت کنترل‌های ابری به مقررات. NIST SP 500-292 = معماری مرجع ابر و نقش‌ها.'],
       ['Edge computing = processing on the sensor/device itself. Fog computing = processing on a nearby IoT gateway.','Edge = پردازش روی خود حسگر/دستگاه. Fog = پردازش روی Gateway نزدیک IoT.'],
       ['Data sovereignty: data follows the laws of every place it is collected, stored or processed. Choose regions; encrypt with keys you control.','حاکمیت داده: داده تابع قانون هر جایی است که جمع، ذخیره یا پردازش شود. Region را انتخاب کن؛ با کلیدی که خودت کنترل می‌کنی رمز کن.']]),

    H('Virtualization, containers and storage','مجازی‌سازی، کانتینر و ذخیره‌ساز'),
    L([['Hypervisor job #1 = isolation. Type I = bare metal (datacenters, efficient). Type II = app on a host OS (desktops, less efficient).','کار اول Hypervisor = جداسازی. نوع اول = روی سخت‌افزار (دیتاسنتر، کارآمد). نوع دوم = اپ روی سیستم‌عامل میزبان (دسکتاپ، کم‌بازده‌تر).'],
       ['VM escape = break out of one VM into another or the host (most serious). Resource reuse = leftover data on reassigned hardware. VM sprawl = forgotten instances; fix with instance awareness.','VM escape = فرار از یک VM به VM دیگر یا میزبان (جدی‌ترین). Resource reuse = داده‌ی باقی‌مانده روی سخت‌افزار واگذارشده. VM sprawl = Instanceهای فراموش‌شده؛ با آگاهی از Instanceها حل می‌شود.'],
       ['Containers (Docker) = application-level virtualization sharing the host kernel. NIST: container-specific host OS, segment by risk/purpose, container-aware vulnerability tools.','کانتینر (Docker) = مجازی‌سازی در سطح اپ با Kernel مشترک میزبان. NIST: سیستم‌عامل مخصوص کانتینر، تفکیک بر اساس ریسک/کاربرد، ابزار آسیب‌پذیری مخصوص کانتینر.'],
       ['Block storage (EBS) = preallocated virtual disks, pay for allocated size, pricier. Object storage (S3) = files in buckets via web/API, pay for use. Set permissions, plan durability/replication, encrypt.','Block (EBS) = دیسک مجازی از پیش تخصیص‌یافته، پرداخت برای کل اندازه، گران‌تر. Object (S3) = فایل در Bucket از طریق وب/API، پرداخت به اندازه‌ی مصرف. مجوز، دوام/Replication و رمزگذاری را رعایت کن.']]),

    H('Hardening cloud infrastructure','سخت‌سازی زیرساخت ابر'),
    TB([['Control','کنترل'],['What it does','کارش']],[
      [['Security group','Security group'],['Firewall-like rules on instances (network layer)','قوانین شبیه فایروال روی Instance (لایه‌ی شبکه)']],
      [['VPC','VPC'],['Cloud segmentation into public/private subnets (like VLANs)','تفکیک ابری به Subnet عمومی/خصوصی (مثل VLAN)']],
      [['VPC endpoint / transit gateway','VPC endpoint / Transit gateway'],['Link VPCs over provider backbone / link VPCs to on-prem','اتصال VPCها روی شبکه‌ی ارائه‌دهنده / اتصال VPC به داخل سازمان']],
      [['Resource policy','Resource policy'],['Limit actions, regions, instance types (JSON)','محدود کردن کار، Region، نوع Instance (JSON)']],
      [['CASB','CASB'],['Consistent policy across many cloud services; inline can block, API-based monitors and fixes after','سیاست یکسان روی سرویس‌های ابری؛ Inline مسدود می‌کند، API-based پایش و بعداً اصلاح']],
      [['HSM','HSM'],['Create/use keys without exposing them to people','ساخت/استفاده از کلید بدون افشا برای آدم']],
      [['SWG / API inspection','SWG / بازرسی API'],['Filter users\' web requests / check API calls (often in a WAF)','فیلتر درخواست وب کاربران / بررسی فراخوانی API (اغلب در WAF)']]]),
    L([['IaC = infrastructure defined in code (JSON/YAML, CloudFormation, API scripts); key to DevOps. Using the web console is not IaC. Microservices = small API-driven services.','IaC = زیرساخت تعریف‌شده با کد (JSON/YAML، CloudFormation، اسکریپت API)؛ کلید DevOps. کلیک در کنسول وب IaC نیست. میکروسرویس = سرویس‌های کوچک مبتنی بر API.'],
       ['Cloud-native controls: integrated and cheaper. Third-party controls: cost more but work across providers (multicloud).','کنترل بومی: یکپارچه و ارزان‌تر. شخص ثالث: گران‌تر اما روی چند ارائه‌دهنده (Multicloud).'],
       ['High availability is not automatic; design across zones/regions. Contracts should include a right to audit third-party vendors.','High availability خودکار نیست؛ در چند Zone/Region طراحی کن. قرارداد باید حق ممیزی فروشنده را داشته باشد.']]),

    TT('Exam shortcut: added a CPU = vertical; added servers = horizontal; grows and shrinks = elasticity. IaaS → you patch the OS; SaaS → provider does almost all. Hybrid needs a unifying platform. Hypervisor stops VM escape. Expensive instances → resource policy; on-prem to VPC → transit gateway; many SaaS apps → CASB.',
      'نکته‌ی امتحان: CPU اضافه = عمودی؛ سرور اضافه = افقی؛ بزرگ و کوچک شدن = کشسانی. IaaS ← تو سیستم‌عامل را وصله می‌کنی؛ SaaS ← تقریباً همه با ارائه‌دهنده. Hybrid پلتفرم یکپارچه لازم دارد. Hypervisor جلوی VM escape را می‌گیرد. Instance گران ← Resource policy؛ داخل سازمان به VPC ← Transit gateway؛ چندین اپ SaaS ← CASB.')
  ]};
})();
