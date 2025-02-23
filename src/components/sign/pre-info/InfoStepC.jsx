import { useWatch } from "react-hook-form";
import * as A from "./InfoStep.style";
import checkSvg from "@/assets/splash/icon_checked_img.svg";
import food1Png from "@/assets/splash/pre-info-step5/img_1.png";
import food2Png from "@/assets/splash/pre-info-step5/img_2.png";
import food3Png from "@/assets/splash/pre-info-step5/img_3.png";
import food4Png from "@/assets/splash/pre-info-step5/img_4.png";
import food5Png from "@/assets/splash/pre-info-step5/img_5.png";
import food6Png from "@/assets/splash/pre-info-step5/img_6.png";
import food7Png from "@/assets/splash/pre-info-step5/img_7.png";
import food8Png from "@/assets/splash/pre-info-step5/img_8.png";
import food9Png from "@/assets/splash/pre-info-step5/img_9.png";
import food10Png from "@/assets/splash/pre-info-step5/img_10.png";
import food11Png from "@/assets/splash/pre-info-step5/img_11.png";
import food12Png from "@/assets/splash/pre-info-step5/img_12.png";
import { useEffect, useRef } from "react";

// 162px(3) 128px(4) 108(1) 88px(3) 68(1)
const options = [
  { value: "마라탕", img: food1Png, size: 162, top: 75, left: 139 },
  { value: "스테이크", img: food2Png, size: 162, top: 325, left: -67 },
  { value: "떡볶이", img: food3Png, size: 162, top: 247, left: 361 },
  { value: "초밥", img: food4Png, size: 128, top: 238, left: 73 },
  { value: "크림파스타", img: food5Png, size: 128, top: 318, left: 197 },
  { value: "김치찌개", img: food6Png, size: 128, top: 32, left: 319 },
  { value: "샐러드", img: food7Png, size: 128, top: 177, left: -103 },
  { value: "잡채", img: food8Png, size: 108, top: 42, left: 15 },
  { value: "짜장면", img: food9Png, size: 88, top: 217, left: 277 },
  { value: "된장국", img: food10Png, size: 88, top: 423, left: 111 },
  { value: "핫도그", img: food11Png, size: 88, top: 424, left: 318 },
  { value: "와플", img: food12Png, size: 68, top: 170, left: 38 },
];

export default function InfoStepC({ register, control }) {
  const scrollRef = useRef();
  const selectedValue = useWatch({ control, name: "favorite" });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 123;
    }
  }, []);

  return (
    <A.ItemsWrapper ref={scrollRef}>
      {options.map((option, i) => (
        <A.ContainerVarious key={i} $size={option.size} $top={option.top} $left={option.left}>
          {/* input(안보임) */}
          <A.CheckBoxInput
            type="checkbox"
            value={option.value}
            {...register("favorite", {
              validate: (value, allValues) => {
                return (
                  (allValues["favorite"] && allValues["favorite"].length > 0) ||
                  "최소 하나 이상 선택해야 합니다."
                );
              },
            })}
          />

          {/* 사진 */}
          <A.InputItemImg src={option.img} />
          {selectedValue?.includes(option.value) && (
            <A.CheckOverlay>
              <A.CheckIcon src={checkSvg} alt="선택됨" />
            </A.CheckOverlay>
          )}
          {selectedValue?.includes(option.value) || <A.InputName>{option.value}</A.InputName>}
        </A.ContainerVarious>
      ))}
    </A.ItemsWrapper>
  );
}
