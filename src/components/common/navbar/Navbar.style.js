import { styled } from "styled-components";

export const CompContainer = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 500px;
  height: 5.4rem;

  border: none;
  border-radius: 30px 30px 0px 0px;
  background-color: #fff;
  box-shadow: 0px -4px 28px 6px rgba(0, 0, 0, 0.07);

  display: flex;
  justify-content: space-evenly;
`;
export const NavButton = styled.button`
  padding: 6px 12px;
  height: 76px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: none;
  border-radius: 8px;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f6f6f6;
  }
`;
export const IconImg = styled.img`
  color: #aaa;
`;
export const NavText = styled.p`
  color: ${({ $isActive }) => ($isActive ? "#000" : "#aaaaaa")};
  ${(props) => props.theme.fonts.gi_regular_13}
`;
