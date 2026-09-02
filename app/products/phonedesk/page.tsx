import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PhoneDesk',
  description: 'An Android desktop experience for a larger screen. PhoneDesk is in development at Jenux Labs.',
};

export default function PhoneDesk() {
  return <>
    <section className="page-hero"><p className="eyebrow">PHONEDESK · IN DEVELOPMENT</p><h1>A bigger workspace for your phone.</h1><p className="lede">An Android desktop experience in development, designed for a larger screen, keyboard and mouse.</p></section>
    <article className="content"><h2>Make more of the phone you have.</h2><p>PhoneDesk explores a familiar desktop layout for Android, bringing the phone into a workspace with more room to see and interact.</p><h2>Still taking shape.</h2><p>Desktop display, input and app launching are under active development. Device compatibility and connection options are still being tested.</p><p className="note">PhoneDesk is an experimental development project and is not yet available to download. Features and supported devices will be confirmed before release.</p><h2>Questions about PhoneDesk?</h2><p><a href="mailto:support@jenuxlabs.com">support@jenuxlabs.com</a></p></article>
  </>;
}
