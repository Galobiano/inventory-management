import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { UPDATE_PROFILE_PICTURE } from "@/types/urlconstants/constants";

const api = new HttpService().service();

export const useUpdatePicture = () => {
  const queryClient = useQueryClient();

  const updateProfile = async (payload: FormData) => {
    return await api.create(UPDATE_PROFILE_PICTURE, payload, undefined, true);
  };
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
