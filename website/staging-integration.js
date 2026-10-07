/* Focused staging merge. The current website remains the base; this file adds
   the handoff's responsive wall, education, campaign, policy and store work. */
(() => {
  'use strict';

  const C = window.GOH_STAGING_CONTENT;
  if (!C || typeof routes === 'undefined') return;

  const originalHome = routes['/'];
  const originalMedia = routes['/media'];
  const originalShop = routes['/shop'];
  const chapterData = window.GOH_CHAPTERS || [];
  const chapterVideoIds = new Set(chapterData.map(chapter => chapter.video?.youtubeId).filter(Boolean));
  const isStagingReview = new URLSearchParams(window.location.search).has('staging');
  let pendingRouteTarget = null;

  const socialProfiles = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/people/Goodness-of-Hemp/61590495022137/',
      icon: '<path d="M15.4 8.3h-2.1V6.9c0-.6.4-.8.7-.8h1.4V3.7h-2c-2.3 0-2.8 1.7-2.8 2.8v1.8H9v2.5h1.6v5.5h2.7v-5.5h1.9l.2-2.5Z"/>'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/goodnessofhemp/',
      icon: '<rect x="4.2" y="4.2" width="11.6" height="11.6" rx="3"/><circle cx="10" cy="10" r="2.8"/><circle cx="14.1" cy="5.9" r=".7" class="social-dot"/>'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/goodness-of-hemp/about/',
      icon: '<path d="M6.8 7.5H4.3v8.1h2.5V7.5Zm.2-2.4c0 .8-.6 1.4-1.5 1.4S4 5.9 4 5.1s.6-1.4 1.5-1.4S7 4.3 7 5.1Zm3.7 2.4H8.3v8.1h2.5v-4.5c0-1.2.2-2.3 1.7-2.3 1.5 0 1.5 1.4 1.5 2.4v4.4h2.5v-5c0-2.5-.5-4.4-3.4-4.4-1.4 0-2.3.8-2.7 1.5h-.1V7.5h.4Z"/>'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@goodnessofhemp',
      icon: '<path d="M17 6.1a2.2 2.2 0 0 0-1.5-1.5C14.2 4.2 10 4.2 10 4.2s-4.2 0-5.5.4A2.2 2.2 0 0 0 3 6.1 22.7 22.7 0 0 0 2.6 10c0 1.3.1 2.6.4 3.9.2.7.8 1.3 1.5 1.5 1.3.4 5.5.4 5.5.4s4.2 0 5.5-.4a2.2 2.2 0 0 0 1.5-1.5c.3-1.3.4-2.6.4-3.9 0-1.3-.1-2.6-.4-3.9ZM8.5 12.5v-5l4.3 2.5-4.3 2.5Z"/>'
    }
  ];

  const source = (url, label) => `<a class="source-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`;
  const summary = () => '<a class="btn lime" href="#/framework">Policy pillars <span aria-hidden="true">↗</span></a>';
  const request = () => `<a class="btn outline" href="${C.frameworkRequestURL}">Request current proposed language <span aria-hidden="true">↗</span></a>`;
  const proposed = () => '<p class="source-note">These pillars summarize the current proposed framework’s general direction. The framework remains under development, may change, and is not introduced legislation or current law.</p>';
  const socialLinks = (className = '') => `<div class="social-links ${esc(className)}" aria-label="The Goodness of Hemp social media">${socialProfiles.map(profile => `<a href="${esc(profile.url)}" target="_blank" rel="noopener noreferrer" aria-label="Follow The Goodness of Hemp on ${esc(profile.name)}" title="${esc(profile.name)}"><svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">${profile.icon}</svg><span>${esc(profile.name)}</span></a>`).join('')}</div>`;

  function facts() {
    return `<section class="section goh-facts" id="hemp-facts" aria-labelledby="facts-heading"><div class="wrap"><div class="section-top"><div><p class="kicker">AMERICAN HEMP · 2025 USDA DATA</p><h2 id="facts-heading">The agricultural foundation.<br><span class="light">The opportunity ahead.</span></h2></div><p>Start with what American farmers are producing today.</p></div><div class="fact-grid">${C.facts.map(f => `<article class="fact-card"><div class="fact-number">${f.display}</div><div class="fact-unit">${f.unit}</div><h3>${f.title}</h3><p>${f.copy}</p><p class="fact-scope">2025 · ${esc(f.scope)}</p>${source(`${C.sources.usda}#page=${f.page}`, 'USDA source')}</article>`).join('')}</div><p class="source-note">These are agricultural production figures, not retail sales or the value of the entire hemp supply chain. The $739 million includes outdoor and under-protection production; acreage, fiber and grain figures cover outdoor production.</p><p class="source-note">Source: USDA NASS, <em>National Hemp Report</em>, released April 16, 2026. ${source(C.sources.usda, 'Read the report')}</p></div></section>`;
  }

  function restoreOrientationStrip(template) {
    const strip = template.content.querySelector('.stats-strip');
    if (!strip) return '';
    strip.classList.add('orientation-strip');
    strip.setAttribute('aria-label', 'Explore the Goodness of Hemp');
    const tiles = [...strip.querySelectorAll('.stats-grid > div')].slice(1);
    const destinations = [
      { href: '#hemp-production-pathways', attribute: 'data-scroll-target="hemp-production-pathways"', label: 'Jump to the three hemp production pathways' },
      { href: '#/framework', attribute: 'data-route-target="policy-pillars"', label: 'Read the ten proposed policy pillars' },
      { href: '#/join', attribute: '', label: 'Open the organization participation form' }
    ];
    tiles.forEach((tile, index) => {
      const destination = destinations[index];
      if (!destination) return;
      tile.innerHTML = `<a class="orientation-link" href="${destination.href}" ${destination.attribute} aria-label="${destination.label}">${tile.innerHTML}</a>`;
    });
    return strip.outerHTML;
  }

  function restoreProductionPathways(template) {
    const section = template.content.querySelector('.cards-three')?.closest('section');
    if (!section) return '';
    section.id = 'hemp-production-pathways';
    section.classList.add('production-pathways');
    section.setAttribute('aria-labelledby', 'production-pathways-heading');
    const heading = section.querySelector('h2');
    if (heading) heading.id = 'production-pathways-heading';
    const cards = [...section.querySelectorAll('.photo-card')];
    cards.forEach(card => card.classList.add('pathway-card'));
    const links = cards.map(card => card.querySelector('.text-link'));
    if (links[0]) links[0].href = '#/learn/hemp-food/';
    if (links[1]) links[1].href = '#/learn/hemp-materials/';
    if (links[2]) links[2].href = '#/learn/hemp-cannabinoids/';
    return section.outerHTML;
  }

  function restoreFilm(template) {
    const film = template.content.querySelector('.video-strip');
    if (!film) return '';
    film.classList.add('home-film');
    film.setAttribute('aria-labelledby', 'home-film-heading');
    const heading = film.querySelector('h2');
    if (heading) heading.id = 'home-film-heading';
    const watch = film.querySelector('.copy [data-video]');
    if (watch) watch.innerHTML = 'Watch the film <span aria-hidden="true">▶</span>';
    return film.outerHTML;
  }

  function needs() {
    return `<section class="section" id="why-policy-matters"><div class="wrap split"><img class="full-photo" src="assets/education/harvest.jpg" alt="A tractor harvesting a real hemp field" width="700" height="470" loading="lazy"><div><p class="kicker">WHY WORKABLE POLICY MATTERS</p><h2>From the farm<br><span class="light">to the global economy.</span></h2><p>Farmers need a path to buyers. Processors and manufacturers need consistent requirements. Consumers need clear labels and accountable businesses.</p><p>The American hemp industry is building the capacity, standards and partnerships needed for responsible global expansion. The GOH proposal connects agricultural rules, industrial supply chains and product-specific safeguards without promising a particular market outcome.</p><div class="button-row"><a class="text-link" href="#/industry-outlook">Explore the evidence and policy context ↗</a></div></div></div></section>`;
  }

  function benefits() {
    return `<section class="section stone" id="framework-benefits"><div class="wrap"><div class="section-top"><div><p class="kicker">THE PROPOSED GOH FRAMEWORK</p><h2>Different needs.<br><span class="light">A connected approach.</span></h2></div><p>See how the framework’s general policy concepts connect people across the supply chain.</p></div><div class="benefit-grid">${C.benefits.map(b => `<article class="benefit-card"><h3>${b.audience}</h3><p class="benefit-need">${b.need}</p><p>${b.benefit}</p><a class="text-link" href="#/framework">Read the ten pillars ↗</a></article>`).join('')}</div>${proposed()}<div class="button-row">${summary()}${request()}</div></div></section>`;
  }

  function organizationCards() {
    return C.candidates.map(o => `<article class="goh-organization-card" data-candidate="${esc(o.id)}" data-tags="${esc((o.tags || []).join('|'))}"><div class="goh-logo-frame"><img src="assets/logos/monochrome/${esc(o.id)}.png" alt="${esc(o.displayName)} logo" data-logo="${esc(o.id)}" width="${o.width}" height="${o.height}" loading="lazy" decoding="async"></div><a class="goh-organization-link" href="${esc(o.displayWebsite)}" target="_blank" rel="noopener">${esc(o.displayName)}</a>${o.destination ? `<span class="goh-link-destination">${esc(o.destination)}</span>` : ''}</article>`).join('');
  }

  function logoWall(id = '') {
    return `<div class="goh-logo-wall-container"><div class="goh-organization-wall"${id ? ` id="${id}"` : ''}>${organizationCards()}</div></div>`;
  }

  function who() {
    return `<section class="section" id="coalition"><div class="wrap"><div class="split who-intro"><div><p class="kicker">WHO WE ARE</p><h2>Building Common Ground.</h2><p class="intro">The Goodness of Hemp brings farmers, processors, manufacturers, researchers, brands and community organizations into a shared conversation about American hemp.</p><p>We connect education, responsible industry development and a practical policy discussion—across food, fiber, building materials, wellness and consumer products.</p></div><figure><img class="full-photo" src="assets/education/industry-community.jpg" alt="Participants gathered at the Goodness of Hemp Summit 2024" width="900" height="590" loading="lazy"><figcaption class="micro">The Goodness of Hemp Summit · 2024. Event participation is not a legislative endorsement.</figcaption></figure></div><div class="section-top coalition-title"><h3>Across the hemp supply chain.</h3><a class="text-link" href="#/join">Add your organization ↗</a></div><p class="roster-note">The 18 supplied organization records are presented in a consistent one-color system, with each name linked to the organization’s website. A directory listing does not by itself indicate support for a specific policy proposal.</p>${logoWall()}<div class="wall-foot"><p class="micro">Explore the organizations helping connect hemp agriculture, research, processing, manufacturing and markets.</p><a class="text-link" href="#/supporters">View the organization directory ↗</a></div></div></section>`;
  }

  function action() {
    return `<section class="section action-panel" id="take-action"><div class="wrap"><div class="section-top"><div><p class="kicker">PLAN. DON’T BAN.</p><h2>Learn. Participate.<br><span class="light">Make your voice heard.</span></h2></div><p>Understand the proposed framework, learn about the campaign, contact Congress through the NHA action route, or bring your organization into the initiative.</p></div><div class="button-row">${summary()}${request()}<a class="btn outline" href="#/plan-dont-ban">Plan. Don’t Ban. ↗</a><a class="btn outline" href="${esc(C.actionURL)}" target="_blank" rel="noopener noreferrer" data-open-action>Tell Congress ↗</a></div><p class="source-note">Policy advocacy is led by the National Hemp Association. Opening the action provider does not submit a message.</p><div class="button-row"><a class="text-link" href="#/join">Participation ↗</a><a class="text-link" href="#/toolkit">Campaign materials ↗</a><a class="text-link" href="#/donate" data-open-donate>Donate ↗</a></div></div></section>`;
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
    const orientation = restoreOrientationStrip(template);
    const pathways = restoreProductionPathways(template);
    const film = restoreFilm(template);
    return heroSection.outerHTML + orientation + facts() + chapters({home: true}) + pathways + film + needs() + benefits() + who() + action();
  }

  const chapterHref = chapter => `#${chapter.route}`;
  const renderParagraphs = paragraphs => (paragraphs || []).map(paragraph => `<p>${esc(paragraph)}</p>`).join('');
  const renderBulletList = bullets => bullets?.length ? `<ul class="chapter-bullets">${bullets.map(item => `<li>${esc(item)}</li>`).join('')}</ul>` : '';

  function chapterCard(card) {
    return `<article class="chapter-detail-card">${card.image ? `<img src="${esc(card.image)}" alt="${esc(card.alt || '')}" loading="lazy" decoding="async">` : ''}<div class="chapter-detail-copy"><h3>${esc(card.title)}</h3>${card.text ? `<p>${esc(card.text)}</p>` : ''}${renderBulletList(card.bullets)}</div></article>`;
  }

  function chapterSection(section, index) {
    const links = section.links?.length ? `<div class="button-row chapter-section-links">${section.links.map(item => `<a class="text-link" href="#${esc(item.route)}">${esc(item.label)} <span aria-hidden="true">↗</span></a>`).join('')}</div>` : '';
    const callout = section.callout ? `<aside class="chapter-callout"><strong>${esc(section.callout.title)}</strong><p>${esc(section.callout.text)}</p></aside>` : '';
    const copy = `<div class="chapter-section-copy"><p class="kicker">${esc(section.kicker || '')}</p><h2>${esc(section.title)}</h2>${renderParagraphs(section.paragraphs)}${renderBulletList(section.bullets)}${callout}${links}</div>`;
    const imageFit = section.imageFit === 'contain' ? ' chapter-section-image-contain' : '';
    const image = section.image ? `<figure class="chapter-section-image${imageFit}"><img src="${esc(section.image)}" alt="${esc(section.imageAlt || '')}" loading="lazy" decoding="async"></figure>` : '';
    const cards = section.cards?.length ? `<div class="chapter-card-grid chapter-card-grid-${Math.min(section.cards.length, 4)}">${section.cards.map(chapterCard).join('')}</div>` : '';
    return `<section class="section chapter-section ${index % 2 ? 'paper' : ''}" id="${esc(section.id)}"><div class="wrap"><div class="chapter-section-lead${image ? ' has-image' : ''}${index % 2 && image ? ' image-right' : ''}">${copy}${image}</div>${cards}</div></section>`;
  }

  function chapterNavigation(current) {
    return `<nav class="chapter-navigation" aria-label="Educational chapters"><div class="wrap"><a class="chapter-navigation-index" href="#/learn">Chapter index</a><div>${chapterData.map(chapter => `<a href="${chapterHref(chapter)}"${chapter === current ? ' aria-current="page"' : ''}>${esc(chapter.title.replace(/^Hemp /, ''))}</a>`).join('')}</div></div></nav>`;
  }

  function chapterPage(chapter) {
    const citations = chapter.citations?.length ? `<section class="section chapter-sources"><div class="wrap"><div class="section-top"><div><p class="kicker">SOURCES & FURTHER READING</p><h2>Follow the evidence.</h2></div><p>These links add current regulatory and evidence context to the original Goodness of Hemp educational material.</p></div><ol>${chapter.citations.map(citation => `<li>${source(citation.url, citation.label)}</li>`).join('')}</ol></div></section>` : '';
    const currentIndex = chapterData.indexOf(chapter);
    const previous = chapterData[(currentIndex - 1 + chapterData.length) % chapterData.length];
    const next = chapterData[(currentIndex + 1) % chapterData.length];
    const pager = `<nav class="chapter-pager" aria-label="Chapter navigation"><a href="${chapterHref(previous)}"><span>← Previous chapter</span><strong>${esc(previous.title)}</strong></a><a class="chapter-pager-all" href="#/learn"><span>Explore the hemp story</span><strong>Chapter index</strong></a><a class="chapter-pager-next" href="${chapterHref(next)}"><span>Next chapter →</span><strong>${esc(next.title)}</strong></a></nav>`;
    return `<article class="chapter-page"><header class="chapter-hero"><div class="chapter-hero-media"><img src="${esc(chapter.hero.image)}" alt="${esc(chapter.hero.alt)}" loading="eager" decoding="async"></div><div class="chapter-hero-copy"><p class="breadcrumb"><a href="#/learn">Learn</a> / ${esc(chapter.title)}</p><p class="kicker">${esc(chapter.eyebrow)}</p><h1>${esc(chapter.hero.title)}</h1><p class="chapter-summary">${esc(chapter.summary)}</p><div class="chapter-intro">${renderParagraphs(chapter.intro)}</div><a class="text-link" href="${chapterHref(chapter)}" data-scroll-target="${esc(chapter.sections[0]?.id || '')}">Begin the chapter <span aria-hidden="true">↓</span></a></div></header>${chapterNavigation(chapter)}${chapter.sections.map(chapterSection).join('')}<section class="chapter-film"><div class="chapter-film-image"><img src="${esc(chapter.hero.image)}" alt="" loading="lazy"><button class="play-button" type="button" aria-label="Play ${esc(chapter.video.title)}" data-chapter-video="${esc(chapter.video.youtubeId)}">▶</button></div><div class="chapter-film-copy"><p class="kicker">THE GOODNESS OF HEMP STORY</p><h2>${esc(chapter.video.title)}</h2><p>${esc(chapter.video.caption)}</p><button class="btn" type="button" data-chapter-video="${esc(chapter.video.youtubeId)}">Watch the film <span aria-hidden="true">▶</span></button></div></section><section class="section chapter-context"><div class="wrap"><div class="chapter-disclaimer"><p class="kicker">EVIDENCE & CONTEXT</p><h2>${esc(chapter.disclaimer.title)}</h2><p>${esc(chapter.disclaimer.text)}</p></div></div></section>${citations}<section class="section paper chapter-related"><div class="wrap"><div class="section-top"><div><p class="kicker">KEEP EXPLORING</p><h2>Continue through hemp’s connected supply chain.</h2></div></div>${pager}</div></section><section class="section chapter-follow"><div class="wrap chapter-follow-inner"><div><p class="kicker">FOLLOW & SHARE</p><h2>Keep the Goodness moving.</h2><p>Follow the campaign, share the educational chapters, or explore the proposed framework.</p></div><div>${socialLinks('chapter-social')}<div class="button-row"><a class="btn lime" href="#/framework">Policy summary ↗</a><a class="btn outline" href="#/plan-dont-ban">Plan. Don’t Ban. ↗</a></div></div></div></section></article>`;
  }

  function chapters({home = false} = {}) {
    const records = chapterData.length ? chapterData : C.chapters.map((chapter, index) => ({...chapter, route: `/learn/${['agriculture', 'food', 'feed', 'cannabinoids', 'materials', 'wellness', 'beverages'][index]}`}));
    const sectionId = home ? 'home-chapters' : 'chapter-library';
    const kicker = home ? 'EXPLORE HEMP, CHAPTER BY CHAPTER' : 'START WITH A CHAPTER';
    return `<section class="section chapter-entry-section" id="${sectionId}"><div class="wrap"><div class="section-top"><div><p class="kicker">${kicker}</p><h2>The hemp story, chapter by chapter.</h2></div><p>Start with any chapter and follow the connections across American hemp’s evolving supply chain.</p></div><div class="chapter-grid">${records.map((chapter, index) => `<a class="chapter-card" href="#${esc(chapter.route)}"><figure><img src="${esc(chapter.hero?.image || `assets/education/industry-${chapter.slug}.jpg`)}" alt="" width="900" height="600" loading="lazy" decoding="async"></figure><div class="chapter-card-copy"><span class="chapter-card-number">${String(index + 1).padStart(2, '0')}</span><h3>${esc(chapter.title)}</h3><p>${esc(chapter.summary)}</p><span class="chapter-card-link">Read the chapter <span aria-hidden="true">↗</span></span></div></a>`).join('')}</div></div></section>`;
  }

  function learn() {
    return hero('Learn', 'One Plant.<br><span class="light">Many Benefits.</span>', 'Explore American hemp chapter by chapter, with source-backed facts, clear qualifications and direct paths across the hemp supply chain.') + chapters();
  }

  function appendixContext(context) {
    return context ? `<span class="appendix-context">${esc(context)}</span>` : '';
  }

  function industryAppendix() {
    const terms = (C.industryTerms || []).map(item => `<div class="appendix-term"><dt>${esc(item.term)}${appendixContext(item.context)}</dt><dd>${esc(item.definition)}</dd></div>`).join('');
    const areas = (C.appliedAreas || []).map(item => `<article class="applied-area"><h3>${esc(item.title)}${appendixContext(item.context)}</h3><p>${esc(item.text)}</p></article>`).join('');
    const references = (C.appendixSources || []).map(item => `<li>${source(item.url, item.label)}</li>`).join('');
    return hero('Industry appendix', 'Terms for a growing<br><span class="light">global hemp industry.</span>', 'A shared vocabulary and a living map of known applications—designed to expand as the industry does.') + `<section class="section compact appendix-overview"><div class="wrap appendix-overview-grid"><div><p class="kicker">HOW TO USE THIS APPENDIX</p><h2>A reference,<br><span class="light">not a boundary.</span></h2></div><div><p>Hemp moves through connected agricultural, food, feed, material, manufacturing and consumer-product supply chains. This appendix organizes commonly used terms and applied areas without treating today’s categories as fixed or exhaustive.</p><aside class="appendix-jurisdiction"><strong>Global context</strong><p>Terminology, legal definitions, cannabinoid limits, product classifications, building-code adoption and permitted uses vary by country and other jurisdiction. A term or application listed here does not mean it is approved, lawful or suitable in a particular market.</p></aside></div></div></section><section class="section paper appendix-terms" id="hemp-industry-terms"><div class="wrap"><div class="section-top"><div><p class="kicker">INDUSTRY TERMS</p><h2>A shared starting vocabulary.</h2></div><p>Context labels identify terms whose meaning, authorization or use can change across markets.</p></div><dl class="appendix-glossary">${terms}</dl></div></section><section class="section appendix-applications" id="known-application-areas"><div class="wrap"><div class="section-top"><div><p class="kicker">KNOWN APPLICATION AREAS</p><h2>Where hemp is being applied.</h2></div><p>A living index of established and developing areas—not a claim that every product or use is authorized in every market.</p></div><div class="applied-area-grid">${areas}</div></div></section><section class="section compact paper appendix-references"><div class="wrap"><div class="section-top"><div><p class="kicker">REFERENCE POINTS</p><h2>Follow the source context.</h2></div><p>These references provide U.S. regulatory, research and code examples. Their scope does not extend automatically to other jurisdictions.</p></div><ul>${references}</ul><div class="button-row"><a class="text-link" href="#/learn">Return to the chapter index <span aria-hidden="true">↗</span></a></div></div></section>`;
  }

  function topic(s) {
    const sectorChapters = {
      'food-nutrition': ['food'],
      'fiber-manufacturing': ['materials'],
      'building-materials': ['materials'],
      'wellness-consumer-products': ['wellness', 'cannabinoids', 'beverages'],
      'agriculture-animal-feed': ['agriculture', 'feed'],
      'research-innovation': ['cannabinoids', 'materials']
    };
    const continuation = (sectorChapters[s.id] || []).map(slug => chapterData.find(chapter => chapter.slug === slug)).filter(Boolean).map(chapter => `<a class="source-link" href="${chapterHref(chapter)}">${esc(chapter.title)} <span aria-hidden="true">↗</span></a>`).join(' ');
    const adoption = s.id === 'building-materials' ? `<p class="source-note">${source(C.sources.iccAdoption, 'How model-code adoption works')}</p>` : '';
    const subtopics = s.id === 'wellness-consumer-products' ? `<section class="section paper"><div class="wrap"><div class="section-top"><h2>Keep each product pathway clear.</h2></div><div class="industry-grid subtopic-grid"><article><h3>Beverages</h3><p>Formulation, manufacturing, adult-use context and safeguards.</p><img src="assets/education/industry-beverage.jpg" alt="Adults pictured with beverages in supplied GOH photography" loading="lazy"></article><article><h3>Cannabinoid products</h3><p>Ingredient identity, product form, research and the limits of evidence. No FDA approval or health benefit is implied.</p><img src="assets/education/industry-research.jpg" alt="Oil bottle and laboratory equipment" loading="lazy"></article><article><h3>Personal care</h3><p>Cosmetic uses have their own regulatory context. A personal-care product is not automatically a drug or supplement.</p><img src="assets/education/industry-personal-care.jpg" alt="A person applying a personal-care product" loading="lazy"></article></div></div></section>` : '';
    return hero(`Learn / ${s.title}`, s.title, s.detail) + `<section class="section"><div class="wrap split"><img class="full-photo" src="assets/education/industry-${s.photo}.jpg" alt="${esc(s.alt)}" width="800" height="600"><div><p class="kicker">EVIDENCE & CONTEXT</p><h2>${s.fact}</h2><p>${s.factBody}</p>${source(C.sources[s.sourceKey], s.sourceLabel)}${adoption}</div></div></section>${subtopics}<section class="section paper"><div class="wrap"><h2>Continue learning.</h2><p class="intro">Read a related GOH chapter and explore more of the supply chain.</p><div class="button-row">${continuation}<a class="text-link" href="#/learn">All Learn topics ↗</a><a class="text-link" href="#/framework">The proposed framework ↗</a></div><p class="source-note">Educational context, not product approval or medical advice. The cited source’s date, scope and conditions govern each statement.</p></div></section>`;
  }

  function outlook() {
    return hero('Industry outlook', 'Evidence, scale<br><span class="light">and policy choices.</span>', 'Agricultural output, estimated retail sales and modeled policy effects describe different things. Keep each measure in its own context.') + facts() + `<section class="section paper"><div class="wrap"><p class="kicker">MODELED POLICY SCENARIO · SEPTEMBER 2026</p><div class="split"><div><div class="outlook-number">225,000</div><h2>Jobs potentially displaced.</h2></div><div><p>Whitney Economics’ September 2026 analysis estimates that stricter restrictions could displace approximately 225,000 hemp-cannabinoid jobs.</p><p>This is a modeled potential loss—not jobs already lost, a government employment count or jobs proven to be saved by GOH.</p>${source(C.sources.jobs, 'Read the publisher’s September 2026 analysis')}<p class="source-note">${source(C.sources.reports, 'Access the report and methodology')} · Results depend on the scenario and assumptions.</p></div></div></div></section><section class="section"><div class="wrap"><div class="global-readiness"><div><p class="kicker">READY FOR GLOBAL EXPANSION</p><h2>Build at home.<br><span class="light">Compete worldwide.</span></h2></div><div><p>American growers, processors, manufacturers, researchers and brands are building a connected industry with the quality systems and market knowledge needed to participate in global supply chains.</p><p class="source-note">This describes industry readiness and direction—not a guarantee of export access, revenue or policy outcomes.</p></div></div><div class="faq spaced"><details><summary>Production value is not retail sales.</summary><p>USDA’s production measure describes the agricultural stage. It must not be added to retail-sales or addressable-market estimates.</p></details><details><summary>Market potential is not current revenue.</summary><p>A total addressable market describes modeled opportunity under assumptions. It is not realized revenue or a guaranteed forecast.</p></details><details><summary>Jobs and community outcomes need separate evidence.</summary><p>Report outcomes only when a dated, attributable measurement supports them.</p></details></div></div></section>`;
  }

  function directory() {
    const tags = [...new Set(C.candidates.flatMap(o => o.tags || []))].sort();
    return hero('Who we are', 'Across the supply chain.<br><span class="light">Building Common Ground.</span>', 'Farmers, associations, manufacturers, research organizations and consumer-product businesses have different roles in the hemp story.') + `<section class="section"><div class="wrap"><p class="roster-note">Explore 18 organizations across the hemp supply chain. Directory listings and support for a specific policy proposal remain distinct.</p><div class="filters"><label>Search<input id="candidate-search" type="search" placeholder="Find an organization"></label><label>Area<select id="candidate-tag"><option value="">All areas</option>${tags.map(tag => `<option>${esc(tag)}</option>`).join('')}</select></label></div><p id="candidate-result" class="micro" aria-live="polite">18 organizations shown.</p>${logoWall('candidate-wall')}<div class="button-row directory-actions"><a class="btn lime" href="#/join">Add your organization ↗</a></div><p class="source-note">Organizations may appear in more than one category; directory totals count each organization once.</p></div></section>`;
  }

  function planDontBan() {
    return hero('Plan. Don’t Ban.', 'Plan. Don’t Ban.<br><span class="light">Protect farmers. Set clear rules.</span>', 'A campaign for practical federal hemp policy that protects consumers while keeping lawful agricultural and manufacturing pathways open.') + `<section class="section"><div class="wrap campaign-grid"><div><p class="kicker">A PRACTICAL PATH FORWARD</p><h2>Regulate responsibly.<br><span class="light">Don’t erase an industry.</span></h2><p class="intro">Plan. Don’t Ban. asks policymakers to replace broad prohibition with clear categories, age controls, testing, traceability and enforceable product rules.</p><p>It also recognizes the farmers, processors, manufacturers, researchers and businesses building American capacity for domestic growth and global supply-chain participation.</p><div class="button-row"><a class="btn lime" href="${esc(C.actionURL)}" target="_blank" rel="noopener noreferrer" data-open-action>Tell Congress ↗</a><a class="btn outline" href="${esc(C.sources.planDontBan)}" target="_blank" rel="noopener noreferrer">Visit the NHA campaign ↗</a></div><p class="source-note">Advocacy is led by the National Hemp Association. Opening the action provider does not send a message; review its form before choosing whether to submit.</p></div><div class="campaign-points"><article><h3>Protect consumers</h3><p>Use testing, labels, packaging, traceability and age controls tailored to product categories.</p></article><article><h3>Protect farmers and manufacturing</h3><p>Keep lawful grain, fiber, floral and controlled work-in-process pathways distinct.</p></article><article><h3>Support American competitiveness</h3><p>Build consistent rules and infrastructure that can support trusted domestic and global markets.</p></article></div></div></section><section class="section paper"><div class="wrap"><div class="button-row">${summary()}${request()}<a class="text-link" href="#/toolkit">Campaign materials ↗</a></div></div></section>`;
  }

  function donate() {
    return hero('Donate', 'Support the work.<br><span class="light">Keep the purpose clear.</span>', 'Help connect people with the Goodness of Hemp story through education, participation and practical policy discussion.') + `<section class="section"><div class="wrap"><div class="notice"><strong>Connect with the campaign team to contribute.</strong>Email the team for the current contribution route and receiving-organization details. No tax-deductibility claim is made on this site.</div><div class="button-row"><a class="btn lime" href="mailto:contact@thegoodnessofhemp.org?subject=Goodness%20of%20Hemp%20contribution%20inquiry">Contact the campaign team ↗</a><a class="btn" href="#/join">Participate as an organization ↗</a><a class="btn outline" href="#/toolkit">Share the campaign ↗</a><a class="text-link" href="#/plan-dont-ban">Learn about Plan. Don’t Ban. ↗</a></div></div></section>`;
  }

  function donationModal() {
    const logo = document.querySelector('.brand img')?.getAttribute('src') || '';
    const amounts = ['$50', '$100', '$250', '$500', '$1,000', '$2,500'];
    if (!isStagingReview) return `<div class="donation-modal-shell"><div class="donation-message"><div class="donation-lockup"><strong>Support</strong><span aria-hidden="true"></span><img src="${esc(logo)}" alt="The Goodness of Hemp"></div><p>Thank you for supporting The Goodness of Hemp campaign.</p><p><strong>Your support helps continue hemp education, participation and practical policy work.</strong></p><p class="donation-provider-note">Contact the campaign team for the current contribution route and receiving-organization details. No tax-deductibility claim is made on this site.</p><a class="btn lime" href="mailto:contact@thegoodnessofhemp.org?subject=Goodness%20of%20Hemp%20contribution%20inquiry">Contact the campaign team ↗</a></div></div>`;
    return `<div class="donation-modal-shell"><div class="donation-message"><div class="donation-lockup"><strong>Support</strong><span aria-hidden="true"></span><img src="${esc(logo)}" alt="The Goodness of Hemp"></div><p>Thank you for supporting The Goodness of Hemp campaign. This staging review does not collect payment.</p><p><strong>Your support helps continue hemp education, participation and practical policy work.</strong></p><p class="donation-provider-note">The live contribution provider and receiving-organization details remain a launch dependency.</p></div><div class="donation-amounts"><h2>Donation amount</h2><div class="donation-options" aria-label="Donation amount preview">${amounts.map(amount => `<button type="button" data-donation-amount="${amount}" aria-pressed="false">${amount}</button>`).join('')}<button type="button" data-donation-amount="Other" aria-pressed="false">Other</button></div><button class="donation-pay" type="button" disabled>Payment disabled in review</button><p class="source-note">No card fields are shown and no charge can be created from this staging URL.</p></div></div>`;
  }

  function advocacyModal() {
    const logo = document.querySelector('.brand img')?.getAttribute('src') || '';
    return `<div class="advocacy-modal-shell"><p class="advocacy-attribution">Paid for by the <a href="https://nationalhempassociation.org/" target="_blank" rel="noopener noreferrer">National Hemp Association</a>.</p><div class="advocacy-mark"><img src="${esc(logo)}" alt="The Goodness of Hemp"></div><h2>Tell Congress: Support the Goodness of Hemp</h2><p class="advocacy-lead"><strong>America’s hemp industry has grown.</strong><br><br>Now it’s time for policy to grow with it.</p><p>Congress has an opportunity to support a balanced, long-term framework that strengthens American agriculture, protects consumers, encourages innovation, and creates opportunities across the full hemp economy.</p><p class="advocacy-signoff"><strong>One Plant. Many Benefits.</strong></p><a class="advocacy-continue" href="${esc(C.actionURL)}" target="_blank" rel="noopener noreferrer">Take Action <span aria-hidden="true">↗</span></a><p class="source-note">Continues on the National Hemp Association’s external action provider. Opening it does not send a message.</p></div>`;
  }

  function frameworkStaging() {
    const pillars = C.policyPillars.map(pillar => `<details><summary class="pillar-summary"><span><span class="pillar-number">${esc(pillar.n)}</span>${esc(pillar.title)}</span></summary><p>${esc(pillar.text)}</p></details>`).join('');
    return hero('The proposed framework', 'A smarter federal<br><span class="light">framework for hemp.</span>', 'The ten pillars below summarize the current Goodness of Hemp policy framework so supporters can understand its general direction.') + `<section class="section"><div class="wrap policy-grid"><aside class="policy-index"><p class="kicker">CURRENT POLICY SUMMARY</p><h3>The Goodness of Hemp framework</h3><p>Ten public policy pillars describe the framework’s general direction across agriculture, manufacturing, consumer products and oversight.</p><div class="notice"><strong>Proposed. Not introduced legislation or current law.</strong>The framework remains under development and may change during the drafting process.</div>${request()}<p class="micro spaced">Available by request for discussion and subject to change.</p></aside><div class="pillars" id="policy-pillars">${pillars}</div></div></section><section class="section paper"><div class="wrap"><div class="global-readiness"><div><p class="kicker">GLOBAL SUPPLY-CHAIN READINESS</p><h2>American capacity.<br><span class="light">Global opportunity.</span></h2></div><div><p>A clear domestic framework can help American farms and manufacturers build the consistency, traceability and market confidence needed to participate in global supply chains.</p><p class="source-note">This is a policy rationale, not a promise of export access or commercial results.</p></div></div><div class="button-row spaced"><a class="btn lime" href="#/plan-dont-ban">Plan. Don’t Ban. ↗</a>${request()}</div></div></section>`;
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
      ['Hemp-Composite Flying Disc', 'assets/shop/hemp-composite-disc.jpg', 'A natural-tone flying disc featuring the GOH mark. Contact the team for current material specifications and availability.']
    ];
    grid.insertAdjacentHTML('beforeend', products.map(([title, image, description]) => shopCardPublic(title, image, description, title)).join(''));
    const lead = template.content.querySelector('.shop-lead .intro');
    if (lead) lead.textContent = 'A focused collection in black, cream, natural canvas, indigo and hemp-composite options. Contact the team for current specifications and availability.';
    grid.insertAdjacentHTML('afterend', '<p class="availability-note">Contact the campaign team for current materials, sizes, pricing and fulfillment details.</p>');
    return template.innerHTML;
  }

  routes['/'] = newHome;
  routes['/learn'] = learn;
  routes['/why-hemp'] = learn;
  routes['/learn/appendix'] = industryAppendix;
  routes['/industry-outlook'] = outlook;
  routes['/supporters'] = directory;
  routes['/plan-dont-ban'] = planDontBan;
  routes['/take-action'] = planDontBan;
  routes['/donate'] = donate;
  routes['/framework'] = frameworkStaging;
  routes['/media'] = mediaStaging;
  routes['/shop'] = shopStaging;
  C.sectors.forEach(s => { routes[`/learn/${s.id}`] = () => topic(s); });
  chapterData.forEach(chapter => {
    const renderChapter = () => chapterPage(chapter);
    const canonical = chapter.route;
    routes[canonical] = renderChapter;
    routes[canonical.replace(/\/$/, '')] = renderChapter;
    routes[`/learn/${chapter.slug}`] = renderChapter;
  });

  function setLearnNavigationOpen(open, {focusToggle = false} = {}) {
    const learnNavigation = document.querySelector('.nav-learn');
    const toggle = learnNavigation?.querySelector('.nav-learn-toggle');
    const menu = learnNavigation?.querySelector('.nav-learn-menu');
    if (!learnNavigation || !toggle || !menu) return;
    learnNavigation.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', `${open ? 'Hide' : 'Show'} Learn chapters`);
    menu.hidden = !open;
    if (focusToggle) toggle.focus();
  }

  function syncMainNavigationToggleLabel() {
    const toggle = document.querySelector('.menu-toggle');
    if (!toggle) return;
    toggle.setAttribute('aria-label', toggle.getAttribute('aria-expanded') === 'true' ? 'Close navigation' : 'Open navigation');
  }

  function updateNavigation() {
    const nav = document.querySelector('#site-nav');
    if (!nav) return;
    const why = [...nav.querySelectorAll('a')].find(a => a.hash === '#/why-hemp');
    if (why && !nav.querySelector('.nav-learn')) {
      const learnNavigation = document.createElement('div');
      learnNavigation.className = 'nav-learn';
      learnNavigation.innerHTML = `<a class="nav-learn-link" data-nav-learn href="#/learn">Learn</a><button class="nav-learn-toggle" type="button" aria-expanded="false" aria-controls="learn-chapter-menu" aria-label="Show Learn chapters"><span aria-hidden="true"></span></button><div class="nav-learn-menu" id="learn-chapter-menu" hidden><p class="nav-learn-heading">Explore by chapter</p><div class="nav-learn-chapters">${chapterData.map((chapter, index) => `<a href="${chapterHref(chapter)}" data-nav-chapter="${esc(chapter.route)}"><span>${String(index + 1).padStart(2, '0')}</span><strong>${esc(chapter.title)}</strong></a>`).join('')}</div><a class="nav-learn-overview" href="#/learn">Chapter index <span aria-hidden="true">↗</span></a></div>`;
      why.replaceWith(learnNavigation);
      learnNavigation.addEventListener('focusout', () => {
        requestAnimationFrame(() => {
          if (!learnNavigation.contains(document.activeElement)) setLearnNavigationOpen(false);
        });
      });
    }
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
    const footerGrid = document.querySelector('.site-footer .footer-grid');
    if (footerGrid && !footerGrid.querySelector('.footer-appendix')) {
      const appendix = `<div class="footer-appendix"><h3>Industry Appendix</h3><a href="#/learn/appendix" data-route-target="hemp-industry-terms">Hemp industry terms</a><a href="#/learn/appendix" data-route-target="known-application-areas">Known application areas</a></div>`;
      const exploreColumn = [...footerGrid.querySelectorAll(':scope > div')].find(column => column.querySelector('h3')?.textContent.trim() === 'Explore');
      exploreColumn?.insertAdjacentHTML('afterend', appendix);
    }
    const footerBrand = document.querySelector('.site-footer .footer-grid > div:first-child');
    if (footerBrand && !footerBrand.querySelector('.social-links')) {
      footerBrand.insertAdjacentHTML('beforeend', `<p class="footer-social-heading">Follow the Goodness</p>${socialLinks('footer-social')}`);
    }
    const notice = document.querySelector('#presentation-notice');
    if (notice) {
      notice.hidden = !isStagingReview;
      notice.className = 'staging-status';
      notice.textContent = isStagingReview ? 'Staging review · no forms, payments, or advocacy messages are submitted here' : '';
    }
  }

  const previousBind = bindView;
  bindView = function bindStagingView() {
    previousBind();
    document.querySelectorAll('a[href="#/donate"]').forEach(link => link.setAttribute('data-open-donate', ''));
    document.querySelectorAll(`a[href="${C.actionURL}"]`).forEach(link => link.setAttribute('data-open-action', ''));
    document.querySelectorAll('#candidate-search,#candidate-tag').forEach(control => control.addEventListener('input', () => {
      const search = document.querySelector('#candidate-search')?.value.toLowerCase() || '';
      const tag = document.querySelector('#candidate-tag')?.value || '';
      document.querySelectorAll('#candidate-wall [data-candidate]').forEach(card => {
        const record = C.candidates.find(item => item.id === card.dataset.candidate);
        card.hidden = !(record.displayName.toLowerCase().includes(search) && (!tag || record.tags.includes(tag)));
      });
      const count = document.querySelectorAll('#candidate-wall [data-candidate]:not([hidden])').length;
      const result = document.querySelector('#candidate-result');
      if (result) result.textContent = `${count} ${count === 1 ? 'organization' : 'organizations'} shown.`;
    }));
  };

  document.addEventListener('click', event => {
    const learnNavigation = document.querySelector('.nav-learn');
    if (learnNavigation && !learnNavigation.contains(event.target)) setLearnNavigationOpen(false);
    const target = event.target.closest('a,button');
    if (!target) return;
    if (target.matches('.menu-toggle')) requestAnimationFrame(syncMainNavigationToggleLabel);
    if (target.matches('.nav-learn-toggle')) {
      event.preventDefault();
      event.stopPropagation();
      setLearnNavigationOpen(!learnNavigation?.classList.contains('is-open'));
      return;
    }
    if (target.matches('.nav-learn-link') || target.closest('.nav-learn-menu')) setLearnNavigationOpen(false);
    if (target.hasAttribute('data-chapter-video')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const id = target.dataset.chapterVideo;
      if (!chapterVideoIds.has(id)) return;
      window.GOH_VIDEO?.pause();
      modal(`<p class="kicker">WATCH THE GOODNESS OF HEMP</p><iframe class="media-frame" src="https://www.youtube-nocookie.com/embed/${esc(id)}?autoplay=1" title="Goodness of Hemp educational film" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe><p><a href="https://www.youtube.com/watch?v=${esc(id)}" target="_blank" rel="noopener noreferrer">Open directly in YouTube ↗</a></p><p class="micro">Video loads only after your click. Playback depends on YouTube availability and browser settings.</p>`);
      return;
    }
    if (target.hasAttribute('data-scroll-target')) {
      event.preventDefault();
      document.getElementById(target.dataset.scrollTarget)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (target.hasAttribute('data-route-target')) {
      pendingRouteTarget = target.dataset.routeTarget;
      if (target.hash === location.hash) {
        event.preventDefault();
        document.getElementById(pendingRouteTarget)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        pendingRouteTarget = null;
      }
    }
    if (target.hasAttribute('data-open-donate')) {
      event.preventDefault();
      modal(donationModal());
    }
    if (target.hasAttribute('data-open-action')) {
      event.preventDefault();
      document.querySelector('#site-nav')?.classList.remove('open');
      document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
      syncMainNavigationToggleLabel();
      modal(advocacyModal());
    }
    if (target.hasAttribute('data-donation-amount')) {
      event.preventDefault();
      document.querySelectorAll('[data-donation-amount]').forEach(button => button.setAttribute('aria-pressed', String(button === target)));
    }
  }, true);

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (document.querySelector('.nav-learn.is-open')) {
      setLearnNavigationOpen(false, {focusToggle: true});
      return;
    }
    const nav = document.querySelector('#site-nav');
    if (!nav?.classList.contains('open')) return;
    nav.classList.remove('open');
    const toggle = document.querySelector('.menu-toggle');
    toggle?.setAttribute('aria-expanded', 'false');
    syncMainNavigationToggleLabel();
    toggle?.focus();
  });

  document.addEventListener('visibilitychange', () => {
    const dialog = document.querySelector('#dialog');
    if (document.hidden && dialog?.open && dialog.querySelector('.media-frame')) closeDialog();
  });

  const routeTitles = {
    '/learn': 'Learn', '/why-hemp': 'Learn', '/learn/appendix': 'Industry appendix', '/industry-outlook': 'Industry outlook', '/supporters': 'Who we are',
    '/plan-dont-ban': 'Plan. Don’t Ban.', '/take-action': 'Plan. Don’t Ban.', '/donate': 'Donate'
  };
  function updateRouteTitle() {
    const path = location.hash.slice(1) || '/';
    const sector = C.sectors.find(item => path === `/learn/${item.id}`);
    const chapter = chapterData.find(item => [item.route, item.route.replace(/\/$/, ''), `/learn/${item.slug}`].includes(path));
    if (routeTitles[path] || sector || chapter) document.title = `${chapter?.title || sector?.title || routeTitles[path]} — The Goodness of Hemp`;
    const learnNavigation = document.querySelector('.nav-learn');
    const learnLink = learnNavigation?.querySelector('[data-nav-learn]');
    const chapterLinks = [...(learnNavigation?.querySelectorAll('[data-nav-chapter]') || [])];
    learnLink?.removeAttribute('aria-current');
    chapterLinks.forEach(link => link.removeAttribute('aria-current'));
    const isLearnRoute = path === '/learn' || path === '/why-hemp' || path.startsWith('/learn/');
    learnNavigation?.classList.toggle('is-current', isLearnRoute);
    if (chapter) {
      chapterLinks.find(link => link.dataset.navChapter === chapter.route)?.setAttribute('aria-current', 'page');
    } else if (isLearnRoute) {
      learnLink?.setAttribute('aria-current', 'page');
    }
  }

  function focusRouteHeading() {
    const heading = document.querySelector('main h1');
    if (!heading) return;
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }

  window.addEventListener('hashchange', () => {
    setLearnNavigationOpen(false);
    syncMainNavigationToggleLabel();
    updateRouteTitle();
    requestAnimationFrame(focusRouteHeading);
    if (pendingRouteTarget) {
      const target = pendingRouteTarget;
      pendingRouteTarget = null;
      requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  });

  updateNavigation();
  render(false);
  updateRouteTitle();
})();
