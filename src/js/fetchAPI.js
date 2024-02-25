import axios from 'axios';

axios.defaults.baseURL = `https://books-backend.p.goit.global/books`;

const backendAPI = {
  getCategoryList: async function () {
    try {
      const response = await axios.get(`/category-list`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getBestSellers: async function () {
    try {
      const response = await axios.get(`/top-books`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getCategory: async function (selected) {
    try {
      const response = await axios.get(`/category?category=${selected}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getBookID: async function (id) {
    try {
      const response = await axios.get(`${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default backendAPI;
