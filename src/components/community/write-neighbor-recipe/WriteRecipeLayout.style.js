import styled from "styled-components";

// 공용!!
// export const CheckBoxInput = styled.input`
//   display: none;
// `;
export const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;
export const InputForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;
export const InputListWrapper = styled.div`
  padding: 0 20px 180px 20px;
  width: 100%;
  height: 100vh;

  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;
export const GradationWhite = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom: 40px;

  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: end;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) -10%, #fff 80%);
`;
