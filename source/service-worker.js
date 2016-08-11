console.log('test new worker');

self.addEventListener('install', function(event) {
  console.log('install2', event);
});

self.addEventListener('activate', function(event) {
  console.log('activate2', event);
});

self.addEventListener('push', function(event) {
  event.waitUntil(
    self.registration.showNotification('ServiceWorker 4324fdsafd32fdsa', {
      body: 'Alea iacta est',
    })
  );
});
