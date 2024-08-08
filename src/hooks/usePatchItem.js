import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { patchContacts } from "../api/patchContacts.api";

export default function usePatchItem({ queryKey, successMessage }) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => patchContacts(data, data.id),
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
