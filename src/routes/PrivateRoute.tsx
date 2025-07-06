import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

type Props = {
  children: JSX.Element;
};

export default function PrivateRoute({ children }: Props) {
  const auth = useContext(AuthContext);

  // Se não estiver logado, redireciona para login
  if (!auth?.user) {
    return <Navigate to="/login" />;
  }

  // Se estiver logado, mostra a página protegida
  return children;
}
