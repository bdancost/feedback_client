import { useState } from "react";
import InputField from "../components/InputField";
import TextareaField from "../components/TextareaField";
import SelectField from "../components/SelectField";

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

    setTimeout(() => {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setRating(5);
    }, 500);
  };

  const ratingOptions = [
    { value: 1, label: "1 estrela" },
    { value: 2, label: "2 estrelas" },
    { value: 3, label: "3 estrelas" },
    { value: 4, label: "4 estrelas" },
    { value: 5, label: "5 estrelas" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-heading text-primary text-gray-800 mb-8 text-center">
          Deixe seu Feedback
        </h2>

        {error && (
          <p className="text-red-500 bg-red-100 p-2 rounded text-sm text-center mb-4">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-600 bg-green-100 p-2 rounded text-sm text-center mb-4">
            Feedback enviado com sucesso!
          </p>
        )}

        {/* 🔥 CORPO DO FORMULÁRIO */}
        <div
          className="flex flex-col space-y-6 border border-gray-300 rounded-xl p-4
             focus:outline-none focus:ring-4 focus:ring-primary/50
             transition duration-300 shadow-sm"
        >
          <InputField
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome completo"
          />

          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@email.com"
          />

          <TextareaField
            label="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escreva seu feedback aqui..."
          />

          <SelectField
            label="Avaliação"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            options={ratingOptions}
          />
        </div>

        {/* 🔘 BOTÕES */}
        <div className="flex justify-between mt-8">
          <button
            type="reset"
            className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition font-semibold"
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
            className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-indigo-700 transition shadow-md"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
