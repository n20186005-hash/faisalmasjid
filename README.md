# فیصل مسجد رہنما — Astro / Tailwind / TypeScript

اسلام آباد کی فیصل مسجد کے لیے اردو RTL، غیر منافع بخش، single-attraction information site۔ مرکزی landing page کے علاوہ رازداری، شرائط اور کوکی ترتیبات الگ صفحات ہیں۔

## مقررہ runtime اور پیکیجز

- Node.js: `24.19.0`
- pnpm: `11.23.0`
- Astro: `7.2.6`
- Tailwind CSS / Vite plugin: `4.3.3`
- TypeScript: `6.0.3` (`@astrojs/check` کے supported peer range میں)
- Wrangler: `4.125.0`

## ڈومین کی واحد ترتیب

اصل site URL صرف environment variable میں دیں:

```bash
PUBLIC_SITE_URL=https://آپ-کا-اصل-ڈومین pnpm build
```

`PUBLIC_SITE_URL` خالی ہونے پر build نہیں رکتا؛ canonical، `og:url` اور JSON-LD کا `url` چھوڑ دیا جاتا ہے، اور sitemap integration فعال نہیں ہوتی۔ کوڈ میں کوئی placeholder domain fallback نہیں ہے۔

## مقامی ترقی

```bash
corepack enable
corepack prepare pnpm@11.23.0 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm dev
```

## Cloudflare Workers static assets deployment

```bash
pnpm build
pnpm exec wrangler deploy
```

`wrangler.jsonc` ایک asset-only Worker deployment استعمال کرتا ہے؛ database، login یا CMS شامل نہیں۔

## سخت self-check

```bash
pnpm verify
```

اس script میں `node_modules`/`dist` حذف، frozen install، `astro check`، build، workspace guard، forbidden URL grep اور sitemap checks شامل ہیں۔

## تصاویر

اصل تصاویر Wikimedia Commons کے آزاد لائسنس والے ماخذ سے ہیں۔ تفصیل `ATTRIBUTION.md` میں ہے۔ بیرونی تصاویر کو مکمل طور پر localize کرنے کے لیے `src/data/site.ts` میں image URLs کو `public/images/` کی اپنی files سے بدلیں؛ credits برقرار رکھیں۔
