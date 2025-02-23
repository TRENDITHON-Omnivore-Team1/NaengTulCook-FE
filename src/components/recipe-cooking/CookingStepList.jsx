import * as A from "./Cooking.style";

export default function CookingStepList({ data }) {
  const dataList = data.split(",\n").map((step) => step.trim());
  // console.log("dataList: ", dataList); // 나중에 삭제

  return (
    <>
      {dataList.map((text, i) => (
        <A.ContentSubContainer key={i}>
          <A.StepChip>STEP {(i + 1).toString().padStart(2, "0")}</A.StepChip>
          <A.ContentText>{text}</A.ContentText>
        </A.ContentSubContainer>
      ))}
    </>
  );
}
