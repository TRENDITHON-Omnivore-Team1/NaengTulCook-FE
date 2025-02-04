import { createBrowserRouter, Outlet } from "react-router-dom";
import RootLayout from "@/layouts/root-layout";
import SplashPage from "@/pages/SplashPage";
import MyPage from "@/pages/MyPage";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";
import RefrigeratorPage from "@/pages/RefrigeratorPage";
import RecipePage from "@/pages/RecipePage";
import CommunityPage from "@/pages/CommunityPage";
import RecipeDetailPage from "@/pages/RecipeDetailPage";
import AddIngredients from "@/pages/AddIngredients";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "refrigerator",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <RefrigeratorPage />,
          },
          {
            path: "add-ingredient",
            element: <AddIngredients />,
          },
        ],
      },
      {
        path: "recipe",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <RecipePage />,
          },
          {
            path: "detail",
            element: <RecipeDetailPage />,
          },
        ],
      },

      {
        path: "community",
        element: <CommunityPage />,
      },
      {
        path: "my-page",
        element: <MyPage />,
      },
    ],
  },
]);
