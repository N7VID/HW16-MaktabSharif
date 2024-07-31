import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export default function usePatchItem({ url, queryKey, successMessage }) {
  const queryClient = useQueryClient();
  const { mutate: updateContacts } = useMutation({
    mutationFn: async (value) => {
      const { id, ...patchValues } = value;
      const res = await axios.patch(`${url}/${id}`, patchValues);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
      toast.success(successMessage, {
        position: "top-left",
      });
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`, {
        position: "top-left",
        rtl: false,
      });
    },
  });
  return { updateContacts };
}
