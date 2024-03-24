// підсвічування кнопок навігації по активній сторінці
const homePage = document.getElementById('home-page-active');
const shopPage = document.getElementById('shopping-page-active');
const homeBtn = document.getElementById('header-home-btn');
const shopBtn = document.getElementById('header-shop-btn');

if (homePage !== null) {
  homeBtn.classList.add('js-header-link-nav-active');
}

if (shopPage !== null) {
  shopBtn.classList.add('js-header-link-nav-active');
  shopBtn
    .querySelector('.header-icon-shop')
    .classList.add('js-header-icon-shop-active');
}

// кнопка перемикача теми
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

// Відкривання/закривання мобільного меню
const burgerBtn = document.querySelector('.btn-menu');
const iconBurger = document.getElementById('icon-burger');
const iconClose = document.getElementById('icon-x-close');
const mobMenu = document.getElementById('mobile-menu');
const header = document.querySelector('.header');

burgerBtn.addEventListener('click', toggleMobileMenu);

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && !mobMenu.classList.contains('is-hidden')) {
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
  header.classList.add('js-header-fix-mob-menu');
}

function closeMobileMenu() {
  mobMenu.classList.add('is-hidden');
  document.body.style.overflow = 'visible';
  iconClose.classList.add('is-hidden');
  iconBurger.classList.remove('is-hidden');
  header.classList.remove('js-header-fix-mob-menu');
}
