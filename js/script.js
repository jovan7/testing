$(function(){

	$(window).scroll(function(){
		
		var scrollTop = $(this).scrollTop();
		var firstTop = $(".first").offset();
		var secondTop = $(".second").offset();
		
		if(scrollTop >= firstTop.top) {
			$(".home").addClass("active-circle");
			$(".about, .work, .contact").removeClass("active-circle");
		} else {
			$(".home").removeClass("active-circle");
		};
		
		if(scrollTop >= secondTop.top) {
			$(".about").addClass("active-circle");
			$(".home, .work, .contact").removeClass("active-circle");
		};
		
	});

	
});