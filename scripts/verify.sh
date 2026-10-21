#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
./node_modules/.bin/astro check
./node_modules/.bin/astro build
node -e "const fs=require('fs'); for (const p of ['dist/index.html','dist/en/index.html','dist/404.html','dist/sitemap-index.xml','dist/js/consent.js']) { if(!fs.existsSync(p)) throw Error('Missing output '+p); }"
