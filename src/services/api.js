import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "qAe5ICdv5FUAjrt2tO5dTby4m8t43-8mPwBRbAiABYw";

export async function fetchImages({ query, page }) {
  const { data } = await axios.get(`search/photos`, {
    params: {
      client_id: API_KEY,
      query,
      page,
      per_page: 12,
    },
  });
  return data;
}
