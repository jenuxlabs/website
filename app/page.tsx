const downloads = [
  {
    os: 'Windows',
    icon: '⊞',
    detail: 'Windows installer · 6.8 MB',
    href: '/phonedrop/PhoneDrop-Setup-1.0.8.exe',
    label: 'Download for Windows',
  },
  {
    os: 'macOS',
    icon: '⌘',
    detail: 'macOS disk image · 3.6 MB',
    href: '/downloads/PhoneDrop-1.0.3.dmg',
    label: 'Download for macOS',
  },
  {
    os: 'Android',
    icon: '◆',
    detail: 'Signed APK · Android 8+ · 6.6 MB',
    href: '/downloads/PhoneDrop-1.0.3-Android.apk',
    label: 'Download Android APK',
  },
];

const features = [
  ['01', 'Pick from anywhere', 'Choose one file or hundreds, or use Share → PhoneDrop directly from Gallery, Files, browsers and other Android apps.'],
  ['02', 'Pair once', 'PhoneDrop remembers individual trusted devices without replacing your existing phone, Mac or Windows pairings.'],
  ['03', 'See who is ready', 'Live discovery shows visible devices, online status and clear pairing controls without exposing IP addresses.'],
  ['04', 'Stay in control', 'Live progress, measured transfer speed and a real Stop button keep every drop understandable.'],
];

export default function Home() {
  return (
    <>
      <section className="pd-hero">
        <div className="pd-hero-copy">
          <p className="eyebrow">PHONEDROP · ANDROID · MACOS · WINDOWS</p>
          <div className="pd-title-row">
            <img src="/phonedrop/logo.png" alt="PhoneDrop logo" />
            <span>PhoneDrop</span>
          </div>
          <h1>Drop files.<br />Not your privacy.</h1>
          <p className="lede">Fast, direct device-to-device transfers across your local network. No upload detour. No account required.</p>
          <div className="actions">
            <a className="button" href="#download">Download PhoneDrop</a>
            <a href="#how-it-works">See how it works ↓</a>
          </div>
          <div className="pd-proof" aria-label="PhoneDrop highlights">
            <span><strong>64.5 MB/s</strong> captured in a real local transfer</span>
            <span><strong>3 platforms</strong> one familiar flow</span>
            <span><strong>Local-first</strong> files stay on your network</span>
          </div>
        </div>
        <div className="pd-phone-stage" aria-label="PhoneDrop transferring a file on Android">
          <div className="pd-orbit" />
          <span className="pd-float-tag pd-float-tag-top"><i /> Paired · Online</span>
          <span className="pd-float-tag pd-float-tag-bottom">64.5 MB/s ↗</span>
          <img src="/phonedrop/speed.jpg" alt="PhoneDrop transferring a file at 64.5 megabytes per second" />
        </div>
      </section>

      <section className="pd-signal" aria-label="PhoneDrop product facts">
        <span>PHONE ↔ PHONE</span><span>PHONE ↔ DESKTOP</span><span>MULTI-FILE</span><span>NO CLOUD RELAY</span>
      </section>

      <section className="section" id="features">
        <header><p className="eyebrow">SIMPLE ON PURPOSE</p><h2>The shortest path between your devices.</h2><p className="section-intro">PhoneDrop turns local file sharing into one calm, consistent flow—from Android to Android, Mac or Windows.</p></header>
        <div className="pd-feature-grid">
          {features.map(([number, title, text]) => (
            <article key={number}>
              <b>{number}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pd-how" id="how-it-works">
        <header><p className="eyebrow">HOW IT WORKS</p><h2>Choose. Connect. Drop.</h2></header>
        <div className="pd-flow">
          <article><span>1</span><div><h3>Choose files</h3><p>Select files inside PhoneDrop or share them in from another Android app.</p></div></article>
          <article><span>2</span><div><h3>Pick a destination</h3><p>Choose an online paired device, or pair a newly discovered nearby one.</p></div></article>
          <article><span>3</span><div><h3>Watch it move</h3><p>PhoneDrop sends directly and shows progress, speed and recent activity.</p></div></article>
        </div>
      </section>

      <section className="section pd-showcase">
        <div className="pd-showcase-copy">
          <p className="eyebrow">THE REAL APP</p>
          <h2>Designed to feel obvious.</h2>
          <p className="large">A clear ready state. One big Send Files action. Live status when something is moving. Your paired devices and settings stay close without cluttering the main screen.</p>
          <div className="pd-mini-stats">
            <span><strong>59.7 MB/s</strong> lifetime average in the shown test</span>
            <span><strong>157 files</strong> and 13.36 GB in the activity capture</span>
          </div>
        </div>
        <div className="pd-screen-wall">
          <figure className="pd-screen pd-screen-a"><img src="/phonedrop/devices.jpg" alt="PhoneDrop nearby and paired devices window" /><figcaption>Nearby devices, pairing and live online status</figcaption></figure>
          <figure className="pd-screen pd-screen-b"><img src="/phonedrop/settings.jpg" alt="PhoneDrop settings screen" /><figcaption>Visibility, background mode and practical controls</figcaption></figure>
          <figure className="pd-screen pd-screen-c"><img src="/phonedrop/activity.jpg" alt="PhoneDrop recent activity and lifetime statistics" /><figcaption>Recent activity and real transfer statistics</figcaption></figure>
        </div>
      </section>

      <section className="pd-privacy-panel">
        <div>
          <p className="eyebrow">LOCAL-FIRST BY DESIGN</p>
          <h2>Your files take the local route.</h2>
        </div>
        <div className="pd-privacy-copy">
          <p>PhoneDrop 1.0.3 sends files directly between devices on the same local network. Jenux Labs does not operate a file relay and does not receive the contents of your transfers.</p>
          <ul>
            <li>No PhoneDrop account</li>
            <li>No cloud storage required</li>
            <li>Persistent trust stays on your devices</li>
            <li>Received files stay in your PhoneDrop folder</li>
          </ul>
          <a href="/privacy/">Read the full privacy policy →</a>
        </div>
      </section>

      <section className="section pd-editions">
        <header><p className="eyebrow">ONE ANDROID APP · TWO EXPERIENCES</p><h2>Start free. Go Pro when it matters.</h2></header>
        <div className="pd-edition-grid">
          <article>
            <span className="pd-plan-label">PHONE DROP LITE</span>
            <h3>Ready for everyday drops.</h3>
            <p>Five files at full speed each day, then transfers continue at up to 20 MB/s. Includes advertising.</p>
            <ul><li>All core local transfer features</li><li>Phone-to-phone and desktop pairing</li><li>Android Share integration</li></ul>
          </article>
          <article className="pd-pro-card">
            <span className="pd-plan-label">PHONE DROP PRO</span>
            <h3>Everything, wide open.</h3>
            <p>Ad-free and unlimited full-speed transfers, activated in the same Android app.</p>
            <ul><li>No ads</li><li>No daily full-speed allowance</li><li>Unlimited local transfer speed</li></ul>
          </article>
        </div>
      </section>

      <section className="section" id="download">
        <header><p className="eyebrow">DOWNLOAD</p><h2>Ready to drop?</h2><p className="section-intro">Windows 1.0.8, with Android and macOS 1.0.3. Use PhoneDrop only on networks and devices you trust.</p></header>
        <div className="pd-download-grid">
          {downloads.map((download) => (
            <article key={download.os}>
              <span className="pd-os-icon" aria-hidden="true">{download.icon}</span>
              <div><h3>{download.os}</h3><p>{download.detail}</p></div>
              <a className="button" href={download.href} download>{download.label} <span>↓</span></a>
            </article>
          ))}
        </div>
        <p className="pd-download-note">Android’s Google Play release is being prepared. The APK above is the signed 1.0.3 release for manual installation.</p>
      </section>

      <section className="pd-v2" id="v2">
        <div className="pd-v2-head">
          <span>PHONE DROP 2.0 · FIRST LOOK</span>
          <h2>The drop gets a longer reach.</h2>
          <p>These are development directions—not features in 1.0.3, and details may change.</p>
        </div>
        <div className="pd-v2-grid">
          <article><b>BEYOND ONE WI‑FI</b><h3>Remote Drop</h3><p>A secure way to reach your trusted devices when they are not on the same local network.</p></article>
          <article><b>KEEP MOVING</b><h3>Queues + resume</h3><p>Continue interrupted transfers and line up more work without babysitting each file.</p></article>
          <article><b>MORE AT ONCE</b><h3>Multi-direction transfer</h3><p>Planned support for richer multi-send workflows and simultaneous sending and receiving.</p></article>
        </div>
      </section>

      <section className="section pd-faq">
        <header><p className="eyebrow">GOOD TO KNOW</p><h2>Quick answers.</h2></header>
        <div>
          <details open><summary>Do devices need to be on the same Wi‑Fi?</summary><p>PhoneDrop 1.0.3 is local-network software. Devices must be able to reach each other on the same Wi‑Fi, LAN or compatible phone hotspot. Cross-network transfers are part of the 2.0 direction above.</p></details>
          <details><summary>Are my files uploaded to Jenux Labs?</summary><p>No. Version 1.0.3 transfers files directly between your devices and does not use a Jenux Labs file relay.</p></details>
          <details><summary>Can one phone remember several devices?</summary><p>Yes. Pairing a new phone or computer does not replace your other trusted devices.</p></details>
          <details><summary>What happens while a device is busy?</summary><p>PhoneDrop prevents overlapping transfers in 1.0.3 and waits until the destination is available.</p></details>
        </div>
      </section>

      <section className="pd-final-cta">
        <img src="/phonedrop/logo.png" alt="" />
        <div><p className="eyebrow">PHONE DROP 1.0.3</p><h2>Your devices are closer than they look.</h2></div>
        <a className="button" href="#download">Choose your download ↑</a>
      </section>
    </>
  );
}
