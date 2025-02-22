import { PUT } from "@/apis/api";

export const putPreInfoNickname = async ({ params }) => {
  const body = null;
  const { data } = await PUT("/api/users/update-nickname", params, body);
  return data;
};
