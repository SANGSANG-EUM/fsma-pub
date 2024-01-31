'use strict'

import * as f from './function.js';

$(document).ready(function () {
  // Match Height
  $(".match_h > *").matchHeight();

  // Feather Icon
  feather.replace();

  //Top Menu
  let quickMenuActive = '';
  const quickMenuTarget = '#topMenu .qk-menu';
  const quickMenu = f.hrizonMenu(quickMenuTarget, quickMenuActive);

  //Main Visual Slide
  const mainVisualTarget = '.main_visual .swiper-container';
  const mainVisualOptions = {
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
    speed: 1000,
    centeredSlides: true,
    pagination: {
      el: `${mainVisualTarget} .pagination`,
      type: 'fraction',
    },
  };
  const mainVisualSlider = f.slider(mainVisualTarget, mainVisualOptions);
  const mainVisualPlayBtn = mainVisualSlider?.el.querySelector('.playToggle');

  mainVisualPlayBtn?.addEventListener("click", function(e) {
    if(mainVisualPlayBtn.classList.contains('stop')) {
      mainVisualSlider.swiper.autoplay.start();
      mainVisualPlayBtn.classList.remove('stop');
    } else {
      mainVisualSlider.swiper.autoplay.stop();
      mainVisualPlayBtn.classList.add('stop');
    }
  });

  //Main Best Slide
  const mainBestTarget = '.main_best-slide .swiper-container';
  const mainBestOptions = {
    slidesPerView: "auto",
    freeMode: true
  };
  const mainBestSlider = f.slider(mainBestTarget, mainBestOptions);
  const mainBestAllSlides = mainBestSlider?.swiper.slides;

  mainBestAllSlides?.forEach((slide, index) => {
    slide.querySelector('.num').innerText = index + 1;
  });

  //Main Recommendation Slide
  const mainRecommTarget = '.main_recomm-slide .swiper-container';
  const mainRecommOptions = {
    slidesPerView: "auto",
    freeMode: true
  };
  const mainRecommSlider = f.slider(mainRecommTarget, mainRecommOptions);

  //Main Popular Slide
  const mainNewTarget = '.main_popular-slide .swiper-container';
  const mainNewOptions = {
    slidesPerView: "auto",
    freeMode: true
  };
  const mainNewSlider = f.slider(mainNewTarget, mainNewOptions);

  //Main Today Slide
  const mainTodayTarget = '.main_today-slide .swiper-container';
  const mainTodayOptions = {
    slidesPerView: "auto",
    freeMode: true,
    navigation: {
      nextEl: `${mainTodayTarget} .next`,
      prevEl: `${mainTodayTarget} .prev`,
    },
    pagination: {
      el: `${mainTodayTarget} .pagination`,
      type: 'custom',
      renderCustom: function (swiper, current, total) {
          return `<span class="current">${current}</span><span class="bar">&#124;</span><span class="total">${total}</span>`;
      }
    },
  };
  const mainTodaySlider = f.slider(mainTodayTarget, mainTodayOptions);

  f.timeSale('.main_today .timeView');

  //Main Live Slide
  const mainLiveTarget = '.main_live-slide .swiper-container';
  const mainLiveOptions = {
    slidesPerView: "auto",
    freeMode: true,
    navigation: {
      nextEl: `${mainLiveTarget} .next`,
      prevEl: `${mainLiveTarget} .prev`,
    },
    pagination: {
      el: `${mainLiveTarget} .pagination`,
      type: 'custom',
      renderCustom: function (swiper, current, total) {
          return `<span class="current">${current}</span><span class="bar">&#124;</span><span class="total">${total}</span>`;
      }
    },
  };
  const mainLiveSlider = f.slider(mainLiveTarget, mainLiveOptions);

  $(window).scroll(function () {
    let scrHeight = $(document).scrollTop();

    // Top Button
    if(scrHeight > 500) {
      $('.btn-moveTop').css('display','block');
    } else {
      $('.btn-moveTop').css('display','none');
    }
  }); //End window scroll
}); //End document

