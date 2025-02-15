import {styled} from 'styled-components'

export const AddIngreWrapper =styled.div`
  padding:70px 30px 0;
`;
export const HeaderContainer = styled.div`
  display:flex;
  align-items:center;
  gap:24px;
  /* margin-bottom: 23px; */
`;
export const PreviousArrowImg =styled.img`
  cursor: pointer;
`;
export const SearchInputContainer =styled.div`
  height:40px;
  flex-grow:1;
  /* width:40px; */
  background-color: #F1F2F6;
  border-radius:12px;
  padding:12px 16px;

  display:flex;
  align-items:center;
  gap:12px;
`;
export const ManifierImgContainer=styled.div`
  position:relative;
  line-height:0;
`;
export const ManifierCircleImg =styled.img`
`;
export const ManifierStickImg =styled.img`
  position:absolute;
  bottom:-1.5px;
  right:-1.5px;
`;
export const SearchInput = styled.input`
  background-color:transparent;
  border:none;
  outline: none;
`;
export const CompleteButton = styled.div`
  ${({theme})=>theme.fonts.pre_semibold_16};
  cursor:pointer;
`;

export const TypeArrContainer = styled.div`
  display:flex;
  margin-top: 23px;
  margin-bottom: 30px;
  gap:30px;
  width:100%;
  
  overflow-x:auto;
  scrollbar-width: none;
`;
export const TypeText = styled.div`
  ${({theme}) => theme.fonts.pre_semibold_14}
  color: ${({ $isActive }) => ($isActive ? '#1D1D1D' : '#D9D9D9')};
  white-space:  nowrap;
  cursor:pointer;
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:14px;
`;
export const IngredientContainer = styled.div`
  /* line-height:0; */
  display:flex;
  /* justify-content:space-between; */
  align-items:center;
  cursor: pointer;
`;
export const ImgContainer = styled.div`
  /* margin-right:auto; */
`;
export const IngredientImg = styled.img`
  width:60px;
  height:60px;
  vertical-align:middle; //이미지 밑에 여백제거
  border-radius:50%;
`;
export const IngredientName = styled.p`
  ${({theme})=>theme.fonts.pre_semibold_18};
  margin-left:23px;
`;
export const PlusImg = styled.img`
  margin-left:auto;
`;