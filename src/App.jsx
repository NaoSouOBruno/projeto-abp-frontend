import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { login } from "./components/login.jsx";
import { index } from "./components/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: login()
  },
  {
    path: "/index",
    element: index()
  }
]);


export default function App() {
  return <RouterProvider router={router} />;
}

