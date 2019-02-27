$('.btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('btn-active');
    $('nav').toggleClass('menu-active');
});
