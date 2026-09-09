import Link from 'next/link';

export default function Products() {
  return <>
    <section className="page-hero"><p className="eyebrow">PRODUCTS</p><h1>Practical tools.</h1><p className="lede">Focused technology built to solve real problems.</p></section>
    <section className="content">
      <span className="status stable">Stable · available now</span><h2>PhoneDrop</h2>
      <p>Fast, direct local file transfer across Android, macOS and Windows.</p>
      <Link className="button" href="/#download">Explore PhoneDrop</Link>
      <span className="status coming-soon">Coming soon to the App Store</span><h2>PhoneNAS</h2>
      <p>Turn an Android device into practical network storage.</p>
      <Link className="button" href="/products/phonenas/">Learn about PhoneNAS</Link>
      <span className="status coming-soon">Coming soon to the App Store</span><h2>PhoneDesk</h2>
      <p>Use an Android device as a practical remote screen and control surface.</p>
      <Link className="button" href="/products/phonedesk/">Learn about PhoneDesk</Link>
    </section>
  </>;
}
