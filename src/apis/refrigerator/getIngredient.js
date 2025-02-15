import { GET } from "@/apis/api";

export const getIngredient = async () => {
  const {data}  = await GET("/api/refrigerator/ingredients");
  return data;
};

export const getCondiment = async () => {
  const {data} = await GET("/api/refrigerator/condiments");
  return data;
};

