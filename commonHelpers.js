import"./assets/scroll-up-4ec72499.js";class r{constructor(){this.keyName="shopping-list"}getProducts(){const e=localStorage.getItem(this.keyName);return e!==null?JSON.parse(e):[]}checkProduct(e){let s=this.getProducts(),t=s.findIndex(l=>l.id==e);const o={hasProd:!1,index:t,arrProd:s};return t!==-1&&(o.hasProd=!0),o}putProducts(e){let{hasProd:s,index:t,arrProd:o}=this.checkProduct(e.id);s!==!0?o.push(e):o.splice(t,1),localStorage.setItem(this.keyName,JSON.stringify(o))}}const c=new r,a=c.getProducts();function n(){const i=document.getElementById("bookList");if(i.innerHTML="",a.length===0||!localStorage){i.innerHTML=`
            <li>
                <picture>
                    <source srcset="../images/shopping-list/placeholder.webp" type="image/webp">
                    <source srcset="../images/shopping-list/placeholder.png" type="image/png">
                    <img src="../images/shopping-list/placeholder.png" alt="No Books Added">
                </picture>
            </li>`;return}a.map(s=>{const t=document.createElement("li");t.classList.add("book-card");const o=`
            <img class="book-cover-img" src="${s.book_image}" alt="Book Cover">
            <div class="book-info">
                <h2 class="book-name-title">${s.title}</h2>
                <p class="book-name-category">${s.list_name}</p>
                <p class="book-short-description">${s.description}</p>
                <div class="book-author-link">
                    <p class="author-full-name">${s.author}</p>
                    <a class="link" href="${s.amazon_product_url}">
                        <img class="icon-link" src="../images/shopping-list/amazon-icon.svg" width="32px" height="11px" alt="Amazon">
                    </a>
                    <a class="link" href="${s.buy_links[1].url}">
                        <img class="icon-link" src="../images/shopping-list/аpple-icon.svg" width="16px" height="16px" alt="Apple Books">
                    </a>
                </div>
                <button class="remove-book">
                    <img class="del-icon" src="../images/shopping-list/trash-03.svg" alt="Delete">
                </button>
            </div>`;return t.innerHTML=o,t}).forEach(s=>{i.appendChild(s)})}n();
//# sourceMappingURL=commonHelpers.js.map
