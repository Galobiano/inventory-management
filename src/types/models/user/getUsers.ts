export interface IGETUSERS {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  status: string;
  last_login: string;
}

export interface IGETUSERSRESPONSE {
  success: boolean;
  data: IGETUSERS[];
}
