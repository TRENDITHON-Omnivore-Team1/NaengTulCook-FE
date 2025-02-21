import { GET } from "@/apis/api";

export const getPostDetail = async(type,id) => {
  const params = {postId:id}
  const isIdRequired=true;
  
  const endpoint = type === 'experience' ? 'neighbor-experience' : 'qna';

  const { data } = await GET(`/api/${endpoint}/posts/${id}`, params, isIdRequired);
  return data;
}