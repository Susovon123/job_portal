var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // 320px and up
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    // 480px and up
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },

    // 545px and up
    545: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    // 778px and up
    778: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    // 991px and up
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    // 1200px and up
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
