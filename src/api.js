import axios from 'axios';

export const fetchImagesWithQuery = async (searchQuery, page) => {
  const API_KEY = '42001706-084c655b89d9d100c07cefb17';
  const URL = `https://pixabay.com/api/`;
  const response = await axios.get(URL, {
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 12,
    },
  });
  return response.data.hits;
};
