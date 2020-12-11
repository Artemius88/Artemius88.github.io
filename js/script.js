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
	if ($(window).scrollTop() == $('#prod-page').offset().top) {
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
	$('html, body').animate({scrollTop: $('#prod-page').offset().top}, 1000);
	return false;
	
});		
$('a').on('click', function(e) {
  var href = this.getAttribute('href');
  var myHref = href.split('#');

  e.preventDefault();
  window.location.href = myHref[0];
});

})
	
	
