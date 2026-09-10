import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'PhoneDesk', description: 'A desktop-shaped workspace direction for Android.' };

export default function PhoneDesk() {
  return <>
    <section className="product-spotlight desk-spotlight"><div><span className="status">In development</span><div className="product-lockup"><span className="app-monogram">PD</span><span>PhoneDesk</span></div><h1>Give your phone room to think.</h1><p className="lede">PhoneDesk is an Android workspace direction built around a larger display, keyboard and mouse.</p><p className="product-safety-link">Want to know what is documented about PhoneDesk today? <a href="/privacy/#phonedesk">Read privacy &amp; safety →</a></p><div className="actions"><a className="button" href="mailto:hello@jenuxlabs.com?subject=PhoneDesk">Contact Jenux Labs</a><a href="/products/">See all apps →</a></div></div><div className="desk-stage" aria-hidden="true"><div className="desk-screen"><span className="desk-bar">PhoneDesk</span><div className="desk-panels"><i /><i /><i /></div></div><span className="desk-base" /></div></section>
    <section className="section"><header><p className="eyebrow">DEVELOPMENT DIRECTION</p><h2>A larger canvas for Android.</h2><p>PhoneDesk is not presented as released software. Its display, input and device support remain under development.</p></header><div className="feature-grid three"><article><b>01</b><h3>Larger display</h3><p>A workspace designed to use more room than the phone screen.</p></article><article><b>02</b><h3>Keyboard and mouse</h3><p>A familiar input direction for desk use.</p></article><article><b>03</b><h3>Android at the center</h3><p>An exploration of how the phone you own can do another useful job.</p></article></div></section>
    <section className="safety-note"><strong>Still in the lab.</strong><p>No release date, supported-device list or public download is being promised yet.</p></section>
  </>;
}
