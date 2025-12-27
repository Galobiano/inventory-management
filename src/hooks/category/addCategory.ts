import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { ADD_CATEGORY } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const useAddCategory = () => {
  const queryClient = useQueryClient();

  const addCategory = async (payload: IModel.IADDCATEGORY) => {
    return await api.create(ADD_CATEGORY, payload);
  };

  return useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};
