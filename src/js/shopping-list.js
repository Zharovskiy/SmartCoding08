import book322_1 from '../images/shopping-list/books_322_@1.webp';
import book322_11 from '../images/shopping-list/books_322_@1.png';
import book322_2 from '../images/shopping-list/books_322_@2.webp';
import book322_22 from '../images/shopping-list/books_322_@2.png';
import book265_1 from '../images/shopping-list/books_265_@1.webp';
import book265_11 from '../images/shopping-list/books_265_@1.png';
import book265_2 from '../images/shopping-list/books_265_@2.webp';
import book265_22 from '../images/shopping-list/books_265_@2.png';

import amazonImg from "../images/shopping-list/amazon.png";
import amazonWebp from "../images/shopping-list/amazon.webp";
import appleBook from "../images/shopping-list/apple.png";
import appleWebp from "../images/shopping-list/apple.webp";
import sprite from "../images/sprite.svg"

import { LocalStorage } from '../js/localStorage';

const storageData = new LocalStorage();
const listContainer = document.querySelector('.js-shopping-list');
const bookStorage = storageData.getProducts();

const shopContainer = async () => {
  if (bookStorage.length !== 0) {

    listContainer.innerHTML = `
        <ul class="shop-cart-list">
            ${getShoppingCartMarkup(bookStorage)}
        </ul>`;

    const deleteCardItem = document.querySelectorAll('.shop-cart-container');
    deleteCardItem.forEach(btn => {
      btn.addEventListener('click', e => {
        if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'svg' || e.target.nodeName === 'use') { 
            console.log(e);
            const elemDelID = e.target.dataset.id;
            const obj = {_id: elemDelID};
            localStorage.putProducts(obj);
            const delBookMarkup = document.getElementById(elemDelID);
            delBookMarkup.remove();
            return;
        } else {
            return;
        }
      }); //end of click
    }); // end forEach
  } else {
    listContainer.innerHTML = emptyShoppingMarkup();
  }
};

function getShoppingCartMarkup (bookColection) {
    const markup = bookColection
      .map(book => {
        const {_id, book_image, title, list_name, description, author, amazon, apple} = book;
        return `<li class="shop-cart-container" data-id="${_id}>
                    <div class="shop-cart-wrap">
                        <div class="shop-image-wrapper">
                            <img class="shop-image" src="${book_image}" alt="${title}">
                        </div>
                        <div class="shop-cart-info">
                            <h2 class="shop-cart-title">${title}</h2>
                            <h3 class="shop-cart-category">${list_name}</h3>
                            <p class="shop-cart-description">${description}</p>
                            <div class="shop-cart-bottom-wrap">
                                <h4 class="shop-cart-author">${author}</h4>
                                <ul class="shop-cart-media">
                                    <li class="shop-cart-media-item">
                                        <a href="${amazon}" target="_blank" rel="noopener noreferrer">
                                            <picture>
                                                <source srcset="${amazonWebp}" type="image/webp" />
                                                <source srcset="${amazonImg}" type="image/png" />
                                                <img class="media-icon amazon-icon" src="${amazonImg}" alt="Amazon logo" />
                                            </picture>
                                        </a>    
                                    </li>
                                    <li class="shop-cart-media-item">
                                        <a href="${apple}" target="_blank" rel="noopener noreferrer">
                                            <picture>
                                                <source srcset="${appleWebp}" type="image/webp" />
                                                <source srcset="${appleBook}" type="image/png" />
                                                <img class="media-icon" src="${appleBook}" alt="Apple book logo" />
                                            </picture>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <button class="shop-cart-btn" type="button">
                                <svg class="shop-cart-btn-trash">
                                    <use href="${sprite}#trash"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </li>`;
            })
      .join('');
    return markup;
  }

shopContainer();

function emptyShoppingMarkup() {
  return `
    <p class="shopping-list-text">This page is empty, add some books and proceed to order.</p>
        <picture>
            <source media="(min-width: 768px)" srcset="
                            ${book322_1} 1x,
                            ${book322_2} 2x
                            " type="image/webp" />
            <source media="(min-width: 768px)" srcset="
                            ${book322_11} 1x,
                            ${book322_22} 2x
                            " type="image/png" />

            <source media="(max-width: 767px)" srcset="
                            ${book265_1} 1x,
                            ${book265_2} 2x
                            " type="image/webp" />
            <source media="(max-width: 767px)" srcset="
                            ${book265_11} 1x,
                            ${book265_22} 2x
                            " type="image/png" />

            <img class="shopping-list-image" src="${book265_1}" alt="Books" loading="lazy" />
        </picture>
    `;
}
