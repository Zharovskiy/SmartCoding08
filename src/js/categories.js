import backendAPI from './fetchAPI';

const categorySelectors = {
  categoryContainer: document.querySelector('.category-container'),
  categoryList: document.querySelector('.category-list'),
  categoryItem: document.querySelector('.category-item'),
  allCategory: document.querySelector('.all-category'),
};

function categoryMarkup(data) {
  const result = data
    .map(item =>
      `<li data-category="${item.list_name}" class='category-item'>${item.list_name}</li>`)
    .join('');
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

function renderCategoryPage(data) {
  
}

(async () => {
  try {
    const categoryData = await backendAPI.getCategoryList();
    const markup = categoryMarkup(categoryData);
    categorySelectors.categoryList.innerHTML = markup;
    
    categorySelectors.categoryList.addEventListener('click', (event) => {
      if (event.target.classList.contains('category-item')) {
        const categoryName = event.target.dataset.category;
        loadCategory(categoryName);
      }
    });
  } catch (error) {
    console.log(error);
  }
})();