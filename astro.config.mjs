import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// واحد ذریعہ: اصل ڈومین صرف PUBLIC_SITE_URL میں مقرر کریں۔
// خالی ہونے پر canonical/OG URL اور sitemap خود بخود چھوڑ دیے جاتے ہیں۔
const site = process.env.PUBLIC_SITE_URL?.trim() || undefined;

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
