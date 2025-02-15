import { GET } from "@/apis/api";

export const getRecipes = async () => {
  const body = null;
  const params = null;
  const { data } = await GET("/api/recipes/recommend", params, body);
  return data;
};
