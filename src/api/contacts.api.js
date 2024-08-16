import httpRequest from "../services/http-request";
export const fetchContacts = async (params) => {
  const url = `/contacts?q=${params.search}&_page=${params.page}&_limit=${params.limit}`;
  const response = await httpRequest.get(url);
  const totalContacts = +response.headers["x-total-count"];
  return { data: response.data, totalContacts };
};
