import { LocalStorage } from '../js/localStorage';

// Створюємо екземпляр класу LocalStorage
const storage = new LocalStorage();

// Отримуємо збережені книги з localStorage
const savedBooks = storage.getProducts();

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
                    <img src="../images/shopping-list/placeholder.png" alt="No Books Added">
                </picture>
            </li>`;
        return;
    }

    // Створюємо елементи DOM для кожної книги за допомогою методу map
    const bookElements = savedBooks.map(book => {
        const li = document.createElement('li');
        li.classList.add('book-card');

        const bookDetails = `
            <img class="book-cover-img" src="${book.book_image}" alt="Book Cover">
            <div class="book-info">
                <h2 class="book-name-title">${book.title}</h2>
                <p class="book-name-category">${book.list_name}</p>
                <p class="book-short-description">${book.description}</p>
                <div class="book-author-link">
                    <p class="author-full-name">${book.author}</p>
                    <a class="link" href="${book.amazon_product_url}">
                        <img class="icon-link" src="../images/shopping-list/amazon-icon.svg" width="32px" height="11px" alt="Amazon">
                    </a>
                    <a class="link" href="${book.buy_links[1].url}">
                        <img class="icon-link" src="../images/shopping-list/аpple-icon.svg" width="16px" height="16px" alt="Apple Books">
                    </a>
                </div>
                <button class="remove-book">
                    <img class="del-icon" src="../images/shopping-list/trash-03.svg" alt="Delete">
                </button>
            </div>`;

        li.innerHTML = bookDetails;
        return li;
    });

    // Додаємо всі елементи до списку книг
    bookElements.forEach(bookElement => {
        bookList.appendChild(bookElement);
    });
}

// Викликаємо функцію для відображення книг при завантаженні сторінки
displayBooks();
