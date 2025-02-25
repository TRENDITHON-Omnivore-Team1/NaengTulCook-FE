import { createBrowserRouter, Outlet } from "react-router-dom";
import RootLayout from "@/layouts/root-layout";
import SplashPage from "@/pages/sign/SplashPage";
import MyPage from "@/pages/MyPage";
import SignUpPage from "@/pages/sign/SignUpPage";
import LoginPage from "@/pages/sign/LoginPage";
import RefrigeratorPage from "@/pages/RefrigeratorPage";
import RecipePage from "@/pages/RecipePage";
import CommunityPage from "@/pages/CommunityPage";
import AddIngredients from "@/pages/AddIngredients";
import RecipeCookingPage from "@/pages/RecipeCookingPage";
import NeighborRecipe from "./components/community/NeighborRecipe";
import NeighborExperience from "./components/community/NeighborExperience";
import CommunityPostDetail from "./pages/CommunityPostDetail";
import CommunityWritePage from "./pages/CommunityWritePage";
import WriteRecipePage from "./pages/neighbor-recipe/WriteRecipePage";
import RecipeDetailPage from "./pages/neighbor-recipe/RecipeDetailPage";
import PreInfoPage from "./pages/sign/PreInfoPage";

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
    path: "pre-info",
    element: <PreInfoPage />,
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
          { path: ":type", element: <NeighborExperience /> },
          { path: ":type/write", element: <CommunityWritePage /> },
          { path: ":type/:id", element: <CommunityPostDetail /> },

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
