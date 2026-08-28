import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy information for the Jenux Labs website and apps in development.',
};

export default function Privacy() {
  return <>
    <section className="page-hero"><p className="eyebrow">PRIVACY</p><h1>Clear privacy information.</h1></section>
    <article className="content">
      <p>Last updated: 28 August 2026</p>
      <h2>Website</h2>
      <p>This static website does not currently provide accounts, forms, advertising or product analytics. Normal hosting and network infrastructure may process technical request data needed to deliver and secure the site.</p>
      <h2 id="phonenas">Apps in development</h2>
      <p>PhoneNAS, PhoneDrop and PhoneDesk are in development and are not yet available to download publicly. This website notice is not an app-specific privacy policy.</p>
      <p>Each app needs a privacy notice describing the data handled by its released version, including any advertising or payment services it uses. Development builds can differ; refer to the information supplied with the specific build you are testing.</p>
      <h2>Contact</h2>
      <p>Privacy questions: <a href="mailto:privacy@jenuxlabs.com">privacy@jenuxlabs.com</a>.</p>
      <p>Please do not send passwords, pairing keys or private files by email.</p>
    </article>
  </>;
}
