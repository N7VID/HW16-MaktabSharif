import httpRequest from "../services/http-request";

export const patchContacts = async (data, id) => {
  const url = `/contacts/${id}`;
  const response = await httpRequest.patch(url, data);
  return response.data;
};
