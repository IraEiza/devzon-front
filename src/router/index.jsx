import { createBrowserRouter, redirect } from "react-router-dom";

import Landing from "../landings/Landing";
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products"
import MyPurchases from "../pages/MyPurchases/MyPurchases";

const isAuthenticated = () => !localStorage.getItem('token') ? redirect("/") : null
const isNotAuthenticated = () => localStorage.getItem('token') ? redirect("/") : null

const router = createBrowserRouter([

  {
    path: '/login',
    element: <Login />,
    loader: isNotAuthenticated
  },
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
        loader: isAuthenticated,
      },
      {
        path: '/my-purchases',
        element: <MyPurchases />,
        loader: isAuthenticated,
      }
    ]
  },
  {
    path: '/*',
    element: <h1>Page not found mi niña</h1>,
  },
])

export default router