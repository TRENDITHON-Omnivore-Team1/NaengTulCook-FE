import { DELETE } from "@/apis/api";

export const deleteIngredient = async (item) => {
  const params = {ingredientName:item}
  const { data } = await DELETE("/api/refrigerator/remove", params);
  return data;
};

