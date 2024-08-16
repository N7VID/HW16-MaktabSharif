import { useQuery } from "@tanstack/react-query";
import { fetchContacts } from "../api/contacts.api";
import { useContext } from "react";
import { RootContext } from "../context/RootContextProvider";

export const useGetContacts = () => {
  const { params } = useContext(RootContext);
  return useQuery({
    queryKey: ["contacts", params],
    queryFn: () => fetchContacts(params),
  });
};
