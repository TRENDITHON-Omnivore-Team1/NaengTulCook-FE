import { styled } from "styled-components";

export const CompContainer = styled.div`
  width: 78%;
  margin: 20px; // 나중에 삭제
  max-width: 500px;

  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 8px 32px 3px rgba(0, 0, 0, 0.17);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImgContainer = styled.div`
  width: 100%;
  height: 38vh;
  overflow: hidden;
`;
export const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
export const CardTitle = styled.div`
  margin-top: 20px;
  ${(props) => props.theme.fonts.pre_extrabold_30}
`;
export const ChipItem = styled.div`
  margin-top: 24px;
  padding: 4px 11px;
  border-radius: 50vh;
  background: rgba(3, 142, 255, 0.09);

  color: ${(props) => props.theme.colors.state_blue};
  ${(props) => props.theme.fonts.pre_medium_13}
`;
export const InfoChip = styled.div`
  margin-top: 18px;

  border-radius: 50vh;
  background-color: #f3f2f2;
`;
export const RecipeButton = styled.button`
  margin: 20px 0 24px 0;
  padding: 10px;
  width: calc(100% - 64px);

  color: #fff;
  ${(props) => props.theme.fonts.pre_semibold_16}

  border-radius: 50vh;
  background: #1d1d1d;
`;
