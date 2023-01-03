$(document).ready(function () {
    $('ul.navbar-container > li').click(function (e) {
    $('ul.navbar-container > li').removeClass('active');
    $(this).addClass('active');
    });
});