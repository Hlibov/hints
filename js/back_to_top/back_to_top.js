// back to top
function initBackTop() {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
        if (
            $(window).scrollTop() + $(window).height() <
            $(document).height() - $('#footer').height()
        ) {
            $('.back-top').css('position', 'fixed'); //resetting it
            $('.back-top').css('bottom', '50px'); //resetting it
        }
        if (
            $(window).scrollTop() + $(window).height() >
            $(document).height() - $('#footer').height()
        ) {
            $('.back-top').css('position', 'absolute'); // make it related
            $('.back-top').css('bottom', '30px'); // 60 px, height of #toTop
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            1000
        );
    });
}
