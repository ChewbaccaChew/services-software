import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export function initSlider() {
  let isInit = false;
  let sliderBrands;
  let sliderTypes;
  let sliderPrices;
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const paginationBoxList = document.querySelectorAll('.swiper-pagination');

  if (mediaQuery.matches) {
    sliderInit();
  } else {
    for (let item of paginationBoxList) {
      item.classList.toggle('swiper-pagination--off');
    }
  }

  mediaQuery.addEventListener('change', function resizeListener (evt) {
    sliderControl(evt.matches);
  });

  function sliderInit() {
    isInit = true;

    sliderBrands = new Swiper('.swiper1', {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    sliderTypes = new Swiper('.swiper2', {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    sliderPrices = new Swiper('.swiper3', {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }

  function sliderControl(isMobileSize) {
    for (let item of paginationBoxList) {
      item.classList.toggle('swiper-pagination--off');
    }

    if (isMobileSize && !isInit) {
      sliderInit();
    } else if (!isMobileSize && isInit) {
      sliderBrands.destroy();
      sliderTypes.destroy();
      sliderPrices.destroy();
      isInit = false;
    }
  }
}
