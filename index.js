import{a as S,S as E,i as c}from"./assets/vendor-CocXUmuy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m=15;async function y(o,r){const a="39362168-c2a5e7696671cec7e0c5dcb17",s="https://pixabay.com/api/",e=new URLSearchParams({key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:m});try{return(await S.get(s,{params:e})).data}catch(t){return t.message}}const g=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".loadmore-btn"),f=new E(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:.8,overlay:!0});f.on("show.simplelightbox",function(){});function L(o){const r=o.map(({largeImageURL:a,webformatURL:s,tags:e,likes:t,views:l,comments:b,downloads:v})=>`<li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${e}"
            width="360"
            height="200"
          />
          <ul class="gallery-info-list">
            <li class="gallery-list-item">Likes
              <p class="gallery-item-title">${t}</p>
            </li>
            <li class="gallery-list-item">Views
              <p class="gallery-item-title">${l}</p>
            </li>
            <li class="gallery-list-item">Comments
              <p class="gallery-item-title">${b}</p>
            </li>
            <li class="gallery-list-item">Downloads
              <p class="gallery-item-title">${v}</p>
            </li>
          </ul>
        </a>
      </li>`).join("");g.insertAdjacentHTML("beforeend",r),f.refresh()}function q(){g.innerHTML=""}function P(){h.classList.remove("js-hidden")}function M(){h.classList.add("js-hidden")}function w(){p.classList.remove("js-hidden")}function d(){p.classList.add("js-hidden")}const $=document.querySelector(".form"),B=document.querySelector(".loadmore-btn");let n,i,u;$.addEventListener("submit",async o=>{if(i=1,o.preventDefault(),n=o.target.elements.search.value.trim(),n.length===0){c.error({title:"Error",message:"Please enter your request"});return}q();try{const r=await y(n,i);if(r.hits.length===0)throw d(),new Error("Error");L(r.hits),u=Math.ceil(r.totalHits/m),console.log(u),w()}catch{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}i+=1,o.target.reset()});B.addEventListener("click",async o=>{d(),P();try{const r=await y(n,i);if(i>u)throw d(),new Error("Error");L(r.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),w()}catch{c.error({title:"Error",message:"We're sorry, but you've reached the end of search results."})}M(),i+=1});
//# sourceMappingURL=index.js.map
