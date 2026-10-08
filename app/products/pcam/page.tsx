import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'P-CAM preview',
  description: 'Turn nearby phones into a coordinated camera crew with local recording and a Director view.',
};

const downloads = [
  { platform: 'Android · preview APK', title: 'P-CAM 0.6.10', detail: 'Installable preview · debug-signed · Android 8.0 or later', href: '/files/P-CAM-0.6.10-Android-preview.apk', label: 'Download Android preview' },
  { platform: 'macOS · Director + Library', title: 'P-CAM Desktop 0.2', detail: 'Universal Mac preview · camera control and verified project collection', href: '/files/P-CAM-Desktop-0.2-macOS.dmg', label: 'Download Mac preview' },
];

export default function PCam() {
  return <>
    <section className="product-spotlight upcoming-spotlight cam-spotlight">
      <div>
        <span className="status">Preview · Android 0.6.10 · Mac 0.2</span>
        <div className="product-lockup"><img src="/pcam/icon.png" alt="" /><span>P-CAM</span></div>
        <h1>A camera crew made from phones.</h1>
        <p className="lede">Put a few phones on the same Wi-Fi. Use them as cameras, a Director—or both. Watch the views together while every camera records full-quality footage locally.</p>
        <div className="actions"><a className="button" href="#downloads">Get the preview builds ↓</a><a href="#how-it-works">How it works</a></div>
        <div className="proof-row"><span><strong>Camera · Director · Both</strong>Choose a role per device</span><span><strong>Local masters</strong>Monitoring stays lightweight</span></div>
      </div>
      <figure className="project-detail-placeholder" aria-label="P-CAM screenshot placeholder">
        <div className="placeholder-device placeholder-wide"><img src="/pcam/icon.png" alt="" /><strong>Screenshots<br />coming soon</strong></div>
        <figcaption>The Android and Mac builds exist. The proper product shoot is next.</figcaption>
      </figure>
    </section>

    <section className="signal-strip"><span>MULTI-CAMERA</span><span>LOCAL RECORDING</span><span>SYNCED START</span><span>PROJECT TRANSFER</span></section>

    <section className="section" id="how-it-works">
      <header><p className="eyebrow">A SMALL MULTI-CAMERA SETUP</p><h2>Each device does its part.</h2><p>Name the cameras, choose their roles, then run the shoot from a phone, tablet or Mac.</p></header>
      <div className="product-feature-grid">
        <article><span>01</span><h3>Camera</h3><p>Record H.264 or H.265 with AAC audio on the phone. Available resolution depends on the camera hardware.</p></article>
        <article><span>02</span><h3>Director</h3><p>Watch up to four cameras, open a larger view, prepare the group and start or stop them together.</p></article>
        <article><span>03</span><h3>Library</h3><p>Collect complete projects on the Mac, including timing data, with hashes checked before a transfer is accepted.</p></article>
      </div>
      <p className="quiet">P-CAM coordinates starts over the local network; it is not hardware genlock. Preview builds are for testing, and physical behavior still depends on the phones, cameras and network you use.</p>
    </section>

    <section className="section release-section" id="downloads">
      <header><p className="eyebrow">PREVIEW BUILDS</p><h2>Real packages, clearly labelled.</h2><p>Use these on devices and networks you trust. They are previews, not finished store releases.</p></header>
      <div className="release-downloads">{downloads.map((item) => <article className="release-download" key={item.platform}><span className="release-platform">{item.platform}</span><h3>{item.title}</h3><p>{item.detail}</p><a className="button" href={item.href} download>{item.label} <span>↓</span></a></article>)}</div>
      <p className="quiet">The Android APK is debug-signed and may not install over a differently signed build. The Mac disk image passed integrity and app-signature checks. iPhone and iPad builds are in active development; no public iOS package is offered yet.</p>
    </section>
  </>;
}
