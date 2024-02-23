import axios from 'axios';
const booklist = document.querySelector('.bookList');

async function getBestBooks() {
  const BASE_URl = 'https://books-backend.p.goit.global/books/top-books';
  const response = await axios.get(BASE_URl);
  return response;
}
function bookTemplate(book) {
  return `<li><a class='card' href='${book.book_uri}'>
    <img class="imageBook" src="${book.book_image}"
    alt="${book.contributor}"/>
    <div><h2>${book.name}</h2>
    <p>${book.author}</p></div>
    </a></li>`;
}

function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}
function renderBooks(books) {
  const markup = booksTemplate(books);
  booklist.insertAdjacentHTML('afterbegin', markup);
}
