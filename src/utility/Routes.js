import { createBrowserRouter } from "react-router-dom";
import AddServices from "../components/AddServices/AddServices";
import AllServices from "../components/AllServices/AllServices";
import DetailsService from "../components/DetailsService/DetailsService";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReviews from "../components/MyReviews/MyReviews";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import SignUp from "../components/Register/SignUp";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <AllServices />
          </PrivateRoute>
        ),
        loader: async () => fetch("http://localhost:5000/all-services"),
      },
      {
        path: "/details-service/:id",
        element: <DetailsService />,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/details-services/${params.id}`),
      },
      { path: "/my-review", element: <MyReviews />,loader: async () => fetch("http://localhost:5000/services")},
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      { path: "/sign-in", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);

export default router;
