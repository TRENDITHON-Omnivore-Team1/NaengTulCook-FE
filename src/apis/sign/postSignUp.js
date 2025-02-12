import { POST } from "@/apis/api";

export const postSignUp = async ({ body }) => {
  const params = null;
  const { data } = await POST("/api/users/signup", params, body);
  return data;
};
