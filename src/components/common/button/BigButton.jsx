import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0 30px;
  width: calc(100% - 60px);
  max-width: 336px;
  height: 60px;

  color: ${(props) => (props.$isWhiteButton == true ? "#000" : "#fff")};
  ${({ theme }) => theme.fonts.pre_bold_18}

  border-radius: 30px;
  border: ${(props) => (props.$isWhiteButton == true ? "1px solid #1D1D1D" : "none")};
  background-color: ${(props) => (props.$isWhiteButton == true ? "#fff" : "#1D1D1D")};
`;

export default function BigButton({
  type = "button",
  onClickFn,
  buttonText = "",
  $isWhiteButton = false,
}) {
  return (
    <StyledButton type={type} onClick={onClickFn} $isWhiteButton={$isWhiteButton}>
      {buttonText}
    </StyledButton>
  );
}
