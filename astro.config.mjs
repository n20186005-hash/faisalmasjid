import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// واحد ذریعہ: اصل ڈومین یہاں مقرر ہے (PUBLIC_SITE_URL سے اوور رائیڈ ممکن)۔
// یہ مقرر ہونے پر canonical/OG URL، hreflang اور sitemap خود بخود بنتے ہیں۔
const site = process.env.PUBLIC_SITE_URL?.trim() || 'https://faisalmasjid.com';

/**
 * sitemap کی ترجیحات: قانونی صفحات کو کم ترجیح دے کر رینگنے کی توجہ
 * اردو ہوم پیج اور انگریزی ورژن پر مرکوز رکھی جاتی ہے۔
 */
const LAST_UPDATED = '2026-09-22';
const sitemapPriority = (pathname) => {
  if (pathname === '/') return 1;
  if (pathname === '/en/') return 0.9;
  if (['/privacy/', '/terms/', '/cookies/'].includes(pathname)) return 0.3;
  return 0.6;
};
const sitemapChangefreq = (pathname) =>
  ['/privacy/', '/terms/', '/cookies/'].includes(pathname) ? 'yearly' : 'weekly';

export default defineConfig({
  site,
  // موسم کا ریئل ٹائم ماڈیول سرور سائیڈ (Cloudflare Workers) پر چلتا ہے،
  // اس لیے سائٹ کو 'server' آؤٹ پٹ + cloudflare ایڈاپٹر کے ساتھ تعمیر کیا گیا ہے۔
  // تمام مواد والے صفحات پری رینڈر (static) رہتے ہیں؛ صرف /api/weather سرور سائیڈ چلتا ہے۔
  output: 'server',
  adapter: cloudflare({}),
  trailingSlash: 'always',
  integrations: site
    ? [
        sitemap({
          serialize(item) {
            const pathname = new URL(item.url).pathname;
            return {
              ...item,
              lastmod: LAST_UPDATED,
              changefreq: sitemapChangefreq(pathname),
              priority: sitemapPriority(pathname),
            };
          },
        }),
      ]
    : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
