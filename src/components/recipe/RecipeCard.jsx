import * as A from "./RecipeCard.style";
import fireSvg from "@/assets/icons/recipe/icon_fire.svg";
import clockSvg from "@/assets/icons/recipe/icon_clock.svg";

export default function RecipeCard({
  forward_name,
  name,
  essential_absence = [],
  optional_absence = [],
  level,
  time,
}) {
  return (
    <>
      <A.CompContainer>
        <A.ImgContainer>
          <A.ThumbnailImg src="http://test.api.weniv.co.kr/asset/img/7/thumbnailImg.jpg" alt="" />
          <A.OverlayGradation />
        </A.ImgContainer>
        <A.CardSubtitle>{forward_name}</A.CardSubtitle>
        <A.CardTitle>{name}</A.CardTitle>
        <A.ChipList>
          {essential_absence.length > 0 &&
            essential_absence.map((item, i) => (
              <A.ChipItem key={i} $stateColor="red">
                {item}
              </A.ChipItem>
            ))}
          {optional_absence.length > 0 &&
            optional_absence.map((item, i) => (
              <A.ChipItem key={i} $stateColor="blue">
                {item}
              </A.ChipItem>
            ))}
        </A.ChipList>
        {/* 수정 예정 */}
        <A.InfoChip>
          <A.InfoContent>
            <img src={fireSvg} alt="레벨" />
            {level == 1 ? <p>초급</p> : level == 2 ? <p>중급</p> : <p>고급</p>}
          </A.InfoContent>
          <A.InfoContent>
            <img src={clockSvg} alt="시간" />
            <p>{time}분 이내</p>
          </A.InfoContent>
        </A.InfoChip>
        <A.RecipeButton>요리하기</A.RecipeButton>
      </A.CompContainer>
    </>
  );
}
