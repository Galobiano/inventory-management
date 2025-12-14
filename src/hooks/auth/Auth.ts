import { useMutation } from "@tanstack/react-query";
import { HttpService } from "@/service/http.service";
import { LOGIN } from "@/types/urlconstants/constants";
import { IModel } from "@/types";

const api = new HttpService().service();

export const userLogin = () => {
  const loginRequest = async (payload: IModel.Ilogin) => {
    return api.create(LOGIN, payload);
  };

  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginRequest,
  });
};
