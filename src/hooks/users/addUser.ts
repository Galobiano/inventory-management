import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { ADD_USER } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const useAddUser = () => {
  const queryClient = useQueryClient();

  const addUser = async (payload: IModel.IADDUSER) => {
    return await api.create(ADD_USER, payload);
  };

  return useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
