import{a as i}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();function L(){const e=document.querySelector(".toggle-theme");let t=document.documentElement;e.addEventListener("click",r=>{r.preventDefault(),t.hasAttribute("data-theme")?(t.removeAttribute("data-theme"),localStorage.removeItem("theme")):(t.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))}),localStorage.getItem("theme")!==null&&t.setAttribute("data-theme","dark")}L();i.defaults.baseURL="https://books-backend.p.goit.global/books";const u={getCategoryList:async function(){try{return(await i.get("/category-list")).data}catch(e){console.log(e)}},getBestSellers:async function(){try{return(await i.get("/top-books")).data}catch(e){console.log(e)}},getCategory:async function(e){try{return(await i.get(`/category?category=${e}`)).data}catch(t){console.log(t)}},getBookDescription:async function(e){try{return(await i.get(`/${e}`)).data}catch(t){console.log(t)}}};function v(e,t){const r=document.querySelector(e),s=t.split(" "),o=s[s.length-1];s.pop(),t=s.join(" "),r.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${o}</span></h1>`)}function B({title:e,author:t,book_image:r}){return`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${r}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
  </div>
</li>`}function y(e){const t=document.querySelector(".bestsellers-container");t.innerHTML="",v(".bestsellers-container","Best Sellers Books"),t.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const r=document.querySelector(".bestsellers-list"),s=e.map(({books:o,list_name:c})=>`
            <li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${c}</h2>
                <ul class="bestsellers-books-list"> 
                    ${o.map(({book_image:a,title:n,author:l})=>B({book_image:a,title:n,author:l})).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button data-category="${c}">See more</button>
            </li>`).join(`
`);r.insertAdjacentHTML("beforeend",s)}async function $(){try{const e=await u.getBestSellers();return y(e)}catch(e){console.error("Error fetching best sellers:",e)}}$();function C(e,t){const r=document.querySelector(e),s=t.split(" "),o=s[s.length-1];s.pop(),t=s.join(" "),r.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${o}</span></h1>`)}function q({title:e,author:t,book_image:r}){return`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${r}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
  </div>
</li>`}function w(e,t){const r=document.querySelector(".bestsellers-container");r.innerHTML="",C(".bestsellers-container",t),r.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const s=document.querySelector(".book-category-list"),o=e.map(({author:c,book_image:a,title:n,_id:l})=>q({author:c,book_image:a,title:n,_id:l})).join("");s.innerHTML=o}const g={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function E(e){return e.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const e=await u.getCategoryList(),t=E(e);g.categoryList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();g.allCategory.addEventListener("click",async e=>{try{const t=await u.getBestSellers();y(t)}catch(t){console.log(t)}});g.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(s=>{s.classList.remove("category-active")}),e.target.classList.add("category-active");try{if(!e.target.classList.contains("all-category")){const s=await u.getCategory(t);w(s,t)}}catch(s){console.log(s)}}});document.addEventListener("DOMContentLoaded",function(){});class h{constructor(){this.keyName="shopping-list"}getProducts(){const t=localStorage.getItem(this.keyName);return t!==null?JSON.parse(t):[]}checkProduct(t){let r=this.getProducts(),s=r.findIndex(c=>c.id==t);const o={hasProd:!1,index:s,arrProd:r};return s!==-1&&(o.hasProd=!0),o}putProducts(t){let{hasProd:r,index:s,arrProd:o}=this.checkProduct(t.id);r!==!0?o.push(t):o.splice(s,1),localStorage.setItem(this.keyName,JSON.stringify(o))}}const P=new h,T=document.getElementById("shopping-link");T.addEventListener("click",x);function x(){f.innerHTML="";const e=document.querySelector(".sidebar-category-container");e!==null&&e.remove();const t=P.getProducts();t.length!==0&&A(t)}function A(e){const r=`<h2 class="category-page-title">Shopping<span class="category-titel-color"> List</span></h2>
        <ul class="category-books">
        ${e.map(({_id:o,book_image:c,title:a,author:n})=>`<li class="category-book-card" id="${o}">
        <div class="category-box-overlay">
            <img class="category-book-image" src="${c}" alt="Book">
            <p class="category-overlay">Quick view</p>
        </div>
        <div class="category-book-text">
            <h3 class="category-book-title">${a}</h3>
            <p class="category-book-description">${n}</p>
        </div>
        </li>`).join("")}
        </ul>`;f.insertAdjacentHTML("afterbegin",r),document.querySelectorAll(".category-book-card").forEach(o=>{o.addEventListener("click",I)})}function I(e){const t=e.carrentTarget;console.log(t)}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("modal"),t=document.querySelector(".close"),r=document.querySelector(".add-to-cart"),s=new h;function o(){e.style.display="none",document.body.style.overflow="auto"}t.addEventListener("click",o),e.addEventListener("click",function(n){n.target===e&&o()}),document.addEventListener("keydown",function(n){n.key==="Escape"&&o()});function c(n){const l=e.querySelector(".book-cover"),b=e.querySelector(".book-title"),k=e.querySelector(".author"),S=e.querySelector(".description"),p=e.querySelector(".links");l.src=n.coverImageUrl,b.textContent=n.title,k.textContent="Author: "+n.author,S.textContent=n.description,p.innerHTML="",n.links.forEach(function(m){const d=document.createElement("a");d.href=m.url,d.textContent=m.name,d.target="_blank",p.appendChild(d)}),s.checkProduct(n.id).hasProd?r.textContent="Remove from Shopping List":r.textContent="Add to Shopping List"}c({id:1,coverImageUrl:"https://example.com/book-cover.jpg",title:"Example Book Title",author:"John Doe",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",links:[{name:"Amazon",url:"https://www.amazon.com"},{name:"Apple Books",url:"https://books.apple.com"}]})});const f=document.querySelector(".home-page");
//# sourceMappingURL=commonHelpers.js.map
