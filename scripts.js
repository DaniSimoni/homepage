let count= 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}


const $responsiveCarousel = document.querySelector(".js-carousel--responsive");
 

new Glider($responsiveCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-carousel--responsive-dots",
  arrows: {
    prev: ".js-carousel--responsive-prev",
    next: ".js-carousel--responsive-next",
  },
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});