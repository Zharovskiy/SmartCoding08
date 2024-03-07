import amazon from '../images/pop-up/amazon.webp';
import amazonpng from '../images/pop-up/amazon.png';
import apple from '../images/pop-up/apple.webp';
import applepng from '../images/pop-up/apple.png';
import backendAPI from './fetchAPI';
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
    bookApi = await backendAPI.getBookDescription(bookId);
    createBookMarkup(bookApi);
    setTimeout(() => {
      createShoppingBtn(bookApi);
      modalShoppingBtn.addEventListener('click', onUpdateShopList);
    }, 0);
  } catch (error) {
    console.log('помилка', error);
  }
}
async function createShoppingBtn(data) {
  const storage = await load('bookList');
  if (!storage || storage.length === 0) {
    addBtn();
    return;
  }
  const addedBook = storage.find(book => book._id === data._id);
  if (addedBook) {
    removeBtn();
  } else {
    addBtn();
  }
}
function onUpdateShopList() {
  const storage = load('bookList');
  const id = bookApi._id; // Оновлено
  if (modalShoppingBtn.textContent === 'add to shopping list') {
    addBookToStorage(bookApi);
    removeBtn();
  } else {
    storage.forEach((book, ind, arr) => {
      if (book._id === id) {
        return arr.splice(ind, 1);
      }
    });
    save('bookList', storage);
    if (storage.length === 0) {
      remove('bookList');
    }
    addBtn();
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
            <img class="icon-link-amazon" src="${amazonpng}" alt="Amazon"/>
          </picture>
        </a>
        <a href="${book.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
          <picture class="modal-icon">
            <source srcset="${apple}" type="image/webp"/>
            <source srcset="${applepng}" type="image/png"/>
            <img class="icon-link-apple" src="${applepng}" alt="Apple Books"/>
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
const addBookToStorage = book => {
  const bookStorage = load('bookList') || [];
  const { _id, title, list_name, description, author, book_image } = book; // Оновлено
  const bookInfo = {
      _id, // Оновлено
      title,
      list_name,
      description,
      author,
      book_image,
      amazon: book.buy_links[0].url,
      apple: book.buy_links[1].url,
      bookShop: book.buy_links[4].url,
  }
  if (bookStorage.length !== 0) {
    const bookInStorage = bookStorage.find(book => book._id === bookInfo._id);
    if (!bookInStorage) {
      bookStorage.push(bookInfo);
      save('bookList', bookStorage);
    }
    return;
  }
  bookStorage.push(bookInfo);
  save('bookList', bookStorage);
}
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};
const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Remove item error: ', error.message);
  }
};
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

