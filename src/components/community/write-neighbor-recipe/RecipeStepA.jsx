import { useState } from "react";
import * as A from "./RecipeStep.style";
// import { api } from "@/apis/api";
import axios from "axios";

const api = axios.create({
  baseURL: "http://13.211.69.139:8080",
});

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
      <label>
        {image ? <img src={image} alt="uploaded preview" /> : <p>이미지 추가</p>}
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </label>
      <button onClick={onSubmit}>제출</button>
    </>
  );
}
