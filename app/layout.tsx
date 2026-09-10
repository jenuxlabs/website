import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jenuxlabs.com'),
  title: { default: 'Jenux Labs — Useful software for your devices', template: '%s — Jenux Labs' },
  description: 'Jenux Labs develops practical software, embedded systems and electronics.',
  openGraph: { title: 'Jenux Labs — Useful technology', description: 'Useful technology: practical software, embedded systems and electronics.', url: 'https://jenuxlabs.com', siteName: 'Jenux Labs', type: 'website' },
  twitter: { card: 'summary', title: 'Jenux Labs — Useful technology', description: 'Useful technology: practical software, embedded systems and electronics.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <header className="site-header">
      <a className="brand" href="/" aria-label="Jenux Labs home"><img className="brand-logo" src="/jenux-mark.png" alt="" /><span><b>JENUX</b><small>LABS</small></span></a>
      <nav aria-label="Main navigation">
        <details className="products-menu"><summary>Apps <span aria-hidden="true">⌄</span></summary><div className="products-menu-panel">
          <a href="/products/phonedrop/"><strong><img src="/phonedrop/logo.png" alt="" />PhoneDrop</strong><small>Local file transfer · available</small></a>
          <a href="/products/phonenas/"><strong><img src="/phonenas/icon.png" alt="" />PhoneNAS</strong><small>Android NAS · closed testing</small></a>
          <a href="/products/phonedesk/"><strong><span className="menu-monogram">PD</span>PhoneDesk</strong><small>Android desktop workspace · in development</small></a>
          <a className="products-menu-all" href="/products/">See all apps →</a>
        </div></details>
        <a href="/about/">About</a><a href="/support/">Support</a>
      </nav>
    </header>
    <main>{children}</main>
    <footer><div><strong>JENUX LABS</strong><p>Useful technology.</p></div><div className="footer-links"><a href="/products/">Products</a><a href="/about/">About</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="mailto:hello@jenuxlabs.com">Contact</a></div><p className="copyright">© 2026 Jenux Labs · Independent software and technology lab</p></footer>
  </body></html>;
}

