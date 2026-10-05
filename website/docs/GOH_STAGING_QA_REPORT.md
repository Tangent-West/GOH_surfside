# GOH staging QA report

## Scope

- Branch: `codex/goh-final-integration`
- Local staging URL: `http://127.0.0.1:4175/?staging=final#/`
- Viewports: 1440 × 1000, 768 × 1024, and 390 × 844 CSS pixels
- Baseline captured from the current GitHub Pages site before any deployment from this branch

## Automated browser result

**96 of 96 checks passed.**

The audit verified:

- 4-column desktop, 3-column tablet, and 2-column phone organization grids.
- 18 organization records, 18 visible name links, approved ordering, and image containment at every tested width.
- No horizontal overflow at any tested width or on any routed page.
- Montserrat remains the body typeface.
- The native `goodness_loop_bish.mp4` hero source remains connected.
- The official `TGoHfav_32x32.svg` favicon is connected.
- No JavaScript console errors on the homepage or the 20 tested routes.
- Every tested route renders a visible page heading.
- Geoff and Morgan both include global-supply-chain language; the media introduction includes global expansion.
- The three cream garments and hemp-composite flying disc appear in the shop.
- The standalone comparison page loads structured comparison rows.

## Routes exercised

`#/`, `#/learn`, all six Learn topic routes, `#/industry-outlook`, `#/supporters`, `#/plan-dont-ban`, `#/take-action`, `#/donate`, `#/framework`, `#/framework/compare`, `#/media`, `#/shop`, `#/join`, `#/toolkit`, and `#/participation`, plus `framework-comparison.html`.

## Screenshot evidence

- Baseline: `before-live-home-desktop.png`, `before-live-home-mobile.png`
- Staging home: `after-home-desktop.png`, `after-home-tablet.png`, `after-home-mobile.png`
- Responsive organization wall: `after-organization-wall-desktop.png`, `after-organization-wall-tablet.png`, `after-organization-wall-mobile.png`
- Media: `after-media-desktop.png`, `after-media-mobile.png`
- Shop: `after-shop-desktop.png`, `after-shop-mobile.png`

All files are in `website/screenshots/`.
