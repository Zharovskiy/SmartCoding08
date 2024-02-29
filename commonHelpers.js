import"./assets/scroll-up-31c00165.js";const r=document.querySelector(".js-shopping-list"),i=o=>{try{const e=localStorage.getItem(o);return e?JSON.parse(e):[]}catch(e){return console.error("Error loading data from local storage:",e.message),[]}},n=(o,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(o,s)}catch(s){console.error("Error saving data to local storage:",s.message)}},l=(o,e)=>{const t=i(e).filter(a=>a._id!==o);n(e,t),c(t)},c=o=>{if(o&&o.length>0){const e=o.map(t=>`
      <li class="shop-cart-container" data-id="${t._id}">
        <div class="shop-cart-wrap">
          <div class="shop-image-wrapper">
            <img class="shop-image" src="${t.book_image}" alt="${t.title}">
          </div>
          <div class="shop-cart-info">
            <!-- Решта розмітки для кожної книги -->
            <button class="shop-cart-btn-delete" data-id="${t._id}">
              Delete
            </button>
          </div>
        </div>
      </li>
    `).join("");r.innerHTML=`<ul class="shop-cart-list">${e}</ul>`,document.querySelectorAll(".shop-cart-btn-delete").forEach(t=>{t.addEventListener("click",()=>{const a=t.dataset.id;l(a,"bookList")})})}else r.innerHTML=d()};document.addEventListener("DOMContentLoaded",()=>{const e=i("bookList");c(e)});function d(){return`
    <p class="shopping-list-text">This page is empty, add some books and proceed to order.</p>
    <picture>
      <!-- Тут ви можете вставити вашу розмітку для зображення -->
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
      <!-- Тут може бути додаткова розмітка для зображення -->
      <img class="shopping-list-image" src="${book265_1}" alt="Books" loading="lazy" />
    </picture>
  `}
//# sourceMappingURL=commonHelpers.js.map
