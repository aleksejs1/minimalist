export const languages = {
  en: 'English',
  ru: 'Русский',
  lv: 'Latviešu',
} as const;

export type SupportedLanguage = keyof typeof languages;
export const defaultLang: SupportedLanguage = 'en';

export const ui = {
  en: {
    'site.title': 'minimalist.lv',
    'site.tagline': 'Mindful Simplicity in Life & Technology',
    'site.description': 'Independent multilingual knowledge base, blog and curated directory of lightweight, distraction-free tools.',
    
    // Navigation
    'nav.home': 'Home',
    'nav.guides': 'Knowledge Base',
    'nav.blog': 'Blog',
    'nav.tools': 'Software',
    'nav.utilities': 'Utilities',
    'nav.about': 'About',
    'nav.search': 'Search',
    'nav.decisionTree': 'Purchase Flowchart',
    'nav.packs': 'Setup Packs',
    
    // Hero
    'hero.badge': '100% Static & Tracker-Free',
    'hero.title': 'Subtract the noise. Focus on what truly matters.',
    'hero.subtitle': 'A practical guide and ethical software catalog for embracing intentional simplicity in your physical space, digital environment, and everyday habits.',
    'hero.cta.guides': 'Explore Knowledge Base',
    'hero.cta.tools': 'Browse Software Catalog',

    // Sections
    'section.guides.title': 'Core Knowledge Base',
    'section.guides.subtitle': 'Structured, foundational guides to master intentional living.',
    'section.guides.all': 'All 20 Guides',
    'section.blog.title': 'Weekly Blog',
    'section.blog.subtitle': '5-minute weekly essays on digital wellness and slow living.',
    'section.blog.all': 'View All Articles',
    'section.tools.title': 'Software & Tool Directory',
    'section.tools.subtitle': 'No-bloat, privacy-respecting, local-first software recommendations.',
    'section.tools.all': 'Browse Full Directory',
    'section.packs.title': 'Minimalist Setup Packs',
    'section.packs.subtitle': 'Curated bundles of lightweight tools matched to your primary workflow.',

    // Content Meta
    'meta.readingTime': 'min read',
    'meta.publishedOn': 'Published on',
    'meta.updatedOn': 'Updated on',
    'meta.tableOfContents': 'On this page',
    'meta.author': 'Author',
    'meta.week': 'Week',

    // Tools
    'tools.license': 'License',
    'tools.platforms': 'Platforms',
    'tools.pros': 'Key Advantages',
    'tools.cons': 'Limitations / Trade-offs',
    'tools.verdict': 'Editorial Verdict',
    'tools.visitWebsite': 'Website',
    'tools.sourceCode': 'Source Code',
    'tools.badge.recommended': 'Recommended',
    'tools.badge.lightweight_hero': 'Lightweight Hero',
    'tools.badge.cli': 'CLI / Hacker Tier',
    'tools.badge.notable_mention': 'Notable Mention',
    'tools.filter.all': 'All Categories',
    'tools.tag.foss': 'Open Source',
    'tools.tag.localFirst': 'Local-First',
    'tools.tag.zeroTelemetry': 'Zero Telemetry',

    // All 8 Categories
    'category.text-and-writing': 'Text Editors & Writing',
    'category.text-and-writing.desc': 'Distraction-free Markdown editors and lightweight writing tools designed for pure focus.',
    'category.note-taking': 'Notes & Knowledge Bases',
    'category.note-taking.desc': 'Local-first note taking tools and plain-text knowledge bases without cloud lock-in.',
    'category.web-browsing': 'Web Browsing & Clean Reading',
    'category.web-browsing.desc': 'Ultra-fast, privacy-hardened web browsers and ad-free reading utilities.',
    'category.communication': 'Communication, RSS & Email',
    'category.communication.desc': 'Algorithm-free RSS readers, lightweight email clients, and secure asynchronous messaging.',
    'category.task-management': 'Task Management & Calendars',
    'category.task-management.desc': 'Frictionless plain-text task lists, distraction-free timers, and calm planners.',
    'category.system-utilities': 'System Utilities & Backups',
    'category.system-utilities.desc': 'Instant terminal file managers, rapid desktop search, and robust local-first backup engines.',
    'category.media-and-readers': 'E-Books, Documents & Media',
    'category.media-and-readers.desc': 'Distraction-free document viewers, e-book readers, and minimalist audio/video players.',
    'category.hardware-and-edc': 'Minimalist Hardware & EDC',
    'category.hardware-and-edc.desc': 'E-ink reading slabs, distraction-free phones, minimalist Android launchers, and compact tools.',

    // Setup Packs
    'packs.writer.title': '✍️ The Writer Pack',
    'packs.writer.desc': 'Tailored for essayists, novelists, and researchers seeking uninterrupted immersion.',
    'packs.thinker.title': '🧠 The Thinker / PKM Pack',
    'packs.thinker.desc': 'For lifelong learners and academics managing notes in durable plain-text files.',
    'packs.dev.title': '💻 The Minimalist Dev Pack',
    'packs.dev.desc': 'Lightning-fast CLI workflow with zero memory bloat and keyboard-driven efficiency.',
    'packs.detox.title': '📱 The Digital Detox EDC',
    'packs.detox.desc': 'Reclaim hours of life energy by replacing algorithmic slot machines with calm tools.',

    // Interactive Utilities
    'decisionTree.title': 'Should I Buy This?',
    'decisionTree.subtitle': 'A 5-step interactive decision flowchart to eliminate impulse purchases and buyer remorse.',
    'decisionTree.restart': 'Start Over',
    'lifeEnergy.title': 'Life Energy Calculator',
    'lifeEnergy.subtitle': 'Calculate the real cost of any purchase in hours and days of your working life.',
    'templates.title': 'Plain-Text Templates',
    'templates.subtitle': 'Ready-to-use plain text files for tasks (todo.txt), budgets, and PARA archives.',

    // Search & Misc
    'search.placeholder': 'Search guides, blog posts, and tools...',
    'search.close': 'Close',
    'search.noResults': 'No results found',
    'theme.toggle': 'Toggle theme',
    'i18n.missingTranslation': 'This article is displayed in English while the translation is in progress.',
    'i18n.contribute': 'Help translate on GitHub',

    // Footer
    'footer.tagline': 'Subtract the non-essential.',
    'footer.builtWith': 'Built with 100% static Astro. Zero client tracking. Open source.',
    'footer.copyright': 'All content licensed under CC BY-SA 4.0. Minimalist.lv',
  },
  ru: {
    'site.title': 'minimalist.lv',
    'site.tagline': 'Осознанная простота в жизни и технологиях',
    'site.description': 'Независимая мультиязычная база знаний, блог и каталог легковесных инструментов без информационного мусора.',
    
    // Navigation
    'nav.home': 'Главная',
    'nav.guides': 'База знаний',
    'nav.blog': 'Блог',
    'nav.tools': 'Программы',
    'nav.utilities': 'Утилиты',
    'nav.about': 'О проекте',
    'nav.search': 'Поиск',
    'nav.decisionTree': 'Дерево покупок',
    'nav.packs': 'Сборки софта',
    
    // Hero
    'hero.badge': '100% Статика и 0 трекеров',
    'hero.title': 'Уберите лишнее. Освободите место для важного.',
    'hero.subtitle': 'Практические руководства и каталог этичного софта для перехода к осознанной простоте в вещах, цифровом пространстве и привычках.',
    'hero.cta.guides': 'Читать базу знаний',
    'hero.cta.tools': 'Каталог программ',

    // Sections
    'section.guides.title': 'Базовая база знаний',
    'section.guides.subtitle': 'Фундаментальные руководства по всем аспектам минимализма.',
    'section.guides.all': 'Все 20 статей',
    'section.blog.title': 'Еженедельный блог',
    'section.blog.subtitle': 'Короткие 5-минутные эссе о цифровом здоровье и замедлении.',
    'section.blog.all': 'Все записи блога',
    'section.tools.title': 'Каталог программ и инструментов',
    'section.tools.subtitle': 'Легковесный, надежный и этичный софт без рекламы и телеметрии.',
    'section.tools.all': 'Смотреть весь каталог',
    'section.packs.title': 'Курируемые наборы программ',
    'section.packs.subtitle': 'Проверенные связки легковесного софта под конкретные рабочие задачи.',

    // Content Meta
    'meta.readingTime': 'мин чтения',
    'meta.publishedOn': 'Опубликовано',
    'meta.updatedOn': 'Обновлено',
    'meta.tableOfContents': 'Содержание статьи',
    'meta.author': 'Автор',
    'meta.week': 'Неделя',

    // Tools
    'tools.license': 'Лицензия',
    'tools.platforms': 'Платформы',
    'tools.pros': 'Преимущества',
    'tools.cons': 'Ограничения',
    'tools.verdict': 'Вердикт редакции',
    'tools.visitWebsite': 'Сайт программы',
    'tools.sourceCode': 'Исходный код',
    'tools.badge.recommended': 'Выбор редакции',
    'tools.badge.lightweight_hero': 'Экстремально легкий',
    'tools.badge.cli': 'CLI / Для гиков',
    'tools.badge.notable_mention': 'Достойная альтернатива',
    'tools.filter.all': 'Все категории',
    'tools.tag.foss': 'Open Source',
    'tools.tag.localFirst': 'Local-First',
    'tools.tag.zeroTelemetry': '0 телеметрии',

    // All 8 Categories
    'category.text-and-writing': 'Текстовые редакторы и письмо',
    'category.text-and-writing.desc': 'Дистракшн-фри Markdown редакторы для чистого погружения в текст.',
    'category.note-taking': 'Заметки и базы знаний',
    'category.note-taking.desc': 'Local-first системы заметок на базе открытых форматов без привязки к облакам.',
    'category.web-browsing': 'Браузинг и чистое чтение',
    'category.web-browsing.desc': 'Сверхбыстрые браузеры без телеметрии и утилиты чтения без рекламы.',
    'category.communication': 'Связь, RSS и почта',
    'category.communication.desc': 'RSS-ридеры без алгоритмов, легкие почтовые клиенты и безопасные мессенджеры.',
    'category.task-management': 'Задачи, календари и время',
    'category.task-management.desc': 'Текстовые списки дел, таймеры без отвлечений и спокойные планировщики.',
    'category.system-utilities': 'Системные утилиты и бэкапы',
    'category.system-utilities.desc': 'Мгновенный поиск файлов, терминальные менеджеры и шифрованное резервное копирование.',
    'category.media-and-readers': 'Электронные книги и медиа',
    'category.media-and-readers.desc': 'Легкие читалки документов и лаконичные медиаплееры без тяжелых оболочек.',
    'category.hardware-and-edc': 'Минималистичные устройства и EDC',
    'category.hardware-and-edc.desc': 'E-ink ридеры, простые телефоны, лаунчеры без иконок и компактные клавиатуры.',

    // Setup Packs
    'packs.writer.title': '✍️ Сборка писателя',
    'packs.writer.desc': 'Для авторов лонгридов, исследователей и журналистов, которым важна концентрация.',
    'packs.thinker.title': '🧠 Сборка мыслителя (PKM)',
    'packs.thinker.desc': 'Для ведения долговечной персональной базы знаний в открытых текстовых форматах.',
    'packs.dev.title': '💻 Сборка разработчика',
    'packs.dev.desc': 'Молниеносный клавиатурный рабочий процесс без тяжелых графических комбайнов.',
    'packs.detox.title': '📱 Набор цифрового детокса',
    'packs.detox.desc': 'Освобождение от дофаминовой зависимости через спокойные экраны и текст.',

    // Interactive Utilities
    'decisionTree.title': 'Стоит ли это покупать?',
    'decisionTree.subtitle': 'Пошаговый интерактивный алгоритм из 5 вопросов для защиты от импульсивных покупок.',
    'decisionTree.restart': 'Начать заново',
    'lifeEnergy.title': 'Калькулятор часов жизни',
    'lifeEnergy.subtitle': 'Узнайте реальную стоимость любой покупки в часах и днях вашей работы.',
    'templates.title': 'Plain-Text Шаблоны',
    'templates.subtitle': 'Готовые текстовые файлы для задач (todo.txt), бюджета и структуры PARA.',

    // Search & Misc
    'search.placeholder': 'Поиск по статьям, блогу и программам...',
    'search.close': 'Закрыть',
    'search.noResults': 'Ничего не найдено',
    'theme.toggle': 'Сменить тему',
    'i18n.missingTranslation': 'Этот материал временно отображается на английском языке.',
    'i18n.contribute': 'Помочь с переводом на GitHub',

    // Footer
    'footer.tagline': 'Вычитайте несущественное.',
    'footer.builtWith': 'Создано на 100% статическом Astro. Без сторонних трекеров. Open source.',
    'footer.copyright': 'Все материалы под лицензией CC BY-SA 4.0. Minimalist.lv',
  },
  lv: {
    'site.title': 'minimalist.lv',
    'site.tagline': 'Apzināts vienkāršums dzīvē un tehnoloģijās',
    'site.description': 'Neatkarīga daudzvalodu zināšanu bāze, emuārs un vieglu, uzmanību nenovērsošu rīku katalogs.',
    
    // Navigation
    'nav.home': 'Sākums',
    'nav.guides': 'Zināšanu bāze',
    'nav.blog': 'Emuārs',
    'nav.tools': 'Programmas',
    'nav.utilities': 'Lietotnes',
    'nav.about': 'Par projektu',
    'nav.search': 'Meklēt',
    'nav.decisionTree': 'Lēmumu koks',
    'nav.packs': 'Programmu komplekti',
    
    // Hero
    'hero.badge': '100% Statisks un bez izsekotājiem',
    'hero.title': 'Atbrīvojies no liekā. Radi vietu svarīgajam.',
    'hero.subtitle': 'Praktiski ceļveži un ētisku programmu katalogs apzinātam vienkāršumam mājās, digitālajā vidē un ikdienas ieradumos.',
    'hero.cta.guides': 'Pētīt zināšanu bāzi',
    'hero.cta.tools': 'Skatīt rīku katalogu',

    // Sections
    'section.guides.title': 'Pamatbāzes ceļveži',
    'section.guides.subtitle': 'Strukturēti ceļveži apzinātas dzīves veidošanai.',
    'section.guides.all': 'Visi 20 ceļveži',
    'section.blog.title': 'Iknedēļas emuārs',
    'section.blog.subtitle': '5 minūšu esejas par digitālo labsajūtu un mierīgu dzīvesveidu.',
    'section.blog.all': 'Visi raksti',
    'section.tools.title': 'Programmu un rīku katalogs',
    'section.tools.subtitle': 'Vieglas, uzticamas un ētiskas programmas bez liekas noslodzes un izsekošanas.',
    'section.tools.all': 'Pārlūkot visu katalogu',
    'section.packs.title': 'Minimālisma programmu izlases',
    'section.packs.subtitle': 'Pārbaudīti rīku komplekti konkrētiem darba scenārijiem.',

    // Content Meta
    'meta.readingTime': 'min lasīšanai',
    'meta.publishedOn': 'Publicēts',
    'meta.updatedOn': 'Atjaunots',
    'meta.tableOfContents': 'Šajā lapā',
    'meta.author': 'Autors',
    'meta.week': 'Nedēļa',

    // Tools
    'tools.license': 'Licence',
    'tools.platforms': 'Platformas',
    'tools.pros': 'Galvenās priekšrocības',
    'tools.cons': 'Ierobežojumi',
    'tools.verdict': 'Redakcijas vērtējums',
    'tools.visitWebsite': 'Vietne',
    'tools.sourceCode': 'Pirmkods',
    'tools.badge.recommended': 'Ieteikts',
    'tools.badge.lightweight_hero': 'Īpaši viegls',
    'tools.badge.cli': 'CLI / Terminālis',
    'tools.badge.notable_mention': 'Vērā ņemams',
    'tools.filter.all': 'Visas kategorijas',
    'tools.tag.foss': 'Atvērtais pirmkods',
    'tools.tag.localFirst': 'Local-First',
    'tools.tag.zeroTelemetry': 'Bez telemetrijas',

    // All 8 Categories
    'category.text-and-writing': 'Teksta redaktori un rakstīšana',
    'category.text-and-writing.desc': 'Fokusa Markdown redaktori un viegli rakstīšanas rīki bez uzmanības novēršanas.',
    'category.note-taking': 'Piezīmes un zināšanu bāzes',
    'category.note-taking.desc': 'Lokālās piezīmju sistēmas un vienkāršā teksta bāzes bez mākoņa piesaistes.',
    'category.web-browsing': 'Tīmekļa pārlūki un tīra lasīšana',
    'category.web-browsing.desc': 'Zibenīgi pārlūki bez izsekošanas un rīki lasīšanai bez reklāmām.',
    'category.communication': 'Saziņa, RSS un e-pasts',
    'category.communication.desc': 'RSS lasītāji bez algoritmiem, viegli e-pasta klienti un droša saziņa.',
    'category.task-management': 'Uzdevumi, kalendāri un laiks',
    'category.task-management.desc': 'Vienkāršā teksta darāmo darbu saraksti, Pomodoro taimeri un mierīgi plānotāji.',
    'category.system-utilities': 'Sistēmas rīki un dublēšana',
    'category.system-utilities.desc': 'Tūlītēja failu meklēšana, termināļa pārvaldnieki un šifrētas rezerves kopijas.',
    'category.media-and-readers': 'E-grāmatas un multivide',
    'category.media-and-readers.desc': 'Vieglas dokumentu lasītājas un lakoniski atskaņotāji bez liekas grafikas.',
    'category.hardware-and-edc': 'Ierīces, E-Ink un piederumi',
    'category.hardware-and-edc.desc': 'E-tintes ierīces, vienkārši tālruņi, teksta palaidēji un kompaktas tastatūras.',

    // Setup Packs
    'packs.writer.title': '✍️ Rakstnieka komplekts',
    'packs.writer.desc': 'Autoriem un pētniekiem, kuriem nepieciešama pilnīga iegrimšana tekstā.',
    'packs.thinker.title': '🧠 Domātāja komplekts (PKM)',
    'packs.thinker.desc': 'Ilgmūžīgai personīgo zināšanu pārvaldībai atvērtos teksta failos.',
    'packs.dev.title': '💻 Izstrādātāja komplekts',
    'packs.dev.desc': 'Zibenīga termināļa darba vide bez smagas grafiskās noslodzes.',
    'packs.detox.title': '📱 Digitālā detoksa komplekts',
    'packs.detox.desc': 'Atbrīvošanās no ekrāna atkarības, izmantojot mierīgas teksta saskarnes.',

    // Interactive Utilities
    'decisionTree.title': 'Vai man to pirkt?',
    'decisionTree.subtitle': '5 soļu interaktīvs lēmumu koks aizsardzībai pret impulsīviem pirkumiem.',
    'decisionTree.restart': 'Sākt no jauna',
    'lifeEnergy.title': 'Dzīves laika kalkulators',
    'lifeEnergy.subtitle': 'Uzziniet jebkura pirkuma patieso cenu savās darba un dzīves stundās.',
    'templates.title': 'Vienkāršā teksta veidnes',
    'templates.subtitle': 'Gatavas teksta veidnes uzdevumiem (todo.txt), budžetam un PARA arhīvam.',

    // Search & Misc
    'search.placeholder': 'Meklēt ceļvežos, emuārā un rīkos...',
    'search.close': 'Aizvērt',
    'search.noResults': 'Nekas netika atrasts',
    'theme.toggle': 'Pārslēgt tēmu',
    'i18n.missingTranslation': 'Šis materiāls pašlaik ir pieejams angļu valodā.',
    'i18n.contribute': 'Palīdzēt tulkot vietnē GitHub',

    // Footer
    'footer.tagline': 'Atbrīvojies no nesvarīgā.',
    'footer.builtWith': 'Veidots ar 100% statisku Astro. Bez lietotāju izsekošanas. Atvērtais kods.',
    'footer.copyright': 'Viss saturs licencēts saskaņā ar CC BY-SA 4.0. Minimalist.lv',
  },
} as const;
