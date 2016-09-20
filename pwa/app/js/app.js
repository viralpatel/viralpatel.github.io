if('serviceWorker' in navigator) {  
  navigator.serviceWorker  
           .register('/pwa/service-worker.js')  
           .then(function() { console.log('Service Worker Registered'); });  
}


var cacheName = 'infosys-pwa';  
var filesToCache = [  
                    '/pwa/',  
                    '/pwa/index.html',  
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



jQuery(function(){
	
	
	$('#loader').show();

	jQuery.get('/pwa/app/api.json', 
	function(response){	
		$('#loader').hide();
		populateData(response.items);
	});
	
});

function populateData(items) {
	
	for(var i in items) {
		
		var card = $('<div/>').addClass('card').attr('data-link', items[i].link)
					.append($('<div/>').addClass('card-content')
						.append(
							$('<span/>').text(items[i].title).addClass('card-title'),
							$('<p/>').text(items[i].description)
						))
					.appendTo('#items');
				
	}

};

