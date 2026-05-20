// Service Worker — Daniela Gaia App
const CACHE = 'dg-v1';
const ASSETS = ['/', '/index.html', '/css/app.css', '/js/app.js', '/js/data.js', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
