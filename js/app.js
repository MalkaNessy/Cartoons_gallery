
$(document).ready(function() {
	
	console.log("f dollar started");
 
var $overlay = $("#overlay");
/* var $image = $("#overlay img"); */
/* var $div = $("#overlay div"); */ /* 
var $caption = $('<iframe allowfullscreen="" frameborder="0" height="270" src="http://ok.ru/videoembed/234704734890" width="480"></iframe>');
 	   */
	$(".gallery img").click(function(event){
		console.log('click at app.js')
		/* $overlay.append( $caption); */
		$overlay.show();
	});
	
	$overlay.click(function(){ 
		$overlay.hide();//Hide the overlay
	});
	
	

		$( "#overlay .more" ).click(function( event ) {
		  event.stopPropagation();
		$("#overlay .caption "). toggle();
		});

	
	
	}); 	
		 
	
	


