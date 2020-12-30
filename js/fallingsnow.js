 function fallingSnow() {
    
        var snowflake = $('<div class="snowflakes"></div>');
        $('#snowZone').prepend(snowflake);
        snowX = Math.floor(Math.random() * $('#snowZone').width());
        snowSpd = Math.floor(Math.random() + 15000);

        snowflake.css({'left':snowX+'px', 'opacity': '0.6', 'z-index': '1'});
        snowflake.animate({
            top: $( document ).height(),
            opacity : "0.3 "

        }, snowSpd, function(){
            $(this).remove();
          
        });

}

function timer() {
    Math.floor(Math.random() * 900 + 100)
};

for (i= 0; i < 2; i++ ) {
     setInterval(function(){
        fallingSnow();
    }, Math.floor(Math.random() * 2000 + 500));
}
