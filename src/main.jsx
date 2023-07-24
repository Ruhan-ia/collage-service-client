import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Component/Home/Home.jsx';
import Collages from './Component/Collages/Collages.jsx';
import Admission from './Component/Admission/Admission.jsx';
import MyCollage from './Component/MyCollage/MyCollage.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoutes from './route/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/collages',
        element:<Collages></Collages>
      },
      {
        path:'/admission',
        element:<Admission></Admission>
      },
      {
        path:'/myCollage',
        element:<PrivateRoutes><MyCollage></MyCollage></PrivateRoutes>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>

    </AuthProvider>
  </React.StrictMode>,
)
