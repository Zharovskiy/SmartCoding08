import{a as r}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();function n(){const s=document.querySelector(".toggle-theme");let t=document.documentElement;s.addEventListener("click",a=>{a.preventDefault(),t.hasAttribute("data-theme")?(t.removeAttribute("data-theme"),localStorage.removeItem("theme")):(t.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))}),localStorage.getItem("theme")!==null&&t.setAttribute("data-theme","dark")}n();class i{constructor(){}booksAllCategories(){return r.defaults.baseURL="https://books-backend.p.goit.global/books",r.get("/category-list")}booksPopular(){return r.defaults.baseURL="https://books-backend.p.goit.global/books",r.get("/top-books")}booksCategorySeparate(t){return r.defaults.baseURL="https://books-backend.p.goit.global/books",r.get("/category",{params:{category:t}})}bookId(t){return r.defaults.baseURL="https://books-backend.p.goit.global/books",r.get(t)}}const u=new i;async function d(){try{const s=await u.bookId("643282b1e85766588626a0dc");console.log(s)}catch{}}d();
//# sourceMappingURL=commonHelpers.js.map
