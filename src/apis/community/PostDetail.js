import { GET,POST } from "@/apis/api";

export const getPostDetail = async(type,id) => {
  // const params = {postId:id};
  const params=null;
  const isIdRequired=true;
  
  const endpoint = type === 'experience' ? 'neighbor-experience' : 'qna';

  const { data } = await GET(`/api/${endpoint}/posts/${id}`, params, isIdRequired);
  return data;
}

export const postComment = async (type,id,comment) => {
  
  const params=null;
  const isIdRequired=true;
  const body = comment;
 
  const endpoint = type === 'experience' ? 'neighbor-experience' : 'qna';

  const { data } = await POST(`/api/${endpoint}/posts/${id}/comments?userId=5`, params, body,isIdRequired);
  return data;
};
