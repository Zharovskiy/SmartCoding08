// import backendAPI from './fetchAPI';
// import { pageContainer } from '../main';

// export default async function loadBooksCategory (category) {
//     pageContainer.innerHTML = '';
//     // додати лоадер
//     const data = await backendAPI.getCategory(category);
//     renderBooks(data);
// }

// function renderBooks (data) {
//     const markupCard = data.map(({_id, book_image, title, author}) => 
//         `<li class="category-book-card" id="${_id}">
//         <div class="category-box-overlay">
//             <img class="category-book-image" src="${book_image}" alt="Book">
//             <p class="category-overlay">Quick view</p>
//         </div>
//         <div class="category-book-text">
//             <h3 class="category-book-title">${title}</h3>
//             <p class="category-book-description">${author}</p>
//         </div>
//         </li>`).join('');

//     const markupBooks = 
//         `<h2 class="category-page-title">Hardcover<span class="category-titel-color"> Fiction</span></h2>
//         <ul class="category-books">
//         ${markupCard}
//         </ul>`;
//     // видалити лоадер
//     pageContainer.insertAdjacentHTML('afterbegin', markupBooks);
// }

