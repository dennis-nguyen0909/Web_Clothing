//copy menu for mobile
function copyMenu() {
  // copy category to do departmens
  var $dptCategory = document.querySelector(".dpt-cat");
  var $dptPlace = document.querySelector(".departments");
  $dptPlace.innerHTML = $dptCategory.innerHTML;
  // copy inside nav to nav
  var $mainNav = document.querySelector(".header-nav nav");
  var $navPlace = document.querySelector(".off-canvas nav");
  $navPlace.innerHTML = $mainNav.innerHTML;
  //   copy .header-top .wrapper to .thetop-nav
  var $topNav = document.querySelector(".header-top .wrapper");
  var $topPlace = document.querySelector(".off-canvas .thetop-nav");
  $topPlace.innerHTML = $topNav.innerHTML;
}
copyMenu();

// show sub menu on mobile

const $subMenu = document.querySelectorAll(".has-child .icon-small");

$subMenu.forEach((menu) => menu.addEventListener("click", toggle));
function toggle(e) {
  e.preventDefault();
  $subMenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  if (this.closest(".has-child").classList != "expand") {
    this.closest(".has-child").classList.toggle("expand");
  }
}

// show menu mobile
const $menuBtn = document.querySelector(".trigger"),
  $closeBtn = document.querySelector(".t-close"),
  $addClass = document.querySelector(".site");

$menuBtn.addEventListener("click", () => {
  $addClass.classList.toggle("showmenu");
});

$closeBtn.addEventListener("click", () => {
  $addClass.classList.remove("showmenu");
});

// slider
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Show search

const $searchBtn = document.querySelector(".t-search");
const $tClose = document.querySelector(".search-close");
const $showClass = document.querySelector(".site");

$searchBtn.addEventListener("click", () => {
  $showClass.classList.toggle("showsearch");
});

$tClose.addEventListener("click", () => {
  $showClass.classList.remove("showsearch");
});

// Show dpt menu
const $dptBtn = document.querySelector(".dpt-cat .dpt-trigger"),
  $dptClass = document.querySelector(".site");
$dptBtn.addEventListener("click", () => {
  $dptClass.classList.toggle("showdpt");
});

// product image swiper
var productThumb = new Swiper(".small-image", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    },
  },
});

var productBig = new Swiper(".big-image", {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next", // Đã sửa từ nexEl thành nextEl
    prevEl: ".swiper-button-prev", // Đã sửa từ preEl thành prevEl
  },
  thumbs: {
    swiper: productThumb,
  },
});
// stock products bar width percentage
// tạo phần trăm thanh bar 
var stocks = document.querySelectorAll(".products .stock");
for (let x = 0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector(".qty-available").innerHTML,
    sold = stocks[x].querySelector(".qty-sold").innerHTML,
    percent = (sold * 100) / stock;
  stocks[x].querySelector(".available").style.width = percent + "%";
}
