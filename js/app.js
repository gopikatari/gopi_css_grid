// const navbar = document.querySelector("#nav");
// const navBtn = document.querySelector("#nav-btn");
// const closeBtn = document.querySelector("#close-btn");
// const sidebar = document.querySelector("#sidebar");
// const date = document.querySelector("#date");
// // add fixed class to navbar
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 80) {
//     navbar.classList.add("navbar-fixed");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//   }
// });
// // show sidebar
// navBtn.addEventListener("click", function () {
//   sidebar.classList.add("show-sidebar");
// });
// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });
// // set year
// date.innerHTML = new Date().getFullYear();

const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const sidebar = document.querySelector('#sidebar');
const sidebarCloseBtn = document.querySelector('#sidebar-btn');

navBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

sidebarCloseBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('nav-fixed');
  } else {
    navbar.classList.remove('nav-fixed');
  }
});
