import styled, { css } from "styled-components";

export const ColumnCenterCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ColumnCSS = css`
  display: flex;
  flex-direction: column;
  align-items: ${({ $verticalAlign }) =>
    $verticalAlign === "center"
      ? "center"
      : $verticalAlign === "top"
      ? "flex-start"
      : $verticalAlign === "bottom"
      ? "flex-end"
      : "flex-start"};

  justify-content: ${({ $horizonAlign }) =>
    $horizonAlign === "center"
      ? "center"
      : $horizonAlign === "left"
      ? "flex-start"
      : $horizonAlign === "right"
      ? "flex-end"
      : $horizonAlign === "distribute"
      ? "space-between"
      : $horizonAlign === "between"
      ? "space-between"
      : "flex-start"};

  gap: ${({ $gap }) => ($gap ? `${$gap}px` : "0")};
`;

const Column = styled.div`
  ${ColumnCSS}
`;

export default Column;
