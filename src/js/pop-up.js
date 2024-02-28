// -----------images----------
import amazon from '../images/shopping/amazon.webp';
import amazonpng from '../images/shopping/amazon.png';
import apple from '../images/shopping/apple.webp';
import applepng from '../images/shopping/apple.png';
// import bookshop from '../images/shopping/bookshop.webp';
// import bookshoppng from '../images/shopping/bookshop.png';
// -----------------------------
import { LocalStorage } from './localStorage.js';
// import { Notify } from 'notiflix';
import { SwaggerAPI } from './swagger-api.js';
// import { countBook } from './templates/shoppingListCounter';
const fetchAPI = new SwaggerAPI();
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-close-btn');
const modalShoppingBtn = document.querySelector('.modal-btn');
const modalInfo = document.querySelector('.modal-info');
const container = document.querySelector('.modal-book');
let bookApi = {};
export default function addListener() {
  const bookContainer = document.querySelectorAll('.book-link');
  bookContainer.forEach(book =>
    book.addEventListener('click', onOpenModalWindow)
  );
}
async function onOpenModalWindow(event) {
  event.preventDefault();
  document.body.style.overflow = 'hidden';
  backdrop.classList.toggle('is-hidden');
  backdrop.addEventListener('click', onBackdrop);
  window.addEventListener('keydown', onEsc);
  closeBtn.addEventListener('click', onCloseModalWindow);
  try {
    fetchAPI.bookId = event.currentTarget.dataset.id;
    const resp = await fetchAPI.fetchBookById();
    bookApi = resp.data;
    createBookMarkup(bookApi);
    setTimeout(() => {
      createShoppingBtn(bookApi);
    }, 0);
    modalShoppingBtn.addEventListener('click', onUpdateShopList);
  } catch {
    Notify.failure(
      'Oops! Something went wrong. We are sorry for the inconvenience. Please try again later.'
    );
  }
}
async function createShoppingBtn(data) {
  const storage = await localStorage.load('bookList');
  if (!storage || storage.length === 0) {
    addBtn();
    return;
  }
  const addedBook = storage.find(book => book.title === data.title);
  if (addedBook) {
    removeBtn();
  } else {
    addBtn();
  }
}
function onUpdateShopList() {
  const storage = localStorage.load('bookList');
  const title = document.querySelector('.modal-book-name').textContent;
  if (modalShoppingBtn.textContent === 'add to shopping list') {
    localStorage.addBookToStorage(bookApi);
    Notify.success('The book has been added to your shopping cart.')
    removeBtn();
    countBook();
  } else {
    storage.forEach((book, ind, arr) => {
      if (book.title === title) {
        return arr.splice(ind, 1);
      }
    });
    localStorage.save('bookList', storage);
    if (storage.length === 0) {
      localStorage.remove('bookList');
    }
    countBook();
    addBtn();
    Notify.failure('The book has been removed from your shopping cart.')
  }
}
function addBtn() {
  modalShoppingBtn.textContent = 'add to shopping list';
  modalInfo.style.display = 'none';
}
function removeBtn() {
  modalShoppingBtn.textContent = 'remove from the shopping list';
  modalInfo.style.display = 'block';
}
function createBookMarkup(book) {
  const markup = `<img
class="modal-img"
src=${book.book_image}
alt="Book cover"
/>
<div class="modal-info-container">
<p class="modal-book-name">${book.title}</p>
<p class="modal-book-author">${book.author}</p>
<p class="modal-list-name is-hidden">${book.list_name}</p>
<p class="modal-book-desc">${book.description}
</p>
<div class="modal-icons-container">
  <a href="${book.buy_links[0].url}" target="_blank" rel="noopener noreferrer"
    ><picture class="modal-icon">
      <source
        srcset="${amazon}"
        type="image/webp"
      />
      <source
        srcset="${amazonpng}"
        type="image/png"
      />
      <img
        src="${amazonpng}"
        alt="Amazon"
      /> </picture
  ></a>
  <a href="${book.buy_links[1].url}" target="_blank" rel="noopener noreferrer"
    ><picture class="modal-icon">
      <source
        srcset="${apple}"
        type="image/webp"
      />
      <source
        srcset="${applepng}"
        type="image/png"
      />
      <img
        src="${applepng}"
        alt="Apple Books"
      /> </picture
  ></a>
  <a href="${book.buy_links[4].url}" target="_blank" rel="noopener noreferrer"
    ><picture class="modal-icon">
      <source
        srcset="${bookshop}"
        type="image/webp"
      />
      <source
        srcset="${bookshoppng}"
        type="image/png"
      />
      <img
        src="${bookshoppng}"
        alt="Bookshop"
      /></picture
  ></a>
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
  backdrop.classList.toggle('is-hidden');
  document.body.style.overflow = 'visible';
  backdrop.removeEventListener('click', onBackdrop);
  window.removeEventListener('keydown', onEsc);
  closeBtn.removeEventListener('click', onCloseModalWindow);
}