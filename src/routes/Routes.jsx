import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Terms from "../Pages/Terms";
import Privacy from "../Pages/Privacy";
import EventDetails from "../Pages/EventDetails";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/terms",
        Component: Terms,
      },
      {
        path: "/privacy",
        Component: Privacy,
      },
      {
        path: "/event-details/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/forgot",
        Component: ForgotPassword,
      },
    ],
  },
]);
