#!/bin/zsh
set -euo pipefail
for dmg in "$@"; do
  echo "PACKAGE: $dmg"
  shasum -a 256 "$dmg"
  hdiutil verify "$dmg" >/dev/null
  xcrun stapler validate "$dmg"
  spctl --assess --type open --context context:primary-signature -vv "$dmg"
  mount_dir=$(mktemp -d /private/tmp/jenux-mac-audit.XXXXXX)
  trap 'hdiutil detach "$mount_dir" >/dev/null 2>&1 || true; rmdir "$mount_dir" 2>/dev/null || true' EXIT
  hdiutil attach -readonly -nobrowse -mountpoint "$mount_dir" "$dmg" >/dev/null
  for app in "$mount_dir"/*.app; do
    codesign --verify --deep --strict "$app"
    spctl --assess --type execute -vv "$app"
    /usr/libexec/PlistBuddy -c 'Print :CFBundleShortVersionString' "$app/Contents/Info.plist"
    /usr/libexec/PlistBuddy -c 'Print :CFBundleVersion' "$app/Contents/Info.plist"
    /usr/libexec/PlistBuddy -c 'Print :LSMinimumSystemVersion' "$app/Contents/Info.plist"
    executable=$(/usr/libexec/PlistBuddy -c 'Print :CFBundleExecutable' "$app/Contents/Info.plist")
    lipo -archs "$app/Contents/MacOS/$executable"
  done
  hdiutil detach "$mount_dir" >/dev/null
  rmdir "$mount_dir"
  trap - EXIT
done
