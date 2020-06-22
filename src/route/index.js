import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/products";
const PAGE_SIZE = 20;

export const fetchData = (page, sort='id') => {
  let fullUrl = API_BASE_URL + `?_page=${page}&_limit=${PAGE_SIZE}&_sort=${sort}`;
  return axios
    .get(fullUrl)
    .then(({data}) => {
      return {response: data}
  }).catch((error) => (
    {error: error}
  ));
};
