import backendAPI from './fetchAPI';

const pageContainer = document.querySelector('.home-page');

export default async function loadBooksCategory (category) {
    pageContainer.innerHTML = '';
    // додати лоадер кружочок
    const data = await backendAPI.getCategory(category);
    renderBooks(data);
    console.log(data)
}

function renderBooks (data) {
    const markupBooks = 
        `<h2 class="page-title">Title<span class="titel-color"></span></h2>
        <ul class="books">
        ${data.map(({id, book_image, title, author}) => {
            return 
  `<li class="book-card" id="${id}">
  <div class="box-overlay">
      <img class="book-image" src="${book_image}" alt="Book">
      <p class="overlay">Quick view</p>
  </div>
  <div class="book-text">
      <h3 class="book-title">${title}</h3>
      <p class="book-description">${author}</p>
  </div>
</li>`;
        }).join('\n')}
        </ul>`;
    // видалити лоадер
    pageContainer.insertAdjacentHTML('beforeend', markupBooks);
    console.log(markupBooks)
}

// function createBookCard ({id, book_image, title, author}) {
//   return 
//   `<li class="book-card" id="${id}">
//   <div class="box-overlay">
//       <img class="book-image" src="${book_image}" alt="Book">
//       <p class="overlay">Quick view</p>
//   </div>
//   <div class="book-text">
//       <h3 class="book-title">${title}</h3>
//       <p class="book-description">${author}</p>
//   </div>
// </li>`
// }

// const markup = bestSellersData.map(({ books, list_name }) => {
//     return `<li class="categories-item">${list_name}
//         <ul class="categories-books-list"> 
//             ${books.map(({ book_image, title, author }) => {
//                 return `<li class="categories-item">
//                     <img class="categories-img" src='${book_image}' alt="" />
//                     <h3 class="categories-book-title">${title}</h3>
//                     <p class="categories-book-author">${author}</p>
//                 </li>`}).join('\n')}
//         </ul>
//         <button class="categories-btn" type="button">See more</button>
//     </li>`;        
// }).join('\n');

