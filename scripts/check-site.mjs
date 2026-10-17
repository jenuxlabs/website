import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = path.resolve('dist/client');
const walk = dir => fs.readdirSync(dir,{withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(path.join(dir,e.name)) : [path.join(dir,e.name)]);
const html = walk(root).filter(p => p.endsWith('.html'));
const redirects = fs.readFileSync(path.join(root,'_redirects'),'utf8').trim().split('\n').map(l => l.split(/\s+/)[0]);
const resolve = input => { const pathname = input.replace(/\/$/, '') || '/'; return [path.join(root,pathname),path.join(root,pathname + '.html'),path.join(root,pathname,'index.html')].find(p => fs.existsSync(p) && fs.statSync(p).isFile()); };
let links=0, fragments=0;
for(const file of html){
  const source=fs.readFileSync(file,'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');
  assert.equal((source.match(/<h1\b/g)||[]).length,1,'Expected one h1: '+file);
  assert(!/PhoneDesk|No fake roadmap|MindGallery 0\.1\.1/.test(source),'Outdated copy: '+file);
  assert(!/href="[^"]+\.apk"/.test(source),'Android APK link: '+file);
  assert(/<title>[^<]+<\/title>/.test(source),'Missing title: '+file);
  const route='/' + path.relative(root,file).replace(/index\.html$/,'').replace(/\.html$/,'');
  for(const match of source.matchAll(/(?:href|src)="([^"]+)"/g)){
    const raw=match[1].replace(/&amp;/g,'&');
    if(/^(mailto:|https?:|data:)/.test(raw)) continue;
    const u=new URL(raw,'https://jenuxlabs.com'+route);
    if(redirects.includes(u.pathname)) continue;
    const target=resolve(decodeURIComponent(u.pathname));
    assert(target,'Broken local URL '+raw+' on '+route); links++;
    if(u.hash && target.endsWith('.html')){
      const text=fs.readFileSync(target,'utf8');
      assert(text.includes('id="'+decodeURIComponent(u.hash.slice(1))+'"'),'Missing fragment '+raw+' on '+route); fragments++;
    }
  }
}
for(const f of walk(root)) assert(fs.statSync(f).size < 25*1024*1024,'Pages asset exceeds 25 MiB: '+f);
for(const p of ['/','/products','/products/phonedrop','/products/phonenas','/products/mindgallery','/products/pcam','/downloads','/blog','/blog/october-update','/privacy','/support']) assert(resolve(p),'Missing route: '+p);
console.log(JSON.stringify({htmlPages:html.length,localLinks:links,fragments,assetLimit:'PASS',androidInstallRoutes:'Google Play only'},null,2));
