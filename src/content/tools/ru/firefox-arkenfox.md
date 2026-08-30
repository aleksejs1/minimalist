---
name: "Firefox (Конфигурация Arkenfox / Minimal UI)"
tagline: "Приватный веб-браузер на независимом движке Gecko без телеметрии и визуального шума"
category: "web-browsing"
websiteUrl: "https://www.mozilla.org/firefox/"
sourceCodeUrl: "https://github.com/arkenfox/user.js"
isOpenSource: true
isOfflineFirst: true
isZeroTelemetry: true
license: "MPL-2.0"
platforms: ["linux", "macos", "windows", "android", "ios"]
recommendationStatus: "recommended"
pros:
  - "Независимый движок Gecko, защищающий открытый веб от монополии Chromium"
  - "Профиль Arkenfox отключает 100% встроенной телеметрии и рекомендаций Pocket"
  - "Встроенный чистый режим чтения (Reader View) для лонгридов"
  - "Возможность полностью скрыть панели закладок и лишние кнопки"
cons:
  - "Требует базовой настройки через файл user.js для максимального эффекта"
minimalistVerdict: "Главный выбор редакции для тех, кто ценит открытый интернет, приватность и отсутствие навязчивого мусора."
---
### Рекомендуемый минималистичный конфиг `user.js`
Поместите этот код в файл `user.js` внутри папки вашего профиля Firefox для отключения телеметрии и спонсорских ссылок:

```javascript
// Отключение телеметрии и отправки отчетов
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);

// Отключение Pocket и рекламных плиток
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Настройки режима чтения и приватности
user_pref("reader.color_scheme", "sepia");
user_pref("privacy.resistFingerprinting", true);
```
