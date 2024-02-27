import{L as p}from"./assets/scroll-up-57c3d5dd.js";const t=new p,s=t.getProducts();function n(){const e=document.getElementById("bookList");if(e.innerHTML="",s.length===0||!t){e.innerHTML=`
            <li>
                <picture>
                    <source srcset="../images/shopping-list/placeholder.webp" type="image/webp">
                    <source srcset="../images/shopping-list/placeholder.png" type="image/png">
                    <source srcset="../images/shopping-list/placeholder2x.webp" type="image/webp">
                    <source srcset="../images/shopping-list/placeholder2x.png" type="image/png">
                    <img src="../images/shopping-list/placeholder.png" alt="No Books Added">
                </picture>
            </li>`;return}s.forEach(i=>{const o=document.createElement("li");o.textContent=i,e.appendChild(o)})}n();
//# sourceMappingURL=commonHelpers.js.map
