import App from "../App";
import AboutPage from "../pages/about/about-page";
import NotFound from "../pages/errors/not-found-page";
import HomePage from "../pages/home/home-page";
import ProductPage from "../pages/products/product.page";

export const route = [
  {
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "products",
        element: <ProductPage />
      },
    ],
  },
];
