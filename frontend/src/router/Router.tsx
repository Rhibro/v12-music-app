import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import ArtistId from "@/pages/ArtistId";
import UserData from "@/pages/UserData";
import Reset from "@/pages/Reset";

const router = createBrowserRouter([
  {
    // Huvudlayout som omsluter alla routes
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/UserData",
        element: <UserData />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/artist/:id",
        element: <ArtistId />,
      },
      {
        path: "/reset",
        element: <Reset />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
