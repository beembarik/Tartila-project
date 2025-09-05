const CACHE_NAME = 'Tartila-v1';
const urlsToCache = [
  '/',
  '/learn',
  '/quiz',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/assets/audio/alif.mp3',
  '/assets/audio/ba.mp3',
  '/assets/audio/ha.mp3',
  '/assets/audio/jim.mp3',
  '/assets/audio/ta.mp3',
  '/assets/audio/tha.mp3',
  '/assets/hero-background.jpg',
  '/assets/Tartila Logo.png',
  '/assets/Logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});