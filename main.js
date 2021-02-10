
// Slider part
$('.customer-feedback-slider').slick({
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 250,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed:2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // Filter-part
  $('.filter-grid').isotope({
  itemSelector: '.grid-item',
});

// filter items on button click
$('.filter-button-group').on('click', 'li', function () {
  var filterValue = $(this).attr('data-filter');
  $('.filter-grid').isotope({ filter: filterValue });
  $('.filter-button-group li').removeClass('active');
  $(this).addClass('active');
});

// Counter Js part
$('.counter').counterUp({
  time: 1400
});