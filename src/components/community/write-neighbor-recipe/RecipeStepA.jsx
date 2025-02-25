import { useState } from "react";
import * as A from "./RecipeStep.style";
import { api } from "@/apis/api";

const categoryOptions = [
  { id: 0, value: "한식" },
  { id: 1, value: "중식" },
  { id: 2, value: "양식" },
  { id: 3, value: "일식" },
  { id: 4, value: "디저트" },
  { id: 5, value: "간편식" },
  { id: 6, value: "채식/비건" },
  { id: 7, value: "다이어트" },
  { id: 8, value: "특별한 날" },
  { id: 9, value: "세계(제철)요리" },
];
const levelOptions = [
  { id: 0, value: "초급" },
  { id: 1, value: "중급" },
  { id: 2, value: "고급" },
];

export default function RecipeStepA() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const userId = localStorage.getItem("userId");
  // 임시 더미 데이터 // 삭제 예정
  const data = {
    userId: userId,
    title: "김치볶음밥",
    content: "김치와 밥을 볶아 만든 요리",
    category: "한식",
    level: "초급",
    time: "10분",
    ingredient: ["김치 200g", "밥 2공기"],
    seasoning: ["간장 20g", "고추장 10g"],
    tool: ["프라이팬", "주걱"],
    recipe: ["김치를 볶는다.", "햄을 추가한다.", "완성~~"],
  };
  // file: file,

  // 이미지 등록
  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(URL.createObjectURL(selectedFile));
      setFile(selectedFile);
    }
  };

  // api 요청
  const postApi = async () => {
    const formData = new FormData();

    // 데이터 추가
    Object.entries(data).forEach(([key, value]) => {
      // // 배열 데이터를 JSON 문자열로 변환하여 하나의 값으로 보낸다.
      const json = JSON.stringify(value);
      const blob = new Blob([json], { type: "application/json" }); // MIME 타입을 application/json으로 지정
      formData.append(key, blob);
      // Blob 대신 JSON 문자열
      // formData.append(key, JSON.stringify(value));
      // // 삭제하기 --------------------------------
      // console.log("key: ", key, "value", value);
      // console.log("blob: ", blob); // 삭제하기
      // console.log("formData: ", [...formData.entries()]); // 삭제하기
      // // blob 확인용 // 삭제하기 --------------------------------
      // const reader = new FileReader();
      // reader.onload = (event) => {
      //   console.log("blob(FileReader): ", event.target.result); // JSON 문자열 출력
      // };
      // reader.readAsText(blob);
      // // 삭제하기 --------------------------------
    });

    // 이미지 파일 추가
    if (file) {
      formData.append("file", file);
    }

    // // formData 확인용 // 삭제하기 --------------------------------
    // for (let pair of formData.entries()) {
    //   console.log("formData 확인용: ", pair[0], pair[1]);
    // }

    // api 요청
    try {
      const response = await api.post("/api/recipe-share", formData);

      return response;
    } catch (error) {
      console.error("api 요청 에러: ", error);
      throw error;
    }
  };

  const onSubmit = async () => {
    await postApi();
    alert("요청 성공");
  };

  return (
    <>
      <h2>레시피 등록</h2>

      <p>레시피 이름을 알려주세요</p>
      <input type="text" maxLength="20" />

      <p>레시피에 대한 간단한 설명을 입력해주세요</p>
      <input type="text" />

      <p>레시피 카테고리 선택</p>
      {categoryOptions.map((option) => (
        <label key={option.id}>
          <input type="radio" />
          {option.value}
        </label>
      ))}

      <p>레시피 난이도</p>
      {levelOptions.map((option) => (
        <label key={option.id}>
          <input type="radio" />
          {option.value}
        </label>
      ))}

      <p>조리시간</p>
      <input type="number" min="0" max="23" step="1" />
      <input type="number" min="0" max="59" step="1" />

      <h2>사진을 첨부해주세요</h2>
      <label>
        {image ? <img src={image} alt="uploaded preview" /> : <p>이미지 추가</p>}
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </label>

      <button type="button" onClick={onSubmit}>
        제출
      </button>
    </>
  );
}
