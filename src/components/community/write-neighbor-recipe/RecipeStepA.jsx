import { useState } from "react";
import * as A from "./RecipeStep.style";

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

export default function RecipeStepA({ register }) {
  const [image, setImage] = useState(null);

  // 이미지 등록
  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <>
      <h2>레시피 등록</h2>

      <p>레시피 이름을 알려주세요</p>
      <input
        type="text"
        maxLength="20"
        {...register("title", {
          required: "레시피 이름을 작성해주세요.",
        })}
      />

      <p>레시피에 대한 간단한 설명을 입력해주세요</p>
      <input
        type="text"
        {...register("content", {
          required: "레시피 설명을 작성해주세요.",
        })}
      />

      <p>레시피 카테고리 선택</p>
      {categoryOptions.map((option) => (
        <label key={option.id}>
          <input
            type="radio"
            value={option.value}
            {...register("category", {
              required: "카테고리를 선택해주세요.",
            })}
          />
          {option.value}
        </label>
      ))}

      <p>레시피 난이도</p>
      {levelOptions.map((option) => (
        <label key={option.id}>
          <input
            type="radio"
            value={option.value}
            {...register("level", {
              required: "난이도를 선택해주세요.",
            })}
          />
          {option.value}
        </label>
      ))}

      {/* 조리시간 0시간 0분 안되도록 조건 추가, 데이터 전송시 0인 부분은 빼기 */}
      <p>조리시간</p>
      <input
        type="number"
        min="0"
        max="23"
        step="1"
        {...register("hour", {
          required: "시간을 입력해주세요.",
        })}
      />
      <input
        type="number"
        min="0"
        max="59"
        step="1"
        {...register("minute", {
          required: "분을 입력해주세요.",
        })}
      />

      <h2>사진을 첨부해주세요</h2>
      <label>
        {image ? <img src={image} alt="uploaded preview" /> : <p>이미지 추가</p>}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          {...register("file", {
            required: "사진을 올려주세요.",
          })}
        />
      </label>
    </>
  );
}
