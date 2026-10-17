export type Download = { platform: string; version: string; detail: string; href?: string; label?: string };
export type Product = { id: string; name: string; icon: string; verb: string; status: string; summary: string; headline: string; intro: string; features: [string, string][]; downloads: Download[]; note: string; screens?: { src: string; caption: string }[] };
export const products: Product[] = [
  { id: 'phonedrop', name: 'PhoneDrop', icon: '/phonedrop/logo.png', verb: 'Move', status: 'Desktop available · Android testing',
    summary: 'Files from phone to computer. Or the other way around. Directly over your local network.',
    headline: 'Send it across the room.',
    intro: 'Move files between Android, Mac and Windows without uploading them to a cloud drive. Pick a device, choose your files, and follow the transfer.',
    features: [
      ['One familiar flow', 'Send from the app or Android’s Share menu. Nearby devices, pairing and recent transfers stay close at hand.'],
      ['Watch it move', 'See progress and transfer speed, and stop a transfer when you need to.'],
      ['Your local network', 'No PhoneDrop account or hosted file relay. Use devices and networks you trust.']
    ],
    downloads: [
      { platform: 'macOS', version: '1.0.5 · build 2756', detail: 'macOS 13+ · Intel + Apple silicon · Developer ID signed & Apple-notarized', href: '/files/PhoneDrop-1.0.5-macOS.dmg', label: 'Download for Mac' },
      { platform: 'Windows', version: '1.0.8', detail: 'Current Windows installer', href: '/phonedrop/PhoneDrop-Setup-1.0.8.exe', label: 'Download for Windows' },
      { platform: 'Android', version: 'Closed testing', detail: 'Tester access required · Google Play supplies the available version', href: 'https://play.google.com/apps/testing/labs.jenux.phonedrop', label: 'Google Play test' }
    ],
    note: 'These are the current distributed desktop builds. A coordinated security update is being tested; it is not included in these downloads. Keep transfers on trusted networks and retain originals until you have checked the copies.',
    screens: [{ src: '/phonedrop/devices.jpg', caption: 'Nearby and paired devices' }, { src: '/phonedrop/speed.jpg', caption: 'Transfer progress and speed' }, { src: '/phonedrop/activity.jpg', caption: 'Recent activity' }]
  },
  { id: 'phonenas', name: 'PhoneNAS', icon: '/phonenas/icon.png', verb: 'Share', status: 'Android beta · Mac helper available',
    summary: 'Give spare Android storage a new job. Share chosen folders with your computers over SMB.',
    headline: 'Small phone. Useful storage.',
    intro: 'Turn selected folders on an Android phone or attached drive into network shares. Open them from your computer with familiar SMB tools.',
    features: [
      ['Choose the folders', 'Create named shares for the storage you select. Attached drives depend on the phone and Android’s storage permissions.'],
      ['Decide who gets in', 'Named users, share permissions and optional home folders keep access explicit.'],
      ['Connect your way', 'Use your computer’s network tools, or the optional Mac helper for discovery and a convenient Finder entry.']
    ],
    downloads: [
      { platform: 'Android', version: 'Closed testing', detail: '1.0.5 (1005) submitted to testing review · availability depends on Google Play', href: 'https://play.google.com/apps/testing/com.phonenas.app', label: 'Google Play test' },
      { platform: 'macOS helper', version: '1.3 · build 9', detail: 'macOS 13+ · Intel + Apple silicon · Developer ID signed & Apple-notarized', href: '/files/PhoneNAS-Helper-1.3-build9-macOS.dmg', label: 'Download Mac helper' }
    ],
    note: 'The Mac helper is optional and relays SMB locally while running. Use the server address shown by PhoneNAS for direct access. Keep SMB and web-management ports off the public internet.',
    screens: [{ src: '/phonenas/home-093.png', caption: 'Server status' }, { src: '/phonenas/overview.jpg', caption: 'Storage overview' }, { src: '/phonenas/shares.jpg', caption: 'Selected shares' }]
  },
  { id: 'mindgallery', name: 'MindGallery', icon: '/mindgallery/icon.png', verb: 'Find', status: 'Mac beta · Android & iOS testing',
    summary: 'Find the photo you remember. Local-first browsing, text recognition and a searchable library.',
    headline: 'Less scrolling. More finding.',
    intro: 'A photo library with useful ways back into it: text in an image, its date, location or indexed details. Built on Aves, with a growing family of desktop and mobile companions.',
    features: [
      ['A gallery first', 'Browse photos and videos, inspect details, and search the library without reorganising every folder.'],
      ['Search what’s inside', 'OCR and image analysis add searchable information. Available features vary by platform and test build.'],
      ['Your own computers', 'Optional local workers help with analysis. Choose a trusted computer and network; see the privacy notes before enabling them.']
    ],
    downloads: [
      { platform: 'Android', version: 'Closed testing · access pending', detail: 'The next Play release is not live yet · testing availability is limited', href: 'https://play.google.com/apps/testing/com.jenuxlabs.mindgallery', label: 'Check Google Play' },
      { platform: 'macOS', version: '1.15.25 · build 340 beta', detail: 'macOS 13+ · Intel + Apple silicon · signed & notarized · 40.5 MB via GitHub', href: 'https://github.com/jenuxlabs/website/releases/download/mac-apps-2026-10-17/MindGallery-1.15.25-build340-macOS.dmg', label: 'Download Mac beta' },
      { platform: 'iPhone + iPad', version: '1.15.21 · build 33508', detail: 'Uploaded to TestFlight · invitation required; no public invite link yet' }
    ],
    note: 'The Mac download is a beta, not an App Store release. Faces are currently disabled and the build expires on 31 December 2026. Keep backups of your library. iOS remains invitation-only; the next Android Play release is not live yet. Features and helper support vary by platform.'
  },
  { id: 'pcam', name: 'PhoneMulticam', icon: '/pcam/icon.png', verb: 'Record', status: 'Early preview · formerly P-CAM',
    summary: 'Put your phones behind the camera. A local multi-camera setup with a Mac Director and project library.',
    headline: 'More angles. Same room.',
    intro: 'Use phones as cameras and a Mac as your Director. Monitor views, prepare takes, and keep original recordings on the camera devices.',
    features: [
      ['Camera', 'Record locally on the phone. Camera formats and resolution depend on the device and build.'],
      ['Director', 'Bring camera views together and coordinate recording. The Mac preview includes updated iOS preparation checks.'],
      ['Library', 'Collect supported projects on the Mac with transfer verification. Android-to-Mac collection is not yet compatible with this preview.']
    ],
    downloads: [
      { platform: 'macOS', version: '0.5.1 · build 12 preview', detail: 'macOS 13+ · Intel + Apple silicon · Developer ID signed & Apple-notarized', href: '/files/PhoneMulticam-0.5.1-build12-macOS.dmg', label: 'Download early preview' },
      { platform: 'Android', version: 'Closed testing', detail: 'Tester access required · the store may still use the P-CAM name', href: 'https://play.google.com/apps/testing/com.jenuxlabs.phonecam', label: 'Google Play test' },
      { platform: 'iPhone + iPad', version: 'Device testing', detail: 'iOS interoperability work is underway; no public install link yet' }
    ],
    note: 'Early testing only, not for an irreplaceable shoot. Wi-Fi discovery and connection issues remain under investigation. Mixed-device recording and saving still need physical acceptance tests. Android collection and Live Production are not available in this Mac preview.'
  }
];
export function product(id: string): Product {
  const found = products.find(item => item.id === id);
  if (!found) throw new Error('Unknown product: ' + id);
  return found;
}
