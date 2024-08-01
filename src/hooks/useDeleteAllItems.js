import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { RootContext } from "../context/RootContextProvider";

export default function useDeleteItems({ url, queryKey, successMessage }) {
  const queryClient = useQueryClient();
  const { contextState, setContextState } = useContext(RootContext);

  const { mutate: deleteItems } = useMutation({
    mutationFn: async () => {
      const { contacts } = contextState;
      const contactIds = contacts.map((contact) => contact.id);
      const deleteRequests = contactIds.map((id) =>
        axios.delete(`${url}/${id}`)
      );
      //   setContextState({
      //     contacts: [],
      //   });
      const res = await Promise.all(deleteRequests);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
      toast.success(successMessage, {
        position: "top-left",
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-left",
        rtl: false,
      });
    },
  });

  return { deleteItems };
}
