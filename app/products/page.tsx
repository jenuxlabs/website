import Link from 'next/link';

export default function Products() {
  return <>
    <section className="page-hero"><p className="eyebrow">JENUX LABS APPS</p><h1>Useful tools.<br />Clear jobs.</h1><p className="lede">Software for moving files, reusing storage and extending what an Android device can do.</p></section>
    <section className="product-index">
      <Link className="product-index-card drop" href="/products/phonedrop/"><img src="/phonedrop/logo.png" alt="" /><div><span className="status">Available</span><h2>PhoneDrop</h2><p>Direct local file transfer between Android, macOS and Windows.</p><strong>Product details and downloads →</strong></div><figure><img src="/phonedrop/speed.jpg" alt="PhoneDrop transfer screen" /></figure></Link>
      <Link className="product-index-card nas" href="/products/phonenas/"><img src="/phonenas/icon.png" alt="" /><div><span className="status">Closed testing</span><h2>PhoneNAS</h2><p>Turn selected Android folders into SMB network shares with users and permissions.</p><strong>Product details and Mac helper →</strong></div><figure><img src="/phonenas/home-093.png" alt="PhoneNAS home screen" /></figure></Link>
      <Link className="product-index-card desk" href="/products/phonedesk/"><span className="app-monogram">PD</span><div><span className="status">In development</span><h2>PhoneDesk</h2><p>A larger, desktop-shaped Android workspace for a display, keyboard and mouse.</p><strong>See the development direction →</strong></div><div className="desk-window" aria-hidden="true"><span>PhoneDesk</span><i /></div></Link>
    </section>
  </>;
}

