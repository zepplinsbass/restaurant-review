const cachedFiles = [
  '.',
  'css/styles.css',
  'js/restaurant_info.js',
  'js/main.js',
  'js/worker_registration.js',
  'js/dbhelper.js',
  'restaurant.html',
  'index.html'
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg'
];

const staticCacheName = 'restaurant-cache-v1';

self.addEventListener('install', function(evt) {
  evt.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(cachedFiles);
    })
  );
});

self.addEventListener('activate', async function(evt) {
  evt.waitUntil(
    await caches.keys().then((results) => {
      return Promise.all(
        results.filter((result) => result.startsWith('restaurant-') && result != staticCacheName)
        .map((result) => caches.delete(result))
      )}
    )
  )
});

self.addEventListener('fetch', async function(evt) {
  evt.respondWith(
    await caches.match(evt.request)
    .then((response) => {
      return response || fetch(evt.request);
    })
  );
});
