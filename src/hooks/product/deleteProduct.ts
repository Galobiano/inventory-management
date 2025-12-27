import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { DELETE_PRODUCT } from "@/types/urlconstants/constants";

const api = new HttpService().service();

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const deleteProduct = async (id: number) => {
    return api.delete(`${DELETE_PRODUCT}?id=${id}`);
  };
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
