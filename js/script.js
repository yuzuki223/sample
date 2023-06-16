window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-menu-button');
    var $menu = document.querySelector('.header-site-menu');

    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });
});

$(function () {
    $(window).scroll (function () {
        $("nav.floating").stop().animate(
            {"top": $(window).scrollTop() + 100},
        500);
    });
});