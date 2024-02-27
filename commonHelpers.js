import"./assets/scroll-up-37528cea.js";class l{constructor(){this.keyName="shopping-list"}getProducts(){const e=localStorage.getItem(this.keyName);return e!==null?JSON.parse(e):[]}checkProduct(e){let t=this.getProducts(),r=t.findIndex(n=>n.id==e);const s={hasProd:!1,index:r,arrProd:t};return r!==-1&&(s.hasProd=!0),s}putProducts(e){let{hasProd:t,index:r,arrProd:s}=this.checkProduct(e.id);t!==!0?s.push(e):s.splice(r,1),localStorage.setItem(this.keyName,JSON.stringify(s))}}const c=new l,i=c.getProducts();function p(){const o=document.getElementById("bookList");if(o.innerHTML="",i.length===0||!c){o.innerHTML=`
            <li>
                <picture>
                    <source srcset="../images/shopping-list/placeholder.webp" type="image/webp">
                    <source srcset="../images/shopping-list/placeholder.png" type="image/png">
                    <source srcset="../images/shopping-list/placeholder2x.webp" type="image/webp">
                    <source srcset="../images/shopping-list/placeholder2x.png" type="image/png">
                    <img src="../images/shopping-list/placeholder.png" alt="No Books Added">
                </picture>
            </li>`;return}i.forEach(e=>{const t=document.createElement("li");t.textContent=e,o.appendChild(t)})}p();
//# sourceMappingURL=commonHelpers.js.map
