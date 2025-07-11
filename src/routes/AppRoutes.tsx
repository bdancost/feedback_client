import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import CreateFeedback from "../pages/CreateFeedback";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import MyFeedbacks from "../pages/MyFeedbacks";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
        path: "feedback/create",
        element: <CreateFeedback />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "meus-feedbacks",
        element: <MyFeedbacks />,
      },
      // outras rotas protegidas aqui
    ],
  },
]);
