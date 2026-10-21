(async () => {
  if (!('serviceWorker' in navigator)) return;
  try {
    for (const registration of await navigator.serviceWorker.getRegistrations()) {
      const worker = registration.active || registration.waiting || registration.installing;
      if (!worker) continue;
      const url = new URL(worker.scriptURL);
      if (url.origin !== location.origin || url.pathname !== '/sw.js') continue;
      if ('caches' in window) for (const key of await caches.keys()) if (key.startsWith('faisal-masjid-')) await caches.delete(key);
      await registration.unregister();
    }
  } catch { /* Leave unrelated registrations and caches untouched. */ }
})();
