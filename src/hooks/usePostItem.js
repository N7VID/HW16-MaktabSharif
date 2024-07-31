import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export default function usePostItem({ url, queryKey, successMessage }) {
  const queryClient = useQueryClient();

  const { mutate: createContact } = useMutation({
    mutationFn: async (value) => {
      const res = await axios.post(url, value);
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
  return { createContact };
}
