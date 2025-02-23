import * as A from "./Cooking.style";

export default function CookingStepList({ data }) {
  console.log("data: ", data); // 나중에 삭제

  return (
    <>
      {/* 맵 함수 추가 */}
      <A.ContentSubContainer>
        <A.StepChip>STEP 01</A.StepChip>
        <A.ContentText>팔팔 끓는 물에 소면을 3분 30초 삶아주세요.</A.ContentText>
      </A.ContentSubContainer>
      <A.ContentSubContainer>
        <A.StepChip>STEP 02</A.StepChip>
        <A.ContentText>팔팔 끓는 물에 소면을 3분 30초 삶아주세요.</A.ContentText>
      </A.ContentSubContainer>
    </>
  );
}
