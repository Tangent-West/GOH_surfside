function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function link(text, url, download = false) {
  const node = element('a', text);
  node.href = url;
  if (download) node.download = '';
  return node;
}

function dropdown(label, className) {
  const node = element('details', '', className);
  node.append(element('summary', label));
  return node;
}

function mediaGallery(files, options = {}) {
  const grid = element('div', '', 'media');
  files.forEach((file, index) => {
    const item = element('figure');
    const number = file.match(/(?:Card_|-)([0-9]{2})(?:_|\.png$)/)?.[1] ||
      String(index + 1).padStart(2, '0');
    const label = files.length > 1 ? `Card ${number}` : 'Asset';
    const caption = element('figcaption');
    const alt = options.alts?.[index] || (files.length === 1 && options.alt) ||
      `${options.title} · ${label}`;
    if (file.endsWith('.pdf')) {
      const image = element('img');
      image.alt = `${options.title} · LinkedIn document cover`;
      image.loading = 'lazy';
      image.src = file.endsWith('-LinkedIn.pdf')
        ? file.replace('-LinkedIn.pdf', '-01.png')
        : file.replace('.pdf', '-cover.png');
      item.append(image);
      caption.append(link('Open full LinkedIn PDF', file), ' · ');
    } else if (file.endsWith('.mp4')) {
      const video = element('video');
      video.src = file;
      video.controls = true;
      video.playsInline = true;
      video.preload = options.cover ? 'none' : 'metadata';
      if (options.cover) video.poster = options.cover;
      video.setAttribute('aria-label', alt);
      item.append(video);
    } else {
      const image = element('img');
      image.src = file;
      image.alt = alt;
      image.loading = 'lazy';
      item.append(image);
    }
    caption.append(link(`Download ${label.toLowerCase()}`, file, true));
    item.append(caption);
    grid.append(item);
  });
  return grid;
}

function renderPaid() {
  const list = document.querySelector('#paid-content');
  for (const [index, ad] of reviewContent.paid.entries()) {
    if (index === 0 || index === 3) {
      list.append(element('h3', index === 0 ? 'Proposed first wave' : 'Alternates'));
    }
    const card = dropdown('', 'card');
    card.id = ad.id;
    card.name = 'paid-concepts';
    card.open = index === 0;
    const choice = reviewStatus.paid[ad.id];
    const summary = card.querySelector('summary');
    summary.append(
      element('span', `${ad.id} · ${ad.title}`, 'row-title'),
      element('span', `${ad.role} · ${ad.placements.length} placements${choice?.selected ? ' · Team selected' : ''}`, 'row-meta')
    );
    summary.append(element('span', 'Review', 'row-action'));
    const placements = element('div', '', 'placements');
    placements.append(element('p', choice?.selected ? 'Team decision · Selected' : 'Team decision · Pending', 'status'));
    for (const [placementIndex, placement] of ad.placements.entries()) {
      const selected = choice?.placements.includes(placement.name);
      const label = [placement.name, placement.dimensions, placement.handoff,
        selected ? 'Team selected' : ''].filter(Boolean).join(' · ');
      const detail = dropdown(label, 'placement');
      detail.open = placementIndex === 0 || selected;
      const body = element('div');
      body.append(
        mediaGallery(placement.media, { title: ad.title }),
        element('p', placement.copy, 'caption'),
        element('p', `Headline · ${placement.headline}`),
        element('p', `Creative CTA · ${placement.cta}`)
      );
      if (placement.audio) body.append(element('p', `Audio · ${placement.audio}`));
      const destination = element('p');
      destination.append(link('Open tracked destination', placement.url));
      body.append(destination);
      detail.append(body);
      placements.append(detail);
    }
    card.append(placements);
    list.append(card);
  }
}

const channels = {
  instagram: 'Instagram', facebook: 'Facebook', twitter: 'X',
  linkedin: 'LinkedIn', tiktok: 'TikTok', youtube: 'YouTube'
};

function renderVariant(variant, title) {
  const body = element('div');
  body.append(element('p', variant.status, 'status'));
  if (variant.title) body.append(element('p', variant.title));
  if (variant.media.length) body.append(mediaGallery(variant.media, { ...variant, title }));
  else body.append(element('p', 'Original media pending.'));
  if (variant.cover) body.append(link('Download video cover', variant.cover, true));
  if (variant.captionLabel) body.append(element('p', variant.captionLabel, 'eyebrow'));
  if (variant.caption) body.append(element('p', variant.caption, 'caption'));
  if (variant.publication) body.append(element('p', variant.publication));
  if (variant.link) body.append(link('Native link sticker destination', variant.link));
  return body;
}

function renderOrganic() {
  const list = document.querySelector('#organic-content');
  const formatDate = new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC'
  });
  let currentDate;
  for (const post of reviewContent.organic) {
    if (post.date !== currentDate) {
      currentDate = post.date;
      const heading = element('h3', '', 'calendar-date');
      const date = element('time', formatDate.format(new Date(post.date)));
      date.dateTime = post.date;
      heading.append(date);
      list.append(heading);
    }
    const detail = dropdown('', 'post');
    const summary = detail.querySelector('summary');
    const channelNames = [...new Set(post.variants.map(v => channels[v.channel] || v.channel))];
    summary.append(
      element('span', post.title, 'row-title'),
      element('span', ['Organic / Non-Paid', channelNames.join(', '),
        reviewStatus.organic[post.id] || 'Pending review'].join(' · '), 'row-meta')
    );
    detail.addEventListener('toggle', () => {
      if (!detail.open || detail.querySelector('.post-body')) return;
      const body = element('div', '', 'post-body');
      body.append(element('p', post.id, 'eyebrow'));
      for (const variant of post.variants) {
        const label = `${channels[variant.channel] || variant.channel} · ${variant.time || 'Time pending'} · ${variant.format}`;
        const channel = dropdown(label, 'channel');
        channel.open = variant === post.variants[0];
        channel.append(renderVariant(variant, post.title));
        body.append(channel);
      }
      detail.append(body);
    });
    list.append(detail);
  }
}

renderPaid();
renderOrganic();

const sectionLinks = [...document.querySelectorAll('nav a')];

function syncSectionNavigation() {
  const target = document.getElementById(location.hash.slice(1));
  const section = target?.closest('.section');
  if (section) section.open = true;
  if (target?.classList.contains('card')) target.open = true;
  const active = sectionLinks.find(link => link.hash === `#${section?.id}`) || sectionLinks[0];
  for (const link of sectionLinks) {
    if (link === active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

for (const link of sectionLinks) {
  link.addEventListener('click', () => {
    const section = document.querySelector(link.hash);
    section.open = true;
    section.querySelector('summary').focus({ preventScroll: true });
  });
}

window.addEventListener('hashchange', syncSectionNavigation);
syncSectionNavigation();
