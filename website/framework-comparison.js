(() => {
  'use strict';
  const root = document.querySelector('#comparison-root');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const mark = value => value === 'marked' ? '<span class="mark" aria-label="Marked">✓</span>' : '<span class="blank" aria-label="Unmarked">—</span>';

  function desktop(data) {
    return `<div class="comparison-table-wrap"><table><thead><tr><th scope="col">Provision in the dated source</th>${data.columns.map(column => `<th scope="col">${esc(column.label)}${column.billIdentifierAsPrinted ? `<br>${esc(column.billIdentifierAsPrinted)}` : ''}</th>`).join('')}</tr></thead><tbody>${data.rows.map(row => `<tr><th scope="row">${esc(row.labelAsPrinted)}</th>${data.columns.map(column => `<td>${mark(row.cells[column.id])}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  function mobile(data, selected = data.columns[1].id) {
    const competitor = data.columns.find(column => column.id === selected) || data.columns[1];
    return `<div class="mobile"><label>Compare GOH with<select id="comparison-select">${data.columns.slice(1).map(column => `<option value="${esc(column.id)}"${column.id === competitor.id ? ' selected' : ''}>${esc(column.label)}</option>`).join('')}</select></label><div id="mobile-table"><table><thead><tr><th>Provision</th><th>GOH</th><th>${esc(competitor.label)}</th></tr></thead><tbody>${data.rows.map(row => `<tr><th scope="row">${esc(row.labelAsPrinted)}</th><td>${mark(row.cells.goh)}</td><td>${mark(row.cells[competitor.id])}</td></tr>`).join('')}</tbody></table></div></div>`;
  }

  fetch('data/comparison.reference.json')
    .then(response => response.ok ? response.json() : Promise.reject(new Error('Unavailable')))
    .then(data => {
      root.innerHTML = `<p class="kicker">DATED REVIEW DATA · ${esc(data.sourceDate)}</p><h2>${esc(data.title)}</h2><p>${esc(data.note)}</p>${desktop(data)}${mobile(data)}<p class="note"><strong>Legend:</strong> ✓ = marked in the supplied comparison. — = unmarked; an unmarked cell is not proof of absence or opposition. Source attribution: ${esc(data.sourceAttribution)}.</p>`;
      document.querySelector('#comparison-select')?.addEventListener('change', event => {
        const competitor = data.columns.find(column => column.id === event.target.value);
        if (!competitor) return;
        document.querySelector('#mobile-table').innerHTML = `<table><thead><tr><th>Provision</th><th>GOH</th><th>${esc(competitor.label)}</th></tr></thead><tbody>${data.rows.map(row => `<tr><th scope="row">${esc(row.labelAsPrinted)}</th><td>${mark(row.cells.goh)}</td><td>${mark(row.cells[competitor.id])}</td></tr>`).join('')}</tbody></table>`;
      });
    })
    .catch(() => { root.innerHTML = '<p class="status">The comparison dataset is unavailable in this review build.</p>'; });
})();
