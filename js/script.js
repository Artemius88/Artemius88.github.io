$(function() {

		// BURGER SLIDE-OUT
	if ($(window).width() <= 450) {
		$('.burger').on('click', () => {
		$('.burger').toggleClass('burger-active');
		$('.burger').toggleClass('burger-roll');
		$('.burger-active-menu').toggleClass('burger-active-menu-slide');
			
		console.log($('#prod-page').offset().top);
		console.log($(window).scrollTop());
	})
	}
	else {
		// ROUND-BURGER-MENU
	$('.burger').on('click', () => {
		$('.burger').toggleClass('round-burger-active');
		$('.burger').toggleClass('burger-active');
		$('.burger').toggleClass('burger-roll');
// 		$('.round-burger').toggleClass('round-active');
		$('.burger-round-menu').toggleClass('slide-out-menu');
// 		$('.burger-round-menu').toggleClass('hidden');
		console.log('desktop');

	})
	}
	



		// CLOUD SANTA

	$('.oval').hide().delay(3000).fadeIn(0);
	$('.triangle').hide().delay(3000).fadeIn(0);
// 	$('.burger-round-menu').addClass('hidden');

		// ARROW-NEXT-PAGE

$('.scroll-arrow').click(function() {
	swiper.slideTo(1, 800);
	console.log('qweqweqwe');
});		
		
	
	// SPINNING SNOWFLAKE PARALAX
swiper.on('slideChange', function () {  
    if(swiper.activeIndex >= 1) {
  		$('.snowspin').animate({
			'top': '95vh'
		}, 1000);
    }
    else {
  		$('.snowspin').animate({
			'top': '45vh'
		}, 1000);
  	}
});

if ($(window).width() <= 450) {
	swiper.destroy();
}


// $('a').on('click', function(e) {
//   var href = this.getAttribute('href');
//   var myHref = href.split('#');

//   e.preventDefault();
//   window.location.href = myHref[0];
// });

// $('.nav-menu-item').click(function() {
// 	navArray = $('.nav-menu').children().makeArray;
// 	var linkIndex = this.index;
// 	swiper.on('slideChange', function () { 
// 		swiper.slideTo(linkIndex, 800);
//     });
//     console.log($('.nav-menu'));
// })


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
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
/*<!-- CUSTOM SELECT -->*/
	
	$('a').on('click', (event) => {
		event.preventDefault();
	});
	
			// NAV-MENU-SLIDER-CLICK
	const headerLinks = document.getElementsByClassName( "nav-menu-item-slide" );	
	const navHeader = $.makeArray(headerLinks);
	 
		for (let i = 0; i < navHeader.length; i++) {
			$(navHeader[i]).on('click', (event) => {
				event.preventDefault();
				swiper.slideTo(i, 800);
				console.log(i);
			})
	 	};


	 		// SLIDER-ROUND-MENU-ITEM-CLICK
	const sideLinks = document.getElementsByClassName("slide-menu-item");	
	const navSide = $.makeArray(sideLinks); 
		for (let i = 0; i < navSide.length; i++) {
			$(navSide[i]).on('click', (event) => {
				event.preventDefault();
				swiper.slideTo(i, 800);
				console.log(i);
				$('.burger').removeClass('round-burger-active');
				$('.burger').removeClass('burger-active');
				$('.burger').removeClass('burger-roll');
				$('.burger-round-menu').removeClass('slide-out-menu');

			})
	 	};		


	 		// MOBILE-MENU-ITEM-SLIDER-CLICK
	const mobLinks = document.getElementsByClassName("mob-menu-item");	
	const mobSide = $.makeArray(mobLinks); 	
	const secArr = ['#main-pg', '#prod-page', '#cont-page'];
		for (let i = 0; i < mobSide.length; i++) {
			$(mobSide[i]).on('click', (event) => {
				event.preventDefault();
					$('html, body').animate({
	       				 scrollTop: $(secArr[i]).offset().top}, 800);
	    		$('.burger').removeClass('burger-active');
				$('.burger').removeClass('burger-roll');
				$('.burger-active-menu').removeClass('burger-active-menu-slide');

			})
	 	};	

})
	
	
