const slider1 = new Swiper('.review__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,


    pagination: {
        el: '.swiper-pagination ',
        clickable: true
    },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const slider2 = new Swiper('.practise__swiper', {
  slidesPerView: 2.5,
  spaceBetween: 80,
  speed: 900,

  navigation: {
    nextEl: '.practise-button-next',
    prevEl: '.practise-button-prev',
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
        spaceBetween: 60,
    },

    600: {
      slidesPerView: 1.5,
    },

    1280: {
      slidesPerView: 2.5,
    }
  },
})
