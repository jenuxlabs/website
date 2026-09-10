import Link from 'next/link';

const apps = [
  { name: 'PhoneDrop', status: 'Available', tone: 'drop', line: 'Move files directly between Android, macOS and Windows.', detail: 'Fast local transfers with no account and no cloud relay.', href: '/products/phonedrop/', icon: '/phonedrop/logo.png' },
  { name: 'PhoneNAS', status: 'Closed testing', tone: 'nas', line: 'Turn an Android phone into practical network storage.', detail: 'Share chosen folders over familiar SMB, with users and permissions.', href: '/products/phonenas/', icon: '/phonenas/icon.png' },
  { name: 'PhoneDesk', status: 'In development', tone: 'desk', line: 'Give Android a bigger, desktop-shaped workspace.', detail: 'Designed around a larger display, keyboard and mouse.', href: '/products/phonedesk/', icon: '' },
];

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="home-copy"><p className="eyebrow">JENUX LABS · USEFUL TECHNOLOGY</p><h1>Make your devices do more.</h1><p className="lede">Practical software that connects phones and computers, keeps simple jobs simple, and puts useful hardware back to work.</p><div className="actions"><Link className="button" href="/products/">Explore the apps</Link><Link href="/about/">About Jenux Labs →</Link></div></div>
      <div className="hero-stack" aria-label="PhoneDrop and PhoneNAS screenshots">
        <figure className="hero-phone hero-phone-back"><img src="/phonenas/home-093.png" alt="PhoneNAS running on Android" /></figure>
        <figure className="hero-phone hero-phone-front"><img src="/phonedrop/speed.jpg" alt="PhoneDrop transferring a file on Android" /></figure>
        <span className="hero-chip hero-chip-local">LOCAL-FIRST</span><span className="hero-chip hero-chip-three">ANDROID · MAC · WINDOWS</span>
      </div>
    </section>
    <section className="signal-strip"><span>DIRECT TRANSFERS</span><span>LOCAL STORAGE</span><span>NO REQUIRED ACCOUNT</span><span>BUILT INDEPENDENTLY</span></section>
    <section className="app-showcase" id="apps"><header><p className="eyebrow">THE APPS</p><h2>Three focused tools.<br />One useful ecosystem.</h2><p>Move files. Make storage useful. Give Android more room to work.</p></header><div className="app-grid">{apps.map((app) => <Link className={`app-card ${app.tone}`} href={app.href} key={app.name}><div className="app-card-top">{app.icon ? <img src={app.icon} alt="" /> : <span className="app-monogram">PD</span>}<span className="status">{app.status}</span></div><h3>{app.name}</h3><p className="app-line">{app.line}</p><p>{app.detail}</p><strong>Explore {app.name} <span>↗</span></strong></Link>)}</div></section>
    <section className="home-feature home-feature-drop"><div><p className="eyebrow">PHONEDROP</p><h2>The shortest path between your devices.</h2><p className="large">Choose files, pick a trusted device, and watch them move directly across your local network.</p><Link className="text-arrow" href="/products/phonedrop/">See PhoneDrop and downloads →</Link></div><div className="feature-screen-row"><figure><img src="/phonedrop/devices.jpg" alt="PhoneDrop nearby devices" /></figure><figure><img src="/phonedrop/activity.jpg" alt="PhoneDrop recent activity" /></figure></div></section>
    <section className="home-feature home-feature-nas"><div className="feature-screen-row"><figure><img src="/phonenas/overview.jpg" alt="PhoneNAS overview" /></figure><figure><img src="/phonenas/shares.jpg" alt="PhoneNAS shared folders" /></figure></div><div><p className="eyebrow">PHONENAS</p><h2>A useful second life for spare storage.</h2><p className="large">Choose folders, create users and connect with normal SMB from the computers you already use.</p><Link className="text-arrow" href="/products/phonenas/">See PhoneNAS and the Mac helper →</Link></div></section>
    <section className="principles"><div><b>01</b><strong>Useful first</strong><p>Focused tools for real jobs.</p></div><div><b>02</b><strong>Local by design</strong><p>Direct routes where they make sense.</p></div><div><b>03</b><strong>Independent</strong><p>Practical engineering without invented hype.</p></div></section>
  </>;
}

