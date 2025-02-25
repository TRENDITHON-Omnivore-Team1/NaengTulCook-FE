import { POST } from "@/apis/api";

export const PostRecipeShare = async (body) => {
  const params = null;
  const { data } = await POST("/api/recipe-share/scrap", params, body);
  return data;
};
