---
name: "Firefox (Arkenfox / Minimal UI)"
tagline: "Privāts un drošs Gecko pārlūks bez lieka vizuālā trokšņa un izsekošanas"
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
  - "Neatkarīgs Gecko dzinējs, kas atbalsta atvērto tīmekli"
  - "Arkenfox profils atslēdz 100% telemetrijas un reklāmas saturu"
  - "Iebūvēts ērts lasīšanas režīms rakstu skatīšanai bez reklāmām"
  - "Iespēja pilnībā noslēpt liekās rīkjoslas"
cons:
  - "Nepieciešama profila konfigurācija maksimālam privātumam"
minimalistVerdict: "Uzticamākā izvēle tiem, kuri vēlas ātru, drošu un no reklāmām brīvu tīmekļa pārlūkošanu."
---
### Ieteicamā minimālistiskā `user.js` konfigurācija
Ievietojiet šīs rindas failā `user.js` savā Firefox profila mapē, lai atslēgtu telemetriju un reklāmas saturu:

```javascript
// Telemetrijas un datu vākšanas atslēgšana
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);

// Pocket un sponsorēto ciņu noņemšana
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Lasīšanas režīma un privātuma iestatījumi
user_pref("reader.color_scheme", "sepia");
user_pref("privacy.resistFingerprinting", true);
```
