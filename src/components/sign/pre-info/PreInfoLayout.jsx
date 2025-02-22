import InfoStepA from "./InfoStepA";

export default function PreInfoLayout() {
  // localStorage.setItem("isFirstLogin", true); // 튜토리얼 화면용(정보 추가하는 페이지에)

  return (
    <>
      <p>PreInfoLayout</p>
      <InfoStepA />
      <button>다음</button>
    </>
  );
}
