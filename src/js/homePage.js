import backendAPI from './fetchAPI';
import { renderCategoryPage } from './categories';

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

export function bookTemplate({ title, author, book_image, _id }) {
  return `<li class="book-category-item" data-id="${_id}">
    <div class = "img-cover">
      <img class="book-category-image" src="${book_image}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${title}</h3>
      <p class = "author-name"> ${author}</p>
    </div>
 </li>`;
}


// Рендер сторінки

export function renderBestBooks(bestBooks) {
  const bestBooksContainer = document.querySelector('.bestsellers-container');
  bestBooksContainer.innerHTML = '';
  renderTitle('.bestsellers-container', 'Best Sellers Books');
  bestBooksContainer.insertAdjacentHTML(
    'beforeend',
    `<ul class="bestsellers-list"></ul>`
  );
  const bestBooksList = document.querySelector('.bestsellers-list');

  const markup = bestBooks
    .map(({ books, list_name }) => {
      return `<li class="bestsellers-item">
              <h2 class="bestsellers-category-title">${list_name}</h2>
              <ul class="bestsellers-books-list"> 
                ${books
                  .map(({ title, author, book_image, _id }) => {
                    return bookTemplate({ title, author, book_image, _id });
                  })
                  .join('\n')}
              </ul>
              <button class="bestsellers-btn" type="button" data-category="${list_name}">See more</button>
            </li>`;
    })
    .join('\n');

  bestBooksList.insertAdjacentHTML('beforeend', markup);

  const bestsellersList = document.querySelector('.bestsellers-list');
  bestsellersList.addEventListener('click', onButtonClick);
}

// Функція для відображення Best Sellers Books

export async function BestsellersBooks() {
  try {
    const bestSellersData = await backendAPI.getBestSellers();
    return renderBestBooks(bestSellersData);
  } catch (error) {
    console.error('Error fetching best sellers:', error);
  }
}
BestsellersBooks();

// Слухач на кнопку

async function onButtonClick(e) {
  try{
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  let category = e.target.dataset.category;
  const allCategoryItem = document.querySelector('.sidebar-category-item');
  const sidebarCategoryList = document.querySelectorAll(
    '.sidebar-category-item'
  );

  sidebarCategoryList.forEach(el => {
    if (el.dataset.source === category) {
      allCategoryItem.classList.remove('category-active');
      el.classList.add('category-active');
    }
  });

  const openCategory = await backendAPI.getCategory(category);
    renderCategoryPage(openCategory, category);
  } catch(error) {
    console.log('Error fetching modal:', error); 
  }
}
