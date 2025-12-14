export interface Ilogin {
  username: string;
  password: string;
}

export interface IAuthResponse {
  success: boolean;
  message: string;
  token: string;
}

// ProvideProps is the blueprint (aka rulebook / checklist) for your AuthContext.
// It does NOT store data.
export interface ProvideProps {
  isAuthenticated: boolean | null;
  token: string | null;
  login: (data: Ilogin) => Promise<unknown>;
  logout(): void;
  isLoading: boolean;
}
