
var cacheName = 'infosys-pwa';  
var filesToCache = [  
                    '/pwa/',  
                    '/pwa/index.html',  
                    '/pwa/app/api.json',  
                    '/pwa/app/js/app.js',  
                    '/pwa/app/css/index.css',  
                    '/pwa/assets/materialize/css/materialize.min.css',  
                    '/pwa/assets/jquery-3.1.0/jquery-3.1.0.min.js',  
                    '/pwa/assets/materialize/js/materialize.min.js'
                  ];



self.addEventListener('install', function(e) {  
  console.log('[ServiceWorker] Install');  
  e.waitUntil(  
    caches.open(cacheName).then(function(cache) {  
      console.log('[ServiceWorker] Caching app shell');  
      return cache.addAll(filesToCache);  
    })  
  );  
});


console.log('Started', self);
self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});
self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});
self.addEventListener('push', function(event) {
  console.log('Push message', event);
  var title = 'Push message';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: 'The Message',
      icon: 'app/images/launcher-icon-2x.png',
      tag: 'my-tag'
    }));
});
// TODO
