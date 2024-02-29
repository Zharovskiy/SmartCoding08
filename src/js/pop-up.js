import amazon from '../images/pop-up/amazon.webp';
import amazonpng from '../images/pop-up/amazon.png';
import apple from '../images/pop-up/books.webp';
import applepng from '../images/pop-up/books.png';
import { LocalStorage } from './localStorage.js';
import backendAPI from './fetchAPI';
const localStor = new LocalStorage();
const backdrop = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');
const modalShoppingBtn = document.querySelector('.modal-add-to-cart');
const container = document.querySelector('.modal-card');
let bookApi = {};
document.addEventListener('DOMContentLoaded', () => {
  addListener();
});
function addListener() {
  document.addEventListener('click', (event) => {
    const clickedBook = event.target.closest('.book-category-item');
    if (clickedBook) {
      const bookId = clickedBook.dataset.id;
      console.log('Selected Book ID:', bookId);
      onOpenModalWindow(event);
    }
  });
}
async function onOpenModalWindow(event) {
  document.body.style.overflow = 'hidden';
  backdrop.classList.remove('is-hidden');
  backdrop.addEventListener('click', onBackdrop);
  window.addEventListener('keydown', onEsc);
  closeBtn.addEventListener('click', onCloseModalWindow);
  try {
    const bookContainer = event.target.closest('.book-category-item');
    if (!bookContainer) {
      console.error("Book container element not found!");
      return;
    }
    const bookId = bookContainer.dataset.id;
    console.log('Selected Book ID (from onOpenModalWindow):', bookId);
    bookApi = await backendAPI.getBookDescription(bookId);
    console.log(bookApi);
    createBookMarkup(bookApi);
    setTimeout(() => {
      createShoppingBtn(bookApi);
      modalShoppingBtn.addEventListener('click', onUpdateShopList);
    }, 0);
  } catch (error) {
    console.log('помилка', error);
  }
}
function createShoppingBtn(data) {
  try {
    const storage = localStor.getProductsSync(); // отримати дані синхронно
    if (!storage || storage.length === 0) {
      addBtn();
    } else {
      const addedBook = storage.find(book => book.title === data.title);
      addedBook ? removeBtn() : addBtn();
    }
  } catch (error) {
    console.error("Error getting products from local storage:", error);
  }
}
function addBtn() {
  modalShoppingBtn.textContent = 'add to shopping list';
  // Додайте код для modalInfo, якщо це необхідно
}
function removeBtn() {
  modalShoppingBtn.textContent = 'remove from the shopping list';
  // Додайте код для modalInfo, якщо це необхідно
}
function createBookMarkup(book) {
  const container = document.querySelector('.modal-card');
  if (!container) {
    console.error("Container element not found!");
    return;
  }
  const markup = `
    <img class="modal-book-cover" src=${book.book_image} alt="Book cover"/>
    <div class="modal-blok-text">
      <p class="modal-book-title">${book.title}</p>
      <p class="modal-author">${book.author}</p>
      <p class="modal-description">${book.description}</p>
      <div class="modal-links">
        <a href="${book.buy_links[0].url}" target="_blank" rel="noopener noreferrer">
          <picture class="modal-icon">
            <source srcset="${amazon}" type="image/webp"/>
            <source srcset="${amazonpng}" type="image/png"/>
            <img src="${amazonpng}" alt="Amazon"/>
          </picture>
        </a>
        <a href="${book.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
          <picture class="modal-icon">
            <source srcset="${apple}" type="image/webp"/>
            <source srcset="${applepng}" type="image/png"/>
            <img src="${applepng}" alt="Apple Books"/>
          </picture>
        </a>
      </div>
    </div>`;
  container.innerHTML = markup;
}
function onEsc(event) {
  if (event.key === 'Escape') {
    onCloseModalWindow();
  }
}
function onBackdrop(event) {
  if (event.target === backdrop) {
    onCloseModalWindow();
  }
}
function onCloseModalWindow() {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = 'visible';
  backdrop.removeEventListener('click', onBackdrop);
  window.removeEventListener('keydown', onEsc);
  closeBtn.removeEventListener('click', onCloseModalWindow);
}
function onUpdateShopList() {
  // Оновити список покупок за допомогою логіки, яку ви маєте для додавання/видалення елементів.
}