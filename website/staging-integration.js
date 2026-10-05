/* Focused staging merge. The current website remains the base; this file adds
   the handoff's responsive wall, education, campaign, comparison and store work. */
(() => {
  'use strict';

  const C = window.GOH_STAGING_CONTENT;
  if (!C || typeof routes === 'undefined') return;

  const originalHome = routes['/'];
  const originalFramework = routes['/framework'];
  const originalMedia = routes['/media'];
  const originalShop = routes['/shop'];
  let comparison = null;

  const source = (url, label) => `<a class="source-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`;
  const summary = () => '<a class="btn lime" href="#/framework">Policy Summary <span aria-hidden="true">↗</span></a>';
  const request = () => `<a class="btn outline" href="${C.frameworkRequestURL}">Request Full Framework <span aria-hidden="true">↗</span></a>`;
  const proposed = () => '<p class="source-note">Proposed framework, not enacted law. Section references identify the dated GOH proposal; release requires the policy owner’s approved text.</p>';

  function facts() {
    return `<section class="section goh-facts" id="hemp-facts" aria-labelledby="facts-heading"><div class="wrap"><div class="section-top"><div><p class="kicker">AMERICAN HEMP · 2025 USDA DATA</p><h2 id="facts-heading">The agricultural foundation.<br><span class="light">The opportunity ahead.</span></h2></div><p>Start with what American farmers are producing today.</p></div><div class="fact-grid">${C.facts.map(f => `<article class="fact-card"><div class="fact-number">${f.display}</div><div class="fact-unit">${f.unit}</div><h3>${f.title}</h3><p>${f.copy}</p><p class="fact-scope">2025 · ${esc(f.scope)}</p>${source(`${C.sources.usda}#page=${f.page}`, 'USDA source')}</article>`).join('')}</div><p class="source-note">These are agricultural production figures, not retail sales or the value of the entire hemp supply chain. The $739 million includes outdoor and under-protection production; acreage, fiber and grain figures cover outdoor production.</p><p class="source-note">Source: USDA NASS, <em>National Hemp Report</em>, released April 16, 2026. ${source(C.sources.usda, 'Read the report')}</p></div></section>`;
  }

  function sectors() {
    return `<div class="industry-grid">${C.sectors.map(s => `<article class="photo-card"><a href="#/learn/${s.id}"><img src="assets/education/industry-${s.photo}.jpg" alt="${esc(s.alt)}" width="700" height="467" loading="lazy"></a><h3><a href="#/learn/${s.id}">${s.title}</a></h3><p>${s.copy}</p><a class="text-link" href="#/learn/${s.id}">Explore ${s.id === 'wellness-consumer-products' ? 'wellness, beverages & personal care' : 'this part of hemp'} <span aria-hidden="true">↗</span></a></article>`).join('')}</div>`;
  }

  function applications() {
    return `<section class="section paper" id="everyday-applications"><div class="wrap"><div class="section-top"><div><p class="kicker">ONE PLANT. MANY BENEFITS.</p><h2>Hemp in everyday life.</h2></div><p>Food. Materials. Buildings. Consumer products. Explore the people, processes and rules behind each application.</p></div>${sectors()}</div></section>`;
  }

  function needs() {
    return `<section class="section" id="why-policy-matters"><div class="wrap split"><img class="full-photo" src="assets/education/harvest.jpg" alt="A tractor harvesting a real hemp field" width="700" height="470" loading="lazy"><div><p class="kicker">WHY WORKABLE POLICY MATTERS</p><h2>From the farm<br><span class="light">to the global economy.</span></h2><p>Farmers need a path to buyers. Processors and manufacturers need consistent requirements. Consumers need clear labels and accountable businesses.</p><p>The American hemp industry is building the capacity, standards and partnerships needed for responsible global expansion. The GOH proposal connects agricultural rules, industrial supply chains and product-specific safeguards without promising a particular market outcome.</p><div class="button-row"><a class="text-link" href="#/industry-outlook">Explore the evidence and policy context ↗</a></div></div></div></section>`;
  }

  function benefits() {
    return `<section class="section stone" id="framework-benefits"><div class="wrap"><div class="section-top"><div><p class="kicker">THE PROPOSED GOH FRAMEWORK</p><h2>Different needs.<br><span class="light">A connected approach.</span></h2></div><p>Read how specific provisions relate to people across the supply chain.</p></div><div class="benefit-grid">${C.benefits.map(b => `<article class="benefit-card"><h3>${b.audience}</h3><p class="benefit-need">${b.need}</p><p>${b.benefit}</p><button class="text-link" type="button" data-staging-provision="${esc(b.audience)}">Proposed §§ ${esc(b.sections)} ↗</button></article>`).join('')}</div>${proposed()}<div class="button-row">${summary()}${request()}<a class="text-link" href="#/framework">View all ten pillars ↗</a></div></div></section>`;
  }

  function organizationCards() {
    return C.candidates.map(o => `<article class="goh-organization-card" data-candidate="${esc(o.id)}" data-tags="${esc((o.tags || []).join('|'))}"><div class="goh-logo-frame"><img src="assets/logos/monochrome/${esc(o.id)}.png" alt="${esc(o.displayName)} logo" data-logo="${esc(o.id)}" width="${o.width}" height="${o.height}" loading="lazy" decoding="async"></div><a class="goh-organization-link" href="${esc(o.displayWebsite)}" target="_blank" rel="noopener">${esc(o.displayName)}</a>${o.destination ? `<span class="goh-link-destination">${esc(o.destination)}</span>` : ''}</article>`).join('');
  }

  function logoWall(id = '') {
    return `<div class="goh-logo-wall-container"><div class="goh-organization-wall"${id ? ` id="${id}"` : ''}>${organizationCards()}</div></div>`;
  }

  function who() {
    return `<section class="section" id="coalition"><div class="wrap"><div class="split who-intro"><div><p class="kicker">WHO WE ARE</p><h2>Building Common Ground.</h2><p class="intro">The Goodness of Hemp brings farmers, processors, manufacturers, researchers, brands and community organizations into a shared conversation about American hemp.</p><p>We connect education, responsible industry development and a practical policy discussion—across food, fiber, building materials, wellness and consumer products.</p></div><figure><img class="full-photo" src="assets/education/industry-community.jpg" alt="Participants gathered at the Goodness of Hemp Summit 2024" width="900" height="590" loading="lazy"><figcaption class="micro">The Goodness of Hemp Summit · 2024. Event participation is not a legislative endorsement.</figcaption></figure></div><div class="section-top coalition-title"><h3>Across the hemp supply chain.</h3><a class="text-link" href="#/join">Add your organization ↗</a></div><p class="roster-note">Staging roster for review. All 18 supplied marks are retained in one-color presentation. Public listing, mark permission and legislative endorsement remain separate approvals.</p>${logoWall()}<div class="wall-foot"><p class="micro">No roster entry is counted here as a verified public endorsement.</p><a class="text-link" href="#/supporters">View the organization directory ↗</a></div></div></section>`;
  }

  function action() {
    return `<section class="section action-panel" id="take-action"><div class="wrap"><div class="section-top"><div><p class="kicker">PLAN. DON’T BAN.</p><h2>Learn. Participate.<br><span class="light">Make your voice heard.</span></h2></div><p>Understand the proposed framework, learn about the campaign, contact Congress through the NHA action route, or bring your organization into the initiative.</p></div><div class="button-row">${summary()}${request()}<a class="btn outline" href="#/plan-dont-ban">Plan. Don’t Ban. ↗</a><a class="btn outline" href="${esc(C.actionURL)}" target="_blank" rel="noopener noreferrer">Tell Congress ↗</a></div><p class="source-note">Policy advocacy is led by the National Hemp Association. Opening the action provider does not submit a message.</p><div class="button-row"><a class="text-link" href="#/join">Participation ↗</a><a class="text-link" href="#/toolkit">Campaign materials ↗</a><a class="text-link" href="#/donate">Donate ↗</a></div></div></section>`;
  }

  function newHome() {
    const template = document.createElement('template');
    template.innerHTML = originalHome();
    const heroSection = template.content.querySelector('.video-hero');
    if (!heroSection) return originalHome();
    const row = heroSection.querySelector('.hero-copy .button-row');
    if (row) row.innerHTML = summary() + request();
    const kicker = heroSection.querySelector('.hero-copy .kicker');
    if (kicker) kicker.textContent = 'ONE PLANT. MANY BENEFITS.';
    const intro = heroSection.querySelector('.hero-copy .intro');
    if (intro) intro.textContent = 'Explore the whole American hemp industry—from farms and processing to products and research—ready to grow into global supply chains.';
    return heroSection.outerHTML + facts() + applications() + needs() + benefits() + who() + action();
  }

  function chapters() {
    return `<section class="section paper"><div class="wrap"><div class="section-top"><div><p class="kicker">EDUCATIONAL LIBRARY</p><h2>Seven detailed chapters.</h2></div><p>Source material remains available while each substantive block, image, table, qualification and film is reconciled into the new structure.</p></div><div class="chapter-grid">${C.chapters.map(ch => `<article class="chapter-card"><h3>${ch.title}</h3><p>${ch.summary}</p>${source(ch.url, 'Read the full chapter')}</article>`).join('')}</div></div></section>`;
  }

  function learn() {
    return hero('Learn', 'One Plant.<br><span class="light">Many Benefits.</span>', 'Explore American hemp by application, with source-backed facts, clear qualifications and links to the complete educational chapters.') + `<section class="section"><div class="wrap">${sectors()}<div class="button-row"><a class="text-link" href="#/industry-outlook">Data, research and market context ↗</a></div></div></section>` + chapters();
  }

  function topic(s) {
    const legacy = s.legacyLinks.map(item => source(item.url, item.label)).join(' ');
    const adoption = s.id === 'building-materials' ? `<p class="source-note">${source(C.sources.iccAdoption, 'How model-code adoption works')}</p>` : '';
    const subtopics = s.id === 'wellness-consumer-products' ? `<section class="section paper"><div class="wrap"><div class="section-top"><h2>Keep each product pathway clear.</h2></div><div class="industry-grid subtopic-grid"><article><h3>Beverages</h3><p>Formulation, manufacturing, adult-use context and safeguards. SōRSE Technology remains visible here and in Research & Innovation.</p><img src="assets/education/industry-beverage.jpg" alt="Adults pictured with beverages in supplied GOH photography" loading="lazy"></article><article><h3>Cannabinoid products</h3><p>Ingredient identity, product form, research and the limits of evidence. No FDA approval or health benefit is implied.</p><img src="assets/education/industry-research.jpg" alt="Oil bottle and laboratory equipment" loading="lazy"></article><article><h3>Personal care</h3><p>Cosmetic uses have their own regulatory context. A personal-care product is not automatically a drug or supplement.</p><img src="assets/education/industry-personal-care.jpg" alt="A person applying a personal-care product" loading="lazy"></article></div></div></section>` : '';
    return hero(`Learn / ${s.title}`, s.title, s.detail) + `<section class="section"><div class="wrap split"><img class="full-photo" src="assets/education/industry-${s.photo}.jpg" alt="${esc(s.alt)}" width="800" height="600"><div><p class="kicker">EVIDENCE & CONTEXT</p><h2>${s.fact}</h2><p>${s.factBody}</p>${source(C.sources[s.sourceKey], s.sourceLabel)}${adoption}</div></div></section>${subtopics}<section class="section paper"><div class="wrap"><h2>Continue learning.</h2><p class="intro">Read the complete GOH chapter and explore the other parts of the supply chain.</p><div class="button-row">${legacy}<a class="text-link" href="#/learn">All Learn topics ↗</a><a class="text-link" href="#/framework">The proposed framework ↗</a></div><p class="source-note">Educational context, not product approval or medical advice. The cited source’s date, scope and conditions govern each statement.</p></div></section>`;
  }

  function outlook() {
    return hero('Industry outlook', 'Evidence, scale<br><span class="light">and policy choices.</span>', 'Agricultural output, estimated retail sales and modeled policy effects describe different things. Keep each measure in its own context.') + facts() + `<section class="section paper"><div class="wrap"><p class="kicker">MODELED POLICY SCENARIO · SEPTEMBER 2026</p><div class="split"><div><div class="outlook-number">225,000</div><h2>Jobs potentially displaced.</h2></div><div><p>Whitney Economics’ September 2026 analysis estimates that stricter restrictions could displace approximately 225,000 hemp-cannabinoid jobs.</p><p>This is a modeled potential loss—not jobs already lost, a government employment count or jobs proven to be saved by GOH.</p>${source(C.sources.jobs, 'Read the publisher’s September 2026 analysis')}<p class="source-note">${source(C.sources.reports, 'Access the report and methodology')} · Results depend on the scenario and assumptions.</p></div></div></div></section><section class="section"><div class="wrap"><div class="global-readiness"><div><p class="kicker">READY FOR GLOBAL EXPANSION</p><h2>Build at home.<br><span class="light">Compete worldwide.</span></h2></div><div><p>American growers, processors, manufacturers, researchers and brands are building a connected industry with the quality systems and market knowledge needed to participate in global supply chains.</p><p class="source-note">This describes industry readiness and direction—not a guarantee of export access, revenue or policy outcomes.</p></div></div><div class="faq spaced"><details><summary>Production value is not retail sales.</summary><p>USDA’s production measure describes the agricultural stage. It must not be added to retail-sales or addressable-market estimates.</p></details><details><summary>Market potential is not current revenue.</summary><p>A total addressable market describes modeled opportunity under assumptions. It is not realized revenue or a guaranteed forecast.</p></details><details><summary>Jobs and community outcomes need separate evidence.</summary><p>Report outcomes only when a dated, attributable measurement supports them.</p></details></div></div></section>`;
  }

  function directory() {
    const tags = [...new Set(C.candidates.flatMap(o => o.tags || []))].sort();
    return hero('Who we are', 'Across the supply chain.<br><span class="light">Building Common Ground.</span>', 'Farmers, associations, manufacturers, research organizations and consumer-product businesses have different roles in the hemp story.') + `<section class="section"><div class="wrap"><p class="roster-note">Staging roster for logo, link and category review. All 18 supplied marks are retained; the roster does not establish legislative endorsement.</p><div class="filters"><label>Search<input id="candidate-search" type="search" placeholder="Find an organization"></label><label>Area<select id="candidate-tag"><option value="">All areas</option>${tags.map(tag => `<option>${esc(tag)}</option>`).join('')}</select></label></div><p id="candidate-result" class="micro" aria-live="polite">18 roster entries shown · not a verified supporter count.</p>${logoWall('candidate-wall')}<div class="button-row directory-actions"><a class="btn lime" href="#/join">Add your organization ↗</a></div><p class="source-note">A multi-category listing still represents one organization. Only approved, consented records may contribute to public totals.</p></div></section>`;
  }

  function planDontBan() {
    return hero('Plan. Don’t Ban.', 'Plan. Don’t Ban.<br><span class="light">Protect farmers. Set clear rules.</span>', 'A campaign for practical federal hemp policy that protects consumers while keeping lawful agricultural and manufacturing pathways open.') + `<section class="section"><div class="wrap campaign-grid"><div><p class="kicker">A PRACTICAL PATH FORWARD</p><h2>Regulate responsibly.<br><span class="light">Don’t erase an industry.</span></h2><p class="intro">Plan. Don’t Ban. asks policymakers to replace broad prohibition with clear categories, age controls, testing, traceability and enforceable product rules.</p><p>It also recognizes the farmers, processors, manufacturers, researchers and businesses building American capacity for domestic growth and global supply-chain participation.</p><div class="button-row"><a class="btn lime" href="${esc(C.actionURL)}" target="_blank" rel="noopener noreferrer">Tell Congress ↗</a><a class="btn outline" href="${esc(C.sources.planDontBan)}" target="_blank" rel="noopener noreferrer">Visit the NHA campaign ↗</a></div><p class="source-note">Advocacy is led by the National Hemp Association. Opening the action provider does not send a message; review its form before choosing whether to submit.</p></div><div class="campaign-points"><article><h3>Protect consumers</h3><p>Use testing, labels, packaging, traceability and age controls tailored to product categories.</p></article><article><h3>Protect farmers and manufacturing</h3><p>Keep lawful grain, fiber, floral and controlled work-in-process pathways distinct.</p></article><article><h3>Support American competitiveness</h3><p>Build consistent rules and infrastructure that can support trusted domestic and global markets.</p></article></div></div></section><section class="section paper"><div class="wrap"><div class="button-row">${summary()}${request()}<a class="text-link" href="#/toolkit">Campaign materials ↗</a><a class="text-link" href="#/framework/compare">Review the dated policy comparison ↗</a></div></div></section>`;
  }

  function donate() {
    return hero('Donate', 'Support the work.<br><span class="light">Keep the purpose clear.</span>', 'Help connect people with the Goodness of Hemp story through education, participation and practical policy discussion.') + `<section class="section"><div class="wrap"><div class="notice"><strong>Online contributions are not available from this page.</strong>The receiving organization, checkout destination and approved donation wording must be confirmed before contributions are collected. No tax-deductibility claim is made.</div><div class="button-row"><a class="btn" href="#/join">Participate as an organization ↗</a><a class="btn outline" href="#/toolkit">Share the campaign ↗</a><a class="text-link" href="#/plan-dont-ban">Learn about Plan. Don’t Ban. ↗</a></div></div></section>`;
  }

  function comparisonMark(value) {
    return value === 'marked' ? '<span class="comparison-mark" aria-label="Marked">✓</span>' : '<span class="comparison-blank" aria-label="Unmarked">—</span>';
  }

  function comparisonDesktop(data) {
    return `<div class="comparison-table-wrap"><table class="comparison-table"><thead><tr><th scope="col">Provision in the dated source</th>${data.columns.map(col => `<th scope="col">${esc(col.label)}${col.billIdentifierAsPrinted ? `<br><span class="micro">${esc(col.billIdentifierAsPrinted)}</span>` : ''}</th>`).join('')}</tr></thead><tbody>${data.rows.map(row => `<tr><th scope="row">${esc(row.labelAsPrinted)}</th>${data.columns.map(col => `<td>${comparisonMark(row.cells[col.id])}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  function comparisonMobile(data, selected = data.columns[1].id) {
    const competitor = data.columns.find(col => col.id === selected) || data.columns[1];
    return `<div class="comparison-mobile"><label>Compare GOH with<select id="comparison-select">${data.columns.slice(1).map(col => `<option value="${esc(col.id)}"${col.id === competitor.id ? ' selected' : ''}>${esc(col.label)}</option>`).join('')}</select></label><div id="comparison-mobile-table"><table><thead><tr><th>Provision</th><th>GOH</th><th>${esc(competitor.label)}</th></tr></thead><tbody>${data.rows.map(row => `<tr><th scope="row">${esc(row.labelAsPrinted)}</th><td>${comparisonMark(row.cells.goh)}</td><td>${comparisonMark(row.cells[competitor.id])}</td></tr>`).join('')}</tbody></table></div></div>`;
  }

  function comparisonContent(data) {
    return `<div class="comparison-intro"><div><p class="kicker">DATED REVIEW DATA · ${esc(data.sourceDate)}</p><h2>${esc(data.title)}</h2></div><p>${esc(data.note)}</p></div>${comparisonDesktop(data)}${comparisonMobile(data)}<p class="source-note"><strong>Legend:</strong> ✓ = marked in the supplied comparison. — = unmarked in the supplied comparison; an unmarked cell is not proof of absence or opposition. Source attribution: ${esc(data.sourceAttribution)}.</p>`;
  }

  function comparisonPage() {
    if (!comparison) return hero('Policy comparison', 'Compare the proposals.<br><span class="light">Read the source date.</span>', 'Loading the dated review dataset.') + '<section class="section"><div class="wrap"><p>Loading comparison…</p></div></section>';
    return hero('Policy comparison', 'Compare the proposals.<br><span class="light">Read the source date.</span>', 'A literal marked/unmarked transcription of the dated supplied matrix—not a fresh legal analysis.') + `<section class="section"><div class="wrap">${comparisonContent(comparison)}<div class="button-row spaced"><a class="btn outline" href="framework-comparison.html">Open standalone comparison ↗</a><a class="text-link" href="#/framework">Return to the framework ↗</a></div></div></section>`;
  }

  function frameworkStaging() {
    return originalFramework() + `<section class="section paper"><div class="wrap"><div class="global-readiness"><div><p class="kicker">GLOBAL SUPPLY-CHAIN READINESS</p><h2>American capacity.<br><span class="light">Global opportunity.</span></h2></div><div><p>A clear domestic framework can help American farms and manufacturers build the consistency, traceability and market confidence needed to participate in global supply chains.</p><p class="source-note">This is a policy rationale, not a promise of export access or commercial results.</p></div></div><div class="button-row spaced"><button class="btn" type="button" data-open-comparison>Open policy comparison</button><a class="btn outline" href="#/framework/compare">Shareable comparison page ↗</a><a class="text-link" href="#/plan-dont-ban">Plan. Don’t Ban. ↗</a></div></div></section>`;
  }

  function mediaStaging() {
    return originalMedia()
      .replace('Farmer-to-market infrastructure and U.S. supply chains', 'Farmer-to-market infrastructure and global supply chains')
      .replace('For reporting on hemp policy, American agriculture, domestic manufacturing, or market development,', 'For reporting on hemp policy, American agriculture, manufacturing, market development, or global expansion,');
  }

  function shopStaging() {
    const template = document.createElement('template');
    template.innerHTML = originalShop();
    const grid = template.content.querySelector('.shop-grid');
    if (!grid) return originalShop();
    const products = [
      ['Cream Logo Crewneck', 'assets/shop/cream-crewneck.jpg', 'A cream crewneck with a compact black Goodness of Hemp chest wordmark.'],
      ['Cream Logo Hoodie', 'assets/shop/cream-hoodie.jpg', 'A cream pullover hoodie with a black chest wordmark.'],
      ['Cream Cropped Tee', 'assets/shop/cream-cropped-tee.jpg', 'A cream cropped tee with the black Goodness of Hemp wordmark centered on the front.'],
      ['Hemp-Composite Flying Disc', 'assets/shop/hemp-composite-disc.jpg', 'A natural-tone flying disc concept featuring the GOH mark. Confirm final material specifications and availability with the team.']
    ];
    grid.insertAdjacentHTML('beforeend', products.map(([title, image, description]) => shopCardPublic(title, image, description, title)).join(''));
    const lead = template.content.querySelector('.shop-lead .intro');
    if (lead) lead.textContent = 'A focused collection in black, cream, natural canvas, indigo and hemp-composite concepts. Contact the team for current specifications and availability.';
    grid.insertAdjacentHTML('afterend', '<p class="availability-note">Product photography represents proposed merchandise. Confirm materials, sizes, pricing and fulfillment before purchase.</p>');
    return template.innerHTML;
  }

  routes['/'] = newHome;
  routes['/learn'] = learn;
  routes['/why-hemp'] = learn;
  routes['/industry-outlook'] = outlook;
  routes['/supporters'] = directory;
  routes['/plan-dont-ban'] = planDontBan;
  routes['/take-action'] = planDontBan;
  routes['/donate'] = donate;
  routes['/framework'] = frameworkStaging;
  routes['/framework/compare'] = comparisonPage;
  routes['/media'] = mediaStaging;
  routes['/shop'] = shopStaging;
  C.sectors.forEach(s => { routes[`/learn/${s.id}`] = () => topic(s); });

  function updateNavigation() {
    const nav = document.querySelector('#site-nav');
    if (!nav) return;
    const why = [...nav.querySelectorAll('a')].find(a => a.hash === '#/why-hemp');
    if (why) { why.href = '#/learn'; why.textContent = 'Learn'; }
    if (!nav.querySelector('[href="#/plan-dont-ban"]')) {
      const mediaLink = nav.querySelector('[href="#/media"]');
      mediaLink?.insertAdjacentHTML('beforebegin', '<a href="#/plan-dont-ban">Plan. Don’t Ban.</a>');
    }
    if (!nav.querySelector('[href="#/donate"]')) {
      nav.querySelector('.nav-cta')?.insertAdjacentHTML('beforebegin', '<a href="#/donate">Donate</a>');
    }
    const toggle = document.querySelector('.menu-toggle');
    if (toggle) {
      toggle.setAttribute('aria-label', 'Open navigation');
      toggle.innerHTML = '<span class="hamburger" aria-hidden="true"><i></i><i></i><i></i></span>';
    }
    const explore = [...document.querySelectorAll('.site-footer h3')].find(h => h.textContent.trim() === 'Explore')?.parentElement;
    if (explore) {
      const whyFooter = [...explore.querySelectorAll('a')].find(a => a.hash === '#/why-hemp');
      if (whyFooter) { whyFooter.href = '#/learn'; whyFooter.textContent = 'Learn'; }
      if (!explore.querySelector('[href="#/plan-dont-ban"]')) explore.insertAdjacentHTML('beforeend', '<a href="#/plan-dont-ban">Plan. Don’t Ban.</a><a href="#/donate">Donate</a>');
    }
    const notice = document.querySelector('#presentation-notice');
    if (notice) {
      notice.hidden = false;
      notice.className = 'staging-status';
      notice.textContent = 'Staging review · no forms, payments, or advocacy messages are submitted here';
    }
  }

  const previousBind = bindView;
  bindView = function bindStagingView() {
    previousBind();
    document.querySelectorAll('#candidate-search,#candidate-tag').forEach(control => control.addEventListener('input', () => {
      const search = document.querySelector('#candidate-search')?.value.toLowerCase() || '';
      const tag = document.querySelector('#candidate-tag')?.value || '';
      document.querySelectorAll('#candidate-wall [data-candidate]').forEach(card => {
        const record = C.candidates.find(item => item.id === card.dataset.candidate);
        card.hidden = !(record.displayName.toLowerCase().includes(search) && (!tag || record.tags.includes(tag)));
      });
      const count = document.querySelectorAll('#candidate-wall [data-candidate]:not([hidden])').length;
      const result = document.querySelector('#candidate-result');
      if (result) result.textContent = `${count} roster ${count === 1 ? 'entry' : 'entries'} shown · not a verified supporter count.`;
    }));
    document.querySelector('#comparison-select')?.addEventListener('change', event => {
      const holder = document.querySelector('#comparison-mobile-table');
      const competitor = comparison?.columns.find(col => col.id === event.target.value);
      if (!holder || !competitor) return;
      holder.innerHTML = `<table><thead><tr><th>Provision</th><th>GOH</th><th>${esc(competitor.label)}</th></tr></thead><tbody>${comparison.rows.map(row => `<tr><th scope="row">${esc(row.labelAsPrinted)}</th><td>${comparisonMark(row.cells.goh)}</td><td>${comparisonMark(row.cells[competitor.id])}</td></tr>`).join('')}</tbody></table>`;
    });
  };

  document.addEventListener('click', event => {
    const target = event.target.closest('a,button');
    if (!target) return;
    if (target.hasAttribute('data-staging-provision')) {
      event.preventDefault();
      const item = C.benefits.find(b => b.audience === target.dataset.stagingProvision);
      if (!item) return;
      modal(`<p class="kicker">PROPOSED PROVISIONS · NOT CURRENT LAW</p><h2>${esc(item.audience)}</h2><p>${item.benefit}</p><p><strong>Dated proposal sections:</strong> ${esc(item.sections)}</p><p>${item.limit}</p><a class="text-link" href="#/framework" data-close>Read all ten policy pillars ↗</a>`);
    }
    if (target.hasAttribute('data-open-comparison')) {
      event.preventDefault();
      if (!comparison) {
        modal('<h2>Comparison data is loading.</h2><p>Open the shareable page in a moment.</p><a class="text-link" href="#/framework/compare" data-close>Open comparison page ↗</a>');
        return;
      }
      modal(`<p class="kicker">DATED REVIEW DATA · ${esc(comparison.sourceDate)}</p><div class="comparison-modal">${comparisonContent(comparison)}</div><div class="button-row spaced"><a class="btn outline" href="#/framework/compare" data-close>Open shareable page ↗</a></div>`);
    }
  }, true);

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const nav = document.querySelector('#site-nav');
    if (!nav?.classList.contains('open')) return;
    nav.classList.remove('open');
    const toggle = document.querySelector('.menu-toggle');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.focus();
  });

  const routeTitles = {
    '/learn': 'Learn', '/industry-outlook': 'Industry outlook', '/supporters': 'Who we are',
    '/plan-dont-ban': 'Plan. Don’t Ban.', '/take-action': 'Plan. Don’t Ban.', '/donate': 'Donate',
    '/framework/compare': 'Policy comparison'
  };
  window.addEventListener('hashchange', () => {
    const path = location.hash.slice(1) || '/';
    const sector = C.sectors.find(item => path === `/learn/${item.id}`);
    if (routeTitles[path] || sector) document.title = `${sector?.title || routeTitles[path]} — The Goodness of Hemp`;
  });

  updateNavigation();
  fetch('data/comparison.reference.json')
    .then(response => response.ok ? response.json() : Promise.reject(new Error('Comparison unavailable')))
    .then(data => {
      comparison = data;
      if ((location.hash.slice(1) || '/') === '/framework/compare') render(false);
    })
    .catch(() => { comparison = null; });
  render(false);
})();
