import { GET } from "@/apis/api";

export const getRecipeAll = async () => {
  const { data } = await GET("/api/recipe-share/all", null, false);
  return data;
};

export const getRecipeRecommend = async () => {
  const { data } = await GET(`/api/recipe-share/recommend/user/${localStorage.getItem('userId')}`, null, false);
  return data;
};

