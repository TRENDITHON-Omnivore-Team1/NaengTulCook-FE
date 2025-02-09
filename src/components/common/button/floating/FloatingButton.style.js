import { styled } from "styled-components";
import { RowCenterCSS } from "@/styles/layouts/Row";

export const ButtonContainer = styled.button`
  position: fixed;
  bottom: 6.3rem;
  right: 24px;
  width: 60px;
  height: 60px;

  ${RowCenterCSS}

  border-radius: 50%;
  background-color: #1d1d1d;
`;
