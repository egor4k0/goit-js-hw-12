import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery, perPage } from "./js/pixabay-api";
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions";

const form = document.querySelector(".form");
const loadMore = document.querySelector(".loadmore-btn");

let inputValue;
let page = 1;
let totalPages = 0;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  page = 1;
  inputValue = e.target.elements.search.value.trim();

  if (inputValue === "") {
    iziToast.error({
      title: "Error",
      message: "Please enter your request",
    });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(inputValue, page);

    if (data.hits.length === 0) {
      throw new Error("No images found");
    }

    createGallery(data.hits);
    totalPages = Math.ceil(data.totalHits / perPage);

    if (page < totalPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message:
        "Sorry, there are no images matching your search query. Please try again!",
    });
  }

  hideLoader();
  page += 1;
  e.target.reset();
});

loadMore.addEventListener("click", async () => {
  if (page > totalPages) {
    hideLoadMoreButton();
    iziToast.info({
      title: "Info",
      message: "We're sorry, but you've reached the end of search results.",
    });
    return;
  }

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(inputValue, page);
    createGallery(data.hits);

    const card = document.querySelector(".gallery-item");
    if (card) {
      const cardHeight = card.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
      });
    }

    if (page < totalPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message:
        "Unexpected error occurred. Please try again later.",
    });
  }

  hideLoader();
  page += 1;
});
