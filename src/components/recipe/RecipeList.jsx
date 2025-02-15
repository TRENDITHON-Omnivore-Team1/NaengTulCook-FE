import * as A from "./RecipeCard.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeCard from "@/components/recipe/RecipeCard";
import { useEffect, useState } from "react";
import { getRecipes } from "@/apis/recipe/getRecipes";

export default function RecipeList() {
  const [recipeData, setRecipeData] = useState();
  const [errorMessage, setErrorMessage] = useState("");

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
      try {
        const response = await getRecipes();
        console.log(response);
        setRecipeData(response);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <A.SliderContainer>
      <Slider {...settings}>
        <A.SliderContent>
          <RecipeCard />
        </A.SliderContent>
        <A.SliderContent>
          <RecipeCard />
        </A.SliderContent>
      </Slider>
    </A.SliderContainer>
  );
}
