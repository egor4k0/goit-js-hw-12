import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import "/css/new-lightbox.css";

const list = document.querySelector(".gallery"); 
const loader = document.querySelector(".loader");
const loadMore = document.querySelector(".loadmore-btn");


const ligthBox = new SimpleLightbox(".gallery li a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
    overlayOpacity: 0.8,
    overlay: true
  });

  ligthBox.on('show.simplelightbox', function () {
  });


export function createGallery(images) {
  
  const markup = images
    .map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) =>
      `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            width="360"
            height="200"
          />
          <ul class="gallery-info-list">
            <li class="gallery-list-item">Likes
              <p class="gallery-item-title">${likes}</p>
            </li>
            <li class="gallery-list-item">Views
              <p class="gallery-item-title">${views}</p>
            </li>
            <li class="gallery-list-item">Comments
              <p class="gallery-item-title">${comments}</p>
            </li>
            <li class="gallery-list-item">Downloads
              <p class="gallery-item-title">${downloads}</p>
            </li>
          </ul>
        </a>
      </li>`
    )
    .join("")

  list.insertAdjacentHTML("beforeend", markup);
  
  ligthBox.refresh();
}

export function clearGallery() {
  list.innerHTML = "";
}

export function showLoader() {
  loader.classList.remove("js-hidden");
}

export function hideLoader() {
  loader.classList.add("js-hidden");
}

export function showLoadMoreButton() {
  loadMore.classList.remove("js-hidden");
}

export function hideLoadMoreButton() {
  loadMore.classList.add("js-hidden");
}