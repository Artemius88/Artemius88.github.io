$(function() {

		// BURGER SLIDE-OUT

	$('.burger').on('click', () => {
		$('.burger').toggleClass('burger-active');
		$('.burger-active-menu').toggleClass('burger-active-menu-slide');
		console.log($('#prod-page').offset().top);
		console.log($(window).scrollTop());
	})


		// ROUND-BURGER-MENU

	// $('.burger').on('click', () => {
	// $('.burger').toggleClass('burger-active');
	// $('.round-burger').toggleClass('round-active');
	// $('.burger-round-menu').toggleClass('slide-out-menu');

	
	// })
	// $('.burger').on('click', () => {
	// 	$('.burger-round-menu').fadeout(1200);
	// 	$('.burger-round-menu').fadeToggle(1200);
	// })	

		// CLOUD FROM SANTA

	$('.oval').hide().delay(3000).fadeIn(0);
	$('.triangle').hide().delay(3000).fadeIn(0);


		// SPINNING SNOWFLAKE PARALAX
		
		$(window).on('scroll', () => {
	if ($(window).scrollTop() >= $('#prod-page').offset().top) {
		$('.snowspin').animate({
			'top': '800px'
		}, 1500);
		console.log($('#prod-page').offset().top);
		console.log($(window).scrollTop());
	} 
	
});
		// $(window)on('scroll' () => {
		// 	$('.swiper-slide').css({'margin': '0'});
		// })

		// NAVIGATION MENU HOVER

// 	$('.accent').hide();
// $('.shown-item').on('mouseenter', (event) => {
// 	$(event.currentTarget).slideUp();
// 	$(event.currentTarget).siblings().show(300);
// 	$(event.currentTarget).siblings().animate({'visibility': 'visible', 'transform': 'translateY(-19px)',
// 	'transition-duration': '0.9s'});
// })
// $('.accent').on('mouseleave', (event) => {
// 	$(event.currentTarget).hide();
// 	$(event.currentTarget).siblings().slideDown(300);
// })
	

	// GENDER-DROPDOWN

// $('.gender-option').not('.gender-header').hide();
// $('.gender-header').on('click', () => {
// 	$('.select-gender').fadeToggle(100);
// })

// $('.gender-option').not('.gender-header').on('click', (event) => {
// 	$('.gender-header').empty();
// 		$(event.currentTarget).clone().appendTo('.gender-header').addClass('chosen-gender').removeClass('select-gender');
// 		$('.select-gender').not('.chosen-gender').hide();
	
// })

$('.scroll-arrow').click(function() {
	// $('html, body').animate({scrollTop: $('#prod-page').offset().top}, 1000);
	// return false;
	swiper.slideTo(1, 800);
	// $(this).css('width', '60px');
	console.log('qweqweqwe');
});		

swiper.on('slideChange', function () {  
    if(swiper.activeIndex > 0 && swiper.activeIndex < 2) {
  		$('.snowspin').animate({
			'top': '+=350px'
		}, 1500);
    }
    else {
  		$('.snowspin').animate({
			'top': '-=350px'
		}, 1500);
  	}
});

if ($(window).width() <= 450) {
	swiper.destroy();
	// $('.background-santa').removeClass('hidden');
}
// else {
// 	$('.background-santa').addClass('hidden');
// }

// $('a').on('click', function(e) {
//   var href = this.getAttribute('href');
//   var myHref = href.split('#');

//   e.preventDefault();
//   window.location.href = myHref[0];
// });

$('.nav-menu-item').click(function() {
	navArray = $('.nav-menu').children().makeArray;
	var linkIndex = this.index;
	swiper.on('slideChange', function () { 
		swiper.slideTo(linkIndex, 800);
    });
    console.log($('.nav-menu'));
})


/*<!-- CUSTOM SELECT -->*/
	/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
        
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();

    });

  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


/*<!-- CUSTOM SELECT -->*/
})
	
	
