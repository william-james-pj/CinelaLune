(function($) {
  "use strict"; // Start of use strict

  const menuItems = document.querySelectorAll('#mainNav a[href^="#"]');
  var $doc = $('html, body');
  $(menuItems).click(function() {
      $doc.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top -72
      }, 700);
      return false;
  });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  $('.programacao-modal').on('hide.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
  });

})(jQuery); // End of use strict
