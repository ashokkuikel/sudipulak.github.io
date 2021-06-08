// Navigation Menu
var trigger = document.querySelector("#hamburger");
var navigation = document.querySelector(".main-navigation");

trigger.addEventListener("click", function () {
  navigation.classList.toggle("show");
});

console.log(trigger.classList);

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
