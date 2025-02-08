import Topbar from "../components/common/topbar/Topbar";

const optionList = ["추천 레시피", "SNS 트렌디 요리", "지역별 인기 요리", "독특한 요리"];

export default function RecipePage() {
  return (
    <>
      <Topbar optionList={optionList} />
      <p>RecipePage</p>
    </>
  );
}
