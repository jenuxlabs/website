import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  metadataBase: new URL('https://jenuxlabs.com'),
  title: { default: 'Jenux Labs — Make more of your devices', template: '%s — Jenux Labs' },
  description: 'Independent apps for the devices you already own. PhoneDrop, PhoneNAS, MindGallery and PhoneMulticam.',
  openGraph: { title: 'Jenux Labs — Make more of your devices', description: 'Move. Share. Find. Record. Practical, local-first apps for phones and computers.', url: 'https://jenuxlabs.com', siteName: 'Jenux Labs', type: 'website', images: ['/jenux-mark.png'] },
  twitter: { card: 'summary', title: 'Jenux Labs', description: 'Make more of the devices you already own.' }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head><link rel="stylesheet" href="/site.css?v=20261017" /><link rel="icon" href="/jenux-mark.png" /></head><body>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="brand" href="/" aria-label="Jenux Labs home"><img src="/jenux-mark.png" width="30" height="30" alt="" /><span>JENUX<span className="brand-light">LABS</span></span></a><Navigation /></header>
    <main id="main">{children}</main>
    <footer className="site-footer"><div><a className="brand" href="/">JENUX<span className="brand-light">LABS</span></a><p>Small tools. Useful connections.</p></div><div className="footer-links"><a href="/products">Products</a><a href="/downloads">Downloads</a><a href="/blog">Lab notes</a><a href="/about">About</a><a href="/support">Support</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div><p className="copyright">© 2026 Jenux Labs · Independent software &amp; electronics</p><a className="footer-contact" href="mailto:hello@jenuxlabs.com">Say hello ↗</a></footer>
  </body></html>;
}
