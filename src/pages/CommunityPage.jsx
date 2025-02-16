import Topbar from "@/components/common/topbar/Topbar";
import { Outlet, useNavigate } from "react-router-dom";

const optionList = ["이웃 레시피", "이웃 경험 공유", "Q&A"];
const pathList = ["/community", "/community/experience", "/community/q&a"];

export default function CommunityPage() {
  const navigate = useNavigate();

  const handleRouteChange = (index) => {
    navigate(pathList[index]);
  };

  return (
    <>
      <Topbar 
        optionList={optionList} 
        pathList={pathList}  
        onOptionSelect={handleRouteChange} 
      />
      <Outlet />
    </>
  );
}
