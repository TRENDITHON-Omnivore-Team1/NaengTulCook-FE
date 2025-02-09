import * as A from "./RecipeCard.style";
import Row from "@/styles/layouts/Row";

export default function RecipeCard() {
  return (
    <>
      <A.CompContainer>
        <A.ImgContainer>
          <A.ThumbnailImg src="http://test.api.weniv.co.kr/asset/img/7/thumbnailImg.jpg" alt="" />
        </A.ImgContainer>
        {/* 디자인 논의 필요 */}
        <A.CardTitle>누가비벼도 맛있는 비빔국수</A.CardTitle>
        <Row gap={5}>
          {/* 수정 예정 */}
          <A.ChipItem>국수</A.ChipItem>
          <A.ChipItem>양파</A.ChipItem>
          <A.ChipItem>오이</A.ChipItem>
          <A.ChipItem>깻잎</A.ChipItem>
          <A.ChipItem>마늘</A.ChipItem>
        </Row>
        {/* 수정 예정 */}
        <A.InfoChip>초급 10분이내</A.InfoChip>
        <A.RecipeButton>요리하기</A.RecipeButton>
      </A.CompContainer>
    </>
  );
}
