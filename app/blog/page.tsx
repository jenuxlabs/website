import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Lab notes from Jenux Labs about local-first software, useful devices and honest product development.',
};

const posts = [
  { href: '/blog/why-local-first/', date: '11 OCT 2026', time: '3 MIN', tag: 'DESIGN', title: 'Local-first is a practical choice', excerpt: 'The network in the room is often the shortest, clearest route between your devices.' },
  { href: '/blog/old-devices-new-jobs/', date: '11 OCT 2026', time: '3 MIN', tag: 'HARDWARE', title: 'Old devices, new jobs', excerpt: 'A spare phone already has storage, cameras, radios and a battery. That is a good place to start.' },
  { href: '/blog/what-beta-means/', date: '11 OCT 2026', time: '2 MIN', tag: 'BUILDING', title: 'What beta means here', excerpt: 'Real packages, honest labels, useful feedback—and no pretending the unfinished parts are done.' },
];

export default function Blog() {
  return <>
    <section className="page-hero blog-hero"><p className="eyebrow">JENUX LABS BLOG</p><h1>Notes from<br />the workbench.</h1><p className="lede">Products, experiments and the thinking behind them. Written when there is something real to say.</p></section>
    <section className="blog-index">{posts.map((post, index) => <a className={`blog-card ${index === 0 ? 'blog-card-featured' : ''}`} href={post.href} key={post.href}><div><span>{post.tag}</span><span>{post.date} · {post.time}</span></div><h2>{post.title}</h2><p>{post.excerpt}</p><strong>Read note →</strong></a>)}</section>
  </>;
}
