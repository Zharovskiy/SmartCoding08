import backendAPI from './fetchAPI';
import { pageContainer } from '../main';

export default async function loadBooksCategory (category) {
    pageContainer.innerHTML = '';
    // додати лоадер
    const data = await backendAPI.getCategory(category);
    renderBooks(data);
}

function renderBooks (data) {
    const markupCard = data.map(({_id, book_image, title, author}) => 
        `<li class="book-card" id="${_id}">
        <div class="box-overlay">
            <img class="book-image" src="${book_image}" alt="Book">
            <p class="overlay">Quick view</p>
        </div>
        <div class="book-text">
            <h3 class="book-title">${title}</h3>
            <p class="book-description">${author}</p>
        </div>
        </li>`).join('');

    const markupBooks = 
        `<h2 class="page-title">Hardcover<span class="titel-color"> Fiction</span></h2>
        <ul class="books">
        ${markupCard}
        </ul>`;
    // видалити лоадер
    pageContainer.insertAdjacentHTML('afterbegin', markupBooks);
}

