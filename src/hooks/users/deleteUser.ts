import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { DELETE_USER } from "@/types/urlconstants/constants";

const api = new HttpService().service();

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  const deleteUser = async (id: number) => {
    return api.delete(`${DELETE_USER}?id=${id}`);
  };

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
