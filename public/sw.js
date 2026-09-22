/*
 * Service Worker — فیصل مسجد اسلام آباد (جامد سیاحتی رہنما)
 * مقصد: ابتدائی لوڈ کے بعد صفحات تیز دکھائیں اور کمزور نیٹ ورک پر بنیادی رسائی برقرار رہے۔
 * کوئی ذاتی ڈیٹا محفوظ نہیں کیا جاتا؛ صرف عوامی جامد فائلیں کیش ہوتی ہیں۔
 */
const CACHE_NAME = 'faisal-masjid-v1';
const OFFLINE_URL = '/';

const PRECACHE = [
  '/',
  '/site.webmanifest',
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE).catch(() => undefined))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // صفحات: پہلے نیٹ ورک، ناکامی پر کیش، پھر آف لائن صفحہ
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => undefined);
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // جامد اثاثے: پہلے کیش، پس منظر میں تازہ کاری
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.ok && response.type === 'basic') {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => undefined);
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
