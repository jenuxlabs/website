import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  metadataBase: new URL('https://jenuxlabs.com'),
  title: { default: 'Jenux Labs — Useful software for your devices', template: '%s — Jenux Labs' },
  description: 'Jenux Labs develops practical software, embedded systems and electronics.',
  openGraph: { title: 'Jenux Labs — Useful technology', description: 'Useful technology: practical software, embedded systems and electronics.', url: 'https://jenuxlabs.com', siteName: 'Jenux Labs', type: 'website' },
  twitter: { card: 'summary', title: 'Jenux Labs — Useful technology', description: 'Useful technology: practical software, embedded systems and electronics.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head><link rel="stylesheet" href="/site.css?v=20261011a" /></head><body>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Jenux Labs home"><img className="brand-logo" src="/jenux-mark.png" alt="" /><span><b>JENUX</b><small>LABS</small></span></Link>
      <nav aria-label="Main navigation">
        <div className="desktop-nav-links">
        <details className="products-menu"><summary>Products <span aria-hidden="true">⌄</span></summary><div className="products-menu-panel">
          <a href="/products/phonedrop/"><strong><img src="/phonedrop/logo.png" alt="" />PhoneDrop</strong><small>Local file transfer · available</small></a>
          <a href="/products/phonenas/"><strong><img src="/phonenas/icon.png" alt="" />PhoneNAS</strong><small>Android NAS · 1.0.2 beta</small></a>
          <a href="/products/mindgallery/"><strong><img src="/mindgallery/icon.png" alt="" />MindGallery</strong><small>Private photo intelligence · beta</small></a>
          <a href="/products/pcam/"><strong><img src="/pcam/icon.png" alt="" />P-CAM</strong><small>Multi-camera system · preview</small></a>
          <a className="products-menu-all" href="/products/">See all products →</a>
        </div></details>
        <a href="/downloads/">Downloads</a><a href="/blog/">Blog</a><a href="/support/">Support</a><a href="/privacy/">Privacy</a>
        </div>
        <details className="mobile-site-menu"><summary><span className="menu-glyph" aria-hidden="true">☰</span> Menu</summary><div className="mobile-site-menu-panel">
          <a href="/products/">All products</a>
          <a href="/products/phonedrop/">PhoneDrop</a>
          <a href="/products/phonenas/">PhoneNAS</a>
          <a href="/products/mindgallery/">MindGallery</a>
          <a href="/products/pcam/">P-CAM</a>
          <a href="/downloads/">Downloads</a>
          <a href="/blog/">Blog</a>
          <a href="/support/">Support</a>
          <a href="/privacy/">Privacy</a>
        </div></details>
      </nav>
    </header>
    <main>{children}</main>
    <footer><div><strong>JENUX LABS</strong><p>Useful technology.</p></div><div className="footer-links"><a href="/products/">Products</a><a href="/blog/">Blog</a><a href="/about/">About</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="mailto:hello@jenuxlabs.com">Contact</a></div><p className="copyright">© 2026 Jenux Labs · Independent software and technology lab</p></footer>
  </body></html>;
}
