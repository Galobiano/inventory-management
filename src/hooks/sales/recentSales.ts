import { useQuery } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { GET_RECENT_SALES } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const useGetRecentSales = () => {
  const fetchRecentSales = async (): Promise<IModel.IRECENTSALES[]> => {
    const response = await api.get<IModel.IRECENTSALERESPONSE>(
      GET_RECENT_SALES
    );
    return response.data;
  };
  return useQuery({
    queryKey: ["recentSales"],
    queryFn: fetchRecentSales,
    staleTime: 5000,
  });
};
