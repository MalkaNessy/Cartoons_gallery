
$(document).ready(function() {
	
	console.log("f dollar started");
 
var $overlay = $("#overlay");
var $overlayfilm = $("#overlayfilm");
var $close = $('.close');
/* var $image = $("#overlay img"); */
/* var $div = $("#overlay div"); */ /* 
var $caption = $('<iframe allowfullscreen="" frameborder="0" height="270" src="http://ok.ru/videoembed/234704734890" width="480"></iframe>');
 	   */
	$("#serial li").click(function(event){
		console.log('click at app.js')
		/* $overlay.append( $caption); */
		$overlay.show();
	});
	
	$close.click(function(){ 
		$overlay.hide();//Hide the overlay
	});
	
	
	
	$("#film li").click(function(event){
		console.log('click at app.js')
		/* $overlay.append( $caption); */
		$overlayfilm.show();
		
	});
	
	$close.click(function(){ 
		$overlayfilm.hide();//Hide the overlay
	});
	






	
}); 	
		 
	
	


