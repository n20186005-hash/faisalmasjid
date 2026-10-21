import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({site:'https://faisalmasjid.com',output:'static',trailingSlash:'always',integrations:[sitemap({filter:url=>['https://faisalmasjid.com/','https://faisalmasjid.com/en/'].includes(url)})],vite:{plugins:[tailwindcss()]}});
