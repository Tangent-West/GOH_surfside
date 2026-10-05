# GOH staging QA report

## Scope

- Branch: `codex/goh-final-integration`
- Local staging URL: `http://127.0.0.1:4175/?staging=final#/`
- Viewports: 360 × 800, 390 × 844, 768 × 1024, 1024 × 900, and 1440 × 1000 CSS pixels
- Baseline captured from the current GitHub Pages site before any deployment from this branch

## Automated browser result

**182 of 182 checks passed.**

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
- Exactly one compact orientation strip and one Grain / Fiber / Floral section render in the requested homepage order.
- The orientation strip uses 4, 2, and 1-column layouts at the applicable desktop, tablet/small-desktop, and phone widths.
- The three pathway cards use their original supplied photographs, exact copy, and working Food & Nutrition, Fiber & Manufacturing, and Framework destinations.
- Four USDA facts and all six everyday-application groups remain separate and complete on the homepage.
- The comparison appears below the hero and after the facts; the shared dialog retains all 12 rows and five proposal columns.
- The separate homepage film creates its privacy-enhanced iframe only after a click and removes it on close.
- Donate and Tell Congress open one shared in-page dialog each; staging cannot create a charge or send an advocacy message.
- The restored components remain unclipped with enlarged text.

## Routes exercised

`#/`, `#/learn`, all six Learn topic routes, `#/industry-outlook`, `#/supporters`, `#/plan-dont-ban`, `#/take-action`, `#/donate`, `#/framework`, `#/framework/compare`, `#/media`, `#/shop`, `#/join`, `#/toolkit`, and `#/participation`, plus `framework-comparison.html`.

## Screenshot evidence

- Baseline: `before-live-home-desktop.png`, `before-live-home-mobile.png`
- Staging home: `after-home-desktop.png`, `after-home-tablet.png`, `after-home-mobile.png`
- Responsive organization wall: `after-organization-wall-desktop.png`, `after-organization-wall-tablet.png`, `after-organization-wall-mobile.png`
- Media: `after-media-desktop.png`, `after-media-mobile.png`
- Shop: `after-shop-desktop.png`, `after-shop-mobile.png`
- Refinement v2 home: `refinement-v2-home-desktop.png`, `refinement-v2-home-mobile.png`
- Restored orientation strip: `refinement-v2-orientation-desktop.png`, `refinement-v2-orientation-mobile.png`
- Restored pathways: `refinement-v2-pathways-desktop.png`, `refinement-v2-pathways-mobile.png`
- Action dialogs: `refinement-v2-donate-desktop.png`, `refinement-v2-action-desktop.png`

All files are in `website/screenshots/`.
