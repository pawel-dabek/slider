document.addEventListener('DOMContentLoaded', function () {
  const sliders = document.querySelectorAll('.card-slider-block .swiper');

  sliders.forEach(function (slider) {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: slider.parentElement.parentElement.querySelector('.card-slider-block__arrow--next'),
        prevEl: slider.parentElement.parentElement.querySelector('.card-slider-block__arrow--prev'),
      },
      pagination: {
        el: slider.querySelector('.card-slider-block__pagination'),
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  });
});
