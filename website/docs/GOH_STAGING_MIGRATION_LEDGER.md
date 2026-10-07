# GOH staging migration ledger

This branch is a focused integration into the newer `website/` implementation. The website included in `GOH_Final_Codex_Handoff.zip` was used as a content, asset, and responsive-component reference; it did not replace the working site.

## Preserved from the working repository

- Existing single-page application, routes, header, footer, dialogs, participation flow, toolkit, media page, and shop.
- Native looping hero video and its pause control.
- Montserrat typography and approved visual system.
- Existing real photography, Geoff Whaling and Morgan Tweet portraits, media coverage, product imagery, and all newer repository work.
- Existing policy summary, ten framework pillars, participation requirements, badge concepts, donation-adjacent language, and contact workflows.

## Integrated from the final handoff

| Handoff material | Staging destination | Integration result |
| --- | --- | --- |
| Responsive organization-logo component | `organization-logos.css`, homepage, `#/supporters` | One authoritative component with 4/3/2/1-column container-query behavior. Legacy `.logo-wall` sizing rules do not target the new `.goh-organization-wall` component. |
| 18-logo one-color roster and display order | `assets/logos/monochrome/`, `data/staging-content.js` | All 18 marks, visible linked names, records, multi-category tags, and desktop order retained. NHA begins row 1; HITA-AZ begins row 2 at four columns. |
| Whole-industry educational structure | Homepage, `#/learn`, six legacy topic routes, and the current complete chapter routes | Made chapters the primary educational path without describing the library as a fixed seven-part story. Existing topic URLs remain available for direct links. The homepage presents USDA data before the expandable chapter collection; Learn opens directly into the chapters. |
| Learn navigation and chapter continuity | Persistent header and all current chapter routes | Added one accessible desktop disclosure and mobile accordion containing the current chapters, plus Previous / Chapter index / Next navigation within every chapter. |
| Hemp Industry Appendix | `#/learn/appendix` and footer Learn links | Added a secondary reference page with 18 defined industry terms, nine known applied areas, six source links, and a global jurisdiction caveat without recreating a competing application-navigation system. |
| USDA and contextual evidence | Homepage, topic pages, `#/industry-outlook` | Added scoped 2025 USDA facts, source links, units, and explicit distinctions among production value, retail sales, addressable market, and modeled effects. |
| Plan. Don’t Ban. campaign material | Homepage and `#/plan-dont-ban` | Added campaign explanation, consumer/farmer/competitiveness framing, NHA campaign link, and the supplied Tell Congress route. The staging site never submits an advocacy message automatically. |
| Public policy summary | `data/staging-content.js`, `#/framework` | Retained ten concept-level pillars from the supplied summary. Clause-level mechanics, section citations, proposal comparisons, version dates, and direct working-draft downloads are intentionally excluded. |
| Real educational photography | `assets/education/` | Added the supplied farm, food, manufacturing, building, beverage, research, personal-care, wellness, and community images. |
| Official favicon | `assets/icon/TGoHfav_32x32.svg` | Replaced the generated placeholder with the exact favicon served by the original GOH site. |
| Cream merchandise and flying disc | `assets/shop/`, `#/shop` | Added cream crewneck, hoodie, cropped tee, and hemp-composite flying-disc concepts while retaining all existing products. |
| Global-market direction | Homepage, policy, media, campaign, and outlook routes | Added carefully qualified global-supply-chain and global-expansion language. Geoff and Morgan interview topics both include global supply chains. |
| Original homepage orientation strip | Directly below the native hero | Restored the supplied taupe four-part composition and exact copy. Its three destinations now reach the production pathways, ten policy pillars, and organization form without turning the orientation counts into USDA statistics. |
| Grain / Fiber / Floral production pathways | After USDA facts | Restored the original photographs and exact supplied card copy once, with Grain linked directly to Hemp Food, Fiber to Hemp Materials, and Floral to Cannabinoids. The duplicate six-card application index was removed; known applied areas now live in the appendix. |
| Original click-to-play film invitation | After the production pathways | Restored the original film poster and invitation. No third-party iframe is created until a deliberate click, and the iframe is removed on close. |
| Donate and Tell Congress entry behavior | Header/footer/home/campaign triggers | Restored shared in-page staging dialog shells. Donation amounts are visible but payment remains disabled; Tell Congress retains linked NHA attribution and the verified external action-provider fallback. |

## Deliberately not treated as production-ready data

- A logo listing is not treated as legislative endorsement, and no unverified supporter total is published.
- Detailed proposal comparisons and clause-level working drafts are retained outside the public website until approved for release.
- The donation route does not collect money because recipient, checkout URL, and approved wording are unresolved.
- The visual donation dialog is a non-charging staging shell; the original checkout integration, recipient, tax wording, receipt behavior, and approved Terms/Privacy destinations were not present in the supplied source.
- The Tell Congress dialog uses the verified external fallback because the original provider embed/source was not present in the supplied source. A click is not a sent message.
- Merchandise pricing, material specifications, inventory, sizes, and fulfillment are not invented.
- A public full-framework download is not exposed; the existing request workflow remains in place.
