export default function Privacy() {
  return <>
    <section className="page-hero"><p className="eyebrow">PRIVACY</p><h1>Clear, product-specific privacy.</h1><p className="lede">What Jenux Labs apps keep local, what third-party services may process, and the choices available to you.</p></section>
    <article className="content">
      <p>Last updated: 8 October 2026</p>
      <h2 id="phonedrop">PhoneDrop 1.0.3</h2>
      <p>PhoneDrop transfers files directly between devices that can reach each other on the same local network. Jenux Labs does not operate a file-transfer relay and does not receive the contents of your transfers.</p>
      <ul>
        <li><strong>Files and file names:</strong> files you choose, their names, sizes and transfer instructions are sent to the destination device you select. They are not uploaded to Jenux Labs.</li>
        <li><strong>Local discovery:</strong> PhoneDrop advertises and discovers device identity, availability and transfer capability on your local network. Nearby PhoneDrop devices may see the device name you choose.</li>
        <li><strong>Pairing:</strong> trusted-device records are stored locally on the paired devices. You can remove individual pairings or reset PhoneDrop from Settings.</li>
        <li><strong>Activity and settings:</strong> recent transfer activity, preferences, the saved device name and aggregate on-device transfer statistics are stored locally. Reset PhoneDrop removes these records but does not delete received files.</li>
        <li><strong>Feedback:</strong> PhoneDrop opens your device’s email application with a message you can review. Nothing is sent unless you choose to send that email.</li>
      </ul>
      <h2>Advertising, consent and purchases on Android</h2>
      <p>The free Android experience uses Google Mobile Ads. Google and its advertising partners may process information such as advertising identifiers, device information, approximate location inferred from network information, ad interactions and diagnostics according to your region, consent choices and Google’s policies. PhoneDrop uses Google’s User Messaging Platform to request and store applicable privacy choices before requesting ads.</p>
      <p>PhoneDrop Pro removes advertising. In-app purchase status is handled through Google Play Billing; Jenux Labs does not receive your payment-card details. Google Play may provide the app with purchase status and transaction identifiers needed to activate or restore Pro.</p>
      <p>You can revisit available advertising privacy choices from PhoneDrop Settings. You can also manage advertising settings through Android and your Google account. See <a href="https://policies.google.com/privacy">Google’s Privacy Policy</a>.</p>
      <h2>Desktop apps</h2>
      <p>The Windows and macOS versions do not display advertising. They use local-network discovery, pairing and direct transfer features and keep their PhoneDrop preferences and trust records on the device.</p>
      <h2>Website</h2>
      <p>This website does not provide user accounts or upload forms and does not display advertising. Normal hosting and security infrastructure may process technical request data such as IP address, browser information, requested pages and timestamps to deliver and protect the site and its downloads.</p>
      <h2 id="phonenas">PhoneNAS 1.0.2</h2>
      <p>PhoneNAS operates an SMB file server on your local network. It accesses only folders and attached storage that you explicitly select through Android’s system storage picker. File contents and SMB traffic travel directly between your devices; Jenux Labs does not operate a relay and does not receive your files.</p>
      <ul>
        <li><strong>Shares and users:</strong> share definitions, SMB usernames, password verifiers, permissions, home-folder settings and local management settings are stored on the Android device.</li>
        <li><strong>Local discovery:</strong> PhoneNAS may advertise its name, local address and availability to devices on the same network so computers and the optional Mac helper can find it.</li>
        <li><strong>Activity:</strong> connection and server events shown by PhoneNAS are kept locally for operation and troubleshooting.</li>
        <li><strong>Web management:</strong> when enabled, management runs from the phone on the local network. Your browser connects directly to the phone; Jenux Labs does not host the management session.</li>
        <li><strong>Network trash:</strong> if enabled, deleted files are retained on the selected storage according to the period you choose. Turning trash off or emptying it removes that recovery layer.</li>
      </ul>
      <p>The Android release uses Google Mobile Ads and Google Play Billing for the optional ad-free Pro upgrade. The advertising, consent and purchase information described above also applies to PhoneNAS. The optional Mac helper contains no advertising and relays SMB traffic locally while it is running.</p>
      <h2 id="phonedesk">PhoneDesk development build</h2>
      <p>PhoneDesk remains in development. Its current builds use local-network connectivity between devices for screen and control features. Its data handling and final permissions will be reviewed and documented before release.</p>
      <h2>Retention and your choices</h2>
      <p>PhoneDrop’s app-owned settings and records remain on your device until you remove pairings, reset the app, clear its storage or uninstall it. Received files remain in the PhoneDrop folder until you delete them. Third-party retention is governed by the applicable provider’s policies and your consent choices.</p>
      <h2>Contact</h2>
      <p>Privacy questions: <a href="mailto:privacy@jenuxlabs.com">privacy@jenuxlabs.com</a>.</p>
    </article>
  </>;
}
