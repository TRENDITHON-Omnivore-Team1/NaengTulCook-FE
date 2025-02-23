import { GET } from "@/apis/api";

export const getRecipes = async () => {
  const params = null;
  const { data } = await GET("/api/recipes/recommend", params);
  return data;
};
