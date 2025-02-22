import { PUT } from "@/apis/api";

export const putPreInfoIngredient = async ({ body }) => {
  const params = null;
  const { data } = await PUT("/api/users/update-ingredient", params, body);
  return data;
};
