import backendAPI from './fetchAPI';
import { pageContainer } from '../main';

export default async function loadBooksCategory (category) {
    pageContainer.innerHTML = '';
    // додати лоадер кружочок
    const data = await backendAPI.getCategory(category);
    renderBooks(data);
}

function renderBooks (data) {
    const markupCard = data.map((book) => {
            createBookCard(book);
            // console.log(createBookCard(book)) 
         }).join('');

         console.log(markupCard);

    const markupBooks = 
        `<h2 class="page-title">Hardcover<span class="titel-color"> Fiction</span></h2>
        <ul class="books">
        ${markupCard}
        </ul>`;
    // видалити лоадер
    // console.log(markupBooks);
    pageContainer.insertAdjacentHTML('beforeend', markupBooks);
}

function createBookCard ({_id, book_image, title, author}) {
    const markup =
    `<li class="book-card" id="${_id}">
    <div class="box-overlay">
        <img class="book-image" src="${book_image}" alt="Book">
        <p class="overlay">Quick view</p>
    </div>
    <div class="book-text">
        <h3 class="book-title">${title}</h3>
        <p class="book-description">${author}</p>
    </div>
    </li>`
    return markup
}

