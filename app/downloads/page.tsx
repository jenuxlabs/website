import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads — Jenux Labs',
  description: 'Official downloads for Jenux Labs software.',
};

const phoneDrop = [
  ['⊞', 'Windows', 'PhoneDrop 1.0.8 installer', '/phonedrop/PhoneDrop-Setup-1.0.8.exe', 'Download for Windows'],
  ['⌘', 'macOS', 'PhoneDrop 1.0.3 disk image', '/downloads/PhoneDrop-1.0.3.dmg', 'Download for macOS'],
  ['◆', 'Android', 'PhoneDrop 1.0.5 closed test on Google Play', 'https://play.google.com/apps/testing/labs.jenux.phonedrop', 'Open Google Play'],
];

export default function Downloads() {
  return <>
    <section className="page-hero"><p className="eyebrow">DOWNLOADS</p><h1>Get the right tool.</h1><p className="lede">Official Jenux Labs downloads, all in one place.</p><p className="download-safety-link">Want to know how the apps handle your data before downloading? <a href="/privacy/">Read privacy &amp; safety →</a></p></section>
    <section className="section download-section">
      <header><p className="eyebrow">PHONEDROP</p><h2>Direct local file transfer.</h2><p>Choose the version for the device you use.</p></header>
      <div className="download-grid">{phoneDrop.map(([icon, name, detail, href, label]) => <article key={name}><span className="os-icon">{icon}</span><div><h3>{name}</h3><p>{detail}</p></div><a className="button" href={href}>{label} <span>↓</span></a></article>)}</div>
    </section>
    <section className="section download-section">
      <header><p className="eyebrow">PHONENAS</p><h2>Optional Mac helper.</h2><p>PhoneNAS works through normal SMB directly. The helper simply prepares and opens the local SMB address in Finder.</p></header>
      <div className="download-grid"><article><span className="os-icon">⌘</span><div><h3>macOS helper</h3><p>PhoneNAS Helper 1.0 disk image</p></div><a className="button" href="/downloads/PhoneNAS-Helper-1.0-macOS.dmg" download>Download Mac helper <span>↓</span></a></article></div>
      <p className="quiet">PhoneNAS is currently in closed testing. The helper is optional, has no telemetry or cloud connection, and is ad-hoc signed rather than notarized.</p>
    </section>
  </>;
}
