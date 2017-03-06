
$(document).ready(function() {
	
	console.log("f$started");
 
var $overlay = $("#overlay");
var $image = $("#overlay img");
var $div = $("#overlay div");
var $caption = $('<iframe allowfullscreen="" frameborder="0" height="270" src="https://www.youtube.com/embed/ySzbgdTEjlA?list=PLn7UD0nnd1CZu9_H0OSoQflQxEUfhiNBb" width="480"></iframe>');
 	
	$(".gallery li").click(function(event){
	$div.append($caption);
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

	
		 
	
	


