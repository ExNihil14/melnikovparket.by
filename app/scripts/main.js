$(document).ready(function(){

 	$('.Mycarousel').slick({

    prevArrow:"<img class='a-left control-c prev slick-prev' src='images/back.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='images/right.png'>"

	});

	$('.Mycarousel2').slick({

		prevArrow:"<img class='a-left control-c prev slick-prev' src='images/back.png'>",
	    nextArrow:"<img class='a-right control-c next slick-next' src='images/right.png'>",

	    slidesToShow: 5,
		slidesToScroll: 1

	});

	$(".button-collapse").sideNav();

});

