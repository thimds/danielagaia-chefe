// Service Worker v2 — Daniela Gaia App
// Cache agressivo — tudo local após primeira visita
const CACHE = 'dg-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/css/app.css',
  '/js/app.js',
  '/js/data.js',
  '/manifest.json'
];

// Instala e faz cache de todos os assets na primeira visita
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

// Ativa e limpa caches antigos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first: serve do cache, busca na rede só se não tiver
self.addEventListener('fetch', e => {
  // Não intercepta chamadas à API do Claude
  if (e.request.url.includes('anthropic.com')) return;
  
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Salva no cache para próxima vez
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      });
    })
  );
});
