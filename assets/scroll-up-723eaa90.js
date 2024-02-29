(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function g(){const o=document.querySelector(".toggle-theme");let n=document.documentElement;o.addEventListener("click",l=>{l.preventDefault(),n.hasAttribute("data-theme")?(n.removeAttribute("data-theme"),localStorage.removeItem("theme")):(n.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))}),localStorage.getItem("theme")!==null&&n.setAttribute("data-theme","dark")}g();const p=document.querySelector(".btn-menu"),f=document.getElementById("mobile-menu"),h=document.querySelector(".icon-menu-mobile"),a=document.querySelector(".header");p.addEventListener("click",()=>{f.classList.toggle("is-hidden"),f.classList.contains("is-hidden")?(a.classList.remove("cont-header-menu"),h.setAttribute("href","./images/header/mobile-header-icon.svg#icon-left")):(a.classList.add("cont-header-menu"),h.setAttribute("href","./images/header/mobile-heder-icons.svg#icon-x-close"))});window.addEventListener("resize",()=>{window.innerWidth>=768&&a.classList.remove("cont-header-menu")});document.addEventListener("DOMContentLoaded",function(){const o=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null}],n=document.querySelectorAll(".fund-img"),s=document.getElementById("fundList").getElementsByClassName("fund-item"),e=document.querySelector(".fund-btn");let t=0;function r(){for(const i of s)i.classList.add("hidden")}function c(i,d){var m;for(let u=i;u<d;u++)(m=s[u])==null||m.classList.remove("hidden")}r(),c(0,6),e.addEventListener("click",function(){const i=t+6;i<s.length?(r(),c(t+3,i+3),t+=3):(r(),c(0,6),t=0)}),document.getElementById("myButton").addEventListener("click",function(){this.classList.toggle("flipped")}),n.forEach(function(i,d){i.addEventListener("click",function(){window.open(o[d].url,"_blank")})})});document.addEventListener("DOMContentLoaded",function(){const o=document.createElement("button");o.classList.add("scroll-button"),o.innerHTML=`
       <svg class="icon">
        <use href="./images/scroll-up/Vector-scroll.svg#Vector"></use>
    </svg>
    `,document.body.appendChild(o);function n(){window.scrollTo({top:0,behavior:"smooth"})}o.addEventListener("click",n),window.addEventListener("scroll",function(){window.scrollY>100?o.classList.add("show"):o.classList.remove("show")})});
//# sourceMappingURL=scroll-up-723eaa90.js.map
