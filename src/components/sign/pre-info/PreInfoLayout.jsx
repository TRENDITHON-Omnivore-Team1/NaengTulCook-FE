import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as A from "./PreInfoLayout.style";
import * as S from "@/components/sign/Sign.style";
import InfoStepA from "./InfoStepA";
import InfoStepB from "./InfoStepB";
import InfoStepC from "./InfoStepC";
import InfoStepD from "./InfoStepD";
import { putPreInfoNickname } from "@/apis/sign/pre-info/putPreInfoNickname";
import { putPreInfoSkill } from "@/apis/sign/pre-info/putPreInfoSkill";
import { putPreInfoAge } from "@/apis/sign/pre-info/putPreInfoAge";
import { putPreInfoFamily } from "@/apis/sign/pre-info/putPreInfoFamily";
import { putPreInfoFavorite } from "@/apis/sign/pre-info/putPreInfoFavorite";
import { putPreInfoIngredient } from "@/apis/sign/pre-info/putPreInfoIngredient";
import BigButton from "@/components/common/button/BigButton";

const requiredFieldsByStep = {
  0: ["nickname"],
  1: ["age"],
  2: ["family"],
  3: ["skill"],
  4: ["favorite"],
  5: ["ingredient"],
};
const stepTitle = [
  "뭐라고 불러드릴까요?",
  "나이대를 알려주세요",
  "가구유형은 어떻게 되시나요?",
  "요리실력은 어느정도 인가요?",
  "취향을 선택해주세요",
  "항상 가지고 있는 재료를 알려주세요",
];
const ageMapping = {
  "10대": 10,
  "20대": 20,
  "30대": 30,
  "40대": 40,
  "50대": 50,
};
const skillMapping = {
  "완전 처음": 0,
  "라면 끓이기 정도는 할 수 있어요": 1,
  "레시피 보면 잘 따라해요": 2,
  "요리하는 것이 익숙해요": 3,
};

export default function PreInfoLayout() {
  // 페이지 이동
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  // react-hook-form 설정
  const { register, handleSubmit, control } = useForm();

  // 버튼 시각적 활성화...
  const currentRequiredFields = requiredFieldsByStep[currentStep] || ["nickname"];
  const currentValues = useWatch({ control, name: currentRequiredFields });
  const nickname = useWatch({ control, name: "nickname" });

  const [isButtonActive, setIsButtonActive] = useState(false);
  useEffect(() => {
    if (currentValues) {
      if (currentStep === 0) {
        // input type이 text인 경우
        const isAllFilled = currentValues.every(
          (value) => value && value.trim() !== "" && nickname?.length <= 10
        );
        setIsButtonActive(isAllFilled);
      } else {
        // input type이 checkbox인 경우
        const isAtLeastOneSelected = currentValues.length > 0;
        setIsButtonActive(isAtLeastOneSelected);
      }
    }
  }, [currentValues]);
  useEffect(() => {
    setIsButtonActive(false);
  }, [currentStep]);

  const onSubmit = async (data) => {
    try {
      switch (currentStep) {
        case 0: {
          await putPreInfoNickname({
            params: { nickname: data.nickname },
          });
          break;
        }
        case 1: {
          const ageRange = ageMapping[data.age] || 60;
          await putPreInfoAge({
            params: {
              ageRange,
            },
          });
          break;
        }
        case 2: {
          await putPreInfoFamily({
            params: { family: data.family },
          });
          break;
        }
        case 3: {
          const skill = skillMapping[data.skill] || 4;
          await putPreInfoSkill({
            params: { skill },
          });
          break;
        }
        case 4: {
          await putPreInfoFavorite({
            body: data.favorite,
          });
          break;
        }
        default: {
          await putPreInfoIngredient({
            body: data.ingredient,
          });
          break;
        }
      }

      if (currentStep == 5) {
        navigate("/refrigerator");
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    } catch (error) {
      console.log("에러 메시지: ", error.message);
    }
  };

  // localStorage.setItem("isFirstLogin", true); // 튜토리얼 화면용(정보 추가하는 페이지에)
  return (
    <A.PageLayout>
      {/* 상단 */}
      <A.StepBarList>
        {[...Array(6)].map((_, i) => (
          <A.StepBarBox key={i} $isBlack={i <= currentStep} />
        ))}
      </A.StepBarList>
      <A.StepTitle>{stepTitle[currentStep]}</A.StepTitle>

      {/* 폼 내용 */}
      <A.InfoForm onSubmit={handleSubmit(onSubmit)}>
        {currentStep == 0 ? (
          <InfoStepA register={register} control={control} nickname={nickname} />
        ) : currentStep == 1 ? (
          <InfoStepB register={register} control={control} step={1} />
        ) : currentStep == 2 ? (
          <InfoStepB register={register} control={control} step={2} />
        ) : currentStep == 3 ? (
          <InfoStepB register={register} control={control} step={3} />
        ) : currentStep == 4 ? (
          <InfoStepC register={register} control={control} />
        ) : (
          <InfoStepD register={register} control={control} />
        )}

        {/* 버튼 */}
        <S.ButtonContainer>
          <BigButton
            type="submit"
            buttonText={currentStep == 5 ? "완료" : "다음"}
            $isWhiteButton={!isButtonActive}
          />
        </S.ButtonContainer>
      </A.InfoForm>
    </A.PageLayout>
  );
}
