import axios from "axios";

export const api = axios.create({
  baseURL: "http://13.211.69.139:8080",
});

const request = async ({ url, method, body, params, isIdRequired = true }) => {
  try {
    const userId = localStorage.getItem("userId");

    const config = {
      method,
      url,
      params: isIdRequired ? { ...params, userId } : { ...params },
      data: body,
    };

    const response = await api.request(config);
    return response;
  } catch (error) {
    console.error("api 요청 에러: ", error);
    throw error;
  }
};

// HTTP 메서드 별 함수
export const GET = (url, params, isIdRequired) =>
  request({ url, method: "get", params, isIdRequired });
export const POST = (url, params, body, isIdRequired) =>
  request({ url, method: "post", params, body, isIdRequired });
export const PATCH = (url, params, body, isIdRequired) =>
  request({ url, method: "patch", params, body, isIdRequired });
export const PUT = (url, params, body, isIdRequired) =>
  request({ url, method: "put", params, body, isIdRequired });
export const DELETE = (url, params, isIdRequired) =>
  request({ url, method: "delete", params, isIdRequired });
