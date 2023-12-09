import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './componants/Error404/Error.jsx';
import Home from './componants/Home/Home.jsx'
import SingleBrand from './componants/SingleBrand/SingleBrand.jsx';
import AddProduct from './componants/AddProduct/AddProduct.jsx';
import AuthProvide from './Providers/AuthProvide.jsx';
import Login from './componants/Login/Login.jsx';
import Registration from './componants/Registration/Registration.jsx';
import SingleProduct from './componants/SingleProduct/SingleProduct.jsx';
import Cart from './componants/Cart/Cart.jsx';
import PrivateRoutes from './componants/PrivateRoutes/PrivateRoutes.jsx';
import UpdateProd from './componants/UpdateProd/UpdateProd.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:brand",
        element: <SingleBrand></SingleBrand>,
        loader: ({ params }) => fetch(`https://tastify-server.vercel.app/${params.brand}`)
      },
      {
        path: "/add-product",
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes><UpdateProd></UpdateProd></PrivateRoutes>,
        loader: ({params}) => fetch(`https://tastify-server.vercel.app/update/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/product/:id",
        element: <PrivateRoutes><SingleProduct></SingleProduct></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://tastify-server.vercel.app/product/${params.id}`)
      },
      {
        path: "/cart",
        element: <PrivateRoutes><Cart></Cart></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvide>
      <RouterProvider router={router} />
    </AuthProvide>
  </React.StrictMode>,
)
