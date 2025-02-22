import { PUT } from "@/apis/api";

export const putPreInfoFamily = async ({ params }) => {
  const body = null;
  const { data } = await PUT("/api/users/update-family", params, body);
  return data;
};
