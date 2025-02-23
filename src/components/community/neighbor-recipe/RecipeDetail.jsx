import * as A from "./RecipeDetail.style";
import fireSvg from "@/assets/icons/recipe/icon_fire.svg";
import clockSvg from "@/assets/icons/recipe/icon_clock.svg";
import starSvg from "@/assets/icons/recipe/icon_star.svg";
import starActiveSvg from "@/assets/icons/recipe/icon_star_active.svg";
import { useState } from "react";

export default function RecipeDetail() {
  const [isScrap, setIsScrap] = useState(false);

  return (
    <A.PageLayout>
      {/* 썸네일 */}
      <A.ImgContainer>
        <A.ThumbnailImg src="http://test.api.weniv.co.kr/asset/img/7/thumbnailImg.jpg" alt="" />
        <A.OverlayGradation />
      </A.ImgContainer>

      {/* 기본 정보 */}
      <A.CardTitle>누가비벼도 맛있는 비빔국수 레시피</A.CardTitle>

      <A.SubInfoWrapper>
        <A.ChipList>
          <A.ChipItem $stateColor="red">한식</A.ChipItem>

          <A.InfoChip>
            <img src={fireSvg} alt="레벨" />
            <span>초급</span>
            {/* {level == 1 ? <p>초급</p> : level == 2 ? <p>중급</p> : <p>고급</p>} */}
          </A.InfoChip>

          <A.InfoChip>
            <img src={clockSvg} alt="시간" />
            <span>10분 이내</span>
          </A.InfoChip>
        </A.ChipList>

        <A.ScrapButton onClick={() => setIsScrap((prev) => !prev)} $isActive={isScrap}>
          <img src={isScrap ? starActiveSvg : starSvg} alt="스크랩" />
          <span>스크랩</span>
        </A.ScrapButton>
      </A.SubInfoWrapper>

      {/* 프로필 정보 */}
      <A.ProfileContainer>
        <A.BoldText>요리천재</A.BoldText>
        <A.SubProfileInfo>
          <p>20대</p>
          <p>1인 가구</p>
        </A.SubProfileInfo>
      </A.ProfileContainer>

      {/* 레시피 재료 */}
      <A.IngreWrapper>
        <A.BoldText>레시피 재료</A.BoldText>

        {/* map 추가 */}
        <A.IngreContainer>
          <p>양념</p>
          <A.IngreChipList>
            <A.IngreChip>대파 2/1 개</A.IngreChip>
            <A.IngreChip>대파 2/1 개</A.IngreChip>
          </A.IngreChipList>
        </A.IngreContainer>
        <A.IngreContainer>
          <p>양념</p>
          <A.IngreChipList>
            <A.IngreChip>대파 2/1 개</A.IngreChip>
            <A.IngreChip>대파 2/1 개</A.IngreChip>
          </A.IngreChipList>
        </A.IngreContainer>
        <A.IngreContainer>
          <p>양념</p>
          <A.IngreChipList>
            <A.IngreChip>대파 2/1 개</A.IngreChip>
            <A.IngreChip>대파 2/1 개</A.IngreChip>
          </A.IngreChipList>
        </A.IngreContainer>
      </A.IngreWrapper>
    </A.PageLayout>
  );
}
