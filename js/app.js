$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-cool').hide();
        $('.ryu-ready').show();

    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-cool').hide();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

    $(document).keydown(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-action').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.ryu-cool').show();
      }   
    })


});

function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }


