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

export function renderCategoryPage(books, category) {
  const pageContainer = document.querySelector('.bestsellers-container');
  pageContainer.innerHTML = '';
  const markupTitle =
    '<h1 class = "bestsellers-title"></h1> <ul class = "book-category-list"></ul>';
  pageContainer.innerHTML = markupTitle;
  const categoryPage = document.querySelector('.book-category-list');
  const categoryTitle = document.querySelector('.bestsellers-title');
  categoryTitle.textContent = category;
  const markup = books
    .map(
      ({ author, book_image, title }) => `<li class="book-category-item">
        <div class="book-category-card">
          <img class="book-category-image" src="${book_image}" alt="Book cover" width="180" />
          <div class="book-category-text">
            <h3 class = "book-title">
            ${title}</h3>
            <p class = "author-name"> ${author}</p>
          </div>
        </div>
      </li>`
    )
    .join('');

  categoryPage.innerHTML = markup;
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
    ).join('');
  return result;
}

async function loadCategory(categoryName) {
  console.log('Loading category:', categoryName);
  try {
    const categoryData = await backendAPI.getCategoryList(categoryName);
    renderCategoryPage(categoryData);
  } catch (error) {
    console.log(error);
  }
}

function renderAllCategoriesButton() {
  const allCategoriesButton = `<li class="category-item all-category category-active">All categories</li>`;
  categorySelectors.categoryList.insertAdjacentHTML('afterbegin', allCategoriesButton);
  categorySelectors.allCategory = document.querySelector('.all-category');
  categorySelectors.allCategory.addEventListener('click', () => {
    loadCategory('all');
  });
}

(async () => {
  try {
    const categoryData = await backendAPI.getCategoryList();
    const markup = categoryMarkup(categoryData);
    categorySelectors.categoryList.innerHTML = markup;

    renderAllCategoriesButton();
    
    categorySelectors.categoryList.addEventListener('click', (event) => {
  if (event.target.classList.contains('category-item')) {
    categorySelectors.categoryList.querySelectorAll('.category-item').forEach(item => {
      item.classList.remove('active');
    });
    const categoryName = event.target.dataset.category;
    loadCategory(categoryName);
    event.target.classList.add('active');
  }
});
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