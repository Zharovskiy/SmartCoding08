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

// open/close mob menu
const burgerBtn = document.querySelector('.btn-menu');
const iconBurger = document.getElementById('icon-burger');
const iconClose = document.getElementById('icon-x-close');
const mobMenu = document.getElementById('mobile-menu');
const header = document.querySelector('.header');

burgerBtn.addEventListener('click', toggleMobileMenu);

// Видалення глобального контейнера з мобільної версії для розтягування хедера на весь вюпорт
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    document.querySelector('.cont-header').classList.remove('container');
  } else {
    document.querySelector('.cont-header').classList.add('container');
  }
});

// Закривання мобільного меню при виході з мобільного вюпорта
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
  header.classList.add('header-fix-mob-menu');
}

function closeMobileMenu() {
  mobMenu.classList.add('is-hidden');
  document.body.style.overflow = 'visible';
  iconClose.classList.add('is-hidden');
  iconBurger.classList.remove('is-hidden');
  header.classList.remove('header-fix-mob-menu');
}
// open/close mob menu

// підсвічування кнопок навігації по активній сторінці
const homePage = document.getElementById('home-page-active');
const shopPage = document.getElementById('shopping-page-active');
const homeBtn = document.getElementById('header-home-btn');
const shopBtn = document.getElementById('header-shop-btn');

if (homePage !== null) {
  homeBtn.classList.add('list-nav-active');
  homeBtn.querySelector('.link-nav').classList.add('text-nav-active');
}

if (shopPage !== null) {
  shopBtn.classList.add('list-nav-active');
  shopBtn.querySelector('.link-nav').classList.add('text-nav-active');
  shopBtn
    .querySelector('.icon-shop-header')
    .classList.add('icon-shop-header-active');
}
// підсвічування кнопок навігації по активній сторінці
