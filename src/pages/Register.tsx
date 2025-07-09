import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:3333/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erro ao registrar.");
      }

      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Criar Conta
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && (
          <p className="text-green-600 mb-4">
            Cadastro realizado! Redirecionando...
          </p>
        )}

        <input
          type="text"
          placeholder="Nome completo"
          className="w-full border rounded-md p-2 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full border rounded-md p-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full border rounded-md p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white w-full py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Registrar
        </button>

        <p className="text-sm text-center mt-4 text-gray-500">
          Já tem uma conta?{" "}
          <a href="/login" className="text-indigo-600">
            Entrar
          </a>
        </p>
      </form>
    </div>
  );
}
