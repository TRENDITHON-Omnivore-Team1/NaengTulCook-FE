import Row from "@/styles/layouts/Row";
import * as A from "./Cooking.style";
import { RecipeCooking } from "@/dummy/RecipeCooking"; // 나중에 삭제

export default function CookingIngredients() {
  // console.log(RecipeCooking); // 나중에 삭제

  return (
    <>
      <A.ContentSubContainer>
        <A.ContentTitle>재료</A.ContentTitle>
        {/* 수정 예정 */}
        {RecipeCooking.ingredients.map((item, i) => (
          <Row key={i} $verticalAlign="center" $horizonAlign="between">
            <Row $verticalAlign="center" $gap={12}>
              <A.IngredientsImg src="http://test.api.weniv.co.kr/asset/img/6/thumbnailImg.jpg" />
              <A.IngredientsName>{item.name}</A.IngredientsName>
            </Row>
            <A.IngredientsAmount>1줌</A.IngredientsAmount>
          </Row>
        ))}
      </A.ContentSubContainer>

      <A.ContentSubContainer>
        <A.ContentTitle>양념</A.ContentTitle>
        {/* 수정 예정 */}
        {RecipeCooking.seasoning.map((item, i) => (
          <Row key={i} $verticalAlign="center" $horizonAlign="between">
            <Row $verticalAlign="center" $gap={12}>
              {/* {item.picture} */}
              <A.IngredientsImg src="http://test.api.weniv.co.kr/asset/img/6/thumbnailImg.jpg" />
              <A.IngredientsName>{item}</A.IngredientsName>
            </Row>
            <A.IngredientsAmount>1줌</A.IngredientsAmount>
          </Row>
        ))}
      </A.ContentSubContainer>

      <A.ContentSubContainer>
        <A.ContentTitle>도구</A.ContentTitle>
        {/* 수정 예정 */}
        {RecipeCooking.tool[0].map((item, i) => (
          <Row key={i} $verticalAlign="center" $horizonAlign="between">
            <Row $verticalAlign="center" $gap={12}>
              <A.IngredientsImg src="http://test.api.weniv.co.kr/asset/img/6/thumbnailImg.jpg" />
              <A.IngredientsName>{item}</A.IngredientsName>
            </Row>
            <A.IngredientsAmount>1줌</A.IngredientsAmount>
          </Row>
        ))}
      </A.ContentSubContainer>
    </>
  );
}
