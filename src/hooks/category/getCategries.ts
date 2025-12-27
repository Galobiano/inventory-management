import { useQuery } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { GET_CATEGORIES } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const useGetCategories = () => {
  const fetchCategories = async (): Promise<IModel.IGETCATEGORIES[]> => {
    const response = await api.get<IModel.IGETCATEGORIESRESPONSE>(
      GET_CATEGORIES
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 5000,
  });
};
