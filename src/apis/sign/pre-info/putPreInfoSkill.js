import { PUT } from "@/apis/api";

export const putPreInfoSkill = async ({ params }) => {
  const body = null;
  const { data } = await PUT("/api/users/update-skill", params, body);
  return data;
};
