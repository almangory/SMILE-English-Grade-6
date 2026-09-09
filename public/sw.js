// NAQLA English App - Service Worker for 100% Offline Capability
const CACHE_NAME = 'naqla-english-v3';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.png',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/icon-192.png',
  '/icon-512.png',
  '/illustrations/unit1_back_to_school.jpg',
  '/illustrations/unit1_lesson2_holiday.jpg',
  '/illustrations/unit1_lesson3_nile.jpg',
  '/illustrations/unit1_lesson6_sukkar_escape.jpg',
  '/illustrations/unit1_lesson7_independence.jpg',
  '/illustrations/unit1_ostrich_desert.jpg',
  '/illustrations/unit1_secretary_bird.jpg',
  '/illustrations/unit1_sukkar_monkey.jpg',
  '/illustrations/unit2_lesson2_history_numbers.jpg',
  '/illustrations/unit2_lesson3_body_numbers.jpg',
  '/illustrations/unit2_lesson5_pyramids_trip.jpg',
  '/illustrations/unit2_lesson6_bad_dream.jpg',
  '/illustrations/unit2_lesson7_maths_jobs.jpg',
  '/illustrations/unit2_lesson8_revision.jpg',
  '/illustrations/unit2_maths_life.jpg',
  '/illustrations/unit2_thirsty_crow.jpg',
  '/illustrations/unit3_da_vinci.jpg',
  '/illustrations/unit3_inventions.jpg',
  '/illustrations/unit3_lesson1_travel.jpg',
  '/illustrations/unit3_lesson3_vaccines.jpg',
  '/illustrations/unit3_lesson5_winter_traveller.jpg',
  '/illustrations/unit3_lesson6_stone_soup.jpg',
  '/illustrations/unit4_colosseum.jpg',
  '/illustrations/unit4_meroe_pyramids.jpg',
  '/illustrations/unit4_taj_mahal.jpg',
  '/illustrations/unit5_falcon_wren.jpg',
  '/illustrations/unit5_special_days.jpg',
  '/illustrations/unit5_sudanese_wedding.jpg',
  '/illustrations/unit6_health.jpg',
  '/illustrations/unit7_fox_crow.jpg',
  '/illustrations/unit7_green_earth.jpg',
  '/illustrations/unit7_history_writing.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Precaching core static assets for offline use...');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Non-critical precache fetch issue:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing old cache version:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Ignore non-GET requests or chrome-extension URLs
  if (req.method !== 'GET' || !req.url.startsWith('http')) return;

  // Handle SPA navigation requests
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Cache-First strategy for static assets
  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(req).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // Cache dynamically fetched assets
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(req, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        if (req.destination === 'image') {
          return caches.match('/favicon.png');
        }
      });
    })
  );
});
