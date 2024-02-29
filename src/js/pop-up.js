// -----------images----------
import amazon from '../images/pop-up/amazon.webp';
import amazonpng from '../images/pop-up/amazon.png';
import apple from '../images/pop-up/books.webp';
import applepng from '../images/pop-up/books.png';
// -----------------------------
import { LocalStorage } from './localStorage.js';
import backendAPI from './fetchAPI';

const localStor = new LocalStorage()
const backdrop = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');
const modalShoppingBtn = document.querySelector('.modal-add-to-cart');
const container = document.querySelector('.modal-card');

let bookApi = {};

addListener()

function addListener() {
  const bookContainer = document.querySelectorAll('.book-category-item');
  console.log(bookContainer)
  bookContainer.forEach(book =>
    book.addEventListener('click', () => {
      console.log('click')
    })
  );
}
// onOpenModalWindow
// addListener();

async function onOpenModalWindow(event) {
  document.body.style.overflow = 'is-hidden';
  backdrop.classList.toggle('is-hidden');
  backdrop.addEventListener('click', onBackdrop);
  window.addEventListener('keydown', onEsc);
  closeBtn.addEventListener('click', onCloseModalWindow);
  try {
    bookApi._id = event.currentTarget.dataset._id;
    const resp = await backendAPI.getBookDescription(_id);
    bookApi = resp;
    console.log(resp);
    createBookMarkup(bookApi);
    setTimeout(() => {
      createShoppingBtn(bookApi);
    }, 0);
    modalShoppingBtn.addEventListener('click', onUpdateShopList);
  } catch {
    console.log('помилка') 
  }
}
async function createShoppingBtn(data) {
  const storage = await localStor.getProducts();
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

function addBtn() {
  modalShoppingBtn.textContent = 'add to shopping list';
  modalInfo.style.display = 'none';
}
function removeBtn() {
  modalShoppingBtn.textContent = 'remove from the shopping list';
  modalInfo.style.display = 'block';
}
function createBookMarkup(book) {
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
  backdrop.classList.toggle('is-hidden');
  document.body.style.overflow = 'visible';
  backdrop.removeEventListener('click', onBackdrop);
  window.removeEventListener('keydown', onEsc);
  closeBtn.removeEventListener('click', onCloseModalWindow);
}