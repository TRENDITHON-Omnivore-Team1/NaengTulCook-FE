import { createBrowserRouter, Outlet } from "react-router-dom";
import RootLayout from "@/layouts/root-layout";
import SplashPage from "@/pages/SplashPage";
import MyPage from "@/pages/MyPage";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";
import RefrigeratorPage from "@/pages/RefrigeratorPage";
import RecipePage from "@/pages/RecipePage";
import CommunityPage from "@/pages/CommunityPage";
import AddIngredients from "@/pages/AddIngredients";
import RecipeCookingPage from "@/pages/RecipeCookingPage";
import NeighborRecipe from "./components/community/NeighborRecipe";
import NeighborExperience from "./components/community/NeighborExperience";
import QandA from "./components/community/QandA";
import CommunityWritePage from "./pages/CommunityWritePage";
import WriteRecipePage from "./pages/WriteRecipePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

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
        path: "refrigerator", // 냉장고 페이지
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
        path: "recipe", // 레시피 페이지
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <RecipePage />,
          },
          {
            path: "cooking",
            element: <RecipeCookingPage />,
          },
        ],
      },
      {
        path: "community", //이웃의 장 페이지
        element: <CommunityPage />,
        children: [
          { index: true, element: <NeighborRecipe /> },
          { path: "experience", element: <NeighborExperience /> },
          { path: "q&a", element: <QandA /> },
          { path: "write", element: <CommunityWritePage /> },

          { path: "recipe/:id", element: <RecipeDetailPage /> },
          { path: "write-recipe", element: <WriteRecipePage /> },
        ],
      },
      {
        path: "my-page", //내 정보 페이지
        element: <MyPage />,
      },
    ],
  },
]);
