$('.stories').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  arrows:true,
  responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows: true,
          }
      },{
          breakpoint: 1000,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots:true,
              arrows:false
          }
      }
      
      ,{
          breakpoint: 790,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots:true,
              arrows:false
          }
      }, {
          breakpoint: 649,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:true,
              arrows:false
          }
      }

  ]
});