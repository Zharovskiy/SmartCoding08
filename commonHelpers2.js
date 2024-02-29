import"./assets/scroll-up-57cae95a.js";import{a as c}from"./assets/vendor-0cb09735.js";c.defaults.baseURL="https://books-backend.p.goit.global/books";const n={getCategoryList:async function(){try{return(await c.get("/category-list")).data}catch(e){console.log(e)}},getBestSellers:async function(){try{return(await c.get("/top-books")).data}catch(e){console.log(e)}},getCategory:async function(e){try{return(await c.get(`/category?category=${e}`)).data}catch(t){console.log(t)}},getBookDescription:async function(e){try{return(await c.get(`/${e}`)).data}catch(t){console.log(t)}}};function p(e,t){const r=document.querySelector(e),o=t.split(" "),s=o[o.length-1];o.pop(),t=o.join(" "),r.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${s}</span></h1>`)}function k({title:e,author:t,book_image:r,_id:o}){return`<li class="book-category-item" data-id="${o}">
    <div class = "img-cover">
      <img class="book-category-image" src="${r}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
 </li>`}function y(e){const t=document.querySelector(".bestsellers-container");t.innerHTML="",p(".bestsellers-container","Best Sellers Books"),t.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const r=document.querySelector(".bestsellers-list"),o=e.map(({books:a,list_name:l})=>`<li class="bestsellers-item">
              <h2 class="bestsellers-category-title">${l}</h2>
              <ul class="bestsellers-books-list"> 
                ${a.map(({title:i,author:g,book_image:b,_id:m})=>k({title:i,author:g,book_image:b,_id:m})).join(`
`)}
              </ul>
              <button class="bestsellers-btn" type="button" data-category="${l}">See more</button>
            </li>`).join(`
`);r.insertAdjacentHTML("beforeend",o),document.querySelector(".bestsellers-list").addEventListener("click",L)}async function h(){try{const e=await n.getBestSellers();return y(e)}catch(e){console.error("Error fetching best sellers:",e)}}h();async function L(e){try{if(e.target.nodeName!=="BUTTON")return;let t=e.target.dataset.category;const r=document.querySelector(".sidebar-category-item");document.querySelectorAll(".sidebar-category-item").forEach(a=>{a.dataset.source===t&&(r.classList.remove("category-active"),a.classList.add("category-active"))});const s=await n.getCategory(t);u(s,t)}catch(t){console.log("Error fetching modal:",t)}}function f(e,t){const r=document.querySelector(e),o=t.split(" "),s=o[o.length-1];o.pop(),t=o.join(" "),r.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${s}</span></h1>`)}function v({title:e,author:t,book_image:r,_id:o}){return`<li class="book-category-item" data-id="${o}">
    <div class = "img-cover">
      <img class="book-category-image" src="${r}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
 </li>`}function u(e,t){const r=document.querySelector(".bestsellers-container");r.innerHTML="",f(".bestsellers-container",t),r.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const o=document.querySelector(".book-category-list"),s=e.map(({author:a,book_image:l,title:i,_id:g})=>v({author:a,book_image:l,title:i,_id:g})).join("");o.innerHTML=s,o.addEventListener("click",onClickBook)}const d={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function S(e){return e.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const e=await n.getCategoryList(),t=S(e);d.categoryList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();d.allCategory.addEventListener("click",async e=>{try{const t=await n.getBestSellers();y(t)}catch(t){console.log(t)}});d.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(o=>{o.classList.remove("category-active")}),e.target.classList.add("category-active");try{if(!e.target.classList.contains("all-category")){const o=await n.getCategory(t);u(o,t)}}catch(o){console.log(o)}}});document.querySelector(".modal");document.querySelector(".modal-close");document.querySelector(".modal-add-to-cart");document.querySelector(".modal-card");$();function $(){const e=document.querySelectorAll(".book-category-item");console.log(e),e.forEach(t=>t.addEventListener("click",()=>{console.log("click")}))}
//# sourceMappingURL=commonHelpers2.js.map
