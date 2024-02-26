import backendAPI from './fetchAPI';
import { renderBestBooks } from './homePage';

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


export function renderCategoryPage(books, category) {
  const pageContainer = document.querySelector('.bestsellers-container');
  pageContainer.innerHTML = '';
  renderTitle('.bestsellers-container', category);
  pageContainer.insertAdjacentHTML(
    'beforeend',
    '<ul class = "book-category-list"></ul>'
  );
  const categoryPage = document.querySelector('.book-category-list');
  const markup = books
    .map(({ author, book_image, title, _id }) => {
      return bookTemplate({ author, book_image, title, _id });
    })
    .join('');

  categoryPage.innerHTML = markup;
  categoryPage.addEventListener('click', onClickBook);
}

const categorySelectors = {
  categoryContainer: document.querySelector('.sidebar-category-container'),
  categoryList: document.querySelector('.sidebar-category-list'),
  allCategory: document.querySelector('.all-category'),
};

//  Розмітка списку категорій

function categoryMarkup(data) {
  const result = data
    .map(
      item =>
        `<li class='sidebar-category-item' data-source="${item.list_name}">${item.list_name}</li>`
    )
    .join('');
  return result;
}

(async () => {
  try {
    const categoryData = await backendAPI.getCategoryList();
    const markup = categoryMarkup(categoryData);
    categorySelectors.categoryList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
})();


// Слухачі подій

categorySelectors.allCategory.addEventListener('click', async event => {
  try {
    const bestBooksData = await backendAPI.getBestSellers();
    renderBestBooks(bestBooksData);
  } catch (error) {
    console.log(error);
  }
});

categorySelectors.categoryList.addEventListener('click', async event => {
  if (event.target.classList.contains('sidebar-category-item')) {
    const category = event.target.dataset.source;

    const categoryItems = document.querySelectorAll('.sidebar-category-item');
    categoryItems.forEach(item => {
      item.classList.remove('category-active');
    });

    event.target.classList.add('category-active');

    try {
      if (!event.target.classList.contains('all-category')) {
        const categoryData = await backendAPI.getCategory(category);
        renderCategoryPage(categoryData, category);
      }
    } catch (error) {
      console.log(error);
    }
  }
});