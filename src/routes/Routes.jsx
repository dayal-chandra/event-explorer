import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Terms from "../Pages/Terms";
import Privacy from "../Pages/Privacy";
import EventDetails from "../Pages/EventDetails";

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
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/login",
        Component: Login,
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
        Component: EventDetails,
      },
    ],
  },
]);
