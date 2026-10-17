import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Lab notes', description: 'Updates and ideas from Jenux Labs: apps, useful hardware and local-first software.', alternates: { canonical: '/blog' } };
const posts = [
  { href: '/blog/october-update', date: '17 OCT 2026', tag: 'RELEASES', title: 'Four apps, and where they stand', excerpt: 'New Mac packages, Apple test builds, and a new name for P-CAM.' },
  { href: '/blog/why-local-first', date: '11 OCT 2026', tag: 'DESIGN', title: 'Local-first is a practical choice', excerpt: 'The network in the room is often the shortest route between your devices.' },
  { href: '/blog/old-devices-new-jobs', date: '11 OCT 2026', tag: 'HARDWARE', title: 'Old devices, new jobs', excerpt: 'A spare phone already has storage, cameras and a battery. Start there.' },
  { href: '/blog/what-beta-means', date: '11 OCT 2026', tag: 'BUILDING', title: 'What beta means here', excerpt: 'What you can install, what is still being tested, and what the labels mean.' }
];
export default function Blog() { return <><section className="page-hero"><p className="eyebrow">LAB NOTES</p><h1>From the workbench.</h1><p className="lede">Release notes, practical experiments, and a little of the thinking behind the apps.</p></section><section className="blog-index">{posts.map(p => <a className="blog-card" href={p.href} key={p.href}><div><span>{p.tag}</span><span>{p.date}</span></div><h2>{p.title}</h2><p>{p.excerpt}</p><strong>Read note →</strong></a>)}</section></>; }
