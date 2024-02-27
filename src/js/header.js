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
