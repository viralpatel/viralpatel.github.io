
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

