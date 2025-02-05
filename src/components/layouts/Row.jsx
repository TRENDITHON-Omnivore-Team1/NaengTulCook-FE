import styled, { css } from "styled-components";

const RowCSS = (props) => css`
  display: flex;
  align-items: ${(() => {
    if (props?.verticalAlign) {
      switch (props.verticalAlign) {
        case "center":
          return "center";
        case "top":
          return "flex-start";
        case "bottom":
          return "flex-end";
        default:
          return "flex-start";
      }
    } else {
      return "flex-start";
    }
  })()};
  justify-content: ${(() => {
    if (props?.horizonAlign) {
      switch (props.horizonAlign) {
        case "center":
          return "center";
        case "left":
          return "flex-start";
        case "right":
          return "flex-end";
        case "distribute":
          return "space-between";
        default:
          return "flex-start";
      }
    } else {
      return "flex-start";
    }
  })()};
  gap: ${(() => {
    if (props?.gap) {
      return `${props.gap}px`;
    } else {
      return 0;
    }
  })()};
`;

const Row = styled.div`
  ${(props) => RowCSS(props)}
`;

export default Row;
