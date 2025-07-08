import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import CreateFeedback from "../pages/CreateFeedback";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <CreateFeedback />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      // outras rotas protegidas aqui
    ],
  },
]);
