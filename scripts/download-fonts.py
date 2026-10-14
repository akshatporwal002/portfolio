from urllib.request import Request, urlopen
from pathlib import Path
import re

out = Path('public/fonts')
out.mkdir(parents=True, exist_ok=True)
for family, name in [('Righteous', 'righteous'), ('LINE+Seed+JP:wght@400;700', 'line-seed-jp')]:
    url = 'https://fonts.googleapis.com/css2?family=' + family + '&display=swap'
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'})
    css = urlopen(req, timeout=30).read().decode()
    blocks = css.split('}')
    # Only the Latin subset is needed for this English portfolio.
    rules = []
    for index, block in enumerate(blocks):
        if '/* latin */' not in block: continue
        match = re.search(r'url\(([^)]+)\)', block)
        if not match: continue
        asset_url = match.group(1)
        suffix = '.woff2' if '.woff2' in asset_url else '.ttf'
        filename = f'{name}-{index}{suffix}'
        (out / filename).write_bytes(urlopen(asset_url, timeout=30).read())
        rules.append(block[block.index('@font-face'):].replace(asset_url, '/fonts/' + filename) + '}')
    if not rules:
        for index, asset_url in enumerate(re.findall(r'url\(([^)]+)\)', css)):
            filename = f'{name}-{index}.ttf'
            (out / filename).write_bytes(urlopen(asset_url, timeout=30).read())
            css = css.replace(asset_url, '/fonts/' + filename)
        rules = [css]
    (out / (name + '.css')).write_text('\n'.join(rules), encoding='utf-8')
    print(name, len(rules), 'font rules saved')
