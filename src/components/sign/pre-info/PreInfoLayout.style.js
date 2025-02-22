import styled from "styled-components";

export const PageLayout = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 진행 바
export const StepBarList = styled.div`
  padding: 48px 36px 50px 36px;
  width: 100%;
  height: 4px;

  display: flex;
  justify-content: space-between;
  gap: 16px;
`;
export const StepBarBox = styled.div`
  width: 100%;
  height: 4px;

  border-radius: 4px;
  background-color: ${(props) => (props.$isBlack ? "#1d1d1d" : "#bbbbbb")};
`;

// step 타이틀 텍스트
export const StepTitle = styled.h1`
  padding-bottom: 24px;
  ${({ theme }) => theme.fonts.pre_bold_20}
`;

// form
export const InfoForm = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
