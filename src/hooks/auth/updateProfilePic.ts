import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { UPDATE_PROFILE_PICTURE } from "@/types/urlconstants/constants";

const api = new HttpService().service();

export const useAddProduct = () => {
  const queryClient = useQueryClient();

  const addProduct = async (payload: FormData) => {
    return await api.create(UPDATE_PROFILE_PICTURE, payload, undefined, true);
  };
  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
