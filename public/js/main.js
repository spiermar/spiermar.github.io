function initScroll() {
  // smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function (e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 30
        }, 1500, 'easeInOutExpo');
        initgnMenu._closeMenu();
      }
    }
  });
}

function initMenu() {
  // menu
  var initgnMenu = new gnMenu(document.getElementById('gn-menu'));
}

function initTestimonialsCarousel() {
  // testimonials
  $('.carousel').carousel({
    interval: 5500
  })
}
