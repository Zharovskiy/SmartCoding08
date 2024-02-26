// import { LocalStorage } from '../js/localStorage.js';
const localStorage = new LocalStorage();

// Отримуємо збережені книги з localStorage
const savedBooks = localStorage.getProducts();

// Відображаємо книги на сторінці Shopping list
function displayBooks() {
    const bookList = document.getElementById('bookList');

    // Очищаємо список перед відображенням книг
    bookList.innerHTML = '';

    // Перевірка, чи є дані у localStorage або він доступний
    if (savedBooks.length === 0 || !localStorage) {
        // Якщо localStorage порожній або недоступний, відображаємо статичне зображення
        bookList.innerHTML = `
            <li>
                <picture>
                    <source srcset="../images/shopping-list/placeholder.webp" type="image/webp">
                    <source srcset="../images/shopping-list/placeholder.png" type="image/png">
                    <source srcset="../images/shopping-list/placeholder2x.webp" type="image/webp">
                    <source srcset="../images/shopping-list/placeholder2x.png" type="image/png">
                    <img src="../images/shopping-list/placeholder.png" alt="No Books Added">
                </picture>
            </li>`;
        return;
    }

    // Додаємо кожну збережену книгу до списку
    savedBooks.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        bookList.appendChild(li);
    });
}

// Викликаємо функцію для відображення книг при завантаженні сторінки
displayBooks();
