import"./assets/scroll-up-daec0bb7.js";import{a as A}from"./assets/vendor-0cb09735.js";A.defaults.baseURL="https://books-backend.p.goit.global/books";const l={getCategoryList:async function(){try{return(await A.get("/category-list")).data}catch(e){console.log(e)}},getBestSellers:async function(){try{return(await A.get("/top-books")).data}catch(e){console.log(e)}},getCategory:async function(e){try{return(await A.get(`/category?category=${e}`)).data}catch(t){console.log(t)}},getBookDescription:async function(e){try{return(await A.get(`/${e}`)).data}catch(t){console.log(t)}}};function z(e,t){const o=document.querySelector(e),r=t.split(" "),s=r[r.length-1];r.pop(),t=r.join(" "),o.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${s}</span></h1>`)}function H({title:e,author:t,book_image:o,_id:r}){return`<li class="book-category-item" data-id="${r}">
    <div class = "img-cover">
      <img class="book-category-image" src="${o}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
 </li>`}function B(e){const t=document.querySelector(".bestsellers-container");t.innerHTML="",z(".bestsellers-container","Best Sellers Books"),t.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const o=document.querySelector(".bestsellers-list"),r=e.map(({books:a,list_name:c})=>`<li class="bestsellers-item">
              <h2 class="bestsellers-category-title">${c}</h2>
              <ul class="bestsellers-books-list"> 
                ${a.map(({title:i,author:n,book_image:k,_id:y})=>H({title:i,author:n,book_image:k,_id:y})).join(`
`)}
              </ul>
              <button class="bestsellers-btn" type="button" data-category="${c}">See more</button>
            </li>`).join(`
`);o.insertAdjacentHTML("beforeend",r),document.querySelector(".bestsellers-list").addEventListener("click",G)}async function U(){try{const e=await l.getBestSellers();return B(e)}catch(e){console.error("Error fetching best sellers:",e)}}U();async function G(e){try{if(e.target.nodeName!=="BUTTON")return;let t=e.target.dataset.category;const o=document.querySelector(".sidebar-category-item");document.querySelectorAll(".sidebar-category-item").forEach(a=>{a.dataset.source===t&&(o.classList.remove("category-active"),a.classList.add("category-active"))});const s=await l.getCategory(t);L(s,t)}catch(t){console.log("Error fetching modal:",t)}}function D(e,t){const o=document.querySelector(e),r=t.split(" "),s=r[r.length-1];r.pop(),t=r.join(" "),o.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${s}</span></h1>`)}function I({title:e,author:t,book_image:o,_id:r}){return`<li class="book-category-item" data-id="${r}">
    <div class = "img-cover">
      <img class="book-category-image" src="${o}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
 </li>`}function L(e,t){const o=document.querySelector(".bestsellers-container");o.innerHTML="",D(".bestsellers-container",t),o.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const r=document.querySelector(".book-category-list"),s=e.map(({author:a,book_image:c,title:i,_id:n})=>I({author:a,book_image:c,title:i,_id:n})).join("");r.innerHTML=s,r.addEventListener("click",onClickBook)}const f={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function Q(e){return e.map(o=>`<li class='sidebar-category-item' data-source="${o.list_name}">${o.list_name}</li>`).join("")}(async()=>{try{const e=await l.getCategoryList(),t=Q(e);f.categoryList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();f.allCategory.addEventListener("click",async e=>{try{const t=await l.getBestSellers();B(t)}catch(t){console.log(t)}});f.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(r=>{r.classList.remove("category-active")}),e.target.classList.add("category-active");try{if(!e.target.classList.contains("all-category")){const r=await l.getCategory(t);L(r,t)}}catch(r){console.log(r)}}});const X="data:image/webp;base64,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",v="data:image/png;base64,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",R="data:image/webp;base64,UklGRuwDAABXRUJQVlA4WAoAAAAQAAAAJQAAIwAAQUxQSPoAAAABgHPbtqnnxq5sVxmp7M5m51+Q/AKnMjrbqWzbqVjZtt57n7/zvnuiOiImgPwLLZP91fGM8x9EzKQHkkX5k0iWGfOkp+RQ/yqCmXEfSuZNbyL+7IwfBaOKJ5Hi7EKQEj/DkjsRXeF2OA+ltBsRfSYDchaIMI91gDwR6p0F0IXzYA1049xbAI1IlkA6zqMd4IbDBAEWOKJGQEuAs6cqjzzhXJsARzh35sAGzoU+0IezogTkorynElCv6pmaYC1GCSLEsfaZCreZqk4UdGp5VojbTFYjFN1aX3lxmylqhLJnL4/9BDWC6DksZytRjSD79gr345XJN9RVJv9BVlA4IMwCAADwEACdASomACQAAAAAJaQATjP8IP1u7Ezq56cfrlllnm/4d/sz/s9QR/TvxZ/Zn/M5w18I/nn4n/tz/jtkP/D/55+IuyEfw/+wfib7Vv7d+IHqy/AP51/a/xc+gH+EfxL+ef1j9b/7D/yuUI/R75/z0P8MQYgsdyb8IqLyiOAj3jgTBInG9g2laZrXuPxB3FAA/v//xRLyEHg0def/2rX/6cS55//USMjrtXm+w63okqMEW5hkU7kVYPWS9m6Txet+3+RTMPxHDyEjOAzXM8ABFFRd83FUK84h+tCoIEjDONSx5nDzbiENFnyzhumin4d6cDXV7gz3LvzuyoJK8/0cua8lCtbwoVITr3LC3p7F54mHhUJf//zkpshPB2Xp1XV2h2OAL7zhGZ0oDZVa7VKh/xCHwaa46vQcUnvXWD3TmHsBo/7zBht8Aho1ba7x2djFfgVf//SGmNVhpw0r6odKPMz0XGLgErhaAYX/XzbcHPqZAYk/pXMxll9wPLWhwjpMd94nNIWKY70KyRZj+/hK+MFzomTZf0s/3v0Lcdwx3YqIhasUngFFwygzUC8YTxb3tiO02TRGc5P/7xYyaa/dqo0Ip4Z8jkfsTpa9oJycU2RI7Ia2pHdHtT+oq0DQgnGyCD3mOf4SoX9/uhxR57A05Sdd4CiuSGqZEnaac/GGoL3W4fW/HfhRglfPivbrC7t89IwP1YhnoJRxdNZ1QNccNb7cSuhQXQ/76Yv96ks7HzcYwaFOaDpmP8+HXQhpIRRqX/iyaZV///8gJHZgKZYBY19ndEcBTCNsXBSPcb30UCJTfMArDXF8+6TVB6GSBCGBpAf/96J4miSJJrIboazsk6MTo9uP/1GO+zQ6mRa/4I2gWqqHZHUXNTGxr74K//++UwxfixnGZj9NryCJo7M4a7nwaVGgJz5t5QTc2l+RcXFHOqSH/2qNQAAAAA==",S="data:image/png;base64,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",d=document.querySelector(".modal"),C=document.querySelector(".modal-close"),u=document.querySelector(".modal-add-to-cart");document.querySelector(".modal-card");let g={};document.addEventListener("DOMContentLoaded",()=>{T()});function T(){document.addEventListener("click",e=>{const t=e.target.closest(".book-category-item");if(t){const o=t.dataset.id;console.log("Selected Book ID:",o),j(e)}})}async function j(e){document.body.style.overflow="hidden",d.classList.remove("is-hidden"),d.addEventListener("click",q),window.addEventListener("keydown",E),C.addEventListener("click",p);try{const t=e.target.closest(".book-category-item");if(!t){console.error("Book container element not found!");return}const o=t.dataset.id;g=await l.getBookDescription(o),x(g),setTimeout(()=>{Z(g),u.addEventListener("click",M)},0)}catch(t){console.log("помилка",t)}}async function Z(e){const t=await h("bookList");if(!t||t.length===0){m();return}t.find(r=>r._id===e._id)?w():m()}function M(){const e=h("bookList"),t=g._id;u.textContent==="add to shopping list"?(K(g),w()):(e.forEach((o,r,s)=>{if(o._id===t)return s.splice(r,1)}),b("bookList",e),e.length===0&&V("bookList"),m())}function m(){u.textContent="add to shopping list"}function w(){u.textContent="remove from the shopping list"}function x(e){const t=document.querySelector(".modal-card");if(!t){console.error("Container element not found!");return}const o=`
    <img class="modal-book-cover" src=${e.book_image} alt="Book cover"/>
    <div class="modal-blok-text">
      <p class="modal-book-title">${e.title}</p>
      <p class="modal-author">${e.author}</p>
      <p class="modal-description">${e.description}</p>
      <div class="modal-links">
        <a href="${e.buy_links[0].url}" target="_blank" rel="noopener noreferrer">
          <picture class="modal-icon">
            <source srcset="${X}" type="image/webp"/>
            <source srcset="${v}" type="image/png"/>
            <img src="${v}" alt="Amazon"/>
          </picture>
        </a>
        <a href="${e.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
          <picture class="modal-icon">
            <source srcset="${R}" type="image/webp"/>
            <source srcset="${S}" type="image/png"/>
            <img src="${S}" alt="Apple Books"/>
          </picture>
        </a>
      </div>
    </div>`;t.innerHTML=o}function E(e){e.key==="Escape"&&p()}function q(e){e.target===d&&p()}function p(){d.classList.add("is-hidden"),document.body.style.overflow="visible",d.removeEventListener("click",q),window.removeEventListener("keydown",E),C.removeEventListener("click",p)}const K=e=>{const t=h("bookList")||[],{_id:o,title:r,list_name:s,description:a,author:c,book_image:i}=e,n={_id:o,title:r,list_name:s,description:a,author:c,book_image:i,amazon:e.buy_links[0].url,apple:e.buy_links[1].url,bookShop:e.buy_links[4].url};if(t.length!==0){t.find(y=>y._id===n._id)||(t.push(n),b("bookList",t));return}t.push(n),b("bookList",t)},b=(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(o){console.error("Set state error: ",o.message)}},V=e=>{try{localStorage.removeItem(e)}catch(t){console.log("Remove item error: ",t.message)}},h=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}};
//# sourceMappingURL=commonHelpers2.js.map
