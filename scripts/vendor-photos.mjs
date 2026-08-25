import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const outDir = resolve('public/images');
await mkdir(outDir, { recursive: true });

const photos = [
  ['faisal-mosque-hero.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Faisal_Mosque_islamabad_01.jpg/1280px-Faisal_Mosque_islamabad_01.jpg'],
  ['faisal-mosque-courtyard.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Shah_Faisal_Mosque_Courtyard%2C_Islamabad.jpg/1280px-Shah_Faisal_Mosque_Courtyard%2C_Islamabad.jpg'],
  ['faisal-mosque-interior.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/The_Quran_at_Faisal_Mosque_main_hall.jpg/1280px-The_Quran_at_Faisal_Mosque_main_hall.jpg'],
  ['faisal-mosque-night.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Faisal_Mosque_islamabad_11.jpg/1280px-Faisal_Mosque_islamabad_11.jpg'],
  ['faisal-mosque-dusk.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Faisal_Mosque_islamabad_16.jpg/1280px-Faisal_Mosque_islamabad_16.jpg'],
];

for (const [name, url] of photos) {
  const response = await fetch(url, { headers: { 'User-Agent': 'FaisalMasjidGuide/1.0 (non-profit educational site)' } });
  if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
  const type = response.headers.get('content-type') || '';
  if (!type.startsWith('image/')) throw new Error(`${name}: unexpected content-type ${type}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 10_000) throw new Error(`${name}: suspiciously small image (${bytes.length} bytes)`);
  await writeFile(resolve(outDir, name), bytes);
  console.log(`${name}: ${bytes.length} bytes`);
}

console.log('Real-photo assets downloaded. Update src/data/site.ts to /images/... paths before deploying a fully local build.');
