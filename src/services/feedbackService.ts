export async function sendFeedback(data: {
  name: string;
  email: string;
  message: string;
  rating: number;
}) {
  console.log("Enviando feedback:", data); // <-- uso da variável
  return new Promise((resolve) => setTimeout(resolve, 1000));
}
