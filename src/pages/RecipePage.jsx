import Topbar from "../components/common/topbar/Topbar";
import { FloatingButtonContainer } from "@/styles/common/CommonStyleComp";
import filterSvg from "@/assets/icons/recipe/icon_filter.svg";
import RecipeList from "@/components/recipe/RecipeList";
import { useState } from "react";
import RecipeFilter from "@/components/recipe/RecipeFilter";

const optionList = ["추천 레시피", "SNS 트렌디 요리", "지역별 인기 요리", "독특한 요리"];

export default function RecipePage() {
  const [isFiltering, setIsFiltering] = useState(false);

  const toggleFilter = () => {
    setIsFiltering(true);
  };

  return (
    <>
      {isFiltering && <RecipeFilter setIsFiltering={setIsFiltering} />}

      <Topbar optionList={optionList} />
      <RecipeList />
      <FloatingButtonContainer onClick={toggleFilter}>
        <img src={filterSvg} alt="필터링" />
      </FloatingButtonContainer>
    </>
  );
}
