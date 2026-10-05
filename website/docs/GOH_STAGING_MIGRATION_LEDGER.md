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
| Whole-industry educational structure | `#/learn`, six topic routes, seven original-site chapter links | Added agriculture/feed, food/nutrition, fiber/manufacturing, building materials, wellness/consumer products, and research/innovation pathways without removing the original chapter destinations. |
| USDA and contextual evidence | Homepage, topic pages, `#/industry-outlook` | Added scoped 2025 USDA facts, source links, units, and explicit distinctions among production value, retail sales, addressable market, and modeled effects. |
| Plan. Don’t Ban. campaign material | Homepage and `#/plan-dont-ban` | Added campaign explanation, consumer/farmer/competitiveness framing, NHA campaign link, and the supplied Tell Congress route. The staging site never submits an advocacy message automatically. |
| Policy comparison reference | `data/comparison.reference.json`, `#/framework/compare`, `framework-comparison.html` | Added desktop matrix, mobile GOH-plus-selected-proposal view, literal marked/unmarked legend, source date, and review qualification. |
| Real educational photography | `assets/education/` | Added the supplied farm, food, manufacturing, building, beverage, research, personal-care, wellness, and community images. |
| Official favicon | `assets/icon/TGoHfav_32x32.svg` | Replaced the generated placeholder with the exact favicon served by the original GOH site. |
| Cream merchandise and flying disc | `assets/shop/`, `#/shop` | Added cream crewneck, hoodie, cropped tee, and hemp-composite flying-disc concepts while retaining all existing products. |
| Global-market direction | Homepage, policy, media, campaign, and outlook routes | Added carefully qualified global-supply-chain and global-expansion language. Geoff and Morgan interview topics both include global supply chains. |

## Deliberately not treated as production-ready data

- A logo listing is not treated as legislative endorsement, and no unverified supporter total is published.
- The comparison matrix is a dated supplied transcription, not new legal analysis.
- The donation route does not collect money because recipient, checkout URL, and approved wording are unresolved.
- Merchandise pricing, material specifications, inventory, sizes, and fulfillment are not invented.
- A public full-framework download is not exposed; the existing request workflow remains in place.
