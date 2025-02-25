import { ColumnCenterCSS } from "@/styles/layouts/Column";
import { RowCenterCSS } from "@/styles/layouts/Row";
import styled, { css } from "styled-components";

// 공용!!
export const NoneInput = styled.input`
  display: none;
`;
//
export const InputSetTitle = styled.h1`
  padding-top: 20px;
  ${({ theme }) => theme.fonts.pre_bold_20}
`;
export const InputTitle = styled.p`
  padding-top: 24px;
  ${({ theme }) => theme.fonts.pre_medium_16}
`;
// 공용
const InputStyle = css`
  margin-top: 10px;
  padding: 9px 20px;
  height: 36px;

  color: #1d1d1d;
  ${({ theme }) => theme.fonts.pre_semibold_16}

  /* border: 1px solid #aaaaaa; */
  border: ${(props) => (props.$isSelected ? "1px solid #aaaaaa" : "1px dashed  #aaaaaa")};
  border-radius: 14px;
`;
// 텍스트
export const TextInput = styled.input`
  ${InputStyle}
  width: 100%;
`;
// 드롭다운
export const InputDropdownContainer = styled.div`
  ${InputStyle}
  ${RowCenterCSS}
  position: relative;
  width: 100%;

  padding: 0;
`;
export const InputDropdownButton = styled.button`
  ${InputStyle}
  ${RowCenterCSS}
  margin: 0;
  padding: 8px 20px;
  gap: 8px;
  width: 100%;

  border: none;
  background-color: transparent;

  color: ${(props) => (props.$isSelected ? "#1D1D1D" : "#AAAAAA")};
`;

export const InputDropdownList = styled.div`
  ${InputStyle}
  padding: 0;
  position: absolute;
  top: 36px;
  width: 100%;
  height: 362px;

  display: flex;
  flex-direction: column;

  border: 1px solid #aaaaaa;

  /* border: none; */
  background-color: #fff;
`;
export const InputDropdownLabel = styled.label`
  ${InputStyle}
  ${RowCenterCSS}
  width: 100%;
  margin: 0;

  border: none;

  text-align: center;

  display: inline-block;
  cursor: pointer;
  &&:hover {
    background-color: #eeeeee !important;
  }
`;
// 레시피 난이도 버튼
export const RadioList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const RadioLabel = styled.label`
  ${InputStyle}
  ${RowCenterCSS}
  width: calc((100% - 12px) / 3);

  cursor: pointer;
  &&:hover {
    background-color: #eeeeee !important;
  }
`;
// 조리 시간
export const NumInputList = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const NumInput = styled.input`
  ${InputStyle}
  ${RowCenterCSS}
  width: 108px;
  border: 1px solid #aaaaaa;
`;
export const TextSpan = styled.span`
  margin-top: 10px;
  ${({ theme }) => theme.fonts.pre_medium_16}
`;
// 사진
export const SubInfoText = styled.p`
  color: #888888;
  ${({ theme }) => theme.fonts.pre_medium_13}
`;
export const ImageLabel = styled.label`
  margin-top: 20px;
  width: 76px;
  height: 76px;

  cursor: pointer;
`;
export const ImagePreview = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
`;
// step2 재료
export const IngreWrapper = styled.div`
  ${ColumnCenterCSS}
  justify-content: start;
  margin: 12px 0 34px 0;
`;
export const IngreTextInputList = styled.div`
  ${RowCenterCSS}
  justify-content: space-between;
  width: 100%;
  gap: 14px;
  margin: 12px 0;
`;
export const IngreTextInput = styled.input`
  ${InputStyle}
  ${RowCenterCSS}
  text-align: center;
  margin: 0;
  width: calc((100% - 64px) / 2);
  height: 42px;
  border: 1px solid #aaaaaa;
`;
export const IngreButtonImg = styled.img`
  width: 40px;
  height: 40px;

  cursor: pointer;
`;

// 조리방법
export const RecipeTextInput = styled.input`
  ${InputStyle}
  ${RowCenterCSS}
  text-align: center;
  margin: 0;
  width: calc(100% - 52px);
  height: 42px;
  border: 1px solid #aaaaaa;
`;
