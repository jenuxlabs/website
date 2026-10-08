export const dynamic = 'force-static';

export default function Products() {
  return <>
    <section className="page-hero"><p className="eyebrow">JENUX LABS PRODUCTS</p><h1>Useful tools.<br />Built in the open.</h1><p className="lede">Working software, real beta builds and previews—with the stage made clear and the hype kept low.</p></section>
    <section className="product-index">
      <a className="product-index-card drop" href="/products/phonedrop/"><img src="/phonedrop/logo.png" alt="" /><div><span className="status">Available</span><h2>PhoneDrop</h2><p>Direct local file transfer between Android, macOS and Windows.</p><strong>Product details and downloads →</strong></div><figure><img src="/phonedrop/speed.jpg" alt="PhoneDrop transfer screen" /></figure></a>
      <a className="product-index-card nas" href="/products/phonenas/"><img src="/phonenas/icon.png" alt="" /><div><span className="status">1.0.2 · Beta</span><h2>PhoneNAS</h2><p>Turn selected Android folders and attached storage into SMB shares with users and permissions.</p><strong>Android beta and Mac helper →</strong></div><figure><img src="/phonenas/home-093.png" alt="PhoneNAS home screen" /></figure></a>
      <a className="upcoming-project-card" href="/products/mindgallery/"><img className="product-project-icon" src="/mindgallery/icon.png" alt="" /><div><span className="status">Android beta</span><h2>MindGallery</h2><p>A private, Aves-based gallery with local OCR search, people review and optional help from computers on your own network.</p><strong>Beta details →</strong></div><figure className="project-placeholder mind-placeholder" aria-label="MindGallery screenshot placeholder"><div className="placeholder-device"><img src="/mindgallery/icon.png" alt="" /><strong>Screenshots<br />coming soon</strong></div><figcaption>Real app. Fresh screenshots on the way.</figcaption></figure></a>
      <a className="upcoming-project-card" href="/products/pcam/"><img className="product-project-icon" src="/pcam/icon.png" alt="" /><div><span className="status">Android + Mac preview</span><h2>P-CAM</h2><p>Use nearby phones as a coordinated camera crew, with local recording and a Director view over your own Wi-Fi.</p><strong>Preview builds →</strong></div><figure className="project-placeholder cam-placeholder" aria-label="P-CAM screenshot placeholder"><div className="placeholder-device"><img src="/pcam/icon.png" alt="" /><strong>Screenshots<br />coming soon</strong></div><figcaption>Real builds. Product shots next.</figcaption></figure></a>
    </section>
  </>;
}
