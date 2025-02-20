import {styled} from 'styled-components'

export const SelectContainer = styled.div`
  border-radius: 28px;
  border: 1px solid #D9D9D9;
  padding:4px 11px;
  display:flex;  
  align-items:center;
  gap:3px;
  width:75px;
  cursor:pointer;
`;
export const SelectText =styled.div`
  ${({theme})=>theme.fonts.pre_medium_14};
`;
export const ArrowDown = styled.img`

`;
export const ModalContainer = styled.div`
  border-radius: 30px 30px 0 0;
  background: #FFF;
  padding:23px 31px 39px;
  position:fixed;
  bottom:0;
  width:400px;

  @media (max-width: 400px) {
    width: 100vw; 
  }
`;
export const AlignText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; 
  margin-bottom:40px;
  text-align:center;
`;

export const FlexBox = styled.div`
  display:flex;
  justify-content:space-between;
  cursor:pointer;
`;
export const FlexBoxText = styled.div`
  color: ${({ isSelected }) => (isSelected ? '#000' : '#BCBCBC')}; 
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; 
`;
export const FlexBoxImg = styled.img`

`;




export const MainWrapper=styled.div`
  padding:25px;
  position:relative;
`;

export const BoxContainer = styled.div`
  padding:13px 0 17px;
  border-bottom:1px solid #E6E6E6;
`;
export const Nickname=styled.div`
  color: #888;
  ${({theme})=>theme.fonts.pre_medium_11};
  line-height: 24px;
`;
export const Title =styled.div`
  line-height: 20px;
  color: #000;
  ${({theme})=>theme.fonts.pre_semibold_15};
`;
export const Content = styled.div`
  color: #888;
  line-height: 24px;
  ${({theme})=>theme.fonts.pre_medium_13};

  white-space: nowrap;         
  overflow: hidden;            
  text-overflow: ellipsis;
`;
export const EtcContainer= styled.div`
  display:flex;
  align-items:center;
`;
export const StarNum=styled.div`
  color: #1D1D1D;
  ${({theme})=>theme.fonts.pre_medium_11};
  line-height: 24px;
  margin-left: 5px;
  margin-right:9px;
`;
export const  CommentText = styled.div`
  color: #1D1D1D;
  ${({theme})=>theme.fonts.pre_medium_11};
  line-height: 24px;
`;