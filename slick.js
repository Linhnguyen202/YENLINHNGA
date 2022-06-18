$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    setTimeout:100,
    arrows: false,
    fade: true,
    autoplay:true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    autoplay:true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow:`
    <button type='button' class="slick-prev">
        <i class="fa-solid fa-angle-left"></i>
    </button>
    `,
    nextArrow:`
    <button type='button' class="slick-next">
        <i class="fa-solid fa-angle-right"></i>
    </button>
    `
  });