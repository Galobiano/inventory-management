// RECENT SALES
export interface IRECENTSALES {
  title: string;
  total_price: string;
  created_at: string;
}
export interface IRECENTSALERESPONSE {
  success: boolean;
  data: IRECENTSALES[];
}

// LASTEST SALES
export interface ILATESTSALES {
  product_name: string;
  quantity_sold: string;
  total_price: string;
  created_at: string;
}

export interface ILATESTSALERESPONSE {
  success: boolean;
  data: ILATESTSALES[];
}

// HIGHEST SELLING PRODUCTS
export interface IHIGHESTSELLINGPRODUCTS {
  title: string;
  total_quantity: string;
  total_revenue: string;
}

export interface IHIGHESTSELLINGPRODUCTSRESPONSE {
  success: boolean;
  data: IHIGHESTSELLINGPRODUCTS[];
}

// TOP SELLING PRODUCTS
export interface ITOPSELLINGPRODUCTS {
  title: string;
  remaining_stock: string;
  total_sold: string;
}

export interface ITOPSELLINGPRODUCTSRESPONSE {
  success: boolean;
  data: ITOPSELLINGPRODUCTS[];
}
