import { createBrowserRouter } from "react-router-dom";
import AddServices from "../components/AddServices/AddServices";
import AllServices from "../components/AllServices/AllServices";
import Blog from "../components/Blogs/Blog";
import DetailsService from "../components/DetailsService/DetailsService";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReviews from "../components/MyReviews/MyReviews";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import SignUp from "../components/Register/SignUp";
import UpdateReview from "../components/UpdateReview/UpdateReview";
import ErrorPage from "./ErrorPage";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
      {path: "/", element: <Home />},
      { path: "/services", element: <AllServices /> },
      {
        path: "/details-service/:id",
        element: <DetailsService />,
        loader: async ({ params }) =>
          fetch(
            `https://service-data.vercel.app/details-services/${params.id}`
          ),
      },
      {
        path: "/my-review",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-review/:id",
        element: (
          <PrivateRoute>
            <UpdateReview />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(`https://service-data.vercel.app/update-reviews/${params.id}`),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      { path: "/blog", element: <Blog /> },
      { path: "/sign-in", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);

export default router;
