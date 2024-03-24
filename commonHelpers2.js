import"./assets/scroll-up-ba839ee5.js";import{a as d}from"./assets/vendor-0cb09735.js";d.defaults.baseURL="https://books-backend.p.goit.global/books";const i={getCategoryList:async function(){try{return(await d.get("/category-list")).data}catch(e){console.log(e)}},getBestSellers:async function(){try{return(await d.get("/top-books")).data}catch(e){console.log(e)}},getCategory:async function(e){try{return(await d.get(`/category?category=${e}`)).data}catch(t){console.log(t)}},getBookDescription:async function(e){try{return(await d.get(`/${e}`)).data}catch(t){console.log(t)}}};function z(e,t){const s=document.querySelector(e),o=t.split(" "),r=o[o.length-1];o.pop(),t=o.join(" "),s.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${r}</span></h1>`)}function E({title:e,author:t,book_image:s,_id:o}){return`<li class="book-category-item" data-id="${o}">
    <div class = "img-cover">
      <img class="book-category-image" src="${s}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
 </li>`}function S(e){const t=document.querySelector(".bestsellers-container");t.innerHTML="",z(".bestsellers-container","Best Sellers Books"),t.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const s=document.querySelector(".bestsellers-list"),o=e.map(({books:a,list_name:c})=>`<li class="bestsellers-item">
              <h2 class="bestsellers-category-title">${c}</h2>
              <ul class="bestsellers-books-list"> 
                ${a.map(({title:l,author:n,book_image:L,_id:p})=>E({title:l,author:n,book_image:L,_id:p})).join(`
`)}
              </ul>
              <button class="bestsellers-btn" type="button" data-category="${c}">See more</button>
            </li>`).join(`
`);s.insertAdjacentHTML("beforeend",o),document.querySelector(".bestsellers-list").addEventListener("click",Z)}async function M(){try{const e=await i.getBestSellers();return S(e)}catch(e){console.error("Error fetching best sellers:",e)}}M();async function Z(e){try{if(e.target.nodeName!=="BUTTON")return;let t=e.target.dataset.category;const s=document.querySelector(".sidebar-category-item");document.querySelectorAll(".sidebar-category-item").forEach(a=>{a.dataset.source===t&&(s.classList.remove("category-active"),a.classList.add("category-active"))});const r=await i.getCategory(t);B(r,t)}catch(t){console.log("Error fetching modal:",t)}}function x(e,t){const s=document.querySelector(e),o=t.split(" "),r=o[o.length-1];o.pop(),t=o.join(" "),s.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${r}</span></h1>`)}function O({title:e,author:t,book_image:s,_id:o}){return`<li class="book-category-item" data-id="${o}">
    <div class = "img-cover">
      <img class="book-category-image" src="${s}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
 </li>`}function B(e,t){const s=document.querySelector(".bestsellers-container");s.innerHTML="",x(".bestsellers-container",t),s.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const o=document.querySelector(".book-category-list"),r=e.map(({author:a,book_image:c,title:l,_id:n})=>O({author:a,book_image:c,title:l,_id:n})).join("");o.innerHTML=r,o.addEventListener("click",onClickBook)}const f={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function j(e){return e.map(s=>`<li class='sidebar-category-item' data-source="${s.list_name}">${s.list_name}</li>`).join("")}(async()=>{try{const e=await i.getCategoryList(),t=j(e);f.categoryList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();f.allCategory.addEventListener("click",async e=>{try{const t=await i.getBestSellers();S(t)}catch(t){console.log(t)}});f.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(o=>{o.classList.remove("category-active")}),e.target.classList.add("category-active");try{if(!e.target.classList.contains("all-category")){const o=await i.getCategory(t);B(o,t)}}catch(o){console.log(o)}}});const N="/SmartCoding08/assets/amazon-40ac9a24.webp",v="/SmartCoding08/assets/amazon-e4c4261f.png",$="data:image/webp;base64,UklGRtAEAABXRUJQVlA4WAoAAAAQAAAAnwAAnwAAQUxQSIECAAABkHTb1iFJX0TZtm1j1PwBNke2bdue2bZt23Zn2RG5VkbFN35fxG0jIiaA/TVd8k1t1LxT976Dh40cPcawo0cNG9y3e6fmjdL8ZFOxT2o2+/gXnZuq/vX4nGbRsjkE9zrxVeGmrFYc7hEvGU2KWvyWm7ntydJoyVBOM79w0/86y8k4UqsHHOKjNpJBvKZ/4SDrJnoZwmOTymGqG8IMELTJxoFqW0KEczytc6j6OSfBPNZyuBs9xZqh4dEmO4lUqHLAFU0FirzEIV8NFGc2Bz1fmKxXqMpiBZGm66j4LFmMlHsc9rs0MYbX49JHC2F/lwN/YC9Ceg2yijwRenHk2gARNkDjWwRwfIbtuTNdeim2smy6Vgq26nZ0w23YbGPoVnLwa+h2odtHdw7dRbrb6O7RPUf3iu4Duk90FnTFdOXoKuiq0VXT1aKrpVPQKXQqOpXOis7633///fc7hPqjQ6VT0Cl0tehq6arR1dCVoaugs6ArpvuA7hPdc3Sv6G6ju093Ft1Ful3o9tGtRLeGboQNm20MXetqbGp7uvRSbGXZdE7PsL1wpmMbsW1lAvbToPUTIacCWW2WCPb3kD2wF4GN0HHpY5mQKW9xPUwXQ56Ja44kBospRfUml4k6D9VCJmzAFUzXY8RhTSoQWRtIAjlP0vDUz2NCe27Es9VTLOZ0TseiX3Rmogdv1ZBo20OZ+OEbVBzW7d7MiN4TFRSW2d7MmHLbxxietpeZYZ3nWsyveL4LM7IUu+KpzdQ+rIqVmMGlhJ5HK1RzUi1n+oXKzAzl2JbzTxfr5qIXn1nQMtWemaldQGbT1l179h8yfNToMYYdPWrEkP49u7Vumhlgx/6aDgBWUDggKAIAANAVAJ0BKqAAoAA+iTqXR6cjoiEzKGjgEQlpABXvn94fgOzOM990XfJTdhyTMMzwOdWTAqlTDLx8bnbprMgwkzCFznB6ooWP8mwLsl/6nH+Q4IiA6k6laILH/e4ZiNw5x8fyfcTPF443+b2bthMkfpdl6gaTbZ1U/uZYB3z/PrRercpqqNqZCjBlOZWa5o0u1teTqJUxr5pJSKXbpmBTFfiu1OwyEN8K1B1Eha6N4ObU5bcoC0SkAAD+xyAc/oZPQjZ6qkFzXhaSZYuCyOqiAK9kktsLf5YSd1kYOyR8ENOQ2TqfTXhcmsNLyuUg4oayJmY6zeuxZY24gO9YmD2OjqVWL10xV8fyqZONZbV4Tm1FReplU7gGlkdmFcTmN9ZGKi/erh+x8qm33x3+PL4g1WNBLG1Ujogq5B0yr3/HxfJgaZjU/S1+7A7hmC15BUgggJQWKzcwlDRrttS9rwJf0pBIcvjzMezN8HAbgzWrCOUrHQ3/kRyNYDEBAY5vVSTqzx3HeO3ZvL3P13WfI2FbYgmkSAeZw4OBZEjGSg5KUJlC6PdsbPQ3lqQhNjDGnMk/v9aa+c4+0LCio37NWD3x1PckQVCYx2ZYrdwLhXDZFfTEig3EdI4tlz1h8q1HBSLPVtmfaNOuQXzGVVAy0J4QeyCCV6QzP6ZA5LkFJqOk/UxQxZWbOj9fGzUgiMfFEu4Mm1P8Mso2vezDK068dNzCStb7f/5QIAAAAA==",A="/SmartCoding08/assets/apple-aa35330b.png",u=document.querySelector(".modal"),q=document.querySelector(".modal-close"),m=document.querySelector(".modal-add-to-cart");document.querySelector(".modal-card");let g={};document.addEventListener("DOMContentLoaded",()=>{U()});function U(){document.addEventListener("click",e=>{const t=e.target.closest(".book-category-item");if(t){const s=t.dataset.id;console.log("Selected Book ID:",s),W(e)}})}async function W(e){document.body.style.overflow="hidden",u.classList.remove("is-hidden"),u.addEventListener("click",C),window.addEventListener("keydown",T),q.addEventListener("click",y);try{const t=e.target.closest(".book-category-item");if(!t){console.error("Book container element not found!");return}const s=t.dataset.id;g=await i.getBookDescription(s),G(g),setTimeout(()=>{I(g),m.addEventListener("click",P);const o=document.querySelector(".icon-link-amazon");o.classList.add("inverted");const r=document.querySelector(".icon-link-apple");o.classList.add("inverted")},0)}catch(t){console.log("помилка",t)}}async function I(e){const t=await h("bookList");if(!t||t.length===0){b();return}t.find(o=>o._id===e._id)?w():b()}function P(){const e=h("bookList"),t=g._id;m.textContent==="add to shopping list"?(H(g),w()):(e.forEach((s,o,r)=>{if(s._id===t)return r.splice(o,1)}),k("bookList",e),e.length===0&&Q("bookList"),b())}function b(){m.textContent="add to shopping list"}function w(){m.textContent="remove from the shopping list"}function G(e){const t=document.querySelector(".modal-card");if(!t){console.error("Container element not found!");return}const s=`
    <img class="modal-book-cover" src=${e.book_image} alt="Book cover"/>
    <div class="modal-blok-text">
      <p class="modal-book-title">${e.title}</p>
      <p class="modal-author">${e.author}</p>
      <p class="modal-description">${e.description}</p>
      <div class="modal-links">
        <a href="${e.buy_links[0].url}" target="_blank" rel="noopener noreferrer">
          <picture class="modal-icon">
            <source srcset="${N}" type="image/webp"/>
            <source srcset="${v}" type="image/png"/>
            <img class="icon-link-amazon" src="${v}" alt="Amazon"/>
          </picture>
        </a>
        <a href="${e.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
          <picture class="modal-icon">
            <source srcset="${$}" type="image/webp"/>
            <source srcset="${A}" type="image/png"/>
            <img class="icon-link-apple" src="${A}" alt="Apple Books"/>
          </picture>
        </a>
      </div>
    </div>`;t.innerHTML=s}function T(e){e.key==="Escape"&&y()}function C(e){e.target===u&&y()}function y(){u.classList.add("is-hidden"),document.body.style.overflow="visible",u.removeEventListener("click",C),window.removeEventListener("keydown",T),q.removeEventListener("click",y);const e=document.querySelector(".icon-link-amazon");e.classList.remove("inverted"),document.querySelector(".icon-link-apple"),e.classList.remove("inverted")}const H=e=>{const t=h("bookList")||[],{_id:s,title:o,list_name:r,description:a,author:c,book_image:l}=e,n={_id:s,title:o,list_name:r,description:a,author:c,book_image:l,amazon:e.buy_links[0].url,apple:e.buy_links[1].url,bookShop:e.buy_links[4].url};if(t.length!==0){t.find(p=>p._id===n._id)||(t.push(n),k("bookList",t));return}t.push(n),k("bookList",t)},k=(e,t)=>{try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}},Q=e=>{try{localStorage.removeItem(e)}catch(t){console.log("Remove item error: ",t.message)}},h=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}};
//# sourceMappingURL=commonHelpers2.js.map
