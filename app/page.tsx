import Link from 'next/link';

const products = [
  { name: 'PhoneDrop', status: 'Stable', tone: 'blue', line: 'Move files directly between Android, macOS and Windows.', detail: 'Fast local transfers. No account. No cloud detour.', href: '/products/phonedrop/', action: 'Get PhoneDrop' },
  { name: 'PhoneNAS', status: 'Coming soon', tone: 'violet', line: 'Turn spare Android storage into useful network storage.', detail: 'Share selected folders with devices on your local network.', href: '/products/phonenas/', action: 'See what’s next' },
  { name: 'PhoneDesk', status: 'Coming soon', tone: 'cyan', line: 'Give your Android phone a bigger, desktop-shaped workspace.', detail: 'Built around larger screens, keyboard and mouse.', href: '/products/phonedesk/', action: 'See what’s next' },
];

export default function Home() {
  return <>
    <section className="labs-hero">
      <div><p className="eyebrow">JENUX LABS · INDEPENDENT SOFTWARE</p><h1>Make more of the devices you already own.</h1><p className="lede">Small, practical tools that connect your phone and computer—without turning a simple job into a service.</p><div className="actions"><Link className="button" href="/products/phonedrop/">Get PhoneDrop</Link><Link href="#products">Explore all three ↓</Link></div></div>
      <Link className="hero-product" href="/products/phonedrop/" aria-label="Explore PhoneDrop"><span className="status stable">Stable · 1.0.5</span><img src="/phonedrop/logo.png" alt="" /><strong>PhoneDrop</strong><p>Direct. Local. Encrypted.</p><span className="hero-arrow">↗</span></Link>
    </section>
    <section className="product-section" id="products"><header><p className="eyebrow">THE JENUX LABS PRODUCT LINE</p><h2>One shipped. Two in the lab.</h2><p className="section-intro">The first tools are designed to work together: move your files, make storage useful, then make the phone feel more like a computer.</p></header><div className="product-cards">{products.map((product) => <Link className={`product-card ${product.tone}`} href={product.href} key={product.name}><span className={`status ${product.status === 'Stable' ? 'stable' : 'coming-soon'}`}>{product.status}</span><h3>{product.name}</h3><p className="product-line">{product.line}</p><p>{product.detail}</p><strong>{product.action} →</strong></Link>)}</div></section>
    <section className="lab-notes"><div><p className="eyebrow">SOFTWARE + HARDWARE</p><h2>Small tools. Real hardware. One lab.</h2></div><div><p>Alongside the apps, Jenux Labs explores embedded audio, physical interfaces and experimental hardware ideas—sharing the direction openly while the details are still being built.</p><Link href="/about/">See what the lab is exploring →</Link></div></section>
    <section className="labs-principles"><div><b>01</b><strong>Useful first</strong><p>Focused tools for real jobs.</p></div><div><b>02</b><strong>Local by instinct</strong><p>Your hardware should work together.</p></div><div><b>03</b><strong>Built independently</strong><p>Small team, direct decisions.</p></div></section>
  </>;
}
