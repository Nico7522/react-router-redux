import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { route } from "./routes/route";
import { Provider } from 'react-redux'
import store from './store/store.js'

const router = createBrowserRouter(route);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >

    <RouterProvider router={router} />

    </Provider>

  </React.StrictMode>
);
