import { POST } from "@/apis/api";

export const postNeightbor = async (body) => {
  const params = null;
  const isIdRequired=false;
  const { data } = await POST("/api/neighbor-experience/posts", params, body,isIdRequired);
  return data;
};
