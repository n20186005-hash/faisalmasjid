# پیکج کی حالت

یہ پیکج مکمل موجودہ سورس، Astro/Tailwind/TypeScript کنفیگریشن، Cloudflare Workers کنفیگریشن، قانونی صفحات، لوگو، favicon فائلیں، نقشہ embed، GA4 consent logic، تحقیقی نوٹس اور تصویری نسبت شامل کرتا ہے۔

## دو ماحول سے متعلق حدود

1. اس execution sandbox سے npm registry تک outbound network رسائی دستیاب نہیں تھی، اس لیے Astro 7.2.6 کے لیے حقیقی `pnpm-lock.yaml` pnpm کے ذریعے پیدا/تصدیق نہیں کیا جا سکا۔ جعلی یا ہاتھ سے گھڑا lockfile شامل نہیں کیا گیا۔
2. اسی پابندی کی وجہ سے Wikimedia Commons کی پانچ اصل تصویری binary فائلیں مقامی طور پر حاصل نہیں ہو سکیں۔ سائٹ فی الحال انہی حقیقی تصاویر کے قابلِ تصدیق URLs استعمال کرتی ہے۔ `scripts/vendor-photos.mjs` ان تصاویر کو عام internet-enabled ماحول میں `public/images/` میں محفوظ کر دیتا ہے۔

اس لیے اس archive کو ایسی چیز کے طور پر نہ سمجھا جائے جس نے اصل درخواست کا frozen-lockfile clean build gate پاس کر لیا ہو۔

## موجودہ اپ ڈیٹ میں شامل اضافے

- `src/data/site.ts`: ایک ہی مرکز میں پورا entity ڈیٹا — اردو/لاطینی نام، شہر، وفاقی علاقہ، ملک، پوسٹل کوڈ، متناسقات، فون، پلس کوڈ، گوگل نقشہ شیئر/ایمبیڈ لنک، سرکاری سیاحتی پورٹل، آس پاس کے بنیادی نشانات اور تازہ درجہ بندی (4.7 / 74,289)۔
- `src/pages/index.astro`: `TouristAttraction + Mosque` JSON-LD میں `@id`، `image`، `isAccessibleForFree`، `telephone`، `hasMap`، `sameAs`، `containedInPlace` اور مکمل `PostalAddress`؛ موجودہ `FAQPage` کے ساتھ دو نئے سوالات؛ H1 میں شہر، چار اہم H2 میں "نام + شہر" اور لاطینی ذیلی عنوان؛ شناختی پٹی (پاکستان › اسلام آباد کیپیٹل ٹیریٹری › اسلام آباد › فیصل مسجد)؛ مقام والے حصے میں نقشہ، فون، پلس کوڈ اور سرکاری سیاحتی پورٹل کا باہر جانے والا ربط۔
- `src/components/SourcesSection.astro`: نیا "حوالہ جاتی ماخذ" حصہ — CDA، Capital Mass Transit، PTDC، قومی اسمبلی، وکی پیڈیا اور گوگل نقشہ کے براہِ راست روابط۔
- PWA: `public/site.webmanifest`، `public/sw.js` (صفحات network-first، جامد اثاثے cache-first) اور `public/icons/icon-192|512(-maskable).png`؛ رجسٹریشن `BaseLayout` میں۔
- `public/_headers`: HSTS، X-Content-Type-Options، X-Frame-Options، Referrer-Policy، Permissions-Policy اور Google Maps / GA / Wikimedia کے ساتھ مطابقت رکھنے والی CSP۔
- `public/robots.txt`: `Sitemap: https://faisalmasjid.com/sitemap-index.xml` کا اضافہ؛ `astro.config.mjs` میں `site` اب بطورِ طے شدہ `https://faisalmasjid.com` ہے تاکہ canonical / OG / sitemap ہر تعمیر میں بنیں۔
