import book322_1 from '../images/shopping-list/books_322_@1.webp';
import book322_2 from '../images/shopping-list/books_322_@2.webp';
import book322_11 from '../images/shopping-list/books_322_@1.png';
import book322_22 from '../images/shopping-list/books_322_@2.png';
import book265_1 from '../images/shopping-list/books_265_@1.webp';
import book265_2 from '../images/shopping-list/books_265_@2.webp';
import book265_11 from '../images/shopping-list/books_265_@1.png';
import book265_22 from '../images/shopping-list/books_265_@2.png';


import amazonImg from "../images/shopping-list/amazon.png";
import amazonWebp from "../images/shopping-list/amazon.webp";
import appleBook from "../images/shopping-list/apple.png";
import appleWebp from "../images/shopping-list/apple.webp";
import sprite from "../images/sprite.svg";
const listContainer = document.querySelector('.js-shopping-list');
// Отримуємо дані з локального сховища за ключем 'bookList'
const loadFromLocalStorage = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData ? JSON.parse(serializedData) : [];
  } catch (error) {
    console.error('Error loading data from local storage:', error.message);
    return [];
  }
};
// Зберігаємо дані у локальному сховищі за ключем 'bookList'
const saveToLocalStorage = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Error saving data to local storage:', error.message);
  }
};
// Видаляємо книгу за ідентифікатором
const deleteBook = (id, key) => {
  const bookStorage = loadFromLocalStorage(key);
  const updatedStorage = bookStorage.filter(book => book._id !== id);
  saveToLocalStorage(key, updatedStorage);
  renderData(updatedStorage);
};
// Рендеримо дані на сторінку
const renderData = (data) => {
  if (data && data.length > 0) {
    const markup = data.map(book => `
    <li class="shop-cart-container" data-id="${book._id}">
        <div class="shop-cart-wrap">
            <div class="shop-image-wrapper">
                <img class="shop-image" src="${book.book_image}" alt="${book.title}">
            </div>
            <div class="shop-cart-info">
                <h2 class="shop-cart-title">${book.title}</h2>
                <h3 class="shop-cart-category">${book.list_name}</h3>
                <p class="shop-cart-description">${book.description}</p>
                <div class="shop-cart-bottom-wrap">
                    <h4 class="shop-cart-author">${book.author}</h4>
                    <ul class="shop-cart-media">
                        <li class="shop-cart-media-item">
                            <a href="${book.amazon}" target="_blank" rel="noopener noreferrer">
                                <picture>
                                    <source srcset="${amazonWebp}" type="image/webp" />
                                    <source srcset="${amazonImg}" type="image/png" />
                                    <img class="media-icon amazon-icon" src="${amazonImg}" alt="Amazon logo" />
                                </picture>
                            </a>    
                        </li>
                        <li class="shop-cart-media-item">
                            <a href="${book.apple}" target="_blank" rel="noopener noreferrer">
                                <picture>
                                    <source srcset="${appleWebp}" type="image/webp" />
                                    <source srcset="${appleBook}" type="image/png" />
                                    <img class="media-icon" src="${appleBook}" alt="Apple book logo" />
                                </picture>
                            </a>
                        </li>
                    </ul>
                </div>
                <button class="shop-cart-btn" type="button" data-id="${book._id}">
                    <svg class="shop-cart-btn-trash">
                        <use href="${sprite}#trash"></use>
                    </svg>
                </button>
            </div>
        </div>
    </li> 
    `).join('');

    listContainer.innerHTML = `<ul class="shop-cart-list">${markup}</ul>`;
    // Додаємо обробник подій для кожної кнопки видалення
    const deleteButtons = document.querySelectorAll('.shop-cart-btn');
    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        const bookId = button.dataset.id;
        deleteBook(bookId, 'bookList');
      });
    });
  } else {
    listContainer.innerHTML = emptyShoppingMarkup();
  }
};
// Завантажуємо дані з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const key = 'bookList';
  const bookStorage = loadFromLocalStorage(key);
  renderData(bookStorage);
  // Додайте інші функції чи виклики, які вам потрібні
});
function emptyShoppingMarkup() {
  return `
    <p class="shopping-list-text">This page is empty, add some books and proceed to order.</p>
    <picture>
      <!-- Тут ви можете вставити вашу розмітку для зображення -->
      <source media="(min-width: 768px)" srcset="
        ${book322_1} 1x,
        ${book322_2} 2x
      " type="image/webp" />
      <source media="(min-width: 768px)" srcset="
        ${book322_11} 1x,
        ${book322_22} 2x
      " type="image/png" />
      <source media="(max-width: 767px)" srcset="
        ${book265_1} 1x,
        ${book265_2} 2x
      " type="image/webp" />
      <source media="(max-width: 767px)" srcset="
        ${book265_11} 1x,
        ${book265_22} 2x
      " type="image/png" />
      <!-- Тут може бути додаткова розмітка для зображення -->
      <img class="shopping-list-image" src="${book265_1}" alt="Books" loading="lazy" />
    </picture>
  `};