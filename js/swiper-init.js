var swiper = new Swiper(".bannerSwiperHomePage", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  // autoplay: true,
  allowTouchMove: true,
});

var swiper = new Swiper(".showcaseSwiper", {
  slidesPerView: 4,
  spaceBetween: 35,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  allowTouchMove: false,
});

var swiper = new Swiper(".sliderImageSwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
