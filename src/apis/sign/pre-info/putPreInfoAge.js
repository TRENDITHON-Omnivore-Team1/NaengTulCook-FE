import { PUT } from "@/apis/api";

export const putPreInfoAge = async ({ params }) => {
  const body = null;
  const { data } = await PUT("/api/users/update-age-range", params, body);
  return data;
};
