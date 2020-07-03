const hamburger = document.querySelector('.menu-toggler');
const topnav = document.querySelector('.top-nav');
const navlink = document.querySelectorAll('.nav-link');

function toggle() {
    topnav.classList.toggle('activate');
}

hamburger.addEventListener('click', toggle);
Array.from(navlink).forEach(function (item) {
  item.addEventListener('click', toggle);
});