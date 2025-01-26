import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/not-found-page";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <div>product listing</div>,
      },
      {
        path: "product-details/:id",
        element: <div className="mt-32">{"Product Details Page"}</div>,
      },
      {
        path: "/cart",
        element: (
          <div className="mt-32">
            <div>{"Add to cart page"}</div>
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
