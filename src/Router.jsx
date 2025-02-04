import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/root-layout";
import SplashPage from "@/pages/SplashPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <SplashPage />,
      },
      {
        path: "list",
        element: <RefrigeratorPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "sing-up",
    element: <SignUpPage />,
  },
]);
