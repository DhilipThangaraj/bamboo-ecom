import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/not-found-page";
import Layout from "./layout";
import ThemeContext from "./components/theme/theme-provider";

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
  return (
    <ThemeContext>
      <RouterProvider router={router} />
    </ThemeContext>
  );
}

export default App;
