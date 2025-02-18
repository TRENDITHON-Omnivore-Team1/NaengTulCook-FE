import { RowCenterCSS } from "@/styles/layouts/Row";
import { styled } from "styled-components";

export const CarouselContent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */
`;
export const ImgContainer = styled.img`
  display: block;
  width: 100%;
  height: 256px;

  object-fit: cover;
`;
// 다음 플로팅 버튼
export const GradationWhite = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 128px;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) -10%, #fff 90%);
`;
export const FloatingButton = styled.button`
  position: absolute;
  bottom: 48px;
  right: 24px;

  width: 160px;
  height: 40px;

  ${RowCenterCSS}

  color: #fff;
  ${({ theme }) => theme.fonts.gi_regular_15}

  border-radius: 22px;
  background-color: #1d1d1d;
`;
// 캐러셀 박스
export const ContentContainer = styled.div`
  position: relative;
  top: -20px;

  width: 100%;
  height: calc(100vh - 256px);
  padding: 20px 24px 128px 24px;

  overflow-x: hidden;
  overflow-y: scroll;

  border-radius: 20px 20px 0 0;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
// 캐러셀 내부
export const ContentTitle = styled.h1`
  margin-bottom: 8px;
  ${({ theme }) => theme.fonts.ws_semibold_20}
`;
export const CarouselDot = styled.button`
  width: 19px;
  height: 19px;

  ${RowCenterCSS}

  color: ${(props) => (props.$isActive == true ? "#FFFFFF" : "#1D1D1D")};
  ${({ theme }) => theme.fonts.pre_regular_12}

  border: none;
  border-radius: 50%;
  background-color: ${(props) => (props.$isActive == true ? "#1D1D1D" : "#E9E9E9")};
`;

// 준비 페이지
export const ContentSubContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const IngredientsImg = styled.img`
  display: block;

  width: 50px;
  height: 50px;
  border-radius: 50%;

  object-fit: cover;
`;
export const IngredientsName = styled.p`
  ${({ theme }) => theme.fonts.pre_medium_16}
`;
export const IngredientsAmount = styled.p`
  ${({ theme }) => theme.fonts.pre_semibold_16}
`;

// 조리하기 페이지
export const StepChip = styled.div`
  padding: 4px 0;
  width: 78px;

  ${RowCenterCSS}

  color: #fff;
  ${({ theme }) => theme.fonts.gi_regular_13}

  border-radius: 14px;
  background-color: #1d1d1d;
`;
export const ContentText = styled.p`
  margin: -4px 0 0 4px;
  ${({ theme }) => theme.fonts.pre_medium_16}
`;
