import { ColumnCenterCSS } from "@/styles/layouts/Column";
import styled from "styled-components";

export const BackgroundForm = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => (props.$isBlack ? "#1D1D1D" : "#FFFFFF")};
`;
export const InputLabel = styled.p`
  margin: 24px 30px 10px 30px;
  width: calc(100% - 60px);

  color: ${(props) => (props.$isWhite ? "#FFFFFF" : "#1d1d1d")};
  ${({ theme }) => theme.fonts.pre_semibold_15}
`;
export const StyledSignInput = styled.input`
  margin: 0 30px;
  padding: 0 24px;
  width: calc(100% - 60px);
  height: 60px;

  /* display: flex; */

  color: #1d1d1d;
  ${({ theme }) => theme.fonts.pre_bold_14}

  border-radius: 14px;
  border: none;
  background-color: #f0f0f0;
`;
export const ErrorMessage = styled.p`
  margin: 8px 30px 0 34px;
  width: calc(100% - 60px);

  color: ${({ theme }) => theme.colors.error};
  ${({ theme }) => theme.fonts.pre_regular_12};
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;

  ${ColumnCenterCSS}
`;
export const SpanButton = styled.button`
  margin-top: 12px;
  padding: 12px 20px;

  border: none;
  background-color: transparent;

  color: #aaaaaa;
  ${({ theme }) => theme.fonts.pre_bold_18};
`;
