import { useWatch } from "react-hook-form";
import * as A from "./InfoStep.style";
import checkSvg from "@/assets/splash/icon_checked_img.svg";
import ingredient1Png from "@/assets/splash/pre-info-step6/img_1.png";
import ingredient2Png from "@/assets/splash/pre-info-step6/img_2.png";
import ingredient3Png from "@/assets/splash/pre-info-step6/img_3.png";
import ingredient4Png from "@/assets/splash/pre-info-step6/img_4.png";
import ingredient5Png from "@/assets/splash/pre-info-step6/img_5.png";
import ingredient6Png from "@/assets/splash/pre-info-step6/img_6.png";
import ingredient7Png from "@/assets/splash/pre-info-step6/img_7.png";
import ingredient8Png from "@/assets/splash/pre-info-step6/img_8.png";
import ingredient9Png from "@/assets/splash/pre-info-step6/img_9.png";

const options = [
  "곡류",
  "채소",
  "과일",
  "달걀",
  "유제품",
  "소스 양념장",
  "육류",
  "해산물",
  "어패류",
];
const imgList = [
  ingredient1Png,
  ingredient2Png,
  ingredient3Png,
  ingredient4Png,
  ingredient5Png,
  ingredient6Png,
  ingredient7Png,
  ingredient8Png,
  ingredient9Png,
];

export default function InfoStepD({ register, control }) {
  const selectedValue = useWatch({ control, name: "ingredient" });

  return (
    <A.ListWrapper>
      {options.map((option, i) => (
        <A.InputItemContainer key={i}>
          {/* input(안보임) */}
          <A.CheckBoxInput
            type="checkbox"
            value={option}
            {...register("ingredient", {
              validate: (value, allValues) => {
                return (
                  (allValues["ingredient"] && allValues["ingredient"].length > 0) ||
                  "최소 하나 이상 선택해야 합니다."
                );
              },
            })}
          />

          {/* 사진 */}
          <A.Container88>
            <A.InputItemImg src={imgList[i]} />
            {selectedValue?.includes(option) && (
              <A.CheckOverlay>
                <A.CheckIcon src={checkSvg} alt="선택됨" />
              </A.CheckOverlay>
            )}
          </A.Container88>
          {/* 재료 이름 */}
          <span>{option}</span>
        </A.InputItemContainer>
      ))}
    </A.ListWrapper>
  );
}
