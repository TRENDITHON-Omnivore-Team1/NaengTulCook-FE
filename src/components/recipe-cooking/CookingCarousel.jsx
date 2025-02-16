import Row from "@/styles/layouts/Row";
import * as A from "./Cooking.style";
import CookingIngredients from "./CookingIngredients";
import flagSvg from "@/assets/icons/recipe/icon_flag.svg";
import flagActiveSvg from "@/assets/icons/recipe/icon_flag_active.svg";

export default function CookingCarousel() {
  return (
    <>
      <A.CarouselContent>
        <A.ImgContainer src={"http://test.api.weniv.co.kr/asset/img/6/thumbnailImg.jpg"} />

        <A.ContentContainer>
          <A.ContentTitle>준비물 준비</A.ContentTitle>

          <Row $gap={8}>
            <A.CarouselDot $isActive={true}>
              <img src={flagActiveSvg} alt="준비" />
            </A.CarouselDot>
            <A.CarouselDot>1</A.CarouselDot>
            <A.CarouselDot>2</A.CarouselDot>
            <A.CarouselDot>3</A.CarouselDot>
          </Row>

          <CookingIngredients />
        </A.ContentContainer>
      </A.CarouselContent>
    </>
  );
}
