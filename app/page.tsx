import Link from 'next/link';
const products=[
  {n:'01',name:'PhoneDrop',status:'MAIN · ANDROID',text:'Direct, peer-to-peer file delivery between Android, macOS and Windows. Your files stay between your devices—no cloud upload required.',href:'/products/phonedrop/'},
  {n:'02',name:'PhoneNAS',status:'BETA',text:'Turn an Android phone into practical network storage for the devices already on your local network.',href:'/products/phonenas/'},
  {n:'03',name:'PhoneDesk',status:'BETA',text:'A desktop control deck for building, installing and checking Jenux Labs apps and devices.',href:'/products/phonedesk/'},
];
export default function Home(){return <>
<section className="hero"><p className="eyebrow">JENUX LABS</p><h1>Technology that stays close.</h1><p className="lede">Useful software built for direct device-to-device work, local networks and the hardware in front of you.</p><div className="actions"><Link className="button" href="/products/phonedrop/">Explore PhoneDrop</Link><Link href="/products/">View all products →</Link></div></section>
<section className="section"><header><p className="eyebrow">THE CURRENT LINEUP</p><h2>Three focused tools.</h2><p>PhoneDrop is the main product. PhoneNAS and PhoneDesk are active betas.</p></header><div className="product-grid">{products.map(p=><article className="product-card" key={p.name}><b>{p.n}</b><small>{p.status}</small><h3>{p.name}</h3><p>{p.text}</p><Link href={p.href}>Explore {p.name} →</Link></article>)}</div></section>
<section className="section split"><header><p className="eyebrow">OUR PRINCIPLE</p><h2>Keep the path direct.</h2></header><p className="large">PhoneDrop sends files directly between paired devices on the same local network. There is no required cloud relay or upload step. That local-first approach guides the rest of Jenux Labs: clear tools, controlled data paths and software that solves the problem in front of you.</p></section>
</>}
