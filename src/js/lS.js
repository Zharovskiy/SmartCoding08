import { pageContainer } from "../main";
import { LocalStorage } from './localStorage.js';
const localStorage = new LocalStorage();

const shopBtn = document.getElementById('shopping-link');
shopBtn.addEventListener('click', loadShoppingList);

function loadShoppingList () {
    pageContainer.innerHTML = '';

    const categoryList = document.querySelector('.sidebar-category-container');
    if (categoryList !== null) {
        categoryList.remove();
    }


    const dataShop = localStorage.getProducts();
    if(dataShop.length !== 0) {
        renderShoppingList(dataShop);
    } else {
        const markupPageShop = 
        `<h2 class="category-page-title">Shopping<span class="category-titel-color"> List</span></h2>
        <ul class="category-books">
        ${'This page is empty, add some books and proceed to order.'}
        </ul>`;
        pageContainer.insertAdjacentHTML('afterbegin', markupPageShop);
    }
    
}

// Розмітку підставити потрібну
function renderShoppingList(dataShop) {
    const markupCard = dataShop.map(({_id, book_image, title, author}) => 
        `<li class="category-book-card" id='${_id}'>
        <div class="category-box-overlay">
            <img class="category-book-image" data-id="${_id}" src="${book_image}" alt="Book">
            <p class="category-overlay">Quick view</p>
        </div>
        <div class="category-book-text">
            <h3 class="category-book-title">${title}</h3>
            <p class="category-book-description">${author}</p>
        </div>
        </li>`).join('');

    const markupPageShop = 
        `<h2 class="category-page-title">Shopping<span class="category-titel-color"> List</span></h2>
        <ul class="category-books">
        ${markupCard}
        </ul>`;

    pageContainer.insertAdjacentHTML('afterbegin', markupPageShop);
    
    const cardBookShop = document.querySelectorAll('.category-book-card');
    cardBookShop.forEach(cardBook => {
        cardBook.addEventListener('click', delBookFromStorage);
    });
}

function delBookFromStorage (event) {
    const elemDelID = event.target.dataset.id;
    localStorage.putProducts({_id: elemDelID});
    const delBookMarkup = document.getElementById(elemDelID);
    delBookMarkup.remove();
}
    
export default { shopBtn };