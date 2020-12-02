 $(function() {

    var star = $('#star');
    for (i = 0; i < 12; i++) {
        
        $(star).clone().prependTo('#main-pg');
        starX = Math.floor(Math.random() * $('#main-pg').width() * 1);
        starY = Math.floor(Math.random() * $('#main-pg').height() * 1);

        star.css({
            'position': 'absolute',
            'left': starX +'px',
            'top': starY + 'px',
        })
    }
     
       var starSmall = $('#star-small');
    for (i = 0; i < 12; i++) {

        $(starSmall).clone().prependTo('#main-pg');
        starX = Math.floor(Math.random() * $('#main-pg').width() * 1);
        starY = Math.floor(Math.random() * $('#main-pg').height() * 1);

        starSmall.css({
            'position': 'absolute',
            'left': starX +'px',
            'top': starY + 'px'
        })
    }   
 
});

