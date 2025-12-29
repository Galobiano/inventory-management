import { useQuery } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { GET_LATEST_SALES } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const useGetLatestSales = () => {
  const fetchLatestSales = async (): Promise<IModel.ILATESTSALES[]> => {
    const response = await api.get<IModel.ILATESTSALERESPONSE>(
      GET_LATEST_SALES
    );
    return response.data;
  };
  return useQuery({
    queryKey: ["latestSales"],
    queryFn: fetchLatestSales,
    staleTime: 5000,
  });
};
