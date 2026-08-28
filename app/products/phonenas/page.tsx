import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'PhoneNAS',
  description: 'Turn an Android device into practical network storage. PhoneNAS is in development at Jenux Labs.',
};
export default function PhoneNAS() {
  return <>
    <section className="page-hero"><p className="eyebrow">PHONENAS · IN DEVELOPMENT</p><h1>Turn your Android phone into network storage.</h1><p className="lede">Reuse storage you already own on your local network.</p></section>
    <article className="content"><h2>Give your phone another useful job.</h2><p>PhoneNAS is being developed to share selected Android storage with compatible computers over a local network, using SMB file sharing.</p><h2>Choose what you share.</h2><p>The current development work includes multiple users and shared folders. Access controls, automatic discovery and device compatibility are being tested before release.</p><p className="note">PhoneNAS is in development and is not yet available to download. Supported Android versions, storage options and client compatibility will be confirmed after testing.</p><h2>Questions about PhoneNAS?</h2><h3>Can it use an SD card or USB drive?</h3><p>Storage availability depends on the phone and the folders Android makes available. Final support details will be published with the release.</p><h3>How fast is it?</h3><p>Performance depends on the phone, storage, network and computer. We will publish measured results when testing is complete.</p><h3>Is it available outside my home network?</h3><p>PhoneNAS is being developed for local network use. Do not expose a development server directly to the internet.</p><h2>Support</h2><p><a href="mailto:support@jenuxlabs.com">support@jenuxlabs.com</a></p></article>
  </>;
}
