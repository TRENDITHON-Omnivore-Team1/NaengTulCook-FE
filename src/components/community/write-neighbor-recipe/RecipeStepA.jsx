import { useState } from "react";
import * as A from "./RecipeStep.style";
import { useWatch } from "react-hook-form";
import dropdownSvg from "@/assets/neighbor-recipe-write/icon_dropdown.svg";
import imageButtonSvg from "@/assets/neighbor-recipe-write/button_image.svg";

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

export default function RecipeStepA({ register, control, title, content, category, level }) {
  const [isCategoryOn, setIsCategoryOn] = useState(false);
  const file = useWatch({ control, name: "file" });

  return (
    <>
      <A.InputSetTitle>레시피 등록</A.InputSetTitle>

      <A.InputTitle>레시피 이름을 알려주세요</A.InputTitle>
      <A.TextInput
        type="text"
        maxLength="20"
        $isSelected={title}
        {...register("title", {
          required: "레시피 이름을 작성해주세요.",
        })}
      />

      <A.InputTitle>레시피에 대한 간단한 설명을 입력해주세요</A.InputTitle>
      <A.TextInput
        type="text"
        $isSelected={content}
        {...register("content", {
          required: "레시피 설명을 작성해주세요.",
        })}
      />

      <A.InputTitle>레시피 카테고리 선택</A.InputTitle>
      <A.InputDropdownContainer $isSelected={category}>
        <A.InputDropdownButton onClick={() => setIsCategoryOn(true)} $isSelected={category}>
          <p>{category ? category : "선택하기"}</p>
          <img src={dropdownSvg} />
        </A.InputDropdownButton>

        {isCategoryOn && (
          <A.InputDropdownList>
            {categoryOptions.map((option) => (
              <A.InputDropdownLabel key={option.id}>
                <A.NoneInput
                  type="radio"
                  value={option.value}
                  {...register("category", {
                    required: "카테고리를 선택해주세요.",
                  })}
                  onClick={() => setIsCategoryOn(false)}
                />
                {option.value}
              </A.InputDropdownLabel>
            ))}
          </A.InputDropdownList>
        )}
      </A.InputDropdownContainer>

      <A.InputTitle>레시피 난이도</A.InputTitle>
      <A.RadioList>
        {levelOptions.map((option) => (
          <A.RadioLabel key={option.id} $isSelected={level == option.value}>
            <A.NoneInput
              type="radio"
              value={option.value}
              {...register("level", {
                required: "난이도를 선택해주세요.",
              })}
            />
            {option.value}
          </A.RadioLabel>
        ))}
      </A.RadioList>

      {/* 조리시간 0시간 0분 안되도록 조건 추가, 데이터 전송시 0인 부분은 빼기 */}
      <A.InputTitle>조리시간</A.InputTitle>
      <A.NumInputList>
        <A.NumInput
          type="number"
          min="0"
          max="23"
          step="1"
          {...register("hour", {
            required: "시간을 입력해주세요.",
          })}
        />
        <A.TextSpan>시간</A.TextSpan>
        <A.NumInput
          type="number"
          min="0"
          max="59"
          step="5"
          {...register("minute", {
            required: "분을 입력해주세요.",
          })}
        />
        <A.TextSpan>분</A.TextSpan>
      </A.NumInputList>

      <br />
      <A.InputSetTitle>사진을 첨부해주세요</A.InputSetTitle>
      <A.SubInfoText>섬네일에 사용될 사진을 한 장 선택해 주세요</A.SubInfoText>
      <A.ImageLabel>
        <A.NoneInput
          type="file"
          accept="image/*"
          {...register("file", {
            required: "사진을 올려주세요.",
          })}
        />
        {file && file.length > 0 ? (
          <A.ImagePreview src={URL.createObjectURL(file[0])} alt="uploaded preview" />
        ) : (
          <img src={imageButtonSvg} />
        )}
      </A.ImageLabel>
    </>
  );
}
