import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PhoneDrop',
  description: 'Local file transfers between your phone and computer. PhoneDrop is in development at Jenux Labs.',
};

export default function PhoneDrop() {
  return <>
    <section className="page-hero"><p className="eyebrow">PHONEDROP · IN DEVELOPMENT</p><h1>Your files. From here to there.</h1><p className="lede">A simpler way to move files between your phone and computer over your local network.</p></section>
    <article className="content"><h2>Move files between your devices.</h2><p>PhoneDrop is being developed around a straightforward task: moving files between the devices you use. The phone app and computer helper are designed to make connecting and transferring easy to follow.</p><h2>Pair once. Choose your destination.</h2><p>The current development builds include QR pairing, remembered devices and a destination picker. Choose files on your phone, or drag them into the computer helper, and follow the transfer progress.</p><h2>Phone and computer, working together.</h2><p>PhoneDrop is being developed for Android and macOS. A Windows helper is also in development; Windows compatibility testing is still pending.</p><p className="note">PhoneDrop is in development and is not yet available to download. Supported platforms, compatibility and release details will be confirmed when testing is complete.</p><h2>Questions about PhoneDrop?</h2><p><a href="mailto:support@jenuxlabs.com">support@jenuxlabs.com</a></p></article>
  </>;
}
