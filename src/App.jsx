import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "./components/login.jsx";
import { Index } from "./components/index.jsx";
import { Estoque } from "./components/estoque.jsx";
import { Stats } from "./components/stats.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/index",
    element: <Index/>
  },
  {
    path: "/estoque",
    element: <Estoque/>
  },
  {
    path: "/stats",
    element: <Stats/>
  }
]);


export default function App() {
  return <RouterProvider router={router} />;
}

