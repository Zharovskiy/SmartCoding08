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
            <!-- Решта розмітки для кожної книги -->
            <button class="shop-cart-btn-delete" data-id="${book._id}">
              Delete
            </button>
          </div>
        </div>
      </li>
    `).join('');
    listContainer.innerHTML = `<ul class="shop-cart-list">${markup}</ul>`;
    // Додаємо обробник подій для кожної кнопки видалення
    const deleteButtons = document.querySelectorAll('.shop-cart-btn-delete');
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