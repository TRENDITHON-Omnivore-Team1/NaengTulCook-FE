import Topbar from "@/components/common/topbar/Topbar";

const optionList = ["이웃 레시피", "이웃 경험 공유", "Q&A"];

export default function CommunityPage() {
  return (
    <>
      <Topbar optionList={optionList} />

      <p>CommunityPage</p>
    </>
  );
}
