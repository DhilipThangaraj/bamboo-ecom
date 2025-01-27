import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/not-found-page";
import Layout from "./layout";
import ThemeContext from "./components/theme/theme-provider";
import ProductListingPage from "./pages/product-listing-page";
import ProductDetailsPage from "./pages/product-details-page";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "@/react-query/query-client-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <ProductListingPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeContext>
      <ReactQueryProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ReactQueryProvider>
    </ThemeContext>
  );
}

export default App;
