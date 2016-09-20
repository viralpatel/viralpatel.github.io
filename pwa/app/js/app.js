if('serviceWorker' in navigator) {  
  navigator.serviceWorker  
           .register('/pwa/service-worker.js')  
           .then(function() { console.log('Service Worker Registered'); });  
}


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

