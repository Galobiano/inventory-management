export interface IGETPRODUCT {
  id: number;
  name: string;
  image: string;
  quantity: number;
  total: number;
}
export interface IGETPRODUCTRESPONSE {
  success: boolean;
  data: IGETPRODUCT[];
}
