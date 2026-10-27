"""Validate the JSON catalog and refresh the gallery, CSV, and SQLite exports."""
import csv
import hashlib
import json
from pathlib import Path
import sqlite3

root = Path(__file__).resolve().parents[1]
records = json.loads((root / 'GOH_Asset_Catalog.json').read_text())
ids = [r['id'] for r in records]
assert len(ids) == len(set(ids)), 'Duplicate asset IDs'
for r in records:
    assert r['canonical'] in ids, f"Unknown canonical ID: {r['id']}"
    assert (root / 'Thumbnails' / (r['canonical'] + '.jpg')).is_file(), f"Missing thumbnail: {r['id']}"
    asset = r.get('local_asset', '')
    if asset and not asset.startswith(('https://', 'http://')):
        path = (root / asset).resolve()
        assert root in path.parents and path.is_file(), f"Missing or unsafe asset: {r['id']}"
        if r.get('sha256'):
            assert hashlib.sha256(path.read_bytes()).hexdigest() == r['sha256'], f"Checksum mismatch: {r['id']}"
html_path = root / 'GOH_Content_Bank.html'
html = html_path.read_text()
start = html.index('const data=') + len('const data=')
end = html.index(';const taxonomy=', start)
encoded = json.dumps(records, ensure_ascii=True).replace('<', '\\u003c')
taxonomy_start = end + len(';const taxonomy=')
taxonomy_end = html.index(';', taxonomy_start)
taxonomy = json.dumps(json.loads((root / 'GOH_Tag_Taxonomy.json').read_text()), ensure_ascii=True).replace('<', '\\u003c')
html_path.write_text(html[:start] + encoded + ';const taxonomy=' + taxonomy + html[taxonomy_end:])
fields = list(dict.fromkeys(k for r in records for k in r))
with (root / 'GOH_Asset_Catalog.csv').open('w', newline='', encoding='utf-8-sig') as f:
    writer = csv.DictWriter(f, fieldnames=fields)
    writer.writeheader()
    for r in records:
        writer.writerow({k: json.dumps(v, ensure_ascii=False) if isinstance(v, (list, dict)) else v for k,v in r.items()})
with sqlite3.connect(root / 'GOH_Content_Bank.sqlite') as db:
    columns = [row[1] for row in db.execute('PRAGMA table_info(assets)')]
    db.execute('DELETE FROM assets')
    db.execute('DELETE FROM asset_tags')
    for r in records:
        values = [json.dumps(r.get(k, '')) if isinstance(r.get(k), (list, dict)) else r.get(k, '') for k in columns]
        names = ','.join('"' + k + '"' for k in columns)
        db.execute(f'INSERT INTO assets ({names}) VALUES ({",".join("?" for _ in columns)})', values)
        for facet in ('content_types', 'scenes', 'search_tags'):
            for tag in set(r.get(facet, [])):
                db.execute('INSERT INTO asset_tags VALUES (?,?,?)', (r['id'], facet, tag))
print(f'Validated and refreshed {len(records)} catalog records.')
