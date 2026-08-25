#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build

if [[ -f pnpm-workspace.yaml ]]; then
  if ! grep -Eq '^packages:' pnpm-workspace.yaml || ! grep -Eq "['\"]?\.['\"]?" pnpm-workspace.yaml; then
    echo "pnpm-workspace.yaml موجود ہے لیکن packages میں '.' شامل نہیں۔" >&2
    exit 1
  fi
fi

if grep -RInE 'example\.com|localhost|chrome-extension://' dist; then
  echo "ممنوع placeholder/extension URL تعمیر شدہ فائلوں میں ملا۔" >&2
  exit 1
fi

if find dist -maxdepth 2 -type f \( -name 'sitemap*.xml' -o -name 'sitemap*.xml.gz' \) | grep -q .; then
  if grep -RIn '<lastmod>' dist/sitemap*.xml 2>/dev/null; then
    echo "sitemap میں lastmod نہیں ہونا چاہیے۔" >&2
    exit 1
  fi
  if grep -RInE 'example\.com|localhost' dist/sitemap*.xml 2>/dev/null; then
    echo "sitemap میں غیر حقیقی URL ملا۔" >&2
    exit 1
  fi
fi

echo "تمام تصدیقی مراحل کامیاب۔"
