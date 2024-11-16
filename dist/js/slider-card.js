
$(document).ready(function(){
    $('.slider').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    
    

    responsive: [
        {
            breakpoint: 1300, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
        {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true,
              pauseOnHover: true,
            }
          },
          {
            breakpoint: 775,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              autoplay: true,
              pauseOnHover: true,
            }
          },
          {
            breakpoint: 555,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true,
              pauseOnHover: true,
            }
          },
       
        
    ]
    
   });
});