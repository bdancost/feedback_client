import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateFeedback from "./pages/CreateFeedback";
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateFeedback />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Coloque aqui outras rotas públicas se quiser */}
      </Routes>
    </BrowserRouter>
  );
}
