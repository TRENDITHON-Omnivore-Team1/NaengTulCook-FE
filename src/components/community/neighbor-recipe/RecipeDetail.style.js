import { RowCenterCSS } from "@/styles/layouts/Row";
import { styled } from "styled-components";

export const PageLayout = styled.div`
  position: relative;
  overflow: scroll;
  width: 100%;
  height: 100vh;
  padding-bottom: 160px;
`;

// 썸네일 이미지
export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;
export const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
export const OverlayGradation = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  z-index: 10;
  background: linear-gradient(180deg, rgba(231, 29, 29, 0) 72%, #fff 100%);
`;

// 기본 정보
export const CardTitle = styled.div`
  padding: 28px 24px 8px 24px;
  ${({ theme }) => theme.fonts.pre_extrabold_30}
  word-break: keep-all; /* 단어 단위로 줄바꿈 */
  overflow-wrap: break-word; /* 너무 길면 강제 줄바꿈 */
`;
export const SubInfoWrapper = styled.div`
  padding: 0 24px 16px 24px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ChipList = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  white-space: nowrap;
  color: #1d1d1d;
  ${({ theme }) => theme.fonts.pre_medium_13}
`;
export const ChipItem = styled.div`
  padding: 4px 11px;
  border-radius: 50px;
  background: #1d1d1d;

  color: #ffffff;
`;
export const InfoChip = styled.div`
  ${RowCenterCSS}
  gap: 6px;

  color: #8b8a8a;
`;
export const ScrapButton = styled.button`
  margin-left: 8px;
  padding: 4px 4px;
  ${RowCenterCSS}
  gap: 6px;

  border: none;
  background-color: transparent;

  white-space: nowrap;
  color: ${(props) => (props.$isActive ? "#FC3200" : "#8b8a8a")};
  ${({ theme }) => theme.fonts.pre_semibold_13}
`;

// 프로필 정보
export const ProfileContainer = styled.div`
  padding: 20px 24px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 6px;

  border-top: 1px solid #f5f5f5;
  border-bottom: 9px solid #eeeeee;
`;
export const SubProfileInfo = styled.div`
  display: flex;
  gap: 8px;

  color: #888888;
  ${({ theme }) => theme.fonts.pre_medium_13}
`;
// 공용 텍스트
export const BoldText = styled.p`
  ${({ theme }) => theme.fonts.pre_bold_15}
`;

// 레시피 재료
export const IngreWrapper = styled.div`
  padding: 20px 24px 0 24px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;
export const IngreContainer = styled.div`
  margin-top: 28px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 14px;

  ${({ theme }) => theme.fonts.pre_medium_14}
`;
export const IngreChipList = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 10px;

  white-space: nowrap;
`;
export const IngreChip = styled.div`
  padding: 8px 10px;

  color: #5f5f5f;
  ${({ theme }) => theme.fonts.pre_medium_13}

  border-radius: 5px;
  background: #eeeeee;
`;
