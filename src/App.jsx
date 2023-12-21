import "./App.css";
// importing the pages
import Layout from "./components/Layout/Layout";
import HomePage from "./views/HomePage";
import Services from "./views/Services";
import Profile from "./views/Profile";
import TransactionPage from "./views/TransactionPage";
// Importing react router
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// declaring route parameters
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/transactions" element={<TransactionPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
