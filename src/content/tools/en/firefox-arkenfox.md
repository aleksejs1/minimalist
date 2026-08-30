---
name: "Firefox (Arkenfox / Minimal UI)"
tagline: "Privacy-hardened Gecko web browser configured for zero visual distractions"
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
  - "Independent Gecko engine keeping the open web healthy against Chromium monoculture"
  - "Custom user.js hardening removes all Mozilla telemetry and Pocket recommendations"
  - "Built-in clean Reader View for stripping clutter from articles"
  - "Customizable interface to hide bookmarks bar and extraneous tabs"
cons:
  - "Requires initial user.js configuration for maximum privacy"
minimalistVerdict: "The gold standard browser for users who value an open, independent web engine stripped of corporate noise."
---
### Recommended Minimalist `user.js` Configuration
Place the following in your Firefox profile folder to eliminate telemetry, sponsored shortcuts, and pocket suggestions:

```javascript
// Disable telemetry & data collection
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);

// Disable Pocket & sponsored tiles
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Minimalist Reader View defaults
user_pref("reader.color_scheme", "sepia");
user_pref("privacy.resistFingerprinting", true);
```
