import backendAPI from './fetchAPI';

const categoriesBooksList = document.querySelector('.categories-books-list');

const renderBooks = async () => {
  try {
    const bestSellersData = await backendAPI.getBestSellers();
    const markup = bestSellersData
      .map(({ books, list_name }) => {
        return `<li class="categories-item">${list_name}
                <ul class="categories-books-list"> 
                    ${books
                      .map(({ book_image, title, author }) => {
                        return `<li class="categories-item">
                            <img class="categories-img" src='${book_image}' alt="" />
                            <h3 class="categories-book-title">${title}</h3>
                            <p class="categories-book-author">${author}</p>
                        </li>`;
                      })
                      .join('\n')}
                </ul>
                <button class="categories-btn" type="button">See more</button>
            </li>`;
      })
      .join('\n');

    categoriesBooksList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error('Error fetching best sellers:', error);
  }
};

renderBooks();
