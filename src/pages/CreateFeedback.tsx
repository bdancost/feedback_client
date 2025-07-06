import { useState } from "react";

export default function CreateFeedback() {
  // Estados para armazenar os dados do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5); // valor padrão de 1 a 5

  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // impede o recarregamento da página
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("http://localhost:3333/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, rating }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar feedback.");
      }

      setSuccess("Feedback enviado com sucesso!");
      // limpa os campos
      setName("");
      setEmail("");
      setMessage("");
      setRating(5);
    } catch (err) {
      setError("Ocorreu um erro ao enviar o feedback.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Enviar Feedback</h2>

      {success && <p className="text-green-600 mb-4">{success}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Nome</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Mensagem</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Nota (1 a 5)</label>
          <input
            type="number"
            min={1}
            max={5}
            className="w-full border border-gray-300 rounded p-2"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Enviar Feedback
        </button>
      </form>
    </div>
  );
}
