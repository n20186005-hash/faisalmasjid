import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// واحد ذریعہ: اصل ڈومین یہاں مقرر ہے (PUBLIC_SITE_URL سے اوور رائیڈ ممکن)۔
// یہ مقرر ہونے پر canonical/OG URL، hreflang اور sitemap خود بخود بنتے ہیں۔
const site = process.env.PUBLIC_SITE_URL?.trim() || 'https://faisalmasjid.com';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
