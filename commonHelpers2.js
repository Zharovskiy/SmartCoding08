import"./assets/scroll-up-448023b2.js";import{a as c}from"./assets/vendor-0cb09735.js";c.defaults.baseURL="https://books-backend.p.goit.global/books";const n={getCategoryList:async function(){try{return(await c.get("/category-list")).data}catch(e){console.log(e)}},getBestSellers:async function(){try{return(await c.get("/top-books")).data}catch(e){console.log(e)}},getCategory:async function(e){try{return(await c.get(`/category?category=${e}`)).data}catch(t){console.log(t)}},getBookDescription:async function(e){try{return(await c.get(`/${e}`)).data}catch(t){console.log(t)}}};function p(e,t){const s=document.querySelector(e),o=t.split(" "),r=o[o.length-1];o.pop(),t=o.join(" "),s.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${r}</span></h1>`)}function k({title:e,author:t,book_image:s,_id:o}){return`<li class="book-category-item" data-id="${o}">
    <div class = "img-cover">
      <img class="book-category-image" src="${s}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
 </li>`}function d(e){const t=document.querySelector(".bestsellers-container");t.innerHTML="",p(".bestsellers-container","Best Sellers Books"),t.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const s=document.querySelector(".bestsellers-list"),o=e.map(({books:a,list_name:l})=>`<li class="bestsellers-item">
              <h2 class="bestsellers-category-title">${l}</h2>
              <ul class="bestsellers-books-list"> 
                ${a.map(({title:i,author:g,book_image:b,_id:m})=>k({title:i,author:g,book_image:b,_id:m})).join(`
`)}
              </ul>
              <button class="bestsellers-btn" type="button" data-category="${l}">See more</button>
            </li>`).join(`
`);s.insertAdjacentHTML("beforeend",o),document.querySelector(".bestsellers-list").addEventListener("click",L)}async function h(){try{const e=await n.getBestSellers();return d(e)}catch(e){console.error("Error fetching best sellers:",e)}}h();async function L(e){try{if(e.target.nodeName!=="BUTTON")return;let t=e.target.dataset.category;const s=document.querySelector(".sidebar-category-item");document.querySelectorAll(".sidebar-category-item").forEach(a=>{a.dataset.source===t&&(s.classList.remove("category-active"),a.classList.add("category-active"))});const r=await n.getCategory(t);u(r,t)}catch(t){console.log("Error fetching modal:",t)}}function f(e,t){const s=document.querySelector(e),o=t.split(" "),r=o[o.length-1];o.pop(),t=o.join(" "),s.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${r}</span></h1>`)}function v({title:e,author:t,book_image:s,_id:o}){return`<li class="book-category-item" data-id="${o}">
    <div class = "img-cover">
      <img class="book-category-image" src="${s}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
 </li>`}function u(e,t){const s=document.querySelector(".bestsellers-container");s.innerHTML="",f(".bestsellers-container",t),s.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const o=document.querySelector(".book-category-list"),r=e.map(({author:a,book_image:l,title:i,_id:g})=>v({author:a,book_image:l,title:i,_id:g})).join("");o.innerHTML=r,o.addEventListener("click",onClickBook)}const y={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function $(e){return e.map(s=>`<li class='sidebar-category-item' data-source="${s.list_name}">${s.list_name}</li>`).join("")}(async()=>{try{const e=await n.getCategoryList(),t=$(e);y.categoryList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();y.allCategory.addEventListener("click",async e=>{try{const t=await n.getBestSellers();d(t)}catch(t){console.log(t)}});y.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(o=>{o.classList.remove("category-active")}),e.target.classList.add("category-active");try{if(!e.target.classList.contains("all-category")){const o=await n.getCategory(t);u(o,t)}}catch(o){console.log(o)}}});
//# sourceMappingURL=commonHelpers2.js.map
