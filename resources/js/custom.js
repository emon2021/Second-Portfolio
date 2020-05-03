//nav bar js
$(document).ready(function(){
	
$(document).on("scroll", function(){
	if
    ($(document).scrollTop() > 86){
	  $("#banner").addClass("shrink");
	  $(".nav-link").addClass("nav_ancor");
	  $(".navbar-brand").addClass("nav_ancor");
	  $(".btn_bars i").addClass("font_dark");
	 }else{
		$("#banner").removeClass("shrink");
		$(".nav-link").removeClass("nav_ancor");
		$(".navbar-brand").removeClass("nav_ancor");
		$(".btn_bars i").removeClass("font_dark");
	 }
});
//nav bar js end
//progress bar js
	$(document).on("scroll", function(){
		if($(document).scrollTop() > 550){
		  $("#progRes").attr("style","width:95%;color:#218838;");
		}
		if($(document).scrollTop() > 630){
			$("#progRes1").attr("style","width:95%;color:#218838;");
		}
		if($(document).scrollTop() > 710){
			$("#progRes2").attr("style","width:80%;color:#218838;");
		}
		if($(document).scrollTop() > 760){
			$("#progRes3").attr("style","width:90%;color:#218838;");
		}
		if($(document).scrollTop() > 810){
			$("#progRes4").attr("style","width:95%;color:#218838;");
		}
		if($(document).scrollTop() > 860){
			$("#progRes5").attr("style","width:90%;color:#218838;");
		}
	});
	//progress bar js end
   //modal js
   $("#modal_1").iziModal();
   $("#modal_2").iziModal();
   $("#modal_3").iziModal();
   $("#modal_4").iziModal();
   $("#modal_5").iziModal();
   $("#modal_6").iziModal();
   //modal js end
   
    $('.team_carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
		focusOnSelect:true,
		arrows:false,
		mobileFirst:true,
		responsive: [
		{
			breakpoint:1024,
			settings:{
				slidesToShow:3
			}
		},
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ],
		
     });
	
   
   
});

 
