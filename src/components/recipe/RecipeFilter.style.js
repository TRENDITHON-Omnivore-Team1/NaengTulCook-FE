import { RowCenterCSS } from "@/styles/layouts/Row";
import { css, styled } from "styled-components";

export const CompContainer = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 84vh;
  padding: 20px 20px 40px 20px;

  border-radius: 36px 36px 0 0;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 50;
`;
export const SlideLine = styled.div`
  width: 134px;
  height: 5px;

  text-align: center;
  background-color: #dedede;
`;
export const FilterTop = styled.div`
  margin: 24px 0 36px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const FilterText = styled.h1`
  ${({ theme }) => theme.fonts.gi_bold_22}
`;
export const CancelButton = styled.button`
  padding: 4px 6px;
  color: #aaaaaa;
  ${({ theme }) => theme.fonts.pre_semibold_13}

  border: none;
  background-color: transparent;
`;
export const BundleList = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`;
export const BundleContainer = styled.div`
  margin-bottom: 28px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const BundleTitle = styled.h4`
  ${({ theme }) => theme.fonts.pre_semibold_20}
`;
export const BuldleInfo = styled.p`
  margin-bottom: 8px;

  color: #888888;
  ${({ theme }) => theme.fonts.pre_medium_14}
`;
export const ChipList = styled.ul`
  display: flex;
  gap: 6px;

  overflow-x: scroll;
  white-space: nowrap;
`;
const ChipCSS = css`
  display: inline-block;
  height: 36px;

  ${RowCenterCSS}
  gap:6px;

  border-radius: 14px;
  background-color: #fff;
`;
export const AddChipButton = styled.button`
  ${ChipCSS}
  width: 88px;

  border: 1px dashed #aaaaaa;
`;
export const OptionButton = styled.button`
  ${ChipCSS}
  padding: 0 14px;
  /* min-width: 76px; */

  color: ${(props) => (props.$isClicked == true ? "#1D1D1D" : "#888888")};
  ${(props) =>
    props.$isClicked == true ? props.theme.fonts.pre_semibold_13 : props.theme.fonts.pre_medium_13}

  border: 1px solid ${(props) => (props.$isClicked == true ? "#1D1D1D" : "#aaaaaa")};
`;
