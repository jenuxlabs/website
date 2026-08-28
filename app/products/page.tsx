import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Meet PhoneNAS, PhoneDrop and PhoneDesk — three practical Android apps in development at Jenux Labs.',
};

const products = [
  { name: 'PhoneNAS', href: '/products/phonenas/', description: 'Turn an Android device into practical network storage.' },
  { name: 'PhoneDrop', href: '/products/phonedrop/', description: 'A simpler way to move files between your phone and computer over your local network.' },
  { name: 'PhoneDesk', href: '/products/phonedesk/', description: 'An Android desktop experience in development, designed for using your phone with a larger screen, keyboard and mouse.' },
];

export default function Products() {
  return <>
    <section className="page-hero"><p className="eyebrow">PRODUCTS</p><h1>Practical tools.</h1><p className="lede">Focused technology built to solve real problems.</p><p>These apps are in development and are not yet available to download.</p></section>
    <section className="section" aria-label="Apps in development"><div className="product-grid">
      {products.map(product => <article className="product" key={product.name}><div><small>IN DEVELOPMENT</small><h2 className="product-title">{product.name}</h2><p>{product.description}</p></div><Link href={product.href}>Explore {product.name} →</Link></article>)}
    </div></section>
  </>;
}
