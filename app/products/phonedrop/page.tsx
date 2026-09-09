import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'PhoneDrop', description: 'Fast, private local file transfer across Android, macOS and Windows.' };
const downloads = [
  ['⊞', 'Windows', '1.0.8 installer', '/phonedrop/PhoneDrop-Setup-1.0.8.exe'],
  ['⌘', 'macOS', '1.0.3 disk image', '/downloads/PhoneDrop-1.0.3.dmg'],
  ['◆', 'Android', '1.0.4 signed APK', '/downloads/PhoneDrop-1.0.4-Android.apk'],
];
export default function PhoneDrop() { return <>
  <section className="product-hero phonedrop-hero"><div><span className="status stable">Stable · Android 1.0.4</span><div className="product-title"><img src="/phonedrop/logo.png" alt="" /><span>PhoneDrop</span></div><h1>Drop files.<br />Not your privacy.</h1><p className="lede">Send directly between Android, macOS and Windows on the same local network. No account and no cloud relay.</p><a className="button" href="#download">Choose your download</a></div><figure className="phone-shot"><img src="/phonedrop/speed.jpg" alt="PhoneDrop transferring a file at 64.5 MB/s" /><figcaption><i /> Real local transfer · 64.5 MB/s</figcaption></figure></section>
  <section className="quick-flow"><div><b>1</b><strong>Choose files</strong><span>In PhoneDrop or Android Share.</span></div><div><b>2</b><strong>Pick a device</strong><span>Pair once, then find it nearby.</span></div><div><b>3</b><strong>Drop</strong><span>See live speed and progress.</span></div></section>
  <section className="compact-section" id="download"><header><p className="eyebrow">DOWNLOAD</p><h2>Ready when your devices are.</h2></header><div className="download-row">{downloads.map(([icon, name, detail, href]) => <a href={href} download key={name}><span className="pd-os-icon">{icon}</span><span><strong>{name}</strong><small>{detail}</small></span><b>↓</b></a>)}</div><p className="quiet">Use PhoneDrop on networks and devices you trust. Android Lite includes ads and five full-speed files daily, then continues at up to 20 MB/s; Pro is ad-free and unrestricted.</p></section>
  <section className="short-dark"><div><p className="eyebrow">LOCAL-FIRST</p><h2>Your files take the short route.</h2></div><p>PhoneDrop transfers on your local network. Jenux Labs does not receive or store the contents of your files. <a href="/privacy/">Privacy details →</a></p></section>
  <section className="v2-peek"><span>2.0 PEEK</span><h2>Beyond one Wi‑Fi.</h2><p>Remote drops, resumable queues and richer simultaneous transfers are directions in development—not features promised in 1.0.4.</p></section>
  </>; }
