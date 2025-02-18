import { GET } from "@/apis/api";

export const getCookCreate = async (recipeName) => {
  const params = { recipeName };
  const body = null;
  const { data } = await GET("/api/cook/create", params, body);
  return data;
};
