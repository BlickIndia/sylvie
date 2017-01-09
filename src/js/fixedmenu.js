$(window).scroll(function (e) {
  if (!$('[data-target="#navbar-primary-collapse"]').attr('aria-expanded') || $('[data-target="#navbar-primary-collapse"]').attr('aria-expanded') === 'false') {
    if (window.scrollY >= 10) {
      $('header').addClass('fixed');
      $('.mobile-logo').addClass('small');
    } else {
      $('header').removeClass('fixed');
      $('.mobile-logo').removeClass('small');
    }
  } else {
    console.log('aa');
  }
});

$('[data-target="#navbar-primary-collapse"]').click(function (e) {
  if ($('header').hasClass('fixed') && window.scrollY < 10) {
    $('header').removeClass('fixed');
  } else {
    $('header').addClass('fixed');
  }
});
