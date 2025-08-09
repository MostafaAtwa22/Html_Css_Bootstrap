$(document).ready(function() {
    // hide and show the option-tool
    $('.gear-check').click(function() {
        $('.color-option').fadeToggle(300);
    });

    // change the color
    var colorLi = $('.color-option li');
    colorLi
    .eq(0).css('background-color', '#E41B17').end()
    .eq(1).css('background-color', '#d63384').end()
    .eq(2).css('background-color', '#0075ff').end()
    .eq(3).css('background-color', '#4bc4af').end()
    .eq(4).css('background-color', '#fc490b');

    colorLi.click(function() {
        $('link[href*=theme]').attr('href', $(this).attr('data-value'));
    })
});

// loading screen
$(window).on('load', function() {

    $('.loading-overlay .loader').fadeOut(4000, function() {
        $(this).parent().fadeOut(2000, function() {
            // remove the parent from the dom tree 
            $(this).remove();
            // make the scroll for the body
            $('body').css('overflow', 'auto');
        });
    });
});