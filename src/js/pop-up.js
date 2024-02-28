import { LocalStorage } from './localStorage.js';
import { backendAPI } from './fetchAPI.js'; 
import { renderTitle, bookTemplate } from './homePage.js'; // Імпортуємо функції з homePage.js

const localStorageUtil = new LocalStorage(); 
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.modal-close');
const addToCartButton = document.querySelector('.modal-add-to-cart');
const modalShoppingBtn = document.querySelector('.modal-add-to-cart');
const closeBtn = document.querySelector('.modal-close-btn');

export default function addListener() {
    const bookLinks = document.querySelectorAll('.book-link');
    bookLinks.forEach(bookLink =>
        bookLink.addEventListener('click', onOpenModalWindow)
    );
}

async function onOpenModalWindow(event) {
    event.preventDefault();
    const selectedBookId = event.currentTarget.dataset.id;
    try {
        backendAPI.bookId = selectedBookId;
        const resp = await backendAPI.fetchBookById();
        const selectedBook = resp.data;
        createBookMarkup(selectedBook);
        modal.classList.remove('is-hidden'); // Показуємо модальне вікно
        document.body.style.overflow = 'hidden'; // Забороняємо прокрутку тіла документа
        closeButton.addEventListener('click', onCloseModalWindow);
        window.addEventListener('keydown', onEsc);
    } catch (error) {
        console.error('Error occurred while processing data:', error);
    }
}

function createBookMarkup(book) {
    const modalCardContent = document.querySelector('.modal-card');
    modalCardContent.innerHTML = `
        <img class="modal-book-cover" src="${book.book_image}" alt="Book Cover">
        <div class="modal-blok-text">
            <p class="modal-book-title">${book.title}</p>
            <p class="modal-author">${book.author}</p>
            <p class="modal-description">${book.description}</p>
            <div class="modal-links">
                <a href="${book.buy_links[0].url}" target="_blank" rel="noopener noreferrer">
                    <picture class="icon-link-amazon">
                        <source srcset="${book.buy_links[0].webp}" type="image/webp"/>
                        <source srcset="${book.buy_links[0].png}" type="image/png"/>
                        <img src="${book.buy_links[0].png}" alt="Amazon"/>
                    </picture>
                </a>
                <a href="${book.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
                    <picture class="icon-link-apple">
                        <source srcset="${book.buy_links[1].webp}" type="image/webp"/>
                        <source srcset="${book.buy_links[1].png}" type="image/png"/>
                        <img src="${book.buy_links[1].png}" alt="Apple Books"/>
                    </picture>
                </a>
            </div>
        </div>`;
    
    modalShoppingBtn.addEventListener('click', () => onUpdateShopList(book));
}

async function onUpdateShopList(bookData) {
    const storage = await localStorageUtil.getProducts();
    const isBookAdded = storage.some(book => book.id === bookData.id);
    if (!isBookAdded) {
        localStorageUtil.putProducts(bookData); 
        addBtn();
    } else {
        localStorageUtil.removeProduct(bookData.id); 
        removeBtn();
    }
}

function addBtn() {
    modalShoppingBtn.textContent = 'Remove from Shopping List';
}

function removeBtn() {
    modalShoppingBtn.textContent = 'Add to Shopping List';
}

function onEsc(event) {
    if (event.key === 'Escape') {
        onCloseModalWindow();
    }
}

function onCloseModalWindow() {
    modal.classList.add('is-hidden'); // Приховуємо модальне вікно
    document.body.style.overflow = 'visible'; // Відновлюємо прокрутку тіла документа
    closeButton.removeEventListener('click', onCloseModalWindow);
    window.removeEventListener('keydown', onEsc);
}