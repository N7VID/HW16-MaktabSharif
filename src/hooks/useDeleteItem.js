import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export default function useDeleteItem({ url, queryKey, successMessage }) {
  const queryClient = useQueryClient();

  const { mutate: deleteItem } = useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(url + `/${id}`);
      return res.data;
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

  return { deleteItem };
}
