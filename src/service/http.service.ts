import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

import { IServices } from "@/types/index";
import { EHttpMethod } from "@/types/enum";

class HttpService {
  private http: AxiosInstance;
  private baseUrl: string = import.meta.env.VITE_BASE_URL;

  constructor() {
    this.http = axios.create({
      baseURL: this.baseUrl,
      withCredentials: false,
    });
  }

  private get accessToken(): string | null {
    return localStorage.getItem("authToken");
  }

  private get getAuthorization() {
    return this.accessToken
      ? { Authorization: `Bearer ${this.accessToken}` }
      : {};
  }

  // Content-Type = What format is my data?
  // application/json = The data is JSON (text)
  private setUpHeader(hasAttachment = false) {
    return hasAttachment
      ? { ...this.getAuthorization }
      : { "Content-Type": "application/json", ...this.getAuthorization };
  }

  public service(): this {
    this.injectRequestInterceptor();
    return this;
  }

  public injectRequestInterceptor() {
    this.http.interceptors.request.use((request) => {
      return request;
    });

    this.http.interceptors.response.use(
      (response) => response,
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  private async request<T>(
    method: EHttpMethod,
    url: string,
    option: AxiosRequestConfig
  ): Promise<T> {
    const urlVersion = url;

    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url: urlVersion,
        ...option,
      });
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response && err.response.status === 401) {
        localStorage.removeItem("authToken");
        window.location.href = "/";
      }
      return this.normalizeError(error);
    }
  }
  private normalizeError(error: unknown) {
    return Promise.reject(error);
  }

  //   GET
  public async get<T>(
    url: string,
    params?: IServices.IParams,
    hasAttachment = false
  ) {
    return this.request<T>(EHttpMethod.GET, url, {
      params,
      headers: this.setUpHeader(hasAttachment),
    });
  }

  //   POST
  public async create<T, P>(
    url: string,
    payload: P,
    params?: IServices.IParams,
    hasAttachment = false
  ) {
    return this.request<T>(EHttpMethod.POST, url, {
      params,
      headers: this.setUpHeader(hasAttachment),
      data: payload,
    });
  }

  public async update<T, P>(
    url: string,

    payload: P,
    params?: IServices.IParams,
    hasAttachment = false
  ): Promise<T> {
    return this.request(EHttpMethod.PUT, url, {
      params,
      headers: this.setUpHeader(hasAttachment),
      data: payload,
    });
  }

  public async patch<T, P>(
    url: string,

    payload: P,
    params?: IServices.IParams,
    hasAttachment = false
  ): Promise<T> {
    return this.request(EHttpMethod.PATCH, url, {
      params,
      headers: this.setUpHeader(hasAttachment),
      data: payload,
    });
  }

  public async delete<T>(
    url: string,
    params?: IServices.IParams,
    hasAttachment = false
  ): Promise<T> {
    return this.request(EHttpMethod.DELETE, url, {
      params,
      headers: this.setUpHeader(hasAttachment),
    });
  }

  public async trueDelete<T, P>(
    url: string,

    payload: P,
    params?: IServices.IParams,
    hasAttachment = false
  ): Promise<T> {
    return this.request(EHttpMethod.DELETE, url, {
      params,
      headers: this.setUpHeader(hasAttachment),
      data: payload,
    });
  }
}
export { HttpService };
