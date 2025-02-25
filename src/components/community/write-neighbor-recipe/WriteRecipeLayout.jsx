import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as A from "./WriteRecipeLayout.style";
import Topbar from "@/components/common/topbar/Topbar";
import RecipeStepA from "./RecipeStepA";
import RecipeStepB from "./RecipeStepB";
import RecipeStepC from "./RecipeStepC";
import { api } from "@/apis/api";

const formNameList = [
  "title",
  "content",
  "category",
  "level",
  // "time",
  "hour",
  "minute", //
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
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      hour: 0,
      minute: 0,
    },
  });

  // api 요청 --------------------
  const postApi = async (data) => {
    const userId = localStorage.getItem("userId");
    const formData = new FormData();

    // 데이터 추가
    const blobUserId = new Blob([JSON.stringify(userId)], { type: "application/json" });
    formData.append("userId", blobUserId);
    const blobTitle = new Blob([JSON.stringify(data.title)], { type: "application/json" });
    formData.append("title", blobTitle);
    const blobContent = new Blob([JSON.stringify(data.content)], { type: "application/json" });
    formData.append("content", blobContent);
    const blobCategory = new Blob([JSON.stringify(data.category)], { type: "application/json" });
    formData.append("category", blobCategory);
    const blobLevel = new Blob([JSON.stringify(data.level)], { type: "application/json" });
    formData.append("level", blobLevel);
    const blobTime = new Blob([JSON.stringify(`${data.hour}시간 ${data.minute}분`)], {
      type: "application/json",
    });
    formData.append("time", blobTime);
    const blobIngredient = new Blob([JSON.stringify(["김치 200g", "밥 2공기"])], {
      type: "application/json",
    });
    formData.append("ingredient", blobIngredient);
    const blobSeasoning = new Blob([JSON.stringify(["간장 20g", "고추장 10g"])], {
      type: "application/json",
    });
    formData.append("seasoning", blobSeasoning);
    const blobTool = new Blob([JSON.stringify(["프라이팬", "주걱"])], { type: "application/json" });
    formData.append("tool", blobTool);
    const blobRecipe = new Blob([JSON.stringify(["김치를 볶는다.", "햄을 추가한다.", "완성~~"])], {
      type: "application/json",
    });
    formData.append("recipe", blobRecipe);
    formData.append("file", data.file[0]);

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

  // 제출 및 api 요청
  const onSubmit = async (data) => {
    console.log("data: ", data);
    if (data.file && data.file.length > 0) {
      console.log("data.file[0]: ", data.file[0]);
      // formData.append("file", data.file[0]);
    }
    await postApi(data);
    alert("요청 성공");
  };

  return (
    <>
      <Topbar pageTitle="레시피 공유" isSubPage={true} />
      {/* 상단 스텝 */}

      {/* 폼 내용 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep == 0 ? (
          <RecipeStepA register={register} />
        ) : currentStep == 1 ? (
          <RecipeStepB register={register} />
        ) : (
          <RecipeStepC register={register} />
        )}

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
        <button type="submit">제출!!</button>
      </form>
    </>
  );
}
