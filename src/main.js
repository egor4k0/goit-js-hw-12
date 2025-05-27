loadMore.addEventListener("click", async e => {
  if (page > totalPages) {
    hideLoadMoreButton();
    iziToast.info({
      title: 'Info',
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
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth"
    });

    if (page < totalPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: "Unexpected error occurred. Try again later.",
    });
  }

  hideLoader();
  page += 1;
});
