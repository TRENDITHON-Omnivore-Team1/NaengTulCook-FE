import { styled } from "styled-components";
import { RowCenterCSS } from "@/styles/layouts/Row";
import { ColumnCenterCSS } from "@/styles/layouts/Column";

export const CompContainer = styled.div`
  position: sticky;
  top: 0;

  padding-top: 8px;
  width: 100%;
  max-width: 500px;

  ${RowCenterCSS}

  background-color: #fff;
  color: #1d1d1d;
`;
export const ButtonArea = styled.button`
  position: sticky;
  ${RowCenterCSS}

  padding: 12px 20px;
  ${(props) => props.theme.fonts.gi_bold_22}

  background-color: transparent;
  border: none;
  border-radius: 8px;
`;
export const IconImg = styled.img`
  width: 22px;
  height: 12px;
  margin-left: 8px;
`;

// 드롭다운
export const DropdownContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 500px;
  z-index: 50;

  padding-top: 2rem;
  ${ColumnCenterCSS}

  border-radius: 0px 0px 30px 30px;
  background-color: #fff;
`;
export const TextButton = styled.button`
  padding: 10px;
  width: 100%;

  color: ${({ $isActive }) => ($isActive ? "#1d1d1d" : "#aaaaaa")};
  ${(props) => props.theme.fonts.gi_bold_20}

  border: none;
  border-bottom: 1px solid #f5f5f5;
  background-color: transparent;
`;

export const CheckImg = styled.img`
  margin: 20px 0;
  color: blue;

  fill: red; /* fill 색상 변경 */
  stroke: blue; /* stroke 색상 변경 */

  cursor: pointer;
`;
