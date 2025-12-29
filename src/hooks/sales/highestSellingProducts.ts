import { useQuery } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { GET_HIGHEST_SELLING_PRODUCTS } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const useGetHighestSellingProducts = () => {
  const fetchHighestSellingProducts = async (): Promise<
    IModel.IHIGHESTSELLINGPRODUCTS[]
  > => {
    const response = await api.get<IModel.IHIGHESTSELLINGPRODUCTSRESPONSE>(
      GET_HIGHEST_SELLING_PRODUCTS
    );
    return response.data;
  };
  return useQuery({
    queryKey: ["highestSellingProducts"],
    queryFn: fetchHighestSellingProducts,
    staleTime: 5000,
  });
};
