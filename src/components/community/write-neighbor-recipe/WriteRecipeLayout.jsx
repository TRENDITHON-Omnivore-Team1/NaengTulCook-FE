import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import * as A from "./WriteRecipeLayout.style";
import Topbar from "@/components/common/topbar/Topbar";
import RecipeStepA from "./RecipeStepA";
import RecipeStepB from "./RecipeStepB";
import RecipeStepC from "./RecipeStepC";
import { api } from "@/apis/api";
import BigButton from "@/components/common/button/BigButton";

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
  const { register, handleSubmit, control, trigger } = useForm({
    defaultValues: {
      hour: 0,
      minute: 0,
      ingredient: [{ name: "", amount: "" }],
      seasoning: [{ name: "", amount: "" }],
      tool: [{ name: "" }],
      recipe: [{ name: "" }],
      file: [],
    },
  });
  const watchFields = useWatch({
    control,
    name: [
      "title",
      "content",
      "category",
      "level",
      "hour",
      "minute",
      "file",
      "ingredient",
      "seasoning",
      "tool",
      "recipe",
    ],
  });
  const title = watchFields[0];
  const content = watchFields[1];
  const category = watchFields[2];
  const level = watchFields[3];
  const hour = watchFields[4];
  const minute = watchFields[5];
  const file = watchFields[6];
  const ingredient = watchFields[7];
  const seasoning = watchFields[8];
  const tool = watchFields[9];
  const recipe = watchFields[10];

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

    const ingredientsArr = data.ingredient.map((item) => `${item.name} ${item.amount}`);
    const blobIngredient = new Blob([JSON.stringify(ingredientsArr)], {
      type: "application/json",
    });
    formData.append("ingredient", blobIngredient);

    const seasoningArr = data.seasoning.map((item) => `${item.name} ${item.amount}`);
    const blobSeasoning = new Blob([JSON.stringify(seasoningArr)], {
      type: "application/json",
    });
    formData.append("seasoning", blobSeasoning);

    const toolArr = data.tool.map((item) => item.name);
    const blobTool = new Blob([JSON.stringify(toolArr)], { type: "application/json" });
    formData.append("tool", blobTool);

    const recipeArr = data.recipe.map((item) => item.name);
    const blobRecipe = new Blob([JSON.stringify(recipeArr)], {
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
    navigate("/community");
  };

  const handleButtonClick = async () => {
    if (currentStep === 0) {
      // 첫번째 스텝에 해당하는 필드들 검증: title, content, category, level, hour, minute, file
      const valid = await trigger([
        "title",
        "content",
        "category",
        "level",
        "hour",
        "minute",
        "file",
      ]);
      if (valid) {
        setCurrentStep((prev) => prev + 1);
      }
    } else if (currentStep === 1) {
      // 두번째 스텝에 해당하는 필드들 검증: ingredient, seasoning, tool
      const valid = await trigger(["ingredient", "seasoning", "tool"]);
      if (valid) {
        setCurrentStep((prev) => prev + 1);
      }
    } else {
      // 세번째 스텝: recipe 입력 검증 후 제출
      const valid = await trigger("recipe");
      if (valid) {
        // handleSubmit returns a function which we immediately invoke
        handleSubmit(onSubmit)();
      }
    }
  };

  return (
    <A.PageWrapper>
      <Topbar pageTitle="레시피 공유" isSubPage={true} />
      {/* 상단 스텝 */}

      {/* 폼 내용 */}
      <A.InputForm onSubmit={handleSubmit(onSubmit)}>
        <A.InputListWrapper>
          {/* <br />
          <br />
          <br />
          <button type="button" onClick={() => setCurrentStep((prev) => prev - 1)}>
            이전
          </button>
          <button type="button" onClick={() => setCurrentStep((prev) => prev + 1)}>
            다음
          </button>
          <button type="submit">제출!!</button> */}
          {currentStep == 0 ? (
            <RecipeStepA
              register={register}
              control={control}
              title={title}
              content={content}
              category={category}
              level={level}
            />
          ) : currentStep == 1 ? (
            <RecipeStepB
              register={register}
              control={control}
              ingredient={ingredient}
              seasoning={seasoning}
              tool={tool}
            />
          ) : (
            <RecipeStepC register={register} control={control} recipe={recipe} />
          )}
        </A.InputListWrapper>

        {/* 버튼 */}
        <A.GradationWhite>
          <BigButton onClickFn={handleButtonClick} type="button" buttonText="다음" />
        </A.GradationWhite>
      </A.InputForm>
    </A.PageWrapper>
  );
}
