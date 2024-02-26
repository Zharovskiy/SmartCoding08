import{a as i}from"./assets/vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();function v(){const t=document.querySelector(".toggle-theme");let e=document.documentElement;t.addEventListener("click",r=>{r.preventDefault(),e.hasAttribute("data-theme")?(e.removeAttribute("data-theme"),localStorage.removeItem("theme")):(e.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))}),localStorage.getItem("theme")!==null&&e.setAttribute("data-theme","dark")}v();i.defaults.baseURL="https://books-backend.p.goit.global/books";const u={getCategoryList:async function(){try{return(await i.get("/category-list")).data}catch(t){console.log(t)}},getBestSellers:async function(){try{return(await i.get("/top-books")).data}catch(t){console.log(t)}},getCategory:async function(t){try{return(await i.get(`/category?category=${t}`)).data}catch(e){console.log(e)}},getBookDescription:async function(t){try{return(await i.get(`/${t}`)).data}catch(e){console.log(e)}}};function B(t,e){const r=document.querySelector(t),s=e.split(" "),o=s[s.length-1];s.pop(),e=s.join(" "),r.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${e} <span class="page-title-highlight">${o}</span></h1>`)}function $({title:t,author:e,book_image:r}){return`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${r}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${t}</h3>
      <p class = "author-name"> ${e}</p>
    </div>
  </div>
</li>`}function h(t){const e=document.querySelector(".bestsellers-container");e.innerHTML="",B(".bestsellers-container","Best Sellers Books"),e.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const r=document.querySelector(".bestsellers-list"),s=t.map(({books:o,list_name:c})=>`
            <li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${c}</h2>
                <ul class="bestsellers-books-list"> 
                    ${o.map(({book_image:n,title:a,author:l})=>$({book_image:n,title:a,author:l})).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button data-category="${c}">See more</button>
            </li>`).join(`
`);r.insertAdjacentHTML("beforeend",s)}async function C(){try{const t=await u.getBestSellers();return h(t)}catch(t){console.error("Error fetching best sellers:",t)}}C();function P(t,e){const r=document.querySelector(t),s=e.split(" "),o=s[s.length-1];s.pop(),e=s.join(" "),r.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${e} <span class="page-title-highlight">${o}</span></h1>`)}function q({title:t,author:e,book_image:r}){return`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${r}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${t}</h3>
      <p class = "author-name"> ${e}</p>
    </div>
  </div>
</li>`}function E(t,e){const r=document.querySelector(".bestsellers-container");r.innerHTML="",P(".bestsellers-container",e),r.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const s=document.querySelector(".book-category-list"),o=t.map(({author:c,book_image:n,title:a,_id:l})=>q({author:c,book_image:n,title:a,_id:l})).join("");s.innerHTML=o}const p={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function T(t){return t.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const t=await u.getCategoryList(),e=T(t);p.categoryList.insertAdjacentHTML("beforeend",e)}catch(t){console.log(t)}})();p.allCategory.addEventListener("click",async t=>{try{const e=await u.getBestSellers();h(e)}catch(e){console.log(e)}});p.categoryList.addEventListener("click",async t=>{if(t.target.classList.contains("sidebar-category-item")){const e=t.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(s=>{s.classList.remove("category-active")}),t.target.classList.add("category-active");try{if(!t.target.classList.contains("all-category")){const s=await u.getCategory(e);E(s,e)}}catch(s){console.log(s)}}});document.addEventListener("DOMContentLoaded",function(){});class f{constructor(){this.keyName="shopping-list"}getProducts(){const e=localStorage.getItem(this.keyName);return e!==null?JSON.parse(e):[]}checkProduct(e){let r=this.getProducts(),s=r.findIndex(c=>c.id==e);const o={hasProd:!1,index:s,arrProd:r};return s!==-1&&(o.hasProd=!0),o}putProducts(e){let{hasProd:r,index:s,arrProd:o}=this.checkProduct(e.id);r!==!0?o.push(e):o.splice(s,1),localStorage.setItem(this.keyName,JSON.stringify(o))}}const k=new f,w=document.getElementById("shopping-link");w.addEventListener("click",M);function M(){g.innerHTML="";const t=document.querySelector(".sidebar-category-container");t!==null&&t.remove();const e=k.getProducts();if(e.length!==0)A(e);else{const r=`<h2 class="category-page-title">Shopping<span class="category-titel-color"> List</span></h2>
        <ul class="category-books">
        This page is empty, add some books and proceed to order.
        </ul>`;g.insertAdjacentHTML("afterbegin",r)}}function A(t){const r=`<h2 class="category-page-title">Shopping<span class="category-titel-color"> List</span></h2>
        <ul class="category-books">
        ${t.map(({_id:o,book_image:c,title:n,author:a})=>`<li class="category-book-card" id='${o}'>
        <div class="category-box-overlay">
            <img class="category-book-image" data-id="${o}" src="${c}" alt="Book">
            <p class="category-overlay">Quick view</p>
        </div>
        <div class="category-book-text">
            <h3 class="category-book-title">${n}</h3>
            <p class="category-book-description">${a}</p>
        </div>
        </li>`).join("")}
        </ul>`;g.insertAdjacentHTML("afterbegin",r),document.querySelectorAll(".category-book-card").forEach(o=>{o.addEventListener("click",x)})}function x(t){const e=t.target.dataset.id;k.putProducts({_id:e}),document.getElementById(e).remove()}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("modal"),e=document.querySelector(".close"),r=document.querySelector(".add-to-cart"),s=new f;function o(){t.style.display="none",document.body.style.overflow="auto"}e.addEventListener("click",o),t.addEventListener("click",function(a){a.target===t&&o()}),document.addEventListener("keydown",function(a){a.key==="Escape"&&o()});function c(a){const l=t.querySelector(".book-cover"),b=t.querySelector(".book-title"),S=t.querySelector(".author"),L=t.querySelector(".description"),m=t.querySelector(".links");l.src=a.coverImageUrl,b.textContent=a.title,S.textContent="Author: "+a.author,L.textContent=a.description,m.innerHTML="",a.links.forEach(function(y){const d=document.createElement("a");d.href=y.url,d.textContent=y.name,d.target="_blank",m.appendChild(d)}),s.checkProduct(a.id).hasProd?r.textContent="Remove from Shopping List":r.textContent="Add to Shopping List"}c({id:1,coverImageUrl:"https://example.com/book-cover.jpg",title:"Example Book Title",author:"John Doe",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",links:[{name:"Amazon",url:"https://www.amazon.com"},{name:"Apple Books",url:"https://books.apple.com"}]})});const g=document.querySelector(".home-page");
//# sourceMappingURL=commonHelpers.js.map
