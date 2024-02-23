import * as header from './js/header.js';
import * as categories from './js/categories.js';
import * as supportUkraine from './js/support-ukraine';
import * as homePage from './js/homePage.js';
import * as shoppingList from './js/shopping-list.js';
import * as menu from './js/menu.js';
import * as popUp from './js/pop-up.js';
import { BooksApi } from './js/fetchAPI.js';
const booksApi = new BooksApi();
async function loadData () {
    // loadBtn.insertAdjacentHTML('afterbegin', '<span class="loader"></span>');
    try {
      const response = await booksApi.bookId('643282b1e85766588626a0dc');
      console.log(response)
    }
    catch (error) {
    }
  }
loadData()