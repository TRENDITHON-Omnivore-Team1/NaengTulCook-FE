import { RowCenterCSS } from "@/styles/layouts/Row";
import styled, { css } from "styled-components";

// 공용!!
export const CheckBoxInput = styled.input`
  display: none;
`;
// Step A
export const TextInput = styled.input`
  margin: 0 30px;
  padding: 0 24px;
  width: calc(100% - 60px);
  height: 52px;

  ${RowCenterCSS}

  text-align: center;
  color: #1d1d1d;
  ${({ theme }) => theme.fonts.pre_bold_14}

  border-radius: 14px;
  border: none;
  background-color: #f0f0f0;
`;
export const TextLength = styled.p`
  margin: 8px 34px 0 34px;
  width: calc(100% - 68px);

  text-align: right;
  color: #aaaaaa;
  ${({ theme }) => theme.fonts.pre_bold_10}
`;

// Step B
export const CheckBoxContainer = styled.div`
  width: 100%;
  padding: 0 30px;

  display: flex;
  flex-wrap: wrap;
  gap: 14px 8px;
`;
export const CheckBoxButton = styled.label`
  width: ${(props) => (props.$isLong ? "100%" : "calc((100% - 8px) / 2)")};
  height: 44px;

  ${RowCenterCSS}

  color: ${(props) => (props.$isActive ? "#1D1D1D" : "#DCDCDC")};
  ${({ theme }) => theme.fonts.pre_bold_18}

  border-radius: 14px;
  border: 1px solid ${(props) => (props.$isActive ? "#1D1D1D" : "#DCDCDC")};
  background-color: #fff;

  cursor: pointer;
`;

// C,D 공용 - input 버튼들
const InputItemImgContainer = css`
  position: relative;
  display: block;

  width: 88px;
  height: 88px;

  border: none;
  border-radius: 100%;
  overflow: hidden;
`;
export const InputItemImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const CheckOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.55);
`;
export const CheckIcon = styled.img`
  width: 100%;
  height: 100%;
`;

// Step C
export const ItemsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 532px;
  overflow-x: scroll;
`;
export const InputName = styled.p`
  position: absolute;
  bottom: 16%;

  width: 100%;
  color: #fff;
  text-align: center;
  ${({ theme }) => theme.fonts.pre_bold_16}
`;
export const ContainerVarious = styled.label`
  ${InputItemImgContainer}

  position: absolute;
  top: ${(props) => props.$top - 24}px;
  left: ${(props) => props.$left + 123}px;

  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
`;

// Step D - 레이아웃
export const ListWrapper = styled.div`
  width: 100%;
  padding: 0 16px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 20px;
`;
export const InputItemContainer = styled.label`
  padding: 0 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`;
export const Container88 = styled.button`
  ${InputItemImgContainer}
`;
