// slider

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// loader

$(window).on("load", function () {
  setTimeout(function () {
    // allowing 3 secs to fade out loader
    $(".page-loader").fadeOut("slow");
  }, 3000);
});

// toggle

$("#toggle").click(function () {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});



window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let topbar = document.querySelector(".topbar");
  if (window.scrollY >= 40) {
    header.style.backgroundColor = "var(--dark)";
    header.style.transition = "background-color 0.3s ease, padding 0.3s ease";
    topbar.style.padding = "10px";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.padding = " 0";
  }
});

// HEADER-SCROLL--

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  if (window.scrollY >= 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// CURSOR---

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

// LOADER---

$(".js-btn-modal").on("click", function () {
  $("#overlay").fadeIn();
  var id = $(this).data("id");
  $('.js-modal[data-id="modal' + id + '"]').fadeIn();
});

$(".js-close-btn").on("click", function () {
  $("#overlay").fadeOut();
  $(".js-modal").fadeOut();
});
$("#overlay").on("click", function () {
  $("#overlay").fadeOut();
  $(".js-modal").fadeOut();
});

// SCROOL--

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  if (window.scrollY >= 40) {
    header.style.backgroundColor = "var(--theme-white)";
    header.style.Color = "black";
    header.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    header.style.transition = "background-color 0.3s ease, padding 0.3s ease";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
    header.style.color = "black";
    header.style.padding = " 0";
  }
});
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  if (window.scrollY >= 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//  FILTER-TABS---

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tabs-top-section-a");
  const cards = document.querySelectorAll(".tabs-card");
  function filterCards(category) {
    cards.forEach((card) => {
      if (
        category === "all" ||
        card.getAttribute("data-category") === category
      ) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
    if (category !== "all") {
      let visibleCards = document.querySelectorAll(
        ".tabs-card[style='display: flex;']"
      );
      visibleCards.forEach((card, index) => {
        if (index >= 3) card.style.display = "none";
      });
    }
  }
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      filterCards(this.getAttribute("data-filter"));
    });
  });
  filterCards("all");
});


// BUTTONS-BACK---


var btn = $(".back-to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
