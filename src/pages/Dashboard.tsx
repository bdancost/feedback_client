import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const auth = useAuth();
  const user = auth?.user;

  return (
    <div className="p-6 min-h-screen bg-gray-50 text-gray-800">
      {/* Cabeçalho */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Olá, {user?.email || "Usuário"} 👋
        </h1>
        <p className="text-gray-500">
          Seja bem-vindo ao seu painel de feedbacks
        </p>
      </header>

      {/* Ações */}
      <div className="mb-6 flex justify-end">
        <button
          onClick={() => navigate("/feedback/create")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium shadow transition"
        >
          + Criar novo feedback
        </button>
      </div>

      {/* Estatísticas */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <DashboardCard title="Total de Feedbacks" value="12" />
        <DashboardCard title="Média de Avaliação" value="4.6 ★" />
        <DashboardCard title="Última Submissão" value="Há 2 dias" />
      </section>

      {/* Feedbacks recentes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Feedbacks Recentes</h2>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-gray-500 italic">
            Em breve: listagem dos seus feedbacks...
          </p>
        </div>
      </section>
    </div>
  );
}

function DashboardCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-100">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-indigo-600 mt-1">{value}</p>
    </div>
  );
}
