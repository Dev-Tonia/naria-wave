import "./App.css";
import HomePage from "./views/HomePage";
// Importing react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// declaring route parameters
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
