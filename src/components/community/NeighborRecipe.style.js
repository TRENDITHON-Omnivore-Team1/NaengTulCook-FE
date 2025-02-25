import { styled } from "styled-components";

export const FlexContainer = styled.div`
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 86px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const TitleText = styled.div`
  ${({ theme }) => theme.fonts.pre_semibold_20};
  line-height: 24px;
`;
export const TextFlex = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
`;
export const SubText = styled.div`
  color: #888;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const SubText2 = styled.div`
  color: #888;
  ${({ theme }) => theme.fonts.pre_medium_11};
  line-height: 24px;
  cursor: pointer;
  text-decoration-line: underline;
  /* text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font; */
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  cursor: pointer;
`;
export const CardImage = styled.img`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: 12px;
  object-fit: cover;
`;
export const CardText = styled.div`
  font-family: Pretendard;
  ${({ theme }) => theme.fonts.pre_medium_14};
  line-height: 24px;
  text-align: center;
`;

export const ColFlexContainer = styled.div`
  padding-right: 25px;
`;
export const ColFlexItem = styled.div`
  padding: 11px 0 14px;
  display: flex;
  align-items: flex-end;
  gap: 16px;
  /* height:100px; */
  border-bottom: #e6e6e6 solid 1px;

  cursor: pointer;
`;
export const RoundImg = styled.img`
  width: 73px;
  height: 73px;
  border-radius: 73px;
`;
export const NickText = styled.div`
  color: #888;
  ${({ theme }) => theme.fonts.pre_medium_11};
  line-height: 24px;
`;
export const RecipeTitle = styled.div`
  ${({ theme }) => theme.fonts.pre_medium_14};
  line-height: 20px;
`;
export const StarText = styled.span`
  ${({ theme }) => theme.fonts.pre_medium_11};
  line-height: 24px;
  margin-left: 4px;
`;
