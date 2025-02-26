import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./Container/Login/Login";
import Layout from "./Container/Layout/Layout";
import Home from "./Container/Home/Home";
import Register from "./Container/Register/Register";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Product from "./Container/Pages/Product/Product";
// import Users from './Container/Pages/Users/Userrs';
import Userrs from "./Container/Pages/Users/Userrs";
import Contact from "./Container/Pages/Contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/product/:id", // Add dynamic route for product details
          element: <ProductDetails />,
        },
        {
          path: "/products", // Ensure Products page is properly defined
          element: <Product />,
        },
        {
          path: "/users",
          element: <Userrs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
