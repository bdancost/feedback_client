import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-indigo-600 text-white shadow-md py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">FeedbackHub</h1>
          <nav>{/* Links futuros aqui */}</nav>
        </div>
      </header>

      {/* Conteúdo dinâmico */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Rodapé opcional */}
      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} FeedbackHub. Todos os direitos
        reservados.
      </footer>
    </div>
  );
}
