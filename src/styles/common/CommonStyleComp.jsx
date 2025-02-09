import { styled } from "styled-components";
import { RowCenterCSS } from "@/styles/layouts/Row";

// 모달 오픈 시 배경 어둡게 오버레이
export const BackgroundDarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 40;

  background-color: rgba(0, 0, 0, 0.66);
`;
// 플로팅 버튼(레시피 페이지, 이웃의 장 페이지)
export const FloatingButtonContainer = styled.button`
  position: fixed;
  bottom: 6.3rem;
  right: 24px;
  width: 60px;
  height: 60px;

  ${RowCenterCSS}

  border-radius: 50%;
  background-color: #1d1d1d;
`;
