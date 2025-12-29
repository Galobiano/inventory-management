import { useQuery } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { GET_TOP_SELLING_PRODUCTS } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const useGetTopSellingProducts = () => {
  const fetchTopSellingProducts = async (): Promise<
    IModel.ITOPSELLINGPRODUCTS[]
  > => {
    const response = await api.get<IModel.ITOPSELLINGPRODUCTSRESPONSE>(
      GET_TOP_SELLING_PRODUCTS
    );
    return response.data;
  };
  return useQuery({
    queryKey: ["topSellingProducts"],
    queryFn: fetchTopSellingProducts,
    staleTime: 5000,
  });
};
