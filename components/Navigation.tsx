'use client';
import { useEffect, useRef } from 'react';
import { products } from '../lib/products';
export default function Navigation() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const close = () => ref.current?.querySelectorAll('details[open]').forEach(d => d.removeAttribute('open'));
    const pointer = (event: PointerEvent) => { if (!ref.current?.contains(event.target as Node)) close(); };
    const key = (event: KeyboardEvent) => { if (event.key === 'Escape') {
      const summary = ref.current?.querySelector<HTMLDetailsElement>('details[open]')?.querySelector('summary'); close(); summary?.focus();
    }};
    document.addEventListener('pointerdown', pointer); document.addEventListener('keydown', key);
    return () => { document.removeEventListener('pointerdown', pointer); document.removeEventListener('keydown', key); };
  }, []);
  return <nav ref={ref} aria-label="Main navigation" onClick={e => {
    if ((e.target as HTMLElement).closest('a')) ref.current?.querySelectorAll('details[open]').forEach(d => d.removeAttribute('open'));
  }}>
    <div className="desktop-nav"><details className="nav-menu"><summary>Products <span aria-hidden="true">⌄</span></summary><div className="nav-panel">
      {products.map(p => <a key={p.id} href={'/products/' + p.id}><img src={p.icon} width="30" height="30" alt="" /><span><strong>{p.name}</strong><small>{p.verb} · {p.status.split(' · ')[0]}</small></span></a>)}
      <a className="all-products" href="/products">All products →</a>
    </div></details><a href="/blog">Lab notes</a><a href="/about">About</a><a href="/support">Support</a><a className="nav-download" href="/downloads">Downloads ↗</a></div>
    <details className="mobile-nav"><summary>Menu <span aria-hidden="true">☰</span></summary><div className="nav-panel"><a href="/products">All products</a>{products.map(p => <a key={p.id} href={'/products/' + p.id}>{p.name}</a>)}<a href="/downloads">Downloads</a><a href="/blog">Lab notes</a><a href="/about">About</a><a href="/support">Support</a></div></details>
  </nav>;
}
