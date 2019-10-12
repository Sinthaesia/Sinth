const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("#animated_bg");
    var $logo = $(".logo");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $logo.toggleClass('logo_change', $(this).scrollTop() > $nav.height());
  });
});
