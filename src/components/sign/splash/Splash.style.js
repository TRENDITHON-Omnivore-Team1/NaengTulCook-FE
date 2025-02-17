import { styled } from "styled-components";

export const CompContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
`;
export const CompBg = styled.img`
  display: block;

  width: 100%;
  height: 100vh;

  object-fit: cover;
`;
export const ContentContainer = styled.div`
  position: relative;
  top: calc(-100vh);
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  background: linear-gradient(180deg, rgba(29, 29, 29, 0) 44.25%, #1d1d1d 100%);
`;
export const LogoTitle = styled.div`
  margin-bottom: 10px;
  width: 100%;
  padding: 0 40px;

  display: flex;
  align-items: center;
  gap: 5px;

  color: #ffffff;
  ${({ theme }) => theme.fonts.gi_regular_20};
`;
export const IntroduceText = styled.p`
  margin-bottom: 45px;
  width: 100%;
  padding: 0 40px;

  color: #ffffff;
  ${({ theme }) => theme.fonts.pre_bold_26};
  line-height: 35px;
`;
export const SignUpButton = styled.button`
  margin: 12px 0 52px 0;
  padding: 12px;

  border: none;
  background-color: transparent;

  color: #aaaaaa;
  ${({ theme }) => theme.fonts.pre_bold_18};
`;
