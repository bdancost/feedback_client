import React, { useState } from "react";

export default function CreateFeedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!name || !email || !message) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    // Simula API e feedback
    setTimeout(() => {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setRating(5);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-xl w-full rounded-3xl shadow-2xl p-10
             ring-1 ring-gray-300 ring-opacity-30
             flex flex-col space-y-6" // <-- aqui, space-y-6 para espaçamento vertical
      >
        {/* Campos */}
        <label className="flex flex-col">
          <span className="font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Nome
          </span>
          <input
            type="text"
            className="border border-gray-300 rounded-xl p-4
                 focus:outline-none focus:ring-4 focus:ring-indigo-400
                 transition duration-300 shadow-sm
                 placeholder:text-gray-400"
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Email
          </span>
          <input
            type="email"
            className="border border-gray-300 rounded-xl p-4
                 focus:outline-none focus:ring-4 focus:ring-indigo-400
                 transition duration-300 shadow-sm
                 placeholder:text-gray-400"
            placeholder="exemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Mensagem
          </span>
          <textarea
            className="border border-gray-300 rounded-xl p-4 resize-y min-h-[120px]
                 focus:outline-none focus:ring-4 focus:ring-indigo-400
                 transition duration-300 shadow-sm
                 placeholder:text-gray-400"
            placeholder="Escreva seu feedback aqui..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Avaliação
          </span>
          <select
            className="border border-gray-300 rounded-xl p-4
                 focus:outline-none focus:ring-4 focus:ring-indigo-400
                 transition duration-300 shadow-sm"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "estrela" : "estrelas"}
              </option>
            ))}
          </select>
        </label>

        {/* Botões */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="reset"
            className="px-6 py-3 rounded-xl border border-gray-300
                 text-gray-700 font-semibold
                 hover:bg-gray-100 transition duration-300"
            onClick={() => {
              setName("");
              setEmail("");
              setMessage("");
              setRating(5);
              setError(null);
              setSuccess(false);
            }}
          >
            Limpar
          </button>

          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold
                 hover:bg-indigo-700 transition duration-300 shadow-lg
                 focus:outline-none focus:ring-4 focus:ring-indigo-400"
          >
            Enviar
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      {success && (
        <p className="text-green-500 mt-4 text-center">
          Feedback enviado com sucesso!
        </p>
      )}
    </div>
  );
}
