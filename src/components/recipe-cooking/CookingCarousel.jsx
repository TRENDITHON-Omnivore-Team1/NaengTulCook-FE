import Row from "@/styles/layouts/Row";
import * as A from "./Cooking.style";
import CookingIngredients from "./CookingIngredients";
import flagSvg from "@/assets/icons/recipe/icon_flag.svg";
import flagActiveSvg from "@/assets/icons/recipe/icon_flag_active.svg";
import CookingStepList from "./CookingStepList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const stepTitle = ["준비물 준비", "조리하기", "간 맞추기", "플레이팅"];

export default function CookingCarousel({ data }) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const handleNextStep = () => {
    if (currentStep !== 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      navigate("/recipe");
    }
  };
  console.log("data: ", data);

  return (
    <>
      <A.CarouselContent>
        <A.ImgContainer src={"http://test.api.weniv.co.kr/asset/img/6/thumbnailImg.jpg"} />

        <A.ContentContainer>
          <A.ContentTitle>{stepTitle[currentStep]}</A.ContentTitle>

          {/* 현재 단계 */}
          <Row $gap={8}>
            {Array.from({ length: 4 }, (_, i) => (
              <A.CarouselDot key={i} $isActive={i == currentStep}>
                {i == 3 && i == currentStep ? (
                  <img src={flagActiveSvg} alt="4" />
                ) : i == 3 ? (
                  <img src={flagSvg} alt="4" />
                ) : (
                  i + 1
                )}
              </A.CarouselDot>
            ))}
          </Row>

          {/* 쿠킹 재료 */}
          {currentStep == 0 && (
            <CookingIngredients
              ingredients={data?.ingredients}
              seasoning={data?.seasoning}
              tool={data?.tool}
            />
          )}
          {/* 조리하기 */}
          {currentStep == 1 && <CookingStepList data={data?.recipeCook} />}
          {currentStep == 2 && <CookingStepList data={data?.recipeSeasoning} />}
          {currentStep == 3 && <CookingStepList data={data?.recipePlating} />}
        </A.ContentContainer>

        {/* 단계 이동 버튼 */}
        <A.GradationWhite>
          {currentStep !== 0 && (
            <A.FloatingButtonPrevious onClick={handlePreviousStep}>이전</A.FloatingButtonPrevious>
          )}
          <A.FloatingButtonNext onClick={handleNextStep}>준비완료! 요리시작</A.FloatingButtonNext>
        </A.GradationWhite>
      </A.CarouselContent>
    </>
  );
}
