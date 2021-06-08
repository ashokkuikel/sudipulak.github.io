import MobileMenu from "modules/mobileMenu.js";

// Instantiate a new object using our modules/classes
var mobileMenu = new MobileMenu();

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  //autoplay:
  //delay: 5000,
  //disableOnInteraction: false,
  //},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
