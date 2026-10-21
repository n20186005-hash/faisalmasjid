// Retire only this site's legacy cache and service-worker registration.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('faisal-masjid-'))await caches.delete(key);await self.registration.unregister();const clients=await self.clients.matchAll();for(const client of clients)client.postMessage({type:'faisal-legacy-cache-retired'});})()));
