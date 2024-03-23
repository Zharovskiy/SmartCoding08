// кнопка перемикача
function theme() {
  const toggleTheme = document.querySelector('.toggle-theme');
  let el = document.documentElement;

  toggleTheme.addEventListener('click', event => {
    event.preventDefault();
    if (el.hasAttribute('data-theme')) {
      el.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    } else {
      el.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  if (localStorage.getItem('theme') !== null) {
    el.setAttribute('data-theme', 'dark');
  }
}

theme();
// кнопка перемикача

// мобільне меню
const burgerBtn = document.querySelector('.btn-menu');
const mobMenu = document.getElementById('mobile-menu');
const iconClose = document.querySelector('.icon-menu-mobile');
const header = document.querySelector('.header');
burgerBtn.addEventListener('click', () => {
  mobMenu.classList.toggle('is-hidden');

  if (mobMenu.classList.contains('is-hidden')) {
    header.classList.remove('cont-header-menu');

    iconClose.setAttribute('href', '../images/sprite.svg#burger');
  } else {
    header.classList.add('cont-header-menu');

    iconClose.setAttribute('href', '../images/sprite.svg#x-close');
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    header.classList.remove('cont-header-menu');
  }
});
// мобільне меню

// підсвічування кнопок навігації по активній сторінці
const homePage = document.getElementById('home-page-active');
const shopPage = document.getElementById('shopping-page-active');
const homeBtn = document.getElementById('header-home-btn');
const shopBtn = document.getElementById('header-shop-btn');

if (homePage !== null) {
  homeBtn.classList.add('list-nav-active');
}

if (shopPage !== null) {
  shopBtn.classList.add('list-nav-active');
}
// підсвічування кнопок навігації по активній сторінці
