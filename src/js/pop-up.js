document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const closeButton = document.querySelector('.close');
  const addToCartButton = document.querySelector('.add-to-cart');
  
  function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  closeButton.addEventListener('click', closeModal);
  
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
  
  // Функція для оновлення вмісту модального вікна
  function updateModal(book) {
    const bookCover = modal.querySelector('.book-cover');
    const bookTitle = modal.querySelector('.book-title');
    const author = modal.querySelector('.author');
    const description = modal.querySelector('.description');
    const links = modal.querySelector('.links');
    
    bookCover.src = book.coverImageUrl;
    bookTitle.textContent = book.title;
    author.textContent = 'Author: ' + book.author;
    description.textContent = book.description;
    
    // Очистити попередні посилання
    links.innerHTML = '';
    
    // Додати посилання на торгові майданчики
    book.links.forEach(function(link) {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.name;
      anchor.target = '_blank';
      links.appendChild(anchor);
    });
    
    // Перевірка, чи книга вже є в кошику
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    const isInShoppingList = shoppingList.some(function(item) {
      return item.id === book.id;
    });
    
    if (isInShoppingList) {
      addToCartButton.textContent = 'Remove from Shopping List';
    } else {
      addToCartButton.textContent = 'Add to Shopping List';
    }
  }
  
  // Пошук книги
  const exampleBook = {
    id: 1,
    coverImageUrl: 'https://example.com/book-cover.jpg',
    title: 'Example Book Title',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    links: [
      { name: 'Amazon', url: 'https://www.amazon.com' },
      { name: 'Apple Books', url: 'https://books.apple.com' }
    ]
  };
  
  
  updateModal(exampleBook);
});