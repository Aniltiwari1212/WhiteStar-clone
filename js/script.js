// owl-carousel js
$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.logoSlider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:4
			},
			1024:{
				items:4
			}
		}
	});
});

$('.reviewSlider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1024:{
            items:3
        }
    }
});




$('.reviewSlidertwo').owlCarousel({
    loop:true,
    autoplay:true,
    margin:20,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1024:{
            items:4
        }
    }
});


AOS.init();