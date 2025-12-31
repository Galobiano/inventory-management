import { useQuery } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { GET_PROFILE } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const useGetProfile = () => {
  const fetchProfile = async (): Promise<IModel.IGetProfile> => {
    const response = await api.get<IModel.IGetProfileResponse>(GET_PROFILE);
    return response.data;
  };

  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
    staleTime: 5000,
  });
};
