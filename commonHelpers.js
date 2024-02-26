import{a as i}from"./assets/vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();function S(){const t=document.querySelector(".toggle-theme");let e=document.documentElement;t.addEventListener("click",r=>{r.preventDefault(),e.hasAttribute("data-theme")?(e.removeAttribute("data-theme"),localStorage.removeItem("theme")):(e.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))}),localStorage.getItem("theme")!==null&&e.setAttribute("data-theme","dark")}S();i.defaults.baseURL="https://books-backend.p.goit.global/books";const u={getCategoryList:async function(){try{return(await i.get("/category-list")).data}catch(t){console.log(t)}},getBestSellers:async function(){try{return(await i.get("/top-books")).data}catch(t){console.log(t)}},getCategory:async function(t){try{return(await i.get(`/category?category=${t}`)).data}catch(e){console.log(e)}},getBookDescription:async function(t){try{return(await i.get(`/${t}`)).data}catch(e){console.log(e)}}};function v(t,e){const r=document.querySelector(t),s=e.split(" "),o=s[s.length-1];s.pop(),e=s.join(" "),r.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${e} <span class="page-title-highlight">${o}</span></h1>`)}function B({title:t,author:e,book_image:r}){return`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${r}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${t}</h3>
      <p class = "author-name"> ${e}</p>
    </div>
  </div>
</li>`}function y(t){const e=document.querySelector(".bestsellers-container");e.innerHTML="",v(".bestsellers-container","Best Sellers Books"),e.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const r=document.querySelector(".bestsellers-list"),s=t.map(({books:o,list_name:c})=>`
            <li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${c}</h2>
                <ul class="bestsellers-books-list"> 
                    ${o.map(({book_image:a,title:n,author:l})=>B({book_image:a,title:n,author:l})).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button data-category="${c}">See more</button>
            </li>`).join(`
`);r.insertAdjacentHTML("beforeend",s)}async function $(){try{const t=await u.getBestSellers();return y(t)}catch(t){console.error("Error fetching best sellers:",t)}}$();function C(t,e){const r=document.querySelector(t),s=e.split(" "),o=s[s.length-1];s.pop(),e=s.join(" "),r.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${e} <span class="page-title-highlight">${o}</span></h1>`)}function q({title:t,author:e,book_image:r}){return`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${r}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${t}</h3>
      <p class = "author-name"> ${e}</p>
    </div>
  </div>
</li>`}function w(t,e){const r=document.querySelector(".bestsellers-container");r.innerHTML="",C(".bestsellers-container",e),r.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const s=document.querySelector(".book-category-list"),o=t.map(({author:c,book_image:a,title:n,_id:l})=>q({author:c,book_image:a,title:n,_id:l})).join("");s.innerHTML=o}const g={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function E(t){return t.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const t=await u.getCategoryList(),e=E(t);g.categoryList.insertAdjacentHTML("beforeend",e)}catch(t){console.log(t)}})();g.allCategory.addEventListener("click",async t=>{try{const e=await u.getBestSellers();y(e)}catch(e){console.log(e)}});g.categoryList.addEventListener("click",async t=>{if(t.target.classList.contains("sidebar-category-item")){const e=t.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(s=>{s.classList.remove("category-active")}),t.target.classList.add("category-active");try{if(!t.target.classList.contains("all-category")){const s=await u.getCategory(e);w(s,e)}}catch(s){console.log(s)}}});document.addEventListener("DOMContentLoaded",function(){});class h{constructor(){this.keyName="shopping-list"}getProducts(){const e=localStorage.getItem(this.keyName);return e!==null?JSON.parse(e):[]}checkProduct(e){let r=this.getProducts(),s=r.findIndex(c=>c.id==e);const o={hasProd:!1,index:s,arrProd:r};return s!==-1&&(o.hasProd=!0),o}putProducts(e){let{hasProd:r,index:s,arrProd:o}=this.checkProduct(e.id);r!==!0?o.push(e):o.splice(s,1),localStorage.setItem(this.keyName,JSON.stringify(o))}}const P=new h,T=document.getElementById("shopping-link");T.addEventListener("click",x);function x(){f.innerHTML="",document.querySelector(".sidebar-category-container").remove();const e=P.getProducts();e.length!==0&&A(e)}function A(t){const r=`<h2 class="category-page-title">Shopping<span class="category-titel-color"> List</span></h2>
        <ul class="category-books">
        ${t.map(({_id:o,book_image:c,title:a,author:n})=>`<li class="category-book-card" id="${o}">
        <div class="category-box-overlay">
            <img class="category-book-image" src="${c}" alt="Book">
            <p class="category-overlay">Quick view</p>
        </div>
        <div class="category-book-text">
            <h3 class="category-book-title">${a}</h3>
            <p class="category-book-description">${n}</p>
        </div>
        </li>`).join("")}
        </ul>`;f.insertAdjacentHTML("afterbegin",r),document.querySelectorAll(".category-book-card").forEach(o=>{o.addEventListener("click",I)})}function I(t){console.log(t)}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("modal"),e=document.querySelector(".close"),r=document.querySelector(".add-to-cart"),s=new h;function o(){t.style.display="none",document.body.style.overflow="auto"}e.addEventListener("click",o),t.addEventListener("click",function(n){n.target===t&&o()}),document.addEventListener("keydown",function(n){n.key==="Escape"&&o()});function c(n){const l=t.querySelector(".book-cover"),b=t.querySelector(".book-title"),k=t.querySelector(".author"),L=t.querySelector(".description"),p=t.querySelector(".links");l.src=n.coverImageUrl,b.textContent=n.title,k.textContent="Author: "+n.author,L.textContent=n.description,p.innerHTML="",n.links.forEach(function(m){const d=document.createElement("a");d.href=m.url,d.textContent=m.name,d.target="_blank",p.appendChild(d)}),s.checkProduct(n.id).hasProd?r.textContent="Remove from Shopping List":r.textContent="Add to Shopping List"}c({id:1,coverImageUrl:"https://example.com/book-cover.jpg",title:"Example Book Title",author:"John Doe",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",links:[{name:"Amazon",url:"https://www.amazon.com"},{name:"Apple Books",url:"https://books.apple.com"}]})});const f=document.querySelector(".home-page");
//# sourceMappingURL=commonHelpers.js.map
