export interface IGETCATEGORIES {
  id: string;
  name: string;
}
export interface IGETCATEGORIESRESPONSE {
  success: boolean;
  data: IGETCATEGORIES[];
}
