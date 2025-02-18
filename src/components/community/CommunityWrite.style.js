import { styled } from "styled-components";

export const SectionContainer = styled.div`
  padding: 18px 20px;
`;
export const SectionText1 = styled.div`
  ${({theme})=>theme.fonts.pre_bold_20};
  margin-bottom:8px;
`;
export const SectionText2 = styled.div`
  color: #A6A6A6;
  ${({theme})=>theme.fonts.pre_medium_14};
`;

export const BorderLine = styled.div`
 height:9px;
 background-color:#EEE;
`;

export const FormContainer = styled.div`
  padding:30px 25px 40px;
`; 
export const FormTitle = styled.input`
  outline:none;
  border:none;
  ${({theme})=>theme.fonts.pre_semibold_20}
  line-height:138%;
  color:#1D1D1D;

  &::placeholder {
    color: #A6A6A6;
  }
`;
export const Line = styled.div`
  background-color:#E6E6E6;
  height:1px;
  margin:20px 0;
`;
export const FormTextArea=styled.textarea`
  border:none;
  outline:none;
  width:100%;
  height:300px;
  color: #1D1D1D;

  ${({theme})=>theme.fonts.pre_medium_16}
  line-height: 138%;
  &::placeholder {
    color: #A6A6A6;
  }
`;
export const FormButton= styled.button`
  
`;

