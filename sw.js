// Service worker: permite instalar como app e abrir mais rápido.
// Rede primeiro (sempre a versão mais nova); cache só como reserva offline.
const CACHE = 'baterias-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.includes('googleapis.com') || url.hostname.includes('firebase')) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok && (url.origin === location.origin || /unpkg|sheetjs|gstatic/.test(url.hostname))) {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req))
  );
});
