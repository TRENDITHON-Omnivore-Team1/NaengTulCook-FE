import { POST,GET } from "@/apis/api";

export const postNeightbor = async (body) => {
  const params = null;
  const isIdRequired=false;
  const { data } = await POST("/api/neighbor-experience/posts", params, body,isIdRequired);
  return data;
};

export const getNeighbor = async({type,select}) => {
  const params = null;
  const isIdRequired=true;
  
  const endpoint = type === "experience" ? "neighbor-experience" : "q&a";
  const sort = select === "최신순" ? "latest" : "popular";

  const { data } = await GET(`/api/${endpoint}/posts/posts/${sort}`, params, isIdRequired);
  return data;
}