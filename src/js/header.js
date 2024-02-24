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

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.item-list-nav a');

    // Функція для збереження поточного підсвіченого посилання в локальному сховищі
    function saveHighlightedLink(link) {
        localStorage.setItem('highlightedLink', link.getAttribute('href'));
    }

    // Функція для відновлення підсвіченого посилання при завантаженні сторінки
    function restoreHighlightedLink() {
        const highlightedLink = localStorage.getItem('highlightedLink');
        if (highlightedLink) {
            const link = document.querySelector(`.item-list-nav a[href="${highlightedLink}"]`);
            if (link) {
                link.classList.add('highlight');
            }
        }
    }

    // Відновлюємо підсвічене посилання при завантаженні сторінки
    restoreHighlightedLink();

    // Додаємо обробник кліків до кожного посилання
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const currentHighlightedLink = document.querySelector('.item-list-nav a.highlight');
            if (currentHighlightedLink) {
                currentHighlightedLink.classList.remove('highlight');
            }
            this.classList.add('highlight');
            saveHighlightedLink(this);
            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        });
    });
});