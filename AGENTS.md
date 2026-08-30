# AGENTS.md — Инструкции для AI-агентов и разработчиков

Этот документ содержит обязательные правила, архитектурные ограничения и стандарты качества для любых AI-ассистентов (Antigravity, Claude, Copilot, Cursor и др.) и разработчиков, работающих над проектом **minimalist.lv**.

---

## 1. Философия и главные принципы проекта

1. **Радикальный минимализм в кодовой базе:**
   - Избегайте добавления лишних npm-зависимостей. Если задачу можно решить стандартным веб-API или чистым CSS/JS, не ставьте библиотеку.
   - **Zero Client-Side JavaScript по умолчанию:** используйте острова Astro (`client:load`, `client:visible`) только там, где интерактивность абсолютно необходима (например, модальное окно поиска Pagefind или фильтры каталога софта).
2. **Безупречная приватность и скорость (100/100 Lighthouse):**
   - 0 сторонних трекеров (Google Analytics, Facebook Pixel, Yandex Metrika и т.д.).
   - Шрифты только локальные в формате `woff2` (в папке `public/fonts/`).
   - Иконки — легковесный инлайн SVG (Lucide / Tabler) без внешних шрифтовых иконок.
3. **Статичность (100% SSG):**
   - Сайт генерируется в виде статичных файлов HTML/CSS. Никакого Node.js runtime на сервере в продакшене.

---

## 2. Стандарты мультиязычности (i18n)

1. **Обязательная триада языков:**
   - `en` (English) — язык по умолчанию (Source of truth).
   - `ru` (Русский) — обязательный перевод.
   - `lv` (Latviešu) — обязательный перевод.
2. **Синхронизация контента:**
   - При добавлении или изменении любой статьи в `src/content/{collection}/en/` **ОБЯЗАТЕЛЬНО** создавайте или обновляйте аналогичные файлы в `.../ru/` и `.../lv/`.
   - Имена файлов (или слаги) должны быть согласованы, а frontmatter должен содержать обязательные поля схемы.
3. **Строки интерфейса (UI Strings):**
   - Все текстовые надписи кнопок, меню, меток и футера должны храниться в `src/i18n/ui.ts`.
   - Запрещено хардкодить текст интерфейса напрямую внутри `.astro` компонентов.

---

## 3. Схемы коллекций контента (Content Collections & Zod)

Весь контент в `src/content/` строго валидируется схемами в `src/content/config.ts`.

### Обязательные правила для Frontmatter:
- **База знаний (`guides`):**
  - `title`: заголовок (строка)
  - `description`: краткое описание (до 160 символов для SEO)
  - `order`: порядковый номер для навигации (число)
  - `category`: `philosophy` | `digital` | `physical` | `mindset` | `finance` | `work`
  - `publishedDate`: дата публикации
  - `readingTime`: время чтения в минутах
- **Блог (`blog`):**
  - `title`: заголовок
  - `description`: синопсис
  - `weekNumber`: номер недели (1–54)
  - `season`: `winter` | `spring` | `summer` | `autumn`
  - `publishedDate`: дата
  - `tags`: массив строковых тегов
  - `readingTimeMinutes`: по умолчанию 5
- **Каталог инструментов (`tools`):**
  - `name`: название программы/устройства
  - `tagline`: краткая суть в 1 предложение
  - `category`: слаг категории
  - `websiteUrl`: валидный URL
  - `isOpenSource`: boolean
  - `isOfflineFirst`: boolean
  - `isZeroTelemetry`: boolean
  - `license`: название лицензии (GPL-3.0, MIT, Apache-2.0, Proprietary)
  - `platforms`: массив `['linux', 'macos', 'windows', 'android', 'ios', 'web', 'cli']`
  - `recommendationStatus`: `recommended` | `lightweight_hero` | `notable_mention` | `cli`
  - `pros`: массив преимуществ (минимум 2)
  - `cons`: массив недостатков/ограничений (минимум 1)
  - `minimalistVerdict`: вердикт редакции в 1–2 предложения

---

## 4. Команды разработки и проверки

При внесении любых изменений агент должен убедиться в работоспособности:
```bash
# Проверка типов и сборки
npm run build

# Линтинг контента
npm run lint

# Локальный запуск
npm run dev
```

---

## 5. Документация и предложения

Перед внесением крупных архитектурных изменений обязательно сверяйтесь с документами в директории `proposals/`:
- `proposals/01-tech-stack-and-architecture.md`
- `proposals/02-core-knowledge-base-structure.md`
- `proposals/03-blog-topics-54-weeks.md`
- `proposals/04-minimalist-tools-and-software.md`
- `proposals/05-mvp-implementation-plan.md`
- `proposals/06-content-expansion-roadmap.md`
