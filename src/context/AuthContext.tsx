import React, { createContext, useContext, useState, useEffect } from "react";
import { userLogin } from "@/hooks/auth/Auth";
import { ProvideProps, IAuthResponse } from "@/types/models";
import { AuthTypes } from "@/types";

// like a shared box
// Any component wrapped inside a Provider can access it
// These are default values / placeholders to satisfy TypeScript and React.

const AuthContext = createContext<ProvideProps>({
  isAuthenticated: false,
  token: null,
  login: async () => {},
  logout: () => {},
  isLoading: false,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("authToken")
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!token);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { mutateAsync } = userLogin();

  useEffect(() => {
    if (token) {
      setToken(token);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (data: AuthTypes.Ilogin) => {
    setIsLoading(true);

    try {
      const response = (await mutateAsync(data)) as IAuthResponse;
      const authToken = response?.token || null;

      if (authToken) {
        setToken(authToken);
        setIsAuthenticated(true);

        localStorage.setItem("authToken", authToken);
      }
      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.clear();

    window.location.replace("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");

  return context;
};
