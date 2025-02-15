import * as A from "./RecipeCard.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeCard from "@/components/recipe/RecipeCard";

export default function RecipeList() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    dot: false,
  };

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
