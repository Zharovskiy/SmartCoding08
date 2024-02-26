import{a as i}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();function B(){const e=document.querySelector(".toggle-theme");let t=document.documentElement;e.addEventListener("click",r=>{r.preventDefault(),t.hasAttribute("data-theme")?(t.removeAttribute("data-theme"),localStorage.removeItem("theme")):(t.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))}),localStorage.getItem("theme")!==null&&t.setAttribute("data-theme","dark")}B();i.defaults.baseURL="https://books-backend.p.goit.global/books";const g={getCategoryList:async function(){try{return(await i.get("/category-list")).data}catch(e){console.log(e)}},getBestSellers:async function(){try{return(await i.get("/top-books")).data}catch(e){console.log(e)}},getCategory:async function(e){try{return(await i.get(`/category?category=${e}`)).data}catch(t){console.log(t)}},getBookDescription:async function(e){try{return(await i.get(`/${e}`)).data}catch(t){console.log(t)}}};function E(e,t){const r=document.querySelector(e),s=t.split(" "),o=s[s.length-1];s.pop(),t=s.join(" "),r.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${o}</span></h1>`)}function C({title:e,author:t,book_image:r}){return`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${r}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
  </div>
</li>`}function b(e){const t=document.querySelector(".bestsellers-container");t.innerHTML="",E(".bestsellers-container","Best Sellers Books"),t.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const r=document.querySelector(".bestsellers-list"),s=e.map(({books:o,list_name:n})=>`
            <li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${n}</h2>
                <ul class="bestsellers-books-list"> 
                    ${o.map(({book_image:a,title:l,author:d})=>C({book_image:a,title:l,author:d})).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button data-category="${n}">See more</button>
            </li>`).join(`
`);r.insertAdjacentHTML("beforeend",s)}async function q(){try{const e=await g.getBestSellers();return b(e)}catch(e){console.error("Error fetching best sellers:",e)}}q();function $(e,t){const r=document.querySelector(e),s=t.split(" "),o=s[s.length-1];s.pop(),t=s.join(" "),r.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${o}</span></h1>`)}function P({title:e,author:t,book_image:r}){return`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${r}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
  </div>
</li>`}function T(e,t){const r=document.querySelector(".bestsellers-container");r.innerHTML="",$(".bestsellers-container",t),r.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const s=document.querySelector(".book-category-list"),o=e.map(({author:n,book_image:a,title:l,_id:d})=>P({author:n,book_image:a,title:l,_id:d})).join("");s.innerHTML=o}const y={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function x(e){return e.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const e=await g.getCategoryList(),t=x(e);y.categoryList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();y.allCategory.addEventListener("click",async e=>{try{const t=await g.getBestSellers();b(t)}catch(t){console.log(t)}});y.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(s=>{s.classList.remove("category-active")}),e.target.classList.add("category-active");try{if(!e.target.classList.contains("all-category")){const s=await g.getCategory(t);T(s,t)}}catch(s){console.log(s)}}});document.addEventListener("DOMContentLoaded",function(){});const k=new LocalStorage,f=k.getProducts();function I(){const e=document.getElementById("bookList");if(e.innerHTML="",f.length===0||!k){e.innerHTML=`
            <li>
                <picture>
                    <source srcset="../images/shopping-list/placeholder.webp" type="image/webp">
                    <source srcset="../images/shopping-list/placeholder.png" type="image/png">
                    <source srcset="../images/shopping-list/placeholder2x.webp" type="image/webp">
                    <source srcset="../images/shopping-list/placeholder2x.png" type="image/png">
                    <img src="../images/shopping-list/placeholder.png" alt="No Books Added">
                </picture>
            </li>`;return}f.forEach(t=>{const r=document.createElement("li");r.textContent=t,e.appendChild(r)})}I();let M=class{constructor(){this.keyName="shopping-list"}getProducts(){const t=localStorage.getItem(this.keyName);return t!==null?JSON.parse(t):[]}checkProduct(t){let r=this.getProducts(),s=r.findIndex(n=>n.id==t);const o={hasProd:!1,index:s,arrProd:r};return s!==-1&&(o.hasProd=!0),o}putProducts(t){let{hasProd:r,index:s,arrProd:o}=this.checkProduct(t.id);r!==!0?o.push(t):o.splice(s,1),localStorage.setItem(this.keyName,JSON.stringify(o))}};document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("modal"),t=document.querySelector(".modal-close"),r=document.querySelector(".modal-add-to-cart"),s=document.querySelector(".logo-amazon"),o=document.querySelector(".logo-apple"),n=new M;function a(){e.style.display="none",document.body.style.overflow="auto",document.documentElement.style.overflow="auto"}t.addEventListener("click",a),e.addEventListener("click",function(c){c.target===e&&a()}),document.addEventListener("keydown",function(c){c.key==="Escape"&&a()}),s.addEventListener("click",function(c){c.preventDefault(),window.open(this.href,"_blank")}),o.addEventListener("click",function(c){c.preventDefault(),window.open(this.href,"_blank")});function l(c){const L=e.querySelector(".book-cover"),S=e.querySelector(".book-title"),v=e.querySelector(".author"),w=e.querySelector(".description"),h=e.querySelector(".links");L.src=c.coverImageUrl,S.textContent=c.title,v.textContent="Author: "+c.author,w.textContent=c.description,h.innerHTML="",c.links.forEach(function(p){const u=document.createElement("a");u.href=p.url,u.target="_blank";const m=document.createElement("img");m.src=p.logoUrl,m.alt=p.name,u.appendChild(m),h.appendChild(u)}),n.checkProduct(c.id).hasProd?r.textContent="Remove from Shopping List":r.textContent="Add to Shopping List"}l({id:1,coverImageUrl:"https://example.com/book-cover.jpg",title:"Example Book Title",author:"John Doe",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",links:[{logoUrl:"/src/images/pop-up/amazon.svg",url:"https://www.amazon.com"},{logoUrl:"/src/images/pop-up/apple.svg",url:"https://books.apple.com"}]})});document.querySelector(".home-page");
//# sourceMappingURL=commonHelpers.js.map
