import App from "../App";
import AboutPage from "../pages/about/about-page";
import NotFound from "../pages/errors/not-found-page";
import HomePage from "../pages/home/home-page";
import ProductCreatePage from "../pages/products/pages/product-create.page";
import ProductDetailPage from "../pages/products/pages/product-details";
import ProductList from "../pages/products/pages/product-list";
import ProductPage from "../pages/products/product.page";
import WeatherPage from "../pages/weather/weather.page";

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
        path: 'products',
        element: <ProductPage />,
        children: [
          {
            index: true,
            element: <ProductList />
          },
          {
            path: ':productId',
            element: <ProductDetailPage />
          },
          {
            path: 'create',
            element: <ProductCreatePage />
          }
        ]
      },
      {
        path: "weather",
        element: <WeatherPage />
      }
    ],
  },
];
