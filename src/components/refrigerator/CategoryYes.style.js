import { styled } from "styled-components";

export const CateWrapper = styled.div`
  margin-bottom: ${(props) => (props.$category === '식재료' ? '40px' : '0')};
  
  .slick-dots li{
    margin:0;
  }
`;

export const CateHeader = styled.div`
  display: flex;
  justify-content:space-between;
  margin-bottom:8px;
`;
export const CateName = styled.p`
  ${({theme})=>theme.fonts.pre_bold_20}
`;
export const DeleteText = styled.p`
  color: #AAA;
  ${({theme})=>theme.fonts.pre_medium_14}

  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;

  cursor:pointer;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-column-gap: 42px;
  padding: 4px;
  height: 314px;
  /* grid-template-rows: auto; */
  align-content: start; 
`;


export const ItemContainer =styled.div`

`;

export const ItemImageContainer =styled.div`
  border-radius: 12px;
  box-shadow: 0px 0px 8.6px 0px rgba(0, 0, 0, 0.15);
  width: 100%;
  /* height:60px; */
  aspect-ratio: 1;
  position:relative;
`;
export const ItemImage = styled.img`
  width: 100%;      
  height: 100%;      
  object-fit: cover; 
  border-radius:12px;
  
  ${({ $isDeleteMode }) => $isDeleteMode && "cursor: pointer;"}
`;
export const RedOverlay =styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  aspect-ratio:1;
  border-radius:12px;
  background: rgba(255, 81, 81, 0.28);
`;

export const ItemText = styled.p`
  color: #AAA;
  ${({theme})=>theme.fonts.pre_medium_13};
  
  margin:5px 0;
  text-align:center;
`;
export const PlusImg = styled.img`
  width:100%;
  aspect-ratio:1;
  cursor:pointer;
`
export const ButtonContainer =styled.div`
  display:flex;
  align-items:center;
  gap: 30px;
`;
export const CancelButton =styled.div`
  ${({theme})=>theme.fonts.pre_semibold_14}
  color: #D9D9D9;
  cursor:pointer;
`;
export const CompleteButton =styled.div`
  ${({theme})=>theme.fonts.pre_semibold_14}
  color: #1D1D1D;
  cursor:pointer;
`;
export const DeleteImg =styled.img`
  position:absolute;
  top:-4px;
  right:-4px;
`;