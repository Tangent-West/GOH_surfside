# GOH staging QA report

## Scope

- Branch: `codex/goh-final-integration`
- Local staging URL: `http://127.0.0.1:4175/?staging=final#/`
- Viewports: 360 × 800, 390 × 844, 768 × 1024, 1024 × 900, and 1440 × 1000 CSS pixels
- Baseline captured from the current GitHub Pages site before any deployment from this branch

## Automated browser result

The original integration audit passed 182 of 182 checks. Policy-summary safety changes require the focused recheck recorded with the current handoff.

**Policy-summary recheck: 46 of 46 checks passed.**

**Chapter-navigation recheck: 73 of 73 interaction and responsive checks passed.**

**Chapter-hub and appendix recheck: 25 of 25 focused route and content checks passed.**

The chapter recheck covered the desktop Learn disclosure, mobile Learn accordion, keyboard and Escape behavior, main-menu accessible names, exact current-page states, all current canonical chapter routes, chapter-first Home and Learn ordering, Previous / Chapter index / Next pagination, the removal of a competing application index, the SōRSE education-copy removal, directory-record preservation, responsive overflow, and console/runtime health.

The focused recheck covered desktop and mobile pillar order, visible legal-status and subject-to-change disclosures, the request-only mail CTA, removal of dates/timelines/citations/numeric mechanics, absence of comparison routes and downloads, homepage and participation wording, responsive overflow, Montserrat, console errors, preservation of the four USDA facts, three production pathways, click-to-play film, and 18-organization wall, plus the appendix's 18 terms, nine known applied areas, six source links, footer links, and global-jurisdiction caveat.

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
- Exactly one compact orientation strip and one Grain / Fiber / Floral section render in the requested homepage order.
- The orientation strip uses 4, 2, and 1-column layouts at the applicable desktop, tablet/small-desktop, and phone widths.
- The three pathway cards use their original supplied photographs, exact copy, and working Food & Nutrition, Fiber & Manufacturing, and Framework destinations.
- The homepage and Learn page lead with the chapter collection without presenting the current set as the industry's final number of chapters.
- The desktop Learn disclosure and mobile accordion expose the same current canonical chapter routes.
- The separate application index was removed so it does not compete with the chapter model; known applied areas remain discoverable in the Hemp Industry Appendix.
- Every chapter retains its full content and includes Previous / Chapter index / Next navigation after its sources.
- The homepage moves from chapters into USDA facts and the Grain / Fiber / Floral pathways; no detailed proposal comparison is published.
- The Hemp Industry Appendix presents 18 terms and nine known applied areas with a global-jurisdiction caveat, six source links, and footer access.
- The Framework route presents ten concept-level pillars, a subject-to-change disclosure, and a request-only CTA with no introduction timeline.
- The separate homepage film creates its privacy-enhanced iframe only after a click and removes it on close.
- Donate and Tell Congress open one shared in-page dialog each; staging cannot create a charge or send an advocacy message.
- The restored components remain unclipped with enlarged text.

## Routes exercised

`#/`, `#/learn`, `#/learn/appendix`, all six legacy Learn topic routes, all current canonical chapter routes, `#/industry-outlook`, `#/supporters`, `#/plan-dont-ban`, `#/take-action`, `#/donate`, `#/framework`, `#/media`, `#/shop`, `#/join`, `#/toolkit`, and `#/participation`.

## Screenshot evidence

- Baseline: `before-live-home-desktop.png`, `before-live-home-mobile.png`
- Responsive organization wall: `after-organization-wall-desktop.png`, `after-organization-wall-tablet.png`, `after-organization-wall-mobile.png`
- Media: `after-media-desktop.png`, `after-media-mobile.png`
- Shop: `after-shop-desktop.png`, `after-shop-mobile.png`
- Public policy pillars: `policy-pillars-desktop.png`, `policy-pillars-mobile.png`
- Restored orientation strip: `refinement-v2-orientation-desktop.png`, `refinement-v2-orientation-mobile.png`
- Restored pathways: `refinement-v2-pathways-desktop.png`, `refinement-v2-pathways-mobile.png`
- Action dialogs: `refinement-v2-donate-desktop.png`, `refinement-v2-action-desktop.png`
- Chapter navigation: `learn-navigation-desktop.png`, `learn-navigation-mobile.png`
- Chapter entry and continuation: `chapter-library-desktop.png`, `chapter-pager-mobile.png`, `chapter-flow-mobile.png`
- Hemp Industry Appendix: `industry-appendix-desktop.png`

All files are in `website/screenshots/`.
