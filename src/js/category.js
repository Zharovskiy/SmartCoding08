import backendAPI from './fetchAPI';

const pageContainer = document.querySelector('.home-page');

export default async function loadBooksCategory (category) {
    pageContainer.innerHTML = '';
    // додати лоадер кружочок
    const data = await backendAPI.getCategory(category);
    console.log(data)
    renderBooks(data);
}

function renderBooks (data) {
    const markupBooks = data.map(book => {
       createBookCard(book)
    });

console.log(markupBooks)
}

function createBookCard ({id, book_image, title, author}) {
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
</li>`
}


