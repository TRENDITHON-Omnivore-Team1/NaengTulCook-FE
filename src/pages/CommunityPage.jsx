import Topbar from "@/components/common/topbar/Topbar";
import { Outlet, useNavigate,useLocation } from "react-router-dom";
import {styled} from 'styled-components'
import { FloatingButtonContainer } from "@/styles/common/CommonStyleComp";
import write from '@/assets/community/write.svg'
import { useState } from "react";

const optionList = ["이웃 레시피", "이웃 경험 공유", "Q&A"];
const pathList = ["/community", "/community/experience", "/community/q&a"];

// const CommunityWrapper = styled.div`
//   padding:0 30px;
// `;

const WritesWrapper = styled.div`
  position: absolute;
  bottom: 4.3rem;
  right: 8px;

  display:flex;
  flex-direction: column;
  gap:11px;
  ${({theme})=>theme.fonts.gi_regular_10}
`;

const Write = styled.div`
  background-color:#1D1D1D;
  color: white;
  border-radius:50%;

  width:45px;
  height:45px;
  display: flex;
  justify-content: center; 
  align-items: center; 

  cursor:pointer;
`


export default function CommunityPage() {
  const [isWrites, setIsWrites] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRouteChange = (index) => {
    navigate(pathList[index]);
  };
  const handleGoCommunityWrite = (type)=>{
    navigate(`/community/${type}/write`,{ state: { type: type } })
  }

  const writePaths = [
    "/community/experience/write",
    "/community/q&a/write",
    "/community/post", 
  ];

  // 현재 경로가 동적 경로 패턴을 포함하는지 체크
  const isWritePage = writePaths.some((path) => {
    const postRegex = /^\/community\/post\/\d+$/; 
 
    return (
      location.pathname.match(postRegex) || 
      writePaths.includes(location.pathname)
    );
  });


  return (
    <>

      {!isWritePage && (
        <Topbar optionList={optionList} pathList={pathList} onOptionSelect={handleRouteChange} />
      )}

      <Outlet />
      {!isWritePage && (
        <FloatingButtonContainer onClick={() => setIsWrites(!isWrites)}>
          <img src={write} alt="write" />
          {isWrites && (
            <WritesWrapper>
              <Write onClick={() => handleGoCommunityWrite('q&a')}>Q&A</Write>
              <Write onClick={() => handleGoCommunityWrite("experience")}>경험<br/>공유</Write>
              <Write >레시피<br/>공유</Write>
            </WritesWrapper>
          )}
        </FloatingButtonContainer>
      )}
    </>
  );
}
