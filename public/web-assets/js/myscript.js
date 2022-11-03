$(document).ready(function () {
    $(".product_category_slider").slick({
      slidesToShow:6,
      slidesToScroll: 1,
      autoplay:false,
      autoplaySpeed: 2000,
      dots: false,
      arrows: true,
      appendArrows: $('.category_slider_arrow_box'),
      nextArrow: '<a class="category_pre_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
      prevArrow: '<a class="category_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow:4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            dots: false,
            arrows: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1500,
                 dots: false,
              arrows: true,
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1500,
                dots: false,
            arrows: true,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
          autoplaySpeed: 1500,
                 dots: false,
             arrows: true,
          },
        },
      ],
    });
  });