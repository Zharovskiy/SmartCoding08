// кнопка перемикача
function theme() {
    const toggleTheme = document.querySelector('.toggle-theme')
    let el = document.documentElement

    toggleTheme.addEventListener('click', (event) => {
        event.preventDefault();
        if (el.hasAttribute('data-theme')) {
            el.removeAttribute('data-theme')
            localStorage.removeItem('theme')
        } else {
            el.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        }
    })

    if (localStorage.getItem('theme') !== null) {
        el.setAttribute('data-theme', 'dark')
    }
};

theme();
// кнопка перемикача

// мобільне меню
const burgerBtn = document.querySelector('.btn-menu');
const mobMenu = document.getElementById('mobile-menu');
const iconClose = document.querySelector('.icon-menu-mobile');
const header = document.querySelector('.header');
burgerBtn.addEventListener('click', () => {
    mobMenu.classList.toggle("is-hidden");

    if (mobMenu.classList.contains('is-hidden')) {
        header.classList.remove('cont-header-menu');

        iconClose.setAttribute('href', './images/header/mobile-header-icon.svg#icon-left');
    } else {
        header.classList.add('cont-header-menu');
        
        iconClose.setAttribute('href', './images/header/mobile-heder-icons.svg#icon-x-close');
    }

})
window.addEventListener('resize', () => {
    
    if (window.innerWidth >= 768) {
        
        header.classList.remove('cont-header-menu');
    }
});

// мобільне меню
