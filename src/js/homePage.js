import backendAPI from './fetchAPI';

export function renderTitle(containerClass, title) {
  const container = document.querySelector(containerClass);
  const words = title.split(' ');
  const lastWord = words[words.length - 1];
  words.pop();
  title = words.join(' ');
  container.insertAdjacentHTML(
    'afterbegin',
    `<h1 class="page-title">${title} <span class="page-title-highlight">${lastWord}</span></h1>`
  );
}

export function bookTemplate({ title, author, book_image }) {
  return `<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${book_image}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${title}</h3>
      <p class = "author-name"> ${author}</p>
    </div>
  </div>
</li>`;
}

export function renderBestBooks(bestBooks) {
  const bestBooksContainer = document.querySelector('.bestsellers-container');
  bestBooksContainer.innerHTML = '';
  renderTitle('.bestsellers-container', 'Best Sellers Books');
  bestBooksContainer.insertAdjacentHTML('beforeend', `<ul class="bestsellers-list"></ul>`);
  const bestBooksList = document.querySelector('.bestsellers-list');
  
    const markup = bestBooks.map(({ books, list_name }) => {
      return `
            <li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${list_name}</h2>
                <ul class="bestsellers-books-list"> 
                    ${books.map(({ book_image, title, author }) => {return bookTemplate({ book_image, title, author })
                        }).join('\n')}
                </ul>
                <button class="bestsellers-btn" type="button data-category="${list_name}">See more</button>
            </li>`;        
        }).join('\n');
        
  
        bestBooksList.insertAdjacentHTML('beforeend', markup);
}

export async function BestsellersBooks() {
    try {
        const bestSellersData = await backendAPI.getBestSellers();
        return renderBestBooks(bestSellersData);
    } catch (error) {
        console.error("Error fetching best sellers:", error);
    }
}
BestsellersBooks();