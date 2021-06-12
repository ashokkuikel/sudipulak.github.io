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

window.onscroll = function () {
  scrollFunction();
};
let logoDiv = document.querySelector(".logo-text");
let logo = logoDiv.querySelector("svg");
let header = document.querySelector("header");
let menuUl = document.querySelector(".min-list");
let menuLi = menuUl.querySelectorAll("li");
let dropdownMenu = document.querySelector(".main-navigation");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    logo.style.height = "50px";
    header.style.height = "90px";
    menuLi.forEach((menu) => {
      menu.style.fontSize = "15px";
    });
    dropdownMenu.style.top = "90px";
  } else {
    logo.style.height = "60px";
    header.style.height = "120px";
    menuLi.forEach((menu) => {
      menu.style.fontSize = "17px";
    });
    dropdownMenu.style.top = "120px";
  }
}
