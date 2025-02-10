import { styled } from "styled-components";
// import slide from '../../assets/refrigerator/slide.svg'


export const CateWrapper = styled.div`
  margin-bottom: ${(props) => (props.category === '식재료' ? '40px' : '0')};
  
  .slick-dots li{
    margin:0;
}
`;

export const CateHeader = styled.div`
  display: flex;
  justify-content:space-between;
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
`;
export const ItemContainer =styled.div`

`;

export const ItemImageContainer =styled.div`
  border-radius: 12px;
  box-shadow: 0px 0px 8.6px 0px rgba(0, 0, 0, 0.15);
  width: 100%;
  /* height:60px; */
  aspect-ratio: 1;
`;
export const ItemImage = styled.img`
  width: 100%;      
  height: 100%;      
  object-fit: cover; 
  border-radius:12px;
`;
export const ItemText = styled.p`
  color: #AAA;
  ${({theme})=>theme.fonts.pre_medium_13};
  
  margin:5px 0;
  text-align:center;
`;