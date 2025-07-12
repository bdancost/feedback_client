import { useState } from "react";
import { sendFeedback } from "../services/feedbackService";
import { useNavigate } from "react-router-dom";

export function useFeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // ✅

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setRating(5);
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!name || !email || !message) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);
    try {
      await sendFeedback({ name, email, message, rating });
      setSuccess(true);

      // ✅ Redireciona após breve delay
      setTimeout(() => {
        navigate("/meus-feedbacks");
      }, 1500);

      resetForm();
    } catch (err) {
      console.error("Erro ao enviar feedback:", err);
      setError("Erro ao enviar o feedback.");
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    rating,
    setRating,
    error,
    success,
    loading,
    handleSubmit,
    resetForm,
  };
}
