import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jenuxlabs.com'),
  title: {
    default: 'Jenux Labs — Useful software for your devices',
    template: '%s — Jenux Labs',
  },
  description: 'PhoneDrop, PhoneNAS and PhoneDesk: practical tools that make more of the devices you already own.',
  openGraph: {
    title: 'Jenux Labs — Useful software for your devices',
    description: 'PhoneDrop, PhoneNAS and PhoneDesk: practical tools for phones and computers.',
    url: 'https://jenuxlabs.com',
    siteName: 'Jenux Labs',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Jenux Labs — Useful software for your devices',
    description: 'PhoneDrop, PhoneNAS and PhoneDesk: practical tools for phones and computers.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Jenux Labs home">
            <img className="brand-logo" src="/phonedrop/logo.png" alt="" />
            <span>JENUX LABS</span>
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/#products">Products</Link>
            <Link href="/products/phonedrop/">PhoneDrop</Link>
            <Link href="/support/">Support</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div>
            <strong>JENUX LABS</strong>
            <p>Useful technology. Built independently.</p>
          </div>
          <div className="footer-links">
            <Link href="/products/">Products</Link>
            <Link href="/about/">About</Link>
            <Link href="/privacy/">Privacy</Link>
            <Link href="/terms/">Terms</Link>
            <a href="mailto:hello@jenuxlabs.com">Contact</a>
          </div>
          <p className="copyright">© 2026 Jenux Labs · PhoneDrop 1.0.4</p>
        </footer>
      </body>
    </html>
  );
}
