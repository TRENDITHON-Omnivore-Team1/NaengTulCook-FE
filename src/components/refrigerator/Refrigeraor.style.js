import { styled } from "styled-components";

export const RefriWrapper = styled.div`
  padding: 30px 30px 100px;
`;

export const Pre_bold_20 = styled.p`
 ${({ theme }) => theme.fonts.pre_bold_20};
`;
export const Pre_semibold_16 = styled.p`
  ${({theme}) => theme.fonts.pre_semibold_16}
`;
export const PlusImg = styled.img`
  display: block;
  margin: 120px auto 20px;
  cursor: pointer;
`;
