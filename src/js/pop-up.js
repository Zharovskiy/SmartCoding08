import { LocalStorage } from './localStorage.js';

const bookCardListener = document.querySelectorAll('.book-category-item');
bookCardListener.forEach(card => {
  card.addEventListener('click', () => {
    console.log(event);
  });
});

function openPopUp (event) {
  const elemID = event.target.dataset.id;
  console.log('elemID');



  // localStorage.putProducts({_id: elemDelID});
  // const delBookMarkup = document.getElementById(elemDelID);
  // delBookMarkup.remove();
}

// document.addEventListener('DOMContentLoaded', function() {
//   const modal = document.getElementById('modal');
//   const closeButton = document.querySelector('.modal-close');
//    const addToCartButton = document.querySelector('.modal-add-to-cart');
//   const amazonLogo = document.querySelector('.logo-amazon');
//   const appleLogo = document.querySelector('.logo-apple');

//   const localStorageInstance = new LocalStorage();

//   function openModal() {
//     modal.style.display = 'block';
//     document.body.style.overflow = 'hidden';
//     document.documentElement.style.overflow = 'hidden'; // Блокування прокрутки
//   }

//   function closeModal() {
//     modal.style.display = 'none';
//     document.body.style.overflow = 'auto';
//     document.documentElement.style.overflow = 'auto'; // Розблакування прокрутки
//   }

//   closeButton.addEventListener('click', closeModal);

//   modal.addEventListener('click', function(event) {
//     if (event.target === modal) {
//       closeModal();
//     }
//   });

//   document.addEventListener('keydown', function(event) {
//     if (event.key === 'Escape') {
//       closeModal();
//     }
//   });

//   // Додайте обробники подій для кожного логотипу
//   amazonLogo.addEventListener('click', function(event) {
//     event.preventDefault(); // Зупиніть перехід за замовчуванням
//     window.open(this.href, '_blank'); // Відкриття посилання у новій вкладці
//   });

//   appleLogo.addEventListener('click', function(event) {
//     event.preventDefault(); // Зупиніть перехід за замовчуванням
//     window.open(this.href, '_blank'); // Відкриття посилання у новій вкладці
//   });

//   // Функція для оновлення вмісту модального вікна
//   function updateModal(book) {
//     const bookCover = modal.querySelector('.book-cover');
//     const bookTitle = modal.querySelector('.book-title');
//     const author = modal.querySelector('.author');
//     const description = modal.querySelector('.description');
//     const links = modal.querySelector('.links');

//     bookCover.src = book.coverImageUrl;
//     bookTitle.textContent = book.title;
//     author.textContent = 'Author: ' + book.author;
//     description.textContent = book.description;

//     // Очистити попередні посилання
//     links.innerHTML = '';

//     // Додати посилання на торгівельні майданчики
//     book.links.forEach(function(link) {
//       const anchor = document.createElement('a');
//       anchor.href = link.url;
//       anchor.target = '_blank';

//       // Додайте зображення логотипу замість тексту посилання
//       const logoImg = document.createElement('img');
//       logoImg.src = link.logoUrl;
//       logoImg.alt = link.name;
//       anchor.appendChild(logoImg);

//       links.appendChild(anchor);
//     });

//     // Перевірка, чи книга вже є в кошику
//     const isInShoppingList = localStorageInstance.checkProduct(book.id).hasProd;

//     if (isInShoppingList) {
//       addToCartButton.textContent = 'Remove from Shopping List';
//     } else {
//       addToCartButton.textContent = 'Add to Shopping List';
//     }
//   }

//   // Пошук книги
//   const exampleBook = {
//     id: 1,
//     coverImageUrl: 'https://example.com/book-cover.jpg',
//     title: 'Example Book Title',
//     author: 'John Doe',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     links: [
//       { logoUrl: '/src/images/pop-up/amazon.svg', url: 'https://www.amazon.com' },
//       { logoUrl: '/src/images/pop-up/apple.svg', url: 'https://books.apple.com' }
//     ]
//   };

//   updateModal(exampleBook);
// });