export const dynamic = 'force-static';

export default function Support() {
  return <>
    <section className="page-hero"><p className="eyebrow">SUPPORT</p><h1>How can we help?</h1><p className="lede">Product support, beta feedback and practical troubleshooting.</p></section>
    <article className="content">
      <h2>PhoneDrop support</h2>
      <p>Include PhoneDrop version, device model, operating system and a short description of what happened. If discovery is the problem, tell us whether both devices share the same Wi‑Fi, LAN or phone hotspot.</p>
      <p className="note">Never email private files, passwords, pairing secrets or information you do not want included in a support message.</p>
      <p><a className="button" href="mailto:support@jenuxlabs.com?subject=PhoneDrop%20support">Email PhoneDrop support</a></p>
      <h2>Feature ideas</h2>
      <p>Tell us what would make PhoneDrop better. The app’s Feedback button opens your own email app so you can review everything before sending.</p>
      <h2>PhoneNAS support</h2>
      <p>For beta feedback, include the product version, device model, operating-system version and the exact step that did not work. MindGallery and P-CAM reports are welcome; please remember that both are still test-stage products.</p>
      <h2>General enquiries</h2>
      <p><a href="mailto:hello@jenuxlabs.com">hello@jenuxlabs.com</a></p>
    </article>
  </>;
}
