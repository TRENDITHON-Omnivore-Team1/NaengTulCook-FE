import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 0;
  width: 100%;
`;
export const Topbar = styled.div`
  width: 100%;
  /* margin-bottom: 30px; */
  height: 64px;

  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`;
export const IconButton = styled.img`
  padding: 12px;
  margin-left: 16px;

  place-self: center;
  cursor: pointer;
`;
export const PageTitle = styled.h4`
  place-self: center;

  color: #fff;
  ${({ theme }) => theme.fonts.pre_medium_18}
`;

export const LoginSpan = styled.span`
  margin-left: 24px;
  color: #ffffff;
`;
