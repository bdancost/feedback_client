import { useEffect, useState } from "react";
import { getMyFeedbacks } from "../services/feedbackService";
import type { Feedback } from "../types/Feedback";
import Loader from "../components/Loader";

export default function MyFeedbacks() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const data = await getMyFeedbacks();
        setFeedbacks(data);
      } catch (err) {
        console.error("Erro ao buscar feedbacks", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-tr from-sky-100 via-purple-50 to-pink-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Meus Feedbacks
      </h1>

      {loading ? (
        <Loader />
      ) : feedbacks.length === 0 ? (
        <p className="text-center text-gray-500">
          Você ainda não enviou nenhum feedback.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((fb) => (
            <div
              key={fb.id}
              className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-indigo-700">
                {fb.name}
              </h2>
              <p className="text-sm text-gray-500">{fb.email}</p>
              <p className="mt-3 text-gray-700">{fb.message}</p>
              <p className="mt-2 text-sm text-yellow-600 font-semibold">
                ⭐ {fb.rating}/5
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Enviado em {new Date(fb.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
