import Topbar from "../components/common/topbar/Topbar";
import RecipeCard from "@/components/recipe/RecipeCard";
import { FloatingButtonContainer } from "@/styles/common/CommonStyleComp";
import filterSvg from "@/assets/icons/icon_filter.svg";

const optionList = ["추천 레시피", "SNS 트렌디 요리", "지역별 인기 요리", "독특한 요리"];

export default function RecipePage() {
  // const useId = localStorage.getItem("userId");
  // console.log("useId: ", useId);

  return (
    <>
      <Topbar optionList={optionList} />
      <RecipeCard />
      <FloatingButtonContainer>
        <img src={filterSvg} alt="필터링" />
      </FloatingButtonContainer>
    </>
  );
}
