import * as A from "./RecipeCard.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeCard from "@/components/recipe/RecipeCard";
import { useEffect, useState } from "react";
import { getRecipes } from "@/apis/recipe/getRecipes";
import { RecipesRecommend } from "@/dummy/RecipesRecommend"; // 나중에 삭제

export default function RecipeList() {
  const [recipeData, setRecipeData] = useState([]);

  const settings = {
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    // centerPadding: "14px",
    dot: false,
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRecipes();
      // console.log(response); // 로그 나중에 삭제
      setRecipeData(response);
    };

    try {
      fetchData();
    } catch (error) {
      console.log("에러: ", error.message);
      setRecipeData(RecipesRecommend); // 목파일 - 나중에 수정
    }
  }, []);

  return (
    <A.SliderContainer>
      {recipeData.length < 1 && <A.NoneText>냉장고에서 재료를 추가해보세요!</A.NoneText>}
      <Slider {...settings}>
        {recipeData.length > 0 &&
          recipeData.map((item, i) => (
            <A.SliderContent key={i}>
              <RecipeCard {...item} />
            </A.SliderContent>
          ))}
      </Slider>
    </A.SliderContainer>
  );
}
