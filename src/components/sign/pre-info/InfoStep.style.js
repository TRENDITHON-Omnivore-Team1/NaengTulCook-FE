import { RowCenterCSS } from "@/styles/layouts/Row";
import styled from "styled-components";

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
export const CheckBoxInput = styled.input`
  display: none;
`;

// Step C
// Step D
