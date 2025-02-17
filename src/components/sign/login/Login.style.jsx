import styled from "styled-components";

export const InputContainer = styled.div`
  margin: calc((100vh - 560px) / 2) 0 0 0;
  width: 100%;
`;
export const LogoTitle = styled.h1`
  margin: 0 30px 24px 30px;
  width: calc(100% - 60px);

  display: flex;
  align-items: center;
  gap: 12px;

  ${({ theme }) => theme.fonts.gi_regular_44}
`;
export const IntroduceText = styled.h4`
  margin: 0 30px 40px 30px;
  width: calc(100% - 60px);

  ${({ theme }) => theme.fonts.gi_regular_20}
`;
