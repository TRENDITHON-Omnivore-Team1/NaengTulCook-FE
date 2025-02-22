import { PUT } from "@/apis/api";

export const putPreInfoFavorite = async ({ body }) => {
  const params = null;
  const { data } = await PUT("/api/users/update-favorite", params, body);
  return data;
};
