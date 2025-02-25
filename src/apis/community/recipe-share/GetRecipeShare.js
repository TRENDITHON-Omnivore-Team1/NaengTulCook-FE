import { GET } from "@/apis/api";

export const GetRecipeShare = async ({ postId }) => {
  const params = postId;
  const { data } = await GET(`/api/recipe-share/${postId}/details`, params, false);
  return data;
};
