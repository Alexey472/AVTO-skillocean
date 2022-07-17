$(function () {
 
  $(".rateYo").rateYo({
    starWidth: "30px"
  });
 
});

$(function () {
  
  $(".main__coments-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })


});

$(function () {
  
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__inner-nav').toggleClass('open');
  })


});

