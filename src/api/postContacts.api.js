import httpRequest from "../services/http-request";

export const postContacts = async (data) => {
  const url = "/contacts";
  const response = await httpRequest.post(url, data);
  return response.data;
};
