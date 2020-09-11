$(document).ready(function () {

	$('.price-wrap').animate(
	{
		height: '410px'
	}, {
		duration: 2000,
	});
});
	  $('.owl-carousel').owlCarousel({
		loop:true,
		autoplay: true,
		dots: true, 
		autoplayTimeout: 3000,
		dots: true,
		 responsive: {

                1000: {
                    items: 1
                }
            }
	})
