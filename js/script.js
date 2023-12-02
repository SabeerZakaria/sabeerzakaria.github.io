$(window).on("load", function () {
  $(".loader .inner").fadeOut(600, function () {
    $(".loader").fadeOut(850);
  });
});

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 3000,
    pagination: false,
  });

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  var typed = new Typed(".typed", {
    strings: [
      "Full-Stack SEO Professional.",
      "Front-End Web-developer.",
      "Web Designer.",
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
});

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", function (event) {
    for (let tabLink of tabLinks) {
      tabLink.classList.remove("active-link");
    }

    for (let tabContent of tabContents) {
      tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabContents[i].id).classList.add("active-tab");
  });
}
