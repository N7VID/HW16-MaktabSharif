import httpRequest from "../services/http-request";

export const deleteContacts = async (id) => {
  const url = `/contacts/${id}`;
  const response = await httpRequest.delete(url);
  return response.data;
};
