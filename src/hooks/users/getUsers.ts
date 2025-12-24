import { useQuery } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { GET_USERS } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const useGetProducts = () => {
  const fetchUsers = async (): Promise<IModel.IGETUSERS[]> => {
    const response = await api.get<IModel.IGETUSERSRESPONSE>(GET_USERS);
    return response.data;
  };

  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5000,
  });
};
