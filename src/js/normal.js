'use strict'

import * as f from './function.js';

$(document).ready(function () {
  const popDim = $(".popDim");
  
  // Match Height
  $(".match_h > *").matchHeight();

  // Feather Icon
  feather.replace();

  // Arcodian Function
  f.arcodianF();

  // Popup Open
  const popOpenBtn = $('.popup-open');
  popOpenBtn.on('click', function(){
    const openPopup = $(this).attr('data-popupId');
    popDim.fadeIn(200);
    f.popupOpen(openPopup);
  });
  
  // Popup Close
  const popCloseBtn = $('.popup .close');
  popCloseBtn.on('click',function(){
    const closePopup = $(this).closest('.popup');
    popDim.fadeOut(200);
    f.popupClose(closePopup);
  });

  //Main Top Banner
  const mainTopBannerTarget = '.mtb-wrap .swiper-container';
  const mainTopBannerOptions = {
    slidesPerView: 1,
    loop: true,
    loopAdditionalSlides : 1,
    watchOverflow : true,
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    direction: "vertical",
    autoHeight: true,
  };
  const mainTopBannerSlider = f.slider(mainTopBannerTarget, mainTopBannerOptions);

  //Main Top Banner Close
  const mtbCloseBtn = document.querySelector('.mtb-close-btn');
  const mtbWrap = document.querySelector('.mtb-wrap');

  mtbCloseBtn?.addEventListener('click', function() {
    mtbWrap.style.maxHeight = '0';
  });

  //Main Popup Banner
  const mainPopBannerTarget = '.mpb-wrap .swiper-container';
  const mainPopBannerOptions = {
    slidesPerView: 1,
    loop: true,
    //autoplay: {
    //  delay: 3000,
    //},
    speed: 1000,
    centeredSlides: true,
    //direction: "vertical",
    //autoHeight : true,
    //pagination: {
    //  el: `${mainVisualTarget} .pagination`,
    //  type: 'fraction',
    //},
  };
  const mainPopBannerSlider = f.slider(mainPopBannerTarget, mainPopBannerOptions);

  //Main Popup
  const mainPopUp = $('.main-popup');
  const mainPopUpClose = $('.mpb-close-btn');
  const mainPopOnlyToday = $('.onlytodayshow');

  mainPopUp.addClass('active');

  if(mainPopUp.hasClass('active')) {
    popDim.show();
  }
  
  mainPopUpClose.on('click',function(){
    popDim.fadeOut(500);
    mainPopUp.removeClass('active');
  });

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

  //Main Time Sale
  f.timeSale('.main_today .cp-timer__num');

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

  //Product List Top Banner Slide
  const prodTopBannerTarget = '.prod-topBanner .swiper-container';
  const prodTopBannerOptions = {
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
    speed: 1000,
    centeredSlides: true,
    pagination: {
      el: `${prodTopBannerTarget} .pagination`,
      type: 'fraction',
    },
  };
  const prodTopBannerSlider = f.slider(prodTopBannerTarget, prodTopBannerOptions);
  const prodTopBannerPlayBtn = prodTopBannerSlider?.el.querySelector('.playToggle');

  prodTopBannerPlayBtn?.addEventListener("click", function(e) {
    if(prodTopBannerPlayBtn.classList.contains('stop')) {
      prodTopBannerSlider.swiper.autoplay.start();
      prodTopBannerPlayBtn.classList.remove('stop');
    } else {
      prodTopBannerSlider.swiper.autoplay.stop();
      prodTopBannerPlayBtn.classList.add('stop');
    }
  });

  //Product List Category
  let prodCateActive = '';
  const prodCateTarget = '.prod-list__category .category-wrap';
  const prodCate = f.hrizonMenu(prodCateTarget, prodCateActive);

  //Product Detail Thumb Slide
  const prodDetailThumbTarget = '.prod-detailThumb .swiper-container';
  const prodDetailThumbOptions = {
    slidesPerView: 1,
    loop: true,
    loopAdditionalSlides : 1,
    watchOverflow : true,
    // autoplay: {
    //   delay: 3000,
    // },
    speed: 1000,
    centeredSlides: true,
    pagination: {
      el: `${prodDetailThumbTarget} .pagination`,
      type: 'fraction',
    },
  };
  const prodDetailThumbSlider = f.slider(prodDetailThumbTarget, prodDetailThumbOptions);

  //Product Detail Info
  const prodDetailInfo = $(".dtinfo-box");
  const prodDetailMoreBtn = prodDetailInfo.find(".more-btn");

  prodDetailMoreBtn.on('click', function(){
    prodDetailInfo.addClass("on");
  });


  //Product Detail Related Products Slide
  const prodDetailRelTarget = '.prod-detailRel-slide .swiper-container';
  const prodDetailRelOptions = {
    slidesPerView: "auto",
    freeMode: true
  };
  const prodDetailRelSlider = f.slider(prodDetailRelTarget, prodDetailRelOptions);

  //Product Discount Rate
  /*
  const prodDcEl = $(".prod-info_area");

  prodDcEl.each(function() {
    if($(this).find('.dc-price').length > 0) {
      const prodSupPrice = parseFloat($(this).find('.dc-price').text().replace(/[^0-9]/g, ''));
      const prodSalePrice = parseFloat($(this).find('.sale-price').text().replace(/[^0-9]/g, ''));
      const prodDcPerEl = $(this).find('.dc-percent');
      let dcPercentNum = f.dcPercent(prodSupPrice, prodSalePrice);

      prodDcPerEl.text(dcPercentNum+'%');
    }
  });
  */

  //Product Detail Buy Area
  const buyArea = $(".prod-buy_area");
  const buyArea_class = "prod-buy_area";
  const buyActBox = buyArea.find(".actBox");
  const buyDfBox = buyArea.find(".dfBox");
  const buyOpenBtn = buyArea.find(".buy-btn.dp");

  buyOpenBtn.on('click', function(){
    buyArea.addClass('on');
    buyActBox.show();
    buyDfBox.hide();
    popDim.fadeIn(200);
  });

  //Product Detail Share
  const prodShareOpenBtn = $(".prod-smInfo__head .share-btn");
  const prodSharePop = $("#prodShare");
  const prodShareCloseBtn = prodSharePop.find(".close-btn");

  prodShareOpenBtn.on('click', function(){
    prodSharePop.addClass('on');
    popDim.fadeIn(200);
  });

  prodShareCloseBtn.on('click', function(){
    prodSharePop.removeClass('on');
    popDim.fadeOut(200);
  });

  //popup dim click event
  popDim.on('click', function() {
    if(buyArea.hasClass('on')){
      buyArea.removeClass('on');
      buyActBox.hide();
      buyDfBox.show();
      popDim.fadeOut(200);
    }

    if(prodSharePop.hasClass('on')){
      prodSharePop.removeClass('on');
      popDim.fadeOut(200);
    }
  });

  //All menu
  const depth1Btn = $('.all-ct-depth1-list > li');
  depth1Btn.on('click',function(){
    depth1Btn.removeClass('active');
    $(this).addClass('active');
    let idx = $(this).data('d1');
    $('.all-ct-right').find('.all-ct-depth2-list').hide();
    $('.all-ct-right').find(`.all-ct-depth2-list[data-d1=${idx}]`).show();
  });

  //Scroll Event
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