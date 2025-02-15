import { BackgroundDarkOverlay } from "@/styles/common/CommonStyleComp";
import * as A from "./RecipeFilter.style";
import plusSvg from "@/assets/icons/recipe/icon_plus.svg";
import closeSvg from "@/assets/icons/recipe/icon_close.svg";

const filterOptionList = [
  {
    label: "요리에 걸리는 시간",
    info: "요리할 시간이 얼마나 있나요?",
    isDuplicatePossible: false,
    value: ["10분 이하", "10분~20분", "30분~50분", "한시간 이상"],
  },
  {
    label: "난이도",
    info: "어떤 레벨의 요리를 하시나요?",
    isDuplicatePossible: true,
    value: ["초급", "중급", "고급"],
  },
  {
    label: "요리 맛 선택",
    info: "어떤 맛을 선호하나요?",
    isDuplicatePossible: true,
    value: ["짭짤한", "달달한", "매콤한", "새콤한", "고소한"],
  },
  {
    label: "다이어트 옵션",
    info: "다이어트 중 이신가요?",
    isDuplicatePossible: false,
    value: ["케토", "팔레오", "지중해식", "비건"],
  },
  {
    label: "칼로리 범위",
    info: "목표에 맞는 칼로리 범위를 선택하세요",
    isDuplicatePossible: false,
    value: ["저칼로리", "중간칼로리", "고칼로리"],
  },
];

export default function RecipeFilter({ setIsFiltering }) {
  return (
    <>
      <BackgroundDarkOverlay />
      <A.CompContainer>
        <A.SlideLine />
        <A.FilterTop>
          <A.FilterText>필터</A.FilterText>
          <A.CancelButton onClick={() => setIsFiltering(false)}>취소</A.CancelButton>
        </A.FilterTop>

        <A.BundleList>
          <A.BundleContainer>
            <A.BundleTitle>제외할 재료</A.BundleTitle>
            <A.BuldleInfo>알러지 등으로 인해 못 먹는 재료가 있다면 제외해보세요</A.BuldleInfo>
            <A.ChipList>
              <A.AddChipButton>
                <img src={plusSvg} alt="추가하기" />
              </A.AddChipButton>
              {/* map 추가 */}
              <A.OptionButton $isClicked={true}>
                <span>완두콩</span>
                <img src={closeSvg} alt="삭제하기" />
              </A.OptionButton>
            </A.ChipList>
          </A.BundleContainer>

          {filterOptionList.map((filterItem, i) => (
            <A.BundleContainer key={i}>
              <A.BundleTitle>{filterItem.label}</A.BundleTitle>
              <A.BuldleInfo>{filterItem.info}</A.BuldleInfo>
              <A.ChipList>
                {filterItem.value.map((optionItem, i) => (
                  <A.OptionButton key={i}>{optionItem}</A.OptionButton>
                ))}
              </A.ChipList>
            </A.BundleContainer>
          ))}
        </A.BundleList>
      </A.CompContainer>
    </>
  );
}
