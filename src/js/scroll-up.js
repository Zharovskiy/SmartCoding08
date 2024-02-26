document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.createElement('button');
    scrollButton.classList.add('scroll-button');
    scrollButton.textContent = '^';
    document.body.appendChild(scrollButton);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    scrollButton.addEventListener('click', scrollToTop);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });
});