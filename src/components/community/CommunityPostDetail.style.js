import {styled} from 'styled-components'

export const ContentContainer= styled.div`
  padding:0 24px 17px;
`;

export const Title=styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 100% */
  margin-bottom:17px;
`;

export const NickName=styled.div`
  color: #888;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 160% */
  margin-bottom:4px;
`;
export const Time = styled.div`
  color: #A6A6A6;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 138%; 
  letter-spacing: -0.42px;
  margin-bottom:17px;
`;
export const Content=styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 160% */

  margin-bottom:51px;
`;
export const SmallLine=styled.div`
  width:100%;
  height:1px;
  background: #E6E6E6;
`;

export const FlexContainer = styled.div`
  display:flex;
  margin-top:16px;
  align-items:center;
`;
export const Text = styled.div`
  color: #A6A6A6;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 138%; /* 19.32px */
  letter-spacing: -0.42px;
`;

export const BigLine = styled.div`
  background: #EEE;
  height:9px;
`;

export const CommentWrapper = styled.div`
  padding:27px 25px 116px;
`;
export const CommentContainer = styled.div`
  padding:12px 0 20px;
`;
export const CommentNickName = styled.div`
  color: #888;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 218.182% */
`;
export const CommentContent = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;


export const InputWrapper = styled.div`
  padding:13px 14px 13px 23px;
  position:fixed;
  bottom:0;
  width:400px;
  height:116px;
  background: #FFF;
  box-shadow: 0px 1px 36.8px 0px rgba(0, 0, 0, 0.25);
  @media (max-width: 400px) {
    width: 100vw; 
  }
`;
export  const InputContainer = styled.div`
  display:flex;
  align-items:flex-start;
  height:100%;
`;
export const TextArea = styled.textarea`
  flex-grow:1;
  height:100%;
  outline:none;
  border:none;


  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 138%; 
  letter-spacing: -0.48px;
`;
export const Button = styled.button`
  padding:6px 16px;
  border-radius: 14px;
  border: 1px solid #1D1D1D;
  background: #FFF;
  color: #1D1D1D;

  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;