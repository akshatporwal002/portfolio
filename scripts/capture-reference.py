"""Save public HTML/CSS/JS for a bounded, read-only design reference audit."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urljoin, urlparse
import json

BASE = 'https://mildsugardesign.jp/'
OUT = Path('design-reference/mildsugar')
OUT.mkdir(parents=True, exist_ok=True)
manifest = []

class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.pages, self.assets = set(), set()
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'a' and a.get('href'): self.pages.add(a['href'])
        if tag == 'script' and a.get('src'): self.assets.add(a['src'])
        if tag == 'link' and a.get('rel') == 'stylesheet': self.assets.add(a['href'])

def save(url, kind):
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urlopen(req, timeout=30) as response: data = response.read()
    path = urlparse(url).path.strip('/')
    if kind == 'html': path = (path or 'home') + '/index.html'
    target = OUT / path
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(data)
    manifest.append({'url': url, 'kind': kind, 'path': str(target), 'bytes': len(data)})
    return data.decode('utf-8')

pages = [BASE, urljoin(BASE, 'cases/'), urljoin(BASE, 'cases/case02/')]
visited, assets = set(), set()
while pages and len(visited) < 12:
    url = pages.pop(0)
    if url in visited: continue
    visited.add(url)
    try:
        parser = Links()
        parser.feed(save(url, 'html'))
        for link in parser.pages:
            candidate = urljoin(url, link).split('#')[0]
            if urlparse(candidate).netloc == urlparse(BASE).netloc and '/cases/' in candidate and candidate not in visited:
                pages.append(candidate)
        for asset in parser.assets:
            candidate = urljoin(url, asset)
            if urlparse(candidate).netloc == urlparse(BASE).netloc: assets.add(candidate)
    except Exception as error: manifest.append({'url': url, 'error': str(error)})
for url in sorted(assets):
    try: save(url, 'css' if '.css' in url else 'js')
    except Exception as error: manifest.append({'url': url, 'error': str(error)})
(OUT / 'manifest.json').write_text(json.dumps(manifest, indent=2), encoding='utf-8')
print(json.dumps(manifest, indent=2))
