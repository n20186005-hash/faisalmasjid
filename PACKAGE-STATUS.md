# پیکج کی حالت

یہ پیکج مکمل موجودہ سورس، Astro/Tailwind/TypeScript کنفیگریشن، Cloudflare Workers کنفیگریشن، قانونی صفحات، لوگو، favicon فائلیں، نقشہ embed، GA4 consent logic، تحقیقی نوٹس اور تصویری نسبت شامل کرتا ہے۔

## دو ماحول سے متعلق حدود

1. اس execution sandbox سے npm registry تک outbound network رسائی دستیاب نہیں تھی، اس لیے Astro 7.2.6 کے لیے حقیقی `pnpm-lock.yaml` pnpm کے ذریعے پیدا/تصدیق نہیں کیا جا سکا۔ جعلی یا ہاتھ سے گھڑا lockfile شامل نہیں کیا گیا۔
2. اسی پابندی کی وجہ سے Wikimedia Commons کی پانچ اصل تصویری binary فائلیں مقامی طور پر حاصل نہیں ہو سکیں۔ سائٹ فی الحال انہی حقیقی تصاویر کے قابلِ تصدیق URLs استعمال کرتی ہے۔ `scripts/vendor-photos.mjs` ان تصاویر کو عام internet-enabled ماحول میں `public/images/` میں محفوظ کر دیتا ہے۔

اس لیے اس archive کو ایسی چیز کے طور پر نہ سمجھا جائے جس نے اصل درخواست کا frozen-lockfile clean build gate پاس کر لیا ہو۔
