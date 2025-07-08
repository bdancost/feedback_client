import { createContext, useContext } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

// Hook personalizado
export const useAuth = () => useContext(AuthContext);
