function initFixedHeader() {
    var hiddenClass = 'hidden-position';
    var fixedClass = 'fixed-position';
    var win = jQuery(window);

    jQuery('#header').each(function () {
        var header = jQuery(this),
            flag = true,
            fixedFlag = true,
            prevWinTop = 0,
            extraSpace = 0;

        function scrollHandler() {
            var winTop = win.scrollTop();

            if (winTop > prevWinTop && winTop > extraSpace) {
                if (flag) {
                    header.addClass(hiddenClass);
                    flag = false;
                }
            } else {
                if (!flag) {
                    header.removeClass(hiddenClass);
                    flag = true;
                }
            }

            if (winTop > extraSpace) {
                if (fixedFlag) {
                    header.addClass(fixedClass);
                    fixedFlag = false;
                }
            } else {
                if (!fixedFlag) {
                    header.removeClass(fixedClass);
                    fixedFlag = true;
                }
            }

            prevWinTop = winTop;
        }

        function resizeHandler() {
            flag = true;
            header.removeClass(hiddenClass);

            scrollHandler();
        }

        win.on('resize orientationchange', resizeHandler);
        win.on('scroll orientationchange', scrollHandler);
        resizeHandler();
    });
}
