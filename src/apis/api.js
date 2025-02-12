import axios from "axios";

export const api = axios.create({
  baseURL: "http://13.211.69.139:8080",
});

const request = async ({ url, method, body, params }) => {
  try {
    const userId = localStorage.getItem("userId");

    const config = {
      method,
      url,
      params: { ...params, userId },
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
export const GET = (url, params) => request({ url, method: "get", params });
export const POST = (url, params, body) => request({ url, method: "post", params, body });
export const PATCH = (url, params, body) => request({ url, method: "patch", params, body });
export const PUT = (url, params, body) => request({ url, method: "put", params, body });
export const DELETE = (url, params) => request({ url, method: "delete", params });
