import { useQuery } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { GET_PRODUCTS } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const useGetProducts = (search: string = "") => {
  const fetchProducts = async (): Promise<IModel.IGETPRODUCT[]> => {
    const response = await api.get<IModel.IGETPRODUCTRESPONSE>(GET_PRODUCTS, {
      params: {
        forTags: true,
        search: search === "" ? "*" : search,
      },
    });

    return response.data;
  };

  return useQuery({
    queryKey: ["products", search],
    queryFn: fetchProducts,
    placeholderData: (previousData) => previousData,
    staleTime: 5000,
  });
};
