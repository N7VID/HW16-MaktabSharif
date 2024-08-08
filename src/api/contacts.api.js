import httpRequest from "../services/http-request";
export const fetchContacts = async (setTotalItems, params) => {
  const url = `/contacts?q=${params.search}&_page=${params.page}&_limit=${params.limit}`;
  const response = await httpRequest.get(url);
  setTotalItems(+response.headers["x-total-count"]);
  return response.data;
};
