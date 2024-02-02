import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import NotFound from "./components/pages/not-found";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <NotFound /> },
    { path: "/about", element: <About /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
