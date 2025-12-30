import { useQuery } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { GET_EXPIRED_PRODUCTS } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const useGetExpiredProducts = () => {
  const fetchExpiredProducts = async (): Promise<
    IModel.GetExpiredProducts[]
  > => {
    const response = await api.get<IModel.GetExpiredProductsResponse>(
      GET_EXPIRED_PRODUCTS
    );
    return response.data;
  };
  return useQuery({
    queryKey: ["expiredProducts"],
    queryFn: fetchExpiredProducts,
    staleTime: 5000,
  });
};
