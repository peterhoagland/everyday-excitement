$(window).scroll(function() {
  // Get the current scroll position
  var scrollTop = $(this).scrollTop();

  // Iterate through each section
  $('.parallax').each(function() {
    // Get the top and bottom positions of the section
    var top = $(this).offset().top;
    var bottom = top + $(this).outerHeight();

    // If the scroll position is within the current section
    if (scrollTop >= top && scrollTop < bottom) {
      // Get the corresponding nav item and add the active class
      var navItem = $('a[href="#' + $(this).attr('id') + '"]').parent();
      navItem.addClass('active');
    } else {
      // Otherwise, remove the active class from the nav item
      var navItem = $('a[href="#' + $(this).attr('id') + '"]').parent();
      navItem.removeClass('active');
    }
  });
});