export interface GetExpiredProducts {
  name: string;
  stock: number;
  date_added: string;
  expiration_date: string;
  expired_in: string;
}

export interface GetExpiredProductsResponse {
  success: boolean;
  data: GetExpiredProducts[];
}
