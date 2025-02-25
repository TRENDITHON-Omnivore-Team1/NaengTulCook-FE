import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as A from "./WriteRecipeLayout.style";
import Topbar from "@/components/common/topbar/Topbar";
import RecipeStepA from "./RecipeStepA";
import RecipeStepB from "./RecipeStepB";
import RecipeStepC from "./RecipeStepC";

const formNameList = [
  "title",
  "content",
  "category",
  "level",
  "time",
  "file",
  "ingredient",
  "seasoning",
  "tool",
  "recipe",
];

export default function WriteRecipeLayout() {
  // 페이지(step) abc 이동
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  // react-hook-form 설정
  const { register, handleSubmit, control } = useForm();

  return (
    <>
      <Topbar pageTitle="레시피 공유" isSubPage={true} />
      {/* 상단 스텝 */}

      {/* 폼 내용 */}
      <form>
        {currentStep == 0 ? <RecipeStepA /> : currentStep == 1 ? <RecipeStepB /> : <RecipeStepC />}

        {/* 버튼 */}
        <br />
        <br />
        <br />
        <button type="button" onClick={() => setCurrentStep((prev) => prev - 1)}>
          이전
        </button>
        <button type="button" onClick={() => setCurrentStep((prev) => prev + 1)}>
          다음
        </button>
      </form>
    </>
  );
}
