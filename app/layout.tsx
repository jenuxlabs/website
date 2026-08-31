import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jenuxlabs.com'),
  title: {
    default: 'PhoneDrop — Fast, private local file transfer',
    template: '%s — Jenux Labs',
  },
  description: 'Send files directly between Android, macOS and Windows devices on your local network with PhoneDrop.',
  openGraph: {
    title: 'PhoneDrop — Drop files. Not your privacy.',
    description: 'Fast, direct device-to-device transfers for Android, macOS and Windows.',
    url: 'https://jenuxlabs.com',
    siteName: 'Jenux Labs',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'PhoneDrop — Drop files. Not your privacy.',
    description: 'Fast, direct device-to-device transfers for Android, macOS and Windows.',
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
            <Link href="/#features">Features</Link>
            <Link href="/#download">Download</Link>
            <Link href="/#v2">2.0 preview</Link>
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
          <p className="copyright">© 2026 Jenux Labs · PhoneDrop 1.0.3</p>
        </footer>
      </body>
    </html>
  );
}
