import axios from "axios";

export class BooksApi {
    constructor() {}
    booksAllCategories() {
        axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';
        return axios.get('/category-list');
    }
    booksPopular() {
        axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';
        return axios.get('/top-books');
    }
    booksCategorySeparate(selectedCategory) {
        axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';
        return axios.get('/category', {
            params: {
                category: selectedCategory,
            }
        });
    }
    bookId(bookId) {
        axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';
        return axios.get(bookId);
    }
}