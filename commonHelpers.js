import{a as i}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();function S(){const e=document.querySelector(".toggle-theme");let t=document.documentElement;e.addEventListener("click",s=>{s.preventDefault(),t.hasAttribute("data-theme")?(t.removeAttribute("data-theme"),localStorage.removeItem("theme")):(t.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))}),localStorage.getItem("theme")!==null&&t.setAttribute("data-theme","dark")}S();i.defaults.baseURL="https://books-backend.p.goit.global/books";const u={getCategoryList:async function(){try{return(await i.get("/category-list")).data}catch(e){console.log(e)}},getBestSellers:async function(){try{return(await i.get("/top-books")).data}catch(e){console.log(e)}},getCategory:async function(e){try{return(await i.get(`/category?category=${e}`)).data}catch(t){console.log(t)}},getBookDescription:async function(e){try{return(await i.get(`/${e}`)).data}catch(t){console.log(t)}}};function v(e,t){const s=document.querySelector(e),r=t.split(" "),o=r[r.length-1];r.pop(),t=r.join(" "),s.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${o}</span></h1>`)}function B({title:e,author:t,book_image:s}){return`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${s}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
  </div>
</li>`}function h(e){const t=document.querySelector(".bestsellers-container");t.innerHTML="",v(".bestsellers-container","Best Sellers Books"),t.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const s=document.querySelector(".bestsellers-list"),r=e.map(({books:o,list_name:n})=>`
            <li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${n}</h2>
                <ul class="bestsellers-books-list"> 
                    ${o.map(({book_image:a,title:c,author:l})=>B({book_image:a,title:c,author:l})).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button data-category="${n}">See more</button>
            </li>`).join(`
`);s.insertAdjacentHTML("beforeend",r)}async function $(){try{const e=await u.getBestSellers();return h(e)}catch(e){console.error("Error fetching best sellers:",e)}}$();function C(e,t){const s=document.querySelector(e),r=t.split(" "),o=r[r.length-1];r.pop(),t=r.join(" "),s.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${o}</span></h1>`)}function q({title:e,author:t,book_image:s}){return`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${s}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
  </div>
</li>`}function w(e,t){const s=document.querySelector(".bestsellers-container");s.innerHTML="",C(".bestsellers-container",t),s.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const r=document.querySelector(".book-category-list"),o=e.map(({author:n,book_image:a,title:c,_id:l})=>q({author:n,book_image:a,title:c,_id:l})).join("");r.innerHTML=o}const p={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function P(e){return e.map(s=>`<li class='sidebar-category-item' data-source="${s.list_name}">${s.list_name}</li>`).join("")}(async()=>{try{const e=await u.getCategoryList(),t=P(e);p.categoryList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();p.allCategory.addEventListener("click",async e=>{try{const t=await u.getBestSellers();h(t)}catch(t){console.log(t)}});p.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(r=>{r.classList.remove("category-active")}),e.target.classList.add("category-active");try{if(!e.target.classList.contains("all-category")){const r=await u.getCategory(t);w(r,t)}}catch(r){console.log(r)}}});document.addEventListener("DOMContentLoaded",function(){});class f{constructor(){this.keyName="shopping-list"}getProducts(){const t=localStorage.getItem(this.keyName);return t!==null?JSON.parse(t):[]}checkProduct(t){let s=this.getProducts(),r=s.findIndex(n=>n.id==t);const o={hasProd:!1,index:r,arrProd:s};return r!==-1&&(o.hasProd=!0),o}putProducts(t){let{hasProd:s,index:r,arrProd:o}=this.checkProduct(t.id);s!==!0?o.push(t):o.splice(r,1),localStorage.setItem(this.keyName,JSON.stringify(o))}}const E=new f,T=document.getElementById("shopping-link");T.addEventListener("click",x);function x(){g.innerHTML="",document.querySelector(".sidebar-category-container").remove();const t=E.getProducts();I(t)}function I(e){const s=`<h2 class="category-page-title">Shopping<span class="category-titel-color"> List</span></h2>
        <ul class="category-books">
        ${e.map(({_id:r,book_image:o,title:n,author:a})=>`<li class="category-book-card" id="${r}">
        <div class="category-box-overlay">
            <img class="category-book-image" src="${o}" alt="Book">
            <p class="category-overlay">Quick view</p>
        </div>
        <div class="category-book-text">
            <h3 class="category-book-title">${n}</h3>
            <p class="category-book-description">${a}</p>
        </div>
        </li>`).join("")}
        </ul>`;g.insertAdjacentHTML("afterbegin",s),g.addEventListener("click",A)}function A(e){console.log(e)}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("modal"),t=document.querySelector(".close"),s=document.querySelector(".add-to-cart"),r=new f;function o(){e.style.display="none",document.body.style.overflow="auto"}t.addEventListener("click",o),e.addEventListener("click",function(c){c.target===e&&o()}),document.addEventListener("keydown",function(c){c.key==="Escape"&&o()});function n(c){const l=e.querySelector(".book-cover"),b=e.querySelector(".book-title"),k=e.querySelector(".author"),L=e.querySelector(".description"),m=e.querySelector(".links");l.src=c.coverImageUrl,b.textContent=c.title,k.textContent="Author: "+c.author,L.textContent=c.description,m.innerHTML="",c.links.forEach(function(y){const d=document.createElement("a");d.href=y.url,d.textContent=y.name,d.target="_blank",m.appendChild(d)}),r.checkProduct(c.id).hasProd?s.textContent="Remove from Shopping List":s.textContent="Add to Shopping List"}n({id:1,coverImageUrl:"https://example.com/book-cover.jpg",title:"Example Book Title",author:"John Doe",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",links:[{name:"Amazon",url:"https://www.amazon.com"},{name:"Apple Books",url:"https://books.apple.com"}]})});const g=document.querySelector(".home-page");
//# sourceMappingURL=commonHelpers.js.map
