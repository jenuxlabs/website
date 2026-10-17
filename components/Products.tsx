import { products, type Product } from '../lib/products';
export function ProductCards() {
  return <div className="product-grid">{products.map((p, i) => <article className={'product-card ' + p.id} key={p.id}>
    <div className="card-top"><img src={p.icon} width="44" height="44" alt="" /><span className="index">0{i + 1} / {p.verb}</span></div>
    <h3><a href={'/products/' + p.id}>{p.name}<span aria-hidden="true">↗</span></a></h3>
    <p>{p.summary}</p><div className="card-bottom"><span className="status">{p.status}</span><a className="small-link" href={'/downloads#' + p.id}>Get the app →</a></div>
  </article>)}</div>;
}
export function DownloadRows({ item }: { item: Product }) {
  return <div className="download-rows">{item.downloads.map(d => <div className="download-row" key={d.platform}>
    <div><strong>{d.platform}</strong><span>{d.version}</span></div><p>{d.detail}</p>
    {d.href ? <a className="button button-small" href={d.href} download={d.href.startsWith('/') || undefined}>{d.label} <span aria-hidden="true">{d.href.startsWith('/') ? '↓' : '↗'}</span></a> : <span className="unavailable">Not publicly available</span>}
  </div>)}</div>;
}
export function ScreenshotPlaceholder({ item }: { item: Product }) {
  return <figure className={'screenshot-placeholder ' + item.id} aria-label={item.name + ' screenshot placeholder'}>
    <span className="placeholder-corner" aria-hidden="true">+</span><img src={item.icon} width="56" height="56" alt="" />
    <figcaption><strong>Screenshots coming soon</strong><span>{item.name} · preview gallery</span></figcaption>
    <span className="placeholder-corner end" aria-hidden="true">+</span>
  </figure>;
}
export function ProductPage({ item }: { item: Product }) {
  return <>
    <section className={'product-hero ' + item.id}>
      <div><a className="back-link" href="/products">← All products</a><div className="product-lockup"><img src={item.icon} width="36" height="36" alt="" /><span>{item.name}</span></div>
        <h1>{item.headline}</h1><p className="lede">{item.intro}</p><div className="actions"><a className="button" href="#downloads">Downloads &amp; access ↓</a><span className="status">{item.status}</span></div>
      </div>
      {item.screens ? <figure className="hero-screenshot"><img src={item.screens[item.id === 'phonedrop' ? 1 : 0].src} alt={item.name + ' on Android'} /><figcaption>Inside {item.name}</figcaption></figure> : <ScreenshotPlaceholder item={item} />}
    </section>
    <section className="section feature-section"><div className="feature-grid">{item.features.map(([title, text], i) => <article key={title}><span className="index">0{i + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
    <section className="section product-downloads" id="downloads"><header className="section-heading"><div><p className="eyebrow">GET {item.name.toUpperCase()}</p><h2>Choose your device.</h2></div><a className="small-link" href={'/privacy#' + item.id}>Privacy details ↗</a></header><DownloadRows item={item} /><p className="release-note">{item.note}</p></section>
    {item.screens && <section className="section"><header className="section-heading"><div><p className="eyebrow">A CLOSER LOOK</p><h2>Inside the app.</h2></div><p>Appearance may vary by version.</p></header><div className="screen-gallery">{item.screens.map(s => <figure key={s.src}><img src={s.src} alt={item.name + ': ' + s.caption} loading="lazy" /><figcaption>{s.caption}</figcaption></figure>)}</div></section>}
    <aside className="support-strip"><p>Trying an early build? Tell us what worked—and what didn’t.</p><a href="/support">Get help or send feedback →</a></aside>
  </>;
}
