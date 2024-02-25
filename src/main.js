import * as header from './js/header.js';
import * as categories from './js/categories.js';
import * as supportUkraine from './js/support-ukraine';
import * as homePage from './js/homePage.js';
import loadBooksCategory from './js/category.js';
import * as shoppingList from './js/shopping-list.js';
import * as menu from './js/menu.js';
import * as popUp from './js/pop-up.js';

// Контейнер для рендеру сторінок
export const pageContainer = document.querySelector('.home-page');

// Виклик по Кнопка лого і Кнопка Номе
// export function firstLoad () {
    // Видалити все з контейнера homePage
    // if() {
// Рендер всіх категорій в сайд барі через перевірку чи секція наявна
    // } 
    // Саппорт Україна
    // Бестселлерс
// }

// Виклик по натисканню на кнопку шоппінг ліст
// export function loadShoppingList () {
    // Видалити все з контейнера homePage
    // Видалити секцію категорії в сайдбарі
    // Рендер Шоппінг ліст
// }

// Виклик сторінки категорії книг
// export function loadCategory (category) {
    // Видалити все з контейнера homePage
    // if() {
    // Рендер всіх категорій в сайд барі через перевірку чи секція наявна
    // }
// }

// Перше завантаження виклик
// firstLoad();


// loadBooksCategory('Hardcover Fiction');



// Для тестування localStorage
// import { LocalStorage } from './js/localStorage.js';
// const localStorage = new LocalStorage();

// const books = {
//   id: '1',
//   urlImg: '',
//   name: '',
//   category: '',
//   description: '',
//   author: '',
//   urlMarket: [] 
// }



// const a = localStorage.getProducts();
// console.log(a);

