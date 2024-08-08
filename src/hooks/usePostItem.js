import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { postContacts } from "../api/postContacts.api";

export default function usePostItem({ queryKey, successMessage }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => postContacts(data),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
      toast.success(successMessage);
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`, {
        rtl: false,
      });
    },
  });
}
