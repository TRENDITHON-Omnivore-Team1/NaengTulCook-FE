import { POST } from "@/apis/api";

export const postLogin = async ({ body }) => {
  const params = null;
  const { data } = await POST("/api/users/login", params, body);
  return data;
};
