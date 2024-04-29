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
