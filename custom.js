$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".navbar").addClass("bg-dark");
    } else {
      $(".navbar").removeClass("bg-dark");
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 250) {
      $(".rounded-circle").addClass("animated fadeOutDown");
    } else {
      $(".rounded-circle").removeClass("animated fadeOutDown");
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 550) {
      $(".about-row").addClass("animated jackInTheBox delay-0.8s");
    } else {
      $(".about-row").removeClass("animated jackInTheBox delay-0.8s");
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1500) {
      $(".first").addClass("animated bounceIn");
      $(".second").addClass("animated bounceIn");
    } else {
      $(".first").removeClass("animated bounceIn");
      $(".second").removeClass("animated bounceIn");
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 2200) {
      $(".third").addClass("animated bounceIn");
      $(".fourth").addClass("animated bounceIn");
    } else {
      $(".third").removeClass("animated bounceIn");
      $(".fourth").removeClass("animated bounceIn");
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 3300) {
      $("#contact .address").addClass("animated flipInY");
    } else {
      $("#contact .address").removeClass("animated flipInY");
    }
  });
  $("#help").click(function(e) {
    alert(
      "This page is build by Mr,Sdp Ulak. With the help of Bootstrap 4. This is just the landing Page. None of the links are linked to other page but connected to the same page!!."
    );
    e.preventDefault();
  });
});
