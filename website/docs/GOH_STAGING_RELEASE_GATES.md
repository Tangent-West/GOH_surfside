# GOH staging release gates

The branch is suitable for review and handoff. It is intentionally `noindex,nofollow` and must not be promoted over the live domain until the remaining dependencies below are resolved.

## Complete in this branch

- [x] New work merged into the current repository rather than replacing it with the handoff reference site.
- [x] Native hero video, Montserrat, approved design, real photography, education, policy, media, shop, toolkit, and participation work preserved.
- [x] Responsive logo component replaces the handoff component’s fixed sizing model for its new markup.
- [x] All 18 supplied organization records, name links, tags, marks, and desktop ordering retained.
- [x] Homepage, supporter directory, media, shop, campaign, framework, comparison, donation, and educational routes render without horizontal overflow.
- [x] Official original-site G favicon installed.
- [x] Cream merchandise, flying disc, Plan. Don’t Ban., USDA facts, and global-supply-chain language integrated.
- [x] Compact taupe orientation strip and original Grain / Fiber / Floral pathway section restored once in the requested homepage order.
- [x] Four USDA facts, six application groups, homepage comparison entries, click-to-play film, and responsive 18-logo wall retained as separate components.
- [x] Donate and Tell Congress open shared in-page staging dialogs without charging or sending.
- [x] Staging has no automated form submission, advocacy submission, payment, or public full-framework download.
- [x] Desktop, tablet, and mobile screenshots captured.
- [x] Automated browser audit: 182 of 182 checks passed across 360, 390, 768, 1024, and 1440 CSS-pixel widths, plus enlarged-text and interaction checks.

## Content, policy, and permission dependencies

- [ ] Policy owner confirms the controlling framework version and reconciles the filename/internal-version mismatch noted in the handoff (`V10.2H`, `10.H`, and `10.J`).
- [ ] Policy/legal reviewers approve the comparison dataset, labels, source date, disclaimer, and public release.
- [ ] Each of the 18 organizations approves public listing and the supplied one-color mark; endorsement status must be tracked separately.
- [ ] Educational owner completes block-level reconciliation of legacy pages, tables, films, qualifications, downloads, and source dates. Screenshot similarity alone is not acceptance.
- [ ] Media owner revalidates contact information, interview availability, and every external coverage URL immediately before launch.
- [ ] Shop owner confirms product names, materials (especially the flying disc), pricing, sizes, inventory, fulfillment, and approved product photography.
- [ ] Donation owner supplies the receiving legal entity, payment destination, approved appeal copy, privacy terms, and tax language. No tax-deductibility claim should be added without confirmation.
- [ ] Campaign owner confirms the NHA Tell Congress route and Plan. Don’t Ban. destination immediately before launch.
- [ ] Recover and connect the approved original donation checkout and advocacy-provider embed/configuration; the present staging dialogs intentionally use a disabled payment shell and verified external action fallback.

## Production and backend dependencies

- [ ] Replace staging-only review messaging and switch `noindex,nofollow`/`robots.txt` only as part of an approved production release.
- [ ] Configure the final domain, canonical URLs, share metadata, sitemap, redirects, and a production 404 strategy.
- [ ] Implement and test any required form/email/upload/review backend, spam protection, consent records, privacy handling, and accessible success/error states.
- [ ] Decide whether the full framework remains request-only or becomes an approved public asset, then configure the final delivery workflow.
- [ ] Verify every external link, email, and telephone target in the launch environment.
- [ ] Complete Safari, Firefox, iOS, and Android checks plus production performance/video testing.
- [ ] Obtain explicit launch approval before merging to the deployed branch or changing the live domain.
