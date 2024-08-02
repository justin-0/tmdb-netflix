import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";
import Register from "./routes/Register.tsx";
import Login from "./routes/Login.tsx";
import contentLoader from "./lib/loaders/content-loader.ts";
import WatchRoute from "./routes/Watch.tsx";
import DetailsRoute from "./routes/Details.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
        loader: contentLoader,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/history",
        element: <h1>History</h1>,
      },
      {
        path: "/watch/:id",
        element: <WatchRoute />,
      },
      {
        path: "/details/:id",
        element: <DetailsRoute />,
      },
      {
        path: "/search",
        element: <h1>Search page</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
