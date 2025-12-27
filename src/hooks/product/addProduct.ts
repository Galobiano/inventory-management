import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { ADD_PRODUCT } from "@/types/urlconstants/constants";

const api = new HttpService().service();

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  const addProduct = async (payload: FormData) => {
    return await api.create(ADD_PRODUCT, payload, undefined, true);
  };
  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
