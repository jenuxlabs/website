export const dynamic = 'force-static';

export default function Privacy() {
  return <>
    <section className="page-hero"><p className="eyebrow">PRIVACY</p><h1>Clear, product-specific privacy.</h1><p className="lede">What stays local, what third-party services may process, and the choices available to you.</p></section>
    <article className="content">
      <p>Last updated: 11 October 2026</p>
      <h2 id="phonedrop">PhoneDrop · Windows 1.0.8, macOS 1.0.5, Android 1.0.9 testing</h2>
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
      <h2 id="mindgallery">MindGallery · Android closed testing</h2>
      <p>MindGallery is an Aves-based photo and video gallery in closed testing. The current Libre test build does not include advertising, in-app billing or Crashlytics reporting. Some optional map and worker features can still communicate with services or devices you choose, as described below.</p>
      <h3>Media and information stored on your devices</h3>
      <p>When you grant media or selected-folder access, MindGallery reads photos and videos and their available names, paths and metadata, which may include EXIF location coordinates. It builds a searchable library on the phone. Depending on features you use, app data can include OCR text, image descriptions and tags, face crops and numeric face embeddings, people names, confirmed assignments and unconfirmed suggestions, search/index records and scan checkpoints. Originals stay in your media library; indexing does not require uploading them to Jenux Labs.</p>
      <h3>Google ML Kit diagnostics and usage metrics</h3>
      <p>MindGallery includes Google’s bundled on-device ML Kit SDKs for face detection (16.1.7), text recognition (16.0.1) and image labeling (17.0.9). Google says the image, video or text inputs and the inference results are processed on the device and are not sent to Google. When these features run, ML Kit separately sends Google technical data for diagnostics and usage analytics. For bundled ML Kit features, Google lists device details (such as manufacturer, model, Android version/build and available hardware accelerators), app package name and version, a per-installation identifier not intended to uniquely identify a person or physical device, performance and latency, API configuration (such as image format and resolution), input/output sizes, feature version, event types and error codes. Google says this metrics traffic is encrypted in transit using HTTPS and is not transferred to third parties. ML Kit may also contact Google for bug fixes, model updates and hardware-compatibility information. Disabling Crashlytics does not disable ML Kit’s separate collection. See <a href="https://developers.google.com/ml-kit/terms">ML Kit Terms &amp; Privacy</a> and Google’s <a href="https://developers.google.com/ml-kit/android-data-disclosure">ML Kit data-disclosure details</a>.</p>
      <p>You can also choose a library folder for portable <code>.JENUXAI</code> data. Derived records written there are outside the app’s private storage. Clearing MindGallery’s app storage or uninstalling it does not necessarily remove those folder records, your original media or Android backups.</p>
      <h3>Android backup and device transfer</h3>
      <p>The Android build allows system backup and includes app files, databases and preferences in its backup rules, except for designated secret preferences. If Android cloud backup or device transfer is enabled, app-owned information may therefore be copied or restored by the backup service configured on your device. That service’s provider, settings and retention rules apply.</p>
      <h3>Optional Mac worker on your local network</h3>
      <p>If you enable a nearby worker and select a Mac, MindGallery can send the inputs needed for requested OCR, image or video analysis directly to that worker—for example, resized images or face crops, video-derived frames, audio-analysis windows and related scan metadata. The Android-to-worker connection uses plain HTTP, not end-to-end encryption. Use only a network and Mac you trust; do not expose the worker to the public internet. Jenux Labs does not relay these jobs through a hosted photo-processing service.</p>
      <p>The Mac processes the job and returns derived results for the phone’s index. The worker may create temporary working files and local processing or diagnostic records. It attempts to clean temporary job files, but a crash or cleanup failure can leave data behind; the Mac’s owner controls its storage, logs and retention. Removing data from the phone does not remove any worker-side copy.</p>
      <h3>Maps, geocoding and people suggestions</h3>
      <p>Photo location metadata is used on the device for library features. If you ask for an address lookup or use a map, coordinates or map requests may be handled by the geocoder or mapping provider configured on your Android device, which may involve Google Play services. That provider’s privacy terms apply.</p>
      <p>Face detection and grouping can be mistaken. Suggested groups are not verified identities; review and edit them yourself. Face crops, embeddings, names and your confirmed or rejected choices are part of the library data described above.</p>
      <h3>Clearing MindGallery data</h3>
      <p>Android’s Clear storage or uninstall controls remove the app’s on-device private data, but do not necessarily clear <code>.JENUXAI</code> records in selected folders, original photos and videos, worker-side files or backups already made by Android. For a more complete cleanup, remove the app data and separately review selected folders, the configured Mac worker and your device-backup settings.</p>
      <p>For MindGallery privacy questions or deletion help, contact <a href="mailto:privacy@jenuxlabs.com">privacy@jenuxlabs.com</a>.</p>
      <h2 id="pcam">P-CAM · preview builds</h2>
      <p>P-CAM discovers participating cameras and Directors on your local network. Camera previews, control messages and project-transfer data travel between devices you choose. Full-quality recordings are stored on the camera device until you copy or remove them.</p>
      <p>The current Android preview includes Google Mobile Ads and Google’s consent tools. Google and its partners may process advertising identifiers, device information, approximate location inferred from network information, ad interactions and diagnostics according to your region and choices. The Mac preview does not display advertising.</p>
      <h2>Retention and your choices</h2>
      <p>PhoneDrop’s app-owned settings and records remain on your device until you remove pairings, reset the app, clear its storage or uninstall it. Received files remain in the PhoneDrop folder until you delete them. Third-party retention is governed by the applicable provider’s policies and your consent choices.</p>
      <h2>Contact</h2>
      <p>Privacy questions: <a href="mailto:privacy@jenuxlabs.com">privacy@jenuxlabs.com</a>.</p>
    </article>
  </>;
}
