import { createBrowserRouter } from "react-router-dom";
import AllServices from "../components/AllServices/AllServices";
import DetailsService from "../components/DetailsService/DetailsService";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home />,loader:async()=>fetch('http://localhost:5000/services')},
      {path:'/services', element:<AllServices/>,loader:async()=>fetch('http://localhost:5000/all-services')},
      {path:'/details-service/:id', element:<DetailsService/>,loader:async({params})=>fetch(`http://localhost:5000/details-services/${params.id}`)},
      { path: "/sign-in", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;
