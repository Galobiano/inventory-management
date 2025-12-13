export interface Ilogin {
  username: string;
  password: string;
}

export interface IAuthResponse {
  success: boolean;
  token: string;
}

export interface ProvideProps {
  user: null;
  isAuthenticated: boolean | null;
  token: string;
  login: (data: Ilogin) => Promise<unknown>;
  logout(): void;
  isLoading: boolean;
}
