import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import AboutUs from './Components/AboutUs.jsx';
import ContactUs from './Components/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader:()=>fetch('https://cafeserver.vercel.app/coffee')
  },
  {
    path:"addCoffee",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"contact",
    element: <ContactUs></ContactUs>
  },
  {
    path:"updateCoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params}) => fetch(`https://cafeserver.vercel.app/coffee/${params.id}`)
  },
  {
    path:"about",
    element: <AboutUs></AboutUs>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
