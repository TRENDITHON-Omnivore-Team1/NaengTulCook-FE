import { POST,GET } from "@/apis/api";

export const postNeightbor = async (body,type) => {
  const params = null;
  const isIdRequired=false;

  const endpoint = type === "experience" ? "neighbor-experience" : "qna";

  const { data } = await POST(`/api/${endpoint}/posts`, params, body,isIdRequired);
  return data;
};

export const getNeighbor = async({type,select}) => {
  const params = null;
  const isIdRequired=true;
  
  const endpoint = type === "experience" ? "neighbor-experience/posts" : "qna";
  const sort = select === "최신순" ? "latest" : "popular";

  const { data } = await GET(`/api/${endpoint}/posts/${sort}`, params, isIdRequired);
  return data;
}