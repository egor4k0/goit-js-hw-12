import axios from "axios";

export const perPage = 15;

export async function getImagesByQuery(query, page) {
  const myApiKey = "39362168-c2a5e7696671cec7e0c5dcb17";
  const BASE_URL = "https://pixabay.com/api/";
  
  const params = new URLSearchParams({
    key: myApiKey,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: page,
    per_page: perPage,
  })
  try {
    const response = await axios.get(BASE_URL, { params })
    return response.data;
  } catch (error) {
    return error.message
  }
}


