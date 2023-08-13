import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Disclosures from "./pages/disclosures/Disclosures";
import Error from "./pages/error/Error";
import Layout from "./pages/layout/Layout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      ErrorBoundary: Error,
      children: [
        {
          index: true,
          Component: Dashboard,
        },
        {
          path: "disclosures",
          Component: Disclosures,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
