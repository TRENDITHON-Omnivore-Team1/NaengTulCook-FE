import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InfoStepA from "./InfoStepA";
import InfoStepB from "./InfoStepB";
import InfoStepC from "./InfoStepC";
import InfoStepD from "./InfoStepD";
import { putPreInfoNickname } from "@/apis/sign/pre-info/putPreInfoNickname";

const requiredFieldsByStep = {
  0: ["nickname"],
  1: ["age"],
  2: ["family"],
  3: ["skill"],
  4: ["favorite"],
  5: ["ingredient"],
};

export default function PreInfoLayout() {
  // 페이지 이동
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  // react-hook-form 설정
  const { register, handleSubmit, control } = useForm();

  const currentRequiredFields = requiredFieldsByStep[currentStep] || ["nickname"];
  const currentValues = useWatch({ control, name: currentRequiredFields });

  const [isButtonActive, setIsButtonActive] = useState(false);
  useEffect(() => {
    if (currentValues) {
      if (currentStep === 0) {
        // input type이 text인 경우
        const isAllFilled = currentValues.every((value) => value && value.trim() !== "");
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
          const response = await putPreInfoNickname({
            params: { nickname: data.nickname },
          });
          console.log(response); // 나중에 삭제
          break;
        }
        case 1: {
          const response = await putPreInfoNickname({
            params: { nickname: data.nickname },
          });
          console.log(response); // 나중에 삭제
          break;
        }
        case 2: {
          const response = await putPreInfoNickname({
            params: { nickname: data.nickname },
          });
          console.log(response); // 나중에 삭제
          break;
        }
        case 3: {
          const response = await putPreInfoNickname({
            params: { nickname: data.nickname },
          });
          console.log(response); // 나중에 삭제
          break;
        }
        case 4: {
          const response = await putPreInfoNickname({
            params: { nickname: data.nickname },
          });
          console.log(response); // 나중에 삭제
          break;
        }
        default: {
          const response = await putPreInfoNickname({
            params: { nickname: data.nickname },
          });
          console.log(response); // 나중에 삭제
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(onSubmit)();
  };

  // localStorage.setItem("isFirstLogin", true); // 튜토리얼 화면용(정보 추가하는 페이지에)
  return (
    <>
      <h1>{currentStep + 1}</h1>

      <form onSubmit={handleFormSubmit}>
        {currentStep == 0 ? (
          <InfoStepA register={register} />
        ) : currentStep == 1 ? (
          <InfoStepB register={register} step={1} />
        ) : currentStep == 2 ? (
          <InfoStepB register={register} step={2} />
        ) : currentStep == 3 ? (
          <InfoStepB register={register} step={3} />
        ) : currentStep == 4 ? (
          <InfoStepC register={register} />
        ) : (
          <InfoStepD register={register} />
        )}

        <button onClick={handleSubmit(onSubmit)} type="button">
          {currentStep == 5 ? "완료" : "다음"}
        </button>
        <p>{isButtonActive ? "굳" : "에러"}</p>
      </form>
    </>
  );
}
