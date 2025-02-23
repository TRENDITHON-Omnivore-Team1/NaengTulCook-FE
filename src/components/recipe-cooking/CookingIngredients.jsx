import Row from "@/styles/layouts/Row";
import * as A from "./Cooking.style";
import defaultSvg from "@/assets/default-img/default_recipe_cook.svg";

export default function CookingIngredients({ ingredients, seasoning, tool }) {
  console.log("ingredients: ", ingredients, "seasoning: ", seasoning, "tool: ", tool); // 나중에 삭제

  return (
    <>
      <A.ContentSubContainer>
        <A.ContentTitle>재료</A.ContentTitle>
        {ingredients?.map((item, i) => (
          <Row key={i} $verticalAlign="center" $horizonAlign="between">
            <Row $verticalAlign="center" $gap={12}>
              {item?.picture ? (
                <A.IngredientsImg src={item?.picture} />
              ) : (
                <A.IngredientsImg src={defaultSvg} />
              )}

              <A.IngredientsName>{item?.name}</A.IngredientsName>
            </Row>
            {/* <A.IngredientsAmount>1줌</A.IngredientsAmount> */}
          </Row>
        ))}
      </A.ContentSubContainer>

      <A.ContentSubContainer>
        <A.ContentTitle>양념</A.ContentTitle>
        {seasoning?.map((item, i) => (
          <Row key={i} $verticalAlign="center" $horizonAlign="between">
            <Row $verticalAlign="center" $gap={12}>
              <A.IngredientsImg src={defaultSvg} />
              <A.IngredientsName>{item}</A.IngredientsName>
            </Row>
          </Row>
        ))}
      </A.ContentSubContainer>

      <A.ContentSubContainer>
        <A.ContentTitle>도구</A.ContentTitle>
        {/* 수정 예정 */}
        {tool[0].map((item, i) => (
          <Row key={i} $verticalAlign="center" $horizonAlign="between">
            <Row $verticalAlign="center" $gap={12}>
              <A.IngredientsImg src={defaultSvg} />
              <A.IngredientsName>{item}</A.IngredientsName>
            </Row>
          </Row>
        ))}
      </A.ContentSubContainer>
    </>
  );
}
