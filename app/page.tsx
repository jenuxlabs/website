import Link from 'next/link';

const products = [
  { name: 'PhoneDrop', status: 'Stable', tone: 'blue', line: 'Move files directly between Android, macOS and Windows.', detail: 'Fast local transfers. No account. No cloud detour.', href: '/products/phonedrop/', action: 'Get PhoneDrop' },
  { name: 'PhoneNAS', status: 'Beta', tone: 'violet', line: 'Turn spare Android storage into useful network storage.', detail: 'Share selected folders with devices on your local network.', href: '/products/phonenas/', action: 'See the beta' },
  { name: 'PhoneDesk', status: 'Beta', tone: 'cyan', line: 'Give your Android phone a bigger, desktop-shaped workspace.', detail: 'Built around larger screens, keyboard and mouse.', href: '/products/phonedesk/', action: 'See the beta' },
];

export default function Home() {
  return <>
    <section className="labs-hero">
      <div><p className="eyebrow">JENUX LABS · INDEPENDENT SOFTWARE</p><h1>Make more of the devices you already own.</h1><p className="lede">Small, practical tools that connect your phone and computer—without turning a simple job into a service.</p><div className="actions"><Link className="button" href="/products/phonedrop/">Get PhoneDrop</Link><Link href="#products">Explore all three ↓</Link></div></div>
      <Link className="hero-product" href="/products/phonedrop/" aria-label="Explore PhoneDrop"><span className="status stable">Stable · 1.0.4</span><img src="/phonedrop/logo.png" alt="" /><strong>PhoneDrop</strong><p>Drop files.<br />Not your privacy.</p><span className="hero-arrow">↗</span></Link>
    </section>
    <section className="product-section" id="products"><header><p className="eyebrow">THREE USEFUL IDEAS</p><h2>One stable. Two taking shape.</h2></header><div className="product-cards">{products.map((product) => <Link className={`product-card ${product.tone}`} href={product.href} key={product.name}><span className={`status ${product.status.toLowerCase()}`}>{product.status}</span><h3>{product.name}</h3><p className="product-line">{product.line}</p><p>{product.detail}</p><strong>{product.action} →</strong></Link>)}</div></section>
    <section className="labs-principles"><div><b>01</b><strong>Useful first</strong><p>Focused tools for real jobs.</p></div><div><b>02</b><strong>Local by instinct</strong><p>Your hardware should work together.</p></div><div><b>03</b><strong>Built independently</strong><p>Small team, direct decisions.</p></div></section>
  </>;
}
