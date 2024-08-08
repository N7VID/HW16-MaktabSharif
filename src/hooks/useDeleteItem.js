import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { deleteContacts } from "../api/deleteContacts.api";

export default function useDeleteItem({ queryKey, successMessage }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteContacts(id),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
      toast.success(successMessage);
    },
    onError: (error) => {
      toast.error(error.message, {
        rtl: false,
      });
    },
  });
}
