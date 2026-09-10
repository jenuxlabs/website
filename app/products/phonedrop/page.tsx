import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'PhoneDrop', description: 'Fast, private local file transfer across Android, macOS and Windows.' };

const downloads = [
  ['⊞', 'Windows', '1.0.8 installer', '/phonedrop/PhoneDrop-Setup-1.0.8.exe', 'Download for Windows'],
  ['⌘', 'macOS', '1.0.3 disk image', '/downloads/PhoneDrop-1.0.3.dmg', 'Download for macOS'],
  ['◆', 'Android', '1.0.5 closed test', 'https://play.google.com/apps/testing/labs.jenux.phonedrop', 'Open Google Play'],
];
const features = [
  ['01', 'Pick from anywhere', 'Choose files inside PhoneDrop or use Android Share from Gallery, Files and other apps.'],
  ['02', 'Pair once', 'PhoneDrop remembers trusted devices without replacing your existing pairings.'],
  ['03', 'See who is ready', 'Nearby discovery shows online devices and clear pairing controls.'],
  ['04', 'Stay in control', 'Live progress, measured transfer speed and a real Stop button keep every drop understandable.'],
];

export default function PhoneDrop() {
  return <>
    <section className="product-spotlight drop-spotlight"><div><span className="status">Available · Android 1.0.5</span><div className="product-lockup"><img src="/phonedrop/logo.png" alt="" /><span>PhoneDrop</span></div><h1>Drop files.<br />Not your privacy.</h1><p className="lede">Send directly between Android, macOS and Windows on the same local network. Transfers are encrypted in transit. No account and no cloud relay.</p><div className="actions download-actions"><a className="button" href="/phonedrop/PhoneDrop-Setup-1.0.8.exe" download>Windows ↓</a><a className="button" href="/downloads/PhoneDrop-1.0.3.dmg" download>macOS ↓</a><a className="button" href="https://play.google.com/apps/testing/labs.jenux.phonedrop">Google Play ↗</a></div><a className="product-detail-link" href="#screens">See the app ↓</a><div className="proof-row"><span><strong>3 platforms</strong>One familiar flow</span><span><strong>Direct</strong>Device to device</span><span><strong>Encrypted</strong>In transit</span></div></div><div className="phone-stage"><span className="float-tag online">● Paired · Online</span><span className="float-tag speed">Live speed ↗</span><figure><img src="/phonedrop/speed.jpg" alt="PhoneDrop transferring a file" /></figure></div></section>
    <section className="signal-strip"><span>PHONE ↔ PHONE</span><span>PHONE ↔ DESKTOP</span><span>MULTI-FILE</span><span>NO CLOUD RELAY</span></section>
    <section className="section"><header><p className="eyebrow">SIMPLE ON PURPOSE</p><h2>The shortest path between your devices.</h2></header><div className="feature-grid">{features.map(([n,t,d]) => <article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="section app-screens" id="screens"><header><p className="eyebrow">THE REAL APP</p><h2>Clear at every step.</h2><p>Nearby devices, settings and transfer history stay close without cluttering the main screen.</p></header><div className="screen-gallery"><figure><img src="/phonedrop/devices.jpg" alt="PhoneDrop nearby and paired devices" /><figcaption>Nearby devices and live status</figcaption></figure><figure><img src="/phonedrop/settings.jpg" alt="PhoneDrop settings" /><figcaption>Visibility and practical controls</figcaption></figure><figure><img src="/phonedrop/activity.jpg" alt="PhoneDrop recent activity" /><figcaption>Recent activity and statistics</figcaption></figure></div></section>
    <section className="privacy-band"><div><p className="eyebrow">LOCAL-FIRST BY DESIGN</p><h2>Your files take the local route.</h2></div><div><p>PhoneDrop transfers directly between devices on your local network. Jenux Labs does not receive or store the contents of your transfers.</p><ul><li>No PhoneDrop account</li><li>No cloud storage required</li><li>Trust stays on your devices</li><li>Files land in your PhoneDrop folder</li></ul><a href="/privacy/">Read the privacy details →</a></div></section>
    <section className="section download-section" id="download"><header><p className="eyebrow">DOWNLOAD</p><h2>Ready when your devices are.</h2></header><div className="download-grid">{downloads.map(([icon,name,detail,href,label]) => <article key={name}><span className="os-icon">{icon}</span><div><h3>{name}</h3><p>{detail}</p></div><a className="button" href={href}>{label} <span>↓</span></a></article>)}</div><p className="quiet">Use PhoneDrop on networks and devices you trust. The Android app offers an optional Pro purchase; availability depends on its current Google Play testing stage.</p></section>
  </>;
}
