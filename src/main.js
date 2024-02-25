import * as header from './js/header.js';
import * as categories from './js/categories.js';
import * as supportUkraine from './js/support-ukraine';
import * as homePage from './js/homePage.js';
import * as category from './js/category.js'
import * as shoppingList from './js/shopping-list.js';
import * as menu from './js/menu.js';
import * as popUp from './js/pop-up.js';








// Для тестування localStorage
import { LocalStorage } from './js/localStorage.js';
const localStorage = new LocalStorage();

const books = {
  id: '1',
  urlImg: '',
  name: '',
  category: '',
  description: '',
  author: '',
  urlMarket: [] 
}

const a = localStorage.getProducts();
console.log(a);



// Для виклику сторінки Category
// import loadBooksCategory from './js/category.js';
// loadBooksCategory('Hardcover Fiction');
