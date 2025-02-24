import { useState } from "react";
import * as A from "./RecipeStep.style";
import { api } from "@/apis/api";

export default function RecipeStepA() {
  const [image, setImage] = useState(null);
  const userId = localStorage.getItem("userId");
  // 임시 더미 데이터 // 삭제 예정
  const data = {
    userId,
    title: "김치볶음밥",
    content: "김치와 밥을 볶아 만든 요리",
    category: "한식",
    level: "초급",
    time: "10분",
    ingredient: ["김치 200g", "밥 2공기"],
    seasoning: ["간장 20g", "고추장 10g"],
    tool: ["프라이팬", "주걱"],
    recipe: ["김치를 볶는다.", "햄을 추가한다.", "완성~~"],
    // file: ,
  };
  // const json = JSON.stringify(data);
  // const blob = new Blob([json], { type: "application/json" }); // MIME 타입을 application/json으로 지정

  // // const formData = new FormData();
  // // formData.append("data", blob);
  // // formData.append("userId", userId);
  // // formData.append("title", "김치볶음밥");
  // // 파일들을 FormData에 첨부 (백엔드에서 "multipart"라는 키로 파일 데이터들을 받음)
  // for (let i = 0; i < files.length; i++) {
  //   formData.append("multipart", files[i]);
  // }

  const postApi = async () => {
    try {
      const response = await api.post({
        url: "/api/recipe-share",
        // formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response;
    } catch (error) {
      console.error("api 요청 에러: ", error);
      throw error;
    }
  };

  // 이미지 등록
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = async () => {
    await postApi();
    alert("요청 성공");
  };

  return (
    <>
      <label>
        {image ? <img src={image} alt="uploaded preview" /> : <p>이미지 추가</p>}
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </label>
      <button onClick={onSubmit}>제출</button>
    </>
  );
}
