import styled, { css } from "styled-components";

export const RowCenterCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RowCSS = css`
  display: flex;
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

const Row = styled.div`
  ${RowCSS}
`;

export default Row;
