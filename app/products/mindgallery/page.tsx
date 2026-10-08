import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MindGallery beta',
  description: 'A private, local-first gallery with OCR search, people review and optional help from your own computers.',
};

export default function MindGallery() {
  return <>
    <section className="product-spotlight upcoming-spotlight mind-spotlight">
      <div>
        <span className="status">Android beta · closed testing</span>
        <div className="product-lockup"><img src="/mindgallery/icon.png" alt="" /><span>MindGallery</span></div>
        <h1>Your photos know more than their filenames.</h1>
        <p className="lede">MindGallery starts with a fast, familiar gallery and adds useful ways to find what you remember: text inside images, people, places and the odd detail you cannot turn into a filename.</p>
        <p className="lede">The library stays on your devices. Heavier work can use computers you choose on your own network—no Jenux Labs photo cloud required.</p>
        <div className="actions"><a className="button" href="https://play.google.com/apps/testing/com.jenuxlabs.mindgallery">Join the Android beta ↗</a><a href="#inside">What is inside</a></div>
      </div>
      <figure className="project-detail-placeholder" aria-label="MindGallery screenshot placeholder">
        <div className="placeholder-device"><img src="/mindgallery/icon.png" alt="" /><strong>Screenshots<br />coming soon</strong></div>
        <figcaption>The beta is real. The polished product screenshots are not ready yet.</figcaption>
      </figure>
    </section>

    <section className="signal-strip"><span>LOCAL LIBRARY</span><span>OCR SEARCH</span><span>PEOPLE REVIEW</span><span>PRIVATE LAN HELPERS</span></section>

    <section className="section" id="inside">
      <header><p className="eyebrow">A GALLERY FIRST</p><h2>Useful before it gets clever.</h2><p>MindGallery is based on Aves, then extended around private search and review. The basics stay fast; intelligence arrives where it earns its place.</p></header>
      <div className="product-feature-grid">
        <article><span>01</span><h3>Search visible text</h3><p>OCR makes signs, documents, labels and screenshots searchable without renaming every image.</p></article>
        <article><span>02</span><h3>Review people, don’t guess</h3><p>Face grouping is designed as something you can inspect and correct—not a mysterious final verdict.</p></article>
        <article><span>03</span><h3>Use your own machines</h3><p>Optional phone and computer workers can help on your local network. Your originals remain yours.</p></article>
      </div>
    </section>

    <section className="section release-section">
      <header><p className="eyebrow">BETA ACCESS</p><h2>Android first.</h2><p>The current signed Play beta is <strong>MindGallery 0.1.1</strong>. It is a substantial app, so distribution happens through Google Play rather than a giant web download.</p></header>
      <div className="release-downloads">
        <article className="release-download"><span className="release-platform">Android · closed beta</span><h3>MindGallery 0.1.1</h3><p>Arm64 Play build. Tester access may be required before Google Play offers the install.</p><a className="button" href="https://play.google.com/apps/testing/com.jenuxlabs.mindgallery">Open the beta ↗</a></article>
        <article className="release-download release-unavailable"><span className="release-platform">iPhone + iPad</span><h3>Still in development</h3><p>The iOS work is real, but there is no public package yet. We will add it when device testing and distribution are ready.</p><span className="quiet">No placeholder download.</span></article>
      </div>
    </section>
  </>;
}
