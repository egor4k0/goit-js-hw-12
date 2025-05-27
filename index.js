import{a as q,S as E,i as c}from"./assets/vendor-CocXUmuy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m=15;async function y(o,r){const a="39362168-c2a5e7696671cec7e0c5dcb17",i="https://pixabay.com/api/",e=new URLSearchParams({key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:m});try{return(await q.get(i,{params:e})).data}catch(t){return t.message}}const g=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".loadmore-btn"),h=new E(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:.8,overlay:!0});h.on("show.simplelightbox",function(){});function L(o){const r=o.map(({largeImageURL:a,webformatURL:i,tags:e,likes:t,views:l,comments:S,downloads:P})=>`<li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${i}"
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
              <p class="gallery-item-title">${S}</p>
            </li>
            <li class="gallery-list-item">Downloads
              <p class="gallery-item-title">${P}</p>
            </li>
          </ul>
        </a>
      </li>`).join("");g.insertAdjacentHTML("beforeend",r),h.refresh()}function M(){g.innerHTML=""}function w(){f.classList.remove("js-hidden")}function b(){f.classList.add("js-hidden")}function v(){p.classList.remove("js-hidden")}function d(){p.classList.add("js-hidden")}const $=document.querySelector(".form"),B=document.querySelector(".loadmore-btn");let n,s=1,u=0;$.addEventListener("submit",async o=>{if(o.preventDefault(),s=1,n=o.target.elements.search.value.trim(),n===""){c.error({title:"Error",message:"Please enter your request"});return}M(),d(),w();try{const r=await y(n,s);if(r.hits.length===0)throw new Error("No images found");L(r.hits),u=Math.ceil(r.totalHits/m),s<u&&v()}catch{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}b(),s+=1,o.target.reset()});B.addEventListener("click",async()=>{if(s>u){d(),c.info({title:"Info",message:"We're sorry, but you've reached the end of search results."});return}d(),w();try{const o=await y(n,s);L(o.hits);const r=document.querySelector(".gallery-item");if(r){const a=r.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}s<u&&v()}catch{c.error({title:"Error",message:"Unexpected error occurred. Please try again later."})}b(),s+=1});
//# sourceMappingURL=index.js.map
