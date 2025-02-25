import Topbar from "@/components/common/topbar/Topbar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { FloatingButtonContainer } from "@/styles/common/CommonStyleComp";
import write from "@/assets/community/write.svg";
import { useState } from "react";

const optionList = ["이웃 레시피", "이웃 경험 공유", "Q&A"];
const pathList = ["/community", "/community/experience", "/community/q&a"];

const WritesWrapper = styled.div`
  position: absolute;
  bottom: 4.3rem;
  right: 8px;

  display: flex;
  flex-direction: column;
  gap: 11px;
  ${({ theme }) => theme.fonts.gi_regular_10}
`;

const Write = styled.div`
  background-color: #1d1d1d;
  color: white;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MainWrapper = styled.div`
  height: ${({ $isWritePage }) => ($isWritePage ? "100vh" : "calc(100vh - 63px)")};
  overflow: auto;
`;

export default function CommunityPage() {
  const [isWrites, setIsWrites] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRouteChange = (index) => {
    navigate(pathList[index]);
  };

  const handleGoCommunityWrite = (type) => {
    navigate(`/community/${type}/write`, { state: { type } });
  };

  // 글쓰기 페이지 및 동적 경로 패턴 목록
  const writePaths = [
    "/community/experience/write",
    "/community/q&a/write",
    "/community/write-recipe",
  ];

  const dynamicPathPatterns = [
    /^\/community\/[^/]+\/\d+$/, // community/:type/:id (글 상세)
  ];

  // 현재 경로가 글쓰기 페이지거나 동적 경로에 해당하는지 확인
  const isWritePage =
    writePaths.includes(location.pathname) ||
    dynamicPathPatterns.some((regex) => regex.test(location.pathname));

  return (
    <>
      {!isWritePage && (
        <Topbar optionList={optionList} pathList={pathList} onOptionSelect={handleRouteChange} />
      )}
      <MainWrapper $isWritePage={isWritePage}>
        <Outlet />
      </MainWrapper>

      {!isWritePage && (
        <FloatingButtonContainer onClick={() => setIsWrites(!isWrites)}>
          <img src={write} alt="write" />
          {isWrites && (
            <WritesWrapper>
              <Write onClick={() => handleGoCommunityWrite("q&a")}>Q&A</Write>
              <Write onClick={() => handleGoCommunityWrite("experience")}>
                경험
                <br />
                공유
              </Write>
              <Write onClick={() => navigate("/community/write-recipe")}>
                레시피
                <br />
                공유
              </Write>
            </WritesWrapper>
          )}
        </FloatingButtonContainer>
      )}
    </>
  );
}
