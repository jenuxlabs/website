import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'Jenux Labs product downloads, including clearly labelled preview builds.',
};

const phoneDrop = [
  ['⊞', 'Windows', 'PhoneDrop 1.0.8 installer', '/phonedrop/PhoneDrop-Setup-1.0.8.exe', 'Download for Windows'],
  ['⌘', 'macOS', 'PhoneDrop 1.0.4 disk image', '/files/PhoneDrop-1.0.4.dmg', 'Download for macOS'],
  ['◆', 'Android', 'PhoneDrop 1.0.7 · closed testing', 'https://play.google.com/apps/testing/labs.jenux.phonedrop', 'Open Google Play'],
];

const phoneNAS = [
  ['◆', 'Android', 'PhoneNAS 1.0.2 signed APK', '/files/PhoneNAS-1.0.2-Android.apk', 'Download Android beta'],
  ['⌘', 'macOS', 'PhoneNAS Helper 1.3 · signed and notarized', '/files/PhoneNAS-Helper-1.3-macOS.dmg', 'Download Mac helper'],
];

export default function Downloads() {
  return <>
    <section className="page-hero"><p className="eyebrow">DOWNLOADS</p><h1>Get the right tool.</h1><p className="lede">Published software and test builds, with the package type and maturity called out.</p><p className="download-safety-link">Want to know how the apps handle your data before downloading? <a href="/privacy/">Read privacy &amp; safety →</a></p></section>
    <section className="section download-section">
      <header><p className="eyebrow">PHONEDROP</p><h2>Direct local file transfer.</h2><p>Choose the version for the device you use.</p></header>
      <div className="download-grid">{phoneDrop.map(([icon, name, detail, href, label]) => <article key={name}><span className="os-icon">{icon}</span><div><h3>{name}</h3><p>{detail}</p></div><a className="button" href={href}>{label} <span>↓</span></a></article>)}</div>
    </section>
    <section className="section download-section">
      <header><p className="eyebrow">PHONENAS</p><h2>Android server and optional Mac helper.</h2><p>Install PhoneNAS on Android. The helper discovers available servers, makes them visible in Finder and relays SMB locally; direct SMB remains available without it.</p></header>
      <div className="download-grid">{phoneNAS.map(([icon, name, detail, href, label]) => <article key={name}><span className="os-icon">{icon}</span><div><h3>{name}</h3><p>{detail}</p></div><a className="button" href={href} download>{label} <span>↓</span></a></article>)}</div>
      <p className="quiet">PhoneNAS 1.0.2 remains a beta. The Mac helper is optional, Apple-notarized, and contains no telemetry or cloud file service.</p>
    </section>
    <section className="section download-section">
      <header><p className="eyebrow">P-CAM</p><h2>Multi-phone camera previews.</h2><p>Working Android and Mac packages for testing a small local camera crew.</p></header>
      <div className="download-grid">
        <article><span className="os-icon">◆</span><div><h3>Android preview</h3><p>P-CAM 0.6.10 APK · 9.8 MB · debug-signed · Android 8.0+</p></div><a className="button" href="/files/P-CAM-0.6.10-Android-preview.apk" download>Download Android preview <span>↓</span></a></article>
        <article><span className="os-icon">⌘</span><div><h3>Mac Director + Library</h3><p>P-CAM Desktop 0.2 · universal macOS preview</p></div><a className="button" href="/files/P-CAM-Desktop-0.2-macOS.dmg" download>Download Mac preview <span>↓</span></a></article>
      </div>
      <p className="quiet">The Android package is debug-signed and may not install over another signing identity. The Mac package passed disk-image and app-signature checks. No public iOS package is available yet.</p>
    </section>
    <section className="section download-section">
      <header><p className="eyebrow">MINDGALLERY</p><h2>Private photo intelligence, in beta.</h2><p>The signed Android beta is distributed through Google Play. That keeps a large, frequently changing package out of the website download pile.</p></header>
      <div className="download-grid"><article><span className="os-icon">◆</span><div><h3>Android closed beta</h3><p>MindGallery 0.1.1 · arm64 · tester access may be required</p></div><a className="button" href="https://play.google.com/apps/testing/com.jenuxlabs.mindgallery">Open Google Play <span>↗</span></a></article></div>
      <p className="quiet">No public iPhone or iPad package yet. <a href="/products/mindgallery/">See what MindGallery is becoming →</a></p>
    </section>
  </>;
}
