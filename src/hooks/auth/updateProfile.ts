import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { UPDATE_PROFILE } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const updateProfile = async (payload: IModel.IUpdateProfile) => {
    return await api.update(UPDATE_PROFILE, payload);
  };

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
