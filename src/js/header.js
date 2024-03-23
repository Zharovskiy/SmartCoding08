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
const iconBurger = document.getElementById('icon-burger');
const iconClose = document.getElementById('icon-x-close');
const mobMenu = document.getElementById('mobile-menu');

burgerBtn.addEventListener('click', toggleMobileMenu);
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }
});

function toggleMobileMenu() {
  if (mobMenu.classList.contains('is-hidden')) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
}

function openMobileMenu() {
  mobMenu.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  iconBurger.classList.add('is-hidden');
  iconClose.classList.remove('is-hidden');
}

function closeMobileMenu() {
  mobMenu.classList.add('is-hidden');
  document.body.style.overflow = 'visible';
  iconClose.classList.add('is-hidden');
  iconBurger.classList.remove('is-hidden');
}

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
