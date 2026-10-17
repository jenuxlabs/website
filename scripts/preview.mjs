import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve('dist/client');
const redirects = fs.readFileSync(path.join(root, '_redirects'), 'utf8').trim().split('\n').map(l => l.split(/\s+/));
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css', '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.woff2':'font/woff2', '.xml':'application/xml', '.txt':'text/plain' };
http.createServer((req,res) => {
  let pathname; try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { res.writeHead(400).end(); return; }
  const redirect = redirects.find(r => r[0] === pathname);
  if (redirect) { res.writeHead(Number(redirect[2]), { Location: redirect[1] }).end(); return; }
  if (pathname.length > 1 && pathname.endsWith('/')) { res.writeHead(301, { Location: pathname.slice(0,-1) }).end(); return; }
  const base = path.resolve(root, '.' + pathname);
  if (!base.startsWith(root + path.sep) && base !== root) { res.writeHead(403).end(); return; }
  const file = [base, base + '.html', path.join(base,'index.html')].find(p => fs.existsSync(p) && fs.statSync(p).isFile());
  const actual = file || path.join(root,'404.html');
  res.writeHead(file ? 200 : 404, { 'Content-Type': mime[path.extname(actual)] || 'application/octet-stream', 'Cache-Control':'no-store' });
  if (req.method === 'HEAD') { res.end(); return; }
  fs.createReadStream(actual).pipe(res);
}).listen(4173,'127.0.0.1',() => console.log('Static export preview: http://127.0.0.1:4173'));
