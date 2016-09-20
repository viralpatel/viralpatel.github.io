if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('/pwa/service-worker.js').then(function(reg) {
        console.log(':^)', reg);
        reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function(sub) {
			try{
            console.log('endpoint:', sub.endpoint);
			alert(sub.endpoint);
			$('#content').prepend(sub.endpoint);
			}catch(e){
				console.error(e);
			}
        });
    }).catch(function(error) {
        console.log(':^(', error);
    });
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

