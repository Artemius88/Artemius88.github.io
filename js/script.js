$(function() {

		// BURGER SLIDE-OUT
	if ($(window).width() <= 450) {
		$('.burger').on('click', () => {
		$('.burger').toggleClass('burger-active');
		$('.burger-active-menu').toggleClass('burger-active-menu-slide');
		console.log($('#prod-page').offset().top);
		console.log($(window).scrollTop());
	})
	}
	else {
		// ROUND-BURGER-MENU
		$('.burger').on('click', () => {
	$('.burger').toggleClass('burger-active');
	$('.round-burger').toggleClass('round-active');
	$('.burger-round-menu').toggleClass('slide-out-menu');

	
	})
	$('.burger').on('click', () => {
		$('.burger-round-menu').toggleClass('hidden');
	})
	}
	



		// CLOUD SANTA

	$('.oval').hide().delay(3000).fadeIn(0);
	$('.triangle').hide().delay(3000).fadeIn(0);
	$('.burger-round-menu').addClass('hidden');

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
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
/*<!-- CUSTOM SELECT -->*/

})
	
	
