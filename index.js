window.addEventListener('DOMContentLoaded', function() {
  var navbarHeight = document.querySelector('.navbar').offsetHeight;
  var carousel = document.querySelector('.carousel');
  var carouselSearch = document.querySelector('.carousel-search');

  carousel.style.marginTop = navbarHeight + 'px';
  carouselSearch.style.marginTop = navbarHeight + 'px';

  window.addEventListener('resize', function() {
    navbarHeight = document.querySelector('.navbar').offsetHeight;

    carousel.style.marginTop = navbarHeight + 'px';
    carouselSearch.style.marginTop = navbarHeight + 'px';
  });
});




