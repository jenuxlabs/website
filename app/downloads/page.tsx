import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads — Jenux Labs',
  description: 'Official downloads for Jenux Labs software.',
};

const phoneDrop = [
  ['⊞', 'Windows', 'PhoneDrop 1.0.8 installer', '/phonedrop/PhoneDrop-Setup-1.0.8.exe', 'Download for Windows'],
  ['⌘', 'macOS', 'PhoneDrop 1.0.3 disk image', '/files/PhoneDrop-1.0.3.dmg', 'Download for macOS'],
  ['◆', 'Android', 'PhoneDrop 1.0.5 closed test on Google Play', 'https://play.google.com/apps/testing/labs.jenux.phonedrop', 'Open Google Play'],
];

const phoneNAS = [
  ['◆', 'Android', 'PhoneNAS 1.0.2 signed APK', '/files/PhoneNAS-1.0.2-Android.apk', 'Download Android APK'],
  ['⌘', 'macOS', 'PhoneNAS Helper 1.3 notarized disk image', '/files/PhoneNAS-Helper-1.3-macOS.dmg', 'Download Mac helper'],
];

export default function Downloads() {
  return <>
    <section className="page-hero"><p className="eyebrow">DOWNLOADS</p><h1>Get the right tool.</h1><p className="lede">Official Jenux Labs downloads, all in one place.</p><p className="download-safety-link">Want to know how the apps handle your data before downloading? <a href="/privacy/">Read privacy &amp; safety →</a></p></section>
    <section className="section download-section">
      <header><p className="eyebrow">PHONEDROP</p><h2>Direct local file transfer.</h2><p>Choose the version for the device you use.</p></header>
      <div className="download-grid">{phoneDrop.map(([icon, name, detail, href, label]) => <article key={name}><span className="os-icon">{icon}</span><div><h3>{name}</h3><p>{detail}</p></div><a className="button" href={href}>{label} <span>↓</span></a></article>)}</div>
    </section>
    <section className="section download-section">
      <header><p className="eyebrow">PHONENAS</p><h2>Android server and optional Mac helper.</h2><p>Install PhoneNAS on Android. The helper discovers available servers, makes them visible in Finder and relays SMB locally; direct SMB remains available without it.</p></header>
      <div className="download-grid">{phoneNAS.map(([icon, name, detail, href, label]) => <article key={name}><span className="os-icon">{icon}</span><div><h3>{name}</h3><p>{detail}</p></div><a className="button" href={href} download>{label} <span>↓</span></a></article>)}</div>
      <p className="quiet">The Mac helper is Developer ID signed and notarized by Apple. It has no telemetry or cloud connection and does not receive your files.</p>
    </section>
  </>;
}
