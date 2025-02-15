import Topbar from "../components/common/topbar/Topbar";
import { FloatingButtonContainer } from "@/styles/common/CommonStyleComp";
import filterSvg from "@/assets/icons/icon_filter.svg";
import RecipeList from "@/components/recipe/RecipeList";

const optionList = ["추천 레시피", "SNS 트렌디 요리", "지역별 인기 요리", "독특한 요리"];

export default function RecipePage() {
  return (
    <>
      <Topbar optionList={optionList} />
      <RecipeList />
      <FloatingButtonContainer>
        <img src={filterSvg} alt="필터링" />
      </FloatingButtonContainer>
    </>
  );
}
