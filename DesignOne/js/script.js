$(document).ready(function() {
    // nice scroll
    $('html').niceScroll();

    // hide and show the option-tool
    $('.gear-check').click(function () {
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
    });

    var scrollBtn = $('.scroll-to-top');
    var windowHeight = $(window).height();
    $(window).scroll(function () {
        ($(this).scrollTop() >= windowHeight) ? scrollBtn.show() :  scrollBtn.hide();
    })

    // go to the top
    scrollBtn.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600)
    })
});

// loading screen
$(window).on('load', function () {
    $('.loading-overlay .loader').fadeOut(2000, function () {
        // make the scroll for the body
        $('body').css('overflow', 'auto');
        $(this).parent().fadeOut(2000, function () {
            // remove the parent from the dom tree 
            $(this).remove();
        });
    });
});