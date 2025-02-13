import { POST } from "@/apis/api";

export const postIngredient = async (body) => {
  console.log(body)
  const params = null;
  const { data } = await POST("/api/refrigerator/save", params, body);
  return data;
};
