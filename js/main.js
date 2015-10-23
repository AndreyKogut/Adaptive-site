$(document).ready(function(){

        var $menu = $(".navWrapper");
        	$b = $("body");
        	$dropMenu = $("nav ul");
        	$dropMenuItem = $("nav li");
        	$buttonClick = $(".navWrapper .btn");
      		$formShowHide = $(".sign-in-form-wrapper");  			


$(".nav-but").on('click', function(){ 
  if ($(document).width() <= 768) 
  $dropMenu.slideToggle('slow').click(function(){
    $dropMenu.slideUp('slow');
  });
   else $dropMenu.addClass("visible");
  });

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 300 ){
                $menu.addClass("nawWrapperFixed");
                $b.addClass("bodymargin");

            } else if($(this).scrollTop() <= 0 && $menu.hasClass("nawWrapperFixed")) {
                $menu.removeClass("nawWrapperFixed");
                $b.removeClass("bodymargin");
            }
        });

        $('.owl-carousel').owlCarousel({
   			loop:true,
   			center:true,
  			nav:true,
   			items:1,
   			autoWidth:true,
  			autoHeight:true,
  			autoplay:true,
    		autoplayTimeout:5000,
  			autoplayHoverPause:true,
   			navText: []
		});



        
    });

